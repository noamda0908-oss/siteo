/* כלילה — מעטפת האתר: כותרת, פוטר, עגלה נשלפת, כרטיסי מוצר, חשיפה בגלילה.
   בשופיפיי: כותרת/פוטר/עגלה הם סקשנים של התבנית; הלוגיקה של העגלה מוחלפת ב-Cart API. */
(function () {
  var KL = window.KL;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  KL.$ = $; KL.$$ = $$;

  var LOGO = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 23C5 12 10 5 16 5s11 7 11 18"/><path d="M10 23c0-7 2.5-12 6-12s6 5 6 12"/><path d="M3 27h26"/></svg>';
  var I = {
    cart: '<svg viewBox="0 0 24 24"><path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>',
    menu: '<svg viewBox="0 0 24 24"><path d="M4 8h16M4 16h16"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
    wa: '<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3z"/><path d="M9.2 8.4c-.5 1.1.2 2.8 1.6 4.2 1.4 1.4 3.1 2.1 4.2 1.6" fill="none" stroke="#25D366" stroke-width="1.7" stroke-linecap="round"/></svg>'
  };
  KL.icons = I;

  var NAV = [
    ['collection.html', 'כל הקולקציה'],
    ['collection.html?cat=scarves', 'מטפחות'],
    ['collection.html?cat=turbans', 'טורבנים'],
    ['collection.html?cat=bands', 'סרטים'],
    ['collection.html?cat=extras', 'אביזרים'],
    ['index.html#guide', 'מדריך קשירה'],
    ['about.html', 'הסיפור שלנו']
  ];

  /* ---------- עגלה ---------- */
  var mem = [];
  KL.cart = {
    read: function () { try { return JSON.parse(localStorage.getItem('klila-cart')) || []; } catch (e) { return mem; } },
    write: function (c) { mem = c; try { localStorage.setItem('klila-cart', JSON.stringify(c)); } catch (e) {} renderCart(); },
    add: function (id, color, qty) {
      var c = KL.cart.read(), hit = c.find(function (l) { return l.id === id && l.color === color; });
      if (hit) hit.qty += (qty || 1); else c.push({ id: id, color: color, qty: qty || 1 });
      KL.cart.write(c); bump(); openCart();
    },
    count: function () { return KL.cart.read().reduce(function (n, l) { return n + l.qty; }, 0); },
    total: function () { return KL.cart.read().reduce(function (n, l) { var p = KL.byId(l.id); return n + (p ? p.price * l.qty : 0); }, 0); },
    clear: function () { KL.cart.write([]); }
  };

  function bump() { var b = $('.kl-cart-count'); if (!b) return; b.classList.remove('is-bump'); void b.offsetWidth; b.classList.add('is-bump'); }
  function openCart() { $('.kl-drawer').classList.add('is-open'); $('.kl-scrim').classList.add('is-open'); document.body.classList.add('kl-lock'); }
  function closeCart() { $('.kl-drawer').classList.remove('is-open'); $('.kl-scrim').classList.remove('is-open'); document.body.classList.remove('kl-lock'); }
  KL.openCart = openCart;

  function renderCart() {
    var c = KL.cart.read(), n = KL.cart.count(), total = KL.cart.total();
    $$('.kl-cart-count').forEach(function (b) { b.textContent = n; b.classList.toggle('is-on', n > 0); });
    var box = $('.kl-drawer__items'); if (!box) return;
    var left = KL.FREE_SHIPPING - total;
    $('.kl-ship__txt').innerHTML = !n ? 'משלוח חינם בהזמנה מעל ' + KL.money(KL.FREE_SHIPPING) :
      left > 0 ? 'עוד <b>' + KL.money(left) + '</b> ויש לך משלוח חינם' : '<b>יש לך משלוח חינם</b>';
    $('.kl-ship__fill').style.transform = 'scaleX(' + Math.min(1, total / KL.FREE_SHIPPING) + ')';
    $('.kl-drawer__foot').hidden = !n;
    if (!n) {
      box.innerHTML = '<div class="kl-empty">' + LOGO + '<p>העגלה ריקה עדיין.</p><a class="kl-btn" href="collection.html">לקולקציה</a></div>';
      return;
    }
    box.innerHTML = c.map(function (l, i) {
      var p = KL.byId(l.id), col = KL.colors[l.color];
      return '<div class="kl-line"><a class="kl-line__img" href="product.html?id=' + p.id + '">' + KL.art({ style: p.style, color: col.hex, pattern: p.pattern, skin: p.skin }) + '</a>' +
        '<div><div class="kl-line__name">' + p.name + '</div><div class="kl-line__opt">' + col.name + '</div>' +
        '<div class="kl-qty"><button data-q="-1" data-i="' + i + '" aria-label="פחות">−</button><span>' + l.qty + '</span><button data-q="1" data-i="' + i + '" aria-label="עוד">+</button></div></div>' +
        '<div><div class="kl-line__price">' + KL.money(p.price * l.qty) + '</div><button class="kl-line__rm" data-rm="' + i + '">הסרה</button></div></div>';
    }).join('');
    $('.kl-drawer__total').textContent = KL.money(total);
    document.dispatchEvent(new CustomEvent('kl:cart'));
  }

  /* ---------- כרטיס מוצר ---------- */
  KL.card = function (p, i) {
    var c0 = KL.colors[p.colors[0]];
    return '<article class="kl-card kl-reveal" style="--d:' + ((i % 4) * 0.07) + 's" data-id="' + p.id + '" data-color="' + p.colors[0] + '">' +
      '<div class="kl-card__top"><a class="kl-card__media" href="product.html?id=' + p.id + '" aria-label="' + p.name + '">' +
      KL.art({ style: p.style, color: c0.hex, pattern: p.pattern, skin: p.skin }) +
      (p.tag ? '<span class="kl-card__tag">' + p.tag + '</span>' : '') + '</a>' +
      '<button class="kl-card__quick" aria-label="הוספה לעגלה: ' + p.name + '">' + I.plus + '</button></div>' +
      '<div><div class="kl-card__row"><a class="kl-card__name" href="product.html?id=' + p.id + '">' + p.name + '</a><span class="kl-card__price">' + KL.money(p.price) + '</span></div>' +
      '<div class="kl-card__meta">' + KL.fabrics[p.fabric] + '</div>' +
      '<div class="kl-dots">' + p.colors.map(function (k, j) { return '<button class="kl-dot' + (j ? '' : ' is-on') + '" style="--c:' + KL.colors[k].hex + '" data-c="' + k + '" aria-label="' + KL.colors[k].name + '"></button>'; }).join('') + '</div></div></article>';
  };

  document.addEventListener('click', function (e) {
    var t = e.target.closest('.kl-dot');
    if (t && t.closest('.kl-card')) {
      var card = t.closest('.kl-card');
      $$('.kl-dot', card).forEach(function (d) { d.classList.toggle('is-on', d === t); });
      card.dataset.color = t.dataset.c;
      $('.kl-art', card).style.setProperty('--w', KL.colors[t.dataset.c].hex);
      return;
    }
    t = e.target.closest('.kl-card__quick');
    if (t) { var cd = t.closest('.kl-card'); KL.cart.add(cd.dataset.id, cd.dataset.color, 1); return; }
    t = e.target.closest('[data-q]');
    if (t) { var c = KL.cart.read(), l = c[+t.dataset.i]; l.qty += +t.dataset.q; if (l.qty < 1) c.splice(+t.dataset.i, 1); KL.cart.write(c); return; }
    t = e.target.closest('[data-rm]');
    if (t) { var c2 = KL.cart.read(); c2.splice(+t.dataset.rm, 1); KL.cart.write(c2); return; }
    if (e.target.closest('[data-cart-open]')) { e.preventDefault(); openCart(); return; }
    if (e.target.closest('[data-cart-close]') || e.target.classList.contains('kl-scrim')) { closeCart(); return; }
    if (e.target.closest('[data-menu-open]')) { $('.kl-menu').classList.add('is-open'); document.body.classList.add('kl-lock'); return; }
    if (e.target.closest('[data-menu-close]') || e.target.closest('.kl-menu a')) { $('.kl-menu').classList.remove('is-open'); document.body.classList.remove('kl-lock'); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeCart(); $('.kl-menu').classList.remove('is-open'); document.body.classList.remove('kl-lock'); } });

  KL.toast = function (msg) {
    var t = $('.kl-toast'); t.textContent = msg; t.classList.add('is-on');
    clearTimeout(KL._tt); KL._tt = setTimeout(function () { t.classList.remove('is-on'); }, 2400);
  };

  /* ---------- הזרקת המעטפת ---------- */
  function shell() {
    var here = location.pathname.split('/').pop() || 'index.html';
    var ann = ['משלוח חינם בהזמנה מעל ₪299', 'החלפה והחזרה תוך 14 יום', 'משלוח עד הבית תוך 2–4 ימי עסקים', 'תשלום מאובטח באשראי, ביט ו-Apple Pay'];
    var annHtml = '<span>' + ann.map(function (a) { return a; }).join('</span><span>') + '</span>';
    var top = document.createElement('div');
    top.innerHTML =
      '<div class="kl-announce" data-section="klila-announcement"><div class="kl-announce__track">' + annHtml + annHtml + annHtml + annHtml + '</div></div>' +
      '<header class="kl-header" data-section="klila-header"><div class="kl-wrap kl-header__in">' +
        '<button class="kl-icon kl-burger" data-menu-open aria-label="תפריט">' + I.menu + '</button>' +
        '<nav class="kl-nav" aria-label="ראשי">' + NAV.slice(1, 6).map(function (n) { return '<a href="' + n[0] + '">' + n[1] + '</a>'; }).join('') + '</nav>' +
        '<a class="kl-logo" href="index.html" aria-label="כלילה — דף הבית">' + LOGO + 'כלילה</a>' +
        '<div class="kl-header__tools"><button class="kl-icon" data-cart-open aria-label="עגלה">' + I.cart + '<span class="kl-cart-count">0</span></button></div>' +
      '</div></header>' +
      '<nav class="kl-menu" aria-label="תפריט נייד"><button class="kl-icon kl-menu__close" data-menu-close aria-label="סגירה">' + I.x + '</button>' +
        NAV.map(function (n) { return '<a href="' + n[0] + '">' + n[1] + '</a>'; }).join('') + '</nav>';
    document.body.prepend.apply(document.body, Array.prototype.slice.call(top.children));

    var bot = document.createElement('div');
    bot.innerHTML =
      '<footer class="kl-footer" data-section="klila-footer"><div class="kl-footer__word" aria-hidden="true">כלילה</div><div class="kl-wrap" style="position:relative">' +
        '<div class="kl-footer__grid">' +
          '<div class="kl-footer__brand"><a class="kl-logo" href="index.html">' + LOGO + 'כלילה</a><p>כיסויי ראש שנעים לחבוש מהבוקר עד הערב. נבחרים בד אחרי בד, ונשלחים אלייך הביתה.</p></div>' +
          '<div><h3>חנות</h3><ul><li><a href="collection.html">כל הקולקציה</a></li><li><a href="collection.html?cat=scarves">מטפחות</a></li><li><a href="collection.html?cat=turbans">טורבנים</a></li><li><a href="collection.html?cat=bands">סרטים וחצי כיסוי</a></li><li><a href="collection.html?cat=extras">אביזרים</a></li></ul></div>' +
          '<div><h3>שירות</h3><ul><li><a href="shipping.html">משלוחים</a></li><li><a href="shipping.html#returns">החלפות והחזרות</a></li><li><a href="index.html#guide">מדריך קשירה</a></li><li><a href="about.html">הסיפור שלנו</a></li><li><a href="shipping.html#contact">יצירת קשר</a></li></ul></div>' +
          '<div><h3>מידע</h3><ul><li><a href="shipping.html#terms">תקנון האתר</a></li><li><a href="shipping.html#privacy">מדיניות פרטיות</a></li><li><a href="shipping.html#a11y">הצהרת נגישות</a></li></ul>' +
            '<div class="kl-footer__pay" aria-label="אמצעי תשלום"><span class="kl-pay">VISA</span><span class="kl-pay">Mastercard</span><span class="kl-pay">bit</span><span class="kl-pay">Apple Pay</span></div></div>' +
        '</div>' +
        '<div class="kl-footer__bottom"><span>© 2026 כלילה. אתר הדגמה — שם, מוצרים ומחירים זמניים.</span><span>עיצוב ופיתוח: <a href="https://siteo.co.il" style="text-decoration:underline">Siteo</a></span></div>' +
      '</div></footer>' +
      '<div class="kl-scrim"></div>' +
      '<aside class="kl-drawer" data-section="klila-cart-drawer" aria-label="עגלת קניות">' +
        '<div class="kl-drawer__head"><h2>העגלה שלך</h2><button class="kl-icon" data-cart-close aria-label="סגירה">' + I.x + '</button></div>' +
        '<div class="kl-ship"><span class="kl-ship__txt"></span><div class="kl-ship__bar"><div class="kl-ship__fill"></div></div></div>' +
        '<div class="kl-drawer__items"></div>' +
        '<div class="kl-drawer__foot"><div class="kl-drawer__sum"><span>סכום ביניים</span><span class="kl-drawer__total"></span></div>' +
          '<a class="kl-btn kl-btn--full" href="checkout.html">מעבר לתשלום</a><p class="kl-drawer__note">משלוח ומע"מ מחושבים בקופה</p></div>' +
      '</aside>' +
      '<a class="kl-wa" href="https://wa.me/972500000000" target="_blank" rel="noopener" aria-label="שיחה בוואטסאפ">' + I.wa + '</a>' +
      '<div class="kl-demo">אתר הדגמה</div>' +
      '<div class="kl-toast" role="status"></div>';
    while (bot.firstChild) document.body.appendChild(bot.firstChild);

    $$('.kl-nav a').forEach(function (a) { if (a.getAttribute('href') === here + location.search) a.setAttribute('aria-current', 'page'); });
    if (here === 'checkout.html') { var w = $('.kl-wa'); if (w) w.remove(); }

    var hd = $('.kl-header'), last = 0;
    addEventListener('scroll', function () {
      var y = scrollY;
      hd.classList.toggle('is-scrolled', y > 10);
      hd.classList.toggle('is-hidden', y > 500 && y > last);
      last = y;
    }, { passive: true });
  }

  /* ---------- חשיפה בגלילה ---------- */
  KL.observe = function (root) {
    var els = $$('.kl-reveal:not(.is-in),.kl-arch-in:not(.is-in),.kl-lines:not(.is-in)', root);
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('is-in'); }); return; }
    var map = new Map();
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        if (!x.isIntersecting) return;
        (map.get(x.target) || [x.target]).forEach(function (t) { t.classList.add('is-in'); });
        io.unobserve(x.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0 });
    els.forEach(function (e) {
      /* אלמנט שנחשף ב-clip-path אינו "נראה" לצופה עצמו, לכן צופים בהורה שלו */
      if (e.classList.contains('kl-arch-in')) { var p = e.parentElement; map.set(p, (map.get(p) || []).concat(e)); io.observe(p); }
      else io.observe(e);
    });
  };

  /* פיצול כותרת לשורות מונפשות: <h2 class="kl-lines">שורה|שורה</h2> */
  function lines() {
    $$('.kl-lines').forEach(function (h) {
      if (h.dataset.done) return; h.dataset.done = 1;
      h.innerHTML = h.innerHTML.split('|').map(function (t, i) { return '<span class="kl-ln" style="--i:' + i + '"><span>' + t.trim() + '</span></span>'; }).join('');
    });
  }

  shell(); lines(); renderCart();
  document.addEventListener('DOMContentLoaded', function () { lines(); KL.observe(); });
  if (document.readyState !== 'loading') KL.observe();
})();
