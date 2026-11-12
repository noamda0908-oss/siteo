/* HADOD admin panel. Saves by committing data.json and images to the site's GitHub repo.
   The GitHub token is stored encrypted with the admin code (admin.json); nothing secret sits in the page. */
const CFG = { owner: 'noamda0908-oss', repo: 'siteo', branch: 'main', base: 'work/hadod/' };
const API = `https://api.github.com/repos/${CFG.owner}/${CFG.repo}/contents/${CFG.base}`;
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const b64 = buf => { let s = ''; new Uint8Array(buf).forEach(b => s += String.fromCharCode(b)); return btoa(s); };
const unb64 = s => Uint8Array.from(atob(s.replace(/\s/g, '')), c => c.charCodeAt(0));
const utf8 = s => new TextEncoder().encode(s), text = b => new TextDecoder().decode(b);
let token = '', data = null, dataSha = '';

const msg = (t, bad) => { const m = $('#msg'); m.textContent = t; m.className = 'a-msg' + (bad ? ' bad' : ''); m.hidden = !t; };
const view = id => $$('.a-view').forEach(v => v.hidden = v.id !== id);

async function key(code, salt) {
  const base = await crypto.subtle.importKey('raw', utf8(code), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: 310000, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}
async function gh(path, opt = {}) {
  const r = await fetch(API + path + (opt.method ? '' : `?ref=${CFG.branch}&t=${Date.now()}`), { ...opt, headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', ...(opt.body ? { 'Content-Type': 'application/json' } : {}) } });
  if (!r.ok) throw new Error(r.status === 401 ? 'הטוקן לא תקף' : r.status === 404 ? 'not-found' : r.status === 409 || r.status === 422 ? 'מישהו שמר במקביל. רעננו ונסו שוב' : 'שגיאת שמירה (' + r.status + ')');
  return r.json();
}
async function put(path, bytes, message, sha) {
  const j = await gh(path, { method: 'PUT', body: JSON.stringify({ message, content: b64(bytes), branch: CFG.branch, ...(sha ? { sha } : {}) }) });
  return j.content.sha;
}
async function loadData() { const j = await gh('data.json'); dataSha = j.sha; data = JSON.parse(text(unb64(j.content))); data.products = data.products || []; data.settings = data.settings || {}; }
async function saveData(what) {
  msg('שומר...');
  dataSha = await put('data.json', utf8(JSON.stringify(data, null, 1)), 'HADOD admin: ' + what, dataSha);
  msg('נשמר. השינוי יופיע באתר תוך דקה או שתיים.'); draw();
}

/* ----- first-time setup / login ----- */
async function boot() {
  let conf = null;
  try { const r = await fetch('admin.json?t=' + Date.now()); if (r.ok) conf = await r.json(); } catch (_) {}
  if (!conf) return view('vSetup');
  view('vLogin');
  $('#fLogin').onsubmit = async e => {
    e.preventDefault(); msg('בודק...');
    try {
      const k = await key($('#code').value.trim(), unb64(conf.salt));
      token = text(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(conf.iv) }, k, unb64(conf.ct)));
    } catch (_) { return msg('קוד שגוי', true); }
    try { await loadData(); msg(''); view('vPanel'); draw(); } catch (err) { msg(err.message, true); }
  };
}
$('#fSetup').onsubmit = async e => {
  e.preventDefault(); const code = $('#newCode').value.trim(); token = $('#tok').value.trim();
  if (code.length < 8) return msg('הקוד צריך להיות באורך 8 תווים לפחות', true);
  msg('בודק את הטוקן...');
  try {
    await loadData();
    const salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
    const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, await key(code, salt), utf8(token));
    await put('admin.json', utf8(JSON.stringify({ salt: b64(salt), iv: b64(iv), ct: b64(ct) })), 'HADOD admin: setup');
    msg('ההגדרה נשמרה. מעכשיו נכנסים עם הקוד.'); view('vPanel'); draw();
  } catch (err) { msg(err.message === 'not-found' ? 'הטוקן לא מגיע לריפו. בדקו שיש לו הרשאת Contents: Read and write' : err.message, true); }
};

/* ----- panel ----- */
const CATS = { vape: 'וייפים', pack: 'חבילות וודקה' };
function draw() {
  $('#count').textContent = data.products.length;
  $('#list').innerHTML = data.products.map((p, i) => `<li class="${p.hidden ? 'off' : ''}">
    <img src="${esc(p.img)}" alt=""><div><b>${esc(p.name)}</b><span>${CATS[p.cat] || p.cat}${p.hidden ? ' · מוסתר' : ''}${p.promo ? ` · <em>${esc(p.promo)}</em>` : ''}</span></div>
    <button data-edit="${i}">עריכה</button><button data-del="${i}" class="danger">מחיקה</button></li>`).join('') || '<li>אין מוצרים עדיין.</li>';
  $('#pixel').value = data.settings.pixel || '';
}
const F = $('#fProd'); let editing = -1, newImg = null;
function openForm(i) {
  editing = i; newImg = null; const p = i >= 0 ? data.products[i] : { cat: 'vape' };
  F.name.value = p.name || ''; F.en.value = p.en || ''; F.cat.value = p.cat || 'vape'; F.short.value = p.short || ''; F.intro.value = p.intro || '';
  F.specs.value = (p.specs || []).map(s => s.join(': ')).join('\n'); F.flavors.value = (p.flavors || []).join(', ');
  F.incl.value = (p.incl || []).join('\n'); F.note.value = p.note || ''; F.promo.value = p.promo || ''; F.hidden.checked = !!p.hidden; F.img.value = '';
  $('#prev').src = p.img || ''; $('#prev').hidden = !p.img; $('#formT').textContent = i >= 0 ? 'עריכת מוצר' : 'מוצר חדש';
  $('#dlg').hidden = false; F.name.focus();
}
document.addEventListener('click', async e => {
  const t = e.target;
  if (t.dataset.edit) return openForm(+t.dataset.edit);
  if (t.id === 'add') return openForm(-1);
  if (t.dataset.close !== undefined || t.id === 'dlg') return $('#dlg').hidden = true;
  if (t.dataset.del) { const p = data.products[+t.dataset.del]; if (!confirm(`למחוק את "${p.name}"?`)) return; data.products.splice(+t.dataset.del, 1); try { await saveData('delete ' + p.id); } catch (err) { msg(err.message, true); } }
});
F.img.onchange = () => {
  const f = F.img.files[0]; if (!f) return; const im = new Image();
  im.onload = () => { const s = Math.min(1, 1200 / Math.max(im.width, im.height)), c = document.createElement('canvas'); c.width = Math.round(im.width * s); c.height = Math.round(im.height * s);
    c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
    c.toBlob(async b => { newImg = new Uint8Array(await b.arrayBuffer()); $('#prev').src = URL.createObjectURL(b); $('#prev').hidden = false; }, 'image/webp', .85); };
  im.src = URL.createObjectURL(f);
};
F.onsubmit = async e => {
  e.preventDefault(); const old = editing >= 0 ? data.products[editing] : {};
  const name = F.name.value.trim(); if (!name) return;
  const lines = v => v.split('\n').map(x => x.trim()).filter(Boolean);
  const p = { id: old.id || 'p' + Date.now().toString(36), cat: F.cat.value, name, en: F.en.value.trim(), short: F.short.value.trim(), intro: F.intro.value.trim(),
    specs: lines(F.specs.value).map(l => { const i = l.indexOf(':'); return i < 0 ? [l, ''] : [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }),
    flavors: F.flavors.value.split(',').map(x => x.trim()).filter(Boolean), incl: lines(F.incl.value), note: F.note.value.trim(), promo: F.promo.value.trim(), hidden: F.hidden.checked, img: old.img || '' };
  try {
    if (newImg) { msg('מעלה תמונה...'); const path = `img/u-${p.id}-${Date.now().toString(36)}.webp`; await put(path, newImg, 'HADOD admin: image for ' + p.id); p.img = path; }
    if (!p.img) return msg('צריך לבחור תמונה', true);
    if (editing >= 0) data.products[editing] = p; else data.products.push(p);
    $('#dlg').hidden = true; await saveData((editing >= 0 ? 'edit ' : 'add ') + p.id);
  } catch (err) { msg(err.message, true); }
};
$('#fPixel').onsubmit = async e => { e.preventDefault(); data.settings.pixel = $('#pixel').value.replace(/\D/g, ''); try { await saveData('pixel'); } catch (err) { msg(err.message, true); } };
boot();
