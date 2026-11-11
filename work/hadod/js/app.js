/* ================= הגדרות ================= */
const WA_NUMBER = '';   // 9725XXXXXXXX – ריק = עדיין לא מחובר
const PRODUCTS = [
  { name: "נינג'ה",  img: 'img/card-ninja.webp',   note: 'מחיר, טעמים וזמינות בוואטסאפ.' },
  { name: 'טומי XL', img: 'img/card-tomi.webp',    note: '150K שאיפות, 11 טעמים לבחירה.' },
  { name: 'סוויט',   img: 'img/card-sweet.webp',   note: 'מחיר, צבעים וזמינות בוואטסאפ.' },
  { name: 'פנטום',   img: 'img/card-phantom.webp', note: 'Ultra Plus. מחיר וזמינות בוואטסאפ.' },
];
const CITIES = [        // link = קישור לקבוצת הוואטסאפ של העיר
  { name: 'אשקלון',      link: '' },
  { name: 'ראשון לציון', link: '' },
  { name: 'פרדס חנה',    link: '' },
  { name: 'עכו',         link: '' },
  { name: 'קריות',       link: '' },
  { name: 'שלומי',       link: '' },
];
/* ========================================== */
const $ = s => document.querySelector(s);
const WA = '<svg><use href="#wa"/></svg>';
const PIN = '<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.500a2.500 2.500 0 1 1 0-5 2.500 2.500 0 0 1 0 5z" fill="currentColor"/></svg>';

$('#grid').innerHTML = PRODUCTS.map((p, i) => `
  <article class="card">
    <img src="${p.img}" alt="${p.name}" width="1000" height="1200" ${i > 1 ? 'loading="lazy"' : ''}>
    <div class="card-b"><h3>${p.name}</h3><p>${p.note}</p>
      <button class="btn btn-main" data-wa="${p.name}">${WA}מחיר בוואטסאפ</button></div>
  </article>`).join('');

$('#cityList').innerHTML = CITIES.map(c => `<li>${c.link
  ? `<a class="city" href="${c.link}" target="_blank" rel="noopener">`
  : `<button class="city" data-soon>`}<span class="city-n">${PIN}${c.name}</span><span class="city-s">להצטרף${WA}</span>${c.link ? '</a>' : '</button>'}</li>`).join('');

function tick() {
  const t = new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit', hour12: false });
  $('#clock').textContent = t; $('#clock2').textContent = t;
}
tick(); setInterval(tick, 15000);

const toast = $('#toast'); let tt;
function say(m) { toast.textContent = m; toast.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('on'), 2400); }
document.addEventListener('click', e => {
  if (e.target.closest('[data-soon]')) return say('הקישור לקבוצה יחובר בקרוב');
  const b = e.target.closest('[data-wa]'); if (!b) return;
  const p = b.dataset.wa;
  const msg = p ? `היי, הגעתי מהאתר של הדוד. אשמח לקבל מחיר על ${p}` : 'היי, הגעתי מהאתר של הדוד. אשמח להזמין';
  if (!WA_NUMBER) return say('הוואטסאפ יחובר בקרוב');
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
});

const gate = $('#gate'); let ok = false;
try { ok = sessionStorage.getItem('age18') === '1'; } catch (_) {}
const open = () => { gate.hidden = true; document.body.classList.remove('locked'); };
if (ok) open();
$('#gateYes').onclick = () => { try { sessionStorage.setItem('age18', '1'); } catch (_) {} open(); };
$('#gateNo').onclick = () => { gate.innerHTML = '<p class="gate-q">מצטערים.</p><p class="gate-t">האתר מיועד למבוגרים מגיל 18 ומעלה בלבד.</p>'; };
