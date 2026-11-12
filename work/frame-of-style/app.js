/* ============ הגדרות — כאן מחברים סליקה ומעדכנים מחירים ============ */
const CONFIG={
  PAYMENT_URL:"",            // קישור דף התשלום מחברת הסליקה (Grow / PayPlus / Cardcom וכו')
  CURRENCY:"₪",
  SIZES:[{id:"A4",label:"A4",dim:"21×30",price:59},{id:"A3",label:"A3",dim:"30×42",price:89},{id:"L",label:"50×70",dim:"ס״מ",price:129}]
};
/* ============ מוצרים — מוסיפים שורה + תמונה בתיקיית img ============ */
const PRODUCTS=[
 {id:"neymar",name:"Neymar Jr",cat:"ספורט",tag:"לאוהבי כדורגל",desc:"פוסטר נתונים של מספר 10 הברזילאי."},
 {id:"porsche",name:"Porsche",cat:"רכבים",tag:"לחולי רכבים",desc:"קלאסיקה על רקע גלי טורקיז."},
 {id:"ronaldo",name:"Ronaldo CR7",cat:"ספורט",tag:"לאוהבי כדורגל",desc:"פוסטר נתונים של CR7."},
 {id:"travis",name:"Travis Scott · JACKBOYS 2",cat:"מוזיקה",tag:"לאוהבי מוזיקה",desc:"פוסטר אלבום עם רשימת השירים המלאה, אורך האלבום ותאריך היציאה."},
 {id:"miami",name:"Miami",cat:"ערים",tag:"לחולמים רחוק",desc:"שקיעה, דקלים וקו הרקיע של מיאמי."},
 {id:"juice",name:"Juice WRLD · Goodbye & Good Riddance",cat:"מוזיקה",tag:"לאוהבי מוזיקה",desc:"פוסטר אלבום עם רשימת השירים המלאה, אורך האלבום ותאריך היציאה."}
];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const money=n=>CONFIG.CURRENCY+n;
const byId=id=>PRODUCTS.find(p=>p.id==id);
const frame=(id,extra="")=>`<div class="frame" ${extra}><img src="img/${id}.jpg" alt="${byId(id).name}" decoding="async"></div>`;
const card=(p,i=0)=>`<a class="card rv" style="--d:${(i%4)*.08}s" href="product.html?id=${p.id}" data-cat="${p.cat}">
  <div class="stage">${frame(p.id)}<span class="plus">←</span></div>
  <div class="meta"><span>${p.name}<small>${p.cat}</small></span><span class="pr">החל מ־${money(CONFIG.SIZES[0].price)}</span></div></a>`;
const ARROW=`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 8H2M7 3L2 8l5 5"/></svg>`;

/* ============ חלקים משותפים: תפריט, פוטר, עגלה ============ */
document.body.insertAdjacentHTML("afterbegin",`<div class="grain"></div>
<nav><a href="index.html" class="brand">frame<br>of<br>style</a>
  <div class="navr"><a class="pill" href="index.html#shop">החנות</a><button class="pill" id="cartBtn">עגלה <b id="cartN">0</b></button></div></nav>`);
document.body.insertAdjacentHTML("beforeend",`
<footer data-theme="light">
  <div class="fgrid">
    <div class="rv"><div class="flogo">frame<br>of<br>style</div>
      <p class="fabout">עולם שלם של תמונות קיר מלאות בסטייל. אלפי לקוחות מרוצים, משלוחים לכל הארץ והתאמה אישית לפי הזמנה.</p></div>
    <div class="fcol rv" style="--d:.08s"><h4>באתר</h4>
      <a href="index.html#shop">החנות</a><a href="index.html#custom">התאמה אישית</a><a href="#top">חזרה למעלה</a></div>
    <div class="fcol rv" style="--d:.16s"><h4>דברו איתנו</h4>
      <a href="https://www.instagram.com/frame_of_style/" target="_blank" rel="noopener">אינסטגרם <span>@frame_of_style</span></a>
      <a href="https://linktr.ee/frame_of_style" target="_blank" rel="noopener">וואטסאפ וכל הקישורים <span>linktr.ee</span></a></div>
  </div>
  <div class="fine"><span>© 2026 Frame of Style</span><span>גרסת הדגמה · נבנה ע״י Siteo</span></div>
</footer>
<div class="scrim" id="scrim"></div>
<aside class="drawer" id="drawer" role="dialog" aria-modal="true">
  <button class="x" data-close aria-label="סגירה">✕</button>
  <div id="cartView" style="display:flex;flex-direction:column;flex:1;min-height:0">
    <h3>העגלה</h3><div class="items" id="items"></div>
    <div class="tot"><span>סה״כ</span><span id="total">₪0</span></div>
    <button class="dark-btn" id="toCheckout"><span>המשך לתשלום</span><span>←</span></button>
  </div>
  <div id="checkView" style="display:none">
    <h3>פרטי משלוח</h3>
    <form id="form">
      <input name="name" placeholder="שם מלא" required autocomplete="name">
      <input name="phone" placeholder="טלפון" required inputmode="tel" autocomplete="tel">
      <input name="city" placeholder="עיר" required>
      <input name="addr" placeholder="רחוב ומספר בית" required>
      <div class="tot"><span>לתשלום</span><span id="total2">₪0</span></div>
      <button class="dark-btn" type="submit"><span>לתשלום מאובטח</span><span>🔒</span></button>
    </form>
    <div class="pay" id="pay"></div>
    <button class="note" id="backCart" style="width:100%;text-decoration:underline">חזרה לעגלה</button>
  </div>
</aside>
<div class="toast" id="toast"></div>`);

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
const watch=()=>$$(".rv:not(.in),.stack:not(.in)").forEach(el=>io.observe(el));

let cart=[];try{cart=JSON.parse(localStorage.getItem("fos_cart")||"[]")}catch(e){}
const openEl=el=>{el.classList.add("on");$("#scrim").classList.add("on");document.body.classList.add("lock")};
const closeAll=()=>{$$(".drawer,.scrim").forEach(e=>e.classList.remove("on"));document.body.classList.remove("lock")};
$("#scrim").onclick=closeAll;$$("[data-close]").forEach(b=>b.onclick=closeAll);
addEventListener("keydown",e=>e.key=="Escape"&&closeAll());
function renderCart(){const q=cart.reduce((a,i)=>a+i.q,0),tot=cart.reduce((a,i)=>a+i.q*i.price,0),b=$("#cartN");
  b.textContent=q;b.classList.add("bump");setTimeout(()=>b.classList.remove("bump"),300);
  $("#items").innerHTML=cart.length?cart.map((i,k)=>`<div class="item">${frame(i.id)}
    <div><b>${i.name}</b><small>${i.size} · ממוסגר</small><div class="qty"><button data-q="-1" data-k="${k}">−</button><span>${i.q}</span><button data-q="1" data-k="${k}">+</button></div></div>
    <b>${money(i.q*i.price)}</b></div>`).join(""):`<p class="empty">העגלה עדיין ריקה.<br>הקיר שלכם מחכה.</p>`;
  $("#total").textContent=$("#total2").textContent=money(tot);$("#toCheckout").disabled=!cart.length;
  try{localStorage.setItem("fos_cart",JSON.stringify(cart))}catch(e){}}
$("#items").addEventListener("click",e=>{const b=e.target.closest("[data-q]");if(!b)return;const it=cart[+b.dataset.k];it.q+= +b.dataset.q;if(it.q<1)cart.splice(+b.dataset.k,1);renderCart()});
function toast(t){const el=$("#toast");el.textContent=t;el.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove("on"),2200)}
function addToCart(p,size,srcEl){const key=p.id+size.id,ex=cart.find(i=>i.key==key);
  if(ex)ex.q++;else cart.push({key,id:p.id,name:p.name,size:size.label,price:size.price,q:1});
  const src=srcEl.getBoundingClientRect(),dst=$("#cartBtn").getBoundingClientRect(),fl=document.createElement("div");
  fl.className="fly frame";fl.innerHTML=`<img src="img/${p.id}.jpg" alt="">`;fl.style.cssText=`left:${src.left}px;top:${src.top}px;width:${src.width}px`;document.body.appendChild(fl);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{fl.style.left=dst.left+"px";fl.style.top=dst.top+"px";fl.style.width="26px";fl.style.opacity=".2";fl.style.transform="rotate(-24deg)"}));
  setTimeout(()=>{fl.remove();renderCart();toast("נוסף לעגלה ✓")},800)}
const showView=c=>{$("#cartView").style.display=c?"flex":"none";$("#checkView").style.display=c?"none":"block"};
$("#cartBtn").onclick=()=>{showView(true);$("#pay").classList.remove("on");openEl($("#drawer"))};
$("#toCheckout").onclick=()=>showView(false);$("#backCart").onclick=()=>showView(true);
$("#form").addEventListener("submit",e=>{e.preventDefault();const p=$("#pay");
  p.innerHTML=CONFIG.PAYMENT_URL?`ההזמנה מוכנה. <a href="${CONFIG.PAYMENT_URL}" target="_blank" rel="noopener" style="font-weight:700;text-decoration:underline">מעבר לדף התשלום המאובטח ←</a>`
    :`<b>גרסת הדגמה</b><br>כאן יופיע דף התשלום של חברת הסליקה.<br>לא בוצע חיוב ולא נשמרו פרטים.`;
  p.classList.add("on");p.scrollIntoView({behavior:"smooth",block:"nearest"})});
renderCart();
