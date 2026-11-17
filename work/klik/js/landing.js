/* קליק: דף הנחיתה והאנימציות המשותפות */
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const COLORS = ['#ffd43a', '#ff4f8b', '#27e0a3', '#ffffff', '#b9a5ff'];

  // פיצוץ ה"קליק": ניצוצות עגולים שעפים מהמרכז
  function burst(host, n = 22) {
    if (reduce || !host) return;
    for (let i = 0; i < n; i++) {
      const s = document.createElement('i');
      s.className = 'spark';
      s.style.background = COLORS[i % COLORS.length];
      host.appendChild(s);
      const a = (i / n) * Math.PI * 2 + Math.random() * 0.4, d = 110 + Math.random() * 150;
      gsap.fromTo(s, { x: 0, y: 0, scale: 0.4 + Math.random() }, {
        x: Math.cos(a) * d, y: Math.sin(a) * d, scale: 0, duration: 0.8 + Math.random() * 0.5,
        ease: 'power3.out', onComplete: () => s.remove()
      });
    }
  }

  // שני חלקי הלוגו נצמדים
  function snap(svg, opts = {}) {
    const a = svg.querySelector('.mark__a'), b = svg.querySelector('.mark__b');
    if (reduce) return gsap.timeline();
    return gsap.timeline(opts)
      .fromTo(a, { x: -34, rotation: -24, transformOrigin: '50% 50%' }, { x: 0, rotation: 0, duration: 0.42, ease: 'back.in(1.6)' })
      .fromTo(b, { x: 34, rotation: 24, transformOrigin: '50% 50%' }, { x: 0, rotation: 0, duration: 0.42, ease: 'back.in(1.6)' }, 0)
      .fromTo(svg, { scale: 1.25 }, { scale: 1, duration: 0.5, ease: 'elastic.out(1,0.4)' }, 0.42);
  }

  function avatar(p) {
    return `<svg class="ava" viewBox="0 0 300 410" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="300" height="410" fill="${p.bg}"/>
      <circle cx="${p.cx}" cy="70" r="90" fill="${p.blob}" opacity=".55"/>
      <path d="M40 410c0-96 50-150 110-150s110 54 110 150z" fill="${p.shirt}"/>
      <rect x="128" y="218" width="44" height="60" rx="20" fill="${p.skin}"/>
      <ellipse cx="150" cy="170" rx="66" ry="76" fill="${p.skin}"/>
      <path d="${p.hair}" fill="${p.hairc}"/>
      <circle cx="126" cy="172" r="6" fill="#1b0f3b"/><circle cx="174" cy="172" r="6" fill="#1b0f3b"/>
      <path d="M128 204q22 20 44 0" fill="none" stroke="#1b0f3b" stroke-width="5" stroke-linecap="round"/>
    </svg>`;
  }
  const HAIR_LONG = 'M78 190c-14-70 20-112 72-112s86 42 72 112c10 40 8 80-4 110-10-40-8-90-20-126-30 6-70 2-96-22-12 40-6 100-16 148-14-34-16-74-8-110z';
  const HAIR_SHORT = 'M84 160c-6-52 24-82 66-82s72 30 66 82c-10-24-28-40-66-40s-56 16-66 40z';
  const HAIR_CURLY = 'M80 168c-22-30-4-74 26-78 10-22 78-22 88 0 30 4 48 48 26 78-6-30-30-48-70-48s-64 18-70 48z';
  const PEOPLE = [
    { name: 'נועה', age: 24, city: 'תל אביב', pct: 92, bg: '#ffb8d2', blob: '#ff4f8b', shirt: '#4b1fd6', skin: '#f3c6a5', hair: HAIR_LONG, hairc: '#3a2417', cx: 60 },
    { name: 'עומר', age: 27, city: 'חיפה', pct: 88, bg: '#9be8cf', blob: '#27e0a3', shirt: '#1b0f3b', skin: '#d9a47c', hair: HAIR_SHORT, hairc: '#1c1410', cx: 240 },
    { name: 'מאיה', age: 23, city: 'באר שבע', pct: 95, bg: '#ffe680', blob: '#ffd43a', shirt: '#ff4f8b', skin: '#e9b58f', hair: HAIR_CURLY, hairc: '#5a2e12', cx: 70 },
    { name: 'איתי', age: 26, city: 'ירושלים', pct: 81, bg: '#c7b8ff', blob: '#4b1fd6', shirt: '#ffd43a', skin: '#f0c9a8', hair: HAIR_CURLY, hairc: '#2b1b12', cx: 230 },
    { name: 'שירה', age: 25, city: 'אשקלון', pct: 90, bg: '#ffc9a8', blob: '#ff8a4f', shirt: '#27e0a3', skin: '#c98f66', hair: HAIR_LONG, hairc: '#120c0a', cx: 50 }
  ];

  // גרירת קלף: משותף לדמו ולאפליקציה
  function makeSwipe(card, { onLike, onPass, onTap }) {
    const yes = card.querySelector('.stamp--yes'), no = card.querySelector('.stamp--no');
    let sx = 0, sy = 0, dx = 0, dy = 0, drag = false, moved = false;
    const set = () => {
      gsap.set(card, { x: dx, y: dy * 0.35, rotation: dx / 16 });
      // ב-RTL "כן" הוא גרירה שמאלה? לא: ימינה = כן, כמו בכל אפליקציות ההחלקה
      if (yes) yes.style.opacity = Math.max(0, Math.min(1, dx / 90));
      if (no) no.style.opacity = Math.max(0, Math.min(1, -dx / 90));
    };
    function fling(dir) {
      card.style.pointerEvents = 'none';
      if (yes) yes.style.opacity = dir > 0 ? 1 : 0;
      if (no) no.style.opacity = dir < 0 ? 1 : 0;
      gsap.to(card, {
        x: dir * (innerWidth * 0.9 + 200), y: dy * 0.35 - 40, rotation: dir * 28, duration: reduce ? 0.01 : 0.45, ease: 'power2.in',
        onComplete: () => { card.remove(); (dir > 0 ? onLike : onPass)(); }
      });
    }
    card.addEventListener('pointerdown', e => {
      if (e.target.closest('button')) return;
      drag = true; moved = false; sx = e.clientX; sy = e.clientY; dx = dy = 0;
      card.setPointerCapture(e.pointerId); gsap.killTweensOf(card);
    });
    card.addEventListener('pointermove', e => {
      if (!drag) return;
      dx = e.clientX - sx; dy = e.clientY - sy;
      if (Math.abs(dx) > 6 || Math.abs(dy) > 6) moved = true;
      set();
    });
    const end = e => {
      if (!drag) return; drag = false;
      if (Math.abs(dx) > 95) return fling(Math.sign(dx));
      gsap.to(card, { x: 0, y: 0, rotation: 0, duration: 0.6, ease: 'elastic.out(1,0.55)' });
      if (yes) yes.style.opacity = 0; if (no) no.style.opacity = 0;
      if (!moved && onTap) onTap(e);
    };
    card.addEventListener('pointerup', end);
    card.addEventListener('pointercancel', end);
    return { fling };
  }

  window.KlikFx = { burst, snap, makeSwipe, reduce };

  // ---------- דמו בגיבור ----------
  const deck = document.getElementById('demoDeck');
  let idx = 0, top = null, likes = 0;
  function addCard(p, depth) {
    const el = document.createElement('div');
    el.className = 'dcard';
    el.innerHTML = avatar(p) +
      `<span class="stamp stamp--yes">קליק</span><span class="stamp stamp--no">לא</span>
       <div class="dcard__info"><div><b>${p.name}, ${p.age}</b><small>${p.city}</small></div>
       <div class="ring" style="--p:${p.pct}"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52"/><circle class="ring__v" cx="60" cy="60" r="52" pathLength="100"/></svg><b>${p.pct}%</b></div></div>`;
    deck.prepend(el);
    gsap.set(el, { scale: 1 - depth * 0.05, y: depth * 16, rotation: depth ? (depth % 2 ? 3 : -3) : 0 });
    return el;
  }
  function restack() {
    [...deck.children].reverse().forEach((el, d) => {
      gsap.to(el, { scale: 1 - d * 0.05, y: d * 16, rotation: d ? (d % 2 ? 3 : -3) : 0, duration: 0.5, ease: 'back.out(1.6)' });
    });
    top = deck.lastElementChild;
    if (top && !top._sw) top._sw = makeSwipe(top, { onLike: () => next(true), onPass: () => next(false) });
  }
  function next(liked) {
    if (liked) {
      likes++;
      burst(document.getElementById('demoBurst'), 18);
      const m = document.querySelector('#demoYes .mark'); if (m) snap(m);
    }
    addCard(PEOPLE[idx++ % PEOPLE.length], 2);
    restack();
  }
  if (deck) {
    for (let d = 0; d < 3; d++) addCard(PEOPLE[idx++ % PEOPLE.length], d);
    restack();
    document.getElementById('demoYes').onclick = () => top && top._sw.fling(1);
    document.getElementById('demoNo').onclick = () => top && top._sw.fling(-1);
  }

  // ---------- שאלה לדוגמה ----------
  const opts = document.getElementById('quizOpts');
  if (opts) opts.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    opts.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
    const v = +b.dataset.v, ring = document.getElementById('quizRing'), num = document.getElementById('quizNum');
    ring.style.setProperty('--p', v);
    const o = { n: +num.textContent };
    gsap.to(o, { n: v, duration: reduce ? 0.01 : 0.8, ease: 'power2.out', onUpdate: () => num.textContent = Math.round(o.n) });
    document.getElementById('quizText').textContent = v >= 90
      ? 'התאמה גבוהה. ככל שעונים על יותר שאלות, המספר מדויק יותר.'
      : 'פחות מתאים בשאלה הזאת. בקליק כל אחד קובע כמה כל שאלה חשובה לו.';
    gsap.fromTo(ring, { scale: 0.9 }, { scale: 1, duration: 0.6, ease: 'elastic.out(1,0.45)' });
  });

  // ---------- גלילה: שני קלפים נפגשים ----------
  function initScroll() {
    if (reduce || !window.ScrollTrigger || !document.querySelector('.mutual')) return;
    gsap.registerPlugin(ScrollTrigger);
    const scene = document.querySelector('.mutual__scene');
    const dist = () => scene.offsetWidth / 2 - document.querySelector('.mutual__card').offsetWidth / 2;
    const rtl = 1; // card--a בצד ימין ב-RTL
    const tl = gsap.timeline({ scrollTrigger: { trigger: '.mutual', start: 'top top', end: '+=120%', pin: '.mutual__pin', scrub: 0.6, invalidateOnRefresh: true } });
    tl.fromTo('.mutual__card--a', { x: 0, rotation: 8 }, { x: () => -dist() * rtl, rotation: 0, ease: 'power2.in' }, 0)
      .fromTo('.mutual__card--b', { x: 0, rotation: -8 }, { x: () => dist() * rtl, rotation: 0, ease: 'power2.in' }, 0)
      .to('.mutual__card', { scale: 0.2, opacity: 0, duration: 0.15 })
      .fromTo('.mutual__snap', { opacity: 0, scale: 0.3 }, { opacity: 1, scale: 1.4, duration: 0.25, ease: 'back.out(3)' }, '<')
      .fromTo('.mutual__text', { opacity: 0.25 }, { opacity: 1, duration: 0.2 }, '<');
    gsap.from('.plan', { scrollTrigger: { trigger: '.plus__grid', start: 'top 80%' }, y: 60, rotation: i => (i ? 4 : -4), opacity: 0, duration: 0.8, ease: 'back.out(1.5)', stagger: 0.12 });
  }

  // ---------- טעינה ----------
  window.KlikLanding = {
    intro(showLanding) {
      const loader = document.querySelector('.loader');
      const done = () => { loader.remove(); document.body.classList.remove('is-loading'); };
      if (reduce) { done(); if (showLanding) initScroll(); return; }
      const tl = snap(loader.querySelector('.mark'));
      tl.add(() => burst(loader, 26), 0.42)
        .to(loader.querySelector('.mark'), { scale: 0, duration: 0.3, ease: 'back.in(2)' }, '+=0.35')
        .to(loader, { yPercent: -100, duration: 0.55, ease: 'power3.inOut', onComplete: done }, '-=0.05');
      if (showLanding) {
        tl.from('.hero__w', { yPercent: 110, rotation: 8, opacity: 0, duration: 0.8, ease: 'back.out(1.6)', stagger: 0.12 }, '-=0.35')
          .from('.hero__lead, .hero__cta, .top', { y: 24, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' }, '-=0.45')
          .from('.demo', { y: 80, rotation: -10, opacity: 0, duration: 0.9, ease: 'back.out(1.4)' }, '-=0.8');
        initScroll();
      }
    }
  };
})();
