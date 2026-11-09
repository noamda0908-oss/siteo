(()=>{var _v=Object.defineProperty;var xv=(s,t,e)=>t in s?_v(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Zt=(s,t,e)=>xv(s,typeof t!="symbol"?t+"":t,e);function Es(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Fm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var _i={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oa={duration:.5,overwrite:!1,delay:0},Of,Fn,tn,Fi=1e8,He=1/Fi,Af=Math.PI*2,vv=Af/4,yv=0,Bm=Math.sqrt,Sv=Math.cos,Mv=Math.sin,Tn=function(t){return typeof t=="string"},fn=function(t){return typeof t=="function"},Rs=function(t){return typeof t=="number"},Pc=function(t){return typeof t=="undefined"},cs=function(t){return typeof t=="object"},gi=function(t){return t!==!1},Uf=function(){return typeof window!="undefined"},vc=function(t){return fn(t)||Tn(t)},zm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vn=Array.isArray,bv=/random\([^)]+\)/g,Tv=/,\s*/g,Cm=/(?:-?\.?\d|\.)+/gi,Ff=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Nr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bf=/[+-]=-?[.\d]+/,wv=/[^,'"\[\]\s]+/gi,Ev=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,sn,as,Rf,zf,wi={},bc={},km,Hm=function(t){return(bc=Mo(t,wi))&&Wn},Ic=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ua=function(t,e){return!e&&console.warn(t)},Gm=function(t,e){return t&&(wi[t]=e)&&bc&&(bc[t]=e)||wi},Fa=function(){return 0},Av={suppressEvents:!0,isStart:!0,kill:!1},yc={suppressEvents:!0,kill:!1},Rv={suppressEvents:!0},kf={},tr=[],Cf={},Vm,pi={},Sf={},Pm=30,Sc=[],Hf="",Gf=function(t){var e=t[0],n,i;if(cs(e)||fn(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Sc.length;i--&&!Sc[i].targetTest(e););n=Sc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new qf(t[i],n)))||t.splice(i,1);return t},er=function(t){return t._gsap||Gf(Bi(t))[0]._gsap},Vf=function(t,e,n){return(n=t[e])&&fn(n)?t[e]():Pc(n)&&t.getAttribute&&t.getAttribute(e)||n},jn=function(t,e){return(t=t.split(",")).forEach(e)||t},dn=function(t){return Math.round(t*1e5)/1e5||0},nn=function(t){return Math.round(t*1e7)/1e7||0},Or=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Cv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Tc=function(){var t=tr.length,e=tr.slice(0),n,i;for(Cf={},tr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Wf=function(t){return!!(t._initted||t._startAt||t.add)},Wm=function(t,e,n,i){tr.length&&!Fn&&Tc(),t.render(e,n,i||!!(Fn&&e<0&&Wf(t))),tr.length&&!Fn&&Tc()},Xm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(wv).length<2?e:Tn(t)?t.trim():t},qm=function(t){return t},Ei=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Pv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Mo=function(t,e){for(var n in e)t[n]=e[n];return t},Im=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=cs(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},wc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},La=function(t){var e=t.parent||sn,n=t.keyframes?Pv(Vn(t.keyframes)):Ei;if(gi(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Iv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Ym=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Lc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},nr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ir=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Lv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Pf=function(t,e,n,i){return t._startAt&&(Fn?t._startAt.revert(yc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Dv=function s(t){return!t||t._ts&&s(t.parent)},Lm=function(t){return t._repeat?bo(t._tTime,t=t.duration()+t._rDelay)*t:0},bo=function(t,e){var n=Math.floor(t=nn(t/e));return t&&n===t?n-1:n},Ec=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Dc=function(t){return t._end=nn(t._start+(t._tDur/Math.abs(t._ts||t._rts||He)||0))},Nc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=nn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Dc(t),n._dirty||Ir(n,t)),t},Zm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ec(t.rawTime(),e),(!e._dur||Ha(0,e.totalDuration(),n)-e._tTime>He)&&e.render(n,!0)),Ir(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-He}},ls=function(t,e,n,i){return e.parent&&nr(e),e._start=nn((Rs(n)?n:!n&&Ac(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==sn?Ui(t,n,e):t._time)+e._delay),e._end=nn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ym(t,e,"_first","_last",t._sort?"_start":0),Ac(e)||(t._recent=e),i||Zm(t,e),t._ts<0&&Nc(t,t._tTime),t},$m=function(t,e){return(wi.ScrollTrigger||Ic("scrollTrigger",e))&&wi.ScrollTrigger.create(e,t)},Jm=function(t,e,n,i,r){if($f(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Fn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Vm!==mi.frame)return tr.push(t),t._lazy=[r,i],1},Nv=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Ac=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ov=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Nv(t)&&!(!t._initted&&Ac(t))||(t._ts<0||t._dp._ts<0)&&!Ac(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Ha(0,t._tDur,e),h=bo(l,a),t._yoyo&&h&1&&(o=1-o),h!==bo(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Fn||i||t._zTime===He||!e&&t._zTime){if(!t._initted&&Jm(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?He:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Pf(t,e,n,!0),t._onUpdate&&!n&&Ti(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ti(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&nr(t,1),!n&&!Fn&&(Ti(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Uv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},To=function(t,e,n,i){var r=t._repeat,o=nn(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:nn(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Nc(t,t._tTime=t._tDur*a),t.parent&&Dc(t),n||Ir(t.parent,t),t},Dm=function(t){return t instanceof Gn?Ir(t):To(t,t._dur)},Fv={_start:0,endTime:Fa,totalDuration:Fa},Ui=function s(t,e,n){var i=t.labels,r=t._recent||Fv,o=t.duration()>=Fi?r.endTime(!1):t._dur,a,l,c;return Tn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Vn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Da=function(t,e,n){var i=Rs(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=gi(l.vars.inherit)&&l.parent;o.immediateRender=gi(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new gn(e[0],o,e[r+1])},ir=function(t,e){return t||t===0?e(t):e},Ha=function(t,e,n){return n<t?t:n>e?e:n},Bn=function(t,e){return!Tn(t)||!(e=Ev.exec(t))?"":e[1]},Bv=function(t,e,n){return ir(n,function(i){return Ha(t,e,i)})},If=[].slice,Km=function(t,e){return t&&cs(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&cs(t[0]))&&!t.nodeType&&t!==as},zv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Tn(i)&&!e||Km(i,1)?(r=n).push.apply(r,Bi(i)):n.push(i)})||n},Bi=function(t,e,n){return tn&&!e&&tn.selector?tn.selector(t):Tn(t)&&!n&&(Rf||!wo())?If.call((e||zf).querySelectorAll(t),0):Vn(t)?zv(t,n):Km(t)?If.call(t,0):t?[t]:[]},Lf=function(t){return t=Bi(t)[0]||Ua("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Bi(e,n.querySelectorAll?n:n===t?Ua("Invalid scope")||zf.createElement("div"):t)}},Qm=function(t){return t.sort(function(){return .5-Math.random()})},jm=function(t){if(fn(t))return t;var e=cs(t)?t:{each:t},n=Lr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return Tn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(f,u,p){var x=(p||e).length,m=o[x],g,y,M,v,b,T,_,S,R;if(!m){if(R=e.grid==="auto"?0:(e.grid||[1,Fi])[1],!R){for(_=-Fi;_<(_=p[R++].getBoundingClientRect().left)&&R<x;);R<x&&R--}for(m=o[x]=[],g=l?Math.min(R,x)*h-.5:i%R,y=R===Fi?0:l?x*d/R-.5:i/R|0,_=0,S=Fi,T=0;T<x;T++)M=T%R-g,v=y-(T/R|0),m[T]=b=c?Math.abs(c==="y"?v:M):Bm(M*M+v*v),b>_&&(_=b),b<S&&(S=b);i==="random"&&Qm(m),m.max=_-S,m.min=S,m.v=x=(parseFloat(e.amount)||parseFloat(e.each)*(R>x?x-1:c?c==="y"?x/R:R:Math.max(R,x/R))||0)*(i==="edges"?-1:1),m.b=x<0?r-x:r,m.u=Bn(e.amount||e.each)||0,n=n&&x<0?Qv(n):n}return x=(m[f]-m.min)/m.max||0,nn(m.b+(n?n(x):x)*m.v)+m.u}},Df=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=nn(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Rs(n)?0:Bn(n))}},tg=function(t,e){var n=Vn(t),i,r;return!n&&cs(t)&&(i=n=t.radius||Fi,t.values?(t=Bi(t.values),(r=!Rs(t[0]))&&(i*=i)):t=Df(t.increment)),ir(e,n?fn(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Fi,h=0,d=t.length,f,u;d--;)r?(f=t[d].x-a,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!i||c<=i?t[h]:o,r||h===o||Rs(o)?h:h+Bn(o)}:Df(t))},eg=function(t,e,n,i){return ir(Vn(t)?!e:n===!0?!!(n=0):!i,function(){return Vn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},kv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Hv=function(t,e){return function(n){return t(parseFloat(n))+(e||Bn(n))}},Gv=function(t,e,n){return ig(t,e,0,1,n)},ng=function(t,e,n){return ir(n,function(i){return t[~~e(i)]})},Vv=function s(t,e,n){var i=e-t;return Vn(t)?ng(t,s(0,t.length),e):ir(n,function(r){return(i+(r-t)%i)%i+t})},Wv=function s(t,e,n){var i=e-t,r=i*2;return Vn(t)?ng(t,s(0,t.length-1),e):ir(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Eo=function(t){return t.replace(bv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Tv);return eg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ig=function(t,e,n,i,r){var o=e-t,a=i-n;return ir(r,function(l){return n+((l-t)/o*a||0)})},Xv=function s(t,e,n,i){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=Tn(t),a={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Vn(t)&&!Vn(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(p){p*=d;var x=Math.min(f,~~p);return h[x](p-x)},n=e}else i||(t=Mo(Vn(t)?[]:{},t));if(!h){for(l in e)Yf.call(a,t,l,"get",e[l]);r=function(p){return Qf(p,a)||(o?t.p:t)}}}return ir(n,r)},Nm=function(t,e,n){var i=t.labels,r=Fi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Ti=function(t,e,n){var i=t.vars,r=i[e],o=tn,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&tr.length&&Tc(),a&&(tn=a),h=l?r.apply(c,l):r.call(c),tn=o,h},Pa=function(t){return nr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Fn),t.progress()<1&&Ti(t,"onInterrupt"),t},So,sg=[],rg=function(t){if(t)if(t=!t.name&&t.default||t,Uf()||t.headless){var e=t.name,n=fn(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Fa,render:Qf,add:Yf,kill:ly,modifier:ay,rawVars:0},o={targetTest:0,get:0,getSetter:Oc,aliases:{},register:0};if(wo(),t!==i){if(pi[e])return;Ei(i,Ei(wc(t,r),o)),Mo(i.prototype,Mo(r,wc(t,o))),pi[i.prop=e]=i,t.targetTest&&(Sc.push(i),kf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Gm(e,i),t.register&&t.register(Wn,i,ti)}else sg.push(t)},qe=255,Ia={aqua:[0,qe,qe],lime:[0,qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qe],navy:[0,0,128],white:[qe,qe,qe],olive:[128,128,0],yellow:[qe,qe,0],orange:[qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qe,0,0],pink:[qe,192,203],cyan:[0,qe,qe],transparent:[qe,qe,qe,0]},Mf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*qe+.5|0},og=function(t,e,n){var i=t?Rs(t)?[t>>16,t>>8&qe,t&qe]:0:Ia.black,r,o,a,l,c,h,d,f,u,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ia[t])i=Ia[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&qe,i&qe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&qe,t&qe]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(Cm),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Mf(l+1/3,r,o),i[1]=Mf(l,r,o),i[2]=Mf(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Ff),n&&i.length<4&&(i[3]=1),i}else i=t.match(Cm)||Ia.transparent;i=i.map(Number)}return e&&!p&&(r=i[0]/qe,o=i[1]/qe,a=i[2]/qe,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===r?(o-a)/u+(o<a?6:0):d===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ag=function(t){var e=[],n=[],i=-1;return t.split(As).forEach(function(r){var o=r.match(Nr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Om=function(t,e,n){var i="",r=(t+i).match(As),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(f){return(f=og(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=ag(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(As,"1").split(Nr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(As),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},As=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ia)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),qv=/hsl[a]?\(/,Xf=function(t){var e=t.join(" "),n;if(As.lastIndex=0,As.test(e))return n=qv.test(e),t[1]=Om(t[1],n),t[0]=Om(t[0],n,ag(t[1])),!0},Ba,mi=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,f,u,p=function x(m){var g=s()-i,y=m===!0,M,v,b,T;if((g>t||g<0)&&(n+=g-e),i+=g,b=i-n,M=b-o,(M>0||y)&&(T=++d.frame,f=b-d.time*1e3,d.time=b=b/1e3,o+=M+(M>=r?0:r-M),v=1),y||(l=c(x)),v)for(u=0;u<a.length;u++)a[u](b,f,T,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){km&&(!Rf&&Uf()&&(as=Rf=window,zf=as.document||{},wi.gsap=Wn,(as.gsapVersions||(as.gsapVersions=[])).push(Wn.version),Hm(bc||as.GreenSockGlobals||!as.gsap&&as||{}),sg.forEach(rg)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Ba=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ba=0,c=Fa},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,g,y){var M=g?function(v,b,T,_){m(v,b,T,_),d.remove(M)}:m;return d.remove(m),a[y?"unshift":"push"](M),wo(),M},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&u>=g&&u--},_listeners:a},d})(),wo=function(){return!Ba&&mi.wake()},Ee={},Yv=/^[\d.\-M][\d.\-,\s]/,Zv=/["']/g,$v=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Zv,"").trim():+c,i=l.substr(a+1).trim();return e},Jv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Kv=function(t){var e=(t+"").split("("),n=Ee[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[$v(e[1])]:Jv(t).split(",").map(Xm)):Ee._CE&&Yv.test(t)?Ee._CE("",t):n},Qv=function(t){return function(e){return 1-t(1-e)}},Lr=function(t,e){return t&&(fn(t)?t:Ee[t]||Kv(t))||e},Ur=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return jn(t,function(a){Ee[a]=wi[a]=r,Ee[o=a.toLowerCase()]=n;for(var l in r)Ee[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ee[a+"."+l]=r[l]}),r},lg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},bf=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Af*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Mv((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:lg(a);return r=Af/r,l.config=function(c,h){return s(t,c,h)},l},Tf=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:lg(n);return i.config=function(r){return s(t,r)},i};jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Ur(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ee.Linear.easeNone=Ee.none=Ee.Linear.easeIn;Ur("Elastic",bf("in"),bf("out"),bf());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Ur("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ur("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ur("Circ",function(s){return-(Bm(1-s*s)-1)});Ur("Sine",function(s){return s===1?1:-Sv(s*vv)+1});Ur("Back",Tf("in"),Tf("out"),Tf());Ee.SteppedEase=Ee.steps=wi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-He;return function(a){return((i*Ha(0,o,a)|0)+r)*n}}};Oa.ease=Ee["quad.out"];jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Hf+=s+","+s+"Params,"});var qf=function(t,e){this.id=yv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Vf,this.set=e?e.getSetter:Oc},za=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,To(this,+e.duration,1,1),this.data=e.data,tn&&(this._ctx=tn,tn.data.push(this)),Ba||mi.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,To(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(wo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Nc(this,n),!r._dp||r.parent||Zm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ls(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===He||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?bo(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-He?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ec(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-He?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Ha(-Math.abs(this._delay),a,r),i!==!1),Dc(this),Lv(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{wo(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==He,o;if(r)for(this._tTime-=He,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+He){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=nn(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ls(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(gi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ec(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Rv);var i=Fn;return Fn=n,Wf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Fn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Dm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Dm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ui(this,n),gi(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,gi(i)),this._dur||(this._zTime=-He),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-He:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-He,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-He)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=fn(n)?n:qm,l=function(){var h=i.then;i.then=null,r&&r(),fn(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Pa(this)},s})();Ei(za.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-He,_prom:0,_ps:!1,_rts:1});var Gn=(function(s){Fm(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=gi(n.sortChildren),sn&&ls(n.parent||sn,Es(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&$m(Es(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Da(0,arguments,this),this},e.from=function(i,r,o){return Da(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Da(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,La(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new gn(i,r,Ui(this,o),1),this},e.call=function(i,r,o){return ls(this,gn.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new gn(i,o,Ui(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,La(o).immediateRender=gi(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,La(a).immediateRender=gi(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:nn(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,p,x,m,g,y,M,v,b,T,_;if(this!==sn&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,v=this._start,M=this._ts,g=!M,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=nn(h%m),h===l?(x=this._repeat,f=c):(b=nn(h/m),x=~~b,x&&x===b&&(f=c,x--),f>c&&(f=c)),b=bo(this._tTime,m),!a&&this._tTime&&b!==x&&this._tTime-b*m-this._dur<=0&&(b=x),T&&x&1&&(f=c-f,_=1),x!==b&&!this._lock){var S=T&&b&1,R=S===(T&&x&1);if(x<b&&(S=!S),a=S?0:h%c?c:h,this._lock=1,this.render(a||(_?0:nn(x*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Ti(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,b=x),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,R&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Uv(this,nn(a),nn(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!b&&(Ti(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(u=this._first;u;){if(p=u._next,(u._act||f>=u._start)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,r,o),f!==this._time||!this._ts&&!g){y=0,p&&(h+=this._zTime=-He);break}}u=p}else{u=this._last;for(var A=i<0?i:f;u;){if(p=u._prev,(u._act||A<=u._end)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(A-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(A-u._start)*u._ts,r,o||Fn&&Wf(u)),f!==this._time||!this._ts&&!g){y=0,p&&(h+=this._zTime=A?-He:He);break}}u=p}}if(y&&!r&&(this.pause(),y.render(f>=a?0:-He)._zTime=f>=a?1:-1,this._ts))return this._start=v,Dc(this),this.render(i,r,o);this._onUpdate&&!r&&Ti(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&nr(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Ti(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Rs(r)||(r=Ui(this,r,i)),!(i instanceof za)){if(Vn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Tn(i))return this.addLabel(i,r);if(fn(i))i=gn.delayedCall(0,i);else return this}return this!==i?ls(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Fi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof gn?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return Tn(i)?this.removeLabel(i):fn(i)?this.killTweensOf(i):(i.parent===this&&Lc(this,i),i===this._recent&&(this._recent=this._last),Ir(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=nn(mi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Ui(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=gn.delayedCall(0,r||Fa,o);return a.data="isPause",this._hasPause=1,ls(this,a,Ui(this,i))},e.removePause=function(i){var r=this._first;for(i=Ui(this,i);r;)r._start===i&&r.data==="isPause"&&nr(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)js!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Bi(i),l=this._first,c=Rs(r),h;l;)l instanceof gn?Cv(l._targets,a)&&(c?(!js||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Ui(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,p=gn.to(o,Ei({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||He,onStart:function(){if(o.pause(),!u){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&To(p,m,0,1).render(p._time,!0,!0),u=1}h&&h.apply(p,d||[])}},r));return f?p.render(0):p},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,Ei({startAt:{time:Ui(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Nm(this,Ui(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Nm(this,Ui(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+He)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=nn(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Ir(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ir(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=Fi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ls(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=nn(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;To(o,o===sn&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(sn._ts&&(Wm(sn,Ec(i,sn)),Vm=mi.frame),mi.frame>=Pm){Pm+=_i.autoSleep||120;var r=sn._first;if((!r||!r._ts)&&_i.autoSleep&&mi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||mi.sleep()}}},t})(za);Ei(Gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var jv=function(t,e,n,i,r,o,a){var l=new ti(this._pt,t,e,0,1,Kf,null,r),c=0,h=0,d,f,u,p,x,m,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Eo(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),f=n.match(yf)||[];d=yf.exec(i);)p=d[0],x=i.substring(c,d.index),u?u=(u+1)%5:x.substr(-5)==="rgba("&&(u=1),p!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:x||h===1?x:",",s:m,c:p.charAt(1)==="="?Or(m,p)-m:parseFloat(p)-m,m:u&&u<4?Math.round:0},c=yf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Bf.test(i)||g)&&(l.e=0),this._pt=l,l},Yf=function(t,e,n,i,r,o,a,l,c,h){fn(i)&&(i=i(r||0,t,o));var d=t[e],f=n!=="get"?n:fn(d)?c?t[e.indexOf("set")||!fn(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=fn(d)?c?sy:hg:Jf,p;if(Tn(i)&&(~i.indexOf("random(")&&(i=Eo(i)),i.charAt(1)==="="&&(p=Or(f,i)+(Bn(f)||0),(p||p===0)&&(i=p))),!h||f!==i||Nf)return!isNaN(f*i)&&i!==""?(p=new ti(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?oy:ug,0,u),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&Ic(e,i),jv.call(this,t,e,f,i,u,l||_i.stringFilter,c))},ty=function(t,e,n,i,r){if(fn(t)&&(t=Na(t,r,e,n,i)),!cs(t)||t.style&&t.nodeType||Vn(t)||zm(t))return Tn(t)?Na(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Na(t[a],r,e,n,i);return o},Zf=function(t,e,n,i,r,o){var a,l,c,h;if(pi[t]&&(a=new pi[t]).init(r,a.rawVars?e[t]:ty(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new ti(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==So))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},js,Nf,$f=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,p=t._dur,x=t._startAt,m=t._targets,g=t.parent,y=g&&g.data==="nested"?g.vars.targets:m,M=t._overwrite==="auto"&&!Of,v=t.timeline,b=i.easeReverse||d,T,_,S,R,A,D,L,k,I,H,V,O,$;if(v&&(!f||!r)&&(r="none"),t._ease=Lr(r,Oa.ease),t._rEase=b&&(Lr(b)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||f&&!i.stagger){if(k=m[0]?er(m[0]).harness:0,O=k&&i[k.prop],T=wc(i,kf),x&&(x._zTime<0&&x.progress(1),e<0&&h&&a&&!u?x.render(-1,!0):x.revert(h&&p?yc:Av),x._lazy=0),o){if(nr(t._startAt=gn.set(m,Ei({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!x&&gi(l),startAt:null,delay:0,onUpdate:c&&function(){return Ti(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fn||!a&&!u)&&t._startAt.revert(yc),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!x){if(e&&(a=!1),S=Ei({overwrite:!1,data:"isFromStart",lazy:a&&!x&&gi(l),immediateRender:a,stagger:0,parent:g},T),O&&(S[k.prop]=O),nr(t._startAt=gn.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fn?t._startAt.revert(yc):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,He,He);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&gi(l)||l&&!p,_=0;_<m.length;_++){if(A=m[_],L=A._gsap||Gf(m)[_]._gsap,t._ptLookup[_]=H={},Cf[L.id]&&tr.length&&Tc(),V=y===m?_:y.indexOf(A),k&&(I=new k).init(A,O||T,t,V,y)!==!1&&(t._pt=R=new ti(t._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){H[W]=R}),I.priority&&(D=1)),!k||O)for(S in T)pi[S]&&(I=Zf(S,T,t,V,A,y))?I.priority&&(D=1):H[S]=R=Yf.call(t,A,S,"get",T[S],V,y,0,i.stringFilter);t._op&&t._op[_]&&t.kill(A,t._op[_]),M&&t._pt&&(js=t,sn.killTweensOf(A,H,t.globalTime(e)),$=!t.parent,js=0),t._pt&&l&&(Cf[L.id]=1)}D&&jf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!$,f&&e<=0&&v.render(Fi,!0,!0)},ey=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Nf=1,t.vars[e]="+=0",$f(t,a),Nf=0,l?Ua(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=dn(n)+Bn(d.e)),d.b&&(d.b=h.s+Bn(d.b))},ny=function(t,e){var n=t[0]?er(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Mo({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},iy=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Vn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Na=function(t,e,n,i,r){return fn(t)?t.call(e,n,i,r):Tn(t)&&~t.indexOf("random(")?Eo(t):t},Rc=Hf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",cg={};jn(Rc+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return cg[s]=1});Rc=Rc.split(",");var gn=(function(s){Fm(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:La(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,p=l.keyframes,x=l.defaults,m=l.scrollTrigger,g=i.parent||sn,y=(Vn(n)||zm(n)?Rs(n[0]):"length"in i)?[n]:Bi(n),M,v,b,T,_,S,R,A;if(a._targets=y.length?Gf(y):Ua("GSAP target "+n+" not found. https://gsap.com",!_i.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,p||f||vc(c)||vc(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(M=a.timeline=new Gn({data:"nested",defaults:x||{},targets:g&&g.data==="nested"?g.vars.targets:y}),M.kill(),M.parent=M._dp=Es(a),M._start=0,f||vc(c)||vc(h)){if(T=y.length,R=f&&jm(f),cs(f))for(_ in f)~Rc.indexOf(_)&&(A||(A={}),A[_]=f[_]);for(v=0;v<T;v++)b=wc(i,cg),b.stagger=0,D&&(b.easeReverse=D),A&&Mo(b,A),S=y[v],b.duration=+Na(c,Es(a),v,S,y),b.delay=(+Na(h,Es(a),v,S,y)||0)-a._delay,!f&&T===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),M.to(S,b,R?R(v,S,y):0),M._ease=Ee.none;M.duration()?c=h=0:a.timeline=0}else if(p){La(Ei(M.vars.defaults,{ease:"none"})),M._ease=Lr(p.ease||i.ease||"none");var L=0,k,I,H;if(Vn(p))p.forEach(function(V){return M.to(y,V,">")}),M.duration();else{b={};for(_ in p)_==="ease"||_==="easeEach"||iy(_,p[_],b,p.easeEach);for(_ in b)for(k=b[_].sort(function(V,O){return V.t-O.t}),L=0,v=0;v<k.length;v++)I=k[v],H={ease:I.e,duration:(I.t-(v?k[v-1].t:0))/100*c},H[_]=I.v,M.to(y,H,L),L+=H.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return u===!0&&!Of&&(js=Es(a),sn.killTweensOf(y),js=0),ls(g,Es(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===nn(g._time)&&gi(d)&&Dv(Es(a))&&g.data!=="nested")&&(a._tTime=-He,a.render(Math.max(0,-h)||0)),m&&$m(Es(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-He&&!h?l:i<He?0:i,f,u,p,x,m,g,y,M;if(!c)Ov(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,M=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+i,r,o);if(f=nn(d%x),d===l?(p=this._repeat,f=c):(m=nn(d/x),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(f=c-f),m=bo(this._tTime,x),f===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==x&&this._initted&&(this._lock=o=1,this.render(nn(x*p),!0).invalidate()._lock=0)}if(!this._initted){if(Jm(this,h?i:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var b=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!m&&(Ti(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(y,u.d),u=u._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Pf(this,i,r,o),Ti(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&Ti(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Pf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&nr(this,1),!r&&!(h&&!a)&&(d||a||g)&&(Ti(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Ba||mi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||$f(this,c),h=this._ease(c/this._dur),ey(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Nc(this,0),this.parent||Ym(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Pa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Fn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,js&&js.vars.overwrite!==!0)._first||Pa(this),this.parent&&o!==this.timeline.totalDuration()&&To(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Bi(i):a,c=this._ptLookup,h=this._pt,d,f,u,p,x,m,g;if((!r||r==="all")&&Iv(a,l))return r==="all"&&(this._pt=0),Pa(this);for(d=this._op=this._op||[],r!=="all"&&(Tn(r)&&(x={},jn(r,function(y){return x[y]=1}),r=x),r=ny(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(d[g]=r,p=f,u={}):(u=d[g]=d[g]||{},p=r);for(x in p)m=f&&f[x],m&&((!("kill"in m.d)||m.d.kill(x)===!0)&&Lc(this,m,"_pt"),delete f[x]),u!=="all"&&(u[x]=1)}return this._initted&&!this._pt&&h&&Pa(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Da(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Da(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return sn.killTweensOf(i,r,o)},t})(za);Ei(gn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});jn("staggerTo,staggerFrom,staggerFromTo",function(s){gn[s]=function(){var t=new Gn,e=If.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Jf=function(t,e,n){return t[e]=n},hg=function(t,e,n){return t[e](n)},sy=function(t,e,n,i){return t[e](i.fp,n)},ry=function(t,e,n){return t.setAttribute(e,n)},Oc=function(t,e){return fn(t[e])?hg:Pc(t[e])&&t.setAttribute?ry:Jf},ug=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},oy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Kf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Qf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},ay=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},ly=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Lc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},cy=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},jf=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},ti=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||ug,this.d=l||this,this.set=c||Jf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=cy,this.m=n,this.mt=r,this.tween=i},s})();jn(Hf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return kf[s]=1});wi.TweenMax=wi.TweenLite=gn;wi.TimelineLite=wi.TimelineMax=Gn;sn=new Gn({sortChildren:!1,defaults:Oa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_i.stringFilter=Xf;var Dr=[],Mc={},hy=[],Um=0,uy=0,wf=function(t){return(Mc[t]||hy).map(function(e){return e()})},ka=function(){var t=Date.now(),e=[];t-Um>2&&(wf("matchMediaInit"),Dr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=as.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),wf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Um=t,wf("matchMedia"))},fg=(function(){function s(e,n){this.selector=n&&Lf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=uy++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){fn(n)&&(r=i,i=n,n=fn);var o=this,a=function(){var c=tn,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Lf(r)),tn=o,d=i.apply(o,arguments),fn(d)&&o._r.push(d),tn=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===fn?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=tn;tn=null,n(this),tn=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof gn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof gn)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=Dr.length;o--;)Dr[o].id===this.id&&Dr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(ka):a.removeEventListener("change",ka)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),fy=(function(){function s(e){this.contexts=[],this.scope=e,tn&&tn.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){cs(n)||(n={matches:n});var o=new fg(0,r||this.scope),a=o.conditions={},l,c,h;tn&&!o.selector&&(o.selector=tn.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=as.matchMedia(n[c]),l&&(Dr.indexOf(o)<0&&Dr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(ka):l.addEventListener("change",ka),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Cc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return rg(i)})},timeline:function(t){return new Gn(t)},getTweensOf:function(t,e){return sn.getTweensOf(t,e)},getProperty:function(t,e,n,i){Tn(t)&&(t=Bi(t)[0]);var r=er(t||{}).get,o=n?qm:Xm;return n==="native"&&(n=""),t&&(e?o((pi[e]&&pi[e].get||r)(t,e,n,i)):function(a,l,c){return o((pi[a]&&pi[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Bi(t),t.length>1){var i=t.map(function(h){return Wn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=pi[e],a=er(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;So._pt=0,d.init(t,n?h+n:h,So,0,[t]),d.render(1,d),So._pt&&Qf(1,So)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Wn.to(t,Ei((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return sn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Lr(t.ease,Oa.ease)),Im(Oa,t||{})},config:function(t){return Im(_i,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!pi[a]&&!wi[a]&&Ua(e+" effect requires "+a+" plugin.")}),Sf[e]=function(a,l,c){return n(Bi(a),Ei(l||{},r),c)},o&&(Gn.prototype[e]=function(a,l,c){return this.add(Sf[e](a,cs(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Ee[t]=Lr(e)},parseEase:function(t,e){return arguments.length?Lr(t,e):Ee},getById:function(t){return sn.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Gn(t),i,r;for(n.smoothChildTiming=gi(t.smoothChildTiming),sn.remove(n),n._dp=0,n._time=n._tTime=sn._time,i=sn._first;i;)r=i._next,(e||!(!i._dur&&i instanceof gn&&i.vars.onComplete===i._targets[0]))&&ls(n,i,i._start-i._delay),i=r;return ls(sn,n,0),n},context:function(t,e){return t?new fg(t,e):tn},matchMedia:function(t){return new fy(t)},matchMediaRefresh:function(){return Dr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ka()},addEventListener:function(t,e){var n=Mc[t]||(Mc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Mc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Vv,wrapYoyo:Wv,distribute:jm,random:eg,snap:tg,normalize:Gv,getUnit:Bn,clamp:Bv,splitColor:og,toArray:Bi,selector:Lf,mapRange:ig,pipe:kv,unitize:Hv,interpolate:Xv,shuffle:Qm},install:Hm,effects:Sf,ticker:mi,updateRoot:Gn.updateRoot,plugins:pi,globalTimeline:sn,core:{PropTween:ti,globals:Gm,Tween:gn,Timeline:Gn,Animation:za,getCache:er,_removeLinkedListItem:Lc,reverting:function(){return Fn},context:function(t){return t&&tn&&(tn.data.push(t),t._ctx=tn),tn},suppressOverwrites:function(t){return Of=t}}};jn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Cc[s]=gn[s]});mi.add(Gn.updateRoot);So=Cc.to({},{duration:0});var dy=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},py=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=dy(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Ef=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Tn(r)&&(l={},jn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}py(a,r)}}}},Wn=Cc.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Fn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ef("roundProps",Df),Ef("modifiers"),Ef("snap",tg))||Cc;gn.version=Gn.version=Wn.version="3.15.1";km=1;Uf()&&wo();var my=Ee.Power0,gy=Ee.Power1,_y=Ee.Power2,xy=Ee.Power3,vy=Ee.Power4,yy=Ee.Linear,Sy=Ee.Quad,My=Ee.Cubic,by=Ee.Quart,Ty=Ee.Quint,wy=Ee.Strong,Ey=Ee.Elastic,Ay=Ee.Back,Ry=Ee.SteppedEase,Cy=Ee.Bounce,Py=Ee.Sine,Iy=Ee.Expo,Ly=Ee.Circ;var dg,sr,Ro,rd,kr,Dy,pg,od,Ny=function(){return typeof window!="undefined"},Ps={},zr=180/Math.PI,Co=Math.PI/180,Ao=Math.atan2,mg=1e8,ad=/([A-Z])/g,Oy=/(left|right|width|margin|padding|x)/i,Uy=/[\s,\(]\S/,hs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ed=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Fy=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},By=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},zy=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ky=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},bg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Tg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Hy=function(t,e,n){return t.style[e]=n},Gy=function(t,e,n){return t.style.setProperty(e,n)},Vy=function(t,e,n){return t._gsap[e]=n},Wy=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Xy=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},qy=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},rn="transform",xi=rn+"Origin",Yy=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Ps&&r){if(this.tfm=this.tfm||{},t!=="transform")t=hs[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Cs(i,a)}):this.tfm[t]=o.x?o[t]:Cs(i,t),t===xi&&(this.tfm.zOrigin=o.zOrigin);else return hs.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(rn)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(xi,e,"")),t=rn}(r||e)&&this.props.push(t,e,r[t])},wg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Zy=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(ad,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=od(),(!r||!r.isStart)&&!n[rn]&&(wg(n),i.zOrigin&&n[xi]&&(n[xi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Eg=function(t,e){var n={target:t,props:[],revert:Zy,save:Yy};return t._gsap||Wn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Ag,nd=function(t,e){var n=sr.createElementNS?sr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):sr.createElement(t);return n&&n.style?n:sr.createElement(t)},Ai=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ad,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Po(e)||e,1)||""},gg="O,Moz,ms,Ms,Webkit".split(","),Po=function(t,e,n){var i=e||kr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(gg[o]+t in r););return o<0?null:(o===3?"ms":o>=0?gg[o]:"")+t},id=function(){Ny()&&window.document&&(dg=window,sr=dg.document,Ro=sr.documentElement,kr=nd("div")||{style:{}},Dy=nd("div"),rn=Po(rn),xi=rn+"Origin",kr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ag=!!Po("perspective"),od=Wn.core.reverting,rd=1)},_g=function(t){var e=t.ownerSVGElement,n=nd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Ro.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Ro.removeChild(n),r},xg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Rg=function(t){var e,n;try{e=t.getBBox()}catch{e=_g(t),n=1}return e&&(e.width||e.height)||n||(e=_g(t)),e&&!e.width&&!e.x&&!e.y?{x:+xg(t,["x","cx","x1"])||0,y:+xg(t,["y","cy","y1"])||0,width:0,height:0}:e},Cg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Rg(t))},or=function(t,e){if(e){var n=t.style,i;e in Ps&&e!==xi&&(e=rn),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ad,"-$1").toLowerCase())):n.removeAttribute(e)}},rr=function(t,e,n,i,r,o){var a=new ti(t._pt,e,n,0,1,o?Tg:bg);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},vg={deg:1,rad:1,turn:1},$y={grid:1,flex:1},ar=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=kr.style,l=Oy.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",p,x,m,g;if(i===o||!r||vg[i]||vg[o])return r;if(o!=="px"&&!f&&(r=s(t,e,n,"px")),g=t.getCTM&&Cg(t),(u||o==="%")&&(Ps[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],dn(u?r/p*d:r/100*p);if(a[l?"width":"height"]=d+(f?o:i),x=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(x=(t.ownerSVGElement||{}).parentNode),(!x||x===sr||!x.appendChild)&&(x=sr.body),m=x._gsap,m&&u&&m.width&&l&&m.time===mi.time&&!m.uncache)return dn(r/m.width*d);if(u&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=d+i,p=t[h],y?t.style[e]=y:or(t,e)}else(u||o==="%")&&!$y[Ai(x,"display")]&&(a.position=Ai(t,"position")),x===t&&(a.position="static"),x.appendChild(kr),p=kr[h],x.removeChild(kr),a.position="absolute";return l&&u&&(m=er(x),m.time=mi.time,m.width=x[h]),dn(f?p*r/d:p&&r?d/p*r:0)},Cs=function(t,e,n,i){var r;return rd||id(),e in hs&&e!=="transform"&&(e=hs[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ps[e]&&e!=="transform"?(r=Wa(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Fc(Ai(t,xi))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Uc[e]&&Uc[e](t,e,n)||Ai(t,e)||Vf(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ar(t,e,r,n)+n:r},Jy=function(t,e,n,i){if(!n||n==="none"){var r=Po(e,t,1),o=r&&Ai(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Ai(t,"borderTopColor"))}var a=new ti(this._pt,t.style,e,0,1,Kf),l=0,c=0,h,d,f,u,p,x,m,g,y,M,v,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ai(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=t.style[e],t.style[e]=i,i=Ai(t,e)||i,x?t.style[e]=x:or(t,e)),h=[n,i],Xf(h),n=h[0],i=h[1],f=n.match(Nr)||[],b=i.match(Nr)||[],b.length){for(;d=Nr.exec(i);)m=d[0],y=i.substring(l,d.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),m!==(x=f[c++]||"")&&(u=parseFloat(x)||0,v=x.substr((u+"").length),m.charAt(1)==="="&&(m=Or(u,m)+v),g=parseFloat(m),M=m.substr((g+"").length),l=Nr.lastIndex-M.length,M||(M=M||_i.units[e]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(u=ar(t,e,x,M)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:u,c:g-u,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Tg:bg;return Bf.test(i)&&(a.e=0),this._pt=a,a},yg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ky=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=yg[n]||n,e[1]=yg[i]||i,e.join(" ")},Qy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Ps[a]&&(l=1,a=a==="transformOrigin"?xi:rn),or(n,a);l&&(or(n,rn),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wa(n,1),o.uncache=1,wg(i)))}},Uc={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new ti(t._pt,e,n,0,0,Qy);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Va=[1,0,0,1,0,0],Pg={},Ig=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Sg=function(t){var e=Ai(t,rn);return Ig(e)?Va:e.substr(7).match(Ff).map(dn)},ld=function(t,e){var n=t._gsap||er(t),i=t.style,r=Sg(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Va:r):(r===Va&&!t.offsetParent&&t!==Ro&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ro.appendChild(t)),r=Sg(t),l?i.display=l:or(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ro.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},sd=function(t,e,n,i,r,o){var a=t._gsap,l=r||ld(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=l[0],p=l[1],x=l[2],m=l[3],g=l[4],y=l[5],M=e.split(" "),v=parseFloat(M[0])||0,b=parseFloat(M[1])||0,T,_,S,R;n?l!==Va&&(_=u*m-p*x)&&(S=v*(m/_)+b*(-x/_)+(x*y-m*g)/_,R=v*(-p/_)+b*(u/_)-(u*y-p*g)/_,v=S,b=R):(T=Rg(t),v=T.x+(~M[0].indexOf("%")?v/100*T.width:v),b=T.y+(~(M[1]||M[0]).indexOf("%")?b/100*T.height:b)),i||i!==!1&&a.smooth?(g=v-c,y=b-h,a.xOffset=d+(g*u+y*x)-g,a.yOffset=f+(g*p+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[xi]="0px 0px",o&&(rr(o,a,"xOrigin",c,v),rr(o,a,"yOrigin",h,b),rr(o,a,"xOffset",d,a.xOffset),rr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},Wa=function(t,e){var n=t._gsap||new qf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Ai(t,xi)||"0",h,d,f,u,p,x,m,g,y,M,v,b,T,_,S,R,A,D,L,k,I,H,V,O,$,W,P,Q,vt,It,Y,ht;return h=d=f=x=m=g=y=M=v=0,u=p=1,n.svg=!!(t.getCTM&&Cg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[rn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[rn]!=="none"?l[rn]:"")),i.scale=i.rotate=i.translate="none"),_=ld(t,n.svg),n.svg&&(n.uncache?($=t.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),sd(t,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,_)),b=n.xOrigin||0,T=n.yOrigin||0,_!==Va&&(D=_[0],L=_[1],k=_[2],I=_[3],h=H=_[4],d=V=_[5],_.length===6?(u=Math.sqrt(D*D+L*L),p=Math.sqrt(I*I+k*k),x=D||L?Ao(L,D)*zr:0,y=k||I?Ao(k,I)*zr+x:0,y&&(p*=Math.abs(Math.cos(y*Co))),n.svg&&(h-=b-(b*D+T*k),d-=T-(b*L+T*I))):(ht=_[6],It=_[7],P=_[8],Q=_[9],vt=_[10],Y=_[11],h=_[12],d=_[13],f=_[14],S=Ao(ht,vt),m=S*zr,S&&(R=Math.cos(-S),A=Math.sin(-S),O=H*R+P*A,$=V*R+Q*A,W=ht*R+vt*A,P=H*-A+P*R,Q=V*-A+Q*R,vt=ht*-A+vt*R,Y=It*-A+Y*R,H=O,V=$,ht=W),S=Ao(-k,vt),g=S*zr,S&&(R=Math.cos(-S),A=Math.sin(-S),O=D*R-P*A,$=L*R-Q*A,W=k*R-vt*A,Y=I*A+Y*R,D=O,L=$,k=W),S=Ao(L,D),x=S*zr,S&&(R=Math.cos(S),A=Math.sin(S),O=D*R+L*A,$=H*R+V*A,L=L*R-D*A,V=V*R-H*A,D=O,H=$),m&&Math.abs(m)+Math.abs(x)>359.9&&(m=x=0,g=180-g),u=dn(Math.sqrt(D*D+L*L+k*k)),p=dn(Math.sqrt(V*V+ht*ht)),S=Ao(H,V),y=Math.abs(S)>2e-4?S*zr:0,v=Y?1/(Y<0?-Y:Y):0),n.svg&&(O=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Ig(Ai(t,rn)),O&&t.setAttribute("transform",O))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(u*=-1,y+=x<=0?180:-180,x+=x<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=dn(u),n.scaleY=dn(p),n.rotation=dn(x)+a,n.rotationX=dn(m)+a,n.rotationY=dn(g)+a,n.skewX=y+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[xi]=Fc(c)),n.xOffset=n.yOffset=0,n.force3D=_i.force3D,n.renderTransform=n.svg?tS:Ag?Lg:jy,n.uncache=0,n},Fc=function(t){return(t=t.split(" "))[0]+" "+t[1]},td=function(t,e,n){var i=Bn(e);return dn(parseFloat(e)+parseFloat(ar(t,"x",n+"px",i)))+i},jy=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Lg(t,e)},Fr="0deg",Ga="0px",Br=") ",Lg=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,p=n.scaleX,x=n.scaleY,m=n.transformPerspective,g=n.force3D,y=n.target,M=n.zOrigin,v="",b=g==="auto"&&t&&t!==1||g===!0;if(M&&(d!==Fr||h!==Fr)){var T=parseFloat(h)*Co,_=Math.sin(T),S=Math.cos(T),R;T=parseFloat(d)*Co,R=Math.cos(T),o=td(y,o,_*R*-M),a=td(y,a,-Math.sin(T)*-M),l=td(y,l,S*R*-M+M)}m!==Ga&&(v+="perspective("+m+Br),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(b||o!==Ga||a!==Ga||l!==Ga)&&(v+=l!==Ga||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Br),c!==Fr&&(v+="rotate("+c+Br),h!==Fr&&(v+="rotateY("+h+Br),d!==Fr&&(v+="rotateX("+d+Br),(f!==Fr||u!==Fr)&&(v+="skew("+f+", "+u+Br),(p!==1||x!==1)&&(v+="scale("+p+", "+x+Br),y.style[rn]=v||"translate(0, 0)"},tS=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,p=n.xOrigin,x=n.yOrigin,m=n.xOffset,g=n.yOffset,y=n.forceCSS,M=parseFloat(o),v=parseFloat(a),b,T,_,S,R;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Co,c*=Co,b=Math.cos(l)*d,T=Math.sin(l)*d,_=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(h*=Co,R=Math.tan(c-h),R=Math.sqrt(1+R*R),_*=R,S*=R,h&&(R=Math.tan(h),R=Math.sqrt(1+R*R),b*=R,T*=R)),b=dn(b),T=dn(T),_=dn(_),S=dn(S)):(b=d,S=f,T=_=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=ar(u,"x",o,"px"),v=ar(u,"y",a,"px")),(p||x||m||g)&&(M=dn(M+p-(p*b+x*_)+m),v=dn(v+x-(p*T+x*S)+g)),(i||r)&&(R=u.getBBox(),M=dn(M+i/100*R.width),v=dn(v+r/100*R.height)),R="matrix("+b+","+T+","+_+","+S+","+M+","+v+")",u.setAttribute("transform",R),y&&(u.style[rn]=R)},eS=function(t,e,n,i,r){var o=360,a=Tn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?zr:1),c=l-i,h=i+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*mg)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*mg)%o-~~(c/o)*o)),t._pt=f=new ti(t._pt,e,n,i,c,Fy),f.e=h,f.u="deg",t._props.push(n),f},Mg=function(t,e){for(var n in e)t[n]=e[n];return t},nS=function(t,e,n){var i=Mg({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,f,u,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[rn]=e,a=Wa(n,1),or(n,rn),n.setAttribute("transform",c)):(c=getComputedStyle(n)[rn],o[rn]=e,a=Wa(n,1),o[rn]=c);for(l in Ps)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=Bn(c),p=Bn(h),d=u!==p?ar(n,l,c,p):parseFloat(c),f=parseFloat(h),t._pt=new ti(t._pt,a,l,d,f-d,ed),t._pt.u=p||0,t._props.push(l));Mg(a,i)};jn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Uc[t>1?"border"+s:s]=function(a,l,c,h,d){var f,u;if(arguments.length<4)return f=o.map(function(p){return Cs(a,p,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(p,x){return u[p]=f[x]=f[x]||f[(x-1)/2|0]}),a.init(l,u,d)}});var cd={name:"css",register:id,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,f,u,p,x,m,g,y,M,v,b,T,_,S,R;rd||id(),this.styles=this.styles||Eg(t),S=this.styles.props,this.tween=n;for(x in e)if(x!=="autoRound"&&(h=e[x],!(pi[x]&&Zf(x,e,n,i,t,r)))){if(u=typeof h,p=Uc[x],u==="function"&&(h=h.call(n,i,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Eo(h)),p)p(this,t,x,h,n)&&(_=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(x)+"").trim(),h+="",As.lastIndex=0,As.test(c)||(m=Bn(c),g=Bn(h),g?m!==g&&(c=ar(t,x,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,x),o.push(x),S.push(x,0,a[x]);else if(u!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,t,r):l[x],Tn(c)&&~c.indexOf("random(")&&(c=Eo(c)),Bn(c+"")||c==="auto"||(c+=_i.units[x]||Bn(Cs(t,x))||""),(c+"").charAt(1)==="="&&(c=Cs(t,x))):c=Cs(t,x),f=parseFloat(c),y=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),d=parseFloat(h),x in hs&&(x==="autoAlpha"&&(f===1&&Cs(t,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,a.visibility),rr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),x!=="scale"&&x!=="transform"&&(x=hs[x],~x.indexOf(",")&&(x=x.split(",")[0]))),M=x in Ps,M){if(this.styles.save(x),R=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=Ai(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=Ai(t,"perspective"),A?t.style.perspective=A:or(t,"perspective")}d=parseFloat(h)}if(v||(b=t._gsap,b.renderTransform&&!e.parseTransform||Wa(t,e.parseTransform),T=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new ti(this._pt,a,rn,0,1,b.renderTransform,b,0,-1),v.dep=1),x==="scale")this._pt=new ti(this._pt,b,"scaleY",b.scaleY,(y?Or(b.scaleY,y+d):d)-b.scaleY||0,ed),this._pt.u=0,o.push("scaleY",x),x+="X";else if(x==="transformOrigin"){S.push(xi,0,a[xi]),h=Ky(h),b.svg?sd(t,h,0,T,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==b.zOrigin&&rr(this,b,"zOrigin",b.zOrigin,g),rr(this,a,x,Fc(c),Fc(h)));continue}else if(x==="svgOrigin"){sd(t,h,1,T,0,this);continue}else if(x in Pg){eS(this,b,x,f,y?Or(f,y+h):h);continue}else if(x==="smoothOrigin"){rr(this,b,"smooth",b.smooth,h);continue}else if(x==="force3D"){b[x]=h;continue}else if(x==="transform"){nS(this,h,t);continue}}else x in a||(x=Po(x)||x);if(M||(d||d===0)&&(f||f===0)&&!Uy.test(h)&&x in a)m=(c+"").substr((f+"").length),d||(d=0),g=Bn(h)||(x in _i.units?_i.units[x]:m),m!==g&&(f=ar(t,x,c,g)),this._pt=new ti(this._pt,M?b:a,x,f,(y?Or(f,y+d):d)-f,!M&&(g==="px"||x==="zIndex")&&e.autoRound!==!1?ky:ed),this._pt.u=g||0,M&&R!==h?(this._pt.b=c,this._pt.e=R,this._pt.r=zy):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=By);else if(x in a)Jy.call(this,t,x,c,y?y+h:h);else if(x in t)this.add(t,x,c||t[x],y?y+h:h,i,r);else if(x!=="parseTransform"){Ic(x,h);continue}M||(x in a?S.push(x,0,a[x]):typeof t[x]=="function"?S.push(x,2,t[x]()):S.push(x,1,c||t[x])),o.push(x)}}_&&jf(this)},render:function(t,e){if(e.tween._time||!od())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Cs,aliases:hs,getSetter:function(t,e,n){var i=hs[e];return i&&i.indexOf(",")<0&&(e=i),e in Ps&&e!==xi&&(t._gsap.x||Cs(t,"x"))?n&&pg===n?e==="scale"?Wy:Vy:(pg=n||{})&&(e==="scale"?Xy:qy):t.style&&!Pc(t.style[e])?Hy:~e.indexOf("-")?Gy:Oc(t,e)},core:{_removeProperty:or,_getMatrix:ld}};Wn.utils.checkPrefix=Po;Wn.core.getStyleSaver=Eg;(function(s,t,e,n){var i=jn(s+","+t+","+e,function(r){Ps[r]=1});jn(t,function(r){_i.units[r]="deg",Pg[r]=1}),hs[i[13]]=s+","+t,jn(n,function(r){var o=r.split(":");hs[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){_i.units[s]="px"});Wn.registerPlugin(cd);var pe=Wn.registerPlugin(cd)||Wn,EA=pe.core.Tween;function Dg(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function iS(s,t,e){return t&&Dg(s.prototype,t),e&&Dg(s,e),s}var zn,kc,sS,vi,lr,cr,Lo,Og,Hr,Do,Ug,Is,Zi,Fg,Bg=function(){return zn||typeof window!="undefined"&&(zn=window.gsap)&&zn.registerPlugin&&zn},zg=1,Io=[],ge=[],$i=[],qa=Date.now,hd=function(t,e){return e},rS=function(){var t=Do.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ge),i.push.apply(i,$i),ge=n,$i=i,hd=function(o,a){return e[o](a)}},Ds=function(t,e){return~$i.indexOf(t)&&$i[$i.indexOf(t)+1][e]},Ya=function(t){return!!~Ug.indexOf(t)},ni=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},ei=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Bc="scrollLeft",zc="scrollTop",ud=function(){return Is&&Is.isPressed||ge.cache++},Hc=function(t,e){var n=function i(r){if(r||r===0){zg&&vi.history.scrollRestoration!=="manual"&&(vi.history.scrollRestoration="manual");var o=Is&&Is.isPressed;r=i.v=Math.round(r)||(Is&&Is.iOS?1:0),t(r),i.cacheID=ge.cache,o&&hd("ss",r)}else(e||ge.cache!==i.cacheID||hd("ref"))&&(i.cacheID=ge.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Xn={s:Bc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Hc(function(s){return arguments.length?vi.scrollTo(s,xn.sc()):vi.pageXOffset||lr[Bc]||cr[Bc]||Lo[Bc]||0})},xn={s:zc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Xn,sc:Hc(function(s){return arguments.length?vi.scrollTo(Xn.sc(),s):vi.pageYOffset||lr[zc]||cr[zc]||Lo[zc]||0})},ii=function(t,e){return(e&&e._ctx&&e._ctx.selector||zn.utils.toArray)(t)[0]||(typeof t=="string"&&zn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},oS=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Ls=function(t,e){var n=e.s,i=e.sc;Ya(t)&&(t=lr.scrollingElement||cr);var r=ge.indexOf(t),o=i===xn.sc?1:2;!~r&&(r=ge.push(t)-1),ge[r+o]||ni(t,"scroll",ud);var a=ge[r+o],l=a||(ge[r+o]=Hc(Ds(t,n),!0)||(Ya(t)?i:Hc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=zn.getProperty(t,"scrollBehavior")==="smooth"),l},Gc=function(t,e,n){var i=t,r=t,o=qa(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,x){var m=qa();x||m-o>l?(r=i,i=p,a=o,o=m):n?i+=p:i=r+(p-r)/(m-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},f=function(p){var x=a,m=r,g=qa();return(p||p===0)&&p!==i&&h(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-x)*1e3};return{update:h,reset:d,getVelocity:f}},Xa=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Ng=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},kg=function(){Do=zn.core.globals().ScrollTrigger,Do&&Do.core&&rS()},Hg=function(t){return zn=t||Bg(),!kc&&zn&&typeof document!="undefined"&&document.body&&(vi=window,lr=document,cr=lr.documentElement,Lo=lr.body,Ug=[vi,lr,cr,Lo],sS=zn.utils.clamp,Fg=zn.core.context||function(){},Hr="onpointerenter"in Lo?"pointer":"mouse",Og=pn.isTouch=vi.matchMedia&&vi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in vi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Zi=pn.eventTypes=("ontouchstart"in cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return zg=0},500),kc=1),Do||kg(),kc};Xn.op=xn;ge.cache=0;var pn=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){kc||Hg(zn)||console.warn("Please gsap.registerPlugin(Observer)"),Do||kg();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,p=n.wheelSpeed,x=n.event,m=n.onDragStart,g=n.onDragEnd,y=n.onDrag,M=n.onPress,v=n.onRelease,b=n.onRight,T=n.onLeft,_=n.onUp,S=n.onDown,R=n.onChangeX,A=n.onChangeY,D=n.onChange,L=n.onToggleX,k=n.onToggleY,I=n.onHover,H=n.onHoverEnd,V=n.onMove,O=n.ignoreCheck,$=n.isNormalizer,W=n.onGestureStart,P=n.onGestureEnd,Q=n.onWheel,vt=n.onEnable,It=n.onDisable,Y=n.onClick,ht=n.scrollSpeed,Tt=n.capture,Rt=n.allowClicks,dt=n.lockAxis,Ut=n.onLockAxis;this.target=a=ii(a)||cr,this.vars=n,u&&(u=zn.utils.toArray(u)),i=i||1e-9,r=r||0,p=p||1,ht=ht||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(vi.getComputedStyle(Lo).lineHeight)||22);var Kt,Ct,$t,zt,Vt,xe,ve,K=this,le=0,$e=0,Ae=n.passive||!h&&n.passive!==!1,oe=Ls(a,Xn),fe=Ls(a,xn),Re=oe(),U=fe(),de=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Zi[0]==="pointerdown",Bt=Ya(a),Ft=a.ownerDocument||lr,ut=[0,0,0],ce=[0,0,0],Gt=0,Yt=function(){return Gt=qa()},C=function(yt,at){return(K.event=yt)&&u&&oS(yt.target,u)||at&&de&&yt.pointerType!=="touch"||O&&O(yt,at)},w=function(){K._vx.reset(),K._vy.reset(),Ct.pause(),d&&d(K)},G=function(){var yt=K.deltaX=Ng(ut),at=K.deltaY=Ng(ce),nt=Math.abs(yt)>=i,wt=Math.abs(at)>=i;D&&(nt||wt)&&D(K,yt,at,ut,ce),nt&&(b&&K.deltaX>0&&b(K),T&&K.deltaX<0&&T(K),R&&R(K),L&&K.deltaX<0!=le<0&&L(K),le=K.deltaX,ut[0]=ut[1]=ut[2]=0),wt&&(S&&K.deltaY>0&&S(K),_&&K.deltaY<0&&_(K),A&&A(K),k&&K.deltaY<0!=$e<0&&k(K),$e=K.deltaY,ce[0]=ce[1]=ce[2]=0),(zt||$t)&&(V&&V(K),$t&&(m&&$t===1&&m(K),y&&y(K),$t=0),zt=!1),xe&&!(xe=!1)&&Ut&&Ut(K),Vt&&(Q(K),Vt=!1),Kt=0},pt=function(yt,at,nt){ut[nt]+=yt,ce[nt]+=at,K._vx.update(yt),K._vy.update(at),c?Kt||(Kt=requestAnimationFrame(G)):G()},ot=function(yt,at){dt&&!ve&&(K.axis=ve=Math.abs(yt)>Math.abs(at)?"x":"y",xe=!0),ve!=="y"&&(ut[2]+=yt,K._vx.update(yt,!0)),ve!=="x"&&(ce[2]+=at,K._vy.update(at,!0)),c?Kt||(Kt=requestAnimationFrame(G)):G()},gt=function(yt){if(!C(yt,1)){yt=Xa(yt,h);var at=yt.clientX,nt=yt.clientY,wt=at-K.x,rt=nt-K.y,Lt=K.isDragging;K.x=at,K.y=nt,(Lt||(wt||rt)&&(Math.abs(K.startX-at)>=r||Math.abs(K.startY-nt)>=r))&&($t||($t=Lt?2:1),Lt||(K.isDragging=!0),ot(wt,rt))}},bt=K.onPress=function(mt){C(mt,1)||mt&&mt.button||(K.axis=ve=null,Ct.pause(),K.isPressed=!0,mt=Xa(mt),le=$e=0,K.startX=K.x=mt.clientX,K.startY=K.y=mt.clientY,K._vx.reset(),K._vy.reset(),ni($?a:Ft,Zi[1],gt,Ae,!0),K.deltaX=K.deltaY=0,M&&M(K))},q=K.onRelease=function(mt){if(!C(mt,1)){ei($?a:Ft,Zi[1],gt,!0);var yt=!isNaN(K.y-K.startY),at=K.isDragging,nt=at&&(Math.abs(K.x-K.startX)>3||Math.abs(K.y-K.startY)>3),wt=Xa(mt);!nt&&yt&&(K._vx.reset(),K._vy.reset(),h&&Rt&&zn.delayedCall(.08,function(){if(qa()-Gt>300&&!mt.defaultPrevented){if(mt.target.click)mt.target.click();else if(Ft.createEvent){var rt=Ft.createEvent("MouseEvents");rt.initMouseEvent("click",!0,!0,vi,1,wt.screenX,wt.screenY,wt.clientX,wt.clientY,!1,!1,!1,!1,0,null),mt.target.dispatchEvent(rt)}}})),K.isDragging=K.isGesturing=K.isPressed=!1,d&&at&&!$&&Ct.restart(!0),$t&&G(),g&&at&&g(K),v&&v(K,nt)}},st=function(yt){return yt.touches&&yt.touches.length>1&&(K.isGesturing=!0)&&W(yt,K.isDragging)},xt=function(){return(K.isGesturing=!1)||P(K)},N=function(yt){if(!C(yt)){var at=oe(),nt=fe();pt((at-Re)*ht,(nt-U)*ht,1),Re=at,U=nt,d&&Ct.restart(!0)}},it=function(yt){if(!C(yt)){yt=Xa(yt,h),Q&&(Vt=!0);var at=(yt.deltaMode===1?l:yt.deltaMode===2?vi.innerHeight:1)*p;pt(yt.deltaX*at,yt.deltaY*at,0),d&&!$&&Ct.restart(!0)}},tt=function(yt){if(!C(yt)){var at=yt.clientX,nt=yt.clientY,wt=at-K.x,rt=nt-K.y;K.x=at,K.y=nt,zt=!0,d&&Ct.restart(!0),(wt||rt)&&ot(wt,rt)}},St=function(yt){K.event=yt,I(K)},_t=function(yt){K.event=yt,H(K)},Mt=function(yt){return C(yt)||Xa(yt,h)&&Y(K)};Ct=K._dc=zn.delayedCall(f||.25,w).pause(),K.deltaX=K.deltaY=0,K._vx=Gc(0,50,!0),K._vy=Gc(0,50,!0),K.scrollX=oe,K.scrollY=fe,K.isDragging=K.isGesturing=K.isPressed=!1,Fg(this),K.enable=function(mt){return K.isEnabled||(ni(Bt?Ft:a,"scroll",ud),o.indexOf("scroll")>=0&&ni(Bt?Ft:a,"scroll",N,Ae,Tt),o.indexOf("wheel")>=0&&ni(a,"wheel",it,Ae,Tt),(o.indexOf("touch")>=0&&Og||o.indexOf("pointer")>=0)&&(ni(a,Zi[0],bt,Ae,Tt),ni(Ft,Zi[2],q),ni(Ft,Zi[3],q),Rt&&ni(a,"click",Yt,!0,!0),Y&&ni(a,"click",Mt),W&&ni(Ft,"gesturestart",st),P&&ni(Ft,"gestureend",xt),I&&ni(a,Hr+"enter",St),H&&ni(a,Hr+"leave",_t),V&&ni(a,Hr+"move",tt)),K.isEnabled=!0,K.isDragging=K.isGesturing=K.isPressed=zt=$t=!1,K._vx.reset(),K._vy.reset(),Re=oe(),U=fe(),mt&&mt.type&&bt(mt),vt&&vt(K)),K},K.disable=function(){K.isEnabled&&(Io.filter(function(mt){return mt!==K&&Ya(mt.target)}).length||ei(Bt?Ft:a,"scroll",ud),K.isPressed&&(K._vx.reset(),K._vy.reset(),ei($?a:Ft,Zi[1],gt,!0)),ei(Bt?Ft:a,"scroll",N,Tt),ei(a,"wheel",it,Tt),ei(a,Zi[0],bt,Tt),ei(Ft,Zi[2],q),ei(Ft,Zi[3],q),ei(a,"click",Yt,!0),ei(a,"click",Mt),ei(Ft,"gesturestart",st),ei(Ft,"gestureend",xt),ei(a,Hr+"enter",St),ei(a,Hr+"leave",_t),ei(a,Hr+"move",tt),K.isEnabled=K.isPressed=K.isDragging=!1,It&&It(K))},K.kill=K.revert=function(){K.disable();var mt=Io.indexOf(K);mt>=0&&Io.splice(mt,1),Is===K&&(Is=0)},Io.push(K),$&&Ya(a)&&(Is=K),K.enable(x)},iS(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();pn.version="3.15.1";pn.create=function(s){return new pn(s)};pn.register=Hg;pn.getAll=function(){return Io.slice()};pn.getById=function(s){return Io.filter(function(t){return t.vars.id===s})[0]};Bg()&&zn.registerPlugin(pn);var Xt,Fo,Me,ke,Pi,Ue,wd,sh,ol,tl,$a,Vc,qn,ah,xd,ri,Gg,Vg,Bo,r0,fd,o0,si,vd,a0,l0,hr,yd,Ed,zo,Ad,ur,Sd,dd,Wc=1,Yn=Date.now,pd=Yn(),Hi=0,Ja=0,Wg=function(t,e,n){var i=Ci(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Xg=function(t,e){return e&&(!Ci(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},aS=function s(){return Ja&&requestAnimationFrame(s)},qg=function(){return ah=1},Yg=function(){return ah=0},us=function(t){return t},Ka=function(t){return Math.round(t*1e5)/1e5||0},c0=function(){return typeof window!="undefined"},h0=function(){return Xt||c0()&&(Xt=window.gsap)&&Xt.registerPlugin&&Xt},Yr=function(t){return!!~wd.indexOf(t)},u0=function(t){return(t==="Height"?Ad:Me["inner"+t])||Pi["client"+t]||Ue["client"+t]},f0=function(t){return Ds(t,"getBoundingClientRect")||(Yr(t)?function(){return ih.width=Me.innerWidth,ih.height=Ad,ih}:function(){return Ns(t)})},lS=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=Ds(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?u0(r):t["client"+r])||0}},cS=function(t,e){return!e||~$i.indexOf(t)?f0(t):function(){return ih}},fs=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Ds(t,n))?o()-f0(t)()[r]:Yr(t)?(Pi[n]||Ue[n])-u0(i):t[n]-t["offset"+i])},Xc=function(t,e){for(var n=0;n<Bo.length;n+=3)(!e||~e.indexOf(Bo[n+1]))&&t(Bo[n],Bo[n+1],Bo[n+2])},Ci=function(t){return typeof t=="string"},Zn=function(t){return typeof t=="function"},Qa=function(t){return typeof t=="number"},Gr=function(t){return typeof t=="object"},Za=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},No=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Oo=Math.abs,d0="left",p0="top",Rd="right",Cd="bottom",Wr="width",Xr="height",el="Right",nl="Left",il="Top",sl="Bottom",vn="padding",zi="margin",Ho="Width",Pd="Height",wn="px",ki=function(t){return Me.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},hS=function(t){var e=ki(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Zg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ns=function(t,e){var n=e&&ki(t)[xd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Xt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},rh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},m0=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},uS=function(t){return function(e){return Xt.utils.snap(m0(t),e)}},Id=function(t){var e=Xt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},fS=function(t){return function(e,n){return Id(m0(t))(e,n.direction)}},qc=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},Ln=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},In=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Yc=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},$g={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Zc={toggleActions:"play",anticipatePin:0},oh={top:0,left:0,center:.5,bottom:1,right:1},jc=function(t,e){if(Ci(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in oh?oh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},$c=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,u=r.fontWeight,p=ke.createElement("div"),x=Yr(n)||Ds(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=x?Ue:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,M=y?c:h,v="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&x?"fixed;":"absolute;"),(m||l||!x)&&(v+=(i===xn?Rd:Cd)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=y,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=v,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],th(p,0,i,y),p},th=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Ho]=1,r["border"+a+Ho]=0,r[n.p]=e+"px",Xt.set(t,r)},Se=[],Md={},al,Jg=function(){return Yn()-Hi>34&&(al||(al=requestAnimationFrame(Os)))},Uo=function(){(!si||!si.isPressed||si.startX>Ue.clientWidth)&&(ge.cache++,si?al||(al=requestAnimationFrame(Os)):Os(),Hi||$r("scrollStart"),Hi=Yn())},md=function(){l0=Me.innerWidth,a0=Me.innerHeight},ja=function(t){ge.cache++,(t===!0||!qn&&!o0&&!ke.fullscreenElement&&!ke.webkitFullscreenElement&&(!vd||l0!==Me.innerWidth||Math.abs(Me.innerHeight-a0)>Me.innerHeight*.25))&&sh.restart(!0)},Zr={},dS=[],g0=function s(){return In(te,"scrollEnd",s)||Vr(!0)},$r=function(t){return Zr[t]&&Zr[t].map(function(e){return e()})||dS},Ri=[],_0=function(t){for(var e=0;e<Ri.length;e+=5)(!t||Ri[e+4]&&Ri[e+4].query===t)&&(Ri[e].style.cssText=Ri[e+1],Ri[e].getBBox&&Ri[e].setAttribute("transform",Ri[e+2]||""),Ri[e+3].uncache=1)},x0=function(){ge.cache++,ge.forEach(function(t){return Zn(t)&&(t.rec=t())})},Ld=function(t,e){var n;for(ri=0;ri<Se.length;ri++)n=Se[ri],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));ur=!0,e&&_0(e),e||$r("revert")},v0=function(t,e){ge.cache++,(e||!oi)&&ge.forEach(function(n){return Zn(n)&&n.cacheID++&&(n.rec=0)}),Ci(t)&&(Ed=t,Me.history.scrollRestoration!==t&&(Me.history.scrollRestoration=t))},oi,qr=0,Kg,pS=function(){if(Kg!==qr){var t=Kg=qr;requestAnimationFrame(function(){return t===qr&&Vr(!0)})}},y0=function(){Ue.appendChild(zo),Ad=!si&&zo.offsetHeight||Me.innerHeight,Ue.removeChild(zo)},Qg=function(t){return ol(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Vr=function(t,e){if(Pi=ke.documentElement,Ue=ke.body,wd=[Me,ke,Pi,Ue],Hi&&!t&&!ur){Ln(te,"scrollEnd",g0);return}y0(),oi=te.isRefreshing=!0,ur||x0();var n=$r("refreshInit");r0&&te.sort(),e||Ld(),ge.forEach(function(i){Zn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Se.slice(0).forEach(function(i){return i.refresh()}),ur=!1,Se.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Sd=1,Qg(!0),Se.forEach(function(i){var r=fs(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Qg(!1),Sd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ge.forEach(function(i){Zn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),v0(Ed,1),sh.pause(),qr++,oi=2,Os(2),Se.forEach(function(i){return Zn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),oi=te.isRefreshing=!1,$r("refresh")},bd=0,eh=1,rl,Os=function(t){if(t===2||!oi&&!ur){te.isUpdating=!0,rl&&rl.update(0);var e=Se.length,n=Yn(),i=n-pd>=50,r=e&&Se[0].scroll();if(eh=bd>r?-1:1,oi||(bd=r),i&&(Hi&&!ah&&n-Hi>200&&(Hi=0,$r("scrollEnd")),$a=pd,pd=n),eh<0){for(ri=e;ri-- >0;)Se[ri]&&Se[ri].update(0,i);eh=1}else for(ri=0;ri<e;ri++)Se[ri]&&Se[ri].update(0,i);te.isUpdating=!1}al=0},Td=[d0,p0,Cd,Rd,zi+sl,zi+el,zi+il,zi+nl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],nh=Td.concat([Wr,Xr,"boxSizing","max"+Ho,"max"+Pd,"position",zi,vn,vn+il,vn+el,vn+sl,vn+nl]),mS=function(t,e,n){ko(n);var i=t._gsap;if(i.spacerIsNative)ko(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},gd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=Td.length,o=e.style,a=t.style,l;r--;)l=Td[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Cd]=a[Rd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Wr]=rh(t,Xn)+wn,o[Xr]=rh(t,xn)+wn,o[vn]=a[zi]=a[p0]=a[d0]="0",ko(i),a[Wr]=a["max"+Ho]=n[Wr],a[Xr]=a["max"+Pd]=n[Xr],a[vn]=n[vn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},gS=/([A-Z])/g,ko=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Xt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(gS,"-$1").toLowerCase())}},Jc=function(t){for(var e=nh.length,n=t.style,i=[],r=0;r<e;r++)i.push(nh[r],n[nh[r]]);return i.t=t,i},_S=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},ih={left:0,top:0},jg=function(t,e,n,i,r,o,a,l,c,h,d,f,u,p){Zn(t)&&(t=t(l)),Ci(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?jc("0"+t.substr(3),n):0));var x=u?u.time():0,m,g,y;if(u&&u.seek(0),isNaN(t)||(t=+t),Qa(t))u&&(t=Xt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),a&&th(a,n,i,!0);else{Zn(e)&&(e=e(l));var M=(t||"0").split(" "),v,b,T,_;y=ii(e,l)||Ue,v=Ns(y)||{},(!v||!v.left&&!v.top)&&ki(y).display==="none"&&(_=y.style.display,y.style.display="block",v=Ns(y),_?y.style.display=_:y.style.removeProperty("display")),b=jc(M[0],v[i.d]),T=jc(M[1]||"0",n),t=v[i.p]-c[i.p]-h+b+r-T,a&&th(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var S=t+n,R=o._isStart;m="scroll"+i.d2,th(o,S,i,R&&S>20||!R&&(d?Math.max(Ue[m],Pi[m]):o.parentNode[m])<=S+1),d&&(c=Ns(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+wn))}return u&&y&&(m=Ns(y),u.seek(f),g=Ns(y),u._caScrollDist=m[i.p]-g[i.p],t=t/u._caScrollDist*f),u&&u.seek(x),u?t:Math.round(t)},xS=/(webkit|moz|length|cssText|inset)/i,t0=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===Ue){t._stOrig=r.cssText,a=ki(t);for(o in a)!+o&&!xS.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Xt.core.getCache(t).uncache=1,e.appendChild(t)}},S0=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Kc=function(t,e,n){var i={};i[e.p]="+="+n,Xt.set(t,i)},e0=function(t,e){var n=Ls(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var f=o.tween,u=l.onComplete,p={};c=c||n();var x=S0(n,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return x(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){ge.cache++,o.tween&&Os()},l.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=Xt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Ln(t,"wheel",n.wheelHandler),te.isTouch&&Ln(t,"touchmove",n.wheelHandler),r},te=(function(){function s(e,n){Fo||s.register(Xt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),yd(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ja){this.update=this.refresh=this.kill=us;return}n=Zg(Ci(n)||Qa(n)||n.nodeType?{trigger:n}:n,Zc);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,u=r.pin,p=r.pinSpacing,x=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,y=r.onSnapComplete,M=r.once,v=r.snap,b=r.pinReparent,T=r.pinSpacer,_=r.containerAnimation,S=r.fastScrollEnd,R=r.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Xn:xn,D=!d&&d!==0,L=ii(n.scroller||Me),k=Xt.core.getCache(L),I=Yr(L),H=("pinType"in n?n.pinType:Ds(L,"pinType")||I&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=D&&n.toggleActions.split(" "),$="markers"in n?n.markers:Zc.markers,W=I?0:parseFloat(ki(L)["border"+A.p2+Ho])||0,P=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(P)},vt=lS(L,I,A),It=cS(L,I),Y=0,ht=0,Tt=0,Rt=Ls(L,A),dt,Ut,Kt,Ct,$t,zt,Vt,xe,ve,K,le,$e,Ae,oe,fe,Re,U,de,Bt,Ft,ut,ce,Gt,Yt,C,w,G,pt,ot,gt,bt,q,st,xt,N,it,tt,St,_t;if(P._startClamp=P._endClamp=!1,P._dir=A,m*=45,P.scroller=L,P.scroll=_?_.time.bind(_):Rt,Ct=Rt(),ur&&Rt.rec==null&&(Rt.rec=Ct),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(r0=1,n.refreshPriority===-9999&&(rl=P)),k.tweenScroll=k.tweenScroll||{top:e0(L,xn),left:e0(L,Xn)},P.tweenTo=dt=k.tweenScroll[A.p],P.scrubDuration=function(nt){st=Qa(nt)&&nt,st?q?q.duration(nt):q=Xt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:st,paused:!0,onComplete:function(){return g&&g(P)}}):(q&&q.progress(1).kill(),q=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),gt=0,l||(l=i.vars.id)),v&&((!Gr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Ue.style&&Xt.set(I?[Ue,Pi]:L,{scrollBehavior:"auto"}),ge.forEach(function(nt){return Zn(nt)&&nt.target===(I?ke.scrollingElement||Pi:L)&&(nt.smooth=!1)}),Kt=Zn(v.snapTo)?v.snapTo:v.snapTo==="labels"?uS(i):v.snapTo==="labelsDirectional"?fS(i):v.directional!==!1?function(nt,wt){return Id(v.snapTo)(nt,Yn()-ht<500?0:wt.direction)}:Xt.utils.snap(v.snapTo),xt=v.duration||{min:.1,max:2},xt=Gr(xt)?tl(xt.min,xt.max):tl(xt,xt),N=Xt.delayedCall(v.delay||st/2||.1,function(){var nt=Rt(),wt=Yn()-ht<500,rt=dt.tween;if((wt||Math.abs(P.getVelocity())<10)&&!rt&&!ah&&Y!==nt){var Lt=(nt-zt)/oe,ae=i&&!D?i.totalProgress():Lt,ee=wt?0:(ae-bt)/(Yn()-$a)*1e3||0,Ge=Xt.utils.clamp(-Lt,1-Lt,Oo(ee/2)*ee/.185),je=Lt+(v.inertia===!1?0:Ge),Ne,De,Pe=v,ln=Pe.onStart,Oe=Pe.onInterrupt,cn=Pe.onComplete;if(Ne=Kt(je,P),Qa(Ne)||(Ne=je),De=Math.max(0,Math.round(zt+Ne*oe)),nt<=Vt&&nt>=zt&&De!==nt){if(rt&&!rt._initted&&rt.data<=Oo(De-nt))return;v.inertia===!1&&(Ge=Ne-Lt),dt(De,{duration:xt(Oo(Math.max(Oo(je-ae),Oo(Ne-ae))*.185/ee/.05||0)),ease:v.ease||"power3",data:Oo(De-nt),onInterrupt:function(){return N.restart(!0)&&Oe&&No(P,Oe)},onComplete:function(){P.update(),Y=Rt(),i&&!D&&(q?q.resetTo("totalProgress",Ne,i._tTime/i._tDur):i.progress(Ne)),gt=bt=i&&!D?i.totalProgress():P.progress,y&&y(P),cn&&No(P,cn)}},nt,Ge*oe,De-nt-Ge*oe),ln&&No(P,ln,dt.tween)}}else P.isActive&&Y!==nt&&N.restart(!0)}).pause()),l&&(Md[l]=P),f=P.trigger=ii(f||u!==!0&&u),_t=f&&f._gsap&&f._gsap.stRevert,_t&&(_t=_t(P)),u=u===!0?f:ii(u),Ci(a)&&(a={targets:f,className:a}),u&&(p===!1||p===zi||(p=!p&&u.parentNode&&u.parentNode.style&&ki(u.parentNode).display==="flex"?!1:vn),P.pin=u,Ut=Xt.core.getCache(u),Ut.spacer?fe=Ut.pinState:(T&&(T=ii(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Ut.spacerIsNative=!!T,T&&(Ut.spacerState=Jc(T))),Ut.spacer=de=T||ke.createElement("div"),de.classList.add("pin-spacer"),l&&de.classList.add("pin-spacer-"+l),Ut.pinState=fe=Jc(u)),n.force3D!==!1&&Xt.set(u,{force3D:!0}),P.spacer=de=Ut.spacer,ot=ki(u),Yt=ot[p+A.os2],Ft=Xt.getProperty(u),ut=Xt.quickSetter(u,A.a,wn),gd(u,de,ot),U=Jc(u)),$){$e=Gr($)?Zg($,$g):$g,K=$c("scroller-start",l,L,A,$e,0),le=$c("scroller-end",l,L,A,$e,0,K),Bt=K["offset"+A.op.d2];var Mt=ii(Ds(L,"content")||L);xe=this.markerStart=$c("start",l,Mt,A,$e,Bt,0,_),ve=this.markerEnd=$c("end",l,Mt,A,$e,Bt,0,_),_&&(St=Xt.quickSetter([xe,ve],A.a,wn)),!H&&!($i.length&&Ds(L,"fixedMarkers")===!0)&&(hS(I?Ue:L),Xt.set([K,le],{force3D:!0}),w=Xt.quickSetter(K,A.a,wn),pt=Xt.quickSetter(le,A.a,wn))}if(_){var mt=_.vars.onUpdate,yt=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){P.update(0,0,1),mt&&mt.apply(_,yt||[])})}if(P.previous=function(){return Se[Se.indexOf(P)-1]},P.next=function(){return Se[Se.indexOf(P)+1]},P.revert=function(nt,wt){if(!wt)return P.kill(!0);var rt=nt!==!1||!P.enabled,Lt=qn;rt!==P.isReverted&&(rt&&(it=Math.max(Rt(),P.scroll.rec||0),Tt=P.progress,tt=i&&i.progress()),xe&&[xe,ve,K,le].forEach(function(ae){return ae.style.display=rt?"none":"block"}),rt&&(qn=P,P.update(rt)),u&&(!b||!P.isActive)&&(rt?mS(u,de,fe):gd(u,de,ki(u),C)),rt||P.update(rt),qn=Lt,P.isReverted=rt)},P.refresh=function(nt,wt,rt,Lt){if(!((qn||!P.enabled)&&!wt)){if(u&&nt&&Hi){Ln(s,"scrollEnd",g0);return}!oi&&Q&&Q(P),qn=P,dt.tween&&!rt&&(dt.tween.kill(),dt.tween=0),q&&q.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(X){return X.vars.immediateRender&&X.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var ae=vt(),ee=It(),Ge=_?_.duration():fs(L,A),je=oe<=.01||!oe,Ne=0,De=Lt||0,Pe=Gr(rt)?rt.end:n.end,ln=n.endTrigger||f,Oe=Gr(rt)?rt.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),cn=P.pinnedContainer=n.pinnedContainer&&ii(n.pinnedContainer,P),Mn=f&&Math.max(0,Se.indexOf(P))||0,Je=Mn,Ve,We,bn,os,hn,Ke,di,Qs,Pr,Mi,E,F,J;for($&&Gr(rt)&&(F=Xt.getProperty(K,A.p),J=Xt.getProperty(le,A.p));Je-- >0;)Ke=Se[Je],Ke.end||Ke.refresh(0,1)||(qn=P),di=Ke.pin,di&&(di===f||di===u||di===cn)&&!Ke.isReverted&&(Mi||(Mi=[]),Mi.unshift(Ke),Ke.revert(!0,!0)),Ke!==Se[Je]&&(Mn--,Je--);for(Zn(Oe)&&(Oe=Oe(P)),Oe=Wg(Oe,"start",P),zt=jg(Oe,f,ae,A,Rt(),xe,K,P,ee,W,H,Ge,_,P._startClamp&&"_startClamp")||(u?-.001:0),Zn(Pe)&&(Pe=Pe(P)),Ci(Pe)&&!Pe.indexOf("+=")&&(~Pe.indexOf(" ")?Pe=(Ci(Oe)?Oe.split(" ")[0]:"")+Pe:(Ne=jc(Pe.substr(2),ae),Pe=Ci(Oe)?Oe:(_?Xt.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,zt):zt)+Ne,ln=f)),Pe=Wg(Pe,"end",P),Vt=Math.max(zt,jg(Pe||(ln?"100% 0":Ge),ln,ae,A,Rt()+Ne,ve,le,P,ee,W,H,Ge,_,P._endClamp&&"_endClamp"))||-.001,Ne=0,Je=Mn;Je--;)Ke=Se[Je]||{},di=Ke.pin,di&&Ke.start-Ke._pinPush<=zt&&!_&&Ke.end>0&&(Ve=Ke.end-(P._startClamp?Math.max(0,Ke.start):Ke.start),(di===f&&Ke.start-Ke._pinPush<zt||di===cn)&&isNaN(Oe)&&(Ne+=Ve*(1-Ke.progress)),di===u&&(De+=Ve));if(zt+=Ne,Vt+=Ne,P._startClamp&&(P._startClamp+=Ne),P._endClamp&&!oi&&(P._endClamp=Vt||-.001,Vt=Math.min(Vt,fs(L,A))),oe=Vt-zt||(zt-=.01)&&.001,je&&(Tt=Xt.utils.clamp(0,1,Xt.utils.normalize(zt,Vt,it))),P._pinPush=De,xe&&Ne&&(Ve={},Ve[A.a]="+="+Ne,cn&&(Ve[A.p]="-="+Rt()),Xt.set([xe,ve],Ve)),u&&!(Sd&&P.end>=fs(L,A)))Ve=ki(u),os=A===xn,bn=Rt(),ce=parseFloat(Ft(A.a))+De,!Ge&&Vt>1&&(E=(I?ke.scrollingElement||Pi:L).style,E={style:E,value:E["overflow"+A.a.toUpperCase()]},I&&ki(Ue)["overflow"+A.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+A.a.toUpperCase()]="scroll")),gd(u,de,Ve),U=Jc(u),We=Ns(u,!0),Qs=H&&Ls(L,os?Xn:xn)(),p?(C=[p+A.os2,oe+De+wn],C.t=de,Je=p===vn?rh(u,A)+oe+De:0,Je&&(C.push(A.d,Je+wn),de.style.flexBasis!=="auto"&&(de.style.flexBasis=Je+wn)),ko(C),cn&&Se.forEach(function(X){X.pin===cn&&X.vars.pinSpacing!==!1&&(X._subPinOffset=!0)}),H&&Rt(it)):(Je=rh(u,A),Je&&de.style.flexBasis!=="auto"&&(de.style.flexBasis=Je+wn)),H&&(hn={top:We.top+(os?bn-zt:Qs)+wn,left:We.left+(os?Qs:bn-zt)+wn,boxSizing:"border-box",position:"fixed"},hn[Wr]=hn["max"+Ho]=Math.ceil(We.width)+wn,hn[Xr]=hn["max"+Pd]=Math.ceil(We.height)+wn,hn[zi]=hn[zi+il]=hn[zi+el]=hn[zi+sl]=hn[zi+nl]="0",hn[vn]=Ve[vn],hn[vn+il]=Ve[vn+il],hn[vn+el]=Ve[vn+el],hn[vn+sl]=Ve[vn+sl],hn[vn+nl]=Ve[vn+nl],Re=_S(fe,hn,b),oi&&Rt(0)),i?(Pr=i._initted,fd(1),i.render(i.duration(),!0,!0),Gt=Ft(A.a)-ce+oe+De,G=Math.abs(oe-Gt)>1,H&&G&&Re.splice(Re.length-2,2),i.render(0,!0,!0),Pr||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),fd(0)):Gt=oe,E&&(E.value?E.style["overflow"+A.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+A.a));else if(f&&Rt()&&!_)for(We=f.parentNode;We&&We!==Ue;)We._pinOffset&&(zt-=We._pinOffset,Vt-=We._pinOffset),We=We.parentNode;Mi&&Mi.forEach(function(X){return X.revert(!1,!0)}),P.start=zt,P.end=Vt,Ct=$t=oi?it:Rt(),!_&&!oi&&!ur&&(Ct<it&&Rt(it),P.scroll.rec=0),P.revert(!1,!0),ht=Yn(),N&&(Y=-1,N.restart(!0)),qn=0,i&&D&&(i._initted||tt)&&i.progress()!==tt&&i.progress(tt||0,!0).render(i.time(),!0,!0),(je||Tt!==P.progress||_||x||i&&!i._initted)&&(i&&!D&&(i._initted||Tt||i.vars.immediateRender!==!1)&&i.totalProgress(_&&zt<-.001&&!Tt?Xt.utils.normalize(zt,Vt,0):Tt,!0),P.progress=je||(Ct-zt)/oe===Tt?0:Tt),u&&p&&(de._pinOffset=Math.round(P.progress*Gt)),q&&q.invalidate(),isNaN(F)||(F-=Xt.getProperty(K,A.p),J-=Xt.getProperty(le,A.p),Kc(K,A,F),Kc(xe,A,F-(Lt||0)),Kc(le,A,J),Kc(ve,A,J-(Lt||0))),je&&!oi&&P.update(),h&&!oi&&!Ae&&(Ae=!0,h(P),Ae=!1)}},P.getVelocity=function(){return(Rt()-$t)/(Yn()-$a)*1e3||0},P.endAnimation=function(){Za(P.callbackAnimation),i&&(q?q.progress(1):i.paused()?D||Za(i,P.direction<0,1):Za(i,i.reversed()))},P.labelToScroll=function(nt){return i&&i.labels&&(zt||P.refresh()||zt)+i.labels[nt]/i.duration()*oe||0},P.getTrailing=function(nt){var wt=Se.indexOf(P),rt=P.direction>0?Se.slice(0,wt).reverse():Se.slice(wt+1);return(Ci(nt)?rt.filter(function(Lt){return Lt.vars.preventOverlaps===nt}):rt).filter(function(Lt){return P.direction>0?Lt.end<=zt:Lt.start>=Vt})},P.update=function(nt,wt,rt){if(!(_&&!rt&&!nt)){var Lt=oi===!0?it:P.scroll(),ae=nt?0:(Lt-zt)/oe,ee=ae<0?0:ae>1?1:ae||0,Ge=P.progress,je,Ne,De,Pe,ln,Oe,cn,Mn;if(wt&&($t=Ct,Ct=_?Rt():Lt,v&&(bt=gt,gt=i&&!D?i.totalProgress():ee)),m&&u&&!qn&&!Wc&&Hi&&(!ee&&zt<Lt+(Lt-$t)/(Yn()-$a)*m?ee=1e-4:ee===1&&Vt>Lt+(Lt-$t)/(Yn()-$a)*m&&(ee=.9999)),ee!==Ge&&P.enabled){if(je=P.isActive=!!ee&&ee<1,Ne=!!Ge&&Ge<1,Oe=je!==Ne,ln=Oe||!!ee!=!!Ge,P.direction=ee>Ge?1:-1,P.progress=ee,ln&&!qn&&(De=ee&&!Ge?0:ee===1?1:Ge===1?2:3,D&&(Pe=!Oe&&O[De+1]!=="none"&&O[De+1]||O[De],Mn=i&&(Pe==="complete"||Pe==="reset"||Pe in i))),R&&(Oe||Mn)&&(Mn||d||!i)&&(Zn(R)?R(P):P.getTrailing(R).forEach(function(bn){return bn.endAnimation()})),D||(q&&!qn&&!Wc?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",ee,i._tTime/i._tDur):(q.vars.totalProgress=ee,q.invalidate().restart())):i&&i.totalProgress(ee,!!(qn&&(ht||nt)))),u){if(nt&&p&&(de.style[p+A.os2]=Yt),!H)ut(Ka(ce+Gt*ee));else if(ln){if(cn=!nt&&ee>Ge&&Vt+1>Lt&&Lt+1>=fs(L,A),b)if(!nt&&(je||cn)){var Je=Ns(u,!0),Ve=Lt-zt;t0(u,Ue,Je.top+(A===xn?Ve:0)+wn,Je.left+(A===xn?0:Ve)+wn)}else t0(u,de);ko(je||cn?Re:U),G&&ee<1&&je||ut(ce+(ee===1&&!cn?Gt:0))}}v&&!dt.tween&&!qn&&!Wc&&N.restart(!0),a&&(Oe||M&&ee&&(ee<1||!dd))&&ol(a.targets).forEach(function(bn){return bn.classList[je||M?"add":"remove"](a.className)}),o&&!D&&!nt&&o(P),ln&&!qn?(D&&(Mn&&(Pe==="complete"?i.pause().totalProgress(1):Pe==="reset"?i.restart(!0).pause():Pe==="restart"?i.restart(!0):i[Pe]()),o&&o(P)),(Oe||!dd)&&(c&&Oe&&No(P,c),V[De]&&No(P,V[De]),M&&(ee===1?P.kill(!1,1):V[De]=0),Oe||(De=ee===1?1:3,V[De]&&No(P,V[De]))),S&&!je&&Math.abs(P.getVelocity())>(Qa(S)?S:2500)&&(Za(P.callbackAnimation),q?q.progress(1):Za(i,Pe==="reverse"?1:!ee,1))):D&&o&&!qn&&o(P)}if(pt){var We=_?Lt/_.duration()*(_._caScrollDist||0):Lt;w(We+(K._isFlipped?1:0)),pt(We)}St&&St(-Lt/_.duration()*(_._caScrollDist||0))}},P.enable=function(nt,wt){P.enabled||(P.enabled=!0,Ln(L,"resize",ja),I||Ln(L,"scroll",Uo),Q&&Ln(s,"refreshInit",Q),nt!==!1&&(P.progress=Tt=0,Ct=$t=Y=Rt()),wt!==!1&&P.refresh())},P.getTween=function(nt){return nt&&dt?dt.tween:q},P.setPositions=function(nt,wt,rt,Lt){if(_){var ae=_.scrollTrigger,ee=_.duration(),Ge=ae.end-ae.start;nt=ae.start+Ge*nt/ee,wt=ae.start+Ge*wt/ee}P.refresh(!1,!1,{start:Xg(nt,rt&&!!P._startClamp),end:Xg(wt,rt&&!!P._endClamp)},Lt),P.update()},P.adjustPinSpacing=function(nt){if(C&&nt){var wt=C.indexOf(A.d)+1;C[wt]=parseFloat(C[wt])+nt+wn,C[1]=parseFloat(C[1])+nt+wn,ko(C)}},P.disable=function(nt,wt){if(nt!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,wt||q&&q.pause(),it=0,Ut&&(Ut.uncache=1),Q&&In(s,"refreshInit",Q),N&&(N.pause(),dt.tween&&dt.tween.kill()&&(dt.tween=0)),!I)){for(var rt=Se.length;rt--;)if(Se[rt].scroller===L&&Se[rt]!==P)return;In(L,"resize",ja),I||In(L,"scroll",Uo)}},P.kill=function(nt,wt){P.disable(nt,wt),q&&!wt&&q.kill(),l&&delete Md[l];var rt=Se.indexOf(P);rt>=0&&Se.splice(rt,1),rt===ri&&eh>0&&ri--,rt=0,Se.forEach(function(Lt){return Lt.scroller===P.scroller&&(rt=1)}),rt||oi||ur||(P.scroll.rec=0),i&&(i.scrollTrigger=null,nt&&i.revert({kill:!1}),wt||i.kill()),xe&&[xe,ve,K,le].forEach(function(Lt){return Lt.parentNode&&Lt.parentNode.removeChild(Lt)}),rl===P&&(rl=0),u&&(Ut&&(Ut.uncache=1),rt=0,Se.forEach(function(Lt){return Lt.pin===u&&rt++}),rt||(Ut.spacer=0)),n.onKill&&n.onKill(P)},Se.push(P),P.enable(!1,!1),_t&&_t(P),i&&i.add&&!oe){var at=P.update;P.update=function(){P.update=at,ge.cache++,zt||Vt||P.refresh()},Xt.delayedCall(.01,P.update),oe=.01,zt=Vt=0}else P.refresh();u&&pS()},s.register=function(n){return Fo||(Xt=n||h0(),c0()&&window.document&&s.enable(),Fo=Ja),Fo},s.defaults=function(n){if(n)for(var i in n)Zc[i]=n[i];return Zc},s.disable=function(n,i){Ja=0,Se.forEach(function(o){return o[i?"kill":"disable"](n)}),In(Me,"wheel",Uo),In(ke,"scroll",Uo),clearInterval(Vc),In(ke,"touchcancel",us),In(Ue,"touchstart",us),qc(In,ke,"pointerdown,touchstart,mousedown",qg),qc(In,ke,"pointerup,touchend,mouseup",Yg),sh.kill(),Xc(In);for(var r=0;r<ge.length;r+=3)Yc(In,ge[r],ge[r+1]),Yc(In,ge[r],ge[r+2])},s.enable=function(){if(Me=window,ke=document,Pi=ke.documentElement,Ue=ke.body,Xt){if(ol=Xt.utils.toArray,tl=Xt.utils.clamp,yd=Xt.core.context||us,fd=Xt.core.suppressOverwrites||us,Ed=Me.history.scrollRestoration||"auto",bd=Me.pageYOffset||0,Xt.core.globals("ScrollTrigger",s),Ue){Ja=1,zo=document.createElement("div"),zo.style.height="100vh",zo.style.position="absolute",y0(),aS(),pn.register(Xt),s.isTouch=pn.isTouch,hr=pn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),vd=pn.isTouch===1,Ln(Me,"wheel",Uo),wd=[Me,ke,Pi,Ue],Xt.matchMedia?(s.matchMedia=function(h){var d=Xt.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},Xt.addEventListener("matchMediaInit",function(){x0(),Ld()}),Xt.addEventListener("matchMediaRevert",function(){return _0()}),Xt.addEventListener("matchMedia",function(){Vr(0,1),$r("matchMedia")}),Xt.matchMedia().add("(orientation: portrait)",function(){return md(),md})):console.warn("Requires GSAP 3.11.0 or later"),md(),Ln(ke,"scroll",Uo);var n=Ue.hasAttribute("style"),i=Ue.style,r=i.borderTopStyle,o=Xt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ns(Ue),xn.m=Math.round(a.top+xn.sc())||0,Xn.m=Math.round(a.left+Xn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Ue.setAttribute("style",""),Ue.removeAttribute("style")),Vc=setInterval(Jg,250),Xt.delayedCall(.5,function(){return Wc=0}),Ln(ke,"touchcancel",us),Ln(Ue,"touchstart",us),qc(Ln,ke,"pointerdown,touchstart,mousedown",qg),qc(Ln,ke,"pointerup,touchend,mouseup",Yg),xd=Xt.utils.checkPrefix("transform"),nh.push(xd),Fo=Yn(),sh=Xt.delayedCall(.2,Vr).pause(),Bo=[ke,"visibilitychange",function(){var h=Me.innerWidth,d=Me.innerHeight;ke.hidden?(Gg=h,Vg=d):(Gg!==h||Vg!==d)&&ja()},ke,"DOMContentLoaded",Vr,Me,"load",Vr,Me,"resize",ja],Xc(Ln),Se.forEach(function(h){return h.enable(0,1)}),l=0;l<ge.length;l+=3)Yc(In,ge[l],ge[l+1]),Yc(In,ge[l],ge[l+2])}else if(ke){var c=function h(){s.enable(),ke.removeEventListener("DOMContentLoaded",h)};ke.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(dd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Vc)||(Vc=i)&&setInterval(Jg,i),"ignoreMobileResize"in n&&(vd=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Xc(In)||Xc(Ln,n.autoRefreshEvents||"none"),o0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=ii(n),o=ge.indexOf(r),a=Yr(r);~o&&ge.splice(o,a?6:2),i&&(a?$i.unshift(Me,i,Ue,i,Pi,i):$i.unshift(r,i))},s.clearMatchMedia=function(n){Se.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Ci(n)?ii(n):n).getBoundingClientRect(),a=o[r?Wr:Xr]*i||0;return r?o.right-a>0&&o.left+a<Me.innerWidth:o.bottom-a>0&&o.top+a<Me.innerHeight},s.positionInViewport=function(n,i,r){Ci(n)&&(n=ii(n));var o=n.getBoundingClientRect(),a=o[r?Wr:Xr],l=i==null?a/2:i in oh?oh[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/Me.innerWidth:(o.top+l)/Me.innerHeight},s.killAll=function(n){if(Se.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Zr.killAll||[];Zr={},i.forEach(function(r){return r()})}},s})();te.version="3.15.1";te.saveStyles=function(s){return s?ol(s).forEach(function(t){if(t&&t.style){var e=Ri.indexOf(t);e>=0&&Ri.splice(e,5),Ri.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Xt.core.getCache(t),yd())}}):Ri};te.revert=function(s,t){return Ld(!s,t)};te.create=function(s,t){return new te(s,t)};te.refresh=function(s){return s?ja(!0):(Fo||te.register())&&Vr(!0)};te.update=function(s){return++ge.cache&&Os(s===!0?2:0)};te.clearScrollMemory=v0;te.maxScroll=function(s,t){return fs(s,t?Xn:xn)};te.getScrollFunc=function(s,t){return Ls(ii(s),t?Xn:xn)};te.getById=function(s){return Md[s]};te.getAll=function(){return Se.filter(function(s){return s.vars.id!=="ScrollSmoother"})};te.isScrolling=function(){return!!Hi};te.snapDirectional=Id;te.addEventListener=function(s,t){var e=Zr[s]||(Zr[s]=[]);~e.indexOf(t)||e.push(t)};te.removeEventListener=function(s,t){var e=Zr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};te.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],f=[],u=Xt.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(p){d.length||u.restart(!0),d.push(p.trigger),f.push(p),r<=d.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Zn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Zn(r)&&(r=r(),Ln(te,"refresh",function(){return r=t.batchMax()})),ol(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(te.create(c))}),e};var n0=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},_d=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(pn.isTouch?" pinch-zoom":""):"none",t===Pi&&s(Ue,e)},Qc={auto:1,scroll:1},vS=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Xt.core.getCache(r),a=Yn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Ue&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Qc[(l=ki(r)).overflowY]||Qc[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Yr(r)&&(Qc[(l=ki(r)).overflowY]||Qc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},M0=function(t,e,n,i){return pn.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&vS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ln(ke,pn.eventTypes[0],s0,!1,!0)},onDisable:function(){return In(ke,pn.eventTypes[0],s0,!0)}})},yS=/(input|label|select|textarea)/i,i0,s0=function(t){var e=yS.test(t.target.tagName);(e||i0)&&(t._gsapAllow=!0,i0=e)},SS=function(t){Gr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=ii(t.target)||Pi,h=Xt.core.globals().ScrollSmoother,d=h&&h.get(),f=hr&&(t.content&&ii(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=Ls(c,xn),p=Ls(c,Xn),x=1,m=(pn.isTouch&&Me.visualViewport?Me.visualViewport.scale*Me.visualViewport.width:Me.outerWidth)/Me.innerWidth,g=0,y=Zn(i)?function(){return i(a)}:function(){return i||2.8},M,v,b=M0(c,t.type,!0,r),T=function(){return v=!1},_=us,S=us,R=function(){l=fs(c,xn),S=tl(hr?1:0,l),n&&(_=tl(0,fs(c,Xn))),M=qr},A=function(){f._gsap.y=Ka(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},D=function(){if(v){requestAnimationFrame(T);var $=Ka(a.deltaY/2),W=S(u.v-$);if(f&&W!==u.v+u.offset){u.offset=W-u.v;var P=Ka((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",u.cacheID=ge.cache,Os()}return!0}u.offset&&A(),v=!0},L,k,I,H,V=function(){R(),L.isActive()&&L.vars.scrollY>l&&(u()>l?L.progress(1)&&u(l):L.resetTo("scrollY",l))};return f&&Xt.set(f,{y:"+=0"}),t.ignoreCheck=function(O){return hr&&O.type==="touchmove"&&D(O)||x>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){v=!1;var O=x;x=Ka((Me.visualViewport&&Me.visualViewport.scale||1)/m),L.pause(),O!==x&&_d(c,x>1.01?!0:n?!1:"x"),k=p(),I=u(),R(),M=qr},t.onRelease=t.onGestureStart=function(O,$){if(u.offset&&A(),!$)H.restart(!0);else{ge.cache++;var W=y(),P,Q;n&&(P=p(),Q=P+W*.05*-O.velocityX/.227,W*=n0(p,P,Q,fs(c,Xn)),L.vars.scrollX=_(Q)),P=u(),Q=P+W*.05*-O.velocityY/.227,W*=n0(u,P,Q,fs(c,xn)),L.vars.scrollY=S(Q),L.invalidate().duration(W).play(.01),(hr&&L.vars.scrollY>=l||P>=l-1)&&Xt.to({},{onUpdate:V,duration:W})}o&&o(O)},t.onWheel=function(){L._ts&&L.pause(),Yn()-g>1e3&&(M=0,g=Yn())},t.onChange=function(O,$,W,P,Q){if(qr!==M&&R(),$&&n&&p(_(P[2]===$?k+(O.startX-O.x):p()+$-P[1])),W){u.offset&&A();var vt=Q[2]===W,It=vt?I+O.startY-O.y:u()+W-Q[1],Y=S(It);vt&&It!==Y&&(I+=Y-It),u(Y)}(W||$)&&Os()},t.onEnable=function(){_d(c,n?!1:"x"),te.addEventListener("refresh",V),Ln(Me,"resize",V),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=p.smooth=!1),b.enable()},t.onDisable=function(){_d(c,!0),In(Me,"resize",V),te.removeEventListener("refresh",V),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new pn(t),a.iOS=hr,hr&&!u()&&u(1),hr&&Xt.ticker.add(us),H=a._dc,L=Xt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:S0(u,u(),function(){return L.pause()})},onUpdate:Os,onComplete:H.vars.onComplete}),a};te.sort=function(s){if(Zn(s))return Se.sort(s);var t=Me.pageYOffset||0;return te.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Me.innerHeight}),Se.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};te.observe=function(s){return new pn(s)};te.normalizeScroll=function(s){if(typeof s=="undefined")return si;if(s===!0&&si)return si.enable();if(s===!1){si&&si.kill(),si=s;return}var t=s instanceof pn?s:SS(s);return si&&si.target===t.target&&si.kill(),Yr(t.target)&&(si=t),t};te.core={_getVelocityProp:Gc,_inputObserver:M0,_scrollers:ge,_proxies:$i,bridge:{ss:function(){Hi||$r("scrollStart"),Hi=Yn()},ref:function(){return qn}}};h0()&&Xt.registerPlugin(te);var ll,cl,b0=typeof Symbol=="function"?Symbol():"_split",Nd,MS=()=>Nd||hh.register(window.gsap),T0=typeof Intl!="undefined"&&"Segmenter"in Intl?new Intl.Segmenter:0,hl=s=>s?typeof s=="string"?hl(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((t,e)=>(typeof e=="string"?t.push(...hl(e)):t.push(e),t),[]):[s]:[],w0=s=>hl(s).filter(t=>t&&t.nodeType===1),lh=[],Dd=function(){},bS={add:s=>s()},TS=/\s+/g,E0=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),ch={left:0,top:0,width:0,height:0},wS=(s,t)=>{for(;++t<s.length&&s[t]===ch;);return s[t]||ch},A0=({element:s,html:t,ariaL:e,ariaH:n})=>{s.innerHTML=t,e?s.setAttribute("aria-label",e):s.removeAttribute("aria-label"),n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden")},R0=(s,t)=>{if(t){let e=new Set(s.join("").match(t)||lh),n=s.length,i,r,o,a;if(e.size)for(;--n>-1;){r=s[n];for(o of e)if(o.startsWith(r)&&o.length>r.length){for(i=0,a=r;o.startsWith(a+=s[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){s[n]=o,s.splice(n+1,i);break}}}}return s},C0=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),Go=(s,t,e)=>t.insertBefore(typeof s=="string"?document.createTextNode(s):s,e),Od=(s,t,e)=>{let n=t[s+"sClass"]||"",{tag:i="div",aria:r="auto",propIndex:o=!1}=t,a=s==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let d=document.createElement(i),f=e.length+1;return n&&(d.className=n+(l?" "+n+f:"")),o&&d.style.setProperty("--"+s,f+""),r!=="none"&&d.setAttribute("aria-hidden","true"),i!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(n=n.replace("++","")),c.collection=e,c},ES=(s,t,e,n)=>{let i=Od("line",e,n),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=r,s.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},P0=(s,t,e,n,i,r,o,a,l,c)=>{var h;let d=Array.from(s.childNodes),f=0,{wordDelimiter:u,reduceWhiteSpace:p=!0,prepareText:x}=t,m=s.getBoundingClientRect(),g=m,y=!p&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",M=r&&c&&window.getComputedStyle(s).direction==="rtl",v=0,b=e.collection,T,_,S,R,A,D,L,k,I,H,V,O,$,W,P,Q,vt,It;for(typeof u=="object"?(S=u.delimiter||u,_=u.replaceWith||""):_=u===""?"":u||" ",T=_!==" ";f<d.length;f++)if(R=d[f],R.nodeType===3){for(P=R.textContent||"",p?P=P.replace(TS," "):y&&(P=P.replace(/\n/g,_+`
`)),x&&(P=x(P,s)),R.textContent=P,A=_||S?P.split(S||_):P.match(a)||lh,vt=A[A.length-1],k=T?vt.slice(-1)===" ":!vt,vt||A.pop(),g=m,L=T?A[0].charAt(0)===" ":!A[0],L&&Go(" ",s,R),A[0]||A.shift(),R0(A,l),r&&c||(R.textContent=""),I=1;I<=A.length;I++)if(Q=A[I-1],!p&&y&&Q.charAt(0)===`
`&&((h=R.previousSibling)==null||h.remove(),Go(document.createElement("br"),s,R),Q=Q.slice(1)),!p&&Q==="")Go(_,s,R);else if(Q===" ")s.insertBefore(document.createTextNode(" "),R);else{if(T&&Q.charAt(0)===" "&&Go(" ",s,R),v&&I===1&&!L&&b.indexOf(v.parentNode)>-1?(D=b[b.length-1],D.appendChild(document.createTextNode(n?"":Q))):(D=e(n?"":Q),Go(D,s,R),v&&I===1&&!L&&D.insertBefore(v,D.firstChild)),n){if(V=T0?R0([...T0.segment(Q)].map(Y=>Y.segment),l):Q.match(a)||lh,l){let Y=Q.match(l);Y&&Y.some(ht=>V.indexOf(ht)<0)&&(V=Q.match(a)||lh)}for(It=0;It<V.length;It++)D.appendChild(V[It]===" "?document.createTextNode(" "):n(V[It]))}if(r&&c){if(P=R.textContent=P.substring(Q.length+1,P.length),H=D.getBoundingClientRect(),H.top>g.top&&(M?H.left>=g.left:H.left<=g.left)){for(O=s.cloneNode(),$=s.childNodes[0];$&&$!==D;)W=$,$=$.nextSibling,O.appendChild(W);s.parentNode.insertBefore(O,s),i&&C0(O)}g=H}(I<A.length||k)&&Go(I>=A.length?" ":T&&Q.slice(-1)===" "?" "+_:_,s,R)}s.removeChild(R),v=0}else R.nodeType===1&&(o&&o.indexOf(R)>-1?(b.indexOf(R.previousSibling)>-1&&b[b.length-1].appendChild(R),v=R):(P0(R,t,e,n,i,r,o,a,l,!0),v=0),i&&C0(R))},I0=class L0{constructor(t,e){this.isSplit=!1,MS(),this.elements=w0(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(r=>{var o;e.overwrite!==!1&&((o=r[b0])==null||o._data.orig.filter(({element:a})=>a===r).forEach(A0)),r[b0]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i=()=>{let r=n.length,o;for(;r--;){o=n[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver!="undefined"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(i,200)})},Dd(this),this.split(e)}split(t){return(this._ctx||bS).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,f=e.indexOf("words")>-1,u=d&&!f&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),x=p?new RegExp(p.source+"|"+E0.source,"gu"):E0,m=!!t.ignore&&w0(t.ignore),{orig:g,animTime:y,obs:M}=this._data,v;(d||f||h)&&(this.elements.forEach((b,T)=>{g[T]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},n==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):n==="hidden"&&b.setAttribute("aria-hidden","true");let _=[],S=[],R=[],A=d?Od("char",t,_):null,D=Od("word",t,S),L,k,I,H;if(P0(b,t,D,A,u,i&&(h||u),m,x,p,!1),h){let V=hl(b.childNodes),O=ES(b,V,t,R),$,W=[],P=0,Q=window.getComputedStyle(b).direction==="rtl",vt=V.map(ht=>ht.nodeType===1?ht.getBoundingClientRect():ch),It=ch,Y;for(L=0;L<V.length;L++)$=V[L],$.nodeType===1&&($.nodeName==="BR"?((!L||V[L-1].nodeName!=="BR")&&(W.push($),O(P,L+1)),P=L+1,It=wS(vt,L)):(Y=vt[L],L&&Y.top>It.top&&(Q?Y.left+Y.width>It.left+1:Y.left<It.left+It.width-1)&&(O(P,L),P=L),It=Y));P<L&&O(P,L),W.forEach(ht=>{var Tt;return(Tt=ht.parentNode)==null?void 0:Tt.removeChild(ht)})}if(!f){for(L=0;L<S.length;L++)if(k=S[L],d||!k.nextSibling||k.nextSibling.nodeType!==3)if(r&&!h){for(I=document.createElement("span"),I.style.whiteSpace="nowrap";k.firstChild;)I.appendChild(k.firstChild);k.replaceWith(I)}else k.replaceWith(...k.childNodes);else H=k.nextSibling,H&&H.nodeType===3&&(H.textContent=(k.textContent||"")+(H.textContent||""),k.remove());S.length=0,b.normalize()}this.lines.push(...R),this.words.push(...S),this.chars.push(..._)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let T=b.cloneNode();return b.replaceWith(T),T.appendChild(b),b.className&&(T.className=b.className.trim().split(" ").map(_=>_+"-mask").join(" ")),T.style.overflow="clip",T.style.verticalAlign="top",T}))),this.isSplit=!0,cl&&h&&a&&cl.addEventListener("loadingdone",this._split),(v=o&&o(this))&&v.totalTime&&(this._data.anim=y?v.totalTime(y):v),h&&a&&this.elements.forEach((b,T)=>{g[T].width=b.offsetWidth,M&&M.observe(b)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),cl==null||cl.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(A0),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new L0(t,e)}static register(t){ll=ll||t||window.gsap,ll&&(hl=ll.utils.toArray,Dd=ll.core.context||Dd),!Nd&&window.innerWidth>0&&(cl=document.fonts,Nd=!0)}};I0.version="3.15.1";var hh=I0;var D0="1.3.27";function U0(s,t,e){return Math.max(s,Math.min(t,e))}function AS(s,t,e){return(1-e)*s+e*t}function RS(s,t,e,n){return AS(s,t,1-Math.exp(-e*n))}function CS(s,t){return(s%t+t)%t}var PS=class{constructor(){Zt(this,"isRunning",!1);Zt(this,"value",0);Zt(this,"from",0);Zt(this,"to",0);Zt(this,"currentTime",0);Zt(this,"lerp");Zt(this,"duration");Zt(this,"easing");Zt(this,"onUpdate")}advance(s){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let n=U0(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=RS(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=o}};function IS(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var LS=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Zt(this,"width",0);Zt(this,"height",0);Zt(this,"scrollHeight",0);Zt(this,"scrollWidth",0);Zt(this,"debouncedResize");Zt(this,"wrapperResizeObserver");Zt(this,"contentResizeObserver");Zt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Zt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Zt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=IS(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,t;(s=this.wrapperResizeObserver)==null||s.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},F0=class{constructor(){Zt(this,"events",{})}emit(s,...t){var n;let e=this.events[s]||[];for(let i=0,r=e.length;i<r;i++)(n=e[i])==null||n.call(e,...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}}off(s,t){var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},DS=100/6,fr={passive:!1};function N0(s,t){return s===1?DS:s===2?t:1}var NS=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Zt(this,"touchStart",{x:0,y:0});Zt(this,"lastDelta",{x:0,y:0});Zt(this,"window",{width:0,height:0});Zt(this,"emitter",new F0);Zt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Zt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Zt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Zt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=N0(n,this.window.width),r=N0(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Zt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,fr),this.element.addEventListener("touchstart",this.onTouchStart,fr),this.element.addEventListener("touchmove",this.onTouchMove,fr),this.element.addEventListener("touchend",this.onTouchEnd,fr)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,fr),this.element.removeEventListener("touchstart",this.onTouchStart,fr),this.element.removeEventListener("touchmove",this.onTouchMove,fr),this.element.removeEventListener("touchend",this.onTouchEnd,fr)}},O0=s=>Math.min(1,1.001-2**(-10*s)),B0=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:p=1,autoResize:x=!0,prevent:m,virtualScroll:g,overscroll:y=!0,autoRaf:M=!1,anchors:v=!1,autoToggle:b=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:S=_,stopInertiaOnNavigate:R=!1,respectReducedMotion:A=!0}={}){Zt(this,"_isScrolling",!1);Zt(this,"_isStopped",!1);Zt(this,"_isLocked",!1);Zt(this,"_preventNextNativeScrollEvent",!1);Zt(this,"_resetVelocityTimeout",null);Zt(this,"_rafId",null);Zt(this,"_isDraggingSelection",!1);Zt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Zt(this,"isTouching");Zt(this,"isIos");Zt(this,"time",0);Zt(this,"userData",{});Zt(this,"lastVelocity",0);Zt(this,"velocity",0);Zt(this,"direction",0);Zt(this,"options");Zt(this,"targetScroll");Zt(this,"animatedScroll");Zt(this,"animate",new PS);Zt(this,"emitter",new F0);Zt(this,"dimensions");Zt(this,"virtualScroll");Zt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Zt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Zt(this,"onTransitionEnd",s=>{var t;(t=s.propertyName)!=null&&t.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Zt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Zt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Zt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>{var x,m,g,y,M;return p instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(p))||((x=p.hasAttribute)==null?void 0:x.call(p,"data-lenis-prevent"))||h==="vertical"&&((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent-vertical"))||h==="horizontal"&&((g=p.hasAttribute)==null?void 0:g.call(p,"data-lenis-prevent-horizontal"))||i&&((y=p.hasAttribute)==null?void 0:y.call(p,"data-lenis-prevent-touch"))||r&&((M=p.hasAttribute)==null?void 0:M.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let f=i&&this.options.syncTouch,u=i&&n.type==="touchend";u&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Zt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Zt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=D0,window.lenis||(window.lenis={}),window.lenis.version=D0,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=O0:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:d,touchMultiplier:u,wheelMultiplier:p,autoResize:x,prevent:m,virtualScroll:g,overscroll:y,autoRaf:M,anchors:v,autoToggle:b,allowNestedScroll:T,naiveDimensions:S,stopInertiaOnNavigate:R,respectReducedMotion:A},this.dimensions=new LS(s,t,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new NS(e,{touchMultiplier:u,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){var c;let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=(c=s.targetTouches[0])!=null?c:s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let f=s,u=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let p=null;if(typeof f=="string"?(p=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),p||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(p=f),p){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?v.left:v.top}let x=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),y=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);f=(this.isHorizontal?x.left:x.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(M)?0:M)}}if(typeof f=="number"){if(f+=u,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=f-this.animatedScroll;p>this.limit/2?f-=this.limit:p<-this.limit/2&&(f+=this.limit)}}else f=U0(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d!=null?d:{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=O0:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(p,x)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),x||this.emit(),x&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){var T;let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,f,u,p;if(n-((T=i.time)!=null?T:0)>2e3){i.time=Date.now();let _=window.getComputedStyle(s);if(i.computedStyle=_,r=["auto","overlay","scroll"].includes(_.overflowX),o=["auto","overlay","scroll"].includes(_.overflowY),c=["auto"].includes(_.overscrollBehaviorX),h=["auto"].includes(_.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,f=s.scrollHeight,u=s.clientWidth,p=s.clientHeight,a=d>u,l=f>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=u,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,u=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let x=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,y,M,v,b;if(x==="horizontal")m=Math.round(s.scrollLeft),g=d-u,y=t,M=r,v=a,b=c;else if(x==="vertical")m=Math.round(s.scrollTop),g=f-p,y=e,M=o,v=l,b=h;else return!1;return!b&&(m>=g||m<=0)?!0:(y>0?m<g:m>0)&&M&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let s=this.options.wrapper;return this.isHorizontal?(t=s.scrollX)!=null?t:s.scrollLeft:(e=s.scrollY)!=null?e:s.scrollTop}get scroll(){return this.options.infinite?CS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};var M_=0,yp=1,b_=2;var ho=1,T_=2,Sa=3,Tr=0,Hn=1,Oi=2,uo=0,Ma=1,vs=2,Sp=3,Mp=4,w_=5;var fo=100,E_=101,A_=102,R_=103,C_=104,P_=200,I_=201,L_=202,D_=203,bp=204,Tp=205,N_=206,O_=207,U_=208,F_=209,B_=210,z_=211,k_=212,H_=213,G_=214,Hh=0,Gh=1,Vh=2,ca=3,Wh=4,Xh=5,qh=6,Yh=7,Su=0,V_=1,W_=2,ys=0,wp=1,Ep=2,Ap=3,po=4,Rp=5,Cp=6,Pp=7;var Ip=300,mo=301,ba=302,Mu=303,bu=304,to=1e3,ps=1001,Zh=1002,Nn=1003,X_=1004;var rc=1005;var ci=1006,Tu=1007;var Ys=1008;var yi=1009,Lp=1010,Dp=1011,Ta=1012,wu=1013,ns=1014,Yi=1015,is=1016,Eu=1017,Au=1018,go=1020,Np=35902,Op=35899,Up=1021,Fp=1022,ss=1023,Vs=1026,Zs=1027,Ru=1028,Cu=1029,wr=1030,Pu=1031;var Iu=1033,oc=33776,ac=33777,lc=33778,cc=33779,Lu=35840,Du=35841,Nu=35842,Ou=35843,Uu=36196,Fu=37492,Bu=37496,zu=37488,ku=37489,hc=37490,Hu=37491,Gu=37808,Vu=37809,Wu=37810,Xu=37811,qu=37812,Yu=37813,Zu=37814,$u=37815,Ju=37816,Ku=37817,Qu=37818,ju=37819,tf=37820,ef=37821,nf=36492,sf=36494,rf=36495,of=36283,af=36284,uc=36285,lf=36286;var El=2300,$h=2301,zh=2302,op=2303,ap=2400,lp=2401,cp=2402;var q_=3200;var fc=0,Y_=1,$s="",on="srgb",Al="srgb-linear",Rl="linear",Fe="srgb";var kh=7680;var Z_=519,$_=512,J_=513,K_=514,Bp=515,Q_=516,j_=517,zp=518,kp=519,Hp=35044;var Gp="300 es",Vi=2e3,ha=2001;function OS(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function US(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Cl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tx(){let s=Cl("canvas");return s.style.display="block",s}var z0={},ua=null;function Pl(...s){let t="THREE."+s.shift();ua?ua("log",t,...s):console.log(t,...s)}function ex(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Qt(...s){s=ex(s);let t="THREE."+s.shift();if(ua)ua("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ne(...s){s=ex(s);let t="THREE."+s.shift();if(ua)ua("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Sl(...s){let t=s.join(" ");t in z0||(z0[t]=!0,Qt(...s))}function nx(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ix={[Hh]:Hh,[Vh]:qh,[Wh]:Wh,[ca]:Xh,[Gh]:Gh,[qh]:Vh,[Yh]:Yh,[Xh]:ca},ms=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},$n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],k0=1234567,Ml=Math.PI/180,eo=180/Math.PI;function Js(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($n[s&255]+$n[s>>8&255]+$n[s>>16&255]+$n[s>>24&255]+"-"+$n[t&255]+$n[t>>8&255]+"-"+$n[t>>16&15|64]+$n[t>>24&255]+"-"+$n[e&63|128]+$n[e>>8&255]+"-"+$n[e>>16&255]+$n[e>>24&255]+$n[n&255]+$n[n>>8&255]+$n[n>>16&255]+$n[n>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function Vp(s,t){return(s%t+t)%t}function FS(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function BS(s,t,e){return s!==t?(e-s)/(t-s):0}function bl(s,t,e){return(1-e)*s+e*t}function zS(s,t,e,n){return bl(s,t,1-Math.exp(-e*n))}function kS(s,t=1){return t-Math.abs(Vp(s,t*2)-t)}function HS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function GS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function VS(s,t){return s+Math.floor(Math.random()*(t-s+1))}function WS(s,t){return s+Math.random()*(t-s)}function XS(s){return s*(.5-Math.random())}function qS(s){s!==void 0&&(k0=s);let t=k0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function YS(s){return s*Ml}function ZS(s){return s*eo}function $S(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function JS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function KS(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*u,a*h,a*c);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function cf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xp(s,t){if(t.constructor===Float32Array)return s;let e=cf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function qp(s,t){if(t.constructor===Float32Array)return s;let e=cf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var hf={DEG2RAD:Ml,RAD2DEG:eo,generateUUID:Js,clamp:Te,euclideanModulo:Vp,mapLinear:FS,inverseLerp:BS,lerp:bl,damp:zS,pingpong:kS,smoothstep:HS,smootherstep:GS,randInt:VS,randFloat:WS,randFloatSpread:XS,seededRandom:qS,degToRad:YS,radToDeg:ZS,isPowerOfTwo:$S,ceilPowerOfTwo:JS,floorPowerOfTwo:Wp,setQuaternionFromProperEuler:KS,normalize:qp,denormalize:Xp},Qp=class Qp{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qp.prototype.isVector2=!0;var Ot=Qp,gs=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*x;m<0&&(f=-f,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);g=Math.sin(g*y)/M,a=Math.sin(a*y)/M,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*u-c*f,t[e+1]=l*p+h*f+c*d-a*u,t[e+2]=c*p+h*u+a*f-l*d,t[e+3]=h*p-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jp=class jp{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(H0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(H0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ud.copy(this).projectOnVector(t),this.sub(Ud)}reflect(t){return this.sub(Ud.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jp.prototype.isVector3=!0;var z=jp,Ud=new z,H0=new gs,tm=class tm{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],x=i[0],m=i[3],g=i[6],y=i[1],M=i[4],v=i[7],b=i[2],T=i[5],_=i[8];return r[0]=o*x+a*y+l*b,r[3]=o*m+a*M+l*T,r[6]=o*g+a*v+l*_,r[1]=c*x+h*y+d*b,r[4]=c*m+h*M+d*T,r[7]=c*g+h*v+d*_,r[2]=f*x+u*y+p*b,r[5]=f*m+u*M+p*T,r[8]=f*g+u*v+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=e*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=u*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Sl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fd.makeScale(t,e)),this}rotate(t){return Sl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fd.makeRotation(-t)),this}translate(t,e){return Sl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};tm.prototype.isMatrix3=!0;var re=tm,Fd=new re,G0=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V0=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QS(){let s={enabled:!0,workingColorSpace:Al,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Fe&&(i.r=Gs(i.r),i.g=Gs(i.g),i.b=Gs(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Fe&&(i.r=aa(i.r),i.g=aa(i.g),i.b=aa(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$s?Rl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Al]:{primaries:t,whitePoint:n,transfer:Rl,toXYZ:G0,fromXYZ:V0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:Fe,toXYZ:G0,fromXYZ:V0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),s}var we=QS();function Gs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function aa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Vo,Jh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vo===void 0&&(Vo=Cl("canvas")),Vo.width=t.width,Vo.height=t.height;let i=Vo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Vo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Cl("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gs(e[n]/255)*255):e[n]=Gs(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jS=0,fa=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Bd(i[o].image)):r.push(Bd(i[o]))}else r=Bd(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Bd(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Jh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var tM=0,zd=new z,hi=class s extends ms{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ps,i=ps,r=ci,o=Ys,a=ss,l=yi,c=s.DEFAULT_ANISOTROPY,h=$s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Js(),this.name="",this.source=new fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zd).x}get height(){return this.source.getSize(zd).y}get depth(){return this.source.getSize(zd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ip)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case to:t.x=t.x-Math.floor(t.x);break;case ps:t.x=t.x<0?0:1;break;case Zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case to:t.y=t.y-Math.floor(t.y);break;case ps:t.y=t.y<0?0:1;break;case Zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=Ip;hi.DEFAULT_ANISOTROPY=1;var em=class em{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(u+1)/2,b=(g+1)/2,T=(h+f)/4,_=(d+x)/4,S=(p+m)/4;return M>v&&M>b?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=T/n,r=_/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=S/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=_/r,i=S/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this.w=Te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this.w=Te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};em.prototype.isVector4=!0;var en=em,Kh=class extends ms{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new en(0,0,t,e),this.scissorTest=!1,this.viewport=new en(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new hi({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new fa(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Di=class extends Kh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Il=class extends hi{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qh=class extends hi{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var yu=class yu{constructor(t,e,n,i,r,o,a,l,c,h,d,f,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,x,m)}set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yu().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Wo.setFromMatrixColumn(t,0).length(),r=1/Wo.setFromMatrixColumn(t,1).length(),o=1/Wo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,p=c*h,x=c*d;e[0]=f+x*a,e[4]=p*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,p=c*h,x=c*d;e[0]=f-x*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-u,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=u*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+p,e[10]=f-x*d}else if(t.order==="XZY"){let f=o*l,u=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eM,t,nM)}lookAt(t,e,n){let i=this.elements;return Ii.subVectors(t,e),Ii.lengthSq()===0&&(Ii.z=1),Ii.normalize(),dr.crossVectors(n,Ii),dr.lengthSq()===0&&(Math.abs(n.z)===1?Ii.x+=1e-4:Ii.z+=1e-4,Ii.normalize(),dr.crossVectors(n,Ii)),dr.normalize(),uh.crossVectors(Ii,dr),i[0]=dr.x,i[4]=uh.x,i[8]=Ii.x,i[1]=dr.y,i[5]=uh.y,i[9]=Ii.y,i[2]=dr.z,i[6]=uh.z,i[10]=Ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],M=n[7],v=n[11],b=n[15],T=i[0],_=i[4],S=i[8],R=i[12],A=i[1],D=i[5],L=i[9],k=i[13],I=i[2],H=i[6],V=i[10],O=i[14],$=i[3],W=i[7],P=i[11],Q=i[15];return r[0]=o*T+a*A+l*I+c*$,r[4]=o*_+a*D+l*H+c*W,r[8]=o*S+a*L+l*V+c*P,r[12]=o*R+a*k+l*O+c*Q,r[1]=h*T+d*A+f*I+u*$,r[5]=h*_+d*D+f*H+u*W,r[9]=h*S+d*L+f*V+u*P,r[13]=h*R+d*k+f*O+u*Q,r[2]=p*T+x*A+m*I+g*$,r[6]=p*_+x*D+m*H+g*W,r[10]=p*S+x*L+m*V+g*P,r[14]=p*R+x*k+m*O+g*Q,r[3]=y*T+M*A+v*I+b*$,r[7]=y*_+M*D+v*H+b*W,r[11]=y*S+M*L+v*V+b*P,r[15]=y*R+M*k+v*O+b*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],x=t[7],m=t[11],g=t[15],y=l*u-c*f,M=a*u-c*d,v=a*f-l*d,b=o*u-c*h,T=o*f-l*h,_=o*d-a*h;return e*(x*y-m*M+g*v)-n*(p*y-m*b+g*T)+i*(p*M-x*b+g*_)-r*(p*v-x*T+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=e*a-n*o,M=e*l-i*o,v=e*c-r*o,b=n*l-i*a,T=n*c-r*a,_=i*c-r*l,S=h*x-d*p,R=h*m-f*p,A=h*g-u*p,D=d*m-f*x,L=d*g-u*x,k=f*g-u*m,I=y*k-M*L+v*D+b*A-T*R+_*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/I;return t[0]=(a*k-l*L+c*D)*H,t[1]=(i*L-n*k-r*D)*H,t[2]=(x*_-m*T+g*b)*H,t[3]=(f*T-d*_-u*b)*H,t[4]=(l*A-o*k-c*R)*H,t[5]=(e*k-i*A+r*R)*H,t[6]=(m*v-p*_-g*M)*H,t[7]=(h*_-f*v+u*M)*H,t[8]=(o*L-a*A+c*S)*H,t[9]=(n*A-e*L-r*S)*H,t[10]=(p*T-x*v+g*y)*H,t[11]=(d*v-h*T-u*y)*H,t[12]=(a*R-o*D-l*S)*H,t[13]=(e*D-n*R+i*S)*H,t[14]=(x*M-p*b-m*y)*H,t[15]=(h*b-d*M+f*y)*H,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,x=o*h,m=o*d,g=a*d,y=l*c,M=l*h,v=l*d,b=n.x,T=n.y,_=n.z;return i[0]=(1-(x+g))*b,i[1]=(u+v)*b,i[2]=(p-M)*b,i[3]=0,i[4]=(u-v)*T,i[5]=(1-(f+g))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(p+M)*_,i[9]=(m-y)*_,i[10]=(1-(f+x))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Wo.set(i[0],i[1],i[2]).length(),a=Wo.set(i[4],i[5],i[6]).length(),l=Wo.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ji.copy(this);let c=1/o,h=1/a,d=1/l;return Ji.elements[0]*=c,Ji.elements[1]*=c,Ji.elements[2]*=c,Ji.elements[4]*=h,Ji.elements[5]*=h,Ji.elements[6]*=h,Ji.elements[8]*=d,Ji.elements[9]*=d,Ji.elements[10]*=d,e.setFromRotationMatrix(Ji),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Vi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Vi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ha)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Vi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Vi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ha)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};yu.prototype.isMatrix4=!0;var Be=yu,Wo=new z,Ji=new Be,eM=new z(0,0,0),nM=new z(1,1,1),dr=new z,uh=new z,Ii=new z,W0=new Be,X0=new gs,_s=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return W0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(W0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return X0.setFromEuler(this),this.setFromQuaternion(X0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_s.DEFAULT_ORDER="XYZ";var Ll=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},iM=0,q0=new z,Xo=new gs,Us=new Be,fh=new z,ul=new z,sM=new z,rM=new gs,Y0=new z(1,0,0),Z0=new z(0,1,0),$0=new z(0,0,1),J0={type:"added"},oM={type:"removed"},qo={type:"childadded",child:null},kd={type:"childremoved",child:null},mn=class s extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new z,e=new _s,n=new gs,i=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new re}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xo.setFromAxisAngle(t,e),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(t,e){return Xo.setFromAxisAngle(t,e),this.quaternion.premultiply(Xo),this}rotateX(t){return this.rotateOnAxis(Y0,t)}rotateY(t){return this.rotateOnAxis(Z0,t)}rotateZ(t){return this.rotateOnAxis($0,t)}translateOnAxis(t,e){return q0.copy(t).applyQuaternion(this.quaternion),this.position.add(q0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Y0,t)}translateY(t){return this.translateOnAxis(Z0,t)}translateZ(t){return this.translateOnAxis($0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Us.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fh.copy(t):fh.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Us.lookAt(ul,fh,this.up):Us.lookAt(fh,ul,this.up),this.quaternion.setFromRotationMatrix(Us),i&&(Us.extractRotation(i.matrixWorld),Xo.setFromRotationMatrix(Us),this.quaternion.premultiply(Xo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(J0),qo.child=t,this.dispatchEvent(qo),qo.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(oM),kd.child=t,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Us.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Us.multiply(t.parent.matrixWorld)),t.applyMatrix4(Us),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(J0),qo.child=t,this.dispatchEvent(qo),qo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,t,sM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,rM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};mn.DEFAULT_UP=new z(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},aM={type:"move"},da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},dh={h:0,s:0,l:0};function Hd(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ie=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=we.workingColorSpace){if(t=Vp(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hd(o,r,t+1/3),this.g=Hd(o,r,t),this.b=Hd(o,r,t-1/3)}return we.colorSpaceToWorking(this,i),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let n=sx[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}copyLinearToSRGB(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return we.workingToColorSpace(Jn.copy(this),t),Math.round(Te(Jn.r*255,0,255))*65536+Math.round(Te(Jn.g*255,0,255))*256+Math.round(Te(Jn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.workingToColorSpace(Jn.copy(this),e);let n=Jn.r,i=Jn.g,r=Jn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.workingToColorSpace(Jn.copy(this),e),t.r=Jn.r,t.g=Jn.g,t.b=Jn.b,t}getStyle(t=on){we.workingToColorSpace(Jn.copy(this),t);let e=Jn.r,n=Jn.g,i=Jn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(pr),this.setHSL(pr.h+t,pr.s+e,pr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pr),t.getHSL(dh);let n=bl(pr.h,dh.h,e),i=bl(pr.s,dh.s,e),r=bl(pr.l,dh.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jn=new ie;ie.NAMES=sx;var no=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ie(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ws=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _s,this.environmentIntensity=1,this.environmentRotation=new _s,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ki=new z,Fs=new z,Gd=new z,Bs=new z,Yo=new z,Zo=new z,K0=new z,Vd=new z,Wd=new z,Xd=new z,qd=new en,Yd=new en,Zd=new en,Hs=class s{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ki.subVectors(t,e),i.cross(Ki);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ki.subVectors(i,e),Fs.subVectors(n,e),Gd.subVectors(t,e);let o=Ki.dot(Ki),a=Ki.dot(Fs),l=Ki.dot(Gd),c=Fs.dot(Fs),h=Fs.dot(Gd),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bs)===null?!1:Bs.x>=0&&Bs.y>=0&&Bs.x+Bs.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Bs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bs.x),l.addScaledVector(o,Bs.y),l.addScaledVector(a,Bs.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return qd.setScalar(0),Yd.setScalar(0),Zd.setScalar(0),qd.fromBufferAttribute(t,e),Yd.fromBufferAttribute(t,n),Zd.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(qd,r.x),o.addScaledVector(Yd,r.y),o.addScaledVector(Zd,r.z),o}static isFrontFacing(t,e,n,i){return Ki.subVectors(n,e),Fs.subVectors(t,e),Ki.cross(Fs).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ki.subVectors(this.c,this.b),Fs.subVectors(this.a,this.b),Ki.cross(Fs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Yo.subVectors(i,n),Zo.subVectors(r,n),Vd.subVectors(t,n);let l=Yo.dot(Vd),c=Zo.dot(Vd);if(l<=0&&c<=0)return e.copy(n);Wd.subVectors(t,i);let h=Yo.dot(Wd),d=Zo.dot(Wd);if(h>=0&&d<=h)return e.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Yo,o);Xd.subVectors(t,r);let u=Yo.dot(Xd),p=Zo.dot(Xd);if(p>=0&&u<=p)return e.copy(r);let x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Zo,a);let m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return K0.subVectors(r,i),a=(d-h)/(d-h+(u-p)),e.copy(i).addScaledVector(K0,a);let g=1/(m+x+f);return o=x*g,a=f*g,e.copy(n).addScaledVector(Yo,o).addScaledVector(Zo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xs=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qi):Qi.fromBufferAttribute(r,o),Qi.applyMatrix4(t.matrixWorld),this.expandByPoint(Qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ph.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ph.copy(n.boundingBox)),ph.applyMatrix4(t.matrixWorld),this.union(ph)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qi),Qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fl),mh.subVectors(this.max,fl),$o.subVectors(t.a,fl),Jo.subVectors(t.b,fl),Ko.subVectors(t.c,fl),mr.subVectors(Jo,$o),gr.subVectors(Ko,Jo),Jr.subVectors($o,Ko);let e=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Jr.z,Jr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Jr.z,0,-Jr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Jr.y,Jr.x,0];return!$d(e,$o,Jo,Ko,mh)||(e=[1,0,0,0,1,0,0,0,1],!$d(e,$o,Jo,Ko,mh))?!1:(gh.crossVectors(mr,gr),e=[gh.x,gh.y,gh.z],$d(e,$o,Jo,Ko,mh))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zs=[new z,new z,new z,new z,new z,new z,new z,new z],Qi=new z,ph=new xs,$o=new z,Jo=new z,Ko=new z,mr=new z,gr=new z,Jr=new z,fl=new z,mh=new z,gh=new z,Kr=new z;function $d(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Kr.fromArray(s,r);let a=i.x*Math.abs(Kr.x)+i.y*Math.abs(Kr.y)+i.z*Math.abs(Kr.z),l=t.dot(Kr),c=e.dot(Kr),h=n.dot(Kr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var yn=new z,_h=new Ot,lM=0,_n=class extends ms{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lM++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hp,this.updateRanges=[],this.gpuType=Yi,this.version=0,this._normalizationScale=t!==void 0?cf(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_h.fromBufferAttribute(this,e),_h.applyMatrix3(t),this.setXY(e,_h.x,_h.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix3(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Xp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):qp(t,this.array)}};var Dl=class extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Nl=class extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ye=class extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}},cM=new xs,dl=new z,Jd=new z,Xs=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cM.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dl.subVectors(t,this.center);let e=dl.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(dl,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dl.copy(t.center).add(Jd)),this.expandByPoint(dl.copy(t.center).sub(Jd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},hM=0,Gi=new Be,Kd=new mn,Qo=new z,Li=new xs,pl=new xs,Dn=new z,Sn=class s extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(OS(t)?Nl:Dl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gi.makeRotationFromQuaternion(t),this.applyMatrix4(Gi),this}rotateX(t){return Gi.makeRotationX(t),this.applyMatrix4(Gi),this}rotateY(t){return Gi.makeRotationY(t),this.applyMatrix4(Gi),this}rotateZ(t){return Gi.makeRotationZ(t),this.applyMatrix4(Gi),this}translate(t,e,n){return Gi.makeTranslation(t,e,n),this.applyMatrix4(Gi),this}scale(t,e,n){return Gi.makeScale(t,e,n),this.applyMatrix4(Gi),this}lookAt(t){return Kd.lookAt(t),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Li.setFromBufferAttribute(r),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(Li.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];pl.setFromBufferAttribute(a),this.morphTargetsRelative?(Dn.addVectors(Li.min,pl.min),Li.expandByPoint(Dn),Dn.addVectors(Li.max,pl.max),Li.expandByPoint(Dn)):(Li.expandByPoint(pl.min),Li.expandByPoint(pl.max))}Li.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Dn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Dn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dn.fromBufferAttribute(a,c),l&&(Qo.fromBufferAttribute(t,c),Dn.add(Qo)),i=Math.max(i,n.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new _n(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new z,l[R]=new z;let h=new z,d=new z,f=new z,u=new Ot,p=new Ot,x=new Ot,m=new z,g=new z;function y(R,A,D){c[R]=c[A]=c[D]=1,h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,A),f.fromBufferAttribute(n,D),u.fromBufferAttribute(r,R),p.fromBufferAttribute(r,A),x.fromBufferAttribute(r,D),d.sub(h),f.sub(h),p.sub(u),x.sub(u);let L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(L),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(L),a[R].add(m),a[A].add(m),a[D].add(m),l[R].add(g),l[A].add(g),l[D].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,A=M.length;R<A;++R){let D=M[R],L=D.start,k=D.count;for(let I=L,H=L+k;I<H;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new z,b=new z,T=new z,_=new z;function S(R){T.fromBufferAttribute(i,R),_.copy(T);let A=a[R];v.copy(A),v.sub(T.multiplyScalar(T.dot(A))).normalize(),b.crossVectors(_,A);let L=b.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,A=n.count;R<A;++R)c[R]&&S(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,d=new z;if(t)for(let f=0,u=t.count;f<u;f+=3){let p=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Dn.fromBufferAttribute(t,e),Dn.normalize(),t.setXYZ(e,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new _n(f,h,d)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},jh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Hp,this.updateRanges=[],this.version=0,this.uuid=Js()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Q0(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Q0(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Q0(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Js()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var ai=new z,Ol=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?cf(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ai.fromBufferAttribute(this,e),ai.applyMatrix4(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ai.fromBufferAttribute(this,e),ai.applyNormalMatrix(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ai.fromBufferAttribute(this,e),ai.transformDirection(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Pl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new _n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Pl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Xp(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):qp(t,this.data.array)}},Qd=new z,uM=new z,fM=new re,ji=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Qd.subVectors(n,e).cross(uM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Qd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fM.getNormalMatrix(t),i=this.coplanarPoint(Qd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},dM=0,ts=class extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Ma,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bp,this.blendDst=Tp,this.blendEquation=fo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kh,this.stencilZFail=kh,this.stencilZPass=kh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ie().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ji().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},io=class extends ts{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},jo,ml=new z,ta=new z,ea=new z,na=new Ot,gl=new Ot,rx=new Be,xh=new z,_l=new z,vh=new z,j0=new Ot,jd=new Ot,t_=new Ot,pa=class extends mn{constructor(t=new io){if(super(),this.isSprite=!0,this.type="Sprite",jo===void 0){jo=new Sn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jh(e,5);jo.setIndex([0,1,2,0,2,3]),jo.setAttribute("position",new Ol(n,3,0,!1)),jo.setAttribute("uv",new Ol(n,2,3,!1))}this.geometry=jo,this.material=t,this.center=new Ot(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ta.setFromMatrixScale(this.matrixWorld),rx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ea.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ta.multiplyScalar(-ea.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;yh(xh.set(-.5,-.5,0),ea,o,ta,i,r),yh(_l.set(.5,-.5,0),ea,o,ta,i,r),yh(vh.set(.5,.5,0),ea,o,ta,i,r),j0.set(0,0),jd.set(1,0),t_.set(1,1);let a=t.ray.intersectTriangle(xh,_l,vh,!1,ml);if(a===null&&(yh(_l.set(-.5,.5,0),ea,o,ta,i,r),jd.set(0,1),a=t.ray.intersectTriangle(xh,vh,_l,!1,ml),a===null))return;let l=t.ray.origin.distanceTo(ml);l<t.near||l>t.far||e.push({distance:l,point:ml.clone(),uv:Hs.getInterpolation(ml,xh,_l,vh,j0,jd,t_,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function yh(s,t,e,n,i,r){na.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(gl.x=r*na.x-i*na.y,gl.y=i*na.x+r*na.y):gl.copy(na),s.copy(t),s.x+=gl.x,s.y+=gl.y,s.applyMatrix4(rx)}var ks=new z,tp=new z,Sh=new z,Mh=new z,Ul=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ks)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ks.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ks.copy(this.origin).addScaledVector(this.direction,e),ks.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){tp.copy(t).add(e).multiplyScalar(.5),Sh.copy(e).sub(t).normalize(),Mh.copy(this.origin).sub(tp);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Sh),a=Mh.dot(this.direction),l=-Mh.dot(Sh),c=Mh.lengthSq(),h=Math.abs(1-o*o),d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){let x=1/h;d*=x,f*=x,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(tp).addScaledVector(Sh,f),u}intersectSphere(t,e){if(t.radius<0)return null;ks.subVectors(t.center,this.origin);let n=ks.dot(this.direction),i=ks.dot(ks)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ks)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,y=n.y-o.y,M=n.z-o.z,v=Math.abs(l),b=Math.abs(c),T=Math.abs(h),_,S,R,A,D,L,k,I,H,V,O,$;if(v>=b&&v>=T?(R=l,L=d,H=p,$=g,l>=0?(_=c,S=h,A=f,D=u,k=x,I=m,V=y,O=M):(_=h,S=c,A=u,D=f,k=m,I=x,V=M,O=y)):b>=T?(R=c,L=f,H=x,$=y,c>=0?(_=h,S=l,A=u,D=d,k=m,I=p,V=M,O=g):(_=l,S=h,A=d,D=u,k=p,I=m,V=g,O=M)):(R=h,L=u,H=m,$=M,h>=0?(_=l,S=c,A=d,D=f,k=p,I=x,V=g,O=y):(_=c,S=l,A=f,D=d,k=x,I=p,V=y,O=g)),R===0)return null;let W=_/R,P=S/R,Q=1/R,vt=A-W*L,It=D-P*L,Y=k-W*H,ht=I-P*H,Tt=V-W*$,Rt=O-P*$,dt=Tt*ht-Rt*Y,Ut=vt*Rt-It*Tt,Kt=Y*It-ht*vt;if(i){if(dt<0||Ut<0||Kt<0)return null}else if((dt<0||Ut<0||Kt<0)&&(dt>0||Ut>0||Kt>0))return null;let Ct=dt+Ut+Kt;if(Ct===0)return null;let $t=Q*(dt*L+Ut*H+Kt*$);return(Ct>0?$t<0:$t>0)?null:this.at($t/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wi=class extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},e_=new Be,Qr=new Ul,bh=new Xs,n_=new z,Th=new z,wh=new z,Eh=new z,ep=new z,Ah=new z,i_=new z,Rh=new z,Jt=class extends mn{constructor(t=new Sn,e=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Ah.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ep.fromBufferAttribute(d,t),o?Ah.addScaledVector(ep,h):Ah.addScaledVector(ep.sub(e),h))}e.add(Ah)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bh.copy(n.boundingSphere),bh.applyMatrix4(r),Qr.copy(t.ray).recast(t.near),!(bh.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(bh,n_)===null||Qr.origin.distanceToSquared(n_)>(t.far-t.near)**2))&&(e_.copy(r).invert(),Qr.copy(t.ray).applyMatrix4(e_),!(n.boundingBox!==null&&Qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),M=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,b=M;v<b;v+=3){let T=a.getX(v),_=a.getX(v+1),S=a.getX(v+2);i=Ch(this,g,t,n,c,h,d,T,_,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=Ch(this,o,t,n,c,h,d,y,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),M=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,b=M;v<b;v+=3){let T=v,_=v+1,S=v+2;i=Ch(this,g,t,n,c,h,d,T,_,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=m,M=m+1,v=m+2;i=Ch(this,o,t,n,c,h,d,y,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function pM(s,t,e,n,i,r,o,a){let l;if(t.side===Hn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Tr,a),l===null)return null;Rh.copy(a),Rh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Rh);return c<e.near||c>e.far?null:{distance:c,point:Rh.clone(),object:s}}function Ch(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Th),s.getVertexPosition(l,wh),s.getVertexPosition(c,Eh);let h=pM(s,t,e,n,Th,wh,Eh,i_);if(h){let d=new z;Hs.getBarycoord(i_,Th,wh,Eh,d),i&&(h.uv=Hs.getInterpolatedAttribute(i,a,l,c,d,new Ot)),r&&(h.uv1=Hs.getInterpolatedAttribute(r,a,l,c,d,new Ot)),o&&(h.normal=Hs.getInterpolatedAttribute(o,a,l,c,d,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new z,materialIndex:0};Hs.getNormal(Th,wh,Eh,f.normal),h.face=f,h.barycoord=d}return h}var Fl=class extends hi{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Nn,h=Nn,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bl=class extends _n{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ia=new Be,s_=new Be,Ph=[],r_=new xs,mM=new Be,xl=new Jt,vl=new Xs,zl=class extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,mM)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ia),r_.copy(t.boundingBox).applyMatrix4(ia),this.boundingBox.union(r_)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ia),vl.copy(t.boundingSphere).applyMatrix4(ia),this.boundingSphere.union(vl)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(xl.geometry=this.geometry,xl.material=this.material,xl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vl.copy(this.boundingSphere),vl.applyMatrix4(n),t.ray.intersectsSphere(vl)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ia),s_.multiplyMatrices(n,ia),xl.matrixWorld=s_,xl.raycast(t,Ph);for(let o=0,a=Ph.length;o<a;o++){let l=Ph[o];l.instanceId=r,l.object=this,e.push(l)}Ph.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Bl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fl(new Float32Array(i*this.count),i,this.count,Ru,Yi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},jr=new Xs,gM=new Ot(.5,.5),Ih=new z,xr=class{constructor(t=new ji,e=new ji,n=new ji,i=new ji,r=new ji,o=new ji){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vi,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],M=r[13],v=r[14],b=r[15];if(i[0].setComponents(c-o,u-h,g-p,b-y).normalize(),i[1].setComponents(c+o,u+h,g+p,b+y).normalize(),i[2].setComponents(c+a,u+d,g+x,b+M).normalize(),i[3].setComponents(c-a,u-d,g-x,b-M).normalize(),n)i[4].setComponents(l,f,m,v).normalize(),i[5].setComponents(c-l,u-f,g-m,b-v).normalize();else if(i[4].setComponents(c-l,u-f,g-m,b-v).normalize(),e===Vi)i[5].setComponents(c+l,u+f,g+m,b+v).normalize();else if(e===ha)i[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(t){jr.center.set(0,0,0);let e=gM.distanceTo(t.center);return jr.radius=.7071067811865476+e,jr.applyMatrix4(t.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ih.x=i.normal.x>0?t.max.x:t.min.x,Ih.y=i.normal.y>0?t.max.y:t.min.y,Ih.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ih)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},o_=new Be,tu=class s{constructor(){this.coordinateSystem=Vi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];o_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new xr),n[i].setFromProjectionMatrix(o_,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new xr),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var eu=class extends ts{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},a_=new Be,hp=new Ul,Lh=new Xs,Dh=new z,vr=class extends mn{constructor(t=new Sn,e=new eu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lh.copy(n.boundingSphere),Lh.applyMatrix4(i),Lh.radius+=r,t.ray.intersectsSphere(Lh)===!1)return;a_.copy(i).invert(),hp.copy(t.ray).applyMatrix4(a_);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,x=u;p<x;p++){let m=c.getX(p);Dh.fromBufferAttribute(d,m),l_(Dh,m,l,i,t,e,this)}}else{let f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,x=u;p<x;p++)Dh.fromBufferAttribute(d,p),l_(Dh,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function l_(s,t,e,n,i,r,o){let a=hp.distanceSqToPoint(s);if(a<e){let l=new z;hp.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var kl=class extends hi{constructor(t=[],e=mo,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xi=class extends hi{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qs=class extends hi{constructor(t,e,n=ns,i,r,o,a=Nn,l=Nn,c,h=Vs,d=1){if(h!==Vs&&h!==Zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Hl=class extends qs{constructor(t,e=ns,n=mo,i,r,o=Nn,a=Nn,l,c=Vs){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Gl=class extends hi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},An=class s extends Sn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2));function p(x,m,g,y,M,v,b,T,_,S,R){let A=v/_,D=b/S,L=v/2,k=b/2,I=T/2,H=_+1,V=S+1,O=0,$=0,W=new z;for(let P=0;P<V;P++){let Q=P*D-k;for(let vt=0;vt<H;vt++){let It=vt*A-L;W[x]=It*y,W[m]=Q*M,W[g]=I,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[g]=T>0?1:-1,h.push(W.x,W.y,W.z),d.push(vt/_),d.push(1-P/S),O+=1}}for(let P=0;P<S;P++)for(let Q=0;Q<_;Q++){let vt=f+Q+H*P,It=f+Q+H*(P+1),Y=f+(Q+1)+H*(P+1),ht=f+(Q+1)+H*P;l.push(vt,It,ht),l.push(It,Y,ht),$+=6}a.addGroup(u,$,R),u+=$,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var es=class s extends Sn{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],f=[],u=[],p=0,x=[],m=n/2,g=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(u,2));function y(){let v=new z,b=new z,T=0,_=(e-t)/n;for(let S=0;S<=r;S++){let R=[],A=S/r,D=A*(e-t)+t;for(let L=0;L<=i;L++){let k=L/i,I=k*l+a,H=Math.sin(I),V=Math.cos(I);b.x=D*H,b.y=-A*n+m,b.z=D*V,d.push(b.x,b.y,b.z),v.set(H,_,V).normalize(),f.push(v.x,v.y,v.z),u.push(k,1-A),R.push(p++)}x.push(R)}for(let S=0;S<i;S++)for(let R=0;R<r;R++){let A=x[R][S],D=x[R+1][S],L=x[R+1][S+1],k=x[R][S+1];(t>0||R!==0)&&(h.push(A,D,k),T+=3),(e>0||R!==r-1)&&(h.push(D,L,k),T+=3)}c.addGroup(g,T,0),g+=T}function M(v){let b=p,T=new Ot,_=new z,S=0,R=v===!0?t:e,A=v===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,m*A,0),f.push(0,A,0),u.push(.5,.5),p++;let D=p;for(let L=0;L<=i;L++){let I=L/i*l+a,H=Math.cos(I),V=Math.sin(I);_.x=R*V,_.y=m*A,_.z=R*H,d.push(_.x,_.y,_.z),f.push(0,A,0),T.x=H*.5+.5,T.y=V*.5*A+.5,u.push(T.x,T.y),p++}for(let L=0;L<i;L++){let k=b+L,I=D+L;v===!0?h.push(I,I+1,k):h.push(I+1,I,k),S+=3}c.addGroup(g,S,v===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ma=class s extends es{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Ot:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new z,i=[],r=[],o=[],a=new z,l=new Be;for(let u=0;u<=t;u++){let p=u/t;i[u]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Te(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(Te(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},ga=class extends ui{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ot){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},nu=class extends ga{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yp(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,i(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var c_=new z,h_=new z,np=new Yp,ip=new Yp,sp=new Yp,so=class extends ui{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new z){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(h_.subVectors(i[0],i[1]).add(i[0]),c=h_);let d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(c_.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=c_),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),np.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,x,m),ip.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,x,m),sp.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(np.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),ip.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),sp.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(np.calc(l),ip.calc(l),sp.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new z().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function u_(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function _M(s,t){let e=1-s;return e*e*t}function xM(s,t){return 2*(1-s)*s*t}function vM(s,t){return s*s*t}function Tl(s,t,e,n){return _M(s,t)+xM(s,e)+vM(s,n)}function yM(s,t){let e=1-s;return e*e*e*t}function SM(s,t){let e=1-s;return 3*e*e*s*t}function MM(s,t){return 3*(1-s)*s*s*t}function bM(s,t){return s*s*s*t}function wl(s,t,e,n,i){return yM(s,t)+SM(s,e)+MM(s,n)+bM(s,i)}var Vl=class extends ui{constructor(t=new Ot,e=new Ot,n=new Ot,i=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ot){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wl(t,i.x,r.x,o.x,a.x),wl(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},iu=class extends ui{constructor(t=new z,e=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new z){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wl(t,i.x,r.x,o.x,a.x),wl(t,i.y,r.y,o.y,a.y),wl(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wl=class extends ui{constructor(t=new Ot,e=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},su=class extends ui{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xl=class extends ui{constructor(t=new Ot,e=new Ot,n=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ot){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Tl(t,i.x,r.x,o.x),Tl(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ql=class extends ui{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Tl(t,i.x,r.x,o.x),Tl(t,i.y,r.y,o.y),Tl(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yl=class extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ot){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(u_(a,l.x,c.x,h.x,d.x),u_(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Ot().fromArray(i))}return this}},up=Object.freeze({__proto__:null,ArcCurve:nu,CatmullRomCurve3:so,CubicBezierCurve:Vl,CubicBezierCurve3:iu,EllipseCurve:ga,LineCurve:Wl,LineCurve3:su,QuadraticBezierCurve:Xl,QuadraticBezierCurve3:ql,SplineCurve:Yl}),ru=class extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new up[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new up[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},Zl=class extends ru{constructor(t){super(),this.type="Path",this.currentPoint=new Ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Wl(this.currentPoint.clone(),new Ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Xl(this.currentPoint.clone(),new Ot(t,e),new Ot(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Vl(this.currentPoint.clone(),new Ot(t,e),new Ot(n,i),new Ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Yl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new ga(t,e,n,i,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},_a=class extends Zl{constructor(t){super(t),this.uuid=Js(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Zl().fromJSON(i))}return this}};function TM(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=ox(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=CM(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let f=e;f<i;f+=e){let u=s[f],p=s[f+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return $l(r,o,e,a,l,c,0),o}function ox(s,t,e,n,i){let r;if(i===kM(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=f_(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=f_(o/n|0,s[o],s[o+1],r);return r&&xa(r,r.next)&&(Kl(r),r=r.next),r}function ro(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(xa(e,e.next)||an(e.prev,e,e.next)===0)){if(Kl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $l(s,t,e,n,i,r,o){if(!s)return;!o&&r&&NM(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?EM(s,n,i,r):wM(s)){t.push(l.i,s.i,c.i),Kl(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=AM(ro(s),t),$l(s,t,e,n,i,r,2)):o===2&&RM(s,t,e,n,i,r):$l(ro(s),t,e,n,i,r,1);break}}}function wM(s){let t=s.prev,e=s,n=s.next;if(an(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),f=Math.max(i,r,o),u=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&yl(i,a,r,l,o,c,p.x,p.y)&&an(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function EM(s,t,e,n){let i=s.prev,r=s,o=s.next;if(an(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(h,d,f),x=Math.max(a,l,c),m=Math.max(h,d,f),g=fp(u,p,t,e,n),y=fp(x,m,t,e,n),M=s.prevZ,v=s.nextZ;for(;M&&M.z>=g&&v&&v.z<=y;){if(M.x>=u&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&yl(a,h,l,d,c,f,M.x,M.y)&&an(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=u&&v.x<=x&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&yl(a,h,l,d,c,f,v.x,v.y)&&an(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=u&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&yl(a,h,l,d,c,f,M.x,M.y)&&an(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=u&&v.x<=x&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&yl(a,h,l,d,c,f,v.x,v.y)&&an(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function AM(s,t){let e=s;do{let n=e.prev,i=e.next.next;!xa(n,i)&&lx(n,e,e.next,i)&&Jl(n,i)&&Jl(i,n)&&(t.push(n.i,e.i,i.i),Kl(e),Kl(e.next),e=s=i),e=e.next}while(e!==s);return ro(e)}function RM(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&FM(o,a)){let l=cx(o,a);o=ro(o,o.next),l=ro(l,l.next),$l(o,t,e,n,i,r,0),$l(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function CM(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=ox(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(UM(c))}i.sort(PM);for(let r=0;r<i.length;r++)e=IM(i[r],e);return e}function PM(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function IM(s,t){let e=LM(s,t);if(!e)return t;let n=cx(e,s);return ro(n,n.next),ro(e,e.next)}function LM(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(xa(s,e))return e;do{if(xa(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ax(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);Jl(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&DM(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function DM(s,t){return an(s.prev,s,t.prev)<0&&an(t.next,s,s.next)<0}function NM(s,t,e,n){let i=s;do i.z===0&&(i.z=fp(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,OM(i)}function OM(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function fp(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function UM(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ax(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function yl(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&ax(s,t,e,n,i,r,o,a)}function FM(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!BM(s,t)&&(Jl(s,t)&&Jl(t,s)&&zM(s,t)&&(an(s.prev,s,t.prev)||an(s,t.prev,t))||xa(s,t)&&an(s.prev,s,s.next)>0&&an(t.prev,t,t.next)>0)}function an(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function xa(s,t){return s.x===t.x&&s.y===t.y}function lx(s,t,e,n){let i=Oh(an(s,t,e)),r=Oh(an(s,t,n)),o=Oh(an(e,n,s)),a=Oh(an(e,n,t));return!!(i!==r&&o!==a||i===0&&Nh(s,e,t)||r===0&&Nh(s,n,t)||o===0&&Nh(e,s,n)||a===0&&Nh(e,t,n))}function Nh(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Oh(s){return s>0?1:s<0?-1:0}function BM(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&lx(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Jl(s,t){return an(s.prev,s,s.next)<0?an(s,t,s.next)>=0&&an(s,s.prev,t)>=0:an(s,t,s.prev)<0||an(s,s.next,t)<0}function zM(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function cx(s,t){let e=dp(s.i,s.x,s.y),n=dp(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function f_(s,t,e,n){let i=dp(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Kl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function dp(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kM(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var pp=class{static triangulate(t,e,n=2){return TM(t,e,n)}},la=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];d_(t),p_(n,t);let o=t.length;e.forEach(d_);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,p_(n,e[l]);let a=pp.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function d_(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function p_(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var qi=class s extends Sn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*f-o;for(let M=0;M<c;M++){let v=M*d-r;p.push(v,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let M=y+c*g,v=y+c*(g+1),b=y+1+c*(g+1),T=y+1+c*g;u.push(M,v,T),u.push(v,b,T)}this.setIndex(u),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ql=class s extends Sn{constructor(t=new _a([new Ot(0,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ye(i,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(o,2));function c(h){let d=i.length/3,f=h.extractPoints(e),u=f.shape,p=f.holes;la.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];la.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=la.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];u=u.concat(y)}for(let m=0,g=u.length;m<g;m++){let y=u[m];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],M=y[0]+d,v=y[1]+d,b=y[2]+d;n.push(M,v,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return HM(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function HM(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var oo=class s extends Sn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new z,f=new z,u=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],M=g/n,v=o+M*a,b=t*Math.cos(v),T=Math.sqrt(t*t-b*b),_=0;g===0&&o===0?_=.5/e:g===n&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){let R=S/e,A=i+R*r;d.x=-T*Math.cos(A),d.y=b,d.z=T*Math.sin(A),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(R+_,1-M),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let M=h[g][y+1],v=h[g][y],b=h[g+1][y],T=h[g+1][y+1];(g!==0||o>0)&&u.push(M,v,T),(g!==n-1||l<Math.PI)&&u.push(v,b,T)}this.setIndex(u),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var yr=class s extends Sn{constructor(t=new ql(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new z,l=new z,c=new Ot,h=new z,d=[],f=[],u=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(u,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),y(),g()}function m(M){h=t.getPointAt(M/e,h);let v=o.normals[M],b=o.binormals[M];for(let T=0;T<=i;T++){let _=T/i*Math.PI*2,S=Math.sin(_),R=-Math.cos(_);l.x=R*v.x+S*b.x,l.y=R*v.y+S*b.y,l.z=R*v.z+S*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=e;M++)for(let v=1;v<=i;v++){let b=(i+1)*(M-1)+(v-1),T=(i+1)*M+(v-1),_=(i+1)*M+v,S=(i+1)*(M-1)+v;p.push(b,T,S),p.push(T,_,S)}}function y(){for(let M=0;M<=e;M++)for(let v=0;v<=i;v++)c.x=M/e,c.y=v/i,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new up[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function _o(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(m_(i))i.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(m_(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Qn(s){let t={};for(let e=0;e<s.length;e++){let n=_o(s[e]);for(let i in n)t[i]=n[i]}return t}function m_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function GM(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zp(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}var hx={clone:_o,merge:Qn},VM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VM,this.fragmentShader=WM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_o(t.uniforms),this.uniformsGroups=GM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ie().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ot().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new en().fromArray(i.value);break;case"m3":this.uniforms[n].value=new re().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ou=class extends Kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ue=class extends ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var jl=class extends ts{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.combine=Su,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},au=class extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},lu=class extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function sa(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Uh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Sr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},cu=class extends Sr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ap,endingEnd:ap}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case lp:r=t,a=2*e-n;break;case cp:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lp:o=t,l=2*n-e;break;case cp:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,M=(-1-u)*m+(1.5+u)*x+.5*p,v=u*m-u*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+y*o[c+b]+M*o[l+b]+v*o[d+b];return r}},hu=class extends Sr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},uu=class extends Sr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},fu=class extends Sr{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let f=a*2,u=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=u*f+p*2,y=d[g],M=d[g+1],v=t*f+p*2,b=h[v],T=h[v+1],_=qM(n,e,y,b,i);r[p]=ux(_,x,M,T,m)}return r}};function ux(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function XM(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function qM(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=ux(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=XM(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ni=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sa(e,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sa(t.times,Array),values:sa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Uh(t.settings)&&(n.settings={inTangents:sa(t.settings.inTangents,Array),outTangents:sa(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new uu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case El:e=this.InterpolantFactoryMethodDiscrete;break;case $h:e=this.InterpolantFactoryMethodLinear;break;case zh:e=this.InterpolantFactoryMethodSmooth;break;case op:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return El;case this.InterpolantFactoryMethodLinear:return $h;case this.InterpolantFactoryMethodSmooth:return zh;case this.InterpolantFactoryMethodBezier:return op}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Uh(this.settings)&&(g_(this.settings.inTangents,t),g_(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Uh(this.settings)&&(__(this.settings.inTangents,t),__(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ne("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ne("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&US(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ne("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zh,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[f+p]||x!==e[u+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Uh(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function g_(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function __(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Ni.prototype.ValueTypeName="";Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=$h;var Mr=class extends Ni{constructor(t,e,n){super(t,e,n)}};Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=El;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var du=class extends Ni{constructor(t,e,n,i){super(t,e,n,i)}};du.prototype.ValueTypeName="color";var pu=class extends Ni{constructor(t,e,n,i){super(t,e,n,i)}};pu.prototype.ValueTypeName="number";var mu=class extends Sr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)gs.slerpFlat(r,0,o,c-a,o,c,l);return r}},tc=class extends Ni{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new mu(this.times,this.values,this.getValueSize(),t)}};tc.prototype.ValueTypeName="quaternion";tc.prototype.InterpolantFactoryMethodSmooth=void 0;var br=class extends Ni{constructor(t,e,n){super(t,e,n)}};br.prototype.ValueTypeName="string";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=El;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;var gu=class extends Ni{constructor(t,e,n,i){super(t,e,n,i)}};gu.prototype.ValueTypeName="vector";var _u=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fx=new _u,xu=class{constructor(t){this.manager=t!==void 0?t:fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};xu.DEFAULT_MATERIAL_NAME="__DEFAULT";var ao=class extends mn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},lo=class extends ao{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},rp=new Be,x_=new z,v_=new z,va=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;x_.setFromMatrixPosition(t.matrixWorld),e.position.copy(x_),v_.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(v_),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){rp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(rp,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===ha||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(rp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fh=new z,Bh=new gs,ds=new z,ec=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fh,Bh,ds),ds.x===1&&ds.y===1&&ds.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fh,Bh,ds.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fh,Bh,ds),ds.x===1&&ds.y===1&&ds.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fh,Bh,ds.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_r=new z,y_=new Ot,S_=new Ot,En=class extends ec{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ml*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_r.x,_r.y).multiplyScalar(-t/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-t/_r.z)}getViewSize(t,e){return this.getViewBounds(t,y_,S_),e.subVectors(S_,y_)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ml*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},mp=class extends va{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=eo*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},nc=class extends ao{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new mp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},gp=class extends va{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0}},kn=class extends ao{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ic=class extends ec{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_p=class extends va{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},co=class extends ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new _p}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ra=-90,oa=1,ya=class extends mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new En(ra,oa,t,e);i.layers=this.layers,this.add(i);let r=new En(ra,oa,t,e);r.layers=this.layers,this.add(r);let o=new En(ra,oa,t,e);o.layers=this.layers,this.add(o);let a=new En(ra,oa,t,e);a.layers=this.layers,this.add(a);let l=new En(ra,oa,t,e);l.layers=this.layers,this.add(l);let c=new En(ra,oa,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},vu=class extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var $p="\\[\\]\\.:\\/",YM=new RegExp("["+$p+"]","g"),Jp="[^"+$p+"]",ZM="[^"+$p.replace("\\.","")+"]",$M=/((?:WC+[\/:])*)/.source.replace("WC",Jp),JM=/(WCOD+)?/.source.replace("WCOD",ZM),KM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jp),QM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jp),jM=new RegExp("^"+$M+JM+KM+QM+"$"),tb=["material","materials","bones","map"],xp=class{constructor(t,e,n){let i=n||Qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Qe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(YM,"")}static parseTrackName(t){let e=jM.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);tb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qe.Composite=xp;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zA=new Float32Array(1);var sc=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Qt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var nm=class nm{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};nm.prototype.isMatrix2=!0;var vp=nm;function Kp(s,t,e,n){let i=eb(n);switch(e){case Up:return s*t;case Ru:return s*t/i.components*i.byteLength;case Cu:return s*t/i.components*i.byteLength;case wr:return s*t*2/i.components*i.byteLength;case Pu:return s*t*2/i.components*i.byteLength;case Fp:return s*t*3/i.components*i.byteLength;case ss:return s*t*4/i.components*i.byteLength;case Iu:return s*t*4/i.components*i.byteLength;case oc:case ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case lc:case cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Du:case Ou:return Math.max(s,16)*Math.max(t,8)/4;case Lu:case Nu:return Math.max(s,8)*Math.max(t,8)/2;case Uu:case Fu:case zu:case ku:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Bu:case hc:case Hu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vu:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Wu:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Xu:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case qu:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Yu:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Zu:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case $u:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ju:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ku:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Qu:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ju:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case tf:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ef:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case nf:case sf:case rf:return Math.ceil(s/4)*Math.ceil(t/4)*16;case of:case af:return Math.ceil(s/4)*Math.ceil(t/4)*8;case uc:case lf:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function eb(s){switch(s){case yi:case Lp:return{byteLength:1,components:1};case Ta:case Dp:case is:return{byteLength:2,components:1};case Eu:case Au:return{byteLength:2,components:4};case ns:case wu:case Yi:return{byteLength:4,components:1};case Np:case Op:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Nx(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ib(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],x=d[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let x=d[u];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var sb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ob=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ub=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_b=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ab=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Db="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$b=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Jb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,e1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,n1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,i1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,o1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,d1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_1=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,M1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,E1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,A1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,D1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,H1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,G1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,X1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,K1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Q1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oT=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:sb,alphahash_pars_fragment:rb,alphamap_fragment:ob,alphamap_pars_fragment:ab,alphatest_fragment:lb,alphatest_pars_fragment:cb,aomap_fragment:hb,aomap_pars_fragment:ub,batching_pars_vertex:fb,batching_vertex:db,begin_vertex:pb,beginnormal_vertex:mb,bsdfs:gb,iridescence_fragment:_b,bumpmap_pars_fragment:xb,clipping_planes_fragment:vb,clipping_planes_pars_fragment:yb,clipping_planes_pars_vertex:Sb,clipping_planes_vertex:Mb,color_fragment:bb,color_pars_fragment:Tb,color_pars_vertex:wb,color_vertex:Eb,common:Ab,defaultnormal_vertex:Rb,displacementmap_pars_vertex:Cb,displacementmap_vertex:Pb,emissivemap_fragment:Ib,emissivemap_pars_fragment:Lb,colorspace_fragment:Db,colorspace_pars_fragment:Nb,envmap_fragment:Ob,envmap_common_pars_fragment:Ub,envmap_pars_fragment:Fb,envmap_pars_vertex:Bb,envmap_physical_pars_fragment:$b,envmap_vertex:zb,fog_vertex:kb,fog_pars_vertex:Hb,fog_fragment:Gb,fog_pars_fragment:Vb,gradientmap_pars_fragment:Wb,lightmap_pars_fragment:Xb,lights_lambert_fragment:qb,lights_lambert_pars_fragment:Yb,lights_pars_begin:Zb,lights_toon_fragment:Jb,lights_toon_pars_fragment:Kb,lights_phong_fragment:Qb,lights_phong_pars_fragment:jb,lights_physical_fragment:t1,lights_physical_pars_fragment:e1,lights_fragment_begin:n1,lights_fragment_maps:i1,lights_fragment_end:s1,lightprobes_pars_fragment:r1,logdepthbuf_fragment:o1,logdepthbuf_pars_fragment:a1,logdepthbuf_pars_vertex:l1,logdepthbuf_vertex:c1,map_fragment:h1,map_pars_fragment:u1,map_particle_fragment:f1,map_particle_pars_fragment:d1,metalnessmap_fragment:p1,metalnessmap_pars_fragment:m1,morphinstance_vertex:g1,morphcolor_vertex:_1,morphnormal_vertex:x1,morphtarget_pars_vertex:v1,morphtarget_vertex:y1,normal_fragment_begin:S1,normal_fragment_maps:M1,normal_pars_fragment:b1,normal_pars_vertex:T1,normal_vertex:w1,normalmap_pars_fragment:E1,clearcoat_normal_fragment_begin:A1,clearcoat_normal_fragment_maps:R1,clearcoat_pars_fragment:C1,iridescence_pars_fragment:P1,opaque_fragment:I1,packing:L1,premultiplied_alpha_fragment:D1,project_vertex:N1,dithering_fragment:O1,dithering_pars_fragment:U1,roughnessmap_fragment:F1,roughnessmap_pars_fragment:B1,shadowmap_pars_fragment:z1,shadowmap_pars_vertex:k1,shadowmap_vertex:H1,shadowmask_pars_fragment:G1,skinbase_vertex:V1,skinning_pars_vertex:W1,skinning_vertex:X1,skinnormal_vertex:q1,specularmap_fragment:Y1,specularmap_pars_fragment:Z1,tonemapping_fragment:$1,tonemapping_pars_fragment:J1,transmission_fragment:K1,transmission_pars_fragment:Q1,uv_pars_fragment:j1,uv_pars_vertex:tT,uv_vertex:eT,worldpos_vertex:nT,background_vert:iT,background_frag:sT,backgroundCube_vert:rT,backgroundCube_frag:oT,cube_vert:aT,cube_frag:lT,depth_vert:cT,depth_frag:hT,distance_vert:uT,distance_frag:fT,equirect_vert:dT,equirect_frag:pT,linedashed_vert:mT,linedashed_frag:gT,meshbasic_vert:_T,meshbasic_frag:xT,meshlambert_vert:vT,meshlambert_frag:yT,meshmatcap_vert:ST,meshmatcap_frag:MT,meshnormal_vert:bT,meshnormal_frag:TT,meshphong_vert:wT,meshphong_frag:ET,meshphysical_vert:AT,meshphysical_frag:RT,meshtoon_vert:CT,meshtoon_frag:PT,points_vert:IT,points_frag:LT,shadow_vert:DT,shadow_frag:NT,sprite_vert:OT,sprite_frag:UT},Dt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ms={basic:{uniforms:Qn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Qn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ie(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Qn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Qn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Qn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ie(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Qn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Qn([Dt.points,Dt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Qn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Qn([Dt.common,Dt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Qn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Qn([Dt.sprite,Dt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:Qn([Dt.common,Dt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:Qn([Dt.lights,Dt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Ms.physical={uniforms:Qn([Ms.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var uf={r:0,b:0,g:0},FT=new Be,Ox=new re;Ox.set(-1,0,0,0,1,0,0,0,1);function BT(s,t,e,n,i,r){let o=new ie(0),a=i===!0?0:1,l,c,h=null,d=0,f=null;function u(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=t.get(M,v)}return M}function p(y){let M=!1,v=u(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,M){let v=u(M);v&&v.isCubeTexture?(c===void 0&&(c=new Jt(new An(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:_o(Ms.backgroundCube.uniforms),vertexShader:Ms.backgroundCube.vertexShader,fragmentShader:Ms.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(FT.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ox),c.material.toneMapped=we.getTransfer(v.colorSpace)!==Fe,(h!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Jt(new qi(2,2),new Kn({name:"BackgroundMaterial",uniforms:_o(Ms.background.uniforms),vertexShader:Ms.background.vertexShader,fragmentShader:Ms.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=we.getTransfer(v.colorSpace)!==Fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(uf,Zp(s)),e.buffers.color.setClear(uf.r,uf.g,uf.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function zT(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(D,L,k,I,H){let V=!1,O=d(D,I,k,L);r!==O&&(r=O,c(r.object)),V=u(D,I,k,H),V&&p(D,I,k,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(D,L,k,I),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,L,k,I){let H=I.wireframe===!0,V=n[L.id];V===void 0&&(V={},n[L.id]=V);let O=D.isInstancedMesh===!0?D.id:0,$=V[O];$===void 0&&($={},V[O]=$);let W=$[k.id];W===void 0&&(W={},$[k.id]=W);let P=W[H];return P===void 0&&(P=f(l()),W[H]=P),P}function f(D){let L=[],k=[],I=[];for(let H=0;H<e;H++)L[H]=0,k[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:I,object:D,attributes:{},index:null}}function u(D,L,k,I){let H=r.attributes,V=L.attributes,O=0,$=k.getAttributes();for(let W in $)if($[W].location>=0){let Q=H[W],vt=V[W];if(vt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor)),Q===void 0||Q.attribute!==vt||vt&&Q.data!==vt.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function p(D,L,k,I){let H={},V=L.attributes,O=0,$=k.getAttributes();for(let W in $)if($[W].location>=0){let Q=V[W];Q===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let vt={};vt.attribute=Q,Q&&Q.data&&(vt.data=Q.data),H[W]=vt,O++}r.attributes=H,r.attributesNum=O,r.index=I}function x(){let D=r.newAttributes;for(let L=0,k=D.length;L<k;L++)D[L]=0}function m(D){g(D,0)}function g(D,L){let k=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;k[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),H[D]!==L&&(s.vertexAttribDivisor(D,L),H[D]=L)}function y(){let D=r.newAttributes,L=r.enabledAttributes;for(let k=0,I=L.length;k<I;k++)L[k]!==D[k]&&(s.disableVertexAttribArray(k),L[k]=0)}function M(D,L,k,I,H,V,O){O===!0?s.vertexAttribIPointer(D,L,k,H,V):s.vertexAttribPointer(D,L,k,I,H,V)}function v(D,L,k,I){x();let H=I.attributes,V=k.getAttributes(),O=L.defaultAttributeValues;for(let $ in V){let W=V[$];if(W.location>=0){let P=H[$];if(P===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),P!==void 0){let Q=P.normalized,vt=P.itemSize,It=t.get(P);if(It===void 0)continue;let Y=It.buffer,ht=It.type,Tt=It.bytesPerElement,Rt=ht===s.INT||ht===s.UNSIGNED_INT||P.gpuType===wu;if(P.isInterleavedBufferAttribute){let dt=P.data,Ut=dt.isInterleavedBuffer===!0?dt.stride:dt.itemSize,Kt=P.offset;if(dt.isInstancedInterleavedBuffer||dt.isInstancedBufferAttribute){for(let Ct=0;Ct<W.locationSize;Ct++)g(W.location+Ct,dt.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ct=0;Ct<W.locationSize;Ct++)m(W.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let Ct=0;Ct<W.locationSize;Ct++)M(W.location+Ct,vt/W.locationSize,ht,Q,Ut*Tt,(Kt+vt/W.locationSize*Ct)*Tt,Rt)}else{if(P.isInstancedBufferAttribute){for(let dt=0;dt<W.locationSize;dt++)g(W.location+dt,P.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let dt=0;dt<W.locationSize;dt++)m(W.location+dt);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let dt=0;dt<W.locationSize;dt++)M(W.location+dt,vt/W.locationSize,ht,Q,vt*Tt,vt/W.locationSize*dt*Tt,Rt)}}else if(O!==void 0){let Q=O[$];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(W.location,Q);break;case 3:s.vertexAttrib3fv(W.location,Q);break;case 4:s.vertexAttrib4fv(W.location,Q);break;default:s.vertexAttrib1fv(W.location,Q)}}}}y()}function b(){R();for(let D in n){let L=n[D];for(let k in L){let I=L[k];for(let H in I){let V=I[H];for(let O in V)h(V[O].object),delete V[O];delete I[H]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let k in L){let I=L[k];for(let H in I){let V=I[H];for(let O in V)h(V[O].object),delete V[O];delete I[H]}}delete n[D.id]}function _(D){for(let L in n){let k=n[L];for(let I in k){let H=k[I];if(H[D.id]===void 0)continue;let V=H[D.id];for(let O in V)h(V[O].object),delete V[O];delete H[D.id]}}}function S(D){for(let L in n){let k=n[L],I=D.isInstancedMesh===!0?D.id:0,H=k[I];if(H!==void 0){for(let V in H){let O=H[V];for(let $ in O)h(O[$].object),delete O[$];delete H[V]}delete k[I],Object.keys(k).length===0&&delete n[L]}}}function R(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function kT(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function HT(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==ss&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==yi&&_!==Yi&&!S&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Qt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:T}}function GT(s){let t=this,e=null,n=0,i=!1,r=!1,o=new ji,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,M=y*4,v=g.clippingState||null;l.value=v,v=h(p,f,M,u);for(let b=0;b!==M;++b)v[b]=e[b];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=u+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=u;M!==x;++M,v+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var mc=class extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new kl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new An(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:_o(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:uo});r.uniforms.tEquirect.value=e;let o=new Jt(i,r),a=e.minFilter;return e.minFilter===Ys&&(e.minFilter=ci),new ya(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},dx=256,VT=3,WT=20,Ux=256,Fx=16,XT=3,qT=new z,YT=new ie,Ea=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ya(1,10,null),this._boxMesh=new Jt(new An(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=qT}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(YT));let m=new ya(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(dx,Wp(t))}_fromTexture(t,e){t.mapping===mo||t.mapping===ba?this._setSize(t.image.length===0?dx:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=px(t,!1,!1),n=Math.log2(t)-VT;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=px(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===mo||t.mapping===ba?(this._cubemapMaterial===null&&(this._cubemapMaterial=gx()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=mx()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ZT(),this._integrationMaterial=$T());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Fx);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-XT)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Ux*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=JT());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function px(s,t,e){return new mc(s,{minFilter:Ys,generateMipmaps:t,type:is,colorSpace:Al,depthBuffer:e})}function gc(s,t,e){return new Kn({name:s,uniforms:t,vertexShader:_e.cube_vert,fragmentShader:e,side:Hn,blending:uo,depthTest:!1,depthWrite:!1})}function ZT(){return gc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ux}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $T(){return gc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Fx}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function JT(){return gc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${WT}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function mx(){return gc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function gx(){return gc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function KT(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Mu||u===bu)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new mc(p.height);return x.fromEquirectangularTexture(s,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,p=u===Mu||u===bu,x=u===mo||u===ba;if(p||x){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Ea(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Ea(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===Mu?f.mapping=mo:u===bu&&(f.mapping=ba),f}function l(f){let u=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&u++;return u===p}function c(f){let u=f.target;u.removeEventListener("dispose",c);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function QT(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Sl("WebGLRenderer: "+n+" extension not supported."),i}}}function jT(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?Nl:Dl,v=new M(Math.ceil(y/3)*6,1),b=v.array;if(x!==null){let _=x.array;g=x.version;for(let S=0,R=0;S<y;S+=3){let A=_[S+0],D=_[S+1],L=_[S+2];b[R++]=A,b[R++]=D,b[R++]=D,b[R++]=L,b[R++]=L,b[R++]=A}}else{g=m.version;for(let _=0,S=0;_<y;_+=3){let R=_+0,A=_+1,D=_+2;b[S++]=R,b[S++]=A,b[S++]=A,b[S++]=D,b[S++]=D,b[S++]=R}}v.version=g;let T=r.get(p);T&&t.remove(T),r.set(p,v)}function f(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(let p in i){let x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function tw(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let x=0;for(let m=0;m<u;m++)x+=f[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ew(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ne("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function nw(s,t,e){let n=new WeakMap,i=new en;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let R=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;u===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*b*4*d),_=new Il(T,v,b,d);_.type=Yi,_.needsUpdate=!0;let S=M*4;for(let A=0;A<d;A++){let D=m[A],L=g[A],k=y[A],I=v*b*4*A;for(let H=0;H<D.count;H++){let V=H*S;u===!0&&(i.fromBufferAttribute(D,H),T[I+V+0]=i.x,T[I+V+1]=i.y,T[I+V+2]=i.z,T[I+V+3]=0),p===!0&&(i.fromBufferAttribute(L,H),T[I+V+4]=i.x,T[I+V+5]=i.y,T[I+V+6]=i.z,T[I+V+7]=0),x===!0&&(i.fromBufferAttribute(k,H),T[I+V+8]=i.x,T[I+V+9]=i.y,T[I+V+10]=i.z,T[I+V+11]=k.itemSize===4?i.w:1)}}f={count:d,texture:_,size:new Ot(v,b)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function iw(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var sw={[wp]:"LINEAR_TONE_MAPPING",[Ep]:"REINHARD_TONE_MAPPING",[Ap]:"CINEON_TONE_MAPPING",[po]:"ACES_FILMIC_TONE_MAPPING",[Cp]:"AGX_TONE_MAPPING",[Pp]:"NEUTRAL_TONE_MAPPING",[Rp]:"CUSTOM_TONE_MAPPING"};function rw(s,t,e,n,i,r){let o=new Di(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Sn;h.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let d=new ou({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Jt(h,d),u=new ic(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,y=null,M=[],v=!1;this.setSize=function(b,T){o.setSize(b,T),a!==null&&a.setSize(b,T),l!==null&&l.setSize(b,T);for(let _=0;_<M.length;_++){let S=M[_];S.setSize&&S.setSize(b,T)}},this.setEffects=function(b){M=b,v=M.length>0&&M[0].isRenderPass===!0;let T=o.width,_=o.height;M.length>0&&a===null&&(a=new Di(T,_,{type:is,depthBuffer:!1,stencilBuffer:!1}),l=new Di(T,_,{type:is,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&M.some(R=>R.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new qs(T,_),r===!0&&(c.format=Zs,c.type=go)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let R=0;R<M.length;R++){let A=M[R];A.setSize&&A.setSize(T,_),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,T){if(m||b.toneMapping===ys&&M.length===0)return!1;if(y=T,T!==null){let _=T.width,S=T.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return v===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=ys,!0},this.hasRenderPass=function(){return v},this.end=function(b,T){b.toneMapping=g,m=!0;let _=o,S=a;for(let R=0;R<M.length;R++){let A=M[R];A.enabled!==!1&&(A.render(b,S,_,T),A.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(p!==b.outputColorSpace||x!==b.toneMapping){p=b.outputColorSpace,x=b.toneMapping,d.defines={},we.getTransfer(p)===Fe&&(d.defines.SRGB_TRANSFER="");let R=sw[x];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(y),b.render(f,u),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Bx=new hi,zx=new qs(1,1),kx=new Hl(1),Hx=new Il,Gx=new Qh,Vx=new kl,_x=[],xx=[],vx=new Float32Array(16),yx=new Float32Array(9),Sx=new Float32Array(4);function Ra(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=_x[i];if(r===void 0&&(r=new Float32Array(i),_x[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Rn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Cn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function df(s,t){let e=xx[t];e===void 0&&(e=new Int32Array(t),xx[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ow(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function aw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;s.uniform2fv(this.addr,t),Cn(e,t)}}function lw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Rn(e,t))return;s.uniform3fv(this.addr,t),Cn(e,t)}}function cw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;s.uniform4fv(this.addr,t),Cn(e,t)}}function hw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Cn(e,t)}else{if(Rn(e,n))return;Sx.set(n),s.uniformMatrix2fv(this.addr,!1,Sx),Cn(e,n)}}function uw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Cn(e,t)}else{if(Rn(e,n))return;yx.set(n),s.uniformMatrix3fv(this.addr,!1,yx),Cn(e,n)}}function fw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Cn(e,t)}else{if(Rn(e,n))return;vx.set(n),s.uniformMatrix4fv(this.addr,!1,vx),Cn(e,n)}}function dw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function pw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;s.uniform2iv(this.addr,t),Cn(e,t)}}function mw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Rn(e,t))return;s.uniform3iv(this.addr,t),Cn(e,t)}}function gw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;s.uniform4iv(this.addr,t),Cn(e,t)}}function _w(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function xw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;s.uniform2uiv(this.addr,t),Cn(e,t)}}function vw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Rn(e,t))return;s.uniform3uiv(this.addr,t),Cn(e,t)}}function yw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;s.uniform4uiv(this.addr,t),Cn(e,t)}}function pf(s){return s.version===0&&(s.compareFunction=kp,s.needsUpdate=!0),s}function Sw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=pf(zx):r=Bx,e.setTexture2D(t||r,i)}function Mw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Gx,i)}function bw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=pf(kx):r=Vx,e.setTextureCube(t||r,i)}function Tw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hx,i)}function ww(s){switch(s){case 5126:return ow;case 35664:return aw;case 35665:return lw;case 35666:return cw;case 35674:return hw;case 35675:return uw;case 35676:return fw;case 5124:case 35670:return dw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return _w;case 36294:return xw;case 36295:return vw;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Tw}}function Ew(s,t){s.uniform1fv(this.addr,t)}function Aw(s,t){let e=Ra(t,this.size,2);s.uniform2fv(this.addr,e)}function Rw(s,t){let e=Ra(t,this.size,3);s.uniform3fv(this.addr,e)}function Cw(s,t){let e=Ra(t,this.size,4);s.uniform4fv(this.addr,e)}function Pw(s,t){let e=Ra(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Iw(s,t){let e=Ra(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Lw(s,t){let e=Ra(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Dw(s,t){s.uniform1iv(this.addr,t)}function Nw(s,t){s.uniform2iv(this.addr,t)}function Ow(s,t){s.uniform3iv(this.addr,t)}function Uw(s,t){s.uniform4iv(this.addr,t)}function Fw(s,t){s.uniform1uiv(this.addr,t)}function Bw(s,t){s.uniform2uiv(this.addr,t)}function zw(s,t){s.uniform3uiv(this.addr,t)}function kw(s,t){s.uniform4uiv(this.addr,t)}function Hw(s,t,e){let n=this.cache,i=t.length,r=df(e,i);Rn(n,r)||(s.uniform1iv(this.addr,r),Cn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=pf(zx):o=Bx;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Gw(s,t,e){let n=this.cache,i=t.length,r=df(e,i);Rn(n,r)||(s.uniform1iv(this.addr,r),Cn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Gx,r[o])}function Vw(s,t,e){let n=this.cache,i=t.length,r=df(e,i);Rn(n,r)||(s.uniform1iv(this.addr,r),Cn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=pf(kx):o=Vx;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function Ww(s,t,e){let n=this.cache,i=t.length,r=df(e,i);Rn(n,r)||(s.uniform1iv(this.addr,r),Cn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Hx,r[o])}function Xw(s){switch(s){case 5126:return Ew;case 35664:return Aw;case 35665:return Rw;case 35666:return Cw;case 35674:return Pw;case 35675:return Iw;case 35676:return Lw;case 5124:case 35670:return Dw;case 35667:case 35671:return Nw;case 35668:case 35672:return Ow;case 35669:case 35673:return Uw;case 5125:return Fw;case 36294:return Bw;case 36295:return zw;case 36296:return kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Gw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return Ww}}var rm=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ww(e.type)}},om=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xw(e.type)}},am=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},im=/(\w+)(\])?(\[|\.)?/g;function Mx(s,t){s.seq.push(t),s.map[t.id]=t}function qw(s,t,e){let n=s.name,i=n.length;for(im.lastIndex=0;;){let r=im.exec(n),o=im.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Mx(e,c===void 0?new rm(a,s,t):new om(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new am(a),Mx(e,d)),e=d}}}var wa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);qw(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function bx(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Yw=37297,Zw=0;function $w(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Tx=new re;function Jw(s){we._getMatrix(Tx,we.workingColorSpace,s);let t=`mat3( ${Tx.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(s)){case Rl:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function wx(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+$w(s.getShaderSource(t),a)}else return r}function Kw(s,t){let e=Jw(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Qw={[wp]:"Linear",[Ep]:"Reinhard",[Ap]:"Cineon",[po]:"ACESFilmic",[Cp]:"AgX",[Pp]:"Neutral",[Rp]:"Custom"};function jw(s,t){let e=Qw[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ff=new z;function tE(){we.getLuminanceCoefficients(ff);let s=ff.x.toFixed(4),t=ff.y.toFixed(4),e=ff.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pc).join(`
`)}function nE(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function iE(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function pc(s){return s!==""}function Ex(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ax(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sE=/^[ \t]*#include +<([\w\d./]+)>/gm;function lm(s){return s.replace(sE,rE)}function rE(s,t){let e=_e[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return lm(e)}var oE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rx(s){return s.replace(oE,aE)}function aE(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cx(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var lE={[ho]:"SHADOWMAP_TYPE_PCF",[Sa]:"SHADOWMAP_TYPE_VSM"};function cE(s){return lE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hE={[ba]:"ENVMAP_MODE_REFRACTION"};function uE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":hE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fE={[Su]:"ENVMAP_BLENDING_MULTIPLY",[V_]:"ENVMAP_BLENDING_MIX",[W_]:"ENVMAP_BLENDING_ADD"};function dE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":fE[s.combine]||"ENVMAP_BLENDING_NONE"}function pE(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=cE(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=uE(e),d=dE(e),f=eE(e),u=nE(r),p=i.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(pc).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(pc).join(`
`),m.length>0&&(m+=`
`)):(x=[Cx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pc).join(`
`),m=[Cx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ys?"#define TONE_MAPPING":"",e.toneMapping!==ys?_e.tonemapping_pars_fragment:"",e.toneMapping!==ys?jw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,Kw("linearToOutputTexel",e.outputColorSpace),tE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pc).join(`
`)),o=lm(o),o=Ex(o,e),o=Ax(o,e),a=lm(a),a=Ex(a,e),a=Ax(a,e),o=Rx(o),a=Rx(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+o,M=g+m+a,v=bx(i,i.VERTEX_SHADER,y),b=bx(i,i.FRAGMENT_SHADER,M);i.attachShader(p,v),i.attachShader(p,b),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function T(A){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(p)||"",L=i.getShaderInfoLog(v)||"",k=i.getShaderInfoLog(b)||"",I=D.trim(),H=L.trim(),V=k.trim(),O=!0,$=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,v,b);else{let W=wx(i,v,"vertex"),P=wx(i,b,"fragment");ne("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+W+`
`+P)}else I!==""?Qt("WebGLProgram: Program Info Log:",I):(H===""||V==="")&&($=!1);$&&(A.diagnostics={runnable:O,programLog:I,vertexShader:{log:H,prefix:x},fragmentShader:{log:V,prefix:m}})}i.deleteShader(v),i.deleteShader(b),_=new wa(i,p),S=iE(i,p)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(p,Yw)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zw++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=b,this}var mE=0,cm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hm(t),e.set(t,n)),n}},hm=class{constructor(t){this.id=mE++,this.code=t,this.usedTimes=0}};function gE(s){return s===wr||s===hc||s===uc}function _E(s,t,e,n,i,r){let o=new Ll,a=new cm,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,R,A,D,L){let k=A.fog,I=D.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=t.get(_.envMap||H,V),$=f[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&Qt("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let P=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=P!==void 0?P.length:0,vt=0;I.morphAttributes.position!==void 0&&(vt=1),I.morphAttributes.normal!==void 0&&(vt=2),I.morphAttributes.color!==void 0&&(vt=3);let It,Y,ht,Tt;if($){let rt=Ms[$];It=rt.vertexShader,Y=rt.fragmentShader}else{It=_.vertexShader,Y=_.fragmentShader;let rt=a.getVertexShaderStage(_),Lt=a.getFragmentShaderStage(_);a.update(_,rt,Lt),ht=rt.id,Tt=Lt.id}let Rt=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),Ut=D.isInstancedMesh===!0,Kt=D.isBatchedMesh===!0,Ct=!!_.map,$t=!!_.matcap,zt=!!O,Vt=zt&&O.isPMREMTexture===!0,xe=!!_.aoMap,ve=!!_.lightMap,K=!!_.bumpMap&&_.wireframe===!1,le=!!_.normalMap,$e=!!_.displacementMap,Ae=!!_.emissiveMap,oe=!!_.metalnessMap,fe=!!_.roughnessMap,Re=_.anisotropy>0,U=_.clearcoat>0,de=_.diffuseRoughness>0,Bt=_.dispersion>0,Ft=_.retroreflectivity>0,ut=_.iridescence>0,ce=_.sheen>0,Gt=_.transmission>0,Yt=Re&&!!_.anisotropyMap,C=U&&!!_.clearcoatMap,w=U&&!!_.clearcoatNormalMap,G=U&&!!_.clearcoatRoughnessMap,pt=de&&!!_.diffuseRoughnessMap,ot=ut&&!!_.iridescenceMap,gt=ut&&!!_.iridescenceThicknessMap,bt=ce&&!!_.sheenColorMap,q=ce&&!!_.sheenRoughnessMap,st=!!_.specularMap,xt=!!_.specularColorMap,N=!!_.specularIntensityMap,it=Gt&&!!_.transmissionMap,tt=Gt&&!!_.thicknessMap,St=!!_.gradientMap,_t=!!_.alphaMap,Mt=_.alphaTest>0,mt=!!_.alphaHash,yt=!!_.extensions,at=ys;_.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(at=s.toneMapping);let nt=Vt?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,wt={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:It,fragmentShader:Y,defines:_.defines,customVertexShaderID:ht,customFragmentShaderID:Tt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:Kt,batchingColor:Kt&&D._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&D.instanceColor!==null,instancingMorph:Ut&&D.morphTexture!==null,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:we.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:$t,envMap:zt,envMapMode:zt&&O.mapping,envMapPMREM:Vt,envMapMaxLod:Vt?nt.length-1:null,envMapSize:Vt?nt[0].width:null,aoMap:xe,lightMap:ve,bumpMap:K,normalMap:le,displacementMap:$e,emissiveMap:Ae,normalMapObjectSpace:le&&_.normalMapType===Y_,normalMapTangentSpace:le&&_.normalMapType===fc,packedNormalMap:le&&_.normalMapType===fc&&gE(_.normalMap.format),metalnessMap:oe,roughnessMap:fe,anisotropy:Re,anisotropyMap:Yt,clearcoat:U,clearcoatMap:C,clearcoatNormalMap:w,clearcoatRoughnessMap:G,diffuseRoughness:de,diffuseRoughnessMap:pt,dispersion:Bt,retroreflection:Ft,iridescence:ut,iridescenceMap:ot,iridescenceThicknessMap:gt,sheen:ce,sheenColorMap:bt,sheenRoughnessMap:q,specularMap:st,specularColorMap:xt,specularIntensityMap:N,transmission:Gt,transmissionMap:it,thicknessMap:tt,gradientMap:St,opaque:_.transparent===!1&&_.blending===Ma&&_.alphaToCoverage===!1,alphaMap:_t,alphaTest:Mt,alphaHash:mt,combine:_.combine,mapUv:Ct&&u(_.map.channel),aoMapUv:xe&&u(_.aoMap.channel),lightMapUv:ve&&u(_.lightMap.channel),bumpMapUv:K&&u(_.bumpMap.channel),normalMapUv:le&&u(_.normalMap.channel),displacementMapUv:$e&&u(_.displacementMap.channel),emissiveMapUv:Ae&&u(_.emissiveMap.channel),metalnessMapUv:oe&&u(_.metalnessMap.channel),roughnessMapUv:fe&&u(_.roughnessMap.channel),anisotropyMapUv:Yt&&u(_.anisotropyMap.channel),clearcoatMapUv:C&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:w&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pt&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:q&&u(_.sheenRoughnessMap.channel),specularMapUv:st&&u(_.specularMap.channel),specularColorMapUv:xt&&u(_.specularColorMap.channel),specularIntensityMapUv:N&&u(_.specularIntensityMap.channel),transmissionMapUv:it&&u(_.transmissionMap.channel),thicknessMapUv:tt&&u(_.thicknessMap.channel),alphaMapUv:_t&&u(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(le||Re),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ct||_t),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&le===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:vt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.filter(rt=>rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&we.getTransfer(_.map.colorSpace)===Fe,decodeVideoTextureEmissive:Ae&&_.emissiveMap.isVideoTexture===!0&&we.getTransfer(_.emissiveMap.colorSpace)===Fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Oi,flipSided:_.side===Hn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:yt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&_.extensions.multiDraw===!0||Kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)S.push(R),S.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(S,_),g(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let S=f[_.type],R;if(S){let A=Ms[S];R=hx.clone(A.uniforms)}else R=_.uniforms;return R}function M(_,S){let R=h.get(S);return R!==void 0?++R.usedTimes:(R=new pE(s,S,_,i),c.push(R),h.set(S,R)),R}function v(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:M,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:T}}function xE(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function vE(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Px(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ix(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,x,m,g){let y=s[t];return y===void 0?(y={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},s[t]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=p,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=m,y.group=g),t++,y}function l(f,u,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let M=a(f,u,p,x,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):e.push(M)}function c(f,u,p,x,m,g){let y=a(f,u,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):e.unshift(y)}function h(f,u){e.length>1&&e.sort(f||vE),n.length>1&&n.sort(u||Px),i.length>1&&i.sort(u||Px)}function d(){for(let f=t,u=s.length;f<u;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function yE(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Ix,s.set(n,[o])):i>=r.length?(o=new Ix,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function SE(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new ie};break;case"SpotLight":e={position:new z,direction:new z,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new z,halfWidth:new z,halfHeight:new z};break}return s[t.id]=e,e}}}function ME(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var bE=0;function TE(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function wE(s){let t=new SE,e=ME(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let i=new z,r=new Be,o=new Be;function a(c){let h=0,d=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,y=0,M=0,v=0,b=0,T=0,_=0,S=0,R=0,A=0;c.sort(TE);for(let L=0,k=c.length;L<k;L++){let I=c[L],H=I.color,V=I.intensity,O=I.distance,$=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===wr?$=I.shadow.map.texture:$=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=H.r*V,d+=H.g*V,f+=H.b*V;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],V);A++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,Q=e.get(I);Q.shadowIntensity=P.intensity,Q.shadowBias=P.bias,Q.shadowNormalBias=P.normalBias,Q.shadowRadius=P.radius,Q.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[p]=Q,n.sunShadowMap[p]=$;let vt=P.getViewportCount();for(let It=0;It<vt;It++)n.sunShadowMatrix[x+It]=P.getMatrix(It),n.sunShadowCascade[x+It]=P._cascadeData[It];x+=vt,p++}n.sun[u]=W,u++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,Q=e.get(I);Q.shadowIntensity=P.intensity,Q.shadowBias=P.bias,Q.shadowNormalBias=P.normalBias,Q.shadowRadius=P.radius,Q.shadowMapSize=P.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=I.shadow.matrix,b++}n.directional[m]=W,m++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(H).multiplyScalar(V),W.distance=O,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[y]=W;let P=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,P.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[y]=P.matrix,I.castShadow){let Q=e.get(I);Q.shadowIntensity=P.intensity,Q.shadowBias=P.bias,Q.shadowNormalBias=P.normalBias,Q.shadowRadius=P.radius,Q.shadowMapSize=P.mapSize,n.spotShadow[y]=Q,n.spotShadowMap[y]=$,_++}y++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(H).multiplyScalar(V),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=W,M++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let P=I.shadow,Q=e.get(I);Q.shadowIntensity=P.intensity,Q.shadowBias=P.bias,Q.shadowNormalBias=P.normalBias,Q.shadowRadius=P.radius,Q.shadowMapSize=P.mapSize,Q.shadowCameraNear=P.camera.near,Q.shadowCameraFar=P.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=I.shadow.matrix,T++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(V),W.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[v]=W,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let D=n.hash;(D.sunLength!==u||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==y||D.rectAreaLength!==M||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==b||D.numPointShadows!==T||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==A)&&(n.sun.length=u,n.directional.length=m,n.spot.length=y,n.rectArea.length=M,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,D.sunLength=u,D.directionalLength=m,D.pointLength=g,D.spotLength=y,D.rectAreaLength=M,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=b,D.numPointShadows=T,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=A,n.version=bE++)}function l(c,h){let d=0,f=0,u=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(v.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Lx(s){let t=new wE(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function EE(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Lx(s),t.set(i,[a])):r>=o.length?(a=new Lx(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var AE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,CE=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],PE=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Dx=new Be,dc=new z,sm=new z;function IE(s,t,e){let n=new xr,i=new Ot,r=new Ot,o=new en,a=new au,l=new lu,c={},h=e.maxTextureSize,d={[Tr]:Hn,[Hn]:Tr,[Oi]:Oi},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:AE,fragmentShader:RE}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new Sn;p.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Jt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ho;let g=this.type;this.render=function(T,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===T_&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ho);let R=s.getRenderTarget(),A=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),L=s.state;L.setBlending(uo),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=g!==this.type;k&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=T.length;I<H;I++){let V=T[I],O=V.shadow;if(O===void 0){Qt("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let $=O.getFrameExtents();i.multiply($),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,O.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||k===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Sa){if(V.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Di(i.x,i.y,{format:wr,type:is,minFilter:ci,magFilter:ci,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new qs(i.x,i.y,Yi),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=Vs,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Nn,O.map.depthTexture.magFilter=Nn}else V.isPointLight?(O.map=new mc(i.x),O.map.depthTexture=new Hl(i.x,ns)):(O.map=new Di(i.x,i.y),O.map.depthTexture=new qs(i.x,i.y,ns)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=Vs,this.type===ho?(O.map.depthTexture.compareFunction=W?zp:Bp,O.map.depthTexture.minFilter=ci,O.map.depthTexture.magFilter=ci):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Nn,O.map.depthTexture.magFilter=Nn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let P=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();V.isPointLight!==!0&&O.updateMatrices(V,S);let Q=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let vt=0;vt<P;vt++){let It=O.getCamera(vt);if(V.isPointLight){let Y=O.camera,ht=O.matrix,Tt=V.distance||Y.far;Tt!==Y.far&&(Y.far=Tt,Y.updateProjectionMatrix()),dc.setFromMatrixPosition(V.matrixWorld),Y.position.copy(dc),sm.copy(Y.position),sm.add(CE[vt]),Y.up.copy(PE[vt]),Y.lookAt(sm),Y.updateMatrixWorld(),ht.makeTranslation(-dc.x,-dc.y,-dc.z),Dx.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Dx,Y.coordinateSystem,Y.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,vt),s.clear();else{vt===0&&(s.setRenderTarget(O.map),s.clear());let Y=O.getViewport(vt);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),L.viewport(o)}n=O.getFrustum(vt),v(_,S,It,V,Q,this.type)}O.isPointLightShadow!==!0&&this.type===Sa&&y(O,S),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(R,A,D)};function y(T,_){let S=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new Di(i.x,i.y,{format:wr,type:is}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(_,null,S,f,x,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(_,null,S,u,x,null)}function M(T,_,S,R){let A=null,D=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)A=D;else if(A=S.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let L=A.uuid,k=_.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let H=I[k];H===void 0&&(H=A.clone(),I[k]=H,_.addEventListener("dispose",b)),A=H}if(A.visible=_.visible,A.wireframe=_.wireframe,R===Sa?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:d[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=s.properties.get(A);L.light=S}return A}function v(T,_,S,R,A,D){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Sa)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let I=t.update(T),H=T.material;if(Array.isArray(H)){let V=I.groups;for(let O=0,$=V.length;O<$;O++){let W=V[O],P=H[W.materialIndex];if(P&&P.visible){let Q=M(T,P,R,D);T.onBeforeShadow(s,T,_,S,I,Q,W),s.renderBufferDirect(S,null,I,Q,T,W),T.onAfterShadow(s,T,_,S,I,Q,W)}}}else if(H.visible){let V=M(T,H,R,D);T.onBeforeShadow(s,T,_,S,I,V,null),s.renderBufferDirect(S,null,I,V,T,null),T.onAfterShadow(s,T,_,S,I,V,null)}}let k=T.children;for(let I=0,H=k.length;I<H;I++)v(k[I],_,S,R,A,D)}function b(T){T.target.removeEventListener("dispose",b);for(let S in c){let R=c[S],A=T.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function LE(s,t){function e(){let N=!1,it=new en,tt=null,St=new en(0,0,0,0);return{setMask:function(_t){tt!==_t&&!N&&(s.colorMask(_t,_t,_t,_t),tt=_t)},setLocked:function(_t){N=_t},setClear:function(_t,Mt,mt,yt,at){at===!0&&(_t*=yt,Mt*=yt,mt*=yt),it.set(_t,Mt,mt,yt),St.equals(it)===!1&&(s.clearColor(_t,Mt,mt,yt),St.copy(it))},reset:function(){N=!1,tt=null,St.set(-1,0,0,0)}}}function n(){let N=!1,it=!1,tt=null,St=null,_t=null;return{setReversed:function(Mt){if(it!==Mt){let mt=t.get("EXT_clip_control");Mt?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),it=Mt;let yt=_t;_t=null,this.setClear(yt)}},getReversed:function(){return it},setTest:function(Mt){Mt?dt(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(Mt){tt!==Mt&&!N&&(s.depthMask(Mt),tt=Mt)},setFunc:function(Mt){if(it&&(Mt=ix[Mt]),St!==Mt){switch(Mt){case Hh:s.depthFunc(s.NEVER);break;case Gh:s.depthFunc(s.ALWAYS);break;case Vh:s.depthFunc(s.LESS);break;case ca:s.depthFunc(s.LEQUAL);break;case Wh:s.depthFunc(s.EQUAL);break;case Xh:s.depthFunc(s.GEQUAL);break;case qh:s.depthFunc(s.GREATER);break;case Yh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=Mt}},setLocked:function(Mt){N=Mt},setClear:function(Mt){_t!==Mt&&(_t=Mt,it&&(Mt=1-Mt),s.clearDepth(Mt))},reset:function(){N=!1,tt=null,St=null,_t=null,it=!1}}}function i(){let N=!1,it=null,tt=null,St=null,_t=null,Mt=null,mt=null,yt=null,at=null;return{setTest:function(nt){N||(nt?dt(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(nt){it!==nt&&!N&&(s.stencilMask(nt),it=nt)},setFunc:function(nt,wt,rt){(tt!==nt||St!==wt||_t!==rt)&&(s.stencilFunc(nt,wt,rt),tt=nt,St=wt,_t=rt)},setOp:function(nt,wt,rt){(Mt!==nt||mt!==wt||yt!==rt)&&(s.stencilOp(nt,wt,rt),Mt=nt,mt=wt,yt=rt)},setLocked:function(nt){N=nt},setClear:function(nt){at!==nt&&(s.clearStencil(nt),at=nt)},reset:function(){N=!1,it=null,tt=null,St=null,_t=null,Mt=null,mt=null,yt=null,at=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,M=null,v=null,b=null,T=null,_=null,S=new ie(0,0,0),R=0,A=!1,D=null,L=null,k=null,I=null,H=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,$=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=$>=2);let P=null,Q={},vt=s.getParameter(s.SCISSOR_BOX),It=s.getParameter(s.VIEWPORT),Y=new en().fromArray(vt),ht=new en().fromArray(It);function Tt(N,it,tt,St){let _t=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(N,Mt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let mt=0;mt<tt;mt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(it+mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return Mt}let Rt={};Rt[s.TEXTURE_2D]=Tt(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=Tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[s.TEXTURE_2D_ARRAY]=Tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=Tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(s.DEPTH_TEST),o.setFunc(ca),K(!1),le(yp),dt(s.CULL_FACE),xe(uo);function dt(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Ut(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Kt(N,it){return f[N]!==it?(s.bindFramebuffer(N,it),f[N]=it,N===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=it),N===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=it),!0):!1}function Ct(N,it){let tt=p,St=!1;if(N){tt=u.get(it),tt===void 0&&(tt=[],u.set(it,tt));let _t=N.textures;if(tt.length!==_t.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,mt=_t.length;Mt<mt;Mt++)tt[Mt]=s.COLOR_ATTACHMENT0+Mt;tt.length=_t.length,St=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,St=!0);St&&s.drawBuffers(tt)}function $t(N){return x!==N?(s.useProgram(N),x=N,!0):!1}let zt={[fo]:s.FUNC_ADD,[E_]:s.FUNC_SUBTRACT,[A_]:s.FUNC_REVERSE_SUBTRACT};zt[R_]=s.MIN,zt[C_]=s.MAX;let Vt={[P_]:s.ZERO,[I_]:s.ONE,[L_]:s.SRC_COLOR,[bp]:s.SRC_ALPHA,[B_]:s.SRC_ALPHA_SATURATE,[U_]:s.DST_COLOR,[N_]:s.DST_ALPHA,[D_]:s.ONE_MINUS_SRC_COLOR,[Tp]:s.ONE_MINUS_SRC_ALPHA,[F_]:s.ONE_MINUS_DST_COLOR,[O_]:s.ONE_MINUS_DST_ALPHA,[z_]:s.CONSTANT_COLOR,[k_]:s.ONE_MINUS_CONSTANT_COLOR,[H_]:s.CONSTANT_ALPHA,[G_]:s.ONE_MINUS_CONSTANT_ALPHA};function xe(N,it,tt,St,_t,Mt,mt,yt,at,nt){if(N===uo){m===!0&&(Ut(s.BLEND),m=!1);return}if(m===!1&&(dt(s.BLEND),m=!0),N!==w_){if(N!==g||nt!==A){if((y!==fo||b!==fo)&&(s.blendEquation(s.FUNC_ADD),y=fo,b=fo),nt)switch(N){case Ma:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vs:s.blendFunc(s.ONE,s.ONE);break;case Sp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ne("WebGLState: Invalid blending: ",N);break}else switch(N){case Ma:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Sp:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mp:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",N);break}M=null,v=null,T=null,_=null,S.set(0,0,0),R=0,g=N,A=nt}return}_t=_t||it,Mt=Mt||tt,mt=mt||St,(it!==y||_t!==b)&&(s.blendEquationSeparate(zt[it],zt[_t]),y=it,b=_t),(tt!==M||St!==v||Mt!==T||mt!==_)&&(s.blendFuncSeparate(Vt[tt],Vt[St],Vt[Mt],Vt[mt]),M=tt,v=St,T=Mt,_=mt),(yt.equals(S)===!1||at!==R)&&(s.blendColor(yt.r,yt.g,yt.b,at),S.copy(yt),R=at),g=N,A=!1}function ve(N,it){N.side===Oi?Ut(s.CULL_FACE):dt(s.CULL_FACE);let tt=N.side===Hn;it&&(tt=!tt),K(tt),N.blending===Ma&&N.transparent===!1?xe(uo):xe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let St=N.stencilWrite;a.setTest(St),St&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function K(N){D!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),D=N)}function le(N){N!==M_?(dt(s.CULL_FACE),N!==L&&(N===yp?s.cullFace(s.BACK):N===b_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),L=N}function $e(N){N!==k&&(O&&s.lineWidth(N),k=N)}function Ae(N,it,tt){N?(dt(s.POLYGON_OFFSET_FILL),(I!==it||H!==tt)&&(I=it,H=tt,o.getReversed()&&(it=-it,tt=-tt),s.polygonOffset(it,tt))):Ut(s.POLYGON_OFFSET_FILL)}function oe(N){N?dt(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function fe(N){N===void 0&&(N=s.TEXTURE0+V-1),P!==N&&(s.activeTexture(N),P=N)}function Re(N,it,tt){tt===void 0&&(P===null?tt=s.TEXTURE0+V-1:tt=P);let St=Q[tt];St===void 0&&(St={type:void 0,texture:void 0},Q[tt]=St),(St.type!==N||St.texture!==it)&&(P!==tt&&(s.activeTexture(tt),P=tt),s.bindTexture(N,it||Rt[N]),St.type=N,St.texture=it)}function U(){let N=Q[P];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function de(){try{s.compressedTexImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function Bt(){try{s.compressedTexImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function Ft(){try{s.texSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function ut(){try{s.texSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function Gt(){try{s.compressedTexSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function Yt(){try{s.texStorage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function C(){try{s.texStorage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function w(){try{s.texImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function G(){try{s.texImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function pt(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function ot(N,it){d[N]!==it&&(s.pixelStorei(N,it),d[N]=it)}function gt(N){Y.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Y.copy(N))}function bt(N){ht.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ht.copy(N))}function q(N,it){let tt=c.get(it);tt===void 0&&(tt=new WeakMap,c.set(it,tt));let St=tt.get(N);St===void 0&&(St=s.getUniformBlockIndex(it,N.name),s.uniformBlockBinding(it,St,St),tt.set(N,St))}function st(N,it,tt){let _t=c.get(it).get(N);l[_t]!==tt&&(s.bindBufferBase(s.UNIFORM_BUFFER,_t,tt),l[_t]=tt)}function xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},P=null,Q={},f={},l={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,M=null,v=null,b=null,T=null,_=null,S=new ie(0,0,0),R=0,A=!1,D=null,L=null,k=null,I=null,H=null,Y.set(0,0,s.canvas.width,s.canvas.height),ht.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:Ut,bindFramebuffer:Kt,drawBuffers:Ct,useProgram:$t,setBlending:xe,setMaterial:ve,setFlipSided:K,setCullFace:le,setLineWidth:$e,setPolygonOffset:Ae,setScissorTest:oe,activeTexture:fe,bindTexture:Re,unbindTexture:U,compressedTexImage2D:de,compressedTexImage3D:Bt,texImage2D:w,texImage3D:G,pixelStorei:ot,getParameter:pt,updateUBOMapping:q,uniformBlockBinding:st,texStorage2D:Yt,texStorage3D:C,texSubImage2D:Ft,texSubImage3D:ut,compressedTexSubImage2D:ce,compressedTexSubImage3D:Gt,scissor:gt,viewport:bt,reset:xt}}function DE(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap,d=new Set,f,u=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return m?new OffscreenCanvas(C,w):Cl("canvas")}function y(C,w,G){let pt=1,ot=Yt(C);if((ot.width>G||ot.height>G)&&(pt=G/Math.max(ot.width,ot.height)),pt<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let gt=Math.floor(pt*ot.width),bt=Math.floor(pt*ot.height);f===void 0&&(f=g(gt,bt));let q=w?g(gt,bt):f;return q.width=gt,q.height=bt,q.getContext("2d").drawImage(C,0,0,gt,bt),Qt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+gt+"x"+bt+")."),q}else return"data"in C&&Qt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),C;return C}function M(C){return C.generateMipmaps}function v(C){s.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(C,w,G,pt,ot,gt=!1){if(C!==null){if(s[C]!==void 0)return s[C];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let bt;pt&&(bt=t.get("EXT_texture_norm16"),bt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=w;if(w===s.RED&&(G===s.FLOAT&&(q=s.R32F),G===s.HALF_FLOAT&&(q=s.R16F),G===s.UNSIGNED_BYTE&&(q=s.R8),G===s.UNSIGNED_SHORT&&bt&&(q=bt.R16_EXT),G===s.SHORT&&bt&&(q=bt.R16_SNORM_EXT)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.R8UI),G===s.UNSIGNED_SHORT&&(q=s.R16UI),G===s.UNSIGNED_INT&&(q=s.R32UI),G===s.BYTE&&(q=s.R8I),G===s.SHORT&&(q=s.R16I),G===s.INT&&(q=s.R32I)),w===s.RG&&(G===s.FLOAT&&(q=s.RG32F),G===s.HALF_FLOAT&&(q=s.RG16F),G===s.UNSIGNED_BYTE&&(q=s.RG8),G===s.UNSIGNED_SHORT&&bt&&(q=bt.RG16_EXT),G===s.SHORT&&bt&&(q=bt.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.RG8UI),G===s.UNSIGNED_SHORT&&(q=s.RG16UI),G===s.UNSIGNED_INT&&(q=s.RG32UI),G===s.BYTE&&(q=s.RG8I),G===s.SHORT&&(q=s.RG16I),G===s.INT&&(q=s.RG32I)),w===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.RGB8UI),G===s.UNSIGNED_SHORT&&(q=s.RGB16UI),G===s.UNSIGNED_INT&&(q=s.RGB32UI),G===s.BYTE&&(q=s.RGB8I),G===s.SHORT&&(q=s.RGB16I),G===s.INT&&(q=s.RGB32I)),w===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),G===s.UNSIGNED_INT&&(q=s.RGBA32UI),G===s.BYTE&&(q=s.RGBA8I),G===s.SHORT&&(q=s.RGBA16I),G===s.INT&&(q=s.RGBA32I)),w===s.RGB&&(G===s.UNSIGNED_SHORT&&bt&&(q=bt.RGB16_EXT),G===s.SHORT&&bt&&(q=bt.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),w===s.RGBA){let st=gt?Rl:we.getTransfer(ot);G===s.FLOAT&&(q=s.RGBA32F),G===s.HALF_FLOAT&&(q=s.RGBA16F),G===s.UNSIGNED_BYTE&&(q=st===Fe?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&bt&&(q=bt.RGBA16_EXT),G===s.SHORT&&bt&&(q=bt.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(C,w){let G;return C?w===null||w===ns||w===go?G=s.DEPTH24_STENCIL8:w===Yi?G=s.DEPTH32F_STENCIL8:w===Ta&&(G=s.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ns||w===go?G=s.DEPTH_COMPONENT24:w===Yi?G=s.DEPTH_COMPONENT32F:w===Ta&&(G=s.DEPTH_COMPONENT16),G}function S(C,w){return M(C)===!0||C.isFramebufferTexture&&C.minFilter!==Nn&&C.minFilter!==ci?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){let w=new WeakRef(C);n.get(C).__ref=w,p.add(w),x.register(C,w,w)}function A(C){let w=n.get(C).__ref;w!==void 0&&(p.delete(w),x.unregister(w))}function D(C){k(C.target)}function L(C){I(C.target)}function k(C){C.removeEventListener("dispose",D),A(C),V(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function I(C){C.removeEventListener("dispose",L),A(C),$(C)}function H(){for(let C of p){let w=C.deref();w!==void 0&&(w.isRenderTarget===!0?I(w):k(w))}p.clear(),d.clear()}function V(C){let w=n.get(C);if(w.__webglInit===void 0)return;let G=C.source,pt=u.get(G);if(pt){let ot=pt[w.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&O(C),Object.keys(pt).length===0&&u.delete(G)}n.remove(C)}function O(C){let w=n.get(C);s.deleteTexture(w.__webglTexture);let G=C.source,pt=u.get(G);delete pt[w.__cacheKey],o.memory.textures--}function $(C){let w=n.get(C);w.__depthDisposeCallback&&w.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C&&k(G),C.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(w.__webglFramebuffer[ot]))for(let gt=0;gt<w.__webglFramebuffer[ot].length;gt++)s.deleteFramebuffer(w.__webglFramebuffer[ot][gt]);else s.deleteFramebuffer(w.__webglFramebuffer[ot]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ot])}else{if(Array.isArray(w.__webglFramebuffer))for(let ot=0;ot<w.__webglFramebuffer.length;ot++)s.deleteFramebuffer(w.__webglFramebuffer[ot]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ot=0;ot<w.__webglColorRenderbuffer.length;ot++)w.__webglColorRenderbuffer[ot]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ot]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let pt=C.textures;for(let ot=0,gt=pt.length;ot<gt;ot++){let bt=n.get(pt[ot]);bt.__webglTexture&&(s.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(pt[ot])}n.remove(C)}let W=0;function P(){W=0}function Q(){return W}function vt(C){W=C}function It(){let C=W;return C>=i.maxTextures&&Qt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,C}function Y(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.mipmapsAutoUpdate),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function ht(C,w){let G=n.get(C);if(C.isVideoTexture&&ce(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let pt=C.image;if(pt===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(G,C,w);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function Tt(C,w){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ve(G,C,w);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function Rt(C,w){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ve(G,C,w);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function dt(C,w){let G=n.get(C);if(C.version>0&&G.__version!==C.version){K(G,C,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}let Ut={[to]:s.REPEAT,[ps]:s.CLAMP_TO_EDGE,[Zh]:s.MIRRORED_REPEAT},Kt={[Nn]:s.NEAREST,[X_]:s.NEAREST_MIPMAP_NEAREST,[rc]:s.NEAREST_MIPMAP_LINEAR,[ci]:s.LINEAR,[Tu]:s.LINEAR_MIPMAP_NEAREST,[Ys]:s.LINEAR_MIPMAP_LINEAR},Ct={[$_]:s.NEVER,[kp]:s.ALWAYS,[J_]:s.LESS,[Bp]:s.LEQUAL,[K_]:s.EQUAL,[zp]:s.GEQUAL,[Q_]:s.GREATER,[j_]:s.NOTEQUAL};function $t(C,w){if(w.type===Yi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===ci||w.magFilter===Tu||w.magFilter===rc||w.magFilter===Ys||w.minFilter===ci||w.minFilter===Tu||w.minFilter===rc||w.minFilter===Ys)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Ut[w.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Ut[w.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Ut[w.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Kt[w.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Kt[w.minFilter]),w.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Ct[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Nn||w.minFilter!==rc&&w.minFilter!==Ys||w.type===Yi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function zt(C,w){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",D),R(w));let pt=w.source,ot=u.get(pt);ot===void 0&&(ot={},u.set(pt,ot));let gt=Y(w);if(gt!==C.__cacheKey){ot[gt]===void 0&&(ot[gt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ot[gt].usedTimes++;let bt=ot[C.__cacheKey];bt!==void 0&&(ot[C.__cacheKey].usedTimes--,bt.usedTimes===0&&O(w)),C.__cacheKey=gt,C.__webglTexture=ot[gt].texture}return G}function Vt(C,w,G){return Math.floor(Math.floor(C/G)/w)}function xe(C,w,G,pt){let gt=C.updateRanges;if(gt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,G,pt,w.data);else{gt.sort((N,it)=>N.start-it.start);let bt=0;for(let N=1;N<gt.length;N++){let it=gt[bt],tt=gt[N],St=it.start+it.count,_t=Vt(tt.start,w.width,4),Mt=Vt(it.start,w.width,4);tt.start<=St+1&&_t===Mt&&Vt(tt.start+tt.count-1,w.width,4)===_t?it.count=Math.max(it.count,tt.start+tt.count-it.start):(++bt,gt[bt]=tt)}gt.length=bt+1;let q=e.getParameter(s.UNPACK_ROW_LENGTH),st=e.getParameter(s.UNPACK_SKIP_PIXELS),xt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let N=0,it=gt.length;N<it;N++){let tt=gt[N],St=Math.floor(tt.start/4),_t=Math.ceil(tt.count/4),Mt=St%w.width,mt=Math.floor(St/w.width),yt=_t,at=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(s.UNPACK_SKIP_ROWS,mt),e.texSubImage2D(s.TEXTURE_2D,0,Mt,mt,yt,at,G,pt,w.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,st),e.pixelStorei(s.UNPACK_SKIP_ROWS,xt)}}function ve(C,w,G){let pt=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pt=s.TEXTURE_3D);let ot=zt(C,w),gt=w.source;e.bindTexture(pt,C.__webglTexture,s.TEXTURE0+G);let bt=n.get(gt);if(gt.version!==bt.__version||ot===!0){if(e.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap!="undefined"&&w.image instanceof ImageBitmap)===!1){let at=we.getPrimaries(we.workingColorSpace),nt=w.colorSpace===$s?null:we.getPrimaries(w.colorSpace),wt=w.colorSpace===$s||at===nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let st=y(w.image,!1,i.maxTextureSize);st=Gt(w,st);let xt=r.convert(w.format,w.colorSpace),N=r.convert(w.type),it=T(w.internalFormat,xt,N,w.normalized,w.colorSpace,w.isVideoTexture);$t(pt,w);let tt,St=w.mipmaps,_t=w.isVideoTexture!==!0,Mt=bt.__version===void 0||ot===!0,mt=gt.dataReady,yt=S(w,st);if(w.isDepthTexture)it=_(w.format===Zs,w.type),Mt&&(_t?e.texStorage2D(s.TEXTURE_2D,1,it,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,it,st.width,st.height,0,xt,N,null));else if(w.isDataTexture)if(St.length>0){_t&&Mt&&e.texStorage2D(s.TEXTURE_2D,yt,it,St[0].width,St[0].height);for(let at=0,nt=St.length;at<nt;at++)tt=St[at],_t?mt&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,tt.width,tt.height,xt,N,tt.data):e.texImage2D(s.TEXTURE_2D,at,it,tt.width,tt.height,0,xt,N,tt.data);w.generateMipmaps=!1}else _t?(Mt&&e.texStorage2D(s.TEXTURE_2D,yt,it,st.width,st.height),mt&&xe(w,st,xt,N)):e.texImage2D(s.TEXTURE_2D,0,it,st.width,st.height,0,xt,N,st.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){_t&&Mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,it,St[0].width,St[0].height,st.depth);for(let at=0,nt=St.length;at<nt;at++)if(tt=St[at],w.format!==ss)if(xt!==null)if(_t){if(mt)if(w.layerUpdates.size>0){let wt=Kp(tt.width,tt.height,w.format,w.type);for(let rt of w.layerUpdates){let Lt=tt.data.subarray(rt*wt/tt.data.BYTES_PER_ELEMENT,(rt+1)*wt/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,rt,tt.width,tt.height,1,xt,Lt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,tt.width,tt.height,st.depth,xt,tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,it,tt.width,tt.height,st.depth,0,tt.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _t?mt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,tt.width,tt.height,st.depth,xt,N,tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,it,tt.width,tt.height,st.depth,0,xt,N,tt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{_t&&Mt&&e.texStorage2D(s.TEXTURE_2D,yt,it,St[0].width,St[0].height);for(let at=0,nt=St.length;at<nt;at++)tt=St[at],w.format!==ss?xt!==null?_t?mt&&e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,tt.width,tt.height,xt,tt.data):e.compressedTexImage2D(s.TEXTURE_2D,at,it,tt.width,tt.height,0,tt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?mt&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,tt.width,tt.height,xt,N,tt.data):e.texImage2D(s.TEXTURE_2D,at,it,tt.width,tt.height,0,xt,N,tt.data)}else if(w.isDataArrayTexture)if(_t){if(Mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,it,st.width,st.height,st.depth),mt)if(w.layerUpdates.size>0){let at=Kp(st.width,st.height,w.format,w.type);for(let nt of w.layerUpdates){let wt=st.data.subarray(nt*at/st.data.BYTES_PER_ELEMENT,(nt+1)*at/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,st.width,st.height,1,xt,N,wt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,N,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,it,st.width,st.height,st.depth,0,xt,N,st.data);else if(w.isData3DTexture)_t?(Mt&&e.texStorage3D(s.TEXTURE_3D,yt,it,st.width,st.height,st.depth),mt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,N,st.data)):e.texImage3D(s.TEXTURE_3D,0,it,st.width,st.height,st.depth,0,xt,N,st.data);else if(w.isFramebufferTexture){if(Mt)if(_t)e.texStorage2D(s.TEXTURE_2D,yt,it,st.width,st.height);else{let at=st.width,nt=st.height;for(let wt=0;wt<yt;wt++)e.texImage2D(s.TEXTURE_2D,wt,it,at,nt,0,xt,N,null),at>>=1,nt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let at=s.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),st.parentNode!==at){at.appendChild(st),d.add(w),at.onpaint=nt=>{let wt=nt.changedElements;for(let rt of d)wt.includes(rt.image)&&(rt.needsUpdate=!0)},at.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,st);else{let wt=s.RGBA,rt=s.RGBA,Lt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,wt,rt,Lt,st)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(St.length>0){if(_t&&Mt){let at=Yt(St[0]);e.texStorage2D(s.TEXTURE_2D,yt,it,at.width,at.height)}for(let at=0,nt=St.length;at<nt;at++)tt=St[at],_t?mt&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,xt,N,tt):e.texImage2D(s.TEXTURE_2D,at,it,xt,N,tt);w.generateMipmaps=!1}else if(_t){if(Mt){let at=Yt(st);e.texStorage2D(s.TEXTURE_2D,yt,it,at.width,at.height)}mt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,N,st)}else e.texImage2D(s.TEXTURE_2D,0,it,xt,N,st);M(w)&&w.mipmapsAutoUpdate===!0&&v(pt),bt.__version=gt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function K(C,w,G){if(w.image.length!==6)return;let pt=zt(C,w),ot=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+G);let gt=n.get(ot);if(ot.version!==gt.__version||pt===!0){e.activeTexture(s.TEXTURE0+G);let bt=we.getPrimaries(we.workingColorSpace),q=w.colorSpace===$s?null:we.getPrimaries(w.colorSpace),st=w.colorSpace===$s||bt===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let xt=w.isCompressedTexture||w.image[0].isCompressedTexture,N=w.image[0]&&w.image[0].isDataTexture,it=[];for(let rt=0;rt<6;rt++)!xt&&!N?it[rt]=y(w.image[rt],!0,i.maxCubemapSize):it[rt]=N?w.image[rt].image:w.image[rt],it[rt]=Gt(w,it[rt]);let tt=it[0],St=r.convert(w.format,w.colorSpace),_t=r.convert(w.type),Mt=T(w.internalFormat,St,_t,w.normalized,w.colorSpace),mt=w.isVideoTexture!==!0,yt=gt.__version===void 0||pt===!0,at=ot.dataReady,nt=S(w,tt);$t(s.TEXTURE_CUBE_MAP,w);let wt;if(w.isDepthTexture){if(Mt=_(w.format===Zs,w.type),yt)if(mt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,Mt,tt.width,tt.height);else for(let rt=0;rt<6;rt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Mt,tt.width,tt.height,0,St,_t,null)}else if(xt){mt&&yt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,Mt,tt.width,tt.height);for(let rt=0;rt<6;rt++){wt=it[rt].mipmaps;for(let Lt=0;Lt<wt.length;Lt++){let ae=wt[Lt];w.format!==ss?St!==null?mt?at&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt,0,0,ae.width,ae.height,St,ae.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt,Mt,ae.width,ae.height,0,ae.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt,0,0,ae.width,ae.height,St,_t,ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt,Mt,ae.width,ae.height,0,St,_t,ae.data)}}}else{if(wt=w.mipmaps,mt&&yt){wt.length>0&&nt++;let rt=Yt(it[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,Mt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(N){mt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,it[rt].width,it[rt].height,St,_t,it[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Mt,it[rt].width,it[rt].height,0,St,_t,it[rt].data);for(let Lt=0;Lt<wt.length;Lt++){let ee=wt[Lt].image[rt].image;mt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt+1,0,0,ee.width,ee.height,St,_t,ee.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt+1,Mt,ee.width,ee.height,0,St,_t,ee.data)}}else{mt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,St,_t,it[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Mt,St,_t,it[rt]);for(let Lt=0;Lt<wt.length;Lt++){let ae=wt[Lt];mt?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt+1,0,0,St,_t,ae.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt+1,Mt,St,_t,ae.image[rt])}}}M(w)&&w.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),gt.__version=ot.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function le(C,w,G,pt,ot,gt){let bt=r.convert(G.format,G.colorSpace),q=r.convert(G.type),st=T(G.internalFormat,bt,q,G.normalized,G.colorSpace),xt=n.get(w),N=n.get(G);if(N.__renderTarget=w,!xt.__hasExternalTextures){let it=Math.max(1,w.width>>gt),tt=Math.max(1,w.height>>gt);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,gt,st,it,tt,w.depth,0,bt,q,null):e.texImage2D(ot,gt,st,it,tt,0,bt,q,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),ut(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,ot,N.__webglTexture,0,Ft(w)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,ot,N.__webglTexture,gt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(C,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,C),w.depthBuffer){let pt=w.depthTexture,ot=pt&&pt.isDepthTexture?pt.type:null,gt=_(w.stencilBuffer,ot),bt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ut(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft(w),gt,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft(w),gt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,gt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,C)}else{let pt=w.textures;for(let ot=0;ot<pt.length;ot++){let gt=pt[ot],bt=r.convert(gt.format,gt.colorSpace),q=r.convert(gt.type),st=T(gt.internalFormat,bt,q,gt.normalized,gt.colorSpace);ut(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft(w),st,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft(w),st,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,st,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(C,w,G){let pt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=n.get(w.depthTexture);ot.__renderTarget=w;let gt=pt?w.depthTexture.image[0]:w.depthTexture.image;(!ot.__webglTexture||gt.width!==w.width||gt.height!==w.height)&&(gt.width=w.width,gt.height=w.height,w.depthTexture.needsUpdate=!0),pt?dt(w.depthTexture,0):ht(w.depthTexture,0);let bt=ot.__webglTexture,q=Ft(w),st=pt?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,xt=w.depthTexture.format===Zs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Vs)ut(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xt,st,bt,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,xt,st,bt,0);else if(w.depthTexture.format===Zs)ut(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xt,st,bt,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,xt,st,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(C){let w=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let pt=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pt){let ot=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pt.removeEventListener("dispose",ot)};pt.addEventListener("dispose",ot),w.__depthDisposeCallback=ot}w.__boundDepthTexture=pt}if(C.depthTexture&&!w.__autoAllocateDepthBuffer)if(G)for(let pt=0;pt<6;pt++)Ae(w.__webglFramebuffer[pt],C,pt);else C.texture.mipmaps.length>0?Ae(w.__webglFramebuffer[0],C,0):Ae(w.__webglFramebuffer,C,0);else if(G){w.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[pt]),w.__webglDepthbuffer[pt]===void 0)w.__webglDepthbuffer[pt]=s.createRenderbuffer(),$e(w.__webglDepthbuffer[pt],C,!1);else{let ot=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=w.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,gt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),$e(w.__webglDepthbuffer,C,!1);else{let ot=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,gt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(C,w,G){let pt=n.get(C);w!==void 0&&le(pt.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&oe(C)}function Re(C){let w=C.texture,G=n.get(C),pt=n.get(w);C.addEventListener("dispose",L),R(C);let ot=C.textures,gt=C.isWebGLCubeRenderTarget===!0,bt=ot.length>1;if(bt||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=w.version,o.memory.textures++),gt){G.__webglFramebuffer=[];for(let q=0;q<6;q++)if(w.mipmaps.length>0){G.__webglFramebuffer[q]=[];for(let st=0;st<w.mipmaps.length;st++)G.__webglFramebuffer[q][st]=s.createFramebuffer()}else G.__webglFramebuffer[q]=s.createFramebuffer()}else{if(w.mipmaps.length>0){G.__webglFramebuffer=[];for(let q=0;q<w.mipmaps.length;q++)G.__webglFramebuffer[q]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(bt)for(let q=0,st=ot.length;q<st;q++){let xt=n.get(ot[q]);xt.__webglTexture===void 0&&(xt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&ut(C)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let q=0;q<ot.length;q++){let st=ot[q];G.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[q]);let xt=r.convert(st.format,st.colorSpace),N=r.convert(st.type),it=T(st.internalFormat,xt,N,st.normalized,st.colorSpace,C.isXRRenderTarget===!0),tt=Ft(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,it,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,G.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),$e(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(gt){e.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),$t(s.TEXTURE_CUBE_MAP,w);for(let q=0;q<6;q++)if(w.mipmaps.length>0)for(let st=0;st<w.mipmaps.length;st++)le(G.__webglFramebuffer[q][st],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,st);else le(G.__webglFramebuffer[q],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);M(w)?v(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(bt){for(let q=0,st=ot.length;q<st;q++){let xt=ot[q],N=n.get(xt),it=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(it,N.__webglTexture),$t(it,xt),le(G.__webglFramebuffer,C,xt,s.COLOR_ATTACHMENT0+q,it,0),M(xt)&&v(it)}e.unbindTexture()}else{let q=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(q,pt.__webglTexture),$t(q,w),w.mipmaps.length>0)for(let st=0;st<w.mipmaps.length;st++)le(G.__webglFramebuffer[st],C,w,s.COLOR_ATTACHMENT0,q,st);else le(G.__webglFramebuffer,C,w,s.COLOR_ATTACHMENT0,q,0);M(w)?v(q):w.mipmaps.length>0&&s.texParameteri(q,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&oe(C)}function U(C){let w=C.textures;for(let G=0,pt=w.length;G<pt;G++){let ot=w[G];if(M(ot)&&ot.mipmapsAutoUpdate===!0){let gt=b(C),bt=n.get(ot).__webglTexture;e.bindTexture(gt,bt),v(gt),e.unbindTexture()}}}let de=[];function Bt(C){if(C.samples>0){if(ut(C)===!1){let w=C.textures,G=C.width,pt=C.height,ot=s.COLOR_BUFFER_BIT,gt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(C),q=w.length>1;if(q)for(let xt=0;xt<w.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let xt=0;xt<w.length;xt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[xt]);let N=n.get(w[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,G,pt,0,0,G,pt,ot,s.NEAREST),l===!0&&(de.length=0,de.push(s.COLOR_ATTACHMENT0+xt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&de.push(gt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let xt=0;xt<w.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[xt]);let N=n.get(w[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,N,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let w=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Ft(C){return Math.min(i.maxSamples,C.samples)}function ut(C){let w=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ce(C){let w=o.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function Gt(C,w){let G=C.colorSpace,pt=C.format,ot=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Al&&G!==$s&&(we.getTransfer(G)===Fe?(pt!==ss||ot!==yi)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",G)),w}function Yt(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=It,this.resetTextureUnits=P,this.getTextureUnits=Q,this.setTextureUnits=vt,this.setTexture2D=ht,this.setTexture2DArray=Tt,this.setTexture3D=Rt,this.setTextureCube=dt,this.rebindTextures=fe,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ut,this.dispose=H}function NE(s,t){function e(n,i=$s){let r,o=we.getTransfer(i);if(n===yi)return s.UNSIGNED_BYTE;if(n===Eu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Au)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Np)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Op)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lp)return s.BYTE;if(n===Dp)return s.SHORT;if(n===Ta)return s.UNSIGNED_SHORT;if(n===wu)return s.INT;if(n===ns)return s.UNSIGNED_INT;if(n===Yi)return s.FLOAT;if(n===is)return s.HALF_FLOAT;if(n===Up)return s.ALPHA;if(n===Fp)return s.RGB;if(n===ss)return s.RGBA;if(n===Vs)return s.DEPTH_COMPONENT;if(n===Zs)return s.DEPTH_STENCIL;if(n===Ru)return s.RED;if(n===Cu)return s.RED_INTEGER;if(n===wr)return s.RG;if(n===Pu)return s.RG_INTEGER;if(n===Iu)return s.RGBA_INTEGER;if(n===oc||n===ac||n===lc||n===cc)if(o===Fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ac)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lu||n===Du||n===Nu||n===Ou)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Du)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ou)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uu||n===Fu||n===Bu||n===zu||n===ku||n===hc||n===Hu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uu||n===Fu)return o===Fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bu)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===zu)return r.COMPRESSED_R11_EAC;if(n===ku)return r.COMPRESSED_SIGNED_R11_EAC;if(n===hc)return r.COMPRESSED_RG11_EAC;if(n===Hu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gu||n===Vu||n===Wu||n===Xu||n===qu||n===Yu||n===Zu||n===$u||n===Ju||n===Ku||n===Qu||n===ju||n===tf||n===ef)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gu)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vu)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wu)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xu)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qu)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yu)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zu)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$u)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ju)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ku)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qu)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ju)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tf)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ef)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nf||n===sf||n===rf)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nf)return o===Fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===of||n===af||n===uc||n===lf)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===of)return r.COMPRESSED_RED_RGTC1_EXT;if(n===af)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===go?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var OE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,um=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Gl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Kn({vertexShader:OE,fragmentShader:UE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fm=class extends ms{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null,x=typeof XRWebGLBinding!="undefined",m=new um,g={},y=e.getContextAttributes(),M=null,v=null,b=[],T=[],_=new Ot,S=null,R=null,A=new En;A.viewport=new en;let D=new En;D.viewport=new en;let L=[A,D],k=new vu,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ht=b[Y];return ht===void 0&&(ht=new da,b[Y]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Y){let ht=b[Y];return ht===void 0&&(ht=new da,b[Y]=ht),ht.getGripSpace()},this.getHand=function(Y){let ht=b[Y];return ht===void 0&&(ht=new da,b[Y]=ht),ht.getHandSpace()};function V(Y){let ht=T.indexOf(Y.inputSource);if(ht===-1)return;let Tt=b[ht];Tt!==void 0&&(Tt.update(Y.inputSource,Y.frame,c||o),Tt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",$);for(let Y=0;Y<b.length;Y++){let ht=T[Y];ht!==null&&(T[Y]=null,b[Y].disconnect(ht))}I=null,H=null,m.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(M),u=null,f=null,d=null,i=null,v=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),R!==null){let Y=R.camera;Y.fov=R.fov,Y.zoom=R.zoom,Y.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",O),i.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Rt=null,dt=null;y.depth&&(dt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=y.stencil?Zs:Vs,Rt=y.stencil?go:ns);let Ut={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ut),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Di(f.textureWidth,f.textureHeight,{format:ss,type:yi,depthTexture:new qs(f.textureWidth,f.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Tt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,Tt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Di(u.framebufferWidth,u.framebufferHeight,{format:ss,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),It.setContext(i),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Y){for(let ht=0;ht<Y.removed.length;ht++){let Tt=Y.removed[ht],Rt=T.indexOf(Tt);Rt>=0&&(T[Rt]=null,b[Rt].disconnect(Tt))}for(let ht=0;ht<Y.added.length;ht++){let Tt=Y.added[ht],Rt=T.indexOf(Tt);if(Rt===-1){for(let Ut=0;Ut<b.length;Ut++)if(Ut>=T.length){T.push(Tt),Rt=Ut;break}else if(T[Ut]===null){T[Ut]=Tt,Rt=Ut;break}if(Rt===-1)break}let dt=b[Rt];dt&&dt.connect(Tt)}}function W(Y,ht){ht===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ht.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ht=Y.near,Tt=Y.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(Tt=m.depthFar)),k.near=D.near=A.near=ht,k.far=D.far=A.far=Tt,(I!==k.near||H!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,H=k.far),k.layers.mask=Y.layers.mask|6,A.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let Rt=Y.parent,dt=k.cameras;W(k,Rt);for(let Ut=0;Ut<dt.length;Ut++)W(dt[Ut],Rt);k.projectionMatrix.copy(A.projectionMatrix),k.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&Y.isPerspectiveCamera&&(R={camera:Y,fov:Y.fov,zoom:Y.zoom}),P(Y,k,Rt)};function P(Y,ht,Tt){Tt===null?Y.matrix.copy(ht.matrixWorld):(Y.matrix.copy(Tt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ht.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ht.projectionMatrix),Y.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=eo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Y){return g[Y]};let Q=null;function vt(Y,ht){if(h=ht.getViewerPose(c||o),p=ht,h!==null){let Tt=h.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let Rt=!1;Tt.length!==k.cameras.length&&(k.cameras.length=0,Rt=!0);for(let Ct=0;Ct<Tt.length;Ct++){let $t=Tt[Ct],zt=null;if(u!==null)zt=u.getViewport($t);else{let xe=d.getViewSubImage(f,$t);zt=xe.viewport,Ct===0&&(t.setRenderTargetTextures(v,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(v))}let Vt=L[Ct];Vt===void 0&&(Vt=new En,Vt.layers.enable(Ct),Vt.viewport=new en,L[Ct]=Vt),Vt.matrix.fromArray($t.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray($t.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(zt.x,zt.y,zt.width,zt.height),Ct===0&&(k.matrix.copy(Vt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Rt===!0&&k.cameras.push(Vt)}let dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Ct=d.getDepthInformation(Tt[0]);Ct&&Ct.isValid&&Ct.texture&&m.init(Ct,i.renderState)}if(dt&&dt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Ct=0;Ct<Tt.length;Ct++){let $t=Tt[Ct].camera;if($t){let zt=g[$t];zt||(zt=new Gl,g[$t]=zt);let Vt=d.getCameraImage($t);zt.sourceTexture=Vt}}}}for(let Tt=0;Tt<b.length;Tt++){let Rt=T[Tt],dt=b[Tt];Rt!==null&&dt!==void 0&&dt.update(Rt,ht,c||o)}Q&&Q(Y,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),p=null}let It=new Nx;It.setAnimationLoop(vt),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}},FE=new Be,Wx=new re;Wx.set(-1,0,0,0,1,0,0,0,1);function BE(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Zp(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Hn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Hn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(FE.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Wx),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Hn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zE(s,t,e,n){let i={},r={};function o(y,M){let v=M.program;n.uniformBlockBinding(y,v,i[y.id])}function a(y,M){let v=i[y.id];v===void 0&&(p(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",m));let b=M.program;n.updateUBOMapping(y,b);let T=t.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let M=s.createBuffer(),v=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,v,b),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(y){let M=i[y.id],v=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let T=0,_=v.length;T<_;T++){let S=v[T];if(Array.isArray(S))for(let R=0,A=S.length;R<A;R++)h(S[R],T,R,b);else h(S,T,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,M,v,b){if(f(y,M,v,b)===!0){let T=y.__offset,_=y.value;if(Array.isArray(_)){let S=0;for(let R=0;R<_.length;R++){let A=_[R],D=x(A,!0);d(A,y.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,y.__data)}}function d(y,M,v){typeof y=="number"||typeof y=="boolean"?M[v]=y:y.isMatrix3?(M[v]=y.elements[0],M[v+1]=y.elements[1],M[v+2]=y.elements[2],M[v+3]=0,M[v+4]=y.elements[3],M[v+5]=y.elements[4],M[v+6]=y.elements[5],M[v+7]=0,M[v+8]=y.elements[6],M[v+9]=y.elements[7],M[v+10]=y.elements[8],M[v+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-v),v):y.toArray(M,v)}function f(y,M,v,b){let T=y.value,_=M+"_"+v;if(Array.isArray(T)){b[_]===void 0&&(b[_]=[]);let S=b[_],R=!1;for(let A=0;A<T.length;A++)u(T[A],S,A)===!0&&(R=!0);return R}return u(T,b,_)}function u(y,M,v){if(M[v]===void 0)return typeof y=="number"||typeof y=="boolean"?M[v]=y:ArrayBuffer.isView(y)?M[v]=y.slice():M[v]=y.clone(),!0;{let b=M[v];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return M[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(b.equals(y)===!1)return b.copy(y),!0}}return!1}function p(y){let M=y.uniforms,v=0,b=16;for(let _=0,S=M.length;_<S;_++){let R=Array.isArray(M[_])?M[_]:[M[_]];for(let A=0,D=R.length;A<D;A++){let L=R[A],k=Array.isArray(L.value)?L.value:[L.value],I=Array.isArray(M[_])||Array.isArray(L.value),H=v;for(let O=0,$=k.length;O<$;O++){let W=k[O],P=x(W,I),Q=v%b,vt=Q%P.boundary,It=Q+vt;v+=vt,It!==0&&b-It<P.storage&&(v+=b-It),O===0&&(H=v),v+=P.storage}let V=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new V((v-H)/Float32Array.BYTES_PER_ELEMENT),L.__offset=H}}let T=v%b;return T>0&&(v+=b-T),y.__size=v,y.__cache={},this}function x(y,M){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let M=y.target;M.removeEventListener("dispose",m),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(let y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:o,update:a,dispose:g}}var kE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ss=null;function HE(){return Ss===null&&(Ss=new Fl(kE,16,16,wr,is),Ss.name="DFG_LUT",Ss.minFilter=ci,Ss.magFilter=ci,Ss.wrapS=ps,Ss.wrapT=ps,Ss.generateMipmaps=!1,Ss.needsUpdate=!0),Ss}var Aa=class{constructor(t={}){let{canvas:e=tx(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=yi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=u,m=new Set([Iu,Pu,Cu]),g=new Set([yi,ns,Ta,go,Eu,Au]),y=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},b=null,T=null,_=[],S=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ys,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,L=null,k=null,I=null,H=null;this._outputColorSpace=on;let V=0,O=0,$=null,W=-1,P=null,Q=new en,vt=new en,It=null,Y=new ie(0),ht=0,Tt=e.width,Rt=e.height,dt=1,Ut=null,Kt=null,Ct=new en(0,0,Tt,Rt),$t=new en(0,0,Tt,Rt),zt=!1,Vt=new xr,xe=new tu,ve=!1,K=!1,le=new Be,$e=new z,Ae=new en,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function Re(){return $===null?dt:1}let U=n;function de(E,F){return e.getContext(E,F)}let Bt,Ft,ut,ce,Gt,Yt,C,w,G,pt,ot,gt,bt,q,st,xt,N,it,tt,St,_t,Mt,mt;try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),U===null){let F="webgl2";if(U=de(F,E),U===null)throw de(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}yt()}catch(E){throw e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),ne("WebGLRenderer: "+E.message),E}function yt(){Bt=new QT(U),Bt.init(),_t=new NE(U,Bt),Ft=new HT(U,Bt,t,_t),ut=new LE(U,Bt),Ft.reversedDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),k=U.createFramebuffer(),I=U.createFramebuffer(),H=U.createFramebuffer(),ce=new ew(U),Gt=new xE,Yt=new DE(U,Bt,ut,Gt,Ft,_t,ce),C=new KT(A),w=new ib(U),Mt=new zT(U,w),G=new jT(U,w,ce,Mt),pt=new iw(U,G,w,Mt,ce),it=new nw(U,Ft,Yt),st=new GT(Gt),ot=new _E(A,C,Bt,Ft,Mt,st),gt=new BE(A,Gt),bt=new yE,q=new EE(Bt),N=new BT(A,C,ut,pt,p,l),xt=new IE(A,pt,Ft),mt=new zE(U,ce,Ft,ut),tt=new kT(U,Bt,ce),St=new tw(U,Bt,ce),ce.programs=ot.programs,A.capabilities=Ft,A.extensions=Bt,A.properties=Gt,A.renderLists=bt,A.shadowMap=xt,A.state=ut,A.info=ce}x!==yi&&(R=new rw(x,e.width,e.height,a,i,r));let at=new fm(A,U);this.xr=at,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=Bt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Bt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(E){E!==void 0&&(dt=E,this.setSize(Tt,Rt,!1))},this.getSize=function(E){return E.set(Tt,Rt)},this.setSize=function(E,F,J=!0){if(at.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=E,Rt=F,e.width=Math.floor(E*dt),e.height=Math.floor(F*dt),J===!0&&(e.style.width=E+"px",e.style.height=F+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Tt*dt,Rt*dt).floor()},this.setDrawingBufferSize=function(E,F,J){Tt=E,Rt=F,dt=J,e.width=Math.floor(E*J),e.height=Math.floor(F*J),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(x===yi){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Q)},this.getViewport=function(E){return E.copy(Ct)},this.setViewport=function(E,F,J,X){E.isVector4?Ct.set(E.x,E.y,E.z,E.w):Ct.set(E,F,J,X),ut.viewport(Q.copy(Ct).multiplyScalar(Re()).round())},this.getScissor=function(E){return E.copy($t)},this.setScissor=function(E,F,J,X){E.isVector4?$t.set(E.x,E.y,E.z,E.w):$t.set(E,F,J,X),ut.scissor(vt.copy($t).multiplyScalar(Re()).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(E){ut.setScissorTest(zt=E)},this.setOpaqueSort=function(E){Ut=E},this.setTransparentSort=function(E){Kt=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,J=!0){let X=0;if(E){let Z=!1;if($!==null){let Et=$.texture.format;Z=m.has(Et)}if(Z){let Et=$.texture.type,Nt=g.has(Et),At=N.getClearColor(),Pt=N.getClearAlpha(),qt=At.r,se=At.g,ye=At.b;Nt?(y[0]=qt,y[1]=se,y[2]=ye,y[3]=Pt,U.clearBufferuiv(U.COLOR,0,y)):(M[0]=qt,M[1]=se,M[2]=ye,M[3]=Pt,U.clearBufferiv(U.COLOR,0,M))}else X|=U.COLOR_BUFFER_BIT}F&&(X|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),N.dispose(),bt.dispose(),q.dispose(),Yt.dispose(),Gt.dispose(),C.dispose(),pt.dispose(),G.dispose(),Mt.dispose(),mt.dispose(),ot.dispose(),at.dispose(),at.removeEventListener("sessionstart",De),at.removeEventListener("sessionend",Pe),ln.stop()};function nt(E){E.preventDefault(),Pl("WebGLRenderer: Context Lost."),D=!0}function wt(){Pl("WebGLRenderer: Context Restored."),D=!1;let E=ce.autoReset,F=xt.enabled,J=xt.autoUpdate,X=xt.needsUpdate,Z=xt.type;yt(),ce.autoReset=E,xt.enabled=F,xt.autoUpdate=J,xt.needsUpdate=X,xt.type=Z}function rt(E){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Lt(E){let F=E.target;F.removeEventListener("dispose",Lt),ae(F)}function ae(E){ee(E),Gt.remove(E)}function ee(E){let F=Gt.get(E).programs;F!==void 0&&(F.forEach(function(J){ot.releaseProgram(J)}),E.isShaderMaterial&&ot.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,J,X,Z,Et){F===null&&(F=oe);let Nt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,At=di(E,F,J,X,Z);ut.setMaterial(X,Nt);let Pt=J.index,qt=1;if(X.wireframe===!0){if(Pt=G.getWireframeAttribute(J),Pt===void 0)return;qt=2}let se=J.drawRange,ye=J.attributes.position,Wt=se.start*qt,B=(se.start+se.count)*qt;Et!==null&&(Wt=Math.max(Wt,Et.start*qt),B=Math.min(B,(Et.start+Et.count)*qt)),Pt!==null?(Wt=Math.max(Wt,0),B=Math.min(B,Pt.count)):ye!=null&&(Wt=Math.max(Wt,0),B=Math.min(B,ye.count));let et=B-Wt;if(et<0||et===1/0)return;Mt.setup(Z,X,At,J,Pt);let j,ft=tt;if(Pt!==null&&(j=w.get(Pt),ft=St,ft.setIndex(j)),Z.isMesh)X.wireframe===!0?(ut.setLineWidth(X.wireframeLinewidth*Re()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(Z.isLine){let lt=X.linewidth;lt===void 0&&(lt=1),ut.setLineWidth(lt*Re()),Z.isLineSegments?ft.setMode(U.LINES):Z.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else Z.isPoints?ft.setMode(U.POINTS):Z.isSprite&&ft.setMode(U.TRIANGLES);if(Z.isBatchedMesh)if(Bt.get("WEBGL_multi_draw"))ft.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let lt=Z._multiDrawStarts,ct=Z._multiDrawCounts,kt=Z._multiDrawCount,Ht=Pt?w.get(Pt).bytesPerElement:1,Ce=Gt.get(X).currentProgram.getUniforms();for(let he=0;he<kt;he++)Ce.setValue(U,"_gl_DrawID",he),ft.render(lt[he]/Ht,ct[he])}else if(Z.isInstancedMesh)ft.renderInstances(Wt,et,Z.count);else if(J.isInstancedBufferGeometry){let lt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ct=Math.min(J.instanceCount,lt);ft.renderInstances(Wt,et,ct)}else ft.render(Wt,et)};function Ge(E,F,J,X){L!==null&&E.isNodeMaterial&&L.setObject(X,E),ve===!0&&st.setState(E,J,!1),E.transparent===!0&&E.side===Oi&&E.forceSinglePass===!1?(E.side=Hn,E.needsUpdate=!0,bn(E,F,X),E.side=Tr,E.needsUpdate=!0,bn(E,F,X),E.side=Oi):bn(E,F,X)}this.compile=function(E,F,J=null){J===null&&(J=E),L!==null&&L.renderStart(E,F,J),T=q.get(J),T.init(F),S.push(T),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(F.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),E!==J&&E.traverseVisible(function(Z){Z.isLight&&Z.layers.test(F.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),K=this.localClippingEnabled,ve=st.init(this.clippingPlanes,K),ve===!0&&st.setGlobalState(this.clippingPlanes,F),L!==null&&xt.render(T.state.shadowsArray,J,F);let X=new Set;return E.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Et=Z.material;if(Et)if(Array.isArray(Et))for(let Nt=0;Nt<Et.length;Nt++){let At=Et[Nt];Ge(At,J,F,Z),X.add(At)}else Ge(Et,J,F,Z),X.add(Et)}),T=S.pop(),L!==null&&L.renderEnd(),X},this.compileAsync=function(E,F,J=null){let X=this.compile(E,F,J);return new Promise(Z=>{function Et(){if(X.forEach(function(Nt){let Pt=Gt.get(Nt).currentProgram;(Pt===void 0||Pt.isReady())&&X.delete(Nt)}),X.size===0){Z(E);return}setTimeout(Et,10)}Bt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let je=null;function Ne(E){je&&je(E)}function De(){ln.stop()}function Pe(){ln.start()}let ln=new Nx;ln.setAnimationLoop(Ne),typeof self!="undefined"&&ln.setContext(self),this.setAnimationLoop=function(E){je=E,at.setAnimationLoop(E),E===null?ln.stop():ln.start()},at.addEventListener("sessionstart",De),at.addEventListener("sessionend",Pe),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(E,F);let J=at.enabled===!0&&at.isPresenting===!0,X=R!==null&&($===null||J)&&R.begin(A,$);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(F),F=at.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,F,$),T=q.get(E,S.length),T.init(F),T.state.textureUnits=Yt.getTextureUnits(),S.push(T),le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?xe.setFromArrayCamera(F):Vt.setFromProjectionMatrix(le,Vi,F.reversedDepth),K=this.localClippingEnabled,ve=st.init(this.clippingPlanes,K),b=bt.get(E,_.length),b.init(),_.push(b),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let Nt=A.xr.getDepthSensingMesh();Nt!==null&&Oe(Nt,F,-1/0,A.sortObjects)}Oe(E,F,0,A.sortObjects),b.finish(),L!==null&&L.updateLights(T.state.lightsArray),A.sortObjects===!0&&b.sort(Ut,Kt),fe=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,fe&&N.addToRenderList(b,E),this.info.autoReset===!0&&this.info.reset(),ve===!0&&st.beginShadows();let Z=T.state.shadowsArray;if(xt.render(Z,E,F),ve===!0&&st.endShadows(),(X&&R.hasRenderPass())===!1){let Nt=b.opaque,At=b.transmissive;if(T.setupLights(),F.isArrayCamera){let Pt=F.cameras;if(At.length>0)for(let qt=0,se=Pt.length;qt<se;qt++){let ye=Pt[qt];Mn(Nt,At,E,ye)}fe&&N.render(E);for(let qt=0,se=Pt.length;qt<se;qt++){let ye=Pt[qt];cn(b,E,ye,ye.viewport)}}else At.length>0&&Mn(Nt,At,E,F),fe&&N.render(E),cn(b,E,F)}$!==null&&O===0&&(Yt.updateMultisampleRenderTarget($),Yt.updateRenderTargetMipmap($)),X&&R.end(A),E.isScene===!0&&E.onAfterRender(A,E,F),Mt.resetDefaultState(),W=-1,P=null,S.pop(),S.length>0?(T=S[S.length-1],Yt.setTextureUnits(T.state.textureUnits),ve===!0&&st.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,L!==null&&L.renderEnd()};function Oe(E,F,J,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Nt=F.isArrayCamera?xe:Vt;if(!E.frustumCulled||E.intersectsFrustum(Nt)){X&&Ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);let At=pt.update(E),Pt=E.material;Pt.visible&&b.push(E,At,Pt,J,Ae.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){let Nt=F.isArrayCamera?xe:Vt;if(!E.frustumCulled||E.intersectsFrustum(Nt)){let At=pt.update(E),Pt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ae.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ae.copy(At.boundingSphere.center)),Ae.applyMatrix4(E.matrixWorld).applyMatrix4(le)),Array.isArray(Pt)){let qt=At.groups;for(let se=0,ye=qt.length;se<ye;se++){let Wt=qt[se],B=Pt[Wt.materialIndex];B&&B.visible&&b.push(E,At,B,J,Ae.z,Wt,F)}}else Pt.visible&&b.push(E,At,Pt,J,Ae.z,null,F)}}}let Et=E.children;for(let Nt=0,At=Et.length;Nt<At;Nt++)Oe(Et[Nt],F,J,X)}function cn(E,F,J,X){let{opaque:Z,transmissive:Et,transparent:Nt}=E;T.setupLightsView(J),ve===!0&&st.setGlobalState(A.clippingPlanes,J),X&&ut.viewport(Q.copy(X)),Z.length>0&&Je(Z,F,J),Et.length>0&&Je(Et,F,J),Nt.length>0&&Je(Nt,F,J),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Mn(E,F,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let Wt=Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new Di(1,1,{generateMipmaps:!0,type:Wt?is:yi,minFilter:Ys,samples:Math.max(4,Ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:we.workingColorSpace})}let Et=T.state.transmissionRenderTarget[X.id],Nt=X.viewport||Q;Et.setSize(Nt.z*A.transmissionResolutionScale,Nt.w*A.transmissionResolutionScale);let At=A.getRenderTarget(),Pt=A.getActiveCubeFace(),qt=A.getActiveMipmapLevel();A.setRenderTarget(Et),A.getClearColor(Y),ht=A.getClearAlpha(),ht<1&&A.setClearColor(16777215,.5),A.clear(),fe&&N.render(J);let se=A.toneMapping;A.toneMapping=ys;let ye=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),ve===!0&&st.setGlobalState(A.clippingPlanes,X),Je(E,J,X),Yt.updateMultisampleRenderTarget(Et),Yt.updateRenderTargetMipmap(Et),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let B=0,et=F.length;B<et;B++){let j=F[B],{object:ft,geometry:lt,material:ct,group:kt}=j;if(ct.side===Oi&&ft.layers.test(X.layers)){let Ht=ct.side;ct.side=Hn,ct.needsUpdate=!0,Ve(ft,J,X,lt,ct,kt),ct.side=Ht,ct.needsUpdate=!0,Wt=!0}}Wt===!0&&(Yt.updateMultisampleRenderTarget(Et),Yt.updateRenderTargetMipmap(Et))}A.setRenderTarget(At,Pt,qt),A.setClearColor(Y,ht),ye!==void 0&&(X.viewport=ye),A.toneMapping=se}function Je(E,F,J){let X=F.isScene===!0?F.overrideMaterial:null;for(let Z=0,Et=E.length;Z<Et;Z++){let Nt=E[Z],{object:At,geometry:Pt,group:qt}=Nt,se=Nt.material;se.allowOverride===!0&&X!==null&&(se=X),At.layers.test(J.layers)&&Ve(At,F,J,Pt,se,qt)}}function Ve(E,F,J,X,Z,Et){L!==null&&Z.isNodeMaterial&&L.setObject(E,Z),E.onBeforeRender(A,F,J,X,Z,Et),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(A,F,J,X,E,Et),Z.transparent===!0&&Z.side===Oi&&Z.forceSinglePass===!1?(Z.side=Hn,Z.needsUpdate=!0,A.renderBufferDirect(J,F,X,Z,E,Et),Z.side=Tr,Z.needsUpdate=!0,A.renderBufferDirect(J,F,X,Z,E,Et),Z.side=Oi):A.renderBufferDirect(J,F,X,Z,E,Et),E.onAfterRender(A,F,J,X,Z,Et)}function We(E){let F=0;for(let J of E)J.texture!==null&&F++;return F}function bn(E,F,J){F.isScene!==!0&&(F=oe);let X=Gt.get(E),Z=T.state.lights,Et=T.state.shadowsArray,Nt=Z.state.version,At=ot.getParameters(E,Z.state,Et,F,J,T.state.lightProbeGridArray),Pt=ot.getProgramCacheKey(At),qt=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let se=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=C.get(E.envMap||X.environment,se),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,qt===void 0&&(E.addEventListener("dispose",Lt),qt=new Map,X.programs=qt,X.programVariants=new Map);let ye=qt.get(Pt);if(ye!==void 0){if(X.currentProgram===ye&&X.lightsStateVersion===Nt)return Ke(E,At),ye}else At.uniforms=ot.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,J,At),E.onBeforeCompile(At,A),ye=ot.acquireProgram(At,Pt),qt.set(Pt,ye),X.uniforms=At.uniforms;let Wt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Wt.clippingPlanes=st.uniform),Ke(E,At),X.needsLights=Pr(E),X.lightsStateVersion=Nt,X.needsLights&&(Wt.ambientLightColor.value=Z.state.ambient,Wt.lightProbe.value=Z.state.probe,Wt.sunLights.value=Z.state.sun,Wt.sunLightShadows.value=Z.state.sunShadow,Wt.directionalLights.value=Z.state.directional,Wt.directionalLightShadows.value=Z.state.directionalShadow,Wt.spotLights.value=Z.state.spot,Wt.spotLightShadows.value=Z.state.spotShadow,Wt.rectAreaLights.value=Z.state.rectArea,Wt.ltc_1.value=Z.state.rectAreaLTC1,Wt.ltc_2.value=Z.state.rectAreaLTC2,Wt.pointLights.value=Z.state.point,Wt.pointLightShadows.value=Z.state.pointShadow,Wt.hemisphereLights.value=Z.state.hemi,Wt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Wt.sunShadowCascade.value=Z.state.sunShadowCascade,Wt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Wt.spotLightMatrix.value=Z.state.spotLightMatrix,Wt.spotLightMap.value=Z.state.spotLightMap,Wt.pointShadowMatrix.value=Z.state.pointShadowMatrix),X.numLightProbeGrids=We(T.state.lightProbeGridArray),X.currentProgram=ye,X.uniformsList=null,ye}function os(E,F,J,X,Z){let Et=Gt.get(E),Nt=Et.currentProgram.id+","+X+","+Z,At=Et.programVariants.get(Nt);return At===void 0?(At=bn(E,F,J),Et.programVariants.set(Nt,At)):(Et.currentProgram=At,Et.uniformsList=null,Et.outputColorSpace=X,Et.toneMapping=Z),At}function hn(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=wa.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Ke(E,F){let J=Gt.get(E);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function di(E,F,J,X,Z){F.isScene!==!0&&(F=oe),Yt.resetTextureUnits();let Et=F.fog,Nt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,At=$===null?A.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:we.workingColorSpace,Pt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,qt=C.get(X.envMap||Nt,Pt),se=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ye=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Wt=!!J.morphAttributes.position,B=!!J.morphAttributes.normal,et=!!J.morphAttributes.color,j=ys;X.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(j=A.toneMapping);let ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,lt=ft!==void 0?ft.length:0,ct=Gt.get(X),kt=T.state.lights;if(ve===!0&&(K===!0||E!==P)){let Ie=E===P&&X.id===W;st.setState(X,E,Ie)}let Ht=!1,Ce=!1;X.version===ct.__version?ct.needsLights&&ct.lightsStateVersion!==kt.state.version||Z.isBatchedMesh&&ct.batching===!1||!Z.isBatchedMesh&&ct.batching===!0||Z.isBatchedMesh&&ct.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&ct.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&ct.instancing===!1||!Z.isInstancedMesh&&ct.instancing===!0||Z.isSkinnedMesh&&ct.skinning===!1||!Z.isSkinnedMesh&&ct.skinning===!0||Z.isInstancedMesh&&ct.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ct.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ct.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ct.instancingMorph===!1&&Z.morphTexture!==null||ct.envMap!==qt||X.fog===!0&&ct.fog!==Et||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==st.numPlanes||ct.numIntersection!==st.numIntersection)||ct.vertexAlphas!==se||ct.vertexTangents!==ye||ct.morphTargets!==Wt||ct.morphNormals!==B||ct.morphColors!==et||ct.morphTargetsCount!==lt||ct.numLightProbeGrids!==We(T.state.lightProbeGridArray)?Ht=!0:(ct.outputColorSpace!==At||ct.toneMapping!==j)&&(Ce=!0):(Ht=!0,ct.__version=X.version);let he=ct.currentProgram;(Ht===!0||Ce===!0)&&(he=Ce===!0?os(X,F,Z,At,j):bn(X,F,Z),L&&X.isNodeMaterial&&L.onUpdateProgram(X,he,ct));let Un=!1,un=!1,Xe=!1,jt=he.getUniforms(),be=ct.uniforms;if(ut.useProgram(he.program)&&(Un=!0,un=!0,Xe=!0),X.id!==W&&(W=X.id,un=!0),Un||P!==E){ut.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),jt.setValue(U,"projectionMatrix",E.projectionMatrix),jt.setValue(U,"viewMatrix",E.matrixWorldInverse);let ze=jt.map.cameraPosition;ze!==void 0&&ze.setValue(U,$e.setFromMatrixPosition(E.matrixWorld)),Ft.logarithmicDepthBuffer&&jt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&jt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),P!==E&&(P=E,un=!0,Xe=!0)}if(ct.needsLights&&(kt.state.sunShadowMap.length>0&&jt.setValue(U,"sunShadowMap",kt.state.sunShadowMap,Yt),kt.state.directionalShadowMap.length>0&&jt.setValue(U,"directionalShadowMap",kt.state.directionalShadowMap,Yt),kt.state.spotShadowMap.length>0&&jt.setValue(U,"spotShadowMap",kt.state.spotShadowMap,Yt),kt.state.pointShadowMap.length>0&&jt.setValue(U,"pointShadowMap",kt.state.pointShadowMap,Yt)),Z.isSkinnedMesh){jt.setOptional(U,Z,"bindMatrix"),jt.setOptional(U,Z,"bindMatrixInverse");let Ie=Z.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),jt.setValue(U,"boneTexture",Ie.boneTexture,Yt))}Z.isBatchedMesh&&(jt.setOptional(U,Z,"batchingTexture"),jt.setValue(U,"batchingTexture",Z._matricesTexture,Yt),jt.setOptional(U,Z,"batchingIdTexture"),jt.setValue(U,"batchingIdTexture",Z._indirectTexture,Yt),jt.setOptional(U,Z,"batchingColorTexture"),Z._colorsTexture!==null&&jt.setValue(U,"batchingColorTexture",Z._colorsTexture,Yt));let Ze=J.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&it.update(Z,J,he),(un||ct.receiveShadow!==Z.receiveShadow)&&(ct.receiveShadow=Z.receiveShadow,jt.setValue(U,"receiveShadow",Z.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(be.envMapIntensity.value=F.environmentIntensity),be.dfgLUT!==void 0&&(be.dfgLUT.value=HE()),un){if(jt.setValue(U,"toneMappingExposure",A.toneMappingExposure),ct.needsLights&&Qs(be,Xe),Et&&X.fog===!0&&gt.refreshFogUniforms(be,Et),gt.refreshMaterialUniforms(be,X,dt,Rt,T.state.transmissionRenderTarget[E.id]),ct.needsLights&&ct.numLightProbeGrids>0){let Ie=v,ze=0;for(let bi of T.state.lightProbeGridArray)bi.texture!==null&&(Ie.textures[ze]=bi.texture,Ie.min[ze]=bi.boundingBox.min,Ie.max[ze]=bi.boundingBox.max,Ie.resolution[ze]=bi.resolution,ze++);for(let bi in Ie)Ie[bi].length=ze;be.probesSH.value=Ie.textures,be.probesMin.value=Ie.min,be.probesMax.value=Ie.max,be.probesResolution.value=Ie.resolution}wa.upload(U,hn(ct),be,Yt)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(wa.upload(U,hn(ct),be,Yt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&jt.setValue(U,"center",Z.center),jt.setValue(U,"modelViewMatrix",Z.modelViewMatrix),jt.setValue(U,"normalMatrix",Z.normalMatrix),jt.setValue(U,"modelMatrix",Z.matrixWorld),X.uniformsGroups!==void 0){let Ie=X.uniformsGroups;for(let ze=0,bi=Ie.length;ze<bi;ze++){let Rm=Ie[ze];mt.update(Rm,he),mt.bind(Rm,he)}}return he}function Qs(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Pr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(E,F,J){let X=Gt.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Gt.get(E.texture).__webglTexture=F,Gt.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let J=Gt.get(E);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,J=0){$=E,V=F,O=J;let X=null,Z=!1,Et=!1;if(E){let At=Gt.get(E);if(At.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(U.FRAMEBUFFER,At.__webglFramebuffer),Q.copy(E.viewport),vt.copy(E.scissor),It=E.scissorTest,ut.viewport(Q),ut.scissor(vt),ut.setScissorTest(It),W=-1;return}else if(At.__webglFramebuffer===void 0)Yt.setupRenderTarget(E);else if(At.__hasExternalTextures)Yt.rebindTextures(E,Gt.get(E.texture).__webglTexture,Gt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let se=E.depthTexture;if(At.__boundDepthTexture!==se){if(se!==null&&Gt.has(se)&&(E.width!==se.image.width||E.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(E)}}let Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Et=!0);let qt=Gt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qt[F])?X=qt[F][J]:X=qt[F],Z=!0):E.samples>0&&Yt.useMultisampledRTT(E)===!1?X=Gt.get(E).__webglMultisampledFramebuffer:Array.isArray(qt)?X=qt[J]:X=qt,Q.copy(E.viewport),vt.copy(E.scissor),It=E.scissorTest}else Q.copy(Ct).multiplyScalar(dt).floor(),vt.copy($t).multiplyScalar(dt).floor(),It=zt;if(J!==0&&(X=k),ut.bindFramebuffer(U.FRAMEBUFFER,X)&&ut.drawBuffers(E,X),ut.viewport(Q),ut.scissor(vt),ut.setScissorTest(It),Z){let At=Gt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,At.__webglTexture,J)}else if(Et){let At=F;for(let Pt=0;Pt<E.textures.length;Pt++){let qt=Gt.get(E.textures[Pt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Pt,qt.__webglTexture,J,At)}}else if(E!==null&&J!==0){let At=Gt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,At.__webglTexture,J)}W=-1};function Mi(E){let F=Gt.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=Ft.textureFormatReadable(E.format),F.__typeReadable=Ft.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,J,X,Z,Et,Nt,At=0){if(!(E&&E.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt],Array.isArray(Pt)&&(Pt=Pt[0])),Pt){ut.bindFramebuffer(U.FRAMEBUFFER,Pt);try{let qt=E.textures[At],se=qt.format,ye=qt.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+At);let Wt=Mi(qt);if(Wt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&J>=0&&J<=E.height-Z&&U.readPixels(F,J,X,Z,_t.convert(se),_t.convert(ye),Et)}finally{let qt=$!==null?Gt.get($).__webglFramebuffer:null;ut.bindFramebuffer(U.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(E,F,J,X,Z,Et,Nt,At=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt],Array.isArray(Pt)&&(Pt=Pt[0])),Pt)if(F>=0&&F<=E.width-X&&J>=0&&J<=E.height-Z){ut.bindFramebuffer(U.FRAMEBUFFER,Pt);let qt=E.textures[At],se=qt.format,ye=qt.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+At);let Wt=Mi(qt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let B=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,B),U.bufferData(U.PIXEL_PACK_BUFFER,Et.byteLength,U.STREAM_READ),U.readPixels(F,J,X,Z,_t.convert(se),_t.convert(ye),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let et=$!==null?Gt.get($).__webglFramebuffer:null;ut.bindFramebuffer(U.FRAMEBUFFER,et);let j=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await nx(U,j,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,B),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Et),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(B),U.deleteSync(j),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,J=0){let X=Math.pow(2,-J),Z=Math.floor(E.image.width*X),Et=Math.floor(E.image.height*X),Nt=F!==null?F.x:0,At=F!==null?F.y:0;Yt.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,Nt,At,Z,Et),ut.unbindTexture()},this.copyTextureToTexture=function(E,F,J=null,X=null,Z=0,Et=0){let Nt,At,Pt,qt,se,ye,Wt,B,et,j=E.isCompressedTexture?E.mipmaps[Et]:E.image;if(J!==null)Nt=J.max.x-J.min.x,At=J.max.y-J.min.y,Pt=J.isBox3?J.max.z-J.min.z:1,qt=J.min.x,se=J.min.y,ye=J.isBox3?J.min.z:0;else{let jt=Math.pow(2,-Z);Nt=Math.floor(j.width*jt),At=Math.floor(j.height*jt),E.isDataArrayTexture?Pt=j.depth:E.isData3DTexture?Pt=Math.floor(j.depth*jt):Pt=1,qt=0,se=0,ye=0}X!==null?(Wt=X.x,B=X.y,et=X.z):(Wt=0,B=0,et=0);let ft=_t.convert(F.format),lt=_t.convert(F.type),ct;F.isData3DTexture?(Yt.setTexture3D(F,0),ct=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Yt.setTexture2DArray(F,0),ct=U.TEXTURE_2D_ARRAY):(Yt.setTexture2D(F,0),ct=U.TEXTURE_2D),ut.activeTexture(U.TEXTURE0),ut.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),ut.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ut.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let kt=ut.getParameter(U.UNPACK_ROW_LENGTH),Ht=ut.getParameter(U.UNPACK_IMAGE_HEIGHT),Ce=ut.getParameter(U.UNPACK_SKIP_PIXELS),he=ut.getParameter(U.UNPACK_SKIP_ROWS),Un=ut.getParameter(U.UNPACK_SKIP_IMAGES);ut.pixelStorei(U.UNPACK_ROW_LENGTH,j.width),ut.pixelStorei(U.UNPACK_IMAGE_HEIGHT,j.height),ut.pixelStorei(U.UNPACK_SKIP_PIXELS,qt),ut.pixelStorei(U.UNPACK_SKIP_ROWS,se),ut.pixelStorei(U.UNPACK_SKIP_IMAGES,ye);let un=E.isDataArrayTexture||E.isData3DTexture,Xe=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let jt=Gt.get(E),be=Gt.get(F),Ze=Gt.get(jt.__renderTarget),Ie=Gt.get(be.__renderTarget);ut.bindFramebuffer(U.READ_FRAMEBUFFER,Ze.__webglFramebuffer),ut.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let ze=0;ze<Pt;ze++)un&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gt.get(E).__webglTexture,Z,ye+ze),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gt.get(F).__webglTexture,Et,et+ze)),U.blitFramebuffer(qt,se,qt+Nt,se+At,Wt,B,Wt+Nt,B+At,U.DEPTH_BUFFER_BIT,U.NEAREST);ut.bindFramebuffer(U.READ_FRAMEBUFFER,null),ut.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Z!==0||E.isRenderTargetTexture||Gt.has(E)){let jt=Gt.get(E),be=Gt.get(F);ut.bindFramebuffer(U.READ_FRAMEBUFFER,I),ut.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let Ze=0;Ze<Pt;Ze++)un?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,jt.__webglTexture,Z,ye+Ze):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,jt.__webglTexture,Z),Xe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.__webglTexture,Et,et+Ze):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,be.__webglTexture,Et),Z!==0?U.blitFramebuffer(qt,se,qt+Nt,se+At,Wt,B,Wt+Nt,B+At,U.COLOR_BUFFER_BIT,U.NEAREST):Xe?U.copyTexSubImage3D(ct,Et,Wt,B,et+Ze,qt,se,Nt,At):U.copyTexSubImage2D(ct,Et,Wt,B,qt,se,Nt,At);ut.bindFramebuffer(U.READ_FRAMEBUFFER,null),ut.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Xe?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(ct,Et,Wt,B,et,Nt,At,Pt,ft,lt,j.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(ct,Et,Wt,B,et,Nt,At,Pt,ft,j.data):U.texSubImage3D(ct,Et,Wt,B,et,Nt,At,Pt,ft,lt,j):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Et,Wt,B,Nt,At,ft,lt,j.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Et,Wt,B,j.width,j.height,ft,j.data):U.texSubImage2D(U.TEXTURE_2D,Et,Wt,B,Nt,At,ft,lt,j);ut.pixelStorei(U.UNPACK_ROW_LENGTH,kt),ut.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ht),ut.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),ut.pixelStorei(U.UNPACK_SKIP_ROWS,he),ut.pixelStorei(U.UNPACK_SKIP_IMAGES,Un),Et===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&U.generateMipmap(ct),ut.unbindTexture()},this.initRenderTarget=function(E){Gt.get(E).__webglFramebuffer===void 0&&Yt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Yt.setTextureCube(E,0):E.isData3DTexture?Yt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Yt.setTexture2DArray(E,0):Yt.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){V=0,O=0,$=null,ut.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}};var Ks=(s,t,e)=>Math.min(e,Math.max(t,s)),xo=(s,t,e)=>{let n=Ks((e-s)/(t-s),0,1);return n*n*(3-2*n)};var dm=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;function On(s,t){let e=Math.sin(s*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Er(s,t=s){let e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function GE(s){let i=85.33333333333333,r=1024/36,o=3.2,[a,l]=Er(1024),[c,h]=Er(1024);l.fillStyle="#5b544c",l.fillRect(0,0,1024,1024),h.fillStyle="#202020",h.fillRect(0,0,1024,1024);for(let u=0;u<36;u++){let p=u%2*i/2;for(let x=-1;x<=12;x++){let m=(x%12+12)%12,g=On(u,m),y=On(m+9,u+3),M=8+g*14,v=34+y*22,b=24+g*15-(y>.9?8:0),T=p+x*i+o/2,_=u*r+o/2;l.fillStyle=`hsl(${M},${v}%,${b}%)`,l.fillRect(T,_,i-o,r-o),h.fillStyle=`rgb(${170+g*60},${170+g*60},${170+g*60})`,h.fillRect(T,_,i-o,r-o);for(let S=0;S<14;S++){let R=T+On(S,u*13+m)*(i-o),A=_+On(u+S,m*7)*(r-o);l.fillStyle=`rgba(${On(S,m)>.5?"0,0,0":"255,220,190"},${.05+On(m,S+u)*.12})`,l.fillRect(R,A,1+On(S,S+m)*5,1+On(u,S)*2.5)}}}let d=new Xi(a);d.colorSpace=on;let f=new Xi(c);for(let u of[d,f])u.wrapS=u.wrapT=to,u.anisotropy=s;return{map:d,bump:f}}function _c(s,t,e=512,n){let[i,r]=Er(e);r.fillStyle=s,r.fillRect(0,0,e,e);let o=r.getImageData(0,0,e,e),a=o.data;for(let c=0;c<a.length;c+=4){let h=(Math.random()-.5)*t;a[c]+=h,a[c+1]+=h,a[c+2]+=h}r.putImageData(o,0,0),n&&n(r,e);let l=new Xi(i);return l.colorSpace=on,l.wrapS=l.wrapT=to,l}function qx(s){let[t,e]=Er(256),n=e.createRadialGradient(128,128,0,128,128,128);s.forEach(([r,o])=>n.addColorStop(r,o)),e.fillStyle=n,e.fillRect(0,0,256,256);let i=new Xi(t);return i.colorSpace=on,i}function VE(){let[s,t]=Er(16,512),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#070b12"),e.addColorStop(.55,"#121b28"),e.addColorStop(.82,"#2a2a33"),e.addColorStop(1,"#4a3526"),t.fillStyle=e,t.fillRect(0,0,16,512);let n=new Xi(s);return n.colorSpace=on,n}function Yx(s,{mobile:t=!1,smoothing:e=.09}={}){let n=new Aa({canvas:s,antialias:!t,powerPreference:"high-performance",alpha:!1});n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.5:1.75)),n.outputColorSpace=on,n.toneMapping=po,n.toneMappingExposure=1.05,n.shadowMap.enabled=!0,n.shadowMap.type=ho;let i=Math.min(8,n.capabilities.getMaxAnisotropy()),r=new Ws;r.background=VE(),r.fog=new no(1317927,12,34);let o=new En(38,1,.05,80),a=4.88,l=2.16,c=.25,h=7.6,d=3.4,f=7,u=a+.1,p=4,x=l/p,m=.4,g=-c-.05,y=Math.PI*m/2,M=l+y+.12,v=GE(i),b=(B,et)=>{let j=v.map.clone(),ft=v.bump.clone();return j.repeat.set(B/2.4,et/2.4),ft.repeat.copy(j.repeat),j.needsUpdate=ft.needsUpdate=!0,new ue({map:j,bumpMap:ft,bumpScale:2.2,roughness:.92,metalness:0})},T=new ue({color:13816266,roughness:.6}),_=new ue({color:2764339,roughness:.5,metalness:.6}),S=new ue({color:14869212,roughness:.42,metalness:.2}),R=new ue({color:12566714,roughness:.6,metalness:.15}),A=new ue({color:1381914,roughness:.15,metalness:.3,emissive:new ie(16757084),emissiveIntensity:.25}),D=new ue({color:15331059,roughness:.95}),L=_c("#2a2c30",26,512,(B,et)=>{B.strokeStyle="rgba(10,10,10,.5)",B.lineWidth=1.2;for(let j=0;j<7;j++){B.beginPath();let ft=Math.random()*et,lt=Math.random()*et;B.moveTo(ft,lt);for(let ct=0;ct<6;ct++)ft+=(Math.random()-.5)*60,lt+=Math.random()*40,B.lineTo(ft,lt);B.stroke()}});L.repeat.set(7,7),L.anisotropy=i;let k=_c("#7d7e7c",22,512,(B,et)=>{B.fillStyle="rgba(30,30,30,.55)",B.fillRect(0,et/2-1,et,2),B.fillRect(et/2-1,0,2,et);for(let j=0;j<9;j++)B.fillStyle=`rgba(40,35,30,${Math.random()*.12})`,B.beginPath(),B.arc(Math.random()*et,Math.random()*et,20+Math.random()*70,0,7),B.fill()});k.repeat.set(2,1.4),k.anisotropy=i;let I=_c("#8b8780",18,512,(B,et)=>{for(let j=0;j<6;j++)B.fillStyle=`rgba(50,45,40,${.05+Math.random()*.1})`,B.beginPath(),B.ellipse(Math.random()*et,Math.random()*et,30+Math.random()*80,20+Math.random()*50,Math.random()*3,0,7),B.fill()});I.repeat.set(2.5,2.5);let H=_c("#9aa0a3",10,256,(B,et)=>{for(let j=0;j<et;j+=16)B.fillStyle="rgba(0,0,0,.28)",B.fillRect(0,j,et,2),B.fillStyle="rgba(255,255,255,.12)",B.fillRect(0,j+2,et,1)});H.repeat.set(4,2);let V=(B,{cast:et=!1,receive:j=!1}={})=>(B.castShadow=et,B.receiveShadow=j,r.add(B),B),O=(B,et,j,ft,lt,ct,kt,Ht)=>{let Ce=new Jt(new An(B,et,j),ft);return Ce.position.set(lt,ct,kt),V(Ce,Ht)},$=(B,et,j,ft,lt,ct,kt=0,Ht=0,Ce)=>{let he=new Jt(new qi(B,et),j);return he.position.set(ft,lt,ct),he.rotation.set(Ht,kt,0),V(he,Ce)},W=_c("#c3cbd3",20,512,(B,et)=>{for(let j=0;j<46;j++)B.fillStyle=`rgba(255,255,255,${Math.random()*.16})`,B.beginPath(),B.ellipse(Math.random()*et,Math.random()*et,20+Math.random()*90,8+Math.random()*30,Math.random()*3,0,7),B.fill()});W.repeat.set(16,13),W.anisotropy=i,$(140,110,new ue({map:W,roughness:.96,color:11187133}),0,0,0,0,-Math.PI/2,{receive:!0});let P=5.9;k.repeat.set(2,5.5),$(P,16.5,new ue({map:k,roughness:.82}),0,.01,8.25,0,-Math.PI/2,{receive:!0}),$(90,8,new ue({map:L,roughness:.8,color:9211020}),0,.014,20.5,0,-Math.PI/2,{receive:!0});for(let B of[-1,1])for(let et=0;et<2;et++){let j=new Jt(new oo(1,18,9),D);j.scale.set(.36,.09+On(et,B+2)*.05,1.05),j.position.set(B*(P/2+.3),0,1.3+et*2+On(et,B)*.3),V(j,{receive:!0})}let Q=(B,et,j,ft=1)=>{let lt=new Jt(new oo(1,20,10),D);return lt.scale.set(B,.12*ft,.35*ft),lt.position.set(et,0,j),V(lt,{receive:!0})};Q(.8,-3.3,.12,.9),Q(.6,3.35,.1,.7);let vt=(h-a)/2;$(vt,d,b(vt,d),-(a/2+vt/2),d/2,0,0,0,{receive:!0}),$(vt,d,b(vt,d),a/2+vt/2,d/2,0,0,0,{receive:!0}),$(a,d-l,b(a,d-l),0,l+(d-l)/2,0,0,0,{receive:!0});let It=b(c,l);$(c,l,It,-a/2,l/2,-c/2,Math.PI/2,0,{receive:!0}),$(c,l,It,a/2,l/2,-c/2,-Math.PI/2,0,{receive:!0}),$(a,c,b(a,c),0,l,-c/2,0,Math.PI/2,{receive:!0}),O(.13,l+.13,.04,T,-a/2-.065,(l+.13)/2,.02,{receive:!0}),O(.13,l+.13,.04,T,a/2+.065,(l+.13)/2,.02,{receive:!0}),O(a+.26,.13,.04,T,0,l+.065,.02,{receive:!0});let Y=1.75,ht=h/2+.3;{let B=new _a;B.moveTo(-ht,0),B.lineTo(ht,0),B.lineTo(0,Y),B.closePath();let et=H.clone();et.repeat.set(1/3.2,1/3.2),et.needsUpdate=!0;let j=new Jt(new Ql(B),new ue({map:et,roughness:.75,color:14210252}));j.position.set(0,d,-.02),V(j,{receive:!0}),O(h+.6,.18,.12,T,0,d,.04,{receive:!0});let ft=Math.hypot(ht,Y)+.25,lt=Math.atan2(Y,ht);for(let ct of[-1,1]){let kt=new li;kt.position.set(ct*ht/2,d+Y/2+.05,.08),kt.rotation.z=-ct*lt,r.add(kt);let Ht=new Jt(new An(ft,.2,.14),T);Ht.receiveShadow=!0,kt.add(Ht);let Ce=new Jt(new An(ft,.13,.7),D);Ce.position.set(0,.15,-.22),kt.add(Ce)}O(.55,.36,.04,T,0,d+.8,0)}let Tt=qx([[0,"rgba(255,214,150,1)"],[.25,"rgba(255,170,80,.55)"],[1,"rgba(255,140,40,0)"]]),Rt=[];for(let B of[-1,1]){let et=B*(a/2+.62);O(.16,.26,.1,_,et,2.62,.06);let j=new Wi({color:16765066}),ft=new Jt(new An(.11,.17,.06),j);ft.position.set(et,2.6,.12),r.add(ft);let lt=new pa(new io({map:Tt,color:16757862,transparent:!0,blending:vs,depthWrite:!1}));lt.scale.set(1.4,1.4,1),lt.position.set(et,2.6,.2),r.add(lt);let ct=new kn(16755029,0,9,1.8);ct.position.set(et,2.55,.45),r.add(ct),Rt.push({bulbMat:j,halo:lt,light:ct})}let dt=h/2,Ut=9,Kt=-1.1,Ct=3,$t=dt+Ut/2,zt=H.clone();zt.repeat.set(Ut/3.2,Ct/3.2),zt.needsUpdate=!0,$(Ut,Ct,new ue({map:zt,roughness:.75,color:14078664}),$t,Ct/2,Kt,0,0,{receive:!0}),$(Math.abs(Kt),Ct,new ue({map:v.map,roughness:.9}),dt,Ct/2,Kt/2,Math.PI/2,0);{let j=Math.hypot(4.6,2.5),ft=Math.atan2(2.5,4.6),lt=new Jt(new qi(Ut+.6,j),new ue({map:W,color:13226458,roughness:.95}));lt.rotation.x=-Math.PI/2+ft,lt.position.set($t,Ct+2.5/2,Kt+.45-4.6/2),V(lt,{receive:!0}),O(Ut+.6,.22,.14,T,$t,Ct+.02,Kt+.5),O(Ut+.6,.12,.5,D,$t,Ct+.16,Kt+.32)}let Vt=new Wi({color:16761982}),xe=[],ve=(B,et,j,ft)=>{let lt=Kt+.02,ct=new Jt(new qi(et,j),Vt);ct.position.set(B,ft,lt),r.add(ct),xe.push(ct),O(et+.16,.1,.08,T,B,ft+j/2+.05,lt+.03),O(et+.24,.08,.16,T,B,ft-j/2-.04,lt+.05),O(.07,j,.06,T,B-et/2-.035,ft,lt+.03),O(.07,j,.06,T,B+et/2+.035,ft,lt+.03),O(.04,j,.03,T,B,ft,lt+.02),O(et,.04,.03,T,B,ft,lt+.02);let kt=new ue({color:2042416,roughness:.7});O(.42,j+.1,.05,kt,B-et/2-.3,ft,lt+.03),O(.42,j+.1,.05,kt,B+et/2+.3,ft,lt+.03)};ve(dt+4.6,1.5,1.3,1.65),ve(dt+7.4,1.1,1.3,1.65);let K=new kn(16760698,0,5,1.8);K.position.set(dt+4.6,1.4,Kt+1.2),r.add(K),O(1,2.15,.06,new ue({color:4922648,roughness:.55}),dt+1.9,1.075+.18,Kt+.03),O(1.25,.12,.1,T,dt+1.9,2.42,Kt+.05),O(1.6,.18,.9,new ue({color:7828333,roughness:.9}),dt+1.9,.09,Kt+.45,{receive:!0}),O(1.5,.05,.85,D,dt+1.9,.2,Kt+.47);let le=new kn(16756834,0,4.5,1.8);le.position.set(dt+2.75,2.1,Kt+.6),r.add(le);let $e=new Wi({color:3351057});{let B=new Jt(new An(.1,.18,.08),$e);B.position.set(dt+2.75,2.05,Kt+.08),r.add(B)}let Ae=new ue({color:1912356,roughness:.9,side:Oi}),oe=(B,et,j)=>{for(let lt=0;lt<3;lt++){let ct=(.58-lt*.14)*j,kt=(.8-lt*.12)*j,Ht=(.32+lt*.42)*j,Ce=new Jt(new ma(ct,kt,16,1,!0),Ae);Ce.position.set(B,Ht+kt/2,et),V(Ce,{receive:!0});let he=new Jt(new ma(ct*.72,kt*.32,16,1,!0),D);he.position.set(B,Ht+kt*.86,et),r.add(he)}let ft=new Jt(new oo(.55*j,14,8),Ae);ft.scale.y=.5,ft.position.set(B,.2*j,et),V(ft,{receive:!0})};oe(-4.3,.55,.95),oe(-5.25,.75,1.25),oe(dt+3.3,Kt+.6,.7),oe(dt+6,Kt+.6,.75),oe(dt+8.7,Kt+.6,.7);{let B=new ue({color:1840914,roughness:1}),et=(j,ft,lt,ct,kt)=>{let Ht=j.clone().addScaledVector(ft,lt),Ce=new Jt(new es(ct*.65,ct,lt,6),B);if(Ce.position.copy(j).add(Ht).multiplyScalar(.5),Ce.quaternion.setFromUnitVectors(new z(0,1,0),ft.clone().normalize()),r.add(Ce),kt>0)for(let he=0;he<3;he++){let Un=ft.clone().add(new z((On(kt,he)-.5)*1.6,.35+On(he,kt+4)*.4,(On(he+7,kt)-.5)*1.2)).normalize();et(Ht,Un,lt*.72,ct*.62,kt-1)}};et(new z(-8.2,0,3.2),new z(.05,1,0),2.6,.2,4)}{let[B,et]=Er(2048,512);et.fillStyle="#06090d";let j=(ct,kt,Ht)=>{let Ce=(he,Un,un,Xe,jt,be)=>{let Ze=he+Math.cos(un)*Xe,Ie=Un-Math.sin(un)*Xe;if(et.lineWidth=jt,et.strokeStyle="#06090d",et.beginPath(),et.moveTo(he,Un),et.lineTo(Ze,Ie),et.stroke(),be>0)for(let ze=0;ze<2+(be>3?1:0);ze++)Ce(Ze,Ie,un+(Math.random()-.5)*1.1,Xe*(.68+Math.random()*.12),jt*.66,be-1)};Ce(ct,kt,Math.PI/2+(Math.random()-.5)*.1,Ht*.32,Ht*.035,7)};for(let ct=0;ct<26;ct++)j(Math.random()*2048,512,220+Math.random()*260);for(let ct=0;ct<18;ct++){let kt=Math.random()*2048,Ht=140+Math.random()*160;et.beginPath(),et.moveTo(kt-Ht*.22,512),et.lineTo(kt,512-Ht),et.lineTo(kt+Ht*.22,512),et.fill()}et.fillRect(0,470,2048,42);let ft=new Xi(B);ft.colorSpace=on;let lt=new Jt(new qi(150,37.5),new Wi({map:ft,transparent:!0,fog:!1,depthWrite:!1}));lt.position.set(0,18.2,-40),lt.renderOrder=-1,r.add(lt)}let fe=h-.5,Re=f-.4,U=d-.25,de=-c-Re,Bt=new ue({color:11050898,roughness:.9});$(fe,Re,new ue({map:I,roughness:.72}),0,.002,-c-Re/2,0,-Math.PI/2,{receive:!0}),$(fe,U,Bt,0,U/2,de,0,0,{receive:!0}),$(Re,U,Bt,-fe/2,U/2,-c-Re/2,Math.PI/2,0,{receive:!0}),$(Re,U,Bt,fe/2,U/2,-c-Re/2,-Math.PI/2,0,{receive:!0}),$(fe,Re,new ue({color:9406332,roughness:.95}),0,U,-c-Re/2,0,Math.PI/2,{receive:!0});let Ft=(B,et,j,ft)=>$(B,et,Bt,j,ft,-c,Math.PI);Ft((fe-a)/2,U,-(a/2+(fe-a)/4),U/2),Ft((fe-a)/2,U,a/2+(fe-a)/4,U/2),Ft(a,U-l,0,l+(U-l)/2);let ut=new Wi({color:16773590}),ce=[];for(let B of[-2.2,-4.8]){let et=O(1.3,.05,.16,ut,0,U-.04,B);ce.push(et)}let Gt=new ue({color:10254930,roughness:.85});O(.03,1.2,2.4,Gt,-fe/2+.02,1.6,-3.6,{receive:!0});let Yt=new ue({color:3882820,roughness:.5,metalness:.6}),C=new ue({color:10695210,roughness:.5});for(let B=0;B<9;B++)O(.04,.18+On(B,2)*.32,.05+On(B,5)*.08,B%4===0?C:Yt,-fe/2+.06,1.55+On(B,1)*.35,-4.6+B*.25,{cast:!0});let w=new ue({color:8016948,roughness:.8});O(2.6,.08,.7,w,-1,.92,de+.4,{cast:!0,receive:!0}),O(2.5,.85,.05,w,-1,.45,de+.1,{cast:!0,receive:!0}),O(.7,.55,.5,C,1.5,.28,de+.35,{cast:!0,receive:!0}),O(.6,.5,.45,C,1.5,.81,de+.35,{cast:!0,receive:!0});let G=new ue({color:5593438,roughness:.6,metalness:.4});for(let B=0;B<4;B++)O(.5,.03,1.8,G,fe/2-.28,.35+B*.55,-4.2,{cast:!0,receive:!0});let pt=new ue({color:10780242,roughness:.9});for(let B=0;B<7;B++)O(.4,.3+On(B,4)*.12,.45,pt,fe/2-.3,.52+Math.floor(B/2)*.55,-4.85+B%2*.9+On(B,8)*.2,{cast:!0});O(.08,.05,3.6,_,0,U-.3,-c-1.9),O(.42,.22,.62,new ue({color:15131870,roughness:.5}),0,U-.34,-c-3.9,{cast:!0});let ot=O(.04,.02,.02,new Wi({color:5219327}),.12,U-.45,-c-3.58);ot.userData.base=1,O(u+.4,.03,.03,_,0,l+.32,g-.12);let gt=B=>{let et=[],j=B*22;for(let ft=0;ft<=j*12;ft++){let lt=ft/(j*12),ct=lt*j*Math.PI*2;et.push(new z(lt*B-B/2,Math.cos(ct)*.055,Math.sin(ct)*.055))}return new yr(new so(et),Math.floor(j*12),.008,5)},bt=new ue({color:2040358,roughness:.35,metalness:.85});for(let B of[-1,1]){let et=new Jt(gt(.85),bt);et.position.set(B*.6,l+.32,g-.12),r.add(et)}O(.12,.2,.06,_,0,l+.32,g-.08);for(let B of[-1,1]){let et=new Jt(new es(.07,.07,.06,18),_);et.rotation.z=Math.PI/2,et.position.set(B*(u/2+.05),l+.32,g-.12),r.add(et)}for(let B of[-1,1]){let et=B*(u/2+.04);O(.03,l,.07,_,et,l/2,g-.05);let j=[];for(let ft=0;ft<=12;ft++){let lt=ft/12*Math.PI/2;j.push(new z(et,l+m*Math.sin(lt),g-.05-m*(1-Math.cos(lt))))}V(new Jt(new yr(new so(j),16,.022,6),_)),O(.03,.07,l+.4,_,et,l+m,g-.05-m-(l+.4)/2)}let q=8;function st(B){let j=Math.round(1024*(x/u)),[ft,lt]=Er(1024,j),[ct,kt]=Er(1024,j);lt.fillStyle="#e6e6e0",lt.fillRect(0,0,1024,j),kt.fillStyle="rgb(120,120,120)",kt.fillRect(0,0,1024,j);let Ht=18,Ce=(1024-Ht*2)/q;for(let un=0;un<q;un++){let Xe=Ht+un*Ce+7,jt=Ce-14,be=B?j*.2:16,Ze=B?j*.52:j-32;lt.fillStyle="#a9aaa4",lt.fillRect(Xe-3,be-3,jt+6,Ze+6),lt.fillStyle="#f8f8f4",lt.fillRect(Xe-3,be-3,jt+6,2),lt.fillRect(Xe-3,be-3,2,Ze+6),kt.fillStyle="rgb(40,40,40)",kt.fillRect(Xe-4,be-4,jt+8,Ze+8);let Ie=7;for(let ze=0;ze<Ie;ze++){let bi=Math.round(70+ze/Ie*150);kt.fillStyle=`rgb(${bi},${bi},${bi})`,kt.fillRect(Xe+ze,be+ze,jt-2*ze,Ze-2*ze)}lt.fillStyle="#ecece7",lt.fillRect(Xe+1,be+1,jt-2,Ze-2),lt.fillStyle="rgba(255,255,255,.55)",lt.fillRect(Xe+1,be+1,jt-2,2),lt.fillRect(Xe+1,be+1,2,Ze-2),lt.fillStyle="rgba(0,0,0,.14)",lt.fillRect(Xe+1,be+Ze-3,jt-2,2),lt.fillRect(Xe+jt-3,be+1,2,Ze-2),kt.fillStyle="rgb(225,225,225)",kt.fillRect(Xe+Ie,be+Ie,jt-2*Ie,Ze-2*Ie),B&&(lt.fillStyle="#222",lt.fillRect(Xe+8,be+7,jt-16,Ze-14),kt.fillStyle="rgb(90,90,90)",kt.fillRect(Xe+8,be+7,jt-16,Ze-14))}lt.fillStyle="#9fa09a",lt.fillRect(0,j-4,1024,4),lt.fillStyle="#ffffff",lt.fillRect(0,0,1024,2),kt.fillStyle="rgb(20,20,20)",kt.fillRect(0,j-4,1024,4),lt.globalAlpha=.05;for(let un=0;un<260;un++)lt.fillStyle=Math.random()>.5?"#000":"#fff",lt.fillRect(Math.random()*1024,Math.random()*j,30+Math.random()*120,1);lt.globalAlpha=1;let he=new Xi(ft);he.colorSpace=on,he.anisotropy=i;let Un=new Xi(ct);return Un.anisotropy=i,{map:he,bump:Un,pad:Ht,cw:Ce,TW:1024,TH:j}}let xt=st(!1),N=st(!0),it=new ue({map:xt.map,bumpMap:xt.bump,bumpScale:3.2,roughness:.4,metalness:.2}),tt=new ue({map:N.map,bumpMap:N.bump,bumpScale:3.2,roughness:.4,metalness:.2}),St=[];for(let B=0;B<p;B++){let et=new li,j=B===p-1?tt:it,ft=new Jt(new An(u,x-.006,.045),[S,S,S,S,j,R]);if(ft.castShadow=!0,ft.receiveShadow=!0,et.add(ft),B===p-1){let lt=N,ct=u/lt.TW,kt=x/lt.TH;for(let Ht=0;Ht<q;Ht++){let Ce=lt.pad+Ht*lt.cw+7,he=lt.cw-14,Un=lt.TH*.2,un=lt.TH*.52,Xe=(Ce+8+(he-16)/2)*ct-u/2,jt=x/2-(Un+7+(un-14)/2)*kt,be=new Jt(new qi((he-16)*ct,(un-14)*kt),A);be.position.set(Xe,jt,.0245),et.add(be)}}if(B===0){let lt=new Jt(new An(.22,.035,.03),_);lt.position.set(0,-.05,.05),et.add(lt)}r.add(et),St.push(et)}function _t(B){for(let et=0;et<p;et++){let j=et*x+B+x/2,ft=St[et];if(j<=l)ft.position.set(0,j,g),ft.rotation.x=0;else if(j<=l+y){let lt=(j-l)/m;ft.position.set(0,l+m*Math.sin(lt),g-m*(1-Math.cos(lt))),ft.rotation.x=-lt}else ft.position.set(0,l+m,g-m-(j-l-y)),ft.rotation.x=-Math.PI/2}}let Mt=new lo(4610170,1380622,.55);r.add(Mt);let mt=new co(9348812,.35);mt.position.set(-6,9,8),r.add(mt);let yt=new kn(16751168,0,30,1.4);yt.position.set(8.5,6.8,7.5),r.add(yt);let at=new pa(new io({map:Tt,color:16752704,transparent:!0,blending:vs,depthWrite:!1,opacity:0}));at.scale.set(2.6,2.6,1),at.position.copy(yt.position),r.add(at);let nt=new nc(16761466,0,24,.7,.75,1.3);nt.position.set(0,U-.1,de+.5),nt.target.position.set(0,0,5.5),r.add(nt),r.add(nt.target),nt.castShadow=!0,nt.shadow.mapSize.set(t?512:1024,t?512:1024),nt.shadow.camera.near=.5,nt.shadow.camera.far=22,nt.shadow.bias=-6e-4,nt.shadow.radius=4;let wt=new kn(16766624,0,11,1.6);wt.position.set(0,U-.4,-3),r.add(wt);let rt=new kn(16763274,0,8,1.8);rt.position.set(0,1.4,-5.6),r.add(rt);let Lt=qx([[0,"rgba(255,200,130,1)"],[.45,"rgba(255,170,90,.35)"],[1,"rgba(255,150,60,0)"]]),ae=new Jt(new qi(1,1),new Wi({map:Lt,transparent:!0,blending:vs,depthWrite:!1,opacity:0,color:16756838}));ae.rotation.x=-Math.PI/2,ae.position.set(0,.02,1.2),ae.renderOrder=2,r.add(ae);let ee=new Sn;{let j=a/2,ft=a/2+2.6,lt=[-j,0,-.1,j,0,-.1,j,l,-.1,-j,l,-.1,-ft,0,7.5,ft,0,7.5,ft,l*.15,7.5,-ft,l*.15,7.5],ct=[1,1,1,1,0,0,0,0],kt=[0,1,5,0,5,4,1,2,6,1,6,5,3,0,4,3,4,7,2,3,7,2,7,6];ee.setAttribute("position",new Ye(lt,3)),ee.setAttribute("aAlpha",new Ye(ct,1)),ee.setIndex(kt)}let Ge=new Kn({transparent:!0,depthWrite:!1,blending:vs,side:Oi,uniforms:{uOpacity:{value:0},uColor:{value:new ie(16757354)}},vertexShader:"attribute float aAlpha; varying float vA; void main(){ vA=aAlpha; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform float uOpacity; uniform vec3 uColor; varying float vA; void main(){ gl_FragColor=vec4(uColor*vA*vA*uOpacity,1.); }"}),je=new Jt(ee,Ge);je.renderOrder=3,r.add(je);let Ne=t?900:2200,De=new Float32Array(Ne*3),Pe=new Float32Array(Ne),ln=new Float32Array(Ne),Oe=new Float32Array(Ne);for(let B=0;B<Ne;B++)De[B*3]=(Math.random()-.5)*22,De[B*3+1]=Math.random()*9,De[B*3+2]=-1.2+Math.random()*14,Pe[B]=.35+Math.random()*.55,ln[B]=.6+Math.random()*1.5,Oe[B]=Math.random()*6.28;let cn=new Sn;cn.setAttribute("position",new _n(De,3)),cn.setAttribute("aSpeed",new _n(Pe,1)),cn.setAttribute("aSize",new _n(ln,1)),cn.setAttribute("aPhase",new _n(Oe,1));let Mn={uTime:{value:0},uPR:{value:n.getPixelRatio()},uLight:{value:0},uOpen:{value:0},uOpacity:{value:.85}},Je=new vr(cn,new Kn({transparent:!0,depthWrite:!1,uniforms:Mn,vertexShader:`
      uniform float uTime, uPR, uLight, uOpen; attribute float aSpeed, aSize, aPhase; varying float vLit; varying float vFade;
      void main(){
        vec3 p = position;
        p.y = mod(p.y - uTime * aSpeed, 9.0);
        p.x += sin(uTime * 0.5 + aPhase) * 0.35 + sin(uTime*0.13+aPhase*2.)*0.4;
        p.z += cos(uTime * 0.4 + aPhase) * 0.2;
        // flakes inside the light coming out of the garage glow warm
        float inX = 1.0 - smoothstep(2.4 + max(p.z,0.)*0.35, 3.2 + max(p.z,0.)*0.5, abs(p.x));
        float inY = 1.0 - smoothstep(${l.toFixed(2)} * uOpen, ${l.toFixed(2)} * uOpen + 0.8, p.y - max(p.z,0.)*0.1);
        float inZ = smoothstep(-0.5, 0.3, p.z) * (1.0 - smoothstep(4.0, 9.0, p.z));
        vLit = inX * inY * inZ * uLight;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vFade = smoothstep(0.2, 1.4, -mv.z);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = aSize * uPR * (34.0 / -mv.z);
      }`,fragmentShader:`
      uniform float uOpacity; varying float vLit; varying float vFade;
      void main(){
        vec2 c = gl_PointCoord - 0.5; float d = length(c);
        float a = smoothstep(0.5, 0.0, d);
        vec3 col = mix(vec3(0.78,0.84,0.92), vec3(1.0,0.82,0.55), clamp(vLit,0.,1.));
        gl_FragColor = vec4(col * (0.75 + vLit*1.4), a * uOpacity * vFade);
      }`}));Je.frustumCulled=!1,r.add(Je);let Ve=0,We=0,bn=0,os=-1,hn=!0,Ke=!1,di=0,Qs=0,Pr=0,Mi=0,E=0,F=performance.now(),J={getElapsedTime:()=>(performance.now()-F)/1e3,start(){}},X=new z,Z=new z,Et=new z,Nt={fov:38,dist:9.5,tx:-1.5,ty:1.15,cy:1.6};function At(B){if(B<.85){let kt=Math.tan(hf.degToRad(28)),Ht=Math.max(9.5,2.95/(kt*B));return{fov:56,dist:Ht,tx:0,ty:1.15-Ht*kt*.4,cy:1.75}}let et=B>1.9?34:38,j=Math.tan(hf.degToRad(et/2)),ft=Math.max(11,3/(j*B)),lt=-Math.min(2.3,j*B*ft*.3);return{fov:et,dist:ft,tx:lt,ty:1.55,cy:1.85}}function Pt(){let B=s.clientWidth||window.innerWidth,et=s.clientHeight||window.innerHeight;n.setSize(B,et,!1),o.aspect=B/et,Nt=At(o.aspect),o.fov=Nt.fov,o.updateProjectionMatrix()}function qt(B,et){let j=B;B>0&&B<1&&(j=B*(.6+.4*Math.sin(et*61)*Math.sin(et*17.3)));for(let lt of Rt)lt.light.intensity=6.5*j,lt.bulbMat.color.setRGB(.25+.75*j,.2+.62*j,.15+.4*j),lt.halo.material.opacity=j;yt.intensity=26*Ks(B*1.4-.2,0,1),at.material.opacity=Ks(B*1.4-.2,0,1)*.9;let ft=Ks(B*1.2,0,1);le.intensity=3.2*j,$e.color.setRGB(.2+.8*j,.13+.62*j,.07+.35*j),K.intensity=3*ft,Vt.color.setRGB(.12+.88*ft,.08+.66*ft,.05+.4*ft)}function se(B){We+=(Ve-We)*e,Math.abs(Ve-We)<2e-4&&(We=Ve);let et=We,j=dm(xo(0,.62,et));_t(j*M);let ft=.1+.9*xo(0,.42,et),lt=Ks(bn*1.6,0,1);qt(lt,B);let ct=ft*Ks(bn*1.3-.15,0,1);nt.intensity=260*ct,wt.intensity=30*ct,rt.intensity=10*ct,ut.color.setRGB(.3+.7*ct,.28+.66*ct,.24+.6*ct),A.emissiveIntensity=.15+1.8*ct*(1-j*.6),ot.material.color.setHSL(.6,1,.45+.15*Math.sin(B*3));let kt=ct*(.08+.92*xo(.02,.5,j));ae.material.opacity=.55*kt,ae.scale.set(a*(.9+j*.8),1.2+j*5,1),ae.position.z=.5+j*2.4,Ge.uniforms.uOpacity.value=.11*ct*xo(.05,.6,j),je.scale.y=Math.max(.02,j),Mn.uTime.value=B,Mn.uLight.value=ct*xo(.02,.5,j),Mn.uOpen.value=j,Mn.uOpacity.value=.85*(1-xo(.7,.95,et));let Ht=dm(xo(.42,.97,et)),Ce=1-dm(Ks(bn,0,1));Mi+=(Qs-Mi)*.05,E+=(Pr-E)*.05;let he=1-Ht;X.set(Nt.tx*.55+Mi*.35*he,Nt.cy+Ce*.9+E*.15*he,Nt.dist+Ce*4.5),Z.set(0,1.42,-2.8),o.position.lerpVectors(X,Z,Ht),Et.set(Nt.tx+Mi*.15*he,Nt.ty,0),Z.set(0,1.3,-9),Et.lerp(Z,Ht),o.lookAt(Et);let Un=Nt.fov+Ht*8;Math.abs(o.fov-Un)>.01&&(o.fov=Un,o.updateProjectionMatrix()),n.toneMappingExposure=1.05+Ht*.25}function ye(){if(di=requestAnimationFrame(ye),!hn)return;let B=J.getElapsedTime();os>=0&&(bn=Ks((B-os)/2.6,0,1)),se(B),n.render(r,o)}let Wt=B=>{let et=B.touches?B.touches[0].clientX:B.clientX,j=B.touches?B.touches[0].clientY:B.clientY;Qs=(et/window.innerWidth-.5)*2,Pr=-(j/window.innerHeight-.5)*2};return t||window.addEventListener("pointermove",Wt,{passive:!0}),Pt(),_t(0),{renderer:n,resize:Pt,setProgress(B){Ve=Ks(B,0,1)},setVisible(B){hn=B},start(){Ke||(Ke=!0,J.start(),ye())},intro(){os=J.getElapsedTime()},renderStill(B=.18){bn=1,Ve=We=B,se(J.getElapsedTime()),n.render(r,o)},forceProgress(B){Ve=We=B}}}var mf=class extends Ws{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new An;t.deleteAttribute("uv");let e=new ue({side:Hn}),n=new ue,i=new kn(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Jt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new zl(t,n,6),a=new mn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Jt(t,Ca(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Jt(t,Ca(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Jt(t,Ca(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Jt(t,Ca(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new Jt(t,Ca(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let u=new Jt(t,Ca(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ca(s){return new jl({color:0,emissive:16777215,emissiveIntensity:s})}var mm=(s,t,e)=>Math.min(e,Math.max(t,s)),pm=(s,t,e)=>{let n=mm((e-s)/(t-s),0,1);return n*n*(3-2*n)},WE=s=>1-Math.pow(1-s,3),gm=class extends ui{constructor(t,e,n,i=0){super(),this.len=t,this.r=e,this.turns=n,this.phase=i}getPoint(t,e=new z){let n=this.phase+t*this.turns*Math.PI*2;return e.set(t*this.len,Math.cos(n)*this.r,Math.sin(n)*this.r)}},bs=.76;function Zx(s,{mobile:t=!1,smoothing:e=.1}={}){let n=new Aa({canvas:s,antialias:!t,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.5:1.75)),n.outputColorSpace=on,n.toneMapping=po,n.toneMappingExposure=1.1,n.setClearColor(0,0);let i=new Ws,r=new Ea(n);i.environment=r.fromScene(new mf,.04).texture,i.environmentIntensity=.55,i.fog=new no(922652,6,16);let o=new En(32,1,.1,60),a=new ue({color:3159356,metalness:.92,roughness:.3}),l=new ue({color:7041400,metalness:.9,roughness:.35}),c=new ue({color:8137249,metalness:.4,roughness:.45}),h=new ie(13624306),d=new ie(3159356),f=new li;i.add(f);let u=new Jt(new es(.075,.075,16,20),l);u.rotation.z=Math.PI/2,f.add(u);let p=.46,x=.058,m=3.5,g=25,y=a.clone(),M=(Bt,Ft,ut)=>new yr(new gm(Bt,p,Ft,ut),Math.ceil(Ft*26),x,10,!1),v=new li;f.add(v);let b=new Jt(M(m,g,0),y);b.position.x=-m-.2,v.add(b);let T=.42,_=g*T,S=m*T,R=new li;f.add(R);let A=new Jt(M(S,_,0),y);A.position.x=.2,R.add(A);let D=new li;D.position.x=.2+S,R.add(D);let L=new Jt(M(m-S,g-_,_*Math.PI*2),y);D.add(L);let k=(Bt,Ft)=>{let ut=new Jt(new es(p+.04,p-.06,.26,28),c);return ut.rotation.z=Ft*Math.PI/2,ut.position.x=Bt,ut};v.add(k(-m-.33,1)),D.add(k(m-S+.13,-1));let I=new Jt(new An(.12,1.5,.9),l);f.add(I);let H=new Jt(new es(p+.02,p+.02,.1,28),l);H.rotation.z=Math.PI/2,f.add(H);for(let Bt of[-m-.75,m+.75]){let Ft=new Jt(new An(.1,1.2,.7),l);Ft.position.x=Bt,f.add(Ft)}let V=new co(14477042,1.2);V.position.set(2,4,5),i.add(V);let O=new kn(16753226,40,14,1.6);O.position.set(-1.5,1.6,-2.5),i.add(O);let $=new kn(16758112,18,10,1.6);$.position.set(3.5,-1.2,-1.8),i.add($);let W=new kn(9226470,0,12,1.5);W.position.set(1,2.4,2.5),i.add(W);let P=new kn(16765066,0,8,1.4);i.add(P),i.add(new lo(3820130,657414,.5));let Q=t?140:260,vt=new Float32Array(Q*3),It=[],Y=[];for(let Bt=0;Bt<Q;Bt++){let Ft=Math.random()*Math.PI*2,ut=(Math.random()-.3)*Math.PI,ce=2+Math.random()*6;It.push(new z(Math.cos(Ft)*Math.cos(ut)*ce*.7,Math.sin(ut)*ce+1.5,Math.sin(Ft)*Math.cos(ut)*ce)),Y.push(.35+Math.random()*.65)}let ht=new Sn;ht.setAttribute("position",new _n(vt,3));let Tt=new Float32Array(Q);ht.setAttribute("aAlpha",new _n(Tt,1));let Rt=new Kn({transparent:!0,depthWrite:!1,blending:vs,uniforms:{uPR:{value:n.getPixelRatio()}},vertexShader:"uniform float uPR; attribute float aAlpha; varying float vA; void main(){ vA=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*mv; gl_PointSize=uPR*(26./-mv.z)*(0.4+aAlpha); }",fragmentShader:"varying float vA; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,0.,d)*vA; gl_FragColor=vec4(vec3(1.,.72,.35)*a*1.6,a); }"}),dt=new vr(ht,Rt);dt.frustumCulled=!1,i.add(dt);let Ut=t?220:500,Kt=new Float32Array(Ut*3);for(let Bt=0;Bt<Ut;Bt++)Kt[Bt*3]=(Math.random()-.5)*14,Kt[Bt*3+1]=(Math.random()-.5)*6,Kt[Bt*3+2]=(Math.random()-.5)*6;let Ct=new Sn;Ct.setAttribute("position",new _n(Kt,3));let $t={uTime:{value:0},uAmt:{value:.15},uPR:{value:n.getPixelRatio()}},zt=new vr(Ct,new Kn({transparent:!0,depthWrite:!1,uniforms:$t,vertexShader:"uniform float uTime,uPR; void main(){ vec3 p=position; p.x+=mod(uTime*.25+p.y*3.,14.)-7.; p.x=mod(p.x+7.,14.)-7.; p.y+=sin(uTime*.6+p.x)*.15; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=uPR*(14./-mv.z); }",fragmentShader:"uniform float uAmt; void main(){ float d=length(gl_PointCoord-.5); gl_FragColor=vec4(.85,.93,1.,smoothstep(.5,0.,d)*uAmt); }"}));zt.frustumCulled=!1,i.add(zt);let Vt=0,xe=0,ve=!1,K=0,le=!1,$e=new sc,Ae=new z,oe=new z(.6,0,0),fe=new z;function Re(){let Bt=s.clientWidth||window.innerWidth,Ft=s.clientHeight||window.innerHeight;n.setSize(Bt,Ft,!1),o.aspect=Bt/Ft,o.aspect<.85?(o.fov=46,Ae.set(4.6,2.3,4.9),oe.set(.8,.55,0)):(o.fov=30,Ae.set(3.4,1.15,6.6),oe.set(.9,.2,0)),o.updateProjectionMatrix()}function U(Bt){xe+=(Vt-xe)*e;let Ft=xe,ut=mm((Ft-bs)/.16,0,1),ce=Ft>=bs,Gt=pm(0,bs,Ft)*Math.PI*9+Bt*.06;v.rotation.x=Gt,R.rotation.x=-Gt,A.rotation.x=0;let Yt=pm(.46,.68,Ft);if(y.color.copy(d).lerp(h,Yt*.55),y.roughness=.3+Yt*.45,y.metalness=.92-Yt*.4,W.intensity=30*Yt,O.intensity=40*(1-Yt*.5)+ut*0,$t.uAmt.value=.12+Yt*.55,$t.uTime.value=Bt,ce){let G=WE(ut);D.rotation.x=G*Math.PI*5.5,D.position.x=.2+S+G*.55,A.rotation.x=-G*.6}else D.rotation.x=0,D.position.x=.2+S;fe.set(.2+S,0,0).applyMatrix4(f.matrixWorld),P.position.copy(fe).add(new z(0,.6,.6)),P.intensity=ce?60*Math.pow(1-ut,3):0;let C=ce?ut*.9:-1;for(let G=0;G<Q;G++){let pt=Y[G];if(C<0||C>pt){Tt[G]=0;continue}let ot=It[G],gt=C;vt[G*3]=fe.x+ot.x*gt,vt[G*3+1]=fe.y+ot.y*gt-4.9*gt*gt,vt[G*3+2]=fe.z+ot.z*gt,Tt[G]=1-gt/pt}ht.attributes.position.needsUpdate=!0,ht.attributes.aAlpha.needsUpdate=!0;let w=pm(0,1,Ft);if(o.position.copy(Ae),o.position.x+=-.9+w*1.4,o.position.y+=-.2+w*.3,o.position.z+=-w*.9,ce){let G=Math.pow(1-ut,2)*.12;o.position.x+=Math.sin(Bt*90)*G,o.position.y+=Math.cos(Bt*73)*G}o.lookAt(oe),f.rotation.y=-.08+w*.1}function de(){if(K=requestAnimationFrame(de),!ve)return;let Bt=$e.getElapsedTime();U(Bt),n.render(i,o)}return Re(),f.updateMatrixWorld(!0),{resize:Re,setProgress(Bt){Vt=mm(Bt,0,1)},setVisible(Bt){ve=Bt},start(){le||(le=!0,de())},renderStill(Bt=.3){Vt=xe=Bt,U(1),n.render(i,o)}}}var XE="http://www.w3.org/2000/svg";var Kx=Math.cos(42.02*Math.PI/180),xm=1e3/((-87.5- -88.84)*Kx),qE=Math.round((42.47-41.58)*xm),Ts=(s,t)=>[(t- -88.84)*Kx*xm,(42.47-s)*xm],gf=(s,t)=>s.map((e,n)=>{let[i,r]=Ts(e[0],e[1]);return`${n?"L":"M"}${i.toFixed(1)} ${r.toFixed(1)}`}).join("")+(t?"Z":""),xc=s=>{let t=s.map(n=>Ts(n[0],n[1])),e=`M${t[0][0].toFixed(1)} ${t[0][1].toFixed(1)}`;for(let n=0;n<t.length-1;n++){let i=t[n-1]||t[n],r=t[n],o=t[n+1],a=t[n+2]||o,l=[r[0]+(o[0]-i[0])/6,r[1]+(o[1]-i[1])/6],c=[o[0]-(a[0]-r[0])/6,o[1]-(a[1]-r[1])/6];e+=`C${l[0].toFixed(1)} ${l[1].toFixed(1)} ${c[0].toFixed(1)} ${c[1].toFixed(1)} ${o[0].toFixed(1)} ${o[1].toFixed(1)}`}return e},Le=(s,t,e)=>{let n=document.createElementNS(XE,s);for(let i in t)n.setAttribute(i,t[i]);return e&&e.appendChild(n),n},_m=[[42.47,-87.803],[42.43,-87.808],[42.39,-87.818],[42.36,-87.826],[42.31,-87.83],[42.26,-87.822],[42.21,-87.8],[42.17,-87.775],[42.13,-87.745],[42.09,-87.712],[42.06,-87.682],[42.04,-87.672],[42,-87.661],[41.96,-87.64],[41.93,-87.632],[41.9,-87.622],[41.885,-87.614],[41.85,-87.606],[41.8,-87.58],[41.76,-87.556],[41.72,-87.53],[41.69,-87.51],[41.66,-87.5]],$x={"I-94":[[41.88,-87.64],[41.94,-87.7],[41.99,-87.745],[42.06,-87.762],[42.12,-87.8],[42.165,-87.86],[42.25,-87.918],[42.35,-87.93],[42.47,-87.94]],"I-90":[[41.89,-87.645],[41.93,-87.69],[41.97,-87.76],[41.985,-87.85],[41.99,-87.91],[42.02,-88],[42.05,-88.13],[42.06,-88.28],[42.1,-88.45],[42.18,-88.62],[42.26,-88.84]],"I-294":[[41.62,-87.75],[41.72,-87.81],[41.8,-87.88],[41.88,-87.92],[41.98,-87.895],[42.06,-87.85],[42.165,-87.86]],"I-88":[[41.85,-87.94],[41.83,-88.03],[41.81,-88.15],[41.8,-88.28],[41.83,-88.45],[41.87,-88.62],[41.9,-88.84]],"I-290":[[41.875,-87.65],[41.874,-87.8],[41.88,-87.94],[41.95,-88],[42.03,-88.06]],"I-55":[[41.86,-87.65],[41.8,-87.75],[41.73,-87.93],[41.66,-88.08],[41.58,-88.18]],"I-355":[[41.6,-88.03],[41.7,-88.04],[41.8,-88.03],[41.9,-88.02],[41.99,-88]]},YE=[[42.47,-88.2],[42.42,-88.2],[42.34,-88.255],[42.25,-88.29],[42.17,-88.3],[42.1,-88.29],[42.04,-88.29],[41.97,-88.31],[41.91,-88.31],[41.84,-88.31],[41.76,-88.31],[41.69,-88.38],[41.64,-88.44],[41.58,-88.55]],ZE=[[42.47,-87.925],[42.36,-87.93],[42.25,-87.93],[42.13,-87.9],[42.03,-87.88],[41.95,-87.84],[41.87,-87.83],[41.8,-87.84],[41.72,-87.95],[41.62,-88.07]],Jx=[[42.4,-88.53],[42.455,-88.33],[42.465,-88.05],[42.47,-87.79],[42.3,-87.7],[42.12,-87.62],[42.005,-87.6],[41.99,-87.76],[41.985,-87.9],[41.94,-87.925],[41.88,-87.915],[41.8,-87.925],[41.74,-87.965],[41.7,-88.03],[41.655,-88.12],[41.62,-88.25],[41.605,-88.4],[41.635,-88.53],[41.72,-88.67],[41.83,-88.79],[41.94,-88.81],[41.995,-88.71],[42.03,-88.62],[42.11,-88.59],[42.26,-88.565]],$E=[["Waukegan",42.363,-87.845,"l"],["Round Lake Beach",42.371,-88.09,"r",1],["McHenry",42.334,-88.267,"r"],["Woodstock",42.315,-88.449,"r"],["Crystal Lake",42.241,-88.316,"r"],["Mundelein",42.263,-88.004,"r",1],["Highland Park",42.182,-87.8,"l",1],["Arlington Heights",42.088,-87.981,"r"],["Schaumburg",42.033,-88.083,"r"],["Elgin",42.037,-88.281,"l"],["Evanston",42.045,-87.688,"l"],["St. Charles",41.914,-88.309,"r"],["DeKalb",41.929,-88.75,"r"],["Elmhurst",41.899,-87.94,"l"],["Wheaton",41.866,-88.107,"r",1],["Naperville",41.786,-88.147,"r"],["Aurora",41.76,-88.32,"l"],["Plainfield",41.627,-88.204,"r",1],["Yorkville",41.641,-88.447,"l"]];function Qx(s){s.setAttribute("viewBox",`0 0 1000 ${qE}`);let t=Le("defs",{},s),e=[[42.47,-88.84],..._m,[41.58,-87.5],[41.58,-88.84]],n=Le("clipPath",{id:"landClip"},t);Le("path",{d:gf(e,!0)},n),Le("path",{class:"lake",d:gf([[42.47,-87.5],..._m,[41.58,-87.5]],!0)},s),Le("text",{class:"lake-label",x:Ts(42.2,-87.63)[0],y:Ts(42.2,-87.63)[1],transform:`rotate(90 ${Ts(42.2,-87.63)[0]} ${Ts(42.2,-87.63)[1]})`},s).textContent="LAKE MICHIGAN";let i=Le("g",{"clip-path":"url(#landClip)"},s),r=Le("g",{class:"grid"},i);for(let v=41.6;v<42.47;v+=.0868)Le("path",{class:"draw",d:gf([[v,-88.84],[v,-87.5]])},r);for(let v=-88.82;v<-87.5;v+=.1165)Le("path",{class:"draw",d:gf([[42.47,v],[41.58,v]])},r);let o=Le("path",{class:"zone",d:xc([...Jx,Jx[0]])+"Z"},i),a=Le("g",{},i);Le("path",{class:"river draw",d:xc(YE)},a),Le("path",{class:"river river--thin draw",d:xc(ZE)},a);let l=Le("g",{class:"roads"},i);for(let v in $x)Le("path",{class:"diag draw",d:xc($x[v])},l);Le("path",{class:"shore draw",d:xc(_m)},s);let[c,h]=Ts(41.882,-87.628),d=Le("g",{class:"loop"},s);Le("rect",{x:c-7,y:h-7,width:14,height:14,transform:`rotate(45 ${c} ${h})`,fill:"none",stroke:"currentColor","stroke-width":2,class:"loop__mark"},d),Le("text",{x:c-16,y:h+7,"text-anchor":"end"},d).textContent="Chicago";let f=[["90",42.08,-88.4],["94",42.3,-87.93],["88",41.82,-88.5],["55",41.7,-88],["294",41.78,-87.86]],u=Le("g",{class:"shields"},i);for(let[v,b,T]of f){let[_,S]=Ts(b,T),R=Le("g",{transform:`translate(${_} ${S})`},u);Le("rect",{x:-15,y:-10,width:30,height:20,rx:4},R),Le("text",{x:0,y:5,"text-anchor":"middle"},R).textContent=v}let p=Le("g",{},s),x=$E.map(([v,b,T,_,S])=>{let[R,A]=Ts(b,T),D=Le("g",{class:S?"pin is-minor":"pin",transform:`translate(${R.toFixed(1)} ${A.toFixed(1)})`},p);return Le("circle",{class:"halo",r:13},D),Le("circle",{r:5},D),Le("text",{x:_==="l"?-13:13,y:6,"text-anchor":_==="l"?"end":"start"},D).textContent=v,D}),[m,g]=Ts(42.43,-87.6),y=Le("g",{class:"hq",transform:`translate(${m} ${g})`},s);Le("circle",{class:"ring",r:30},y),Le("path",{d:"M0 -40 L7 -6 L0 -11 L-7 -6 Z"},y),Le("path",{d:"M0 40 L5 6 L0 10 L-5 6 Z",opacity:.35},y),Le("text",{x:0,y:5,"text-anchor":"middle"},y).textContent="N";let M=[...s.querySelectorAll(".draw")];return M.forEach(v=>{let b=v.getTotalLength?v.getTotalLength():1e3;v.style.strokeDasharray=`${b} ${b}`,v.style.strokeDashoffset=b,v.dataset.len=b}),{draws:M,pins:x,zone:o,city:d,hq:y,shields:u}}pe.registerPlugin(te,hh);var me=(s,t=document)=>t.querySelector(s),rs=(s,t=document)=>[...t.querySelectorAll(s)],JE=(s,t,e)=>Math.min(e,Math.max(t,s)),vo=(s,t,e)=>{let n=JE((e-s)/(t-s),0,1);return n*n*(3-2*n)},Si=matchMedia("(prefers-reduced-motion: reduce)").matches;Si&&document.documentElement.classList.add("is-reduced");var _f=matchMedia("(max-width: 760px)").matches||matchMedia("(pointer: coarse)").matches,KE=new URLSearchParams(location.search),yo=KE.has("shot");yo&&pe.ticker.lagSmoothing(0);function QE(){try{let s=document.createElement("canvas");return!!(s.getContext("webgl2")||s.getContext("webgl"))}catch{return!1}}var ws=null;!Si&&!yo&&(ws=new B0({lerp:.1,wheelMultiplier:.9}),ws.on("scroll",te.update),pe.ticker.add(s=>ws.raf(s*1e3)),pe.ticker.lagSmoothing(0),ws.stop());var Mm=()=>parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"))||72;function jE(s){s&&(ws?ws.scrollTo(s,{offset:-Mm()+1,duration:1.4}):s.scrollIntoView({behavior:Si?"auto":"smooth"}))}rs('a[href^="#"]').forEach(s=>s.addEventListener("click",t=>{let e=s.getAttribute("href");if(e.length<2)return;let n=me(e);if(n){if(t.preventDefault(),s.dataset.service){let i=me(`input[name="issue"][value="${s.dataset.service}"]`);i&&(i.checked=!0)}jE(n)}}));var tA=QE(),Pn=null,fi=null;if(tA){try{Pn=Yx(me(".hero__canvas"),{mobile:_f,smoothing:yo?1:.09})}catch(s){console.warn(s),Pn=null}try{fi=Zx(me(".spring__canvas"),{mobile:_f,smoothing:yo?1:.1})}catch(s){console.warn(s),fi=null}}Pn||(me(".hero__canvas").style.display="none",me(".hero__fallback").hidden=!1);fi||(me(".spring__canvas").style.display="none",me(".spring").classList.add("no-gl"));var eA=me(".loader"),hv=me(".loader__count span"),vm=0,wm=0,bm=[document.fonts?document.fonts.ready:Promise.resolve()],ym=me(".open__photo img");bm.push(new Promise(s=>ym.complete?s():ym.onload=ym.onerror=s));var jx=0;bm.forEach(s=>s.then(()=>{jx++,wm=jx/bm.length}));var nA=performance.now(),uv=()=>{if(vm=Math.min(wm,(performance.now()-nA)/1300)*100,hv.textContent=Math.round(vm),vm>=100)return iA();setTimeout(uv,40)};uv();setTimeout(()=>{wm=1},6e3);var tv=!1;function iA(){tv||(tv=!0,hv.textContent="100",setTimeout(()=>{eA.classList.add("is-done"),document.body.classList.remove("is-loading"),ws&&ws.start(),Pn&&Pn.intro(),sA(),te.refresh()},yo?0:350))}function sA(){if(Si||yo)return;pe.timeline({delay:Pn?.55:.1}).from(".hero__title .line > span",{yPercent:110,duration:1.2,ease:"expo.out",stagger:.09}).from(".hero__lead",{autoAlpha:0,y:18,duration:.9,ease:"power3.out"},"-=0.75").from(".hero__actions .btn",{autoAlpha:0,y:14,duration:.8,ease:"power3.out",stagger:.08},"-=0.65").from(".nav",{yPercent:-100,duration:.9,ease:"expo.out"},.2).from(".hero__hint",{autoAlpha:0,duration:.8},"-=0.4")}var ev=innerWidth;addEventListener("resize",()=>{Pn&&Pn.resize(),fi&&fi.resize(),Am(),Math.abs(innerWidth-ev)>40&&(ev=innerWidth,te.refresh())});Pn&&Pn.start();fi&&fi.start();var rA=me(".hero__copy"),oA=me(".hero__hint"),aA=me(".hero__glow"),lA=me(".hero__shade");function cA(s){let t=vo(.04,.26,s);pe.set(rA,{autoAlpha:1-t,y:-60*t}),pe.set(oA,{autoAlpha:1-vo(0,.06,s)}),pe.set(lA,{opacity:1-vo(.1,.4,s)*.75}),pe.set(aA,{opacity:vo(.8,.99,s)})}if(Si)Pn&&Pn.renderStill(.32);else{let s=me(".open"),t=te.create({trigger:".hero",start:"top top",end:()=>"+="+innerHeight*(_f?2.4:2.8),pin:!0,pinSpacing:!0,scrub:!0,onUpdate:e=>{Pn&&Pn.setProgress(e.progress),cA(e.progress),s.classList.toggle("is-shown",e.progress>.995)},onLeave:()=>s.classList.add("is-shown"),onEnterBack:()=>s.classList.remove("is-shown")});te.addEventListener("refresh",()=>s.classList.toggle("is-shown",scrollY>=t.end-2)),te.create({trigger:".open",start:"top top",onToggle:e=>Pn&&Pn.setVisible(!e.isActive),onLeaveBack:()=>Pn&&Pn.setVisible(!0)})}var xf=me(".open__mask"),fv=me(".open__word"),nv=me(".open__l1"),iv=me(".open__l2"),Em={ox:0,oy:0,S:40},Ar=document.createElement("canvas").getContext("2d"),Rr=null;function hA(){if(Rr)return Rr;Rr=document.createElementNS("http://www.w3.org/2000/svg","text"),Rr.setAttribute("class","open__word"),Rr.setAttribute("visibility","hidden");let s=document.createElementNS("http://www.w3.org/2000/svg","tspan");return s.textContent="POINT",Rr.appendChild(s),xf.appendChild(Rr),Rr}function Am(){let s=innerWidth,t=innerHeight,e=s<760;xf.setAttribute("viewBox",`0 0 ${s} ${t}`);let n='"Big Shoulders Display"';Ar.font=`900 100px ${n}`;let i=Ar.measureText("NORTH"),r=Ar.measureText("POINT"),o=i.actualBoundingBoxAscent||72,a=Math.max(i.width,r.width),l=100*s*(e?.9:.84)/a;l=Math.min(l,100*t*(e?.5:.7)/(o*2.16)),Ar.font=`900 ${l}px ${n}`;let c=Ar.measureText("NORTH"),h=Ar.measureText("POINT"),d=c.actualBoundingBoxAscent||l*.72,f=d*.16,u=d*2+f,p=t*(e?.42:.47)-u/2,x=p+d,m=p+d*2+f,g=(s-c.width)/2,y=(s-h.width)/2;fv.setAttribute("font-size",l),nv.setAttribute("x",g),nv.setAttribute("y",x),iv.setAttribute("x",y),iv.setAttribute("y",m);let M,v;try{let R=hA();R.setAttribute("font-size",l),R.firstChild.setAttribute("x",y),R.firstChild.setAttribute("y",m);let A=R.firstChild.getExtentOfChar(2);M=A.x+A.width/2,v=A.width*.5}catch{let A=Ar.measureText("PO").width,D=Ar.measureText("POI").width;M=y+(A+D)/2,v=(D-A)*.42}let b=m-d/2,T=Math.max(s-M,M)/(v*.45),_=Math.max(b,t-b)/(d*.45);Em={ox:M,oy:b,S:Math.max(T,_,12)*.62};let S=me(".open__sub");S.style.top=m+d*.1+22+"px",S.style.bottom="auto"}Am();document.fonts&&document.fonts.ready.then(()=>{Am(),te.refresh()});function uA(s){let{ox:t,oy:e}=Em;fv.setAttribute("transform",`translate(${t} ${e}) scale(${s}) translate(${-t} ${-e})`)}var sv={z:0},rv=me(".nav");Si?(pe.set(xf,{autoAlpha:0}),pe.set(".open__statement",{autoAlpha:1}),pe.set(".open__sub",{autoAlpha:0}),me(".open").setAttribute("data-theme","dark")):(pe.timeline({scrollTrigger:{trigger:".open",start:"top top",end:()=>"+="+innerHeight*2.2,pin:".open__stage",scrub:!0},defaults:{ease:"none"}}).from(".open__photo",{opacity:0,duration:.06},0).from(".open__sub",{autoAlpha:0,duration:.04},.02).to(".open__sub",{autoAlpha:0,y:-20,duration:.1},.1).to(sv,{z:1,duration:.5,ease:"power3.in",onUpdate:()=>uA(1+(Em.S-1)*sv.z)},.1).fromTo(".open__photo img",{scale:1.18},{scale:1,duration:.55,ease:"power2.out"},.1).to(xf,{autoAlpha:0,duration:.16,ease:"power1.in"},.44).set(".open",{attr:{"data-theme":"dark"}},.58).to(".open__statement",{autoAlpha:1,duration:.14},.62).from(".open__big",{y:40,duration:.18,ease:"power2.out"},.62).from(".open__small",{autoAlpha:0,y:20,duration:.14},.72).to({},{duration:.14}),me(".open").setAttribute("data-theme","light"));if(Si)pe.set(".ben__photo img",{clipPath:"none",scale:1}),rs(".ben__text").forEach(s=>s.style.color="#161c25");else{let s=new hh(".ben__text",{type:"words",wordsClass:"word"});pe.to(s.words,{color:"#161c25",stagger:.12,ease:"none",scrollTrigger:{trigger:".ben__text",start:"top 78%",end:"bottom 42%",scrub:!0}}),pe.fromTo(".ben__photo img",{clipPath:"inset(18% 14% 18% 14%)",scale:1.25},{clipPath:"inset(0% 0% 0% 0%)",scale:1,ease:"none",scrollTrigger:{trigger:".ben__photo",start:"top 90%",end:"center 50%",scrub:!0}}),pe.from(".ben__facts li",{"--line":0,autoAlpha:0,y:16,stagger:.1,duration:.7,ease:"power3.out",scrollTrigger:{trigger:".ben__facts",start:"top 85%"}})}var dv=me(".spring"),fA=me(".spring__count"),dA=me(".spring__bar i"),pA=rs(".spring__step"),mA=me(".spring__frost"),gA=new Intl.NumberFormat("en-US"),ov=-1;function av(s){let t=Math.round(1e4*vo(.18,bs-.02,s));fA.textContent=gA.format(t),pe.set(dA,{scaleX:t/1e4});let e=s<.24?0:s<.48?1:s<bs?2:3;e!==ov&&(pA.forEach((n,i)=>n.classList.toggle("is-on",i===e)),ov=e),dv.classList.toggle("is-snapped",s>=bs),pe.set(mA,{opacity:.16*vo(.46,.66,s)*(1-vo(bs,bs+.08,s)*.5)})}if(Si)dv.classList.add("is-static"),fi&&(fi.setVisible(!0),fi.renderStill(.3)),av(1);else{te.create({trigger:".spring",start:"top top",end:()=>"+="+innerHeight*3.2,pin:!0,scrub:!0,onUpdate:t=>{fi&&fi.setProgress(t.progress),av(t.progress)}}),te.create({trigger:".spring",start:"top bottom",end:()=>"bottom+="+innerHeight*3.2+" top",onToggle:t=>fi&&fi.setVisible(t.isActive)});let s=!1;te.create({trigger:".spring",start:()=>"top+="+innerHeight*3.2*bs+" top",onEnter:()=>{s||(s=!0,pe.fromTo(".spring__stage",{x:-8},{x:0,duration:.5,ease:"elastic.out(1.2,0.25)"}),setTimeout(()=>s=!1,900))}})}var pv=rs(".svc__row"),Sm=s=>pv.forEach(t=>t.classList.toggle("is-active",t===s));pv.forEach(s=>{te.create({trigger:s,start:"top 58%",end:"bottom 42%",onEnter:()=>Sm(s),onEnterBack:()=>Sm(s),onLeave:()=>s.classList.remove("is-active"),onLeaveBack:()=>s.classList.remove("is-active")}),_f||s.addEventListener("pointerenter",()=>Sm(s))});Si||pe.from(".svc__word",{yPercent:40,autoAlpha:0,stagger:.08,duration:1,ease:"expo.out",scrollTrigger:{trigger:".svc",start:"top 80%"}});var lv=me(".styles__track");if(!Si){let s=()=>Math.max(0,lv.scrollWidth-innerWidth),t=pe.to(lv,{x:()=>-s(),ease:"none",scrollTrigger:{trigger:".styles",start:"top top",end:()=>"+="+s()*1.05,pin:!0,scrub:!0,invalidateOnRefresh:!0,onUpdate:e=>pe.set(".styles__progress i",{scaleX:e.progress})}});rs(".style-card").forEach(e=>{pe.fromTo(e.querySelector("img"),{xPercent:-12},{xPercent:0,ease:"none",scrollTrigger:{trigger:e,containerAnimation:t,start:"left right",end:"right left",scrub:!0}})})}if(!Si){let s=pe.matchMedia();s.add("(min-width: 761px)",()=>{pe.from(".step__chev",{xPercent:70,autoAlpha:0,stagger:.18,ease:"power2.out",scrollTrigger:{trigger:".steps",start:"top 85%",end:"top 35%",scrub:!0}}),pe.from(".step__body",{autoAlpha:0,y:24,stagger:.18,ease:"power2.out",scrollTrigger:{trigger:".steps",start:"top 70%",end:"top 30%",scrub:!0}})}),s.add("(max-width: 760px)",()=>{rs(".step").forEach(t=>{pe.from(t.querySelector(".step__chev"),{yPercent:30,autoAlpha:0,ease:"power2.out",scrollTrigger:{trigger:t,start:"top 92%",end:"top 60%",scrub:!0}})})}),rs(".step__chev img").forEach(t=>pe.fromTo(t,{scale:1.2},{scale:1,ease:"none",scrollTrigger:{trigger:t,start:"top bottom",end:"bottom top",scrub:!0}}))}var Cr=Qx(me(".map"));if(Si)Cr.draws.forEach(s=>s.style.strokeDashoffset=0);else{let s=pe.timeline({scrollTrigger:{trigger:".areas",start:"top top",end:()=>"+="+innerHeight*1.3,pin:!0,scrub:!0},defaults:{ease:"none"}}),t=Cr.draws.filter(n=>n.closest(".grid")),e=Cr.draws.filter(n=>!n.closest(".grid"));s.to(t,{strokeDashoffset:0,duration:.3,stagger:.004},0).to(e,{strokeDashoffset:0,duration:.35,stagger:.02},.05).from(Cr.zone,{opacity:0,duration:.2},.3).from(Cr.pins,{opacity:0,scale:.3,transformOrigin:"0 0",duration:.06,stagger:.022},.38).from([Cr.city,Cr.hq,Cr.shields],{opacity:0,duration:.12},.3).to({},{duration:.15}),pe.from(".areas__copy > *",{autoAlpha:0,y:24,stagger:.1,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".areas",start:"top 70%"}})}var vf=me(".marquee__track");vf.innerHTML+=vf.innerHTML;rs(".quote",vf).slice(vf.children.length/2).forEach(s=>s.setAttribute("aria-hidden","true"));rs(".faq__list details").forEach(s=>{let t=s.querySelector("summary"),e=s.querySelector("p");t.addEventListener("click",n=>{Si||(n.preventDefault(),s.open?(pe.to(e,{height:0,opacity:0,duration:.45,ease:"power3.inOut",onComplete:()=>{s.open=!1,pe.set(e,{clearProps:"all"})}}),s.classList.remove("is-open")):(s.open=!0,pe.fromTo(e,{height:0,opacity:0},{height:"auto",opacity:1,duration:.55,ease:"power3.out",onComplete:()=>pe.set(e,{clearProps:"height"})})))}),e.style.overflow="hidden"});var cv=me(".form");cv.addEventListener("submit",s=>{s.preventDefault();let t=me(".form__error"),e=me("#f-name"),n=me("#f-phone"),i=[];if([e,n].forEach(o=>o.removeAttribute("aria-invalid")),e.value.trim()||(i.push("your name"),e.setAttribute("aria-invalid","true")),n.value.replace(/\D/g,"").length<10&&(i.push("a 10-digit phone number"),n.setAttribute("aria-invalid","true")),i.length){t.textContent=`Add ${i.join(" and ")} so Ben can call you back.`,t.hidden=!1,(i[0]==="your name"?e:n).focus();return}t.hidden=!0,cv.classList.add("is-sent");let r=me(".form__done");r.hidden=!1,pe.from(r,{autoAlpha:0,y:12,duration:.6,ease:"power3.out"})});rs(".close__panel").forEach(s=>{s.innerHTML="<i></i>".repeat(8)});Si?pe.set(".close__door",{yPercent:100}):pe.timeline({scrollTrigger:{trigger:".close",start:"top top",end:()=>"+="+innerHeight*1.3,pin:!0,scrub:!0},defaults:{ease:"none"}}).from(".close__line",{autoAlpha:0,y:30,duration:.15,ease:"power2.out"},0).to(".close__door",{yPercent:100,duration:.6,ease:"power1.inOut"},.12).to(".close__slit",{opacity:1,duration:.05},.66).to(".close__slit",{opacity:0,duration:.2},.76).to({},{duration:.08});var _A=me(".dock"),nP=rs("[data-theme], .hero, .open"),Tm=!1;function mv(){Tm=!1;let s=Mm()/2,t=document.elementsFromPoint(innerWidth/2,s).find(a=>a.closest&&a.closest("[data-theme]")&&!a.closest(".nav")),e=t&&t.closest("[data-theme]");rv.classList.toggle("is-light",!!e&&e.dataset.theme==="light");let n=me(".open").getBoundingClientRect().top<innerHeight*.5;rv.classList.toggle("is-solid",me(".ben").getBoundingClientRect().top<Mm());let i=me(".contact").getBoundingClientRect(),r=i.top<innerHeight*.8&&i.bottom>0,o=me(".foot").getBoundingClientRect().top<innerHeight;_A.classList.toggle("is-on",n&&!r&&!o)}var gv=()=>{Tm||(Tm=!0,requestAnimationFrame(mv))};ws&&ws.on("scroll",gv);addEventListener("scroll",gv,{passive:!0});mv();yo&&(window.__np={hero:Pn,spring:fi,ScrollTrigger:te,gsap:pe});})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
