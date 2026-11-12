/* ================= הגדרות ================= */
const WA_NUMBER = '972559277843';   // מספר וואטסאפ להזמנות: 9725XXXXXXXX – ריק = עדיין לא מחובר
const GROUPS = {"אשקלון": "https://chat.whatsapp.com/Imh2ZDRe7W62kp15ZZScmi", "ראשון לציון": "https://chat.whatsapp.com/Cj6EUaNfvrMJV39FDsxvnP", "פרדס חנה": "https://chat.whatsapp.com/J1wP1OqBdlvLcwPg7Rk8YW", "עכו": "https://chat.whatsapp.com/Lg6ATxYxOeH2Zuyh4pNlcf", "שלומי": "https://chat.whatsapp.com/LmqPUMiXWHVHEY7aMUnWy9", "קריות": "https://chat.whatsapp.com/E9wtf3yIp5pKaKHJBiUeNp"};
const PACK_NUMBER = '972559277843';   // הזמנות חבילות וודקה (055-927-7843)
const MAIN_GROUP = "https://chat.whatsapp.com/E9wtf3yIp5pKaKHJBiUeNp";
/* ========================================== */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const SB = 'https://mdtrmfpgxavogcsjqkyf.supabase.co', SB_KEY = 'sb_publishable_-NPTAZma3xTId6h7llckMA_Ww3-SWVz';
async function rpc(fn, args) {
  const r = await fetch(`${SB}/rest/v1/rpc/${fn}`, { method: 'POST', headers: { apikey: SB_KEY, 'Content-Type': 'application/json' }, body: JSON.stringify(args), keepalive: true });
  if (!r.ok) throw new Error(r.status); const t = await r.text(); return t ? JSON.parse(t) : null;
}
/* where the visitor came from, kept for the visit */
const SRC = (() => { let s = null; try { s = sessionStorage.getItem('hadodSrc'); } catch (_) {}
  if (!s) { const u = (new URLSearchParams(location.search).get('utm_source') || '').toLowerCase(), r = document.referrer.toLowerCase();
    s = u || (/instagram/.test(r) ? 'instagram' : /facebook|fb\./.test(r) ? 'facebook' : /whatsapp|wa\.me/.test(r) ? 'whatsapp' : /google/.test(r) ? 'google' : /tiktok/.test(r) ? 'tiktok' : r && !r.includes(location.host) ? 'other' : 'direct');
    try { sessionStorage.setItem('hadodSrc', s); } catch (_) {} }
  return s; })();
const lead = product => rpc('log_lead', { p_product: product, p_source: SRC }).catch(() => {});
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
  const city = store.get('hadodCity') || (member && member.city); if (city) msg += `\nאני מ${city}.`;
  if (member) msg += `\nאני רשום באתר (${member.name}, ${member.phone}) ומגיעה לי 10% הנחה.`;
  lead(p || 'הזמנה כללית');
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}
document.addEventListener('click', e => {
  if (e.target.closest('[data-close]') || e.target === modal) return hide();
  if (e.target.closest('[data-join]')) return member ? order('') : show(mForm);
  const b = e.target.closest('[data-wa]'); if (b) order(b.dataset.wa);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) hide(); });
$('#mGo').onclick = () => show(mForm);
mForm.addEventListener('submit', async e => {
  e.preventDefault();
  const f = new FormData(mForm), name = (f.get('name') || '').trim(), phone = (f.get('phone') || '').replace(/[^0-9]/g, ''), city = f.get('city') || '';
  const err = name.length < 2 ? 'צריך שם' : !/^05\d{8}$/.test(phone) ? 'מספר טלפון לא תקין (05X ועוד 7 ספרות)' : !city ? 'צריך לבחור עיר' : '';
  const mErr = $('#mErr'), btn = mForm.querySelector('button'); mErr.textContent = err; if (err) return;
  btn.disabled = true; let res;
  try { res = await rpc('register_member', { p_name: name, p_phone: phone, p_city: city }); } catch (_) { res = 'fail'; }
  btn.disabled = false;
  if (res === 'fail' || res === 'invalid') { mErr.textContent = 'ההרשמה לא נשמרה. בדקו את החיבור ונסו שוב.'; return; }
  member = { name, phone, city, at: Date.now() }; store.set('hadodMember', member); if (city !== 'עיר אחרת') store.set('hadodCity', city); paint();
  $('#mDoneT').textContent = res === 'exists' ? 'המספר הזה כבר רשום' : `${name.split(' ')[0]}, נרשמת!`;
  const g = $('#mGroup'); if (GROUPS[city]) { g.href = GROUPS[city]; g.lastElementChild.textContent = `להצטרף לקבוצה של ${city}`; g.hidden = false; } else g.hidden = true;
  show(mDone);
});

/* search: filter the product cards as you type */
const find = $('#find');
if (find) find.addEventListener('input', () => {
  const q = find.value.trim().toLowerCase().replace(/['׳’]/g, ''); let any = false;
  $$('[data-find]').forEach(sec => { let n = 0;
    sec.querySelectorAll('.card').forEach(c => { const hit = !q || c.dataset.k.toLowerCase().replace(/['׳’]/g, '').includes(q); c.hidden = !hit; if (hit) n++; });
    sec.hidden = !n; any = any || n > 0; });
  $$('.member').forEach(m => m.hidden = !!q);
  $('#findNone').hidden = any;
});

/* vodka packages */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-pack]'); if (!b) return;
  let msg = `היי, הגעתי מהאתר של הדוד. אשמח להזמין חבילת וודקה ${b.dataset.pack} (1 ליטר)`;
  if (member) msg += `\nאני רשום באתר (${member.name}, ${member.phone}) ומגיעה לי 10% הנחה.`;
  window.open(`https://wa.me/${PACK_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
});

/* product page: pick a city, get that city's group */
function pick(city, save) {
  const pickGo = $('#pickGo'); if (!pickGo) return;
  $$('[data-city]').forEach(b => b.classList.toggle('on', b.dataset.city === city));
  const has = GROUPS[city];
  pickGo.href = has || MAIN_GROUP; pickGo.hidden = false;
  pickGo.lastElementChild.textContent = has ? `להצטרף לקבוצת הדוד ${city}` : 'להצטרף לקבוצה הראשית של הדוד';
  $('#pickNote').textContent = has ? 'בקבוצה רואים מבצעים, מוצרים חדשים ועדכוני מלאי.' : (city === 'עיר אחרת' ? 'עוד אין קבוצה לעיר שלך. בקבוצה הראשית מתעדכנים כשנפתחת אחת.' : `הקבוצה של ${city} נפתחת בקרוב. בינתיים מתעדכנים בקבוצה הראשית.`);
  if (save) store.set('hadodCity', city);
}
document.addEventListener('click', e => { const c = e.target.closest('[data-city]'); if (c) pick(c.dataset.city, true); });
{ const c = store.get('hadodCity') || (member && member.city); if (c) pick(c); }

/* faint smoke over the black page; it drifts down as you scroll (opaque canvas, no alpha blending) */
(function () {
  const cv = $('#smoke'); if (!cv || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const gl = cv.getContext('webgl', { alpha: false, antialias: false }); if (!gl) return;
  const sh = (t, src) => { const o = gl.createShader(t); gl.shaderSource(o, src); gl.compileShader(o); return o; };
  const hp = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision > 0 ? 'highp' : 'mediump';
  const pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, 'attribute vec2 p;varying vec2 v;void main(){v=p*.5+.5;gl_Position=vec4(p,0.,1.);}'));
  gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, `precision ${hp} float;varying vec2 v;uniform float t,a,k,s;
    float h(vec2 p){p=fract(p*vec2(.1031,.1030));p+=dot(p,p.yx+33.33);return fract((p.x+p.y)*p.x);}
    float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
    float fbm(vec2 p){float r=0.,w=.5;for(int i=0;i<4;i++){r+=w*n(p);p=p*2.03+vec2(11.3,7.1);w*=.5;}return r;}
    void main(){vec2 p=vec2(v.x*a,v.y+s)*2.2;float q=t*.05;
      vec2 w=vec2(fbm(p+vec2(0.,q)),fbm(p+vec2(5.2,1.3)+q*.7));
      float f=smoothstep(.42,.98,fbm(p+2.6*w+vec2(0.,q*2.)));
      gl_FragColor=vec4(vec3(f*k*.4),1.);}`));
  gl.linkProgram(pr); if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { cv.remove(); return; }
  gl.useProgram(pr);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const ut = gl.getUniformLocation(pr, 't'), ua = gl.getUniformLocation(pr, 'a'), uk = gl.getUniformLocation(pr, 'k'), us = gl.getUniformLocation(pr, 's');
  function size() { const w = cv.clientWidth, hh = cv.clientHeight; cv.width = Math.max(2, w >> 1); cv.height = Math.max(2, hh >> 1); gl.viewport(0, 0, cv.width, cv.height); gl.uniform1f(ua, w / hh); }
  size(); addEventListener('resize', size);
  let k = 0, sy = 0;
  (function loop(ms) { requestAnimationFrame(loop); if (document.hidden || document.documentElement.classList.contains('a11y-still')) return;
    if (document.body.classList.contains('entered')) k = Math.min(1, k + .012);
    sy += (scrollY / innerHeight * .6 - sy) * .08;      // smoke slides down the page with the scroll
    gl.uniform1f(ut, ms / 1000); gl.uniform1f(uk, k); gl.uniform1f(us, sy); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); })(0);
})();

/* age gate, then the 10% popup once per visit */
const gate = $('#gate');
function enter() {
  gate.hidden = true; document.body.classList.remove('locked'); document.body.classList.add('entered');
  if (!member && !sess.get('promoSeen')) { sess.set('promoSeen'); setTimeout(() => show(mPromo), 900); }
}
if (sess.get('age18')) enter();
$('#gateYes').onclick = () => { sess.set('age18'); enter(); };
$('#gateNo').onclick = () => { gate.innerHTML = '<p class="gate-q">מצטערים.</p><p class="gate-t">האתר מיועד למבוגרים מגיל 18 ומעלה בלבד.</p>'; };

/* ---------- cart: collect a few items, order them in one WhatsApp message ---------- */
let cart = store.get('hadodCart') || {};
const cartEl = $('#cartBox'), cartN = $('#cartN');
function cartCount() { return Object.values(cart).reduce((a, b) => a + b, 0); }
function cartPaint() {
  const n = cartCount(); cartN.textContent = n; cartN.hidden = !n;
  $('#cartList').innerHTML = Object.keys(cart).map(k => `<li><span class="cart-n">${k}</span>
    <span class="cart-q"><button data-q="-1" data-k="${k}" aria-label="להפחית ${k}">−</button><b aria-label="כמות">${cart[k]}</b><button data-q="1" data-k="${k}" aria-label="להוסיף ${k}">+</button></span></li>`).join('');
  $('#cartEmpty').hidden = !!n; $('#cartGo').hidden = !n; $('#cartClear').hidden = !n;
}
function cartSave() { store.set('hadodCart', cart); cartPaint(); }
let cartFrom = null;
function cartOpen() { cartFrom = document.activeElement; cartPaint(); cartEl.hidden = false; document.body.classList.add('locked'); cartEl.querySelector('.modal-x').focus(); }
function cartClose() { cartEl.hidden = true; if ($('#gate').hidden && modal.hidden) document.body.classList.remove('locked'); cartFrom && cartFrom.focus && cartFrom.focus(); }
document.addEventListener('click', e => {
  const add = e.target.closest('[data-add]');
  if (add) { const k = add.dataset.add; cart[k] = (cart[k] || 0) + 1; cartSave(); return say(`${k} נוסף לעגלה`); }
  const q = e.target.closest('[data-q]');
  if (q) { const k = q.dataset.k; cart[k] = (cart[k] || 0) + +q.dataset.q; if (cart[k] <= 0) delete cart[k]; return cartSave(); }
  if (e.target.closest('[data-cart]')) return cartOpen();
  if (e.target.closest('[data-cart-close]') || e.target === cartEl) return cartClose();
  if (e.target.closest('#cartClear')) { cart = {}; return cartSave(); }
  if (e.target.closest('#cartGo')) {
    let msg = 'היי, הגעתי מהאתר של הדוד. אשמח להזמין:\n' + Object.keys(cart).map(k => `• ${k} × ${cart[k]}`).join('\n');
    const city = store.get('hadodCity') || (member && member.city); if (city) msg += `\nאני מ${city}.`;
    if (member) msg += `\nאני רשום באתר (${member.name}, ${member.phone}) ומגיעה לי 10% הנחה.`;
    lead('עגלה: ' + Object.keys(cart).map(k => `${k} × ${cart[k]}`).join(', '));
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !cartEl.hidden) cartClose(); });
cartPaint();

/* ---------- accessibility menu ---------- */
const root = document.documentElement, fab = $('#a11yFab'), panel = $('#a11yPanel');
let a11y = store.get('hadodA11y') || { zoom: 0, contrast: false, links: false, still: false };
function a11yApply() {
  root.style.zoom = a11y.zoom ? String(1 + a11y.zoom * .1) : '';
  ['contrast', 'links', 'still'].forEach(k => { root.classList.toggle('a11y-' + k, !!a11y[k]); const b = $(`[data-a11y="${k}"]`); b && b.setAttribute('aria-pressed', !!a11y[k]); });
  store.set('hadodA11y', a11y);
}
a11yApply();
fab.onclick = () => { panel.hidden = !panel.hidden; fab.setAttribute('aria-expanded', !panel.hidden); if (!panel.hidden) panel.querySelector('button').focus(); };
panel.addEventListener('click', e => {
  const b = e.target.closest('[data-a11y]'); if (!b) return; const k = b.dataset.a11y;
  if (k === 'bigger') a11y.zoom = Math.min(4, a11y.zoom + 1);
  else if (k === 'smaller') a11y.zoom = Math.max(0, a11y.zoom - 1);
  else if (k === 'reset') a11y = { zoom: 0, contrast: false, links: false, still: false };
  else a11y[k] = !a11y[k];
  a11yApply();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) { panel.hidden = true; fab.setAttribute('aria-expanded', false); fab.focus(); } });

/* privacy page: wipe what this site saved on the device */
const wipe = $('#wipe');
if (wipe) wipe.onclick = () => { try { ['hadodMember', 'hadodCart', 'hadodCity', 'hadodA11y'].forEach(k => localStorage.removeItem(k)); sessionStorage.clear(); } catch (_) {} say('הפרטים נמחקו מהמכשיר'); setTimeout(() => location.reload(), 1200); };

/* ---------- catalog: products come from data.json (edited in the admin panel) ---------- */
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const VQ = '?v=' + (document.currentScript ? (document.currentScript.src.split('v=')[1] || '') : '');
function cardHTML(p) {
  const href = `p.html?id=${encodeURIComponent(p.id)}`;
  return `<article class="card" data-k="${esc([p.name, p.en, p.cat === 'pack' ? 'וודקה חבילה אלכוהול' : 'וייפ ויפ וייפים סיגריה אלקטרונית'].join(' '))}">
    <a class="card-i" href="${href}"><img class="${p.cat === 'pack' ? 'sq' : ''}" src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy">${p.promo ? `<span class="promo-b">${esc(p.promo)}</span>` : ''}<span class="illus">התמונה להמחשה בלבד</span></a>
    <div class="card-b"><h3><a href="${href}">${esc(p.name)}</a></h3><p>${esc(p.short)}</p>
    <div class="card-a"><a class="btn btn-line" href="${href}">לפרטים</a><button class="btn btn-gold" data-add="${esc(p.name)}" aria-label="להוסיף ${esc(p.name)} לעגלה"><svg><use href="#cart"/></svg>לעגלה</button></div></div></article>`;
}
function pageHTML(p, others) {
  const list = (t, a) => a && a.length ? `<h2 class="pp-sub">${t}</h2><ul class="incl">${a.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
  const specs = p.specs && p.specs.length ? `<dl class="specs">${p.specs.map(s => `<div><dt>${esc(s[0])}</dt><dd>${esc(s[1])}</dd></div>`).join('')}</dl>` : '';
  const flav = p.flavors && p.flavors.length ? `<h2 class="pp-sub">טעמים</h2><ul class="chips">${p.flavors.map(f => `<li>${esc(f)}</li>`).join('')}</ul>` : '';
  const cities = p.cat === 'vape' ? `<div class="pick"><h2 class="pp-sub">באיזו עיר אתם?</h2>
      <div class="pick-c">${Object.keys(GROUPS).concat('עיר אחרת').map(c => `<button data-city="${c}">${c}</button>`).join('')}</div>
      <a class="btn btn-line btn-l pick-go" id="pickGo" target="_blank" rel="noopener" hidden><svg><use href="#wa"/></svg><span></span></a>
      <p class="pp-note" id="pickNote">בוחרים עיר ומקבלים קישור לקבוצת הוואטסאפ שלה.</p></div>` : '';
  return `<section class="pp"><div class="wrap pp-in">
      <div class="pp-pic"><img class="pp-img" src="${esc(p.img)}" alt="${esc(p.name)}">${p.promo ? `<span class="promo-b">${esc(p.promo)}</span>` : ''}<span class="illus">התמונה להמחשה בלבד</span></div>
      <div class="pp-info">
        <a class="pp-back" href="./${VQ}#${p.cat === 'pack' ? 'vodka' : 'products'}">${p.cat === 'pack' ? 'לכל החבילות' : 'לכל הוויפים'}</a>
        <h1 class="pp-h">${esc(p.name)}</h1>
        ${p.en ? `<p class="pp-en" dir="ltr">${esc(p.en)}</p>` : ''}
        ${p.promo ? `<p class="pp-promo"><b>מבצע:</b> ${esc(p.promo)}</p>` : ''}
        <p class="pp-intro">${esc(p.intro)}</p>
        ${specs}${list('מה בחבילה', p.incl)}${flav}
        <p class="pp-note">${esc(p.note || 'טעמים וזמינות משתנים לפי המלאי. שואלים בוואטסאפ מה יש עכשיו.')}</p>
        ${cities}
        <button class="btn btn-gold btn-l pp-buy" data-wa="${esc(p.name)}"><svg><use href="#wa"/></svg>להזמין מנציג בוואטסאפ</button>
        <button class="btn btn-gold btn-l pp-add" data-add="${esc(p.name)}"><svg><use href="#cart"/></svg>הוספה לעגלה</button>
        <p class="pp-note">נציג עונה בוואטסאפ עם מחיר, טעמים וזמן הגעה.</p>
        <button class="pp-member" data-join><b>10% הנחה</b><span class="pp-member-t">לנרשמים לאתר. להרשמה</span></button>
      </div></div></section>
    ${others.length ? `<section class="sec"><div class="wrap"><h2 class="big">${p.cat === 'pack' ? 'עוד חבילות' : 'עוד וייפים'}</h2><div class="grid g3">${others.map(cardHTML).join('')}</div></div></section>` : ''}`;
}
fetch('data.json?t=' + Math.floor(Date.now() / 60000)).then(r => r.json()).then(data => {
  const live = (data.products || []).filter(p => !p.hidden);
  [['#gridVape', 'vape'], ['#gridPack', 'pack']].forEach(([sel, cat]) => {
    const g = $(sel); if (!g) return; const items = live.filter(p => p.cat === cat);
    g.innerHTML = items.map(cardHTML).join(''); const sec = g.closest('section'); if (sec && !items.length) sec.hidden = true;
  });
  const pp = $('#pp');
  if (pp) {
    const id = new URLSearchParams(location.search).get('id'), p = live.find(x => x.id === id);
    if (p) { document.title = `${p.name} | HADOD הדוד`; pp.innerHTML = pageHTML(p, live.filter(x => x.cat === p.cat && x !== p).slice(0, 6)); }
    else pp.innerHTML = '<section class="pp"><div class="wrap"><h1 class="pp-h">המוצר לא נמצא</h1><p class="pp-intro"><a class="pp-back" href="./">חזרה לדף הבית</a></p></div></section>';
  }
  paint(); const c = store.get('hadodCity') || (member && member.city); if (c) pick(c);
  /* Meta pixel, if an id was set in the admin panel */
  const px = String((data.settings || {}).pixel || '').replace(/\D/g, '');
  if (px) {
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', px); fbq('track', 'PageView');
  }
}).catch(() => { $$('#gridVape,#gridPack,#pp').forEach(g => g.innerHTML = '<p class="lead">לא הצלחנו לטעון את המוצרים. נסו לרענן את הדף.</p>'); });
/* every order click counts as a "Contact" event for the pixel */
document.addEventListener('click', e => { const b = e.target.closest('[data-wa],#cartGo'); if (b && window.fbq) fbq('track', 'Contact', { content_name: b.dataset.wa || 'cart' }); });
