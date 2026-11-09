/* Siteo – motion layer (GSAP + ScrollTrigger + SplitText + Lenis)
   Scroll-driven animations. Everything here is decoration: the page works without it.
   Turned off for prefers-reduced-motion and for the "עצירת אנימציות" accessibility option. */
(() => {
  const d = document.documentElement;
  if (!window.gsap || !window.ScrollTrigger) { d.classList.remove('intro-on'); return; }
  gsap.registerPlugin(ScrollTrigger);
  const hasSplit = !!window.SplitText;
  if (hasSplit) gsap.registerPlugin(SplitText);
  ScrollTrigger.config({ ignoreMobileResize: true });

  const reduceMQ = matchMedia('(prefers-reduced-motion: reduce)');
  const still = () => reduceMQ.matches || d.classList.contains('a11y-still');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const hero = $('#hero'), gl = $('#gl'), hud = $('.hb-hud');
  let ctx = null, lenis = null, enabled = false;
  const pendingTitles = new Map();

  /* ---------- build progress (3D hero + HUD) ---------- */
  const hudPct = hud && $('.hb-pct b', hud), hudFill = hud && $('.hb-fill', hud);
  const hudLabel = hud && $('.hb-label-t', hud), hudSteps = hud ? $$('.hb-steps li', hud) : [];
  let lastPct = -1, lastPhase = -1, lastState = '';
  function setBuild(p) {
    window.__siteoBuild = p;
    window.dispatchEvent(new CustomEvent('siteo:build', { detail: p }));
    if (!hud) return;
    const pct = Math.round(p * 100);
    if (pct !== lastPct) { hudPct.textContent = pct; lastPct = pct; }
    hudFill.style.transform = 'scaleX(' + p.toFixed(4) + ')';
    const ph = p < 0.34 ? 0 : p < 0.8 ? 1 : 2;
    if (ph !== lastPhase) {
      hudSteps.forEach((li, i) => { li.classList.toggle('on', i === ph); li.classList.toggle('done', i < ph); });
      lastPhase = ph;
    }
    const state = p > 0.985 ? 'live' : p > 0.02 ? 'build' : 'idle';
    if (state !== lastState) {
      hud.classList.toggle('is-live', state === 'live');
      hud.classList.toggle('is-moving', state !== 'idle');
      hudLabel.textContent = state === 'live' ? 'האתר באוויר' : state === 'build' ? 'בונים את האתר' : 'גללו כדי לבנות';
      lastState = state;
    }
  }
  function placeHud() {
    if (!hud || !gl) return;
    if (innerWidth <= 760) hud.style.setProperty('--hud-top', (gl.offsetTop + gl.offsetHeight - hud.offsetHeight - 6) + 'px');
    else hud.style.removeProperty('--hud-top');
  }

  /* ---------- headings: lines rise out of a mask ---------- */
  function armTitle(el) {
    if (!hasSplit) return;
    el.classList.remove('rv');
    const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'sl' });
    const tw = gsap.from(split.lines, {
      yPercent: 112, duration: 1.05, ease: 'expo.out', stagger: 0.09,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      onComplete() { split.revert(); pendingTitles.delete(el); }
    });
    pendingTitles.set(el, { split, tw });
  }
  function rearmTitles() {
    [...pendingTitles.entries()].forEach(([el, v]) => {
      if (v.tw.scrollTrigger) v.tw.scrollTrigger.kill();
      v.tw.kill(); v.split.revert(); pendingTitles.delete(el);
      armTitle(el);
    });
    ScrollTrigger.refresh();
  }

  /* ---------- smooth scroll (desktop only; touch keeps native scrolling) ---------- */
  function startLenis() {
    if (!finePointer || !window.Lenis) return;
    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true });
    window.__siteoLenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(lenisRaf);
    gsap.ticker.lagSmoothing(0);
  }
  function lenisRaf(t) { if (lenis) lenis.raf(t * 1000); }
  document.addEventListener('click', e => {
    if (!lenis || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.classList.contains('skip')) return;
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = id === '#top' ? 0 : document.querySelector(id);
    if (target === null) return;
    e.preventDefault();
    // measure from the real scroll position (Lenis may be a frame behind after a scrollbar drag / keyboard scroll)
    const y = target === 0 ? 0 : target.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(d).scrollPaddingTop) || 0);
    lenis.scrollTo(Math.max(0, y), {
      duration: 1.3, easing: t => 1 - Math.pow(1 - t, 4),
      onComplete: () => {
        if (target && target.focus) {
          if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      }
    });
  });

  /* ---------- magnetic buttons ---------- */
  function magnet(el) {
    el.classList.add('mag');
    const move = e => {
      const r = el.getBoundingClientRect();
      gsap.to(el, { '--mx': ((e.clientX - r.left - r.width / 2) * 0.22) + 'px', '--my': ((e.clientY - r.top - r.height / 2) * 0.32) + 'px', duration: 0.45, ease: 'power3.out', overwrite: 'auto' });
    };
    const leave = () => gsap.to(el, { '--mx': '0px', '--my': '0px', duration: 0.9, ease: 'elastic.out(1,0.45)', overwrite: 'auto' });
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); el.classList.remove('mag'); el.style.removeProperty('--mx'); el.style.removeProperty('--my'); };
  }

  /* ---------- intro (first visit in a session) ---------- */
  function heroEnter() {
    const tl = gsap.timeline();
    const items = $$('.hero3d .status, .hero3d .hero-lead, .hero3d .hero-ctas, .hero3d .promise-row, .hero3d .tools, .hb-hud');
    if (hasSplit) {
      const split = SplitText.create('#hero-title', { type: 'lines', mask: 'lines', linesClass: 'sl' });
      tl.from(split.lines, { yPercent: 115, duration: 1.15, ease: 'expo.out', stagger: 0.1, onComplete: () => split.revert() }, 0);
    } else {
      tl.from('#hero-title', { y: 30, opacity: 0, duration: 1, ease: 'expo.out' }, 0);
    }
    tl.from(items, { y: 26, opacity: 0, duration: 0.95, ease: 'expo.out', stagger: 0.07, clearProps: 'transform,opacity' }, 0.18);
    return tl;
  }
  function revealed() {
    if (window.__siteoRevealed) return;
    window.__siteoRevealed = true;
    window.dispatchEvent(new Event('siteo:reveal'));
  }
  function runIntro() {
    const intro = $('.intro');
    if (!intro || !d.classList.contains('intro-on')) { revealed(); return; }
    window.__introStarted = true;
    try { sessionStorage.setItem('siteo-intro', '1'); } catch (e) {}
    const tl = gsap.timeline({ onComplete: () => { intro.remove(); ScrollTrigger.refresh(); } });
    tl.fromTo('.intro-logo', { y: 0, yPercent: 118 }, { y: 0, yPercent: 0, duration: 0.95, ease: 'expo.out' }, 0)
      .to('.intro-bar i', { scaleX: 1, duration: 1.05, ease: 'power2.inOut' }, 0.05)
      .fromTo('.intro-dot', { scale: 0, rotation: -120, opacity: 1, svgOrigin: '91.12 14.12' }, { scale: 1, rotation: 0, opacity: 1, svgOrigin: '91.12 14.12', duration: 0.75, ease: 'back.out(2.4)' }, 0.42)
      .to('.intro-in', { yPercent: -60, opacity: 0, duration: 0.55, ease: 'power3.in' }, 1.12)
      .to(intro, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.9, ease: 'expo.inOut' }, 1.15)
      .add(revealed, 1.3)
      .add(heroEnter(), 1.42);
  }

  /* ---------- everything scroll-driven ---------- */
  function build() {
    ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // 1) HERO: the 3D site assembles as you scroll (pinned on desktop)
      if (hero) {
        mm.add('(min-width: 761px)', () => {
          ScrollTrigger.create({
            trigger: hero, start: 'top top', end: '+=85%', pin: true, pinSpacing: true, anticipatePin: 1,
            onUpdate: s => setBuild(s.progress), onRefresh: s => setBuild(s.progress)
          });
        });
        // phones: the 3D sits at the top and leaves the screen fast, so the build plays by itself once the page opens
        mm.add('(max-width: 760px)', () => {
          const proxy = { p: 0 };
          let tw = null;
          const play = () => { tw = gsap.to(proxy, { p: 1, duration: 2.4, delay: 1.5, ease: 'power2.inOut', onUpdate: () => setBuild(proxy.p) }); };
          if (window.__siteoRevealed) play(); else window.addEventListener('siteo:reveal', play, { once: true });
          placeHud();
          return () => { window.removeEventListener('siteo:reveal', play); if (tw) tw.kill(); setBuild(0); };
        });
      }

      // 2) section headings
      $$('main .x-title, main .x-big, main .x-work-name').forEach(armTitle);

      // 3) services: cards slide in one after another
      const cards = $$('.vB-card');
      if (cards.length) {
        gsap.set(cards, { transition: 'none' });
        gsap.from(cards, {
          y: 80, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.09,
          scrollTrigger: { trigger: '#vbTrack', start: 'top 86%', once: true },
          onComplete: () => gsap.set(cards, { clearProps: 'transform,opacity,transition' })
        });
      }

      // 4) promise: words light up as you scroll
      const pT = $('#promise-title'), pP = pT && pT.nextElementSibling;
      if (pT && hasSplit) {
        d.classList.add('m-words');
        const s = SplitText.create([pT, pP].filter(Boolean), { type: 'words', wordsClass: 'pw' });
        const words = s.words;
        const dot = words.findIndex(w => /\.$/.test(w.textContent));
        words.forEach((w, i) => { if (pT.contains(w) && i > dot && dot > -1) w.classList.add('pw-c'); });
        gsap.fromTo(words, { opacity: 0.16 }, {
          opacity: 1, ease: 'none', stagger: 0.1,
          scrollTrigger: { trigger: '.x-promise', start: 'top 82%', end: 'center 45%', scrub: 0.6 }
        });
        gsap.from('.x-promise .btn', { y: 30, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '.x-promise', start: 'top 70%', once: true } });
      }

      // 5) work: Dayno cards fan out, phone screenshot loads in
      const dn = $('.x-work-visual:not(.br-visual)');
      if (dn) gsap.fromTo(dn, { '--fan': 0 }, { '--fan': 1, ease: 'none', scrollTrigger: { trigger: dn, start: 'top 88%', end: 'center 52%', scrub: 0.8 } });
      const br = $('.br-visual');
      if (br) gsap.fromTo(br, { '--wy': 90, '--clip': 100, '--zoom': 0.18 }, { '--wy': 0, '--clip': 0, '--zoom': 0, ease: 'none', scrollTrigger: { trigger: br, start: 'top 92%', end: 'center 50%', scrub: 0.8 } });
      $$('.x-work-text').forEach(t => {
        gsap.from($$(':scope > :not(.x-work-name)', t), { y: 28, opacity: 0, duration: 0.95, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: t, start: 'top 80%', once: true } });
      });

      // 6) contact + FAQ
      gsap.from('.x-form', { y: 70, opacity: 0, duration: 1.15, ease: 'expo.out', scrollTrigger: { trigger: '.x-contact', start: 'top 72%', once: true } });
      gsap.from('.x-contact-copy > :not(.x-big)', { y: 26, opacity: 0, duration: 0.95, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: '.x-contact', start: 'top 72%', once: true } });
      const faq = $$('.x-faq details');
      if (faq.length) gsap.from(faq, { y: 24, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.06, scrollTrigger: { trigger: '.x-faq', start: 'top 84%', once: true } });
    });

    // magnetic buttons (desktop)
    if (finePointer) {
      const offs = $$('.hero-ctas .btn, .x-promise .btn, .x-contact .btn-wa, .site-header .nav > .btn').map(magnet);
      ctx.add(() => () => offs.forEach(f => f()));
    }
  }

  // deep link (e.g. /#contact): the pinned hero adds height above the target, so land on it again
  // (only until the visitor scrolls by themselves)
  let userScrolled = false;
  ['wheel', 'touchstart', 'keydown'].forEach(t => window.addEventListener(t, () => { userScrolled = true; }, { once: true, passive: true }));
  function fixHash() {
    if (userScrolled || location.hash.length < 2) return;
    let t = null;
    try { t = document.querySelector(decodeURIComponent(location.hash)); } catch (e) {}
    if (!t) return;
    const y = Math.max(0, t.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(d).scrollPaddingTop) || 0));
    if (lenis) lenis.scrollTo(y, { immediate: true, force: true }); else window.scrollTo(0, y);
  }
  window.addEventListener('load', () => setTimeout(() => { if (enabled) fixHash(); }, 60));

  function enable(withIntro) {
    if (enabled || still()) { if (withIntro) { d.classList.remove('intro-on'); revealed(); } return; }
    enabled = true;
    d.classList.add('m-on');
    if (hud) hud.classList.add('hb-ready');
    startLenis();
    build();
    placeHud();
    setBuild(0);
    ScrollTrigger.refresh();
    fixHash();
    if (withIntro) runIntro(); else revealed();
  }
  function disable() {
    if (!enabled) return;
    enabled = false;
    pendingTitles.clear();
    if (ctx) { ctx.revert(); ctx = null; }
    if (lenis) { gsap.ticker.remove(lenisRaf); lenis.destroy(); lenis = null; }
    d.classList.remove('m-on', 'm-words');
    if (hud) hud.classList.remove('hb-ready');
    $$('.vB-card, .x-form, .x-faq details').forEach(el => el.style.removeProperty('transition'));
    window.__siteoBuild = 0;
    window.dispatchEvent(new CustomEvent('siteo:build', { detail: 0 }));
    ScrollTrigger.refresh();
  }

  window.addEventListener('a11y-change', () => { still() ? disable() : enable(false); });
  reduceMQ.addEventListener && reduceMQ.addEventListener('change', () => { still() ? disable() : enable(false); });

  let lastW = innerWidth, rt;
  window.addEventListener('resize', () => {
    placeHud();
    if (Math.abs(innerWidth - lastW) < 2) return;
    lastW = innerWidth; clearTimeout(rt);
    rt = setTimeout(() => { if (enabled) rearmTitles(); }, 250);
  });

  // start now; if the web font arrives later, re-split headings so the line breaks match
  const fontsWereReady = !document.fonts || document.fonts.status === 'loaded';
  enable(d.classList.contains('intro-on'));
  if (!fontsWereReady) document.fonts.ready.then(() => { if (enabled) { rearmTitles(); fixHash(); } });
})();
