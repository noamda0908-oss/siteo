/* Yakiri shared: catalog, header/footer, cart, upload, checkout */
const API = 'https://dndqljbibficfscylteq.supabase.co/functions/v1/momento-api';
const LBL = { mom: 'לאמא', dad: 'לאבא', gf: 'לבת הזוג', bf: 'לבן הזוג', grandma: 'לסבתא', grandpa: 'לסבא', couple: 'לזוג ולבית' };
const COLORS3 = { name: 'צבע', values: ['זהב', 'כסף', 'רוז גולד'] };
const P = [
  { id: 'heart', m: 'heart', photo: 1, c: ['gf', 'mom', 'grandma'], name: 'שרשרת לב עם תמונה', price: 149, was: 219, tag: 'רב מכר',
    short: 'תליון לב עם התמונה שלכם בפנים. מתנה שהיא תענוד כל יום, קרוב ללב.',
    details: ['נירוסטה איכותית בציפוי זהב 18K, לא משחירה', 'שרשרת 45 ס״מ + 5 ס״מ הארכה', 'התמונה מודפסת בצבע מלא ומוגנת בשכבת זכוכית', 'מגיעה בקופסת קטיפה מוכנה למתנה'], opts: [COLORS3], text: 'חריטה בגב התליון (לא חובה)' },
  { id: 'proj', m: 'heart', photo: 1, c: ['gf', 'mom'], name: 'שרשרת הקרנה סודית', price: 149, was: 199, tag: 'הכי מרגש',
    short: 'נראית כמו תליון רגיל. מאירים בפנס הטלפון, והתמונה שלכם מופיעה על הקיר.',
    details: ['טכנולוגיית ננו־הקרנה: התמונה חרוטה בתוך אבן זעירה', 'רואים את התמונה כשמסתכלים מקרוב לתוך האבן או מאירים בפנס', 'נחושת בציפוי, שרשרת טיטניום, היפואלרגני', 'אורך 40 ס״מ + 5 ס״מ הארכה'], opts: [{ name: 'צבע', values: ['כסף', 'זהב'] }], text: '' },
  { id: 'card', m: 'card', photo: 1, c: ['dad', 'bf', 'grandpa'], name: 'כרטיס מתכת לארנק עם תמונה', price: 89, was: 129, tag: 'מתנה לאבא',
    short: 'תמונה וברכה חרוטים בלייזר על כרטיס מתכת בגודל כרטיס אשראי. נשאר איתו בארנק לתמיד.',
    details: ['נירוסטה 0.8 מ״מ, חריטת לייזר שלא נמחקת', 'בגודל כרטיס אשראי, נכנס לכל ארנק', 'תמונה בצד אחד, ברכה בצד השני', 'מתנה מושלמת למשוחררים, לחיילים ולמי שנוסע רחוק'], opts: [{ name: 'גימור', values: ['כסף', 'שחור'] }], text: 'ברכה בגב הכרטיס' },
  { id: 'wallet', m: 'wallet', photo: 1, c: ['dad', 'grandpa', 'bf'], name: 'ארנק עור חרוט עם תמונה ושמות', price: 169, was: 229,
    short: 'ארנק עור עם תמונה ושמות הילדים חרוטים בפנים. מתנה שאבא יראה לכל החברים.',
    details: ['עור איכותי בגוון חום כהה', '6 תאי כרטיסים, תא לשטרות ותא לתמונה', 'חריטת לייזר של התמונה ועד 4 שמות', 'מגיע בקופסת מתנה'], opts: [], text: 'שמות לחריטה (עד 4)' },
  { id: 'cube', m: 'cube', photo: 1, c: ['grandma', 'grandpa', 'mom', 'couple'], name: 'קריסטל תלת־ממד עם תמונה', price: 249, was: 349, tag: 'פרימיום',
    short: 'התמונה נחרטת בלייזר בתוך גוש קריסטל ומוארת מבסיס LED. סבא וסבתא מתרגשים, מובטח.',
    details: ['קריסטל K9 אופטי, חריטת לייזר פנימית בתלת־ממד', 'בסיס תאורה LED כלול', 'גודל 6×6×8 ס״מ', 'מומלץ: תמונה עם 1–3 אנשים, פנים ברורות'], opts: [], text: 'שורת טקסט בתחתית (לא חובה)' },
  { id: 'moon', m: 'moon', photo: 1, c: ['gf', 'mom', 'couple'], name: 'מנורת ירח עם תמונה', price: 199, was: 269,
    short: 'ירח מודפס בתלת־ממד, וכשהוא נדלק התמונה שלכם מופיעה בתוכו. 16 צבעים ושלט.',
    details: ['הדפסת תלת־ממד מחומר PLA ידידותי', '16 צבעי תאורה + שלט רחוק', 'נטענת ב־USB, עד 8 שעות פעולה', 'כולל מעמד עץ'], opts: [], text: 'טקסט על הירח (לא חובה)' },
  { id: 'plaque', m: 'plaque', photo: 1, c: ['gf', 'bf', 'couple'], name: 'לוח זכוכית "השיר שלנו"', price: 129, was: 179,
    short: 'תמונה זוגית עם קוד שיר. סורקים בטלפון, והשיר שלכם מתחיל להתנגן.',
    details: ['אקריליק שקוף בעובי 5 מ״מ', 'בסיס עץ עם תאורת LED חמה', 'קוד שיר שסורקים מהאפליקציה', 'גודל 15×20 ס״מ'], opts: [], text: 'שם השיר והזמר' },
  { id: 'hoodie', m: 'hoodie', photo: 1, c: ['bf', 'gf', 'dad'], name: 'סווטשירט עם פורטרט רקום', price: 229, was: 299, tag: 'חדש',
    short: 'התמונה שלכם הופכת לציור קו רקום, עם תאריך על השרוול. הלהיט של הרשתות בחו״ל.',
    details: ['כותנה עבה ורכה, גזרה יוניסקס', 'רקמה איכותית שלא נפרמת בכביסה', 'תאריך או שמות על השרוול', 'מידות S–XXL'], opts: [{ name: 'מידה', values: ['S', 'M', 'L', 'XL', 'XXL'] }, { name: 'צבע', values: ['נייבי', 'שמנת', 'שחור'] }], text: 'טקסט לשרוול (תאריך / שמות)' },
  { id: 'blanket', m: 'blanket', photo: 1, c: ['grandma', 'grandpa', 'mom', 'couple'], name: 'שמיכת פרווה עם תמונה', price: 299, was: 399,
    short: 'שמיכת שרפה רכה עם התמונה המשפחתית. החיבוק של הנכדים גם כשהם לא בבית.',
    details: ['צד אחד הדפסה חדה, צד שני פרוות שרפה', 'גודל 127×152 ס״מ', 'מכונת כביסה במחזור עדין', 'הצבעים לא דוהים'], opts: [], text: '' },
  { id: 'mug', m: 'mug', photo: 1, c: ['dad', 'grandpa', 'mom', 'grandma'], name: 'ספל עם תמונה והקדשה', price: 79, was: 99,
    short: 'ספל קרמי עם התמונה שלכם. הקפה של הבוקר מתחיל עם חיוך.',
    details: ['קרמיקה לבנה 330 מ״ל', 'הדפסה שלא דוהה במדיח', 'בטוח למיקרוגל', 'הקדשה בצד השני'], opts: [], text: 'הקדשה (לא חובה)' },
  { id: 'puzzle', m: 'puzzle', photo: 1, c: ['grandma', 'grandpa', 'couple'], name: 'פאזל משפחתי מתמונה', price: 129, was: 169,
    short: '500 חלקים מהתמונה שלכם, בקופסת פח מהודרת. ערב משפחתי מוכן.',
    details: ['500 חלקים מקרטון קשיח, גימור מבריק', 'קופסת פח עם התמונה על המכסה', 'גודל מוגמר כ־40×50 ס״מ', 'מתאים מגיל 9'], opts: [], text: '' },
  { id: 'name', m: 'name', photo: 0, c: ['gf', 'mom', 'grandma'], name: 'שרשרת שם בכתב יד', price: 129, was: 179,
    short: 'כל שם עד 10 אותיות, בכתב יד עדין. התכשיט שלא מורידים.',
    details: ['נירוסטה בציפוי זהב 18K, כסף או רוז גולד', 'שרשרת 45 ס״מ + 5 ס״מ הארכה', 'אותיות באנגלית בכתב יד', 'מגיעה בקופסת קטיפה'], opts: [COLORS3], text: 'השם (באנגלית, עד 10 אותיות)', required: true },
];
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function mock(m, text) {
  const ph = '<div class="ph-img"></div>';
  const map = {
    heart: `<div class="chain"><i></i><div class="heart ph-img"></div></div>`,
    card: `<div class="card">${ph}</div>`, wallet: `<div class="wallet">${ph}</div>`,
    cube: `<div class="cube">${ph}</div>`, moon: `<div class="moon">${ph}</div>`,
    plaque: `<div class="plaque">${ph}<b>${esc(text || 'השיר שלנו')}</b></div>`,
    hoodie: `<div class="hoodie">${ph}</div>`, blanket: `<div class="blanket ph-img"></div>`,
    mug: `<div class="mug">${ph}</div>`, puzzle: `<div class="puzzle ph-img"></div>`,
    name: `<div class="chain"><i></i><div class="nametag script">${esc(text || 'Noa')}</div></div>`,
  };
  return `<div class="mk">${map[m]}</div>`;
}

function card(p) {
  return `<a class="pcard reveal" href="product.html?id=${p.id}">
    <div class="ph"><img src="img/${p.id}.webp" alt="${esc(p.name)}" loading="lazy" width="900" height="900">
      ${p.tag ? `<span class="tag">${p.tag}</span>` : ''}<span class="quick"><span>${p.photo ? 'עצבו עם התמונה שלכם' : 'להתאמה אישית'}</span></span></div>
    <div class="for">${p.c.slice(0, 3).map((x) => LBL[x]).join(' · ')}</div>
    <div class="nm">${esc(p.name)}</div>
    <div class="pr"><b>₪${p.price}</b><span class="was">₪${p.was}</span></div></a>`;
}

/* ---------- chrome ---------- */
function chrome() {
  document.body.insertAdjacentHTML('afterbegin', `
  <div class="announce" aria-live="polite"><span class="on">משלוח חינם בהזמנה מעל ₪199</span><span>רואים את המתנה עם התמונה שלכם לפני שמזמינים</span><span>כל מתנה מגיעה באריזת מתנה, מוכנה לנתינה</span></div>
  <header class="hdr"><div class="wrap hdr-in">
    <a href="./" class="logo" aria-label="יקירי, לדף הבית">יקירי<i>.</i></a>
    <nav class="nav" aria-label="ניווט ראשי"><a href="./#shop">כל המתנות</a><a href="./#cats">לפי מי שמקבל</a><a href="./#how">איך זה עובד</a><a href="./#about">עלינו</a></nav>
    <button class="cartbtn" id="cartbtn" aria-label="סל קניות"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg><span class="count" id="count"></span></button>
  </div></header>`);
  document.body.insertAdjacentHTML('beforeend', `
  <footer class="ftr"><div class="wrap ftr-in">
    <div><div class="logo" style="margin-bottom:12px">יקירי<i>.</i></div><p style="color:#C9BDB2;line-height:1.7;max-width:320px;margin:0">מתנות בהתאמה אישית שמזכירות לאנשים שאתם אוהבים כמה הם יקרים לכם.</p></div>
    <div><h4>מתנות</h4><a href="./?c=mom#shop">לאמא</a><a href="./?c=dad#shop">לאבא</a><a href="./?c=gf#shop">לבת הזוג</a><a href="./?c=grandma#shop">לסבא ולסבתא</a></div>
    <div><h4>מידע</h4><a href="./#how">איך זה עובד</a><a href="#">משלוחים</a><a href="#">החזרות והחלפות</a><a href="#">שאלות נפוצות</a></div>
    <div><h4>שירות</h4><a href="#">צור קשר</a><a href="#">תקנון</a><a href="#">מדיניות פרטיות</a><a href="#">הצהרת נגישות</a></div>
  </div><div class="ftr-bottom">© יקירי · כל הזכויות שמורות</div></footer>
  <div class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="סל קניות"><div class="shade" id="shade"></div><div class="panel">
    <header><b style="font-size:20px">הסל שלכם</b><button class="x" id="dx" aria-label="סגירה">×</button></header>
    <div class="citems" id="citems"></div>
    <div class="cfoot" id="cfoot">
      <div class="sum"><span>מוצרים</span><b id="ssub"></b></div><div class="sum"><span>משלוח</span><b id="sship"></b></div>
      <div class="sum" style="font-size:18px"><span>סה״כ</span><b id="stot"></b></div>
      <form id="cform" style="display:flex;flex-direction:column;gap:8px;margin-top:6px" novalidate>
        <input name="name" placeholder="שם מלא" autocomplete="name" aria-label="שם מלא">
        <div class="two"><input name="phone" placeholder="טלפון" inputmode="tel" autocomplete="tel" aria-label="טלפון"><input name="email" type="email" placeholder="אימייל" autocomplete="email" aria-label="אימייל"></div>
        <div class="two"><input name="city" placeholder="עיר" autocomplete="address-level2" aria-label="עיר"><input name="zip" placeholder="מיקוד (לא חובה)" inputmode="numeric" aria-label="מיקוד"></div>
        <input name="address" placeholder="רחוב, מספר בית ודירה" autocomplete="street-address" aria-label="כתובת">
        <div class="err" id="cerr" role="alert"></div>
        <button class="btn btn-primary" id="pay" type="submit">לתשלום מאובטח</button>
      </form>
    </div></div></div>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`);

  const spans = document.querySelectorAll('.announce span'); let ai = 0;
  setInterval(() => { spans[ai].classList.remove('on'); ai = (ai + 1) % spans.length; spans[ai].classList.add('on'); }, 3800);
  const hdr = $('.hdr'); addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 10), { passive: true });
  $('#cartbtn').addEventListener('click', openCart); $('#dx').addEventListener('click', closeCart); $('#shade').addEventListener('click', closeCart);
  addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCart(); });
  $('#citems').addEventListener('click', (e) => { const b = e.target.closest('[data-rm]'); if (b) { CART.splice(+b.dataset.rm, 1); saveCart(); renderCart(); } });
  $('#cform').addEventListener('submit', checkout);
  saveCart();
}

/* ---------- cart ---------- */
let CART = []; try { CART = JSON.parse(localStorage.getItem('yakiri_cart') || '[]'); } catch (e) {}
function saveCart() {
  try { localStorage.setItem('yakiri_cart', JSON.stringify(CART)); } catch (e) {}
  const n = CART.reduce((a, b) => a + b.qty, 0), c = $('#count'); if (c) { c.textContent = n || ''; c.dataset.n = n; }
}
function bump() { const c = $('#count'); c.classList.add('pop'); setTimeout(() => c.classList.remove('pop'), 300); }
function renderCart() {
  const sub = CART.reduce((a, b) => a + b.price * b.qty, 0), ship = sub === 0 || sub >= 199 ? 0 : 29;
  $('#citems').innerHTML = CART.length ? CART.map((c, i) => `<div class="ci"><div class="th" style="background-image:url('${c.thumb || `img/${c.id}.webp`}')"></div><div style="flex:1;min-width:0"><div style="font-weight:600">${esc(c.name)}${c.qty > 1 ? ` ×${c.qty}` : ''}</div><div style="color:var(--soft);font-size:13px">${esc(c.text || '')}</div><div style="font-weight:600;margin-top:2px">₪${c.price * c.qty}</div></div><button class="rm" data-rm="${i}" aria-label="הסרה">×</button></div>`).join('')
    : '<div style="color:var(--soft);text-align:center;padding:60px 0">הסל עוד ריק.<br><a href="./#shop" style="color:var(--accent);font-weight:600">למתנות שלנו</a></div>';
  $('#ssub').textContent = '₪' + sub; $('#sship').textContent = ship ? '₪' + ship : 'חינם'; $('#stot').textContent = '₪' + (sub + ship);
  $('#cfoot').style.display = CART.length ? 'flex' : 'none';
}
function openCart() { renderCart(); $('#drawer').classList.add('open'); }
function closeCart() { $('#drawer').classList.remove('open'); }
function addToCart(item) { CART.push(item); saveCart(); bump(); toast('✓ נוסף לסל'); setTimeout(openCart, 450); }

async function checkout(e) {
  e.preventDefault(); const fd = Object.fromEntries(new FormData(e.target)); $('#cerr').textContent = '';
  if (!fd.name || !fd.phone || !fd.email || !fd.city || !fd.address) { $('#cerr').textContent = 'נא למלא את כל השדות'; return; }
  const b = $('#pay'); b.disabled = true; b.innerHTML = '<span class="spin"></span>';
  try {
    const r = await fetch(API, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ action: 'checkout', customer: fd, items: CART.map((c) => ({ product_id: c.id, qty: c.qty, personalization: c.text, photo_path: c.photo_path })) }) }).then((r) => r.json());
    if (r.redirect) { CART = []; saveCart(); location.href = r.redirect; return; }
    $('#cerr').textContent = r.error || 'משהו השתבש, נסו שוב';
  } catch (err) { $('#cerr').textContent = 'אין חיבור, נסו שוב'; }
  b.disabled = false; b.textContent = 'לתשלום מאובטח';
}

/* ---------- photo upload ---------- */
const PHOTO = { file: null, path: null, thumb: null };
function setPhoto(file, cb) {
  if (!file || !file.type.startsWith('image/')) return;
  const r = new FileReader();
  r.onload = () => {
    PHOTO.file = file; PHOTO.path = null;
    document.documentElement.style.setProperty('--photo', `url("${r.result}")`);
    const im = new Image(); im.onload = () => { const cv = document.createElement('canvas'); cv.width = cv.height = 120; const k = Math.max(120 / im.width, 120 / im.height); cv.getContext('2d').drawImage(im, (120 - im.width * k) / 2, (120 - im.height * k) / 2, im.width * k, im.height * k); PHOTO.thumb = cv.toDataURL('image/jpeg', .7); }; im.src = r.result;
    cb && cb(r.result);
    persistPhoto(r.result);
  };
  r.readAsDataURL(file);
}
// Keep the chosen photo across pages (downscaled copy in sessionStorage).
function persistPhoto(src) {
  const im = new Image(); im.onload = () => {
    const k = Math.min(1, 2000 / Math.max(im.width, im.height)); const cv = document.createElement('canvas');
    cv.width = im.width * k; cv.height = im.height * k; cv.getContext('2d').drawImage(im, 0, 0, cv.width, cv.height);
    try { sessionStorage.setItem('yk_photo', cv.toDataURL('image/jpeg', .88)); sessionStorage.setItem('yk_thumb', PHOTO.thumb || ''); } catch (e) {}
  }; im.src = src;
}
(function restorePhoto() {
  let d = null; try { d = sessionStorage.getItem('yk_photo'); } catch (e) {}
  if (!d) return;
  document.documentElement.style.setProperty('--photo', `url("${d}")`);
  fetch(d).then((r) => r.blob()).then((b) => { PHOTO.file = new File([b], 'photo.jpg', { type: 'image/jpeg' }); });
  try { PHOTO.thumb = sessionStorage.getItem('yk_thumb') || d; } catch (e) {}
})();
async function shrink(file) {
  if (file.size < 4e6) return file;
  const img = await createImageBitmap(file).catch(() => null); if (!img) return file;
  const k = Math.min(1, 3200 / Math.max(img.width, img.height)); const cv = document.createElement('canvas'); cv.width = img.width * k; cv.height = img.height * k;
  cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
  return await new Promise((res) => cv.toBlob((b) => res(new File([b], 'photo.jpg', { type: 'image/jpeg' })), 'image/jpeg', .9));
}
async function uploadPhoto() {
  if (PHOTO.path) return PHOTO.path;
  const f = await shrink(PHOTO.file); const ext = (f.type.split('/')[1] || 'jpg').replace('jpeg', 'jpg');
  const r = await fetch(API, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ action: 'upload_url', ext }) }).then((r) => r.json());
  if (!r.url) throw new Error('upload');
  const up = await fetch(r.url, { method: 'PUT', headers: { 'content-type': f.type || 'image/jpeg' }, body: f });
  if (!up.ok) throw new Error('upload');
  PHOTO.path = r.path; return PHOTO.path;
}

let _tt; function toast(t) { const el = $('#toast'); el.textContent = t; el.classList.add('show'); clearTimeout(_tt); _tt = setTimeout(() => el.classList.remove('show'), 2200); }
let _io; function observe() { _io = _io || new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('in'); _io.unobserve(x.target); } }), { threshold: .08 }); document.querySelectorAll('.reveal:not(.in)').forEach((el) => _io.observe(el)); }
chrome();
