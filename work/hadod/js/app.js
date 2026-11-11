/* ================= הגדרות ================= */
const WA_NUMBER = '';   // מספר וואטסאפ להזמנות: 9725XXXXXXXX – ריק = עדיין לא מחובר
const GROUPS = {"אשקלון": "https://chat.whatsapp.com/Imh2ZDRe7W62kp15ZZScmi", "ראשון לציון": "https://chat.whatsapp.com/Cj6EUaNfvrMJV39FDsxvnP", "פרדס חנה": "https://chat.whatsapp.com/J1wP1OqBdlvLcwPg7Rk8YW", "עכו": "https://chat.whatsapp.com/Lg6ATxYxOeH2Zuyh4pNlcf", "שלומי": "https://chat.whatsapp.com/LmqPUMiXWHVHEY7aMUnWy9"};
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

/* product page: pick a city, get that city's group */
const pickGo = $('#pickGo');
function pick(city, save) {
  if (!pickGo) return;
  $$('[data-city]').forEach(b => b.classList.toggle('on', b.dataset.city === city));
  const has = GROUPS[city];
  pickGo.href = has || MAIN_GROUP; pickGo.hidden = false;
  pickGo.lastElementChild.textContent = has ? `להצטרף לקבוצת הדוד ${city}` : 'להצטרף לקבוצה הראשית של הדוד';
  $('#pickNote').textContent = has ? 'בקבוצה רואים מחירים ומלאי, ומזמינים משם.' : (city === 'עיר אחרת' ? 'עוד אין קבוצה לעיר שלך. בקבוצה הראשית מתעדכנים כשנפתחת אחת.' : `הקבוצה של ${city} נפתחת בקרוב. בינתיים מתעדכנים בקבוצה הראשית.`);
  if (save) store.set('hadodCity', city);
}
document.addEventListener('click', e => { const c = e.target.closest('[data-city]'); if (c) pick(c.dataset.city, true); });
{ const c = store.get('hadodCity') || (member && member.city); if (c) pick(c); }

/* smoke behind the hero (plain WebGL, half resolution) */
(function () {
  const cv = $('#smoke'); if (!cv || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const gl = cv.getContext('webgl', { premultipliedAlpha: false, antialias: false }); if (!gl) return;
  const sh = (t, src) => { const o = gl.createShader(t); gl.shaderSource(o, src); gl.compileShader(o); return o; };
  const pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, 'attribute vec2 p;varying vec2 v;void main(){v=p*.5+.5;gl_Position=vec4(p,0.,1.);}'));
  gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, `precision mediump float;varying vec2 v;uniform float t,a,k;
    float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
    float fbm(vec2 p){float s=0.,w=.5;for(int i=0;i<4;i++){s+=w*n(p);p=p*2.03+vec2(11.3,7.1);w*=.5;}return s;}
    void main(){vec2 p=vec2(v.x*a,v.y)*2.3;float q=t*.06;
      vec2 w=vec2(fbm(p+vec2(0.,-q)),fbm(p+vec2(5.2,1.3)-q*.7));
      float f=smoothstep(.36,.95,fbm(p+2.6*w+vec2(0.,-q*2.4)));
      float m=smoothstep(1.05,.1,length((v-vec2(.5,.62))*vec2(a,1.)));
      vec3 c=mix(vec3(1.,.42,.07),vec3(1.),f*f*.6);
      gl_FragColor=vec4(c,f*(.12+.88*m)*k*.85);}`));
  gl.linkProgram(pr); gl.useProgram(pr);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const ut = gl.getUniformLocation(pr, 't'), ua = gl.getUniformLocation(pr, 'a'), uk = gl.getUniformLocation(pr, 'k');
  function size() { const w = cv.clientWidth, hh = cv.clientHeight; cv.width = Math.max(2, w >> 1); cv.height = Math.max(2, hh >> 1); gl.viewport(0, 0, cv.width, cv.height); gl.uniform1f(ua, w / hh); }
  size(); addEventListener('resize', size);
  let seen = true, k = 0; new IntersectionObserver(e => seen = e[0].isIntersecting).observe(cv);
  (function loop(ms) { requestAnimationFrame(loop); if (!seen || document.hidden) return;
    if (document.body.classList.contains('entered')) k = Math.min(1, k + .012);
    gl.uniform1f(ut, ms / 1000); gl.uniform1f(uk, k); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); })(0);
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
