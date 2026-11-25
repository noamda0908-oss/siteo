/* Or's Piercing: customer screen (opened from the stand's QR) */
document.documentElement.style.setProperty('--logo', 'url("' + new URL('logo.png', location.href).href + '")');
const S = { state: null, ticket: null, token: store.get('ors_token'), form: { type: null }, start: +(store.get('ors_start') || 0), last: '', busy: false, ac: null };
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
  const el = $('#phone'), m = S.ticket, st = !S.state ? 'load' : m ? m.status : (S.state.open ? 'form' : 'closed');
  const old = $('#fname'); if (old) { S.form.name = old.value; S.form.phone = $('#fphone').value; S.form.age = $('#fage').checked; }
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
      <label class="check" for="fage"><input id="fage" type="checkbox" ${S.form.age ? 'checked' : ''}>אני מעל גיל 16, או שהגעתי עם הורה שיחתום על אישור</label>
      <div class="err" id="ferr" role="alert"></div>
      <button class="btn" type="submit" id="fgo">כניסה לתור</button>
      <p class="trust">בלי אפליקציה · בלי סיסמה · 20 שניות</p>
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
  if (e.target.id === 'leave') {
    if (!confirm('לצאת מהתור? המקום שלך לא יישמר')) return;
    try { await rpc('ors_leave', { p_token: S.token }); } catch (er) { return toast('לא הצלחנו', errMsg(er), true); }
    forget(); S.last = ''; refresh();
  }
  if (e.target.id === 'again') { forget(); S.form = { type: null }; S.last = ''; refresh(); }
});
$('#phone').addEventListener('submit', async e => {
  e.preventDefault();
  const name = $('#fname').value.trim(), phone = $('#fphone').value.trim(), err = $('#ferr'), btn = $('#fgo');
  err.textContent = '';
  if (name.length < 2) { err.textContent = 'חסר שם. כתבי שם מלא כדי שנדע למי לקרוא'; return; }
  if (phone.replace(/\D/g, '').length < 9) { err.textContent = 'מספר הטלפון קצר מדי. צריך מספר מלא'; return; }
  if (!$('#fage').checked) { err.textContent = 'צריך לסמן את אישור הגיל כדי להיכנס לתור'; return; }
  try { S.ac = S.ac || new (window.AudioContext || window.webkitAudioContext)(); S.ac.resume(); } catch (_) {}
  S.busy = true; btn.disabled = true; btn.textContent = 'רושמות אותך...';
  try {
    const r = await rpc('ors_join', { p_name: name, p_phone: phone, p_type: S.form.type });
    S.token = r.token; S.ticket = r.ticket; S.start = r.ticket.ahead; store.set('ors_token', r.token); store.set('ors_start', String(S.start));
    S.form = { type: null }; S.last = ''; S.busy = false; await refresh();
  } catch (er) {
    S.busy = false; btn.disabled = false; btn.textContent = 'כניסה לתור'; err.textContent = errMsg(er);
    if (errCode(er) === 'ORS_CLOSED' || errCode(er) === 'ORS_TYPE') { S.last = ''; refresh(); }
  }
});

refresh(); live(refresh);
