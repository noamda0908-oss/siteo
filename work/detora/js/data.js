/* DE'TORA demo — shared data + storage (demo: saved in this browser only) */
window.DT = (function () {
  var KEY = 'detora_products_v1';
  var WA = ''; // מספר הוואטסאפ של העסק, בפורמט 9725XXXXXXXX

  var CATS = [
    { id: 'dates', he: 'דייטים רומנטיים', en: 'Romantic dates' },
    { id: 'bach', he: 'מסיבות רווקות', en: 'Bachelorette' },
    { id: 'challah', he: 'הפרשות חלה', en: 'Hafrashat challah' },
    { id: 'boxes', he: 'מארזי דיטורה', en: 'Gift boxes' }
  ];

  var DEFAULTS = [
    { id: 'p1', cat: 'dates', name: 'דייט שקיעה על המצוק', price: 890, img: 'img/sunset.jpg',
      desc: 'שולחן לשניים מול השקיעה: מפה לבנה, ורדים, נרות ושמפניה בקירור. מגיעים, מתיישבים, והכול כבר מחכה.', on: true },
    { id: 'p2', cat: 'dates', name: 'צהריים מול הים', price: 690, img: 'img/sea.jpg',
      desc: 'הקמה באור יום מעל קו המים, עם זר פרחים טרי, כלי הגשה ושמפניה. מתאים להצעות נישואין וימי נישואין.', on: true },
    { id: 'p3', cat: 'bach', name: 'קונספט רווקות מלא', price: 1900, img: 'img/bach.jpg',
      desc: 'קיר קשתות ממותג בשם הכלה, עמודים, דשא, פינת קוקטיילים ושלטים. קונספט אחד שמלווה את כל האירוע.', on: true },
    { id: 'p4', cat: 'bach', name: 'הזמנה מעוצבת במעטפת תחרה', price: 28, img: 'img/invite.jpg', unit: 'ליחידה',
      desc: 'הזמנה מודפסת בעיצוב אישי בתוך מעטפת תחרה עם פנינה. העיצוב ממשיך את הקונספט של האירוע.', on: true },
    { id: 'p5', cat: 'bach', name: 'שלט קשת אישי', price: 420, img: 'img/arch.jpg',
      desc: 'קשת מודפסת בשם הכלה ובאיור שנבחר יחד. נשארת אצלך למזכרת אחרי האירוע.', on: true },
    { id: 'p6', cat: 'challah', name: 'ערב הפרשת חלה', price: 1500, img: 'img/challah.jpg',
      desc: 'עמדה לבנה עם קשת בשם הכלה, פמוטים, קערות ותאורה רכה. הקמה ופירוק כלולים.', on: true },
    { id: 'p7', cat: 'boxes', name: 'מארז ליום האהבה', price: 320, img: '',
      desc: 'מארז מתנה בעיצוב דיטורה. את התמונה והתכולה מעדכנים מעמוד הניהול.', on: true }
  ];

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) { var a = JSON.parse(raw); if (Array.isArray(a)) return a; }
    } catch (e) {}
    return JSON.parse(JSON.stringify(DEFAULTS));
  }
  function save(list) {
    try { localStorage.setItem(KEY, JSON.stringify(list)); return true; } catch (e) { return false; }
  }
  function reset() { try { localStorage.removeItem(KEY); } catch (e) {} }
  function cat(id) { for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i]; return CATS[0]; }
  function wa(text) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(text); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function money(n) { return '₪' + Number(n || 0).toLocaleString('he-IL'); }

  return { CATS: CATS, load: load, save: save, reset: reset, cat: cat, wa: wa, esc: esc, money: money };
})();
