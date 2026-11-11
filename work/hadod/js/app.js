(()=>{var D_=Object.defineProperty;var N_=(s,t,e)=>t in s?D_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Bt=(s,t,e)=>N_(s,typeof t!="symbol"?t+"":t,e);function ts(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Hd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xo={duration:.5,overwrite:!1,delay:0},hu,dn,De,gi=1e8,Se=1/gi,nu=Math.PI*2,U_=nu/4,O_=0,Wd=Math.sqrt,F_=Math.cos,B_=Math.sin,nn=function(t){return typeof t=="string"},Ge=function(t){return typeof t=="function"},ns=function(t){return typeof t=="number"},Ml=function(t){return typeof t=="undefined"},zi=function(t){return typeof t=="object"},Zn=function(t){return t!==!1},uu=function(){return typeof window!="undefined"},ul=function(t){return Ge(t)||nn(t)},Xd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,z_=/random\([^)]+\)/g,k_=/,\s*/g,Ud=/(?:-?\.?\d|\.)+/gi,fu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,du=/[+-]=-?[.\d]+/,V_=/[^,'"\[\]\s]+/gi,G_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Be,Fi,iu,pu,ii={},ml={},qd,Yd=function(t){return(ml=Br(t,ii))&&Tn},bl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},qo=function(t,e){return!e&&console.warn(t)},Zd=function(t,e){return t&&(ii[t]=e)&&ml&&(ml[t]=e)||ii},Yo=function(){return 0},H_={suppressEvents:!0,isStart:!0,kill:!1},fl={suppressEvents:!0,kill:!1},W_={suppressEvents:!0},mu={},Es=[],su={},Jd,qn={},$h={},Od=30,dl=[],gu="",_u=function(t){var e=t[0],n,i;if(zi(e)||Ge(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=dl.length;i--&&!dl[i].targetTest(e););n=dl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Su(t[i],n)))||t.splice(i,1);return t},As=function(t){return t._gsap||_u(_i(t))[0]._gsap},xu=function(t,e,n){return(n=t[e])&&Ge(n)?t[e]():Ml(n)&&t.getAttribute&&t.getAttribute(e)||n},On=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},Fe=function(t){return Math.round(t*1e7)/1e7||0},or=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},X_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},gl=function(){var t=Es.length,e=Es.slice(0),n,i;for(su={},Es.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vu=function(t){return!!(t._initted||t._startAt||t.add)},$d=function(t,e,n,i){Es.length&&!dn&&gl(),t.render(e,n,i||!!(dn&&e<0&&vu(t))),Es.length&&!dn&&gl()},Kd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(V_).length<2?e:nn(t)?t.trim():t},Qd=function(t){return t},si=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},q_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Br=function(t,e){for(var n in e)t[n]=e[n];return t},Fd=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=zi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},_l=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Go=function(t){var e=t.parent||Be,n=t.keyframes?q_(bn(t.keyframes)):si;if(Zn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Y_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},jd=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Tl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Cs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},nr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Z_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ru=function(t,e,n,i){return t._startAt&&(dn?t._startAt.revert(fl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},J_=function s(t){return!t||t._ts&&s(t.parent)},Bd=function(t){return t._repeat?zr(t._tTime,t=t.duration()+t._rDelay)*t:0},zr=function(t,e){var n=Math.floor(t=Fe(t/e));return t&&n===t?n-1:n},xl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},wl=function(t){return t._end=Fe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},El=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Fe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),wl(t),n._dirty||nr(n,t)),t},tp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=xl(t.rawTime(),e),(!e._dur||Ko(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),nr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},Bi=function(t,e,n,i){return e.parent&&Cs(e),e._start=Fe((ns(n)?n:!n&&vl(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Be?mi(t,n,e):t._time)+e._delay),e._end=Fe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),jd(t,e,"_first","_last",t._sort?"_start":0),vl(e)||(t._recent=e),i||tp(t,e),t._ts<0&&El(t,t._tTime),t},ep=function(t,e){return(ii.ScrollTrigger||bl("scrollTrigger",e))&&ii.ScrollTrigger.create(e,t)},np=function(t,e,n,i,r){if(Tu(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!dn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Jd!==Yn.frame)return Es.push(t),t._lazy=[r,i],1},$_=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},vl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},K_=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&$_(t)&&!(!t._initted&&vl(t))||(t._ts<0||t._dp._ts<0)&&!vl(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Ko(0,t._tDur,e),h=zr(l,a),t._yoyo&&h&1&&(o=1-o),h!==zr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||dn||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&np(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&ru(t,e,n,!0),t._onUpdate&&!n&&ni(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ni(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Cs(t,1),!n&&!dn&&(ni(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Q_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},kr=function(t,e,n,i){var r=t._repeat,o=Fe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Fe(o*(r+1)+t._rDelay*r):o,a>0&&!i&&El(t,t._tTime=t._tDur*a),t.parent&&wl(t),n||nr(t.parent,t),t},zd=function(t){return t instanceof Mn?nr(t):kr(t,t._dur)},j_={_start:0,endTime:Yo,totalDuration:Yo},mi=function s(t,e,n){var i=t.labels,r=t._recent||j_,o=t.duration()>=gi?r.endTime(!1):t._dur,a,l,c;return nn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(bn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ho=function(t,e,n){var i=ns(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;o.immediateRender=Zn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Xe(e[0],o,e[r+1])},Rs=function(t,e){return t||t===0?e(t):e},Ko=function(t,e,n){return n<t?t:n>e?e:n},pn=function(t,e){return!nn(t)||!(e=G_.exec(t))?"":e[1]},t0=function(t,e,n){return Rs(n,function(i){return Ko(t,e,i)})},ou=[].slice,ip=function(t,e){return t&&zi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&zi(t[0]))&&!t.nodeType&&t!==Fi},e0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return nn(i)&&!e||ip(i,1)?(r=n).push.apply(r,_i(i)):n.push(i)})||n},_i=function(t,e,n){return De&&!e&&De.selector?De.selector(t):nn(t)&&!n&&(iu||!Vr())?ou.call((e||pu).querySelectorAll(t),0):bn(t)?e0(t,n):ip(t)?ou.call(t,0):t?[t]:[]},au=function(t){return t=_i(t)[0]||qo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return _i(e,n.querySelectorAll?n:n===t?qo("Invalid scope")||pu.createElement("div"):t)}},sp=function(t){return t.sort(function(){return .5-Math.random()})},rp=function(t){if(Ge(t))return t;var e=zi(t)?t:{each:t},n=ir(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return nn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,m){var x=(m||e).length,p=o[x],g,v,T,y,w,E,_,b,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,gi])[1],!P){for(_=-gi;_<(_=m[P++].getBoundingClientRect().left)&&P<x;);P<x&&P--}for(p=o[x]=[],g=l?Math.min(P,x)*h-.5:i%P,v=P===gi?0:l?x*d/P-.5:i/P|0,_=0,b=gi,E=0;E<x;E++)T=E%P-g,y=v-(E/P|0),p[E]=w=c?Math.abs(c==="y"?y:T):Wd(T*T+y*y),w>_&&(_=w),w<b&&(b=w);i==="random"&&sp(p),p.max=_-b,p.min=b,p.v=x=(parseFloat(e.amount)||parseFloat(e.each)*(P>x?x-1:c?c==="y"?x/P:P:Math.max(P,x/P))||0)*(i==="edges"?-1:1),p.b=x<0?r-x:r,p.u=pn(e.amount||e.each)||0,n=n&&x<0?p0(n):n}return x=(p[u]-p.min)/p.max||0,Fe(p.b+(n?n(x):x)*p.v)+p.u}},lu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Fe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ns(n)?0:pn(n))}},op=function(t,e){var n=bn(t),i,r;return!n&&zi(t)&&(i=n=t.radius||gi,t.values?(t=_i(t.values),(r=!ns(t[0]))&&(i*=i)):t=lu(t.increment)),Rs(e,n?Ge(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=gi,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,r||h===o||ns(o)?h:h+pn(o)}:lu(t))},ap=function(t,e,n,i){return Rs(bn(t)?!e:n===!0?!!(n=0):!i,function(){return bn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},n0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},i0=function(t,e){return function(n){return t(parseFloat(n))+(e||pn(n))}},s0=function(t,e,n){return cp(t,e,0,1,n)},lp=function(t,e,n){return Rs(n,function(i){return t[~~e(i)]})},r0=function s(t,e,n){var i=e-t;return bn(t)?lp(t,s(0,t.length),e):Rs(n,function(r){return(i+(r-t)%i)%i+t})},o0=function s(t,e,n){var i=e-t,r=i*2;return bn(t)?lp(t,s(0,t.length-1),e):Rs(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Gr=function(t){return t.replace(z_,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(k_);return ap(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},cp=function(t,e,n,i,r){var o=e-t,a=i-n;return Rs(r,function(l){return n+((l-t)/o*a||0)})},a0=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=nn(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(bn(t)&&!bn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(m){m*=d;var x=Math.min(u,~~m);return h[x](m-x)},n=e}else i||(t=Br(bn(t)?[]:{},t));if(!h){for(l in e)Mu.call(a,t,l,"get",e[l]);r=function(m){return Au(m,a)||(o?t.p:t)}}}return Rs(n,r)},kd=function(t,e,n){var i=t.labels,r=gi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ni=function(t,e,n){var i=t.vars,r=i[e],o=De,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Es.length&&gl(),a&&(De=a),h=l?r.apply(c,l):r.call(c),De=o,h},ko=function(t){return Cs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!dn),t.progress()<1&&ni(t,"onInterrupt"),t},Fr,hp=[],up=function(t){if(t)if(t=!t.name&&t.default||t,uu()||t.headless){var e=t.name,n=Ge(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Yo,render:Au,add:Mu,kill:T0,modifier:b0,rawVars:0},o={targetTest:0,get:0,getSetter:Al,aliases:{},register:0};if(Vr(),t!==i){if(qn[e])return;si(i,si(_l(t,r),o)),Br(i.prototype,Br(r,_l(t,o))),qn[i.prop=e]=i,t.targetTest&&(dl.push(i),mu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Zd(e,i),t.register&&t.register(Tn,i,Fn)}else hp.push(t)},we=255,Vo={aqua:[0,we,we],lime:[0,we,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,we],navy:[0,0,128],white:[we,we,we],olive:[128,128,0],yellow:[we,we,0],orange:[we,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[we,0,0],pink:[we,192,203],cyan:[0,we,we],transparent:[we,we,we,0]},Kh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*we+.5|0},fp=function(t,e,n){var i=t?ns(t)?[t>>16,t>>8&we,t&we]:0:Vo.black,r,o,a,l,c,h,d,u,f,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Vo[t])i=Vo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&we,i&we,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&we,t&we]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(Ud),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Kh(l+1/3,r,o),i[1]=Kh(l,r,o),i[2]=Kh(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(fu),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ud)||Vo.transparent;i=i.map(Number)}return e&&!m&&(r=i[0]/we,o=i[1]/we,a=i[2]/we,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},dp=function(t){var e=[],n=[],i=-1;return t.split(es).forEach(function(r){var o=r.match(rr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Vd=function(t,e,n){var i="",r=(t+i).match(es),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=fp(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=dp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(es,"1").split(rr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(es),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},es=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Vo)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),l0=/hsl[a]?\(/,yu=function(t){var e=t.join(" "),n;if(es.lastIndex=0,es.test(e))return n=l0.test(e),t[1]=Vd(t[1],n),t[0]=Vd(t[0],n,dp(t[1])),!0},Zo,Yn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,u,f,m=function x(p){var g=s()-i,v=p===!0,T,y,w,E;if((g>t||g<0)&&(n+=g-e),i+=g,w=i-n,T=w-o,(T>0||v)&&(E=++d.frame,u=w-d.time*1e3,d.time=w=w/1e3,o+=T+(T>=r?0:r-T),y=1),v||(l=c(x)),y)for(f=0;f<a.length;f++)a[f](w,u,E,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){qd&&(!iu&&uu()&&(Fi=iu=window,pu=Fi.document||{},ii.gsap=Tn,(Fi.gsapVersions||(Fi.gsapVersions=[])).push(Tn.version),Yd(ml||Fi.GreenSockGlobals||!Fi.gsap&&Fi||{}),hp.forEach(up)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Zo=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Zo=0,c=Yo},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,g,v){var T=g?function(y,w,E,_){p(y,w,E,_),d.remove(T)}:p;return d.remove(p),a[v?"unshift":"push"](T),Vr(),T},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),Vr=function(){return!Zo&&Yn.wake()},ue={},c0=/^[\d.\-M][\d.\-,\s]/,h0=/["']/g,u0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(h0,"").trim():+c,i=l.substr(a+1).trim();return e},f0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},d0=function(t){var e=(t+"").split("("),n=ue[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[u0(e[1])]:f0(t).split(",").map(Kd)):ue._CE&&c0.test(t)?ue._CE("",t):n},p0=function(t){return function(e){return 1-t(1-e)}},ir=function(t,e){return t&&(Ge(t)?t:ue[t]||d0(t))||e},ar=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return On(t,function(a){ue[a]=ii[a]=r,ue[o=a.toLowerCase()]=n;for(var l in r)ue[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ue[a+"."+l]=r[l]}),r},pp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Qh=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/nu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*B_((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:pp(a);return r=nu/r,l.config=function(c,h){return s(t,c,h)},l},jh=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:pp(n);return i.config=function(r){return s(t,r)},i};On("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;ar(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ue.Linear.easeNone=ue.none=ue.Linear.easeIn;ar("Elastic",Qh("in"),Qh("out"),Qh());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};ar("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ar("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});ar("Circ",function(s){return-(Wd(1-s*s)-1)});ar("Sine",function(s){return s===1?1:-F_(s*U_)+1});ar("Back",jh("in"),jh("out"),jh());ue.SteppedEase=ue.steps=ii.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Se;return function(a){return((i*Ko(0,o,a)|0)+r)*n}}};Xo.ease=ue["quad.out"];On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return gu+=s+","+s+"Params,"});var Su=function(t,e){this.id=O_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:xu,this.set=e?e.getSetter:Al},Jo=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,kr(this,+e.duration,1,1),this.data=e.data,De&&(this._ctx=De,De.data.push(this)),Zo||Yn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,kr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Vr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(El(this,n),!r._dp||r.parent||tp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$d(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?zr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?xl(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Ko(-Math.abs(this._delay),a,r),i!==!1),wl(this),Z_(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Vr(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Se,o;if(r)for(this._tTime-=Se,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Se){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=Fe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=W_);var i=dn;return dn=n,vu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,zd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,zd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(mi(this,n),Zn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zn(i)),this._dur||(this._zTime=-Se),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Se)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Ge(n)?n:Qd,l=function(){var h=i.then;i.then=null,r&&r(),Ge(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ko(this)},s})();si(Jo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var Mn=(function(s){Hd(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Zn(n.sortChildren),Be&&Bi(n.parent||Be,ts(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ep(ts(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Ho(0,arguments,this),this},e.from=function(i,r,o){return Ho(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Ho(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Go(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Xe(i,r,mi(this,o),1),this},e.call=function(i,r,o){return Bi(this,Xe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Xe(i,o,mi(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Go(o).immediateRender=Zn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,Go(a).immediateRender=Zn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Fe(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,m,x,p,g,v,T,y,w,E,_;if(this!==Be&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,y=this._start,T=this._ts,g=!T,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(u=Fe(h%p),h===l?(x=this._repeat,u=c):(w=Fe(h/p),x=~~w,x&&x===w&&(u=c,x--),u>c&&(u=c)),w=zr(this._tTime,p),!a&&this._tTime&&w!==x&&this._tTime-w*p-this._dur<=0&&(w=x),E&&x&1&&(u=c-u,_=1),x!==w&&!this._lock){var b=E&&w&1,P=b===(E&&x&1);if(x<w&&(b=!b),a=b?0:h%c?c:h,this._lock=1,this.render(a||(_?0:Fe(x*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,w=x),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Q_(this,Fe(a),Fe(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!w&&(ni(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-Se);break}}f=m}else{f=this._last;for(var R=i<0?i:u;f;){if(m=f._prev,(f._act||R<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,r,o||dn&&vu(f)),u!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=R?-Se:Se);break}}f=m}}if(v&&!r&&(this.pause(),v.render(u>=a?0:-Se)._zTime=u>=a?1:-1,this._ts))return this._start=y,wl(this),this.render(i,r,o);this._onUpdate&&!r&&ni(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Cs(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(ni(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(ns(r)||(r=mi(this,r,i)),!(i instanceof Jo)){if(bn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(nn(i))return this.addLabel(i,r);if(Ge(i))i=Xe.delayedCall(0,i);else return this}return this!==i?Bi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-gi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Xe?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return nn(i)?this.removeLabel(i):Ge(i)?this.killTweensOf(i):(i.parent===this&&Tl(this,i),i===this._recent&&(this._recent=this._last),nr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Fe(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=mi(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Xe.delayedCall(0,r||Yo,o);return a.data="isPause",this._hasPause=1,Bi(this,a,mi(this,i))},e.removePause=function(i){var r=this._first;for(i=mi(this,i);r;)r._start===i&&r.data==="isPause"&&Cs(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ws!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=_i(i),l=this._first,c=ns(r),h;l;)l instanceof Xe?X_(l._targets,a)&&(c?(!ws||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=mi(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,m=Xe.to(o,si({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Se,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&kr(m,p,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,d||[])}},r));return u?m.render(0):m},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,si({startAt:{time:mi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),kd(this,mi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),kd(this,mi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Fe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return nr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),nr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=gi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Bi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Fe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;kr(o,o===Be&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Be._ts&&($d(Be,xl(i,Be)),Jd=Yn.frame),Yn.frame>=Od){Od+=Jn.autoSleep||120;var r=Be._first;if((!r||!r._ts)&&Jn.autoSleep&&Yn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Yn.sleep()}}},t})(Jo);si(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var m0=function(t,e,n,i,r,o,a){var l=new Fn(this._pt,t,e,0,1,Eu,null,r),c=0,h=0,d,u,f,m,x,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Gr(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),u=n.match(Jh)||[];d=Jh.exec(i);)m=d[0],x=i.substring(c,d.index),f?f=(f+1)%5:x.substr(-5)==="rgba("&&(f=1),m!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:x||h===1?x:",",s:p,c:m.charAt(1)==="="?or(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=Jh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(du.test(i)||g)&&(l.e=0),this._pt=l,l},Mu=function(t,e,n,i,r,o,a,l,c,h){Ge(i)&&(i=i(r||0,t,o));var d=t[e],u=n!=="get"?n:Ge(d)?c?t[e.indexOf("set")||!Ge(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Ge(d)?c?y0:gp:wu,m;if(nn(i)&&(~i.indexOf("random(")&&(i=Gr(i)),i.charAt(1)==="="&&(m=or(u,i)+(pn(u)||0),(m||m===0)&&(i=m))),!h||u!==i||cu)return!isNaN(u*i)&&i!==""?(m=new Fn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?M0:_p,0,f),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&bl(e,i),m0.call(this,t,e,u,i,f,l||Jn.stringFilter,c))},g0=function(t,e,n,i,r){if(Ge(t)&&(t=Wo(t,r,e,n,i)),!zi(t)||t.style&&t.nodeType||bn(t)||Xd(t))return nn(t)?Wo(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Wo(t[a],r,e,n,i);return o},bu=function(t,e,n,i,r,o){var a,l,c,h;if(qn[t]&&(a=new qn[t]).init(r,a.rawVars?e[t]:g0(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Fn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Fr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ws,cu,Tu=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,m=t._dur,x=t._startAt,p=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:p,T=t._overwrite==="auto"&&!hu,y=t.timeline,w=i.easeReverse||d,E,_,b,P,R,D,N,H,I,F,z,O,$;if(y&&(!u||!r)&&(r="none"),t._ease=ir(r,Xo.ease),t._rEase=w&&(ir(w)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(H=p[0]?As(p[0]).harness:0,O=H&&i[H.prop],E=_l(i,mu),x&&(x._zTime<0&&x.progress(1),e<0&&h&&a&&!f?x.render(-1,!0):x.revert(h&&m?fl:H_),x._lazy=0),o){if(Cs(t._startAt=Xe.set(p,si({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!x&&Zn(l),startAt:null,delay:0,onUpdate:c&&function(){return ni(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn||!a&&!f)&&t._startAt.revert(fl),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!x){if(e&&(a=!1),b=si({overwrite:!1,data:"isFromStart",lazy:a&&!x&&Zn(l),immediateRender:a,stagger:0,parent:g},E),O&&(b[H.prop]=O),Cs(t._startAt=Xe.set(p,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn?t._startAt.revert(fl):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Zn(l)||l&&!m,_=0;_<p.length;_++){if(R=p[_],N=R._gsap||_u(p)[_]._gsap,t._ptLookup[_]=F={},su[N.id]&&Es.length&&gl(),z=v===p?_:v.indexOf(R),H&&(I=new H).init(R,O||E,t,z,v)!==!1&&(t._pt=P=new Fn(t._pt,R,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){F[W]=P}),I.priority&&(D=1)),!H||O)for(b in E)qn[b]&&(I=bu(b,E,t,z,R,v))?I.priority&&(D=1):F[b]=P=Mu.call(t,R,b,"get",E[b],z,v,0,i.stringFilter);t._op&&t._op[_]&&t.kill(R,t._op[_]),T&&t._pt&&(ws=t,Be.killTweensOf(R,F,t.globalTime(e)),$=!t.parent,ws=0),t._pt&&l&&(su[N.id]=1)}D&&Cu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!$,u&&e<=0&&y.render(gi,!0,!0)},_0=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return cu=1,t.vars[e]="+=0",Tu(t,a),cu=0,l?qo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=He(n)+pn(d.e)),d.b&&(d.b=h.s+pn(d.b))},x0=function(t,e){var n=t[0]?As(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Br({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},v0=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(bn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Wo=function(t,e,n,i,r){return Ge(t)?t.call(e,n,i,r):nn(t)&&~t.indexOf("random(")?Gr(t):t},yl=gu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",mp={};On(yl+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return mp[s]=1});yl=yl.split(",");var Xe=(function(s){Hd(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Go(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,m=l.keyframes,x=l.defaults,p=l.scrollTrigger,g=i.parent||Be,v=(bn(n)||Xd(n)?ns(n[0]):"length"in i)?[n]:_i(n),T,y,w,E,_,b,P,R;if(a._targets=v.length?_u(v):qo("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||u||ul(c)||ul(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(T=a.timeline=new Mn({data:"nested",defaults:x||{},targets:g&&g.data==="nested"?g.vars.targets:v}),T.kill(),T.parent=T._dp=ts(a),T._start=0,u||ul(c)||ul(h)){if(E=v.length,P=u&&rp(u),zi(u))for(_ in u)~yl.indexOf(_)&&(R||(R={}),R[_]=u[_]);for(y=0;y<E;y++)w=_l(i,mp),w.stagger=0,D&&(w.easeReverse=D),R&&Br(w,R),b=v[y],w.duration=+Wo(c,ts(a),y,b,v),w.delay=(+Wo(h,ts(a),y,b,v)||0)-a._delay,!u&&E===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),T.to(b,w,P?P(y,b,v):0),T._ease=ue.none;T.duration()?c=h=0:a.timeline=0}else if(m){Go(si(T.vars.defaults,{ease:"none"})),T._ease=ir(m.ease||i.ease||"none");var N=0,H,I,F;if(bn(m))m.forEach(function(z){return T.to(v,z,">")}),T.duration();else{w={};for(_ in m)_==="ease"||_==="easeEach"||v0(_,m[_],w,m.easeEach);for(_ in w)for(H=w[_].sort(function(z,O){return z.t-O.t}),N=0,y=0;y<H.length;y++)I=H[y],F={ease:I.e,duration:(I.t-(y?H[y-1].t:0))/100*c},F[_]=I.v,T.to(v,F,N),N+=F.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||a.duration(c=T.duration())}else a.timeline=0;return f===!0&&!hu&&(ws=ts(a),Be.killTweensOf(v),ws=0),Bi(g,ts(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!m&&a._start===Fe(g._time)&&Zn(d)&&J_(ts(a))&&g.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-h)||0)),p&&ep(ts(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Se&&!h?l:i<Se?0:i,u,f,m,x,p,g,v,T;if(!c)K_(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,T=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+i,r,o);if(u=Fe(d%x),d===l?(m=this._repeat,u=c):(p=Fe(d/x),m=~~p,m&&m===p?(u=c,m--):u>c&&(u=c)),g=this._yoyo&&m&1,g&&(u=c-u),p=zr(this._tTime,x),u===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==x&&this._initted&&(this._lock=o=1,this.render(Fe(x*m),!0).invalidate()._lock=0)}if(!this._initted){if(np(this,h?i:u,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=u<a;if(y!==this._inv){var w=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(y?-1:1)/w:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(u/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!p&&(ni(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;T&&T.render(i<0?i:T._dur*T._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ru(this,i,r,o),ni(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&ni(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&ru(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Cs(this,1),!r&&!(h&&!a)&&(d||a||g)&&(ni(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Zo||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Tu(this,c),h=this._ease(c/this._dur),_0(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(El(this,0),this.parent||jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ko(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ws&&ws.vars.overwrite!==!0)._first||ko(this),this.parent&&o!==this.timeline.totalDuration()&&kr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?_i(i):a,c=this._ptLookup,h=this._pt,d,u,f,m,x,p,g;if((!r||r==="all")&&Y_(a,l))return r==="all"&&(this._pt=0),ko(this);for(d=this._op=this._op||[],r!=="all"&&(nn(r)&&(x={},On(r,function(v){return x[v]=1}),r=x),r=x0(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],r==="all"?(d[g]=r,m=u,f={}):(f=d[g]=d[g]||{},m=r);for(x in m)p=u&&u[x],p&&((!("kill"in p.d)||p.d.kill(x)===!0)&&Tl(this,p,"_pt"),delete u[x]),f!=="all"&&(f[x]=1)}return this._initted&&!this._pt&&h&&ko(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Ho(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Ho(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Be.killTweensOf(i,r,o)},t})(Jo);si(Xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});On("staggerTo,staggerFrom,staggerFromTo",function(s){Xe[s]=function(){var t=new Mn,e=ou.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var wu=function(t,e,n){return t[e]=n},gp=function(t,e,n){return t[e](n)},y0=function(t,e,n,i){return t[e](i.fp,n)},S0=function(t,e,n){return t.setAttribute(e,n)},Al=function(t,e){return Ge(t[e])?gp:Ml(t[e])&&t.setAttribute?S0:wu},_p=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},M0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Eu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Au=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},b0=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},T0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Tl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},w0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Cu=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Fn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||_p,this.d=l||this,this.set=c||wu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=w0,this.m=n,this.mt=r,this.tween=i},s})();On(gu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return mu[s]=1});ii.TweenMax=ii.TweenLite=Xe;ii.TimelineLite=ii.TimelineMax=Mn;Be=new Mn({sortChildren:!1,defaults:Xo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=yu;var sr=[],pl={},E0=[],Gd=0,A0=0,tu=function(t){return(pl[t]||E0).map(function(e){return e()})},$o=function(){var t=Date.now(),e=[];t-Gd>2&&(tu("matchMediaInit"),sr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Fi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),tu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Gd=t,tu("matchMedia"))},xp=(function(){function s(e,n){this.selector=n&&au(n),this.data=[],this._r=[],this.isReverted=!1,this.id=A0++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ge(n)&&(r=i,i=n,n=Ge);var o=this,a=function(){var c=De,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=au(r)),De=o,d=i.apply(o,arguments),Ge(d)&&o._r.push(d),De=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Ge?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=De;De=null,n(this),De=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xe)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=sr.length;o--;)sr[o].id===this.id&&sr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener($o):a.removeEventListener("change",$o)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),C0=(function(){function s(e){this.contexts=[],this.scope=e,De&&De.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){zi(n)||(n={matches:n});var o=new xp(0,r||this.scope),a=o.conditions={},l,c,h;De&&!o.selector&&(o.selector=De.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Fi.matchMedia(n[c]),l&&(sr.indexOf(o)<0&&sr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener($o):l.addEventListener("change",$o),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Sl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return up(i)})},timeline:function(t){return new Mn(t)},getTweensOf:function(t,e){return Be.getTweensOf(t,e)},getProperty:function(t,e,n,i){nn(t)&&(t=_i(t)[0]);var r=As(t||{}).get,o=n?Qd:Kd;return n==="native"&&(n=""),t&&(e?o((qn[e]&&qn[e].get||r)(t,e,n,i)):function(a,l,c){return o((qn[a]&&qn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=_i(t),t.length>1){var i=t.map(function(h){return Tn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=qn[e],a=As(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Fr._pt=0,d.init(t,n?h+n:h,Fr,0,[t]),d.render(1,d),Fr._pt&&Au(1,Fr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Tn.to(t,si((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ir(t.ease,Xo.ease)),Fd(Xo,t||{})},config:function(t){return Fd(Jn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!qn[a]&&!ii[a]&&qo(e+" effect requires "+a+" plugin.")}),$h[e]=function(a,l,c){return n(_i(a),si(l||{},r),c)},o&&(Mn.prototype[e]=function(a,l,c){return this.add($h[e](a,zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ue[t]=ir(e)},parseEase:function(t,e){return arguments.length?ir(t,e):ue},getById:function(t){return Be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Mn(t),i,r;for(n.smoothChildTiming=Zn(t.smoothChildTiming),Be.remove(n),n._dp=0,n._time=n._tTime=Be._time,i=Be._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Xe&&i.vars.onComplete===i._targets[0]))&&Bi(n,i,i._start-i._delay),i=r;return Bi(Be,n,0),n},context:function(t,e){return t?new xp(t,e):De},matchMedia:function(t){return new C0(t)},matchMediaRefresh:function(){return sr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||$o()},addEventListener:function(t,e){var n=pl[t]||(pl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=pl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:r0,wrapYoyo:o0,distribute:rp,random:ap,snap:op,normalize:s0,getUnit:pn,clamp:t0,splitColor:fp,toArray:_i,selector:au,mapRange:cp,pipe:n0,unitize:i0,interpolate:a0,shuffle:sp},install:Yd,effects:$h,ticker:Yn,updateRoot:Mn.updateRoot,plugins:qn,globalTimeline:Be,core:{PropTween:Fn,globals:Zd,Tween:Xe,Timeline:Mn,Animation:Jo,getCache:As,_removeLinkedListItem:Tl,reverting:function(){return dn},context:function(t){return t&&De&&(De.data.push(t),t._ctx=De),De},suppressOverwrites:function(t){return hu=t}}};On("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Sl[s]=Xe[s]});Yn.add(Mn.updateRoot);Fr=Sl.to({},{duration:0});var R0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},P0=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=R0(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},eu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(nn(r)&&(l={},On(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}P0(a,r)}}}},Tn=Sl.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},eu("roundProps",lu),eu("modifiers"),eu("snap",op))||Sl;Xe.version=Mn.version=Tn.version="3.15.1";qd=1;uu()&&Vr();var I0=ue.Power0,L0=ue.Power1,D0=ue.Power2,N0=ue.Power3,U0=ue.Power4,O0=ue.Linear,F0=ue.Quad,B0=ue.Cubic,z0=ue.Quart,k0=ue.Quint,V0=ue.Strong,G0=ue.Elastic,H0=ue.Back,W0=ue.SteppedEase,X0=ue.Bounce,q0=ue.Sine,Y0=ue.Expo,Z0=ue.Circ;var vp,Ps,Wr,Nu,ur,J0,yp,Uu,$0=function(){return typeof window!="undefined"},ss={},hr=180/Math.PI,Xr=Math.PI/180,Hr=Math.atan2,Sp=1e8,Ou=/([A-Z])/g,K0=/(left|right|width|margin|padding|x)/i,Q0=/[\s,\(]\S/,ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},j0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},tx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ex=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},nx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Rp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Pp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},ix=function(t,e,n){return t.style[e]=n},sx=function(t,e,n){return t.style.setProperty(e,n)},rx=function(t,e,n){return t._gsap[e]=n},ox=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ax=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},lx=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},ze="transform",$n=ze+"Origin",cx=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in ss&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ki[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=is(i,a)}):this.tfm[t]=o.x?o[t]:is(i,t),t===$n&&(this.tfm.zOrigin=o.zOrigin);else return ki.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(ze)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($n,e,"")),t=ze}(r||e)&&this.props.push(t,e,r[t])},Ip=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},hx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Ou,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Uu(),(!r||!r.isStart)&&!n[ze]&&(Ip(n),i.zOrigin&&n[$n]&&(n[$n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Lp=function(t,e){var n={target:t,props:[],revert:hx,save:cx};return t._gsap||Tn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Dp,Iu=function(t,e){var n=Ps.createElementNS?Ps.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ps.createElement(t);return n&&n.style?n:Ps.createElement(t)},ri=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ou,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,qr(e)||e,1)||""},Mp="O,Moz,ms,Ms,Webkit".split(","),qr=function(t,e,n){var i=e||ur,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Mp[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Mp[o]:"")+t},Lu=function(){$0()&&window.document&&(vp=window,Ps=vp.document,Wr=Ps.documentElement,ur=Iu("div")||{style:{}},J0=Iu("div"),ze=qr(ze),$n=ze+"Origin",ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Dp=!!qr("perspective"),Uu=Tn.core.reverting,Nu=1)},bp=function(t){var e=t.ownerSVGElement,n=Iu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Wr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Wr.removeChild(n),r},Tp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Np=function(t){var e,n;try{e=t.getBBox()}catch{e=bp(t),n=1}return e&&(e.width||e.height)||n||(e=bp(t)),e&&!e.width&&!e.x&&!e.y?{x:+Tp(t,["x","cx","x1"])||0,y:+Tp(t,["y","cy","y1"])||0,width:0,height:0}:e},Up=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Np(t))},Ls=function(t,e){if(e){var n=t.style,i;e in ss&&e!==$n&&(e=ze),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ou,"-$1").toLowerCase())):n.removeAttribute(e)}},Is=function(t,e,n,i,r,o){var a=new Fn(t._pt,e,n,0,1,o?Pp:Rp);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},wp={deg:1,rad:1,turn:1},ux={grid:1,flex:1},Ds=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=ur.style,l=K0.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",m,x,p,g;if(i===o||!r||wp[i]||wp[o])return r;if(o!=="px"&&!u&&(r=s(t,e,n,"px")),g=t.getCTM&&Up(t),(f||o==="%")&&(ss[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],He(f?r/m*d:r/100*m);if(a[l?"width":"height"]=d+(u?o:i),x=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(x=(t.ownerSVGElement||{}).parentNode),(!x||x===Ps||!x.appendChild)&&(x=Ps.body),p=x._gsap,p&&f&&p.width&&l&&p.time===Yn.time&&!p.uncache)return He(r/p.width*d);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,m=t[h],v?t.style[e]=v:Ls(t,e)}else(f||o==="%")&&!ux[ri(x,"display")]&&(a.position=ri(t,"position")),x===t&&(a.position="static"),x.appendChild(ur),m=ur[h],x.removeChild(ur),a.position="absolute";return l&&f&&(p=As(x),p.time=Yn.time,p.width=x[h]),He(u?m*r/d:m&&r?d/m*r:0)},is=function(t,e,n,i){var r;return Nu||Lu(),e in ki&&e!=="transform"&&(e=ki[e],~e.indexOf(",")&&(e=e.split(",")[0])),ss[e]&&e!=="transform"?(r=ta(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Rl(ri(t,$n))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Cl[e]&&Cl[e](t,e,n)||ri(t,e)||xu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ds(t,e,r,n)+n:r},fx=function(t,e,n,i){if(!n||n==="none"){var r=qr(e,t,1),o=r&&ri(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=ri(t,"borderTopColor"))}var a=new Fn(this._pt,t.style,e,0,1,Eu),l=0,c=0,h,d,u,f,m,x,p,g,v,T,y,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ri(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=t.style[e],t.style[e]=i,i=ri(t,e)||i,x?t.style[e]=x:Ls(t,e)),h=[n,i],yu(h),n=h[0],i=h[1],u=n.match(rr)||[],w=i.match(rr)||[],w.length){for(;d=rr.exec(i);)p=d[0],v=i.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(x=u[c++]||"")&&(f=parseFloat(x)||0,y=x.substr((f+"").length),p.charAt(1)==="="&&(p=or(f,p)+y),g=parseFloat(p),T=p.substr((g+"").length),l=rr.lastIndex-T.length,T||(T=T||Jn.units[e]||y,l===i.length&&(i+=T,a.e+=T)),y!==T&&(f=Ds(t,e,x,T)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:g-f,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Pp:Rp;return du.test(i)&&(a.e=0),this._pt=a,a},Ep={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},dx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ep[n]||n,e[1]=Ep[i]||i,e.join(" ")},px=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ss[a]&&(l=1,a=a==="transformOrigin"?$n:ze),Ls(n,a);l&&(Ls(n,ze),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ta(n,1),o.uncache=1,Ip(i)))}},Cl={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Fn(t._pt,e,n,0,0,px);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},jo=[1,0,0,1,0,0],Op={},Fp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ap=function(t){var e=ri(t,ze);return Fp(e)?jo:e.substr(7).match(fu).map(He)},Fu=function(t,e){var n=t._gsap||As(t),i=t.style,r=Ap(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?jo:r):(r===jo&&!t.offsetParent&&t!==Wr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Wr.appendChild(t)),r=Ap(t),l?i.display=l:Ls(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Wr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Du=function(t,e,n,i,r,o){var a=t._gsap,l=r||Fu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],m=l[1],x=l[2],p=l[3],g=l[4],v=l[5],T=e.split(" "),y=parseFloat(T[0])||0,w=parseFloat(T[1])||0,E,_,b,P;n?l!==jo&&(_=f*p-m*x)&&(b=y*(p/_)+w*(-x/_)+(x*v-p*g)/_,P=y*(-m/_)+w*(f/_)-(f*v-m*g)/_,y=b,w=P):(E=Np(t),y=E.x+(~T[0].indexOf("%")?y/100*E.width:y),w=E.y+(~(T[1]||T[0]).indexOf("%")?w/100*E.height:w)),i||i!==!1&&a.smooth?(g=y-c,v=w-h,a.xOffset=d+(g*f+v*x)-g,a.yOffset=u+(g*m+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[$n]="0px 0px",o&&(Is(o,a,"xOrigin",c,y),Is(o,a,"yOrigin",h,w),Is(o,a,"xOffset",d,a.xOffset),Is(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+w)},ta=function(t,e){var n=t._gsap||new Su(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ri(t,$n)||"0",h,d,u,f,m,x,p,g,v,T,y,w,E,_,b,P,R,D,N,H,I,F,z,O,$,W,C,Q,bt,zt,Z,rt;return h=d=u=x=p=g=v=T=y=0,f=m=1,n.svg=!!(t.getCTM&&Up(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),i.scale=i.rotate=i.translate="none"),_=Fu(t,n.svg),n.svg&&(n.uncache?($=t.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),Du(t,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,_)),w=n.xOrigin||0,E=n.yOrigin||0,_!==jo&&(D=_[0],N=_[1],H=_[2],I=_[3],h=F=_[4],d=z=_[5],_.length===6?(f=Math.sqrt(D*D+N*N),m=Math.sqrt(I*I+H*H),x=D||N?Hr(N,D)*hr:0,v=H||I?Hr(H,I)*hr+x:0,v&&(m*=Math.abs(Math.cos(v*Xr))),n.svg&&(h-=w-(w*D+E*H),d-=E-(w*N+E*I))):(rt=_[6],zt=_[7],C=_[8],Q=_[9],bt=_[10],Z=_[11],h=_[12],d=_[13],u=_[14],b=Hr(rt,bt),p=b*hr,b&&(P=Math.cos(-b),R=Math.sin(-b),O=F*P+C*R,$=z*P+Q*R,W=rt*P+bt*R,C=F*-R+C*P,Q=z*-R+Q*P,bt=rt*-R+bt*P,Z=zt*-R+Z*P,F=O,z=$,rt=W),b=Hr(-H,bt),g=b*hr,b&&(P=Math.cos(-b),R=Math.sin(-b),O=D*P-C*R,$=N*P-Q*R,W=H*P-bt*R,Z=I*R+Z*P,D=O,N=$,H=W),b=Hr(N,D),x=b*hr,b&&(P=Math.cos(b),R=Math.sin(b),O=D*P+N*R,$=F*P+z*R,N=N*P-D*R,z=z*P-F*R,D=O,F=$),p&&Math.abs(p)+Math.abs(x)>359.9&&(p=x=0,g=180-g),f=He(Math.sqrt(D*D+N*N+H*H)),m=He(Math.sqrt(z*z+rt*rt)),b=Hr(F,z),v=Math.abs(b)>2e-4?b*hr:0,y=Z?1/(Z<0?-Z:Z):0),n.svg&&(O=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Fp(ri(t,ze)),O&&t.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=x<=0?180:-180,x+=x<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=He(f),n.scaleY=He(m),n.rotation=He(x)+a,n.rotationX=He(p)+a,n.rotationY=He(g)+a,n.skewX=v+a,n.skewY=T+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[$n]=Rl(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?gx:Dp?Bp:mx,n.uncache=0,n},Rl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ru=function(t,e,n){var i=pn(e);return He(parseFloat(e)+parseFloat(Ds(t,"x",n+"px",i)))+i},mx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Bp(t,e)},lr="0deg",Qo="0px",cr=") ",Bp=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,x=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,T=n.zOrigin,y="",w=g==="auto"&&t&&t!==1||g===!0;if(T&&(d!==lr||h!==lr)){var E=parseFloat(h)*Xr,_=Math.sin(E),b=Math.cos(E),P;E=parseFloat(d)*Xr,P=Math.cos(E),o=Ru(v,o,_*P*-T),a=Ru(v,a,-Math.sin(E)*-T),l=Ru(v,l,b*P*-T+T)}p!==Qo&&(y+="perspective("+p+cr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(w||o!==Qo||a!==Qo||l!==Qo)&&(y+=l!==Qo||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+cr),c!==lr&&(y+="rotate("+c+cr),h!==lr&&(y+="rotateY("+h+cr),d!==lr&&(y+="rotateX("+d+cr),(u!==lr||f!==lr)&&(y+="skew("+u+", "+f+cr),(m!==1||x!==1)&&(y+="scale("+m+", "+x+cr),v.style[ze]=y||"translate(0, 0)"},gx=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,x=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,T=parseFloat(o),y=parseFloat(a),w,E,_,b,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Xr,c*=Xr,w=Math.cos(l)*d,E=Math.sin(l)*d,_=Math.sin(l-c)*-u,b=Math.cos(l-c)*u,c&&(h*=Xr,P=Math.tan(c-h),P=Math.sqrt(1+P*P),_*=P,b*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),w*=P,E*=P)),w=He(w),E=He(E),_=He(_),b=He(b)):(w=d,b=u,E=_=0),(T&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(T=Ds(f,"x",o,"px"),y=Ds(f,"y",a,"px")),(m||x||p||g)&&(T=He(T+m-(m*w+x*_)+p),y=He(y+x-(m*E+x*b)+g)),(i||r)&&(P=f.getBBox(),T=He(T+i/100*P.width),y=He(y+r/100*P.height)),P="matrix("+w+","+E+","+_+","+b+","+T+","+y+")",f.setAttribute("transform",P),v&&(f.style[ze]=P)},_x=function(t,e,n,i,r){var o=360,a=nn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?hr:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Sp)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Sp)%o-~~(c/o)*o)),t._pt=u=new Fn(t._pt,e,n,i,c,j0),u.e=h,u.u="deg",t._props.push(n),u},Cp=function(t,e){for(var n in e)t[n]=e[n];return t},xx=function(t,e,n){var i=Cp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ze]=e,a=ta(n,1),Ls(n,ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ze],o[ze]=e,a=ta(n,1),o[ze]=c);for(l in ss)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=pn(c),m=pn(h),d=f!==m?Ds(n,l,c,m):parseFloat(c),u=parseFloat(h),t._pt=new Fn(t._pt,a,l,d,u-d,Pu),t._pt.u=m||0,t._props.push(l));Cp(a,i)};On("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Cl[t>1?"border"+s:s]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(m){return is(a,m,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(m,x){return f[m]=u[x]=u[x]||u[(x-1)/2|0]}),a.init(l,f,d)}});var Bu={name:"css",register:Lu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,m,x,p,g,v,T,y,w,E,_,b,P;Nu||Lu(),this.styles=this.styles||Lp(t),b=this.styles.props,this.tween=n;for(x in e)if(x!=="autoRound"&&(h=e[x],!(qn[x]&&bu(x,e,n,i,t,r)))){if(f=typeof h,m=Cl[x],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Gr(h)),m)m(this,t,x,h,n)&&(_=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(x)+"").trim(),h+="",es.lastIndex=0,es.test(c)||(p=pn(c),g=pn(h),g?p!==g&&(c=Ds(t,x,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,i,r,0,0,x),o.push(x),b.push(x,0,a[x]);else if(f!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,t,r):l[x],nn(c)&&~c.indexOf("random(")&&(c=Gr(c)),pn(c+"")||c==="auto"||(c+=Jn.units[x]||pn(is(t,x))||""),(c+"").charAt(1)==="="&&(c=is(t,x))):c=is(t,x),u=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),x in ki&&(x==="autoAlpha"&&(u===1&&is(t,"visibility")==="hidden"&&d&&(u=0),b.push("visibility",0,a.visibility),Is(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),x!=="scale"&&x!=="transform"&&(x=ki[x],~x.indexOf(",")&&(x=x.split(",")[0]))),T=x in ss,T){if(this.styles.save(x),P=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ri(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=h,h=ri(t,"perspective"),R?t.style.perspective=R:Ls(t,"perspective")}d=parseFloat(h)}if(y||(w=t._gsap,w.renderTransform&&!e.parseTransform||ta(t,e.parseTransform),E=e.smoothOrigin!==!1&&w.smooth,y=this._pt=new Fn(this._pt,a,ze,0,1,w.renderTransform,w,0,-1),y.dep=1),x==="scale")this._pt=new Fn(this._pt,w,"scaleY",w.scaleY,(v?or(w.scaleY,v+d):d)-w.scaleY||0,Pu),this._pt.u=0,o.push("scaleY",x),x+="X";else if(x==="transformOrigin"){b.push($n,0,a[$n]),h=dx(h),w.svg?Du(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==w.zOrigin&&Is(this,w,"zOrigin",w.zOrigin,g),Is(this,a,x,Rl(c),Rl(h)));continue}else if(x==="svgOrigin"){Du(t,h,1,E,0,this);continue}else if(x in Op){_x(this,w,x,u,v?or(u,v+h):h);continue}else if(x==="smoothOrigin"){Is(this,w,"smooth",w.smooth,h);continue}else if(x==="force3D"){w[x]=h;continue}else if(x==="transform"){xx(this,h,t);continue}}else x in a||(x=qr(x)||x);if(T||(d||d===0)&&(u||u===0)&&!Q0.test(h)&&x in a)p=(c+"").substr((u+"").length),d||(d=0),g=pn(h)||(x in Jn.units?Jn.units[x]:p),p!==g&&(u=Ds(t,x,c,g)),this._pt=new Fn(this._pt,T?w:a,x,u,(v?or(u,v+d):d)-u,!T&&(g==="px"||x==="zIndex")&&e.autoRound!==!1?nx:Pu),this._pt.u=g||0,T&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=ex):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=tx);else if(x in a)fx.call(this,t,x,c,v?v+h:h);else if(x in t)this.add(t,x,c||t[x],v?v+h:h,i,r);else if(x!=="parseTransform"){bl(x,h);continue}T||(x in a?b.push(x,0,a[x]):typeof t[x]=="function"?b.push(x,2,t[x]()):b.push(x,1,c||t[x])),o.push(x)}}_&&Cu(this)},render:function(t,e){if(e.tween._time||!Uu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:is,aliases:ki,getSetter:function(t,e,n){var i=ki[e];return i&&i.indexOf(",")<0&&(e=i),e in ss&&e!==$n&&(t._gsap.x||is(t,"x"))?n&&yp===n?e==="scale"?ox:rx:(yp=n||{})&&(e==="scale"?ax:lx):t.style&&!Ml(t.style[e])?ix:~e.indexOf("-")?sx:Al(t,e)},core:{_removeProperty:Ls,_getMatrix:Fu}};Tn.utils.checkPrefix=qr;Tn.core.getStyleSaver=Lp;(function(s,t,e,n){var i=On(s+","+t+","+e,function(r){ss[r]=1});On(t,function(r){Jn.units[r]="deg",Op[r]=1}),ki[i[13]]=s+","+t,On(n,function(r){var o=r.split(":");ki[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Jn.units[s]="px"});Tn.registerPlugin(Bu);var qe=Tn.registerPlugin(Bu)||Tn,WT=qe.core.Tween;function zp(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function vx(s,t,e){return t&&zp(s.prototype,t),e&&zp(s,e),s}var mn,Ll,yx,Kn,Ns,Us,Zr,Vp,fr,Jr,Gp,rs,Ei,Hp,Wp=function(){return mn||typeof window!="undefined"&&(mn=window.gsap)&&mn.registerPlugin&&mn},Xp=1,Yr=[],Kt=[],Ai=[],na=Date.now,zu=function(t,e){return e},Sx=function(){var t=Jr.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Kt),i.push.apply(i,Ai),Kt=n,Ai=i,zu=function(o,a){return e[o](a)}},as=function(t,e){return~Ai.indexOf(t)&&Ai[Ai.indexOf(t)+1][e]},ia=function(t){return!!~Gp.indexOf(t)},zn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},Bn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Pl="scrollLeft",Il="scrollTop",ku=function(){return rs&&rs.isPressed||Kt.cache++},Dl=function(t,e){var n=function i(r){if(r||r===0){Xp&&Kn.history.scrollRestoration!=="manual"&&(Kn.history.scrollRestoration="manual");var o=rs&&rs.isPressed;r=i.v=Math.round(r)||(rs&&rs.iOS?1:0),t(r),i.cacheID=Kt.cache,o&&zu("ss",r)}else(e||Kt.cache!==i.cacheID||zu("ref"))&&(i.cacheID=Kt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},wn={s:Pl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Dl(function(s){return arguments.length?Kn.scrollTo(s,$e.sc()):Kn.pageXOffset||Ns[Pl]||Us[Pl]||Zr[Pl]||0})},$e={s:Il,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:Dl(function(s){return arguments.length?Kn.scrollTo(wn.sc(),s):Kn.pageYOffset||Ns[Il]||Us[Il]||Zr[Il]||0})},kn=function(t,e){return(e&&e._ctx&&e._ctx.selector||mn.utils.toArray)(t)[0]||(typeof t=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Mx=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},os=function(t,e){var n=e.s,i=e.sc;ia(t)&&(t=Ns.scrollingElement||Us);var r=Kt.indexOf(t),o=i===$e.sc?1:2;!~r&&(r=Kt.push(t)-1),Kt[r+o]||zn(t,"scroll",ku);var a=Kt[r+o],l=a||(Kt[r+o]=Dl(as(t,n),!0)||(ia(t)?i:Dl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=mn.getProperty(t,"scrollBehavior")==="smooth"),l},Nl=function(t,e,n){var i=t,r=t,o=na(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,x){var p=na();x||p-o>l?(r=i,i=m,a=o,o=p):n?i+=m:i=r+(m-r)/(p-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},u=function(m){var x=a,p=r,g=na();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-x)*1e3};return{update:h,reset:d,getVelocity:u}},ea=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},kp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},qp=function(){Jr=mn.core.globals().ScrollTrigger,Jr&&Jr.core&&Sx()},Yp=function(t){return mn=t||Wp(),!Ll&&mn&&typeof document!="undefined"&&document.body&&(Kn=window,Ns=document,Us=Ns.documentElement,Zr=Ns.body,Gp=[Kn,Ns,Us,Zr],yx=mn.utils.clamp,Hp=mn.core.context||function(){},fr="onpointerenter"in Zr?"pointer":"mouse",Vp=We.isTouch=Kn.matchMedia&&Kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=We.eventTypes=("ontouchstart"in Us?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Us?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Xp=0},500),Ll=1),Jr||qp(),Ll};wn.op=$e;Kt.cache=0;var We=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Ll||Yp(mn)||console.warn("Please gsap.registerPlugin(Observer)"),Jr||qp();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,x=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,T=n.onPress,y=n.onRelease,w=n.onRight,E=n.onLeft,_=n.onUp,b=n.onDown,P=n.onChangeX,R=n.onChangeY,D=n.onChange,N=n.onToggleX,H=n.onToggleY,I=n.onHover,F=n.onHoverEnd,z=n.onMove,O=n.ignoreCheck,$=n.isNormalizer,W=n.onGestureStart,C=n.onGestureEnd,Q=n.onWheel,bt=n.onEnable,zt=n.onDisable,Z=n.onClick,rt=n.scrollSpeed,yt=n.capture,vt=n.allowClicks,ct=n.lockAxis,Pt=n.onLockAxis;this.target=a=kn(a)||Us,this.vars=n,f&&(f=mn.utils.toArray(f)),i=i||1e-9,r=r||0,m=m||1,rt=rt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Kn.getComputedStyle(Zr).lineHeight)||22);var fe,At,Ht,It,Ot,jt,ce,q=this,$t=0,ye=0,me=n.passive||!h&&n.passive!==!1,ie=os(a,wn),Ae=os(a,$e),Ue=ie(),B=Ae(),_t=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ei[0]==="pointerdown",Dt=ia(a),kt=a.ownerDocument||Ns,ut=[0,0,0],he=[0,0,0],Ct=0,Vt=function(){return Ct=na()},A=function(mt,st){return(q.event=mt)&&f&&Mx(mt.target,f)||st&&_t&&mt.pointerType!=="touch"||O&&O(mt,st)},S=function(){q._vx.reset(),q._vy.reset(),At.pause(),d&&d(q)},V=function(){var mt=q.deltaX=kp(ut),st=q.deltaY=kp(he),et=Math.abs(mt)>=i,xt=Math.abs(st)>=i;D&&(et||xt)&&D(q,mt,st,ut,he),et&&(w&&q.deltaX>0&&w(q),E&&q.deltaX<0&&E(q),P&&P(q),N&&q.deltaX<0!=$t<0&&N(q),$t=q.deltaX,ut[0]=ut[1]=ut[2]=0),xt&&(b&&q.deltaY>0&&b(q),_&&q.deltaY<0&&_(q),R&&R(q),H&&q.deltaY<0!=ye<0&&H(q),ye=q.deltaY,he[0]=he[1]=he[2]=0),(It||Ht)&&(z&&z(q),Ht&&(p&&Ht===1&&p(q),v&&v(q),Ht=0),It=!1),jt&&!(jt=!1)&&Pt&&Pt(q),Ot&&(Q(q),Ot=!1),fe=0},ot=function(mt,st,et){ut[et]+=mt,he[et]+=st,q._vx.update(mt),q._vy.update(st),c?fe||(fe=requestAnimationFrame(V)):V()},it=function(mt,st){ct&&!ce&&(q.axis=ce=Math.abs(mt)>Math.abs(st)?"x":"y",jt=!0),ce!=="y"&&(ut[2]+=mt,q._vx.update(mt,!0)),ce!=="x"&&(he[2]+=st,q._vy.update(st,!0)),c?fe||(fe=requestAnimationFrame(V)):V()},ft=function(mt){if(!A(mt,1)){mt=ea(mt,h);var st=mt.clientX,et=mt.clientY,xt=st-q.x,nt=et-q.y,wt=q.isDragging;q.x=st,q.y=et,(wt||(xt||nt)&&(Math.abs(q.startX-st)>=r||Math.abs(q.startY-et)>=r))&&(Ht||(Ht=wt?2:1),wt||(q.isDragging=!0),it(xt,nt))}},gt=q.onPress=function(at){A(at,1)||at&&at.button||(q.axis=ce=null,At.pause(),q.isPressed=!0,at=ea(at),$t=ye=0,q.startX=q.x=at.clientX,q.startY=q.y=at.clientY,q._vx.reset(),q._vy.reset(),zn($?a:kt,Ei[1],ft,me,!0),q.deltaX=q.deltaY=0,T&&T(q))},G=q.onRelease=function(at){if(!A(at,1)){Bn($?a:kt,Ei[1],ft,!0);var mt=!isNaN(q.y-q.startY),st=q.isDragging,et=st&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),xt=ea(at);!et&&mt&&(q._vx.reset(),q._vy.reset(),h&&vt&&mn.delayedCall(.08,function(){if(na()-Ct>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(kt.createEvent){var nt=kt.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,Kn,1,xt.screenX,xt.screenY,xt.clientX,xt.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(nt)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,d&&st&&!$&&At.restart(!0),Ht&&V(),g&&st&&g(q),y&&y(q,et)}},tt=function(mt){return mt.touches&&mt.touches.length>1&&(q.isGesturing=!0)&&W(mt,q.isDragging)},ht=function(){return(q.isGesturing=!1)||C(q)},L=function(mt){if(!A(mt)){var st=ie(),et=Ae();ot((st-Ue)*rt,(et-B)*rt,1),Ue=st,B=et,d&&At.restart(!0)}},j=function(mt){if(!A(mt)){mt=ea(mt,h),Q&&(Ot=!0);var st=(mt.deltaMode===1?l:mt.deltaMode===2?Kn.innerHeight:1)*m;ot(mt.deltaX*st,mt.deltaY*st,0),d&&!$&&At.restart(!0)}},K=function(mt){if(!A(mt)){var st=mt.clientX,et=mt.clientY,xt=st-q.x,nt=et-q.y;q.x=st,q.y=et,It=!0,d&&At.restart(!0),(xt||nt)&&it(xt,nt)}},dt=function(mt){q.event=mt,I(q)},lt=function(mt){q.event=mt,F(q)},pt=function(mt){return A(mt)||ea(mt,h)&&Z(q)};At=q._dc=mn.delayedCall(u||.25,S).pause(),q.deltaX=q.deltaY=0,q._vx=Nl(0,50,!0),q._vy=Nl(0,50,!0),q.scrollX=ie,q.scrollY=Ae,q.isDragging=q.isGesturing=q.isPressed=!1,Hp(this),q.enable=function(at){return q.isEnabled||(zn(Dt?kt:a,"scroll",ku),o.indexOf("scroll")>=0&&zn(Dt?kt:a,"scroll",L,me,yt),o.indexOf("wheel")>=0&&zn(a,"wheel",j,me,yt),(o.indexOf("touch")>=0&&Vp||o.indexOf("pointer")>=0)&&(zn(a,Ei[0],gt,me,yt),zn(kt,Ei[2],G),zn(kt,Ei[3],G),vt&&zn(a,"click",Vt,!0,!0),Z&&zn(a,"click",pt),W&&zn(kt,"gesturestart",tt),C&&zn(kt,"gestureend",ht),I&&zn(a,fr+"enter",dt),F&&zn(a,fr+"leave",lt),z&&zn(a,fr+"move",K)),q.isEnabled=!0,q.isDragging=q.isGesturing=q.isPressed=It=Ht=!1,q._vx.reset(),q._vy.reset(),Ue=ie(),B=Ae(),at&&at.type&&gt(at),bt&&bt(q)),q},q.disable=function(){q.isEnabled&&(Yr.filter(function(at){return at!==q&&ia(at.target)}).length||Bn(Dt?kt:a,"scroll",ku),q.isPressed&&(q._vx.reset(),q._vy.reset(),Bn($?a:kt,Ei[1],ft,!0)),Bn(Dt?kt:a,"scroll",L,yt),Bn(a,"wheel",j,yt),Bn(a,Ei[0],gt,yt),Bn(kt,Ei[2],G),Bn(kt,Ei[3],G),Bn(a,"click",Vt,!0),Bn(a,"click",pt),Bn(kt,"gesturestart",tt),Bn(kt,"gestureend",ht),Bn(a,fr+"enter",dt),Bn(a,fr+"leave",lt),Bn(a,fr+"move",K),q.isEnabled=q.isPressed=q.isDragging=!1,zt&&zt(q))},q.kill=q.revert=function(){q.disable();var at=Yr.indexOf(q);at>=0&&Yr.splice(at,1),rs===q&&(rs=0)},Yr.push(q),$&&ia(a)&&(rs=q),q.enable(x)},vx(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();We.version="3.15.1";We.create=function(s){return new We(s)};We.register=Yp;We.getAll=function(){return Yr.slice()};We.getById=function(s){return Yr.filter(function(t){return t.vars.id===s})[0]};Wp()&&mn.registerPlugin(We);var Rt,jr,ee,ve,li,_e,tf,$l,ga,ha,ra,Ul,En,jl,Yu,Gn,Zp,Jp,to,um,Vu,fm,Vn,Zu,dm,pm,Os,Ju,ef,eo,nf,Fs,$u,Gu,Ol=1,An=Date.now,Hu=An(),yi=0,oa=0,$p=function(t,e,n){var i=ai(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Kp=function(t,e){return e&&(!ai(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},bx=function s(){return oa&&requestAnimationFrame(s)},Qp=function(){return jl=1},jp=function(){return jl=0},Vi=function(t){return t},aa=function(t){return Math.round(t*1e5)/1e5||0},mm=function(){return typeof window!="undefined"},gm=function(){return Rt||mm()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},xr=function(t){return!!~tf.indexOf(t)},_m=function(t){return(t==="Height"?nf:ee["inner"+t])||li["client"+t]||_e["client"+t]},xm=function(t){return as(t,"getBoundingClientRect")||(xr(t)?function(){return Jl.width=ee.innerWidth,Jl.height=nf,Jl}:function(){return ls(t)})},Tx=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=as(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?_m(r):t["client"+r])||0}},wx=function(t,e){return!e||~Ai.indexOf(t)?xm(t):function(){return Jl}},Gi=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=as(t,n))?o()-xm(t)()[r]:xr(t)?(li[n]||_e[n])-_m(i):t[n]-t["offset"+i])},Fl=function(t,e){for(var n=0;n<to.length;n+=3)(!e||~e.indexOf(to[n+1]))&&t(to[n],to[n+1],to[n+2])},ai=function(t){return typeof t=="string"},Cn=function(t){return typeof t=="function"},la=function(t){return typeof t=="number"},dr=function(t){return typeof t=="object"},sa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},$r=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Kr=Math.abs,vm="left",ym="top",sf="right",rf="bottom",mr="width",gr="height",ua="Right",fa="Left",da="Top",pa="Bottom",Ke="padding",xi="margin",io="Width",of="Height",sn="px",vi=function(t){return ee.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Ex=function(t){var e=vi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},tm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ls=function(t,e){var n=e&&vi(t)[Yu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Kl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Sm=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},Ax=function(t){return function(e){return Rt.utils.snap(Sm(t),e)}},af=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},Cx=function(t){return function(e,n){return af(Sm(t))(e,n.direction)}},Bl=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},cn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},ln=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},zl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},em={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},kl={toggleActions:"play",anticipatePin:0},Ql={top:0,left:0,center:.5,bottom:1,right:1},Xl=function(t,e){if(ai(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Ql?Ql[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Vl=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,u=r.indent,f=r.fontWeight,m=ve.createElement("div"),x=xr(n)||as(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=x?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,T=v?c:h,y="border-color:"+T+";font-size:"+d+";color:"+T+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&x?"fixed;":"absolute;"),(p||l||!x)&&(y+=(i===$e?sf:rf)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],ql(m,0,i,v),m},ql=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+io]=1,r["border"+a+io]=0,r[n.p]=e+"px",Rt.set(t,r)},te=[],Ku={},_a,nm=function(){return An()-yi>34&&(_a||(_a=requestAnimationFrame(cs)))},Qr=function(){(!Vn||!Vn.isPressed||Vn.startX>_e.clientWidth)&&(Kt.cache++,Vn?_a||(_a=requestAnimationFrame(cs)):cs(),yi||yr("scrollStart"),yi=An())},Wu=function(){pm=ee.innerWidth,dm=ee.innerHeight},ca=function(t){Kt.cache++,(t===!0||!En&&!fm&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!Zu||pm!==ee.innerWidth||Math.abs(ee.innerHeight-dm)>ee.innerHeight*.25))&&$l.restart(!0)},vr={},Rx=[],Mm=function s(){return ln(Jt,"scrollEnd",s)||pr(!0)},yr=function(t){return vr[t]&&vr[t].map(function(e){return e()})||Rx},oi=[],bm=function(t){for(var e=0;e<oi.length;e+=5)(!t||oi[e+4]&&oi[e+4].query===t)&&(oi[e].style.cssText=oi[e+1],oi[e].getBBox&&oi[e].setAttribute("transform",oi[e+2]||""),oi[e+3].uncache=1)},Tm=function(){Kt.cache++,Kt.forEach(function(t){return Cn(t)&&(t.rec=t())})},lf=function(t,e){var n;for(Gn=0;Gn<te.length;Gn++)n=te[Gn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Fs=!0,e&&bm(e),e||yr("revert")},wm=function(t,e){Kt.cache++,(e||!Hn)&&Kt.forEach(function(n){return Cn(n)&&n.cacheID++&&(n.rec=0)}),ai(t)&&(ef=t,ee.history.scrollRestoration!==t&&(ee.history.scrollRestoration=t))},Hn,_r=0,im,Px=function(){if(im!==_r){var t=im=_r;requestAnimationFrame(function(){return t===_r&&pr(!0)})}},Em=function(){_e.appendChild(eo),nf=!Vn&&eo.offsetHeight||ee.innerHeight,_e.removeChild(eo)},sm=function(t){return ga(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},pr=function(t,e){if(li=ve.documentElement,_e=ve.body,tf=[ee,ve,li,_e],yi&&!t&&!Fs){cn(Jt,"scrollEnd",Mm);return}Em(),Hn=Jt.isRefreshing=!0,Fs||Tm();var n=yr("refreshInit");um&&Jt.sort(),e||lf(),Kt.forEach(function(i){Cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),te.slice(0).forEach(function(i){return i.refresh()}),Fs=!1,te.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),$u=1,sm(!0),te.forEach(function(i){var r=Gi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),sm(!1),$u=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Kt.forEach(function(i){Cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),wm(ef,1),$l.pause(),_r++,Hn=2,cs(2),te.forEach(function(i){return Cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Hn=Jt.isRefreshing=!1,yr("refresh")},Qu=0,Yl=1,ma,cs=function(t){if(t===2||!Hn&&!Fs){Jt.isUpdating=!0,ma&&ma.update(0);var e=te.length,n=An(),i=n-Hu>=50,r=e&&te[0].scroll();if(Yl=Qu>r?-1:1,Hn||(Qu=r),i&&(yi&&!jl&&n-yi>200&&(yi=0,yr("scrollEnd")),ra=Hu,Hu=n),Yl<0){for(Gn=e;Gn-- >0;)te[Gn]&&te[Gn].update(0,i);Yl=1}else for(Gn=0;Gn<e;Gn++)te[Gn]&&te[Gn].update(0,i);Jt.isUpdating=!1}_a=0},ju=[vm,ym,rf,sf,xi+pa,xi+ua,xi+da,xi+fa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Zl=ju.concat([mr,gr,"boxSizing","max"+io,"max"+of,"position",xi,Ke,Ke+da,Ke+ua,Ke+pa,Ke+fa]),Ix=function(t,e,n){no(n);var i=t._gsap;if(i.spacerIsNative)no(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Xu=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=ju.length,o=e.style,a=t.style,l;r--;)l=ju[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[rf]=a[sf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[mr]=Kl(t,wn)+sn,o[gr]=Kl(t,$e)+sn,o[Ke]=a[xi]=a[ym]=a[vm]="0",no(i),a[mr]=a["max"+io]=n[mr],a[gr]=a["max"+of]=n[gr],a[Ke]=n[Ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Lx=/([A-Z])/g,no=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(Lx,"-$1").toLowerCase())}},Gl=function(t){for(var e=Zl.length,n=t.style,i=[],r=0;r<e;r++)i.push(Zl[r],n[Zl[r]]);return i.t=t,i},Dx=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Jl={left:0,top:0},rm=function(t,e,n,i,r,o,a,l,c,h,d,u,f,m){Cn(t)&&(t=t(l)),ai(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Xl("0"+t.substr(3),n):0));var x=f?f.time():0,p,g,v;if(f&&f.seek(0),isNaN(t)||(t=+t),la(t))f&&(t=Rt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&ql(a,n,i,!0);else{Cn(e)&&(e=e(l));var T=(t||"0").split(" "),y,w,E,_;v=kn(e,l)||_e,y=ls(v)||{},(!y||!y.left&&!y.top)&&vi(v).display==="none"&&(_=v.style.display,v.style.display="block",y=ls(v),_?v.style.display=_:v.style.removeProperty("display")),w=Xl(T[0],y[i.d]),E=Xl(T[1]||"0",n),t=y[i.p]-c[i.p]-h+w+r-E,a&&ql(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var b=t+n,P=o._isStart;p="scroll"+i.d2,ql(o,b,i,P&&b>20||!P&&(d?Math.max(_e[p],li[p]):o.parentNode[p])<=b+1),d&&(c=ls(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+sn))}return f&&v&&(p=ls(v),f.seek(u),g=ls(v),f._caScrollDist=p[i.p]-g[i.p],t=t/f._caScrollDist*u),f&&f.seek(x),f?t:Math.round(t)},Nx=/(webkit|moz|length|cssText|inset)/i,om=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===_e){t._stOrig=r.cssText,a=vi(t);for(o in a)!+o&&!Nx.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},Am=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Hl=function(t,e,n){var i={};i[e.p]="+="+n,Rt.set(t,i)},am=function(t,e){var n=os(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,m={};c=c||n();var x=Am(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return x(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){Kt.cache++,o.tween&&cs()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Rt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},cn(t,"wheel",n.wheelHandler),Jt.isTouch&&cn(t,"touchmove",n.wheelHandler),r},Jt=(function(){function s(e,n){jr||s.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ju(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!oa){this.update=this.refresh=this.kill=Vi;return}n=tm(ai(n)||la(n)||n.nodeType?{trigger:n}:n,kl);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,u=r.trigger,f=r.pin,m=r.pinSpacing,x=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,T=r.once,y=r.snap,w=r.pinReparent,E=r.pinSpacer,_=r.containerAnimation,b=r.fastScrollEnd,P=r.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:$e,D=!d&&d!==0,N=kn(n.scroller||ee),H=Rt.core.getCache(N),I=xr(N),F=("pinType"in n?n.pinType:as(N,"pinType")||I&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=D&&n.toggleActions.split(" "),$="markers"in n?n.markers:kl.markers,W=I?0:parseFloat(vi(N)["border"+R.p2+io])||0,C=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(C)},bt=Tx(N,I,R),zt=wx(N,I),Z=0,rt=0,yt=0,vt=os(N,R),ct,Pt,fe,At,Ht,It,Ot,jt,ce,q,$t,ye,me,ie,Ae,Ue,B,_t,Dt,kt,ut,he,Ct,Vt,A,S,V,ot,it,ft,gt,G,tt,ht,L,j,K,dt,lt;if(C._startClamp=C._endClamp=!1,C._dir=R,p*=45,C.scroller=N,C.scroll=_?_.time.bind(_):vt,At=vt(),Fs&&vt.rec==null&&(vt.rec=At),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(um=1,n.refreshPriority===-9999&&(ma=C)),H.tweenScroll=H.tweenScroll||{top:am(N,$e),left:am(N,wn)},C.tweenTo=ct=H.tweenScroll[R.p],C.scrubDuration=function(et){tt=la(et)&&et,tt?G?G.duration(et):G=Rt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return g&&g(C)}}):(G&&G.progress(1).kill(),G=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(d),ft=0,l||(l=i.vars.id)),y&&((!dr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in _e.style&&Rt.set(I?[_e,li]:N,{scrollBehavior:"auto"}),Kt.forEach(function(et){return Cn(et)&&et.target===(I?ve.scrollingElement||li:N)&&(et.smooth=!1)}),fe=Cn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Ax(i):y.snapTo==="labelsDirectional"?Cx(i):y.directional!==!1?function(et,xt){return af(y.snapTo)(et,An()-rt<500?0:xt.direction)}:Rt.utils.snap(y.snapTo),ht=y.duration||{min:.1,max:2},ht=dr(ht)?ha(ht.min,ht.max):ha(ht,ht),L=Rt.delayedCall(y.delay||tt/2||.1,function(){var et=vt(),xt=An()-rt<500,nt=ct.tween;if((xt||Math.abs(C.getVelocity())<10)&&!nt&&!jl&&Z!==et){var wt=(et-It)/ie,se=i&&!D?i.totalProgress():wt,Yt=xt?0:(se-gt)/(An()-ra)*1e3||0,Ie=Rt.utils.clamp(-wt,1-wt,Kr(Yt/2)*Yt/.185),Ye=wt+(y.inertia===!1?0:Ie),Le,Me,ge=y,je=ge.onStart,be=ge.onInterrupt,vn=ge.onComplete;if(Le=fe(Ye,C),la(Le)||(Le=Ye),Me=Math.max(0,Math.round(It+Le*ie)),et<=Ot&&et>=It&&Me!==et){if(nt&&!nt._initted&&nt.data<=Kr(Me-et))return;y.inertia===!1&&(Ie=Le-wt),ct(Me,{duration:ht(Kr(Math.max(Kr(Ye-se),Kr(Le-se))*.185/Yt/.05||0)),ease:y.ease||"power3",data:Kr(Me-et),onInterrupt:function(){return L.restart(!0)&&be&&$r(C,be)},onComplete:function(){C.update(),Z=vt(),i&&!D&&(G?G.resetTo("totalProgress",Le,i._tTime/i._tDur):i.progress(Le)),ft=gt=i&&!D?i.totalProgress():C.progress,v&&v(C),vn&&$r(C,vn)}},et,Ie*ie,Me-et-Ie*ie),je&&$r(C,je,ct.tween)}}else C.isActive&&Z!==et&&L.restart(!0)}).pause()),l&&(Ku[l]=C),u=C.trigger=kn(u||f!==!0&&f),lt=u&&u._gsap&&u._gsap.stRevert,lt&&(lt=lt(C)),f=f===!0?u:kn(f),ai(a)&&(a={targets:u,className:a}),f&&(m===!1||m===xi||(m=!m&&f.parentNode&&f.parentNode.style&&vi(f.parentNode).display==="flex"?!1:Ke),C.pin=f,Pt=Rt.core.getCache(f),Pt.spacer?Ae=Pt.pinState:(E&&(E=kn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Pt.spacerIsNative=!!E,E&&(Pt.spacerState=Gl(E))),Pt.spacer=_t=E||ve.createElement("div"),_t.classList.add("pin-spacer"),l&&_t.classList.add("pin-spacer-"+l),Pt.pinState=Ae=Gl(f)),n.force3D!==!1&&Rt.set(f,{force3D:!0}),C.spacer=_t=Pt.spacer,it=vi(f),Vt=it[m+R.os2],kt=Rt.getProperty(f),ut=Rt.quickSetter(f,R.a,sn),Xu(f,_t,it),B=Gl(f)),$){ye=dr($)?tm($,em):em,q=Vl("scroller-start",l,N,R,ye,0),$t=Vl("scroller-end",l,N,R,ye,0,q),Dt=q["offset"+R.op.d2];var pt=kn(as(N,"content")||N);jt=this.markerStart=Vl("start",l,pt,R,ye,Dt,0,_),ce=this.markerEnd=Vl("end",l,pt,R,ye,Dt,0,_),_&&(dt=Rt.quickSetter([jt,ce],R.a,sn)),!F&&!(Ai.length&&as(N,"fixedMarkers")===!0)&&(Ex(I?_e:N),Rt.set([q,$t],{force3D:!0}),S=Rt.quickSetter(q,R.a,sn),ot=Rt.quickSetter($t,R.a,sn))}if(_){var at=_.vars.onUpdate,mt=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){C.update(0,0,1),at&&at.apply(_,mt||[])})}if(C.previous=function(){return te[te.indexOf(C)-1]},C.next=function(){return te[te.indexOf(C)+1]},C.revert=function(et,xt){if(!xt)return C.kill(!0);var nt=et!==!1||!C.enabled,wt=En;nt!==C.isReverted&&(nt&&(j=Math.max(vt(),C.scroll.rec||0),yt=C.progress,K=i&&i.progress()),jt&&[jt,ce,q,$t].forEach(function(se){return se.style.display=nt?"none":"block"}),nt&&(En=C,C.update(nt)),f&&(!w||!C.isActive)&&(nt?Ix(f,_t,Ae):Xu(f,_t,vi(f),A)),nt||C.update(nt),En=wt,C.isReverted=nt)},C.refresh=function(et,xt,nt,wt){if(!((En||!C.enabled)&&!xt)){if(f&&et&&yi){cn(s,"scrollEnd",Mm);return}!Hn&&Q&&Q(C),En=C,ct.tween&&!nt&&(ct.tween.kill(),ct.tween=0),G&&G.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(k){return k.vars.immediateRender&&k.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var se=bt(),Yt=zt(),Ie=_?_.duration():Gi(N,R),Ye=ie<=.01||!ie,Le=0,Me=wt||0,ge=dr(nt)?nt.end:n.end,je=n.endTrigger||u,be=dr(nt)?nt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),vn=C.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,C),ti=u&&Math.max(0,te.indexOf(C))||0,ke=ti,Ze,tn,ei,Or,en,Ve,pi,zo,cl,bs,M,U,Y;for($&&dr(nt)&&(U=Rt.getProperty(q,R.p),Y=Rt.getProperty($t,R.p));ke-- >0;)Ve=te[ke],Ve.end||Ve.refresh(0,1)||(En=C),pi=Ve.pin,pi&&(pi===u||pi===f||pi===vn)&&!Ve.isReverted&&(bs||(bs=[]),bs.unshift(Ve),Ve.revert(!0,!0)),Ve!==te[ke]&&(ti--,ke--);for(Cn(be)&&(be=be(C)),be=$p(be,"start",C),It=rm(be,u,se,R,vt(),jt,q,C,Yt,W,F,Ie,_,C._startClamp&&"_startClamp")||(f?-.001:0),Cn(ge)&&(ge=ge(C)),ai(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(ai(be)?be.split(" ")[0]:"")+ge:(Le=Xl(ge.substr(2),se),ge=ai(be)?be:(_?Rt.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,It):It)+Le,je=u)),ge=$p(ge,"end",C),Ot=Math.max(It,rm(ge||(je?"100% 0":Ie),je,se,R,vt()+Le,ce,$t,C,Yt,W,F,Ie,_,C._endClamp&&"_endClamp"))||-.001,Le=0,ke=ti;ke--;)Ve=te[ke]||{},pi=Ve.pin,pi&&Ve.start-Ve._pinPush<=It&&!_&&Ve.end>0&&(Ze=Ve.end-(C._startClamp?Math.max(0,Ve.start):Ve.start),(pi===u&&Ve.start-Ve._pinPush<It||pi===vn)&&isNaN(be)&&(Le+=Ze*(1-Ve.progress)),pi===f&&(Me+=Ze));if(It+=Le,Ot+=Le,C._startClamp&&(C._startClamp+=Le),C._endClamp&&!Hn&&(C._endClamp=Ot||-.001,Ot=Math.min(Ot,Gi(N,R))),ie=Ot-It||(It-=.01)&&.001,Ye&&(yt=Rt.utils.clamp(0,1,Rt.utils.normalize(It,Ot,j))),C._pinPush=Me,jt&&Le&&(Ze={},Ze[R.a]="+="+Le,vn&&(Ze[R.p]="-="+vt()),Rt.set([jt,ce],Ze)),f&&!($u&&C.end>=Gi(N,R)))Ze=vi(f),Or=R===$e,ei=vt(),he=parseFloat(kt(R.a))+Me,!Ie&&Ot>1&&(M=(I?ve.scrollingElement||li:N).style,M={style:M,value:M["overflow"+R.a.toUpperCase()]},I&&vi(_e)["overflow"+R.a.toUpperCase()]!=="scroll"&&(M.style["overflow"+R.a.toUpperCase()]="scroll")),Xu(f,_t,Ze),B=Gl(f),tn=ls(f,!0),zo=F&&os(N,Or?wn:$e)(),m?(A=[m+R.os2,ie+Me+sn],A.t=_t,ke=m===Ke?Kl(f,R)+ie+Me:0,ke&&(A.push(R.d,ke+sn),_t.style.flexBasis!=="auto"&&(_t.style.flexBasis=ke+sn)),no(A),vn&&te.forEach(function(k){k.pin===vn&&k.vars.pinSpacing!==!1&&(k._subPinOffset=!0)}),F&&vt(j)):(ke=Kl(f,R),ke&&_t.style.flexBasis!=="auto"&&(_t.style.flexBasis=ke+sn)),F&&(en={top:tn.top+(Or?ei-It:zo)+sn,left:tn.left+(Or?zo:ei-It)+sn,boxSizing:"border-box",position:"fixed"},en[mr]=en["max"+io]=Math.ceil(tn.width)+sn,en[gr]=en["max"+of]=Math.ceil(tn.height)+sn,en[xi]=en[xi+da]=en[xi+ua]=en[xi+pa]=en[xi+fa]="0",en[Ke]=Ze[Ke],en[Ke+da]=Ze[Ke+da],en[Ke+ua]=Ze[Ke+ua],en[Ke+pa]=Ze[Ke+pa],en[Ke+fa]=Ze[Ke+fa],Ue=Dx(Ae,en,w),Hn&&vt(0)),i?(cl=i._initted,Vu(1),i.render(i.duration(),!0,!0),Ct=kt(R.a)-he+ie+Me,V=Math.abs(ie-Ct)>1,F&&V&&Ue.splice(Ue.length-2,2),i.render(0,!0,!0),cl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Vu(0)):Ct=ie,M&&(M.value?M.style["overflow"+R.a.toUpperCase()]=M.value:M.style.removeProperty("overflow-"+R.a));else if(u&&vt()&&!_)for(tn=u.parentNode;tn&&tn!==_e;)tn._pinOffset&&(It-=tn._pinOffset,Ot-=tn._pinOffset),tn=tn.parentNode;bs&&bs.forEach(function(k){return k.revert(!1,!0)}),C.start=It,C.end=Ot,At=Ht=Hn?j:vt(),!_&&!Hn&&!Fs&&(At<j&&vt(j),C.scroll.rec=0),C.revert(!1,!0),rt=An(),L&&(Z=-1,L.restart(!0)),En=0,i&&D&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),(Ye||yt!==C.progress||_||x||i&&!i._initted)&&(i&&!D&&(i._initted||yt||i.vars.immediateRender!==!1)&&i.totalProgress(_&&It<-.001&&!yt?Rt.utils.normalize(It,Ot,0):yt,!0),C.progress=Ye||(At-It)/ie===yt?0:yt),f&&m&&(_t._pinOffset=Math.round(C.progress*Ct)),G&&G.invalidate(),isNaN(U)||(U-=Rt.getProperty(q,R.p),Y-=Rt.getProperty($t,R.p),Hl(q,R,U),Hl(jt,R,U-(wt||0)),Hl($t,R,Y),Hl(ce,R,Y-(wt||0))),Ye&&!Hn&&C.update(),h&&!Hn&&!me&&(me=!0,h(C),me=!1)}},C.getVelocity=function(){return(vt()-Ht)/(An()-ra)*1e3||0},C.endAnimation=function(){sa(C.callbackAnimation),i&&(G?G.progress(1):i.paused()?D||sa(i,C.direction<0,1):sa(i,i.reversed()))},C.labelToScroll=function(et){return i&&i.labels&&(It||C.refresh()||It)+i.labels[et]/i.duration()*ie||0},C.getTrailing=function(et){var xt=te.indexOf(C),nt=C.direction>0?te.slice(0,xt).reverse():te.slice(xt+1);return(ai(et)?nt.filter(function(wt){return wt.vars.preventOverlaps===et}):nt).filter(function(wt){return C.direction>0?wt.end<=It:wt.start>=Ot})},C.update=function(et,xt,nt){if(!(_&&!nt&&!et)){var wt=Hn===!0?j:C.scroll(),se=et?0:(wt-It)/ie,Yt=se<0?0:se>1?1:se||0,Ie=C.progress,Ye,Le,Me,ge,je,be,vn,ti;if(xt&&(Ht=At,At=_?vt():wt,y&&(gt=ft,ft=i&&!D?i.totalProgress():Yt)),p&&f&&!En&&!Ol&&yi&&(!Yt&&It<wt+(wt-Ht)/(An()-ra)*p?Yt=1e-4:Yt===1&&Ot>wt+(wt-Ht)/(An()-ra)*p&&(Yt=.9999)),Yt!==Ie&&C.enabled){if(Ye=C.isActive=!!Yt&&Yt<1,Le=!!Ie&&Ie<1,be=Ye!==Le,je=be||!!Yt!=!!Ie,C.direction=Yt>Ie?1:-1,C.progress=Yt,je&&!En&&(Me=Yt&&!Ie?0:Yt===1?1:Ie===1?2:3,D&&(ge=!be&&O[Me+1]!=="none"&&O[Me+1]||O[Me],ti=i&&(ge==="complete"||ge==="reset"||ge in i))),P&&(be||ti)&&(ti||d||!i)&&(Cn(P)?P(C):C.getTrailing(P).forEach(function(ei){return ei.endAnimation()})),D||(G&&!En&&!Ol?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",Yt,i._tTime/i._tDur):(G.vars.totalProgress=Yt,G.invalidate().restart())):i&&i.totalProgress(Yt,!!(En&&(rt||et)))),f){if(et&&m&&(_t.style[m+R.os2]=Vt),!F)ut(aa(he+Ct*Yt));else if(je){if(vn=!et&&Yt>Ie&&Ot+1>wt&&wt+1>=Gi(N,R),w)if(!et&&(Ye||vn)){var ke=ls(f,!0),Ze=wt-It;om(f,_e,ke.top+(R===$e?Ze:0)+sn,ke.left+(R===$e?0:Ze)+sn)}else om(f,_t);no(Ye||vn?Ue:B),V&&Yt<1&&Ye||ut(he+(Yt===1&&!vn?Ct:0))}}y&&!ct.tween&&!En&&!Ol&&L.restart(!0),a&&(be||T&&Yt&&(Yt<1||!Gu))&&ga(a.targets).forEach(function(ei){return ei.classList[Ye||T?"add":"remove"](a.className)}),o&&!D&&!et&&o(C),je&&!En?(D&&(ti&&(ge==="complete"?i.pause().totalProgress(1):ge==="reset"?i.restart(!0).pause():ge==="restart"?i.restart(!0):i[ge]()),o&&o(C)),(be||!Gu)&&(c&&be&&$r(C,c),z[Me]&&$r(C,z[Me]),T&&(Yt===1?C.kill(!1,1):z[Me]=0),be||(Me=Yt===1?1:3,z[Me]&&$r(C,z[Me]))),b&&!Ye&&Math.abs(C.getVelocity())>(la(b)?b:2500)&&(sa(C.callbackAnimation),G?G.progress(1):sa(i,ge==="reverse"?1:!Yt,1))):D&&o&&!En&&o(C)}if(ot){var tn=_?wt/_.duration()*(_._caScrollDist||0):wt;S(tn+(q._isFlipped?1:0)),ot(tn)}dt&&dt(-wt/_.duration()*(_._caScrollDist||0))}},C.enable=function(et,xt){C.enabled||(C.enabled=!0,cn(N,"resize",ca),I||cn(N,"scroll",Qr),Q&&cn(s,"refreshInit",Q),et!==!1&&(C.progress=yt=0,At=Ht=Z=vt()),xt!==!1&&C.refresh())},C.getTween=function(et){return et&&ct?ct.tween:G},C.setPositions=function(et,xt,nt,wt){if(_){var se=_.scrollTrigger,Yt=_.duration(),Ie=se.end-se.start;et=se.start+Ie*et/Yt,xt=se.start+Ie*xt/Yt}C.refresh(!1,!1,{start:Kp(et,nt&&!!C._startClamp),end:Kp(xt,nt&&!!C._endClamp)},wt),C.update()},C.adjustPinSpacing=function(et){if(A&&et){var xt=A.indexOf(R.d)+1;A[xt]=parseFloat(A[xt])+et+sn,A[1]=parseFloat(A[1])+et+sn,no(A)}},C.disable=function(et,xt){if(et!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,xt||G&&G.pause(),j=0,Pt&&(Pt.uncache=1),Q&&ln(s,"refreshInit",Q),L&&(L.pause(),ct.tween&&ct.tween.kill()&&(ct.tween=0)),!I)){for(var nt=te.length;nt--;)if(te[nt].scroller===N&&te[nt]!==C)return;ln(N,"resize",ca),I||ln(N,"scroll",Qr)}},C.kill=function(et,xt){C.disable(et,xt),G&&!xt&&G.kill(),l&&delete Ku[l];var nt=te.indexOf(C);nt>=0&&te.splice(nt,1),nt===Gn&&Yl>0&&Gn--,nt=0,te.forEach(function(wt){return wt.scroller===C.scroller&&(nt=1)}),nt||Hn||Fs||(C.scroll.rec=0),i&&(i.scrollTrigger=null,et&&i.revert({kill:!1}),xt||i.kill()),jt&&[jt,ce,q,$t].forEach(function(wt){return wt.parentNode&&wt.parentNode.removeChild(wt)}),ma===C&&(ma=0),f&&(Pt&&(Pt.uncache=1),nt=0,te.forEach(function(wt){return wt.pin===f&&nt++}),nt||(Pt.spacer=0)),n.onKill&&n.onKill(C)},te.push(C),C.enable(!1,!1),lt&&lt(C),i&&i.add&&!ie){var st=C.update;C.update=function(){C.update=st,Kt.cache++,It||Ot||C.refresh()},Rt.delayedCall(.01,C.update),ie=.01,It=Ot=0}else C.refresh();f&&Px()},s.register=function(n){return jr||(Rt=n||gm(),mm()&&window.document&&s.enable(),jr=oa),jr},s.defaults=function(n){if(n)for(var i in n)kl[i]=n[i];return kl},s.disable=function(n,i){oa=0,te.forEach(function(o){return o[i?"kill":"disable"](n)}),ln(ee,"wheel",Qr),ln(ve,"scroll",Qr),clearInterval(Ul),ln(ve,"touchcancel",Vi),ln(_e,"touchstart",Vi),Bl(ln,ve,"pointerdown,touchstart,mousedown",Qp),Bl(ln,ve,"pointerup,touchend,mouseup",jp),$l.kill(),Fl(ln);for(var r=0;r<Kt.length;r+=3)zl(ln,Kt[r],Kt[r+1]),zl(ln,Kt[r],Kt[r+2])},s.enable=function(){if(ee=window,ve=document,li=ve.documentElement,_e=ve.body,Rt){if(ga=Rt.utils.toArray,ha=Rt.utils.clamp,Ju=Rt.core.context||Vi,Vu=Rt.core.suppressOverwrites||Vi,ef=ee.history.scrollRestoration||"auto",Qu=ee.pageYOffset||0,Rt.core.globals("ScrollTrigger",s),_e){oa=1,eo=document.createElement("div"),eo.style.height="100vh",eo.style.position="absolute",Em(),bx(),We.register(Rt),s.isTouch=We.isTouch,Os=We.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Zu=We.isTouch===1,cn(ee,"wheel",Qr),tf=[ee,ve,li,_e],Rt.matchMedia?(s.matchMedia=function(h){var d=Rt.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Rt.addEventListener("matchMediaInit",function(){Tm(),lf()}),Rt.addEventListener("matchMediaRevert",function(){return bm()}),Rt.addEventListener("matchMedia",function(){pr(0,1),yr("matchMedia")}),Rt.matchMedia().add("(orientation: portrait)",function(){return Wu(),Wu})):console.warn("Requires GSAP 3.11.0 or later"),Wu(),cn(ve,"scroll",Qr);var n=_e.hasAttribute("style"),i=_e.style,r=i.borderTopStyle,o=Rt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ls(_e),$e.m=Math.round(a.top+$e.sc())||0,wn.m=Math.round(a.left+wn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),Ul=setInterval(nm,250),Rt.delayedCall(.5,function(){return Ol=0}),cn(ve,"touchcancel",Vi),cn(_e,"touchstart",Vi),Bl(cn,ve,"pointerdown,touchstart,mousedown",Qp),Bl(cn,ve,"pointerup,touchend,mouseup",jp),Yu=Rt.utils.checkPrefix("transform"),Zl.push(Yu),jr=An(),$l=Rt.delayedCall(.2,pr).pause(),to=[ve,"visibilitychange",function(){var h=ee.innerWidth,d=ee.innerHeight;ve.hidden?(Zp=h,Jp=d):(Zp!==h||Jp!==d)&&ca()},ve,"DOMContentLoaded",pr,ee,"load",pr,ee,"resize",ca],Fl(cn),te.forEach(function(h){return h.enable(0,1)}),l=0;l<Kt.length;l+=3)zl(ln,Kt[l],Kt[l+1]),zl(ln,Kt[l],Kt[l+2])}else if(ve){var c=function h(){s.enable(),ve.removeEventListener("DOMContentLoaded",h)};ve.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(Gu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ul)||(Ul=i)&&setInterval(nm,i),"ignoreMobileResize"in n&&(Zu=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Fl(ln)||Fl(cn,n.autoRefreshEvents||"none"),fm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=kn(n),o=Kt.indexOf(r),a=xr(r);~o&&Kt.splice(o,a?6:2),i&&(a?Ai.unshift(ee,i,_e,i,li,i):Ai.unshift(r,i))},s.clearMatchMedia=function(n){te.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(ai(n)?kn(n):n).getBoundingClientRect(),a=o[r?mr:gr]*i||0;return r?o.right-a>0&&o.left+a<ee.innerWidth:o.bottom-a>0&&o.top+a<ee.innerHeight},s.positionInViewport=function(n,i,r){ai(n)&&(n=kn(n));var o=n.getBoundingClientRect(),a=o[r?mr:gr],l=i==null?a/2:i in Ql?Ql[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/ee.innerWidth:(o.top+l)/ee.innerHeight},s.killAll=function(n){if(te.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=vr.killAll||[];vr={},i.forEach(function(r){return r()})}},s})();Jt.version="3.15.1";Jt.saveStyles=function(s){return s?ga(s).forEach(function(t){if(t&&t.style){var e=oi.indexOf(t);e>=0&&oi.splice(e,5),oi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),Ju())}}):oi};Jt.revert=function(s,t){return lf(!s,t)};Jt.create=function(s,t){return new Jt(s,t)};Jt.refresh=function(s){return s?ca(!0):(jr||Jt.register())&&pr(!0)};Jt.update=function(s){return++Kt.cache&&cs(s===!0?2:0)};Jt.clearScrollMemory=wm;Jt.maxScroll=function(s,t){return Gi(s,t?wn:$e)};Jt.getScrollFunc=function(s,t){return os(kn(s),t?wn:$e)};Jt.getById=function(s){return Ku[s]};Jt.getAll=function(){return te.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Jt.isScrolling=function(){return!!yi};Jt.snapDirectional=af;Jt.addEventListener=function(s,t){var e=vr[s]||(vr[s]=[]);~e.indexOf(t)||e.push(t)};Jt.removeEventListener=function(s,t){var e=vr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Jt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Rt.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),u.push(m),r<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Cn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Cn(r)&&(r=r(),cn(Jt,"refresh",function(){return r=t.batchMax()})),ga(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Jt.create(c))}),e};var lm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},qu=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(We.isTouch?" pinch-zoom":""):"none",t===li&&s(_e,e)},Wl={auto:1,scroll:1},Ux=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Rt.core.getCache(r),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==_e&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Wl[(l=vi(r)).overflowY]||Wl[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!xr(r)&&(Wl[(l=vi(r)).overflowY]||Wl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Cm=function(t,e,n,i){return We.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Ux,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&cn(ve,We.eventTypes[0],hm,!1,!0)},onDisable:function(){return ln(ve,We.eventTypes[0],hm,!0)}})},Ox=/(input|label|select|textarea)/i,cm,hm=function(t){var e=Ox.test(t.target.tagName);(e||cm)&&(t._gsapAllow=!0,cm=e)},Fx=function(t){dr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=kn(t.target)||li,h=Rt.core.globals().ScrollSmoother,d=h&&h.get(),u=Os&&(t.content&&kn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=os(c,$e),m=os(c,wn),x=1,p=(We.isTouch&&ee.visualViewport?ee.visualViewport.scale*ee.visualViewport.width:ee.outerWidth)/ee.innerWidth,g=0,v=Cn(i)?function(){return i(a)}:function(){return i||2.8},T,y,w=Cm(c,t.type,!0,r),E=function(){return y=!1},_=Vi,b=Vi,P=function(){l=Gi(c,$e),b=ha(Os?1:0,l),n&&(_=ha(0,Gi(c,wn))),T=_r},R=function(){u._gsap.y=aa(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(y){requestAnimationFrame(E);var $=aa(a.deltaY/2),W=b(f.v-$);if(u&&W!==f.v+f.offset){f.offset=W-f.v;var C=aa((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",u._gsap.y=C+"px",f.cacheID=Kt.cache,cs()}return!0}f.offset&&R(),y=!0},N,H,I,F,z=function(){P(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return u&&Rt.set(u,{y:"+=0"}),t.ignoreCheck=function(O){return Os&&O.type==="touchmove"&&D(O)||x>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){y=!1;var O=x;x=aa((ee.visualViewport&&ee.visualViewport.scale||1)/p),N.pause(),O!==x&&qu(c,x>1.01?!0:n?!1:"x"),H=m(),I=f(),P(),T=_r},t.onRelease=t.onGestureStart=function(O,$){if(f.offset&&R(),!$)F.restart(!0);else{Kt.cache++;var W=v(),C,Q;n&&(C=m(),Q=C+W*.05*-O.velocityX/.227,W*=lm(m,C,Q,Gi(c,wn)),N.vars.scrollX=_(Q)),C=f(),Q=C+W*.05*-O.velocityY/.227,W*=lm(f,C,Q,Gi(c,$e)),N.vars.scrollY=b(Q),N.invalidate().duration(W).play(.01),(Os&&N.vars.scrollY>=l||C>=l-1)&&Rt.to({},{onUpdate:z,duration:W})}o&&o(O)},t.onWheel=function(){N._ts&&N.pause(),An()-g>1e3&&(T=0,g=An())},t.onChange=function(O,$,W,C,Q){if(_r!==T&&P(),$&&n&&m(_(C[2]===$?H+(O.startX-O.x):m()+$-C[1])),W){f.offset&&R();var bt=Q[2]===W,zt=bt?I+O.startY-O.y:f()+W-Q[1],Z=b(zt);bt&&zt!==Z&&(I+=Z-zt),f(Z)}(W||$)&&cs()},t.onEnable=function(){qu(c,n?!1:"x"),Jt.addEventListener("refresh",z),cn(ee,"resize",z),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),w.enable()},t.onDisable=function(){qu(c,!0),ln(ee,"resize",z),Jt.removeEventListener("refresh",z),w.kill()},t.lockAxis=t.lockAxis!==!1,a=new We(t),a.iOS=Os,Os&&!f()&&f(1),Os&&Rt.ticker.add(Vi),F=a._dc,N=Rt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Am(f,f(),function(){return N.pause()})},onUpdate:cs,onComplete:F.vars.onComplete}),a};Jt.sort=function(s){if(Cn(s))return te.sort(s);var t=ee.pageYOffset||0;return Jt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ee.innerHeight}),te.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Jt.observe=function(s){return new We(s)};Jt.normalizeScroll=function(s){if(typeof s=="undefined")return Vn;if(s===!0&&Vn)return Vn.enable();if(s===!1){Vn&&Vn.kill(),Vn=s;return}var t=s instanceof We?s:Fx(s);return Vn&&Vn.target===t.target&&Vn.kill(),xr(t.target)&&(Vn=t),t};Jt.core={_getVelocityProp:Nl,_inputObserver:Cm,_scrollers:Kt,_proxies:Ai,bridge:{ss:function(){yi||yr("scrollStart"),yi=An()},ref:function(){return En}}};gm()&&Rt.registerPlugin(Jt);var Rm="1.3.27";function Lm(s,t,e){return Math.max(s,Math.min(t,e))}function Bx(s,t,e){return(1-e)*s+e*t}function zx(s,t,e,n){return Bx(s,t,1-Math.exp(-e*n))}function kx(s,t){return(s%t+t)%t}var Vx=class{constructor(){Bt(this,"isRunning",!1);Bt(this,"value",0);Bt(this,"from",0);Bt(this,"to",0);Bt(this,"currentTime",0);Bt(this,"lerp");Bt(this,"duration");Bt(this,"easing");Bt(this,"onUpdate")}advance(s){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let n=Lm(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=zx(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=o}};function Gx(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var Hx=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Bt(this,"width",0);Bt(this,"height",0);Bt(this,"scrollHeight",0);Bt(this,"scrollWidth",0);Bt(this,"debouncedResize");Bt(this,"wrapperResizeObserver");Bt(this,"contentResizeObserver");Bt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Bt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Bt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=Gx(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,t;(s=this.wrapperResizeObserver)==null||s.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Dm=class{constructor(){Bt(this,"events",{})}emit(s,...t){var n;let e=this.events[s]||[];for(let i=0,r=e.length;i<r;i++)(n=e[i])==null||n.call(e,...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}}off(s,t){var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},Wx=100/6,Bs={passive:!1};function Pm(s,t){return s===1?Wx:s===2?t:1}var Xx=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Bt(this,"touchStart",{x:0,y:0});Bt(this,"lastDelta",{x:0,y:0});Bt(this,"window",{width:0,height:0});Bt(this,"emitter",new Dm);Bt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Bt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Bt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Bt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=Pm(n,this.window.width),r=Pm(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Bt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Bs),this.element.addEventListener("touchstart",this.onTouchStart,Bs),this.element.addEventListener("touchmove",this.onTouchMove,Bs),this.element.addEventListener("touchend",this.onTouchEnd,Bs)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Bs),this.element.removeEventListener("touchstart",this.onTouchStart,Bs),this.element.removeEventListener("touchmove",this.onTouchMove,Bs),this.element.removeEventListener("touchend",this.onTouchEnd,Bs)}},Im=s=>Math.min(1,1.001-2**(-10*s)),Nm=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:x=!0,prevent:p,virtualScroll:g,overscroll:v=!0,autoRaf:T=!1,anchors:y=!1,autoToggle:w=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:b=_,stopInertiaOnNavigate:P=!1,respectReducedMotion:R=!0}={}){Bt(this,"_isScrolling",!1);Bt(this,"_isStopped",!1);Bt(this,"_isLocked",!1);Bt(this,"_preventNextNativeScrollEvent",!1);Bt(this,"_resetVelocityTimeout",null);Bt(this,"_rafId",null);Bt(this,"_isDraggingSelection",!1);Bt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Bt(this,"isTouching");Bt(this,"isIos");Bt(this,"time",0);Bt(this,"userData",{});Bt(this,"lastVelocity",0);Bt(this,"velocity",0);Bt(this,"direction",0);Bt(this,"options");Bt(this,"targetScroll");Bt(this,"animatedScroll");Bt(this,"animate",new Vx);Bt(this,"emitter",new Dm);Bt(this,"dimensions");Bt(this,"virtualScroll");Bt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Bt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Bt(this,"onTransitionEnd",s=>{var t;(t=s.propertyName)!=null&&t.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Bt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Bt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Bt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>{var x,p,g,v,T;return m instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(m))||((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent"))||h==="vertical"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-vertical"))||h==="horizontal"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-horizontal"))||i&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-touch"))||r&&((T=m.hasAttribute)==null?void 0:T.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Bt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Bt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Rm,window.lenis||(window.lenis={}),window.lenis.version=Rm,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=Im:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:m,autoResize:x,prevent:p,virtualScroll:g,overscroll:v,autoRaf:T,anchors:y,autoToggle:w,allowNestedScroll:E,naiveDimensions:b,stopInertiaOnNavigate:P,respectReducedMotion:R},this.dimensions=new Hx(s,t,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Xx(e,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){var c;let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=(c=s.targetTouches[0])!=null?c:s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=s,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let m=null;if(typeof u=="string"?(m=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),m||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(m=u),m){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}let x=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),v=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);u=(this.isHorizontal?x.left:x.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(T)?0:T)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let m=u-this.animatedScroll;m>this.limit/2?u-=this.limit:m<-this.limit/2&&(u+=this.limit)}}else u=Lm(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d!=null?d:{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Im:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,x)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),x||this.emit(),x&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){var E;let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,u,f,m;if(n-((E=i.time)!=null?E:0)>2e3){i.time=Date.now();let _=window.getComputedStyle(s);if(i.computedStyle=_,r=["auto","overlay","scroll"].includes(_.overflowX),o=["auto","overlay","scroll"].includes(_.overflowY),c=["auto"].includes(_.overscrollBehaviorX),h=["auto"].includes(_.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,u=s.scrollHeight,f=s.clientWidth,m=s.clientHeight,a=d>f,l=u>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let x=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",p,g,v,T,y,w;if(x==="horizontal")p=Math.round(s.scrollLeft),g=d-f,v=t,T=r,y=a,w=c;else if(x==="vertical")p=Math.round(s.scrollTop),g=u-m,v=e,T=o,y=l,w=h;else return!1;return!w&&(p>=g||p<=0)?!0:(v>0?p<g:p>0)&&T&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let s=this.options.wrapper;return this.isHorizontal?(t=s.scrollX)!=null?t:s.scrollLeft:(e=s.scrollY)!=null?e:s.scrollTop}get scroll(){return this.options.infinite?kx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};var lg=0,Ff=1,cg=2;var Ja=1,hg=2,Po=3,Qs=0,_n=1,Ji=2,Rr=0,Io=1,$a=2,Bf=3,zf=4,ug=5;var Pr=100,fg=101,dg=102,pg=103,mg=104,gg=200,_g=201,xg=202,vg=203,kf=204,Vf=205,yg=206,Sg=207,Mg=208,bg=209,Tg=210,wg=211,Eg=212,Ag=213,Cg=214,Tc=0,wc=1,Ec=2,So=3,Ac=4,Cc=5,Rc=6,Pc=7,eh=0,Rg=1,Pg=2,$i=0,Gf=1,Hf=2,Wf=3,Xf=4,qf=5,Yf=6,Zf=7;var Jf=300,Ir=301,Lo=302,nh=303,ih=304,Ic=1e3,Wi=1001,Lc=1002,un=1003,Ig=1004;var Ka=1005;var Wn=1006,sh=1007;var ys=1008;var Qn=1009,$f=1010,Kf=1011,Do=1012,rh=1013,Ni=1014,Ti=1015,Ui=1016,oh=1017,ah=1018,Lr=1020,Qf=35902,jf=35899,td=1021,ed=1022,Oi=1023,gs=1026,Ss=1027,lh=1028,ch=1029,js=1030,hh=1031;var uh=1033,Qa=33776,ja=33777,tl=33778,el=33779,fh=35840,dh=35841,ph=35842,mh=35843,gh=36196,_h=37492,xh=37496,vh=37488,yh=37489,nl=37490,Sh=37491,Mh=37808,bh=37809,Th=37810,wh=37811,Eh=37812,Ah=37813,Ch=37814,Rh=37815,Ph=37816,Ih=37817,Lh=37818,Dh=37819,Nh=37820,Uh=37821,Oh=36492,Fh=36494,Bh=36495,zh=36283,kh=36284,il=36285,Vh=36286;var Ea=2300,Dc=2301,Sc=2302,Rf=2303,Pf=2400,If=2401,Lf=2402;var Lg=3200;var sl=0,Dg=1,Ms="",In="srgb",Aa="srgb-linear",Ca="linear",xe="srgb";var Mc=7680;var Ng=519,Ug=512,Og=513,Fg=514,nd=515,Bg=516,zg=517,id=518,sd=519,kg=35044;var rd="300 es",Mi=2e3,Mo=2001;function qx(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Yx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function bo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vg(){let s=bo("canvas");return s.style.display="block",s}var Um={},To=null;function od(...s){let t="THREE."+s.shift();To?To("log",t,...s):console.log(t,...s)}function Gg(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Gt(...s){s=Gg(s);let t="THREE."+s.shift();if(To)To("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Wt(...s){s=Gg(s);let t="THREE."+s.shift();if(To)To("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function wr(...s){let t=s.join(" ");t in Um||(Um[t]=!0,Gt(...s))}function Hg(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Wg={[Tc]:Tc,[Ec]:Rc,[Ac]:Ac,[So]:Cc,[wc]:wc,[Rc]:Ec,[Pc]:Pc,[Cc]:So},Xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Om=1234567,Ta=Math.PI/180,wo=180/Math.PI;function No(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[e&63|128]+Rn[e>>8&255]+"-"+Rn[e>>16&255]+Rn[e>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function re(s,t,e){return Math.max(t,Math.min(e,s))}function ad(s,t){return(s%t+t)%t}function Zx(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Jx(s,t,e){return s!==t?(e-s)/(t-s):0}function wa(s,t,e){return(1-e)*s+e*t}function $x(s,t,e,n){return wa(s,t,1-Math.exp(-e*n))}function Kx(s,t=1){return t-Math.abs(ad(s,t*2)-t)}function Qx(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function jx(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function tv(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ev(s,t){return s+Math.random()*(t-s)}function nv(s){return s*(.5-Math.random())}function iv(s){s!==void 0&&(Om=s);let t=Om+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sv(s){return s*Ta}function rv(s){return s*wo}function ov(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function av(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ld(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lv(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function cd(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xg(s,t){if(t.constructor===Float32Array)return s;let e=cd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function qg(s,t){if(t.constructor===Float32Array)return s;let e=cd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var hd={DEG2RAD:Ta,RAD2DEG:wo,generateUUID:No,clamp:re,euclideanModulo:ad,mapLinear:Zx,inverseLerp:Jx,lerp:wa,damp:$x,pingpong:Kx,smoothstep:Qx,smootherstep:jx,randInt:tv,randFloat:ev,randFloatSpread:nv,seededRandom:iv,degToRad:sv,radToDeg:rv,isPowerOfTwo:ov,ceilPowerOfTwo:av,floorPowerOfTwo:ld,setQuaternionFromProperEuler:lv,normalize:qg,denormalize:Xg},md=class md{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};md.prototype.isVector2=!0;var ne=md,qi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*x;p<0&&(u=-u,f=-f,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){let v=Math.acos(p),T=Math.sin(v);g=Math.sin(g*v)/T,a=Math.sin(a*v)/T,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+x*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gd=class gd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return cf.copy(this).projectOnVector(t),this.sub(cf)}reflect(t){return this.sub(cf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gd.prototype.isVector3=!0;var J=gd,cf=new J,Fm=new qi,_d=class _d{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=i[0],p=i[3],g=i[6],v=i[1],T=i[4],y=i[7],w=i[2],E=i[5],_=i[8];return r[0]=o*x+a*v+l*w,r[3]=o*p+a*T+l*E,r[6]=o*g+a*y+l*_,r[1]=c*x+h*v+d*w,r[4]=c*p+h*T+d*E,r[7]=c*g+h*y+d*_,r[2]=u*x+f*v+m*w,r[5]=u*p+f*T+m*E,r[8]=u*g+f*y+m*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hf.makeScale(t,e)),this}rotate(t){return wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hf.makeRotation(-t)),this}translate(t,e){return wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_d.prototype.isMatrix3=!0;var Xt=_d,hf=new Xt,Bm=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zm=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cv(){let s={enabled:!0,workingColorSpace:Aa,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(i.r=yo(i.r),i.g=yo(i.g),i.b=yo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ms?Ca:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Aa]:{primaries:t,whitePoint:n,transfer:Ca,toXYZ:Bm,fromXYZ:zm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Bm,fromXYZ:zm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),s}var le=cv();function ms(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var so,Nc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{so===void 0&&(so=bo("canvas")),so.width=t.width,so.height=t.height;let i=so.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=so}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=bo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ms(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ms(e[n]/255)*255):e[n]=ms(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hv=0,Eo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=No(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(uf(i[o].image)):r.push(uf(i[o]))}else r=uf(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function uf(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Nc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var uv=0,ff=new J,Dn=class s extends Xi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Wi,i=Wi,r=Wn,o=ys,a=Oi,l=Qn,c=s.DEFAULT_ANISOTROPY,h=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=No(),this.name="",this.source=new Eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ff).x}get height(){return this.source.getSize(ff).y}get depth(){return this.source.getSize(ff).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ic:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case Lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ic:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case Lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Jf;Dn.DEFAULT_ANISOTROPY=1;var xd=class xd{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,y=(f+1)/2,w=(g+1)/2,E=(h+u)/4,_=(d+x)/4,b=(m+p)/4;return T>y&&T>w?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=E/n,r=_/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=b/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=_/r,i=b/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xd.prototype.isVector4=!0;var Ne=xd,Uc=class extends Xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Dn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Eo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends Uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ra=class extends Dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oc=class extends Dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var th=class th{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,x,p)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,x,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new th().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ro.setFromMatrixColumn(t,0).length(),r=1/ro.setFromMatrixColumn(t,1).length(),o=1/ro.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fv,t,dv)}lookAt(t,e,n){let i=this.elements;return ci.subVectors(t,e),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),zs.crossVectors(n,ci),zs.lengthSq()===0&&(Math.abs(n.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),zs.crossVectors(n,ci)),zs.normalize(),tc.crossVectors(ci,zs),i[0]=zs.x,i[4]=tc.x,i[8]=ci.x,i[1]=zs.y,i[5]=tc.y,i[9]=ci.y,i[2]=zs.z,i[6]=tc.z,i[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],v=n[3],T=n[7],y=n[11],w=n[15],E=i[0],_=i[4],b=i[8],P=i[12],R=i[1],D=i[5],N=i[9],H=i[13],I=i[2],F=i[6],z=i[10],O=i[14],$=i[3],W=i[7],C=i[11],Q=i[15];return r[0]=o*E+a*R+l*I+c*$,r[4]=o*_+a*D+l*F+c*W,r[8]=o*b+a*N+l*z+c*C,r[12]=o*P+a*H+l*O+c*Q,r[1]=h*E+d*R+u*I+f*$,r[5]=h*_+d*D+u*F+f*W,r[9]=h*b+d*N+u*z+f*C,r[13]=h*P+d*H+u*O+f*Q,r[2]=m*E+x*R+p*I+g*$,r[6]=m*_+x*D+p*F+g*W,r[10]=m*b+x*N+p*z+g*C,r[14]=m*P+x*H+p*O+g*Q,r[3]=v*E+T*R+y*I+w*$,r[7]=v*_+T*D+y*F+w*W,r[11]=v*b+T*N+y*z+w*C,r[15]=v*P+T*H+y*O+w*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],p=t[11],g=t[15],v=l*f-c*u,T=a*f-c*d,y=a*u-l*d,w=o*f-c*h,E=o*u-l*h,_=o*d-a*h;return e*(x*v-p*T+g*y)-n*(m*v-p*w+g*E)+i*(m*T-x*w+g*_)-r*(m*y-x*E+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],p=t[14],g=t[15],v=e*a-n*o,T=e*l-i*o,y=e*c-r*o,w=n*l-i*a,E=n*c-r*a,_=i*c-r*l,b=h*x-d*m,P=h*p-u*m,R=h*g-f*m,D=d*p-u*x,N=d*g-f*x,H=u*g-f*p,I=v*H-T*N+y*D+w*R-E*P+_*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return t[0]=(a*H-l*N+c*D)*F,t[1]=(i*N-n*H-r*D)*F,t[2]=(x*_-p*E+g*w)*F,t[3]=(u*E-d*_-f*w)*F,t[4]=(l*R-o*H-c*P)*F,t[5]=(e*H-i*R+r*P)*F,t[6]=(p*y-m*_-g*T)*F,t[7]=(h*_-u*y+f*T)*F,t[8]=(o*N-a*R+c*b)*F,t[9]=(n*R-e*N-r*b)*F,t[10]=(m*E-x*y+g*v)*F,t[11]=(d*y-h*E-f*v)*F,t[12]=(a*P-o*D-l*b)*F,t[13]=(e*D-n*P+i*b)*F,t[14]=(x*T-m*w-p*v)*F,t[15]=(h*w-d*T+u*v)*F,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,x=o*h,p=o*d,g=a*d,v=l*c,T=l*h,y=l*d,w=n.x,E=n.y,_=n.z;return i[0]=(1-(x+g))*w,i[1]=(f+y)*w,i[2]=(m-T)*w,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(u+g))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(m+T)*_,i[9]=(p-v)*_,i[10]=(1-(u+x))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ro.set(i[0],i[1],i[2]).length(),a=ro.set(i[4],i[5],i[6]).length(),l=ro.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ci.copy(this);let c=1/o,h=1/a,d=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=d,Ci.elements[9]*=d,Ci.elements[10]*=d,e.setFromRotationMatrix(Ci),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Mi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Mi)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Mo)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Mi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Mi)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Mo)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};th.prototype.isMatrix4=!0;var Ee=th,ro=new J,Ci=new Ee,fv=new J(0,0,0),dv=new J(1,1,1),zs=new J,tc=new J,ci=new J,km=new Ee,Vm=new qi,Yi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return km.makeRotationFromQuaternion(t),this.setFromRotationMatrix(km,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vm.setFromEuler(this),this.setFromQuaternion(Vm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yi.DEFAULT_ORDER="XYZ";var Pa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pv=0,Gm=new J,oo=new qi,hs=new Ee,ec=new J,xa=new J,mv=new J,gv=new qi,Hm=new J(1,0,0),Wm=new J(0,1,0),Xm=new J(0,0,1),qm={type:"added"},_v={type:"removed"},ao={type:"childadded",child:null},df={type:"childremoved",child:null},gn=class s extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new J,e=new Yi,n=new qi,i=new J(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Xt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.multiply(oo),this}rotateOnWorldAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.premultiply(oo),this}rotateX(t){return this.rotateOnAxis(Hm,t)}rotateY(t){return this.rotateOnAxis(Wm,t)}rotateZ(t){return this.rotateOnAxis(Xm,t)}translateOnAxis(t,e){return Gm.copy(t).applyQuaternion(this.quaternion),this.position.add(Gm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hm,t)}translateY(t){return this.translateOnAxis(Wm,t)}translateZ(t){return this.translateOnAxis(Xm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ec.copy(t):ec.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hs.lookAt(xa,ec,this.up):hs.lookAt(ec,xa,this.up),this.quaternion.setFromRotationMatrix(hs),i&&(hs.extractRotation(i.matrixWorld),oo.setFromRotationMatrix(hs),this.quaternion.premultiply(oo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qm),ao.child=t,this.dispatchEvent(ao),ao.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_v),df.child=t,this.dispatchEvent(df),df.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hs.multiply(t.parent.matrixWorld)),t.applyMatrix4(hs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qm),ao.child=t,this.dispatchEvent(ao),ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,t,mv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,gv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gn.DEFAULT_UP=new J(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Li=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},xv={type:"move"},Ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ks={h:0,s:0,l:0},nc={h:0,s:0,l:0};function pf(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=In){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=ad(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=pf(o,r,t+1/3),this.g=pf(o,r,t),this.b=pf(o,r,t-1/3)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e=In){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=In){let n=Yg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}copyLinearToSRGB(t){return this.r=yo(t.r),this.g=yo(t.g),this.b=yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=In){return le.workingToColorSpace(Pn.copy(this),t),Math.round(re(Pn.r*255,0,255))*65536+Math.round(re(Pn.g*255,0,255))*256+Math.round(re(Pn.b*255,0,255))}getHexString(t=In){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Pn.copy(this),e);let n=Pn.r,i=Pn.g,r=Pn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Pn.copy(this),e),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=In){le.workingToColorSpace(Pn.copy(this),t);let e=Pn.r,n=Pn.g,i=Pn.b;return t!==In?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ks),this.setHSL(ks.h+t,ks.s+e,ks.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ks),t.getHSL(nc);let n=wa(ks.h,nc.h,e),i=wa(ks.s,nc.s,e),r=wa(ks.l,nc.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new qt;qt.NAMES=Yg;var Er=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ri=new J,us=new J,mf=new J,fs=new J,lo=new J,co=new J,Ym=new J,gf=new J,_f=new J,xf=new J,vf=new Ne,yf=new Ne,Sf=new Ne,Ws=class s{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ri.subVectors(t,e),i.cross(Ri);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ri.subVectors(i,e),us.subVectors(n,e),mf.subVectors(t,e);let o=Ri.dot(Ri),a=Ri.dot(us),l=Ri.dot(mf),c=us.dot(us),h=us.dot(mf),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,fs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fs.x),l.addScaledVector(o,fs.y),l.addScaledVector(a,fs.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return vf.setScalar(0),yf.setScalar(0),Sf.setScalar(0),vf.fromBufferAttribute(t,e),yf.fromBufferAttribute(t,n),Sf.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(vf,r.x),o.addScaledVector(yf,r.y),o.addScaledVector(Sf,r.z),o}static isFrontFacing(t,e,n,i){return Ri.subVectors(n,e),us.subVectors(t,e),Ri.cross(us).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),us.subVectors(this.a,this.b),Ri.cross(us).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;lo.subVectors(i,n),co.subVectors(r,n),gf.subVectors(t,n);let l=lo.dot(gf),c=co.dot(gf);if(l<=0&&c<=0)return e.copy(n);_f.subVectors(t,i);let h=lo.dot(_f),d=co.dot(_f);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(lo,o);xf.subVectors(t,r);let f=lo.dot(xf),m=co.dot(xf);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(co,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Ym.subVectors(r,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Ym,a);let g=1/(p+x+u);return o=x*g,a=u*g,e.copy(n).addScaledVector(lo,o).addScaledVector(co,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zi=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pi):Pi.fromBufferAttribute(r,o),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ic.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ic.copy(n.boundingBox)),ic.applyMatrix4(t.matrixWorld),this.union(ic)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(va),sc.subVectors(this.max,va),ho.subVectors(t.a,va),uo.subVectors(t.b,va),fo.subVectors(t.c,va),Vs.subVectors(uo,ho),Gs.subVectors(fo,uo),Sr.subVectors(ho,fo);let e=[0,-Vs.z,Vs.y,0,-Gs.z,Gs.y,0,-Sr.z,Sr.y,Vs.z,0,-Vs.x,Gs.z,0,-Gs.x,Sr.z,0,-Sr.x,-Vs.y,Vs.x,0,-Gs.y,Gs.x,0,-Sr.y,Sr.x,0];return!Mf(e,ho,uo,fo,sc)||(e=[1,0,0,0,1,0,0,0,1],!Mf(e,ho,uo,fo,sc))?!1:(rc.crossVectors(Vs,Gs),e=[rc.x,rc.y,rc.z],Mf(e,ho,uo,fo,sc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ds),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ds=[new J,new J,new J,new J,new J,new J,new J,new J],Pi=new J,ic=new Zi,ho=new J,uo=new J,fo=new J,Vs=new J,Gs=new J,Sr=new J,va=new J,sc=new J,rc=new J,Mr=new J;function Mf(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Mr.fromArray(s,r);let a=i.x*Math.abs(Mr.x)+i.y*Math.abs(Mr.y)+i.z*Math.abs(Mr.z),l=t.dot(Mr),c=e.dot(Mr),h=n.dot(Mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qe=new J,oc=new ne,vv=0,Di=class extends Xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kg,this.updateRanges=[],this.gpuType=Ti,this.version=0,this._normalizationScale=t!==void 0?cd(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oc.fromBufferAttribute(this,e),oc.applyMatrix3(t),this.setXY(e,oc.x,oc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Xg(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):qg(t,this.array)}};var Ia=class extends Di{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var La=class extends Di{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var bi=class extends Di{constructor(t,e,n){super(new Float32Array(t),e,n)}},yv=new Zi,ya=new J,bf=new J,Xs=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yv.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ya.subVectors(t,this.center);let e=ya.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ya,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ya.copy(t.center).add(bf)),this.expandByPoint(ya.copy(t.center).sub(bf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Sv=0,Si=new Ee,Tf=new gn,po=new J,hi=new Zi,Sa=new Zi,hn=new J,qs=class s extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qx(t)?La:Ia)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,e,n){return Si.makeTranslation(t,e,n),this.applyMatrix4(Si),this}scale(t,e,n){return Si.makeScale(t,e,n),this.applyMatrix4(Si),this}lookAt(t){return Tf.lookAt(t),Tf.updateMatrix(),this.applyMatrix4(Tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bi(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];hi.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let n=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Sa.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(hi.min,Sa.min),hi.expandByPoint(hn),hn.addVectors(hi.max,Sa.max),hi.expandByPoint(hn)):(hi.expandByPoint(Sa.min),hi.expandByPoint(Sa.max))}hi.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(po.fromBufferAttribute(t,c),hn.add(po)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Di(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new J,l[P]=new J;let h=new J,d=new J,u=new J,f=new ne,m=new ne,x=new ne,p=new J,g=new J;function v(P,R,D){c[P]=c[R]=c[D]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,D),f.fromBufferAttribute(r,P),m.fromBufferAttribute(r,R),x.fromBufferAttribute(r,D),d.sub(h),u.sub(h),m.sub(f),x.sub(f);let N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(N),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(N),a[P].add(p),a[R].add(p),a[D].add(p),l[P].add(g),l[R].add(g),l[D].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let P=0,R=T.length;P<R;++P){let D=T[P],N=D.start,H=D.count;for(let I=N,F=N+H;I<F;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new J,w=new J,E=new J,_=new J;function b(P){E.fromBufferAttribute(i,P),_.copy(E);let R=a[P];y.copy(R),y.sub(E.multiplyScalar(E.dot(R))).normalize(),w.crossVectors(_,R);let N=w.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,N)}for(let P=0,R=n.count;P<R;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Di(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new J,r=new J,o=new J,a=new J,l=new J,c=new J,h=new J,d=new J;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new Di(u,h,d)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wf=new J,Mv=new J,bv=new Xt,Ii=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=wf.subVectors(n,e).cross(Mv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(wf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bv.getNormalMatrix(t),i=this.coplanarPoint(wf).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Tv=0,_s=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=No(),this.name="",this.type="Material",this.blending=Io,this.side=Qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=Vf,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mc,this.stencilZFail=Mc,this.stencilZPass=Mc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ii().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ne().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ps=new J,Ef=new J,ac=new J,lc=new J,Fc=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ps)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ps.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ps.copy(this.origin).addScaledVector(this.direction,e),ps.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ef.copy(t).add(e).multiplyScalar(.5),ac.copy(e).sub(t).normalize(),lc.copy(this.origin).sub(Ef);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ac),a=lc.dot(this.direction),l=-lc.dot(ac),c=lc.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ef).addScaledVector(ac,u),f}intersectSphere(t,e){if(t.radius<0)return null;ps.subVectors(t.center,this.origin);let n=ps.dot(this.direction),i=ps.dot(ps)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ps)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,x=e.y-o.y,p=e.z-o.z,g=n.x-o.x,v=n.y-o.y,T=n.z-o.z,y=Math.abs(l),w=Math.abs(c),E=Math.abs(h),_,b,P,R,D,N,H,I,F,z,O,$;if(y>=w&&y>=E?(P=l,N=d,F=m,$=g,l>=0?(_=c,b=h,R=u,D=f,H=x,I=p,z=v,O=T):(_=h,b=c,R=f,D=u,H=p,I=x,z=T,O=v)):w>=E?(P=c,N=u,F=x,$=v,c>=0?(_=h,b=l,R=f,D=d,H=p,I=m,z=T,O=g):(_=l,b=h,R=d,D=f,H=m,I=p,z=g,O=T)):(P=h,N=f,F=p,$=T,h>=0?(_=l,b=c,R=d,D=u,H=m,I=x,z=g,O=v):(_=c,b=l,R=u,D=d,H=x,I=m,z=v,O=g)),P===0)return null;let W=_/P,C=b/P,Q=1/P,bt=R-W*N,zt=D-C*N,Z=H-W*F,rt=I-C*F,yt=z-W*$,vt=O-C*$,ct=yt*rt-vt*Z,Pt=bt*vt-zt*yt,fe=Z*zt-rt*bt;if(i){if(ct<0||Pt<0||fe<0)return null}else if((ct<0||Pt<0||fe<0)&&(ct>0||Pt>0||fe>0))return null;let At=ct+Pt+fe;if(At===0)return null;let Ht=Q*(ct*N+Pt*F+fe*$);return(At>0?Ht<0:Ht>0)?null:this.at(Ht/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bc=class extends _s{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zm=new Ee,br=new Fc,cc=new Xs,Jm=new J,hc=new J,uc=new J,fc=new J,Af=new J,dc=new J,$m=new J,pc=new J,Pe=class extends gn{constructor(t=new qs,e=new Bc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){dc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Af.fromBufferAttribute(d,t),o?dc.addScaledVector(Af,h):dc.addScaledVector(Af.sub(e),h))}e.add(dc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(r),br.copy(t.ray).recast(t.near),!(cc.containsPoint(br.origin)===!1&&(br.intersectSphere(cc,Jm)===null||br.origin.distanceToSquared(Jm)>(t.far-t.near)**2))&&(Zm.copy(r).invert(),br.copy(t.ray).applyMatrix4(Zm),!(n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,br)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),T=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,w=T;y<w;y+=3){let E=a.getX(y),_=a.getX(y+1),b=a.getX(y+2);i=mc(this,g,t,n,c,h,d,E,_,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let v=a.getX(p),T=a.getX(p+1),y=a.getX(p+2);i=mc(this,o,t,n,c,h,d,v,T,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,w=T;y<w;y+=3){let E=y,_=y+1,b=y+2;i=mc(this,g,t,n,c,h,d,E,_,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let v=p,T=p+1,y=p+2;i=mc(this,o,t,n,c,h,d,v,T,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function wv(s,t,e,n,i,r,o,a){let l;if(t.side===_n?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Qs,a),l===null)return null;pc.copy(a),pc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(pc);return c<e.near||c>e.far?null:{distance:c,point:pc.clone(),object:s}}function mc(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,hc),s.getVertexPosition(l,uc),s.getVertexPosition(c,fc);let h=wv(s,t,e,n,hc,uc,fc,$m);if(h){let d=new J;Ws.getBarycoord($m,hc,uc,fc,d),i&&(h.uv=Ws.getInterpolatedAttribute(i,a,l,c,d,new ne)),r&&(h.uv1=Ws.getInterpolatedAttribute(r,a,l,c,d,new ne)),o&&(h.normal=Ws.getInterpolatedAttribute(o,a,l,c,d,new J),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new J,materialIndex:0};Ws.getNormal(hc,uc,fc,u.normal),h.face=u,h.barycoord=d}return h}var Da=class extends Dn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=un,h=un,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Na=class extends Di{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},mo=new Ee,Km=new Ee,gc=[],Qm=new Zi,Ev=new Ee,Ma=new Pe,ba=new Xs,Ua=class extends Pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Na(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ev)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mo),Qm.copy(t.boundingBox).applyMatrix4(mo),this.boundingBox.union(Qm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mo),ba.copy(t.boundingSphere).applyMatrix4(mo),this.boundingSphere.union(ba)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ma.geometry=this.geometry,Ma.material=this.material,Ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(n),t.ray.intersectsSphere(ba)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,mo),Km.multiplyMatrices(n,mo),Ma.matrixWorld=Km,Ma.raycast(t,gc);for(let o=0,a=gc.length;o<a;o++){let l=gc[o];l.instanceId=r,l.object=this,e.push(l)}gc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Da(new Float32Array(i*this.count),i,this.count,lh,Ti));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Tr=new Xs,Av=new ne(.5,.5),_c=new J,Ys=class{constructor(t=new Ii,e=new Ii,n=new Ii,i=new Ii,r=new Ii,o=new Ii){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mi,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],x=r[9],p=r[10],g=r[11],v=r[12],T=r[13],y=r[14],w=r[15];if(i[0].setComponents(c-o,f-h,g-m,w-v).normalize(),i[1].setComponents(c+o,f+h,g+m,w+v).normalize(),i[2].setComponents(c+a,f+d,g+x,w+T).normalize(),i[3].setComponents(c-a,f-d,g-x,w-T).normalize(),n)i[4].setComponents(l,u,p,y).normalize(),i[5].setComponents(c-l,f-u,g-p,w-y).normalize();else if(i[4].setComponents(c-l,f-u,g-p,w-y).normalize(),e===Mi)i[5].setComponents(c+l,f+u,g+p,w+y).normalize();else if(e===Mo)i[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(t){Tr.center.set(0,0,0);let e=Av.distanceTo(t.center);return Tr.radius=.7071067811865476+e,Tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(_c.x=i.normal.x>0?t.max.x:t.min.x,_c.y=i.normal.y>0?t.max.y:t.min.y,_c.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(_c)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},jm=new Ee,zc=class s{constructor(){this.coordinateSystem=Mi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];jm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ys),n[i].setFromProjectionMatrix(jm,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Ys),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Oa=class extends Dn{constructor(t=[],e=Ir,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fa=class extends Dn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xs=class extends Dn{constructor(t,e,n=Ni,i,r,o,a=un,l=un,c,h=gs,d=1){if(h!==gs&&h!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Eo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ba=class extends xs{constructor(t,e=Ni,n=Ir,i,r,o=un,a=un,l,c=gs){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},za=class extends Dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Zs=class s extends qs{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(h,3)),this.setAttribute("uv",new bi(d,2));function m(x,p,g,v,T,y,w,E,_,b,P){let R=y/_,D=w/b,N=y/2,H=w/2,I=E/2,F=_+1,z=b+1,O=0,$=0,W=new J;for(let C=0;C<z;C++){let Q=C*D-H;for(let bt=0;bt<F;bt++){let zt=bt*R-N;W[x]=zt*v,W[p]=Q*T,W[g]=I,c.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[g]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(bt/_),d.push(1-C/b),O+=1}}for(let C=0;C<b;C++)for(let Q=0;Q<_;Q++){let bt=u+Q+F*C,zt=u+Q+F*(C+1),Z=u+(Q+1)+F*(C+1),rt=u+(Q+1)+F*C;l.push(bt,zt,rt),l.push(zt,Z,rt),$+=6}a.addGroup(f,$,P),f+=$,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var vs=class s extends qs{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let v=g*u-o;for(let T=0;T<c;T++){let y=T*d-r;m.push(y,-v,0),x.push(0,0,1),p.push(T/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let T=v+c*g,y=v+c*(g+1),w=v+1+c*(g+1),E=v+1+c*g;f.push(T,y,E),f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new bi(m,3)),this.setAttribute("normal",new bi(x,3)),this.setAttribute("uv",new bi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};function Dr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(tg(i))i.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(tg(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Nn(s){let t={};for(let e=0;e<s.length;e++){let n=Dr(s[e]);for(let i in n)t[i]=n[i]}return t}function tg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Cv(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ud(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Zg={clone:Dr,merge:Nn},Rv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fi=class extends _s{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rv,this.fragmentShader=Pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=Cv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(i.value);break;case"v2":this.uniforms[n].value=new ne().fromArray(i.value);break;case"v3":this.uniforms[n].value=new J().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ne().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ee().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},kc=class extends fi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ar=class extends _s{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ka=class extends Ar{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return wr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){wr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Va=class extends _s{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=eh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vc=class extends _s{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gc=class extends _s{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function go(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function xc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Js=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Hc=class extends Js{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pf,endingEnd:Pf}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case If:r=t,a=2*e-n;break;case Lf:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case If:o=t,l=2*n-e;break;case Lf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,v=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,T=(-1-f)*p+(1.5+f)*x+.5*m,y=f*p-f*x;for(let w=0;w!==a;++w)r[w]=g*o[h+w]+v*o[c+w]+T*o[l+w]+y*o[d+w];return r}},Wc=class extends Js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Xc=class extends Js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},qc=class extends Js{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),x=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*x+o[l+p]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let x=o[c+m],p=o[l+m],g=f*u+m*2,v=d[g],T=d[g+1],y=t*u+m*2,w=h[y],E=h[y+1],_=Lv(n,e,v,w,i);r[m]=Jg(_,x,T,E,p)}return r}};function Jg(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Iv(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Lv(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=Jg(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=Iv(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var di=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=go(e,this.TimeBufferType),this.values=go(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:go(t.times,Array),values:go(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),xc(t.settings)&&(n.settings={inTangents:go(t.settings.inTangents,Array),outTangents:go(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new qc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ea:e=this.InterpolantFactoryMethodDiscrete;break;case Dc:e=this.InterpolantFactoryMethodLinear;break;case Sc:e=this.InterpolantFactoryMethodSmooth;break;case Rf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return Dc;case this.InterpolantFactoryMethodSmooth:return Sc;case this.InterpolantFactoryMethodBezier:return Rf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;xc(this.settings)&&(eg(this.settings.inTangents,t),eg(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;xc(this.settings)&&(ng(this.settings.inTangents,t),ng(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Wt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Yx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Sc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,xc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function eg(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function ng(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Dc;var $s=class extends di{constructor(t,e,n){super(t,e,n)}};$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Ea;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends di{constructor(t,e,n,i){super(t,e,n,i)}};Yc.prototype.ValueTypeName="color";var Zc=class extends di{constructor(t,e,n,i){super(t,e,n,i)}};Zc.prototype.ValueTypeName="number";var Jc=class extends Js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)qi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ga=class extends di{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Jc(this.times,this.values,this.getValueSize(),t)}};Ga.prototype.ValueTypeName="quaternion";Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var Ks=class extends di{constructor(t,e,n){super(t,e,n)}};Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Ea;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var $c=class extends di{constructor(t,e,n,i){super(t,e,n,i)}};$c.prototype.ValueTypeName="vector";var bc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(ig(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!ig(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function ig(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Kc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$g=new Kc,Co=class{constructor(t){this.manager=t!==void 0?t:$g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Co.DEFAULT_MATERIAL_NAME="__DEFAULT";var _o=new WeakMap,Qc=class extends Co{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=bc.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=_o.get(o);d===void 0&&(d=[],_o.set(o,d)),d.push({onLoad:e,onError:i})}return o}let a=bo("img");function l(){h(),e&&e(this);let d=_o.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}_o.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),bc.remove(`image:${t}`);let u=_o.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];m.onError&&m.onError(d)}_o.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),bc.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}};var Ha=class extends Co{constructor(t){super(t)}load(t,e,n,i){let r=new Dn,o=new Qc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},Wa=class extends gn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Cf=new Ee,sg=new J,rg=new J,Xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;sg.setFromMatrixPosition(t.matrixWorld),e.position.copy(sg),rg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rg),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Cf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Cf,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Mo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Cf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},vc=new J,yc=new qi,Hi=new J,qa=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(vc,yc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vc,yc,Hi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(vc,yc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vc,yc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hs=new J,og=new ne,ag=new ne,Ln=class extends qa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hs.x,Hs.y).multiplyScalar(-t/Hs.z),Hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hs.x,Hs.y).multiplyScalar(-t/Hs.z)}getViewSize(t,e){return this.getViewBounds(t,og,ag),e.subVectors(ag,og)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ta*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Df=class extends Xa{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0}},Cr=class extends Wa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Df}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ya=class extends qa{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Nf=class extends Xa{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Za=class extends Wa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Nf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var xo=-90,vo=1,Ro=class extends gn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ln(xo,vo,t,e);i.layers=this.layers,this.add(i);let r=new Ln(xo,vo,t,e);r.layers=this.layers,this.add(r);let o=new Ln(xo,vo,t,e);o.layers=this.layers,this.add(o);let a=new Ln(xo,vo,t,e);a.layers=this.layers,this.add(a);let l=new Ln(xo,vo,t,e);l.layers=this.layers,this.add(l);let c=new Ln(xo,vo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},jc=class extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var fd="\\[\\]\\.:\\/",Dv=new RegExp("["+fd+"]","g"),dd="[^"+fd+"]",Nv="[^"+fd.replace("\\.","")+"]",Uv=/((?:WC+[\/:])*)/.source.replace("WC",dd),Ov=/(WCOD+)?/.source.replace("WCOD",Nv),Fv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dd),Bv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dd),zv=new RegExp("^"+Uv+Ov+Fv+Bv+"$"),kv=["material","materials","bones","map"],Uf=class{constructor(t,e,n){let i=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dv,"")}static parseTrackName(t){let e=zv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);kv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Uf;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nw=new Float32Array(1);var vd=class vd{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};vd.prototype.isMatrix2=!0;var Of=vd;function pd(s,t,e,n){let i=Vv(n);switch(e){case td:return s*t;case lh:return s*t/i.components*i.byteLength;case ch:return s*t/i.components*i.byteLength;case js:return s*t*2/i.components*i.byteLength;case hh:return s*t*2/i.components*i.byteLength;case ed:return s*t*3/i.components*i.byteLength;case Oi:return s*t*4/i.components*i.byteLength;case uh:return s*t*4/i.components*i.byteLength;case Qa:case ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tl:case el:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dh:case mh:return Math.max(s,16)*Math.max(t,8)/4;case fh:case ph:return Math.max(s,8)*Math.max(t,8)/2;case gh:case _h:case vh:case yh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xh:case nl:case Sh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Th:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case wh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ah:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Nh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Uh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Oh:case Fh:case Bh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case zh:case kh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case il:case Vh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vv(s){switch(s){case Qn:case $f:return{byteLength:1,components:1};case Do:case Kf:case Ui:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case Ni:case rh:case Ti:return{byteLength:4,components:1};case Qf:case jf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function x_(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Hv(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Wv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xv=`#ifdef USE_ALPHAHASH
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
#endif`,qv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$v=`#ifdef USE_AOMAP
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
#endif`,Kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qv=`#ifdef USE_BATCHING
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
#endif`,jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ey=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iy=`#ifdef USE_IRIDESCENCE
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
#endif`,sy=`#ifdef USE_BUMPMAP
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dy=`#define PI 3.141592653589793
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
} // validated`,py=`vec3 transformedNormal = objectNormal;
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
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",yy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sy=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,by=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Py=`#ifdef USE_GRADIENTMAP
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
}`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ly=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ny=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,By=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ky=`PhysicalMaterial material;
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
#endif`,Vy=`uniform sampler2D dfgLUT;
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
}`,Gy=`
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
#endif`,Hy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jy=`#if defined( USE_POINTS_UV )
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
#endif`,tS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iS=`#if defined( USE_MORPHCOLORS )
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
#endif`,sS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rS=`#ifdef USE_MORPHTARGETS
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
#endif`,oS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fS=`#ifdef USE_NORMALMAP
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
#endif`,dS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_S=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ES=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CS=`float getShadowMask() {
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
}`,RS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PS=`#ifdef USE_SKINNING
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
#endif`,IS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LS=`#ifdef USE_SKINNING
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
#endif`,DS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,US=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FS=`#ifdef USE_TRANSMISSION
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
#endif`,BS=`#ifdef USE_TRANSMISSION
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
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,HS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
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
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`uniform float backgroundBlurriness;
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
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`#include <common>
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
}`,$S=`#if DEPTH_PACKING == 3200
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
}`,KS=`#define DISTANCE
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
}`,QS=`#define DISTANCE
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
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
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
}`,nM=`uniform vec3 diffuse;
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
}`,iM=`#include <common>
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
}`,sM=`uniform vec3 diffuse;
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
}`,rM=`#define LAMBERT
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
}`,oM=`#define LAMBERT
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
}`,aM=`#define MATCAP
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
}`,lM=`#define MATCAP
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
}`,cM=`#define NORMAL
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
}`,hM=`#define NORMAL
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
}`,uM=`#define PHONG
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
}`,fM=`#define PHONG
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
}`,dM=`#define STANDARD
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
}`,pM=`#define STANDARD
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
}`,mM=`#define TOON
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
}`,gM=`#define TOON
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
}`,_M=`uniform float size;
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
}`,xM=`uniform vec3 diffuse;
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
}`,vM=`#include <common>
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
}`,yM=`uniform vec3 color;
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
}`,SM=`uniform float rotation;
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
}`,MM=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Wv,alphahash_pars_fragment:Xv,alphamap_fragment:qv,alphamap_pars_fragment:Yv,alphatest_fragment:Zv,alphatest_pars_fragment:Jv,aomap_fragment:$v,aomap_pars_fragment:Kv,batching_pars_vertex:Qv,batching_vertex:jv,begin_vertex:ty,beginnormal_vertex:ey,bsdfs:ny,iridescence_fragment:iy,bumpmap_pars_fragment:sy,clipping_planes_fragment:ry,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ay,clipping_planes_vertex:ly,color_fragment:cy,color_pars_fragment:hy,color_pars_vertex:uy,color_vertex:fy,common:dy,defaultnormal_vertex:py,displacementmap_pars_vertex:my,displacementmap_vertex:gy,emissivemap_fragment:_y,emissivemap_pars_fragment:xy,colorspace_fragment:vy,colorspace_pars_fragment:yy,envmap_fragment:Sy,envmap_common_pars_fragment:My,envmap_pars_fragment:by,envmap_pars_vertex:Ty,envmap_physical_pars_fragment:Uy,envmap_vertex:wy,fog_vertex:Ey,fog_pars_vertex:Ay,fog_fragment:Cy,fog_pars_fragment:Ry,gradientmap_pars_fragment:Py,lightmap_pars_fragment:Iy,lights_lambert_fragment:Ly,lights_lambert_pars_fragment:Dy,lights_pars_begin:Ny,lights_toon_fragment:Oy,lights_toon_pars_fragment:Fy,lights_phong_fragment:By,lights_phong_pars_fragment:zy,lights_physical_fragment:ky,lights_physical_pars_fragment:Vy,lights_fragment_begin:Gy,lights_fragment_maps:Hy,lights_fragment_end:Wy,lightprobes_pars_fragment:Xy,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:Zy,logdepthbuf_vertex:Jy,map_fragment:$y,map_pars_fragment:Ky,map_particle_fragment:Qy,map_particle_pars_fragment:jy,metalnessmap_fragment:tS,metalnessmap_pars_fragment:eS,morphinstance_vertex:nS,morphcolor_vertex:iS,morphnormal_vertex:sS,morphtarget_pars_vertex:rS,morphtarget_vertex:oS,normal_fragment_begin:aS,normal_fragment_maps:lS,normal_pars_fragment:cS,normal_pars_vertex:hS,normal_vertex:uS,normalmap_pars_fragment:fS,clearcoat_normal_fragment_begin:dS,clearcoat_normal_fragment_maps:pS,clearcoat_pars_fragment:mS,iridescence_pars_fragment:gS,opaque_fragment:_S,packing:xS,premultiplied_alpha_fragment:vS,project_vertex:yS,dithering_fragment:SS,dithering_pars_fragment:MS,roughnessmap_fragment:bS,roughnessmap_pars_fragment:TS,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:ES,shadowmap_vertex:AS,shadowmask_pars_fragment:CS,skinbase_vertex:RS,skinning_pars_vertex:PS,skinning_vertex:IS,skinnormal_vertex:LS,specularmap_fragment:DS,specularmap_pars_fragment:NS,tonemapping_fragment:US,tonemapping_pars_fragment:OS,transmission_fragment:FS,transmission_pars_fragment:BS,uv_pars_fragment:zS,uv_pars_vertex:kS,uv_vertex:VS,worldpos_vertex:GS,background_vert:HS,background_frag:WS,backgroundCube_vert:XS,backgroundCube_frag:qS,cube_vert:YS,cube_frag:ZS,depth_vert:JS,depth_frag:$S,distance_vert:KS,distance_frag:QS,equirect_vert:jS,equirect_frag:tM,linedashed_vert:eM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:sM,meshlambert_vert:rM,meshlambert_frag:oM,meshmatcap_vert:aM,meshmatcap_frag:lM,meshnormal_vert:cM,meshnormal_frag:hM,meshphong_vert:uM,meshphong_frag:fM,meshphysical_vert:dM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:gM,points_vert:_M,points_frag:xM,shadow_vert:vM,shadow_frag:yM,sprite_vert:SM,sprite_frag:MM},Tt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Qi={basic:{uniforms:Nn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Nn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Nn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Nn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Nn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Nn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Nn([Tt.points,Tt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Nn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Nn([Tt.common,Tt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Nn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Nn([Tt.sprite,Tt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:Nn([Tt.common,Tt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:Nn([Tt.lights,Tt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Qi.physical={uniforms:Nn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Gh={r:0,b:0,g:0},bM=new Ee,v_=new Xt;v_.set(-1,0,0,0,1,0,0,0,1);function TM(s,t,e,n,i,r){let o=new qt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=t.get(T,y)}return T}function m(v){let T=!1,y=f(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),T=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,T){let y=f(T);y&&y.isCubeTexture?(c===void 0&&(c=new Pe(new Zs(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Dr(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(v_),c.material.toneMapped=le.getTransfer(y.colorSpace)!==xe,(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pe(new vs(2,2),new fi({name:"BackgroundMaterial",uniforms:Dr(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Qs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=le.getTransfer(y.colorSpace)!==xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,T){v.getRGB(Gh,ud(s)),e.buffers.color.setClear(Gh.r,Gh.g,Gh.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:x,dispose:g}}function wM(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(D,N,H,I,F){let z=!1,O=d(D,I,H,N);r!==O&&(r=O,c(r.object)),z=f(D,I,H,F),z&&m(D,I,H,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(D,N,H,I),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,N,H,I){let F=I.wireframe===!0,z=n[N.id];z===void 0&&(z={},n[N.id]=z);let O=D.isInstancedMesh===!0?D.id:0,$=z[O];$===void 0&&($={},z[O]=$);let W=$[H.id];W===void 0&&(W={},$[H.id]=W);let C=W[F];return C===void 0&&(C=u(l()),W[F]=C),C}function u(D){let N=[],H=[],I=[];for(let F=0;F<e;F++)N[F]=0,H[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,N,H,I){let F=r.attributes,z=N.attributes,O=0,$=H.getAttributes();for(let W in $)if($[W].location>=0){let Q=F[W],bt=z[W];if(bt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(bt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(bt=D.instanceColor)),Q===void 0||Q.attribute!==bt||bt&&Q.data!==bt.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function m(D,N,H,I){let F={},z=N.attributes,O=0,$=H.getAttributes();for(let W in $)if($[W].location>=0){let Q=z[W];Q===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let bt={};bt.attribute=Q,Q&&Q.data&&(bt.data=Q.data),F[W]=bt,O++}r.attributes=F,r.attributesNum=O,r.index=I}function x(){let D=r.newAttributes;for(let N=0,H=D.length;N<H;N++)D[N]=0}function p(D){g(D,0)}function g(D,N){let H=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;H[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),F[D]!==N&&(s.vertexAttribDivisor(D,N),F[D]=N)}function v(){let D=r.newAttributes,N=r.enabledAttributes;for(let H=0,I=N.length;H<I;H++)N[H]!==D[H]&&(s.disableVertexAttribArray(H),N[H]=0)}function T(D,N,H,I,F,z,O){O===!0?s.vertexAttribIPointer(D,N,H,F,z):s.vertexAttribPointer(D,N,H,I,F,z)}function y(D,N,H,I){x();let F=I.attributes,z=H.getAttributes(),O=N.defaultAttributeValues;for(let $ in z){let W=z[$];if(W.location>=0){let C=F[$];if(C===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(C=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(C=D.instanceColor)),C!==void 0){let Q=C.normalized,bt=C.itemSize,zt=t.get(C);if(zt===void 0)continue;let Z=zt.buffer,rt=zt.type,yt=zt.bytesPerElement,vt=rt===s.INT||rt===s.UNSIGNED_INT||C.gpuType===rh;if(C.isInterleavedBufferAttribute){let ct=C.data,Pt=ct.isInterleavedBuffer===!0?ct.stride:ct.itemSize,fe=C.offset;if(ct.isInstancedInterleavedBuffer||ct.isInstancedBufferAttribute){for(let At=0;At<W.locationSize;At++)g(W.location+At,ct.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let At=0;At<W.locationSize;At++)p(W.location+At);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let At=0;At<W.locationSize;At++)T(W.location+At,bt/W.locationSize,rt,Q,Pt*yt,(fe+bt/W.locationSize*At)*yt,vt)}else{if(C.isInstancedBufferAttribute){for(let ct=0;ct<W.locationSize;ct++)g(W.location+ct,C.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ct=0;ct<W.locationSize;ct++)p(W.location+ct);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let ct=0;ct<W.locationSize;ct++)T(W.location+ct,bt/W.locationSize,rt,Q,bt*yt,bt/W.locationSize*ct*yt,vt)}}else if(O!==void 0){let Q=O[$];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(W.location,Q);break;case 3:s.vertexAttrib3fv(W.location,Q);break;case 4:s.vertexAttrib4fv(W.location,Q);break;default:s.vertexAttrib1fv(W.location,Q)}}}}v()}function w(){P();for(let D in n){let N=n[D];for(let H in N){let I=N[H];for(let F in I){let z=I[F];for(let O in z)h(z[O].object),delete z[O];delete I[F]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let H in N){let I=N[H];for(let F in I){let z=I[F];for(let O in z)h(z[O].object),delete z[O];delete I[F]}}delete n[D.id]}function _(D){for(let N in n){let H=n[N];for(let I in H){let F=H[I];if(F[D.id]===void 0)continue;let z=F[D.id];for(let O in z)h(z[O].object),delete z[O];delete F[D.id]}}}function b(D){for(let N in n){let H=n[N],I=D.isInstancedMesh===!0?D.id:0,F=H[I];if(F!==void 0){for(let z in F){let O=F[z];for(let $ in O)h(O[$].object),delete O[$];delete F[z]}delete H[I],Object.keys(H).length===0&&delete n[N]}}}function P(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function EM(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function AM(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==Oi&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let b=_===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Qn&&_!==Ti&&!b&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Gt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:w,samples:E}}function CM(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Ii,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,T=v*4,y=g.clippingState||null;l.value=y,y=h(m,u,T,f);for(let w=0;w!==T;++w)y[w]=e[w];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,y=f;T!==x;++T,y+=4)o.copy(d[T]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var al=class extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Oa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zs(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Rr});r.uniforms.tEquirect.value=e;let o=new Pe(i,r),a=e.minFilter;return e.minFilter===ys&&(e.minFilter=Wn),new Ro(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Kg=256,RM=3,PM=20,y_=256,S_=16,IM=3,LM=new J,DM=new qt,Oo=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ro(1,10,null),this._boxMesh=new Pe(new Zs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=LM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(DM));let p=new Ro(n,i,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Kg,ld(t))}_fromTexture(t,e){t.mapping===Ir||t.mapping===Lo?this._setSize(t.image.length===0?Kg:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Qg(t,!1,!1),n=Math.log2(t)-RM;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Qg(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ir||t.mapping===Lo?(this._cubemapMaterial===null&&(this._cubemapMaterial=t_()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jg()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=NM(),this._integrationMaterial=UM());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/S_);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-IM)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(y_*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=OM());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function Qg(s,t,e){return new al(s,{minFilter:ys,generateMipmaps:t,type:Ui,colorSpace:Aa,depthBuffer:e})}function ll(s,t,e){return new fi({name:s,uniforms:t,vertexShader:Qt.cube_vert,fragmentShader:e,side:_n,blending:Rr,depthTest:!1,depthWrite:!1})}function NM(){return ll("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${y_}u

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
	`)}function UM(){return ll("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:S_}},`

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
	`)}function OM(){return ll("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${PM}
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
	`)}function jg(){return ll("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function t_(){return ll("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function FM(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===nh||f===ih)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new al(m.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===nh||f===ih,x=f===Ir||f===Lo;if(m||x){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Oo(s)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let v=u.image;return m&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Oo(s)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===nh?u.mapping=Ir:f===ih&&(u.mapping=Lo),u}function l(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function BM(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&wr("WebGLRenderer: "+n+" extension not supported."),i}}}function zM(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let x=r.get(m);x&&(t.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(m){let x=m.attributes;for(let p in x)t.update(x[p],s.ARRAY_BUFFER)}function d(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,T=p.count>=65535?La:Ia,y=new T(Math.ceil(v/3)*6,1),w=y.array;if(x!==null){let _=x.array;g=x.version;for(let b=0,P=0;b<v;b+=3){let R=_[b+0],D=_[b+1],N=_[b+2];w[P++]=R,w[P++]=D,w[P++]=D,w[P++]=N,w[P++]=N,w[P++]=R}}else{g=p.version;for(let _=0,b=0;_<v;_+=3){let P=_+0,R=_+1,D=_+2;w[b++]=P,w[b++]=R,w[b++]=R,w[b++]=D,w[b++]=D,w[b++]=P}}y.version=g;let E=r.get(m);E&&t.remove(E),r.set(m,y)}function u(m){let x=r.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in i){let x=i[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function kM(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function VM(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Wt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function GM(s,t,e){let n=new WeakMap,i=new Ne;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let P=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),x===!0&&(T=3);let y=a.attributes.position.count*T,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*w*4*d),_=new Ra(E,y,w,d);_.type=Ti,_.needsUpdate=!0;let b=T*4;for(let R=0;R<d;R++){let D=p[R],N=g[R],H=v[R],I=y*w*4*R;for(let F=0;F<D.count;F++){let z=F*b;f===!0&&(i.fromBufferAttribute(D,F),E[I+z+0]=i.x,E[I+z+1]=i.y,E[I+z+2]=i.z,E[I+z+3]=0),m===!0&&(i.fromBufferAttribute(N,F),E[I+z+4]=i.x,E[I+z+5]=i.y,E[I+z+6]=i.z,E[I+z+7]=0),x===!0&&(i.fromBufferAttribute(H,F),E[I+z+8]=i.x,E[I+z+9]=i.y,E[I+z+10]=i.z,E[I+z+11]=H.itemSize===4?i.w:1)}}u={count:d,texture:_,size:new ne(y,w)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function HM(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var WM={[Gf]:"LINEAR_TONE_MAPPING",[Hf]:"REINHARD_TONE_MAPPING",[Wf]:"CINEON_TONE_MAPPING",[Xf]:"ACES_FILMIC_TONE_MAPPING",[Yf]:"AGX_TONE_MAPPING",[Zf]:"NEUTRAL_TONE_MAPPING",[qf]:"CUSTOM_TONE_MAPPING"};function XM(s,t,e,n,i,r){let o=new ui(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new qs;h.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new bi([0,2,0,0,2,0],2));let d=new kc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Pe(h,d),f=new Ya(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,v=null,T=[],y=!1;this.setSize=function(w,E){o.setSize(w,E),a!==null&&a.setSize(w,E),l!==null&&l.setSize(w,E);for(let _=0;_<T.length;_++){let b=T[_];b.setSize&&b.setSize(w,E)}},this.setEffects=function(w){T=w,y=T.length>0&&T[0].isRenderPass===!0;let E=o.width,_=o.height;T.length>0&&a===null&&(a=new ui(E,_,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new ui(E,_,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));let b=i===!0&&T.some(P=>P.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new xs(E,_),r===!0&&(c.format=Ss,c.type=Lr)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let P=0;P<T.length;P++){let R=T[P];R.setSize&&R.setSize(E,_),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,E){if(p||w.toneMapping===$i&&T.length===0)return!1;if(v=E,E!==null){let _=E.width,b=E.height;(o.width!==_||o.height!==b)&&this.setSize(_,b)}return y===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=$i,!0},this.hasRenderPass=function(){return y},this.end=function(w,E){w.toneMapping=g,p=!0;let _=o,b=a;for(let P=0;P<T.length;P++){let R=T[P];R.enabled!==!1&&(R.render(w,b,_,E),R.needsSwap!==!1&&(_=b,b=b===a?l:a))}if(m!==w.outputColorSpace||x!==w.toneMapping){m=w.outputColorSpace,x=w.toneMapping,d.defines={},le.getTransfer(m)===xe&&(d.defines.SRGB_TRANSFER="");let P=WM[x];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(v),w.render(u,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var M_=new Dn,b_=new xs(1,1),T_=new Ba(1),w_=new Ra,E_=new Oc,A_=new Oa,e_=[],n_=[],i_=new Float32Array(16),s_=new Float32Array(9),r_=new Float32Array(4);function Fo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=e_[i];if(r===void 0&&(r=new Float32Array(i),e_[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function rn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function on(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Xh(s,t){let e=n_[t];e===void 0&&(e=new Int32Array(t),n_[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function qM(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function YM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2fv(this.addr,t),on(e,t)}}function ZM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;s.uniform3fv(this.addr,t),on(e,t)}}function JM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4fv(this.addr,t),on(e,t)}}function $M(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;r_.set(n),s.uniformMatrix2fv(this.addr,!1,r_),on(e,n)}}function KM(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;s_.set(n),s.uniformMatrix3fv(this.addr,!1,s_),on(e,n)}}function QM(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;i_.set(n),s.uniformMatrix4fv(this.addr,!1,i_),on(e,n)}}function jM(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function tb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2iv(this.addr,t),on(e,t)}}function eb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;s.uniform3iv(this.addr,t),on(e,t)}}function nb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4iv(this.addr,t),on(e,t)}}function ib(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function sb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2uiv(this.addr,t),on(e,t)}}function rb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;s.uniform3uiv(this.addr,t),on(e,t)}}function ob(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4uiv(this.addr,t),on(e,t)}}function qh(s){return s.version===0&&(s.compareFunction=sd,s.needsUpdate=!0),s}function ab(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=qh(b_):r=M_,e.setTexture2D(t||r,i)}function lb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||E_,i)}function cb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=qh(T_):r=A_,e.setTextureCube(t||r,i)}function hb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||w_,i)}function ub(s){switch(s){case 5126:return qM;case 35664:return YM;case 35665:return ZM;case 35666:return JM;case 35674:return $M;case 35675:return KM;case 35676:return QM;case 5124:case 35670:return jM;case 35667:case 35671:return tb;case 35668:case 35672:return eb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return sb;case 36295:return rb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return hb}}function fb(s,t){s.uniform1fv(this.addr,t)}function db(s,t){let e=Fo(t,this.size,2);s.uniform2fv(this.addr,e)}function pb(s,t){let e=Fo(t,this.size,3);s.uniform3fv(this.addr,e)}function mb(s,t){let e=Fo(t,this.size,4);s.uniform4fv(this.addr,e)}function gb(s,t){let e=Fo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function _b(s,t){let e=Fo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function xb(s,t){let e=Fo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function vb(s,t){s.uniform1iv(this.addr,t)}function yb(s,t){s.uniform2iv(this.addr,t)}function Sb(s,t){s.uniform3iv(this.addr,t)}function Mb(s,t){s.uniform4iv(this.addr,t)}function bb(s,t){s.uniform1uiv(this.addr,t)}function Tb(s,t){s.uniform2uiv(this.addr,t)}function wb(s,t){s.uniform3uiv(this.addr,t)}function Eb(s,t){s.uniform4uiv(this.addr,t)}function Ab(s,t,e){let n=this.cache,i=t.length,r=Xh(e,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=qh(b_):o=M_;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Cb(s,t,e){let n=this.cache,i=t.length,r=Xh(e,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||E_,r[o])}function Rb(s,t,e){let n=this.cache,i=t.length,r=Xh(e,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=qh(T_):o=A_;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function Pb(s,t,e){let n=this.cache,i=t.length,r=Xh(e,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||w_,r[o])}function Ib(s){switch(s){case 5126:return fb;case 35664:return db;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return _b;case 35676:return xb;case 5124:case 35670:return vb;case 35667:case 35671:return yb;case 35668:case 35672:return Sb;case 35669:case 35673:return Mb;case 5125:return bb;case 36294:return Tb;case 36295:return wb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Pb}}var Md=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ub(e.type)}},bd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ib(e.type)}},Td=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},yd=/(\w+)(\])?(\[|\.)?/g;function o_(s,t){s.seq.push(t),s.map[t.id]=t}function Lb(s,t,e){let n=s.name,i=n.length;for(yd.lastIndex=0;;){let r=yd.exec(n),o=yd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){o_(e,c===void 0?new Md(a,s,t):new bd(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Td(a),o_(e,d)),e=d}}}var Uo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Lb(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function a_(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Db=37297,Nb=0;function Ub(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var l_=new Xt;function Ob(s){le._getMatrix(l_,le.workingColorSpace,s);let t=`mat3( ${l_.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case Ca:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function c_(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ub(s.getShaderSource(t),a)}else return r}function Fb(s,t){let e=Ob(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Bb={[Gf]:"Linear",[Hf]:"Reinhard",[Wf]:"Cineon",[Xf]:"ACESFilmic",[Yf]:"AgX",[Zf]:"Neutral",[qf]:"Custom"};function zb(s,t){let e=Bb[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hh=new J;function kb(){le.getLuminanceCoefficients(Hh);let s=Hh.x.toFixed(4),t=Hh.y.toFixed(4),e=Hh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function Gb(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hb(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ol(s){return s!==""}function h_(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function u_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(s){return s.replace(Wb,Xb)}function Xb(s,t){let e=Qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return wd(e)}var qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f_(s){return s.replace(qb,Yb)}function Yb(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function d_(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var Zb={[Ja]:"SHADOWMAP_TYPE_PCF",[Po]:"SHADOWMAP_TYPE_VSM"};function Jb(s){return Zb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $b={[Lo]:"ENVMAP_MODE_REFRACTION"};function Kb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":$b[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qb={[eh]:"ENVMAP_BLENDING_MULTIPLY",[Rg]:"ENVMAP_BLENDING_MIX",[Pg]:"ENVMAP_BLENDING_ADD"};function jb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Qb[s.combine]||"ENVMAP_BLENDING_NONE"}function tT(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Jb(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Kb(e),d=jb(e),u=Vb(e),f=Gb(r),m=i.createProgram(),x,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ol).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ol).join(`
`),p.length>0&&(p+=`
`)):(x=[d_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),p=[d_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?Qt.tonemapping_pars_fragment:"",e.toneMapping!==$i?zb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Fb("linearToOutputTexel",e.outputColorSpace),kb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ol).join(`
`)),o=wd(o),o=h_(o,e),o=u_(o,e),a=wd(a),a=h_(a,e),a=u_(a,e),o=f_(o),a=f_(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+x+o,T=g+p+a,y=a_(i,i.VERTEX_SHADER,v),w=a_(i,i.FRAGMENT_SHADER,T);i.attachShader(m,y),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(R){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(m)||"",N=i.getShaderInfoLog(y)||"",H=i.getShaderInfoLog(w)||"",I=D.trim(),F=N.trim(),z=H.trim(),O=!0,$=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,y,w);else{let W=c_(i,y,"vertex"),C=c_(i,w,"fragment");Wt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+W+`
`+C)}else I!==""?Gt("WebGLProgram: Program Info Log:",I):(F===""||z==="")&&($=!1);$&&(R.diagnostics={runnable:O,programLog:I,vertexShader:{log:F,prefix:x},fragmentShader:{log:z,prefix:p}})}i.deleteShader(y),i.deleteShader(w),_=new Uo(i,m),b=Hb(i,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,Db)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nb++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=w,this}var eT=0,Ed=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ad(t),e.set(t,n)),n}},Ad=class{constructor(t){this.id=eT++,this.code=t,this.usedTimes=0}};function nT(s){return s===js||s===nl||s===il}function iT(s,t,e,n,i,r){let o=new Pa,a=new Ed,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,b,P,R,D,N){let H=R.fog,I=D.geometry,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=t.get(_.envMap||F,z),$=u[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&Gt("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let C=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=C!==void 0?C.length:0,bt=0;I.morphAttributes.position!==void 0&&(bt=1),I.morphAttributes.normal!==void 0&&(bt=2),I.morphAttributes.color!==void 0&&(bt=3);let zt,Z,rt,yt;if($){let nt=Qi[$];zt=nt.vertexShader,Z=nt.fragmentShader}else{zt=_.vertexShader,Z=_.fragmentShader;let nt=a.getVertexShaderStage(_),wt=a.getFragmentShaderStage(_);a.update(_,nt,wt),rt=nt.id,yt=wt.id}let vt=s.getRenderTarget(),ct=s.state.buffers.depth.getReversed(),Pt=D.isInstancedMesh===!0,fe=D.isBatchedMesh===!0,At=!!_.map,Ht=!!_.matcap,It=!!O,Ot=It&&O.isPMREMTexture===!0,jt=!!_.aoMap,ce=!!_.lightMap,q=!!_.bumpMap&&_.wireframe===!1,$t=!!_.normalMap,ye=!!_.displacementMap,me=!!_.emissiveMap,ie=!!_.metalnessMap,Ae=!!_.roughnessMap,Ue=_.anisotropy>0,B=_.clearcoat>0,_t=_.diffuseRoughness>0,Dt=_.dispersion>0,kt=_.retroreflectivity>0,ut=_.iridescence>0,he=_.sheen>0,Ct=_.transmission>0,Vt=Ue&&!!_.anisotropyMap,A=B&&!!_.clearcoatMap,S=B&&!!_.clearcoatNormalMap,V=B&&!!_.clearcoatRoughnessMap,ot=_t&&!!_.diffuseRoughnessMap,it=ut&&!!_.iridescenceMap,ft=ut&&!!_.iridescenceThicknessMap,gt=he&&!!_.sheenColorMap,G=he&&!!_.sheenRoughnessMap,tt=!!_.specularMap,ht=!!_.specularColorMap,L=!!_.specularIntensityMap,j=Ct&&!!_.transmissionMap,K=Ct&&!!_.thicknessMap,dt=!!_.gradientMap,lt=!!_.alphaMap,pt=_.alphaTest>0,at=!!_.alphaHash,mt=!!_.extensions,st=$i;_.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(st=s.toneMapping);let et=Ot?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,xt={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:zt,fragmentShader:Z,defines:_.defines,customVertexShaderID:rt,customFragmentShaderID:yt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:fe,batchingColor:fe&&D._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&D.instanceColor!==null,instancingMorph:Pt&&D.morphTexture!==null,outputColorSpace:vt===null?s.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:At,matcap:Ht,envMap:It,envMapMode:It&&O.mapping,envMapPMREM:Ot,envMapMaxLod:Ot?et.length-1:null,envMapSize:Ot?et[0].width:null,aoMap:jt,lightMap:ce,bumpMap:q,normalMap:$t,displacementMap:ye,emissiveMap:me,normalMapObjectSpace:$t&&_.normalMapType===Dg,normalMapTangentSpace:$t&&_.normalMapType===sl,packedNormalMap:$t&&_.normalMapType===sl&&nT(_.normalMap.format),metalnessMap:ie,roughnessMap:Ae,anisotropy:Ue,anisotropyMap:Vt,clearcoat:B,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:V,diffuseRoughness:_t,diffuseRoughnessMap:ot,dispersion:Dt,retroreflection:kt,iridescence:ut,iridescenceMap:it,iridescenceThicknessMap:ft,sheen:he,sheenColorMap:gt,sheenRoughnessMap:G,specularMap:tt,specularColorMap:ht,specularIntensityMap:L,transmission:Ct,transmissionMap:j,thicknessMap:K,gradientMap:dt,opaque:_.transparent===!1&&_.blending===Io&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:pt,alphaHash:at,combine:_.combine,mapUv:At&&f(_.map.channel),aoMapUv:jt&&f(_.aoMap.channel),lightMapUv:ce&&f(_.lightMap.channel),bumpMapUv:q&&f(_.bumpMap.channel),normalMapUv:$t&&f(_.normalMap.channel),displacementMapUv:ye&&f(_.displacementMap.channel),emissiveMapUv:me&&f(_.emissiveMap.channel),metalnessMapUv:ie&&f(_.metalnessMap.channel),roughnessMapUv:Ae&&f(_.roughnessMap.channel),anisotropyMapUv:Vt&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:it&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:G&&f(_.sheenRoughnessMap.channel),specularMapUv:tt&&f(_.specularMap.channel),specularColorMapUv:ht&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:K&&f(_.thicknessMap.channel),alphaMapUv:lt&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&($t||Ue),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(At||lt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&$t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ct,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:bt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.filter(nt=>nt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:At&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===xe,decodeVideoTextureEmissive:me&&_.emissiveMap.isVideoTexture===!0&&le.getTransfer(_.emissiveMap.colorSpace)===xe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ji,flipSided:_.side===_n,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:mt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&_.extensions.multiDraw===!0||fe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)b.push(P),b.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(b,_),g(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function g(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let b=u[_.type],P;if(b){let R=Qi[b];P=Zg.clone(R.uniforms)}else P=_.uniforms;return P}function T(_,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new tT(s,b,_,i),c.push(P),h.set(b,P)),P}function y(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:E}}function sT(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function rT(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function p_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function m_(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,x,p,g){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:g},s[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=p,v.group=g),t++,v}function l(u,f,m,x,p,g,v){v.reversedDepth===!0&&(p=-p);let T=a(u,f,m,x,p,g);m.transmission>0?n.push(T):m.transparent===!0?i.push(T):e.push(T)}function c(u,f,m,x,p,g){let v=a(u,f,m,x,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||rT),n.length>1&&n.sort(f||p_),i.length>1&&i.sort(f||p_)}function d(){for(let u=t,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function oT(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new m_,s.set(n,[o])):i>=r.length?(o=new m_,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function aT(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new qt};break;case"SpotLight":e={position:new J,direction:new J,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new J,halfWidth:new J,halfHeight:new J};break}return s[t.id]=e,e}}}function lT(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var cT=0;function hT(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function uT(s){let t=new aT,e=lT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);let i=new J,r=new Ee,o=new Ee;function a(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,v=0,T=0,y=0,w=0,E=0,_=0,b=0,P=0,R=0;c.sort(hT);for(let N=0,H=c.length;N<H;N++){let I=c[N],F=I.color,z=I.intensity,O=I.distance,$=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===js?$=I.shadow.map.texture:$=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=F.r*z,d+=F.g*z,u+=F.b*z;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],z);R++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let C=I.shadow,Q=e.get(I);Q.shadowIntensity=C.intensity,Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=$;let bt=C.getViewportCount();for(let zt=0;zt<bt;zt++)n.sunShadowMatrix[x+zt]=C.getMatrix(zt),n.sunShadowCascade[x+zt]=C._cascadeData[zt];x+=bt,m++}n.sun[f]=W,f++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let C=I.shadow,Q=e.get(I);Q.shadowIntensity=C.intensity,Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=W,p++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(F).multiplyScalar(z),W.distance=O,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[v]=W;let C=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,C.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=C.matrix,I.castShadow){let Q=e.get(I);Q.shadowIntensity=C.intensity,Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=$,_++}v++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(F).multiplyScalar(z),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=W,T++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let C=I.shadow,Q=e.get(I);Q.shadowIntensity=C.intensity,Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,Q.shadowCameraNear=C.camera.near,Q.shadowCameraFar=C.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(z),W.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[y]=W,y++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==T||D.hemiLength!==y||D.numSunShadows!==m||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==b||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=T,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,D.sunLength=f,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=T,D.hemiLength=y,D.numSunShadows=m,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=b,D.numLightProbes=R,n.version=cT++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let y=c[v];if(y.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),u++}else if(y.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function g_(s){let t=new uT(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function fT(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new g_(s),t.set(i,[a])):r>=o.length?(a=new g_(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var dT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pT=`uniform sampler2D shadow_pass;
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
}`,mT=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],gT=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],__=new Ee,rl=new J,Sd=new J;function _T(s,t,e){let n=new Ys,i=new ne,r=new ne,o=new Ne,a=new Vc,l=new Gc,c={},h=e.maxTextureSize,d={[Qs]:_n,[_n]:Qs,[Ji]:Ji},u=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:dT,fragmentShader:pT}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new qs;m.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ja;let g=this.type;this.render=function(E,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===hg&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ja);let P=s.getRenderTarget(),R=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Rr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=g!==this.type;H&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=E.length;I<F;I++){let z=E[I],O=z.shadow;if(O===void 0){Gt("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let $=O.getFrameExtents();i.multiply($),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,O.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||H===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Po){if(z.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ui(i.x,i.y,{format:js,type:Ui,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new xs(i.x,i.y,Ti),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=gs,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un}else z.isPointLight?(O.map=new al(i.x),O.map.depthTexture=new Ba(i.x,Ni)):(O.map=new ui(i.x,i.y),O.map.depthTexture=new xs(i.x,i.y,Ni)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=gs,this.type===Ja?(O.map.depthTexture.compareFunction=W?id:nd,O.map.depthTexture.minFilter=Wn,O.map.depthTexture.magFilter=Wn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let C=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();z.isPointLight!==!0&&O.updateMatrices(z,b);let Q=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:b.layers;for(let bt=0;bt<C;bt++){let zt=O.getCamera(bt);if(z.isPointLight){let Z=O.camera,rt=O.matrix,yt=z.distance||Z.far;yt!==Z.far&&(Z.far=yt,Z.updateProjectionMatrix()),rl.setFromMatrixPosition(z.matrixWorld),Z.position.copy(rl),Sd.copy(Z.position),Sd.add(mT[bt]),Z.up.copy(gT[bt]),Z.lookAt(Sd),Z.updateMatrixWorld(),rt.makeTranslation(-rl.x,-rl.y,-rl.z),__.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),O._frustum.setFromProjectionMatrix(__,Z.coordinateSystem,Z.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,bt),s.clear();else{bt===0&&(s.setRenderTarget(O.map),s.clear());let Z=O.getViewport(bt);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),N.viewport(o)}n=O.getFrustum(bt),y(_,b,zt,z,Q,this.type)}O.isPointLightShadow!==!0&&this.type===Po&&v(O,b),O.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(P,R,D)};function v(E,_){let b=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new ui(i.x,i.y,{format:js,type:Ui}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(_,null,b,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(_,null,b,f,x,null)}function T(E,_,b,P){let R=null,D=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=b.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let N=R.uuid,H=_.uuid,I=c[N];I===void 0&&(I={},c[N]=I);let F=I[H];F===void 0&&(F=R.clone(),I[H]=F,_.addEventListener("dispose",w)),R=F}if(R.visible=_.visible,R.wireframe=_.wireframe,P===Po?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=s.properties.get(R);N.light=b}return R}function y(E,_,b,P,R,D){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Po)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let I=t.update(E),F=E.material;if(Array.isArray(F)){let z=I.groups;for(let O=0,$=z.length;O<$;O++){let W=z[O],C=F[W.materialIndex];if(C&&C.visible){let Q=T(E,C,P,D);E.onBeforeShadow(s,E,_,b,I,Q,W),s.renderBufferDirect(b,null,I,Q,E,W),E.onAfterShadow(s,E,_,b,I,Q,W)}}}else if(F.visible){let z=T(E,F,P,D);E.onBeforeShadow(s,E,_,b,I,z,null),s.renderBufferDirect(b,null,I,z,E,null),E.onAfterShadow(s,E,_,b,I,z,null)}}let H=E.children;for(let I=0,F=H.length;I<F;I++)y(H[I],_,b,P,R,D)}function w(E){E.target.removeEventListener("dispose",w);for(let b in c){let P=c[b],R=E.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function xT(s,t){function e(){let L=!1,j=new Ne,K=null,dt=new Ne(0,0,0,0);return{setMask:function(lt){K!==lt&&!L&&(s.colorMask(lt,lt,lt,lt),K=lt)},setLocked:function(lt){L=lt},setClear:function(lt,pt,at,mt,st){st===!0&&(lt*=mt,pt*=mt,at*=mt),j.set(lt,pt,at,mt),dt.equals(j)===!1&&(s.clearColor(lt,pt,at,mt),dt.copy(j))},reset:function(){L=!1,K=null,dt.set(-1,0,0,0)}}}function n(){let L=!1,j=!1,K=null,dt=null,lt=null;return{setReversed:function(pt){if(j!==pt){let at=t.get("EXT_clip_control");pt?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),j=pt;let mt=lt;lt=null,this.setClear(mt)}},getReversed:function(){return j},setTest:function(pt){pt?ct(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(pt){K!==pt&&!L&&(s.depthMask(pt),K=pt)},setFunc:function(pt){if(j&&(pt=Wg[pt]),dt!==pt){switch(pt){case Tc:s.depthFunc(s.NEVER);break;case wc:s.depthFunc(s.ALWAYS);break;case Ec:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case Ac:s.depthFunc(s.EQUAL);break;case Cc:s.depthFunc(s.GEQUAL);break;case Rc:s.depthFunc(s.GREATER);break;case Pc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=pt}},setLocked:function(pt){L=pt},setClear:function(pt){lt!==pt&&(lt=pt,j&&(pt=1-pt),s.clearDepth(pt))},reset:function(){L=!1,K=null,dt=null,lt=null,j=!1}}}function i(){let L=!1,j=null,K=null,dt=null,lt=null,pt=null,at=null,mt=null,st=null;return{setTest:function(et){L||(et?ct(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(et){j!==et&&!L&&(s.stencilMask(et),j=et)},setFunc:function(et,xt,nt){(K!==et||dt!==xt||lt!==nt)&&(s.stencilFunc(et,xt,nt),K=et,dt=xt,lt=nt)},setOp:function(et,xt,nt){(pt!==et||at!==xt||mt!==nt)&&(s.stencilOp(et,xt,nt),pt=et,at=xt,mt=nt)},setLocked:function(et){L=et},setClear:function(et){st!==et&&(s.clearStencil(et),st=et)},reset:function(){L=!1,j=null,K=null,dt=null,lt=null,pt=null,at=null,mt=null,st=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],x=null,p=!1,g=null,v=null,T=null,y=null,w=null,E=null,_=null,b=new qt(0,0,0),P=0,R=!1,D=null,N=null,H=null,I=null,F=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,$=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=$>=2);let C=null,Q={},bt=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),Z=new Ne().fromArray(bt),rt=new Ne().fromArray(zt);function yt(L,j,K,dt){let lt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(L,pt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<K;at++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(j+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return pt}let vt={};vt[s.TEXTURE_2D]=yt(s.TEXTURE_2D,s.TEXTURE_2D,1),vt[s.TEXTURE_CUBE_MAP]=yt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[s.TEXTURE_2D_ARRAY]=yt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),vt[s.TEXTURE_3D]=yt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(s.DEPTH_TEST),o.setFunc(So),q(!1),$t(Ff),ct(s.CULL_FACE),jt(Rr);function ct(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Pt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function fe(L,j){return u[L]!==j?(s.bindFramebuffer(L,j),u[L]=j,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=j),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=j),!0):!1}function At(L,j){let K=m,dt=!1;if(L){K=f.get(j),K===void 0&&(K=[],f.set(j,K));let lt=L.textures;if(K.length!==lt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,at=lt.length;pt<at;pt++)K[pt]=s.COLOR_ATTACHMENT0+pt;K.length=lt.length,dt=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,dt=!0);dt&&s.drawBuffers(K)}function Ht(L){return x!==L?(s.useProgram(L),x=L,!0):!1}let It={[Pr]:s.FUNC_ADD,[fg]:s.FUNC_SUBTRACT,[dg]:s.FUNC_REVERSE_SUBTRACT};It[pg]=s.MIN,It[mg]=s.MAX;let Ot={[gg]:s.ZERO,[_g]:s.ONE,[xg]:s.SRC_COLOR,[kf]:s.SRC_ALPHA,[Tg]:s.SRC_ALPHA_SATURATE,[Mg]:s.DST_COLOR,[yg]:s.DST_ALPHA,[vg]:s.ONE_MINUS_SRC_COLOR,[Vf]:s.ONE_MINUS_SRC_ALPHA,[bg]:s.ONE_MINUS_DST_COLOR,[Sg]:s.ONE_MINUS_DST_ALPHA,[wg]:s.CONSTANT_COLOR,[Eg]:s.ONE_MINUS_CONSTANT_COLOR,[Ag]:s.CONSTANT_ALPHA,[Cg]:s.ONE_MINUS_CONSTANT_ALPHA};function jt(L,j,K,dt,lt,pt,at,mt,st,et){if(L===Rr){p===!0&&(Pt(s.BLEND),p=!1);return}if(p===!1&&(ct(s.BLEND),p=!0),L!==ug){if(L!==g||et!==R){if((v!==Pr||w!==Pr)&&(s.blendEquation(s.FUNC_ADD),v=Pr,w=Pr),et)switch(L){case Io:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $a:s.blendFunc(s.ONE,s.ONE);break;case Bf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",L);break}else switch(L){case Io:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $a:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bf:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zf:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",L);break}T=null,y=null,E=null,_=null,b.set(0,0,0),P=0,g=L,R=et}return}lt=lt||j,pt=pt||K,at=at||dt,(j!==v||lt!==w)&&(s.blendEquationSeparate(It[j],It[lt]),v=j,w=lt),(K!==T||dt!==y||pt!==E||at!==_)&&(s.blendFuncSeparate(Ot[K],Ot[dt],Ot[pt],Ot[at]),T=K,y=dt,E=pt,_=at),(mt.equals(b)===!1||st!==P)&&(s.blendColor(mt.r,mt.g,mt.b,st),b.copy(mt),P=st),g=L,R=!1}function ce(L,j){L.side===Ji?Pt(s.CULL_FACE):ct(s.CULL_FACE);let K=L.side===_n;j&&(K=!K),q(K),L.blending===Io&&L.transparent===!1?jt(Rr):jt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let dt=L.stencilWrite;a.setTest(dt),dt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function q(L){D!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),D=L)}function $t(L){L!==lg?(ct(s.CULL_FACE),L!==N&&(L===Ff?s.cullFace(s.BACK):L===cg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),N=L}function ye(L){L!==H&&(O&&s.lineWidth(L),H=L)}function me(L,j,K){L?(ct(s.POLYGON_OFFSET_FILL),(I!==j||F!==K)&&(I=j,F=K,o.getReversed()&&(j=-j,K=-K),s.polygonOffset(j,K))):Pt(s.POLYGON_OFFSET_FILL)}function ie(L){L?ct(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function Ae(L){L===void 0&&(L=s.TEXTURE0+z-1),C!==L&&(s.activeTexture(L),C=L)}function Ue(L,j,K){K===void 0&&(C===null?K=s.TEXTURE0+z-1:K=C);let dt=Q[K];dt===void 0&&(dt={type:void 0,texture:void 0},Q[K]=dt),(dt.type!==L||dt.texture!==j)&&(C!==K&&(s.activeTexture(K),C=K),s.bindTexture(L,j||vt[L]),dt.type=L,dt.texture=j)}function B(){let L=Q[C];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _t(){try{s.compressedTexImage2D(...arguments)}catch(L){Wt("WebGLState:",L)}}function Dt(){try{s.compressedTexImage3D(...arguments)}catch(L){Wt("WebGLState:",L)}}function kt(){try{s.texSubImage2D(...arguments)}catch(L){Wt("WebGLState:",L)}}function ut(){try{s.texSubImage3D(...arguments)}catch(L){Wt("WebGLState:",L)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Wt("WebGLState:",L)}}function Ct(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Wt("WebGLState:",L)}}function Vt(){try{s.texStorage2D(...arguments)}catch(L){Wt("WebGLState:",L)}}function A(){try{s.texStorage3D(...arguments)}catch(L){Wt("WebGLState:",L)}}function S(){try{s.texImage2D(...arguments)}catch(L){Wt("WebGLState:",L)}}function V(){try{s.texImage3D(...arguments)}catch(L){Wt("WebGLState:",L)}}function ot(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function it(L,j){d[L]!==j&&(s.pixelStorei(L,j),d[L]=j)}function ft(L){Z.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function gt(L){rt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),rt.copy(L))}function G(L,j){let K=c.get(j);K===void 0&&(K=new WeakMap,c.set(j,K));let dt=K.get(L);dt===void 0&&(dt=s.getUniformBlockIndex(j,L.name),s.uniformBlockBinding(j,dt,dt),K.set(L,dt))}function tt(L,j,K){let lt=c.get(j).get(L);l[lt]!==K&&(s.bindBufferBase(s.UNIFORM_BUFFER,lt,K),l[lt]=K)}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},C=null,Q={},u={},l={},f=new WeakMap,m=[],x=null,p=!1,g=null,v=null,T=null,y=null,w=null,E=null,_=null,b=new qt(0,0,0),P=0,R=!1,D=null,N=null,H=null,I=null,F=null,Z.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Pt,bindFramebuffer:fe,drawBuffers:At,useProgram:Ht,setBlending:jt,setMaterial:ce,setFlipSided:q,setCullFace:$t,setLineWidth:ye,setPolygonOffset:me,setScissorTest:ie,activeTexture:Ae,bindTexture:Ue,unbindTexture:B,compressedTexImage2D:_t,compressedTexImage3D:Dt,texImage2D:S,texImage3D:V,pixelStorei:it,getParameter:ot,updateUBOMapping:G,uniformBlockBinding:tt,texStorage2D:Vt,texStorage3D:A,texSubImage2D:kt,texSubImage3D:ut,compressedTexSubImage2D:he,compressedTexSubImage3D:Ct,scissor:ft,viewport:gt,reset:ht}}function vT(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,x=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):bo("canvas")}function v(A,S,V){let ot=1,it=Vt(A);if((it.width>V||it.height>V)&&(ot=V/Math.max(it.width,it.height)),ot<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let ft=Math.floor(ot*it.width),gt=Math.floor(ot*it.height);u===void 0&&(u=g(ft,gt));let G=S?g(ft,gt):u;return G.width=ft,G.height=gt,G.getContext("2d").drawImage(A,0,0,ft,gt),Gt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ft+"x"+gt+")."),G}else return"data"in A&&Gt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),A;return A}function T(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(A,S,V,ot,it,ft=!1){if(A!==null){if(s[A]!==void 0)return s[A];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let gt;ot&&(gt=t.get("EXT_texture_norm16"),gt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=S;if(S===s.RED&&(V===s.FLOAT&&(G=s.R32F),V===s.HALF_FLOAT&&(G=s.R16F),V===s.UNSIGNED_BYTE&&(G=s.R8),V===s.UNSIGNED_SHORT&&gt&&(G=gt.R16_EXT),V===s.SHORT&&gt&&(G=gt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(G=s.R8UI),V===s.UNSIGNED_SHORT&&(G=s.R16UI),V===s.UNSIGNED_INT&&(G=s.R32UI),V===s.BYTE&&(G=s.R8I),V===s.SHORT&&(G=s.R16I),V===s.INT&&(G=s.R32I)),S===s.RG&&(V===s.FLOAT&&(G=s.RG32F),V===s.HALF_FLOAT&&(G=s.RG16F),V===s.UNSIGNED_BYTE&&(G=s.RG8),V===s.UNSIGNED_SHORT&&gt&&(G=gt.RG16_EXT),V===s.SHORT&&gt&&(G=gt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(G=s.RG8UI),V===s.UNSIGNED_SHORT&&(G=s.RG16UI),V===s.UNSIGNED_INT&&(G=s.RG32UI),V===s.BYTE&&(G=s.RG8I),V===s.SHORT&&(G=s.RG16I),V===s.INT&&(G=s.RG32I)),S===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(G=s.RGB8UI),V===s.UNSIGNED_SHORT&&(G=s.RGB16UI),V===s.UNSIGNED_INT&&(G=s.RGB32UI),V===s.BYTE&&(G=s.RGB8I),V===s.SHORT&&(G=s.RGB16I),V===s.INT&&(G=s.RGB32I)),S===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),V===s.UNSIGNED_INT&&(G=s.RGBA32UI),V===s.BYTE&&(G=s.RGBA8I),V===s.SHORT&&(G=s.RGBA16I),V===s.INT&&(G=s.RGBA32I)),S===s.RGB&&(V===s.UNSIGNED_SHORT&&gt&&(G=gt.RGB16_EXT),V===s.SHORT&&gt&&(G=gt.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(G=s.R11F_G11F_B10F)),S===s.RGBA){let tt=ft?Ca:le.getTransfer(it);V===s.FLOAT&&(G=s.RGBA32F),V===s.HALF_FLOAT&&(G=s.RGBA16F),V===s.UNSIGNED_BYTE&&(G=tt===xe?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&gt&&(G=gt.RGBA16_EXT),V===s.SHORT&&gt&&(G=gt.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function _(A,S){let V;return A?S===null||S===Ni||S===Lr?V=s.DEPTH24_STENCIL8:S===Ti?V=s.DEPTH32F_STENCIL8:S===Do&&(V=s.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ni||S===Lr?V=s.DEPTH_COMPONENT24:S===Ti?V=s.DEPTH_COMPONENT32F:S===Do&&(V=s.DEPTH_COMPONENT16),V}function b(A,S){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==un&&A.minFilter!==Wn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){let S=new WeakRef(A);n.get(A).__ref=S,m.add(S),x.register(A,S,S)}function R(A){let S=n.get(A).__ref;S!==void 0&&(m.delete(S),x.unregister(S))}function D(A){H(A.target)}function N(A){I(A.target)}function H(A){A.removeEventListener("dispose",D),R(A),z(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",N),R(A),$(A)}function F(){for(let A of m){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):H(S))}m.clear(),d.clear()}function z(A){let S=n.get(A);if(S.__webglInit===void 0)return;let V=A.source,ot=f.get(V);if(ot){let it=ot[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&O(A),Object.keys(ot).length===0&&f.delete(V)}n.remove(A)}function O(A){let S=n.get(A);s.deleteTexture(S.__webglTexture);let V=A.source,ot=f.get(V);delete ot[S.__cacheKey],o.memory.textures--}function $(A){let S=n.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let V=A.depthTexture;if(V&&V.renderTarget===A&&H(V),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(S.__webglFramebuffer[it]))for(let ft=0;ft<S.__webglFramebuffer[it].length;ft++)s.deleteFramebuffer(S.__webglFramebuffer[it][ft]);else s.deleteFramebuffer(S.__webglFramebuffer[it]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[it])}else{if(Array.isArray(S.__webglFramebuffer))for(let it=0;it<S.__webglFramebuffer.length;it++)s.deleteFramebuffer(S.__webglFramebuffer[it]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let it=0;it<S.__webglColorRenderbuffer.length;it++)S.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[it]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ot=A.textures;for(let it=0,ft=ot.length;it<ft;it++){let gt=n.get(ot[it]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(ot[it])}n.remove(A)}let W=0;function C(){W=0}function Q(){return W}function bt(A){W=A}function zt(){let A=W;return A>=i.maxTextures&&Gt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,A}function Z(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function rt(A,S){let V=n.get(A);if(A.isVideoTexture&&he(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let ot=A.image;if(ot===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(V,A,S);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function yt(A,S){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){ce(V,A,S);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function vt(A,S){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){ce(V,A,S);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function ct(A,S){let V=n.get(A);if(A.version>0&&V.__version!==A.version){q(V,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}let Pt={[Ic]:s.REPEAT,[Wi]:s.CLAMP_TO_EDGE,[Lc]:s.MIRRORED_REPEAT},fe={[un]:s.NEAREST,[Ig]:s.NEAREST_MIPMAP_NEAREST,[Ka]:s.NEAREST_MIPMAP_LINEAR,[Wn]:s.LINEAR,[sh]:s.LINEAR_MIPMAP_NEAREST,[ys]:s.LINEAR_MIPMAP_LINEAR},At={[Ug]:s.NEVER,[sd]:s.ALWAYS,[Og]:s.LESS,[nd]:s.LEQUAL,[Fg]:s.EQUAL,[id]:s.GEQUAL,[Bg]:s.GREATER,[zg]:s.NOTEQUAL};function Ht(A,S){if(S.type===Ti&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Wn||S.magFilter===sh||S.magFilter===Ka||S.magFilter===ys||S.minFilter===Wn||S.minFilter===sh||S.minFilter===Ka||S.minFilter===ys)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Pt[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Pt[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Pt[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,fe[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,fe[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,At[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===un||S.minFilter!==Ka&&S.minFilter!==ys||S.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function It(A,S){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",D),P(S));let ot=S.source,it=f.get(ot);it===void 0&&(it={},f.set(ot,it));let ft=Z(S);if(ft!==A.__cacheKey){it[ft]===void 0&&(it[ft]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),it[ft].usedTimes++;let gt=it[A.__cacheKey];gt!==void 0&&(it[A.__cacheKey].usedTimes--,gt.usedTimes===0&&O(S)),A.__cacheKey=ft,A.__webglTexture=it[ft].texture}return V}function Ot(A,S,V){return Math.floor(Math.floor(A/V)/S)}function jt(A,S,V,ot){let ft=A.updateRanges;if(ft.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,V,ot,S.data);else{ft.sort((L,j)=>L.start-j.start);let gt=0;for(let L=1;L<ft.length;L++){let j=ft[gt],K=ft[L],dt=j.start+j.count,lt=Ot(K.start,S.width,4),pt=Ot(j.start,S.width,4);K.start<=dt+1&&lt===pt&&Ot(K.start+K.count-1,S.width,4)===lt?j.count=Math.max(j.count,K.start+K.count-j.start):(++gt,ft[gt]=K)}ft.length=gt+1;let G=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),ht=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let L=0,j=ft.length;L<j;L++){let K=ft[L],dt=Math.floor(K.start/4),lt=Math.ceil(K.count/4),pt=dt%S.width,at=Math.floor(dt/S.width),mt=lt,st=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(s.UNPACK_SKIP_ROWS,at),e.texSubImage2D(s.TEXTURE_2D,0,pt,at,mt,st,V,ot,S.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,G),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ht)}}function ce(A,S,V){let ot=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=s.TEXTURE_3D);let it=It(A,S),ft=S.source;e.bindTexture(ot,A.__webglTexture,s.TEXTURE0+V);let gt=n.get(ft);if(ft.version!==gt.__version||it===!0){if(e.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let st=le.getPrimaries(le.workingColorSpace),et=S.colorSpace===Ms?null:le.getPrimaries(S.colorSpace),xt=S.colorSpace===Ms||st===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let tt=v(S.image,!1,i.maxTextureSize);tt=Ct(S,tt);let ht=r.convert(S.format,S.colorSpace),L=r.convert(S.type),j=E(S.internalFormat,ht,L,S.normalized,S.colorSpace,S.isVideoTexture);Ht(ot,S);let K,dt=S.mipmaps,lt=S.isVideoTexture!==!0,pt=gt.__version===void 0||it===!0,at=ft.dataReady,mt=b(S,tt);if(S.isDepthTexture)j=_(S.format===Ss,S.type),pt&&(lt?e.texStorage2D(s.TEXTURE_2D,1,j,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,j,tt.width,tt.height,0,ht,L,null));else if(S.isDataTexture)if(dt.length>0){lt&&pt&&e.texStorage2D(s.TEXTURE_2D,mt,j,dt[0].width,dt[0].height);for(let st=0,et=dt.length;st<et;st++)K=dt[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ht,L,K.data):e.texImage2D(s.TEXTURE_2D,st,j,K.width,K.height,0,ht,L,K.data);S.generateMipmaps=!1}else lt?(pt&&e.texStorage2D(s.TEXTURE_2D,mt,j,tt.width,tt.height),at&&jt(S,tt,ht,L)):e.texImage2D(s.TEXTURE_2D,0,j,tt.width,tt.height,0,ht,L,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){lt&&pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,j,dt[0].width,dt[0].height,tt.depth);for(let st=0,et=dt.length;st<et;st++)if(K=dt[st],S.format!==Oi)if(ht!==null)if(lt){if(at)if(S.layerUpdates.size>0){let xt=pd(K.width,K.height,S.format,S.type);for(let nt of S.layerUpdates){let wt=K.data.subarray(nt*xt/K.data.BYTES_PER_ELEMENT,(nt+1)*xt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,nt,K.width,K.height,1,ht,wt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,K.width,K.height,tt.depth,ht,K.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,j,K.width,K.height,tt.depth,0,K.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?at&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,K.width,K.height,tt.depth,ht,L,K.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,j,K.width,K.height,tt.depth,0,ht,L,K.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{lt&&pt&&e.texStorage2D(s.TEXTURE_2D,mt,j,dt[0].width,dt[0].height);for(let st=0,et=dt.length;st<et;st++)K=dt[st],S.format!==Oi?ht!==null?lt?at&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ht,K.data):e.compressedTexImage2D(s.TEXTURE_2D,st,j,K.width,K.height,0,K.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ht,L,K.data):e.texImage2D(s.TEXTURE_2D,st,j,K.width,K.height,0,ht,L,K.data)}else if(S.isDataArrayTexture)if(lt){if(pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,j,tt.width,tt.height,tt.depth),at)if(S.layerUpdates.size>0){let st=pd(tt.width,tt.height,S.format,S.type);for(let et of S.layerUpdates){let xt=tt.data.subarray(et*st/tt.data.BYTES_PER_ELEMENT,(et+1)*st/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,tt.width,tt.height,1,ht,L,xt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ht,L,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,j,tt.width,tt.height,tt.depth,0,ht,L,tt.data);else if(S.isData3DTexture)lt?(pt&&e.texStorage3D(s.TEXTURE_3D,mt,j,tt.width,tt.height,tt.depth),at&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ht,L,tt.data)):e.texImage3D(s.TEXTURE_3D,0,j,tt.width,tt.height,tt.depth,0,ht,L,tt.data);else if(S.isFramebufferTexture){if(pt)if(lt)e.texStorage2D(s.TEXTURE_2D,mt,j,tt.width,tt.height);else{let st=tt.width,et=tt.height;for(let xt=0;xt<mt;xt++)e.texImage2D(s.TEXTURE_2D,xt,j,st,et,0,ht,L,null),st>>=1,et>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let st=s.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),tt.parentNode!==st){st.appendChild(tt),d.add(S),st.onpaint=et=>{let xt=et.changedElements;for(let nt of d)xt.includes(nt.image)&&(nt.needsUpdate=!0)},st.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{let xt=s.RGBA,nt=s.RGBA,wt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,xt,nt,wt,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(dt.length>0){if(lt&&pt){let st=Vt(dt[0]);e.texStorage2D(s.TEXTURE_2D,mt,j,st.width,st.height)}for(let st=0,et=dt.length;st<et;st++)K=dt[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ht,L,K):e.texImage2D(s.TEXTURE_2D,st,j,ht,L,K);S.generateMipmaps=!1}else if(lt){if(pt){let st=Vt(tt);e.texStorage2D(s.TEXTURE_2D,mt,j,st.width,st.height)}at&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht,L,tt)}else e.texImage2D(s.TEXTURE_2D,0,j,ht,L,tt);T(S)&&S.mipmapsAutoUpdate===!0&&y(ot),gt.__version=ft.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function q(A,S,V){if(S.image.length!==6)return;let ot=It(A,S),it=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+V);let ft=n.get(it);if(it.version!==ft.__version||ot===!0){e.activeTexture(s.TEXTURE0+V);let gt=le.getPrimaries(le.workingColorSpace),G=S.colorSpace===Ms?null:le.getPrimaries(S.colorSpace),tt=S.colorSpace===Ms||gt===G?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ht=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,j=[];for(let nt=0;nt<6;nt++)!ht&&!L?j[nt]=v(S.image[nt],!0,i.maxCubemapSize):j[nt]=L?S.image[nt].image:S.image[nt],j[nt]=Ct(S,j[nt]);let K=j[0],dt=r.convert(S.format,S.colorSpace),lt=r.convert(S.type),pt=E(S.internalFormat,dt,lt,S.normalized,S.colorSpace),at=S.isVideoTexture!==!0,mt=ft.__version===void 0||ot===!0,st=it.dataReady,et=b(S,K);Ht(s.TEXTURE_CUBE_MAP,S);let xt;if(S.isDepthTexture){if(pt=_(S.format===Ss,S.type),mt)if(at)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,pt,K.width,K.height);else for(let nt=0;nt<6;nt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,K.width,K.height,0,dt,lt,null)}else if(ht){at&&mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,et,pt,K.width,K.height);for(let nt=0;nt<6;nt++){xt=j[nt].mipmaps;for(let wt=0;wt<xt.length;wt++){let se=xt[wt];S.format!==Oi?dt!==null?at?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,se.width,se.height,dt,se.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,pt,se.width,se.height,0,se.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,se.width,se.height,dt,lt,se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,pt,se.width,se.height,0,dt,lt,se.data)}}}else{if(xt=S.mipmaps,at&&mt){xt.length>0&&et++;let nt=Vt(j[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,et,pt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(L){at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,j[nt].width,j[nt].height,dt,lt,j[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,j[nt].width,j[nt].height,0,dt,lt,j[nt].data);for(let wt=0;wt<xt.length;wt++){let Yt=xt[wt].image[nt].image;at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,Yt.width,Yt.height,dt,lt,Yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,pt,Yt.width,Yt.height,0,dt,lt,Yt.data)}}else{at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,dt,lt,j[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,dt,lt,j[nt]);for(let wt=0;wt<xt.length;wt++){let se=xt[wt];at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,dt,lt,se.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,pt,dt,lt,se.image[nt])}}}T(S)&&S.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ft.__version=it.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function $t(A,S,V,ot,it,ft){let gt=r.convert(V.format,V.colorSpace),G=r.convert(V.type),tt=E(V.internalFormat,gt,G,V.normalized,V.colorSpace),ht=n.get(S),L=n.get(V);if(L.__renderTarget=S,!ht.__hasExternalTextures){let j=Math.max(1,S.width>>ft),K=Math.max(1,S.height>>ft);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,ft,tt,j,K,S.depth,0,gt,G,null):e.texImage2D(it,ft,tt,j,K,0,gt,G,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),ut(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,it,L.__webglTexture,0,kt(S)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,it,L.__webglTexture,ft),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(A,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){let ot=S.depthTexture,it=ot&&ot.isDepthTexture?ot.type:null,ft=_(S.stencilBuffer,it),gt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ut(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(S),ft,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(S),ft,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ft,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,A)}else{let ot=S.textures;for(let it=0;it<ot.length;it++){let ft=ot[it],gt=r.convert(ft.format,ft.colorSpace),G=r.convert(ft.type),tt=E(ft.internalFormat,gt,G,ft.normalized,ft.colorSpace);ut(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(S),tt,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(S),tt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,tt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(A,S,V){let ot=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(S.depthTexture);it.__renderTarget=S;let ft=ot?S.depthTexture.image[0]:S.depthTexture.image;(!it.__webglTexture||ft.width!==S.width||ft.height!==S.height)&&(ft.width=S.width,ft.height=S.height,S.depthTexture.needsUpdate=!0),ot?ct(S.depthTexture,0):rt(S.depthTexture,0);let gt=it.__webglTexture,G=kt(S),tt=ot?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,ht=S.depthTexture.format===Ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===gs)ut(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,tt,gt,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,ht,tt,gt,0);else if(S.depthTexture.format===Ss)ut(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,tt,gt,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,ht,tt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(A){let S=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let ot=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ot){let it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ot.removeEventListener("dispose",it)};ot.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=ot}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let ot=0;ot<6;ot++)me(S.__webglFramebuffer[ot],A,ot);else A.texture.mipmaps.length>0?me(S.__webglFramebuffer[0],A,0):me(S.__webglFramebuffer,A,0);else if(V){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]===void 0)S.__webglDepthbuffer[ot]=s.createRenderbuffer(),ye(S.__webglDepthbuffer[ot],A,!1);else{let it=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=S.__webglDepthbuffer[ot];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ft)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ye(S.__webglDepthbuffer,A,!1);else{let it=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ft)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(A,S,V){let ot=n.get(A);S!==void 0&&$t(ot.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&ie(A)}function Ue(A){let S=A.texture,V=n.get(A),ot=n.get(S);A.addEventListener("dispose",N),P(A);let it=A.textures,ft=A.isWebGLCubeRenderTarget===!0,gt=it.length>1;if(gt||(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=S.version,o.memory.textures++),ft){V.__webglFramebuffer=[];for(let G=0;G<6;G++)if(S.mipmaps.length>0){V.__webglFramebuffer[G]=[];for(let tt=0;tt<S.mipmaps.length;tt++)V.__webglFramebuffer[G][tt]=s.createFramebuffer()}else V.__webglFramebuffer[G]=s.createFramebuffer()}else{if(S.mipmaps.length>0){V.__webglFramebuffer=[];for(let G=0;G<S.mipmaps.length;G++)V.__webglFramebuffer[G]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(gt)for(let G=0,tt=it.length;G<tt;G++){let ht=n.get(it[G]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&ut(A)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let G=0;G<it.length;G++){let tt=it[G];V.__webglColorRenderbuffer[G]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[G]);let ht=r.convert(tt.format,tt.colorSpace),L=r.convert(tt.type),j=E(tt.internalFormat,ht,L,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),K=kt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,K,j,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+G,s.RENDERBUFFER,V.__webglColorRenderbuffer[G])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,S);for(let G=0;G<6;G++)if(S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)$t(V.__webglFramebuffer[G][tt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt);else $t(V.__webglFramebuffer[G],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);T(S)?y(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let G=0,tt=it.length;G<tt;G++){let ht=it[G],L=n.get(ht),j=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,L.__webglTexture),Ht(j,ht),$t(V.__webglFramebuffer,A,ht,s.COLOR_ATTACHMENT0+G,j,0),T(ht)&&y(j)}e.unbindTexture()}else{let G=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(G=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(G,ot.__webglTexture),Ht(G,S),S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)$t(V.__webglFramebuffer[tt],A,S,s.COLOR_ATTACHMENT0,G,tt);else $t(V.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,G,0);T(S)?y(G):S.mipmaps.length>0&&s.texParameteri(G,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ie(A)}function B(A){let S=A.textures;for(let V=0,ot=S.length;V<ot;V++){let it=S[V];if(T(it)&&it.mipmapsAutoUpdate===!0){let ft=w(A),gt=n.get(it).__webglTexture;e.bindTexture(ft,gt),y(ft),e.unbindTexture()}}}let _t=[];function Dt(A){if(A.samples>0){if(ut(A)===!1){let S=A.textures,V=A.width,ot=A.height,it=s.COLOR_BUFFER_BIT,ft=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(A),G=S.length>1;if(G)for(let ht=0;ht<S.length;ht++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ht=0;ht<S.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),G){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ht]);let L=n.get(S[ht]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,V,ot,0,0,V,ot,it,s.NEAREST),l===!0&&(_t.length=0,_t.push(s.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&_t.push(ft),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),G)for(let ht=0;ht<S.length;ht++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ht]);let L=n.get(S[ht]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function kt(A){return Math.min(i.maxSamples,A.samples)}function ut(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function he(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Ct(A,S){let V=A.colorSpace,ot=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Aa&&V!==Ms&&(le.getTransfer(V)===xe?(ot!==Oi||it!==Qn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",V)),S}function Vt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=zt,this.resetTextureUnits=C,this.getTextureUnits=Q,this.setTextureUnits=bt,this.setTexture2D=rt,this.setTexture2DArray=yt,this.setTexture3D=vt,this.setTextureCube=ct,this.rebindTextures=Ae,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=ut,this.dispose=F}function yT(s,t){function e(n,i=Ms){let r,o=le.getTransfer(i);if(n===Qn)return s.UNSIGNED_BYTE;if(n===oh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Qf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===jf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===$f)return s.BYTE;if(n===Kf)return s.SHORT;if(n===Do)return s.UNSIGNED_SHORT;if(n===rh)return s.INT;if(n===Ni)return s.UNSIGNED_INT;if(n===Ti)return s.FLOAT;if(n===Ui)return s.HALF_FLOAT;if(n===td)return s.ALPHA;if(n===ed)return s.RGB;if(n===Oi)return s.RGBA;if(n===gs)return s.DEPTH_COMPONENT;if(n===Ss)return s.DEPTH_STENCIL;if(n===lh)return s.RED;if(n===ch)return s.RED_INTEGER;if(n===js)return s.RG;if(n===hh)return s.RG_INTEGER;if(n===uh)return s.RGBA_INTEGER;if(n===Qa||n===ja||n===tl||n===el)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===el)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===el)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fh||n===dh||n===ph||n===mh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ph)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gh||n===_h||n===xh||n===vh||n===yh||n===nl||n===Sh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gh||n===_h)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vh)return r.COMPRESSED_R11_EAC;if(n===yh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===nl)return r.COMPRESSED_RG11_EAC;if(n===Sh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mh||n===bh||n===Th||n===wh||n===Eh||n===Ah||n===Ch||n===Rh||n===Ph||n===Ih||n===Lh||n===Dh||n===Nh||n===Uh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ah)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ch)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ph)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ih)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oh||n===Fh||n===Bh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Oh)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zh||n===kh||n===il||n===Vh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var ST=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MT=`
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

}`,Cd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new za(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fi({vertexShader:ST,fragmentShader:MT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rd=class extends Xi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding!="undefined",p=new Cd,g={},v=e.getContextAttributes(),T=null,y=null,w=[],E=[],_=new ne,b=null,P=null,R=new Ln;R.viewport=new Ne;let D=new Ln;D.viewport=new Ne;let N=[R,D],H=new jc,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let rt=w[Z];return rt===void 0&&(rt=new Ao,w[Z]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Z){let rt=w[Z];return rt===void 0&&(rt=new Ao,w[Z]=rt),rt.getGripSpace()},this.getHand=function(Z){let rt=w[Z];return rt===void 0&&(rt=new Ao,w[Z]=rt),rt.getHandSpace()};function z(Z){let rt=E.indexOf(Z.inputSource);if(rt===-1)return;let yt=w[rt];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,c||o),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",$);for(let Z=0;Z<w.length;Z++){let rt=E[Z];rt!==null&&(E[Z]=null,w[Z].disconnect(rt))}I=null,F=null,p.reset();for(let Z in g)delete g[Z];if(t.setRenderTarget(T),f=null,u=null,d=null,i=null,y=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),P!==null){let Z=P.camera;Z.fov=P.fov,Z.zoom=P.zoom,Z.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",O),i.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,vt=null,ct=null;v.depth&&(ct=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=v.stencil?Ss:gs,vt=v.stencil?Lr:Ni);let Pt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Pt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ui(u.textureWidth,u.textureHeight,{format:Oi,type:Qn,depthTexture:new xs(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ui(f.framebufferWidth,f.framebufferHeight,{format:Oi,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),zt.setContext(i),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(Z){for(let rt=0;rt<Z.removed.length;rt++){let yt=Z.removed[rt],vt=E.indexOf(yt);vt>=0&&(E[vt]=null,w[vt].disconnect(yt))}for(let rt=0;rt<Z.added.length;rt++){let yt=Z.added[rt],vt=E.indexOf(yt);if(vt===-1){for(let Pt=0;Pt<w.length;Pt++)if(Pt>=E.length){E.push(yt),vt=Pt;break}else if(E[Pt]===null){E[Pt]=yt,vt=Pt;break}if(vt===-1)break}let ct=w[vt];ct&&ct.connect(yt)}}function W(Z,rt){rt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(rt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let rt=Z.near,yt=Z.far;p.texture!==null&&(p.depthNear>0&&(rt=p.depthNear),p.depthFar>0&&(yt=p.depthFar)),H.near=D.near=R.near=rt,H.far=D.far=R.far=yt,(I!==H.near||F!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,F=H.far),H.layers.mask=Z.layers.mask|6,R.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;let vt=Z.parent,ct=H.cameras;W(H,vt);for(let Pt=0;Pt<ct.length;Pt++)W(ct[Pt],vt);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&Z.isPerspectiveCamera&&(P={camera:Z,fov:Z.fov,zoom:Z.zoom}),C(Z,H,vt)};function C(Z,rt,yt){yt===null?Z.matrix.copy(rt.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(rt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=wo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(Z){return g[Z]};let Q=null;function bt(Z,rt){if(h=rt.getViewerPose(c||o),m=rt,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let vt=!1;yt.length!==H.cameras.length&&(H.cameras.length=0,vt=!0);for(let At=0;At<yt.length;At++){let Ht=yt[At],It=null;if(f!==null)It=f.getViewport(Ht);else{let jt=d.getViewSubImage(u,Ht);It=jt.viewport,At===0&&(t.setRenderTargetTextures(y,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(y))}let Ot=N[At];Ot===void 0&&(Ot=new Ln,Ot.layers.enable(At),Ot.viewport=new Ne,N[At]=Ot),Ot.matrix.fromArray(Ht.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Ht.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(It.x,It.y,It.width,It.height),At===0&&(H.matrix.copy(Ot.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),vt===!0&&H.cameras.push(Ot)}let ct=i.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let At=d.getDepthInformation(yt[0]);At&&At.isValid&&At.texture&&p.init(At,i.renderState)}if(ct&&ct.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let At=0;At<yt.length;At++){let Ht=yt[At].camera;if(Ht){let It=g[Ht];It||(It=new za,g[Ht]=It);let Ot=d.getCameraImage(Ht);It.sourceTexture=Ot}}}}for(let yt=0;yt<w.length;yt++){let vt=E[yt],ct=w[yt];vt!==null&&ct!==void 0&&ct.update(vt,rt,c||o)}Q&&Q(Z,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}let zt=new x_;zt.setAnimationLoop(bt),this.setAnimationLoop=function(Z){Q=Z},this.dispose=function(){}}},bT=new Ee,C_=new Xt;C_.set(-1,0,0,0,1,0,0,0,1);function TT(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,ud(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,T,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,T):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===_n&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===_n&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),T=v.envMap,y=v.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(bT.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(C_),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=T*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===_n&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wT(s,t,e,n){let i={},r={};function o(v,T){let y=T.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,T){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let w=T.program;n.updateUBOMapping(v,w);let E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let T=s.createBuffer(),y=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,y,w),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(v){let T=i[v.id],y=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let E=0,_=y.length;E<_;E++){let b=y[E];if(Array.isArray(b))for(let P=0,R=b.length;P<R;P++)h(b[P],E,P,w);else h(b,E,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,T,y,w){if(u(v,T,y,w)===!0){let E=v.__offset,_=v.value;if(Array.isArray(_)){let b=0;for(let P=0;P<_.length;P++){let R=_[P],D=x(R,!0);d(R,v.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}function d(v,T,y){typeof v=="number"||typeof v=="boolean"?T[y]=v:v.isMatrix3?(T[y]=v.elements[0],T[y+1]=v.elements[1],T[y+2]=v.elements[2],T[y+3]=0,T[y+4]=v.elements[3],T[y+5]=v.elements[4],T[y+6]=v.elements[5],T[y+7]=0,T[y+8]=v.elements[6],T[y+9]=v.elements[7],T[y+10]=v.elements[8],T[y+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-y),y):v.toArray(T,y)}function u(v,T,y,w){let E=v.value,_=T+"_"+y;if(Array.isArray(E)){w[_]===void 0&&(w[_]=[]);let b=w[_],P=!1;for(let R=0;R<E.length;R++)f(E[R],b,R)===!0&&(P=!0);return P}return f(E,w,_)}function f(v,T,y){if(T[y]===void 0)return typeof v=="number"||typeof v=="boolean"?T[y]=v:ArrayBuffer.isView(v)?T[y]=v.slice():T[y]=v.clone(),!0;{let w=T[y];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return T[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function m(v){let T=v.uniforms,y=0,w=16;for(let _=0,b=T.length;_<b;_++){let P=Array.isArray(T[_])?T[_]:[T[_]];for(let R=0,D=P.length;R<D;R++){let N=P[R],H=Array.isArray(N.value)?N.value:[N.value],I=Array.isArray(T[_])||Array.isArray(N.value),F=y;for(let O=0,$=H.length;O<$;O++){let W=H[O],C=x(W,I),Q=y%w,bt=Q%C.boundary,zt=Q+bt;y+=bt,zt!==0&&w-zt<C.storage&&(y+=w-zt),O===0&&(F=y),y+=C.storage}let z=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new z((y-F)/Float32Array.BYTES_PER_ELEMENT),N.__offset=F}}let E=y%w;return E>0&&(y+=w-E),v.__size=y,v.__cache={},this}function x(v,T){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let T=v.target;T.removeEventListener("dispose",p),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:g}}var ET=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function AT(){return Ki===null&&(Ki=new Da(ET,16,16,js,Ui),Ki.name="DFG_LUT",Ki.minFilter=Wn,Ki.magFilter=Wn,Ki.wrapS=Wi,Ki.wrapT=Wi,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Wh=class{constructor(t={}){let{canvas:e=Vg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Qn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=f,p=new Set([uh,hh,ch]),g=new Set([Qn,Ni,Do,Lr,oh,ah]),v=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,E=null,_=[],b=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,N=null,H=null,I=null,F=null;this._outputColorSpace=In;let z=0,O=0,$=null,W=-1,C=null,Q=new Ne,bt=new Ne,zt=null,Z=new qt(0),rt=0,yt=e.width,vt=e.height,ct=1,Pt=null,fe=null,At=new Ne(0,0,yt,vt),Ht=new Ne(0,0,yt,vt),It=!1,Ot=new Ys,jt=new zc,ce=!1,q=!1,$t=new Ee,ye=new J,me=new Ne,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Ue(){return $===null?ct:1}let B=n;function _t(M,U){return e.getContext(M,U)}let Dt,kt,ut,he,Ct,Vt,A,S,V,ot,it,ft,gt,G,tt,ht,L,j,K,dt,lt,pt,at;try{let M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),B===null){let U="webgl2";if(B=_t(U,M),B===null)throw _t(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}mt()}catch(M){throw e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),Wt("WebGLRenderer: "+M.message),M}function mt(){Dt=new BM(B),Dt.init(),lt=new yT(B,Dt),kt=new AM(B,Dt,t,lt),ut=new xT(B,Dt),kt.reversedDepthBuffer&&u&&ut.buffers.depth.setReversed(!0),H=B.createFramebuffer(),I=B.createFramebuffer(),F=B.createFramebuffer(),he=new VM(B),Ct=new sT,Vt=new vT(B,Dt,ut,Ct,kt,lt,he),A=new FM(R),S=new Hv(B),pt=new wM(B,S),V=new zM(B,S,he,pt),ot=new HM(B,V,S,pt,he),j=new GM(B,kt,Vt),tt=new CM(Ct),it=new iT(R,A,Dt,kt,pt,tt),ft=new TT(R,Ct),gt=new oT,G=new fT(Dt),L=new TM(R,A,ut,ot,m,l),ht=new _T(R,ot,kt),at=new wT(B,he,kt,ut),K=new EM(B,Dt,he),dt=new kM(B,Dt,he),he.programs=it.programs,R.capabilities=kt,R.extensions=Dt,R.properties=Ct,R.renderLists=gt,R.shadowMap=ht,R.state=ut,R.info=he}x!==Qn&&(P=new XM(x,e.width,e.height,a,i,r));let st=new Rd(R,B);this.xr=st,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=Dt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Dt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(M){M!==void 0&&(ct=M,this.setSize(yt,vt,!1))},this.getSize=function(M){return M.set(yt,vt)},this.setSize=function(M,U,Y=!0){if(st.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=M,vt=U,e.width=Math.floor(M*ct),e.height=Math.floor(U*ct),Y===!0&&(e.style.width=M+"px",e.style.height=U+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(yt*ct,vt*ct).floor()},this.setDrawingBufferSize=function(M,U,Y){yt=M,vt=U,ct=Y,e.width=Math.floor(M*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(x===Qn){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(At)},this.setViewport=function(M,U,Y,k){M.isVector4?At.set(M.x,M.y,M.z,M.w):At.set(M,U,Y,k),ut.viewport(Q.copy(At).multiplyScalar(Ue()).round())},this.getScissor=function(M){return M.copy(Ht)},this.setScissor=function(M,U,Y,k){M.isVector4?Ht.set(M.x,M.y,M.z,M.w):Ht.set(M,U,Y,k),ut.scissor(bt.copy(Ht).multiplyScalar(Ue()).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(M){ut.setScissorTest(It=M)},this.setOpaqueSort=function(M){Pt=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,Y=!0){let k=0;if(M){let X=!1;if($!==null){let Mt=$.texture.format;X=p.has(Mt)}if(X){let Mt=$.texture.type,Lt=g.has(Mt),St=L.getClearColor(),Et=L.getClearAlpha(),Ft=St.r,Zt=St.g,oe=St.b;Lt?(v[0]=Ft,v[1]=Zt,v[2]=oe,v[3]=Et,B.clearBufferuiv(B.COLOR,0,v)):(T[0]=Ft,T[1]=Zt,T[2]=oe,T[3]=Et,B.clearBufferiv(B.COLOR,0,T))}else k|=B.COLOR_BUFFER_BIT}U&&(k|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(k|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),N=M},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),L.dispose(),gt.dispose(),G.dispose(),Vt.dispose(),Ct.dispose(),A.dispose(),ot.dispose(),V.dispose(),pt.dispose(),at.dispose(),it.dispose(),st.dispose(),st.removeEventListener("sessionstart",Me),st.removeEventListener("sessionend",ge),je.stop()};function et(M){M.preventDefault(),od("WebGLRenderer: Context Lost."),D=!0}function xt(){od("WebGLRenderer: Context Restored."),D=!1;let M=he.autoReset,U=ht.enabled,Y=ht.autoUpdate,k=ht.needsUpdate,X=ht.type;mt(),he.autoReset=M,ht.enabled=U,ht.autoUpdate=Y,ht.needsUpdate=k,ht.type=X}function nt(M){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function wt(M){let U=M.target;U.removeEventListener("dispose",wt),se(U)}function se(M){Yt(M),Ct.remove(M)}function Yt(M){let U=Ct.get(M).programs;U!==void 0&&(U.forEach(function(Y){it.releaseProgram(Y)}),M.isShaderMaterial&&it.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,Y,k,X,Mt){U===null&&(U=ie);let Lt=X.isMesh&&X.matrixWorld.determinantAffine()<0,St=pi(M,U,Y,k,X);ut.setMaterial(k,Lt);let Et=Y.index,Ft=1;if(k.wireframe===!0){if(Et=V.getWireframeAttribute(Y),Et===void 0)return;Ft=2}let Zt=Y.drawRange,oe=Y.attributes.position,Nt=Zt.start*Ft,ae=(Zt.start+Zt.count)*Ft;Mt!==null&&(Nt=Math.max(Nt,Mt.start*Ft),ae=Math.min(ae,(Mt.start+Mt.count)*Ft)),Et!==null?(Nt=Math.max(Nt,0),ae=Math.min(ae,Et.count)):oe!=null&&(Nt=Math.max(Nt,0),ae=Math.min(ae,oe.count));let Je=ae-Nt;if(Je<0||Je===1/0)return;pt.setup(X,k,St,Y,Et);let Ce,Te=K;if(Et!==null&&(Ce=S.get(Et),Te=dt,Te.setIndex(Ce)),X.isMesh)k.wireframe===!0?(ut.setLineWidth(k.wireframeLinewidth*Ue()),Te.setMode(B.LINES)):Te.setMode(B.TRIANGLES);else if(X.isLine){let yn=k.linewidth;yn===void 0&&(yn=1),ut.setLineWidth(yn*Ue()),X.isLineSegments?Te.setMode(B.LINES):X.isLineLoop?Te.setMode(B.LINE_LOOP):Te.setMode(B.LINE_STRIP)}else X.isPoints?Te.setMode(B.POINTS):X.isSprite&&Te.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))Te.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let yn=X._multiDrawStarts,Ut=X._multiDrawCounts,Un=X._multiDrawCount,pe=Et?S.get(Et).bytesPerElement:1,tr=Ct.get(k).currentProgram.getUniforms();for(let Sn=0;Sn<Un;Sn++)tr.setValue(B,"_gl_DrawID",Sn),Te.render(yn[Sn]/pe,Ut[Sn])}else if(X.isInstancedMesh)Te.renderInstances(Nt,Je,X.count);else if(Y.isInstancedBufferGeometry){let yn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ut=Math.min(Y.instanceCount,yn);Te.renderInstances(Nt,Je,Ut)}else Te.render(Nt,Je)};function Ie(M,U,Y,k){N!==null&&M.isNodeMaterial&&N.setObject(k,M),ce===!0&&tt.setState(M,Y,!1),M.transparent===!0&&M.side===Ji&&M.forceSinglePass===!1?(M.side=_n,M.needsUpdate=!0,ei(M,U,k),M.side=Qs,M.needsUpdate=!0,ei(M,U,k),M.side=Ji):ei(M,U,k)}this.compile=function(M,U,Y=null){Y===null&&(Y=M),N!==null&&N.renderStart(M,U,Y),E=G.get(Y),E.init(U),b.push(E),Y.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),M!==Y&&M.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),q=this.localClippingEnabled,ce=tt.init(this.clippingPlanes,q),ce===!0&&tt.setGlobalState(this.clippingPlanes,U),N!==null&&ht.render(E.state.shadowsArray,Y,U);let k=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Mt=X.material;if(Mt)if(Array.isArray(Mt))for(let Lt=0;Lt<Mt.length;Lt++){let St=Mt[Lt];Ie(St,Y,U,X),k.add(St)}else Ie(Mt,Y,U,X),k.add(Mt)}),E=b.pop(),N!==null&&N.renderEnd(),k},this.compileAsync=function(M,U,Y=null){let k=this.compile(M,U,Y);return new Promise(X=>{function Mt(){if(k.forEach(function(Lt){let Et=Ct.get(Lt).currentProgram;(Et===void 0||Et.isReady())&&k.delete(Lt)}),k.size===0){X(M);return}setTimeout(Mt,10)}Dt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Ye=null;function Le(M){Ye&&Ye(M)}function Me(){je.stop()}function ge(){je.start()}let je=new x_;je.setAnimationLoop(Le),typeof self!="undefined"&&je.setContext(self),this.setAnimationLoop=function(M){Ye=M,st.setAnimationLoop(M),M===null?je.stop():je.start()},st.addEventListener("sessionstart",Me),st.addEventListener("sessionend",ge),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(M,U);let Y=st.enabled===!0&&st.isPresenting===!0,k=P!==null&&($===null||Y)&&P.begin(R,$);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,U,$),E=G.get(M,b.length),E.init(U),E.state.textureUnits=Vt.getTextureUnits(),b.push(E),$t.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?jt.setFromArrayCamera(U):Ot.setFromProjectionMatrix($t,Mi,U.reversedDepth),q=this.localClippingEnabled,ce=tt.init(this.clippingPlanes,q),w=gt.get(M,_.length),w.init(),_.push(w),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Lt=R.xr.getDepthSensingMesh();Lt!==null&&be(Lt,U,-1/0,R.sortObjects)}be(M,U,0,R.sortObjects),w.finish(),N!==null&&N.updateLights(E.state.lightsArray),R.sortObjects===!0&&w.sort(Pt,fe),Ae=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ae&&L.addToRenderList(w,M),this.info.autoReset===!0&&this.info.reset(),ce===!0&&tt.beginShadows();let X=E.state.shadowsArray;if(ht.render(X,M,U),ce===!0&&tt.endShadows(),(k&&P.hasRenderPass())===!1){let Lt=w.opaque,St=w.transmissive;if(E.setupLights(),U.isArrayCamera){let Et=U.cameras;if(St.length>0)for(let Ft=0,Zt=Et.length;Ft<Zt;Ft++){let oe=Et[Ft];ti(Lt,St,M,oe)}Ae&&L.render(M);for(let Ft=0,Zt=Et.length;Ft<Zt;Ft++){let oe=Et[Ft];vn(w,M,oe,oe.viewport)}}else St.length>0&&ti(Lt,St,M,U),Ae&&L.render(M),vn(w,M,U)}$!==null&&O===0&&(Vt.updateMultisampleRenderTarget($),Vt.updateRenderTargetMipmap($)),k&&P.end(R),M.isScene===!0&&M.onAfterRender(R,M,U),pt.resetDefaultState(),W=-1,C=null,b.pop(),b.length>0?(E=b[b.length-1],Vt.setTextureUnits(E.state.textureUnits),ce===!0&&tt.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,N!==null&&N.renderEnd()};function be(M,U,Y,k){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let Lt=U.isArrayCamera?jt:Ot;if(!M.frustumCulled||M.intersectsFrustum(Lt)){k&&me.setFromMatrixPosition(M.matrixWorld).applyMatrix4($t);let St=ot.update(M),Et=M.material;Et.visible&&w.push(M,St,Et,Y,me.z,null,U)}}else if(M.isMesh||M.isLine||M.isPoints){let Lt=U.isArrayCamera?jt:Ot;if(!M.frustumCulled||M.intersectsFrustum(Lt)){let St=ot.update(M),Et=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),me.copy(M.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),me.copy(St.boundingSphere.center)),me.applyMatrix4(M.matrixWorld).applyMatrix4($t)),Array.isArray(Et)){let Ft=St.groups;for(let Zt=0,oe=Ft.length;Zt<oe;Zt++){let Nt=Ft[Zt],ae=Et[Nt.materialIndex];ae&&ae.visible&&w.push(M,St,ae,Y,me.z,Nt,U)}}else Et.visible&&w.push(M,St,Et,Y,me.z,null,U)}}}let Mt=M.children;for(let Lt=0,St=Mt.length;Lt<St;Lt++)be(Mt[Lt],U,Y,k)}function vn(M,U,Y,k){let{opaque:X,transmissive:Mt,transparent:Lt}=M;E.setupLightsView(Y),ce===!0&&tt.setGlobalState(R.clippingPlanes,Y),k&&ut.viewport(Q.copy(k)),X.length>0&&ke(X,U,Y),Mt.length>0&&ke(Mt,U,Y),Lt.length>0&&ke(Lt,U,Y),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function ti(M,U,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let Nt=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new ui(1,1,{generateMipmaps:!0,type:Nt?Ui:Qn,minFilter:ys,samples:Math.max(4,kt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let Mt=E.state.transmissionRenderTarget[k.id],Lt=k.viewport||Q;Mt.setSize(Lt.z*R.transmissionResolutionScale,Lt.w*R.transmissionResolutionScale);let St=R.getRenderTarget(),Et=R.getActiveCubeFace(),Ft=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(Z),rt=R.getClearAlpha(),rt<1&&R.setClearColor(16777215,.5),R.clear(),Ae&&L.render(Y);let Zt=R.toneMapping;R.toneMapping=$i;let oe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),ce===!0&&tt.setGlobalState(R.clippingPlanes,k),ke(M,Y,k),Vt.updateMultisampleRenderTarget(Mt),Vt.updateRenderTargetMipmap(Mt),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let ae=0,Je=U.length;ae<Je;ae++){let Ce=U[ae],{object:Te,geometry:yn,material:Ut,group:Un}=Ce;if(Ut.side===Ji&&Te.layers.test(k.layers)){let pe=Ut.side;Ut.side=_n,Ut.needsUpdate=!0,Ze(Te,Y,k,yn,Ut,Un),Ut.side=pe,Ut.needsUpdate=!0,Nt=!0}}Nt===!0&&(Vt.updateMultisampleRenderTarget(Mt),Vt.updateRenderTargetMipmap(Mt))}R.setRenderTarget(St,Et,Ft),R.setClearColor(Z,rt),oe!==void 0&&(k.viewport=oe),R.toneMapping=Zt}function ke(M,U,Y){let k=U.isScene===!0?U.overrideMaterial:null;for(let X=0,Mt=M.length;X<Mt;X++){let Lt=M[X],{object:St,geometry:Et,group:Ft}=Lt,Zt=Lt.material;Zt.allowOverride===!0&&k!==null&&(Zt=k),St.layers.test(Y.layers)&&Ze(St,U,Y,Et,Zt,Ft)}}function Ze(M,U,Y,k,X,Mt){N!==null&&X.isNodeMaterial&&N.setObject(M,X),M.onBeforeRender(R,U,Y,k,X,Mt),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(R,U,Y,k,M,Mt),X.transparent===!0&&X.side===Ji&&X.forceSinglePass===!1?(X.side=_n,X.needsUpdate=!0,R.renderBufferDirect(Y,U,k,X,M,Mt),X.side=Qs,X.needsUpdate=!0,R.renderBufferDirect(Y,U,k,X,M,Mt),X.side=Ji):R.renderBufferDirect(Y,U,k,X,M,Mt),M.onAfterRender(R,U,Y,k,X,Mt)}function tn(M){let U=0;for(let Y of M)Y.texture!==null&&U++;return U}function ei(M,U,Y){U.isScene!==!0&&(U=ie);let k=Ct.get(M),X=E.state.lights,Mt=E.state.shadowsArray,Lt=X.state.version,St=it.getParameters(M,X.state,Mt,U,Y,E.state.lightProbeGridArray),Et=it.getProgramCacheKey(St),Ft=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let Zt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=A.get(M.envMap||k.environment,Zt),k.envMapRotation=k.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ft===void 0&&(M.addEventListener("dispose",wt),Ft=new Map,k.programs=Ft,k.programVariants=new Map);let oe=Ft.get(Et);if(oe!==void 0){if(k.currentProgram===oe&&k.lightsStateVersion===Lt)return Ve(M,St),oe}else St.uniforms=it.getUniforms(M),N!==null&&M.isNodeMaterial&&N.build(M,Y,St),M.onBeforeCompile(St,R),oe=it.acquireProgram(St,Et),Ft.set(Et,oe),k.uniforms=St.uniforms;let Nt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Nt.clippingPlanes=tt.uniform),Ve(M,St),k.needsLights=cl(M),k.lightsStateVersion=Lt,k.needsLights&&(Nt.ambientLightColor.value=X.state.ambient,Nt.lightProbe.value=X.state.probe,Nt.sunLights.value=X.state.sun,Nt.sunLightShadows.value=X.state.sunShadow,Nt.directionalLights.value=X.state.directional,Nt.directionalLightShadows.value=X.state.directionalShadow,Nt.spotLights.value=X.state.spot,Nt.spotLightShadows.value=X.state.spotShadow,Nt.rectAreaLights.value=X.state.rectArea,Nt.ltc_1.value=X.state.rectAreaLTC1,Nt.ltc_2.value=X.state.rectAreaLTC2,Nt.pointLights.value=X.state.point,Nt.pointLightShadows.value=X.state.pointShadow,Nt.hemisphereLights.value=X.state.hemi,Nt.sunShadowMatrix.value=X.state.sunShadowMatrix,Nt.sunShadowCascade.value=X.state.sunShadowCascade,Nt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Nt.spotLightMatrix.value=X.state.spotLightMatrix,Nt.spotLightMap.value=X.state.spotLightMap,Nt.pointShadowMatrix.value=X.state.pointShadowMatrix),k.numLightProbeGrids=tn(E.state.lightProbeGridArray),k.currentProgram=oe,k.uniformsList=null,oe}function Or(M,U,Y,k,X){let Mt=Ct.get(M),Lt=Mt.currentProgram.id+","+k+","+X,St=Mt.programVariants.get(Lt);return St===void 0?(St=ei(M,U,Y),Mt.programVariants.set(Lt,St)):(Mt.currentProgram=St,Mt.uniformsList=null,Mt.outputColorSpace=k,Mt.toneMapping=X),St}function en(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Uo.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Ve(M,U){let Y=Ct.get(M);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function pi(M,U,Y,k,X){U.isScene!==!0&&(U=ie),Vt.resetTextureUnits();let Mt=U.fog,Lt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,St=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:le.workingColorSpace,Et=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ft=A.get(k.envMap||Lt,Et),Zt=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,oe=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Nt=!!Y.morphAttributes.position,ae=!!Y.morphAttributes.normal,Je=!!Y.morphAttributes.color,Ce=$i;k.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ce=R.toneMapping);let Te=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,yn=Te!==void 0?Te.length:0,Ut=Ct.get(k),Un=E.state.lights;if(ce===!0&&(q===!0||M!==C)){let Oe=M===C&&k.id===W;tt.setState(k,M,Oe)}let pe=!1,tr=!1;k.version===Ut.__version?Ut.needsLights&&Ut.lightsStateVersion!==Un.state.version||X.isBatchedMesh&&Ut.batching===!1||!X.isBatchedMesh&&Ut.batching===!0||X.isBatchedMesh&&Ut.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ut.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ut.instancing===!1||!X.isInstancedMesh&&Ut.instancing===!0||X.isSkinnedMesh&&Ut.skinning===!1||!X.isSkinnedMesh&&Ut.skinning===!0||X.isInstancedMesh&&Ut.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ut.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ut.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ut.instancingMorph===!1&&X.morphTexture!==null||Ut.envMap!==Ft||k.fog===!0&&Ut.fog!==Mt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==tt.numPlanes||Ut.numIntersection!==tt.numIntersection)||Ut.vertexAlphas!==Zt||Ut.vertexTangents!==oe||Ut.morphTargets!==Nt||Ut.morphNormals!==ae||Ut.morphColors!==Je||Ut.morphTargetsCount!==yn||Ut.numLightProbeGrids!==tn(E.state.lightProbeGridArray)?pe=!0:(Ut.outputColorSpace!==St||Ut.toneMapping!==Ce)&&(tr=!0):(pe=!0,Ut.__version=k.version);let Sn=Ut.currentProgram;(pe===!0||tr===!0)&&(Sn=tr===!0?Or(k,U,X,St,Ce):ei(k,U,X),N&&k.isNodeMaterial&&N.onUpdateProgram(k,Sn,Ut));let hl=!1,Ts=!1,er=!1,de=Sn.getUniforms(),fn=Ut.uniforms;if(ut.useProgram(Sn.program)&&(hl=!0,Ts=!0,er=!0),k.id!==W&&(W=k.id,Ts=!0),hl||C!==M){ut.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),de.setValue(B,"projectionMatrix",M.projectionMatrix),de.setValue(B,"viewMatrix",M.matrixWorldInverse);let an=de.map.cameraPosition;an!==void 0&&an.setValue(B,ye.setFromMatrixPosition(M.matrixWorld)),kt.logarithmicDepthBuffer&&de.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&de.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),C!==M&&(C=M,Ts=!0,er=!0)}if(Ut.needsLights&&(Un.state.sunShadowMap.length>0&&de.setValue(B,"sunShadowMap",Un.state.sunShadowMap,Vt),Un.state.directionalShadowMap.length>0&&de.setValue(B,"directionalShadowMap",Un.state.directionalShadowMap,Vt),Un.state.spotShadowMap.length>0&&de.setValue(B,"spotShadowMap",Un.state.spotShadowMap,Vt),Un.state.pointShadowMap.length>0&&de.setValue(B,"pointShadowMap",Un.state.pointShadowMap,Vt)),X.isSkinnedMesh){de.setOptional(B,X,"bindMatrix"),de.setOptional(B,X,"bindMatrixInverse");let Oe=X.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),de.setValue(B,"boneTexture",Oe.boneTexture,Vt))}X.isBatchedMesh&&(de.setOptional(B,X,"batchingTexture"),de.setValue(B,"batchingTexture",X._matricesTexture,Vt),de.setOptional(B,X,"batchingIdTexture"),de.setValue(B,"batchingIdTexture",X._indirectTexture,Vt),de.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&de.setValue(B,"batchingColorTexture",X._colorsTexture,Vt));let wi=Y.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&j.update(X,Y,Sn),(Ts||Ut.receiveShadow!==X.receiveShadow)&&(Ut.receiveShadow=X.receiveShadow,de.setValue(B,"receiveShadow",X.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(fn.envMapIntensity.value=U.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=AT()),Ts){if(de.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ut.needsLights&&zo(fn,er),Mt&&k.fog===!0&&ft.refreshFogUniforms(fn,Mt),ft.refreshMaterialUniforms(fn,k,ct,vt,E.state.transmissionRenderTarget[M.id]),Ut.needsLights&&Ut.numLightProbeGrids>0){let Oe=y,an=0;for(let ji of E.state.lightProbeGridArray)ji.texture!==null&&(Oe.textures[an]=ji.texture,Oe.min[an]=ji.boundingBox.min,Oe.max[an]=ji.boundingBox.max,Oe.resolution[an]=ji.resolution,an++);for(let ji in Oe)Oe[ji].length=an;fn.probesSH.value=Oe.textures,fn.probesMin.value=Oe.min,fn.probesMax.value=Oe.max,fn.probesResolution.value=Oe.resolution}Uo.upload(B,en(Ut),fn,Vt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Uo.upload(B,en(Ut),fn,Vt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&de.setValue(B,"center",X.center),de.setValue(B,"modelViewMatrix",X.modelViewMatrix),de.setValue(B,"normalMatrix",X.normalMatrix),de.setValue(B,"modelMatrix",X.matrixWorld),k.uniformsGroups!==void 0){let Oe=k.uniformsGroups;for(let an=0,ji=Oe.length;an<ji;an++){let Nd=Oe[an];at.update(Nd,Sn),at.bind(Nd,Sn)}}return Sn}function zo(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function cl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(M,U,Y){let k=Ct.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ct.get(M.texture).__webglTexture=U,Ct.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let Y=Ct.get(M);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,Y=0){$=M,z=U,O=Y;let k=null,X=!1,Mt=!1;if(M){let St=Ct.get(M);if(St.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(B.FRAMEBUFFER,St.__webglFramebuffer),Q.copy(M.viewport),bt.copy(M.scissor),zt=M.scissorTest,ut.viewport(Q),ut.scissor(bt),ut.setScissorTest(zt),W=-1;return}else if(St.__webglFramebuffer===void 0)Vt.setupRenderTarget(M);else if(St.__hasExternalTextures)Vt.rebindTextures(M,Ct.get(M.texture).__webglTexture,Ct.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Zt=M.depthTexture;if(St.__boundDepthTexture!==Zt){if(Zt!==null&&Ct.has(Zt)&&(M.width!==Zt.image.width||M.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(M)}}let Et=M.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(Mt=!0);let Ft=Ct.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?k=Ft[U][Y]:k=Ft[U],X=!0):M.samples>0&&Vt.useMultisampledRTT(M)===!1?k=Ct.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?k=Ft[Y]:k=Ft,Q.copy(M.viewport),bt.copy(M.scissor),zt=M.scissorTest}else Q.copy(At).multiplyScalar(ct).floor(),bt.copy(Ht).multiplyScalar(ct).floor(),zt=It;if(Y!==0&&(k=H),ut.bindFramebuffer(B.FRAMEBUFFER,k)&&ut.drawBuffers(M,k),ut.viewport(Q),ut.scissor(bt),ut.setScissorTest(zt),X){let St=Ct.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,Y)}else if(Mt){let St=U;for(let Et=0;Et<M.textures.length;Et++){let Ft=Ct.get(M.textures[Et]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Et,Ft.__webglTexture,Y,St)}}else if(M!==null&&Y!==0){let St=Ct.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,St.__webglTexture,Y)}W=-1};function bs(M){let U=Ct.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=kt.textureFormatReadable(M.format),U.__typeReadable=kt.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,Y,k,X,Mt,Lt,St=0){if(!(M&&M.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Ct.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Lt!==void 0&&(Et=Et[Lt],Array.isArray(Et)&&(Et=Et[0])),Et){ut.bindFramebuffer(B.FRAMEBUFFER,Et);try{let Ft=M.textures[St],Zt=Ft.format,oe=Ft.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+St);let Nt=bs(Ft);if(Nt.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-k&&Y>=0&&Y<=M.height-X&&B.readPixels(U,Y,k,X,lt.convert(Zt),lt.convert(oe),Mt)}finally{let Ft=$!==null?Ct.get($).__webglFramebuffer:null;ut.bindFramebuffer(B.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(M,U,Y,k,X,Mt,Lt,St=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Ct.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Lt!==void 0&&(Et=Et[Lt],Array.isArray(Et)&&(Et=Et[0])),Et)if(U>=0&&U<=M.width-k&&Y>=0&&Y<=M.height-X){ut.bindFramebuffer(B.FRAMEBUFFER,Et);let Ft=M.textures[St],Zt=Ft.format,oe=Ft.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+St);let Nt=bs(Ft);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ae),B.bufferData(B.PIXEL_PACK_BUFFER,Mt.byteLength,B.STREAM_READ),B.readPixels(U,Y,k,X,lt.convert(Zt),lt.convert(oe),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Je=$!==null?Ct.get($).__webglFramebuffer:null;ut.bindFramebuffer(B.FRAMEBUFFER,Je);let Ce=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Hg(B,Ce,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ae),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Mt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ae),B.deleteSync(Ce),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,Y=0){let k=Math.pow(2,-Y),X=Math.floor(M.image.width*k),Mt=Math.floor(M.image.height*k),Lt=U!==null?U.x:0,St=U!==null?U.y:0;Vt.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Lt,St,X,Mt),ut.unbindTexture()},this.copyTextureToTexture=function(M,U,Y=null,k=null,X=0,Mt=0){let Lt,St,Et,Ft,Zt,oe,Nt,ae,Je,Ce=M.isCompressedTexture?M.mipmaps[Mt]:M.image;if(Y!==null)Lt=Y.max.x-Y.min.x,St=Y.max.y-Y.min.y,Et=Y.isBox3?Y.max.z-Y.min.z:1,Ft=Y.min.x,Zt=Y.min.y,oe=Y.isBox3?Y.min.z:0;else{let de=Math.pow(2,-X);Lt=Math.floor(Ce.width*de),St=Math.floor(Ce.height*de),M.isDataArrayTexture?Et=Ce.depth:M.isData3DTexture?Et=Math.floor(Ce.depth*de):Et=1,Ft=0,Zt=0,oe=0}k!==null?(Nt=k.x,ae=k.y,Je=k.z):(Nt=0,ae=0,Je=0);let Te=lt.convert(U.format),yn=lt.convert(U.type),Ut;U.isData3DTexture?(Vt.setTexture3D(U,0),Ut=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Vt.setTexture2DArray(U,0),Ut=B.TEXTURE_2D_ARRAY):(Vt.setTexture2D(U,0),Ut=B.TEXTURE_2D),ut.activeTexture(B.TEXTURE0),ut.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),ut.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ut.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let Un=ut.getParameter(B.UNPACK_ROW_LENGTH),pe=ut.getParameter(B.UNPACK_IMAGE_HEIGHT),tr=ut.getParameter(B.UNPACK_SKIP_PIXELS),Sn=ut.getParameter(B.UNPACK_SKIP_ROWS),hl=ut.getParameter(B.UNPACK_SKIP_IMAGES);ut.pixelStorei(B.UNPACK_ROW_LENGTH,Ce.width),ut.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ce.height),ut.pixelStorei(B.UNPACK_SKIP_PIXELS,Ft),ut.pixelStorei(B.UNPACK_SKIP_ROWS,Zt),ut.pixelStorei(B.UNPACK_SKIP_IMAGES,oe);let Ts=M.isDataArrayTexture||M.isData3DTexture,er=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let de=Ct.get(M),fn=Ct.get(U),wi=Ct.get(de.__renderTarget),Oe=Ct.get(fn.__renderTarget);ut.bindFramebuffer(B.READ_FRAMEBUFFER,wi.__webglFramebuffer),ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let an=0;an<Et;an++)Ts&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(M).__webglTexture,X,oe+an),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(U).__webglTexture,Mt,Je+an)),B.blitFramebuffer(Ft,Zt,Ft+Lt,Zt+St,Nt,ae,Nt+Lt,ae+St,B.DEPTH_BUFFER_BIT,B.NEAREST);ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||Ct.has(M)){let de=Ct.get(M),fn=Ct.get(U);ut.bindFramebuffer(B.READ_FRAMEBUFFER,I),ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,F);for(let wi=0;wi<Et;wi++)Ts?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,de.__webglTexture,X,oe+wi):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,de.__webglTexture,X),er?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fn.__webglTexture,Mt,Je+wi):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fn.__webglTexture,Mt),X!==0?B.blitFramebuffer(Ft,Zt,Ft+Lt,Zt+St,Nt,ae,Nt+Lt,ae+St,B.COLOR_BUFFER_BIT,B.NEAREST):er?B.copyTexSubImage3D(Ut,Mt,Nt,ae,Je+wi,Ft,Zt,Lt,St):B.copyTexSubImage2D(Ut,Mt,Nt,ae,Ft,Zt,Lt,St);ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else er?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(Ut,Mt,Nt,ae,Je,Lt,St,Et,Te,yn,Ce.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Ut,Mt,Nt,ae,Je,Lt,St,Et,Te,Ce.data):B.texSubImage3D(Ut,Mt,Nt,ae,Je,Lt,St,Et,Te,yn,Ce):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Mt,Nt,ae,Lt,St,Te,yn,Ce.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Mt,Nt,ae,Ce.width,Ce.height,Te,Ce.data):B.texSubImage2D(B.TEXTURE_2D,Mt,Nt,ae,Lt,St,Te,yn,Ce);ut.pixelStorei(B.UNPACK_ROW_LENGTH,Un),ut.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pe),ut.pixelStorei(B.UNPACK_SKIP_PIXELS,tr),ut.pixelStorei(B.UNPACK_SKIP_ROWS,Sn),ut.pixelStorei(B.UNPACK_SKIP_IMAGES,hl),Mt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&B.generateMipmap(Ut),ut.unbindTexture()},this.initRenderTarget=function(M){Ct.get(M).__webglFramebuffer===void 0&&Vt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Vt.setTextureCube(M,0):M.isData3DTexture?Vt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Vt.setTexture2DArray(M,0):Vt.setTexture2D(M,0),ut.unbindTexture()},this.resetState=function(){z=0,O=0,$=null,ut.reset(),pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Yh=class extends Er{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Zs;t.deleteAttribute("uv");let e=new Ar({side:_n}),n=new Ar,i=new Cr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Pe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ua(t,n,6),a=new gn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Pe(t,Bo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Pe(t,Bo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Pe(t,Bo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Pe(t,Bo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Pe(t,Bo(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Pe(t,Bo(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Bo(s){return new Va({color:0,emissive:16777215,emissiveIntensity:s})}qe.registerPlugin(Jt);var R_="",Ur=[{name:"\u05E0\u05D9\u05E0\u05D2'\u05D4",img:"img/ninja.webp",color:"#ff8a1f",h:2.7,T:.24,R:.3,rough:.28,coat:1,note:"\u05DE\u05D7\u05D9\u05E8, \u05D8\u05E2\u05DE\u05D9\u05DD \u05D5\u05D6\u05DE\u05D9\u05E0\u05D5\u05EA \u05D1\u05D4\u05D5\u05D3\u05E2\u05D4 \u05D0\u05D7\u05EA."},{name:"\u05D8\u05D5\u05DE\u05D9 XL",img:"img/tomi.webp",color:"#8b4dff",h:2.9,T:.46,R:.5,rough:.32,coat:.8,note:"150K \u05E9\u05D0\u05D9\u05E4\u05D5\u05EA, 11 \u05D8\u05E2\u05DE\u05D9\u05DD \u05DC\u05D1\u05D7\u05D9\u05E8\u05D4."},{name:"\u05E1\u05D5\u05D5\u05D9\u05D8",img:"img/sweet.webp",color:"#ff3b4e",h:2.5,T:.22,R:.26,rough:.95,coat:0,note:"\u05DE\u05D7\u05D9\u05E8, \u05E6\u05D1\u05E2\u05D9\u05DD \u05D5\u05D6\u05DE\u05D9\u05E0\u05D5\u05EA \u05D1\u05D4\u05D5\u05D3\u05E2\u05D4 \u05D0\u05D7\u05EA."},{name:"\u05E4\u05E0\u05D8\u05D5\u05DD",img:"img/phantom.webp",color:"#9fb6ff",h:2.75,T:.2,R:.24,rough:.22,coat:1,note:"Ultra Plus. \u05DE\u05D7\u05D9\u05E8 \u05D5\u05D6\u05DE\u05D9\u05E0\u05D5\u05EA \u05D1\u05D4\u05D5\u05D3\u05E2\u05D4 \u05D0\u05D7\u05EA."}],RT=[{name:"\u05E2\u05D9\u05E8 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4",link:""},{name:"\u05E2\u05D9\u05E8 \u05E9\u05E0\u05D9\u05D9\u05D4",link:""},{name:"\u05E2\u05D9\u05E8 \u05E9\u05DC\u05D9\u05E9\u05D9\u05EA",link:""},{name:"\u05E2\u05D9\u05E8 \u05E8\u05D1\u05D9\u05E2\u05D9\u05EA",link:""}],xn=(s,t=document)=>t.querySelector(s),Zh=(s,t=document)=>[...t.querySelectorAll(s)],jn=matchMedia("(prefers-reduced-motion: reduce)").matches,Dd=()=>innerWidth<900;function L_(){let s=new Date().toLocaleTimeString("he-IL",{hour:"2-digit",minute:"2-digit",hour12:!1});xn("#clock").textContent=s,xn("#clock2").textContent=s}L_();setInterval(L_,15e3);xn("#cityList").innerHTML=RT.map(s=>s.link?`<li><a class="city" href="${s.link}" target="_blank" rel="noopener"><span class="city-n">${s.name}</span><span class="city-s">\u05DC\u05D4\u05E6\u05D8\u05E8\u05E3 \u05DC\u05E7\u05D1\u05D5\u05E6\u05D4<svg><use href="#wa"/></svg></span></a></li>`:`<li><div class="city soon"><span class="city-n">${s.name}</span><span class="city-s">\u05D4\u05E7\u05D1\u05D5\u05E6\u05D4 \u05E0\u05E4\u05EA\u05D7\u05EA \u05D1\u05E7\u05E8\u05D5\u05D1</span></div></li>`).join("");var Pd=xn("#toast"),P_;function PT(s){Pd.textContent=s,Pd.classList.add("on"),clearTimeout(P_),P_=setTimeout(()=>Pd.classList.remove("on"),2400)}document.addEventListener("click",s=>{let t=s.target.closest("[data-wa]");if(!t)return;let e=t.dataset.wa,n=e?`\u05D4\u05D9\u05D9, \u05D4\u05D2\u05E2\u05EA\u05D9 \u05DE\u05D4\u05D0\u05EA\u05E8 \u05E9\u05DC \u05D4\u05D3\u05D5\u05D3. \u05D0\u05E9\u05DE\u05D7 \u05DC\u05E7\u05D1\u05DC \u05DE\u05D7\u05D9\u05E8 \u05E2\u05DC ${e}`:"\u05D4\u05D9\u05D9, \u05D4\u05D2\u05E2\u05EA\u05D9 \u05DE\u05D4\u05D0\u05EA\u05E8 \u05E9\u05DC \u05D4\u05D3\u05D5\u05D3. \u05D0\u05E9\u05DE\u05D7 \u05DC\u05D4\u05D6\u05DE\u05D9\u05DF";if(!R_)return PT("\u05D4\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \u05D9\u05D7\u05D5\u05D1\u05E8 \u05D1\u05E7\u05E8\u05D5\u05D1");window.open(`https://wa.me/${R_}?text=${encodeURIComponent(n)}`,"_blank","noopener")});var Nr=null;jn||(Nr=new Nm({duration:1.1,smoothWheel:!0}),Nr.on("scroll",Jt.update),qe.ticker.add(s=>Nr.raf(s*1e3)),qe.ticker.lagSmoothing(0),Nr.stop(),Zh('a[href^="#"]').forEach(s=>s.addEventListener("click",t=>{let e=xn(s.getAttribute("href"));e&&(t.preventDefault(),Nr.scrollTo(e))})));var Id=xn("#gl"),Xn=null;try{Xn=IT()}catch(s){console.warn("webgl off",s)}function IT(){let s=new Wh({canvas:Id,antialias:!0,alpha:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(devicePixelRatio,Dd()?1.5:2));let t=new Er,e=35,n=9.5,i=new Ln(e,1,.1,50);i.position.z=n;let r=new Li,o=new Li;o.add(r),t.add(o);let a=new fi({transparent:!0,depthWrite:!1,blending:$a,uniforms:{col:{value:new qt(Ur[0].color)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"precision mediump float;varying vec2 vUv;uniform vec3 col;void main(){float d=length(vUv-.5)*2.;float a=pow(max(0.,1.-d),2.2);gl_FragColor=vec4(col*a*.55,a);}"}),l=new Pe(new vs(5.2,5.2),a);l.position.z=-.6,o.add(l);let c=new Oo(s);t.environment=c.fromScene(new Yh,.03).texture,t.environmentIntensity=.45;let h=new Za(16777215,1.6);h.position.set(2.5,3,6),t.add(h);let d=new Cr(16738835,40,20);d.position.set(-3,1.5,1.5),t.add(d);function u(F,z){let O=F.image,$=150,W=Math.round($*O.height/O.width),C=$+1,Q=W+1,bt=document.createElement("canvas");bt.width=C,bt.height=Q;let zt=bt.getContext("2d",{willReadFrequently:!0});zt.drawImage(O,0,0,C,Q);let Z=zt.getImageData(0,0,C,Q).data,rt=new Float32Array(C*Q),yt=1e6;for(let _t=0;_t<C*Q;_t++)rt[_t]=Z[_t*4+3]>110?yt:0;let vt=(_t,Dt)=>_t<0||Dt<0||_t>=C||Dt>=Q?0:rt[Dt*C+_t];for(let _t=0;_t<Q;_t++)for(let Dt=0;Dt<C;Dt++){let kt=_t*C+Dt;rt[kt]&&(rt[kt]=Math.min(rt[kt],vt(Dt-1,_t)+1,vt(Dt,_t-1)+1,vt(Dt-1,_t-1)+1.414,vt(Dt+1,_t-1)+1.414))}for(let _t=Q-1;_t>=0;_t--)for(let Dt=C-1;Dt>=0;Dt--){let kt=_t*C+Dt;rt[kt]&&(rt[kt]=Math.min(rt[kt],vt(Dt+1,_t)+1,vt(Dt,_t+1)+1,vt(Dt+1,_t+1)+1.414,vt(Dt-1,_t+1)+1.414))}let ct=document.createElement("canvas");ct.width=O.width,ct.height=O.height;let Pt=ct.getContext("2d");Pt.drawImage(O,0,0);let fe=Pt.getImageData(0,0,ct.width,ct.height);for(let _t=3;_t<fe.data.length;_t+=4)fe.data[_t]=fe.data[_t]>110?255:0;Pt.putImageData(fe,0,0),F=new Fa(ct),F.colorSpace=In,F.anisotropy=8;let At=z.h,Ht=At*O.width/O.height,It=z.R*$,Ot=z.T*Ht,jt=new vs(Ht,At,$,W),ce=jt.attributes.position,q=new Float32Array(C*Q),$t=new Float32Array(C*Q);for(let _t=0;_t<C*Q;_t++){let Dt=Math.min(rt[_t],It)/It;q[_t]=Ot*Math.sqrt(1-(1-Dt)*(1-Dt))}for(let _t=0;_t<4;_t++){for(let Dt=0;Dt<Q;Dt++)for(let kt=0;kt<C;kt++){let ut=0,he=0;for(let Ct=-1;Ct<=1;Ct++)for(let Vt=-1;Vt<=1;Vt++){let A=kt+Vt,S=Dt+Ct;A<0||S<0||A>=C||S>=Q||(ut+=q[S*C+A],he++)}$t[Dt*C+kt]=ut/he}[q,$t]=[$t,q]}for(let _t=0;_t<C*Q;_t++)ce.setZ(_t,q[_t]);let ye=jt.index.array,me=[];for(let _t=0;_t<ye.length;_t+=3)(q[ye[_t]]>1e-4||q[ye[_t+1]]>1e-4||q[ye[_t+2]]>1e-4)&&me.push(ye[_t],ye[_t+1],ye[_t+2]);jt.setIndex(me),jt.computeVertexNormals();let ie=(_t,Dt)=>new ka({map:F,alphaTest:.5,alphaToCoverage:!0,color:_t,emissive:16777215,emissiveMap:F,emissiveIntensity:Dt,roughness:z.rough,metalness:.1,clearcoat:z.coat,clearcoatRoughness:.18}),Ae=new Li,Ue=new Pe(jt,ie(16777215,.5)),B=new Pe(jt,ie(3815994,.08));return B.scale.z=-1,Ae.add(Ue,B),Ae.visible=!1,Ae}let f=new Ha,m=[],x=F=>m.forEach((z,O)=>{z&&(z.visible=O===F)}),p=()=>Promise.all(Ur.map((F,z)=>new Promise(O=>f.load(F.img,$=>{$.colorSpace=In,$.anisotropy=8,m[z]=u($,F),r.add(m[z]),O()},void 0,O)))).then(()=>x(_)),g=new fi({transparent:!0,depthWrite:!1,uniforms:{t:{value:0},col:{value:new qt(Ur[0].color)},asp:{value:1},amt:{value:1},org:{value:new ne(.5,.5)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.999,1.);}",fragmentShader:`
      precision highp float; varying vec2 vUv; uniform float t,asp,amt; uniform vec3 col; uniform vec2 org;
      float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
      float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*n(p);p=p*2.03+vec2(11.3,7.1);a*=.5;}return s;}
      void main(){
        vec2 p=vec2(vUv.x*asp,vUv.y)*2.4; float k=t*.05;
        vec2 q=vec2(fbm(p+vec2(0.,-k)),fbm(p+vec2(5.2,1.3)-k*.7));
        float f=fbm(p+2.6*q+vec2(0.,-k*2.2));
        float v=smoothstep(.34,.92,f);
        vec2 d=(vUv-org)*vec2(asp,1.);
        float m=smoothstep(.95,.05,length(d));
        vec3 c=mix(col,vec3(1.),v*v*.55);
        float a=v*(.18+.82*m)*amt;
        gl_FragColor=vec4(c,a*.8);
      }`}),v=new Pe(new vs(2,2),g);v.frustumCulled=!1,v.renderOrder=-1,t.add(v);let T={x:0,y:0,s:1,rz:0},y={v:0},w={v:1},E={x:0,y:0,tx:0,ty:0},_=0,b=1,P=1;addEventListener("pointermove",F=>{E.tx=F.clientX/innerWidth-.5,E.ty=F.clientY/innerHeight-.5},{passive:!0});function R(){let F=innerWidth,z=innerHeight;s.setSize(F,z,!1),i.aspect=F/z,i.updateProjectionMatrix(),P=2*Math.tan(hd.degToRad(e/2))*n,b=P*i.aspect,g.uniforms.asp.value=i.aspect}R(),addEventListener("resize",R);let D=new qt;function N(F,z){if(F===_&&!z)return;let O=F>_?1:-1;_=F;let $=Ur[F];if(D.set($.color),z||jn){x(F),a.uniforms.col.value.set($.color),g.uniforms.col.value.set($.color),d.color.set($.color);return}qe.timeline({overwrite:!0}).to(y,{v:Math.PI/2*O,duration:.42,ease:"power2.in"}).to(w,{v:.82,duration:.42,ease:"power2.in"},0).add(()=>{x(_),y.v=-Math.PI/2*O}).to(y,{v:0,duration:.85,ease:"power3.out"}).to(w,{v:1,duration:.85,ease:"back.out(1.6)"},"<"),qe.to(a.uniforms.col.value,{r:D.r,g:D.g,b:D.b,duration:1}),qe.to(d.color,{r:D.r,g:D.g,b:D.b,duration:1}),qe.to(g.uniforms.col.value,{r:D.r,g:D.g,b:D.b,duration:1.2})}let H=!0;function I(F){if(!H)return;E.x+=(E.tx-E.x)*.06,E.y+=(E.ty-E.y)*.06;let z=jn?0:1;o.position.set(T.x*b/2,T.y*P/2+Math.sin(F*.9)*.06*z,0),o.scale.setScalar(T.s*w.v),o.rotation.z=T.rz+Math.sin(F*.6)*.03*z,o.rotation.x=E.y*.4+Math.sin(F*.4)*.08*z,r.rotation.y=y.v+Math.sin(F*.55)*.5*z+E.x*.8+.25,g.uniforms.t.value=F,g.uniforms.org.value.set(.5+T.x/2,.5+T.y/2+.08),s.render(t,i)}return qe.ticker.add(I),{st:T,spin:y,setProduct:N,setLabels:p,smokeMat:g,set on(F){H=F,Id.style.visibility=F?"visible":"hidden"}}}function Ld(){return Dd()?{x:-.44,y:-.14,s:.72,rz:.22}:{x:-.5,y:-.02,s:1.25,rz:.16}}function LT(){return Dd()?{x:0,y:.09,s:.9,rz:0}:{x:0,y:.03,s:1.12,rz:0}}function DT(){if(Xn){Object.assign(Xn.st,Ld());let p=v=>()=>Ld()[v],g=v=>()=>LT()[v];qe.fromTo(Xn.st,{x:p("x"),y:p("y"),s:p("s"),rz:p("rz")},{x:g("x"),y:g("y"),s:g("s"),rz:g("rz"),ease:"power1.inOut",immediateRender:!1,scrollTrigger:{trigger:"#products",start:"top bottom",end:"top top",scrub:!0,invalidateOnRefresh:!0}})}jn||qe.to(".hero-h",{yPercent:-18,opacity:.15,ease:"none",scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:!0}});let s=0;Jt.create({start:0,end:"max",onUpdate(p){let g=p.scroll();xn("#nav").classList.toggle("hide",g>200&&g>s),s=g}});let t=xn("#tape"),e=0,n=0,i=()=>t.firstElementChild.offsetWidth;Jt.create({start:0,end:"max",onUpdate(p){n=p.getVelocity()/240}}),jn||qe.ticker.add((p,g)=>{n*=.92,e-=(1.1+Math.abs(n))*g/16;let v=i();-e>=v&&(e+=v),t.style.transform=`translate3d(${e}px,0,0)`});let r=xn("#plogo"),o=xn("#pnote"),a=xn("#ptitle"),l=xn("#pbtn"),c=xn("#pidx"),h=Zh("#pdots i"),d=xn("#products"),u=0;function f(p){if(p===u)return;let g=p>u?1:-1;u=p;let v=Ur[p];Xn&&Xn.setProduct(p),d.style.setProperty("--c",v.color),h.forEach((y,w)=>y.classList.toggle("on",w===p)),c.textContent=p+1,l.dataset.wa=v.name;let T=()=>{a.textContent=v.name,o.textContent=v.note,l.lastElementChild.textContent=`\u05DE\u05D7\u05D9\u05E8 \u05E2\u05DC ${v.name}`};if(jn)return T();qe.fromTo(r,{scale:1},{scale:1.07,duration:.42,ease:"power2.in",yoyo:!0,repeat:1,overwrite:!0}),qe.timeline({defaults:{overwrite:!0}}).to([a,o,l],{y:-24*g,opacity:0,duration:.3,stagger:.04,ease:"power2.in"}).add(T).fromTo([a,o,l],{y:24*g,opacity:0},{y:0,opacity:1,duration:.55,stagger:.05,ease:"power3.out"})}d.style.setProperty("--c",Ur[0].color);let m=Ur.length;Jt.create({trigger:d,start:"top top",end:()=>`+=${innerHeight*(m-1)*.9}`,pin:!0,anticipatePin:1,snap:jn?!1:{snapTo:1/(m-1),duration:{min:.25,max:.6},delay:.08,ease:"power2.inOut"},onUpdate(p){f(Math.min(m-1,Math.round(p.progress*(m-1))))}}),jn||qe.fromTo(".prod-logo",{scale:1.6,opacity:0},{scale:1,opacity:1,ease:"none",scrollTrigger:{trigger:d,start:"top bottom",end:"top top",scrub:!0}}),Xn&&Jt.create({trigger:"#how",start:"top top",onEnter:()=>Xn.on=!1,onLeaveBack:()=>Xn.on=!0});let x=Zh(".msg");if(jn)x.forEach(p=>p.classList.add("in"));else{let p=qe.timeline({scrollTrigger:{trigger:".chat",start:"top 72%"}});x.forEach((g,v)=>{let T=g.classList.contains("them");T&&p.add(()=>g.classList.add("typing"),"+=.25").to({},{duration:.75}),p.add(()=>{g.classList.remove("typing"),g.classList.add("in")},T?void 0:"+=.45").fromTo(g,{y:22,scale:.9,opacity:0},{y:0,scale:1,opacity:1,duration:.5,ease:"back.out(1.7)"},"<")})}jn||Zh(".big,.huge").forEach(p=>qe.fromTo(p,{clipPath:"inset(0 0 100% 0)",y:40},{clipPath:"inset(-10% 0 -10% 0)",y:0,duration:1.1,ease:"power4.out",scrollTrigger:{trigger:p,start:"top 85%"}})),jn||qe.from(".city",{xPercent:12,opacity:0,stagger:.07,duration:.8,ease:"power3.out",scrollTrigger:{trigger:"#cityList",start:"top 82%"}})}function I_(){document.body.classList.remove("is-loading"),Nr&&Nr.start();let s=qe.timeline();if(s.to("#loader",{yPercent:-100,duration:jn?0:1,ease:"power4.inOut"}).set("#loader",{display:"none"}).to(Id,{opacity:1,duration:1.2},.3),!jn&&(s.from(".ln>span",{yPercent:115,duration:1.2,stagger:.11,ease:"power4.out"},.45).from(".hero-foot>*",{y:30,opacity:0,duration:.9,stagger:.1,ease:"power3.out"},1).from("#nav",{yPercent:-120,duration:.9,ease:"power3.out"},.9),Xn)){let t=Ld();s.from(Xn.st,{y:t.y-1.4,rz:t.rz+1.2,duration:1.8,ease:"power3.out"},.4).from(Xn.spin,{v:-Math.PI*2,duration:2.3,ease:"power3.out"},.4).from(Xn.smokeMat.uniforms.amt,{value:0,duration:2},.4)}}function NT(){let s=!1;try{s=sessionStorage.getItem("age18")==="1"}catch{}let t=qe.timeline({defaults:{ease:"power3.out"}}),e=jn?0:1;t.to(".l-ring",{strokeDashoffset:0,duration:1.1*e,ease:"power2.inOut"}).to(".l-ring2",{strokeDashoffset:0,duration:.9*e,ease:"power2.inOut"},.2*e).fromTo(".l-stars use",{opacity:0,scale:0,transformOrigin:"50% 50%"},{opacity:1,scale:1,duration:.45*e,stagger:.09*e,ease:"back.out(3)"},.5*e).fromTo(".l-word",{opacity:0,y:14},{opacity:1,y:0,duration:.6*e},.9*e).to(".l-rule,.l-he",{opacity:1,duration:.5*e},1.1*e),s?t.add(I_,"+=.25"):t.to(".loader-logo",{scale:.72,duration:.7*e,ease:"power3.inOut"},"+=.1").to("#gate",{autoAlpha:1,y:0,duration:.6*e},"<.2"),xn("#gateYes").onclick=()=>{try{sessionStorage.setItem("age18","1")}catch{}I_()},xn("#gateNo").onclick=()=>{xn("#gate").innerHTML='<p class="gate-q">\u05DE\u05E6\u05D8\u05E2\u05E8\u05D9\u05DD.</p><p class="gate-t">\u05D4\u05D0\u05EA\u05E8 \u05DE\u05D9\u05D5\u05E2\u05D3 \u05DC\u05DE\u05D1\u05D5\u05D2\u05E8\u05D9\u05DD \u05DE\u05D2\u05D9\u05DC 18 \u05D5\u05DE\u05E2\u05DC\u05D4 \u05D1\u05DC\u05D1\u05D3.</p>'}}var UT=document.fonts?Promise.all([document.fonts.load("700 100px Karantina","\u05E0\u05D2\u05DE\u05E8"),document.fonts.load("900 40px Montserrat","HADOD"),document.fonts.load("900 20px Rubik","\u05D4\u05D3\u05D5\u05D3")]):Promise.resolve();Promise.race([UT,new Promise(s=>setTimeout(s,2500))]).then(()=>{let s=Xn?Xn.setLabels():Promise.resolve();DT(),s.then(NT),addEventListener("load",()=>Jt.refresh())});})();
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

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
