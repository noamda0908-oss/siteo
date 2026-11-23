/* כלילה — איורי המחשה לכיסויי הראש (SVG). בשופיפיי מחליפים בתמונות מוצר אמיתיות. */
(function () {
  var KL = window.KL = window.KL || {};
  var SKIN = ['#EBC9AE', '#D8A982', '#B9855F', '#F2D8C3'];
  var uid = 0;

  function pattern(kind, id) {
    var ink = 'rgba(255,250,247,.55)';
    if (kind === 'dots') return '<pattern id="' + id + '" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="2.2" fill="' + ink + '"/><circle cx="12" cy="12" r="2.2" fill="' + ink + '"/></pattern>';
    if (kind === 'stripes') return '<pattern id="' + id + '" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(28)"><rect width="4" height="12" fill="' + ink + '"/></pattern>';
    if (kind === 'floral') return '<pattern id="' + id + '" width="26" height="26" patternUnits="userSpaceOnUse"><g fill="' + ink + '"><circle cx="7" cy="5" r="2.4"/><circle cx="4.6" cy="8.4" r="2.4"/><circle cx="9.4" cy="8.4" r="2.4"/><circle cx="20" cy="18" r="2.4"/><circle cx="17.6" cy="21.4" r="2.4"/><circle cx="22.4" cy="21.4" r="2.4"/></g><circle cx="7" cy="7.4" r="1.2" fill="rgba(58,29,43,.35)"/><circle cx="20" cy="20.4" r="1.2" fill="rgba(58,29,43,.35)"/></pattern>';
    return '';
  }

  var W = 'style="fill:var(--w)"';
  var FOLD = 'fill="none" stroke-linecap="round" stroke-width="2.2" style="stroke:color-mix(in srgb,var(--w) 62%,#1d0d15)"';
  var DARK = 'style="fill:color-mix(in srgb,var(--w) 78%,#1d0d15)"';
  var LITE = 'fill="none" stroke-linecap="round" stroke-width="1.6" style="stroke:color-mix(in srgb,var(--w) 70%,#fff)"';

  var SHAPES = {
    turban: {
      main: 'M86 184 C68 112 104 46 150 44 C196 46 232 112 214 184 C203 152 176 140 150 140 C124 140 97 152 86 184 Z',
      under: '',
      over: '<path d="M92 172 C116 118 168 86 214 104" ' + FOLD + '/><path d="M208 172 C184 118 132 86 86 104" ' + FOLD + '/>' +
            '<path d="M100 150 C128 104 176 78 220 124" ' + LITE + '/>' +
            '<path d="M138 112 C138 98 162 98 162 112 C162 130 156 142 150 142 C144 142 138 130 138 112 Z" ' + DARK + '/>' +
            '<path d="M144 106 C147 118 147 128 149 138" ' + LITE + '/>'
    },
    bobo: {
      main: 'M88 184 C74 118 106 66 150 64 C194 66 226 118 212 184 C202 154 176 142 150 142 C124 142 98 154 88 184 Z',
      under: '<ellipse cx="206" cy="88" rx="46" ry="38" transform="rotate(-24 206 88)" ' + W + '/>' +
             '<path d="M176 70 C196 56 228 62 240 86" ' + FOLD + '/><path d="M186 98 C206 86 232 92 244 108" ' + FOLD + '/>',
      over: '<path d="M94 170 C112 124 160 100 206 112" ' + FOLD + '/><path d="M104 150 C126 112 168 96 200 100" ' + LITE + '/>'
    },
    long: {
      main: 'M88 184 C74 118 106 64 150 62 C194 64 226 118 212 184 C202 154 176 142 150 142 C124 142 98 154 88 184 Z',
      under: '',
      over: '<path d="M94 172 C112 126 160 102 208 118" ' + FOLD + '/><path d="M102 152 C126 114 170 98 204 104" ' + LITE + '/>' +
            '<path d="M204 150 C226 170 236 214 228 262 C222 300 232 330 244 356 L204 366 C196 330 190 300 196 262 C200 226 198 190 190 168 Z" ' + W + '/>' +
            '<path d="M212 176 C222 214 212 262 214 300 C215 322 222 342 228 358" ' + FOLD + '/>' +
            '<path d="M200 182 C206 222 200 268 203 316" ' + LITE + '/>' +
            '<ellipse cx="204" cy="160" rx="13" ry="16" ' + DARK + '/>'
    },
    band: {
      main: 'M90 158 C104 112 196 112 210 158 L208 184 C190 148 110 148 92 184 Z',
      under: '<path d="M84 214 C62 122 104 66 150 64 C196 66 238 122 216 214 C210 170 192 142 150 140 C108 142 90 170 84 214 Z" fill="#3B2A24"/>' +
             '<ellipse cx="150" cy="62" rx="27" ry="21" fill="#3B2A24"/>',
      over: '<path d="M98 160 C122 132 180 132 204 160" ' + LITE + '/>' +
            '<path d="M196 126 C204 104 232 100 236 120 C238 134 216 140 200 138 Z" ' + W + '/>' +
            '<path d="M200 138 C212 142 232 150 228 166 C222 176 204 160 196 146 Z" ' + W + '/>' +
            '<circle cx="199" cy="136" r="8" ' + DARK + '/>' +
            '<path d="M206 124 C216 114 228 114 232 122" ' + FOLD + '/>'
    },
    beret: {
      main: 'M78 170 C46 104 104 40 168 52 C222 62 240 122 212 176 C196 148 172 140 148 141 C122 142 98 150 78 170 Z',
      under: '',
      over: '<path d="M80 168 C102 146 124 140 150 140 C174 140 198 148 212 174" fill="none" stroke-width="7" stroke-linecap="round" style="stroke:color-mix(in srgb,var(--w) 72%,#1d0d15)"/>' +
            '<path d="M84 132 C104 86 150 66 204 84" ' + LITE + '/>' +
            '<path d="M162 52 C162 42 168 36 172 34" ' + FOLD + '/>'
    }
  };

  /* o: { style, color, pattern, skin, dress } */
  KL.art = function (o) {
    var s = SHAPES[o.style] || SHAPES.bobo;
    var n = ++uid, pid = 'klp' + n, gid = 'klg' + n;
    var skin = SKIN[(o.skin || 0) % SKIN.length];
    var dress = o.dress || '#FFFAF7';
    var defs = '<defs>' + pattern(o.pattern, pid) +
      '<linearGradient id="' + gid + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#1d0d15" stop-opacity=".3"/></linearGradient></defs>';
    return '<svg class="kl-art" viewBox="0 0 300 380" role="img" aria-label="איור המחשה של כיסוי ראש" style="--w:' + o.color + '" xmlns="http://www.w3.org/2000/svg">' + defs +
      s.under +
      '<path d="M34 380 C36 318 92 300 128 290 L172 290 C208 300 264 318 266 380 Z" fill="' + dress + '"/>' +
      '<path d="M128 290 Q150 312 172 290" fill="none" stroke="rgba(58,29,43,.16)" stroke-width="2"/>' +
      '<path d="M129 232 L129 292 Q150 308 171 292 L171 232 Z" fill="' + skin + '"/>' +
      '<path d="M129 250 Q150 270 171 250 L171 262 Q150 282 129 262 Z" fill="rgba(58,29,43,.13)"/>' +
      '<ellipse cx="150" cy="186" rx="51" ry="65" fill="' + skin + '"/>' +
      '<path d="' + s.main + '" ' + W + '/>' +
      (o.pattern ? '<path d="' + s.main + '" fill="url(#' + pid + ')"/>' : '') +
      '<path d="' + s.main + '" fill="url(#' + gid + ')"/>' +
      s.over +
      '</svg>';
  };

  /* דוגמית בד: פס סאטן מקופל, לכרטיסי קטגוריה ולרקעים */
  KL.swatch = function (color) {
    return '<svg class="kl-swatch" viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden="true" style="--w:' + color + '">' +
      '<rect width="200" height="120" style="fill:var(--w)"/>' +
      '<path d="M0 30 C40 10 70 60 110 36 C150 14 170 50 200 30 L200 60 C170 82 150 44 110 66 C70 90 40 40 0 60 Z" style="fill:color-mix(in srgb,var(--w) 78%,#fff)" opacity=".7"/>' +
      '<path d="M0 78 C40 58 70 108 110 84 C150 62 170 98 200 78 L200 120 L0 120 Z" style="fill:color-mix(in srgb,var(--w) 76%,#1d0d15)" opacity=".55"/>' +
      '</svg>';
  };
})();
