/* Yakiri shared: catalog, header/footer, cart, upload, checkout */
const API = 'https://dndqljbibficfscylteq.supabase.co/functions/v1/momento-api';
const LBL = { mom: 'לאמא', dad: 'לאבא', gf: 'לבת הזוג', bf: 'לבן הזוג', grandma: 'לסבתא', grandpa: 'לסבא', couple: 'לזוג ולבית' };
const OCC = { hanukkah: 'חנוכה', birthday: 'יום הולדת', anniv: 'יום נישואין', love: 'ט״ו באב ואהבה', birth: 'לידה', mother: 'יום האם', army: 'גיוס ושחרור' };
const WA = 'https://wa.me/972544862633?text=' + encodeURIComponent('היי יקירי, יש לי שאלה על מתנה');
const LOGO = `<svg viewBox="0 0 40 48" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF1C4"/><stop offset=".45" stop-color="#D6B26E"/><stop offset="1" stop-color="#8A6A30"/></linearGradient></defs><circle cx="20" cy="5.2" r="3.2" fill="none" stroke="url(#lg)" stroke-width="1.6"/><path d="M20 44C8 35.5 3 27.5 3 19.5 3 13.5 7.5 9 12.6 9c3.4 0 6 2 7.4 4.6C21.4 11 24 9 27.4 9 32.5 9 37 13.5 37 19.5 37 27.5 32 35.5 20 44Z" fill="url(#lg)" fill-opacity=".14" stroke="url(#lg)" stroke-width="1.8" stroke-linejoin="round"/><path d="M20 38.6C11.4 32.3 7.6 26.4 7.6 20.6c0-4.1 3-7.1 6.4-7.1 2.5 0 4.6 1.5 6 3.7 1.4-2.2 3.5-3.7 6-3.7 3.4 0 6.4 3 6.4 7.1 0 5.8-3.8 11.7-12.4 18Z" fill="none" stroke="url(#lg)" stroke-width=".9" opacity=".75"/><path d="M31.5 3.5l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9z" fill="#FFF1C4"/></svg>`;
const MARK = `<svg viewBox="-4 -6 128.5 74" class="ykmark" aria-hidden="true"><defs><linearGradient id="ykG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF1C4"/><stop offset=".45" stop-color="#D6B26E"/><stop offset="1" stop-color="#8A6A30"/></linearGradient></defs><path d="M0 0H5.5C8.9 0 10.5 2.2 10.5 6V15.5L4.3 20V8.4C4.3 5.6 3.3 3.8 3.4 3.8C1.5 3.8 0.3 2.4 0 0ZM17.0 0H40.0C44.5 0 47.0 2.6 47.0 7.5V44H40.6V8.6C40.6 5.6 39.4 3.8 36.6 3.8H21.0C18.8 3.8 17.4 2.6 17.0 0ZM53.5 0H59.0C62.4 0 64.0 2.2 64.0 6V15.5L57.8 20V8.4C57.8 5.6 56.8 3.8 56.9 3.8C55.0 3.8 53.8 2.4 53.5 0ZM70.5 0H96.5C101.0 0 103.5 2.6 103.5 7.5V44H97.1V8.6C97.1 5.6 95.9 3.8 93.1 3.8H74.5C72.3 3.8 70.9 2.6 70.5 0ZM72.5 15.5H78.7V62H72.5ZM110.0 0H115.5C118.9 0 120.5 2.2 120.5 6V15.5L114.3 20V8.4C114.3 5.6 113.3 3.8 113.4 3.8C111.5 3.8 110.3 2.4 110.0 0Z" fill="url(#ykG)"/><path d="M28.5 3.8V21" stroke="url(#ykG)" stroke-width=".7" stroke-dasharray="1.2 .9"/><circle cx="28.5" cy="22.6" r="1.6" fill="none" stroke="url(#ykG)" stroke-width=".7"/><path d="M28.5 36.2C23.54 32.6 20.9 29.400000000000002 20.9 26.200000000000003C20.9 22.840000000000003 23.7 20.6 26.34 20.6C27.54 20.6 28.26 21.400000000000002 28.5 22.6C28.74 21.400000000000002 29.46 20.6 30.66 20.6C33.3 20.6 36.1 22.840000000000003 36.1 26.200000000000003C36.1 29.400000000000002 33.46 32.6 28.5 36.2Z" fill="url(#ykG)" /><path d="M28.5 33.730000000000004C25.152 31.3 23.37 29.14 23.37 26.98C23.37 24.712000000000003 25.259999999999998 23.200000000000003 27.042 23.200000000000003C27.852 23.200000000000003 28.338 23.740000000000002 28.5 24.55C28.662 23.740000000000002 29.148 23.200000000000003 29.958 23.200000000000003C31.740000000000002 23.200000000000003 33.63 24.712000000000003 33.63 26.98C33.63 29.14 31.848 31.3 28.5 33.730000000000004Z" fill="none" stroke="#3A2A12" stroke-width=".6" opacity=".6"/></svg>`;
const COLORS3 = { name: 'צבע', values: ['זהב', 'כסף', 'רוז גולד'] };
const P = [
  { id: 'heart', o: ['love','anniv','birthday','mother','hanukkah'], m: 'heart', photo: 1, c: ['gf', 'mom', 'grandma'], name: 'שרשרת לב עם תמונה', price: 149, was: 219, tag: 'רב מכר',
    short: 'תליון לב עם התמונה שלכם בפנים. מתנה שהיא תענוד כל יום, קרוב ללב.',
    details: ['נירוסטה איכותית בציפוי זהב 18K, לא משחירה', 'שרשרת 45 ס״מ + 5 ס״מ הארכה', 'התמונה מודפסת בצבע מלא ומוגנת בשכבת זכוכית', 'מגיעה בקופסת קטיפה מוכנה למתנה'], opts: [COLORS3], text: 'חריטה בגב התליון (לא חובה)' },
  { id: 'proj', o: ['love','anniv','birthday'], m: 'heart', photo: 1, c: ['gf', 'mom'], name: 'שרשרת הקרנה סודית', price: 149, was: 199, tag: 'הכי מרגש',
    short: 'נראית כמו תליון רגיל. מאירים בפנס הטלפון, והתמונה שלכם מופיעה על הקיר.',
    details: ['טכנולוגיית ננו־הקרנה: התמונה חרוטה בתוך אבן זעירה', 'רואים את התמונה כשמסתכלים מקרוב לתוך האבן או מאירים בפנס', 'נחושת בציפוי, שרשרת טיטניום, היפואלרגני', 'אורך 40 ס״מ + 5 ס״מ הארכה'], opts: [{ name: 'צבע', values: ['כסף', 'זהב'] }], text: '' },
  { id: 'card', o: ['army','birthday','hanukkah'], m: 'card', photo: 1, c: ['dad', 'bf', 'grandpa'], name: 'כרטיס מתכת לארנק עם תמונה', price: 89, was: 129, tag: 'מתנה לאבא',
    short: 'תמונה וברכה חרוטים בלייזר על כרטיס מתכת בגודל כרטיס אשראי. נשאר איתו בארנק לתמיד.',
    details: ['נירוסטה 0.8 מ״מ, חריטת לייזר שלא נמחקת', 'בגודל כרטיס אשראי, נכנס לכל ארנק', 'תמונה בצד אחד, ברכה בצד השני', 'מתנה מושלמת למשוחררים, לחיילים ולמי שנוסע רחוק'], opts: [{ name: 'גימור', values: ['כסף', 'שחור'] }], text: 'ברכה בגב הכרטיס' },
  { id: 'wallet', o: ['birthday','anniv','hanukkah'], m: 'wallet', photo: 1, c: ['dad', 'grandpa', 'bf'], name: 'ארנק עור חרוט עם תמונה ושמות', price: 169, was: 229,
    short: 'ארנק עור עם תמונה ושמות הילדים חרוטים בפנים. מתנה שאבא יראה לכל החברים.',
    details: ['עור איכותי בגוון חום כהה', '6 תאי כרטיסים, תא לשטרות ותא לתמונה', 'חריטת לייזר של התמונה ועד 4 שמות', 'מגיע בקופסת מתנה'], opts: [], text: 'שמות לחריטה (עד 4)' },
  { id: 'cube', o: ['anniv','birth','hanukkah','birthday'], m: 'cube', photo: 1, c: ['grandma', 'grandpa', 'mom', 'couple'], name: 'קריסטל תלת־ממד עם תמונה', price: 249, was: 349, tag: 'פרימיום',
    short: 'התמונה נחרטת בלייזר בתוך גוש קריסטל ומוארת מבסיס LED. סבא וסבתא מתרגשים, מובטח.',
    details: ['קריסטל K9 אופטי, חריטת לייזר פנימית בתלת־ממד', 'בסיס תאורה LED כלול', 'גודל 6×6×8 ס״מ', 'מומלץ: תמונה עם 1–3 אנשים, פנים ברורות'], opts: [], text: 'שורת טקסט בתחתית (לא חובה)' },
  { id: 'moon', o: ['love','birthday','birth'], m: 'moon', photo: 1, c: ['gf', 'mom', 'couple'], name: 'מנורת ירח עם תמונה', price: 199, was: 269,
    short: 'ירח מודפס בתלת־ממד, וכשהוא נדלק התמונה שלכם מופיעה בתוכו. 16 צבעים ושלט.',
    details: ['הדפסת תלת־ממד מחומר PLA ידידותי', '16 צבעי תאורה + שלט רחוק', 'נטענת ב־USB, עד 8 שעות פעולה', 'כולל מעמד עץ'], opts: [], text: 'טקסט על הירח (לא חובה)' },
  { id: 'plaque', o: ['love','anniv'], m: 'plaque', photo: 1, c: ['gf', 'bf', 'couple'], name: 'לוח זכוכית "השיר שלנו"', price: 129, was: 179,
    short: 'תמונה זוגית עם קוד שיר. סורקים בטלפון, והשיר שלכם מתחיל להתנגן.',
    details: ['אקריליק שקוף בעובי 5 מ״מ', 'בסיס עץ עם תאורת LED חמה', 'קוד שיר שסורקים מהאפליקציה', 'גודל 15×20 ס״מ'], opts: [], text: 'שם השיר והזמר' },
  { id: 'hoodie', o: ['love','birthday','army','hanukkah'], m: 'hoodie', photo: 1, c: ['bf', 'gf', 'dad'], name: 'סווטשירט עם פורטרט רקום', price: 229, was: 299, tag: 'חדש',
    short: 'התמונה שלכם הופכת לציור קו רקום, עם תאריך על השרוול. הלהיט של הרשתות בחו״ל.',
    details: ['כותנה עבה ורכה, גזרה יוניסקס', 'רקמה איכותית שלא נפרמת בכביסה', 'תאריך או שמות על השרוול', 'מידות S–XXL'], opts: [{ name: 'מידה', values: ['S', 'M', 'L', 'XL', 'XXL'] }, { name: 'צבע', values: ['נייבי', 'שמנת', 'שחור'] }], text: 'טקסט לשרוול (תאריך / שמות)' },
  { id: 'blanket', o: ['hanukkah','birth','birthday','mother'], m: 'blanket', photo: 1, c: ['grandma', 'grandpa', 'mom', 'couple'], name: 'שמיכת פרווה עם תמונה', price: 299, was: 399,
    short: 'שמיכת שרפה רכה עם התמונה המשפחתית. החיבוק של הנכדים גם כשהם לא בבית.',
    details: ['צד אחד הדפסה חדה, צד שני פרוות שרפה', 'גודל 127×152 ס״מ', 'מכונת כביסה במחזור עדין', 'הצבעים לא דוהים'], opts: [], text: '' },
  { id: 'mug', o: ['birthday','hanukkah','army'], m: 'mug', photo: 1, c: ['dad', 'grandpa', 'mom', 'grandma'], name: 'ספל עם תמונה והקדשה', price: 79, was: 99,
    short: 'ספל קרמי עם התמונה שלכם. הקפה של הבוקר מתחיל עם חיוך.',
    details: ['קרמיקה לבנה 330 מ״ל', 'הדפסה שלא דוהה במדיח', 'בטוח למיקרוגל', 'הקדשה בצד השני'], opts: [], text: 'הקדשה (לא חובה)' },
  { id: 'puzzle', o: ['hanukkah','birth','anniv'], m: 'puzzle', photo: 1, c: ['grandma', 'grandpa', 'couple'], name: 'פאזל משפחתי מתמונה', price: 129, was: 169,
    short: '500 חלקים מהתמונה שלכם, בקופסת פח מהודרת. ערב משפחתי מוכן.',
    details: ['500 חלקים מקרטון קשיח, גימור מבריק', 'קופסת פח עם התמונה על המכסה', 'גודל מוגמר כ־40×50 ס״מ', 'מתאים מגיל 9'], opts: [], text: '' },
  { id: 'name', o: ['birthday','love','birth','mother'], m: 'name', photo: 0, c: ['gf', 'mom', 'grandma'], name: 'שרשרת שם בכתב יד', price: 129, was: 179,
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
      ${p.tag ? `<span class="tag">${esc(p.tag)}</span>` : ''}<span class="quick"><span>${p.photo ? 'להעלאת תמונה' : 'לכתיבת שם'} ←</span></span></div>
    <div class="for">${p.c.slice(0, 3).map((x) => LBL[x]).join(' · ')}</div>
    <div class="nm">${esc(p.name)}</div>
    <div class="pr"><b>₪${p.price}</b><span class="was">₪${p.was}</span></div></a>`;
}

/* ---------- chrome ---------- */
function chrome() {
  document.body.insertAdjacentHTML('afterbegin', `
  <div class="announce" id="announce"><span>משלוח חינם מעל ₪199 · כל מתנה ארוזה בקופסת קטיפה</span></div>
  <header class="hdr"><div class="wrap hdr-in">
    <a href="./" class="logo" aria-label="יקירי, לדף הבית">${MARK}</a>
    <nav class="nav" aria-label="ניווט ראשי"><a href="./?c=mom#shop">לאמא</a><a href="./?c=dad#shop">לאבא</a><a href="./?c=gf#shop">לבת הזוג</a><a href="./?c=bf#shop">לבן הזוג</a><a href="./?c=grandma#shop">לסבא ולסבתא</a><a href="./#occasions">לפי אירוע</a></nav>
    <button class="cartbtn" id="cartbtn" aria-label="סל קניות"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg><span class="count" id="count"></span></button>
  </div></header>`);
  document.body.insertAdjacentHTML('beforeend', `
  <footer class="ftr"><div class="ftr-big" aria-hidden="true">יקירי</div><div class="wrap ftr-in">
    <div><a href="./" class="logo" style="margin-bottom:16px">${MARK}</a><p style="color:var(--soft);line-height:1.8;max-width:330px;margin:0">מתנות שמחזיקות זיכרון. כל אחת נוצרת במיוחד, מהתמונה שלכם, בשביל מישהו אחד.</p></div>
    <div><h4>מתנות</h4><a href="./?c=mom#shop">לאמא</a><a href="./?c=dad#shop">לאבא</a><a href="./?c=gf#shop">לבת הזוג</a><a href="./?c=bf#shop">לבן הזוג</a><a href="./?c=grandma#shop">לסבא ולסבתא</a></div>
    <div><h4>מידע</h4><a href="./#how">איך זה עובד</a><a href="./#faq">משלוחים</a><a href="./#faq">החזרות והחלפות</a><a href="./#faq">שאלות נפוצות</a></div>
    <div><h4>דברו איתנו</h4><a href="${WA}" target="_blank" rel="noopener">וואטסאפ 054-486-2633</a><a href="#">תקנון</a><a href="#">מדיניות פרטיות</a><a href="#">הצהרת נגישות</a></div>
  </div><div class="ftr-bottom">© יקירי · כל הזכויות שמורות</div></footer>
  <a class="wa" href="${WA}" target="_blank" rel="noopener" aria-label="שיחה בוואטסאפ"><span class="tip">יש שאלה? אנחנו כאן</span><svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2C18.1 1.3 15.1 0 12 0 5.4 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6c1.8 1 3.8 1.5 5.7 1.5 6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.4z"/></svg></a>
  <div class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="סל קניות"><div class="shade" id="shade"></div><div class="panel">
    <header><b>הסל שלכם</b><button class="x" id="dx" aria-label="סגירה">×</button></header>
    <div class="citems" id="citems"></div>
    <div class="cfoot" id="cfoot">
      <div class="sum"><span>מוצרים</span><b id="ssub"></b></div><div class="sum disc" id="sdiscrow" hidden><span id="sdisclbl"></span><b id="sdisc"></b></div><div class="sum"><span>משלוח</span><b id="sship"></b></div>
      <div class="sum tot"><span>סה״כ</span><b id="stot"></b></div>
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

  loadPromo();
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
function money(n) { return '₪' + (Math.round(n * 100) / 100).toLocaleString('he-IL', { maximumFractionDigits: 2 }); }
function totals() {
  const sub = CART.reduce((a, b) => a + b.price * b.qty, 0);
  const disc = PROMO.pct ? Math.round(sub * PROMO.pct) / 100 : 0;
  const after = sub - disc, ship = sub === 0 || after >= 199 ? 0 : 29;
  return { sub, disc, ship, total: after + ship };
}
function renderCart() {
  const t = totals();
  $('#citems').innerHTML = CART.length ? CART.map((c, i) => `<div class="ci"><div class="th" style="background-image:url('${c.thumb || `img/${c.id}.webp`}')"></div><div style="flex:1;min-width:0"><div class="nmx">${esc(c.name)}${c.qty > 1 ? ` ×${c.qty}` : ''}</div><small>${esc(c.text || '')}</small><div style="color:var(--gold2);margin-top:4px">₪${c.price * c.qty}</div></div><button class="rm" data-rm="${i}" aria-label="הסרה">×</button></div>`).join('')
    : '<div style="color:var(--soft);text-align:center;padding:70px 0;line-height:2">הסל עוד ריק.<br><a href="./#shop" style="color:var(--gold);font-weight:500">למתנות שלנו ←</a></div>';
  $('#ssub').textContent = money(t.sub); $('#sship').textContent = t.ship ? money(t.ship) : 'חינם'; $('#stot').textContent = money(t.total);
  $('#sdiscrow').hidden = !t.disc; $('#sdisc').textContent = '−' + money(t.disc); $('#sdisclbl').textContent = `${PROMO.label || 'מבצע'} (${PROMO.pct}%)`;
  $('#cfoot').style.display = CART.length ? 'flex' : 'none';
}
function openCart() { renderCart(); $('#drawer').classList.add('open'); document.body.classList.add('cart-open'); }
function closeCart() { $('#drawer').classList.remove('open'); document.body.classList.remove('cart-open'); }
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

/* ---------- promo + countdown ---------- */
let PROMO = { pct: 0 };
try { const c = JSON.parse(sessionStorage.getItem('yk_promo') || 'null'); if (c && Date.now() - c.t < 6e5) PROMO = c.d; } catch (e) {}
const PROMO_CBS = [];
function onPromo(cb) { PROMO_CBS.push(cb); if (PROMO.pct) cb(PROMO); }
async function loadPromo() {
  if (PROMO.pct) paintAnnounce();
  try {
    const d = await fetch(API, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ action: 'promo' }) }).then((r) => r.json());
    const had = PROMO.pct; PROMO = d && d.pct ? d : { pct: 0 };
    try { sessionStorage.setItem('yk_promo', JSON.stringify({ t: Date.now(), d: PROMO })); } catch (e) {}
    if (PROMO.pct) { paintAnnounce(); if (!had) PROMO_CBS.forEach((cb) => cb(PROMO)); }
  } catch (e) {}
}
function left(ends) {
  const ms = Math.max(0, new Date(ends) - Date.now());
  return { d: Math.floor(ms / 864e5), h: Math.floor(ms / 36e5) % 24, m: Math.floor(ms / 6e4) % 60, s: Math.floor(ms / 1e3) % 60, ms };
}
const pad = (n) => String(n).padStart(2, '0');
let _cdT;
function paintAnnounce() {
  const a = $('#announce'); if (!a || !PROMO.pct) return;
  a.innerHTML = `<span><b>${esc(PROMO.label || 'מבצע')}:</b> ${PROMO.pct}% הנחה<span class="long"> על כל המתנות, יורדת אוטומטית בסל</span></span><span class="cd-mini" id="cdm" aria-label="זמן שנותר"></span>`;
  const tick = () => { const t = left(PROMO.ends); const el = $('#cdm'); if (!el) return; el.innerHTML = `<span>${t.d}י</span><span>${pad(t.h)}</span><span>${pad(t.m)}</span><span>${pad(t.s)}</span>`; };
  tick(); clearInterval(_cdT); _cdT = setInterval(tick, 1000);
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
