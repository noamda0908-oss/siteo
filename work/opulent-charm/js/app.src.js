import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

/* ---------- smooth scroll ---------- */
let lenis = null;
if (!reduce) {
  lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
function goTo(target) {
  if (lenis) lenis.scrollTo(target, { offset: -70 });
  else target.scrollIntoView({ behavior: 'auto', block: 'start' });
}
$$('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const t = $(id);
    if (!t) return;
    e.preventDefault();
    closeMenu();
    goTo(t);
    history.replaceState(null, '', id);
  });
});

/* ---------- nav ---------- */
const nav = $('#nav'), burger = $('#burger'), links = $('#navLinks');
function closeMenu() {
  if (!links.classList.contains('is-open')) return;
  links.classList.remove('is-open');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'פתיחת תפריט');
  if (lenis) lenis.start();
}
burger.addEventListener('click', () => {
  const open = links.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'סגירת תפריט' : 'פתיחת תפריט');
  if (lenis) open ? lenis.stop() : lenis.start();
});
addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
let lastY = 0;
const bar = $('#progress');
function onScroll() {
  const y = scrollY;
  nav.classList.toggle('is-solid', y > 40);
  const menuOpen = links.classList.contains('is-open');
  nav.classList.toggle('is-hidden', !menuOpen && y > 500 && y > lastY + 2);
  if (y < lastY - 2) nav.classList.remove('is-hidden');
  lastY = y;
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- split headings into masked lines ---------- */
function splitLines(el) {
  const text = el.textContent.trim();
  el.setAttribute('aria-label', text);
  el.textContent = '';
  const words = text.split(/\s+/).map((w) => {
    const s = document.createElement('span');
    s.textContent = w;
    s.style.display = 'inline-block';
    el.appendChild(s);
    el.appendChild(document.createTextNode(' '));
    return s;
  });
  const rows = [];
  let top = null;
  words.forEach((w) => {
    const t = Math.round(w.getBoundingClientRect().top);
    if (top === null || Math.abs(t - top) > 6) { rows.push([]); top = t; }
    rows[rows.length - 1].push(w.textContent);
  });
  el.textContent = '';
  rows.forEach((r) => {
    const ln = document.createElement('span');
    ln.className = 'ln';
    ln.setAttribute('aria-hidden', 'true');
    const inner = document.createElement('span');
    inner.textContent = r.join(' ');
    ln.appendChild(inner);
    el.appendChild(ln);
  });
  el.classList.add('is-split');
  return $$('.ln > span', el);
}

function buildReveals() {
  $$('[data-lines]').forEach((el) => {
    if (reduce) { el.classList.add('is-split'); return; }
    const inners = splitLines(el);
    gsap.set(inners, { yPercent: 108 });
    const inHero = !!el.closest('.hero');
    const tween = gsap.to(inners, { yPercent: 0, duration: 1.15, ease: 'expo.out', stagger: 0.09, paused: true });
    if (inHero) el._tween = tween;
    else ScrollTrigger.create({ trigger: el, start: 'top 86%', once: true, onEnter: () => tween.play() });
  });
  if (reduce) return;
  $$('[data-fade]').forEach((el) => {
    if (el.closest('.hero')) return;
    ScrollTrigger.create({
      trigger: el, start: 'top 90%', once: true,
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
    });
  });
}

/* ---------- loader + hero intro (the one orchestrated moment) ---------- */
function intro() {
  const loader = $('#loader');
  const heroTitle = $('.hero__title');
  const heroFades = $$('.hero [data-fade]');
  if (reduce) { loader.remove(); return; }
  if (lenis) lenis.stop();
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.to('.loader__mark span', { y: 0, duration: 0.9, stagger: 0.12 })
    .to('#loaderLine', { scaleX: 1, duration: 0.9, ease: 'power2.inOut' }, 0.15)
    .to('.loader__mark span', { y: '-110%', duration: 0.6, ease: 'power3.in', stagger: 0.06 }, '+=0.15')
    .to(loader, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '-=0.25')
    .add(() => { loader.remove(); if (lenis) lenis.start(); })
    .add(() => heroTitle._tween && heroTitle._tween.play(), '-=0.55')
    .to(heroFades, { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }, '-=0.1');
}

/* ---------- silk shader ---------- */
const VERT = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
const FRAG = `precision highp float;
uniform vec2 r;uniform float t;uniform vec2 m;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return s;}
void main(){
vec2 uv=gl_FragCoord.xy/r.xy;vec2 p=uv;p.x*=r.x/r.y;
p+=(m-.5)*.12;
float tt=t*.055;
vec2 q=vec2(fbm(p*1.3+vec2(0.,tt)),fbm(p*1.3+vec2(5.2,-tt*1.2)));
vec2 w=vec2(fbm(p*1.1+3.2*q+vec2(1.7,9.2)+tt),fbm(p*1.1+3.2*q+vec2(8.3,2.8)-tt));
float f=fbm(p*.9+3.6*w);
float fold=sin((f*7.+w.x*3.)*3.14159);
float sheen=pow(abs(fold),3.);
vec3 deep=vec3(.114,.031,.102);
vec3 plum=vec3(.33,.085,.26);
vec3 rose=vec3(.88,.34,.50);
vec3 pearl=vec3(1.,.90,.88);
vec3 c=mix(deep,plum,smoothstep(.15,.75,f));
c=mix(c,rose,smoothstep(.45,.95,f*w.y*1.9)*.75);
c+=pearl*sheen*.16*smoothstep(.3,.9,f);
c*=.55+.6*uv.y;
float g=h(gl_FragCoord.xy+t)*.035;
gl_FragColor=vec4(c-g,1.);}`;

function silk(canvas) {
  if (!canvas || reduce) return;
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
  if (!gl) return;
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uR = gl.getUniformLocation(prog, 'r'), uT = gl.getUniformLocation(prog, 't'), uM = gl.getUniformLocation(prog, 'm');
  const scale = innerWidth < 700 ? 0.5 : 0.6;
  let mx = 0.5, my = 0.5, tx = 0.5, ty = 0.5, visible = false, raf = 0;
  function size() {
    const b = canvas.getBoundingClientRect();
    canvas.width = Math.max(2, Math.round(b.width * scale));
    canvas.height = Math.max(2, Math.round(b.height * scale));
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  size();
  addEventListener('resize', size);
  if (fine) addEventListener('pointermove', (e) => { tx = e.clientX / innerWidth; ty = 1 - e.clientY / innerHeight; }, { passive: true });
  const t0 = performance.now();
  function frame(now) {
    if (!visible) { raf = 0; return; }
    mx += (tx - mx) * 0.04; my += (ty - my) * 0.04;
    gl.uniform2f(uR, canvas.width, canvas.height);
    gl.uniform1f(uT, (now - t0) / 1000);
    gl.uniform2f(uM, mx, my);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    raf = requestAnimationFrame(frame);
  }
  new IntersectionObserver((es) => {
    visible = es[0].isIntersecting && !document.hidden;
    if (visible && !raf) raf = requestAnimationFrame(frame);
  }).observe(canvas);
  document.addEventListener('visibilitychange', () => { if (document.hidden) visible = false; });
}

/* ---------- services accordion ---------- */
function services() {
  const items = $$('.svc__item');
  items.forEach((item) => {
    const btn = $('.svc__btn', item);
    btn.addEventListener('click', () => {
      const open = item.classList.contains('is-open');
      items.forEach((i) => { i.classList.remove('is-open'); $('.svc__btn', i).setAttribute('aria-expanded', 'false'); });
      if (!open) { item.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); }
      setTimeout(() => ScrollTrigger.refresh(), 650);
    });
  });
  if (reduce) return;
  gsap.from(items, {
    opacity: 0, y: 40, duration: 0.9, ease: 'power3.out', stagger: 0.07,
    scrollTrigger: { trigger: '#svc', start: 'top 82%', once: true }
  });
}

/* ---------- veil: redaction bars lift as each row is reached / touched ---------- */
function veil() {
  const rows = $$('#veil li');
  if (reduce) { rows.forEach((r) => r.classList.add('is-clear')); return; }
  rows.forEach((row, i) => {
    ScrollTrigger.create({
      trigger: row, start: 'top 62%', once: true,
      onEnter: () => setTimeout(() => row.classList.add('is-clear'), i * 40)
    });
    row.addEventListener('pointerenter', () => row.classList.add('is-clear'));
    row.addEventListener('touchstart', () => row.classList.add('is-clear'), { passive: true });
  });
}

/* ---------- process steps ---------- */
function steps() {
  if (reduce) return;
  gsap.from('#steps li', {
    opacity: 0, y: 46, duration: 0.9, ease: 'power3.out', stagger: 0.12,
    scrollTrigger: { trigger: '#steps', start: 'top 80%', once: true }
  });
  gsap.from('.post', {
    opacity: 0, y: 36, duration: 0.8, ease: 'power3.out', stagger: 0.09,
    scrollTrigger: { trigger: '.posts', start: 'top 84%', once: true }
  });
}

/* ---------- marquee reacts to scroll speed ---------- */
function band() {
  const track = $('#band');
  if (!track || reduce || !lenis) return;
  const skew = gsap.quickTo(track, 'skewX', { duration: 0.5, ease: 'power3.out' });
  lenis.on('scroll', ({ velocity }) => skew(gsap.utils.clamp(-14, 14, velocity * 0.9)));
}

/* ---------- footer wordmark parallax ---------- */
function footMark() {
  if (reduce) return;
  gsap.from('.foot__mark', {
    yPercent: 45, opacity: 0.2, ease: 'none',
    scrollTrigger: { trigger: '.foot', start: 'top bottom', end: 'bottom bottom', scrub: true }
  });
}

/* ---------- magnetic buttons (desktop) ---------- */
function magnets() {
  if (!fine || reduce) return;
  $$('[data-magnet]').forEach((el) => {
    const x = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
    const y = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });
    el.addEventListener('pointermove', (e) => {
      const b = el.getBoundingClientRect();
      x((e.clientX - b.left - b.width / 2) * 0.28);
      y((e.clientY - b.top - b.height / 2) * 0.36);
    });
    el.addEventListener('pointerleave', () => { x(0); y(0); });
  });
}

/* ---------- FAQ: animate native <details> ---------- */
function faq() {
  $$('.qa').forEach((d) => {
    const sum = $('summary', d), body = $('.qa__a', d);
    sum.addEventListener('click', (e) => {
      if (reduce) return;
      e.preventDefault();
      if (d.open) {
        gsap.to(body, { height: 0, duration: 0.45, ease: 'power3.inOut', onComplete: () => { d.open = false; gsap.set(body, { clearProps: 'height' }); ScrollTrigger.refresh(); } });
      } else {
        d.open = true;
        gsap.fromTo(body, { height: 0 }, { height: 'auto', duration: 0.55, ease: 'power3.out', onComplete: () => { gsap.set(body, { clearProps: 'height' }); ScrollTrigger.refresh(); } });
      }
    });
  });
}

/* ---------- form (demo: validates, does not send) ---------- */
function form() {
  const f = $('#form'), err = $('#formErr'), done = $('#formDone');
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#f-name'), phone = $('#f-phone'), stage = $('#f-stage'), age = $('#f-age');
    [name, phone, stage].forEach((el) => el.classList.remove('is-bad'));
    let msg = '', bad = null;
    const digits = phone.value.replace(/\D/g, '');
    if (!name.value.trim()) { msg = 'חסר שם או כינוי.'; bad = name; }
    else if (digits.length < 9 || digits.length > 13) { msg = 'מספר הטלפון לא תקין. הקלידי מספר מלא, למשל 0501234567.'; bad = phone; }
    else if (!stage.value) { msg = 'בחרי איפה את עומדת היום.'; bad = stage; }
    else if (!age.checked) { msg = 'כדי להמשיך צריך לאשר שאת בת 18 ומעלה.'; bad = age; }
    if (msg) {
      err.textContent = msg; err.hidden = false;
      if (bad !== age) bad.classList.add('is-bad');
      bad.focus();
      return;
    }
    err.hidden = true;
    done.hidden = false;
    if (!reduce) gsap.from(done, { opacity: 0, duration: 0.5 });
    done.setAttribute('tabindex', '-1'); done.focus();
  });
}

/* ---------- boot ---------- */
function boot() {
  buildReveals();
  services(); veil(); steps(); band(); footMark(); magnets(); faq(); form();
  silk($('#silk')); silk($('#silk2'));
  intro();
  addEventListener('load', () => ScrollTrigger.refresh());
}
(document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(boot, boot);
