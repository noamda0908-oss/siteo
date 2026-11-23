/* כלילה — דף הבית: הירו, פס מילים, קטגוריות, סיפור הצבע בגלילה, קרוסלה, בדים. */
(function () {
  var KL = window.KL, $ = KL.$, $$ = KL.$$;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover:hover) and (min-width:900px)').matches;

  /* ---------- מנוע גלילה אחד לכל האפקטים ---------- */
  var jobs = [], ticking = false;
  function onScroll() { if (ticking) return; ticking = true; requestAnimationFrame(function () { ticking = false; for (var i = 0; i < jobs.length; i++) jobs[i](); }); }
  addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll);

  /* ---------- הירו: פרלקסה ---------- */
  (function hero() {
    var img = $('.kl-hero__media img'); if (reduce) return;
    jobs.push(function () { if (scrollY > innerHeight * 1.2) return; img.style.setProperty('--py', (scrollY * -.08) + 'px'); img.style.setProperty('--ps', 1 + scrollY * .00022); });
  })();

  /* ---------- פס מילים ענק ---------- */
  (function band() {
    var words = ['מטפחות', 'טורבנים', 'סרטים', 'בובו ונפח', 'כובעים', 'לונגים', 'קשורים מראש'];
    var one = words.map(function (w) { return '<span>' + w + '</span><i></i>'; }).join('');
    var rows = $$('.kl-band__row');
    rows[0].innerHTML = one + one + one + one + one + one;
    var sec = $('.kl-band'), t0 = 0;
    function place() {
      var r = sec.getBoundingClientRect(); if (r.bottom < -200 || r.top > innerHeight + 200) return;
      var p = (innerHeight - r.top) * .12 + t0;
      rows.forEach(function (row) {
        var third = row.scrollWidth / 3, s = +row.dataset.speed, x = p % third;
        row.style.transform = 'translate3d(' + (s < 0 ? -x : x - third) + 'px,0,0)';
      });
    }
    jobs.push(place); place();
    if (!reduce) (function drift() { t0 += .25; place(); requestAnimationFrame(drift); })();
  })();

  /* ---------- קטגוריות: פסים שנפתחים ---------- */
  (function cats() {
    var IMG = { scarves: 'ela', turbans: 'ruth', bobo: 'shira', bands: 'michal', hats: 'yael', extras: 'grip' };
    var box = $('#cats');
    box.innerHTML = KL.cats.map(function (c, i) {
      var p = KL.byId(IMG[c.id]);
      return '<a class="kl-cat' + (i === 0 ? ' is-open' : '') + '" style="--tint:' + p.bg + '" href="collection.html?cat=' + c.id + '">' +
        '<img src="img/' + p.id + '.webp" alt="" loading="lazy">' +
        '<span class="kl-cat__n">0' + (i + 1) + '</span>' +
        '<span class="kl-cat__go"><svg viewBox="0 0 24 24"><path d="M14 6l-6 6 6 6"/></svg></span>' +
        '<h3>' + c.name + '</h3><p>' + c.blurb + '</p></a>';
    }).join('');
    var els = $$('.kl-cat', box);
    var open = function (el) { els.forEach(function (x) { x.classList.toggle('is-open', x === el); }); };
    els.forEach(function (el) {
      el.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') open(el); });
      el.addEventListener('focus', function () { open(el); });
    });
  })();

  /* ---------- סיפור הצבע (נעוץ בגלילה) ---------- */
  (function color() {
    var T = [
      ['rose', 'ela', 'רך ומחמיא לכל גוון עור. הגוון שהכי קל להתחיל איתו.'],
      ['wine', 'ruth', 'עמוק וחגיגי. יפה במיוחד בג׳רסי ובקטיפה.'],
      ['peach', 'shira', 'חם ושמח. מאיר את הפנים גם ביום אפור.'],
      ['mist', 'tamar', 'תכלת מעושן, קליל. נהדר בשיפון לקיץ.'],
      ['clay', 'michal', 'חם ואדמתי. משתלב עם ג׳ינס ועם שמנת.'],
      ['sage', 'hadas', 'ירוק רגוע שהולך עם לבן ועם שבת.'],
      ['night', 'naomi', 'כהה בלי להיות שחור. הולך עם כל דבר בארון.'],
      ['cream', 'esther', 'נקי ומבריק. הבחירה לאירועים ולחגים.']
    ];
    var sec = $('.kl-color'), stage = $('#colorStage'), names = $('#colorNames'), note = $('#colorNote'), dots = $('#colorDots'), link = $('#colorLink'), num = $('#colorNum');
    stage.innerHTML = T.map(function (t) { return '<img src="img/' + t[1] + '.webp" alt="" loading="lazy">'; }).join('');
    names.innerHTML = T.map(function (t) { return '<span>' + KL.colors[t[0]].name + '</span>'; }).join('');
    dots.innerHTML = T.map(function (t) { return '<button class="kl-dot" style="--c:' + KL.colors[t[0]].hex + '" aria-label="' + KL.colors[t[0]].name + '"></button>'; }).join('');
    $('#colorTot').textContent = '/ 0' + T.length;
    var cur = -1, sp = $$('span', names), ds = $$('.kl-dot', dots), im = $$('img', stage);
    function set(i) {
      if (i === cur) return;
      im.forEach(function (m, j) { m.classList.toggle('is-prev', j === cur); m.classList.toggle('is-on', j === i); });
      sp.forEach(function (s, j) { s.classList.toggle('is-on', j === i); s.classList.toggle('is-out', j < i); });
      ds.forEach(function (d, j) { d.classList.toggle('is-on', j === i); });
      var p = KL.byId(T[i][1]);
      sec.style.setProperty('--tone', p.bg);
      note.textContent = T[i][2]; link.href = 'product.html?id=' + p.id; link.textContent = p.name + ', ' + KL.money(p.price);
      num.textContent = '0' + (i + 1);
      cur = i;
    }
    function tick() {
      var r = sec.getBoundingClientRect(), total = r.height - innerHeight;
      if (r.top > innerHeight || r.bottom < 0) return;
      set(Math.floor(Math.min(.9999, Math.max(0, -r.top / total)) * T.length));
    }
    ds.forEach(function (d, i) {
      d.addEventListener('click', function () {
        var r = sec.getBoundingClientRect(), total = r.height - innerHeight;
        scrollTo({ top: scrollY + r.top + total * ((i + .5) / T.length), behavior: 'smooth' });
      });
    });
    set(0); jobs.push(tick);
  })();

  /* ---------- קרוסלת מוצרים ---------- */
  (function feat() {
    var rail = $('#feat'), order = ['ruth', 'ela', 'hadas', 'esther', 'tamar', 'naomi', 'michal', 'yael', 'avigail', 'shira'];
    rail.innerHTML = order.map(function (id, i) { return KL.card(KL.byId(id), i); }).join('');
    var step = function () { var c = $('.kl-card', rail); return c ? c.offsetWidth + 16 : 300; };
    $('#featNext').onclick = function () { rail.scrollBy({ left: -step() * 2, behavior: 'smooth' }); };
    $('#featPrev').onclick = function () { rail.scrollBy({ left: step() * 2, behavior: 'smooth' }); };
    var down = false, sx, sl;
    rail.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; sx = e.clientX; sl = rail.scrollLeft; });
    addEventListener('pointermove', function (e) { if (!down) return; var dx = e.clientX - sx; if (Math.abs(dx) > 6) rail.classList.add('is-drag'); rail.scrollLeft = sl - dx; });
    addEventListener('pointerup', function () { down = false; setTimeout(function () { rail.classList.remove('is-drag'); }, 0); });
  })();

  /* ---------- סיפור: פרלקסה על התמונות ---------- */
  (function story() {
    if (reduce) return;
    var pics = $$('.kl-story__pic img'), sp = [-.07, .11];
    jobs.push(function () {
      pics.forEach(function (im, i) {
        var r = im.parentNode.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
        im.style.setProperty('--y', ((r.top + r.height / 2 - innerHeight / 2) * sp[i] - r.height * .08) + 'px');
      });
    });
  })();

  /* ---------- בדים: תמונה שעוקבת אחרי העכבר ---------- */
  (function fabrics() {
    var FAB = [
      ['cotton', 'כותנה', 'נאחזת בשיער ולא זזה. הכי טובה למי שמתחילה לקשור.', 'hadas'],
      ['viscose', 'ויסקוזה', 'רכה, נופלת יפה ונושמת. מתאימה לכל השנה.', 'ela'],
      ['chiffon', 'שיפון', 'דק וקליל לקיץ. כדאי לחבוש עם סרט החלקה מתחת.', 'tamar'],
      ['velvet', 'קטיפה', 'חמה ועשירה. לחורף, לשבת ולחגים.', 'naomi'],
      ['satin', 'סאטן', 'מבריק וחגיגי. לחתונות ולאירועים.', 'esther']
    ];
    $('#fabrics').innerHTML = FAB.map(function (f, i) {
      return '<li class="kl-reveal" style="--d:' + (i * .06) + 's"><a class="kl-fab__row" data-img="' + f[3] + '" href="collection.html?fabric=' + f[0] + '"><h3>' + f[1] + '</h3><p>' + f[2] + '</p><img class="kl-fab__thumb" src="img/' + f[3] + '-s.webp" alt="" loading="lazy"></a></li>';
    }).join('');
    if (!fine) return;
    var fl = $('#fabFloat'), im = $('img', fl), x = 0, y = 0, tx = 0, ty = 0, on = false, lastX = 0, running = false;
    function loop() {
      if (running) return; running = true;
      (function f() {
        x += (tx - x) * .14; y += (ty - y) * .14;
        fl.style.setProperty('--x', x + 'px'); fl.style.setProperty('--y', y + 'px'); fl.style.setProperty('--r', Math.max(-8, Math.min(8, (x - lastX) * .6)) + 'deg');
        lastX = x;
        if (on || Math.abs(tx - x) > .5) requestAnimationFrame(f); else running = false;
      })();
    }
    $$('.kl-fab__row').forEach(function (row) {
      row.addEventListener('pointerenter', function () { im.src = 'img/' + row.dataset.img + '-s.webp'; fl.classList.add('is-on'); on = true; loop(); });
      row.addEventListener('pointerleave', function () { fl.classList.remove('is-on'); on = false; });
    });
    addEventListener('pointermove', function (e) { tx = e.clientX - 290; ty = e.clientY - 160; }, { passive: true });
  })();

  /* ---------- מדריך: אורכי קווים לאנימציית ציור ---------- */
  $$('.kl-draw:not(.kl-draw--dash)').forEach(function (p) { p.style.setProperty('--len', Math.ceil(p.getTotalLength())); });

  /* ---------- ניוזלטר (דמו) ---------- */
  $('#news').addEventListener('submit', function (e) {
    e.preventDefault();
    var v = $('#newsEmail').value.trim(), m = $('#newsMsg');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) { m.textContent = 'נראה שחסר משהו בכתובת. בדקי ונסי שוב.'; return; }
    m.textContent = 'נרשמת. בדמו לא נשלח מייל, אז הנה הקוד: KLILA10'; e.target.reset();
  });

  onScroll(); KL.observe();
})();
