/* ק.א פרי — interactions
   WA_NUMBER: the WhatsApp number that receives the leads (international format, digits only). */
(function () {
  'use strict';

  var WA_NUMBER = '972544862633';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = typeof window.gsap !== 'undefined';

  function waUrl(text) {
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text);
  }

  /* ---------- hero: wipe the fogged glass ---------- */
  var hero = $('.hero');
  function heroClean() { hero.classList.add('is-clean'); }

  function paintFrost(canvas) {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    var c = canvas.getContext('2d');
    c.scale(dpr, dpr);
    var g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, 'rgba(232,244,242,.78)');
    g.addColorStop(1, 'rgba(196,226,222,.62)');
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    var i, x, y, r, rg;
    // soft steam patches
    for (i = 0; i < 26; i++) {
      x = Math.random() * w; y = Math.random() * h; r = 80 + Math.random() * 220;
      rg = c.createRadialGradient(x, y, 0, x, y, r);
      rg.addColorStop(0, 'rgba(255,255,255,.22)'); rg.addColorStop(1, 'rgba(255,255,255,0)');
      c.fillStyle = rg; c.fillRect(x - r, y - r, r * 2, r * 2);
    }
    // condensation drops: tiny clear lenses with a highlight
    var n = Math.round(w * h / 9000);
    for (i = 0; i < n; i++) {
      x = Math.random() * w; y = Math.random() * h; r = 1.5 + Math.random() * Math.random() * 9;
      c.globalCompositeOperation = 'destination-out';
      c.beginPath(); c.ellipse(x, y, r * .85, r, 0, 0, 6.3); c.fillStyle = 'rgba(0,0,0,.75)'; c.fill();
      c.globalCompositeOperation = 'source-over';
      c.beginPath(); c.arc(x - r * .25, y - r * .3, r * .28, 0, 6.3); c.fillStyle = 'rgba(255,255,255,.7)'; c.fill();
      if (r > 6 && Math.random() > .5) { // a run
        c.globalCompositeOperation = 'destination-out';
        c.fillStyle = 'rgba(0,0,0,.28)';
        c.fillRect(x - r * .5, y - 40 - Math.random() * 120, r, 160);
        c.globalCompositeOperation = 'source-over';
      }
    }
  }

  function runWipe() {
    if (reduce) { heroClean(); return; }
    var canvas = $('.hero__frost canvas');
    try { paintFrost(canvas); } catch (e) { /* frost stays plain */ }
    var done = false;
    function finish() { if (done) return; done = true; hero.style.setProperty('--wipe', '-6%'); heroClean(); }
    var state = { v: 106 };
    if (hasGsap) {
      gsap.to(state, {
        v: -6, duration: 1.7, delay: .55, ease: 'power2.inOut',
        onUpdate: function () { hero.style.setProperty('--wipe', state.v + '%'); },
        onComplete: finish
      });
    } else {
      var t0 = null;
      (function step(t) {
        if (t0 === null) t0 = t + 550;
        var p = Math.max(0, Math.min(1, (t - t0) / 1700));
        var e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        hero.style.setProperty('--wipe', (106 - 112 * e) + '%');
        if (p < 1) requestAnimationFrame(step); else finish();
      })(performance.now());
    }
    setTimeout(finish, 4000); // never leave the glass fogged
  }
  runWipe();

  /* ---------- nav + fab ---------- */
  var nav = $('#nav'), fab = $('.fab'), contactEl = $('#contact');
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle('is-solid', y > window.innerHeight - 90);
    var ct = contactEl.getBoundingClientRect();
    fab.classList.toggle('is-on', y > 400 && !(ct.top < window.innerHeight * .6 && ct.bottom > 120));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- band: scroll-driven drift ---------- */
  if (hasGsap && window.ScrollTrigger && !reduce) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.band__row--a', { xPercent: 22 }, { xPercent: -4, ease: 'none', scrollTrigger: { trigger: '.band', start: 'top bottom', end: 'bottom top', scrub: .6 } });
    gsap.fromTo('.band__row--b', { xPercent: -6 }, { xPercent: 18, ease: 'none', scrollTrigger: { trigger: '.band', start: 'top bottom', end: 'bottom top', scrub: .6 } });
    // hero copy sinks slightly as you leave
    gsap.to('.hero__copy', { yPercent: -10, opacity: .35, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    // step numerals count in, in order
    gsap.from('.steps__n', { yPercent: 60, opacity: 0, duration: .9, ease: 'power3.out', stagger: .16, scrollTrigger: { trigger: '.steps__list', start: 'top 80%' } });
  }

  /* ---------- reveals ---------- */
  $$('.pin').forEach(function (p, i) { p.style.setProperty('--i', i); });
  var rv = $$('.h2, .who__row, .role, .jobs__list li');
  rv.forEach(function (el) { el.classList.add('rv'); });
  var watch = rv.concat($$('.city__map'));
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -12% 0px' });
    watch.forEach(function (el) { io.observe(el); });
  } else {
    watch.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- form ---------- */
  var tabs = $('.form__tabs'), tabBiz = $('#tab-biz'), tabJob = $('#tab-job');
  var panels = { biz: $('#panel-biz'), job: $('#panel-job') };
  var done = $('.form__done');
  var current = 'biz';

  function setTab(kind, focus) {
    current = kind;
    var job = kind === 'job';
    tabs.classList.toggle('is-job', job);
    tabBiz.setAttribute('aria-selected', String(!job)); tabBiz.tabIndex = job ? -1 : 0;
    tabJob.setAttribute('aria-selected', String(job)); tabJob.tabIndex = job ? 0 : -1;
    done.hidden = true;
    panels.biz.hidden = job; panels.job.hidden = !job;
    if (hasGsap && !reduce) gsap.fromTo($('form', panels[kind]).children, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .45, stagger: .04, ease: 'power2.out', clearProps: 'all' });
    if (focus) (job ? tabJob : tabBiz).focus();
  }
  tabBiz.addEventListener('click', function () { setTab('biz'); });
  tabJob.addEventListener('click', function () { setTab('job'); });
  tabs.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); setTab(current === 'biz' ? 'job' : 'biz', true); }
  });
  $$('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { setTab(a.getAttribute('data-tab')); });
  });

  function phoneOk(v) {
    var d = v.replace(/[^\d+]/g, '').replace(/^\+972/, '0').replace(/^972/, '0');
    return /^0[2-9]\d{7,8}$/.test(d) && !/^0(\d)\1+$/.test(d);
  }
  function checked(form, name) {
    return $$('input[name="' + name + '"]:checked', form).map(function (i) { return i.value; }).join(', ');
  }
  function val(form, name) { var el = form.elements[name]; return el ? String(el.value).trim() : ''; }

  function buildMessage(form) {
    var kind = form.getAttribute('data-kind'), L = [];
    if (kind === 'biz') {
      L.push('שלום, הגענו מהאתר של ק.א פרי ואנחנו צריכים עובדים.');
      L.push('שם העסק או המשפחה: ' + val(form, 'biz'));
      L.push('איש קשר: ' + val(form, 'name'));
      L.push('טלפון: ' + val(form, 'phone'));
      L.push('סוג המקום: ' + val(form, 'type'));
      if (checked(form, 'need')) L.push('עובדים: ' + checked(form, 'need'));
      if (val(form, 'area')) L.push('מיקום: ' + val(form, 'area'));
      if (val(form, 'note')) L.push('הערות: ' + val(form, 'note'));
    } else {
      L.push('שלום, הגעתי מהאתר של ק.א פרי ואני מחפש/ת עבודה.');
      L.push('שם: ' + val(form, 'name'));
      L.push('טלפון: ' + val(form, 'phone'));
      if (checked(form, 'need')) L.push('תחום: ' + checked(form, 'need'));
      if (checked(form, 'when')) L.push('זמינות: ' + checked(form, 'when'));
      L.push('ניסיון: ' + val(form, 'exp'));
      if (val(form, 'area')) L.push('אזור מגורים: ' + val(form, 'area'));
    }
    return L.join('\n');
  }

  $$('.form__panel').forEach(function (form) {
    var err = $('.form__err', form);
    form.addEventListener('input', function (e) {
      if (!e.target.classList || !e.target.classList.contains('is-bad')) return;
      e.target.classList.remove('is-bad'); e.target.removeAttribute('aria-invalid');
      if (!$('.is-bad', form)) err.hidden = true;
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = [];
      $$('[required]', form).forEach(function (el) {
        var ok = el.value.trim().length > 1 && (el.name !== 'phone' || phoneOk(el.value));
        el.classList.toggle('is-bad', !ok);
        el.setAttribute('aria-invalid', String(!ok));
        if (!ok) bad.push(el);
      });
      if (bad.length) {
        var phoneBad = bad.some(function (el) { return el.name === 'phone' && el.value.trim(); });
        err.textContent = phoneBad ? 'מספר הטלפון לא נראה תקין. בדקו שהקלדתם את כל הספרות.' : 'חסרים פרטים. מלאו את השדות המסומנים כדי שנוכל לחזור אליכם.';
        err.hidden = false;
        bad[0].focus({ preventScroll: true });
        err.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
        return;
      }
      err.hidden = true;
      var url = waUrl(buildMessage(form));
      $('[data-wa-last]').href = url;
      window.open(url, '_blank', 'noopener');
      form.reset();
      form.parentNode.hidden = true;
      done.hidden = false;
      done.focus();
    });
  });
  $('.form__again').addEventListener('click', function () {
    setTab(current);
    var first = $('input', panels[current]); if (first) first.focus();
  });
  $('[data-wa-last]').target = '_blank';

  $$('[data-wa]').forEach(function (a) {
    a.href = waUrl('שלום, הגעתי מהאתר של ק.א פרי ואשמח לפרטים.');
    a.target = '_blank'; a.rel = 'noopener';
  });

  /* ---------- misc ---------- */
  $$('[data-open]').forEach(function (b) {
    b.addEventListener('click', function () { var d = document.getElementById(b.getAttribute('data-open')); if (d && d.showModal) d.showModal(); });
  });
  var yr = $('[data-year]'); if (yr) yr.textContent = new Date().getFullYear();
})();
