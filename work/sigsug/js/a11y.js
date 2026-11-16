/* Accessibility menu — no external services; choices are kept in this browser only */
(function () {
  var KEY = 'sigsug-a11y', root = document.documentElement, st = {};
  try { st = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { st = {}; }
  var OPTS = [
    ['zoom', 'הגדלת טקסט', 'A+'], ['contrast', 'ניגודיות גבוהה', '◐'], ['gray', 'גווני אפור', '▨'],
    ['links', 'הדגשת קישורים', '⎁'], ['font', 'פונט קריא', 'Aa'], ['still', 'עצירת אנימציות', '❚❚']
  ];
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  function apply() {
    var z = st.zoom || 0;
    ['a11y-z1', 'a11y-z2', 'a11y-z3'].forEach(function (c, i) { root.classList.toggle(c, z === i + 1); });
    ['contrast', 'gray', 'links', 'font', 'still'].forEach(function (k) { root.classList.toggle('a11y-' + k, !!st[k]); });
    if (panel) Array.prototype.forEach.call(panel.querySelectorAll('[data-k]'), function (b) {
      var k = b.getAttribute('data-k'), on = k === 'zoom' ? z > 0 : !!st[k];
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (k === 'zoom') b.querySelector('span').textContent = 'הגדלת טקסט' + (z ? ' ×' + (1 + z * 0.15).toFixed(2).replace(/0$/, '') : '');
    });
    window.dispatchEvent(new Event('resize'));
  }
  var btn = document.createElement('button'); btn.className = 'a11y-btn'; btn.type = 'button';
  btn.setAttribute('aria-label', 'תפריט נגישות'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', 'a11yPanel');
  btn.innerHTML = '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="currentColor"><circle cx="12" cy="4.2" r="2.1"/><path d="M4.5 8.2c0-.6.5-1 1.1-.9 2 .4 4.2.7 6.4.7s4.4-.3 6.4-.7c.6-.1 1.1.3 1.1.9s-.4 1-.9 1.1c-1.3.3-2.7.5-4.1.7v3l1.9 6.4c.2.6-.2 1.2-.8 1.3-.5.1-1-.2-1.2-.7L12 14.8l-1.9 5.2c-.2.5-.7.8-1.2.7-.6-.1-1-.7-.8-1.3l1.9-6.4v-3c-1.4-.2-2.8-.4-4.1-.7-.5-.1-.9-.5-.9-1.1z"/></svg>';
  var panel = document.createElement('div'); panel.className = 'a11y-panel'; panel.id = 'a11yPanel'; panel.hidden = true;
  panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', 'תפריט נגישות');
  var html = '<div class="a11y-head"><b>נגישות</b><button type="button" class="a11y-x" aria-label="סגירת תפריט נגישות">✕</button></div><div class="a11y-grid">';
  OPTS.forEach(function (o) { html += '<button type="button" data-k="' + o[0] + '" aria-pressed="false"><i aria-hidden="true">' + o[2] + '</i><span>' + o[1] + '</span></button>'; });
  html += '</div><div class="a11y-foot"><button type="button" class="a11y-reset">איפוס הגדרות</button><a href="accessibility.html">הצהרת נגישות</a></div>';
  panel.innerHTML = html;
  function open(v) { panel.hidden = !v; btn.setAttribute('aria-expanded', v ? 'true' : 'false'); if (v) panel.querySelector('[data-k]').focus(); else btn.focus(); }
  btn.addEventListener('click', function () { open(panel.hidden); });
  panel.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.classList.contains('a11y-x')) return open(false);
    if (b.classList.contains('a11y-reset')) { st = {}; save(); return apply(); }
    var k = b.getAttribute('data-k'); if (!k) return;
    if (k === 'zoom') st.zoom = ((st.zoom || 0) + 1) % 4; else st[k] = !st[k];
    save(); apply();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) open(false); });
  function mount() { document.body.appendChild(btn); document.body.appendChild(panel); apply(); }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
