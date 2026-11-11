/* ================= הגדרות ================= */
const WA_NUMBER = '';   // מספר וואטסאפ להזמנות: 9725XXXXXXXX – ריק = עדיין לא מחובר
const GROUPS = {"אשקלון": "https://chat.whatsapp.com/Imh2ZDRe7W62kp15ZZScmi", "ראשון לציון": "https://chat.whatsapp.com/Cj6EUaNfvrMJV39FDsxvnP", "פרדס חנה": "https://chat.whatsapp.com/J1wP1OqBdlvLcwPg7Rk8YW", "עכו": "https://chat.whatsapp.com/Lg6ATxYxOeH2Zuyh4pNlcf", "שלומי": "https://chat.whatsapp.com/LmqPUMiXWHVHEY7aMUnWy9"};
/* ========================================== */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const store = { get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (_) { return null; } },
                set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (_) {} } };
const sess = { get(k) { try { return sessionStorage.getItem(k); } catch (_) { return null; } },
               set(k) { try { sessionStorage.setItem(k, '1'); } catch (_) {} } };
let member = store.get('hadodMember');

/* clock */
function tick() { const t = new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit', hour12: false }); $$('[data-clock]').forEach(e => e.textContent = t); }
tick(); setInterval(tick, 15000);

/* toast */
const toast = $('#toast'); let tt;
function say(m) { toast.textContent = m; toast.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('on'), 2400); }

/* member state in the page */
function paint() {
  if (!member) return;
  $$('.promo-t').forEach(e => e.innerHTML = `היי ${member.name.split(' ')[0]}, יש לך <b>10% הנחה</b> על ההזמנה`);
  $$('.promo-a').forEach(e => e.textContent = 'להזמין');
  $$('.pp-member-t').forEach(e => e.textContent = 'שמורה לך. היא תיכתב בהודעת ההזמנה');
  $$('.member [data-join]').forEach(e => e.textContent = 'ההנחה שלך פעילה');
}
paint();

/* modal */
const modal = $('#modal'), mPromo = $('#mPromo'), mForm = $('#mForm'), mDone = $('#mDone');
function show(which) { [mPromo, mForm, mDone].forEach(x => x.hidden = x !== which); modal.hidden = false; document.body.classList.add('locked'); }
function hide() { modal.hidden = true; if ($('#gate').hidden) document.body.classList.remove('locked'); }
function order(p) {
  let msg = p ? `היי, הגעתי מהאתר של הדוד. אשמח לקבל מחיר על ${p}` : 'היי, הגעתי מהאתר של הדוד. אשמח להזמין';
  if (member) msg += `\nאני רשום באתר (${member.name}, ${member.city}, ${member.phone}) ומגיעה לי 10% הנחה.`;
  if (!WA_NUMBER) return say('הוואטסאפ יחובר בקרוב');
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}
document.addEventListener('click', e => {
  if (e.target.closest('[data-close]') || e.target === modal) return hide();
  if (e.target.closest('[data-join]')) return member ? order('') : show(mForm);
  const b = e.target.closest('[data-wa]'); if (b) order(b.dataset.wa);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) hide(); });
$('#mGo').onclick = () => show(mForm);
mForm.addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(mForm), name = (f.get('name') || '').trim(), phone = (f.get('phone') || '').replace(/[^0-9]/g, ''), city = f.get('city');
  const err = name.length < 2 ? 'צריך שם' : !/^05\d{8}$/.test(phone) ? 'מספר טלפון לא תקין (05X ועוד 7 ספרות)' : !city ? 'צריך לבחור עיר' : !f.get('age') ? 'ההרשמה למבוגרים מגיל 18 בלבד' : '';
  $('#mErr').textContent = err; if (err) return;
  member = { name, phone, city, at: Date.now() }; store.set('hadodMember', member); paint();
  $('#mDoneT').textContent = `${name.split(' ')[0]}, נרשמת!`;
  const g = $('#mGroup'); if (GROUPS[city]) { g.href = GROUPS[city]; g.lastElementChild.textContent = `להצטרף לקבוצה של ${city}`; g.hidden = false; } else g.hidden = true;
  show(mDone);
});

/* age gate, then the 10% popup once per visit */
const gate = $('#gate');
function enter() {
  gate.hidden = true; document.body.classList.remove('locked');
  if (!member && !sess.get('promoSeen')) { sess.set('promoSeen'); setTimeout(() => show(mPromo), 900); }
}
if (sess.get('age18')) enter();
$('#gateYes').onclick = () => { sess.set('age18'); enter(); };
$('#gateNo').onclick = () => { gate.innerHTML = '<p class="gate-q">מצטערים.</p><p class="gate-t">האתר מיועד למבוגרים מגיל 18 ומעלה בלבד.</p>'; };
