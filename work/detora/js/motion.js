/* DE'TORA — motion layer (GSAP + ScrollTrigger + Lenis). Content stays usable without it. */
(function () {
  var root = document.documentElement;
  var $ = function (id) { return document.getElementById(id); };
  var nav = $('nav');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !window.gsap || !window.ScrollTrigger) {
    root.classList.add('no-motion');
    nav.classList.add('solid');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  if (window.SplitText) gsap.registerPlugin(SplitText);
  ScrollTrigger.config({ ignoreMobileResize: true });
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  var lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.11 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    lenis.stop();
  }
  window.DTM = { lenis: lenis };

  var hero = $('hero'), door = $('door'), doorImg = $('doorImg'), ring = $('ring');
  var letters = gsap.utils.toArray('#wordmark span');

  function split(el, type) {
    if (!window.SplitText) return null;
    try { return SplitText.create(el, { type: type, mask: 'words' }); } catch (e) { return null; }
  }

  /* ---------- states before first paint of the hero ---------- */
  letters.forEach(function (l) { l.innerHTML = '<b style="display:block;font-weight:inherit">' + l.innerHTML + '</b>'; });
  var inner = gsap.utils.toArray('#wordmark span b');
  gsap.set(inner, { yPercent: 115 });
  gsap.set('#heroScript', { clipPath: 'inset(0% 100% 0% 0%)' });
  gsap.set([door, ring], { yPercent: 105 });
  gsap.set('#cue', { autoAlpha: 0 });

  function geom() {
    var W = hero.clientWidth, H = hero.clientHeight;
    var oy = (ring.offsetTop + ring.offsetHeight / 2) / H;
    var s = Math.max(ring.offsetWidth / W, ring.offsetHeight / H) * 1.05;
    return { s: s, oy: oy, y: (oy - 0.5) * H * s };
  }

  /* ---------- scroll scenes ---------- */
  function build() {
    /* hero: the arch opens into the photo */
    var heSplit = split('#heroHe', 'words');
    var heWords = heSplit ? heSplit.words : ['#heroHe'];
    var heroTl = gsap.timeline({
      scrollTrigger: { trigger: hero, start: 'top top', end: '+=170%', pin: true, scrub: 0.6, invalidateOnRefresh: true }
    });
    heroTl
      .to('#cue', { scaleY: 0, transformOrigin: '50% 100%', duration: 0.06 }, 0)
      .to(ring, { autoAlpha: 0, duration: 0.08 }, 0)
      .to(letters, { yPercent: -125, duration: 0.24, ease: 'power2.in', stagger: { each: 0.014, from: 'center' } }, 0)
      .to('#heroScript', { y: -70, autoAlpha: 0, duration: 0.2, ease: 'power1.in' }, 0)
      .to(door, { '--p': 1, duration: 0.56, ease: 'power2.inOut' }, 0)
      .fromTo(doorImg,
        { scale: function () { return geom().s; }, y: function () { return geom().y; }, transformOrigin: function () { return '50% ' + (geom().oy * 100) + '%'; } },
        { scale: 1, y: 0, duration: 0.6, ease: 'power2.inOut' }, 0)
      .to('#shade', { opacity: 1, duration: 0.25, ease: 'none' }, 0.36)
      .fromTo('#over', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.02 }, 0.5)
      .from(heWords, { yPercent: 115, duration: 0.3, ease: 'power3.out', stagger: 0.035 }, 0.5)
      .from('.hero-sub, .hero-cta', { y: 34, autoAlpha: 0, duration: 0.18, stagger: 0.05, ease: 'power2.out' }, 0.74)
      .to({}, { duration: 0.1 });
    var heroST = heroTl.scrollTrigger;

    /* nav colour + hide on scroll down */
    ScrollTrigger.create({
      start: 0, end: 'max',
      onUpdate: function (self) {
        var y = self.scroll(), past = heroST.end + hero.clientHeight - 70;
        nav.classList.toggle('light', heroST.progress > 0.34 && y < past);
        nav.classList.toggle('solid', y >= past);
        nav.classList.toggle('away', y >= past && self.direction === 1);
      }
    });

    /* manifesto: words light up with the scroll */
    var mani = $('maniT'), seq = [];
    Array.prototype.slice.call(mani.childNodes).forEach(function (n) {
      if (n.nodeType === 3) {
        var frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(function (part) {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
          var w = document.createElement('span'); w.className = 'w'; w.textContent = part; frag.appendChild(w); seq.push(w);
        });
        mani.replaceChild(frag, n);
      } else seq.push(n);
    });
    var maniTl = gsap.timeline({ scrollTrigger: { trigger: mani, start: 'top 82%', end: 'bottom 55%', scrub: 0.5 } });
    seq.forEach(function (el, i) {
      if (el.classList.contains('mi')) maniTl.from(el, { scale: 0, rotate: -12, transformOrigin: '50% 100%', duration: 2.2, ease: 'back.out(1.6)' }, i);
      else maniTl.to(el, { opacity: 1, duration: 1.6, ease: 'none' }, i);
    });

    /* worlds: vertical scroll drives a horizontal gallery */
    var track = $('worldsTrack');
    var dist = function () { return Math.max(0, track.offsetWidth - window.innerWidth); };
    gsap.timeline({
      scrollTrigger: { trigger: '#worlds', start: 'top top', end: function () { return '+=' + (dist() * 1.2 + 200); }, pin: true, scrub: 0.7, invalidateOnRefresh: true }
    })
      .to(track, { x: dist, ease: 'none', duration: 1 }, 0)
      .to('#worldsBar', { scaleX: 1, ease: 'none', duration: 1 }, 0)
      .fromTo('.world-arch img', { xPercent: -8 }, { xPercent: 8, ease: 'none', duration: 1 }, 0);
    gsap.from('.world', {
      y: 110, autoAlpha: 0, duration: 1.2, ease: 'power3.out', stagger: 0.12,
      scrollTrigger: { trigger: '#worlds', start: 'top 62%' }
    });
    gsap.from('.world-arch', {
      clipPath: 'inset(100% 0% 0% 0% round 999px 999px 6px 6px)', duration: 1.5, ease: 'power3.inOut', stagger: 0.12,
      scrollTrigger: { trigger: '#worlds', start: 'top 62%' }
    });

    /* headings rise letter by letter */
    gsap.utils.toArray('h2.split').forEach(function (h) {
      var sp = split(h, 'words,chars');
      gsap.from(sp ? sp.chars : h, {
        yPercent: 115, duration: 1.1, ease: 'power4.out', stagger: 0.035,
        scrollTrigger: { trigger: h, start: 'top 88%' }
      });
    });
    gsap.utils.toArray('.fade').forEach(function (el) {
      gsap.from(el, { y: 26, autoAlpha: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
    });

    /* ribbon leans with scroll speed */
    var lean = gsap.quickTo('#ribbon span', 'skewX', { duration: 0.5, ease: 'power3.out' });
    ScrollTrigger.create({
      trigger: '.ribbon', start: 'top bottom', end: 'bottom top',
      onUpdate: function (self) { lean(gsap.utils.clamp(-22, 22, self.getVelocity() / -90)); }
    });
    gsap.fromTo('#ribbon', { x: 0 }, { x: -160, ease: 'none', scrollTrigger: { trigger: '.ribbon', start: 'top bottom', end: 'bottom top', scrub: 0.6 } });

    /* how */
    gsap.utils.toArray('#bow path').forEach(function (p, i) {
      var len = p.getTotalLength();
      gsap.fromTo(p, { strokeDasharray: len, strokeDashoffset: len },
        { strokeDashoffset: 0, duration: 1.5, delay: i * 0.18, ease: 'power2.inOut', scrollTrigger: { trigger: '#bow', start: 'top 85%' } });
    });
    gsap.from('#steps li', { y: 70, autoAlpha: 0, duration: 1.1, ease: 'power3.out', stagger: 0.16, scrollTrigger: { trigger: '#steps', start: 'top 82%' } });
    gsap.from('.step-n', { yPercent: 60, rotate: -14, duration: 1.3, ease: 'power3.out', stagger: 0.16, scrollTrigger: { trigger: '#steps', start: 'top 82%' } });

    /* contact */
    gsap.fromTo('#contactBg', { yPercent: -9 }, { yPercent: 9, ease: 'none', scrollTrigger: { trigger: '#contact', start: 'top bottom', end: 'bottom top', scrub: true } });
    gsap.from('#contactCard', { y: 120, rotate: 2.5, autoAlpha: 0, duration: 1.3, ease: 'power3.out', scrollTrigger: { trigger: '#contact', start: 'top 72%' } });
    gsap.from('#cform label, #cform .btn', { y: 30, autoAlpha: 0, duration: 0.9, ease: 'power2.out', stagger: 0.08, scrollTrigger: { trigger: '#cform', start: 'top 80%' } });

    /* footer wordmark */
    gsap.from('#footWord span', { yPercent: 115, duration: 1.3, ease: 'power4.out', stagger: 0.06, scrollTrigger: { trigger: '#foot', start: 'top 72%' } });

    DTM.cards(true);
  }

  /* product cards: called on first build and after every filter change */
  var cardTriggers = [];
  DTM.cards = function (first) {
    cardTriggers.forEach(function (t) { t.kill(); }); cardTriggers = [];
    var cards = gsap.utils.toArray('#grid .card');
    if (!cards.length) { if (!first) ScrollTrigger.refresh(); return; }
    gsap.set(cards, { y: 70, autoAlpha: 0 });
    cards.forEach(function (c) {
      gsap.set(c.querySelector('.card-img'), { clipPath: 'inset(100% 0% 0% 0% round 999px 999px 6px 6px)' });
    });
    cardTriggers = ScrollTrigger.batch(cards, {
      start: 'top 94%', once: true,
      onEnter: function (batch) {
        gsap.to(batch, { y: 0, autoAlpha: 1, duration: 1.1, ease: 'power3.out', stagger: 0.1, overwrite: true });
        gsap.to(batch.map(function (c) { return c.querySelector('.card-img'); }), {
          clipPath: 'inset(0% 0% 0% 0% round 999px 999px 6px 6px)', duration: 1.4, ease: 'power3.inOut', stagger: 0.1
        });
      }
    });
    if (!first) ScrollTrigger.refresh();
  };

  /* ---------- loader, then the hero entrance ---------- */
  function ready() {
    var fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    var img = doorImg.complete ? Promise.resolve() : new Promise(function (r) { doorImg.onload = doorImg.onerror = r; });
    var cap = new Promise(function (r) { setTimeout(r, 3000); });
    return Promise.race([Promise.all([fonts, img]), cap]);
  }

  var intro = gsap.timeline();
  intro
    .from('.loader-in img', { scale: 0.5, autoAlpha: 0, duration: 0.9, ease: 'power3.out' })
    .from('.loader-w span', { yPercent: 110, duration: 0.9, ease: 'power4.out' }, 0.15)
    .to('#loaderBar', { scaleX: 1, duration: 1.1, ease: 'power2.inOut' }, 0.1);

  Promise.all([ready(), new Promise(function (r) { intro.eventCallback('onComplete', r); })]).then(function () {
    build();
    ScrollTrigger.refresh();
    gsap.timeline({ onComplete: function () { $('loader').style.display = 'none'; } })
      .to('.loader-in', { autoAlpha: 0, y: -24, duration: 0.5, ease: 'power2.in' })
      .to('.loader-strips i', { yPercent: -101, duration: 1.05, ease: 'power4.inOut', stagger: { each: 0.07, from: 'center' } }, 0.25)
      .to(inner, { yPercent: 0, duration: 1.3, ease: 'power4.out', stagger: 0.07 }, 0.75)
      .to('#heroScript', { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'power2.inOut' }, 1.05)
      .to([door, ring], { yPercent: 0, duration: 1.6, ease: 'power4.out' }, 0.8)
      .to('#cue', { autoAlpha: 1, duration: 0.6 }, 2)
      .add(function () { if (lenis) lenis.start(); }, 1.5);
  });
})();
