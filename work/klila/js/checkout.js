/* כלילה — קופת הדגמה. בשופיפיי אין צורך בקובץ הזה: הקופה, הסליקה והמשלוחים מוגדרים בניהול החנות. */
(function () {
  var KL = window.KL, $ = KL.$, $$ = KL.$$;
  var SHIP = { home: 29, point: 15, self: 0 }, disc = 0;

  function calc() {
    var c = KL.cart.read(), sub = KL.cart.total();
    if (!c.length) {
      $('#coMain').innerHTML = '<div class="kl-done"><div class="kl-done__in"><h1>העגלה ריקה</h1><p>אין עדיין מה לשלם עליו. בחרי משהו יפה וחזרי.</p><a class="kl-btn" href="collection.html">לקולקציה</a></div></div>';
      return;
    }
    $('#sumItems').innerHTML = c.map(function (l) {
      var p = KL.byId(l.id), col = KL.colors[l.color];
      return '<div class="kl-line"><div class="kl-line__img">' + '<img src="' + KL.img(p) + '" alt=""></div><div><div class="kl-line__name">' + p.name + '</div><div class="kl-line__opt">' + col.name + ' × ' + l.qty + '</div></div><div class="kl-line__price">' + KL.money(p.price * l.qty) + '</div></div>';
    }).join('');
    var free = sub >= KL.FREE_SHIPPING, m = ($('input[name=ship]:checked') || {}).value || 'home';
    var ship = m === 'home' && free ? 0 : SHIP[m], d = Math.round(sub * disc);
    $('[data-ship-price=home]').textContent = free ? 'חינם' : KL.money(SHIP.home);
    $('[data-ship-price=point]').textContent = KL.money(SHIP.point);
    $('#sSub').textContent = KL.money(sub);
    $('#sDiscRow').hidden = !d; $('#sDisc').textContent = '−' + KL.money(d);
    $('#sShip').textContent = ship ? KL.money(ship) : 'חינם';
    $('#sTotal').textContent = KL.money(sub - d + ship);
    $('#payBtn').textContent = 'ביצוע הזמנה · ' + KL.money(sub - d + ship);
  }

  $$('input[name=ship]').forEach(function (r) { r.onchange = calc; });
  $$('input[name=pay]').forEach(function (r) { r.onchange = function () { $('#cardMock').hidden = this.value !== 'card'; }; });
  $('#couponBtn').onclick = function () {
    var v = $('#coupon').value.trim().toUpperCase(), m = $('#couponMsg');
    if (v === 'KLILA10') { disc = .1; m.textContent = 'הקוד הוחל: 10% הנחה.'; } else { disc = 0; m.textContent = v ? 'הקוד הזה לא מוכר. בדמו אפשר לנסות KLILA10.' : 'הקלידי קוד קופון.'; }
    calc();
  };

  $('#coForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var bad = null;
    $$('.kl-field input', this).forEach(function (i) {
      var ok = i.checkValidity(); i.parentNode.classList.toggle('is-bad', !ok); if (!ok && !bad) bad = i;
    });
    if (bad) { bad.focus(); bad.scrollIntoView({ block: 'center', behavior: 'smooth' }); return; }
    var name = this.fname.value.trim(), btn = $('#payBtn');
    btn.disabled = true; btn.textContent = 'מעבדת את ההזמנה…';
    setTimeout(function () {
      var n = 'KL-' + (1000 + Math.floor(Math.random() * 9000));
      KL.cart.clear();
      $('#coMain').innerHTML = '<div class="kl-done"><div class="kl-done__in"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46"/><path d="M30 52l14 14 27-30"/></svg>' +
        '<h1>תודה, ' + name.replace(/[<>&]/g, '') + '</h1><p>ההזמנה ' + n + ' התקבלה. באתר האמיתי יישלח עכשיו אישור למייל ו-SMS עם מספר מעקב.</p>' +
        '<p class="kl-co__notice">זו הזמנת הדגמה. לא בוצע חיוב ולא נשלח דבר.</p><a class="kl-btn" href="index.html">חזרה לדף הבית</a></div></div>';
      scrollTo(0, 0);
    }, 1300);
  });
  this.addEventListener('input', function (e) { var f = e.target.closest && e.target.closest('.kl-field'); if (f) f.classList.remove('is-bad'); });
  calc();
})();
