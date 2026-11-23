/* כלילה — דף הבית: בד משי מונפש בהירו, סיפור הצבע בגלילה, קרוסלה, בדים. */
(function () {
  var KL = window.KL, $ = KL.$, $$ = KL.$$;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- הירו ---------- */
  $('#heroArt').innerHTML = KL.art({ style: 'turban', color: '#6E2A3F', skin: 1, dress: '#FFFAF7' });

  (function silk() {
    var cv = $('.kl-hero__silk'), ctx = cv.getContext('2d'), W, H, dpr, t = 0, mx = 0, tmx = 0, on = true, raf;
    var R = [
      { y: .30, s: .26, th: .15, c: [231, 201, 204], l: [255, 244, 240], d: [203, 160, 168], k: .0052, sp: .32, ph: 0 },
      { y: .66, s: -.2, th: .2, c: [181, 107, 127], l: [226, 170, 182], d: [126, 60, 82], k: .0041, sp: .26, ph: 2.1 },
      { y: .86, s: .1, th: .11, c: [201, 168, 110], l: [236, 214, 170], d: [158, 124, 70], k: .0063, sp: .4, ph: 4.2 }
    ];
    function size() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function mix(a, b, f) { return 'rgb(' + ((a[0] + (b[0] - a[0]) * f) | 0) + ',' + ((a[1] + (b[1] - a[1]) * f) | 0) + ',' + ((a[2] + (b[2] - a[2]) * f) | 0) + ')'; }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      mx += (tmx - mx) * .04;
      var step = 3, amp = Math.min(H * .07, 60);
      for (var r = 0; r < R.length; r++) {
        var b = R[r];
        for (var x = -step; x < W + step; x += step) {
          var u = x / W;
          var wave = Math.sin(x * b.k + t * b.sp + b.ph + mx * 1.4) * amp + Math.sin(x * b.k * 2.3 - t * b.sp * .7 + b.ph) * amp * .35;
          var y = H * (b.y + b.s * (u - .5)) + wave;
          var th = H * b.th * (.72 + .28 * Math.sin(x * b.k * 1.7 + t * b.sp * 1.3 + b.ph * 2));
          var f = Math.sin(x * .021 + t * .5 + b.ph + mx * 2) * .6 + Math.sin(x * .0085 - t * .35 + b.ph * 1.7) * .4;
          ctx.fillStyle = f > 0 ? mix(b.c, b.l, f) : mix(b.c, b.d, -f);
          ctx.globalAlpha = r === 0 ? .85 : .92;
          ctx.fillRect(x, y, step + .6, th);
        }
      }
      ctx.globalAlpha = 1;
    }
    function loop() { if (!on) return; t += .016; draw(); raf = requestAnimationFrame(loop); }
    size(); draw();
    addEventListener('resize', function () { size(); draw(); });
    if (reduce) return;
    addEventListener('pointermove', function (e) { tmx = (e.clientX / innerWidth - .5); }, { passive: true });
    new IntersectionObserver(function (en) { on = en[0].isIntersecting; cancelAnimationFrame(raf); if (on) loop(); }).observe(cv);
    loop();
    /* פרלקסה עדינה על הדמות */
    var fig = $('.kl-hero__arch .kl-art');
    addEventListener('scroll', function () { if (scrollY < innerHeight) fig.style.transform = 'translateY(' + (7 + scrollY * .012) + '%) scale(' + (1.08 + scrollY * .00018) + ')'; }, { passive: true });
  })();

  /* ---------- קטגוריות ---------- */
  var CAT_ART = {
    scarves: ['bobo', '#B56B7F', '#EBD0D2', 'floral', 0], turbans: ['turban', '#2F3A5C', '#D5DAE6', null, 1],
    bobo: ['bobo', '#C9A24A', '#F0E3C4', 'dots', 2], bands: ['band', '#A9583F', '#EFD6CB', 'stripes', 3],
    hats: ['beret', '#6C6B3B', '#DFDFC8', null, 0], extras: ['band', '#2B2529', '#DDD3CE', null, 1]
  };
  $('#cats').innerHTML = KL.cats.map(function (c, i) {
    var a = CAT_ART[c.id];
    return '<a class="kl-cat kl-reveal' + (i === 0 ? ' kl-cat--big' : '') + (i === 5 ? ' kl-cat--wide' : '') + '" style="--tint:' + a[2] + ';--d:' + (i * .06) + 's" href="collection.html?cat=' + c.id + '">' +
      KL.art({ style: a[0], color: a[1], pattern: a[3], skin: a[4] }) +
      '<span class="kl-cat__go"><svg viewBox="0 0 24 24"><path d="M14 6l-6 6 6 6"/></svg></span>' +
      '<h3>' + c.name + '</h3><p>' + c.blurb + '</p></a>';
  }).join('');

  /* ---------- סיפור הצבע (נעוץ בגלילה) ---------- */
  (function color() {
    var keys = ['rose', 'wine', 'sage', 'mustard', 'night', 'mist', 'clay', 'cream'];
    var notes = {
      rose: 'רך ומחמיא לכל גוון עור. הגוון שהכי קל להתחיל איתו.',
      wine: 'עמוק וחגיגי. יפה במיוחד בקטיפה ובחורף.',
      sage: 'ירוק רגוע שהולך עם ג׳ינס, עם לבן ועם שבת.',
      mustard: 'כתם של שמש. מרים בגד שחור או כחול כהה.',
      night: 'כהה בלי להיות שחור. הולך עם כל דבר בארון.',
      mist: 'תכלת מעושן, קליל. נהדר בשיפון לקיץ.',
      clay: 'חם ואדמתי. משתלב עם חומים ועם שמנת.',
      cream: 'נקי ובהיר. הבחירה לאירועים וללבן של שבת.'
    };
    var sec = $('.kl-color'), art = $('#colorArt'), names = $('#colorNames'), note = $('#colorNote'), dots = $('#colorDots'), link = $('#colorLink');
    art.innerHTML = KL.art({ style: 'bobo', color: KL.colors.rose.hex, skin: 3 });
    names.innerHTML = keys.map(function (k) { return '<span>' + KL.colors[k].name + '</span>'; }).join('');
    dots.innerHTML = keys.map(function (k) { return '<button class="kl-dot" style="--c:' + KL.colors[k].hex + '" data-k="' + k + '" aria-label="' + KL.colors[k].name + '"></button>'; }).join('');
    var cur = -1, sp = $$('span', names), ds = $$('.kl-dot', dots), svg = $('.kl-art', art);
    function set(i) {
      if (i === cur) return;
      sp.forEach(function (s, j) { s.classList.toggle('is-on', j === i); s.classList.toggle('is-out', j < i); });
      ds.forEach(function (d, j) { d.classList.toggle('is-on', j === i); });
      var k = keys[i], hex = KL.colors[k].hex;
      svg.style.setProperty('--w', hex); sec.style.setProperty('--tone', hex);
      note.textContent = notes[k]; link.href = 'collection.html?color=' + k;
      cur = i;
    }
    function onScroll() {
      var r = sec.getBoundingClientRect(), total = r.height - innerHeight;
      if (r.top > innerHeight || r.bottom < 0) return;
      var p = Math.min(.9999, Math.max(0, -r.top / total));
      set(Math.floor(p * keys.length));
    }
    dots.addEventListener('click', function (e) {
      var b = e.target.closest('.kl-dot'); if (!b) return;
      var i = keys.indexOf(b.dataset.k), r = sec.getBoundingClientRect(), total = r.height - innerHeight;
      scrollTo({ top: scrollY + r.top + total * ((i + .5) / keys.length), behavior: 'smooth' });
    });
    set(0); addEventListener('scroll', onScroll, { passive: true });
  })();

  /* ---------- קרוסלת מוצרים ---------- */
  (function feat() {
    var rail = $('#feat'), order = ['ruth', 'ela', 'hadas', 'esther', 'tamar', 'naomi', 'michal', 'yael'];
    rail.innerHTML = order.map(function (id, i) { return KL.card(KL.byId(id), i); }).join('');
    var step = function () { var c = $('.kl-card', rail); return c ? c.offsetWidth + 16 : 300; };
    $('#featNext').onclick = function () { rail.scrollBy({ left: -step() * 2, behavior: 'smooth' }); };
    $('#featPrev').onclick = function () { rail.scrollBy({ left: step() * 2, behavior: 'smooth' }); };
    var down = false, sx, sl, moved;
    rail.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; moved = 0; sx = e.clientX; sl = rail.scrollLeft; });
    addEventListener('pointermove', function (e) { if (!down) return; var dx = e.clientX - sx; moved = Math.abs(dx); if (moved > 6) rail.classList.add('is-drag'); rail.scrollLeft = sl - dx; });
    addEventListener('pointerup', function () { down = false; setTimeout(function () { rail.classList.remove('is-drag'); }, 0); });
  })();

  /* ---------- בדים ---------- */
  var FAB = [
    ['cotton', 'כותנה', 'נאחזת בשיער ולא זזה. הכי טובה למי שמתחילה לקשור.', '#E0A389'],
    ['viscose', 'ויסקוזה', 'רכה, נופלת יפה ונושמת. מתאימה לכל השנה.', '#8E9C8A'],
    ['chiffon', 'שיפון', 'דק וקליל לקיץ. כדאי לחבוש עם סרט החלקה מתחת.', '#8AA3B3'],
    ['velvet', 'קטיפה', 'חמה ועשירה. לחורף, לשבת ולחגים.', '#6E2A3F'],
    ['satin', 'סאטן', 'מבריק וחגיגי. לחתונות ולאירועים.', '#E6D5BD']
  ];
  $('#fabrics').innerHTML = FAB.map(function (f, i) {
    return '<li class="kl-reveal" style="--d:' + (i * .06) + 's"><a class="kl-fab__row" href="collection.html?fabric=' + f[0] + '"><h3>' + f[1] + '</h3><p>' + f[2] + '</p><span class="kl-fab__sw">' + KL.swatch(f[3]) + '</span></a></li>';
  }).join('');

  /* ---------- מדריך: אורכי קווים לאנימציית ציור ---------- */
  $$('.kl-draw:not(.kl-draw--dash)').forEach(function (p) { var l = Math.ceil(p.getTotalLength()); p.style.setProperty('--len', l); });
  $('#guideArt').innerHTML = KL.art({ style: 'bobo', color: '#B56B7F', skin: 0 });

  /* ---------- סיפור: דוגמיות בד בפרלקסה ---------- */
  (function story() {
    var box = $('#storySw'), cols = ['#B56B7F', '#C9A24A', '#8E9C8A', '#2F3A5C'];
    box.innerHTML = cols.map(function (c) { return '<div>' + KL.swatch(c) + '</div>'; }).join('');
    if (reduce) return;
    var els = $$('div', box), sp = [-.12, .1, -.06, .14];
    addEventListener('scroll', function () {
      var r = box.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
      var c = r.top + r.height / 2 - innerHeight / 2;
      els.forEach(function (e, i) { e.style.setProperty('--y', (c * sp[i]) + 'px'); });
    }, { passive: true });
  })();

  /* ---------- ניוזלטר (דמו) ---------- */
  $('#news').addEventListener('submit', function (e) {
    e.preventDefault();
    var v = $('#newsEmail').value.trim(), m = $('#newsMsg');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) { m.textContent = 'נראה שחסר משהו בכתובת. בדקי ונסי שוב.'; return; }
    m.textContent = 'נרשמת. בדמו לא נשלח מייל, אז הנה הקוד: KLILA10'; e.target.reset();
  });

  KL.observe();
})();
