/* Or's Piercing: customer screen (opened from the stand's QR) */
const S = { state: null, ticket: null, token: store.get('ors_token'), form: { type: null }, step: 'form', health: {}, signed: false, start: +(store.get('ors_start') || 0), last: '', busy: false, ac: null };
const first = n => esc(String(n).trim().split(' ')[0]);
const head = (inner, cls = '') => `<div class="p-head ${cls}"><span class="hoop" aria-hidden="true"></span><span class="hoop b" aria-hidden="true"></span><div class="logo-m" role="img" aria-label="Or's Piercing"></div>${inner}</div>`;
const priceOf = t => { const x = (S.state.types || []).find(y => y.name === t); return x ? x.price : 0; };

function forget() { S.token = null; S.ticket = null; S.start = 0; store.del('ors_token'); store.del('ors_start'); }

function alertCalled() {
  try { navigator.vibrate && navigator.vibrate([300, 150, 300, 150, 500]); } catch (_) {}
  try {
    if (!S.ac) return; const t0 = S.ac.currentTime;
    [660, 880, 1100].forEach((f, i) => { const o = S.ac.createOscillator(), g = S.ac.createGain(); o.frequency.value = f; o.connect(g); g.connect(S.ac.destination);
      g.gain.setValueAtTime(.0001, t0 + i * .22); g.gain.exponentialRampToValueAtTime(.25, t0 + i * .22 + .03); g.gain.exponentialRampToValueAtTime(.0001, t0 + i * .22 + .2);
      o.start(t0 + i * .22); o.stop(t0 + i * .22 + .22); });
  } catch (_) {}
}

function render() {
  const el = $('#phone'), m = S.ticket, st = !S.state ? 'load' : m ? m.status : (S.state.open ? S.step : 'closed');
  keep();
  el.classList.toggle('fresh', el.dataset.state !== st); el.dataset.state = st;
  document.title = st === 'called' ? 'הגיע התור שלך! · Or\'s Piercing' : 'Or\'s Piercing · תור דיגיטלי';
  let h = '';
  if (st === 'load') return;
  if (st === 'closed') {
    h = head(`<h1>התור סגור כרגע</h1><p>נפתח שוב כשאור בדוכן. אפשר לרענן את הדף בעוד כמה דקות</p>`) +
      `<div class="p-body stag"><div class="note warn">כרגע אי אפשר להירשם לתור</div><button class="btn ghost" id="reload">רענון</button></div>`;
  } else if (st === 'form') {
    const w = S.state.waiting, types = S.state.types || [];
    if (!types.some(t => t.name === S.form.type)) S.form.type = types[0] ? types[0].name : null;
    h = head(`<h1>נכנסים לתור,<br>ממשיכים להסתובב</h1><p>הדף הזה יראה לך בזמן אמת מתי מגיע התור שלך</p>
      <div class="live"><i></i><span id="livec"><b class="num">${w}</b> ממתינות עכשיו · כ‑<b class="num">${w * S.state.min_per}</b> דקות</span></div>`) +
    `<div class="p-body"><form id="join" class="stag" novalidate>
      <div class="fl"><input id="fname" type="text" autocomplete="name" maxlength="40" placeholder=" " value="${esc(S.form.name || '')}"><label for="fname">שם מלא</label></div>
      <div class="fl"><input id="fphone" type="tel" dir="ltr" inputmode="tel" autocomplete="tel" maxlength="16" placeholder=" " value="${esc(S.form.phone || '')}"><label for="fphone">טלפון</label></div>
      <div><span class="pick-t">איזה פירסינג?</span><div class="tgrid">${types.map(t => `<button type="button" class="tcard" data-type="${esc(t.name)}" aria-pressed="${S.form.type === t.name}"><span class="ic"></span><b>${esc(t.name)}</b><small class="num">₪${t.price}</small></button>`).join('')}</div></div>
      <div class="err" id="ferr" role="alert"></div>
      <button class="btn" type="submit" id="fgo">המשך להצהרת בריאות</button>
      <p class="trust">בלי אפליקציה ובלי סיסמה. לוקח בערך דקה</p>
    </form></div>`;
  } else if (st === 'health') {
    const H = S.health;
    h = head(`<p class="step">שלב 2 מתוך 2</p><h2>הצהרת בריאות</h2><p>דקה אחת כאן, במקום טופס נייר בדוכן</p>`) +
    `<div class="p-body"><form id="hform" class="stag" novalidate>
      <div><div class="q-top"><span class="pick-t">משהו מאלה נכון לגבייך?</span><button type="button" class="btn sm ghost" id="allno">לא לכולן</button></div>
      <div class="qs">${HEALTH_Q.map(([k, t]) => `<div class="q" data-q="${k}"><span>${t}</span><div class="yn" data-k="${k}"><button type="button" data-v="0" aria-pressed="${H[k] === false}">לא</button><button type="button" data-v="1" aria-pressed="${H[k] === true}">כן</button></div></div>`).join('')}</div></div>
      <label class="f" for="hnote">תרופות קבועות, או משהו שחשוב שאור תדע (לא חובה)<textarea id="hnote" maxlength="300" rows="2">${esc(H.note || '')}</textarea></label>
      <div><span class="pick-t">גיל</span><div class="seg" id="hage"><button type="button" class="chip" data-minor="0" aria-pressed="${H.minor === false}">16 ומעלה</button><button type="button" class="chip" data-minor="1" aria-pressed="${H.minor === true}">מתחת ל‑16, הורה איתי</button></div></div>
      <div class="fl" id="parentWrap" ${H.minor ? '' : 'hidden'}><input id="hparent" type="text" maxlength="40" placeholder=" " value="${esc(H.parent || '')}"><label for="hparent">שם ההורה המלווה</label></div>
      <div><div class="q-top"><span class="pick-t" id="sigT">${H.minor ? 'חתימת ההורה' : 'חתימה'}</span><button type="button" class="linkbtn" id="sigclr">ניקוי</button></div>
      <canvas id="sig" class="sig" width="640" height="240" aria-label="אזור חתימה. חותמים עם האצבע"></canvas></div>
      <p class="muted small">בחתימה אני מאשרת שהפרטים נכונים, שקיבלתי הסבר על הפירסינג ועל הטיפול אחריו, ושאני עושה אותו מרצוני. הפרטים נשמרים אצל Or's Piercing בלבד.</p>
      <div class="err" id="herr" role="alert"></div>
      <button class="btn" type="submit" id="hgo">חתימה וכניסה לתור</button>
      <button type="button" class="linkbtn" id="hback">חזרה לפרטים</button>
    </form></div>`;
  } else if (st === 'waiting') {
    const a = m.ahead, base = Math.max(S.start, a), prog = base ? 1 - a / (base + 1) : 1, C = 2 * Math.PI * 92;
    h = head(`<p>מספר תור <b class="num">#${m.num}</b></p><h2>${first(m.name)}, את בתור</h2>`) +
    `<div class="p-body stag">
    <div class="ticket"><div class="t-top"><div class="ring-wrap"><svg viewBox="0 0 200 200"><circle class="ring-bg" cx="100" cy="100" r="92"/><circle class="ring-fg" cx="100" cy="100" r="92" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - Math.max(.06, prog))}"/></svg>
      <span class="bead"></span><div class="ring-in"><small>לפנייך בתור</small><b class="num">${a}</b><small>${a === 0 ? 'את הבאה' : 'כ‑' + (a * S.state.min_per + 4) + ' דקות'}</small></div></div></div>
      <div class="perf"></div>
      <div class="t-meta"><div><small>מספר תור</small><b class="num">#${m.num}</b></div><div><small>פירסינג</small><b>${esc(m.type)}</b></div><div><small>מחיר</small><b class="num">₪${m.price}</b></div></div></div>
    <div class="line"><span>הדוכן</span>${'<i></i>'.repeat(Math.min(a, 8))}<em>את</em></div>
    ${m.missed ? '<div class="note warn">פספסת את התור הקודם. החזרנו אותך לתור</div>' : ''}
    ${a <= 2 ? '<div class="note warn">עוד מעט תורך. כדאי להתקרב לדוכן</div>' : '<div class="note">אפשר להסתובב בינתיים. הדף מתעדכן לבד, כדאי להשאיר אותו פתוח</div>'}
    <button class="linkbtn" id="leave">יציאה מהתור</button></div>`;
  } else if (st === 'called') {
    h = head(`<div class="radar" aria-hidden="true"><i></i><i></i><i></i></div><p>תור <b class="num">#${m.num}</b></p><h2>הגיע התור שלך</h2><p>אור מחכה לך בדוכן</p><span class="tm num" data-t="${m.called_at}" data-mine="1"></span>`, 'mid') +
    `<div class="p-body stag">
    <div class="ticket"><div class="t-meta two"><div><small>פירסינג</small><b>${esc(m.type)}</b></div><div><small>לתשלום בסיום</small><b class="num">₪${m.price}</b></div></div></div>
    <div class="note">משלמים בדוכן: אשראי, ביט, פייבוקס או מזומן</div></div>`;
  } else if (st === 'done') {
    h = head(`<div class="fall" aria-hidden="true">${[8, 22, 37, 51, 66, 80, 92].map((x, i) => `<i style="left:${x}%;animation-delay:${(i * .47).toFixed(2)}s"></i>`).join('')}</div><h2>תודה ${first(m.name)},<br>שיהיה במזל</h2><p>היה כיף לארח אותך</p>`, 'mid') +
    `<div class="p-body stag">
    <div class="receipt"><div class="row"><b>סיכום</b><span class="num">תור #${m.num}</span></div>
      <div class="row"><span>פירסינג ${esc(m.type)}</span><span class="num">₪${m.paid_amount}</span></div>
      <div class="row"><span>אמצעי תשלום</span><span>${esc(m.paid_method)}</span></div>
      <div class="row tot"><span>סה"כ שולם</span><span class="num">₪${m.paid_amount}</span></div></div>
    <div class="care"><b>הוראות טיפול</b><ul><li>לנקות פעמיים ביום בתמיסת מי מלח</li><li>לא לגעת בידיים לא נקיות</li><li>לא להחליף תכשיט עד להחלמה מלאה</li></ul></div>
    <button class="btn ghost" id="again">סיום</button></div>`;
  } else { // removed
    h = head(`<h2>התור שלך בוטל</h2><p>לא הגעת בזמן, אז התור עבר הלאה. אפשר להירשם שוב</p>`, 'mid') +
    `<div class="p-body stag"><button class="btn" id="again">כניסה מחדש לתור</button></div>`;
  }
  el.innerHTML = h; tick();
  if (st === 'health') { S.signed = false; initSig(); el.scrollIntoView({ block: 'start' }); }
}
function keep() {
  const n = $('#fname'); if (n) { S.form.name = n.value; S.form.phone = $('#fphone').value; }
  const hn = $('#hnote'); if (hn) { S.health.note = hn.value; S.health.parent = $('#hparent').value; }
}
function initSig() {
  const cv = $('#sig'), x = cv.getContext('2d'); let down = false, lx = 0, ly = 0;
  x.strokeStyle = '#330C0F'; x.lineWidth = 4; x.lineCap = 'round'; x.lineJoin = 'round';
  const pos = e => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) * cv.width / r.width, (e.clientY - r.top) * cv.height / r.height]; };
  cv.addEventListener('pointerdown', e => { e.preventDefault(); down = true; if ($('#herr')) $('#herr').textContent = ''; [lx, ly] = pos(e); try { cv.setPointerCapture(e.pointerId); } catch (_) {} x.beginPath(); x.arc(lx, ly, 2, 0, 7); x.fillStyle = '#330C0F'; x.fill(); });
  cv.addEventListener('pointermove', e => { if (!down) return; e.preventDefault(); const [nx, ny] = pos(e); x.beginPath(); x.moveTo(lx, ly); x.lineTo(nx, ny); x.stroke(); if (Math.hypot(nx - lx, ny - ly) > 3) { S.signed = true; cv.classList.add('signed'); } lx = nx; ly = ny; });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => cv.addEventListener(ev, () => { down = false; }));
}

async function refresh() {
  if (S.busy) return;
  try {
    const prev = S.ticket && S.ticket.status;
    const [state, ticket] = await Promise.all([rpc('ors_state'), S.token ? rpc('ors_ticket', { p_token: S.token }) : null]);
    S.state = state; S.ticket = ticket;
    if (S.token && (!ticket || ticket.status === 'left')) forget();
    if (S.ticket && S.ticket.status === 'called' && prev === 'waiting') alertCalled();
    const key = JSON.stringify([S.ticket, S.ticket ? S.state.min_per : S.state.open + JSON.stringify(S.state.types)]);
    if (!S.ticket && S.step === 'health' && S.state.open && S.last) { S.last = key; return; }
    if (key !== S.last) { S.last = key; render(); }
    else if (!S.ticket && $('#livec')) $('#livec').innerHTML = `<b class="num">${state.waiting}</b> ממתינות עכשיו · כ‑<b class="num">${state.waiting * state.min_per}</b> דקות`;
  } catch (e) {
    if (!S.state) $('#phone').innerHTML = head(`<h2>אין חיבור</h2><p>בדקי את האינטרנט. הדף ינסה שוב לבד</p>`, 'mid') + '<div class="p-body"></div>';
  }
}

$('#phone').addEventListener('click', async e => {
  const c = e.target.closest('.tcard');
  if (c) { S.form.type = c.dataset.type; document.querySelectorAll('.tcard').forEach(x => x.setAttribute('aria-pressed', x === c)); return; }
  if (e.target.id === 'reload') return refresh();
  const yn = e.target.closest('.yn button');
  if (yn) { const w = yn.parentNode; S.health[w.dataset.k] = yn.dataset.v === '1'; [...w.children].forEach(b => b.setAttribute('aria-pressed', b === yn)); w.closest('.q').classList.remove('miss'); return; }
  if (e.target.id === 'allno') { HEALTH_Q.forEach(([k]) => { S.health[k] = false; }); document.querySelectorAll('.yn').forEach(w => { [...w.children].forEach(b => b.setAttribute('aria-pressed', b.dataset.v === '0')); w.closest('.q').classList.remove('miss'); }); return; }
  const ag = e.target.closest('#hage .chip');
  if (ag) { S.health.minor = ag.dataset.minor === '1'; [...ag.parentNode.children].forEach(b => b.setAttribute('aria-pressed', b === ag)); $('#parentWrap').hidden = !S.health.minor; $('#sigT').textContent = S.health.minor ? 'חתימת ההורה' : 'חתימה'; return; }
  if (e.target.id === 'sigclr') { const cv = $('#sig'); cv.getContext('2d').clearRect(0, 0, cv.width, cv.height); cv.classList.remove('signed'); S.signed = false; return; }
  if (e.target.id === 'hback') { keep(); S.step = 'form'; S.last = ''; render(); return; }
  if (e.target.id === 'leave') {
    if (!confirm('לצאת מהתור? המקום שלך לא יישמר')) return;
    try { await rpc('ors_leave', { p_token: S.token }); } catch (er) { return toast('לא הצלחנו', errMsg(er), true); }
    forget(); S.last = ''; refresh();
  }
  if (e.target.id === 'again') { forget(); S.form = { type: null }; S.health = {}; S.step = 'form'; S.last = ''; refresh(); }
});
$('#phone').addEventListener('submit', async e => {
  e.preventDefault();
  if (e.target.id === 'join') {
    const name = $('#fname').value.trim(), phone = $('#fphone').value.trim(), err = $('#ferr');
    err.textContent = '';
    if (name.length < 2) { err.textContent = 'חסר שם. כתבי שם מלא כדי שנדע למי לקרוא'; return; }
    if (phone.replace(/\D/g, '').length < 9) { err.textContent = 'מספר הטלפון קצר מדי. צריך מספר מלא'; return; }
    keep(); S.step = 'health'; render(); return;
  }
  if (e.target.id !== 'hform') return;
  keep();
  const H = S.health, err = $('#herr'), btn = $('#hgo'); err.textContent = '';
  const missing = HEALTH_Q.filter(([k]) => typeof H[k] !== 'boolean');
  document.querySelectorAll('.q').forEach(q => q.classList.toggle('miss', missing.some(([k]) => k === q.dataset.q)));
  if (missing.length) { err.textContent = 'נשארו ' + missing.length + ' שאלות בלי תשובה. סמני כן או לא בכל שורה'; document.querySelector('.q.miss').scrollIntoView({ block: 'center', behavior: 'smooth' }); return; }
  if (typeof H.minor !== 'boolean') { err.textContent = 'צריך לבחור גיל'; return; }
  if (H.minor && (H.parent || '').trim().length < 2) { err.textContent = 'חסר שם ההורה המלווה'; return; }
  if (!S.signed) { err.textContent = H.minor ? 'חסרה חתימת ההורה. חותמים עם האצבע בתוך המסגרת' : 'חסרה חתימה. חותמים עם האצבע בתוך המסגרת'; return; }
  try { S.ac = S.ac || new (window.AudioContext || window.webkitAudioContext)(); S.ac.resume(); } catch (_) {}
  S.busy = true; btn.disabled = true; btn.textContent = 'רושמות אותך...';
  try {
    const health = { minor: H.minor, parent: H.minor ? H.parent.trim() : '', note: (H.note || '').trim() }; HEALTH_Q.forEach(([k]) => { health[k] = H[k]; });
    const r = await rpc('ors_join', { p_name: S.form.name.trim(), p_phone: S.form.phone.trim(), p_type: S.form.type, p_health: health, p_sig: $('#sig').toDataURL('image/png') });
    S.token = r.token; S.ticket = r.ticket; S.start = r.ticket.ahead; store.set('ors_token', r.token); store.set('ors_start', String(S.start));
    S.form = { type: null }; S.health = {}; S.step = 'form'; S.last = ''; S.busy = false; await refresh();
  } catch (er) {
    S.busy = false; btn.disabled = false; btn.textContent = 'חתימה וכניסה לתור'; err.textContent = errMsg(er);
    if (['ORS_NAME', 'ORS_PHONE', 'ORS_DUP', 'ORS_TYPE'].includes(errCode(er))) { const m = errMsg(er); S.step = 'form'; S.last = ''; await refresh(); render(); const fe = $('#ferr'); if (fe) fe.textContent = m; }
    else if (errCode(er) === 'ORS_CLOSED') { S.last = ''; refresh(); }
  }
});

refresh(); live(refresh);
