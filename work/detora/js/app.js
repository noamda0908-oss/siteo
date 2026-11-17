(function () {
  var $ = function (id) { return document.getElementById(id); };
  var esc = DT.esc, money = DT.money;
  var products = DT.load().filter(function (p) { return p.on !== false; });
  var filter = 'all';
  var order = [];
  try { order = JSON.parse(sessionStorage.getItem('detora_order') || '[]'); } catch (e) {}

  /* ----- opening sequence ----- */
  var started = false;
  function start() { if (started) return; started = true; document.body.classList.remove('loading'); }
  var hi = document.querySelector('.hero-arch img');
  if (hi && hi.complete) requestAnimationFrame(function () { requestAnimationFrame(start); });
  else if (hi) { hi.addEventListener('load', start); hi.addEventListener('error', start); }
  setTimeout(start, 1200);

  /* ----- nav + hero parallax ----- */
  var nav = $('nav'), ticking = false;
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle('stuck', y > 30);
    if (!calm && hi && y < 1000) hi.style.translate = '0 ' + (-y * 0.07).toFixed(1) + 'px';
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* ----- reveals ----- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }) : null;
  document.querySelectorAll('.rv').forEach(function (el, i) {
    if (!io) return el.classList.add('in');
    if (el.parentElement.classList.contains('steps') || el.classList.contains('world')) {
      el.style.transitionDelay = (Array.prototype.indexOf.call(el.parentElement.children, el) * 0.11) + 's';
    }
    io.observe(el);
  });

  /* ----- shop ----- */
  function imgHtml(p) {
    return p.img ? '<img src="' + esc(p.img) + '" alt="' + esc(p.name) + '" loading="lazy">' : '<i>De’Tora</i>';
  }
  function priceHtml(p) { return money(p.price) + (p.unit ? ' ' + esc(p.unit) : ''); }

  function renderChips() {
    var used = {};
    products.forEach(function (p) { used[p.cat] = 1; });
    var h = '<button class="chip" role="tab" data-f="all" aria-selected="' + (filter === 'all') + '">הכול</button>';
    DT.CATS.forEach(function (c) {
      if (used[c.id]) h += '<button class="chip" role="tab" data-f="' + c.id + '" aria-selected="' + (filter === c.id) + '">' + c.he + '</button>';
    });
    $('chips').innerHTML = h;
  }
  function renderGrid() {
    var list = products.filter(function (p) { return filter === 'all' || p.cat === filter; });
    $('grid').innerHTML = list.map(function (p, i) {
      return '<button class="card" data-id="' + esc(p.id) + '" style="animation-delay:' + (i * 0.06) + 's">' +
        '<span class="card-img">' + imgHtml(p) + '<span class="card-plus" aria-hidden="true">+</span></span>' +
        '<span class="card-name">' + esc(p.name) + '</span>' +
        '<span class="card-price">' + priceHtml(p) + '</span></button>';
    }).join('');
    $('gridEmpty').hidden = list.length > 0;
  }
  function setFilter(f) { filter = f; renderChips(); renderGrid(); }
  $('chips').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (b) setFilter(b.dataset.f);
  });
  document.querySelectorAll('.world').forEach(function (w) {
    w.addEventListener('click', function () {
      var has = products.some(function (p) { return p.cat === w.dataset.cat; });
      setFilter(has ? w.dataset.cat : 'all');
      $('shop').scrollIntoView({ behavior: calm ? 'auto' : 'smooth' });
    });
  });

  /* ----- overlays ----- */
  var veil = $('veil'), sheet = $('sheet'), drawer = $('drawer'), openEl = null, lastFocus = null;
  function open(el) {
    lastFocus = document.activeElement;
    openEl = el; veil.hidden = false; el.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    requestAnimationFrame(function () { requestAnimationFrame(function () { veil.classList.add('on'); el.classList.add('on'); }); });
    var x = el.querySelector('.x'); if (x) x.focus({ preventScroll: true });
  }
  function close() {
    if (!openEl) return;
    var el = openEl; openEl = null;
    veil.classList.remove('on'); el.classList.remove('on');
    document.documentElement.style.overflow = '';
    setTimeout(function () { el.hidden = true; if (!openEl) veil.hidden = true; }, 480);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  veil.addEventListener('click', close);
  $('shX').addEventListener('click', close);
  $('drX').addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  /* ----- product sheet ----- */
  var cur = null, qty = 1;
  $('grid').addEventListener('click', function (e) {
    var c = e.target.closest('.card'); if (!c) return;
    cur = products.filter(function (p) { return p.id === c.dataset.id; })[0]; if (!cur) return;
    qty = 1; $('qV').textContent = 1;
    $('shImg').innerHTML = imgHtml(cur);
    $('shCat').textContent = DT.cat(cur.cat).en;
    $('shName').textContent = cur.name;
    $('shPrice').textContent = money(cur.price) + (cur.unit ? ' ' + cur.unit : '');
    $('shDesc').textContent = cur.desc || '';
    open(sheet);
  });
  $('qM').addEventListener('click', function () { qty = Math.max(1, qty - 1); $('qV').textContent = qty; });
  $('qP').addEventListener('click', function () { qty = Math.min(99, qty + 1); $('qV').textContent = qty; });
  $('shAdd').addEventListener('click', function () {
    if (!cur) return;
    var ex = order.filter(function (o) { return o.id === cur.id; })[0];
    if (ex) ex.q += qty; else order.push({ id: cur.id, q: qty });
    saveOrder(); close(); toast('נוסף להזמנה');
  });

  /* ----- order drawer ----- */
  function saveOrder() {
    try { sessionStorage.setItem('detora_order', JSON.stringify(order)); } catch (e) {}
    renderOrder();
    var n = $('bagN'); n.classList.remove('pop'); void n.offsetWidth; n.classList.add('pop');
  }
  function renderOrder() {
    var rows = [], sum = 0, count = 0, lines = [];
    order = order.filter(function (o) { return products.some(function (p) { return p.id === o.id; }); });
    order.forEach(function (o) {
      var p = products.filter(function (x) { return x.id === o.id; })[0];
      sum += p.price * o.q; count += o.q;
      lines.push('• ' + p.name + ' × ' + o.q);
      rows.push('<li><span class="th">' + (p.img ? '<img src="' + esc(p.img) + '" alt="">' : '') + '</span>' +
        '<span><b>' + esc(p.name) + '</b><small>' + o.q + ' × ' + priceHtml(p) + '</small></span>' +
        '<button class="rm" data-rm="' + esc(p.id) + '">הסרה</button></li>');
    });
    $('drList').innerHTML = rows.join('');
    $('drEmpty').hidden = rows.length > 0;
    $('drFoot').hidden = rows.length === 0;
    $('drSum').textContent = money(sum);
    $('bagN').hidden = count === 0; $('bagN').textContent = count;
    $('drSend').href = DT.wa('היי, אשמח להזמין מדיטורה:\n' + lines.join('\n') + '\nסה״כ משוער: ' + money(sum));
  }
  $('drList').addEventListener('click', function (e) {
    var b = e.target.closest('[data-rm]'); if (!b) return;
    order = order.filter(function (o) { return o.id !== b.dataset.rm; });
    saveOrder(); toast('הוסר מההזמנה');
  });
  $('bagBtn').addEventListener('click', function () { open(drawer); });

  /* ----- contact ----- */
  $('ctype').innerHTML = DT.CATS.map(function (c) { return '<option>' + c.he + '</option>'; }).join('') + '<option>משהו אחר</option>';
  $('cform').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, name = f.name.value.trim();
    $('cerr').hidden = !!name;
    if (!name) { f.name.focus(); return; }
    var t = 'היי, כאן ' + name + '.\nאשמח לתאם: ' + f.type.value;
    if (f.date.value) t += '\nתאריך משוער: ' + f.date.value.split('-').reverse().join('.');
    if (f.msg.value.trim()) t += '\n' + f.msg.value.trim();
    window.open(DT.wa(t), '_blank', 'noopener');
  });

  var tT;
  function toast(s) { var t = $('toast'); t.textContent = s; t.classList.add('on'); clearTimeout(tT); tT = setTimeout(function () { t.classList.remove('on'); }, 2200); }

  renderChips(); renderGrid(); renderOrder();
})();
