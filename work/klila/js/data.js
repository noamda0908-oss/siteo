/* כלילה — נתוני דמו. בשופיפיי: מוצרים, וריאנטים וקולקציות אמיתיים מחליפים את הקובץ הזה. */
window.KL = window.KL || {};

KL.FREE_SHIPPING = 299;

KL.colors = {
  rose:   { name: 'ורוד עתיק', hex: '#B56B7F' },
  wine:   { name: 'יין',        hex: '#6E2A3F' },
  cream:  { name: 'שמנת',       hex: '#E6D5BD' },
  sage:   { name: 'מרווה',      hex: '#8E9C8A' },
  mustard:{ name: 'חרדל',       hex: '#C9A24A' },
  night:  { name: 'כחול לילה',  hex: '#2F3A5C' },
  black:  { name: 'שחור',       hex: '#2B2529' },
  stone:  { name: 'אבן',        hex: '#B5A594' },
  clay:   { name: 'חמרה',       hex: '#A9583F' },
  peach:  { name: 'אפרסק',      hex: '#E0A389' },
  olive:  { name: 'זית',        hex: '#6C6B3B' },
  mist:   { name: 'תכלת מעושן', hex: '#8AA3B3' }
};

KL.cats = [
  { id: 'scarves',  name: 'מטפחות',          blurb: 'מרובעות ולונגים, לקשירה חופשית' },
  { id: 'turbans',  name: 'טורבנים',         blurb: 'קשורים מראש — שמים ויוצאים' },
  { id: 'bobo',     name: 'בובו ונפח',       blurb: 'כיסוי מלא עם נפח מובנה' },
  { id: 'bands',    name: 'סרטים וחצי כיסוי', blurb: 'קליל, לכל יום' },
  { id: 'hats',     name: 'כובעים',          blurb: 'ברטים וכובעי בד' },
  { id: 'extras',   name: 'אביזרים',         blurb: 'סרטי החלקה ורפידות נפח' }
];

KL.fabrics = {
  viscose: 'ויסקוזה', cotton: 'כותנה', chiffon: 'שיפון', velvet: 'קטיפה', satin: 'סאטן', jersey: "ג'רסי"
};

KL.products = [
  { id: 'ela', name: 'מטפחת אלה', cat: 'scarves', price: 89, style: 'bobo', fabric: 'viscose', pattern: null,
    colors: ['rose', 'sage', 'cream', 'night'], tag: 'חדש', skin: 0,
    short: 'ויסקוזה רכה שנופלת יפה ולא מחליקה.',
    desc: 'מטפחת מרובעת מויסקוזה רכה ונושמת. גדולה מספיק לכיסוי מלא עם נפח, ונוחה גם לקשירה פשוטה מאחור. הבד מט, לא שקוף, ונשאר במקום לאורך היום.',
    size: '110 × 110 ס"מ' },
  { id: 'ruth', name: 'טורבן רות', cat: 'turbans', price: 149, style: 'turban', fabric: 'jersey', pattern: null,
    colors: ['wine', 'black', 'stone', 'olive'], tag: 'קשור מראש', skin: 1,
    short: 'קשור מראש. שמים על הראש ויוצאים מהבית.',
    desc: "טורבן מג'רסי גמיש עם קשירה תפורה מראש. אין מה לקשור ואין מה לסדר — מתאים לבוקר עמוס, ונראה כמו קשירה שלקחה עשר דקות. מתאים להיקף ראש 54–60 ס\"מ.",
    size: 'מידה אחת, גמיש' },
  { id: 'shira', name: 'בובו שירה', cat: 'bobo', price: 119, style: 'bobo', fabric: 'cotton', pattern: 'dots',
    colors: ['peach', 'mist', 'mustard'], tag: null, skin: 2,
    short: 'כיסוי מלא עם רפידת נפח תפורה בפנים.',
    desc: 'כיסוי מלא מכותנה עם רפידת נפח תפורה בפנים, כך שהצורה נשארת גם בלי שיער ארוך מתחת. גומי רך מאחור מחזיק את הכיסוי בלי ללחוץ.',
    size: 'מידה אחת, גומי מתכוונן' },
  { id: 'tamar', name: 'לונג תמר', cat: 'scarves', price: 99, style: 'long', fabric: 'chiffon', pattern: null,
    colors: ['mist', 'rose', 'cream', 'sage'], tag: null, skin: 3,
    short: 'שיפון קליל לקיץ, עם זנבות ארוכים.',
    desc: 'מטפחת לונג משיפון דק וקליל. מתאימה במיוחד לימים חמים — הבד נושם ולא מכביד. הזנבות הארוכים מאפשרים קשירה בצד, צמה או עיטוף כפול.',
    size: '180 × 70 ס"מ' },
  { id: 'michal', name: 'סרט מיכל', cat: 'bands', price: 59, style: 'band', fabric: 'cotton', pattern: 'stripes',
    colors: ['clay', 'night', 'mustard', 'rose'], tag: null, skin: 0,
    short: 'סרט רחב לחצי כיסוי, עם קשר בצד.',
    desc: 'סרט רחב מכותנה לחצי כיסוי. גומי נסתר מאחור וקשר תפור בצד. רחב מספיק לכסות, קליל מספיק כדי לשכוח שהוא שם.',
    size: 'רוחב 12 ס"מ, גמיש' },
  { id: 'yael', name: 'ברט יעל', cat: 'hats', price: 139, style: 'beret', fabric: 'velvet', pattern: null,
    colors: ['wine', 'black', 'olive', 'stone'], tag: 'חורף', skin: 1,
    short: 'ברט קטיפה רך שמכסה את כל השיער.',
    desc: 'ברט מקטיפה רכה עם בטנת כותנה. גזרה רחבה שמכסה את כל השיער, ושוליים גמישים שלא משאירים סימן על המצח.',
    size: 'מידה אחת, 54–59 ס"מ' },
  { id: 'hadas', name: 'מטפחת הדס', cat: 'scarves', price: 95, style: 'long', fabric: 'cotton', pattern: 'floral',
    colors: ['sage', 'peach', 'night'], tag: 'חדש', skin: 2,
    short: 'כותנה מודפסת בדוגמת פרחים קטנה.',
    desc: 'מטפחת כותנה בהדפס פרחים קטן. כותנה נאחזת היטב בשיער ולכן היא בחירה טובה למי שמתחילה לקשור. מתאימה ליומיום ולשבת.',
    size: '100 × 100 ס"מ' },
  { id: 'naomi', name: 'טורבן נעמי', cat: 'turbans', price: 129, style: 'turban', fabric: 'velvet', pattern: null,
    colors: ['night', 'wine', 'mustard'], tag: null, skin: 3,
    short: 'טורבן קטיפה עם קפלים בחזית.',
    desc: 'טורבן קטיפה עם קפלים תפורים בחזית. חם ונעים לחורף, ונראה חגיגי בלי מאמץ. קשור מראש.',
    size: 'מידה אחת, גמיש' },
  { id: 'esther', name: 'מטפחת ערב אסתר', cat: 'scarves', price: 189, style: 'turban', fabric: 'satin', pattern: null,
    colors: ['cream', 'rose', 'black'], tag: 'לאירועים', skin: 0,
    short: 'סאטן מבריק לחתונות, חגים ושבתות חתן.',
    desc: 'מטפחת סאטן עם ברק עדין, לאירועים. מגיעה עם סרט החלקה תואם, כי סאטן מחליק — וככה היא נשארת במקום כל הערב.',
    size: '120 × 120 ס"מ + סרט החלקה' },
  { id: 'avigail', name: 'לונג אביגיל', cat: 'scarves', price: 109, style: 'long', fabric: 'viscose', pattern: 'stripes',
    colors: ['stone', 'clay', 'night'], tag: null, skin: 1,
    short: 'ויסקוזה בפסים דקים, לקשירה עם נפח.',
    desc: 'מטפחת לונג בפסים דקים. הפסים יוצרים עניין בקשירה עצמה — כל עיטוף נראה אחרת. ויסקוזה רכה שנעימה גם בקיץ.',
    size: '190 × 75 ס"מ' },
  { id: 'grip', name: 'סרט החלקה מקטיפה', cat: 'extras', price: 39, style: 'band', fabric: 'velvet', pattern: null,
    colors: ['black', 'stone', 'wine'], tag: 'חובה בארון', skin: 2,
    short: 'שמים מתחת למטפחת — והיא לא זזה.',
    desc: 'סרט קטיפה דק שנחבש מתחת לכל כיסוי ראש ומונע ממנו להחליק אחורה. סקוץ׳ מתכוונן מאחור. מתאים במיוחד לסאטן ולשיפון.',
    size: 'מתכוונן, 50–62 ס"מ' },
  { id: 'pad', name: 'רפידת נפח', cat: 'extras', price: 49, style: 'bobo', fabric: 'jersey', pattern: null,
    colors: ['stone', 'black'], tag: null, skin: 3,
    short: 'נפח מאחור גם בלי שיער ארוך.',
    desc: 'רפידה קלה שנחבשת מתחת למטפחת ונותנת נפח מאחור. שוקלת כמעט כלום, נושמת, ונשארת במקום בעזרת סרט גמיש.',
    size: 'מידה אחת' }
];

KL.byId = function (id) { return KL.products.find(function (p) { return p.id === id; }); };
KL.catName = function (id) { var c = KL.cats.find(function (c) { return c.id === id; }); return c ? c.name : ''; };
KL.money = function (n) { return '₪' + Number(n).toLocaleString('he-IL'); };
