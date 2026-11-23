/* כלילה — דף קולקציה: סינון לפי קטגוריה, גוון ובד + מיון. בשופיפיי: main-collection עם פילטרים מובנים. */
(function () {
  var KL = window.KL, $ = KL.$, $$ = KL.$$;
  var q = new URLSearchParams(location.search);
  var st = { cat: q.get('cat') || '', color: q.get('color') || '', fabric: q.get('fabric') || '', sort: 'new' };

  $('#chips').innerHTML = '<button class="kl-chip" data-cat="">הכל</button>' + KL.cats.map(function (c) { return '<button class="kl-chip" data-cat="' + c.id + '">' + c.name + '</button>'; }).join('');
  $('#colorFilter').innerHTML = Object.keys(KL.colors).map(function (k) { return '<button class="kl-dot" style="--c:' + KL.colors[k].hex + '" data-k="' + k + '" aria-label="' + KL.colors[k].name + '" title="' + KL.colors[k].name + '"></button>'; }).join('');
  $('#fabric').innerHTML += Object.keys(KL.fabrics).map(function (k) { return '<option value="' + k + '">' + KL.fabrics[k] + '</option>'; }).join('');
  $('#fabric').value = st.fabric;

  function render(first) {
    var list = KL.products.filter(function (p) {
      return (!st.cat || p.cat === st.cat) && (!st.color || p.colors.indexOf(st.color) > -1) && (!st.fabric || p.fabric === st.fabric);
    });
    if (st.sort === 'low') list.sort(function (a, b) { return a.price - b.price; });
    if (st.sort === 'high') list.sort(function (a, b) { return b.price - a.price; });
    $$('.kl-chip').forEach(function (c) { c.classList.toggle('is-on', c.dataset.cat === st.cat); });
    $$('#colorFilter .kl-dot').forEach(function (d) { d.classList.toggle('is-on', d.dataset.k === st.color); });
    var name = st.cat ? KL.catName(st.cat) : 'כל הקולקציה';
    if (!first) $('#collTitle').innerHTML = '<span class="kl-ln"><span>' + name + '</span></span>'; else $('#collTitle').textContent = name;
    $('#crumb').textContent = name; document.title = name + ' | כלילה';
    $('#count').textContent = list.length === 1 ? 'מוצר אחד' : list.length + ' מוצרים';
    $('#clear').hidden = !(st.cat || st.color || st.fabric);
    var grid = $('#grid');
    grid.innerHTML = list.length ? list.map(function (p, i) {
      var html = KL.card(p, i);
      if (st.color) { /* מסמנים את הגוון שסונן */
        html = html.replace('data-color="' + p.colors[0] + '"', 'data-color="' + st.color + '"')
          .replace('kl-dot is-on', 'kl-dot').replace('class="kl-dot" style="--c:' + KL.colors[st.color].hex, 'class="kl-dot is-on" style="--c:' + KL.colors[st.color].hex);
      }
      return html;
    }).join('') : '<div class="kl-none"><p>אין מוצרים שמתאימים לסינון הזה.</p><button class="kl-btn kl-btn--ghost" id="clear2">ניקוי סינון</button></div>';
    KL.observe(grid);
    var u = new URLSearchParams(); ['cat', 'color', 'fabric'].forEach(function (k) { if (st[k]) u.set(k, st[k]); });
    history.replaceState(null, '', location.pathname + (u.toString() ? '?' + u : ''));
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('.kl-chip'); if (t) { st.cat = t.dataset.cat; render(); return; }
    t = e.target.closest('#colorFilter .kl-dot'); if (t) { st.color = st.color === t.dataset.k ? '' : t.dataset.k; render(); return; }
    if (e.target.closest('#clear,#clear2')) { st.cat = st.color = st.fabric = ''; $('#fabric').value = ''; render(); }
  });
  $('#fabric').onchange = function () { st.fabric = this.value; render(); };
  $('#sort').onchange = function () { st.sort = this.value; render(); };
  render(true);
})();
