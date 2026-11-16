/* Demo colour switcher — remembers the choice in this browser only */
(function () {
  var KEY = 'sigsug-theme', NAMES = ['lilac', 'gold', 'navy', 'cream', 'green'], LABEL = { lilac: 'סגול־לילך', gold: 'שחור־זהב', navy: 'כחול כהה וזהב', cream: 'שמנת, כחול כהה וזהב', green: 'לבן וירוק' }, BAR = { lilac: '#16171C', gold: '#0B0A08', navy: '#0A1428', cream: '#F4EFE4', green: '#F5F6F1' };
  var root = document.documentElement, cur = 'lilac';
  try { var q = new URLSearchParams(location.search).get('theme'); var s = q || localStorage.getItem(KEY); if (NAMES.indexOf(s) > -1) cur = s; } catch (e) {}
  function set(t, silent) {
    cur = t; root.setAttribute('data-theme', t); window.__theme = t;
    var m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute('content', BAR[t]);
    try { localStorage.setItem(KEY, t); } catch (e) {}
    var bs = document.querySelectorAll('.themer button'); for (var i = 0; i < bs.length; i++) bs[i].setAttribute('aria-pressed', bs[i].getAttribute('data-t') === t ? 'true' : 'false');
    if (!silent) window.dispatchEvent(new CustomEvent('themechange', { detail: t }));
  }
  set(cur, true);
  function mount() {
    var el = document.createElement('div'); el.className = 'themer'; el.setAttribute('role', 'group'); el.setAttribute('aria-label', 'בחירת צבעים לדמו');
    var h = '<span>צבעים</span>';
    NAMES.forEach(function (n) { h += '<button type="button" data-t="' + n + '" aria-label="' + LABEL[n] + '" title="' + LABEL[n] + '" aria-pressed="' + (n === cur) + '"></button>'; });
    el.innerHTML = h; el.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) set(b.getAttribute('data-t')); });
    document.body.appendChild(el);
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
