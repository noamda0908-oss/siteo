/* קליק: האפליקציה */
(function () {
  const SUPA_URL = 'https://dndqljbibficfscylteq.supabase.co';
  const SUPA_KEY = 'sb_publishable_GaX5Eik7yRR-m8JtWmZ1Rg_oUZo8Edt';
  const sb = supabase.createClient(SUPA_URL, SUPA_KEY);
  const HOME = location.origin + location.pathname;
  const { burst, snap, makeSwipe, reduce } = window.KlikFx;
  const $app = document.getElementById('app'), $landing = document.getElementById('landing');
  const $sheet = document.getElementById('sheet'), $fx = document.getElementById('matchfx');
  const S = { session: null, me: null, questions: null, deck: [], unread: 0, chan: null, chatChan: null };
  const MIN_Q = 8, LIKE_CAP = 30;

  const CITIES = [['תל אביב',32.08,34.78],['ירושלים',31.77,35.21],['חיפה',32.79,34.99],['ראשון לציון',31.97,34.79],['פתח תקווה',32.09,34.89],['אשדוד',31.80,34.65],['נתניה',32.33,34.86],['באר שבע',31.25,34.79],['בני ברק',32.08,34.83],['חולון',32.02,34.78],['רמת גן',32.07,34.82],['אשקלון',31.67,34.57],['רחובות',31.89,34.81],['בת ים',32.02,34.75],['בית שמש',31.75,34.99],['כפר סבא',32.18,34.91],['הרצליה',32.16,34.84],['חדרה',32.44,34.92],['מודיעין',31.90,35.01],['נצרת',32.70,35.30],['לוד',31.95,34.89],['רמלה',31.93,34.87],['רעננה',32.18,34.87],['גבעתיים',32.07,34.81],['הוד השרון',32.15,34.89],['קריית גת',31.61,34.77],['נהריה',33.01,35.09],['קריית אתא',32.81,35.11],['אום אל-פחם',32.52,35.15],['עפולה',32.61,35.29],['אילת',29.56,34.95],['נס ציונה',31.93,34.80],['עכו',32.93,35.08],['אלעד',32.05,34.95],['רמת השרון',32.15,34.84],['כרמיאל',32.92,35.30],['יבנה',31.88,34.74],['טבריה',32.79,35.53],['קריית מוצקין',32.84,35.08],['שפרעם',32.81,35.17],['קריית ים',32.85,35.07],['קריית ביאליק',32.83,35.09],['קריית אונו',32.06,34.86],['מעלה אדומים',31.78,35.30],['אור יהודה',32.03,34.86],['צפת',32.96,35.50],['נתיבות',31.42,34.59],['דימונה',31.07,35.03],['אופקים',31.31,34.62],['שדרות',31.52,34.60],['יהוד',32.03,34.89],['ראש העין',32.10,34.96],['קריית שמונה',33.21,35.57],['מגדל העמק',32.68,35.24],['טירת כרמל',32.76,34.97],['נשר',32.77,35.04],['קריית מלאכי',31.73,34.75],['ערד',31.26,35.21],['זכרון יעקב',32.57,34.95],['פרדס חנה',32.47,34.97],['גדרה',31.81,34.78],['שוהם',32.00,34.95],['מבשרת ציון',31.80,35.15],['אריאל',32.10,35.19],['שלומי',33.07,35.14],['בית שאן',32.50,35.50],['מצפה רמון',30.61,34.80],['כפר יונה',32.32,34.93],['גן יבנה',31.79,34.71],['טייבה',32.27,35.01],['רהט',31.39,34.75],['סח\'נין',32.86,35.30]];
  const GOALS = { serious: 'קשר רציני', casual: 'משהו קליל', friends: 'להכיר חברים', unsure: 'נראה לאן זה הולך' };
  const PROMPTS = ['הדרך הכי מהירה ללב שלי', 'יום מושלם בשבילי', 'משהו שלא תנחשו עליי', 'אני מחפש/ת מישהו/י ש...'];
  const ERR = {
    AUTH: 'צריך להתחבר מחדש', NO_PROFILE: 'קודם משלימים פרופיל', NOT_FOUND: 'הפרופיל הזה כבר לא זמין',
    LIMIT_LIKES: 'נגמרו הלייקים להיום', LIMIT_SUPER: 'נגמרו הסופר-קליקים להיום', PREMIUM: 'זמין בקליק פלוס',
    NOTHING: 'אין קלף להחזיר', BAD_PHOTO: 'התמונה לא נשמרה, נסו שוב'
  };

  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const photo = p => p ? `${SUPA_URL}/storage/v1/object/public/klik-photos/${encodeURI(p)}` : '';
  const bg = (p, extra = '') => `style="${extra}${p ? `background-image:url('${photo(p)}')` : ''}"`;
  const errMsg = e => { const m = (e && e.message) || ''; for (const k in ERR) if (m.includes(k)) return ERR[k]; return 'משהו השתבש. נסו שוב'; };
  const MARK = '<svg class="mark" viewBox="0 0 48 48" aria-hidden="true"><path class="mark__a" d="M24 4A20 20 0 0 0 24 44L24 30A6 6 0 0 0 24 18Z"/><path class="mark__b" d="M24 4A20 20 0 0 1 24 44L24 30A6 6 0 0 0 24 18Z"/></svg>';
  const ring = p => p == null ? '' : `<div class="ring" style="--p:${p}" title="אחוז התאמה"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52"/><circle class="ring__v" cx="60" cy="60" r="52" pathLength="100"/></svg><b>${p}%</b></div>`;
  let toastT;
  function toast(t) { const el = document.getElementById('toast'); el.textContent = t; el.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('on'), 2800); }
  async function rpc(fn, args) { const { data, error } = await sb.rpc(fn, args); if (error) throw error; return data; }
  const go = h => { if (location.hash === h) route(); else location.hash = h; };
  function enter(sel) { if (!reduce) gsap.from($app.querySelectorAll(sel), { y: 26, opacity: 0, duration: 0.5, ease: 'back.out(1.5)', stagger: 0.05, clearProps: 'all' }); }

  function shell(html, tab) {
    $app.innerHTML = html + (tab ? tabs(tab) : '');
    window.scrollTo(0, 0);
  }
  function tabs(on) {
    const t = (id, label, icon, badge) => `<a href="#/${id}" class="${on === id ? 'on' : ''}"><svg viewBox="0 0 24 24">${icon}</svg>${label}${badge ? `<span class="dot">${badge}</span>` : ''}</a>`;
    return `<nav class="tabs" aria-label="ניווט">
      ${t('deck', 'קלפים', '<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 17h6"/>')}
      ${t('likes', 'סימנו אותי', '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.500-7 10-7 10z"/>')}
      ${t('matches', 'צ\'אטים', '<path d="M4 5h16v11H9l-5 4z"/>', S.unread || '')}
      ${t('me', 'אני', '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 4-7 8-7s7 2 8 7"/>')}
    </nav>`;
  }

  // ================= sheets =================
  function openSheet(html) {
    $sheet.innerHTML = `<div class="sheet__in"><button class="sheet__x" aria-label="סגירה">✕</button>${html}</div>`;
    $sheet.hidden = false;
    if (!reduce) gsap.fromTo($sheet.firstChild, { yPercent: 100 }, { yPercent: 0, duration: 0.45, ease: 'power3.out' });
    $sheet.querySelector('.sheet__x').onclick = closeSheet;
    $sheet.onclick = e => { if (e.target === $sheet) closeSheet(); };
    return $sheet.firstChild;
  }
  function closeSheet() { $sheet.hidden = true; $sheet.innerHTML = ''; }

  async function profileSheet(id) {
    let p;
    try { p = await rpc('klik_profile', { target: id }); } catch (e) { return toast(errMsg(e)); }
    const el = openSheet(`<div class="pv">
      ${p.photos.map(x => `<div class="pv__ph" ${bg(x)}></div>`).join('')}
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px">
        <div><h2>${esc(p.name)}, ${p.age}</h2><p class="muted">${esc(p.city)}${p.km != null ? ` · ${p.km} ק"מ ממך` : ''} · ${GOALS[p.goal]}</p></div>${ring(p.pct)}
      </div>
      ${p.bio ? `<h3>קצת עליי</h3><p>${esc(p.bio)}</p>` : ''}
      ${(p.prompts || []).filter(x => x.a).map(x => `<div class="pv__c mt"><small>${esc(x.q)}</small>${esc(x.a)}</div>`).join('')}
      ${p.common.length ? `<h3>איפה יש לכם קליק</h3>${p.common.map(c => `<div class="pv__c"><small>${esc(c.q)}</small>${esc(c.a)}</div>`).join('')}` : ''}
      <div class="dz">${p.match_id ? '<button data-a="unmatch">ביטול התאמה</button>' : ''}<button class="red" data-a="report">דיווח וחסימה</button></div>
    </div>`);
    el.querySelector('[data-a=report]').onclick = () => reportSheet(p);
    const um = el.querySelector('[data-a=unmatch]');
    if (um) um.onclick = async () => {
      if (!confirm(`לבטל את ההתאמה עם ${p.name}? השיחה תימחק.`)) return;
      try { await rpc('klik_unmatch', { mid: p.match_id }); closeSheet(); toast('ההתאמה בוטלה'); go('#/matches'); } catch (e) { toast(errMsg(e)); }
    };
  }
  function reportSheet(p) {
    const reasons = ['פרופיל מזויף', 'תוכן פוגעני', 'הטרדה', 'נראה מתחת לגיל 18', 'ספאם או הונאה', 'אחר'];
    const el = openSheet(`<div class="prose"><h2>דיווח על ${esc(p.name)}</h2><p>הפרופיל ייחסם ולא תראו אחד את השנייה יותר. הדיווח מגיע לצוות קליק.</p>
      <div class="chips mt">${reasons.map(r => `<button class="chip">${r}</button>`).join('')}</div>
      <div class="field"><label for="rd">פרטים (לא חובה)</label><textarea id="rd" class="inp" maxlength="1000"></textarea></div>
      <button class="btn btn--pink btn--block mt2" id="rs" disabled>דיווח וחסימה</button></div>`);
    let reason = null;
    el.querySelectorAll('.chip').forEach(c => c.onclick = () => { reason = c.textContent; el.querySelectorAll('.chip').forEach(x => x.classList.toggle('on', x === c)); el.querySelector('#rs').disabled = false; });
    el.querySelector('#rs').onclick = async () => {
      try { await rpc('klik_block', { target: p.id, reason, details: el.querySelector('#rd').value }); closeSheet(); toast('הדיווח התקבל והפרופיל נחסם'); S.deck = S.deck.filter(c => c.id !== p.id); go(location.hash.startsWith('#/chat') ? '#/matches' : location.hash); }
      catch (e) { toast(errMsg(e)); }
    };
  }

  // ================= auth =================
  function authScreen(mode) {
    const signup = mode === 'signup', forgot = mode === 'forgot', reset = mode === 'reset';
    shell(`<section class="scr scr--full auth">
      <a class="brand" href="#">${MARK}<span class="brand__name">קליק</span></a>
      <p class="center">${signup ? 'פותחים פרופיל בחינם' : forgot ? 'נשלח לכם קישור לאיפוס סיסמה' : reset ? 'בוחרים סיסמה חדשה' : 'טוב שחזרתם'}</p>
      <form id="af" novalidate>
        ${reset ? '' : '<div class="field"><label for="em">אימייל</label><input class="inp" id="em" type="email" autocomplete="email" dir="ltr" required></div>'}
        ${forgot ? '' : `<div class="field"><label for="pw">${reset ? 'סיסמה חדשה' : 'סיסמה'}</label><input class="inp" id="pw" type="password" autocomplete="${signup || reset ? 'new-password' : 'current-password'}" dir="ltr" minlength="8" required></div>`}
        ${signup ? '<label class="check"><input type="checkbox" id="ok"><span>אני בן/בת 18 ומעלה ומסכימ/ה ל<a href="#/terms">תנאי השימוש</a> ול<a href="#/privacy">מדיניות הפרטיות</a></span></label>' : ''}
        <p class="err" id="ae" role="alert"></p>
        <button class="btn btn--sun btn--block btn--lg">${signup ? 'הרשמה' : forgot ? 'שליחת קישור' : reset ? 'שמירת סיסמה' : 'כניסה'}</button>
      </form>
      ${forgot || reset ? '' : '<button class="btn btn--ghost btn--block mt" id="gg">המשך עם Google</button>'}
      <p class="center mt2">${signup ? 'כבר רשומים? <a href="#/login">כניסה</a>' : forgot || reset ? '<a href="#/login">חזרה לכניסה</a>' : 'חדשים כאן? <a href="#/signup">הרשמה</a> · <a href="#/forgot">שכחתי סיסמה</a>'}</p>
    </section>`);
    enter('.auth > *');
    const err = t => $app.querySelector('#ae').textContent = t;
    const gg = $app.querySelector('#gg');
    if (gg) gg.onclick = () => {
      if (signup && !$app.querySelector('#ok').checked) return err('צריך לאשר גיל 18+ ואת התנאים');
      sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: HOME } });
    };
    $app.querySelector('#af').onsubmit = async e => {
      e.preventDefault(); err('');
      const email = ($app.querySelector('#em') || {}).value?.trim(), password = ($app.querySelector('#pw') || {}).value;
      if (!reset && !/^\S+@\S+\.\S+$/.test(email || '')) return err('כתובת האימייל לא תקינה');
      if (!forgot && (password || '').length < 8) return err('הסיסמה צריכה לפחות 8 תווים');
      if (signup && !$app.querySelector('#ok').checked) return err('צריך לאשר גיל 18+ ואת התנאים');
      const btn = e.target.querySelector('button'); btn.disabled = true;
      try {
        if (signup) {
          const { data, error } = await sb.auth.signUp({ email, password, options: { emailRedirectTo: HOME } });
          if (error) throw error;
          if (!data.session) { $app.querySelector('#af').innerHTML = '<p class="center mt2" style="font-size:1.2rem">שלחנו לכם מייל אימות.<br>לוחצים על הקישור שבו וממשיכים מכאן.</p>'; return; }
        } else if (forgot) {
          const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: HOME }); if (error) throw error;
          $app.querySelector('#af').innerHTML = '<p class="center mt2" style="font-size:1.2rem">אם הכתובת רשומה אצלנו, נשלח אליה קישור לאיפוס.</p>'; return;
        } else if (reset) {
          const { error } = await sb.auth.updateUser({ password }); if (error) throw error; toast('הסיסמה עודכנה'); go('#/deck');
        } else {
          const { error } = await sb.auth.signInWithPassword({ email, password }); if (error) throw error;
        }
      } catch (ex) {
        const m = ex.message || '';
        err(/Invalid login/i.test(m) ? 'אימייל או סיסמה שגויים' : /already registered/i.test(m) ? 'הכתובת הזאת כבר רשומה. נסו להתחבר' : /not confirmed/i.test(m) ? 'צריך לאשר את המייל לפני הכניסה' : /rate|seconds/i.test(m) ? 'יותר מדי ניסיונות. נסו שוב בעוד רגע' : /weak|password/i.test(m) ? 'הסיסמה חלשה מדי' : 'משהו השתבש. נסו שוב');
      } finally { btn.disabled = false; }
    };
  }

  // ================= photos =================
  function shrink(file) {
    return new Promise((res, rej) => {
      const img = new Image(), url = URL.createObjectURL(file);
      img.onload = () => {
        const k = Math.min(1, 1280 / Math.max(img.width, img.height)), c = document.createElement('canvas');
        c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url);
        c.toBlob(b => b ? res(b) : rej(new Error('img')), 'image/jpeg', 0.84);
      };
      img.onerror = () => rej(new Error('img')); img.src = url;
    });
  }
  function photoGrid(host, list, onChange) {
    const draw = () => {
      host.innerHTML = Array.from({ length: 6 }, (_, i) => list[i]
        ? `<div class="ph" ${bg(list[i])}><button data-rm="${i}" aria-label="הסרת תמונה">✕</button></div>`
        : `<label class="ph" aria-label="הוספת תמונה">+<input type="file" accept="image/jpeg,image/png,image/webp"></label>`).join('');
      host.querySelectorAll('[data-rm]').forEach(b => b.onclick = async () => {
        const [p] = list.splice(+b.dataset.rm, 1); draw(); onChange();
        sb.storage.from('klik-photos').remove([p]);
      });
      host.querySelectorAll('input').forEach(inp => inp.onchange = async () => {
        const f = inp.files[0]; if (!f) return;
        const cell = inp.parentNode; cell.classList.add('busy');
        try {
          const blob = await shrink(f), path = `${S.session.user.id}/${crypto.randomUUID()}.jpg`;
          const { error } = await sb.storage.from('klik-photos').upload(path, blob, { contentType: 'image/jpeg' });
          if (error) throw error;
          list.push(path); onChange();
        } catch (e) { toast('התמונה לא עלתה. נסו תמונה אחרת'); }
        draw();
      });
    };
    draw();
  }

  // ================= questions =================
  async function loadQuestions() {
    if (!S.questions) { const { data, error } = await sb.from('klik_questions').select('*').order('sort'); if (error) throw error; S.questions = data; }
    const { data: mine, error } = await sb.from('klik_answers').select('question_id'); if (error) throw error;
    const done = new Set(mine.map(a => a.question_id));
    return S.questions.filter(q => !done.has(q.id));
  }
  function questionCard(host, q, onSaved) {
    const st = { answer: null, accepts: new Set(), imp: 10 };
    const IMP = [[0, 'לא משנה'], [1, 'קצת'], [10, 'חשוב'], [50, 'קריטי']];
    host.innerHTML = `<div class="qcard"><h3>${esc(q.text)}</h3>
      <div class="chips" data-g="a">${q.options.map((o, i) => `<button class="chip" data-i="${i}">${esc(o)}</button>`).join('')}</div>
      <div data-more hidden>
        <h4>אילו תשובות מתאימות לכם אצל הצד השני?</h4>
        <div class="chips" data-g="acc">${q.options.map((o, i) => `<button class="chip" data-i="${i}">${esc(o)}</button>`).join('')}</div>
        <h4>כמה זה חשוב לכם?</h4>
        <div class="chips" data-g="imp">${IMP.map(([v, l]) => `<button class="chip${v === 10 ? ' on' : ''}" data-v="${v}">${l}</button>`).join('')}</div>
        <button class="btn btn--grape btn--block mt2" data-save>שמירה והמשך</button>
      </div></div>`;
    if (!reduce) gsap.from(host.firstChild, { x: -60, opacity: 0, rotation: -3, duration: 0.45, ease: 'back.out(1.4)' });
    const more = host.querySelector('[data-more]');
    const paint = () => {
      host.querySelectorAll('[data-g=a] .chip').forEach(c => c.classList.toggle('on', +c.dataset.i === st.answer));
      host.querySelectorAll('[data-g=acc] .chip').forEach(c => c.classList.toggle('on', st.accepts.has(+c.dataset.i)));
      host.querySelectorAll('[data-g=imp] .chip').forEach(c => c.classList.toggle('on', +c.dataset.v === st.imp));
    };
    host.querySelector('[data-g=a]').onclick = e => {
      const c = e.target.closest('.chip'); if (!c) return;
      st.answer = +c.dataset.i; if (!st.accepts.size) st.accepts.add(st.answer);
      if (more.hidden) { more.hidden = false; if (!reduce) gsap.from(more, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.out', clearProps: 'all' }); }
      paint();
    };
    host.querySelector('[data-g=acc]').onclick = e => { const c = e.target.closest('.chip'); if (!c) return; const i = +c.dataset.i; st.accepts.has(i) ? st.accepts.delete(i) : st.accepts.add(i); paint(); };
    host.querySelector('[data-g=imp]').onclick = e => { const c = e.target.closest('.chip'); if (!c) return; st.imp = +c.dataset.v; paint(); };
    host.querySelector('[data-save]').onclick = async e => {
      const all = q.options.map((_, i) => i);
      const accepts = st.imp === 0 || !st.accepts.size ? all : [...st.accepts];
      e.target.disabled = true;
      const { error } = await sb.from('klik_answers').upsert({ user_id: S.session.user.id, question_id: q.id, answer: st.answer, accepts, importance: st.imp });
      if (error) { e.target.disabled = false; return toast('התשובה לא נשמרה. נסו שוב'); }
      onSaved();
    };
  }
  async function questionsScreen() {
    shell(`<section class="scr"><div class="bar"><a class="back" href="#/me" aria-label="חזרה">→</a><h1>שאלות</h1><span></span></div>
      <p class="muted">כל תשובה מדייקת את אחוזי ההתאמה שלכם. התשובות המשותפות מוצגות לפרופילים שמתאימים לכם.</p><div id="qh"></div></section>`, 'me');
    let left; try { left = await loadQuestions(); } catch (e) { return toast(errMsg(e)); }
    const host = $app.querySelector('#qh');
    const next = () => {
      const q = left.shift();
      if (!q) { host.innerHTML = '<div class="empty"><h2>עניתם על הכל</h2><p>שאלות חדשות יתווספו בהמשך.</p><a class="btn btn--grape" href="#/deck">חזרה לקלפים</a></div>'; return; }
      questionCard(host, q, next);
    };
    next();
  }

  // ================= onboarding =================
  const ob = { step: 0, data: {}, photos: [], qLeft: null, qDone: 0 };
  async function onboarding() {
    const me = S.me;
    if (me && !ob.init) { ob.init = true; ob.photos = [...(me.photos || [])]; ob.qDone = me.answered || 0; ob.step = me.photos?.length ? 6 : 5; }
    const steps = [stName, stBirth, stGender, stCity, stGoal, stPhotos, stBio, stQuestions];
    const total = steps.length;
    shell(`<section class="scr scr--full"><div class="bar">${ob.step > 0 && ob.step < 5 ? '<button class="back" id="ob-b" aria-label="חזרה">→</button>' : '<span class="brand" style="color:var(--grape)">' + MARK + '</span>'}
      <div class="prog"><i style="width:${Math.round((ob.step + 1) / total * 100)}%"></i></div></div><div class="step" id="st"></div></section>`);
    const bb = $app.querySelector('#ob-b'); if (bb) bb.onclick = () => { ob.step--; onboarding(); };
    const host = $app.querySelector('#st');
    await steps[ob.step](host);
    if (!reduce) gsap.from(host.children, { x: -40, opacity: 0, duration: 0.45, ease: 'back.out(1.4)', stagger: 0.06, clearProps: 'all' });
  }
  const nextStep = () => { ob.step++; onboarding(); };
  const foot = (label = 'המשך') => `<div class="step__foot"><p class="err" id="oe" role="alert"></p><button class="btn btn--grape btn--block btn--lg" id="on">${label}</button></div>`;
  const oerr = t => { const e = $app.querySelector('#oe'); if (e) e.textContent = t; };

  function stName(h) {
    h.innerHTML = `<h2>איך קוראים לך?</h2><p class="muted">השם הפרטי שיופיע על הקלף שלך.</p><div class="field"><input class="inp" id="nm" maxlength="30" autocomplete="given-name" value="${esc(ob.data.name || '')}" aria-label="שם פרטי"></div>${foot()}`;
    h.querySelector('#on').onclick = () => { const v = h.querySelector('#nm').value.trim(); if (v.length < 2) return oerr('צריך שם של לפחות שתי אותיות'); ob.data.name = v; nextStep(); };
  }
  function stBirth(h) {
    const now = new Date().getFullYear(), [y, m, d] = (ob.data.birthdate || '').split('-');
    const opt = (a, b, sel, pad) => { let s = ''; for (let i = a; a < b ? i <= b : i >= b; a < b ? i++ : i--) s += `<option ${+sel === i ? 'selected' : ''} value="${String(i).padStart(pad, '0')}">${i}</option>`; return s; };
    h.innerHTML = `<h2>מתי נולדת?</h2><p class="muted">קליק פתוח מגיל 18. על הקלף יופיע רק הגיל.</p>
      <div class="row field"><select class="inp" id="bd" aria-label="יום"><option value="">יום</option>${opt(1, 31, d, 2)}</select>
      <select class="inp" id="bm" aria-label="חודש"><option value="">חודש</option>${opt(1, 12, m, 2)}</select>
      <select class="inp" id="by" aria-label="שנה"><option value="">שנה</option>${opt(now - 18, now - 90, y, 4)}</select></div>${foot()}`;
    h.querySelector('#on').onclick = () => {
      const D = h.querySelector('#bd').value, M = h.querySelector('#bm').value, Y = h.querySelector('#by').value;
      if (!D || !M || !Y) return oerr('בוחרים יום, חודש ושנה');
      const dt = new Date(`${Y}-${M}-${D}T00:00:00`); if (dt.getDate() !== +D) return oerr('התאריך הזה לא קיים');
      const lim = new Date(); lim.setFullYear(lim.getFullYear() - 18);
      if (dt > lim) return oerr('קליק פתוח רק מגיל 18');
      ob.data.birthdate = `${Y}-${M}-${D}`; nextStep();
    };
  }
  function pick(h, sel, key) {
    h.querySelectorAll(sel + ' .chip').forEach(c => c.onclick = () => { ob.data[key] = c.dataset.v; h.querySelectorAll(sel + ' .chip').forEach(x => x.classList.toggle('on', x === c)); });
  }
  const chipset = (id, map, cur) => `<div class="chips" id="${id}">${Object.entries(map).map(([v, l]) => `<button class="chip${cur === v ? ' on' : ''}" data-v="${v}">${l}</button>`).join('')}</div>`;
  function stGender(h) {
    h.innerHTML = `<h2>אני</h2>${chipset('g1', { woman: 'אישה', man: 'גבר', other: 'אחר' }, ob.data.gender)}
      <h2 class="mt2">רוצה להכיר</h2>${chipset('g2', { men: 'גברים', women: 'נשים', everyone: 'את כולם' }, ob.data.seeking)}${foot()}`;
    pick(h, '#g1', 'gender'); pick(h, '#g2', 'seeking');
    h.querySelector('#on').onclick = () => { if (!ob.data.gender || !ob.data.seeking) return oerr('בוחרים אחד מכל שורה'); nextStep(); };
  }
  function citySelect(cur) { return `<select class="inp" id="ct" aria-label="עיר"><option value="">בחירת עיר</option>${CITIES.map(c => c[0]).sort((a, b) => a.localeCompare(b, 'he')).map(c => `<option ${cur === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select>`; }
  function stCity(h) {
    h.innerHTML = `<h2>איפה גרים?</h2><p class="muted">בוחרים את העיר הקרובה אליכם. לפי זה נחשב מרחק.</p><div class="field">${citySelect(ob.data.city)}</div>${foot()}`;
    h.querySelector('#on').onclick = () => { const c = CITIES.find(x => x[0] === h.querySelector('#ct').value); if (!c) return oerr('בוחרים עיר מהרשימה'); Object.assign(ob.data, { city: c[0], lat: c[1], lng: c[2] }); nextStep(); };
  }
  function stGoal(h) {
    h.innerHTML = `<h2>מה מחפשים?</h2>${chipset('gl', GOALS, ob.data.goal)}${foot()}`;
    pick(h, '#gl', 'goal');
    h.querySelector('#on').onclick = async e => {
      if (!ob.data.goal) return oerr('בוחרים אפשרות אחת');
      e.target.disabled = true;
      try { S.me = await rpc('klik_save_profile', { p: ob.data }); ob.init = true; nextStep(); } catch (ex) { e.target.disabled = false; oerr(/birthdate/.test(ex.message) ? 'קליק פתוח רק מגיל 18' : errMsg(ex)); }
    };
  }
  function stPhotos(h) {
    h.innerHTML = `<h2>תמונות</h2><p class="muted">לפחות תמונה אחת ברורה שלכם. הראשונה היא זו שיראו על הקלף.</p><div class="photos" id="pg"></div>${foot()}`;
    photoGrid(h.querySelector('#pg'), ob.photos, () => {});
    h.querySelector('#on').onclick = async e => {
      if (!ob.photos.length) return oerr('מעלים לפחות תמונה אחת');
      e.target.disabled = true;
      try { S.me = await rpc('klik_save_profile', { p: { photos: ob.photos } }); nextStep(); } catch (ex) { e.target.disabled = false; oerr(errMsg(ex)); }
    };
  }
  function stBio(h) {
    h.innerHTML = `<h2>כמה מילים</h2><p class="muted">לא חובה, אבל פרופילים עם טקסט מקבלים יותר קליקים.</p>
      <div class="field"><label for="bi">קצת עליי</label><textarea class="inp" id="bi" maxlength="500">${esc(S.me?.bio || '')}</textarea></div>
      <div class="field"><label for="pq">שאלה לבחירה</label><select class="inp" id="pq">${PROMPTS.map(p => `<option>${p}</option>`).join('')}</select><input class="inp" id="pa" maxlength="140" aria-label="התשובה שלכם"></div>${foot()}`;
    h.querySelector('#on').onclick = async e => {
      const a = h.querySelector('#pa').value.trim();
      e.target.disabled = true;
      try { S.me = await rpc('klik_save_profile', { p: { bio: h.querySelector('#bi').value.trim(), prompts: a ? [{ q: h.querySelector('#pq').value, a }] : [] } }); nextStep(); } catch (ex) { e.target.disabled = false; oerr(errMsg(ex)); }
    };
  }
  async function stQuestions(h) {
    if (!ob.qLeft) ob.qLeft = await loadQuestions();
    const need = Math.max(0, MIN_Q - ob.qDone);
    if (!need || !ob.qLeft.length) {
      h.innerHTML = '<div class="empty"><div class="spin">' + MARK + '</div></div>';
      try { S.me = await rpc('klik_save_profile', { p: { onboarded: true } }); go('#/deck'); toast('הפרופיל מוכן. יאללה'); } catch (ex) { toast(errMsg(ex)); }
      return;
    }
    h.innerHTML = `<h2>${need === MIN_Q ? MIN_Q + ' שאלות קצרות' : 'עוד ' + need}</h2><p class="muted">מהתשובות נחשב אחוז ההתאמה שלכם עם כל פרופיל. תשובות משותפות מוצגות לפרופילים שמתאימים לכם.</p><div id="qh"></div>`;
    questionCard(h.querySelector('#qh'), ob.qLeft.shift(), () => { ob.qDone++; stQuestions(h); });
  }

  // ================= deck =================
  function cardEl(c) {
    const el = document.createElement('div');
    el.className = 'card'; el._c = c; el._i = 0;
    el.style.backgroundImage = `url('${photo(c.photos[0])}')`;
    el.innerHTML = `${c.photos.length > 1 ? `<div class="card__bars">${c.photos.map((_, i) => `<i class="${i ? '' : 'on'}"></i>`).join('')}</div>` : ''}
      <span class="stamp stamp--yes">קליק</span><span class="stamp stamp--no">לא</span>
      <div class="card__info"><div>${c.super ? '<span class="tag">שלח/ה לך סופר-קליק</span><br>' : ''}<h2>${esc(c.name)}, ${c.age}</h2>
      <p>${esc(c.city)}${c.km != null ? ` · ${c.km} ק"מ` : ''} · ${GOALS[c.goal]}</p>${c.bio ? `<p class="card__bio">${esc(c.bio)}</p>` : ''}</div>${ring(c.pct)}</div>`;
    return el;
  }
  async function deckScreen() {
    shell(`<section class="scr"><div class="bar"><span class="brand">${MARK}<span class="brand__name">קליק</span></span><a class="btn btn--sun btn--sm" href="#/plus">פלוס</a></div>
      <div class="deck" id="dk"><div class="empty"><div class="spin">${MARK}</div></div></div>
      <div class="acts" id="ac" hidden>
        <button class="round round--sm round--back" data-a="rewind" aria-label="החזרת הקלף הקודם"><svg viewBox="0 0 24 24"><path d="M9 7 4 12l5 5M4 12h10a6 6 0 0 1 0 12"/></svg></button>
        <button class="round round--no" data-a="pass" aria-label="לא מתאים"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
        <button class="round round--sm round--star" data-a="super" aria-label="סופר-קליק"><svg viewBox="0 0 24 24"><path d="m12 2 2.9 6.6 7.1.7-5.400 4.800 1.600 7L12 17.400 5.800 21.100l1.600-7L2 9.300l7.100-.7z"/></svg></button>
        <button class="round round--yes" data-a="like" aria-label="מתאים">${MARK}</button>
      </div><p class="left" id="lf"></p></section>`, 'deck');
    const dk = $app.querySelector('#dk'), ac = $app.querySelector('#ac');
    try { if (S.deck.length < 3) S.deck = await rpc('klik_deck', { lim: 20 }); } catch (e) { toast(errMsg(e)); }
    if (!location.hash.startsWith('#/deck')) return;
    dk.innerHTML = '';
    const left = n => { if (!S.me.premium && n != null) $app.querySelector('#lf').textContent = `נשארו ${n} לייקים להיום`; };
    left(LIKE_CAP - (S.me.likes_today || 0));

    function empty() {
      ac.hidden = true;
      dk.innerHTML = `<div class="empty"><h2>ראיתם את כולם</h2><p>קליק רק התחיל, ופרופילים חדשים מצטרפים כל יום. שתפו חברים כדי שיהיה עם מי לעשות קליק.</p>
        <button class="btn btn--grape" id="sh">שיתוף קליק</button><a class="link" href="#/me">הרחבת טווח הגילאים והמרחק</a></div>`;
      dk.querySelector('#sh').onclick = async () => { const d = { title: 'קליק', text: 'הצטרפו אליי לקליק', url: HOME }; try { if (navigator.share) await navigator.share(d); else { await navigator.clipboard.writeText(HOME); toast('הקישור הועתק'); } } catch (_) {} };
    }
    async function act(c, kind) {
      S.deck = S.deck.filter(x => x.id !== c.id);
      try {
        const r = await rpc('klik_swipe', { target: c.id, kind });
        if (kind !== 'pass') { S.me.likes_today = (S.me.likes_today || 0) + 1; left(r.likes_left); }
        if (r.matched) matchFx(c, r.match_id);
      } catch (e) {
        toast(errMsg(e)); S.deck.unshift(c); paint();
        if (/LIMIT/.test(e.message)) go('#/plus');
        return;
      }
      if (S.deck.length < 3) { try { const more = await rpc('klik_deck', { lim: 20 }); const have = new Set(S.deck.map(x => x.id)); S.deck.push(...more.filter(x => !have.has(x.id))); } catch (_) {} }
      paint();
    }
    function paint() {
      if (!location.hash.startsWith('#/deck')) return;
      if (!S.deck.length) return empty();
      ac.hidden = false;
      const want = S.deck.slice(0, 2), have = [...dk.querySelectorAll('.card')];
      have.forEach(el => { if (!want.find(c => c.id === el._c.id)) el.remove(); });
      want.forEach((c, d) => {
        let el = [...dk.querySelectorAll('.card')].find(x => x._c.id === c.id);
        if (!el) { el = cardEl(c); d ? dk.prepend(el) : dk.append(el); }
        gsap.to(el, { scale: d ? 0.94 : 1, y: d ? 18 : 0, duration: 0.45, ease: 'back.out(1.6)' });
        if (!d && !el._sw) el._sw = makeSwipe(el, {
          onLike: () => act(c, 'like'), onPass: () => act(c, 'pass'),
          onTap: e => {
            const r = el.getBoundingClientRect();
            if (e.clientY > r.top + r.height * 0.66 || c.photos.length < 2) return profileSheet(c.id);
            const dir = e.clientX < r.left + r.width / 2 ? 1 : -1;
            el._i = Math.max(0, Math.min(c.photos.length - 1, el._i + dir));
            el.style.backgroundImage = `url('${photo(c.photos[el._i])}')`;
            el.querySelectorAll('.card__bars i').forEach((b, i) => b.classList.toggle('on', i === el._i));
          }
        });
      });
    }
    paint();
    ac.onclick = async e => {
      const b = e.target.closest('[data-a]'); if (!b) return;
      const topEl = dk.querySelector('.card:last-child'), a = b.dataset.a;
      if (a === 'rewind') {
        try { const c = await rpc('klik_rewind'); S.deck.unshift(c); paint(); gsap.from(dk.querySelector('.card:last-child'), { x: -innerWidth, rotation: -20, duration: 0.5, ease: 'back.out(1.3)' }); }
        catch (ex) { toast(errMsg(ex)); if (/PREMIUM/.test(ex.message)) go('#/plus'); }
        return;
      }
      if (!topEl) return;
      if (a === 'like') { snap(b.querySelector('.mark')); topEl._sw.fling(1); }
      if (a === 'pass') topEl._sw.fling(-1);
      if (a === 'super') {
        const c = topEl._c; topEl.style.pointerEvents = 'none';
        gsap.to(topEl, { y: -innerHeight, scale: 0.8, duration: 0.5, ease: 'back.in(1.4)', onComplete: () => { topEl.remove(); act(c, 'super'); } });
      }
    };
  }

  function matchFx(c, matchId) {
    $fx.innerHTML = `<div class="halves"><div class="half half--a" ${bg(S.me.photos[0])}></div><div class="half half--b" ${bg(c.photos ? c.photos[0] : c.photo)}></div></div>
      <h2>יש קליק</h2><p>גם ${esc(c.name)} סימנ/ה אותך${c.pct != null ? `. ${c.pct}% התאמה` : ''}</p>
      <a class="btn btn--sun btn--lg" href="#/chat/${matchId}">שולחים הודעה</a><button class="btn btn--ghost" id="fxc">ממשיכים להחליק</button>`;
    $fx.hidden = false;
    const close = () => { $fx.hidden = true; $fx.innerHTML = ''; };
    $fx.querySelector('#fxc').onclick = close; $fx.querySelector('a').onclick = close;
    if (reduce) return;
    gsap.timeline()
      .from($fx, { opacity: 0, duration: 0.2 })
      .from('.half--a', { x: -innerWidth / 2, rotation: -30, duration: 0.5, ease: 'back.in(1.2)' }, 0)
      .from('.half--b', { x: innerWidth / 2, rotation: 30, duration: 0.5, ease: 'back.in(1.2)' }, 0)
      .add(() => burst($fx, 40), 0.5)
      .fromTo('.halves', { scale: 1.2 }, { scale: 1, duration: 0.7, ease: 'elastic.out(1,0.4)' }, 0.5)
      .from('.matchfx h2', { scale: 0, rotation: -12, duration: 0.6, ease: 'back.out(2.2)' }, 0.55)
      .from('.matchfx p, .matchfx .btn', { y: 30, opacity: 0, duration: 0.45, stagger: 0.08, ease: 'back.out(1.5)' }, 0.8);
  }

  // ================= likes =================
  async function likesScreen() {
    shell(`<section class="scr"><div class="bar"><h1>סימנו אותי</h1></div><div id="lh"><div class="empty"><div class="spin">${MARK}</div></div></div></section>`, 'likes');
    let r; try { r = await rpc('klik_likers'); } catch (e) { return toast(errMsg(e)); }
    const h = $app.querySelector('#lh'); if (!h) return;
    if (!r.count) { h.innerHTML = '<div class="empty"><h2>עוד אין</h2><p>כשמישהו יסמן אתכם, זה יופיע כאן. בינתיים, פרופיל עם כמה תמונות וטקסט מקבל יותר קליקים.</p><a class="btn btn--grape" href="#/me">שיפור הפרופיל</a></div>'; return; }
    if (!r.premium) {
      h.innerHTML = `<div class="banner"><h3>${r.count} ${r.count === 1 ? 'פרופיל סימן' : 'פרופילים סימנו'} אותך</h3><p>בקליק פלוס רואים מי הם ועושים קליק מיד. בלי פלוס, הם יופיעו ראשונים בקלפים שלכם.</p><a class="btn btn--sun mt" href="#/plus">מה זה קליק פלוס</a></div>
        <div class="grid2">${Array.from({ length: Math.min(r.count, 6) }, () => '<div class="lk lk--blur"></div>').join('')}</div>`;
    } else {
      h.innerHTML = `<div class="grid2">${r.items.map(c => `<button class="lk" data-id="${c.id}" ${bg(c.photos[0])}>${esc(c.name)}, ${c.age}</button>`).join('')}</div>`;
      h.querySelectorAll('.lk').forEach(b => b.onclick = () => { const c = r.items.find(x => x.id === b.dataset.id); S.deck = [c, ...S.deck.filter(x => x.id !== c.id)]; go('#/deck'); });
    }
    enter('.lk, .banner');
  }

  // ================= matches + chat =================
  const ago = t => { const m = (Date.now() - new Date(t)) / 60000; return m < 1 ? 'עכשיו' : m < 60 ? `לפני ${Math.floor(m)} דק'` : m < 1440 ? `לפני ${Math.floor(m / 60)} שע'` : new Date(t).toLocaleDateString('he-IL', { day: 'numeric', month: 'numeric' }); };
  async function matchesScreen() {
    shell(`<section class="scr"><div class="bar"><h1>צ'אטים</h1></div><div id="mh"><div class="empty"><div class="spin">${MARK}</div></div></div></section>`, 'matches');
    let list; try { list = await rpc('klik_matches_list'); } catch (e) { return toast(errMsg(e)); }
    const h = $app.querySelector('#mh'); if (!h) return;
    S.unread = list.reduce((n, m) => n + m.unread, 0);
    if (!list.length) { h.innerHTML = '<div class="empty"><h2>עוד אין קליקים</h2><p>כשמישהו שסימנתם יסמן אתכם בחזרה, השיחה תיפתח כאן.</p><a class="btn btn--grape" href="#/deck">לקלפים</a></div>'; return; }
    h.innerHTML = `<div class="mlist">${list.map(m => `<a class="mrow" href="#/chat/${m.match_id}"><div class="avatar" ${bg(m.photo)}></div>
      <div><b>${esc(m.name)}, ${m.age}</b>${m.pct != null ? ` <span class="muted">${m.pct}%</span>` : ''}<p>${m.last ? (m.last.mine ? 'את/ה: ' : '') + esc(m.last.body) : 'קליק חדש. מי כותב ראשון?'}</p></div>
      ${m.unread ? `<span class="un">${m.unread}</span>` : `<small class="muted" style="margin-inline-start:auto">${ago(m.last ? m.last.at : m.created_at)}</small>`}</a>`).join('')}</div>`;
    enter('.mrow');
    const tb = $app.querySelector('.tabs'); if (tb) tb.outerHTML = tabs('matches');
  }
  async function chatScreen(mid) {
    shell(`<section class="scr scr--full" style="height:100svh"><div class="bar"><a class="back" href="#/matches" aria-label="חזרה">→</a><button id="ch" style="display:flex;align-items:center;gap:10px;flex:1"><span class="muted">טוען</span></button></div>
      <div class="chat" id="cl"></div><form class="send" id="cf"><input class="inp" id="ci" maxlength="1000" placeholder="הודעה" autocomplete="off" aria-label="הודעה"><button aria-label="שליחה">←</button></form></section>`);
    const { data: m, error } = await sb.from('klik_matches').select('*').eq('id', mid).maybeSingle();
    if (error || !m) { toast('השיחה הזאת כבר לא קיימת'); return go('#/matches'); }
    const uid = S.session.user.id, other = m.user_a === uid ? m.user_b : m.user_a;
    let p; try { p = await rpc('klik_profile', { target: other }); } catch (e) { toast(errMsg(e)); return go('#/matches'); }
    const head = $app.querySelector('#ch'); if (!head) return;
    head.innerHTML = `<div class="avatar" ${bg(p.photos[0], 'width:44px;height:44px;')}></div><b>${esc(p.name)}, ${p.age}</b>`;
    head.onclick = () => profileSheet(other);
    const cl = $app.querySelector('#cl'), seen = new Set();
    const add = g => {
      if (seen.has(g.id)) return; seen.add(g.id);
      const ice = cl.querySelector('.ice'); if (ice) ice.remove();
      const el = document.createElement('div'); el.className = 'msg' + (g.sender === uid ? ' msg--me' : '');
      el.innerHTML = `${esc(g.body)}<time>${new Date(g.created_at).toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}</time>`;
      cl.append(el); cl.scrollTop = cl.scrollHeight;
      return el;
    };
    const { data: msgs } = await sb.from('klik_messages').select('*').eq('match_id', mid).order('created_at').limit(500);
    (msgs || []).forEach(add);
    if (!msgs || !msgs.length) cl.innerHTML = `<div class="ice">${p.common.length ? `שניכם עניתם "<b>${esc(p.common[0].a)}</b>" על "${esc(p.common[0].q)}". אפשר לפתוח מזה.` : `יש קליק עם ${esc(p.name)}. הודעה ראשונה שמתייחסת למשהו מהפרופיל עובדת הכי טוב.`}</div>`;
    rpc('klik_read', { mid }).catch(() => {});
    if (S.chatChan) sb.removeChannel(S.chatChan);
    S.chatChan = sb.channel('chat-' + mid).on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'klik_messages', filter: `match_id=eq.${mid}` }, pl => {
      const el = add(pl.new);
      if (el && pl.new.sender !== uid) { if (!reduce) gsap.from(el, { scale: 0.6, opacity: 0, duration: 0.35, ease: 'back.out(2)' }); rpc('klik_read', { mid }).catch(() => {}); }
    }).subscribe();
    $app.querySelector('#cf').onsubmit = async e => {
      e.preventDefault();
      const inp = $app.querySelector('#ci'), body = inp.value.trim(); if (!body) return;
      inp.value = '';
      const { data, error } = await sb.from('klik_messages').insert({ match_id: mid, sender: uid, body }).select().single();
      if (error) { inp.value = body; return toast('ההודעה לא נשלחה. נסו שוב'); }
      const el = add(data); if (el && !reduce) gsap.from(el, { scale: 0.6, opacity: 0, duration: 0.35, ease: 'back.out(2)' });
    };
  }

  // ================= me =================
  function meScreen() {
    const me = S.me;
    shell(`<section class="scr"><div class="bar"><h1>אני</h1></div>
      <div class="center"><div class="avatar" ${bg(me.photos[0], 'width:120px;height:120px;margin:0 auto 10px;')}></div>
      <h2 style="font-size:1.6rem;font-weight:600">${esc(me.name)}, ${age(me.birthdate)}</h2><p class="muted">${esc(me.city)}${me.premium ? ' · קליק פלוס' : ''}</p></div>
      <div class="mlist mt2">
        <a class="mrow" href="#/edit"><b>עריכת פרופיל ותמונות</b></a>
        <a class="mrow" href="#/prefs"><b>את מי להציג לי</b><p style="margin-inline-start:auto">${{ men: 'גברים', women: 'נשים', everyone: 'כולם' }[me.seeking]}, ${me.age_min}-${me.age_max}</p></a>
        <a class="mrow" href="#/questions"><b>שאלות התאמה</b><p style="margin-inline-start:auto">עניתם על ${me.answered}</p></a>
        <a class="mrow" href="#/plus"><b>קליק פלוס</b></a>
        <button class="mrow" id="hd"><b>${me.hidden ? 'להחזיר את הפרופיל לקלפים' : 'הסתרת הפרופיל מהקלפים'}</b></button>
        <a class="mrow" href="#/terms"><b>תנאי שימוש</b></a><a class="mrow" href="#/privacy"><b>פרטיות</b></a>
        <button class="mrow" id="lo"><b>התנתקות</b></button>
        <button class="mrow" id="dl"><b style="color:#c4134f">מחיקת הפרופיל</b></button>
      </div></section>`, 'me');
    enter('.mrow');
    $app.querySelector('#lo').onclick = () => sb.auth.signOut();
    $app.querySelector('#hd').onclick = async () => { try { S.me = await rpc('klik_save_profile', { p: { hidden: !me.hidden } }); toast(S.me.hidden ? 'הפרופיל מוסתר. התאמות קיימות נשארות' : 'הפרופיל חזר לקלפים'); meScreen(); } catch (e) { toast(errMsg(e)); } };
    $app.querySelector('#dl').onclick = async () => {
      if (!confirm('למחוק את הפרופיל? התמונות, ההתאמות והשיחות יימחקו ולא ניתן לשחזר.')) return;
      try { if (me.photos.length) await sb.storage.from('klik-photos').remove(me.photos); await rpc('klik_delete_me'); S.me = null; await sb.auth.signOut(); toast('הפרופיל נמחק'); } catch (e) { toast(errMsg(e)); }
    };
  }
  const age = d => { const b = new Date(d), n = new Date(); let a = n.getFullYear() - b.getFullYear(); if (n < new Date(n.getFullYear(), b.getMonth(), b.getDate())) a--; return a; };
  function editScreen() {
    const me = S.me, photos = [...me.photos], pr = (me.prompts || [])[0] || {};
    shell(`<section class="scr"><div class="bar"><a class="back" href="#/me" aria-label="חזרה">→</a><h1>עריכה</h1><span></span></div>
      <div class="photos" id="pg"></div>
      <div class="field"><label for="nm">שם</label><input class="inp" id="nm" maxlength="30" value="${esc(me.name)}"></div>
      <div class="field"><label for="ct">עיר</label>${citySelect(me.city)}</div>
      <div class="field"><label>מה מחפשים</label>${chipset('gl', GOALS, me.goal)}</div>
      <div class="field"><label for="bi">קצת עליי</label><textarea class="inp" id="bi" maxlength="500">${esc(me.bio)}</textarea></div>
      <div class="field"><label for="pq">שאלה לבחירה</label><select class="inp" id="pq">${PROMPTS.map(p => `<option ${pr.q === p ? 'selected' : ''}>${p}</option>`).join('')}</select><input class="inp" id="pa" maxlength="140" value="${esc(pr.a || '')}" aria-label="התשובה שלכם"></div>
      <p class="err" id="oe" role="alert"></p><button class="btn btn--grape btn--block btn--lg" id="sv">שמירה</button></section>`, 'me');
    let goal = me.goal;
    photoGrid($app.querySelector('#pg'), photos, () => {});
    $app.querySelectorAll('#gl .chip').forEach(c => c.onclick = () => { goal = c.dataset.v; $app.querySelectorAll('#gl .chip').forEach(x => x.classList.toggle('on', x === c)); });
    $app.querySelector('#sv').onclick = async e => {
      const name = $app.querySelector('#nm').value.trim(), c = CITIES.find(x => x[0] === $app.querySelector('#ct').value), a = $app.querySelector('#pa').value.trim();
      if (name.length < 2) return oerr('צריך שם של לפחות שתי אותיות');
      if (!photos.length) return oerr('צריך לפחות תמונה אחת');
      const p = { name, goal, photos, bio: $app.querySelector('#bi').value.trim(), prompts: a ? [{ q: $app.querySelector('#pq').value, a }] : [] };
      if (c) Object.assign(p, { city: c[0], lat: c[1], lng: c[2] });
      e.target.disabled = true;
      try { S.me = await rpc('klik_save_profile', { p }); toast('נשמר'); go('#/me'); } catch (ex) { e.target.disabled = false; oerr(errMsg(ex)); }
    };
  }
  function prefsScreen() {
    const me = S.me; let seeking = me.seeking;
    const km = [[null, 'כל הארץ'], [20, 'עד 20 ק"מ'], [50, 'עד 50 ק"מ'], [100, 'עד 100 ק"מ']];
    shell(`<section class="scr"><div class="bar"><a class="back" href="#/me" aria-label="חזרה">→</a><h1>את מי להציג</h1><span></span></div>
      <div class="field"><label>רוצה להכיר</label>${chipset('g2', { men: 'גברים', women: 'נשים', everyone: 'את כולם' }, me.seeking)}</div>
      <div class="row"><div class="field"><label for="a1">מגיל</label><input class="inp" id="a1" type="number" min="18" max="99" value="${me.age_min}"></div><div class="field"><label for="a2">עד גיל</label><input class="inp" id="a2" type="number" min="18" max="99" value="${me.age_max}"></div></div>
      <div class="field"><label for="km">מרחק</label><select class="inp" id="km">${km.map(([v, l]) => `<option value="${v ?? ''}" ${me.max_km === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
      <p class="err" id="oe" role="alert"></p><button class="btn btn--grape btn--block btn--lg" id="sv">שמירה</button></section>`, 'me');
    $app.querySelectorAll('#g2 .chip').forEach(c => c.onclick = () => { seeking = c.dataset.v; $app.querySelectorAll('#g2 .chip').forEach(x => x.classList.toggle('on', x === c)); });
    $app.querySelector('#sv').onclick = async e => {
      const a1 = +$app.querySelector('#a1').value, a2 = +$app.querySelector('#a2').value, k = $app.querySelector('#km').value;
      if (!(a1 >= 18 && a2 <= 99 && a2 >= a1)) return oerr('טווח הגילאים צריך להיות בין 18 ל-99');
      e.target.disabled = true;
      try { S.me = await rpc('klik_save_profile', { p: { seeking, age_min: a1, age_max: a2, max_km: k ? +k : null } }); S.deck = []; toast('נשמר'); go('#/deck'); } catch (ex) { e.target.disabled = false; oerr(errMsg(ex)); }
    };
  }
  function plusScreen() {
    const prem = S.me.premium;
    shell(`<section class="scr"><div class="bar"><a class="back" href="#/deck" aria-label="חזרה">→</a><h1>קליק פלוס</h1><span></span></div>
      <div class="banner"><h3>${prem ? 'אתם בפלוס' : 'נפתח בקרוב'}</h3><p>${prem ? 'כל היכולות פתוחות אצלכם.' : 'קליק פלוס עדיין לא נמכר. השאירו סימן ונעדכן אתכם ראשונים כשייפתח.'}</p></div>
      <div class="plan plan--plus" style="color:#fff"><ul><li>לייקים בלי הגבלה (בחינם: ${LIKE_CAP} ביום)</li><li>רואים מי כבר סימן אתכם</li><li>5 סופר-קליקים ביום (בחינם: אחד)</li><li>חרטה: מחזירים קלף שדילגתם עליו</li></ul></div>
      ${prem ? '' : '<button class="btn btn--sun btn--block btn--lg mt2" id="pi">עדכנו אותי כשנפתח</button>'}</section>`, 'deck');
    enter('.banner, .plan, .btn--block');
    const b = $app.querySelector('#pi');
    if (b) b.onclick = async () => { try { await rpc('klik_interest', { plan: 'plus' }); b.disabled = true; b.textContent = 'רשמנו. נעדכן אתכם'; burst($app.querySelector('.banner'), 16); } catch (e) { toast(errMsg(e)); } };
  }

  // ================= legal =================
  const LEGAL = {
    terms: `<h2>תנאי שימוש</h2><p class="muted">עדכון אחרון: נובמבר 2026</p>
      <h3>מי יכול להשתמש</h3><p>קליק מיועד לבני 18 ומעלה בלבד. בהרשמה אתם מצהירים שזה גילכם ושהפרטים שמסרתם נכונים.</p>
      <h3>הפרופיל שלכם</h3><p>מעלים רק תמונות שלכם ושיש לכם זכות להשתמש בהן. אסור להעלות עירום, תוכן פוגעני, פרטי קשר של אחרים או פרסומות.</p>
      <h3>התנהגות</h3><ul><li>אסור להטריד, לאיים, להתחזות או לבקש כסף ממשתמשים אחרים.</li><li>אסור להשתמש בקליק לצורך מסחרי או לאיסוף מידע על משתמשים.</li><li>פרופיל שמפר את הכללים יוסר, ואפשר לדווח על כל פרופיל מתוך האתר.</li></ul>
      <h3>בטיחות בפגישות</h3><p>קליק לא בודק את זהות המשתמשים. נפגשים בפעם הראשונה במקום ציבורי, מעדכנים חבר או בן משפחה, ולא מעבירים כסף למי שהכרתם באתר.</p>
      <h3>קליק פלוס</h3><p>חלק מהיכולות יוצעו בתשלום. המחיר ותנאי הביטול יוצגו לפני כל רכישה.</p>
      <h3>אחריות</h3><p>השירות ניתן כמות שהוא. קליק אינו אחראי להתנהגות משתמשים באתר או מחוצה לו.</p>
      <h3>סיום</h3><p>אפשר למחוק את הפרופיל בכל רגע ממסך "אני". קליק רשאי להשעות חשבון שהפר את התנאים.</p>`,
    privacy: `<h2>מדיניות פרטיות</h2><p class="muted">עדכון אחרון: נובמבר 2026</p>
      <h3>מה אנחנו שומרים</h3><ul><li>פרטי חשבון: אימייל וסיסמה מוצפנת.</li><li>פרטי פרופיל: שם פרטי, תאריך לידה, מגדר, את מי רוצים להכיר, עיר, תמונות וטקסטים שכתבתם.</li><li>תשובות לשאלות ההתאמה, הסימונים שלכם, התאמות והודעות.</li></ul>
      <h3>מה רואים אחרים</h3><p>משתמשים רשומים רואים את השם הפרטי, הגיל (לא תאריך הלידה), העיר, התמונות, הטקסטים ואחוז ההתאמה. תשובות לשאלות מוצגות רק כשהן משותפות לכם ולצד השני. האימייל שלכם לא מוצג לאף אחד.</p>
      <h3>למה משתמשים במידע</h3><p>כדי להציג לכם פרופילים מתאימים, לחשב אחוזי התאמה, לאפשר שיחות ולטפל בדיווחים. לא מוכרים את המידע לצד שלישי.</p>
      <h3>איפה המידע נשמר</h3><p>אצל ספק תשתית ענן (Supabase) בשרתים באירופה. כניסה עם Google מתבצעת דרך Google.</p>
      <h3>מחיקה</h3><p>מחיקת הפרופיל ממסך "אני" מוחקת את הפרופיל, התמונות, התשובות, ההתאמות וההודעות שלכם.</p>
      <h3>יצירת קשר</h3><p>בכל שאלה על פרטיות אפשר לפנות לצוות קליק דרך הדיווח באתר.</p>`
  };
  function legalScreen(k) {
    shell(`<section class="scr scr--full"><div class="bar"><button class="back" onclick="history.back()" aria-label="חזרה">→</button><span class="brand" style="color:var(--grape)">${MARK}<span class="brand__name">קליק</span></span><span></span></div><div class="prose">${LEGAL[k]}</div></section>`);
  }

  // ================= router =================
  function showApp(on) { $app.hidden = !on; $landing.hidden = on; document.body.classList.toggle('in-app', on); if (window.ScrollTrigger) ScrollTrigger.refresh(); }
  async function loadMe() { try { S.me = await rpc('klik_me'); } catch (e) { S.me = null; } }
  let booted = false;
  async function route() {
    const h = location.hash || '';
    if (/access_token|error_description|type=recovery/.test(h)) return; // supabase מטפל
    const [, r, arg] = h.split('/');
    if (S.chatChan && r !== 'chat') { sb.removeChannel(S.chatChan); S.chatChan = null; }
    closeSheet();
    if (r === 'terms' || r === 'privacy') { showApp(true); return legalScreen(r); }
    if (!S.session) {
      if (r === 'login' || r === 'signup' || r === 'forgot') { showApp(true); return authScreen(r); }
      if (r) { location.hash = '#/login'; return; }
      return showApp(false);
    }
    showApp(true);
    if (r === 'reset') return authScreen('reset');
    if (!S.me) await loadMe();
    if (!S.me || !S.me.onboarded) return onboarding();
    const map = { deck: deckScreen, likes: likesScreen, matches: matchesScreen, me: meScreen, edit: editScreen, prefs: prefsScreen, questions: questionsScreen, plus: plusScreen };
    if (r === 'chat' && arg) return chatScreen(arg);
    if (map[r]) return map[r]();
    location.hash = '#/deck';
  }
  function live() {
    if (S.chan) { sb.removeChannel(S.chan); S.chan = null; }
    if (!S.session) return;
    const uid = S.session.user.id;
    S.chan = sb.channel('me-' + uid)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'klik_messages' }, pl => {
        if (pl.new.sender === uid || location.hash === '#/chat/' + pl.new.match_id) return;
        S.unread++; toast('הודעה חדשה'); const tb = $app.querySelector('.tabs a[href="#/matches"]');
        if (tb && !tb.querySelector('.dot')) tb.insertAdjacentHTML('beforeend', `<span class="dot">${S.unread}</span>`); else if (tb) tb.querySelector('.dot').textContent = S.unread;
        if (location.hash === '#/matches') matchesScreen();
      })
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'klik_matches' }, () => { if ($fx.hidden) toast('יש לכם קליק חדש'); if (location.hash === '#/matches') matchesScreen(); })
      .subscribe();
  }

  sb.auth.onAuthStateChange((ev, session) => {
    const was = S.session && S.session.user.id, now = session && session.user.id;
    S.session = session;
    if (ev === 'PASSWORD_RECOVERY') { location.hash = '#/reset'; return; }
    if (was !== now) {
      S.me = null; S.deck = []; S.unread = 0; ob.init = false; ob.step = 0; ob.data = {}; ob.photos = []; ob.qLeft = null; ob.qDone = 0;
      setTimeout(() => { live(); if (!booted) return; if (!now) { location.hash = ''; route(); } else if (!/^#\/(reset)/.test(location.hash)) { if (location.hash.startsWith('#/deck')) route(); else location.hash = '#/deck'; } }, 0);
    }
  });
  window.addEventListener('hashchange', route);
  (async function boot() {
    const { data } = await sb.auth.getSession();
    S.session = data.session;
    if (S.session) { await loadMe(); live(); rpc('klik_matches_list').then(l => { S.unread = l.reduce((n, m) => n + m.unread, 0); }).catch(() => {}); }
    booted = true;
    const landing = !S.session && !/^#\/\w/.test(location.hash);
    if (S.session && !/^#\/\w/.test(location.hash) && !/access_token/.test(location.hash)) location.hash = '#/deck';
    await route();
    window.KlikLanding.intro(landing);
  })();
})();
