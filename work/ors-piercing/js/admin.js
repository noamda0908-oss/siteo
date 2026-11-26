/* Or's Piercing: counter screen (iPad). Password login, then the live board. */
const METHODS = ['אשראי', 'ביט', 'פייבוקס', 'מזומן'];
const A = { k: store.get('ors_admin'), data: null, last: '', seen: new Set(), first: true };
const CUSTOMER_URL = new URL('./', location.href).href;
let pay = {};

const by = st => A.data.queue.filter(q => q.status === st);
const find = id => A.data.queue.find(q => q.id === id);
const priceOf = t => { const x = A.data.types.find(y => y.name === t); return x ? x.price : 0; };
function waLink(q, text, label) {
  let d = String(q.phone || '').replace(/\D/g, ''); if (d.length < 9) return '';
  if (d.startsWith('0')) d = '972' + d.slice(1);
  return `<a class="wa" target="_blank" rel="noopener" href="https://wa.me/${d}?text=${encodeURIComponent(text)}">${label || 'וואטסאפ'}</a>`;
}
const payLink = () => (A.data.links || {}).pay || '';
const payText = (q, amt) => `היי ${q.name}, לתשלום ${amt} ₪ על הפירסינג ב-Or's Piercing: ${payLink()}`;
const fmtPhone = p => { const d = String(p || ''); return d.length === 10 ? d.slice(0, 3) + '-' + d.slice(3) : d; };

async function call(fn, args) {
  try { return await rpc(fn, Object.assign({ k: A.k }, args || {})); }
  catch (e) { if (errCode(e) === 'ORS_AUTH') { A.k = null; A.data = null; store.del('ors_admin'); renderLogin(); } throw e; }
}
async function act(fn, args, okTitle, okText) {
  try { await call(fn, args); if (okTitle) toast(okTitle, okText); await refresh(true); return true; }
  catch (e) { toast('לא הצלחנו', errMsg(e), true); return false; }
}

/* ---------- login ---------- */
function renderLogin(msg) {
  $('#statusPill').innerHTML = ''; document.body.classList.add('gate'); $('#board').className = 'phone gatecard fresh';
  $('#board').innerHTML = `<div class="p-head mid"><span class="hoop" aria-hidden="true"></span><span class="hoop b" aria-hidden="true"></span><div class="logo-m" role="img" aria-label="Or's Piercing"></div><h1>הדוכן שלך</h1><p>התור, התשלומים וההצהרות במסך אחד</p></div>
    <div class="p-body"><form class="stag" id="login">
    <div class="fl"><input id="lpass" type="password" autocomplete="current-password" placeholder=" "><label for="lpass">סיסמה</label></div>
    <div class="err" id="lerr" role="alert">${esc(msg || '')}</div>
    <button class="btn" type="submit" id="lgo">כניסה</button></form></div>`;
}
document.addEventListener('submit', async e => {
  if (e.target.id !== 'login') return; e.preventDefault();
  const b = $('#lgo'); b.disabled = true;
  try {
    const t = await rpc('ors_admin_login', { p_pass: $('#lpass').value });
    if (!t) { b.disabled = false; $('#lerr').textContent = 'הסיסמה לא נכונה'; return; }
    A.k = t; store.set('ors_admin', t); A.last = ''; A.first = true; showBoardShell(); refresh(true);
  } catch (er) { b.disabled = false; $('#lerr').textContent = errMsg(er); }
});

/* ---------- board ---------- */
function showBoardShell() { document.body.classList.remove('gate'); $('#board').className = 'board'; $('#board').innerHTML = '<div class="skeleton"><i></i></div>'; }
function rowHTML(q, kind) {
  const isNew = !A.first && !A.seen.has(q.id + kind); A.seen.add(q.id + kind);
  const cls = ['row-c', kind === 'called' ? 'now' : '', isNew ? 'new' : ''].join(' ');
  const waText = kind === 'called' ? `היי ${q.name}, הגיע התור שלך ב-Or's Piercing. מחכה לך בדוכן` : `היי ${q.name}, עוד מעט מגיע התור שלך ב-Or's Piercing. כדאי להתקרב לדוכן`;
  const act = kind === 'waiting' ? `<div class="acts rowy"><button class="btn sm ghost" data-call="${q.id}">קראי</button><button class="xbtn" data-rm="${q.id}" aria-label="הסרה מהתור">×</button></div>`
    : kind === 'called' ? `<div class="acts"><button class="btn sm" data-pay="${q.id}">לתשלום</button><button class="btn sm ghost" data-miss="${q.id}">לא הגיעה</button></div>`
    : `<span class="pill ok num">₪${q.paid_amount} · ${esc(q.paid_method)}</span>`;
  return `<div class="${cls}"><div class="badge num">${q.num}</div><div class="who"><b>${esc(q.name)}</b><span>${q.spot ? esc(q.spot) + ', ' : ''}${esc(q.type)}${(q.extras || []).length ? ' + ' + q.extras.map(x => esc(x.name)).join(', ') : ''} · ${q.phone ? `<span dir="ltr">${esc(fmtPhone(q.phone))}</span>` : 'ללא טלפון'}${q.missed && kind === 'waiting' ? '<span class="pill warn">פספסה תור</span>' : ''}</span>${kind === 'called' ? `<span class="tm num" data-t="${q.called_at}"></span>` : ''}<div class="tags">${declPill(q)}${kind !== 'done' ? waLink(q, waText) : ''}${kind === 'called' && payLink() ? waLink(q, payText(q, q.price), 'שליחת קישור תשלום') : ''}</div></div>${act}</div>`;
}
function declPill(q) {
  if (!q.declared) return '<span class="pill mute" style="margin-inline-start:0">ללא הצהרת בריאות</span>';
  return `<button class="pill ${q.flags ? 'warn' : 'ok'}" data-decl="${q.id}" style="margin-inline-start:0">${q.flags ? 'הצהרה: לבדוק לפני שמתחילים' : 'הצהרת בריאות תקינה'}${q.minor ? ' · קטינה' : ''}</button> `;
}
function qrSvg() { const q = qrcode(0, 'M'); q.addData(CUSTOMER_URL); q.make(); return q.createSvgTag({ cellSize: 8, margin: 2, scalable: true }); }
function renderBoard() {
  const w = by('waiting'), c = by('called'), d = by('done'), rev = d.reduce((s, q) => s + (q.paid_amount || 0), 0);
  const day = new Date().toLocaleDateString('he-IL', { weekday: 'long', day: 'numeric', month: 'numeric' });
  $('#statusPill').innerHTML = `<span class="status ${A.data.open ? '' : 'off'}"><i></i>${A.data.open ? 'התור פתוח להרשמה' : 'התור סגור להרשמה'}</span>`;
  const svg = qrSvg();
  $('#board').innerHTML = `
  <div class="hero"><span class="hoop" aria-hidden="true"></span>
    <div class="hero-top"><div><p>${day}</p><h2>התור של היום</h2></div><div class="head-acts"><button class="btn sm light" id="addWalk">הוספה ידנית</button><button class="btn sm light" id="openHist">סיכומים</button><button class="btn sm light" id="openArch">הצהרות</button><button class="btn sm light" id="openSet">הגדרות</button></div></div>
    <div class="stats">${[[w.length, 'ממתינות'], [d.length, 'טופלו היום'], ['₪' + rev.toLocaleString(), 'הכנסות היום']].map(([v, l], i) => `<div class="stat ${A.stats && A.stats[i] !== String(v) ? 'pop' : ''}"><b class="num">${v}</b><span>${l}</span></div>`).join('')}</div></div>
  <div><div class="sec-title">בטיפול עכשיו</div><div class="rows">${c.length ? c.map(q => rowHTML(q, 'called')).join('') : '<div class="empty">אין אף אחת בטיפול. קראי לבאה בתור</div>'}</div></div>
  <button class="btn" id="callNext" ${w.length ? '' : 'disabled'}>קראי לבאה בתור</button>
  <div><div class="sec-title">ממתינות <span>לפי סדר הגעה</span></div><div class="rows">${w.length ? w.map(q => rowHTML(q, 'waiting')).join('') : '<div class="empty">התור ריק</div>'}</div></div>
  <div><div class="sec-title">שולמו היום <span>${d.length ? d.length + ' לקוחות' : ''}</span></div><div class="rows">${d.length ? d.slice().sort((a, b) => b.done_at - a.done_at).map(q => rowHTML(q, 'done')).join('') : '<div class="empty">עוד אין תשלומים היום</div>'}</div></div>
  <div class="qr"><div class="qrbox">${svg}</div><p><b>ה‑QR של הדוכן</b>מדפיסים ותולים. כל סריקה פותחת את דף ההרשמה לתור.<br><a href="${esc(CUSTOMER_URL)}" target="_blank" rel="noopener" dir="ltr">${esc(CUSTOMER_URL.replace(/^https?:\/\//, ''))}</a><br><span class="head-acts" style="margin-top:8px"><a class="btn sm ghost" href="poster.html" target="_blank" rel="noopener">שלט QR להדפסה</a><a class="btn sm ghost" href="display.html" target="_blank" rel="noopener">מסך תצוגה לקהל</a></span></p></div>`;
  $('#posterQr').innerHTML = svg; $('#posterUrl').textContent = CUSTOMER_URL.replace(/^https?:\/\//, '');
  A.stats = [String(w.length), String(d.length), '₪' + rev.toLocaleString()];
  A.first = false; tick();
}
let loading = false;
async function refresh(force) {
  if (!A.k) { if (!$('#login')) renderLogin(); return; }
  if (document.body.classList.contains('gate')) showBoardShell();
  if (loading && !force) return; loading = true;
  try {
    const d = await call('ors_admin_board');
    const ids = d.queue.filter(q => q.status === 'waiting').map(q => q.id);
    if (A.known && ids.some(i => !A.known.has(i))) chime([784, 1047]);
    A.known = new Set([...(A.known || []), ...ids]); A.data = d;
    const key = JSON.stringify(d); if (key !== A.last) { A.last = key; renderBoard(); }
  } catch (e) { if (A.k && !A.data) $('#board').innerHTML = '<div class="empty">אין חיבור כרגע. המסך ינסה שוב לבד</div>'; }
  loading = false;
}

$('#board').addEventListener('click', e => {
  const t = e.target.closest('button'); if (!t || !A.data) return;
  if (t.id === 'callNext') act('ors_admin_call', { p_id: null });
  else if (t.dataset.call) act('ors_admin_call', { p_id: t.dataset.call });
  else if (t.dataset.pay) openPay(t.dataset.pay);
  else if (t.dataset.miss) openMiss(t.dataset.miss);
  else if (t.dataset.rm) openRemove(t.dataset.rm);
  else if (t.dataset.decl) openDecl(t.dataset.decl);
  else if (t.id === 'addWalk') openAdd();
  else if (t.id === 'openSet') openSettings();
  else if (t.id === 'openHist') openHistory(1);
  else if (t.id === 'openArch') openArchive();
  else if (t.id === 'printQr') window.print();
});

/* ---------- sheets ---------- */
const openSheet = html => { $('#sheet').innerHTML = html; $('#sheet').scrollTop = 0; $('#overlay').classList.add('open'); };
const closeSheet = () => $('#overlay').classList.remove('open');
function openPay(id) {
  const q = find(id); if (!q) return; pay = { id, method: 'אשראי' };
  openSheet(`<h3>תשלום · ${esc(q.name)}</h3><p class="muted">${esc(q.type)}${q.spot ? ', ' + esc(q.spot) : ''} · תור <span class="num">#${q.num}</span></p>
  <label class="f" for="pamt">סכום<div class="amount"><input id="pamt" type="number" inputmode="numeric" min="0" value="${q.price}"><span>₪</span></div></label>
  <div class="chips" id="pm">${METHODS.map(m => `<button type="button" class="chip" data-m="${m}" aria-pressed="${m === pay.method}">${m}</button>`).join('')}</div>
  <div class="err" id="perr" role="alert"></div>
  ${payLink() && String(q.phone || '').length >= 9 ? '<button class="btn ghost" id="pwa">שליחת קישור תשלום בוואטסאפ</button>' : ''}
  <p class="muted small">${payLink() ? 'הכפתור למטה רק רושם שהכסף התקבל. סמני אחרי שראית שהתשלום נכנס.' : 'הכפתור רק רושם שהכסף התקבל בדוכן. כדי לשלוח ללקוחה קישור תשלום, הוסיפי אותו בהגדרות.'}</p>
  <button class="btn" id="pok">רישום תשלום שהתקבל</button><button class="btn ghost" id="pcancel">ביטול</button>`);
}
function openMiss(id) {
  const q = find(id); if (!q) return; pay = { id };
  openSheet(`<h3>${esc(q.name)} לא הגיעה?</h3><p class="muted">תור <span class="num">#${q.num}</span>. הדף בטלפון שלה יתעדכן לפי מה שתבחרי.</p>
  <button class="btn" id="mback">החזרה לתור, 2 מקומות אחורה</button><button class="btn ghost" id="mout">הוצאה מהתור</button><button class="btn ghost" id="pcancel">ביטול</button>`);
}
function openRemove(id) {
  const q = find(id); if (!q) return; pay = { id };
  openSheet(`<h3>להסיר את ${esc(q.name)} מהתור?</h3><p class="muted">תור <span class="num">#${q.num}</span>. אי אפשר לבטל את הפעולה, היא תצטרך להירשם מחדש.</p>
  <button class="btn" id="mout">הסרה מהתור</button><button class="btn ghost" id="pcancel">ביטול</button>`);
}
async function openDecl(id, fromArch) {
  let d; try { d = await call('ors_admin_declaration', { p_id: id }); } catch (e) { return toast('לא הצלחנו', errMsg(e), true); }
  if (!d || !d.health) return;
  const H = d.health, when = new Date(d.declared_at).toLocaleString('he-IL', { day: 'numeric', month: 'numeric', year: '2-digit', hour: '2-digit', minute: '2-digit' });
  const rows = HEALTH_Q.slice().sort((a, b) => (H[b[0]] === true) - (H[a[0]] === true)).map(([k, t]) => `<div class="${H[k] ? 'yes' : ''}"><span>${t}</span><b>${H[k] ? 'כן' : 'לא'}</b></div>`).join('');
  openSheet(`<h3>הצהרת בריאות</h3><p class="muted">${esc(d.name)} · ${esc(d.type)}${d.spot ? ', ' + esc(d.spot) : ''} · תור <span class="num">#${d.num}</span> · נחתמה ב‑${when}</p>
  ${H.minor ? `<div class="note warn">מתחת לגיל 16. הורה מלווה: ${esc(H.parent)}</div>` : ''}
  ${H.note ? `<div class="care"><b>מה שהיא כתבה</b>${esc(H.note)}</div>` : ''}
  <div class="decl">${rows}</div>
  ${(H.terms || '').trim() ? `<div class="care"><b>תנאים שאישרה בחתימה</b><ul>${H.terms.split('\n').map(l => l.trim()).filter(Boolean).map(l => `<li>${esc(l)}</li>`).join('')}</ul></div>` : ''}
  <div><div class="sub" style="margin-bottom:6px">${H.minor ? 'חתימת ההורה' : 'חתימה'}</div><img class="sigimg" alt="חתימה" src="${esc(d.signature)}"></div>
  ${fromArch ? '<button class="btn ghost" id="backArch">חזרה לחיפוש</button>' : ''}<button class="btn ghost" id="pcancel">סגירה</button>`);
}
const nis = n => '₪' + Number(n || 0).toLocaleString();
async function openHistory(days) {
  const chips = [[1, 'היום'], [7, '7 ימים'], [30, '30 ימים'], [365, 'שנה']].map(([d, l]) => `<button type="button" class="chip" data-hd="${d}" aria-pressed="${d === days}">${l}</button>`).join('');
  openSheet(`<h3>סיכומים</h3><div class="chips">${chips}</div><div class="skeleton" style="padding:30px 0"><i></i></div>`);
  let h; try { h = await call('ors_admin_history', { p_days: days }); } catch (e) { return toast('לא הצלחנו', errMsg(e), true); }
  const bars = (list, total) => list.length ? `<div class="bars">${list.map(x => `<div class="bar"><div class="bar-t"><span>${esc(x.name)}</span><b class="num">${x.count} · ${nis(x.sum)}</b></div><i style="--w:${total ? Math.max(4, Math.round(x.sum / total * 100)) : 0}%"></i></div>`).join('')}</div>` : '<div class="empty">עוד אין נתונים לתקופה הזאת</div>';
  const dayRow = x => `<div><span>${new Date(x.day + 'T12:00:00').toLocaleDateString('he-IL', { weekday: 'short', day: 'numeric', month: 'numeric' })}</span><b class="num">${x.count} לקוחות · ${nis(x.sum)}</b></div>`;
  openSheet(`<h3>סיכומים</h3><div class="chips">${chips}</div>
  <div class="stats"><div class="stat"><b class="num">${nis(h.revenue)}</b><span>הכנסות</span></div><div class="stat"><b class="num">${h.count}</b><span>לקוחות</span></div><div class="stat"><b class="num">${h.count ? nis(Math.round(h.revenue / h.count)) : '₪0'}</b><span>ממוצע ללקוחה</span></div></div>
  <div class="sub">לפי סוג פירסינג</div>${bars(h.types, h.revenue)}
  <div class="sub">לפי אמצעי תשלום</div>${bars(h.methods, h.revenue)}
  ${days > 1 && h.days.length ? `<div class="sub">לפי יום</div><div class="decl">${h.days.map(dayRow).join('')}</div>` : ''}
  <p class="muted small">${h.no_show} לקוחות הוצאו מהתור בלי טיפול בתקופה הזאת.</p>
  <button class="btn ghost" id="pcancel">סגירה</button>`);
}
let archT = 0;
function openArchive() {
  openSheet(`<h3>הצהרות בריאות</h3><p class="muted">כל ההצהרות שנחתמו נשמרות כאן. חיפוש לפי שם או טלפון.</p>
  <input id="arq" type="text" placeholder="שם או טלפון" autocomplete="off"><div id="arres" class="rows"></div>
  <button class="btn ghost" id="pcancel">סגירה</button>`);
  const go = async () => {
    let r; try { r = await call('ors_admin_search', { p_q: $('#arq').value }); } catch (e) { return; }
    if (!$('#arres')) return;
    $('#arres').innerHTML = r.length ? r.map(x => `<button type="button" class="row-c arow" data-ar="${x.id}"><div class="badge num">${x.num}</div><div class="who"><b>${esc(x.name)}</b><span>${new Date(x.day + 'T12:00:00').toLocaleDateString('he-IL', { day: 'numeric', month: 'numeric', year: '2-digit' })} · ${esc(x.spot || x.type)} · <span dir="ltr">${esc(fmtPhone(x.phone))}</span></span></div><span class="pill ${x.flags ? 'warn' : 'ok'}">${x.flags ? 'יש הערות' : 'תקינה'}</span></button>`).join('') : '<div class="empty">לא נמצאו הצהרות</div>';
  };
  $('#arq').addEventListener('input', () => { clearTimeout(archT); archT = setTimeout(go, 250); }); go();
}
function openAdd() {
  pay = { type: A.data.types[0].name, spot: '' };
  openSheet(`<h3>הוספה ידנית לתור</h3>
  <label class="f" for="aname">שם<input id="aname" type="text" maxlength="40" placeholder="שם הלקוחה"></label>
  <label class="f" for="aphone">טלפון (לא חובה)<input id="aphone" type="tel" dir="ltr" inputmode="tel" placeholder="050-0000000"></label>
  <div class="chips" id="at">${A.data.types.map(t => `<button type="button" class="chip" data-t="${esc(t.name)}" aria-pressed="${t.name === pay.type}">${esc(t.name)}</button>`).join('')}</div>
  <div class="sub">איפה הפירסינג?</div><div class="chips" id="asp">${(A.data.spots || []).map(x => `<button type="button" class="chip" data-sp="${esc(x)}" aria-pressed="false">${esc(x)}</button>`).join('')}</div>
  <div class="err" id="perr" role="alert"></div>
  <button class="btn" id="aok">הוספה לתור</button><button class="btn ghost" id="pcancel">ביטול</button>`);
}
const typeRow = (t, i, l, ph) => `<div class="trow"><input type="text" class="tn" maxlength="20" placeholder="${typeof ph === 'string' ? ph : 'שם השירות'}" value="${esc(t.name)}"><input type="number" class="tp num" inputmode="numeric" min="0" placeholder="₪" value="${esc(t.price)}"><button type="button" class="xbtn" data-trm="1" aria-label="מחיקת הסוג">×</button></div>`;
function openSettings() {
  pay = { open: A.data.open };
  openSheet(`<h3>הגדרות</h3>
  <div class="sub">הרשמה לתור</div>
  <div class="seg" id="oseg"><button type="button" class="chip" data-open="1" aria-pressed="${A.data.open}">פתוח</button><button type="button" class="chip" data-open="0" aria-pressed="${!A.data.open}">סגור</button></div>
  <div class="sub">שירותים ומחירים</div>
  <div id="trows" style="display:flex;flex-direction:column;gap:8px">${A.data.types.map(typeRow).join('')}</div>
  <button type="button" class="btn sm ghost" id="tadd" style="align-self:flex-start">הוספת שירות</button>
  <label class="f" for="sspots">מיקומי פירסינג שהלקוחה בוחרת מהם (מופרדים בפסיק)<input id="sspots" type="text" value="${esc((A.data.spots || []).join(', '))}"></label>
  <div class="sub">תוספות בהרשמה</div><p class="muted small">למשל שדרוג לתכשיט טיטניום. הלקוחה בוחרת בעצמה והמחיר מתווסף.</p>
  <div id="xrows" style="display:flex;flex-direction:column;gap:8px">${(A.data.extras || []).map(t => typeRow(t, 0, 0, 'שם התוספת')).join('')}</div>
  <button type="button" class="btn sm ghost" id="xadd" style="align-self:flex-start">הוספת תוספת</button>
  <div class="sub">קישורים</div>
  <label class="f" for="lpay">קישור תשלום (פייבוקס, ביט או דף תשלום)<input id="lpay" type="text" dir="ltr" inputmode="url" placeholder="https://" value="${esc((A.data.links || {}).pay || '')}"></label>
  <label class="f" for="lrv">קישור לביקורת בגוגל<input id="lrv" type="text" dir="ltr" inputmode="url" placeholder="https://" value="${esc((A.data.links || {}).review || '')}"></label>
  <label class="f" for="lig">קישור לאינסטגרם<input id="lig" type="text" dir="ltr" inputmode="url" placeholder="https://instagram.com/" value="${esc((A.data.links || {}).instagram || '')}"></label>
  <label class="f" for="sterms">תנאים שהלקוחה מאשרת בחתימה (כל תנאי בשורה נפרדת)<textarea id="sterms" rows="5" maxlength="3000" placeholder="למשל: אין החזר כספי אחרי החירור">${esc(A.data.terms || '')}</textarea></label>
  <label class="f" for="smin">זמן ממוצע ללקוחה (בדקות)<input id="smin" type="number" inputmode="numeric" min="1" max="120" value="${A.data.min_per}"></label>
  <div class="err" id="perr" role="alert"></div>
  <button class="btn" id="sok">שמירה</button>
  <div class="sub" style="border-top:1px dashed var(--line);padding-top:14px">החלפת סיסמה</div>
  <label class="f" for="npass">סיסמה חדשה (לפחות 8 תווים)<input id="npass" type="text" autocomplete="off" dir="ltr"></label>
  <button class="btn ghost" id="pwok">החלפת סיסמה</button>
  <button class="btn ghost" id="logout">יציאה מהמערכת</button><button class="btn ghost" id="pcancel">סגירה</button>`);
}
$('#overlay').addEventListener('click', async e => {
  const id = e.target.id;
  if (id === 'overlay' || id === 'pcancel') return closeSheet();
  const c = e.target.closest('.chip:not([data-hd])');
  if (c) { [...c.parentNode.children].forEach(x => x.setAttribute('aria-pressed', x === c)); if (c.dataset.m) pay.method = c.dataset.m; if (c.dataset.t) pay.type = c.dataset.t; if (c.dataset.sp) pay.spot = c.dataset.sp; if (c.dataset.open) pay.open = c.dataset.open === '1'; return; }
  if (e.target.dataset.trm) { e.target.closest('.trow').remove(); return; }
  if (id === 'tadd' || id === 'xadd') { $(id === 'tadd' ? '#trows' : '#xrows').insertAdjacentHTML('beforeend', typeRow({ name: '', price: '' }, 0, 0, id === 'tadd' ? 'שם השירות' : 'שם התוספת')); const nr = $(id === 'tadd' ? '#trows' : '#xrows').lastElementChild; nr.querySelector('.tn').focus(); return; }
  const hc = e.target.closest('[data-hd]'); if (hc) return openHistory(+hc.dataset.hd);
  const ar = e.target.closest('[data-ar]'); if (ar) return openDecl(ar.dataset.ar, true);
  if (id === 'backArch') return openArchive();
  const btn = e.target.closest('button'); if (!btn) return;
  const run = async p => { btn.disabled = true; const ok = await p; btn.disabled = false; if (ok) closeSheet(); };
  if (id === 'pwa') {
    const q = find(pay.id), amt = Math.round(+$('#pamt').value) || q.price; let d = String(q.phone).replace(/\D/g, ''); if (d.startsWith('0')) d = '972' + d.slice(1);
    window.open('https://wa.me/' + d + '?text=' + encodeURIComponent(payText(q, amt)), '_blank', 'noopener'); return;
  }
  if (id === 'pok') {
    const amt = Math.round(+$('#pamt').value);
    if (!(amt >= 0) || $('#pamt').value === '') { $('#perr').textContent = 'צריך להזין סכום'; return; }
    const q = find(pay.id);
    run(act('ors_admin_pay', { p_id: pay.id, p_amount: amt, p_method: pay.method }, 'נרשם תשלום', (q ? q.name + ' · ' : '') + '₪' + amt + ' ב' + pay.method));
  }
  if (id === 'mback') run(act('ors_admin_miss', { p_id: pay.id, p_back: true }, 'הוחזרה לתור', '2 מקומות אחורה'));
  if (id === 'mout') run(act('ors_admin_miss', { p_id: pay.id, p_back: false }, 'הוסרה מהתור', ''));
  if (id === 'aok') {
    const name = $('#aname').value.trim();
    if (name.length < 2) { $('#perr').textContent = 'חסר שם ללקוחה'; return; }
    run(act('ors_admin_add', { p_name: name, p_phone: $('#aphone').value, p_type: pay.type, p_spot: pay.spot || '' }, 'נוספה לתור', name));
  }
  if (id === 'sok') {
    const grab = sel => [...document.querySelectorAll(sel + ' .trow')].map(r => ({ name: r.querySelector('.tn').value.trim(), price: r.querySelector('.tp').value.trim() }));
    const bad = l => l.some(t => !t.name || !/^\d{1,5}$/.test(t.price)) || new Set(l.map(t => t.name)).size !== l.length;
    const types = grab('#trows'), extras = grab('#xrows'), num = l => l.map(t => ({ name: t.name, price: +t.price }));
    if (!types.length || bad(types) || bad(extras)) { $('#perr').textContent = ERR.ORS_TYPES; return; }
    const links = { review: $('#lrv').value.trim(), instagram: $('#lig').value.trim(), pay: $('#lpay').value.trim() };
    if ([links.review, links.instagram, links.pay].some(u => u && !/^https:\/\//.test(u))) { $('#perr').textContent = ERR.ORS_LINK; return; }
    run(act('ors_admin_settings', { p_open: pay.open, p_types: num(types), p_min_per: Math.round(+$('#smin').value) || 8, p_extras: num(extras), p_links: links, p_spots: $('#sspots').value.split(',').map(x => x.trim()).filter(Boolean), p_terms: $('#sterms').value }, 'ההגדרות נשמרו', ''));
  }
  if (id === 'pwok') {
    const np = $('#npass').value;
    if (np.length < 8) { $('#perr').textContent = ERR.ORS_PASS; return; }
    run(act('ors_admin_password', { p_new: np }, 'הסיסמה הוחלפה', 'מכשירים אחרים נותקו'));
  }
  if (id === 'logout') { try { await rpc('ors_admin_logout', { k: A.k }); } catch (_) {} A.k = null; A.data = null; store.del('ors_admin'); closeSheet(); renderLogin(); }
});

refresh(true); live(() => refresh());
