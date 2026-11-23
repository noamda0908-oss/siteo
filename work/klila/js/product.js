/* כלילה — דף מוצר. בשופיפיי: main-product (גלריה, וריאנטים, הוספה לעגלה) + בלוקים של אמון ואקורדיונים. */
(function () {
  var KL = window.KL, $ = KL.$, $$ = KL.$$;
  var p = KL.byId(new URLSearchParams(location.search).get('id')) || KL.products[0];
  var color = p.colors[0], qty = 1;
  var care = {
    viscose: 'כביסה עדינה ב-30°, ייבוש בתלייה. גיהוץ בחום נמוך.', cotton: 'כביסה ב-30°–40°. מתרככת מכביסה לכביסה.',
    chiffon: 'כביסה ביד או בשקית כביסה, ייבוש בתלייה.', velvet: 'כביסה ביד במים קרים. לא לגהץ, לנער ולתלות.',
    satin: 'כביסה ביד במים קרים, ייבוש בצל. גיהוץ מהצד ההפוך.', jersey: 'כביסה ב-30°, אפשר במייבש בחום נמוך.'
  };
  var pic = function (big) { return '<img src="' + KL.img(p, big) + '" alt="' + p.name + '">'; };

  document.title = p.name + ' | כלילה';
  $('#crumbs').innerHTML = '<a href="index.html">בית</a><span aria-hidden="true">/</span><a href="collection.html?cat=' + p.cat + '">' + KL.catName(p.cat) + '</a><span aria-hidden="true">/</span><span>' + p.name + '</span>';

  $('#pdp').innerHTML =
    '<div class="kl-gallery" style="--pbg:' + p.bg + '">' +
      '<div class="kl-gallery__main kl-arch-in" id="gMain">' + pic(true) + '</div>' +
      '<div class="kl-gallery__thumbs">' +
        '<button class="kl-thumb is-on" data-v="full" aria-label="מבט מלא">' + pic() + '</button>' +
        '<button class="kl-thumb kl-thumb--zoom" data-v="zoom" aria-label="תקריב">' + pic() + '</button>' +
        '<button class="kl-thumb kl-thumb--side" data-v="side" aria-label="הבד מקרוב">' + pic() + '</button>' +
        '<button class="kl-thumb kl-thumb--low" data-v="low" aria-label="הלוק המלא">' + pic() + '</button>' +
      '</div></div>' +
    '<div class="kl-pdp__info">' +
      (p.tag ? '<span class="kl-pdp__tag kl-reveal">' + p.tag + '</span>' : '') +
      '<h1 class="kl-lines">' + p.name + '</h1>' +
      '<div class="kl-pdp__price kl-reveal" style="--d:.15s">' + KL.money(p.price) + '</div>' +
      '<p class="kl-pdp__short kl-reveal" style="--d:.2s">' + p.short + '</p>' +
      '<div class="kl-opt kl-reveal" style="--d:.25s"><div class="kl-opt__label">גוון: <b id="colorName"></b> <b id="colorHint"></b></div><div class="kl-dots" id="pColors">' +
        p.colors.map(function (k) { return '<button class="kl-dot" style="--c:' + KL.colors[k].hex + '" data-k="' + k + '" aria-label="' + KL.colors[k].name + '"></button>'; }).join('') + '</div></div>' +
      '<div class="kl-buy kl-reveal" style="--d:.3s"><div class="kl-qty"><button id="qMinus" aria-label="פחות">−</button><span id="qVal">1</span><button id="qPlus" aria-label="עוד">+</button></div>' +
        '<button class="kl-btn" id="addBtn">הוספה לעגלה</button></div>' +
      '<div class="kl-stock kl-reveal" style="--d:.33s">במלאי, יוצא למשלוח תוך יום עסקים</div>' +
      '<div class="kl-trust kl-reveal" style="--d:.36s">' +
        '<div><svg viewBox="0 0 24 24"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17.5" cy="18" r="1.8"/></svg>משלוח חינם מעל ' + KL.money(KL.FREE_SHIPPING) + '</div>' +
        '<div><svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 1 2.6 5.9"/><path d="M4 18v-5h5"/></svg>החלפה תוך 14 יום</div>' +
        '<div><svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>תשלום מאובטח</div>' +
        '<div><svg viewBox="0 0 24 24"><path d="M12 4a8 8 0 0 0-6.9 12L4 20l4.1-1A8 8 0 1 0 12 4z"/></svg>ייעוץ בוואטסאפ</div></div>' +
      '<div class="kl-reveal" style="--d:.4s">' +
        '<details class="kl-acc" open><summary>על המוצר</summary><div class="kl-acc__body"><p>' + p.desc + '</p></div></details>' +
        '<details class="kl-acc"><summary>בד, מידות וטיפול</summary><div class="kl-acc__body"><ul><li>בד: ' + KL.fabrics[p.fabric] + '</li><li>מידות: ' + p.size + '</li><li>' + care[p.fabric] + '</li></ul></div></details>' +
        '<details class="kl-acc"><summary>משלוחים והחזרות</summary><div class="kl-acc__body"><ul><li>שליח עד הבית, 2–4 ימי עסקים: ₪29. חינם מעל ' + KL.money(KL.FREE_SHIPPING) + '.</li><li>נקודת איסוף: ₪15.</li><li>החלפה או החזרה תוך 14 יום, כשהפריט חדש ובאריזתו.</li></ul><p style="margin-top:.6rem"><a class="kl-link" href="shipping.html">כל הפרטים</a></p></div></details>' +
        (p.cat === 'scarves' ? '<details class="kl-acc"><summary>איך קושרים?</summary><div class="kl-acc__body"><p>מקפלים למשולש, מניחים על קו השיער, מצליבים מאחור וקושרים מלמעלה. <a class="kl-link" href="index.html#guide">למדריך המלא</a></p></div></details>' : '') +
      '</div></div>';

  $('#sticky').innerHTML = '<div><b>' + p.name + '</b><span>' + KL.money(p.price) + '</span></div><button class="kl-btn" id="addBtn2">הוספה לעגלה</button>';

  function setColor(k) {
    color = k;
    $('#colorName').textContent = KL.colors[k].name;
    $('#colorHint').textContent = k === p.colors[0] ? '' : '(בתמונה: ' + KL.colors[p.colors[0]].name + ')';
    $$('#pColors .kl-dot').forEach(function (d) { d.classList.toggle('is-on', d.dataset.k === k); });
  }
  var V = { full: [1, '50%', '30%'], zoom: [1.9, '50%', '22%'], side: [2.6, '38%', '14%'], low: [1.7, '50%', '92%'] };
  function view(v) {
    var m = $('#gMain');
    $$('.kl-thumb').forEach(function (t) { t.classList.toggle('is-on', t.dataset.v === v); });
    m.style.setProperty('--zoom', V[v][0]); m.style.setProperty('--ox', V[v][1]); m.style.setProperty('--oy', V[v][2]);
    m.dataset.v = v;
  }
  function add() { KL.cart.add(p.id, color, qty); }

  $('#pColors').onclick = function (e) { var b = e.target.closest('.kl-dot'); if (b) setColor(b.dataset.k); };
  $('.kl-gallery__thumbs').onclick = function (e) { var b = e.target.closest('.kl-thumb'); if (b) view(b.dataset.v); };
  /* זום שעוקב אחרי העכבר על התמונה הראשית */
  var gm = $('#gMain');
  gm.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    var r = gm.getBoundingClientRect();
    gm.style.setProperty('--zoom', 1.8); gm.style.setProperty('--ox', ((e.clientX - r.left) / r.width * 100) + '%'); gm.style.setProperty('--oy', ((e.clientY - r.top) / r.height * 100) + '%');
  });
  gm.addEventListener('pointerleave', function () { view(gm.dataset.v || 'full'); });
  $('#qPlus').onclick = function () { qty = Math.min(9, qty + 1); $('#qVal').textContent = qty; };
  $('#qMinus').onclick = function () { qty = Math.max(1, qty - 1); $('#qVal').textContent = qty; };
  $('#addBtn').onclick = add; $('#addBtn2').onclick = add;
  var q = new URLSearchParams(location.search).get('color');
  setColor(q && p.colors.indexOf(q) > -1 ? q : color);

  /* פס קנייה נעוץ במובייל */
  document.body.classList.add('has-sticky');
  new IntersectionObserver(function (en) { $('#sticky').classList.toggle('is-on', !en[0].isIntersecting && en[0].boundingClientRect.top < 0); }).observe($('#addBtn'));

  /* מוצרים משלימים: סרט החלקה תמיד ראשון למטפחות */
  var rel = KL.products.filter(function (x) { return x.id !== p.id && (x.cat === p.cat || x.cat === 'extras'); });
  rel.sort(function (a, b) { return (b.cat === 'extras') - (a.cat === 'extras'); });
  if (rel.length < 4) rel = rel.concat(KL.products.filter(function (x) { return x.id !== p.id && rel.indexOf(x) < 0; }));
  $('#related').innerHTML = rel.slice(0, 4).map(KL.card).join('');

  /* כותרת מונפשת נוצרה אחרי app.js — מפצלים שוב */
  $$('.kl-lines').forEach(function (h) { if (h.dataset.done) return; h.dataset.done = 1; h.innerHTML = '<span class="kl-ln"><span>' + h.innerHTML + '</span></span>'; });
  KL.observe();
})();
