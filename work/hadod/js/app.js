/* ================= הגדרות ================= */
const WA_NUMBER = '';   // מספר וואטסאפ להזמנות: 9725XXXXXXXX – ריק = עדיין לא מחובר
const GROUPS = {"אשקלון": "https://chat.whatsapp.com/Imh2ZDRe7W62kp15ZZScmi", "ראשון לציון": "https://chat.whatsapp.com/Cj6EUaNfvrMJV39FDsxvnP", "פרדס חנה": "https://chat.whatsapp.com/J1wP1OqBdlvLcwPg7Rk8YW", "עכו": "https://chat.whatsapp.com/Lg6ATxYxOeH2Zuyh4pNlcf", "שלומי": "https://chat.whatsapp.com/LmqPUMiXWHVHEY7aMUnWy9"};
const PACK_NUMBER = '972559277843';   // הזמנות חבילות וודקה (055-927-7843)
const MAIN_GROUP = "https://chat.whatsapp.com/E9wtf3yIp5pKaKHJBiUeNp";
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
  const city = store.get('hadodCity') || (member && member.city); if (city && !member) msg += `\nאני מ${city}.`;
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

/* vodka packages */
let brand = '';
document.addEventListener('click', e => {
  const b = e.target.closest('[data-brand]');
  if (b) { brand = b.dataset.brand; $$('[data-brand]').forEach(x => x.classList.toggle('on', x === b)); $('#vdGo').lastElementChild.textContent = `להזמין חבילת ${brand}`; return; }
  if (e.target.closest('#vdGo')) {
    if (!brand) return say('בוחרים קודם וודקה');
    let msg = `היי, הגעתי מהאתר של הדוד. אשמח להזמין חבילת וודקה ${brand} (1 ליטר)`;
    if (member) msg += `\nאני רשום באתר (${member.name}, ${member.city}, ${member.phone}) ומגיעה לי 10% הנחה.`;
    window.open(`https://wa.me/${PACK_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  }
});

/* product page: pick a city, get that city's group */
const pickGo = $('#pickGo');
function pick(city, save) {
  if (!pickGo) return;
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
  (function loop(ms) { requestAnimationFrame(loop); if (document.hidden) return;
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
