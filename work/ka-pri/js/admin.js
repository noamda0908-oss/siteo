/* כ.א פרי — admin panel. All data goes through one password-checked database function. */
(function () {
  'use strict';
  var API = 'https://dndqljbibficfscylteq.supabase.co/rest/v1/rpc/kapri_admin';
  var KEY = 'sb_publishable_GaX5Eik7yRR-m8JtWmZ1Rg_oUZo8Edt';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var STATUS = { 'new': 'חדש', progress: 'בטיפול', done: 'סגור', dropped: 'לא רלוונטי' };
  var NEEDS_BIZ = ['ניקיון', 'מטבח', 'עוזרת בית'], NEEDS_JOB = ['ניקיון', 'מטבח', 'משק בית'], WHEN = ['בוקר', 'ערב', 'סופ״ש'];
  var PLACES = ['מסעדה או בית קפה', 'בר או אולם', 'משרד', 'בית כנסת או מוסד', 'בית פרטי', 'אחר'], EXP = ['אין ניסיון', 'עד שנה', 'שנה עד שלוש', 'יותר משלוש שנים'];
  var DAYS = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
  var ICON = {
    tel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3z"/><path d="M9 8.6c-.5 3 3.3 6.8 6.4 6.4"/></svg>',
    bin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>'
  };
  var pw = '', D = { leads: [], placements: [], shifts: [], jobs: [], testimonials: [], settings: {} };
  var tab = 'biz', filt = 'all', q = '', weekOff = 0, month = ym(new Date()), known = null;
  try { pw = sessionStorage.getItem('kapri_pw') || ''; } catch (e) { /* private mode */ }

  /* ---------- helpers ---------- */
  function api(action, p) {
    return fetch(API, { method: 'POST', headers: { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'application/json' }, body: JSON.stringify({ pw: pw, action: action, p: p || {} }) })
      .then(function (r) { if (!r.ok) throw new Error('http'); return r.json(); })
      .then(function (res) { if (!res || !res.ok) throw new Error((res && res.error) || 'fail'); return res; });
  }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function btn(cls, text, fn) { var b = el('button', 'btn ' + cls, text); b.type = 'button'; if (fn) b.addEventListener('click', fn); return b; }
  function toast(t) { var h = $('#toast'); h.innerHTML = ''; h.appendChild(el('span', '', t)); clearTimeout(toast.t); toast.t = setTimeout(function () { h.innerHTML = ''; }, 2600); }
  function digits(p) { return String(p || '').replace(/[^\d+]/g, ''); }
  function intl(p) { var d = digits(p).replace(/^\+/, ''); return d.indexOf('972') === 0 ? d : '972' + d.replace(/^0/, ''); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function ymd(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function ym(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1); }
  function today() { return ymd(new Date()); }
  function money(n) { return '₪' + (Math.round(n * 100) / 100).toLocaleString('he-IL'); }
  function ago(iso) {
    var d = new Date(iso), s = (Date.now() - d) / 1000;
    if (s < 90) return 'עכשיו';
    if (s < 3600) return 'לפני ' + Math.round(s / 60) + ' דק׳';
    if (ymd(d) === today()) return 'היום ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
    return d.getDate() + '.' + (d.getMonth() + 1) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  }
  function lead(id) { for (var i = 0; i < D.leads.length; i++) if (D.leads[i].id === id) return D.leads[i]; return null; }
  function title(l) { return l ? (l.kind === 'biz' ? (l.biz || l.name) : l.name) : 'נמחק'; }
  function hours(s) { var a = s.t_start.split(':'), b = s.t_end.split(':'); var h = (+b[0] + b[1] / 60) - (+a[0] + a[1] / 60); if (h <= 0) h += 24; return Math.round(h * 100) / 100; }
  function isDue(l) { return l.follow_up && l.follow_up <= today() && l.status !== 'done' && l.status !== 'dropped'; }
  function isStale(l) { return l.status === 'new' && Date.now() - new Date(l.created_at) > 864e5; }
  function csv(name, rows) {
    var text = '﻿' + rows.map(function (r) { return r.map(function (c) { c = c == null ? '' : String(c); if (/^[=+\-@]/.test(c)) c = "'" + c; return '"' + c.replace(/"/g, '""') + '"'; }).join(','); }).join('\r\n');
    var a = el('a'); a.href = URL.createObjectURL(new Blob([text], { type: 'text/csv;charset=utf-8' })); a.download = name + '.csv'; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
  }

  /* ---------- generic form dialog ---------- */
  var formSave = null;
  function openForm(o) {
    var d = $('#formDlg'), body = $('#formBody'); body.innerHTML = ''; $('#formT').textContent = o.title; $('#formP').textContent = o.text || ''; $('#formP').hidden = !o.text; $('#formErr').hidden = true;
    $('#formOk').textContent = o.ok || 'שמירה';
    var row = null;
    o.fields.forEach(function (f) {
      var wrap;
      if (f.type === 'checks') {
        wrap = el('div'); wrap.appendChild(el('label', '', f.label)); var box = el('div', 'checks');
        f.options.forEach(function (op) { var v = Array.isArray(op) ? op[0] : op, t = Array.isArray(op) ? op[1] : op; var l = el('label'), i = el('input'); i.type = 'checkbox'; i.name = f.k; i.value = v; i.checked = (f.value || []).indexOf(v) > -1; l.appendChild(i); l.appendChild(el('span', '', t)); box.appendChild(l); });
        wrap.appendChild(box); wrap.style.display = 'grid'; wrap.style.gap = '5px';
      } else if (f.type === 'bool') {
        wrap = el('div', 'checks'); var l2 = el('label'), i2 = el('input'); i2.type = 'checkbox'; i2.name = f.k; i2.checked = !!f.value; l2.appendChild(i2); l2.appendChild(el('span', '', f.label)); wrap.appendChild(l2);
      } else if (f.type === 'hint') {
        wrap = el('p', 'hint', f.label);
      } else {
        wrap = el('label', '', f.label); var inp;
        if (f.type === 'select') { inp = el('select'); f.options.forEach(function (op) { var arr = Array.isArray(op), o2 = el('option', '', arr ? op[1] : op); o2.value = arr ? op[0] : op; inp.appendChild(o2); }); }
        else if (f.type === 'textarea') { inp = el('textarea'); }
        else { inp = el('input'); inp.type = f.type || 'text'; if (f.type === 'number') { inp.inputMode = 'decimal'; inp.min = '0'; inp.step = '0.5'; } if (f.type === 'tel') inp.dir = 'ltr'; }
        inp.name = f.k; if (f.value != null) inp.value = f.value; if (f.placeholder) inp.placeholder = f.placeholder; if (f.max) inp.maxLength = f.max; if (f.required) inp.required = true;
        wrap.appendChild(inp); if (f.hint) wrap.appendChild(el('span', 'hint', f.hint));
      }
      if (f.half) { if (!row) { row = el('div', 'two'); body.appendChild(row); } row.appendChild(wrap); if (row.children.length === 2) row = null; }
      else { row = null; body.appendChild(wrap); }
    });
    formSave = o.save; d.showModal();
  }
  $('#formX').addEventListener('click', function () { $('#formDlg').close(); });
  $('#formForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, vals = {}, err = $('#formErr'), bad = null;
    $$('[name]', f).forEach(function (i) {
      if (i.type === 'checkbox') { if ($$('[name="' + i.name + '"]', f).length > 1) { (vals[i.name] = vals[i.name] || []); if (i.checked) vals[i.name].push(i.value); } else vals[i.name] = i.checked; }
      else { vals[i.name] = i.value.trim(); if (i.required && !vals[i.name] && !bad) bad = i; }
    });
    if (bad) { err.textContent = 'חסר שדה חובה.'; err.hidden = false; bad.focus(); return; }
    var ok = $('#formOk'); ok.disabled = true;
    new Promise(function (res) { res(formSave(vals)); }).then(function (msg) { $('#formDlg').close(); return load(true).then(function () { toast(msg || 'נשמר'); }); })
      .catch(function (ex) { err.textContent = ex && ex.user ? ex.message : 'השמירה נכשלה. בדקו את הפרטים ונסו שוב.'; err.hidden = false; })
      .then(function () { ok.disabled = false; });
  });
  function userErr(m) { var e = new Error(m); e.user = true; return e; }
  function ask(t, text) {
    return new Promise(function (res) { var d = $('#askDlg'); $('#askT').textContent = t; $('#askP').textContent = text; d.returnValue = ''; d.addEventListener('close', function h() { d.removeEventListener('close', h); res(d.returnValue === 'ok'); }); d.showModal(); });
  }
  function act(action, p, msg) { return api(action, p).then(function () { return load(true); }).then(function () { if (msg) toast(msg); }).catch(function () { toast('הפעולה נכשלה. נסו שוב.'); }); }

  /* ---------- auth + loading ---------- */
  function showApp(on) { $('#login').hidden = on; $('#app').hidden = !on; }
  function load(quiet) {
    return api('data').then(function (res) {
      D = { leads: res.leads, placements: res.placements, shifts: res.shifts, jobs: res.jobs, testimonials: res.testimonials, settings: res.settings || {} };
      try { sessionStorage.setItem('kapri_pw', pw); } catch (e) { /* */ }
      var ids = D.leads.map(function (l) { return l.id; });
      if (known) {
        var fresh = D.leads.filter(function (l) { return known.indexOf(l.id) < 0 && l.source === 'site'; });
        if (fresh.length) {
          toast(fresh.length === 1 ? 'ליד חדש: ' + title(fresh[0]) : fresh.length + ' לידים חדשים');
          try { if (window.Notification && Notification.permission === 'granted') new Notification('כ.א פרי: ליד חדש', { body: fresh.map(title).join(', ') }); } catch (e) { /* */ }
        }
      }
      known = ids; showApp(true); render(); if (!quiet) toast('עודכן');
    });
  }
  $('#loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var err = $('#loginErr'), b = $('#loginBtn'); err.hidden = true; b.disabled = true; b.textContent = 'בודק…'; pw = $('#pw').value;
    load(true).catch(function (ex) {
      err.textContent = ex.message === 'auth' ? 'הסיסמה לא נכונה. אחרי כמה ניסיונות שגויים הכניסה ננעלת לרבע שעה.' : 'אין חיבור לשרת. בדקו את האינטרנט ונסו שוב.';
      err.hidden = false; pw = '';
    }).then(function () { b.disabled = false; b.textContent = 'כניסה'; });
  });
  $('#logout').addEventListener('click', function () { pw = ''; known = null; try { sessionStorage.removeItem('kapri_pw'); } catch (e) { /* */ } $('#pw').value = ''; showApp(false); });
  $('#refresh').addEventListener('click', function () { load().catch(function () { toast('הרענון נכשל'); }); });
  if (pw) load(true).catch(function () { pw = ''; showApp(false); });
  var idle = function () { return pw && !$('#app').hidden && !document.hidden && !$('dialog[open]') && !(document.activeElement && /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)); };
  setInterval(function () { if (idle()) load(true).catch(function () {}); }, 60000);
  document.addEventListener('visibilitychange', function () { if (idle()) load(true).catch(function () {}); });

  /* ---------- lead form (add / full card) ---------- */
  function leadForm(l, kind) {
    var isNew = !l; l = l || { kind: kind, needs: [], availability: [], status: 'progress' }; var biz = l.kind === 'biz';
    var f = [];
    if (biz) f.push({ k: 'biz', label: 'שם העסק או המשפחה', value: l.biz, max: 120, half: true });
    f.push({ k: 'name', label: biz ? 'איש קשר' : 'שם מלא', value: l.name, required: true, max: 80, half: true });
    f.push({ k: 'phone', label: 'טלפון', type: 'tel', value: l.phone, required: true, max: 20, half: true });
    f.push({ k: 'area', label: biz ? 'עיר / כתובת' : 'אזור מגורים', value: l.area, max: 120, half: true });
    f.push({ k: 'needs', label: biz ? 'אילו עובדים צריך' : 'תחומי עבודה', type: 'checks', options: biz ? NEEDS_BIZ : NEEDS_JOB, value: l.needs });
    if (biz) {
      f.push({ k: 'place_type', label: 'סוג המקום', type: 'select', options: PLACES, value: l.place_type || PLACES[0], half: true });
      f.push({ k: 'bill_rate', label: 'מחיר לשעה לעסק (₪)', type: 'number', value: l.bill_rate, half: true });
      f.push({ k: 'details', label: 'ימים קבועים, שעות ופרטים', type: 'textarea', value: l.details, max: 1000 });
    } else {
      f.push({ k: 'availability', label: 'זמינות', type: 'checks', options: WHEN, value: l.availability });
      f.push({ k: 'experience', label: 'ניסיון', type: 'select', options: EXP, value: l.experience || EXP[0], half: true });
      f.push({ k: 'wage_rate', label: 'שכר לשעה לעובד (₪)', type: 'number', value: l.wage_rate, half: true });
      f.push({ k: 'docs_ok', label: 'מסמכים נבדקו (תעודה מזהה / אישור עבודה)', type: 'bool', value: l.docs_ok });
      f.push({ k: 'details', label: 'פרטים נוספים על העובד', type: 'textarea', value: l.details, max: 1000, hint: 'לא לשמור כאן מספרי תעודת זהות. מספיק לסמן שהמסמכים נבדקו.' });
    }
    f.push({ k: 'status', label: 'סטטוס', type: 'select', options: Object.keys(STATUS).map(function (k) { return [k, STATUS[k]]; }), value: l.status, half: true });
    f.push({ k: 'follow_up', label: 'לחזור אליו בתאריך', type: 'date', value: l.follow_up, half: true });
    f.push({ k: 'admin_note', label: 'הערה פנימית', type: 'textarea', value: l.admin_note, max: 600 });
    if (l.note) f.push({ type: 'hint', label: 'מה נכתב בטופס: ' + l.note });
    openForm({
      title: isNew ? (biz ? 'עסק חדש' : 'עובד חדש') : title(l), text: isNew ? 'ליד שהגיע בטלפון או מפה לאוזן.' : '', fields: f,
      save: function (v) {
        if (v.wage_rate && !/^\d{1,5}(\.\d{1,2})?$/.test(v.wage_rate) || v.bill_rate && !/^\d{1,5}(\.\d{1,2})?$/.test(v.bill_rate)) throw userErr('התעריף צריך להיות מספר, למשל 45 או 62.5.');
        v.id = l.id || null; v.kind = l.kind; v.note = l.note || ''; if (!biz) { v.place_type = ''; } else { v.availability = []; v.experience = ''; }
        return api('lead_save', v).then(function () { return isNew ? 'הליד נוסף' : 'הכרטיס נשמר'; });
      }
    });
  }
  $('#addLead').addEventListener('click', function () { leadForm(null, tab === 'job' ? 'job' : 'biz'); });

  /* ---------- placements + shifts dialogs ---------- */
  function score(w, b) { return (w.needs || []).filter(function (n) { return (b.needs || []).some(function (x) { return x === n || (x === 'עוזרת בית' && n === 'משק בית'); }); }).length; }
  function openPlace(b) {
    var ws = D.leads.filter(function (l) { return l.kind === 'job' && l.status !== 'dropped'; }).sort(function (a, c) { return score(c, b) - score(a, b) || new Date(c.created_at) - new Date(a.created_at); });
    if (!ws.length) { toast('עדיין אין עובדים ברשימה'); return; }
    openForm({
      title: 'שיבוץ עובד', text: 'עבור ' + title(b) + (b.area ? ', ' + b.area : ''), ok: 'שיבוץ',
      fields: [{ k: 'worker_id', label: 'עובד', type: 'select', options: ws.map(function (w) { return [w.id, w.name + (score(w, b) ? ' · מתאים' : '') + ' (' + [(w.needs || []).join('/'), (w.availability || []).join('/'), w.area].filter(Boolean).join(', ') + ')']; }) },
        { k: 'role', label: 'תפקיד', value: (b.needs || []).join(', '), max: 60, placeholder: 'למשל: שוטף כלים, משמרת ערב' }],
      save: function (v) { v.biz_id = b.id; return api('place', v).then(function () { return 'העובד שובץ'; }); }
    });
  }
  function weekStart(off) { var d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - d.getDay() + off * 7); return d; }
  function openShift(preBiz, preWorker) {
    var ws = D.leads.filter(function (l) { return l.kind === 'job' && l.status !== 'dropped'; }), bs = D.leads.filter(function (l) { return l.kind === 'biz' && l.status !== 'dropped'; });
    if (!ws.length || !bs.length) { toast('צריך לפחות עובד אחד ועסק אחד כדי לקבוע משמרת'); return; }
    var w0 = weekStart(weekOff), opts = DAYS.map(function (n, i) { var d = new Date(w0); d.setDate(w0.getDate() + i); return [ymd(d), n + ' ' + d.getDate() + '.' + (d.getMonth() + 1)]; });
    openForm({
      title: 'משמרת חדשה', text: 'בוחרים יום אחד או כמה ימים בשבוע שמוצג.', ok: 'קביעה',
      fields: [{ k: 'worker_id', label: 'עובד', type: 'select', options: ws.map(function (w) { return [w.id, w.name]; }), value: preWorker },
        { k: 'biz_id', label: 'עסק', type: 'select', options: bs.map(function (b) { return [b.id, title(b)]; }), value: preBiz },
        { k: 'days', label: 'ימים', type: 'checks', options: opts, value: [] },
        { k: 't_start', label: 'התחלה', type: 'time', value: '08:00', required: true, half: true }, { k: 't_end', label: 'סיום', type: 'time', value: '16:00', required: true, half: true },
        { k: 'note', label: 'הערה', max: 200 }],
      save: function (v) { if (!v.days.length) throw userErr('בחרו לפחות יום אחד.'); return api('shift_save', v).then(function () { return v.days.length > 1 ? v.days.length + ' משמרות נקבעו' : 'המשמרת נקבעה'; }); }
    });
  }

  /* ---------- cards ---------- */
  function contactBtns(l, small) {
    var f = document.createDocumentFragment();
    var t = el('a', 'btn btn--line' + (small ? ' btn--sm' : '')); t.href = 'tel:' + digits(l.phone); t.innerHTML = ICON.tel; t.appendChild(el('span', '', 'להתקשר'));
    var w = el('a', 'btn btn--wa' + (small ? ' btn--sm' : '')); w.href = 'https://wa.me/' + intl(l.phone) + '?text=' + encodeURIComponent('שלום ' + l.name + ', מדברים מכ.א פרי.'); w.target = '_blank'; w.rel = 'noopener'; w.innerHTML = ICON.wa; w.appendChild(el('span', '', 'וואטסאפ'));
    f.appendChild(t); f.appendChild(w); return f;
  }
  function leadCard(l) {
    var biz = l.kind === 'biz', c = el('article', 'lead' + (l.status === 'new' ? ' is-new' : ''));
    var head = el('div', 'lead__head'), left = el('div'); left.appendChild(el('h3', 'lead__name', title(l)));
    if (biz && l.biz) left.appendChild(el('p', 'lead__sub', 'איש קשר: ' + l.name));
    var right = el('div', 'tags'); right.style.justifyContent = 'flex-end';
    if (isDue(l)) right.appendChild(el('span', 'badge', l.follow_up === today() ? 'לחזור היום' : 'לחזור, באיחור'));
    else if (isStale(l)) right.appendChild(el('span', 'badge badge--warn', 'מחכה ' + Math.floor((Date.now() - new Date(l.created_at)) / 864e5) + ' ימים'));
    right.appendChild(el('span', 'lead__time', ago(l.created_at) + (l.source === 'manual' ? ' · ידני' : '')));
    head.appendChild(left); head.appendChild(right); c.appendChild(head);
    var tags = el('div', 'tags');
    (l.needs || []).forEach(function (n) { tags.appendChild(el('span', 'tag tag--need', n)); });
    [l.place_type, l.area].concat(l.availability || []).concat(biz ? [] : [l.experience]).filter(Boolean).forEach(function (t) { tags.appendChild(el('span', 'tag', t)); });
    if (biz && l.bill_rate != null) tags.appendChild(el('span', 'tag', money(+l.bill_rate) + ' לשעה'));
    if (!biz && l.wage_rate != null) tags.appendChild(el('span', 'tag', money(+l.wage_rate) + ' לשעה'));
    if (!biz && l.docs_ok) tags.appendChild(el('span', 'tag tag--ok', 'מסמכים נבדקו'));
    if (l.follow_up && !isDue(l)) tags.appendChild(el('span', 'tag', 'לחזור ב-' + l.follow_up.split('-').reverse().slice(0, 2).join('.')));
    if (tags.children.length) c.appendChild(tags);
    if (l.note) c.appendChild(el('p', 'lead__note', l.note));
    if (l.details) c.appendChild(el('p', 'lead__note', l.details));
    var row = el('div', 'lead__act'); row.appendChild(el('span', 'lead__phone', l.phone)); row.appendChild(contactBtns(l)); c.appendChild(row);
    var row2 = el('div', 'lead__act');
    row2.appendChild(btn('btn--line btn--sm', 'כרטיס מלא', function () { leadForm(l); }));
    if (biz) row2.appendChild(btn('btn--flame btn--sm', 'שיבוץ עובד', function () { openPlace(l); }));
    row2.appendChild(btn('btn--line btn--sm', 'משמרת', function () { openShift(biz ? l.id : null, biz ? null : l.id); }));
    row2.appendChild(btn('btn--line btn--sm', 'תזכורת למחר', function () { var d = new Date(); d.setDate(d.getDate() + 1); act('lead_patch', { id: l.id, follow_up: ymd(d) }, 'נקבעה תזכורת למחר'); }));
    c.appendChild(row2);
    var mine = D.placements.filter(function (p) { return (biz ? p.biz_id : p.worker_id) === l.id; });
    if (mine.length) {
      var box = el('div', 'placed');
      mine.forEach(function (p) { var o = lead(biz ? p.worker_id : p.biz_id); var r = el('div', 'placed__row'); r.appendChild(el('span', 'tag tag--ok', biz ? 'שובץ' : 'משובץ ב')); r.appendChild(el('b', '', title(o))); if (p.role) r.appendChild(el('span', '', p.role)); box.appendChild(r); });
      c.appendChild(box);
    }
    var foot = el('div', 'lead__foot'), sel = el('select'); sel.setAttribute('aria-label', 'סטטוס');
    Object.keys(STATUS).forEach(function (k) { var o = el('option', '', STATUS[k]); o.value = k; o.selected = k === l.status; sel.appendChild(o); });
    sel.addEventListener('change', function () { act('lead_patch', { id: l.id, status: sel.value }, 'הסטטוס עודכן'); });
    var ta = el('textarea'); ta.placeholder = 'הערה פנימית'; ta.value = l.admin_note || ''; ta.maxLength = 600; ta.setAttribute('aria-label', 'הערה פנימית');
    ta.addEventListener('change', function () { act('lead_patch', { id: l.id, admin_note: ta.value }, 'ההערה נשמרה'); });
    var del = el('button', 'del'); del.type = 'button'; del.innerHTML = ICON.bin; del.setAttribute('aria-label', 'מחיקת הליד');
    del.addEventListener('click', function () { ask('למחוק את הליד?', title(l) + ' יימחק יחד עם השיבוצים והמשמרות שלו. אי אפשר לשחזר.').then(function (ok) { if (ok) act('lead_delete', { id: l.id }, 'הליד נמחק'); }); });
    foot.appendChild(sel); foot.appendChild(ta); foot.appendChild(del); c.appendChild(foot);
    return c;
  }
  function matchCard(p) {
    var b = lead(p.biz_id), w = lead(p.worker_id); if (!b || !w) return null;
    var c = el('article', 'lead'), m = el('div', 'match');
    var s1 = el('div', 'match__side'); s1.appendChild(el('b', '', w.name)); s1.appendChild(el('span', 'lead__sub', p.role || (w.needs || []).join(', ')));
    var s2 = el('div', 'match__side'); s2.appendChild(el('b', '', title(b))); s2.appendChild(el('span', 'lead__sub', [b.place_type, b.area].filter(Boolean).join(', ')));
    m.appendChild(s1); m.appendChild(el('span', 'match__arrow', '←')); m.appendChild(s2); c.appendChild(m);
    var r1 = el('div', 'lead__act'); r1.appendChild(el('span', 'lead__phone', 'העובד: ' + w.phone)); r1.appendChild(contactBtns(w, true)); c.appendChild(r1);
    var r2 = el('div', 'lead__act'); r2.appendChild(el('span', 'lead__phone', 'העסק: ' + b.phone)); r2.appendChild(contactBtns(b, true)); c.appendChild(r2);
    var foot = el('div', 'lead__act'); foot.appendChild(el('span', 'lead__time', 'שובץ ' + ago(p.created_at)));
    var s = btn('btn--flame btn--sm', 'קביעת משמרת', function () { openShift(b.id, w.id); }); s.style.marginInlineStart = 'auto'; foot.appendChild(s);
    foot.appendChild(btn('btn--line btn--sm', 'ביטול השיבוץ', function () { act('unplace', { id: p.id }, 'השיבוץ בוטל'); }));
    c.appendChild(foot); return c;
  }

  /* ---------- views ---------- */
  function viewLeads(list) {
    var qq = q.trim().toLowerCase();
    var rows = D.leads.filter(function (l) {
      if (l.kind !== tab) return false;
      if (filt === 'due') { if (!isDue(l) && !isStale(l)) return false; } else if (filt !== 'all' && l.status !== filt) return false;
      if (!qq) return true;
      return [l.name, l.biz, l.phone, l.area, l.note, l.admin_note, l.details].filter(Boolean).join(' ').toLowerCase().indexOf(qq) > -1 || (digits(qq) && digits(l.phone).indexOf(digits(qq)) > -1);
    });
    rows.forEach(function (l, i) { var c = leadCard(l); c.style.animationDelay = Math.min(i, 8) * 40 + 'ms'; list.appendChild(c); });
    if (!rows.length) list.appendChild(el('p', 'empty', D.leads.some(function (l) { return l.kind === tab; }) ? 'אין לידים שמתאימים לסינון הזה.' : (tab === 'biz' ? 'עדיין לא הגיעו פניות מעסקים. הן יופיעו כאן ברגע שמישהו ימלא את הטופס באתר, ואפשר גם להוסיף ידנית בכפתור למעלה.' : 'עדיין לא הגיעו פניות ממחפשי עבודה. אפשר להוסיף עובד ידנית בכפתור למעלה.')));
  }
  function viewShifts(list) {
    var w0 = weekStart(weekOff), w1 = new Date(w0); w1.setDate(w0.getDate() + 6);
    var bar = el('div', 'bar');
    bar.appendChild(btn('btn--line btn--sm', '→ שבוע קודם', function () { weekOff--; render(); }));
    bar.appendChild(btn('btn--line btn--sm', 'השבוע', function () { weekOff = 0; render(); }));
    bar.appendChild(btn('btn--line btn--sm', 'שבוע הבא ←', function () { weekOff++; render(); }));
    var add = btn('btn--flame btn--sm sp', '+ משמרת', function () { openShift(); }); bar.appendChild(add); list.appendChild(bar);
    var total = 0, box = el('div', 'panel');
    box.appendChild(el('h3', '', w0.getDate() + '.' + (w0.getMonth() + 1) + ' עד ' + w1.getDate() + '.' + (w1.getMonth() + 1)));
    DAYS.forEach(function (name, i) {
      var d = new Date(w0); d.setDate(w0.getDate() + i); var key = ymd(d), items = D.shifts.filter(function (s) { return s.day === key; });
      var day = el('div', 'day' + (key === today() ? ' is-today' : '')), h = el('div', 'day__h', name); h.appendChild(el('small', '', d.getDate() + '.' + (d.getMonth() + 1) + (key === today() ? ' · היום' : ''))); day.appendChild(h);
      if (!items.length) day.appendChild(el('span', 'lead__time', 'אין משמרות'));
      items.forEach(function (s) {
        var r = el('div', 'shift' + (s.cancelled ? ' is-off' : '')); if (!s.cancelled) total += hours(s);
        r.appendChild(el('span', 'shift__t', s.t_start.slice(0, 5) + '–' + s.t_end.slice(0, 5)));
        var who = el('span', 'shift__who'); who.appendChild(el('b', '', title(lead(s.worker_id)))); who.appendChild(el('small', '', title(lead(s.biz_id)) + ' · ' + hours(s) + ' שעות' + (s.note ? ' · ' + s.note : ''))); r.appendChild(who);
        var a = el('span', 'bar');
        a.appendChild(btn('btn--line btn--sm', s.cancelled ? 'שחזור' : 'ביטול', function () { act('shift_toggle', { id: s.id }, s.cancelled ? 'המשמרת שוחזרה' : 'המשמרת בוטלה'); }));
        var x = el('button', 'del'); x.type = 'button'; x.innerHTML = ICON.bin; x.setAttribute('aria-label', 'מחיקת המשמרת'); x.addEventListener('click', function () { act('shift_delete', { id: s.id }, 'המשמרת נמחקה'); }); a.appendChild(x);
        r.appendChild(a); day.appendChild(r);
      });
      box.appendChild(day);
    });
    box.appendChild(el('p', '', 'סך הכול השבוע: ' + total + ' שעות.')); list.appendChild(box);
  }
  function reportRows() {
    var t = today(), per = { w: {}, b: {} };
    D.shifts.forEach(function (s) {
      if (s.cancelled || s.day.slice(0, 7) !== month || s.day > t) return;
      var h = hours(s);
      [['w', s.worker_id], ['b', s.biz_id]].forEach(function (x) { var o = per[x[0]][x[1]] = per[x[0]][x[1]] || { n: 0, h: 0 }; o.n++; o.h += h; });
    });
    var mk = function (map, rateKey) { return Object.keys(map).map(function (id) { var l = lead(id), rate = l && l[rateKey] != null ? +l[rateKey] : null; return { name: title(l), n: map[id].n, h: Math.round(map[id].h * 100) / 100, rate: rate, sum: rate == null ? null : map[id].h * rate }; }).sort(function (a, b) { return b.h - a.h; }); };
    return { workers: mk(per.w, 'wage_rate'), biz: mk(per.b, 'bill_rate') };
  }
  function table(head, rows, sumLabel) {
    var wrap = el('div', 'scroll'), t = el('table', 'tbl'), tr = el('tr'); head.forEach(function (h) { tr.appendChild(el('th', '', h)); }); var th = el('thead'); th.appendChild(tr); t.appendChild(th);
    var tb = el('tbody'), tot = 0, hh = 0, missing = false;
    rows.forEach(function (r) { var x = el('tr'); x.appendChild(el('td', '', r.name)); x.appendChild(el('td', 'n', r.n)); x.appendChild(el('td', 'n', r.h)); x.appendChild(el('td', 'n', r.rate == null ? 'חסר תעריף' : money(r.rate))); x.appendChild(el('td', 'n', r.sum == null ? '—' : money(r.sum))); tb.appendChild(x); hh += r.h; if (r.sum == null) missing = true; else tot += r.sum; });
    t.appendChild(tb); var tf = el('tfoot'), f = el('tr'); f.appendChild(el('td', '', sumLabel)); f.appendChild(el('td', 'n', '')); f.appendChild(el('td', 'n', Math.round(hh * 100) / 100)); f.appendChild(el('td', 'n', '')); f.appendChild(el('td', 'n', money(tot) + (missing ? ' *' : ''))); tf.appendChild(f); t.appendChild(tf);
    wrap.appendChild(t); return { node: wrap, total: tot, missing: missing };
  }
  function viewReport(list) {
    var bar = el('div', 'bar'), mi = el('input'); mi.type = 'month'; mi.value = month; mi.setAttribute('aria-label', 'חודש'); mi.className = 'btn btn--line btn--sm'; mi.style.minHeight = '42px';
    mi.addEventListener('change', function () { if (mi.value) { month = mi.value; render(); } }); bar.appendChild(mi);
    var R = reportRows();
    bar.appendChild(btn('btn--line btn--sm sp', 'ייצוא לאקסל', function () {
      csv('כא-פרי-דוח-' + month, [['סוג', 'שם', 'משמרות', 'שעות', 'תעריף לשעה', 'סכום']].concat(R.workers.map(function (r) { return ['עובד', r.name, r.n, r.h, r.rate, r.sum]; })).concat(R.biz.map(function (r) { return ['עסק', r.name, r.n, r.h, r.rate, r.sum]; })));
    }));
    list.appendChild(bar);
    if (!R.workers.length) { list.appendChild(el('p', 'empty', 'אין משמרות שבוצעו בחודש הזה. הדוח נבנה מהמשמרות בלשונית "משמרות", עד היום, בלי משמרות שבוטלו.')); return; }
    var tb = table(['עסק', 'משמרות', 'שעות', 'מחיר לשעה', 'לחיוב'], R.biz, 'סך הכול לחיוב'), tw = table(['עובד', 'משמרות', 'שעות', 'שכר לשעה', 'לתשלום'], R.workers, 'סך הכול לתשלום');
    var sum = el('div', 'sum');
    [['לחיוב מעסקים', tb.total], ['לתשלום לעובדים', tw.total], ['נשאר', tb.total - tw.total]].forEach(function (x, i) { var s = el('div', 'stat' + (i === 2 ? ' stat--hot' : '')); s.appendChild(el('b', '', money(x[1]))); s.appendChild(el('span', '', x[0])); sum.appendChild(s); });
    list.appendChild(sum);
    var p1 = el('div', 'panel'); p1.appendChild(el('h3', '', 'עסקים')); p1.appendChild(tb.node); list.appendChild(p1);
    var p2 = el('div', 'panel'); p2.appendChild(el('h3', '', 'עובדים')); p2.appendChild(tw.node); list.appendChild(p2);
    list.appendChild(el('p', 'lead__time', (tb.missing || tw.missing ? '* יש שורות בלי תעריף, והן לא נכנסו לסכום. מוסיפים תעריף ב"כרטיס מלא" של העסק או העובד. ' : '') + 'הסכומים הם שעות כפול תעריף, לפני מע״מ, מיסים ותוספות. זה לא תלוש שכר ולא חשבונית.'));
  }
  function itemRow(main, sub, off, onEdit, onDel) {
    var r = el('div', 'item' + (off ? ' is-off' : '')), a = el('div'); a.appendChild(el('b', '', main)); a.appendChild(el('small', '', sub)); r.appendChild(a);
    var b = el('span', 'bar'); b.appendChild(btn('btn--line btn--sm', 'עריכה', onEdit)); var x = el('button', 'del'); x.type = 'button'; x.innerHTML = ICON.bin; x.setAttribute('aria-label', 'מחיקה'); x.addEventListener('click', onDel); b.appendChild(x); r.appendChild(b); return r;
  }
  function jobForm(j) {
    j = j || { is_open: true };
    openForm({ title: j.id ? 'עריכת משרה' : 'משרה חדשה', text: 'המשרה מופיעה באתר, באזור של מחפשי העבודה.', fields: [
      { k: 'title', label: 'כותרת', value: j.title, required: true, max: 80, placeholder: 'דרוש/ה שוטף/ת כלים' }, { k: 'city', label: 'עיר', value: j.city, max: 60, half: true }, { k: 'hours', label: 'ימים ושעות', value: j.hours, max: 80, half: true, placeholder: 'ערבים, א׳ עד ה׳' },
      { k: 'body', label: 'פירוט קצר', type: 'textarea', value: j.body, max: 400 }, { k: 'is_open', label: 'מוצגת באתר', type: 'bool', value: j.is_open }],
      save: function (v) { v.id = j.id || null; return api('job_save', v).then(function () { return 'המשרה נשמרה'; }); } });
  }
  function testiForm(t) {
    t = t || { published: true };
    openForm({ title: t.id ? 'עריכת המלצה' : 'המלצה חדשה', text: 'רק המלצות אמיתיות, של לקוח שאישר לפרסם את השם שלו.', fields: [
      { k: 'person', label: 'שם הממליץ', value: t.person, required: true, max: 60, half: true }, { k: 'business', label: 'עסק / תפקיד', value: t.business, max: 80, half: true },
      { k: 'body', label: 'מה הוא אמר', type: 'textarea', value: t.body, required: true, max: 400 }, { k: 'published', label: 'מוצגת באתר', type: 'bool', value: t.published }],
      save: function (v) { v.id = t.id || null; return api('testi_save', v).then(function () { return 'ההמלצה נשמרה'; }); } });
  }
  function viewSite(list) {
    var p1 = el('div', 'panel'), b1 = el('div', 'bar'); b1.appendChild(el('h3', '', 'משרות פתוחות')); b1.appendChild(btn('btn--flame btn--sm sp', '+ משרה', function () { jobForm(); })); p1.appendChild(b1);
    p1.appendChild(el('p', '', 'משרות שמסומנות "מוצגת באתר" מופיעות באזור של מחפשי העבודה. כשאין אף משרה, האזור הזה לא מוצג.'));
    D.jobs.forEach(function (j) { p1.appendChild(itemRow(j.title + (j.is_open ? '' : ' (מוסתרת)'), [j.city, j.hours, j.body].filter(Boolean).join(' · '), !j.is_open, function () { jobForm(j); }, function () { act('job_delete', { id: j.id }, 'המשרה נמחקה'); })); });
    list.appendChild(p1);
    var p2 = el('div', 'panel'), b2 = el('div', 'bar'); b2.appendChild(el('h3', '', 'המלצות')); b2.appendChild(btn('btn--flame btn--sm sp', '+ המלצה', function () { testiForm(); })); p2.appendChild(b2);
    p2.appendChild(el('p', '', 'המלצות של לקוחות מופיעות באתר מתחת ל"עם מי אנחנו עובדים". כשאין המלצות ואין מספרים, החלק הזה לא מוצג.'));
    D.testimonials.forEach(function (t) { p2.appendChild(itemRow(t.person + (t.business ? ', ' + t.business : '') + (t.published ? '' : ' (מוסתרת)'), t.body, !t.published, function () { testiForm(t); }, function () { act('testi_delete', { id: t.id }, 'ההמלצה נמחקה'); })); });
    list.appendChild(p2);
    var stats = []; try { stats = JSON.parse(D.settings.stats || '[]'); } catch (e) { /* */ }
    var p3 = el('div', 'panel'), b3 = el('div', 'bar'); b3.appendChild(el('h3', '', 'מספרים')); b3.appendChild(btn('btn--line btn--sm sp', 'עריכה', function () {
      var f = [{ type: 'hint', label: 'עד שלושה מספרים אמיתיים, למשל "12" ו"שנים בתחום". שורה ריקה לא תוצג.' }];
      [0, 1, 2].forEach(function (i) { f.push({ k: 'v' + i, label: 'מספר ' + (i + 1), value: stats[i] && stats[i].value, max: 12, half: true }); f.push({ k: 'l' + i, label: 'מה הוא אומר', value: stats[i] && stats[i].label, max: 40, half: true }); });
      openForm({ title: 'מספרים באתר', fields: f, save: function (v) { var out = []; [0, 1, 2].forEach(function (i) { if (v['v' + i] && v['l' + i]) out.push({ value: v['v' + i], label: v['l' + i] }); }); return api('settings_save', { stats: out }).then(function () { return 'המספרים נשמרו'; }); } });
    })); p3.appendChild(b3);
    p3.appendChild(el('p', '', stats.length ? stats.map(function (s) { return s.value + ' ' + s.label; }).join(' · ') : 'עדיין לא הוגדרו מספרים.'));
    list.appendChild(p3);
  }
  function viewSettings(list) {
    var S = D.settings;
    var p1 = el('div', 'panel'), b1 = el('div', 'bar'); b1.appendChild(el('h3', '', 'פיקסל ואנליטיקס')); b1.appendChild(btn('btn--line btn--sm sp', 'עריכה', function () {
      openForm({ title: 'פיקסל ואנליטיקס', text: 'מדביקים רק את המזהה. האתר טוען את הקוד לבד, ומדווח "ליד" בכל שליחת טופס.', fields: [
        { k: 'pixel_id', label: 'Meta Pixel ID', value: S.pixel_id, max: 20, placeholder: '123456789012345', hint: 'מספר בלבד. מוצאים אותו ב-Events Manager של מטא.' },
        { k: 'ga_id', label: 'Google Analytics (GA4)', value: S.ga_id, max: 20, placeholder: 'G-XXXXXXXXXX', hint: 'מתחיל ב-G-. מוצאים אותו ב-Admin, Data streams.' }],
        save: function (v) { v.ga_id = v.ga_id.toUpperCase(); if (v.pixel_id && !/^\d{5,20}$/.test(v.pixel_id)) throw userErr('מזהה הפיקסל הוא מספר בלבד.'); if (v.ga_id && !/^G-[A-Z0-9]{4,16}$/.test(v.ga_id)) throw userErr('מזהה אנליטיקס נראה כך: G-XXXXXXXXXX.'); return api('settings_save', v).then(function () { return 'נשמר. האתר יתעדכן בטעינה הבאה.'; }); } });
    })); p1.appendChild(b1);
    p1.appendChild(el('p', '', 'פיקסל של מטא: ' + (S.pixel_id || 'לא מחובר') + ' · גוגל אנליטיקס: ' + (S.ga_id || 'לא מחובר')));
    list.appendChild(p1);

    var p2 = el('div', 'panel'), b2 = el('div', 'bar'); b2.appendChild(el('h3', '', 'התראה על ליד חדש')); b2.appendChild(btn('btn--line btn--sm sp', 'עריכה', function () {
      openForm({ title: 'התראה בוואטסאפ', text: 'ההתראה נשלחת דרך שירות חיצוני בשם CallMeBot. ממלאים אחרי שמבצעים את שלבי ההפעלה שמופיעים בהגדרות.', fields: [
        { k: 'notify_phone', label: 'הטלפון שיקבל את ההתראה', type: 'tel', value: S.notify_phone, max: 20, placeholder: '+972501234567', hint: 'בפורמט בינלאומי, עם +972.' },
        { k: 'notify_apikey', label: 'מפתח (apikey) שהתקבל מהבוט', value: S.notify_apikey, max: 40 }],
        save: function (v) { if (v.notify_phone && !/^\+\d{9,15}$/.test(v.notify_phone)) throw userErr('הטלפון צריך להיות בפורמט +972501234567.'); return api('settings_save', v).then(function () { return 'ההתראות נשמרו'; }); } });
    })); p2.appendChild(b2);
    p2.appendChild(el('p', '', S.notify_phone && S.notify_apikey ? 'מופעל. הודעת וואטסאפ נשלחת ל-' + S.notify_phone + ' על כל ליד מהאתר.' : 'לא מופעל. כדי לקבל וואטסאפ על כל ליד חדש:'));
    var ol = el('ol', 'steps');
    ['נכנסים ל-callmebot.com, לעמוד של WhatsApp, ושומרים באנשי הקשר את מספר הבוט שמופיע שם.', 'שולחים לו בוואטסאפ את ההודעה: I allow callmebot to send me messages', 'מקבלים חזרה הודעה עם apikey, ומדביקים אותו כאן יחד עם מספר הטלפון.'].forEach(function (t) { ol.appendChild(el('li', '', t)); });
    p2.appendChild(ol);
    p2.appendChild(el('p', '', 'השירות החינמי של CallMeBot מוגדר אצלם לשימוש אישי. בנוסף, כשהפאנל פתוח הוא מתרענן כל דקה ומקפיץ הודעה על ליד חדש.'));
    if (window.Notification && Notification.permission !== 'granted') p2.appendChild(btn('btn--line btn--sm', 'הפעלת התראות בדפדפן הזה', function () { Notification.requestPermission().then(function (r) { toast(r === 'granted' ? 'התראות הדפדפן הופעלו' : 'ההתראות לא אושרו'); render(); }); }));
    list.appendChild(p2);

    var p3 = el('div', 'panel'); p3.appendChild(el('h3', '', 'ייצוא לאקסל'));
    var b3 = el('div', 'bar');
    b3.appendChild(btn('btn--line btn--sm', 'לידים', function () { csv('כא-פרי-לידים', [['סוג', 'שם', 'עסק', 'טלפון', 'אזור', 'תחומים', 'זמינות', 'ניסיון', 'סוג המקום', 'סטטוס', 'תעריף עובד', 'מחיר לעסק', 'מסמכים נבדקו', 'לחזור ב', 'הערה מהטופס', 'פרטים', 'הערה פנימית', 'מקור', 'נוצר']].concat(D.leads.map(function (l) { return [l.kind === 'biz' ? 'עסק' : 'עובד', l.name, l.biz, l.phone, l.area, (l.needs || []).join(' / '), (l.availability || []).join(' / '), l.experience, l.place_type, STATUS[l.status], l.wage_rate, l.bill_rate, l.docs_ok ? 'כן' : '', l.follow_up, l.note, l.details, l.admin_note, l.source === 'manual' ? 'ידני' : 'אתר', l.created_at.slice(0, 16).replace('T', ' ')]; }))); }));
    b3.appendChild(btn('btn--line btn--sm', 'שיבוצים', function () { csv('כא-פרי-שיבוצים', [['עובד', 'טלפון עובד', 'עסק', 'טלפון עסק', 'תפקיד', 'נוצר']].concat(D.placements.map(function (p) { var w = lead(p.worker_id) || {}, b = lead(p.biz_id) || {}; return [w.name, w.phone, title(b), b.phone, p.role, p.created_at.slice(0, 10)]; }))); }));
    b3.appendChild(btn('btn--line btn--sm', 'משמרות', function () { csv('כא-פרי-משמרות', [['תאריך', 'התחלה', 'סיום', 'שעות', 'עובד', 'עסק', 'הערה', 'בוטלה']].concat(D.shifts.map(function (s) { return [s.day, s.t_start.slice(0, 5), s.t_end.slice(0, 5), hours(s), title(lead(s.worker_id)), title(lead(s.biz_id)), s.note, s.cancelled ? 'כן' : '']; }))); }));
    p3.appendChild(b3); p3.appendChild(el('p', '', 'הקבצים נפתחים באקסל ובגוגל שיטס. הדוח החודשי מיוצא מהלשונית שלו.')); list.appendChild(p3);

    var p4 = el('div', 'panel'), b4 = el('div', 'bar'); b4.appendChild(el('h3', '', 'סיסמה')); b4.appendChild(btn('btn--line btn--sm sp', 'החלפת סיסמה', function () {
      openForm({ title: 'החלפת סיסמה', fields: [{ k: 'a', label: 'סיסמה חדשה', type: 'password', required: true, max: 100, hint: 'לפחות 8 תווים.' }, { k: 'b', label: 'שוב, לאימות', type: 'password', required: true, max: 100 }],
        save: function (v) { if (v.a.length < 8) throw userErr('הסיסמה צריכה לפחות 8 תווים.'); if (v.a !== v.b) throw userErr('שתי הסיסמאות לא זהות.'); return api('pw_change', { 'new': v.a }).then(function () { pw = v.a; return 'הסיסמה הוחלפה'; }); } });
    })); p4.appendChild(b4); p4.appendChild(el('p', '', 'כל מי שיש לו את הסיסמה רואה את כל הלידים. מומלץ להחליף את הסיסמה הראשונית.')); list.appendChild(p4);
  }

  function render() {
    var now = new Date(), day0 = new Date(now.getFullYear(), now.getMonth(), now.getDate()), wk = new Date(day0); wk.setDate(day0.getDate() - day0.getDay());
    var L = D.leads, cnt = function (f) { return L.filter(f).length; };
    $('#sToday').textContent = cnt(function (l) { return new Date(l.created_at) >= day0; });
    $('#sWeek').textContent = cnt(function (l) { return new Date(l.created_at) >= wk; });
    $('#sNew').textContent = cnt(function (l) { return l.status === 'new'; });
    $('#sDue').textContent = cnt(isDue);
    $('#nBiz').textContent = cnt(function (l) { return l.kind === 'biz'; }); $('#nJob').textContent = cnt(function (l) { return l.kind === 'job'; }); $('#nMatch').textContent = D.placements.length;
    var n = cnt(function (l) { return l.status === 'new'; }); document.title = (n ? '(' + n + ') ' : '') + 'כ.א פרי | ניהול';
    var list = $('#list'); list.innerHTML = ''; $('#tools').hidden = tab !== 'biz' && tab !== 'job';
    $('#addLead').textContent = tab === 'job' ? '+ עובד' : '+ עסק';
    if (tab === 'biz' || tab === 'job') viewLeads(list);
    else if (tab === 'match') { D.placements.forEach(function (p) { var c = matchCard(p); if (c) list.appendChild(c); }); if (!list.children.length) list.appendChild(el('p', 'empty', 'עדיין אין שיבוצים. בלשונית עסקים לוחצים על "שיבוץ עובד" ובוחרים עובד.')); }
    else if (tab === 'shifts') viewShifts(list);
    else if (tab === 'report') viewReport(list);
    else if (tab === 'site') viewSite(list);
    else viewSettings(list);
  }
  $$('.tabs button').forEach(function (b) { b.addEventListener('click', function () { tab = b.dataset.tab; $$('.tabs button').forEach(function (x) { x.setAttribute('aria-selected', String(x === b)); }); render(); }); });
  $$('#filt button').forEach(function (b) { b.addEventListener('click', function () { filt = b.dataset.f; $$('#filt button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); render(); }); });
  $('#q').addEventListener('input', function (e) { q = e.target.value; render(); });
  $('#sDue').parentNode.style.cursor = 'pointer';
  $('#sDue').parentNode.addEventListener('click', function () { filt = 'due'; $$('#filt button').forEach(function (x) { x.setAttribute('aria-pressed', String(x.dataset.f === 'due')); }); if (tab !== 'biz' && tab !== 'job') $('.tabs [data-tab=biz]').click(); else render(); });
})();
