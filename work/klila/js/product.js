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
  var tint = function (k) { return 'color-mix(in srgb,' + KL.colors[k].hex + ' 22%,#FFFAF7)'; };
  var art = function () { return KL.art({ style: p.style, color: KL.colors[color].hex, pattern: p.pattern, skin: p.skin }); };

  document.title = p.name + ' | כלילה';
  $('#crumbs').innerHTML = '<a href="index.html">בית</a><span aria-hidden="true">/</span><a href="collection.html?cat=' + p.cat + '">' + KL.catName(p.cat) + '</a><span aria-hidden="true">/</span><span>' + p.name + '</span>';

  $('#pdp').innerHTML =
    '<div class="kl-gallery">' +
      '<div class="kl-gallery__main kl-arch-in" id="gMain">' + art() + '</div>' +
      '<div class="kl-gallery__thumbs">' +
        '<button class="kl-thumb is-on" data-v="full" aria-label="מבט מלא">' + art() + '</button>' +
        '<button class="kl-thumb kl-thumb--zoom" data-v="zoom" aria-label="תקריב">' + art() + '</button>' +
        '<button class="kl-thumb kl-thumb--side" data-v="side" aria-label="מהצד">' + art() + '</button>' +
        '<button class="kl-thumb" data-v="fabric" aria-label="הבד מקרוב">' + KL.swatch(KL.colors[color].hex) + '</button>' +
      '</div></div>' +
    '<div class="kl-pdp__info">' +
      (p.tag ? '<span class="kl-pdp__tag kl-reveal">' + p.tag + '</span>' : '') +
      '<h1 class="kl-lines">' + p.name + '</h1>' +
      '<div class="kl-pdp__price kl-reveal" style="--d:.15s">' + KL.money(p.price) + '</div>' +
      '<p class="kl-pdp__short kl-reveal" style="--d:.2s">' + p.short + '</p>' +
      '<div class="kl-opt kl-reveal" style="--d:.25s"><div class="kl-opt__label">גוון: <b id="colorName"></b></div><div class="kl-dots" id="pColors">' +
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
    color = k; var hex = KL.colors[k].hex;
    $('#colorName').textContent = KL.colors[k].name;
    $$('#pColors .kl-dot').forEach(function (d) { d.classList.toggle('is-on', d.dataset.k === k); });
    $$('.kl-gallery .kl-art,.kl-gallery .kl-swatch').forEach(function (s) { s.style.setProperty('--w', hex); });
    $('.kl-gallery').style.setProperty('--pbg', tint(k));
  }
  function view(v) {
    var m = $('#gMain');
    $$('.kl-thumb').forEach(function (t) { t.classList.toggle('is-on', t.dataset.v === v); });
    if (v === 'fabric') { m.innerHTML = KL.swatch(KL.colors[color].hex); m.firstChild.style.cssText += ';width:100%;height:100%'; return; }
    if (!$('.kl-art', m)) m.innerHTML = art();
    m.style.setProperty('--zoom', v === 'zoom' ? 2 : v === 'side' ? 1.5 : 1.06);
    m.style.setProperty('--ox', v === 'side' ? '72%' : '50%');
    m.style.setProperty('--oy', v === 'zoom' ? '24%' : v === 'side' ? '30%' : '40%');
  }
  function add() { KL.cart.add(p.id, color, qty); }

  $('#pColors').onclick = function (e) { var b = e.target.closest('.kl-dot'); if (b) setColor(b.dataset.k); };
  $('.kl-gallery__thumbs').onclick = function (e) { var b = e.target.closest('.kl-thumb'); if (b) view(b.dataset.v); };
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
