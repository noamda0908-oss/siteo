/* Or's Piercing: shared client for the live queue (Supabase) */
const SB_URL = 'https://dndqljbibficfscylteq.supabase.co';
const SB_KEY = 'sb_publishable_GaX5Eik7yRR-m8JtWmZ1Rg_oUZo8Edt';
const sb = supabase.createClient(SB_URL, SB_KEY, { auth: { persistSession: false, autoRefreshToken: false } });

const $ = s => document.querySelector(s);
const esc = t => String(t == null ? '' : t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (_) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (_) {} },
  del(k) { try { localStorage.removeItem(k); } catch (_) {} }
};

async function rpc(fn, args) {
  const { data, error } = await sb.rpc(fn, args || {});
  if (error) throw new Error(error.message || 'ERR');
  return data;
}
const ERR = {
  ORS_CLOSED: 'התור סגור כרגע',
  ORS_NAME: 'חסר שם. צריך לפחות 2 אותיות',
  ORS_PHONE: 'מספר הטלפון לא תקין. צריך מספר מלא',
  ORS_TYPE: 'סוג הפירסינג כבר לא ברשימה. רענני את הדף',
  ORS_FULL: 'התור מלא כרגע. גשי לדוכן',
  ORS_DUP: 'המספר הזה כבר רשום בתור. אם איבדת את הדף, גשי לדוכן',
  ORS_AUTH: 'צריך להתחבר מחדש',
  ORS_LOCKED: 'יותר מדי ניסיונות. נסי שוב בעוד רבע שעה',
  ORS_AMOUNT: 'הסכום לא תקין',
  ORS_METHOD: 'צריך לבחור אמצעי תשלום',
  ORS_TYPES: 'רשימת הסוגים לא תקינה. שם לכל סוג, מחיר במספרים, בלי כפילויות',
  ORS_PASS: 'הסיסמה צריכה לפחות 8 תווים'
};
const errCode = e => (/ORS_[A-Z]+/.exec((e && e.message) || '') || [''])[0];
const errMsg = e => ERR[errCode(e)] || 'אין חיבור כרגע. נסי שוב בעוד רגע';

function toast(title, text, bad) {
  const d = document.createElement('div'); d.className = 'toast' + (bad ? ' bad' : '');
  d.innerHTML = '<b>' + esc(title) + '</b>' + esc(text || '');
  const T = $('#toasts'); while (T.children.length >= 2) T.firstChild.remove(); T.appendChild(d); setTimeout(() => d.remove(), 4700);
}

/* live updates: instant ping from the database, with polling as a safety net */
function live(cb) {
  let t = 0; const soon = () => { clearTimeout(t); t = setTimeout(cb, 150); };
  try { sb.channel('ors-queue').on('broadcast', { event: 'changed' }, soon).subscribe(); } catch (_) {}
  setInterval(() => { if (!document.hidden) cb(); }, 5000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) cb(); });
  addEventListener('online', cb);
}

const WINDOW = 300; // seconds a called customer has to arrive
function tick() {
  const now = Date.now();
  document.querySelectorAll('[data-t]').forEach(el => {
    const left = Math.ceil(WINDOW - (now - +el.dataset.t) / 1000), mine = el.dataset.mine;
    const mm = Math.floor(Math.max(0, left) / 60) + ':' + String(Math.max(0, left) % 60).padStart(2, '0');
    el.textContent = left > 0 ? (mine ? 'התור נשמר לך עוד ' : 'מחכים לה עוד ') + mm : (mine ? 'הזמן עבר, גשי לדוכן עכשיו' : 'עבר הזמן, אפשר לדלג');
    el.classList.toggle('late', left <= 0);
  });
}
setInterval(tick, 1000);
