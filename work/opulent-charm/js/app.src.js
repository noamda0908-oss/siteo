import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {
  WebGLRenderer, Scene, PerspectiveCamera, PlaneGeometry, ShaderMaterial, Mesh, CanvasTexture,
  AdditiveBlending, BufferGeometry, BufferAttribute, Points, PointsMaterial, MeshBasicMaterial, Group, SRGBColorSpace, DoubleSide
} from 'three';

gsap.registerPlugin(ScrollTrigger);

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };

/* ================= smooth scroll ================= */
let lenis = null;
if (!reduce) {
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
}
$$('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const t = id.length > 1 && $(id);
    if (!t) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(t, { offset: id === '#top' ? 0 : -60, duration: 1.6 });
    else t.scrollIntoView();
  });
});

/* ================= nav + dock ================= */
function chrome() {
  const nav = $('.nav'), dock = $('.dock'), join = $('#join'), close = $('.close');
  let last = 0;
  const on = () => {
    const y = scrollY, vh = innerHeight;
    nav.classList.toggle('is-solid', y > vh * 0.5);
    nav.classList.toggle('is-hidden', y > vh && y > last + 2);
    if (y < last - 2) nav.classList.remove('is-hidden');
    last = y;
    const jr = join.getBoundingClientRect(), cr = close.getBoundingClientRect();
    const hide = (jr.top < vh * 0.7 && jr.bottom > vh * 0.2) || cr.top < vh * 0.8;
    dock.classList.toggle('is-on', y > vh * 1.2 && !hide);
  };
  addEventListener('scroll', on, { passive: true });
  on();
}

/* ================= 1. hero: the curtain ================= */
const CURTAIN_V = `
uniform float uOpen,uTime,uHalf,uH,uY0,uSide;
varying vec2 vUv;varying vec3 vN;varying float vX;
void main(){
  vUv=uv;float u=uv.x;float e=uOpen;
  float k=mix(1.05,.16,e);
  float hang=1.-uv.y;
  float x=uSide*(uHalf-u*uHalf*k);
  x-=uSide*sin(e*3.14159)*hang*hang*uHalf*.12*u;
  float fr=26.;float amp=uHalf*mix(.02,.046,e);
  float ph=u*fr+uSide*1.3;
  float sway=sin(u*5.+uTime*.8+uSide)*uHalf*.012*hang;
  float z=sin(ph)*amp+sin(ph*2.3+1.)*amp*.35+sway;
  float dz=cos(ph)*fr*amp+cos(ph*2.3+1.)*2.3*fr*amp*.35;
  float dx=-uSide*uHalf*k;
  vec3 n=normalize(vec3(-dz,0.,dx));
  vN=n*sign(n.z+1e-5);
  vX=x;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(x,uY0+uv.y*uH,z,1.);
}`;
const CURTAIN_F = `
precision highp float;
uniform float uOpen,uHalf;
varying vec2 vUv;varying vec3 vN;varying float vX;
void main(){
  vec3 n=normalize(vN);
  vec3 L=normalize(vec3(.25,.35,1.));
  float d=max(dot(n,L),0.);
  float rim=pow(1.-abs(n.z),1.5);
  vec3 base=vec3(.50,.045,.19);
  vec3 c=base*(.14+1.05*d*d)+vec3(1.,.28,.5)*rim*.2;
  float spill=uOpen*exp(-abs(vX)/(uHalf*.5));
  c+=vec3(1.,.6,.34)*spill*.5*d;
  c*=mix(1.1,.42,vUv.y);
  float trim=smoothstep(.062,.056,vUv.y)*smoothstep(.02,.026,vUv.y);
  c=mix(c,vec3(.96,.72,.38)*(.35+.9*d),trim);
  gl_FragColor=vec4(c,1.);
}`;
const WALL_V = 'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}';
const WALL_F = `
precision highp float;
uniform float uAsp,uGlow,uTime;varying vec2 vUv;
float beam(vec2 p,vec2 a,vec2 b,float w){vec2 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);float d=length(pa-ba*h);return smoothstep(w*(.25+h),0.,d)*(1.-h*.55);}
void main(){
  vec2 p=vUv-.5;p.x*=uAsp;
  float d=length(p*vec2(1.,1.5));
  float g=exp(-d*3.);
  vec3 c=mix(vec3(.05,.015,.04),vec3(.5,.06,.22),g);
  c+=vec3(1.,.55,.32)*g*g*.6;
  float fl=.9+.1*sin(uTime*1.7);
  c+=vec3(1.,.72,.55)*(beam(p,vec2(-.8,.62),vec2(.06,-.25),.2)+beam(p,vec2(.8,.62),vec2(-.06,-.25),.2))*.2*fl;
  c*=mix(.35,1.,uGlow);
  gl_FragColor=vec4(c,1.);
}`;
const FLOOR_F = `
precision highp float;
uniform float uGlow;varying vec2 vUv;
void main(){
  vec2 q=vec2((vUv.x-.5)*3.2,(1.-vUv.y)*2.2);
  float g=exp(-length(q)*1.5);
  float streak=exp(-abs(vUv.x-.5)*9.)*vUv.y;
  vec3 c=vec3(.06,.018,.045)+vec3(1.,.3,.5)*g*.55*uGlow+vec3(1.,.5,.6)*streak*.22*uGlow;
  c+=vec3(.05,.012,.03)*(1.-vUv.y);
  gl_FragColor=vec4(c,1.);
}`;

function hero() {
  const stage = $('.hero__stage'), canvas = $('.hero__canvas');
  const copy = $('.hero__copy'), after = $('.hero__after'), hint = $('.hero__hint'), shade = $('.hero__shade');
  const lines = $$('.hero__title .line > span');
  const state = { p: 0 };
  let three = null;

  if (!reduce) {
    try { three = buildScene(canvas, stage); } catch (e) { three = null; }
  }

  function apply(p) {
    state.p = p;
    gsap.set(copy, { opacity: 1 - smooth(0.02, 0.2, p), y: -60 * smooth(0.02, 0.25, p) });
    gsap.set(hint, { opacity: 1 - smooth(0, 0.08, p) });
    gsap.set(after, { opacity: smooth(0.72, 0.9, p), y: 30 * (1 - smooth(0.72, 0.92, p)) });
    gsap.set(shade, { opacity: 1 - 0.8 * smooth(0.08, 0.6, p) });
    if (three) three.setProgress(p);
  }

  if (reduce) { gsap.set(after, { opacity: 0 }); return { intro() {} }; }
  if (!three) canvas.style.display = 'none';

  ScrollTrigger.create({
    trigger: stage, start: 'top top', end: '+=230%', pin: true, scrub: true, anticipatePin: 1,
    onUpdate: (s) => apply(s.progress),
    onToggle: (s) => three && three.setActive(s.isActive)
  });
  apply(0);
  gsap.set(lines, { yPercent: 110 });
  gsap.set([$('.hero__lead'), $('.hero__actions'), hint], { opacity: 0, y: 20 });
  if (three) three.setActive(true);

  return {
    intro() {
      gsap.to(lines, { yPercent: 0, duration: 1.2, ease: 'expo.out', stagger: 0.1 });
      gsap.to([$('.hero__lead'), $('.hero__actions')], { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.45 });
      gsap.to(hint, { opacity: 1, y: 0, duration: 0.8, delay: 1.1, clearProps: 'transform' });
    }
  };
}

function buildScene(canvas, stage) {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setClearColor(0x160a13, 1);
  const scene = new Scene();
  const FOV = 42, Z0 = 7.2, Z1 = 3.5, ZB = -3.2;
  const cam = new PerspectiveCamera(FOV, 1, 0.1, 60);
  const tanH = Math.tan((FOV * Math.PI) / 360);

  const cu = (side) => ({ uOpen: { value: 0 }, uTime: { value: 0 }, uHalf: { value: 3 }, uH: { value: 6 }, uY0: { value: -3 }, uSide: { value: side } });
  const geo = new PlaneGeometry(1, 1, 200, 28);
  const curtains = [1, -1].map((side) => {
    const m = new Mesh(geo, new ShaderMaterial({ uniforms: cu(side), vertexShader: CURTAIN_V, fragmentShader: CURTAIN_F, side: DoubleSide }));
    m.frustumCulled = false; scene.add(m); return m;
  });

  const wallU = { uAsp: { value: 1 }, uGlow: { value: 0 }, uTime: { value: 0 } };
  const wall = new Mesh(new PlaneGeometry(1, 1), new ShaderMaterial({ uniforms: wallU, vertexShader: WALL_V, fragmentShader: WALL_F }));
  wall.position.z = ZB; scene.add(wall);

  const floorU = { uGlow: { value: 0 } };
  const floor = new Mesh(new PlaneGeometry(1, 1), new ShaderMaterial({ uniforms: floorU, vertexShader: WALL_V, fragmentShader: FLOOR_F }));
  floor.rotation.x = -Math.PI / 2; scene.add(floor);

  // neon sign
  const sc = document.createElement('canvas'); sc.width = 1600; sc.height = 800;
  const g = sc.getContext('2d');
  g.textAlign = 'center'; g.textBaseline = 'alphabetic'; g.font = '900 300px Heebo, Arial, sans-serif';
  const drawWords = () => { g.fillText('Opulent', 800, 350); g.fillText('Charm', 800, 640); };
  g.shadowColor = '#ff2f78'; g.shadowBlur = 90; g.fillStyle = '#ff4f87'; drawWords(); drawWords();
  g.shadowBlur = 30; drawWords();
  g.shadowBlur = 8; g.shadowColor = '#fff'; g.fillStyle = '#ffe9f0'; drawWords();
  const tex = new CanvasTexture(sc); tex.colorSpace = SRGBColorSpace;
  const signMat = new MeshBasicMaterial({ map: tex, transparent: true, blending: AdditiveBlending, depthWrite: false });
  const sign = new Mesh(new PlaneGeometry(2, 1), signMat);
  sign.position.z = ZB + 0.25; scene.add(sign);

  // dust in the light
  const N = 260, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { pos[i * 3] = (Math.random() - 0.5) * 9; pos[i * 3 + 1] = (Math.random() - 0.5) * 6; pos[i * 3 + 2] = ZB + 0.4 + Math.random() * 3.6; }
  const dg = new BufferGeometry(); dg.setAttribute('position', new BufferAttribute(pos, 3));
  const dustMat = new PointsMaterial({ color: 0xffc9a0, size: 0.028, transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false });
  const dust = new Group(); dust.add(new Points(dg, dustMat)); scene.add(dust);

  let W = 1, H = 1, active = false, raf = 0, p = 0, mx = 0, my = 0, tx = 0, ty = 0;
  function size() {
    const b = stage.getBoundingClientRect();
    W = Math.max(2, b.width); H = Math.max(2, b.height);
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, W < 700 ? 1.6 : 1.75));
    renderer.setSize(W, H, false);
    const asp = W / H; cam.aspect = asp; cam.updateProjectionMatrix();
    const visH0 = 2 * tanH * Z0, visW0 = visH0 * asp;
    const endDist = Z1 - ZB, visHe = 2 * tanH * endDist, visWe = visHe * asp;
    const floorY = -visHe * 0.36;
    const top = visH0 * 0.62;
    curtains.forEach((m) => { const u = m.material.uniforms; u.uHalf.value = (visW0 / 2) * 1.1; u.uY0.value = floorY; u.uH.value = top - floorY; });
    const backDist = Z0 - ZB, bh = 2 * tanH * backDist * 1.25, bw = bh * asp;
    wall.scale.set(bw, bh, 1); wallU.uAsp.value = asp;
    floor.scale.set(bw, 6.4, 1); floor.position.set(0, floorY, ZB + 3.2);
    const sw = Math.min(visWe * 0.94, visHe * 1.25);
    sign.scale.set(sw / 2, sw / 2, 1); sign.position.y = visHe * 0.1;
  }
  size();
  addEventListener('resize', size);
  if (fine) addEventListener('pointermove', (e) => { tx = e.clientX / innerWidth - 0.5; ty = e.clientY / innerHeight - 0.5; }, { passive: true });

  const t0 = performance.now();
  function frame(now) {
    raf = 0;
    if (!active || document.hidden) return;
    const t = (now - t0) / 1000;
    mx += (tx - mx) * 0.05; my += (ty - my) * 0.05;
    const open = smooth(0.06, 0.78, p);
    const e = p * p * (3 - 2 * p);
    curtains.forEach((m) => { m.material.uniforms.uOpen.value = open; m.material.uniforms.uTime.value = t; });
    wallU.uGlow.value = 0.25 + 0.75 * open; wallU.uTime.value = t; floorU.uGlow.value = 0.2 + 0.8 * open;
    signMat.opacity = (0.35 + 0.65 * open) * (0.93 + 0.07 * Math.sin(t * 9) * Math.sin(t * 2.3));
    dustMat.opacity = 0.55 * open;
    dust.position.y = Math.sin(t * 0.25) * 0.15; dust.rotation.y = Math.sin(t * 0.1) * 0.08;
    cam.position.set(mx * 0.35, 0.05 - my * 0.2, lerp(Z0, Z1, e));
    cam.lookAt(mx * 0.1, sign.position.y * 0.5 * e, ZB);
    renderer.render(scene, cam);
    raf = requestAnimationFrame(frame);
  }
  const kick = () => { if (active && !raf) raf = requestAnimationFrame(frame); };
  document.addEventListener('visibilitychange', kick);
  return {
    setProgress(v) { p = v; },
    setActive(v) { active = v; kick(); }
  };
}

/* ================= silk (inside the letters) ================= */
const SILK_F = `precision highp float;
uniform vec2 r;uniform float t;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return s;}
void main(){
vec2 uv=gl_FragCoord.xy/r.xy;vec2 p=uv;p.x*=r.x/r.y;float tt=t*.07;
vec2 q=vec2(fbm(p*1.4+vec2(0.,tt)),fbm(p*1.4+vec2(5.2,-tt*1.2)));
vec2 w=vec2(fbm(p*1.2+3.4*q+vec2(1.7,9.2)+tt),fbm(p*1.2+3.4*q+vec2(8.3,2.8)-tt));
float f=fbm(p+3.8*w);
float fold=pow(abs(sin((f*7.+w.x*3.)*3.14159)),2.5);
vec3 c=mix(vec3(.16,.03,.09),vec3(.56,.07,.25),smoothstep(.15,.7,f));
c=mix(c,vec3(1.,.31,.53),smoothstep(.35,.9,f*w.y*2.1)*.9);
c+=vec3(1.,.82,.7)*fold*.22*smoothstep(.25,.85,f);
gl_FragColor=vec4(c,1.);}`;
function silk(canvas) {
  if (!canvas || reduce) return null;
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false });
  if (!gl) { canvas.style.display = 'none'; return null; }
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}'));
  gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, SILK_F));
  gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { canvas.style.display = 'none'; return null; }
  gl.useProgram(pr);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uR = gl.getUniformLocation(pr, 'r'), uT = gl.getUniformLocation(pr, 't');
  let on = false, raf = 0;
  const size = () => { const b = canvas.getBoundingClientRect(); const s = b.width < 700 ? 0.5 : 0.55; canvas.width = Math.max(2, b.width * s); canvas.height = Math.max(2, b.height * s); gl.viewport(0, 0, canvas.width, canvas.height); };
  size(); addEventListener('resize', size);
  const t0 = performance.now();
  const frame = (now) => { raf = 0; if (!on || document.hidden) return; gl.uniform2f(uR, canvas.width, canvas.height); gl.uniform1f(uT, (now - t0) / 1000); gl.drawArrays(gl.TRIANGLES, 0, 3); raf = requestAnimationFrame(frame); };
  new IntersectionObserver((es) => { on = es[0].isIntersecting; if (on && !raf) raf = requestAnimationFrame(frame); }).observe(canvas);
  return true;
}

/* ================= 2. open: the word ================= */
function open() {
  const stage = $('.open__stage'), svg = $('.open__mask'), word = $('.open__word');
  const l1 = $('.open__l1'), l2 = $('.open__l2'), fill = $('.open__fill');
  const sub = $('.open__sub'), st = $('.open__statement');
  silk($('.open__silk'));
  if (reduce) return;
  let origin = '0 0';
  function layout() {
    const W = stage.clientWidth, H = stage.clientHeight;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    let fs = Math.min(W * 0.2, H * 0.3);
    word.setAttribute('font-size', fs);
    l1.setAttribute('x', W / 2); l2.setAttribute('x', W / 2);
    let wmax = 1;
    try { wmax = Math.max(l1.getComputedTextLength(), l2.getComputedTextLength()); } catch (e) {}
    if (wmax > 1) { fs = Math.min(fs * (W * 0.88) / wmax, H * 0.3); word.setAttribute('font-size', fs); }
    const cy = H * 0.46;
    l1.setAttribute('y', cy - fs * 0.04); l2.setAttribute('y', cy + fs * 0.82);
    let ox = W / 2, oy = cy - fs * 0.4;
    try { const b = l1.getExtentOfChar(3); ox = b.x + b.width * 0.2; oy = b.y + b.height * 0.5; } catch (e) {}
    origin = `${ox} ${oy}`;
  }
  layout();
  const tl = gsap.timeline({
    scrollTrigger: { trigger: stage, start: 'top top', end: '+=220%', pin: true, scrub: true, anticipatePin: 1, invalidateOnRefresh: true, onRefreshInit: layout }
  });
  tl.to(sub, { opacity: 0, y: 20, duration: 0.12 }, 0)
    .fromTo(word, { scale: 1, svgOrigin: () => origin }, { scale: 70, svgOrigin: () => origin, ease: 'power3.in', duration: 0.55 }, 0)
    .to(fill, { opacity: 0, duration: 0.08 }, 0.5)
    .fromTo(st, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' }, 0.6)
    .to({}, { duration: 0.2 });
}

/* ================= 3. about: words light up ================= */
function about() {
  const el = $('.about__text');
  const text = el.textContent.trim();
  el.setAttribute('aria-label', text);
  el.innerHTML = text.split(/\s+/).map((w) => `<span class="word" aria-hidden="true">${w}</span>`).join(' ');
  const words = $$('.word', el);
  if (reduce) { words.forEach((w) => w.classList.add('is-on')); return; }
  ScrollTrigger.create({
    trigger: el, start: 'top 78%', end: 'bottom 45%', scrub: true,
    onUpdate: (s) => { const n = Math.round(s.progress * words.length); words.forEach((w, i) => w.classList.toggle('is-on', i < n)); }
  });
  gsap.from('.about__vision p', { yPercent: 30, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '.about__vision', start: 'top 82%', once: true } });
  gsap.from('.about__facts li', { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1, scrollTrigger: { trigger: '.about__facts', start: 'top 86%', once: true } });
}

/* ================= 4. day: 24 hours ================= */
function day() {
  const stage = $('.day__stage'), canvas = $('.day__canvas'), meter = $('.day__meter');
  const count = $('.day__count'), bar = $('.day__bar i'), steps = $$('.day__step');
  if (reduce) { canvas.style.display = 'none'; meter.style.display = 'none'; return; }
  const ctx = canvas.getContext('2d');
  let W = 1, H = 1, dpr = 1, cx = 0, cy = 0, R = 100, prog = 0;
  const stars = Array.from({ length: 130 }, () => [Math.random(), Math.random() * 0.8, Math.random() * 1.4 + 0.4, Math.random() * 6.28]);
  function size() {
    const b = stage.getBoundingClientRect(); W = b.width; H = b.height; dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = W * dpr; canvas.height = H * dpr;
    const wide = W > 900;
    R = wide ? Math.min(W * 0.2, H * 0.33) : Math.min(W * 0.38, H * 0.2);
    cx = wide ? W * 0.27 : W * 0.5; cy = wide ? H * 0.54 : R + 96;
    meter.style.setProperty('--cx', cx + 'px'); meter.style.setProperty('--cy', cy + 'px'); meter.style.setProperty('--r', R + 'px');
    draw(performance.now());
  }
  function draw(now) {
    const t = 6 + prog * 24, hr = t % 24;
    const dayness = Math.cos(((hr - 13) / 24) * Math.PI * 2) * 0.5 + 0.5;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, `rgb(${Math.round(lerp(22, 122, dayness))},${Math.round(lerp(10, 16, dayness))},${Math.round(lerp(19, 52, dayness))})`);
    bg.addColorStop(1, '#160a13');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    // stars at night
    const na = 1 - dayness;
    if (na > 0.02) {
      ctx.fillStyle = '#ffe9f0';
      stars.forEach((s) => { ctx.globalAlpha = na * (0.35 + 0.65 * Math.abs(Math.sin(now / 900 + s[3]))); ctx.beginPath(); ctx.arc(s[0] * W, s[1] * H, s[2], 0, 6.283); ctx.fill(); });
      ctx.globalAlpha = 1;
    }
    const a0 = (6 / 24) * Math.PI * 2 - Math.PI / 2, a = a0 + prog * Math.PI * 2;
    // halo
    const halo = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.5);
    halo.addColorStop(0, `rgba(255,79,135,${0.1 + 0.14 * dayness})`); halo.addColorStop(1, 'rgba(255,79,135,0)');
    ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(cx, cy, R * 1.5, 0, 6.283); ctx.fill();
    // ticks
    for (let i = 0; i < 96; i++) {
      const ang = (i / 96) * Math.PI * 2 - Math.PI / 2;
      const hourTick = i % 4 === 0, big = i % 24 === 0;
      let rel = (ang - a0) % (Math.PI * 2); if (rel < 0) rel += Math.PI * 2;
      const passed = rel <= prog * Math.PI * 2 + 1e-4;
      const r1 = R, r2 = R - (big ? R * 0.14 : hourTick ? R * 0.08 : R * 0.04);
      ctx.strokeStyle = passed ? 'rgba(255,79,135,.95)' : 'rgba(238,231,226,.22)';
      ctx.lineWidth = big ? 2.5 : hourTick ? 1.6 : 1;
      ctx.beginPath(); ctx.moveTo(cx + Math.cos(ang) * r1, cy + Math.sin(ang) * r1); ctx.lineTo(cx + Math.cos(ang) * r2, cy + Math.sin(ang) * r2); ctx.stroke();
    }
    // outer ring + progress
    ctx.lineWidth = 1.5; ctx.strokeStyle = 'rgba(238,231,226,.16)'; ctx.beginPath(); ctx.arc(cx, cy, R * 1.12, 0, 6.283); ctx.stroke();
    ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.strokeStyle = '#ff4f87'; ctx.beginPath(); ctx.arc(cx, cy, R * 1.12, a0, a); ctx.stroke();
    // marker: sun by day, moon by night
    const mxp = cx + Math.cos(a) * R * 1.12, myp = cy + Math.sin(a) * R * 1.12;
    const col = dayness > 0.5 ? '243,183,100' : '255,143,179';
    const gl = ctx.createRadialGradient(mxp, myp, 0, mxp, myp, R * 0.5);
    gl.addColorStop(0, `rgba(${col},.75)`); gl.addColorStop(0.25, `rgba(${col},.22)`); gl.addColorStop(1, `rgba(${col},0)`);
    ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(mxp, myp, R * 0.5, 0, 6.283); ctx.fill();
    ctx.fillStyle = '#fff3e6'; ctx.beginPath(); ctx.arc(mxp, myp, Math.max(6, R * 0.045), 0, 6.283); ctx.fill();
    // hour labels
    ctx.fillStyle = 'rgba(238,231,226,.5)'; ctx.font = `600 ${Math.max(11, R * 0.075)}px Heebo, Arial`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    [['00', -Math.PI / 2], ['06', 0], ['12', Math.PI / 2], ['18', Math.PI]].forEach(([l, ang]) => ctx.fillText(l, cx + Math.cos(ang) * R * 0.76, cy + Math.sin(ang) * R * 0.76));
  }
  function set(p) {
    prog = p;
    const mins = Math.round((6 + p * 24) * 60 / 5) * 5, hr = Math.floor(mins / 60) % 24, mn = mins % 60;
    count.textContent = `${String(hr).padStart(2, '0')}:${String(mn).padStart(2, '0')}`;
    count.classList.toggle('is-night', hr >= 20 || hr < 6);
    bar.style.transform = `scaleX(${p})`;
    const idx = p < 0.24 ? 0 : p < 0.5 ? 1 : p < 0.76 ? 2 : 3;
    steps.forEach((s, i) => s.classList.toggle('is-on', i === idx));
  }
  size(); addEventListener('resize', size);
  let live = false, raf = 0;
  const loop = (now) => { raf = 0; if (!live) return; draw(now); raf = requestAnimationFrame(loop); };
  ScrollTrigger.create({
    trigger: stage, start: 'top top', end: '+=330%', pin: true, scrub: true, anticipatePin: 1,
    onUpdate: (s) => set(s.progress),
    onRefresh: size
  });
  new IntersectionObserver((es) => { live = es[0].isIntersecting; if (live && !raf) raf = requestAnimationFrame(loop); }).observe(stage);
  set(0);
}

/* ================= 5. services ================= */
function services() {
  const rows = $$('.svc__row');
  if (fine) {
    rows.forEach((r) => {
      r.addEventListener('pointerenter', () => r.classList.add('is-on'));
      r.addEventListener('pointerleave', () => r.classList.remove('is-on'));
    });
  } else if (!reduce) {
    rows.forEach((r) => ScrollTrigger.create({ trigger: r, start: 'top 58%', end: 'bottom 42%', toggleClass: { targets: r, className: 'is-on' } }));
  }
  if (reduce) return;
  gsap.from('.services .h2', { yPercent: 40, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '.services__head', start: 'top 84%', once: true } });
  rows.forEach((r) => {
    gsap.from($('.svc__word', r), { xPercent: 12, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: r, start: 'top 92%', once: true } });
  });
}

/* ================= 6. steps: horizontal ================= */
function steps() {
  const stage = $('.steps__stage'), track = $('.steps__track'), bar = $('.steps__progress i');
  if (reduce) return;
  const dist = () => Math.max(0, track.scrollWidth - stage.clientWidth);
  const tween = gsap.to(track, {
    x: () => dist(), ease: 'none',
    scrollTrigger: {
      trigger: stage, start: 'top top', end: () => '+=' + (dist() + innerHeight * 0.4), pin: true, scrub: true, anticipatePin: 1, invalidateOnRefresh: true,
      onUpdate: (s) => { bar.style.transform = `scaleX(${s.progress})`; }
    }
  });
  $$('.card__art span').forEach((n) => {
    gsap.fromTo(n, { xPercent: -18 }, { xPercent: 18, ease: 'none', scrollTrigger: { trigger: n, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } });
  });
}

/* ================= 7. veil ================= */
function veil() {
  const rows = $$('.veil__rows li');
  if (reduce) { rows.forEach((r) => r.classList.add('is-clear')); return; }
  gsap.from('.veil__title', { yPercent: 35, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.veil', start: 'top 70%', once: true } });
  rows.forEach((row) => {
    ScrollTrigger.create({ trigger: row, start: 'top 60%', once: true, onEnter: () => row.classList.add('is-clear') });
    row.addEventListener('pointerenter', () => row.classList.add('is-clear'));
    row.addEventListener('touchstart', () => row.classList.add('is-clear'), { passive: true });
  });
}

/* ================= 8. marquees ================= */
function marquee() {
  if (reduce) return;
  let v = 0;
  if (lenis) lenis.on('scroll', (e) => { v = e.velocity; });
  $$('.marquee__track').forEach((track) => {
    Array.from(track.children).forEach((p) => { const c = p.cloneNode(true); c.setAttribute('aria-hidden', 'true'); if (c.tabIndex !== undefined) c.tabIndex = -1; track.appendChild(c); });
    const base = parseFloat(track.dataset.speed || '0.045');
    let x = 0, hold = false, half = 1;
    const measure = () => { const g = parseFloat(getComputedStyle(track).columnGap) || 0; half = (track.scrollWidth + g) / 2; };
    measure(); addEventListener('resize', measure); addEventListener('load', measure);
    if (track.querySelector('a')) {
      track.addEventListener('pointerenter', () => { if (fine) hold = true; });
      track.addEventListener('pointerleave', () => { hold = false; });
    }
    gsap.ticker.add((_, dt) => {
      const speed = hold ? 0 : base + Math.min(Math.abs(v) * 0.02, 0.5);
      x -= speed * dt;
      if (-x >= half) x += half;
      track.style.transform = `translate3d(${x}px,0,0)`;
    });
  });
  gsap.ticker.add(() => { v *= 0.9; });
}

/* ================= voices ================= */
function voices() {
  if (reduce) return;
  $$('.voice').forEach((v, i) => {
    const box = $('.voice__img', v), img = $('img', v);
    gsap.fromTo(box, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1.3, ease: 'expo.out', delay: i * 0.12, scrollTrigger: { trigger: v, start: 'top 88%', once: true } });
    gsap.fromTo(img, { yPercent: -12 }, { yPercent: 0, ease: 'none', scrollTrigger: { trigger: v, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  gsap.from('.press__list li', { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, scrollTrigger: { trigger: '.press__list', start: 'top 86%', once: true } });
}

/* ================= misc reveals ================= */
function reveals() {
  if (reduce) return;
  ['.steps__head .h2', '.voices .h2', '.press .h2', '.blog .h2', '.faq .h2', '.contact .h2'].forEach((s) => {
    const el = $(s); if (!el) return;
    gsap.from(el, { yPercent: 35, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 86%', once: true } });
  });
  gsap.from('.faq details', { y: 26, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.07, scrollTrigger: { trigger: '.faq__list', start: 'top 82%', once: true } });
  gsap.from('.form', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.form', start: 'top 86%', once: true } });
}

/* ================= faq ================= */
function faq() {
  $$('.faq details').forEach((d) => {
    const sum = $('summary', d), body = $('p', d);
    sum.addEventListener('click', (e) => {
      if (reduce) return;
      e.preventDefault();
      if (d.open) {
        gsap.to(body, { height: 0, paddingBottom: 0, opacity: 0, duration: 0.4, ease: 'power3.inOut', onComplete: () => { d.open = false; gsap.set(body, { clearProps: 'all' }); ScrollTrigger.refresh(); } });
      } else {
        d.open = true;
        gsap.from(body, { height: 0, paddingBottom: 0, opacity: 0, duration: 0.55, ease: 'power3.out', onComplete: () => { gsap.set(body, { clearProps: 'all' }); ScrollTrigger.refresh(); } });
      }
    });
  });
}

/* ================= form (demo: validates, does not send) ================= */
function form() {
  const f = $('.form'), err = $('.form__error'), done = $('.form__done');
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#f-name'), phone = $('#f-phone'), age = $('#f-age');
    [name, phone].forEach((el) => el.classList.remove('is-bad'));
    const digits = phone.value.replace(/\D/g, '');
    let msg = '', bad = null;
    if (!name.value.trim()) { msg = 'חסר שם או כינוי.'; bad = name; }
    else if (digits.length < 9 || digits.length > 13) { msg = 'מספר הטלפון לא תקין. הקלידי מספר מלא, למשל 0501234567.'; bad = phone; }
    else if (!age.checked) { msg = 'כדי להמשיך צריך לאשר שאת בת 18 ומעלה.'; bad = age; }
    if (msg) { err.textContent = msg; err.hidden = false; if (bad !== age) bad.classList.add('is-bad'); bad.focus(); return; }
    err.hidden = true; done.hidden = false;
    if (!reduce) gsap.from(done, { opacity: 0, duration: 0.5 });
    done.tabIndex = -1; done.focus();
  });
}

/* ================= 11. close ================= */
function closing() {
  const stage = $('.close__stage'), label = $('.close__label');
  if (reduce) { gsap.set('.close__curtain', { scaleX: 1 }); gsap.set(label, { opacity: 1 }); label.classList.add('is-on'); return; }
  const tl = gsap.timeline({
    scrollTrigger: { trigger: stage, start: 'top top', end: '+=160%', pin: true, scrub: true, anticipatePin: 1, onUpdate: (s) => label.classList.toggle('is-on', s.progress > 0.8) }
  });
  tl.fromTo('.close__line', { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.2, ease: 'power2.out' }, 0)
    .to('.close__curtain', { scaleX: 1, duration: 0.5, ease: 'power2.inOut' }, 0.3)
    .to(label, { opacity: 1, duration: 0.15 }, 0.78)
    .from('.close__brand', { yPercent: 40, duration: 0.2, ease: 'power3.out' }, 0.76)
    .to({}, { duration: 0.08 });
}

/* ================= loader + boot ================= */
function boot() {
  chrome();
  const h = hero();
  open(); about(); day(); services(); steps(); voices(); veil(); marquee(); reveals(); faq(); form(); closing();
  ScrollTrigger.refresh();

  const loader = $('.loader');
  const start = () => { document.body.classList.remove('is-loading'); if (lenis) lenis.start(); h.intro(); };
  if (reduce || !loader) { if (loader) loader.remove(); start(); return; }
  const num = $('.loader__count span'), o = { v: 0 };
  gsap.timeline()
    .to(o, { v: 100, duration: 1.3, ease: 'power2.inOut', onUpdate: () => { num.textContent = Math.round(o.v); } })
    .to('.loader__inner', { opacity: 0, y: -20, duration: 0.35, ease: 'power2.in' })
    .to('.loader__half', { scaleX: 0, duration: 1.1, ease: 'expo.inOut' }, '-=0.05')
    .add(start, '-=0.75')
    .add(() => loader.remove());
}
const fontsReady = document.fonts && document.fonts.load
  ? Promise.all([document.fonts.load('900 100px Heebo', 'Opulent'), document.fonts.load('900 100px Heebo', 'אב'), document.fonts.ready])
  : Promise.resolve();
Promise.race([fontsReady, new Promise((r) => setTimeout(r, 2500))]).then(boot, boot);
addEventListener('load', () => ScrollTrigger.refresh());
