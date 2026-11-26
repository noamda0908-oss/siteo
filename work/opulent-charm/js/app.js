(()=>{var r_=Object.defineProperty;var o_=(s,t,e)=>t in s?r_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var At=(s,t,e)=>o_(s,typeof t!="symbol"?t+"":t,e);function ts(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Sd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Uo={duration:.5,overwrite:!1,delay:0},Xh,pn,Le,mi=1e8,Se=1/mi,Fh=Math.PI*2,a_=Fh/4,l_=0,Md=Math.sqrt,c_=Math.cos,h_=Math.sin,nn=function(t){return typeof t=="string"},Ge=function(t){return typeof t=="function"},ns=function(t){return typeof t=="number"},sl=function(t){return typeof t=="undefined"},zi=function(t){return typeof t=="object"},Yn=function(t){return t!==!1},qh=function(){return typeof window!="undefined"},Ya=function(t){return Ge(t)||nn(t)},bd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Sn=Array.isArray,u_=/random\([^)]+\)/g,f_=/,\s*/g,dd=/(?:-?\.?\d|\.)+/gi,Yh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ir=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ph=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zh=/[+-]=-?[.\d]+/,d_=/[^,'"\[\]\s]+/gi,p_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ue,Fi,Bh,Jh,ei={},Ka={},Td,wd=function(t){return(Ka=Dr(t,ei))&&Mn},rl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Oo=function(t,e){return!e&&console.warn(t)},Ed=function(t,e){return t&&(ei[t]=e)&&Ka&&(Ka[t]=e)||ei},Fo=function(){return 0},m_={suppressEvents:!0,isStart:!0,kill:!1},Za={suppressEvents:!0,kill:!1},g_={suppressEvents:!0},$h={},ws=[],zh={},Ad,Xn={},Ih={},pd=30,Ja=[],Kh="",Qh=function(t){var e=t[0],n,i;if(zi(e)||Ge(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ja.length;i--&&!Ja[i].targetTest(e););n=Ja[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new nu(t[i],n)))||t.splice(i,1);return t},Es=function(t){return t._gsap||Qh(gi(t))[0]._gsap},jh=function(t,e,n){return(n=t[e])&&Ge(n)?t[e]():sl(n)&&t.getAttribute&&t.getAttribute(e)||n},In=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},Ne=function(t){return Math.round(t*1e7)/1e7||0},sr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},__=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Qa=function(){var t=ws.length,e=ws.slice(0),n,i;for(zh={},ws.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},tu=function(t){return!!(t._initted||t._startAt||t.add)},Cd=function(t,e,n,i){ws.length&&!pn&&Qa(),t.render(e,n,i||!!(pn&&e<0&&tu(t))),ws.length&&!pn&&Qa()},Rd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(d_).length<2?e:nn(t)?t.trim():t},Pd=function(t){return t},ni=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},x_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Dr=function(t,e){for(var n in e)t[n]=e[n];return t},md=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=zi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},ja=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Lo=function(t){var e=t.parent||Ue,n=t.keyframes?x_(Sn(t.keyframes)):ni;if(Yn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},v_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Id=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},ol=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},As=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},tr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},y_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},kh=function(t,e,n,i){return t._startAt&&(pn?t._startAt.revert(Za):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},S_=function s(t){return!t||t._ts&&s(t.parent)},gd=function(t){return t._repeat?Nr(t._tTime,t=t.duration()+t._rDelay)*t:0},Nr=function(t,e){var n=Math.floor(t=Ne(t/e));return t&&n===t?n-1:n},tl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},al=function(t){return t._end=Ne(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},ll=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ne(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),al(t),n._dirty||tr(n,t)),t},Ld=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=tl(t.rawTime(),e),(!e._dur||Vo(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),tr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},Bi=function(t,e,n,i){return e.parent&&As(e),e._start=Ne((ns(n)?n:!n&&el(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Ue?pi(t,n,e):t._time)+e._delay),e._end=Ne(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Id(t,e,"_first","_last",t._sort?"_start":0),el(e)||(t._recent=e),i||Ld(t,e),t._ts<0&&ll(t,t._tTime),t},Dd=function(t,e){return(ei.ScrollTrigger||rl("scrollTrigger",e))&&ei.ScrollTrigger.create(e,t)},Nd=function(t,e,n,i,r){if(ru(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!pn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ad!==qn.frame)return ws.push(t),t._lazy=[r,i],1},M_=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},el=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},b_=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&M_(t)&&!(!t._initted&&el(t))||(t._ts<0||t._dp._ts<0)&&!el(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Vo(0,t._tDur,e),h=Nr(l,a),t._yoyo&&h&1&&(o=1-o),h!==Nr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||pn||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&Nd(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&kh(t,e,n,!0),t._onUpdate&&!n&&ti(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ti(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&As(t,1),!n&&!pn&&(ti(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},T_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ur=function(t,e,n,i){var r=t._repeat,o=Ne(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ne(o*(r+1)+t._rDelay*r):o,a>0&&!i&&ll(t,t._tTime=t._tDur*a),t.parent&&al(t),n||tr(t.parent,t),t},_d=function(t){return t instanceof yn?tr(t):Ur(t,t._dur)},w_={_start:0,endTime:Fo,totalDuration:Fo},pi=function s(t,e,n){var i=t.labels,r=t._recent||w_,o=t.duration()>=mi?r.endTime(!1):t._dur,a,l,c;return nn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Sn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Do=function(t,e,n){var i=ns(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Yn(l.vars.inherit)&&l.parent;o.immediateRender=Yn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new qe(e[0],o,e[r+1])},Cs=function(t,e){return t||t===0?e(t):e},Vo=function(t,e,n){return n<t?t:n>e?e:n},mn=function(t,e){return!nn(t)||!(e=p_.exec(t))?"":e[1]},E_=function(t,e,n){return Cs(n,function(i){return Vo(t,e,i)})},Vh=[].slice,Ud=function(t,e){return t&&zi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&zi(t[0]))&&!t.nodeType&&t!==Fi},A_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return nn(i)&&!e||Ud(i,1)?(r=n).push.apply(r,gi(i)):n.push(i)})||n},gi=function(t,e,n){return Le&&!e&&Le.selector?Le.selector(t):nn(t)&&!n&&(Bh||!Or())?Vh.call((e||Jh).querySelectorAll(t),0):Sn(t)?A_(t,n):Ud(t)?Vh.call(t,0):t?[t]:[]},Gh=function(t){return t=gi(t)[0]||Oo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return gi(e,n.querySelectorAll?n:n===t?Oo("Invalid scope")||Jh.createElement("div"):t)}},Od=function(t){return t.sort(function(){return .5-Math.random()})},Fd=function(t){if(Ge(t))return t;var e=zi(t)?t:{each:t},n=er(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return nn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(f,u,m){var _=(m||e).length,p=o[_],g,v,w,y,T,E,x,S,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,mi])[1],!P){for(x=-mi;x<(x=m[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(p=o[_]=[],g=l?Math.min(P,_)*h-.5:i%P,v=P===mi?0:l?_*d/P-.5:i/P|0,x=0,S=mi,E=0;E<_;E++)w=E%P-g,y=v-(E/P|0),p[E]=T=c?Math.abs(c==="y"?y:w):Md(w*w+y*y),T>x&&(x=T),T<S&&(S=T);i==="random"&&Od(p),p.max=x-S,p.min=S,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=mn(e.amount||e.each)||0,n=n&&_<0?k_(n):n}return _=(p[f]-p.min)/p.max||0,Ne(p.b+(n?n(_):_)*p.v)+p.u}},Hh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ne(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ns(n)?0:mn(n))}},Bd=function(t,e){var n=Sn(t),i,r;return!n&&zi(t)&&(i=n=t.radius||mi,t.values?(t=gi(t.values),(r=!ns(t[0]))&&(i*=i)):t=Hh(t.increment)),Cs(e,n?Ge(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=mi,h=0,d=t.length,f,u;d--;)r?(f=t[d].x-a,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!i||c<=i?t[h]:o,r||h===o||ns(o)?h:h+mn(o)}:Hh(t))},zd=function(t,e,n,i){return Cs(Sn(t)?!e:n===!0?!!(n=0):!i,function(){return Sn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},C_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},R_=function(t,e){return function(n){return t(parseFloat(n))+(e||mn(n))}},P_=function(t,e,n){return Vd(t,e,0,1,n)},kd=function(t,e,n){return Cs(n,function(i){return t[~~e(i)]})},I_=function s(t,e,n){var i=e-t;return Sn(t)?kd(t,s(0,t.length),e):Cs(n,function(r){return(i+(r-t)%i)%i+t})},L_=function s(t,e,n){var i=e-t,r=i*2;return Sn(t)?kd(t,s(0,t.length-1),e):Cs(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Fr=function(t){return t.replace(u_,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(f_);return zd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Vd=function(t,e,n,i,r){var o=e-t,a=i-n;return Cs(r,function(l){return n+((l-t)/o*a||0)})},D_=function s(t,e,n,i){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=nn(t),a={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Sn(t)&&!Sn(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(m){m*=d;var _=Math.min(f,~~m);return h[_](m-_)},n=e}else i||(t=Dr(Sn(t)?[]:{},t));if(!h){for(l in e)iu.call(a,t,l,"get",e[l]);r=function(m){return lu(m,a)||(o?t.p:t)}}}return Cs(n,r)},xd=function(t,e,n){var i=t.labels,r=mi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ti=function(t,e,n){var i=t.vars,r=i[e],o=Le,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&ws.length&&Qa(),a&&(Le=a),h=l?r.apply(c,l):r.call(c),Le=o,h},Po=function(t){return As(t),t.scrollTrigger&&t.scrollTrigger.kill(!!pn),t.progress()<1&&ti(t,"onInterrupt"),t},Lr,Gd=[],Hd=function(t){if(t)if(t=!t.name&&t.default||t,qh()||t.headless){var e=t.name,n=Ge(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Fo,render:lu,add:iu,kill:$_,modifier:J_,rawVars:0},o={targetTest:0,get:0,getSetter:cl,aliases:{},register:0};if(Or(),t!==i){if(Xn[e])return;ni(i,ni(ja(t,r),o)),Dr(i.prototype,Dr(r,ja(t,o))),Xn[i.prop=e]=i,t.targetTest&&(Ja.push(i),$h[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ed(e,i),t.register&&t.register(Mn,i,Ln)}else Gd.push(t)},Ee=255,Io={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},Lh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ee+.5|0},Wd=function(t,e,n){var i=t?ns(t)?[t>>16,t>>8&Ee,t&Ee]:0:Io.black,r,o,a,l,c,h,d,f,u,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Io[t])i=Io[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ee,i&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(dd),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Lh(l+1/3,r,o),i[1]=Lh(l,r,o),i[2]=Lh(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Yh),n&&i.length<4&&(i[3]=1),i}else i=t.match(dd)||Io.transparent;i=i.map(Number)}return e&&!m&&(r=i[0]/Ee,o=i[1]/Ee,a=i[2]/Ee,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===r?(o-a)/u+(o<a?6:0):d===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Xd=function(t){var e=[],n=[],i=-1;return t.split(es).forEach(function(r){var o=r.match(ir)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},vd=function(t,e,n){var i="",r=(t+i).match(es),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(f){return(f=Wd(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Xd(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(es,"1").split(ir),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(es),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},es=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Io)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),N_=/hsl[a]?\(/,eu=function(t){var e=t.join(" "),n;if(es.lastIndex=0,es.test(e))return n=N_.test(e),t[1]=vd(t[1],n),t[0]=vd(t[0],n,Xd(t[1])),!0},Bo,qn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,f,u,m=function _(p){var g=s()-i,v=p===!0,w,y,T,E;if((g>t||g<0)&&(n+=g-e),i+=g,T=i-n,w=T-o,(w>0||v)&&(E=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,o+=w+(w>=r?0:r-w),y=1),v||(l=c(_)),y)for(u=0;u<a.length;u++)a[u](T,f,E,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Td&&(!Bh&&qh()&&(Fi=Bh=window,Jh=Fi.document||{},ei.gsap=Mn,(Fi.gsapVersions||(Fi.gsapVersions=[])).push(Mn.version),wd(Ka||Fi.GreenSockGlobals||!Fi.gsap&&Fi||{}),Gd.forEach(Hd)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Bo=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Bo=0,c=Fo},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,g,v){var w=g?function(y,T,E,x){p(y,T,E,x),d.remove(w)}:p;return d.remove(p),a[v?"unshift":"push"](w),Or(),w},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&u>=g&&u--},_listeners:a},d})(),Or=function(){return!Bo&&qn.wake()},ae={},U_=/^[\d.\-M][\d.\-,\s]/,O_=/["']/g,F_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(O_,"").trim():+c,i=l.substr(a+1).trim();return e},B_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},z_=function(t){var e=(t+"").split("("),n=ae[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[F_(e[1])]:B_(t).split(",").map(Rd)):ae._CE&&U_.test(t)?ae._CE("",t):n},k_=function(t){return function(e){return 1-t(1-e)}},er=function(t,e){return t&&(Ge(t)?t:ae[t]||z_(t))||e},rr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return In(t,function(a){ae[a]=ei[a]=r,ae[o=a.toLowerCase()]=n;for(var l in r)ae[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ae[a+"."+l]=r[l]}),r},qd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Dh=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Fh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*h_((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:qd(a);return r=Fh/r,l.config=function(c,h){return s(t,c,h)},l},Nh=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:qd(n);return i.config=function(r){return s(t,r)},i};In("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;rr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;rr("Elastic",Dh("in"),Dh("out"),Dh());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};rr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);rr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});rr("Circ",function(s){return-(Md(1-s*s)-1)});rr("Sine",function(s){return s===1?1:-c_(s*a_)+1});rr("Back",Nh("in"),Nh("out"),Nh());ae.SteppedEase=ae.steps=ei.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Se;return function(a){return((i*Vo(0,o,a)|0)+r)*n}}};Uo.ease=ae["quad.out"];In("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Kh+=s+","+s+"Params,"});var nu=function(t,e){this.id=l_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:jh,this.set=e?e.getSetter:cl},zo=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ur(this,+e.duration,1,1),this.data=e.data,Le&&(this._ctx=Le,Le.data.push(this)),Bo||qn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ur(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Or(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ll(this,n),!r._dp||r.parent||Ld(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Cd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Nr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?tl(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Vo(-Math.abs(this._delay),a,r),i!==!1),al(this),y_(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Or(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Se,o;if(r)for(this._tTime-=Se,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Se){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=Ne(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=g_);var i=pn;return pn=n,tu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_d(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,_d(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(pi(this,n),Yn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Yn(i)),this._dur||(this._zTime=-Se),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Se)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Ge(n)?n:Pd,l=function(){var h=i.then;i.then=null,r&&r(),Ge(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Po(this)},s})();ni(zo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var yn=(function(s){Sd(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Yn(n.sortChildren),Ue&&Bi(n.parent||Ue,ts(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Dd(ts(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Do(0,arguments,this),this},e.from=function(i,r,o){return Do(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Do(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Lo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new qe(i,r,pi(this,o),1),this},e.call=function(i,r,o){return Bi(this,qe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new qe(i,o,pi(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Lo(o).immediateRender=Yn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,Lo(a).immediateRender=Yn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ne(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,m,_,p,g,v,w,y,T,E,x;if(this!==Ue&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,w=this._ts,g=!w,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=Ne(h%p),h===l?(_=this._repeat,f=c):(T=Ne(h/p),_=~~T,_&&_===T&&(f=c,_--),f>c&&(f=c)),T=Nr(this._tTime,p),!a&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),E&&_&1&&(f=c-f,x=1),_!==T&&!this._lock){var S=E&&T&1,P=S===(E&&_&1);if(_<T&&(S=!S),a=S?0:h%c?c:h,this._lock=1,this.render(a||(x?0:Ne(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=T_(this,Ne(a),Ne(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!T&&(ti(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(u=this._first;u;){if(m=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,r,o),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-Se);break}}u=m}else{u=this._last;for(var C=i<0?i:f;u;){if(m=u._prev,(u._act||C<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(C-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(C-u._start)*u._ts,r,o||pn&&tu(u)),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=C?-Se:Se);break}}u=m}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-Se)._zTime=f>=a?1:-1,this._ts))return this._start=y,al(this),this.render(i,r,o);this._onUpdate&&!r&&ti(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&As(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(ti(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(ns(r)||(r=pi(this,r,i)),!(i instanceof zo)){if(Sn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(nn(i))return this.addLabel(i,r);if(Ge(i))i=qe.delayedCall(0,i);else return this}return this!==i?Bi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qe?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return nn(i)?this.removeLabel(i):Ge(i)?this.killTweensOf(i):(i.parent===this&&ol(this,i),i===this._recent&&(this._recent=this._last),tr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ne(qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=pi(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=qe.delayedCall(0,r||Fo,o);return a.data="isPause",this._hasPause=1,Bi(this,a,pi(this,i))},e.removePause=function(i){var r=this._first;for(i=pi(this,i);r;)r._start===i&&r.data==="isPause"&&As(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ts!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=gi(i),l=this._first,c=ns(r),h;l;)l instanceof qe?__(l._targets,a)&&(c?(!Ts||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=pi(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,m=qe.to(o,ni({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Se,onStart:function(){if(o.pause(),!u){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&Ur(m,p,0,1).render(m._time,!0,!0),u=1}h&&h.apply(m,d||[])}},r));return f?m.render(0):m},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,ni({startAt:{time:pi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),xd(this,pi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),xd(this,pi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ne(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return tr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),tr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=mi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Bi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ne(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Ur(o,o===Ue&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ue._ts&&(Cd(Ue,tl(i,Ue)),Ad=qn.frame),qn.frame>=pd){pd+=Zn.autoSleep||120;var r=Ue._first;if((!r||!r._ts)&&Zn.autoSleep&&qn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||qn.sleep()}}},t})(zo);ni(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var V_=function(t,e,n,i,r,o,a){var l=new Ln(this._pt,t,e,0,1,au,null,r),c=0,h=0,d,f,u,m,_,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Fr(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),f=n.match(Ph)||[];d=Ph.exec(i);)m=d[0],_=i.substring(c,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),m!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?sr(p,m)-p:parseFloat(m)-p,m:u&&u<4?Math.round:0},c=Ph.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Zh.test(i)||g)&&(l.e=0),this._pt=l,l},iu=function(t,e,n,i,r,o,a,l,c,h){Ge(i)&&(i=i(r||0,t,o));var d=t[e],f=n!=="get"?n:Ge(d)?c?t[e.indexOf("set")||!Ge(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=Ge(d)?c?q_:Zd:ou,m;if(nn(i)&&(~i.indexOf("random(")&&(i=Fr(i)),i.charAt(1)==="="&&(m=sr(f,i)+(mn(f)||0),(m||m===0)&&(i=m))),!h||f!==i||Wh)return!isNaN(f*i)&&i!==""?(m=new Ln(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?Z_:Jd,0,u),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&rl(e,i),V_.call(this,t,e,f,i,u,l||Zn.stringFilter,c))},G_=function(t,e,n,i,r){if(Ge(t)&&(t=No(t,r,e,n,i)),!zi(t)||t.style&&t.nodeType||Sn(t)||bd(t))return nn(t)?No(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=No(t[a],r,e,n,i);return o},su=function(t,e,n,i,r,o){var a,l,c,h;if(Xn[t]&&(a=new Xn[t]).init(r,a.rawVars?e[t]:G_(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Ln(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Lr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ts,Wh,ru=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:p,w=t._overwrite==="auto"&&!Xh,y=t.timeline,T=i.easeReverse||d,E,x,S,P,C,D,N,G,I,B,H,O,J;if(y&&(!f||!r)&&(r="none"),t._ease=er(r,Uo.ease),t._rEase=T&&(er(T)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||f&&!i.stagger){if(G=p[0]?Es(p[0]).harness:0,O=G&&i[G.prop],E=ja(i,$h),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&m?Za:m_),_._lazy=0),o){if(As(t._startAt=qe.set(p,ni({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Yn(l),startAt:null,delay:0,onUpdate:c&&function(){return ti(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn||!a&&!u)&&t._startAt.revert(Za),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),S=ni({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Yn(l),immediateRender:a,stagger:0,parent:g},E),O&&(S[G.prop]=O),As(t._startAt=qe.set(p,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn?t._startAt.revert(Za):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Yn(l)||l&&!m,x=0;x<p.length;x++){if(C=p[x],N=C._gsap||Qh(p)[x]._gsap,t._ptLookup[x]=B={},zh[N.id]&&ws.length&&Qa(),H=v===p?x:v.indexOf(C),G&&(I=new G).init(C,O||E,t,H,v)!==!1&&(t._pt=P=new Ln(t._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(z){B[z]=P}),I.priority&&(D=1)),!G||O)for(S in E)Xn[S]&&(I=su(S,E,t,H,C,v))?I.priority&&(D=1):B[S]=P=iu.call(t,C,S,"get",E[S],H,v,0,i.stringFilter);t._op&&t._op[x]&&t.kill(C,t._op[x]),w&&t._pt&&(Ts=t,Ue.killTweensOf(C,B,t.globalTime(e)),J=!t.parent,Ts=0),t._pt&&l&&(zh[N.id]=1)}D&&cu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!J,f&&e<=0&&y.render(mi,!0,!0)},H_=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Wh=1,t.vars[e]="+=0",ru(t,a),Wh=0,l?Oo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=He(n)+mn(d.e)),d.b&&(d.b=h.s+mn(d.b))},W_=function(t,e){var n=t[0]?Es(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Dr({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},X_=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Sn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},No=function(t,e,n,i,r){return Ge(t)?t.call(e,n,i,r):nn(t)&&~t.indexOf("random(")?Fr(t):t},nl=Kh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Yd={};In(nl+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Yd[s]=1});nl=nl.split(",");var qe=(function(s){Sd(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Lo(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Ue,v=(Sn(n)||bd(n)?ns(n[0]):"length"in i)?[n]:gi(n),w,y,T,E,x,S,P,C;if(a._targets=v.length?Qh(v):Oo("GSAP target "+n+" not found. https://gsap.com",!Zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,m||f||Ya(c)||Ya(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(w=a.timeline=new yn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),w.kill(),w.parent=w._dp=ts(a),w._start=0,f||Ya(c)||Ya(h)){if(E=v.length,P=f&&Fd(f),zi(f))for(x in f)~nl.indexOf(x)&&(C||(C={}),C[x]=f[x]);for(y=0;y<E;y++)T=ja(i,Yd),T.stagger=0,D&&(T.easeReverse=D),C&&Dr(T,C),S=v[y],T.duration=+No(c,ts(a),y,S,v),T.delay=(+No(h,ts(a),y,S,v)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),w.to(S,T,P?P(y,S,v):0),w._ease=ae.none;w.duration()?c=h=0:a.timeline=0}else if(m){Lo(ni(w.vars.defaults,{ease:"none"})),w._ease=er(m.ease||i.ease||"none");var N=0,G,I,B;if(Sn(m))m.forEach(function(H){return w.to(v,H,">")}),w.duration();else{T={};for(x in m)x==="ease"||x==="easeEach"||X_(x,m[x],T,m.easeEach);for(x in T)for(G=T[x].sort(function(H,O){return H.t-O.t}),N=0,y=0;y<G.length;y++)I=G[y],B={ease:I.e,duration:(I.t-(y?G[y-1].t:0))/100*c},B[x]=I.v,w.to(v,B,N),N+=B.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return u===!0&&!Xh&&(Ts=ts(a),Ue.killTweensOf(v),Ts=0),Bi(g,ts(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!m&&a._start===Ne(g._time)&&Yn(d)&&S_(ts(a))&&g.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-h)||0)),p&&Dd(ts(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Se&&!h?l:i<Se?0:i,f,u,m,_,p,g,v,w;if(!c)b_(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(f=Ne(d%_),d===l?(m=this._repeat,f=c):(p=Ne(d/_),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(f=c-f),p=Nr(this._tTime,_),f===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ne(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Nd(this,h?i:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var T=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!p&&(ti(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;w&&w.render(i<0?i:w._dur*w._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&kh(this,i,r,o),ti(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&ti(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&kh(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&As(this,1),!r&&!(h&&!a)&&(d||a||g)&&(ti(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Bo||qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ru(this,c),h=this._ease(c/this._dur),H_(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(ll(this,0),this.parent||Id(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Po(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ts&&Ts.vars.overwrite!==!0)._first||Po(this),this.parent&&o!==this.timeline.totalDuration()&&Ur(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?gi(i):a,c=this._ptLookup,h=this._pt,d,f,u,m,_,p,g;if((!r||r==="all")&&v_(a,l))return r==="all"&&(this._pt=0),Po(this);for(d=this._op=this._op||[],r!=="all"&&(nn(r)&&(_={},In(r,function(v){return _[v]=1}),r=_),r=W_(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(d[g]=r,m=f,u={}):(u=d[g]=d[g]||{},m=r);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&ol(this,p,"_pt"),delete f[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&Po(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Do(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Do(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Ue.killTweensOf(i,r,o)},t})(zo);ni(qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});In("staggerTo,staggerFrom,staggerFromTo",function(s){qe[s]=function(){var t=new yn,e=Vh.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var ou=function(t,e,n){return t[e]=n},Zd=function(t,e,n){return t[e](n)},q_=function(t,e,n,i){return t[e](i.fp,n)},Y_=function(t,e,n){return t.setAttribute(e,n)},cl=function(t,e){return Ge(t[e])?Zd:sl(t[e])&&t.setAttribute?Y_:ou},Jd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Z_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},au=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},lu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},J_=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},$_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ol(this,e,"_pt"):e.dep||(n=1),e=i;return!n},K_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},cu=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Ln=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Jd,this.d=l||this,this.set=c||ou,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=K_,this.m=n,this.mt=r,this.tween=i},s})();In(Kh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return $h[s]=1});ei.TweenMax=ei.TweenLite=qe;ei.TimelineLite=ei.TimelineMax=yn;Ue=new yn({sortChildren:!1,defaults:Uo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Zn.stringFilter=eu;var nr=[],$a={},Q_=[],yd=0,j_=0,Uh=function(t){return($a[t]||Q_).map(function(e){return e()})},ko=function(){var t=Date.now(),e=[];t-yd>2&&(Uh("matchMediaInit"),nr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Fi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Uh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),yd=t,Uh("matchMedia"))},$d=(function(){function s(e,n){this.selector=n&&Gh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=j_++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ge(n)&&(r=i,i=n,n=Ge);var o=this,a=function(){var c=Le,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Gh(r)),Le=o,d=i.apply(o,arguments),Ge(d)&&o._r.push(d),Le=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Ge?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Le;Le=null,n(this),Le=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof qe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qe)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=nr.length;o--;)nr[o].id===this.id&&nr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(ko):a.removeEventListener("change",ko)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),t0=(function(){function s(e){this.contexts=[],this.scope=e,Le&&Le.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){zi(n)||(n={matches:n});var o=new $d(0,r||this.scope),a=o.conditions={},l,c,h;Le&&!o.selector&&(o.selector=Le.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Fi.matchMedia(n[c]),l&&(nr.indexOf(o)<0&&nr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(ko):l.addEventListener("change",ko),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),il={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Hd(i)})},timeline:function(t){return new yn(t)},getTweensOf:function(t,e){return Ue.getTweensOf(t,e)},getProperty:function(t,e,n,i){nn(t)&&(t=gi(t)[0]);var r=Es(t||{}).get,o=n?Pd:Rd;return n==="native"&&(n=""),t&&(e?o((Xn[e]&&Xn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Xn[a]&&Xn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=gi(t),t.length>1){var i=t.map(function(h){return Mn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=Xn[e],a=Es(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Lr._pt=0,d.init(t,n?h+n:h,Lr,0,[t]),d.render(1,d),Lr._pt&&lu(1,Lr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Mn.to(t,ni((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=er(t.ease,Uo.ease)),md(Uo,t||{})},config:function(t){return md(Zn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Xn[a]&&!ei[a]&&Oo(e+" effect requires "+a+" plugin.")}),Ih[e]=function(a,l,c){return n(gi(a),ni(l||{},r),c)},o&&(yn.prototype[e]=function(a,l,c){return this.add(Ih[e](a,zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ae[t]=er(e)},parseEase:function(t,e){return arguments.length?er(t,e):ae},getById:function(t){return Ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new yn(t),i,r;for(n.smoothChildTiming=Yn(t.smoothChildTiming),Ue.remove(n),n._dp=0,n._time=n._tTime=Ue._time,i=Ue._first;i;)r=i._next,(e||!(!i._dur&&i instanceof qe&&i.vars.onComplete===i._targets[0]))&&Bi(n,i,i._start-i._delay),i=r;return Bi(Ue,n,0),n},context:function(t,e){return t?new $d(t,e):Le},matchMedia:function(t){return new t0(t)},matchMediaRefresh:function(){return nr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ko()},addEventListener:function(t,e){var n=$a[t]||($a[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=$a[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:I_,wrapYoyo:L_,distribute:Fd,random:zd,snap:Bd,normalize:P_,getUnit:mn,clamp:E_,splitColor:Wd,toArray:gi,selector:Gh,mapRange:Vd,pipe:C_,unitize:R_,interpolate:D_,shuffle:Od},install:wd,effects:Ih,ticker:qn,updateRoot:yn.updateRoot,plugins:Xn,globalTimeline:Ue,core:{PropTween:Ln,globals:Ed,Tween:qe,Timeline:yn,Animation:zo,getCache:Es,_removeLinkedListItem:ol,reverting:function(){return pn},context:function(t){return t&&Le&&(Le.data.push(t),t._ctx=Le),Le},suppressOverwrites:function(t){return Xh=t}}};In("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return il[s]=qe[s]});qn.add(yn.updateRoot);Lr=il.to({},{duration:0});var e0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},n0=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=e0(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Oh=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(nn(r)&&(l={},In(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}n0(a,r)}}}},Mn=il.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Oh("roundProps",Hh),Oh("modifiers"),Oh("snap",Bd))||il;qe.version=yn.version=Mn.version="3.15.1";Td=1;qh()&&Or();var i0=ae.Power0,s0=ae.Power1,r0=ae.Power2,o0=ae.Power3,a0=ae.Power4,l0=ae.Linear,c0=ae.Quad,h0=ae.Cubic,u0=ae.Quart,f0=ae.Quint,d0=ae.Strong,p0=ae.Elastic,m0=ae.Back,g0=ae.SteppedEase,_0=ae.Bounce,x0=ae.Sine,v0=ae.Expo,y0=ae.Circ;var Kd,Rs,zr,mu,cr,S0,Qd,gu,M0=function(){return typeof window!="undefined"},ss={},lr=180/Math.PI,kr=Math.PI/180,Br=Math.atan2,jd=1e8,_u=/([A-Z])/g,b0=/(left|right|width|margin|padding|x)/i,T0=/[\s,\(]\S/,ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},w0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},E0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},A0=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},C0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},ap=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},lp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},R0=function(t,e,n){return t.style[e]=n},P0=function(t,e,n){return t.style.setProperty(e,n)},I0=function(t,e,n){return t._gsap[e]=n},L0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},D0=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},N0=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Oe="transform",Jn=Oe+"Origin",U0=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in ss&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ki[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=is(i,a)}):this.tfm[t]=o.x?o[t]:is(i,t),t===Jn&&(this.tfm.zOrigin=o.zOrigin);else return ki.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Oe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Jn,e,"")),t=Oe}(r||e)&&this.props.push(t,e,r[t])},cp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},O0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(_u,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=gu(),(!r||!r.isStart)&&!n[Oe]&&(cp(n),i.zOrigin&&n[Jn]&&(n[Jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},hp=function(t,e){var n={target:t,props:[],revert:O0,save:U0};return t._gsap||Mn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},up,fu=function(t,e){var n=Rs.createElementNS?Rs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Rs.createElement(t);return n&&n.style?n:Rs.createElement(t)},ii=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(_u,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Vr(e)||e,1)||""},tp="O,Moz,ms,Ms,Webkit".split(","),Vr=function(t,e,n){var i=e||cr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(tp[o]+t in r););return o<0?null:(o===3?"ms":o>=0?tp[o]:"")+t},du=function(){M0()&&window.document&&(Kd=window,Rs=Kd.document,zr=Rs.documentElement,cr=fu("div")||{style:{}},S0=fu("div"),Oe=Vr(Oe),Jn=Oe+"Origin",cr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",up=!!Vr("perspective"),gu=Mn.core.reverting,mu=1)},ep=function(t){var e=t.ownerSVGElement,n=fu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),zr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),zr.removeChild(n),r},np=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},fp=function(t){var e,n;try{e=t.getBBox()}catch{e=ep(t),n=1}return e&&(e.width||e.height)||n||(e=ep(t)),e&&!e.width&&!e.x&&!e.y?{x:+np(t,["x","cx","x1"])||0,y:+np(t,["y","cy","y1"])||0,width:0,height:0}:e},dp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&fp(t))},Is=function(t,e){if(e){var n=t.style,i;e in ss&&e!==Jn&&(e=Oe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(_u,"-$1").toLowerCase())):n.removeAttribute(e)}},Ps=function(t,e,n,i,r,o){var a=new Ln(t._pt,e,n,0,1,o?lp:ap);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},ip={deg:1,rad:1,turn:1},F0={grid:1,flex:1},Ls=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=cr.style,l=b0.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",m,_,p,g;if(i===o||!r||ip[i]||ip[o])return r;if(o!=="px"&&!f&&(r=s(t,e,n,"px")),g=t.getCTM&&dp(t),(u||o==="%")&&(ss[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],He(u?r/m*d:r/100*m);if(a[l?"width":"height"]=d+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Rs||!_.appendChild)&&(_=Rs.body),p=_._gsap,p&&u&&p.width&&l&&p.time===qn.time&&!p.uncache)return He(r/p.width*d);if(u&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,m=t[h],v?t.style[e]=v:Is(t,e)}else(u||o==="%")&&!F0[ii(_,"display")]&&(a.position=ii(t,"position")),_===t&&(a.position="static"),_.appendChild(cr),m=cr[h],_.removeChild(cr),a.position="absolute";return l&&u&&(p=Es(_),p.time=qn.time,p.width=_[h]),He(f?m*r/d:m&&r?d/m*r:0)},is=function(t,e,n,i){var r;return mu||du(),e in ki&&e!=="transform"&&(e=ki[e],~e.indexOf(",")&&(e=e.split(",")[0])),ss[e]&&e!=="transform"?(r=Wo(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ul(ii(t,Jn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=hl[e]&&hl[e](t,e,n)||ii(t,e)||jh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ls(t,e,r,n)+n:r},B0=function(t,e,n,i){if(!n||n==="none"){var r=Vr(e,t,1),o=r&&ii(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=ii(t,"borderTopColor"))}var a=new Ln(this._pt,t.style,e,0,1,au),l=0,c=0,h,d,f,u,m,_,p,g,v,w,y,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ii(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ii(t,e)||i,_?t.style[e]=_:Is(t,e)),h=[n,i],eu(h),n=h[0],i=h[1],f=n.match(ir)||[],T=i.match(ir)||[],T.length){for(;d=ir.exec(i);)p=d[0],v=i.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(_=f[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),p.charAt(1)==="="&&(p=sr(u,p)+y),g=parseFloat(p),w=p.substr((g+"").length),l=ir.lastIndex-w.length,w||(w=w||Zn.units[e]||y,l===i.length&&(i+=w,a.e+=w)),y!==w&&(u=Ls(t,e,_,w)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:u,c:g-u,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?lp:ap;return Zh.test(i)&&(a.e=0),this._pt=a,a},sp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},z0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=sp[n]||n,e[1]=sp[i]||i,e.join(" ")},k0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ss[a]&&(l=1,a=a==="transformOrigin"?Jn:Oe),Is(n,a);l&&(Is(n,Oe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wo(n,1),o.uncache=1,cp(i)))}},hl={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Ln(t._pt,e,n,0,0,k0);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Ho=[1,0,0,1,0,0],pp={},mp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},rp=function(t){var e=ii(t,Oe);return mp(e)?Ho:e.substr(7).match(Yh).map(He)},xu=function(t,e){var n=t._gsap||Es(t),i=t.style,r=rp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ho:r):(r===Ho&&!t.offsetParent&&t!==zr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,zr.appendChild(t)),r=rp(t),l?i.display=l:Is(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):zr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},pu=function(t,e,n,i,r,o){var a=t._gsap,l=r||xu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=l[0],m=l[1],_=l[2],p=l[3],g=l[4],v=l[5],w=e.split(" "),y=parseFloat(w[0])||0,T=parseFloat(w[1])||0,E,x,S,P;n?l!==Ho&&(x=u*p-m*_)&&(S=y*(p/x)+T*(-_/x)+(_*v-p*g)/x,P=y*(-m/x)+T*(u/x)-(u*v-m*g)/x,y=S,T=P):(E=fp(t),y=E.x+(~w[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(w[1]||w[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&a.smooth?(g=y-c,v=T-h,a.xOffset=d+(g*u+v*_)-g,a.yOffset=f+(g*m+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Jn]="0px 0px",o&&(Ps(o,a,"xOrigin",c,y),Ps(o,a,"yOrigin",h,T),Ps(o,a,"xOffset",d,a.xOffset),Ps(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},Wo=function(t,e){var n=t._gsap||new nu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ii(t,Jn)||"0",h,d,f,u,m,_,p,g,v,w,y,T,E,x,S,P,C,D,N,G,I,B,H,O,J,z,R,tt,yt,Nt,q,rt;return h=d=f=_=p=g=v=w=y=0,u=m=1,n.svg=!!(t.getCTM&&dp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Oe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Oe]!=="none"?l[Oe]:"")),i.scale=i.rotate=i.translate="none"),x=xu(t,n.svg),n.svg&&(n.uncache?(J=t.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),pu(t,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,x)),T=n.xOrigin||0,E=n.yOrigin||0,x!==Ho&&(D=x[0],N=x[1],G=x[2],I=x[3],h=B=x[4],d=H=x[5],x.length===6?(u=Math.sqrt(D*D+N*N),m=Math.sqrt(I*I+G*G),_=D||N?Br(N,D)*lr:0,v=G||I?Br(G,I)*lr+_:0,v&&(m*=Math.abs(Math.cos(v*kr))),n.svg&&(h-=T-(T*D+E*G),d-=E-(T*N+E*I))):(rt=x[6],Nt=x[7],R=x[8],tt=x[9],yt=x[10],q=x[11],h=x[12],d=x[13],f=x[14],S=Br(rt,yt),p=S*lr,S&&(P=Math.cos(-S),C=Math.sin(-S),O=B*P+R*C,J=H*P+tt*C,z=rt*P+yt*C,R=B*-C+R*P,tt=H*-C+tt*P,yt=rt*-C+yt*P,q=Nt*-C+q*P,B=O,H=J,rt=z),S=Br(-G,yt),g=S*lr,S&&(P=Math.cos(-S),C=Math.sin(-S),O=D*P-R*C,J=N*P-tt*C,z=G*P-yt*C,q=I*C+q*P,D=O,N=J,G=z),S=Br(N,D),_=S*lr,S&&(P=Math.cos(S),C=Math.sin(S),O=D*P+N*C,J=B*P+H*C,N=N*P-D*C,H=H*P-B*C,D=O,B=J),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),u=He(Math.sqrt(D*D+N*N+G*G)),m=He(Math.sqrt(H*H+rt*rt)),S=Br(B,H),v=Math.abs(S)>2e-4?S*lr:0,y=q?1/(q<0?-q:q):0),n.svg&&(O=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!mp(ii(t,Oe)),O&&t.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(u*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=He(u),n.scaleY=He(m),n.rotation=He(_)+a,n.rotationX=He(p)+a,n.rotationY=He(g)+a,n.skewX=v+a,n.skewY=w+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Jn]=ul(c)),n.xOffset=n.yOffset=0,n.force3D=Zn.force3D,n.renderTransform=n.svg?G0:up?gp:V0,n.uncache=0,n},ul=function(t){return(t=t.split(" "))[0]+" "+t[1]},hu=function(t,e,n){var i=mn(e);return He(parseFloat(e)+parseFloat(Ls(t,"x",n+"px",i)))+i},V0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,gp(t,e)},or="0deg",Go="0px",ar=") ",gp=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,w=n.zOrigin,y="",T=g==="auto"&&t&&t!==1||g===!0;if(w&&(d!==or||h!==or)){var E=parseFloat(h)*kr,x=Math.sin(E),S=Math.cos(E),P;E=parseFloat(d)*kr,P=Math.cos(E),o=hu(v,o,x*P*-w),a=hu(v,a,-Math.sin(E)*-w),l=hu(v,l,S*P*-w+w)}p!==Go&&(y+="perspective("+p+ar),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(T||o!==Go||a!==Go||l!==Go)&&(y+=l!==Go||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ar),c!==or&&(y+="rotate("+c+ar),h!==or&&(y+="rotateY("+h+ar),d!==or&&(y+="rotateX("+d+ar),(f!==or||u!==or)&&(y+="skew("+f+", "+u+ar),(m!==1||_!==1)&&(y+="scale("+m+", "+_+ar),v.style[Oe]=y||"translate(0, 0)"},G0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,w=parseFloat(o),y=parseFloat(a),T,E,x,S,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=kr,c*=kr,T=Math.cos(l)*d,E=Math.sin(l)*d,x=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(h*=kr,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,S*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),T*=P,E*=P)),T=He(T),E=He(E),x=He(x),S=He(S)):(T=d,S=f,E=x=0),(w&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(w=Ls(u,"x",o,"px"),y=Ls(u,"y",a,"px")),(m||_||p||g)&&(w=He(w+m-(m*T+_*x)+p),y=He(y+_-(m*E+_*S)+g)),(i||r)&&(P=u.getBBox(),w=He(w+i/100*P.width),y=He(y+r/100*P.height)),P="matrix("+T+","+E+","+x+","+S+","+w+","+y+")",u.setAttribute("transform",P),v&&(u.style[Oe]=P)},H0=function(t,e,n,i,r){var o=360,a=nn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?lr:1),c=l-i,h=i+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*jd)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*jd)%o-~~(c/o)*o)),t._pt=f=new Ln(t._pt,e,n,i,c,w0),f.e=h,f.u="deg",t._props.push(n),f},op=function(t,e){for(var n in e)t[n]=e[n];return t},W0=function(t,e,n){var i=op({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,f,u,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Oe]=e,a=Wo(n,1),Is(n,Oe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Oe],o[Oe]=e,a=Wo(n,1),o[Oe]=c);for(l in ss)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=mn(c),m=mn(h),d=u!==m?Ls(n,l,c,m):parseFloat(c),f=parseFloat(h),t._pt=new Ln(t._pt,a,l,d,f-d,uu),t._pt.u=m||0,t._props.push(l));op(a,i)};In("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});hl[t>1?"border"+s:s]=function(a,l,c,h,d){var f,u;if(arguments.length<4)return f=o.map(function(m){return is(a,m,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(m,_){return u[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,u,d)}});var vu={name:"css",register:du,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,f,u,m,_,p,g,v,w,y,T,E,x,S,P;mu||du(),this.styles=this.styles||hp(t),S=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Xn[_]&&su(_,e,n,i,t,r)))){if(u=typeof h,m=hl[_],u==="function"&&(h=h.call(n,i,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Fr(h)),m)m(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",es.lastIndex=0,es.test(c)||(p=mn(c),g=mn(h),g?p!==g&&(c=Ls(t,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),S.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],nn(c)&&~c.indexOf("random(")&&(c=Fr(c)),mn(c+"")||c==="auto"||(c+=Zn.units[_]||mn(is(t,_))||""),(c+"").charAt(1)==="="&&(c=is(t,_))):c=is(t,_),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in ki&&(_==="autoAlpha"&&(f===1&&is(t,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,a.visibility),Ps(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ki[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in ss,w){if(this.styles.save(_),P=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=ii(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=ii(t,"perspective"),C?t.style.perspective=C:Is(t,"perspective")}d=parseFloat(h)}if(y||(T=t._gsap,T.renderTransform&&!e.parseTransform||Wo(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new Ln(this._pt,a,Oe,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new Ln(this._pt,T,"scaleY",T.scaleY,(v?sr(T.scaleY,v+d):d)-T.scaleY||0,uu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(Jn,0,a[Jn]),h=z0(h),T.svg?pu(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==T.zOrigin&&Ps(this,T,"zOrigin",T.zOrigin,g),Ps(this,a,_,ul(c),ul(h)));continue}else if(_==="svgOrigin"){pu(t,h,1,E,0,this);continue}else if(_ in pp){H0(this,T,_,f,v?sr(f,v+h):h);continue}else if(_==="smoothOrigin"){Ps(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){W0(this,h,t);continue}}else _ in a||(_=Vr(_)||_);if(w||(d||d===0)&&(f||f===0)&&!T0.test(h)&&_ in a)p=(c+"").substr((f+"").length),d||(d=0),g=mn(h)||(_ in Zn.units?Zn.units[_]:p),p!==g&&(f=Ls(t,_,c,g)),this._pt=new Ln(this._pt,w?T:a,_,f,(v?sr(f,v+d):d)-f,!w&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?C0:uu),this._pt.u=g||0,w&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=A0):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=E0);else if(_ in a)B0.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,i,r);else if(_!=="parseTransform"){rl(_,h);continue}w||(_ in a?S.push(_,0,a[_]):typeof t[_]=="function"?S.push(_,2,t[_]()):S.push(_,1,c||t[_])),o.push(_)}}x&&cu(this)},render:function(t,e){if(e.tween._time||!gu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:is,aliases:ki,getSetter:function(t,e,n){var i=ki[e];return i&&i.indexOf(",")<0&&(e=i),e in ss&&e!==Jn&&(t._gsap.x||is(t,"x"))?n&&Qd===n?e==="scale"?L0:I0:(Qd=n||{})&&(e==="scale"?D0:N0):t.style&&!sl(t.style[e])?R0:~e.indexOf("-")?P0:cl(t,e)},core:{_removeProperty:Is,_getMatrix:xu}};Mn.utils.checkPrefix=Vr;Mn.core.getStyleSaver=hp;(function(s,t,e,n){var i=In(s+","+t+","+e,function(r){ss[r]=1});In(t,function(r){Zn.units[r]="deg",pp[r]=1}),ki[i[13]]=s+","+t,In(n,function(r){var o=r.split(":");ki[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");In("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Zn.units[s]="px"});Mn.registerPlugin(vu);var Zt=Mn.registerPlugin(vu)||Mn,vT=Zt.core.Tween;function _p(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function X0(s,t,e){return t&&_p(s.prototype,t),e&&_p(s,e),s}var gn,pl,q0,$n,Ds,Ns,Hr,vp,hr,Wr,yp,rs,Ei,Sp,Mp=function(){return gn||typeof window!="undefined"&&(gn=window.gsap)&&gn.registerPlugin&&gn},bp=1,Gr=[],Jt=[],Ai=[],qo=Date.now,yu=function(t,e){return e},Y0=function(){var t=Wr.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Jt),i.push.apply(i,Ai),Jt=n,Ai=i,yu=function(o,a){return e[o](a)}},as=function(t,e){return~Ai.indexOf(t)&&Ai[Ai.indexOf(t)+1][e]},Yo=function(t){return!!~yp.indexOf(t)},Nn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},Dn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},fl="scrollLeft",dl="scrollTop",Su=function(){return rs&&rs.isPressed||Jt.cache++},ml=function(t,e){var n=function i(r){if(r||r===0){bp&&$n.history.scrollRestoration!=="manual"&&($n.history.scrollRestoration="manual");var o=rs&&rs.isPressed;r=i.v=Math.round(r)||(rs&&rs.iOS?1:0),t(r),i.cacheID=Jt.cache,o&&yu("ss",r)}else(e||Jt.cache!==i.cacheID||yu("ref"))&&(i.cacheID=Jt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},bn={s:fl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ml(function(s){return arguments.length?$n.scrollTo(s,$e.sc()):$n.pageXOffset||Ds[fl]||Ns[fl]||Hr[fl]||0})},$e={s:dl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:bn,sc:ml(function(s){return arguments.length?$n.scrollTo(bn.sc(),s):$n.pageYOffset||Ds[dl]||Ns[dl]||Hr[dl]||0})},Un=function(t,e){return(e&&e._ctx&&e._ctx.selector||gn.utils.toArray)(t)[0]||(typeof t=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Z0=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},os=function(t,e){var n=e.s,i=e.sc;Yo(t)&&(t=Ds.scrollingElement||Ns);var r=Jt.indexOf(t),o=i===$e.sc?1:2;!~r&&(r=Jt.push(t)-1),Jt[r+o]||Nn(t,"scroll",Su);var a=Jt[r+o],l=a||(Jt[r+o]=ml(as(t,n),!0)||(Yo(t)?i:ml(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=gn.getProperty(t,"scrollBehavior")==="smooth"),l},gl=function(t,e,n){var i=t,r=t,o=qo(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=qo();_||p-o>l?(r=i,i=m,a=o,o=p):n?i+=m:i=r+(m-r)/(p-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},f=function(m){var _=a,p=r,g=qo();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:f}},Xo=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},xp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Tp=function(){Wr=gn.core.globals().ScrollTrigger,Wr&&Wr.core&&Y0()},wp=function(t){return gn=t||Mp(),!pl&&gn&&typeof document!="undefined"&&document.body&&($n=window,Ds=document,Ns=Ds.documentElement,Hr=Ds.body,yp=[$n,Ds,Ns,Hr],q0=gn.utils.clamp,Sp=gn.core.context||function(){},hr="onpointerenter"in Hr?"pointer":"mouse",vp=We.isTouch=$n.matchMedia&&$n.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in $n||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=We.eventTypes=("ontouchstart"in Ns?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ns?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return bp=0},500),pl=1),Wr||Tp(),pl};bn.op=$e;Jt.cache=0;var We=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){pl||wp(gn)||console.warn("Please gsap.registerPlugin(Observer)"),Wr||Tp();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,w=n.onPress,y=n.onRelease,T=n.onRight,E=n.onLeft,x=n.onUp,S=n.onDown,P=n.onChangeX,C=n.onChangeY,D=n.onChange,N=n.onToggleX,G=n.onToggleY,I=n.onHover,B=n.onHoverEnd,H=n.onMove,O=n.ignoreCheck,J=n.isNormalizer,z=n.onGestureStart,R=n.onGestureEnd,tt=n.onWheel,yt=n.onEnable,Nt=n.onDisable,q=n.onClick,rt=n.scrollSpeed,ct=n.capture,vt=n.allowClicks,ut=n.lockAxis,Ct=n.onLockAxis;this.target=a=Un(a)||Ns,this.vars=n,u&&(u=gn.utils.toArray(u)),i=i||1e-9,r=r||0,m=m||1,rt=rt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat($n.getComputedStyle(Hr).lineHeight)||22);var ce,Et,zt,It,Ot,re,ee,Y=this,Kt=0,Re=0,Me=n.passive||!h&&n.passive!==!1,oe=os(a,bn),ze=os(a,$e),Xe=oe(),F=ze(),me=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ei[0]==="pointerdown",ue=Yo(a),Wt=a.ownerDocument||Ds,dt=[0,0,0],de=[0,0,0],Ut=0,Bt=function(){return Ut=qo()},A=function(gt,st){return(Y.event=gt)&&u&&Z0(gt.target,u)||st&&me&&gt.pointerType!=="touch"||O&&O(gt,st)},M=function(){Y._vx.reset(),Y._vy.reset(),Et.pause(),d&&d(Y)},V=function(){var gt=Y.deltaX=xp(dt),st=Y.deltaY=xp(de),et=Math.abs(gt)>=i,xt=Math.abs(st)>=i;D&&(et||xt)&&D(Y,gt,st,dt,de),et&&(T&&Y.deltaX>0&&T(Y),E&&Y.deltaX<0&&E(Y),P&&P(Y),N&&Y.deltaX<0!=Kt<0&&N(Y),Kt=Y.deltaX,dt[0]=dt[1]=dt[2]=0),xt&&(S&&Y.deltaY>0&&S(Y),x&&Y.deltaY<0&&x(Y),C&&C(Y),G&&Y.deltaY<0!=Re<0&&G(Y),Re=Y.deltaY,de[0]=de[1]=de[2]=0),(It||zt)&&(H&&H(Y),zt&&(p&&zt===1&&p(Y),v&&v(Y),zt=0),It=!1),re&&!(re=!1)&&Ct&&Ct(Y),Ot&&(tt(Y),Ot=!1),ce=0},ot=function(gt,st,et){dt[et]+=gt,de[et]+=st,Y._vx.update(gt),Y._vy.update(st),c?ce||(ce=requestAnimationFrame(V)):V()},it=function(gt,st){ut&&!ee&&(Y.axis=ee=Math.abs(gt)>Math.abs(st)?"x":"y",re=!0),ee!=="y"&&(dt[2]+=gt,Y._vx.update(gt,!0)),ee!=="x"&&(de[2]+=st,Y._vy.update(st,!0)),c?ce||(ce=requestAnimationFrame(V)):V()},ft=function(gt){if(!A(gt,1)){gt=Xo(gt,h);var st=gt.clientX,et=gt.clientY,xt=st-Y.x,nt=et-Y.y,Tt=Y.isDragging;Y.x=st,Y.y=et,(Tt||(xt||nt)&&(Math.abs(Y.startX-st)>=r||Math.abs(Y.startY-et)>=r))&&(zt||(zt=Tt?2:1),Tt||(Y.isDragging=!0),it(xt,nt))}},_t=Y.onPress=function(at){A(at,1)||at&&at.button||(Y.axis=ee=null,Et.pause(),Y.isPressed=!0,at=Xo(at),Kt=Re=0,Y.startX=Y.x=at.clientX,Y.startY=Y.y=at.clientY,Y._vx.reset(),Y._vy.reset(),Nn(J?a:Wt,Ei[1],ft,Me,!0),Y.deltaX=Y.deltaY=0,w&&w(Y))},W=Y.onRelease=function(at){if(!A(at,1)){Dn(J?a:Wt,Ei[1],ft,!0);var gt=!isNaN(Y.y-Y.startY),st=Y.isDragging,et=st&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),xt=Xo(at);!et&&gt&&(Y._vx.reset(),Y._vy.reset(),h&&vt&&gn.delayedCall(.08,function(){if(qo()-Ut>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(Wt.createEvent){var nt=Wt.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,$n,1,xt.screenX,xt.screenY,xt.clientX,xt.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(nt)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,d&&st&&!J&&Et.restart(!0),zt&&V(),g&&st&&g(Y),y&&y(Y,et)}},j=function(gt){return gt.touches&&gt.touches.length>1&&(Y.isGesturing=!0)&&z(gt,Y.isDragging)},ht=function(){return(Y.isGesturing=!1)||R(Y)},L=function(gt){if(!A(gt)){var st=oe(),et=ze();ot((st-Xe)*rt,(et-F)*rt,1),Xe=st,F=et,d&&Et.restart(!0)}},Q=function(gt){if(!A(gt)){gt=Xo(gt,h),tt&&(Ot=!0);var st=(gt.deltaMode===1?l:gt.deltaMode===2?$n.innerHeight:1)*m;ot(gt.deltaX*st,gt.deltaY*st,0),d&&!J&&Et.restart(!0)}},K=function(gt){if(!A(gt)){var st=gt.clientX,et=gt.clientY,xt=st-Y.x,nt=et-Y.y;Y.x=st,Y.y=et,It=!0,d&&Et.restart(!0),(xt||nt)&&it(xt,nt)}},pt=function(gt){Y.event=gt,I(Y)},lt=function(gt){Y.event=gt,B(Y)},mt=function(gt){return A(gt)||Xo(gt,h)&&q(Y)};Et=Y._dc=gn.delayedCall(f||.25,M).pause(),Y.deltaX=Y.deltaY=0,Y._vx=gl(0,50,!0),Y._vy=gl(0,50,!0),Y.scrollX=oe,Y.scrollY=ze,Y.isDragging=Y.isGesturing=Y.isPressed=!1,Sp(this),Y.enable=function(at){return Y.isEnabled||(Nn(ue?Wt:a,"scroll",Su),o.indexOf("scroll")>=0&&Nn(ue?Wt:a,"scroll",L,Me,ct),o.indexOf("wheel")>=0&&Nn(a,"wheel",Q,Me,ct),(o.indexOf("touch")>=0&&vp||o.indexOf("pointer")>=0)&&(Nn(a,Ei[0],_t,Me,ct),Nn(Wt,Ei[2],W),Nn(Wt,Ei[3],W),vt&&Nn(a,"click",Bt,!0,!0),q&&Nn(a,"click",mt),z&&Nn(Wt,"gesturestart",j),R&&Nn(Wt,"gestureend",ht),I&&Nn(a,hr+"enter",pt),B&&Nn(a,hr+"leave",lt),H&&Nn(a,hr+"move",K)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=It=zt=!1,Y._vx.reset(),Y._vy.reset(),Xe=oe(),F=ze(),at&&at.type&&_t(at),yt&&yt(Y)),Y},Y.disable=function(){Y.isEnabled&&(Gr.filter(function(at){return at!==Y&&Yo(at.target)}).length||Dn(ue?Wt:a,"scroll",Su),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Dn(J?a:Wt,Ei[1],ft,!0)),Dn(ue?Wt:a,"scroll",L,ct),Dn(a,"wheel",Q,ct),Dn(a,Ei[0],_t,ct),Dn(Wt,Ei[2],W),Dn(Wt,Ei[3],W),Dn(a,"click",Bt,!0),Dn(a,"click",mt),Dn(Wt,"gesturestart",j),Dn(Wt,"gestureend",ht),Dn(a,hr+"enter",pt),Dn(a,hr+"leave",lt),Dn(a,hr+"move",K),Y.isEnabled=Y.isPressed=Y.isDragging=!1,Nt&&Nt(Y))},Y.kill=Y.revert=function(){Y.disable();var at=Gr.indexOf(Y);at>=0&&Gr.splice(at,1),rs===Y&&(rs=0)},Gr.push(Y),J&&Yo(a)&&(rs=Y),Y.enable(_)},X0(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();We.version="3.15.1";We.create=function(s){return new We(s)};We.register=wp;We.getAll=function(){return Gr.slice()};We.getById=function(s){return Gr.filter(function(t){return t.vars.id===s})[0]};Mp()&&gn.registerPlugin(We);var Rt,Zr,jt,ye,oi,xe,Uu,Ll,oa,ta,Jo,_l,Tn,Ul,Cu,Fn,Ep,Ap,Jr,Hp,Mu,Wp,On,Ru,Xp,qp,Us,Pu,Ou,$r,Fu,Os,Iu,bu,xl=1,wn=Date.now,Tu=wn(),vi=0,$o=0,Cp=function(t,e,n){var i=ri(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Rp=function(t,e){return e&&(!ri(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},J0=function s(){return $o&&requestAnimationFrame(s)},Pp=function(){return Ul=1},Ip=function(){return Ul=0},Vi=function(t){return t},Ko=function(t){return Math.round(t*1e5)/1e5||0},Yp=function(){return typeof window!="undefined"},Zp=function(){return Rt||Yp()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},gr=function(t){return!!~Uu.indexOf(t)},Jp=function(t){return(t==="Height"?Fu:jt["inner"+t])||oi["client"+t]||xe["client"+t]},$p=function(t){return as(t,"getBoundingClientRect")||(gr(t)?function(){return Il.width=jt.innerWidth,Il.height=Fu,Il}:function(){return ls(t)})},$0=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=as(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Jp(r):t["client"+r])||0}},K0=function(t,e){return!e||~Ai.indexOf(t)?$p(t):function(){return Il}},Gi=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=as(t,n))?o()-$p(t)()[r]:gr(t)?(oi[n]||xe[n])-Jp(i):t[n]-t["offset"+i])},vl=function(t,e){for(var n=0;n<Jr.length;n+=3)(!e||~e.indexOf(Jr[n+1]))&&t(Jr[n],Jr[n+1],Jr[n+2])},ri=function(t){return typeof t=="string"},En=function(t){return typeof t=="function"},Qo=function(t){return typeof t=="number"},ur=function(t){return typeof t=="object"},Zo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Xr=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},qr=Math.abs,Kp="left",Qp="top",Bu="right",zu="bottom",dr="width",pr="height",ea="Right",na="Left",ia="Top",sa="Bottom",Ke="padding",_i="margin",Qr="Width",ku="Height",sn="px",xi=function(t){return jt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Q0=function(t){var e=xi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Lp=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ls=function(t,e){var n=e&&xi(t)[Cu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Dl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},jp=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},j0=function(t){return function(e){return Rt.utils.snap(jp(t),e)}},Vu=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},tx=function(t){return function(e,n){return Vu(jp(t))(e,n.direction)}},yl=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},cn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},ln=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Sl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Dp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ml={toggleActions:"play",anticipatePin:0},Nl={top:0,left:0,center:.5,bottom:1,right:1},Al=function(t,e){if(ri(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Nl?Nl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},bl=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,u=r.fontWeight,m=ye.createElement("div"),_=gr(n)||as(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?xe:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,w=v?c:h,y="border-color:"+w+";font-size:"+d+";color:"+w+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===$e?Bu:zu)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],Cl(m,0,i,v),m},Cl=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Qr]=1,r["border"+a+Qr]=0,r[n.p]=e+"px",Rt.set(t,r)},Qt=[],Lu={},aa,Np=function(){return wn()-vi>34&&(aa||(aa=requestAnimationFrame(cs)))},Yr=function(){(!On||!On.isPressed||On.startX>xe.clientWidth)&&(Jt.cache++,On?aa||(aa=requestAnimationFrame(cs)):cs(),vi||xr("scrollStart"),vi=wn())},wu=function(){qp=jt.innerWidth,Xp=jt.innerHeight},jo=function(t){Jt.cache++,(t===!0||!Tn&&!Wp&&!ye.fullscreenElement&&!ye.webkitFullscreenElement&&(!Ru||qp!==jt.innerWidth||Math.abs(jt.innerHeight-Xp)>jt.innerHeight*.25))&&Ll.restart(!0)},_r={},ex=[],tm=function s(){return ln(Gt,"scrollEnd",s)||fr(!0)},xr=function(t){return _r[t]&&_r[t].map(function(e){return e()})||ex},si=[],em=function(t){for(var e=0;e<si.length;e+=5)(!t||si[e+4]&&si[e+4].query===t)&&(si[e].style.cssText=si[e+1],si[e].getBBox&&si[e].setAttribute("transform",si[e+2]||""),si[e+3].uncache=1)},nm=function(){Jt.cache++,Jt.forEach(function(t){return En(t)&&(t.rec=t())})},Gu=function(t,e){var n;for(Fn=0;Fn<Qt.length;Fn++)n=Qt[Fn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Os=!0,e&&em(e),e||xr("revert")},im=function(t,e){Jt.cache++,(e||!Bn)&&Jt.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),ri(t)&&(Ou=t,jt.history.scrollRestoration!==t&&(jt.history.scrollRestoration=t))},Bn,mr=0,Up,nx=function(){if(Up!==mr){var t=Up=mr;requestAnimationFrame(function(){return t===mr&&fr(!0)})}},sm=function(){xe.appendChild($r),Fu=!On&&$r.offsetHeight||jt.innerHeight,xe.removeChild($r)},Op=function(t){return oa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},fr=function(t,e){if(oi=ye.documentElement,xe=ye.body,Uu=[jt,ye,oi,xe],vi&&!t&&!Os){cn(Gt,"scrollEnd",tm);return}sm(),Bn=Gt.isRefreshing=!0,Os||nm();var n=xr("refreshInit");Hp&&Gt.sort(),e||Gu(),Jt.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qt.slice(0).forEach(function(i){return i.refresh()}),Os=!1,Qt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Iu=1,Op(!0),Qt.forEach(function(i){var r=Gi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Op(!1),Iu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Jt.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),im(Ou,1),Ll.pause(),mr++,Bn=2,cs(2),Qt.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Bn=Gt.isRefreshing=!1,xr("refresh")},Du=0,Rl=1,ra,cs=function(t){if(t===2||!Bn&&!Os){Gt.isUpdating=!0,ra&&ra.update(0);var e=Qt.length,n=wn(),i=n-Tu>=50,r=e&&Qt[0].scroll();if(Rl=Du>r?-1:1,Bn||(Du=r),i&&(vi&&!Ul&&n-vi>200&&(vi=0,xr("scrollEnd")),Jo=Tu,Tu=n),Rl<0){for(Fn=e;Fn-- >0;)Qt[Fn]&&Qt[Fn].update(0,i);Rl=1}else for(Fn=0;Fn<e;Fn++)Qt[Fn]&&Qt[Fn].update(0,i);Gt.isUpdating=!1}aa=0},Nu=[Kp,Qp,zu,Bu,_i+sa,_i+ea,_i+ia,_i+na,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Pl=Nu.concat([dr,pr,"boxSizing","max"+Qr,"max"+ku,"position",_i,Ke,Ke+ia,Ke+ea,Ke+sa,Ke+na]),ix=function(t,e,n){Kr(n);var i=t._gsap;if(i.spacerIsNative)Kr(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Eu=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=Nu.length,o=e.style,a=t.style,l;r--;)l=Nu[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[zu]=a[Bu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[dr]=Dl(t,bn)+sn,o[pr]=Dl(t,$e)+sn,o[Ke]=a[_i]=a[Qp]=a[Kp]="0",Kr(i),a[dr]=a["max"+Qr]=n[dr],a[pr]=a["max"+ku]=n[pr],a[Ke]=n[Ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},sx=/([A-Z])/g,Kr=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(sx,"-$1").toLowerCase())}},Tl=function(t){for(var e=Pl.length,n=t.style,i=[],r=0;r<e;r++)i.push(Pl[r],n[Pl[r]]);return i.t=t,i},rx=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Il={left:0,top:0},Fp=function(t,e,n,i,r,o,a,l,c,h,d,f,u,m){En(t)&&(t=t(l)),ri(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Al("0"+t.substr(3),n):0));var _=u?u.time():0,p,g,v;if(u&&u.seek(0),isNaN(t)||(t=+t),Qo(t))u&&(t=Rt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),a&&Cl(a,n,i,!0);else{En(e)&&(e=e(l));var w=(t||"0").split(" "),y,T,E,x;v=Un(e,l)||xe,y=ls(v)||{},(!y||!y.left&&!y.top)&&xi(v).display==="none"&&(x=v.style.display,v.style.display="block",y=ls(v),x?v.style.display=x:v.style.removeProperty("display")),T=Al(w[0],y[i.d]),E=Al(w[1]||"0",n),t=y[i.p]-c[i.p]-h+T+r-E,a&&Cl(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var S=t+n,P=o._isStart;p="scroll"+i.d2,Cl(o,S,i,P&&S>20||!P&&(d?Math.max(xe[p],oi[p]):o.parentNode[p])<=S+1),d&&(c=ls(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+sn))}return u&&v&&(p=ls(v),u.seek(f),g=ls(v),u._caScrollDist=p[i.p]-g[i.p],t=t/u._caScrollDist*f),u&&u.seek(_),u?t:Math.round(t)},ox=/(webkit|moz|length|cssText|inset)/i,Bp=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===xe){t._stOrig=r.cssText,a=xi(t);for(o in a)!+o&&!ox.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},rm=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},wl=function(t,e,n){var i={};i[e.p]="+="+n,Rt.set(t,i)},zp=function(t,e){var n=os(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var f=o.tween,u=l.onComplete,m={};c=c||n();var _=rm(n,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){Jt.cache++,o.tween&&cs()},l.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=Rt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},cn(t,"wheel",n.wheelHandler),Gt.isTouch&&cn(t,"touchmove",n.wheelHandler),r},Gt=(function(){function s(e,n){Zr||s.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Pu(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$o){this.update=this.refresh=this.kill=Vi;return}n=Lp(ri(n)||Qo(n)||n.nodeType?{trigger:n}:n,Ml);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,u=r.pin,m=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,w=r.once,y=r.snap,T=r.pinReparent,E=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,P=r.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?bn:$e,D=!d&&d!==0,N=Un(n.scroller||jt),G=Rt.core.getCache(N),I=gr(N),B=("pinType"in n?n.pinType:as(N,"pinType")||I&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=D&&n.toggleActions.split(" "),J="markers"in n?n.markers:Ml.markers,z=I?0:parseFloat(xi(N)["border"+C.p2+Qr])||0,R=this,tt=n.onRefreshInit&&function(){return n.onRefreshInit(R)},yt=$0(N,I,C),Nt=K0(N,I),q=0,rt=0,ct=0,vt=os(N,C),ut,Ct,ce,Et,zt,It,Ot,re,ee,Y,Kt,Re,Me,oe,ze,Xe,F,me,ue,Wt,dt,de,Ut,Bt,A,M,V,ot,it,ft,_t,W,j,ht,L,Q,K,pt,lt;if(R._startClamp=R._endClamp=!1,R._dir=C,p*=45,R.scroller=N,R.scroll=x?x.time.bind(x):vt,Et=vt(),Os&&vt.rec==null&&(vt.rec=Et),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Hp=1,n.refreshPriority===-9999&&(ra=R)),G.tweenScroll=G.tweenScroll||{top:zp(N,$e),left:zp(N,bn)},R.tweenTo=ut=G.tweenScroll[C.p],R.scrubDuration=function(et){j=Qo(et)&&et,j?W?W.duration(et):W=Rt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return g&&g(R)}}):(W&&W.progress(1).kill(),W=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),ft=0,l||(l=i.vars.id)),y&&((!ur(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xe.style&&Rt.set(I?[xe,oi]:N,{scrollBehavior:"auto"}),Jt.forEach(function(et){return En(et)&&et.target===(I?ye.scrollingElement||oi:N)&&(et.smooth=!1)}),ce=En(y.snapTo)?y.snapTo:y.snapTo==="labels"?j0(i):y.snapTo==="labelsDirectional"?tx(i):y.directional!==!1?function(et,xt){return Vu(y.snapTo)(et,wn()-rt<500?0:xt.direction)}:Rt.utils.snap(y.snapTo),ht=y.duration||{min:.1,max:2},ht=ur(ht)?ta(ht.min,ht.max):ta(ht,ht),L=Rt.delayedCall(y.delay||j/2||.1,function(){var et=vt(),xt=wn()-rt<500,nt=ut.tween;if((xt||Math.abs(R.getVelocity())<10)&&!nt&&!Ul&&q!==et){var Tt=(et-It)/oe,te=i&&!D?i.totalProgress():Tt,qt=xt?0:(te-_t)/(wn()-Jo)*1e3||0,Pe=Rt.utils.clamp(-Tt,1-Tt,qr(qt/2)*qt/.185),Ye=Tt+(y.inertia===!1?0:Pe),Ie,be,_e=y,je=_e.onStart,Te=_e.onInterrupt,_n=_e.onComplete;if(Ie=ce(Ye,R),Qo(Ie)||(Ie=Ye),be=Math.max(0,Math.round(It+Ie*oe)),et<=Ot&&et>=It&&be!==et){if(nt&&!nt._initted&&nt.data<=qr(be-et))return;y.inertia===!1&&(Pe=Ie-Tt),ut(be,{duration:ht(qr(Math.max(qr(Ye-te),qr(Ie-te))*.185/qt/.05||0)),ease:y.ease||"power3",data:qr(be-et),onInterrupt:function(){return L.restart(!0)&&Te&&Xr(R,Te)},onComplete:function(){R.update(),q=vt(),i&&!D&&(W?W.resetTo("totalProgress",Ie,i._tTime/i._tDur):i.progress(Ie)),ft=_t=i&&!D?i.totalProgress():R.progress,v&&v(R),_n&&Xr(R,_n)}},et,Pe*oe,be-et-Pe*oe),je&&Xr(R,je,ut.tween)}}else R.isActive&&q!==et&&L.restart(!0)}).pause()),l&&(Lu[l]=R),f=R.trigger=Un(f||u!==!0&&u),lt=f&&f._gsap&&f._gsap.stRevert,lt&&(lt=lt(R)),u=u===!0?f:Un(u),ri(a)&&(a={targets:f,className:a}),u&&(m===!1||m===_i||(m=!m&&u.parentNode&&u.parentNode.style&&xi(u.parentNode).display==="flex"?!1:Ke),R.pin=u,Ct=Rt.core.getCache(u),Ct.spacer?ze=Ct.pinState:(E&&(E=Un(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ct.spacerIsNative=!!E,E&&(Ct.spacerState=Tl(E))),Ct.spacer=me=E||ye.createElement("div"),me.classList.add("pin-spacer"),l&&me.classList.add("pin-spacer-"+l),Ct.pinState=ze=Tl(u)),n.force3D!==!1&&Rt.set(u,{force3D:!0}),R.spacer=me=Ct.spacer,it=xi(u),Bt=it[m+C.os2],Wt=Rt.getProperty(u),dt=Rt.quickSetter(u,C.a,sn),Eu(u,me,it),F=Tl(u)),J){Re=ur(J)?Lp(J,Dp):Dp,Y=bl("scroller-start",l,N,C,Re,0),Kt=bl("scroller-end",l,N,C,Re,0,Y),ue=Y["offset"+C.op.d2];var mt=Un(as(N,"content")||N);re=this.markerStart=bl("start",l,mt,C,Re,ue,0,x),ee=this.markerEnd=bl("end",l,mt,C,Re,ue,0,x),x&&(pt=Rt.quickSetter([re,ee],C.a,sn)),!B&&!(Ai.length&&as(N,"fixedMarkers")===!0)&&(Q0(I?xe:N),Rt.set([Y,Kt],{force3D:!0}),M=Rt.quickSetter(Y,C.a,sn),ot=Rt.quickSetter(Kt,C.a,sn))}if(x){var at=x.vars.onUpdate,gt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){R.update(0,0,1),at&&at.apply(x,gt||[])})}if(R.previous=function(){return Qt[Qt.indexOf(R)-1]},R.next=function(){return Qt[Qt.indexOf(R)+1]},R.revert=function(et,xt){if(!xt)return R.kill(!0);var nt=et!==!1||!R.enabled,Tt=Tn;nt!==R.isReverted&&(nt&&(Q=Math.max(vt(),R.scroll.rec||0),ct=R.progress,K=i&&i.progress()),re&&[re,ee,Y,Kt].forEach(function(te){return te.style.display=nt?"none":"block"}),nt&&(Tn=R,R.update(nt)),u&&(!T||!R.isActive)&&(nt?ix(u,me,ze):Eu(u,me,xi(u),A)),nt||R.update(nt),Tn=Tt,R.isReverted=nt)},R.refresh=function(et,xt,nt,Tt){if(!((Tn||!R.enabled)&&!xt)){if(u&&et&&vi){cn(s,"scrollEnd",tm);return}!Bn&&tt&&tt(R),Tn=R,ut.tween&&!nt&&(ut.tween.kill(),ut.tween=0),W&&W.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(k){return k.vars.immediateRender&&k.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var te=yt(),qt=Nt(),Pe=x?x.duration():Gi(N,C),Ye=oe<=.01||!oe,Ie=0,be=Tt||0,_e=ur(nt)?nt.end:n.end,je=n.endTrigger||f,Te=ur(nt)?nt.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),_n=R.pinnedContainer=n.pinnedContainer&&Un(n.pinnedContainer,R),Qn=f&&Math.max(0,Qt.indexOf(R))||0,ke=Qn,Ze,tn,jn,Ir,en,Ve,di,Ro,Xa,Ms,b,U,Z;for(J&&ur(nt)&&(U=Rt.getProperty(Y,C.p),Z=Rt.getProperty(Kt,C.p));ke-- >0;)Ve=Qt[ke],Ve.end||Ve.refresh(0,1)||(Tn=R),di=Ve.pin,di&&(di===f||di===u||di===_n)&&!Ve.isReverted&&(Ms||(Ms=[]),Ms.unshift(Ve),Ve.revert(!0,!0)),Ve!==Qt[ke]&&(Qn--,ke--);for(En(Te)&&(Te=Te(R)),Te=Cp(Te,"start",R),It=Fp(Te,f,te,C,vt(),re,Y,R,qt,z,B,Pe,x,R._startClamp&&"_startClamp")||(u?-.001:0),En(_e)&&(_e=_e(R)),ri(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(ri(Te)?Te.split(" ")[0]:"")+_e:(Ie=Al(_e.substr(2),te),_e=ri(Te)?Te:(x?Rt.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,It):It)+Ie,je=f)),_e=Cp(_e,"end",R),Ot=Math.max(It,Fp(_e||(je?"100% 0":Pe),je,te,C,vt()+Ie,ee,Kt,R,qt,z,B,Pe,x,R._endClamp&&"_endClamp"))||-.001,Ie=0,ke=Qn;ke--;)Ve=Qt[ke]||{},di=Ve.pin,di&&Ve.start-Ve._pinPush<=It&&!x&&Ve.end>0&&(Ze=Ve.end-(R._startClamp?Math.max(0,Ve.start):Ve.start),(di===f&&Ve.start-Ve._pinPush<It||di===_n)&&isNaN(Te)&&(Ie+=Ze*(1-Ve.progress)),di===u&&(be+=Ze));if(It+=Ie,Ot+=Ie,R._startClamp&&(R._startClamp+=Ie),R._endClamp&&!Bn&&(R._endClamp=Ot||-.001,Ot=Math.min(Ot,Gi(N,C))),oe=Ot-It||(It-=.01)&&.001,Ye&&(ct=Rt.utils.clamp(0,1,Rt.utils.normalize(It,Ot,Q))),R._pinPush=be,re&&Ie&&(Ze={},Ze[C.a]="+="+Ie,_n&&(Ze[C.p]="-="+vt()),Rt.set([re,ee],Ze)),u&&!(Iu&&R.end>=Gi(N,C)))Ze=xi(u),Ir=C===$e,jn=vt(),de=parseFloat(Wt(C.a))+be,!Pe&&Ot>1&&(b=(I?ye.scrollingElement||oi:N).style,b={style:b,value:b["overflow"+C.a.toUpperCase()]},I&&xi(xe)["overflow"+C.a.toUpperCase()]!=="scroll"&&(b.style["overflow"+C.a.toUpperCase()]="scroll")),Eu(u,me,Ze),F=Tl(u),tn=ls(u,!0),Ro=B&&os(N,Ir?bn:$e)(),m?(A=[m+C.os2,oe+be+sn],A.t=me,ke=m===Ke?Dl(u,C)+oe+be:0,ke&&(A.push(C.d,ke+sn),me.style.flexBasis!=="auto"&&(me.style.flexBasis=ke+sn)),Kr(A),_n&&Qt.forEach(function(k){k.pin===_n&&k.vars.pinSpacing!==!1&&(k._subPinOffset=!0)}),B&&vt(Q)):(ke=Dl(u,C),ke&&me.style.flexBasis!=="auto"&&(me.style.flexBasis=ke+sn)),B&&(en={top:tn.top+(Ir?jn-It:Ro)+sn,left:tn.left+(Ir?Ro:jn-It)+sn,boxSizing:"border-box",position:"fixed"},en[dr]=en["max"+Qr]=Math.ceil(tn.width)+sn,en[pr]=en["max"+ku]=Math.ceil(tn.height)+sn,en[_i]=en[_i+ia]=en[_i+ea]=en[_i+sa]=en[_i+na]="0",en[Ke]=Ze[Ke],en[Ke+ia]=Ze[Ke+ia],en[Ke+ea]=Ze[Ke+ea],en[Ke+sa]=Ze[Ke+sa],en[Ke+na]=Ze[Ke+na],Xe=rx(ze,en,T),Bn&&vt(0)),i?(Xa=i._initted,Mu(1),i.render(i.duration(),!0,!0),Ut=Wt(C.a)-de+oe+be,V=Math.abs(oe-Ut)>1,B&&V&&Xe.splice(Xe.length-2,2),i.render(0,!0,!0),Xa||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Mu(0)):Ut=oe,b&&(b.value?b.style["overflow"+C.a.toUpperCase()]=b.value:b.style.removeProperty("overflow-"+C.a));else if(f&&vt()&&!x)for(tn=f.parentNode;tn&&tn!==xe;)tn._pinOffset&&(It-=tn._pinOffset,Ot-=tn._pinOffset),tn=tn.parentNode;Ms&&Ms.forEach(function(k){return k.revert(!1,!0)}),R.start=It,R.end=Ot,Et=zt=Bn?Q:vt(),!x&&!Bn&&!Os&&(Et<Q&&vt(Q),R.scroll.rec=0),R.revert(!1,!0),rt=wn(),L&&(q=-1,L.restart(!0)),Tn=0,i&&D&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),(Ye||ct!==R.progress||x||_||i&&!i._initted)&&(i&&!D&&(i._initted||ct||i.vars.immediateRender!==!1)&&i.totalProgress(x&&It<-.001&&!ct?Rt.utils.normalize(It,Ot,0):ct,!0),R.progress=Ye||(Et-It)/oe===ct?0:ct),u&&m&&(me._pinOffset=Math.round(R.progress*Ut)),W&&W.invalidate(),isNaN(U)||(U-=Rt.getProperty(Y,C.p),Z-=Rt.getProperty(Kt,C.p),wl(Y,C,U),wl(re,C,U-(Tt||0)),wl(Kt,C,Z),wl(ee,C,Z-(Tt||0))),Ye&&!Bn&&R.update(),h&&!Bn&&!Me&&(Me=!0,h(R),Me=!1)}},R.getVelocity=function(){return(vt()-zt)/(wn()-Jo)*1e3||0},R.endAnimation=function(){Zo(R.callbackAnimation),i&&(W?W.progress(1):i.paused()?D||Zo(i,R.direction<0,1):Zo(i,i.reversed()))},R.labelToScroll=function(et){return i&&i.labels&&(It||R.refresh()||It)+i.labels[et]/i.duration()*oe||0},R.getTrailing=function(et){var xt=Qt.indexOf(R),nt=R.direction>0?Qt.slice(0,xt).reverse():Qt.slice(xt+1);return(ri(et)?nt.filter(function(Tt){return Tt.vars.preventOverlaps===et}):nt).filter(function(Tt){return R.direction>0?Tt.end<=It:Tt.start>=Ot})},R.update=function(et,xt,nt){if(!(x&&!nt&&!et)){var Tt=Bn===!0?Q:R.scroll(),te=et?0:(Tt-It)/oe,qt=te<0?0:te>1?1:te||0,Pe=R.progress,Ye,Ie,be,_e,je,Te,_n,Qn;if(xt&&(zt=Et,Et=x?vt():Tt,y&&(_t=ft,ft=i&&!D?i.totalProgress():qt)),p&&u&&!Tn&&!xl&&vi&&(!qt&&It<Tt+(Tt-zt)/(wn()-Jo)*p?qt=1e-4:qt===1&&Ot>Tt+(Tt-zt)/(wn()-Jo)*p&&(qt=.9999)),qt!==Pe&&R.enabled){if(Ye=R.isActive=!!qt&&qt<1,Ie=!!Pe&&Pe<1,Te=Ye!==Ie,je=Te||!!qt!=!!Pe,R.direction=qt>Pe?1:-1,R.progress=qt,je&&!Tn&&(be=qt&&!Pe?0:qt===1?1:Pe===1?2:3,D&&(_e=!Te&&O[be+1]!=="none"&&O[be+1]||O[be],Qn=i&&(_e==="complete"||_e==="reset"||_e in i))),P&&(Te||Qn)&&(Qn||d||!i)&&(En(P)?P(R):R.getTrailing(P).forEach(function(jn){return jn.endAnimation()})),D||(W&&!Tn&&!xl?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",qt,i._tTime/i._tDur):(W.vars.totalProgress=qt,W.invalidate().restart())):i&&i.totalProgress(qt,!!(Tn&&(rt||et)))),u){if(et&&m&&(me.style[m+C.os2]=Bt),!B)dt(Ko(de+Ut*qt));else if(je){if(_n=!et&&qt>Pe&&Ot+1>Tt&&Tt+1>=Gi(N,C),T)if(!et&&(Ye||_n)){var ke=ls(u,!0),Ze=Tt-It;Bp(u,xe,ke.top+(C===$e?Ze:0)+sn,ke.left+(C===$e?0:Ze)+sn)}else Bp(u,me);Kr(Ye||_n?Xe:F),V&&qt<1&&Ye||dt(de+(qt===1&&!_n?Ut:0))}}y&&!ut.tween&&!Tn&&!xl&&L.restart(!0),a&&(Te||w&&qt&&(qt<1||!bu))&&oa(a.targets).forEach(function(jn){return jn.classList[Ye||w?"add":"remove"](a.className)}),o&&!D&&!et&&o(R),je&&!Tn?(D&&(Qn&&(_e==="complete"?i.pause().totalProgress(1):_e==="reset"?i.restart(!0).pause():_e==="restart"?i.restart(!0):i[_e]()),o&&o(R)),(Te||!bu)&&(c&&Te&&Xr(R,c),H[be]&&Xr(R,H[be]),w&&(qt===1?R.kill(!1,1):H[be]=0),Te||(be=qt===1?1:3,H[be]&&Xr(R,H[be]))),S&&!Ye&&Math.abs(R.getVelocity())>(Qo(S)?S:2500)&&(Zo(R.callbackAnimation),W?W.progress(1):Zo(i,_e==="reverse"?1:!qt,1))):D&&o&&!Tn&&o(R)}if(ot){var tn=x?Tt/x.duration()*(x._caScrollDist||0):Tt;M(tn+(Y._isFlipped?1:0)),ot(tn)}pt&&pt(-Tt/x.duration()*(x._caScrollDist||0))}},R.enable=function(et,xt){R.enabled||(R.enabled=!0,cn(N,"resize",jo),I||cn(N,"scroll",Yr),tt&&cn(s,"refreshInit",tt),et!==!1&&(R.progress=ct=0,Et=zt=q=vt()),xt!==!1&&R.refresh())},R.getTween=function(et){return et&&ut?ut.tween:W},R.setPositions=function(et,xt,nt,Tt){if(x){var te=x.scrollTrigger,qt=x.duration(),Pe=te.end-te.start;et=te.start+Pe*et/qt,xt=te.start+Pe*xt/qt}R.refresh(!1,!1,{start:Rp(et,nt&&!!R._startClamp),end:Rp(xt,nt&&!!R._endClamp)},Tt),R.update()},R.adjustPinSpacing=function(et){if(A&&et){var xt=A.indexOf(C.d)+1;A[xt]=parseFloat(A[xt])+et+sn,A[1]=parseFloat(A[1])+et+sn,Kr(A)}},R.disable=function(et,xt){if(et!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,xt||W&&W.pause(),Q=0,Ct&&(Ct.uncache=1),tt&&ln(s,"refreshInit",tt),L&&(L.pause(),ut.tween&&ut.tween.kill()&&(ut.tween=0)),!I)){for(var nt=Qt.length;nt--;)if(Qt[nt].scroller===N&&Qt[nt]!==R)return;ln(N,"resize",jo),I||ln(N,"scroll",Yr)}},R.kill=function(et,xt){R.disable(et,xt),W&&!xt&&W.kill(),l&&delete Lu[l];var nt=Qt.indexOf(R);nt>=0&&Qt.splice(nt,1),nt===Fn&&Rl>0&&Fn--,nt=0,Qt.forEach(function(Tt){return Tt.scroller===R.scroller&&(nt=1)}),nt||Bn||Os||(R.scroll.rec=0),i&&(i.scrollTrigger=null,et&&i.revert({kill:!1}),xt||i.kill()),re&&[re,ee,Y,Kt].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),ra===R&&(ra=0),u&&(Ct&&(Ct.uncache=1),nt=0,Qt.forEach(function(Tt){return Tt.pin===u&&nt++}),nt||(Ct.spacer=0)),n.onKill&&n.onKill(R)},Qt.push(R),R.enable(!1,!1),lt&&lt(R),i&&i.add&&!oe){var st=R.update;R.update=function(){R.update=st,Jt.cache++,It||Ot||R.refresh()},Rt.delayedCall(.01,R.update),oe=.01,It=Ot=0}else R.refresh();u&&nx()},s.register=function(n){return Zr||(Rt=n||Zp(),Yp()&&window.document&&s.enable(),Zr=$o),Zr},s.defaults=function(n){if(n)for(var i in n)Ml[i]=n[i];return Ml},s.disable=function(n,i){$o=0,Qt.forEach(function(o){return o[i?"kill":"disable"](n)}),ln(jt,"wheel",Yr),ln(ye,"scroll",Yr),clearInterval(_l),ln(ye,"touchcancel",Vi),ln(xe,"touchstart",Vi),yl(ln,ye,"pointerdown,touchstart,mousedown",Pp),yl(ln,ye,"pointerup,touchend,mouseup",Ip),Ll.kill(),vl(ln);for(var r=0;r<Jt.length;r+=3)Sl(ln,Jt[r],Jt[r+1]),Sl(ln,Jt[r],Jt[r+2])},s.enable=function(){if(jt=window,ye=document,oi=ye.documentElement,xe=ye.body,Rt){if(oa=Rt.utils.toArray,ta=Rt.utils.clamp,Pu=Rt.core.context||Vi,Mu=Rt.core.suppressOverwrites||Vi,Ou=jt.history.scrollRestoration||"auto",Du=jt.pageYOffset||0,Rt.core.globals("ScrollTrigger",s),xe){$o=1,$r=document.createElement("div"),$r.style.height="100vh",$r.style.position="absolute",sm(),J0(),We.register(Rt),s.isTouch=We.isTouch,Us=We.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ru=We.isTouch===1,cn(jt,"wheel",Yr),Uu=[jt,ye,oi,xe],Rt.matchMedia?(s.matchMedia=function(h){var d=Rt.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},Rt.addEventListener("matchMediaInit",function(){nm(),Gu()}),Rt.addEventListener("matchMediaRevert",function(){return em()}),Rt.addEventListener("matchMedia",function(){fr(0,1),xr("matchMedia")}),Rt.matchMedia().add("(orientation: portrait)",function(){return wu(),wu})):console.warn("Requires GSAP 3.11.0 or later"),wu(),cn(ye,"scroll",Yr);var n=xe.hasAttribute("style"),i=xe.style,r=i.borderTopStyle,o=Rt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ls(xe),$e.m=Math.round(a.top+$e.sc())||0,bn.m=Math.round(a.left+bn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(xe.setAttribute("style",""),xe.removeAttribute("style")),_l=setInterval(Np,250),Rt.delayedCall(.5,function(){return xl=0}),cn(ye,"touchcancel",Vi),cn(xe,"touchstart",Vi),yl(cn,ye,"pointerdown,touchstart,mousedown",Pp),yl(cn,ye,"pointerup,touchend,mouseup",Ip),Cu=Rt.utils.checkPrefix("transform"),Pl.push(Cu),Zr=wn(),Ll=Rt.delayedCall(.2,fr).pause(),Jr=[ye,"visibilitychange",function(){var h=jt.innerWidth,d=jt.innerHeight;ye.hidden?(Ep=h,Ap=d):(Ep!==h||Ap!==d)&&jo()},ye,"DOMContentLoaded",fr,jt,"load",fr,jt,"resize",jo],vl(cn),Qt.forEach(function(h){return h.enable(0,1)}),l=0;l<Jt.length;l+=3)Sl(ln,Jt[l],Jt[l+1]),Sl(ln,Jt[l],Jt[l+2])}else if(ye){var c=function h(){s.enable(),ye.removeEventListener("DOMContentLoaded",h)};ye.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(bu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(_l)||(_l=i)&&setInterval(Np,i),"ignoreMobileResize"in n&&(Ru=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(vl(ln)||vl(cn,n.autoRefreshEvents||"none"),Wp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Un(n),o=Jt.indexOf(r),a=gr(r);~o&&Jt.splice(o,a?6:2),i&&(a?Ai.unshift(jt,i,xe,i,oi,i):Ai.unshift(r,i))},s.clearMatchMedia=function(n){Qt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(ri(n)?Un(n):n).getBoundingClientRect(),a=o[r?dr:pr]*i||0;return r?o.right-a>0&&o.left+a<jt.innerWidth:o.bottom-a>0&&o.top+a<jt.innerHeight},s.positionInViewport=function(n,i,r){ri(n)&&(n=Un(n));var o=n.getBoundingClientRect(),a=o[r?dr:pr],l=i==null?a/2:i in Nl?Nl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/jt.innerWidth:(o.top+l)/jt.innerHeight},s.killAll=function(n){if(Qt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=_r.killAll||[];_r={},i.forEach(function(r){return r()})}},s})();Gt.version="3.15.1";Gt.saveStyles=function(s){return s?oa(s).forEach(function(t){if(t&&t.style){var e=si.indexOf(t);e>=0&&si.splice(e,5),si.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),Pu())}}):si};Gt.revert=function(s,t){return Gu(!s,t)};Gt.create=function(s,t){return new Gt(s,t)};Gt.refresh=function(s){return s?jo(!0):(Zr||Gt.register())&&fr(!0)};Gt.update=function(s){return++Jt.cache&&cs(s===!0?2:0)};Gt.clearScrollMemory=im;Gt.maxScroll=function(s,t){return Gi(s,t?bn:$e)};Gt.getScrollFunc=function(s,t){return os(Un(s),t?bn:$e)};Gt.getById=function(s){return Lu[s]};Gt.getAll=function(){return Qt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Gt.isScrolling=function(){return!!vi};Gt.snapDirectional=Vu;Gt.addEventListener=function(s,t){var e=_r[s]||(_r[s]=[]);~e.indexOf(t)||e.push(t)};Gt.removeEventListener=function(s,t){var e=_r[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Gt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],f=[],u=Rt.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(m){d.length||u.restart(!0),d.push(m.trigger),f.push(m),r<=d.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&En(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return En(r)&&(r=r(),cn(Gt,"refresh",function(){return r=t.batchMax()})),oa(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Gt.create(c))}),e};var kp=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Au=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(We.isTouch?" pinch-zoom":""):"none",t===oi&&s(xe,e)},El={auto:1,scroll:1},ax=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Rt.core.getCache(r),a=wn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==xe&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(El[(l=xi(r)).overflowY]||El[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!gr(r)&&(El[(l=xi(r)).overflowY]||El[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},om=function(t,e,n,i){return We.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&ax,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&cn(ye,We.eventTypes[0],Gp,!1,!0)},onDisable:function(){return ln(ye,We.eventTypes[0],Gp,!0)}})},lx=/(input|label|select|textarea)/i,Vp,Gp=function(t){var e=lx.test(t.target.tagName);(e||Vp)&&(t._gsapAllow=!0,Vp=e)},cx=function(t){ur(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Un(t.target)||oi,h=Rt.core.globals().ScrollSmoother,d=h&&h.get(),f=Us&&(t.content&&Un(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=os(c,$e),m=os(c,bn),_=1,p=(We.isTouch&&jt.visualViewport?jt.visualViewport.scale*jt.visualViewport.width:jt.outerWidth)/jt.innerWidth,g=0,v=En(i)?function(){return i(a)}:function(){return i||2.8},w,y,T=om(c,t.type,!0,r),E=function(){return y=!1},x=Vi,S=Vi,P=function(){l=Gi(c,$e),S=ta(Us?1:0,l),n&&(x=ta(0,Gi(c,bn))),w=mr},C=function(){f._gsap.y=Ko(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},D=function(){if(y){requestAnimationFrame(E);var J=Ko(a.deltaY/2),z=S(u.v-J);if(f&&z!==u.v+u.offset){u.offset=z-u.v;var R=Ko((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",u.cacheID=Jt.cache,cs()}return!0}u.offset&&C(),y=!0},N,G,I,B,H=function(){P(),N.isActive()&&N.vars.scrollY>l&&(u()>l?N.progress(1)&&u(l):N.resetTo("scrollY",l))};return f&&Rt.set(f,{y:"+=0"}),t.ignoreCheck=function(O){return Us&&O.type==="touchmove"&&D(O)||_>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){y=!1;var O=_;_=Ko((jt.visualViewport&&jt.visualViewport.scale||1)/p),N.pause(),O!==_&&Au(c,_>1.01?!0:n?!1:"x"),G=m(),I=u(),P(),w=mr},t.onRelease=t.onGestureStart=function(O,J){if(u.offset&&C(),!J)B.restart(!0);else{Jt.cache++;var z=v(),R,tt;n&&(R=m(),tt=R+z*.05*-O.velocityX/.227,z*=kp(m,R,tt,Gi(c,bn)),N.vars.scrollX=x(tt)),R=u(),tt=R+z*.05*-O.velocityY/.227,z*=kp(u,R,tt,Gi(c,$e)),N.vars.scrollY=S(tt),N.invalidate().duration(z).play(.01),(Us&&N.vars.scrollY>=l||R>=l-1)&&Rt.to({},{onUpdate:H,duration:z})}o&&o(O)},t.onWheel=function(){N._ts&&N.pause(),wn()-g>1e3&&(w=0,g=wn())},t.onChange=function(O,J,z,R,tt){if(mr!==w&&P(),J&&n&&m(x(R[2]===J?G+(O.startX-O.x):m()+J-R[1])),z){u.offset&&C();var yt=tt[2]===z,Nt=yt?I+O.startY-O.y:u()+z-tt[1],q=S(Nt);yt&&Nt!==q&&(I+=q-Nt),u(q)}(z||J)&&cs()},t.onEnable=function(){Au(c,n?!1:"x"),Gt.addEventListener("refresh",H),cn(jt,"resize",H),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),T.enable()},t.onDisable=function(){Au(c,!0),ln(jt,"resize",H),Gt.removeEventListener("refresh",H),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new We(t),a.iOS=Us,Us&&!u()&&u(1),Us&&Rt.ticker.add(Vi),B=a._dc,N=Rt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:rm(u,u(),function(){return N.pause()})},onUpdate:cs,onComplete:B.vars.onComplete}),a};Gt.sort=function(s){if(En(s))return Qt.sort(s);var t=jt.pageYOffset||0;return Gt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+jt.innerHeight}),Qt.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Gt.observe=function(s){return new We(s)};Gt.normalizeScroll=function(s){if(typeof s=="undefined")return On;if(s===!0&&On)return On.enable();if(s===!1){On&&On.kill(),On=s;return}var t=s instanceof We?s:cx(s);return On&&On.target===t.target&&On.kill(),gr(t.target)&&(On=t),t};Gt.core={_getVelocityProp:gl,_inputObserver:om,_scrollers:Jt,_proxies:Ai,bridge:{ss:function(){vi||xr("scrollStart"),vi=wn()},ref:function(){return Tn}}};Zp()&&Rt.registerPlugin(Gt);var am="1.3.29";function hm(s,t,e){return Math.max(s,Math.min(t,e))}function hx(s,t,e){return(1-e)*s+e*t}function ux(s,t,e,n){return hx(s,t,1-Math.exp(-e*n))}function fx(s,t){return(s%t+t)%t}var dx=.5,px=class{constructor(){At(this,"isRunning",!1);At(this,"value",0);At(this,"from",0);At(this,"to",0);At(this,"currentTime",0);At(this,"lerp");At(this,"duration");At(this,"easing");At(this,"onUpdate")}advance(s){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let n=hm(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=ux(this.value,this.to,this.lerp*60,s),Math.abs(this.to-this.value)<dx&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=o}};function mx(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var gx=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){At(this,"wrapper");At(this,"content");At(this,"width",0);At(this,"height",0);At(this,"scrollHeight",0);At(this,"scrollWidth",0);At(this,"debouncedResize");At(this,"wrapperResizeObserver");At(this,"contentResizeObserver");At(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});At(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});At(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=mx(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,t;(s=this.wrapperResizeObserver)==null||s.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},um=class{constructor(){At(this,"events",{})}emit(s,...t){var n;let e=this.events[s]||[];for(let i=0,r=e.length;i<r;i++)(n=e[i])==null||n.call(e,...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}}off(s,t){var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},_x=100/6,Fs={passive:!1};function lm(s,t){return s===1?_x:s===2?t:1}var xx=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){At(this,"element");At(this,"options");At(this,"touchStart",{x:0,y:0});At(this,"lastDelta",{x:0,y:0});At(this,"window",{width:0,height:0});At(this,"emitter",new um);At(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});At(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});At(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});At(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=lm(n,this.window.width),r=lm(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});At(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Fs),this.element.addEventListener("touchstart",this.onTouchStart,Fs),this.element.addEventListener("touchmove",this.onTouchMove,Fs),this.element.addEventListener("touchend",this.onTouchEnd,Fs)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Fs),this.element.removeEventListener("touchstart",this.onTouchStart,Fs),this.element.removeEventListener("touchmove",this.onTouchMove,Fs),this.element.removeEventListener("touchend",this.onTouchEnd,Fs)}},cm=s=>Math.min(1,1.001-2**(-10*s)),la=new WeakMap,fm=class dm{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaExponent:a=1.7,duration:l,easing:c,lerp:h=.1,infinite:d=!1,orientation:f="vertical",gestureOrientation:u=f==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:_=1,autoResize:p=!0,prevent:g,virtualScroll:v,overscroll:w=!0,autoRaf:y=!1,anchors:T=!1,autoToggle:E=!1,allowNestedScroll:x=!1,__experimental__naiveDimensions:S=!1,naiveDimensions:P=S,stopInertiaOnNavigate:C=!1,respectReducedMotion:D=!0}={}){At(this,"_isScrolling",!1);At(this,"_isStopped",!1);At(this,"_isLocked",!1);At(this,"_preventNextNativeScrollEvent",!1);At(this,"_resetVelocityTimeout",null);At(this,"_rafId",null);At(this,"_isDraggingSelection",!1);At(this,"nestedInstances",new Set);At(this,"_nestedSweepFrame",0);At(this,"_isAdopted",!1);At(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));At(this,"isTouching");At(this,"isIos");At(this,"time",0);At(this,"userData",{});At(this,"lastVelocity",0);At(this,"velocity",0);At(this,"direction",0);At(this,"options");At(this,"targetScroll");At(this,"animatedScroll");At(this,"animate",new px);At(this,"emitter",new um);At(this,"dimensions");At(this,"virtualScroll");At(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});At(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});At(this,"onTransitionEnd",t=>{var e;(e=t.propertyName)!=null&&e.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});At(this,"onClick",t=>{let e=t.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),n=new URL(window.location.href);if(this.options.anchors){let i=e.find(r=>n.host===r.host&&n.pathname===r.pathname&&r.hash);if(i){let r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(i.hash);this.scrollTo(o,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>n.host===i.host&&n.pathname!==i.pathname)){this.reset();return}});At(this,"onPointerDown",t=>{t.button===1&&this.reset()});At(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;let{deltaX:e,deltaY:n,event:i}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;let r=i.type.includes("touch"),o=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";let a=e===0&&n===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0,c=this.options.allowNestedScroll==="smooth";if(a||l&&!c)return;let h=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(this._isAdopted&&h!==(this.isHorizontal?"horizontal":"vertical"))return;let d=i.composedPath();d=d.slice(0,d.indexOf(this.rootElement));let f=this.options.prevent,u=v=>{var w,y,T,E,x;return typeof f=="function"&&(f==null?void 0:f(v))||((w=v.hasAttribute)==null?void 0:w.call(v,"data-lenis-prevent"))||h==="vertical"&&((y=v.hasAttribute)==null?void 0:y.call(v,"data-lenis-prevent-vertical"))||h==="horizontal"&&((T=v.hasAttribute)==null?void 0:T.call(v,"data-lenis-prevent-horizontal"))||r&&((E=v.hasAttribute)==null?void 0:E.call(v,"data-lenis-prevent-touch"))||o&&((x=v.hasAttribute)==null?void 0:x.call(v,"data-lenis-prevent-wheel"))},m=d.find(v=>v instanceof HTMLElement&&(u(v)||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:n})));if(m){c&&(o&&this.options.smoothWheel||r&&this.options.syncTouch)&&!d.slice(d.indexOf(m)).some(v=>v instanceof HTMLElement&&u(v))&&this.isNestedAdoptable(m)&&this.adoptNestedScroller(m,t);return}if(l)return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),this.settleNativeScrollLater(),i.lenisStopPropagation=!0;return}let _=n;this.options.gestureOrientation==="both"?_=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(_=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&(this._isAdopted?_:n)>0||this.animatedScroll===this.limit&&(this._isAdopted?_:n)<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();let p=r&&this.options.syncTouch,g=r&&i.type==="touchend";g&&(_=Math.sign(_)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+_,{programmatic:!1,...p?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});At(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.settleNativeScrollLater()}});At(this,"raf",t=>{let e=t-(this.time||t);if(this.time=t,this.animate.advance(e*.001),this.nestedInstances.size>0){for(let n of this.nestedInstances)n.raf(t);++this._nestedSweepFrame>=60&&(this._nestedSweepFrame=0,this.sweepNestedInstances())}this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=am,window.lenis||(window.lenis={}),window.lenis.version=am,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof l=="number"&&typeof c!="function"?c=cm:typeof c=="function"&&typeof l!="number"&&(l=1),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:r,syncTouchLerp:o,touchInertiaExponent:a,duration:l,easing:c,lerp:h,infinite:d,gestureOrientation:u,orientation:f,touchMultiplier:m,wheelMultiplier:_,autoResize:p,prevent:g,virtualScroll:v,overscroll:w,autoRaf:y,anchors:T,autoToggle:E,allowNestedScroll:x,naiveDimensions:P,stopInertiaOnNavigate:C,respectReducedMotion:D},this.dimensions=new gx(t,e,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new xx(n,{touchMultiplier:m,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),la.set(this.rootElement,this),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}static get(t){return la.get(t)}destroy(){for(let t of this.nestedInstances)t.destroy();this.nestedInstances.clear(),la.get(this.rootElement)===this&&la.delete(this.rootElement),this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.options.autoToggle&&this.rootElement.removeEventListener("transitionend",this.onTransitionEnd),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){let t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}isTouchOnSelectionHandle(t){var h;let e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;let n=(h=t.targetTouches[0])!=null?h:t.changedTouches[0];if(!n)return!1;let i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;let r=i[0],o=i[i.length-1],a=40,l=Math.hypot(n.clientX-r.left,n.clientY-r.top)<=a,c=Math.hypot(n.clientX-o.right,n.clientY-o.bottom)<=a;return l||c}resize(){this.sweepNestedInstances(),this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}settleNativeScrollLater(){this._resetVelocityTimeout!==null&&clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=setTimeout(()=>{this._resetVelocityTimeout=null,this.isScrolling!=="smooth"&&(this.isScrolling===!1&&this.velocity===0||(this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()))},400)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,programmatic:r=!0,lerp:o=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:l=r?this.options.easing:void 0,onStart:c,onComplete:h,force:d=!1,userData:f}={}){if(this.prefersReducedMotion&&(r?n=!0:(o=1,a=void 0,l=void 0)),(this.isStopped||this.isLocked)&&!d)return;let u=t,m=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let _=null;if(typeof u=="string"?(_=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),_||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(_=u),_){if(this.options.wrapper!==window){let T=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?T.left:T.top}let p=_.getBoundingClientRect(),g=getComputedStyle(_),v=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),w=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(w.scrollPaddingLeft):Number.parseFloat(w.scrollPaddingTop);u=(this.isHorizontal?p.left:p.top)+this.animatedScroll-(Number.isNaN(v)?0:v)-(Number.isNaN(y)?0:y)}}if(typeof u=="number"){if(u+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;let _=u-this.animatedScroll;_>this.limit/2?u-=this.limit:_<-this.limit/2&&(u+=this.limit)}}else u=hm(0,u,this.limit);if(u===this.targetScroll){c==null||c(this),h==null||h(this);return}if(this.userData=f!=null?f:{},n){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=u),typeof a=="number"&&typeof l!="function"?l=cm:typeof l=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,u,{duration:a,easing:l,lerp:o,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",c==null||c(this)},onUpdate:(_,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),r&&(this.targetScroll=_),p||this.emit(),p&&(this.reset(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}sweepNestedInstances(){for(let t of this.nestedInstances)t.rootElement.isConnected||(this.nestedInstances.delete(t),t.destroy())}isNestedAdoptable(t){return!(la.has(t)||t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t.isContentEditable)}adoptNestedScroller(t,e){var c,h;let n=getComputedStyle(t),i=["auto","overlay","scroll"].includes(n.overflowX)&&t.scrollWidth>t.clientWidth,r=["auto","overlay","scroll"].includes(n.overflowY)&&t.scrollHeight>t.clientHeight,o=i&&!r?"horizontal":"vertical",a=(c=window.lenis)==null?void 0:c.horizontal,l=new dm({wrapper:t,content:(h=t.firstElementChild)!=null?h:t,eventsTarget:t,orientation:o,gestureOrientation:o,smoothWheel:this.options.smoothWheel,syncTouch:this.options.syncTouch,syncTouchLerp:this.options.syncTouchLerp,touchInertiaExponent:this.options.touchInertiaExponent,duration:this.options.duration,easing:this.options.easing,lerp:this.options.lerp,touchMultiplier:this.options.touchMultiplier,wheelMultiplier:this.options.wheelMultiplier,autoResize:this.options.autoResize,prevent:this.options.prevent,overscroll:this.options.overscroll,allowNestedScroll:this.options.allowNestedScroll,naiveDimensions:this.options.naiveDimensions,respectReducedMotion:this.options.respectReducedMotion,infinite:!1,anchors:!1,autoToggle:!1,stopInertiaOnNavigate:!1,autoRaf:!1});l._isAdopted=!0,window.lenis&&(window.lenis.horizontal=a),this.nestedInstances.add(l),e.event.type.includes("touch")&&(l.virtualScroll.touchStart.x=this.virtualScroll.touchStart.x,l.virtualScroll.touchStart.y=this.virtualScroll.touchStart.y,l.virtualScroll.lastDelta.x=this.virtualScroll.lastDelta.x,l.virtualScroll.lastDelta.y=this.virtualScroll.lastDelta.y),l.onVirtualScroll(e)}hasNestedScroll(t,{deltaX:e,deltaY:n}){var x;let i=Date.now();t._lenis||(t._lenis={});let r=t._lenis,o,a,l,c,h,d,f,u,m,_;if(i-((x=r.time)!=null?x:0)>2e3){r.time=Date.now();let S=window.getComputedStyle(t);if(r.computedStyle=S,o=["auto","overlay","scroll"].includes(S.overflowX),a=["auto","overlay","scroll"].includes(S.overflowY),h=["auto"].includes(S.overscrollBehaviorX),d=["auto"].includes(S.overscrollBehaviorY),r.hasOverflowX=o,r.hasOverflowY=a,!(o||a))return!1;f=t.scrollWidth,u=t.scrollHeight,m=t.clientWidth,_=t.clientHeight,l=f>m,c=u>_,r.isScrollableX=l,r.isScrollableY=c,r.scrollWidth=f,r.scrollHeight=u,r.clientWidth=m,r.clientHeight=_,r.hasOverscrollBehaviorX=h,r.hasOverscrollBehaviorY=d}else l=r.isScrollableX,c=r.isScrollableY,o=r.hasOverflowX,a=r.hasOverflowY,f=r.scrollWidth,u=r.scrollHeight,m=r.clientWidth,_=r.clientHeight,h=r.hasOverscrollBehaviorX,d=r.hasOverscrollBehaviorY;if(!(o&&l||a&&c))return!1;let p=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical",g,v,w,y,T,E;if(p==="horizontal")g=Math.round(t.scrollLeft),v=f-m,w=e,y=o,T=l,E=h;else if(p==="vertical")g=Math.round(t.scrollTop),v=u-_,w=n,y=a,T=c,E=d;else return!1;return!E&&(g>=v||g<=0)?!0:(w>0?g<v:g>0)&&y&&T}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var e,n;let t=this.options.wrapper;return this.isHorizontal?(e=t.scrollX)!=null?e:t.scrollLeft:(n=t.scrollY)!=null?n:t.scrollTop}get scroll(){return this.options.infinite?fx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(let t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};var Fm=0,xf=1,Bm=2;var La=1,zm=2,Mo=3,$s=0,Wn=1,Ti=2,wr=0,bo=1,To=2,vf=3,yf=4,km=5;var Er=100,Vm=101,Gm=102,Hm=103,Wm=104,Xm=200,qm=201,Ym=202,Zm=203,Sf=204,Mf=205,Jm=206,$m=207,Km=208,Qm=209,jm=210,tg=211,eg=212,ng=213,ig=214,oc=0,ac=1,lc=2,po=3,cc=4,hc=5,uc=6,fc=7,bf=0,sg=1,rg=2,Zi=0,Tf=1,wf=2,Ef=3,Af=4,Cf=5,Rf=6,Pf=7;var If=300,Ar=301,wo=302,Bc=303,zc=304,dc=1e3,Wi=1001,pc=1002,un=1003,og=1004;var Da=1005;var Vn=1006,kc=1007;var vs=1008;var fi=1009,Lf=1010,Df=1011,Eo=1012,Vc=1013,Di=1014,Ni=1015,Ui=1016,Gc=1017,Hc=1018,Cr=1020,Nf=35902,Uf=35899,Of=1021,Ff=1022,Oi=1023,_s=1026,ys=1027,Bf=1028,Wc=1029,Ks=1030,Xc=1031;var qc=1033,Na=33776,Ua=33777,Oa=33778,Fa=33779,Yc=35840,Zc=35841,Jc=35842,$c=35843,Kc=36196,Qc=37492,jc=37496,th=37488,eh=37489,Ba=37490,nh=37491,ih=37808,sh=37809,rh=37810,oh=37811,ah=37812,lh=37813,ch=37814,hh=37815,uh=37816,fh=37817,dh=37818,ph=37819,mh=37820,gh=37821,_h=36492,xh=36494,vh=36495,yh=36283,Sh=36284,za=36285,Mh=36286;var pa=2300,mc=2301,sc=2302,uf=2303,ff=2400,df=2401,pf=2402;var ag=3200;var zf=0,lg=1,Ss="",zn="srgb",ma="srgb-linear",ga="linear",ve="srgb";var rc=7680;var cg=519,hg=512,ug=513,fg=514,kf=515,dg=516,pg=517,Vf=518,Gf=519,mg=35044;var Hf="300 es",Si=2e3,_a=2001;function vx(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function yx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function xa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gg(){let s=xa("canvas");return s.style.display="block",s}var pm={},mo=null;function Wf(...s){let t="THREE."+s.shift();mo?mo("log",t,...s):console.log(t,...s)}function _g(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function kt(...s){s=_g(s);let t="THREE."+s.shift();if(mo)mo("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ht(...s){s=_g(s);let t="THREE."+s.shift();if(mo)mo("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function da(...s){let t=s.join(" ");t in pm||(pm[t]=!0,kt(...s))}function xg(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var vg={[oc]:oc,[lc]:uc,[cc]:cc,[po]:hc,[ac]:ac,[uc]:lc,[fc]:fc,[hc]:po},Xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hu=Math.PI/180,gc=180/Math.PI;function ka(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[e&63|128]+An[e>>8&255]+"-"+An[e>>16&255]+An[e>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function le(s,t,e){return Math.max(t,Math.min(e,s))}function Sx(s,t){return(s%t+t)%t}function Wu(s,t,e){return(1-e)*s+e*t}function yg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Mx(s,t){if(t.constructor===Float32Array)return s;let e=Xf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function bx(s,t){if(t.constructor===Float32Array)return s;let e=Xf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var $f=class $f{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$f.prototype.isVector2=!0;var pe=$f,qi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==f||c!==u||h!==m){let p=l*f+c*u+h*m+d*_;p<0&&(f=-f,u=-u,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let v=Math.acos(p),w=Math.sin(v);g=Math.sin(g*v)/w,a=Math.sin(a*v)/w,l=l*g+f*a,c=c*g+u*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+m*a,d=d*g+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*u-c*f,t[e+1]=l*m+h*f+c*d-a*u,t[e+2]=c*m+h*u+a*f-l*d,t[e+3]=h*m-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Kf=class Kf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xu.copy(this).projectOnVector(t),this.sub(Xu)}reflect(t){return this.sub(Xu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kf.prototype.isVector3=!0;var $=Kf,Xu=new $,mm=new qi,Qf=class Qf{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],_=i[0],p=i[3],g=i[6],v=i[1],w=i[4],y=i[7],T=i[2],E=i[5],x=i[8];return r[0]=o*_+a*v+l*T,r[3]=o*p+a*w+l*E,r[6]=o*g+a*y+l*x,r[1]=c*_+h*v+d*T,r[4]=c*p+h*w+d*E,r[7]=c*g+h*y+d*x,r[2]=f*_+u*v+m*T,r[5]=f*p+u*w+m*E,r[8]=f*g+u*y+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,m=e*d+n*f+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return da("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qu.makeScale(t,e)),this}rotate(t){return da("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qu.makeRotation(-t)),this}translate(t,e){return da("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Qf.prototype.isMatrix3=!0;var Xt=Qf,qu=new Xt,gm=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tx(){let s={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(i.r=gs(i.r),i.g=gs(i.g),i.b=gs(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(i.r=fo(i.r),i.g=fo(i.g),i.b=fo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ss?ga:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ma]:{primaries:t,whitePoint:n,transfer:ga,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),s}var se=Tx();function gs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var jr,_c=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{jr===void 0&&(jr=xa("canvas")),jr.width=t.width,jr.height=t.height;let i=jr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=jr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=xa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gs(e[n]/255)*255):e[n]=gs(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wx=0,go=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=ka(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Yu(i[o].image)):r.push(Yu(i[o]))}else r=Yu(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Yu(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?_c.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var Ex=0,Zu=new $,Gn=class s extends Xi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Wi,i=Wi,r=Vn,o=vs,a=Oi,l=fi,c=s.DEFAULT_ANISOTROPY,h=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=ka(),this.name="",this.source=new go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==If)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dc:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case pc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dc:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case pc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=If;Gn.DEFAULT_ANISOTROPY=1;var jf=class jf{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(u+1)/2,T=(g+1)/2,E=(h+f)/4,x=(d+_)/4,S=(m+p)/4;return w>y&&w>T?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=E/n,r=x/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=S/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=x/r,i=S/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jf.prototype.isVector4=!0;var Be=jf,xc=class extends Xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Gn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new go(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends xc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},va=class extends Gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var vc=class extends Gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Fc=class Fc{constructor(t,e,n,i,r,o,a,l,c,h,d,f,u,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,u,m,_,p)}set(t,e,n,i,r,o,a,l,c,h,d,f,u,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/to.setFromMatrixColumn(t,0).length(),r=1/to.setFromMatrixColumn(t,1).length(),o=1/to.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f+_*a,e[4]=m*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=m+u*a,e[1]=u+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=m*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+m,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*l,u=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=u*d-m,e[2]=m*d-u,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ax,t,Cx)}lookAt(t,e,n){let i=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Bs.crossVectors(n,ai),Bs.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Bs.crossVectors(n,ai)),Bs.normalize(),Ol.crossVectors(ai,Bs),i[0]=Bs.x,i[4]=Ol.x,i[8]=ai.x,i[1]=Bs.y,i[5]=Ol.y,i[9]=ai.y,i[2]=Bs.z,i[6]=Ol.z,i[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],w=n[7],y=n[11],T=n[15],E=i[0],x=i[4],S=i[8],P=i[12],C=i[1],D=i[5],N=i[9],G=i[13],I=i[2],B=i[6],H=i[10],O=i[14],J=i[3],z=i[7],R=i[11],tt=i[15];return r[0]=o*E+a*C+l*I+c*J,r[4]=o*x+a*D+l*B+c*z,r[8]=o*S+a*N+l*H+c*R,r[12]=o*P+a*G+l*O+c*tt,r[1]=h*E+d*C+f*I+u*J,r[5]=h*x+d*D+f*B+u*z,r[9]=h*S+d*N+f*H+u*R,r[13]=h*P+d*G+f*O+u*tt,r[2]=m*E+_*C+p*I+g*J,r[6]=m*x+_*D+p*B+g*z,r[10]=m*S+_*N+p*H+g*R,r[14]=m*P+_*G+p*O+g*tt,r[3]=v*E+w*C+y*I+T*J,r[7]=v*x+w*D+y*B+T*z,r[11]=v*S+w*N+y*H+T*R,r[15]=v*P+w*G+y*O+T*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],m=t[3],_=t[7],p=t[11],g=t[15],v=l*u-c*f,w=a*u-c*d,y=a*f-l*d,T=o*u-c*h,E=o*f-l*h,x=o*d-a*h;return e*(_*v-p*w+g*y)-n*(m*v-p*T+g*E)+i*(m*w-_*T+g*x)-r*(m*y-_*E+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],_=t[13],p=t[14],g=t[15],v=e*a-n*o,w=e*l-i*o,y=e*c-r*o,T=n*l-i*a,E=n*c-r*a,x=i*c-r*l,S=h*_-d*m,P=h*p-f*m,C=h*g-u*m,D=d*p-f*_,N=d*g-u*_,G=f*g-u*p,I=v*G-w*N+y*D+T*C-E*P+x*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return t[0]=(a*G-l*N+c*D)*B,t[1]=(i*N-n*G-r*D)*B,t[2]=(_*x-p*E+g*T)*B,t[3]=(f*E-d*x-u*T)*B,t[4]=(l*C-o*G-c*P)*B,t[5]=(e*G-i*C+r*P)*B,t[6]=(p*y-m*x-g*w)*B,t[7]=(h*x-f*y+u*w)*B,t[8]=(o*N-a*C+c*S)*B,t[9]=(n*C-e*N-r*S)*B,t[10]=(m*E-_*y+g*v)*B,t[11]=(d*y-h*E-u*v)*B,t[12]=(a*P-o*D-l*S)*B,t[13]=(e*D-n*P+i*S)*B,t[14]=(_*w-m*T-p*v)*B,t[15]=(h*T-d*w+f*v)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,m=r*d,_=o*h,p=o*d,g=a*d,v=l*c,w=l*h,y=l*d,T=n.x,E=n.y,x=n.z;return i[0]=(1-(_+g))*T,i[1]=(u+y)*T,i[2]=(m-w)*T,i[3]=0,i[4]=(u-y)*E,i[5]=(1-(f+g))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(m+w)*x,i[9]=(p-v)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=to.set(i[0],i[1],i[2]).length(),a=to.set(i[4],i[5],i[6]).length(),l=to.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ci.copy(this);let c=1/o,h=1/a,d=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=d,Ci.elements[9]*=d,Ci.elements[10]*=d,e.setFromRotationMatrix(Ci),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Si,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Si)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===_a)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Si,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Si)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===_a)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Fc.prototype.isMatrix4=!0;var Fe=Fc,to=new $,Ci=new Fe,Ax=new $(0,0,0),Cx=new $(1,1,1),Bs=new $,Ol=new $,ai=new $,xm=new Fe,vm=new qi,Ws=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vm.setFromEuler(this),this.setFromQuaternion(vm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ws.DEFAULT_ORDER="XYZ";var ya=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rx=0,ym=new $,eo=new qi,hs=new Fe,Fl=new $,ca=new $,Px=new $,Ix=new qi,Sm=new $(1,0,0),Mm=new $(0,1,0),bm=new $(0,0,1),Tm={type:"added"},Lx={type:"removed"},no={type:"childadded",child:null},Ju={type:"childremoved",child:null},hi=class s extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new $,e=new Ws,n=new qi,i=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Xt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return eo.setFromAxisAngle(t,e),this.quaternion.multiply(eo),this}rotateOnWorldAxis(t,e){return eo.setFromAxisAngle(t,e),this.quaternion.premultiply(eo),this}rotateX(t){return this.rotateOnAxis(Sm,t)}rotateY(t){return this.rotateOnAxis(Mm,t)}rotateZ(t){return this.rotateOnAxis(bm,t)}translateOnAxis(t,e){return ym.copy(t).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sm,t)}translateY(t){return this.translateOnAxis(Mm,t)}translateZ(t){return this.translateOnAxis(bm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fl.copy(t):Fl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hs.lookAt(ca,Fl,this.up):hs.lookAt(Fl,ca,this.up),this.quaternion.setFromRotationMatrix(hs),i&&(hs.extractRotation(i.matrixWorld),eo.setFromRotationMatrix(hs),this.quaternion.premultiply(eo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tm),no.child=t,this.dispatchEvent(no),no.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lx),Ju.child=t,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hs.multiply(t.parent.matrixWorld)),t.applyMatrix4(hs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tm),no.child=t,this.dispatchEvent(no),no.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,t,Px),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,Ix,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hi.DEFAULT_UP=new $(0,1,0);hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ms=class extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dx={type:"move"},_o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Sg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zs={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function $u(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var he=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=Sx(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$u(o,r,t+1/3),this.g=$u(o,r,t),this.b=$u(o,r,t-1/3)}return se.colorSpaceToWorking(this,i),this}setStyle(t,e=zn){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zn){let n=Sg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zn){return se.workingToColorSpace(Cn.copy(this),t),Math.round(le(Cn.r*255,0,255))*65536+Math.round(le(Cn.g*255,0,255))*256+Math.round(le(Cn.b*255,0,255))}getHexString(t=zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Cn.copy(this),e);let n=Cn.r,i=Cn.g,r=Cn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Cn.copy(this),e),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=zn){se.workingToColorSpace(Cn.copy(this),t);let e=Cn.r,n=Cn.g,i=Cn.b;return t!==zn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(zs),this.setHSL(zs.h+t,zs.s+e,zs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zs),t.getHSL(Bl);let n=Wu(zs.h,Bl.h,e),i=Wu(zs.s,Bl.s,e),r=Wu(zs.l,Bl.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new he;he.NAMES=Sg;var Sa=class extends hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ws,this.environmentIntensity=1,this.environmentRotation=new Ws,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ri=new $,us=new $,Ku=new $,fs=new $,io=new $,so=new $,wm=new $,Qu=new $,ju=new $,tf=new $,ef=new Be,nf=new Be,sf=new Be,Hs=class s{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ri.subVectors(t,e),i.cross(Ri);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ri.subVectors(i,e),us.subVectors(n,e),Ku.subVectors(t,e);let o=Ri.dot(Ri),a=Ri.dot(us),l=Ri.dot(Ku),c=us.dot(us),h=us.dot(Ku),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,fs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fs.x),l.addScaledVector(o,fs.y),l.addScaledVector(a,fs.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ef.setScalar(0),nf.setScalar(0),sf.setScalar(0),ef.fromBufferAttribute(t,e),nf.fromBufferAttribute(t,n),sf.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ef,r.x),o.addScaledVector(nf,r.y),o.addScaledVector(sf,r.z),o}static isFrontFacing(t,e,n,i){return Ri.subVectors(n,e),us.subVectors(t,e),Ri.cross(us).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),us.subVectors(this.a,this.b),Ri.cross(us).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;io.subVectors(i,n),so.subVectors(r,n),Qu.subVectors(t,n);let l=io.dot(Qu),c=so.dot(Qu);if(l<=0&&c<=0)return e.copy(n);ju.subVectors(t,i);let h=io.dot(ju),d=so.dot(ju);if(h>=0&&d<=h)return e.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(io,o);tf.subVectors(t,r);let u=io.dot(tf),m=so.dot(tf);if(m>=0&&u<=m)return e.copy(r);let _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(so,a);let p=h*m-u*d;if(p<=0&&d-h>=0&&u-m>=0)return wm.subVectors(r,i),a=(d-h)/(d-h+(u-m)),e.copy(i).addScaledVector(wm,a);let g=1/(p+_+f);return o=_*g,a=f*g,e.copy(n).addScaledVector(io,o).addScaledVector(so,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xs=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pi):Pi.fromBufferAttribute(r,o),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zl.copy(n.boundingBox)),zl.applyMatrix4(t.matrixWorld),this.union(zl)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ha),kl.subVectors(this.max,ha),ro.subVectors(t.a,ha),oo.subVectors(t.b,ha),ao.subVectors(t.c,ha),ks.subVectors(oo,ro),Vs.subVectors(ao,oo),vr.subVectors(ro,ao);let e=[0,-ks.z,ks.y,0,-Vs.z,Vs.y,0,-vr.z,vr.y,ks.z,0,-ks.x,Vs.z,0,-Vs.x,vr.z,0,-vr.x,-ks.y,ks.x,0,-Vs.y,Vs.x,0,-vr.y,vr.x,0];return!rf(e,ro,oo,ao,kl)||(e=[1,0,0,0,1,0,0,0,1],!rf(e,ro,oo,ao,kl))?!1:(Vl.crossVectors(ks,Vs),e=[Vl.x,Vl.y,Vl.z],rf(e,ro,oo,ao,kl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ds),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ds=[new $,new $,new $,new $,new $,new $,new $,new $],Pi=new $,zl=new Xs,ro=new $,oo=new $,ao=new $,ks=new $,Vs=new $,vr=new $,ha=new $,kl=new $,Vl=new $,yr=new $;function rf(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){yr.fromArray(s,r);let a=i.x*Math.abs(yr.x)+i.y*Math.abs(yr.y)+i.z*Math.abs(yr.z),l=t.dot(yr),c=e.dot(yr),h=n.dot(yr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qe=new $,Gl=new pe,Nx=0,Mi=class extends Xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mg,this.updateRanges=[],this.gpuType=Ni,this.version=0,this._normalizationScale=t!==void 0?Xf(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gl.fromBufferAttribute(this,e),Gl.applyMatrix3(t),this.setXY(e,Gl.x,Gl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Mx(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):bx(t,this.array)}};var Ma=class extends Mi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ba=class extends Mi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var bi=class extends Mi{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ux=new Xs,ua=new $,of=new $,br=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ux.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ua.subVectors(t,this.center);let e=ua.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ua,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(of.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ua.copy(t.center).add(of)),this.expandByPoint(ua.copy(t.center).sub(of))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ox=0,yi=new Fe,af=new hi,lo=new $,li=new Xs,fa=new Xs,hn=new $,Li=class s extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vx(t)?ba:Ma)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,n){return yi.makeTranslation(t,e,n),this.applyMatrix4(yi),this}scale(t,e,n){return yi.makeScale(t,e,n),this.applyMatrix4(yi),this}lookAt(t){return af.lookAt(t),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bi(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];li.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let n=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];fa.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(li.min,fa.min),li.expandByPoint(hn),hn.addVectors(li.max,fa.max),li.expandByPoint(hn)):(li.expandByPoint(fa.min),li.expandByPoint(fa.max))}li.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(lo.fromBufferAttribute(t,c),hn.add(lo)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Mi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new $,l[P]=new $;let h=new $,d=new $,f=new $,u=new pe,m=new pe,_=new pe,p=new $,g=new $;function v(P,C,D){c[P]=c[C]=c[D]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,C),f.fromBufferAttribute(n,D),u.fromBufferAttribute(r,P),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,D),d.sub(h),f.sub(h),m.sub(u),_.sub(u);let N=1/(m.x*_.y-_.x*m.y);isFinite(N)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(N),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(N),a[P].add(p),a[C].add(p),a[D].add(p),l[P].add(g),l[C].add(g),l[D].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,C=w.length;P<C;++P){let D=w[P],N=D.start,G=D.count;for(let I=N,B=N+G;I<B;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new $,T=new $,E=new $,x=new $;function S(P){E.fromBufferAttribute(i,P),x.copy(E);let C=a[P];y.copy(C),y.sub(E.multiplyScalar(E.dot(C))).normalize(),T.crossVectors(x,C);let N=T.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,N)}for(let P=0,C=n.count;P<C;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Mi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new $,r=new $,o=new $,a=new $,l=new $,c=new $,h=new $,d=new $;if(t)for(let f=0,u=t.count;f<u;f+=3){let m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[u++]}return new Mi(f,h,d)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var lf=new $,Fx=new $,Bx=new Xt,Ii=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=lf.subVectors(n,e).cross(Fx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(lf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bx.getNormalMatrix(t),i=this.coplanarPoint(lf).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},zx=0,qs=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=ka(),this.name="",this.type="Material",this.blending=bo,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sf,this.blendDst=Mf,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rc,this.stencilZFail=rc,this.stencilZPass=rc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new he().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ii().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ps=new $,cf=new $,Hl=new $,Wl=new $,Ta=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ps)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ps.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ps.copy(this.origin).addScaledVector(this.direction,e),ps.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){cf.copy(t).add(e).multiplyScalar(.5),Hl.copy(e).sub(t).normalize(),Wl.copy(this.origin).sub(cf);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Hl),a=Wl.dot(this.direction),l=-Wl.dot(Hl),c=Wl.lengthSq(),h=Math.abs(1-o*o),d,f,u,m;if(h>0)if(d=o*l-a,f=o*a-l,m=r*h,d>=0)if(f>=-m)if(f<=m){let _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(cf).addScaledVector(Hl,f),u}intersectSphere(t,e){if(t.radius<0)return null;ps.subVectors(t.center,this.origin);let n=ps.dot(this.direction),i=ps.dot(ps)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ps)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=n.x-o.x,v=n.y-o.y,w=n.z-o.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(h),x,S,P,C,D,N,G,I,B,H,O,J;if(y>=T&&y>=E?(P=l,N=d,B=m,J=g,l>=0?(x=c,S=h,C=f,D=u,G=_,I=p,H=v,O=w):(x=h,S=c,C=u,D=f,G=p,I=_,H=w,O=v)):T>=E?(P=c,N=f,B=_,J=v,c>=0?(x=h,S=l,C=u,D=d,G=p,I=m,H=w,O=g):(x=l,S=h,C=d,D=u,G=m,I=p,H=g,O=w)):(P=h,N=u,B=p,J=w,h>=0?(x=l,S=c,C=d,D=f,G=m,I=_,H=g,O=v):(x=c,S=l,C=f,D=d,G=_,I=m,H=v,O=g)),P===0)return null;let z=x/P,R=S/P,tt=1/P,yt=C-z*N,Nt=D-R*N,q=G-z*B,rt=I-R*B,ct=H-z*J,vt=O-R*J,ut=ct*rt-vt*q,Ct=yt*vt-Nt*ct,ce=q*Nt-rt*yt;if(i){if(ut<0||Ct<0||ce<0)return null}else if((ut<0||Ct<0||ce<0)&&(ut>0||Ct>0||ce>0))return null;let Et=ut+Ct+ce;if(Et===0)return null;let zt=tt*(ut*N+Ct*B+ce*J);return(Et>0?zt<0:zt>0)?null:this.at(zt/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xo=class extends qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ws,this.combine=bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Em=new Fe,Sr=new Ta,Xl=new br,Am=new $,ql=new $,Yl=new $,Zl=new $,hf=new $,Jl=new $,Cm=new $,$l=new $,Hn=class extends hi{constructor(t=new Li,e=new xo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Jl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(hf.fromBufferAttribute(d,t),o?Jl.addScaledVector(hf,h):Jl.addScaledVector(hf.sub(e),h))}e.add(Jl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xl.copy(n.boundingSphere),Xl.applyMatrix4(r),Sr.copy(t.ray).recast(t.near),!(Xl.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Xl,Am)===null||Sr.origin.distanceToSquared(Am)>(t.far-t.near)**2))&&(Em.copy(r).invert(),Sr.copy(t.ray).applyMatrix4(Em),!(n.boundingBox!==null&&Sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Sr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],v=Math.max(p.start,u.start),w=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,T=w;y<T;y+=3){let E=a.getX(y),x=a.getX(y+1),S=a.getX(y+2);i=Kl(this,g,t,n,c,h,d,E,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=a.getX(p),w=a.getX(p+1),y=a.getX(p+2);i=Kl(this,o,t,n,c,h,d,v,w,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],v=Math.max(p.start,u.start),w=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,T=w;y<T;y+=3){let E=y,x=y+1,S=y+2;i=Kl(this,g,t,n,c,h,d,E,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=p,w=p+1,y=p+2;i=Kl(this,o,t,n,c,h,d,v,w,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function kx(s,t,e,n,i,r,o,a){let l;if(t.side===Wn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===$s,a),l===null)return null;$l.copy(a),$l.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo($l);return c<e.near||c>e.far?null:{distance:c,point:$l.clone(),object:s}}function Kl(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ql),s.getVertexPosition(l,Yl),s.getVertexPosition(c,Zl);let h=kx(s,t,e,n,ql,Yl,Zl,Cm);if(h){let d=new $;Hs.getBarycoord(Cm,ql,Yl,Zl,d),i&&(h.uv=Hs.getInterpolatedAttribute(i,a,l,c,d,new pe)),r&&(h.uv1=Hs.getInterpolatedAttribute(r,a,l,c,d,new pe)),o&&(h.normal=Hs.getInterpolatedAttribute(o,a,l,c,d,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new $,materialIndex:0};Hs.getNormal(ql,Yl,Zl,f.normal),h.face=f,h.barycoord=d}return h}var yc=class extends Gn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=un,h=un,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mr=new br,Vx=new pe(.5,.5),Ql=new $,Tr=class{constructor(t=new Ii,e=new Ii,n=new Ii,i=new Ii,r=new Ii,o=new Ii){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Si,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],m=r[8],_=r[9],p=r[10],g=r[11],v=r[12],w=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-o,u-h,g-m,T-v).normalize(),i[1].setComponents(c+o,u+h,g+m,T+v).normalize(),i[2].setComponents(c+a,u+d,g+_,T+w).normalize(),i[3].setComponents(c-a,u-d,g-_,T-w).normalize(),n)i[4].setComponents(l,f,p,y).normalize(),i[5].setComponents(c-l,u-f,g-p,T-y).normalize();else if(i[4].setComponents(c-l,u-f,g-p,T-y).normalize(),e===Si)i[5].setComponents(c+l,u+f,g+p,T+y).normalize();else if(e===_a)i[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){Mr.center.set(0,0,0);let e=Vx.distanceTo(t.center);return Mr.radius=.7071067811865476+e,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ql.x=i.normal.x>0?t.max.x:t.min.x,Ql.y=i.normal.y>0?t.max.y:t.min.y,Ql.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Rm=new Fe,Sc=class s{constructor(){this.coordinateSystem=Si,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Rm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Tr),n[i].setFromProjectionMatrix(Rm,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Tr),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var vo=class extends qs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pm=new Fe,mf=new Ta,jl=new br,tc=new $,wa=class extends hi{constructor(t=new Li,e=new vo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jl.copy(n.boundingSphere),jl.applyMatrix4(i),jl.radius+=r,t.ray.intersectsSphere(jl)===!1)return;Pm.copy(i).invert(),mf.copy(t.ray).applyMatrix4(Pm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let m=f,_=u;m<_;m++){let p=c.getX(m);tc.fromBufferAttribute(d,p),Im(tc,p,l,i,t,e,this)}}else{let f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let m=f,_=u;m<_;m++)tc.fromBufferAttribute(d,m),Im(tc,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Im(s,t,e,n,i,r,o){let a=mf.distanceSqToPoint(s);if(a<e){let l=new $;mf.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ea=class extends Gn{constructor(t=[],e=Ar,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Aa=class extends Gn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xs=class extends Gn{constructor(t,e,n=Di,i,r,o,a=un,l=un,c,h=_s,d=1){if(h!==_s&&h!==ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new go(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ca=class extends xs{constructor(t,e=Di,n=Ar,i,r,o=un,a=un,l,c=_s){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ra=class extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},yo=class s extends Li{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(h,3)),this.setAttribute("uv",new bi(d,2));function m(_,p,g,v,w,y,T,E,x,S,P){let C=y/x,D=T/S,N=y/2,G=T/2,I=E/2,B=x+1,H=S+1,O=0,J=0,z=new $;for(let R=0;R<H;R++){let tt=R*D-G;for(let yt=0;yt<B;yt++){let Nt=yt*C-N;z[_]=Nt*v,z[p]=tt*w,z[g]=I,c.push(z.x,z.y,z.z),z[_]=0,z[p]=0,z[g]=E>0?1:-1,h.push(z.x,z.y,z.z),d.push(yt/x),d.push(1-R/S),O+=1}}for(let R=0;R<S;R++)for(let tt=0;tt<x;tt++){let yt=f+tt+B*R,Nt=f+tt+B*(R+1),q=f+(tt+1)+B*(R+1),rt=f+(tt+1)+B*R;l.push(yt,Nt,rt),l.push(Nt,q,rt),J+=6}a.addGroup(u,J,P),u+=J,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Yi=class s extends Li{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,u=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let v=g*f-o;for(let w=0;w<c;w++){let y=w*d-r;m.push(y,-v,0),_.push(0,0,1),p.push(w/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let w=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),E=v+1+c*g;u.push(w,y,E),u.push(y,T,E)}this.setIndex(u),this.setAttribute("position",new bi(m,3)),this.setAttribute("normal",new bi(_,3)),this.setAttribute("uv",new bi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};function Rr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Lm(i))i.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Lm(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Rn(s){let t={};for(let e=0;e<s.length;e++){let n=Rr(s[e]);for(let i in n)t[i]=n[i]}return t}function Lm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Gx(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function qf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Mg={clone:Rr,merge:Rn},Hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hx,this.fragmentShader=Wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=Gx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new he().setHex(i.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new $().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Fe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Mc=class extends Kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var bc=class extends qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Tc=class extends qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function co(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ec(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Ys=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wc=class extends Ys{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ff,endingEnd:ff}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case df:r=t,a=2*e-n;break;case pf:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case df:o=t,l=2*n-e;break;case pf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,w=(-1-u)*p+(1.5+u)*_+.5*m,y=u*p-u*_;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+v*o[c+T]+w*o[l+T]+y*o[d+T];return r}},Ec=class extends Ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Ac=class extends Ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Cc=class extends Ys{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),_=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*m;return r}let f=a*2,u=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=u*f+m*2,v=d[g],w=d[g+1],y=t*f+m*2,T=h[y],E=h[y+1],x=qx(n,e,v,T,i);r[m]=bg(x,_,w,E,p)}return r}};function bg(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Xx(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function qx(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=bg(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=Xx(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ui=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=co(e,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:co(t.times,Array),values:co(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),ec(t.settings)&&(n.settings={inTangents:co(t.settings.inTangents,Array),outTangents:co(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Cc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case pa:e=this.InterpolantFactoryMethodDiscrete;break;case mc:e=this.InterpolantFactoryMethodLinear;break;case sc:e=this.InterpolantFactoryMethodSmooth;break;case uf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return mc;case this.InterpolantFactoryMethodSmooth:return sc;case this.InterpolantFactoryMethodBezier:return uf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;ec(this.settings)&&(Dm(this.settings.inTangents,t),Dm(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;ec(this.settings)&&(Nm(this.settings.inTangents,t),Nm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ht("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&yx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===sc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[f+m]||_!==e[u+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,ec(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Dm(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Nm(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=mc;var Zs=class extends ui{constructor(t,e,n){super(t,e,n)}};Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=pa;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};Rc.prototype.ValueTypeName="color";var Pc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};Pc.prototype.ValueTypeName="number";var Ic=class extends Ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)qi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Pa=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Ic(this.times,this.values,this.getValueSize(),t)}};Pa.prototype.ValueTypeName="quaternion";Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var Js=class extends ui{constructor(t,e,n){super(t,e,n)}};Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=pa;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;var Lc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};Lc.prototype.ValueTypeName="vector";var Dc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tg=new Dc,Nc=class{constructor(t){this.manager=t!==void 0?t:Tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Nc.DEFAULT_MATERIAL_NAME="__DEFAULT";var nc=new $,ic=new qi,Hi=new $,Ia=class extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(nc,ic,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,Hi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(nc,ic,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gs=new $,Um=new pe,Om=new pe,kn=class extends Ia{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=gc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gc*2*Math.atan(Math.tan(Hu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gs.x,Gs.y).multiplyScalar(-t/Gs.z),Gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gs.x,Gs.y).multiplyScalar(-t/Gs.z)}getViewSize(t,e){return this.getViewBounds(t,Um,Om),e.subVectors(Om,Um)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Uc=class extends Ia{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ho=-90,uo=1,So=class extends hi{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new kn(ho,uo,t,e);i.layers=this.layers,this.add(i);let r=new kn(ho,uo,t,e);r.layers=this.layers,this.add(r);let o=new kn(ho,uo,t,e);o.layers=this.layers,this.add(o);let a=new kn(ho,uo,t,e);a.layers=this.layers,this.add(a);let l=new kn(ho,uo,t,e);l.layers=this.layers,this.add(l);let c=new kn(ho,uo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Oc=class extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Yf="\\[\\]\\.:\\/",Yx=new RegExp("["+Yf+"]","g"),Zf="[^"+Yf+"]",Zx="[^"+Yf.replace("\\.","")+"]",Jx=/((?:WC+[\/:])*)/.source.replace("WC",Zf),$x=/(WCOD+)?/.source.replace("WCOD",Zx),Kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zf),Qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zf),jx=new RegExp("^"+Jx+$x+Kx+Qx+"$"),tv=["material","materials","bones","map"],gf=class{constructor(t,e,n){let i=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(t){let e=jx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);tv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=gf;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var PT=new Float32Array(1);var td=class td{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};td.prototype.isMatrix2=!0;var _f=td;function Jf(s,t,e,n){let i=ev(n);switch(e){case Of:return s*t;case Bf:return s*t/i.components*i.byteLength;case Wc:return s*t/i.components*i.byteLength;case Ks:return s*t*2/i.components*i.byteLength;case Xc:return s*t*2/i.components*i.byteLength;case Ff:return s*t*3/i.components*i.byteLength;case Oi:return s*t*4/i.components*i.byteLength;case qc:return s*t*4/i.components*i.byteLength;case Na:case Ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Oa:case Fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zc:case $c:return Math.max(s,16)*Math.max(t,8)/4;case Yc:case Jc:return Math.max(s,8)*Math.max(t,8)/2;case Kc:case Qc:case th:case eh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jc:case Ba:case nh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case rh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case oh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ah:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case lh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ch:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case hh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case uh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case fh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case dh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ph:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case mh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case gh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case _h:case xh:case vh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case yh:case Sh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case za:case Mh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ev(s){switch(s){case fi:case Lf:return{byteLength:1,components:1};case Eo:case Df:case Ui:return{byteLength:2,components:1};case Gc:case Hc:return{byteLength:2,components:4};case Di:case Vc:case Ni:return{byteLength:4,components:1};case Nf:case Uf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function qg(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function iv(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],_=d[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let _=d[u];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var sv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rv=`#ifdef USE_ALPHAHASH
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
#endif`,ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hv=`#ifdef USE_AOMAP
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
#endif`,uv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fv=`#ifdef USE_BATCHING
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
#endif`,dv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_v=`#ifdef USE_IRIDESCENCE
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
#endif`,xv=`#ifdef USE_BUMPMAP
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Av=`#define PI 3.141592653589793
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
} // validated`,Cv=`vec3 transformedNormal = objectNormal;
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
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wv=`#ifdef USE_GRADIENTMAP
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
}`,Xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jv=`#ifdef USE_ENVMAP
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
#endif`,$v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ty=`PhysicalMaterial material;
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
#endif`,ey=`uniform sampler2D dfgLUT;
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
}`,ny=`
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
#endif`,iy=`#if defined( RE_IndirectDiffuse )
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ry=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dy=`#if defined( USE_POINTS_UV )
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
#endif`,py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,my=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
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
#endif`,xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
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
#endif`,yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,My=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ey=`#ifdef USE_NORMALMAP
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
#endif`,Ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ry=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Oy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gy=`float getShadowMask() {
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
}`,Hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
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
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,Yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$y=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ky=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#ifdef USE_TRANSMISSION
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sS=`uniform sampler2D t2D;
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
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`uniform float backgroundBlurriness;
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
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`#include <common>
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
}`,hS=`#if DEPTH_PACKING == 3200
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
}`,uS=`#define DISTANCE
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
}`,fS=`#define DISTANCE
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`uniform float scale;
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
}`,gS=`uniform vec3 diffuse;
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
}`,_S=`#include <common>
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
}`,xS=`uniform vec3 diffuse;
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
}`,vS=`#define LAMBERT
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
}`,yS=`#define LAMBERT
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
}`,SS=`#define MATCAP
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
}`,MS=`#define MATCAP
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
}`,bS=`#define NORMAL
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
}`,TS=`#define NORMAL
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
}`,wS=`#define PHONG
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
}`,ES=`#define PHONG
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
}`,AS=`#define STANDARD
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
}`,CS=`#define STANDARD
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
}`,RS=`#define TOON
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
}`,PS=`#define TOON
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
}`,IS=`uniform float size;
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
}`,LS=`uniform vec3 diffuse;
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
}`,DS=`#include <common>
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
}`,NS=`uniform vec3 color;
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
}`,US=`uniform float rotation;
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
}`,OS=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:sv,alphahash_pars_fragment:rv,alphamap_fragment:ov,alphamap_pars_fragment:av,alphatest_fragment:lv,alphatest_pars_fragment:cv,aomap_fragment:hv,aomap_pars_fragment:uv,batching_pars_vertex:fv,batching_vertex:dv,begin_vertex:pv,beginnormal_vertex:mv,bsdfs:gv,iridescence_fragment:_v,bumpmap_pars_fragment:xv,clipping_planes_fragment:vv,clipping_planes_pars_fragment:yv,clipping_planes_pars_vertex:Sv,clipping_planes_vertex:Mv,color_fragment:bv,color_pars_fragment:Tv,color_pars_vertex:wv,color_vertex:Ev,common:Av,defaultnormal_vertex:Cv,displacementmap_pars_vertex:Rv,displacementmap_vertex:Pv,emissivemap_fragment:Iv,emissivemap_pars_fragment:Lv,colorspace_fragment:Dv,colorspace_pars_fragment:Nv,envmap_fragment:Uv,envmap_common_pars_fragment:Ov,envmap_pars_fragment:Fv,envmap_pars_vertex:Bv,envmap_physical_pars_fragment:Jv,envmap_vertex:zv,fog_vertex:kv,fog_pars_vertex:Vv,fog_fragment:Gv,fog_pars_fragment:Hv,gradientmap_pars_fragment:Wv,lightmap_pars_fragment:Xv,lights_lambert_fragment:qv,lights_lambert_pars_fragment:Yv,lights_pars_begin:Zv,lights_toon_fragment:$v,lights_toon_pars_fragment:Kv,lights_phong_fragment:Qv,lights_phong_pars_fragment:jv,lights_physical_fragment:ty,lights_physical_pars_fragment:ey,lights_fragment_begin:ny,lights_fragment_maps:iy,lights_fragment_end:sy,lightprobes_pars_fragment:ry,logdepthbuf_fragment:oy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:ly,logdepthbuf_vertex:cy,map_fragment:hy,map_pars_fragment:uy,map_particle_fragment:fy,map_particle_pars_fragment:dy,metalnessmap_fragment:py,metalnessmap_pars_fragment:my,morphinstance_vertex:gy,morphcolor_vertex:_y,morphnormal_vertex:xy,morphtarget_pars_vertex:vy,morphtarget_vertex:yy,normal_fragment_begin:Sy,normal_fragment_maps:My,normal_pars_fragment:by,normal_pars_vertex:Ty,normal_vertex:wy,normalmap_pars_fragment:Ey,clearcoat_normal_fragment_begin:Ay,clearcoat_normal_fragment_maps:Cy,clearcoat_pars_fragment:Ry,iridescence_pars_fragment:Py,opaque_fragment:Iy,packing:Ly,premultiplied_alpha_fragment:Dy,project_vertex:Ny,dithering_fragment:Uy,dithering_pars_fragment:Oy,roughnessmap_fragment:Fy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:zy,shadowmap_pars_vertex:ky,shadowmap_vertex:Vy,shadowmask_pars_fragment:Gy,skinbase_vertex:Hy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:qy,specularmap_fragment:Yy,specularmap_pars_fragment:Zy,tonemapping_fragment:Jy,tonemapping_pars_fragment:$y,transmission_fragment:Ky,transmission_pars_fragment:Qy,uv_pars_fragment:jy,uv_pars_vertex:tS,uv_vertex:eS,worldpos_vertex:nS,background_vert:iS,background_frag:sS,backgroundCube_vert:rS,backgroundCube_frag:oS,cube_vert:aS,cube_frag:lS,depth_vert:cS,depth_frag:hS,distance_vert:uS,distance_frag:fS,equirect_vert:dS,equirect_frag:pS,linedashed_vert:mS,linedashed_frag:gS,meshbasic_vert:_S,meshbasic_frag:xS,meshlambert_vert:vS,meshlambert_frag:yS,meshmatcap_vert:SS,meshmatcap_frag:MS,meshnormal_vert:bS,meshnormal_frag:TS,meshphong_vert:wS,meshphong_frag:ES,meshphysical_vert:AS,meshphysical_frag:CS,meshtoon_vert:RS,meshtoon_frag:PS,points_vert:IS,points_frag:LS,shadow_vert:DS,shadow_frag:NS,sprite_vert:US,sprite_frag:OS},bt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},$i={basic:{uniforms:Rn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Rn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Rn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Rn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Rn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new he(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Rn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Rn([bt.points,bt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Rn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Rn([bt.common,bt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Rn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Rn([bt.sprite,bt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Rn([bt.common,bt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Rn([bt.lights,bt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};$i.physical={uniforms:Rn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var bh={r:0,b:0,g:0},FS=new Fe,Yg=new Xt;Yg.set(-1,0,0,0,1,0,0,0,1);function BS(s,t,e,n,i,r){let o=new he(0),a=i===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let y=v.backgroundBlurriness>0;w=t.get(w,y)}return w}function m(v){let w=!1,y=u(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),w=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,w){let y=u(w);y&&y.isCubeTexture?(c===void 0&&(c=new Hn(new yo(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Rr($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(FS.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yg),c.material.toneMapped=se.getTransfer(y.colorSpace)!==ve,(h!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Hn(new Yi(2,2),new Kn({name:"BackgroundMaterial",uniforms:Rr($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=se.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,w){v.getRGB(bh,qf(s)),e.buffers.color.setClear(bh.r,bh.g,bh.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:_,dispose:g}}function zS(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(D,N,G,I,B){let H=!1,O=d(D,I,G,N);r!==O&&(r=O,c(r.object)),H=u(D,I,G,B),H&&m(D,I,G,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(D,N,G,I),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,N,G,I){let B=I.wireframe===!0,H=n[N.id];H===void 0&&(H={},n[N.id]=H);let O=D.isInstancedMesh===!0?D.id:0,J=H[O];J===void 0&&(J={},H[O]=J);let z=J[G.id];z===void 0&&(z={},J[G.id]=z);let R=z[B];return R===void 0&&(R=f(l()),z[B]=R),R}function f(D){let N=[],G=[],I=[];for(let B=0;B<e;B++)N[B]=0,G[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:I,object:D,attributes:{},index:null}}function u(D,N,G,I){let B=r.attributes,H=N.attributes,O=0,J=G.getAttributes();for(let z in J)if(J[z].location>=0){let tt=B[z],yt=H[z];if(yt===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),tt===void 0||tt.attribute!==yt||yt&&tt.data!==yt.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function m(D,N,G,I){let B={},H=N.attributes,O=0,J=G.getAttributes();for(let z in J)if(J[z].location>=0){let tt=H[z];tt===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));let yt={};yt.attribute=tt,tt&&tt.data&&(yt.data=tt.data),B[z]=yt,O++}r.attributes=B,r.attributesNum=O,r.index=I}function _(){let D=r.newAttributes;for(let N=0,G=D.length;N<G;N++)D[N]=0}function p(D){g(D,0)}function g(D,N){let G=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;G[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),B[D]!==N&&(s.vertexAttribDivisor(D,N),B[D]=N)}function v(){let D=r.newAttributes,N=r.enabledAttributes;for(let G=0,I=N.length;G<I;G++)N[G]!==D[G]&&(s.disableVertexAttribArray(G),N[G]=0)}function w(D,N,G,I,B,H,O){O===!0?s.vertexAttribIPointer(D,N,G,B,H):s.vertexAttribPointer(D,N,G,I,B,H)}function y(D,N,G,I){_();let B=I.attributes,H=G.getAttributes(),O=N.defaultAttributeValues;for(let J in H){let z=H[J];if(z.location>=0){let R=B[J];if(R===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let tt=R.normalized,yt=R.itemSize,Nt=t.get(R);if(Nt===void 0)continue;let q=Nt.buffer,rt=Nt.type,ct=Nt.bytesPerElement,vt=rt===s.INT||rt===s.UNSIGNED_INT||R.gpuType===Vc;if(R.isInterleavedBufferAttribute){let ut=R.data,Ct=ut.isInterleavedBuffer===!0?ut.stride:ut.itemSize,ce=R.offset;if(ut.isInstancedInterleavedBuffer||ut.isInstancedBufferAttribute){for(let Et=0;Et<z.locationSize;Et++)g(z.location+Et,ut.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Et=0;Et<z.locationSize;Et++)p(z.location+Et);s.bindBuffer(s.ARRAY_BUFFER,q);for(let Et=0;Et<z.locationSize;Et++)w(z.location+Et,yt/z.locationSize,rt,tt,Ct*ct,(ce+yt/z.locationSize*Et)*ct,vt)}else{if(R.isInstancedBufferAttribute){for(let ut=0;ut<z.locationSize;ut++)g(z.location+ut,R.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ut=0;ut<z.locationSize;ut++)p(z.location+ut);s.bindBuffer(s.ARRAY_BUFFER,q);for(let ut=0;ut<z.locationSize;ut++)w(z.location+ut,yt/z.locationSize,rt,tt,yt*ct,yt/z.locationSize*ut*ct,vt)}}else if(O!==void 0){let tt=O[J];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(z.location,tt);break;case 3:s.vertexAttrib3fv(z.location,tt);break;case 4:s.vertexAttrib4fv(z.location,tt);break;default:s.vertexAttrib1fv(z.location,tt)}}}}v()}function T(){P();for(let D in n){let N=n[D];for(let G in N){let I=N[G];for(let B in I){let H=I[B];for(let O in H)h(H[O].object),delete H[O];delete I[B]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let G in N){let I=N[G];for(let B in I){let H=I[B];for(let O in H)h(H[O].object),delete H[O];delete I[B]}}delete n[D.id]}function x(D){for(let N in n){let G=n[N];for(let I in G){let B=G[I];if(B[D.id]===void 0)continue;let H=B[D.id];for(let O in H)h(H[O].object),delete H[O];delete B[D.id]}}}function S(D){for(let N in n){let G=n[N],I=D.isInstancedMesh===!0?D.id:0,B=G[I];if(B!==void 0){for(let H in B){let O=B[H];for(let J in O)h(O[J].object),delete O[J];delete B[H]}delete G[I],Object.keys(G).length===0&&delete n[N]}}}function P(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function kS(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function VS(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Oi&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==fi&&x!==Ni&&!S&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:T,samples:E}}function GS(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Ii,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,w=v*4,y=g.clippingState||null;l.value=y,y=h(m,f,w,u);for(let T=0;T!==w;++T)y[T]=e[T];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=u+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let w=0,y=u;w!==_;++w,y+=4)o.copy(d[w]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Ha=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ea(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new yo(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:wr});r.uniforms.tEquirect.value=e;let o=new Hn(i,r),a=e.minFilter;return e.minFilter===vs&&(e.minFilter=Vn),new So(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},wg=256,HS=3,WS=20,Zg=256,Jg=16,XS=3,qS=new $,YS=new he,wh=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new So(1,10,null),this._boxMesh=new Hn(new yo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=qS}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(YS));let p=new So(n,i,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ag(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(wg,yg(t))}_fromTexture(t,e){t.mapping===Ar||t.mapping===wo?this._setSize(t.image.length===0?wg:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Eg(t,!1,!1),n=Math.log2(t)-HS;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Eg(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ar||t.mapping===wo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cg()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ag()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ZS(),this._integrationMaterial=JS());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Jg);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-XS)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Zg*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=$S());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function Eg(s,t,e){return new Ha(s,{minFilter:vs,generateMipmaps:t,type:Ui,colorSpace:ma,depthBuffer:e})}function Wa(s,t,e){return new Kn({name:s,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:Wn,blending:wr,depthTest:!1,depthWrite:!1})}function ZS(){return Wa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Zg}u

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
	`)}function JS(){return Wa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Jg}},`

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
	`)}function $S(){return Wa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${WS}
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
	`)}function Ag(){return Wa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Cg(){return Wa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function KS(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Bc||u===zc)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new Ha(m.height);return _.fromEquirectangularTexture(s,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,m=u===Bc||u===zc,_=u===Ar||u===wo;if(m||_){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new wh(s)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new wh(s)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,u){return u===Bc?f.mapping=Ar:u===zc&&(f.mapping=wo),f}function l(f){let u=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&u++;return u===m}function c(f){let u=f.target;u.removeEventListener("dispose",c);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function QS(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&da("WebGLRenderer: "+n+" extension not supported."),i}}}function jS(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let _=r.get(m);_&&(t.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)t.update(_[p],s.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,w=p.count>=65535?ba:Ma,y=new w(Math.ceil(v/3)*6,1),T=y.array;if(_!==null){let x=_.array;g=_.version;for(let S=0,P=0;S<v;S+=3){let C=x[S+0],D=x[S+1],N=x[S+2];T[P++]=C,T[P++]=D,T[P++]=D,T[P++]=N,T[P++]=N,T[P++]=C}}else{g=p.version;for(let x=0,S=0;x<v;x+=3){let P=x+0,C=x+1,D=x+2;T[S++]=P,T[S++]=C,T[S++]=C,T[S++]=D,T[S++]=D,T[S++]=P}}y.version=g;let E=r.get(m);E&&t.remove(E),r.set(m,y)}function f(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return r.get(m)}function u(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function tM(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let _=0;for(let p=0;p<u;p++)_+=f[p];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function eM(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function nM(s,t,e){let n=new WeakMap,i=new Be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;u===!0&&(w=1),m===!0&&(w=2),_===!0&&(w=3);let y=a.attributes.position.count*w,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*d),x=new va(E,y,T,d);x.type=Ni,x.needsUpdate=!0;let S=w*4;for(let C=0;C<d;C++){let D=p[C],N=g[C],G=v[C],I=y*T*4*C;for(let B=0;B<D.count;B++){let H=B*S;u===!0&&(i.fromBufferAttribute(D,B),E[I+H+0]=i.x,E[I+H+1]=i.y,E[I+H+2]=i.z,E[I+H+3]=0),m===!0&&(i.fromBufferAttribute(N,B),E[I+H+4]=i.x,E[I+H+5]=i.y,E[I+H+6]=i.z,E[I+H+7]=0),_===!0&&(i.fromBufferAttribute(G,B),E[I+H+8]=i.x,E[I+H+9]=i.y,E[I+H+10]=i.z,E[I+H+11]=G.itemSize===4?i.w:1)}}f={count:d,texture:x,size:new pe(y,T)},n.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let m=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function iM(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var sM={[Tf]:"LINEAR_TONE_MAPPING",[wf]:"REINHARD_TONE_MAPPING",[Ef]:"CINEON_TONE_MAPPING",[Af]:"ACES_FILMIC_TONE_MAPPING",[Rf]:"AGX_TONE_MAPPING",[Pf]:"NEUTRAL_TONE_MAPPING",[Cf]:"CUSTOM_TONE_MAPPING"};function rM(s,t,e,n,i,r){let o=new ci(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Li;h.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new bi([0,2,0,0,2,0],2));let d=new Mc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Hn(h,d),u=new Uc(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,v=null,w=[],y=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),l!==null&&l.setSize(T,E);for(let x=0;x<w.length;x++){let S=w[x];S.setSize&&S.setSize(T,E)}},this.setEffects=function(T){w=T,y=w.length>0&&w[0].isRenderPass===!0;let E=o.width,x=o.height;w.length>0&&a===null&&(a=new ci(E,x,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new ci(E,x,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&w.some(P=>P.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new xs(E,x),r===!0&&(c.format=ys,c.type=Cr)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let P=0;P<w.length;P++){let C=w[P];C.setSize&&C.setSize(E,x),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,E){if(p||T.toneMapping===Zi&&w.length===0)return!1;if(v=E,E!==null){let x=E.width,S=E.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return y===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=Zi,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=g,p=!0;let x=o,S=a;for(let P=0;P<w.length;P++){let C=w[P];C.enabled!==!1&&(C.render(T,S,x,E),C.needsSwap!==!1&&(x=S,S=S===a?l:a))}if(m!==T.outputColorSpace||_!==T.toneMapping){m=T.outputColorSpace,_=T.toneMapping,d.defines={},se.getTransfer(m)===ve&&(d.defines.SRGB_TRANSFER="");let P=sM[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(f,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var $g=new Gn,Kg=new xs(1,1),Qg=new Ca(1),jg=new va,t_=new vc,e_=new Ea,Rg=[],Pg=[],Ig=new Float32Array(16),Lg=new Float32Array(9),Dg=new Float32Array(4);function Co(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Rg[i];if(r===void 0&&(r=new Float32Array(i),Rg[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function rn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function on(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ah(s,t){let e=Pg[t];e===void 0&&(e=new Int32Array(t),Pg[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function oM(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function aM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2fv(this.addr,t),on(e,t)}}function lM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;s.uniform3fv(this.addr,t),on(e,t)}}function cM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4fv(this.addr,t),on(e,t)}}function hM(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;Dg.set(n),s.uniformMatrix2fv(this.addr,!1,Dg),on(e,n)}}function uM(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;Lg.set(n),s.uniformMatrix3fv(this.addr,!1,Lg),on(e,n)}}function fM(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;Ig.set(n),s.uniformMatrix4fv(this.addr,!1,Ig),on(e,n)}}function dM(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function pM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2iv(this.addr,t),on(e,t)}}function mM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;s.uniform3iv(this.addr,t),on(e,t)}}function gM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4iv(this.addr,t),on(e,t)}}function _M(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function xM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2uiv(this.addr,t),on(e,t)}}function vM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;s.uniform3uiv(this.addr,t),on(e,t)}}function yM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4uiv(this.addr,t),on(e,t)}}function Ch(s){return s.version===0&&(s.compareFunction=Gf,s.needsUpdate=!0),s}function SM(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Ch(Kg):r=$g,e.setTexture2D(t||r,i)}function MM(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||t_,i)}function bM(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ch(Qg):r=e_,e.setTextureCube(t||r,i)}function TM(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||jg,i)}function wM(s){switch(s){case 5126:return oM;case 35664:return aM;case 35665:return lM;case 35666:return cM;case 35674:return hM;case 35675:return uM;case 35676:return fM;case 5124:case 35670:return dM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return _M;case 36294:return xM;case 36295:return vM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return TM}}function EM(s,t){s.uniform1fv(this.addr,t)}function AM(s,t){let e=Co(t,this.size,2);s.uniform2fv(this.addr,e)}function CM(s,t){let e=Co(t,this.size,3);s.uniform3fv(this.addr,e)}function RM(s,t){let e=Co(t,this.size,4);s.uniform4fv(this.addr,e)}function PM(s,t){let e=Co(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function IM(s,t){let e=Co(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function LM(s,t){let e=Co(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function DM(s,t){s.uniform1iv(this.addr,t)}function NM(s,t){s.uniform2iv(this.addr,t)}function UM(s,t){s.uniform3iv(this.addr,t)}function OM(s,t){s.uniform4iv(this.addr,t)}function FM(s,t){s.uniform1uiv(this.addr,t)}function BM(s,t){s.uniform2uiv(this.addr,t)}function zM(s,t){s.uniform3uiv(this.addr,t)}function kM(s,t){s.uniform4uiv(this.addr,t)}function VM(s,t,e){let n=this.cache,i=t.length,r=Ah(e,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ch(Kg):o=$g;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function GM(s,t,e){let n=this.cache,i=t.length,r=Ah(e,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||t_,r[o])}function HM(s,t,e){let n=this.cache,i=t.length,r=Ah(e,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Ch(Qg):o=e_;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function WM(s,t,e){let n=this.cache,i=t.length,r=Ah(e,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||jg,r[o])}function XM(s){switch(s){case 5126:return EM;case 35664:return AM;case 35665:return CM;case 35666:return RM;case 35674:return PM;case 35675:return IM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return NM;case 35668:case 35672:return UM;case 35669:case 35673:return OM;case 5125:return FM;case 36294:return BM;case 36295:return zM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return WM}}var id=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wM(e.type)}},sd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=XM(e.type)}},rd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},ed=/(\w+)(\])?(\[|\.)?/g;function Ng(s,t){s.seq.push(t),s.map[t.id]=t}function qM(s,t,e){let n=s.name,i=n.length;for(ed.lastIndex=0;;){let r=ed.exec(n),o=ed.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ng(e,c===void 0?new id(a,s,t):new sd(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new rd(a),Ng(e,d)),e=d}}}var Ao=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);qM(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Ug(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var YM=37297,ZM=0;function JM(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Og=new Xt;function $M(s){se._getMatrix(Og,se.workingColorSpace,s);let t=`mat3( ${Og.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case ga:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Fg(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+JM(s.getShaderSource(t),a)}else return r}function KM(s,t){let e=$M(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var QM={[Tf]:"Linear",[wf]:"Reinhard",[Ef]:"Cineon",[Af]:"ACESFilmic",[Rf]:"AgX",[Pf]:"Neutral",[Cf]:"Custom"};function jM(s,t){let e=QM[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Th=new $;function tb(){se.getLuminanceCoefficients(Th);let s=Th.x.toFixed(4),t=Th.y.toFixed(4),e=Th.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function nb(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ib(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ga(s){return s!==""}function Bg(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function zg(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(s){return s.replace(sb,rb)}function rb(s,t){let e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return od(e)}var ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kg(s){return s.replace(ob,ab)}function ab(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vg(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var lb={[La]:"SHADOWMAP_TYPE_PCF",[Mo]:"SHADOWMAP_TYPE_VSM"};function cb(s){return lb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hb={[wo]:"ENVMAP_MODE_REFRACTION"};function ub(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":hb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fb={[bf]:"ENVMAP_BLENDING_MULTIPLY",[sg]:"ENVMAP_BLENDING_MIX",[rg]:"ENVMAP_BLENDING_ADD"};function db(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":fb[s.combine]||"ENVMAP_BLENDING_NONE"}function pb(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=cb(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ub(e),d=db(e),f=eb(e),u=nb(r),m=i.createProgram(),_,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ga).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ga).join(`
`),p.length>0&&(p+=`
`)):(_=[Vg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),p=[Vg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?$t.tonemapping_pars_fragment:"",e.toneMapping!==Zi?jM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,KM("linearToOutputTexel",e.outputColorSpace),tb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ga).join(`
`)),o=od(o),o=Bg(o,e),o=zg(o,e),a=od(a),a=Bg(a,e),a=zg(a,e),o=kg(o),a=kg(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+_+o,w=g+p+a,y=Ug(i,i.VERTEX_SHADER,v),T=Ug(i,i.FRAGMENT_SHADER,w);i.attachShader(m,y),i.attachShader(m,T),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(C){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(m)||"",N=i.getShaderInfoLog(y)||"",G=i.getShaderInfoLog(T)||"",I=D.trim(),B=N.trim(),H=G.trim(),O=!0,J=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,y,T);else{let z=Fg(i,y,"vertex"),R=Fg(i,T,"fragment");Ht("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+z+`
`+R)}else I!==""?kt("WebGLProgram: Program Info Log:",I):(B===""||H==="")&&(J=!1);J&&(C.diagnostics={runnable:O,programLog:I,vertexShader:{log:B,prefix:_},fragmentShader:{log:H,prefix:p}})}i.deleteShader(y),i.deleteShader(T),x=new Ao(i,m),S=ib(i,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,YM)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ZM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=T,this}var mb=0,ad=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ld(t),e.set(t,n)),n}},ld=class{constructor(t){this.id=mb++,this.code=t,this.usedTimes=0}};function gb(s){return s===Ks||s===Ba||s===za}function _b(s,t,e,n,i,r){let o=new ya,a=new ad,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,P,C,D,N){let G=C.fog,I=D.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=t.get(x.envMap||B,H),J=f[x.type],z=n.precision;x.precision!==null&&(z=n.getMaxPrecision(x.precision),z!==x.precision&&kt("WebGLProgram.getParameters:",x.precision,"not supported, using",z,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,tt=R!==void 0?R.length:0,yt=0;I.morphAttributes.position!==void 0&&(yt=1),I.morphAttributes.normal!==void 0&&(yt=2),I.morphAttributes.color!==void 0&&(yt=3);let Nt,q,rt,ct;if(J){let nt=$i[J];Nt=nt.vertexShader,q=nt.fragmentShader}else{Nt=x.vertexShader,q=x.fragmentShader;let nt=a.getVertexShaderStage(x),Tt=a.getFragmentShaderStage(x);a.update(x,nt,Tt),rt=nt.id,ct=Tt.id}let vt=s.getRenderTarget(),ut=s.state.buffers.depth.getReversed(),Ct=D.isInstancedMesh===!0,ce=D.isBatchedMesh===!0,Et=!!x.map,zt=!!x.matcap,It=!!O,Ot=It&&O.isPMREMTexture===!0,re=!!x.aoMap,ee=!!x.lightMap,Y=!!x.bumpMap&&x.wireframe===!1,Kt=!!x.normalMap,Re=!!x.displacementMap,Me=!!x.emissiveMap,oe=!!x.metalnessMap,ze=!!x.roughnessMap,Xe=x.anisotropy>0,F=x.clearcoat>0,me=x.diffuseRoughness>0,ue=x.dispersion>0,Wt=x.retroreflectivity>0,dt=x.iridescence>0,de=x.sheen>0,Ut=x.transmission>0,Bt=Xe&&!!x.anisotropyMap,A=F&&!!x.clearcoatMap,M=F&&!!x.clearcoatNormalMap,V=F&&!!x.clearcoatRoughnessMap,ot=me&&!!x.diffuseRoughnessMap,it=dt&&!!x.iridescenceMap,ft=dt&&!!x.iridescenceThicknessMap,_t=de&&!!x.sheenColorMap,W=de&&!!x.sheenRoughnessMap,j=!!x.specularMap,ht=!!x.specularColorMap,L=!!x.specularIntensityMap,Q=Ut&&!!x.transmissionMap,K=Ut&&!!x.thicknessMap,pt=!!x.gradientMap,lt=!!x.alphaMap,mt=x.alphaTest>0,at=!!x.alphaHash,gt=!!x.extensions,st=Zi;x.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(st=s.toneMapping);let et=Ot?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,xt={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:Nt,fragmentShader:q,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:z,batching:ce,batchingColor:ce&&D._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&D.instanceColor!==null,instancingMorph:Ct&&D.morphTexture!==null,outputColorSpace:vt===null?s.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Et,matcap:zt,envMap:It,envMapMode:It&&O.mapping,envMapPMREM:Ot,envMapMaxLod:Ot?et.length-1:null,envMapSize:Ot?et[0].width:null,aoMap:re,lightMap:ee,bumpMap:Y,normalMap:Kt,displacementMap:Re,emissiveMap:Me,normalMapObjectSpace:Kt&&x.normalMapType===lg,normalMapTangentSpace:Kt&&x.normalMapType===zf,packedNormalMap:Kt&&x.normalMapType===zf&&gb(x.normalMap.format),metalnessMap:oe,roughnessMap:ze,anisotropy:Xe,anisotropyMap:Bt,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:V,diffuseRoughness:me,diffuseRoughnessMap:ot,dispersion:ue,retroreflection:Wt,iridescence:dt,iridescenceMap:it,iridescenceThicknessMap:ft,sheen:de,sheenColorMap:_t,sheenRoughnessMap:W,specularMap:j,specularColorMap:ht,specularIntensityMap:L,transmission:Ut,transmissionMap:Q,thicknessMap:K,gradientMap:pt,opaque:x.transparent===!1&&x.blending===bo&&x.alphaToCoverage===!1,alphaMap:lt,alphaTest:mt,alphaHash:at,combine:x.combine,mapUv:Et&&u(x.map.channel),aoMapUv:re&&u(x.aoMap.channel),lightMapUv:ee&&u(x.lightMap.channel),bumpMapUv:Y&&u(x.bumpMap.channel),normalMapUv:Kt&&u(x.normalMap.channel),displacementMapUv:Re&&u(x.displacementMap.channel),emissiveMapUv:Me&&u(x.emissiveMap.channel),metalnessMapUv:oe&&u(x.metalnessMap.channel),roughnessMapUv:ze&&u(x.roughnessMap.channel),anisotropyMapUv:Bt&&u(x.anisotropyMap.channel),clearcoatMapUv:A&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:it&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:W&&u(x.sheenRoughnessMap.channel),specularMapUv:j&&u(x.specularMap.channel),specularColorMapUv:ht&&u(x.specularColorMap.channel),specularIntensityMapUv:L&&u(x.specularIntensityMap.channel),transmissionMapUv:Q&&u(x.transmissionMap.channel),thicknessMapUv:K&&u(x.thicknessMap.channel),alphaMapUv:lt&&u(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Kt||Xe),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Et||lt),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Kt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:yt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.filter(nt=>nt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:Et&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===ve,decodeVideoTextureEmissive:Me&&x.emissiveMap.isVideoTexture===!0&&se.getTransfer(x.emissiveMap.colorSpace)===ve,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ti,flipSided:x.side===Wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:gt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&x.extensions.multiDraw===!0||ce)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(S,x),g(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let S=f[x.type],P;if(S){let C=$i[S];P=Mg.clone(C.uniforms)}else P=x.uniforms;return P}function w(x,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new pb(s,S,x,i),c.push(P),h.set(S,P)),P}function y(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:E}}function xb(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function vb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Gg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Hg(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,m,_,p,g){let v=s[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},s[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=m,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=g),t++,v}function l(f,u,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);let w=a(f,u,m,_,p,g);m.transmission>0?n.push(w):m.transparent===!0?i.push(w):e.push(w)}function c(f,u,m,_,p,g){let v=a(f,u,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function h(f,u){e.length>1&&e.sort(f||vb),n.length>1&&n.sort(u||Gg),i.length>1&&i.sort(u||Gg)}function d(){for(let f=t,u=s.length;f<u;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function yb(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Hg,s.set(n,[o])):i>=r.length?(o=new Hg,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Sb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new he};break;case"SpotLight":e={position:new $,direction:new $,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new $,halfWidth:new $,halfHeight:new $};break}return s[t.id]=e,e}}}function Mb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var bb=0;function Tb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function wb(s){let t=new Sb,e=Mb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let i=new $,r=new Fe,o=new Fe;function a(c){let h=0,d=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let u=0,m=0,_=0,p=0,g=0,v=0,w=0,y=0,T=0,E=0,x=0,S=0,P=0,C=0;c.sort(Tb);for(let N=0,G=c.length;N<G;N++){let I=c[N],B=I.color,H=I.intensity,O=I.distance,J=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ks?J=I.shadow.map.texture:J=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*H,d+=B.g*H,f+=B.b*H;else if(I.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],H);C++}else if(I.isSunLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[m]=tt,n.sunShadowMap[m]=J;let yt=R.getViewportCount();for(let Nt=0;Nt<yt;Nt++)n.sunShadowMatrix[_+Nt]=R.getMatrix(Nt),n.sunShadowCascade[_+Nt]=R._cascadeData[Nt];_+=yt,m++}n.sun[u]=z,u++}else if(I.isDirectionalLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize=R.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=z,p++}else if(I.isSpotLight){let z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(B).multiplyScalar(H),z.distance=O,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,n.spot[v]=z;let R=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,R.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=R.matrix,I.castShadow){let tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize=R.mapSize,n.spotShadow[v]=tt,n.spotShadowMap[v]=J,x++}v++}else if(I.isRectAreaLight){let z=t.get(I);z.color.copy(B).multiplyScalar(H),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=z,w++}else if(I.isPointLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){let R=I.shadow,tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize=R.mapSize,tt.shadowCameraNear=R.camera.near,tt.shadowCameraFar=R.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=z,g++}else if(I.isHemisphereLight){let z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(H),z.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[y]=z,y++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let D=n.hash;(D.sunLength!==u||D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==w||D.hemiLength!==y||D.numSunShadows!==m||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==x||D.numSpotMaps!==S||D.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=p,n.spot.length=v,n.rectArea.length=w,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,D.sunLength=u,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=w,D.hemiLength=y,D.numSunShadows=m,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=x,D.numSpotMaps=S,D.numLightProbes=C,n.version=bb++)}function l(c,h){let d=0,f=0,u=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let y=c[v];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),f++}else if(y.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function Wg(s){let t=new wb(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Eb(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Wg(s),t.set(i,[a])):r>=o.length?(a=new Wg(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cb=`uniform sampler2D shadow_pass;
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
}`,Rb=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Pb=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Xg=new Fe,Va=new $,nd=new $;function Ib(s,t,e){let n=new Tr,i=new pe,r=new pe,o=new Be,a=new bc,l=new Tc,c={},h=e.maxTextureSize,d={[$s]:Wn,[Wn]:$s,[Ti]:Ti},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Ab,fragmentShader:Cb}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new Li;m.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Hn(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let g=this.type;this.render=function(E,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===zm&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=La);let P=s.getRenderTarget(),C=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),N=s.state;N.setBlending(wr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=g!==this.type;G&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=E.length;I<B;I++){let H=E[I],O=H.shadow;if(O===void 0){kt("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let J=O.getFrameExtents();i.multiply(J),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,O.mapSize.y=r.y));let z=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=z,O.map===null||G===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Mo){if(H.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ci(i.x,i.y,{format:Ks,type:Ui,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new xs(i.x,i.y,Ni),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=_s,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un}else H.isPointLight?(O.map=new Ha(i.x),O.map.depthTexture=new Ca(i.x,Di)):(O.map=new ci(i.x,i.y),O.map.depthTexture=new xs(i.x,i.y,Di)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=_s,this.type===La?(O.map.depthTexture.compareFunction=z?Vf:kf,O.map.depthTexture.minFilter=Vn,O.map.depthTexture.magFilter=Vn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let R=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();H.isPointLight!==!0&&O.updateMatrices(H,S);let tt=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let yt=0;yt<R;yt++){let Nt=O.getCamera(yt);if(H.isPointLight){let q=O.camera,rt=O.matrix,ct=H.distance||q.far;ct!==q.far&&(q.far=ct,q.updateProjectionMatrix()),Va.setFromMatrixPosition(H.matrixWorld),q.position.copy(Va),nd.copy(q.position),nd.add(Rb[yt]),q.up.copy(Pb[yt]),q.lookAt(nd),q.updateMatrixWorld(),rt.makeTranslation(-Va.x,-Va.y,-Va.z),Xg.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Xg,q.coordinateSystem,q.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,yt),s.clear();else{yt===0&&(s.setRenderTarget(O.map),s.clear());let q=O.getViewport(yt);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),N.viewport(o)}n=O.getFrustum(yt),y(x,S,Nt,H,tt,this.type)}O.isPointLightShadow!==!0&&this.type===Mo&&v(O,S),O.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(P,C,D)};function v(E,x){let S=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new ci(i.x,i.y,{format:Ks,type:Ui}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,S,f,_,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,S,u,_,null)}function w(E,x,S,P){let C=null,D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)C=D;else if(C=S.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let N=C.uuid,G=x.uuid,I=c[N];I===void 0&&(I={},c[N]=I);let B=I[G];B===void 0&&(B=C.clone(),I[G]=B,x.addEventListener("dispose",T)),C=B}if(C.visible=x.visible,C.wireframe=x.wireframe,P===Mo?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=s.properties.get(C);N.light=S}return C}function y(E,x,S,P,C,D){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Mo)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let I=t.update(E),B=E.material;if(Array.isArray(B)){let H=I.groups;for(let O=0,J=H.length;O<J;O++){let z=H[O],R=B[z.materialIndex];if(R&&R.visible){let tt=w(E,R,P,D);E.onBeforeShadow(s,E,x,S,I,tt,z),s.renderBufferDirect(S,null,I,tt,E,z),E.onAfterShadow(s,E,x,S,I,tt,z)}}}else if(B.visible){let H=w(E,B,P,D);E.onBeforeShadow(s,E,x,S,I,H,null),s.renderBufferDirect(S,null,I,H,E,null),E.onAfterShadow(s,E,x,S,I,H,null)}}let G=E.children;for(let I=0,B=G.length;I<B;I++)y(G[I],x,S,P,C,D)}function T(E){E.target.removeEventListener("dispose",T);for(let S in c){let P=c[S],C=E.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function Lb(s,t){function e(){let L=!1,Q=new Be,K=null,pt=new Be(0,0,0,0);return{setMask:function(lt){K!==lt&&!L&&(s.colorMask(lt,lt,lt,lt),K=lt)},setLocked:function(lt){L=lt},setClear:function(lt,mt,at,gt,st){st===!0&&(lt*=gt,mt*=gt,at*=gt),Q.set(lt,mt,at,gt),pt.equals(Q)===!1&&(s.clearColor(lt,mt,at,gt),pt.copy(Q))},reset:function(){L=!1,K=null,pt.set(-1,0,0,0)}}}function n(){let L=!1,Q=!1,K=null,pt=null,lt=null;return{setReversed:function(mt){if(Q!==mt){let at=t.get("EXT_clip_control");mt?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Q=mt;let gt=lt;lt=null,this.setClear(gt)}},getReversed:function(){return Q},setTest:function(mt){mt?ut(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(mt){K!==mt&&!L&&(s.depthMask(mt),K=mt)},setFunc:function(mt){if(Q&&(mt=vg[mt]),pt!==mt){switch(mt){case oc:s.depthFunc(s.NEVER);break;case ac:s.depthFunc(s.ALWAYS);break;case lc:s.depthFunc(s.LESS);break;case po:s.depthFunc(s.LEQUAL);break;case cc:s.depthFunc(s.EQUAL);break;case hc:s.depthFunc(s.GEQUAL);break;case uc:s.depthFunc(s.GREATER);break;case fc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=mt}},setLocked:function(mt){L=mt},setClear:function(mt){lt!==mt&&(lt=mt,Q&&(mt=1-mt),s.clearDepth(mt))},reset:function(){L=!1,K=null,pt=null,lt=null,Q=!1}}}function i(){let L=!1,Q=null,K=null,pt=null,lt=null,mt=null,at=null,gt=null,st=null;return{setTest:function(et){L||(et?ut(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(et){Q!==et&&!L&&(s.stencilMask(et),Q=et)},setFunc:function(et,xt,nt){(K!==et||pt!==xt||lt!==nt)&&(s.stencilFunc(et,xt,nt),K=et,pt=xt,lt=nt)},setOp:function(et,xt,nt){(mt!==et||at!==xt||gt!==nt)&&(s.stencilOp(et,xt,nt),mt=et,at=xt,gt=nt)},setLocked:function(et){L=et},setClear:function(et){st!==et&&(s.clearStencil(et),st=et)},reset:function(){L=!1,Q=null,K=null,pt=null,lt=null,mt=null,at=null,gt=null,st=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,w=null,y=null,T=null,E=null,x=null,S=new he(0,0,0),P=0,C=!1,D=null,N=null,G=null,I=null,B=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,J=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=J>=2);let R=null,tt={},yt=s.getParameter(s.SCISSOR_BOX),Nt=s.getParameter(s.VIEWPORT),q=new Be().fromArray(yt),rt=new Be().fromArray(Nt);function ct(L,Q,K,pt){let lt=new Uint8Array(4),mt=s.createTexture();s.bindTexture(L,mt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<K;at++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(Q,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(Q+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return mt}let vt={};vt[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),vt[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),vt[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(s.DEPTH_TEST),o.setFunc(po),Y(!1),Kt(xf),ut(s.CULL_FACE),re(wr);function ut(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Ct(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function ce(L,Q){return f[L]!==Q?(s.bindFramebuffer(L,Q),f[L]=Q,L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Q),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Q),!0):!1}function Et(L,Q){let K=m,pt=!1;if(L){K=u.get(Q),K===void 0&&(K=[],u.set(Q,K));let lt=L.textures;if(K.length!==lt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,at=lt.length;mt<at;mt++)K[mt]=s.COLOR_ATTACHMENT0+mt;K.length=lt.length,pt=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,pt=!0);pt&&s.drawBuffers(K)}function zt(L){return _!==L?(s.useProgram(L),_=L,!0):!1}let It={[Er]:s.FUNC_ADD,[Vm]:s.FUNC_SUBTRACT,[Gm]:s.FUNC_REVERSE_SUBTRACT};It[Hm]=s.MIN,It[Wm]=s.MAX;let Ot={[Xm]:s.ZERO,[qm]:s.ONE,[Ym]:s.SRC_COLOR,[Sf]:s.SRC_ALPHA,[jm]:s.SRC_ALPHA_SATURATE,[Km]:s.DST_COLOR,[Jm]:s.DST_ALPHA,[Zm]:s.ONE_MINUS_SRC_COLOR,[Mf]:s.ONE_MINUS_SRC_ALPHA,[Qm]:s.ONE_MINUS_DST_COLOR,[$m]:s.ONE_MINUS_DST_ALPHA,[tg]:s.CONSTANT_COLOR,[eg]:s.ONE_MINUS_CONSTANT_COLOR,[ng]:s.CONSTANT_ALPHA,[ig]:s.ONE_MINUS_CONSTANT_ALPHA};function re(L,Q,K,pt,lt,mt,at,gt,st,et){if(L===wr){p===!0&&(Ct(s.BLEND),p=!1);return}if(p===!1&&(ut(s.BLEND),p=!0),L!==km){if(L!==g||et!==C){if((v!==Er||T!==Er)&&(s.blendEquation(s.FUNC_ADD),v=Er,T=Er),et)switch(L){case bo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case To:s.blendFunc(s.ONE,s.ONE);break;case vf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ht("WebGLState: Invalid blending: ",L);break}else switch(L){case bo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case To:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case vf:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yf:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",L);break}w=null,y=null,E=null,x=null,S.set(0,0,0),P=0,g=L,C=et}return}lt=lt||Q,mt=mt||K,at=at||pt,(Q!==v||lt!==T)&&(s.blendEquationSeparate(It[Q],It[lt]),v=Q,T=lt),(K!==w||pt!==y||mt!==E||at!==x)&&(s.blendFuncSeparate(Ot[K],Ot[pt],Ot[mt],Ot[at]),w=K,y=pt,E=mt,x=at),(gt.equals(S)===!1||st!==P)&&(s.blendColor(gt.r,gt.g,gt.b,st),S.copy(gt),P=st),g=L,C=!1}function ee(L,Q){L.side===Ti?Ct(s.CULL_FACE):ut(s.CULL_FACE);let K=L.side===Wn;Q&&(K=!K),Y(K),L.blending===bo&&L.transparent===!1?re(wr):re(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let pt=L.stencilWrite;a.setTest(pt),pt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Y(L){D!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),D=L)}function Kt(L){L!==Fm?(ut(s.CULL_FACE),L!==N&&(L===xf?s.cullFace(s.BACK):L===Bm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),N=L}function Re(L){L!==G&&(O&&s.lineWidth(L),G=L)}function Me(L,Q,K){L?(ut(s.POLYGON_OFFSET_FILL),(I!==Q||B!==K)&&(I=Q,B=K,o.getReversed()&&(Q=-Q,K=-K),s.polygonOffset(Q,K))):Ct(s.POLYGON_OFFSET_FILL)}function oe(L){L?ut(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function ze(L){L===void 0&&(L=s.TEXTURE0+H-1),R!==L&&(s.activeTexture(L),R=L)}function Xe(L,Q,K){K===void 0&&(R===null?K=s.TEXTURE0+H-1:K=R);let pt=tt[K];pt===void 0&&(pt={type:void 0,texture:void 0},tt[K]=pt),(pt.type!==L||pt.texture!==Q)&&(R!==K&&(s.activeTexture(K),R=K),s.bindTexture(L,Q||vt[L]),pt.type=L,pt.texture=Q)}function F(){let L=tt[R];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function me(){try{s.compressedTexImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function ue(){try{s.compressedTexImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function Wt(){try{s.texSubImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function dt(){try{s.texSubImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function Ut(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function Bt(){try{s.texStorage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function A(){try{s.texStorage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function M(){try{s.texImage2D(...arguments)}catch(L){Ht("WebGLState:",L)}}function V(){try{s.texImage3D(...arguments)}catch(L){Ht("WebGLState:",L)}}function ot(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function it(L,Q){d[L]!==Q&&(s.pixelStorei(L,Q),d[L]=Q)}function ft(L){q.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function _t(L){rt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),rt.copy(L))}function W(L,Q){let K=c.get(Q);K===void 0&&(K=new WeakMap,c.set(Q,K));let pt=K.get(L);pt===void 0&&(pt=s.getUniformBlockIndex(Q,L.name),s.uniformBlockBinding(Q,pt,pt),K.set(L,pt))}function j(L,Q,K){let lt=c.get(Q).get(L);l[lt]!==K&&(s.bindBufferBase(s.UNIFORM_BUFFER,lt,K),l[lt]=K)}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,tt={},f={},l={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,w=null,y=null,T=null,E=null,x=null,S=new he(0,0,0),P=0,C=!1,D=null,N=null,G=null,I=null,B=null,q.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:Ct,bindFramebuffer:ce,drawBuffers:Et,useProgram:zt,setBlending:re,setMaterial:ee,setFlipSided:Y,setCullFace:Kt,setLineWidth:Re,setPolygonOffset:Me,setScissorTest:oe,activeTexture:ze,bindTexture:Xe,unbindTexture:F,compressedTexImage2D:me,compressedTexImage3D:ue,texImage2D:M,texImage3D:V,pixelStorei:it,getParameter:ot,updateUBOMapping:W,uniformBlockBinding:j,texStorage2D:Bt,texStorage3D:A,texSubImage2D:Wt,texSubImage3D:dt,compressedTexSubImage2D:de,compressedTexSubImage3D:Ut,scissor:ft,viewport:_t,reset:ht}}function Db(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,d=new Set,f,u=new WeakMap,m=new Set,_=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):xa("canvas")}function v(A,M,V){let ot=1,it=Bt(A);if((it.width>V||it.height>V)&&(ot=V/Math.max(it.width,it.height)),ot<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let ft=Math.floor(ot*it.width),_t=Math.floor(ot*it.height);f===void 0&&(f=g(ft,_t));let W=M?g(ft,_t):f;return W.width=ft,W.height=_t,W.getContext("2d").drawImage(A,0,0,ft,_t),kt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ft+"x"+_t+")."),W}else return"data"in A&&kt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),A;return A}function w(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(A,M,V,ot,it,ft=!1){if(A!==null){if(s[A]!==void 0)return s[A];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _t;ot&&(_t=t.get("EXT_texture_norm16"),_t||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=M;if(M===s.RED&&(V===s.FLOAT&&(W=s.R32F),V===s.HALF_FLOAT&&(W=s.R16F),V===s.UNSIGNED_BYTE&&(W=s.R8),V===s.UNSIGNED_SHORT&&_t&&(W=_t.R16_EXT),V===s.SHORT&&_t&&(W=_t.R16_SNORM_EXT)),M===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(W=s.R8UI),V===s.UNSIGNED_SHORT&&(W=s.R16UI),V===s.UNSIGNED_INT&&(W=s.R32UI),V===s.BYTE&&(W=s.R8I),V===s.SHORT&&(W=s.R16I),V===s.INT&&(W=s.R32I)),M===s.RG&&(V===s.FLOAT&&(W=s.RG32F),V===s.HALF_FLOAT&&(W=s.RG16F),V===s.UNSIGNED_BYTE&&(W=s.RG8),V===s.UNSIGNED_SHORT&&_t&&(W=_t.RG16_EXT),V===s.SHORT&&_t&&(W=_t.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(W=s.RG8UI),V===s.UNSIGNED_SHORT&&(W=s.RG16UI),V===s.UNSIGNED_INT&&(W=s.RG32UI),V===s.BYTE&&(W=s.RG8I),V===s.SHORT&&(W=s.RG16I),V===s.INT&&(W=s.RG32I)),M===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(W=s.RGB8UI),V===s.UNSIGNED_SHORT&&(W=s.RGB16UI),V===s.UNSIGNED_INT&&(W=s.RGB32UI),V===s.BYTE&&(W=s.RGB8I),V===s.SHORT&&(W=s.RGB16I),V===s.INT&&(W=s.RGB32I)),M===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),V===s.UNSIGNED_INT&&(W=s.RGBA32UI),V===s.BYTE&&(W=s.RGBA8I),V===s.SHORT&&(W=s.RGBA16I),V===s.INT&&(W=s.RGBA32I)),M===s.RGB&&(V===s.UNSIGNED_SHORT&&_t&&(W=_t.RGB16_EXT),V===s.SHORT&&_t&&(W=_t.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),M===s.RGBA){let j=ft?ga:se.getTransfer(it);V===s.FLOAT&&(W=s.RGBA32F),V===s.HALF_FLOAT&&(W=s.RGBA16F),V===s.UNSIGNED_BYTE&&(W=j===ve?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&_t&&(W=_t.RGBA16_EXT),V===s.SHORT&&_t&&(W=_t.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(A,M){let V;return A?M===null||M===Di||M===Cr?V=s.DEPTH24_STENCIL8:M===Ni?V=s.DEPTH32F_STENCIL8:M===Eo&&(V=s.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Di||M===Cr?V=s.DEPTH_COMPONENT24:M===Ni?V=s.DEPTH_COMPONENT32F:M===Eo&&(V=s.DEPTH_COMPONENT16),V}function S(A,M){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==un&&A.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function P(A){let M=new WeakRef(A);n.get(A).__ref=M,m.add(M),_.register(A,M,M)}function C(A){let M=n.get(A).__ref;M!==void 0&&(m.delete(M),_.unregister(M))}function D(A){G(A.target)}function N(A){I(A.target)}function G(A){A.removeEventListener("dispose",D),C(A),H(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",N),C(A),J(A)}function B(){for(let A of m){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):G(M))}m.clear(),d.clear()}function H(A){let M=n.get(A);if(M.__webglInit===void 0)return;let V=A.source,ot=u.get(V);if(ot){let it=ot[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&O(A),Object.keys(ot).length===0&&u.delete(V)}n.remove(A)}function O(A){let M=n.get(A);s.deleteTexture(M.__webglTexture);let V=A.source,ot=u.get(V);delete ot[M.__cacheKey],o.memory.textures--}function J(A){let M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let V=A.depthTexture;if(V&&V.renderTarget===A&&G(V),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(M.__webglFramebuffer[it]))for(let ft=0;ft<M.__webglFramebuffer[it].length;ft++)s.deleteFramebuffer(M.__webglFramebuffer[it][ft]);else s.deleteFramebuffer(M.__webglFramebuffer[it]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[it])}else{if(Array.isArray(M.__webglFramebuffer))for(let it=0;it<M.__webglFramebuffer.length;it++)s.deleteFramebuffer(M.__webglFramebuffer[it]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let it=0;it<M.__webglColorRenderbuffer.length;it++)M.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[it]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let ot=A.textures;for(let it=0,ft=ot.length;it<ft;it++){let _t=n.get(ot[it]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),o.memory.textures--),n.remove(ot[it])}n.remove(A)}let z=0;function R(){z=0}function tt(){return z}function yt(A){z=A}function Nt(){let A=z;return A>=i.maxTextures&&kt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),z+=1,A}function q(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function rt(A,M){let V=n.get(A);if(A.isVideoTexture&&de(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let ot=A.image;if(ot===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(V,A,M);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+M)}function ct(A,M){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){ee(V,A,M);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+M)}function vt(A,M){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){ee(V,A,M);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+M)}function ut(A,M){let V=n.get(A);if(A.version>0&&V.__version!==A.version){Y(V,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+M)}let Ct={[dc]:s.REPEAT,[Wi]:s.CLAMP_TO_EDGE,[pc]:s.MIRRORED_REPEAT},ce={[un]:s.NEAREST,[og]:s.NEAREST_MIPMAP_NEAREST,[Da]:s.NEAREST_MIPMAP_LINEAR,[Vn]:s.LINEAR,[kc]:s.LINEAR_MIPMAP_NEAREST,[vs]:s.LINEAR_MIPMAP_LINEAR},Et={[hg]:s.NEVER,[Gf]:s.ALWAYS,[ug]:s.LESS,[kf]:s.LEQUAL,[fg]:s.EQUAL,[Vf]:s.GEQUAL,[dg]:s.GREATER,[pg]:s.NOTEQUAL};function zt(A,M){if(M.type===Ni&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===kc||M.magFilter===Da||M.magFilter===vs||M.minFilter===Vn||M.minFilter===kc||M.minFilter===Da||M.minFilter===vs)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Ct[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ct[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ct[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ce[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ce[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Et[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===un||M.minFilter!==Da&&M.minFilter!==vs||M.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function It(A,M){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",D),P(M));let ot=M.source,it=u.get(ot);it===void 0&&(it={},u.set(ot,it));let ft=q(M);if(ft!==A.__cacheKey){it[ft]===void 0&&(it[ft]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),it[ft].usedTimes++;let _t=it[A.__cacheKey];_t!==void 0&&(it[A.__cacheKey].usedTimes--,_t.usedTimes===0&&O(M)),A.__cacheKey=ft,A.__webglTexture=it[ft].texture}return V}function Ot(A,M,V){return Math.floor(Math.floor(A/V)/M)}function re(A,M,V,ot){let ft=A.updateRanges;if(ft.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,V,ot,M.data);else{ft.sort((L,Q)=>L.start-Q.start);let _t=0;for(let L=1;L<ft.length;L++){let Q=ft[_t],K=ft[L],pt=Q.start+Q.count,lt=Ot(K.start,M.width,4),mt=Ot(Q.start,M.width,4);K.start<=pt+1&&lt===mt&&Ot(K.start+K.count-1,M.width,4)===lt?Q.count=Math.max(Q.count,K.start+K.count-Q.start):(++_t,ft[_t]=K)}ft.length=_t+1;let W=e.getParameter(s.UNPACK_ROW_LENGTH),j=e.getParameter(s.UNPACK_SKIP_PIXELS),ht=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let L=0,Q=ft.length;L<Q;L++){let K=ft[L],pt=Math.floor(K.start/4),lt=Math.ceil(K.count/4),mt=pt%M.width,at=Math.floor(pt/M.width),gt=lt,st=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(s.UNPACK_SKIP_ROWS,at),e.texSubImage2D(s.TEXTURE_2D,0,mt,at,gt,st,V,ot,M.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,W),e.pixelStorei(s.UNPACK_SKIP_PIXELS,j),e.pixelStorei(s.UNPACK_SKIP_ROWS,ht)}}function ee(A,M,V){let ot=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ot=s.TEXTURE_3D);let it=It(A,M),ft=M.source;e.bindTexture(ot,A.__webglTexture,s.TEXTURE0+V);let _t=n.get(ft);if(ft.version!==_t.__version||it===!0){if(e.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap!="undefined"&&M.image instanceof ImageBitmap)===!1){let st=se.getPrimaries(se.workingColorSpace),et=M.colorSpace===Ss?null:se.getPrimaries(M.colorSpace),xt=M.colorSpace===Ss||st===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let j=v(M.image,!1,i.maxTextureSize);j=Ut(M,j);let ht=r.convert(M.format,M.colorSpace),L=r.convert(M.type),Q=E(M.internalFormat,ht,L,M.normalized,M.colorSpace,M.isVideoTexture);zt(ot,M);let K,pt=M.mipmaps,lt=M.isVideoTexture!==!0,mt=_t.__version===void 0||it===!0,at=ft.dataReady,gt=S(M,j);if(M.isDepthTexture)Q=x(M.format===ys,M.type),mt&&(lt?e.texStorage2D(s.TEXTURE_2D,1,Q,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,ht,L,null));else if(M.isDataTexture)if(pt.length>0){lt&&mt&&e.texStorage2D(s.TEXTURE_2D,gt,Q,pt[0].width,pt[0].height);for(let st=0,et=pt.length;st<et;st++)K=pt[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ht,L,K.data):e.texImage2D(s.TEXTURE_2D,st,Q,K.width,K.height,0,ht,L,K.data);M.generateMipmaps=!1}else lt?(mt&&e.texStorage2D(s.TEXTURE_2D,gt,Q,j.width,j.height),at&&re(M,j,ht,L)):e.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,ht,L,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){lt&&mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Q,pt[0].width,pt[0].height,j.depth);for(let st=0,et=pt.length;st<et;st++)if(K=pt[st],M.format!==Oi)if(ht!==null)if(lt){if(at)if(M.layerUpdates.size>0){let xt=Jf(K.width,K.height,M.format,M.type);for(let nt of M.layerUpdates){let Tt=K.data.subarray(nt*xt/K.data.BYTES_PER_ELEMENT,(nt+1)*xt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,nt,K.width,K.height,1,ht,Tt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,K.width,K.height,j.depth,ht,K.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,Q,K.width,K.height,j.depth,0,K.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?at&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,K.width,K.height,j.depth,ht,L,K.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,Q,K.width,K.height,j.depth,0,ht,L,K.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{lt&&mt&&e.texStorage2D(s.TEXTURE_2D,gt,Q,pt[0].width,pt[0].height);for(let st=0,et=pt.length;st<et;st++)K=pt[st],M.format!==Oi?ht!==null?lt?at&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ht,K.data):e.compressedTexImage2D(s.TEXTURE_2D,st,Q,K.width,K.height,0,K.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ht,L,K.data):e.texImage2D(s.TEXTURE_2D,st,Q,K.width,K.height,0,ht,L,K.data)}else if(M.isDataArrayTexture)if(lt){if(mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Q,j.width,j.height,j.depth),at)if(M.layerUpdates.size>0){let st=Jf(j.width,j.height,M.format,M.type);for(let et of M.layerUpdates){let xt=j.data.subarray(et*st/j.data.BYTES_PER_ELEMENT,(et+1)*st/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,j.width,j.height,1,ht,L,xt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ht,L,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,ht,L,j.data);else if(M.isData3DTexture)lt?(mt&&e.texStorage3D(s.TEXTURE_3D,gt,Q,j.width,j.height,j.depth),at&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ht,L,j.data)):e.texImage3D(s.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,ht,L,j.data);else if(M.isFramebufferTexture){if(mt)if(lt)e.texStorage2D(s.TEXTURE_2D,gt,Q,j.width,j.height);else{let st=j.width,et=j.height;for(let xt=0;xt<gt;xt++)e.texImage2D(s.TEXTURE_2D,xt,Q,st,et,0,ht,L,null),st>>=1,et>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){let st=s.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),j.parentNode!==st){st.appendChild(j),d.add(M),st.onpaint=et=>{let xt=et.changedElements;for(let nt of d)xt.includes(nt.image)&&(nt.needsUpdate=!0)},st.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let xt=s.RGBA,nt=s.RGBA,Tt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,xt,nt,Tt,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(pt.length>0){if(lt&&mt){let st=Bt(pt[0]);e.texStorage2D(s.TEXTURE_2D,gt,Q,st.width,st.height)}for(let st=0,et=pt.length;st<et;st++)K=pt[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ht,L,K):e.texImage2D(s.TEXTURE_2D,st,Q,ht,L,K);M.generateMipmaps=!1}else if(lt){if(mt){let st=Bt(j);e.texStorage2D(s.TEXTURE_2D,gt,Q,st.width,st.height)}at&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht,L,j)}else e.texImage2D(s.TEXTURE_2D,0,Q,ht,L,j);w(M)&&M.mipmapsAutoUpdate===!0&&y(ot),_t.__version=ft.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Y(A,M,V){if(M.image.length!==6)return;let ot=It(A,M),it=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+V);let ft=n.get(it);if(it.version!==ft.__version||ot===!0){e.activeTexture(s.TEXTURE0+V);let _t=se.getPrimaries(se.workingColorSpace),W=M.colorSpace===Ss?null:se.getPrimaries(M.colorSpace),j=M.colorSpace===Ss||_t===W?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ht=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let nt=0;nt<6;nt++)!ht&&!L?Q[nt]=v(M.image[nt],!0,i.maxCubemapSize):Q[nt]=L?M.image[nt].image:M.image[nt],Q[nt]=Ut(M,Q[nt]);let K=Q[0],pt=r.convert(M.format,M.colorSpace),lt=r.convert(M.type),mt=E(M.internalFormat,pt,lt,M.normalized,M.colorSpace),at=M.isVideoTexture!==!0,gt=ft.__version===void 0||ot===!0,st=it.dataReady,et=S(M,K);zt(s.TEXTURE_CUBE_MAP,M);let xt;if(M.isDepthTexture){if(mt=x(M.format===ys,M.type),gt)if(at)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,mt,K.width,K.height);else for(let nt=0;nt<6;nt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,mt,K.width,K.height,0,pt,lt,null)}else if(ht){at&&gt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,et,mt,K.width,K.height);for(let nt=0;nt<6;nt++){xt=Q[nt].mipmaps;for(let Tt=0;Tt<xt.length;Tt++){let te=xt[Tt];M.format!==Oi?pt!==null?at?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,te.width,te.height,pt,te.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,mt,te.width,te.height,0,te.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,te.width,te.height,pt,lt,te.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,mt,te.width,te.height,0,pt,lt,te.data)}}}else{if(xt=M.mipmaps,at&&gt){xt.length>0&&et++;let nt=Bt(Q[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,et,mt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(L){at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Q[nt].width,Q[nt].height,pt,lt,Q[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,mt,Q[nt].width,Q[nt].height,0,pt,lt,Q[nt].data);for(let Tt=0;Tt<xt.length;Tt++){let qt=xt[Tt].image[nt].image;at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,qt.width,qt.height,pt,lt,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,mt,qt.width,qt.height,0,pt,lt,qt.data)}}else{at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,pt,lt,Q[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,mt,pt,lt,Q[nt]);for(let Tt=0;Tt<xt.length;Tt++){let te=xt[Tt];at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,pt,lt,te.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,mt,pt,lt,te.image[nt])}}}w(M)&&M.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ft.__version=it.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Kt(A,M,V,ot,it,ft){let _t=r.convert(V.format,V.colorSpace),W=r.convert(V.type),j=E(V.internalFormat,_t,W,V.normalized,V.colorSpace),ht=n.get(M),L=n.get(V);if(L.__renderTarget=M,!ht.__hasExternalTextures){let Q=Math.max(1,M.width>>ft),K=Math.max(1,M.height>>ft);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,ft,j,Q,K,M.depth,0,_t,W,null):e.texImage2D(it,ft,j,Q,K,0,_t,W,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),dt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,it,L.__webglTexture,0,Wt(M)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,it,L.__webglTexture,ft),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(A,M,V){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){let ot=M.depthTexture,it=ot&&ot.isDepthTexture?ot.type:null,ft=x(M.stencilBuffer,it),_t=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;dt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(M),ft,M.width,M.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(M),ft,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ft,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,A)}else{let ot=M.textures;for(let it=0;it<ot.length;it++){let ft=ot[it],_t=r.convert(ft.format,ft.colorSpace),W=r.convert(ft.type),j=E(ft.internalFormat,_t,W,ft.normalized,ft.colorSpace);dt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(M),j,M.width,M.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(M),j,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,j,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(A,M,V){let ot=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(M.depthTexture);it.__renderTarget=M;let ft=ot?M.depthTexture.image[0]:M.depthTexture.image;(!it.__webglTexture||ft.width!==M.width||ft.height!==M.height)&&(ft.width=M.width,ft.height=M.height,M.depthTexture.needsUpdate=!0),ot?ut(M.depthTexture,0):rt(M.depthTexture,0);let _t=it.__webglTexture,W=Wt(M),j=ot?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,ht=M.depthTexture.format===ys?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===_s)dt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,j,_t,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,ht,j,_t,0);else if(M.depthTexture.format===ys)dt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,j,_t,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,ht,j,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(A){let M=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let ot=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ot){let it=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ot.removeEventListener("dispose",it)};ot.addEventListener("dispose",it),M.__depthDisposeCallback=it}M.__boundDepthTexture=ot}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let ot=0;ot<6;ot++)Me(M.__webglFramebuffer[ot],A,ot);else A.texture.mipmaps.length>0?Me(M.__webglFramebuffer[0],A,0):Me(M.__webglFramebuffer,A,0);else if(V){M.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ot]),M.__webglDepthbuffer[ot]===void 0)M.__webglDepthbuffer[ot]=s.createRenderbuffer(),Re(M.__webglDepthbuffer[ot],A,!1);else{let it=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer[ot];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ft)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Re(M.__webglDepthbuffer,A,!1);else{let it=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ft)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(A,M,V){let ot=n.get(A);M!==void 0&&Kt(ot.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&oe(A)}function Xe(A){let M=A.texture,V=n.get(A),ot=n.get(M);A.addEventListener("dispose",N),P(A);let it=A.textures,ft=A.isWebGLCubeRenderTarget===!0,_t=it.length>1;if(_t||(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=M.version,o.memory.textures++),ft){V.__webglFramebuffer=[];for(let W=0;W<6;W++)if(M.mipmaps.length>0){V.__webglFramebuffer[W]=[];for(let j=0;j<M.mipmaps.length;j++)V.__webglFramebuffer[W][j]=s.createFramebuffer()}else V.__webglFramebuffer[W]=s.createFramebuffer()}else{if(M.mipmaps.length>0){V.__webglFramebuffer=[];for(let W=0;W<M.mipmaps.length;W++)V.__webglFramebuffer[W]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(_t)for(let W=0,j=it.length;W<j;W++){let ht=n.get(it[W]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&dt(A)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let W=0;W<it.length;W++){let j=it[W];V.__webglColorRenderbuffer[W]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[W]);let ht=r.convert(j.format,j.colorSpace),L=r.convert(j.type),Q=E(j.internalFormat,ht,L,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),K=Wt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,K,Q,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.RENDERBUFFER,V.__webglColorRenderbuffer[W])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),zt(s.TEXTURE_CUBE_MAP,M);for(let W=0;W<6;W++)if(M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)Kt(V.__webglFramebuffer[W][j],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,j);else Kt(V.__webglFramebuffer[W],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);w(M)?y(s.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let W=0,j=it.length;W<j;W++){let ht=it[W],L=n.get(ht),Q=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,L.__webglTexture),zt(Q,ht),Kt(V.__webglFramebuffer,A,ht,s.COLOR_ATTACHMENT0+W,Q,0),w(ht)&&y(Q)}e.unbindTexture()}else{let W=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(W=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(W,ot.__webglTexture),zt(W,M),M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)Kt(V.__webglFramebuffer[j],A,M,s.COLOR_ATTACHMENT0,W,j);else Kt(V.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,W,0);w(M)?y(W):M.mipmaps.length>0&&s.texParameteri(W,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&oe(A)}function F(A){let M=A.textures;for(let V=0,ot=M.length;V<ot;V++){let it=M[V];if(w(it)&&it.mipmapsAutoUpdate===!0){let ft=T(A),_t=n.get(it).__webglTexture;e.bindTexture(ft,_t),y(ft),e.unbindTexture()}}}let me=[];function ue(A){if(A.samples>0){if(dt(A)===!1){let M=A.textures,V=A.width,ot=A.height,it=s.COLOR_BUFFER_BIT,ft=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(A),W=M.length>1;if(W)for(let ht=0;ht<M.length;ht++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ht=0;ht<M.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),W){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);let L=n.get(M[ht]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,V,ot,0,0,V,ot,it,s.NEAREST),l===!0&&(me.length=0,me.push(s.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&me.push(ft),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),W)for(let ht=0;ht<M.length;ht++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);let L=n.get(M[ht]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Wt(A){return Math.min(i.maxSamples,A.samples)}function dt(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function de(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Ut(A,M){let V=A.colorSpace,ot=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==ma&&V!==Ss&&(se.getTransfer(V)===ve?(ot!==Oi||it!==fi)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",V)),M}function Bt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Nt,this.resetTextureUnits=R,this.getTextureUnits=tt,this.setTextureUnits=yt,this.setTexture2D=rt,this.setTexture2DArray=ct,this.setTexture3D=vt,this.setTextureCube=ut,this.rebindTextures=ze,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=dt,this.dispose=B}function Nb(s,t){function e(n,i=Ss){let r,o=se.getTransfer(i);if(n===fi)return s.UNSIGNED_BYTE;if(n===Gc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Hc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Nf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Uf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lf)return s.BYTE;if(n===Df)return s.SHORT;if(n===Eo)return s.UNSIGNED_SHORT;if(n===Vc)return s.INT;if(n===Di)return s.UNSIGNED_INT;if(n===Ni)return s.FLOAT;if(n===Ui)return s.HALF_FLOAT;if(n===Of)return s.ALPHA;if(n===Ff)return s.RGB;if(n===Oi)return s.RGBA;if(n===_s)return s.DEPTH_COMPONENT;if(n===ys)return s.DEPTH_STENCIL;if(n===Bf)return s.RED;if(n===Wc)return s.RED_INTEGER;if(n===Ks)return s.RG;if(n===Xc)return s.RG_INTEGER;if(n===qc)return s.RGBA_INTEGER;if(n===Na||n===Ua||n===Oa||n===Fa)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yc||n===Zc||n===Jc||n===$c)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kc||n===Qc||n===jc||n===th||n===eh||n===Ba||n===nh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kc||n===Qc)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===th)return r.COMPRESSED_R11_EAC;if(n===eh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ba)return r.COMPRESSED_RG11_EAC;if(n===nh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch||n===hh||n===uh||n===fh||n===dh||n===ph||n===mh||n===gh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ih)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ah)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ch)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ph)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_h||n===xh||n===vh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_h)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yh||n===Sh||n===za||n===Mh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ob=`
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

}`,cd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ra(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Kn({vertexShader:Ub,fragmentShader:Ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Hn(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hd=class extends Xi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null,_=typeof XRWebGLBinding!="undefined",p=new cd,g={},v=e.getContextAttributes(),w=null,y=null,T=[],E=[],x=new pe,S=null,P=null,C=new kn;C.viewport=new Be;let D=new kn;D.viewport=new Be;let N=[C,D],G=new Oc,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let rt=T[q];return rt===void 0&&(rt=new _o,T[q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(q){let rt=T[q];return rt===void 0&&(rt=new _o,T[q]=rt),rt.getGripSpace()},this.getHand=function(q){let rt=T[q];return rt===void 0&&(rt=new _o,T[q]=rt),rt.getHandSpace()};function H(q){let rt=E.indexOf(q.inputSource);if(rt===-1)return;let ct=T[rt];ct!==void 0&&(ct.update(q.inputSource,q.frame,c||o),ct.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",J);for(let q=0;q<T.length;q++){let rt=E[q];rt!==null&&(E[q]=null,T[q].disconnect(rt))}I=null,B=null,p.reset();for(let q in g)delete g[q];if(t.setRenderTarget(w),u=null,f=null,d=null,i=null,y=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(x.width,x.height,!1),P!==null){let q=P.camera;q.fov=P.fov,q.zoom=P.zoom,q.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",O),i.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,vt=null,ut=null;v.depth&&(ut=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=v.stencil?ys:_s,vt=v.stencil?Cr:Di);let Ct={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ct),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new ci(f.textureWidth,f.textureHeight,{format:Oi,type:fi,depthTexture:new xs(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ct={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,ct),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new ci(u.framebufferWidth,u.framebufferHeight,{format:Oi,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Nt.setContext(i),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function J(q){for(let rt=0;rt<q.removed.length;rt++){let ct=q.removed[rt],vt=E.indexOf(ct);vt>=0&&(E[vt]=null,T[vt].disconnect(ct))}for(let rt=0;rt<q.added.length;rt++){let ct=q.added[rt],vt=E.indexOf(ct);if(vt===-1){for(let Ct=0;Ct<T.length;Ct++)if(Ct>=E.length){E.push(ct),vt=Ct;break}else if(E[Ct]===null){E[Ct]=ct,vt=Ct;break}if(vt===-1)break}let ut=T[vt];ut&&ut.connect(ct)}}function z(q,rt){rt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(rt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let rt=q.near,ct=q.far;p.texture!==null&&(p.depthNear>0&&(rt=p.depthNear),p.depthFar>0&&(ct=p.depthFar)),G.near=D.near=C.near=rt,G.far=D.far=C.far=ct,(I!==G.near||B!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,B=G.far),G.layers.mask=q.layers.mask|6,C.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let vt=q.parent,ut=G.cameras;z(G,vt);for(let Ct=0;Ct<ut.length;Ct++)z(ut[Ct],vt);G.projectionMatrix.copy(C.projectionMatrix),G.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&q.isPerspectiveCamera&&(P={camera:q,fov:q.fov,zoom:q.zoom}),R(q,G,vt)};function R(q,rt,ct){ct===null?q.matrix.copy(rt.matrixWorld):(q.matrix.copy(ct.matrixWorld),q.matrix.invert(),q.matrix.multiply(rt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(rt.projectionMatrix),q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=gc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(q){return g[q]};let tt=null;function yt(q,rt){if(h=rt.getViewerPose(c||o),m=rt,h!==null){let ct=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let vt=!1;ct.length!==G.cameras.length&&(G.cameras.length=0,vt=!0);for(let Et=0;Et<ct.length;Et++){let zt=ct[Et],It=null;if(u!==null)It=u.getViewport(zt);else{let re=d.getViewSubImage(f,zt);It=re.viewport,Et===0&&(t.setRenderTargetTextures(y,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(y))}let Ot=N[Et];Ot===void 0&&(Ot=new kn,Ot.layers.enable(Et),Ot.viewport=new Be,N[Et]=Ot),Ot.matrix.fromArray(zt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(zt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(It.x,It.y,It.width,It.height),Et===0&&(G.matrix.copy(Ot.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),vt===!0&&G.cameras.push(Ot)}let ut=i.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Et=d.getDepthInformation(ct[0]);Et&&Et.isValid&&Et.texture&&p.init(Et,i.renderState)}if(ut&&ut.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Et=0;Et<ct.length;Et++){let zt=ct[Et].camera;if(zt){let It=g[zt];It||(It=new Ra,g[zt]=It);let Ot=d.getCameraImage(zt);It.sourceTexture=Ot}}}}for(let ct=0;ct<T.length;ct++){let vt=E[ct],ut=T[ct];vt!==null&&ut!==void 0&&ut.update(vt,rt,c||o)}tt&&tt(q,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}let Nt=new qg;Nt.setAnimationLoop(yt),this.setAnimationLoop=function(q){tt=q},this.dispose=function(){}}},Fb=new Fe,n_=new Xt;n_.set(-1,0,0,0,1,0,0,0,1);function Bb(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,qf(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,w,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&u(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,w):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Wn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Wn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),w=v.envMap,y=v.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Fb.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(n_),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,w){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=w*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Wn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zb(s,t,e,n){let i={},r={};function o(v,w){let y=w.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,w){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let T=w.program;n.updateUBOMapping(v,T);let E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let w=s.createBuffer(),y=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,y,T),s.bindBuffer(s.UNIFORM_BUFFER,null),w}function c(v){let w=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let E=0,x=y.length;E<x;E++){let S=y[E];if(Array.isArray(S))for(let P=0,C=S.length;P<C;P++)h(S[P],E,P,T);else h(S,E,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,w,y,T){if(f(v,w,y,T)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let P=0;P<x.length;P++){let C=x[P],D=_(C,!0);d(C,v.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}function d(v,w,y){typeof v=="number"||typeof v=="boolean"?w[y]=v:v.isMatrix3?(w[y]=v.elements[0],w[y+1]=v.elements[1],w[y+2]=v.elements[2],w[y+3]=0,w[y+4]=v.elements[3],w[y+5]=v.elements[4],w[y+6]=v.elements[5],w[y+7]=0,w[y+8]=v.elements[6],w[y+9]=v.elements[7],w[y+10]=v.elements[8],w[y+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-y),y):v.toArray(w,y)}function f(v,w,y,T){let E=v.value,x=w+"_"+y;if(Array.isArray(E)){T[x]===void 0&&(T[x]=[]);let S=T[x],P=!1;for(let C=0;C<E.length;C++)u(E[C],S,C)===!0&&(P=!0);return P}return u(E,T,x)}function u(v,w,y){if(w[y]===void 0)return typeof v=="number"||typeof v=="boolean"?w[y]=v:ArrayBuffer.isView(v)?w[y]=v.slice():w[y]=v.clone(),!0;{let T=w[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return w[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(v){let w=v.uniforms,y=0,T=16;for(let x=0,S=w.length;x<S;x++){let P=Array.isArray(w[x])?w[x]:[w[x]];for(let C=0,D=P.length;C<D;C++){let N=P[C],G=Array.isArray(N.value)?N.value:[N.value],I=Array.isArray(w[x])||Array.isArray(N.value),B=y;for(let O=0,J=G.length;O<J;O++){let z=G[O],R=_(z,I),tt=y%T,yt=tt%R.boundary,Nt=tt+yt;y+=yt,Nt!==0&&T-Nt<R.storage&&(y+=T-Nt),O===0&&(B=y),y+=R.storage}let H=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new H((y-B)/Float32Array.BYTES_PER_ELEMENT),N.__offset=B}}let E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function _(v,w){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let w=v.target;w.removeEventListener("dispose",p),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:g}}var kb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function Vb(){return Ji===null&&(Ji=new yc(kb,16,16,Ks,Ui),Ji.name="DFG_LUT",Ji.minFilter=Vn,Ji.magFilter=Vn,Ji.wrapS=Wi,Ji.wrapT=Wi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var Eh=class{constructor(t={}){let{canvas:e=gg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=fi}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=u,p=new Set([qc,Xc,Wc]),g=new Set([fi,Di,Eo,Cr,Gc,Hc]),v=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,x=[],S=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,N=null,G=null,I=null,B=null;this._outputColorSpace=zn;let H=0,O=0,J=null,z=-1,R=null,tt=new Be,yt=new Be,Nt=null,q=new he(0),rt=0,ct=e.width,vt=e.height,ut=1,Ct=null,ce=null,Et=new Be(0,0,ct,vt),zt=new Be(0,0,ct,vt),It=!1,Ot=new Tr,re=new Sc,ee=!1,Y=!1,Kt=new Fe,Re=new $,Me=new Be,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function Xe(){return J===null?ut:1}let F=n;function me(b,U){return e.getContext(b,U)}let ue,Wt,dt,de,Ut,Bt,A,M,V,ot,it,ft,_t,W,j,ht,L,Q,K,pt,lt,mt,at;try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),F===null){let U="webgl2";if(F=me(U,b),F===null)throw me(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}gt()}catch(b){throw e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),Ht("WebGLRenderer: "+b.message),b}function gt(){ue=new QS(F),ue.init(),lt=new Nb(F,ue),Wt=new VS(F,ue,t,lt),dt=new Lb(F,ue),Wt.reversedDepthBuffer&&f&&dt.buffers.depth.setReversed(!0),G=F.createFramebuffer(),I=F.createFramebuffer(),B=F.createFramebuffer(),de=new eM(F),Ut=new xb,Bt=new Db(F,ue,dt,Ut,Wt,lt,de),A=new KS(C),M=new iv(F),mt=new zS(F,M),V=new jS(F,M,de,mt),ot=new iM(F,V,M,mt,de),Q=new nM(F,Wt,Bt),j=new GS(Ut),it=new _b(C,A,ue,Wt,mt,j),ft=new Bb(C,Ut),_t=new yb,W=new Eb(ue),L=new BS(C,A,dt,ot,m,l),ht=new Ib(C,ot,Wt),at=new zb(F,de,Wt,dt),K=new kS(F,ue,de),pt=new tM(F,ue,de),de.programs=it.programs,C.capabilities=Wt,C.extensions=ue,C.properties=Ut,C.renderLists=_t,C.shadowMap=ht,C.state=dt,C.info=de}_!==fi&&(P=new rM(_,e.width,e.height,a,i,r));let st=new hd(C,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(b){b!==void 0&&(ut=b,this.setSize(ct,vt,!1))},this.getSize=function(b){return b.set(ct,vt)},this.setSize=function(b,U,Z=!0){if(st.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=b,vt=U,e.width=Math.floor(b*ut),e.height=Math.floor(U*ut),Z===!0&&(e.style.width=b+"px",e.style.height=U+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(ct*ut,vt*ut).floor()},this.setDrawingBufferSize=function(b,U,Z){ct=b,vt=U,ut=Z,e.width=Math.floor(b*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(_===fi){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(tt)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,U,Z,k){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,U,Z,k),dt.viewport(tt.copy(Et).multiplyScalar(Xe()).round())},this.getScissor=function(b){return b.copy(zt)},this.setScissor=function(b,U,Z,k){b.isVector4?zt.set(b.x,b.y,b.z,b.w):zt.set(b,U,Z,k),dt.scissor(yt.copy(zt).multiplyScalar(Xe()).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(b){dt.setScissorTest(It=b)},this.setOpaqueSort=function(b){Ct=b},this.setTransparentSort=function(b){ce=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,Z=!0){let k=0;if(b){let X=!1;if(J!==null){let Mt=J.texture.format;X=p.has(Mt)}if(X){let Mt=J.texture.type,Pt=g.has(Mt),St=L.getClearColor(),wt=L.getClearAlpha(),Ft=St.r,Yt=St.g,ne=St.b;Pt?(v[0]=Ft,v[1]=Yt,v[2]=ne,v[3]=wt,F.clearBufferuiv(F.COLOR,0,v)):(w[0]=Ft,w[1]=Yt,w[2]=ne,w[3]=wt,F.clearBufferiv(F.COLOR,0,w))}else k|=F.COLOR_BUFFER_BIT}U&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),L.dispose(),_t.dispose(),W.dispose(),Bt.dispose(),Ut.dispose(),A.dispose(),ot.dispose(),V.dispose(),mt.dispose(),at.dispose(),it.dispose(),st.dispose(),st.removeEventListener("sessionstart",be),st.removeEventListener("sessionend",_e),je.stop()};function et(b){b.preventDefault(),Wf("WebGLRenderer: Context Lost."),D=!0}function xt(){Wf("WebGLRenderer: Context Restored."),D=!1;let b=de.autoReset,U=ht.enabled,Z=ht.autoUpdate,k=ht.needsUpdate,X=ht.type;gt(),de.autoReset=b,ht.enabled=U,ht.autoUpdate=Z,ht.needsUpdate=k,ht.type=X}function nt(b){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Tt(b){let U=b.target;U.removeEventListener("dispose",Tt),te(U)}function te(b){qt(b),Ut.remove(b)}function qt(b){let U=Ut.get(b).programs;U!==void 0&&(U.forEach(function(Z){it.releaseProgram(Z)}),b.isShaderMaterial&&it.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,Z,k,X,Mt){U===null&&(U=oe);let Pt=X.isMesh&&X.matrixWorld.determinantAffine()<0,St=di(b,U,Z,k,X);dt.setMaterial(k,Pt);let wt=Z.index,Ft=1;if(k.wireframe===!0){if(wt=V.getWireframeAttribute(Z),wt===void 0)return;Ft=2}let Yt=Z.drawRange,ne=Z.attributes.position,Lt=Yt.start*Ft,ie=(Yt.start+Yt.count)*Ft;Mt!==null&&(Lt=Math.max(Lt,Mt.start*Ft),ie=Math.min(ie,(Mt.start+Mt.count)*Ft)),wt!==null?(Lt=Math.max(Lt,0),ie=Math.min(ie,wt.count)):ne!=null&&(Lt=Math.max(Lt,0),ie=Math.min(ie,ne.count));let Je=ie-Lt;if(Je<0||Je===1/0)return;mt.setup(X,k,St,Z,wt);let Ae,we=K;if(wt!==null&&(Ae=M.get(wt),we=pt,we.setIndex(Ae)),X.isMesh)k.wireframe===!0?(dt.setLineWidth(k.wireframeLinewidth*Xe()),we.setMode(F.LINES)):we.setMode(F.TRIANGLES);else if(X.isLine){let xn=k.linewidth;xn===void 0&&(xn=1),dt.setLineWidth(xn*Xe()),X.isLineSegments?we.setMode(F.LINES):X.isLineLoop?we.setMode(F.LINE_LOOP):we.setMode(F.LINE_STRIP)}else X.isPoints?we.setMode(F.POINTS):X.isSprite&&we.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))we.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let xn=X._multiDrawStarts,Dt=X._multiDrawCounts,Pn=X._multiDrawCount,ge=wt?M.get(wt).bytesPerElement:1,Qs=Ut.get(k).currentProgram.getUniforms();for(let vn=0;vn<Pn;vn++)Qs.setValue(F,"_gl_DrawID",vn),we.render(xn[vn]/ge,Dt[vn])}else if(X.isInstancedMesh)we.renderInstances(Lt,Je,X.count);else if(Z.isInstancedBufferGeometry){let xn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Dt=Math.min(Z.instanceCount,xn);we.renderInstances(Lt,Je,Dt)}else we.render(Lt,Je)};function Pe(b,U,Z,k){N!==null&&b.isNodeMaterial&&N.setObject(k,b),ee===!0&&j.setState(b,Z,!1),b.transparent===!0&&b.side===Ti&&b.forceSinglePass===!1?(b.side=Wn,b.needsUpdate=!0,jn(b,U,k),b.side=$s,b.needsUpdate=!0,jn(b,U,k),b.side=Ti):jn(b,U,k)}this.compile=function(b,U,Z=null){Z===null&&(Z=b),N!==null&&N.renderStart(b,U,Z),E=W.get(Z),E.init(U),S.push(E),Z.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),b!==Z&&b.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),Y=this.localClippingEnabled,ee=j.init(this.clippingPlanes,Y),ee===!0&&j.setGlobalState(this.clippingPlanes,U),N!==null&&ht.render(E.state.shadowsArray,Z,U);let k=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Mt=X.material;if(Mt)if(Array.isArray(Mt))for(let Pt=0;Pt<Mt.length;Pt++){let St=Mt[Pt];Pe(St,Z,U,X),k.add(St)}else Pe(Mt,Z,U,X),k.add(Mt)}),E=S.pop(),N!==null&&N.renderEnd(),k},this.compileAsync=function(b,U,Z=null){let k=this.compile(b,U,Z);return new Promise(X=>{function Mt(){if(k.forEach(function(Pt){let wt=Ut.get(Pt).currentProgram;(wt===void 0||wt.isReady())&&k.delete(Pt)}),k.size===0){X(b);return}setTimeout(Mt,10)}ue.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Ye=null;function Ie(b){Ye&&Ye(b)}function be(){je.stop()}function _e(){je.start()}let je=new qg;je.setAnimationLoop(Ie),typeof self!="undefined"&&je.setContext(self),this.setAnimationLoop=function(b){Ye=b,st.setAnimationLoop(b),b===null?je.stop():je.start()},st.addEventListener("sessionstart",be),st.addEventListener("sessionend",_e),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(b,U);let Z=st.enabled===!0&&st.isPresenting===!0,k=P!==null&&(J===null||Z)&&P.begin(C,J);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,U,J),E=W.get(b,S.length),E.init(U),E.state.textureUnits=Bt.getTextureUnits(),S.push(E),Kt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?re.setFromArrayCamera(U):Ot.setFromProjectionMatrix(Kt,Si,U.reversedDepth),Y=this.localClippingEnabled,ee=j.init(this.clippingPlanes,Y),T=_t.get(b,x.length),T.init(),x.push(T),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Pt=C.xr.getDepthSensingMesh();Pt!==null&&Te(Pt,U,-1/0,C.sortObjects)}Te(b,U,0,C.sortObjects),T.finish(),N!==null&&N.updateLights(E.state.lightsArray),C.sortObjects===!0&&T.sort(Ct,ce),ze=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,ze&&L.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),ee===!0&&j.beginShadows();let X=E.state.shadowsArray;if(ht.render(X,b,U),ee===!0&&j.endShadows(),(k&&P.hasRenderPass())===!1){let Pt=T.opaque,St=T.transmissive;if(E.setupLights(),U.isArrayCamera){let wt=U.cameras;if(St.length>0)for(let Ft=0,Yt=wt.length;Ft<Yt;Ft++){let ne=wt[Ft];Qn(Pt,St,b,ne)}ze&&L.render(b);for(let Ft=0,Yt=wt.length;Ft<Yt;Ft++){let ne=wt[Ft];_n(T,b,ne,ne.viewport)}}else St.length>0&&Qn(Pt,St,b,U),ze&&L.render(b),_n(T,b,U)}J!==null&&O===0&&(Bt.updateMultisampleRenderTarget(J),Bt.updateRenderTargetMipmap(J)),k&&P.end(C),b.isScene===!0&&b.onAfterRender(C,b,U),mt.resetDefaultState(),z=-1,R=null,S.pop(),S.length>0?(E=S[S.length-1],Bt.setTextureUnits(E.state.textureUnits),ee===!0&&j.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,N!==null&&N.renderEnd()};function Te(b,U,Z,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){let Pt=U.isArrayCamera?re:Ot;if(!b.frustumCulled||b.intersectsFrustum(Pt)){k&&Me.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Kt);let St=ot.update(b),wt=b.material;wt.visible&&T.push(b,St,wt,Z,Me.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let Pt=U.isArrayCamera?re:Ot;if(!b.frustumCulled||b.intersectsFrustum(Pt)){let St=ot.update(b),wt=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Me.copy(b.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Me.copy(St.boundingSphere.center)),Me.applyMatrix4(b.matrixWorld).applyMatrix4(Kt)),Array.isArray(wt)){let Ft=St.groups;for(let Yt=0,ne=Ft.length;Yt<ne;Yt++){let Lt=Ft[Yt],ie=wt[Lt.materialIndex];ie&&ie.visible&&T.push(b,St,ie,Z,Me.z,Lt,U)}}else wt.visible&&T.push(b,St,wt,Z,Me.z,null,U)}}}let Mt=b.children;for(let Pt=0,St=Mt.length;Pt<St;Pt++)Te(Mt[Pt],U,Z,k)}function _n(b,U,Z,k){let{opaque:X,transmissive:Mt,transparent:Pt}=b;E.setupLightsView(Z),ee===!0&&j.setGlobalState(C.clippingPlanes,Z),k&&dt.viewport(tt.copy(k)),X.length>0&&ke(X,U,Z),Mt.length>0&&ke(Mt,U,Z),Pt.length>0&&ke(Pt,U,Z),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Qn(b,U,Z,k){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let Lt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new ci(1,1,{generateMipmaps:!0,type:Lt?Ui:fi,minFilter:vs,samples:Math.max(4,Wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let Mt=E.state.transmissionRenderTarget[k.id],Pt=k.viewport||tt;Mt.setSize(Pt.z*C.transmissionResolutionScale,Pt.w*C.transmissionResolutionScale);let St=C.getRenderTarget(),wt=C.getActiveCubeFace(),Ft=C.getActiveMipmapLevel();C.setRenderTarget(Mt),C.getClearColor(q),rt=C.getClearAlpha(),rt<1&&C.setClearColor(16777215,.5),C.clear(),ze&&L.render(Z);let Yt=C.toneMapping;C.toneMapping=Zi;let ne=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),ee===!0&&j.setGlobalState(C.clippingPlanes,k),ke(b,Z,k),Bt.updateMultisampleRenderTarget(Mt),Bt.updateRenderTargetMipmap(Mt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let ie=0,Je=U.length;ie<Je;ie++){let Ae=U[ie],{object:we,geometry:xn,material:Dt,group:Pn}=Ae;if(Dt.side===Ti&&we.layers.test(k.layers)){let ge=Dt.side;Dt.side=Wn,Dt.needsUpdate=!0,Ze(we,Z,k,xn,Dt,Pn),Dt.side=ge,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(Bt.updateMultisampleRenderTarget(Mt),Bt.updateRenderTargetMipmap(Mt))}C.setRenderTarget(St,wt,Ft),C.setClearColor(q,rt),ne!==void 0&&(k.viewport=ne),C.toneMapping=Yt}function ke(b,U,Z){let k=U.isScene===!0?U.overrideMaterial:null;for(let X=0,Mt=b.length;X<Mt;X++){let Pt=b[X],{object:St,geometry:wt,group:Ft}=Pt,Yt=Pt.material;Yt.allowOverride===!0&&k!==null&&(Yt=k),St.layers.test(Z.layers)&&Ze(St,U,Z,wt,Yt,Ft)}}function Ze(b,U,Z,k,X,Mt){N!==null&&X.isNodeMaterial&&N.setObject(b,X),b.onBeforeRender(C,U,Z,k,X,Mt),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(C,U,Z,k,b,Mt),X.transparent===!0&&X.side===Ti&&X.forceSinglePass===!1?(X.side=Wn,X.needsUpdate=!0,C.renderBufferDirect(Z,U,k,X,b,Mt),X.side=$s,X.needsUpdate=!0,C.renderBufferDirect(Z,U,k,X,b,Mt),X.side=Ti):C.renderBufferDirect(Z,U,k,X,b,Mt),b.onAfterRender(C,U,Z,k,X,Mt)}function tn(b){let U=0;for(let Z of b)Z.texture!==null&&U++;return U}function jn(b,U,Z){U.isScene!==!0&&(U=oe);let k=Ut.get(b),X=E.state.lights,Mt=E.state.shadowsArray,Pt=X.state.version,St=it.getParameters(b,X.state,Mt,U,Z,E.state.lightProbeGridArray),wt=it.getProgramCacheKey(St),Ft=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let Yt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=A.get(b.envMap||k.environment,Yt),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ft===void 0&&(b.addEventListener("dispose",Tt),Ft=new Map,k.programs=Ft,k.programVariants=new Map);let ne=Ft.get(wt);if(ne!==void 0){if(k.currentProgram===ne&&k.lightsStateVersion===Pt)return Ve(b,St),ne}else St.uniforms=it.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,Z,St),b.onBeforeCompile(St,C),ne=it.acquireProgram(St,wt),Ft.set(wt,ne),k.uniforms=St.uniforms;let Lt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=j.uniform),Ve(b,St),k.needsLights=Xa(b),k.lightsStateVersion=Pt,k.needsLights&&(Lt.ambientLightColor.value=X.state.ambient,Lt.lightProbe.value=X.state.probe,Lt.sunLights.value=X.state.sun,Lt.sunLightShadows.value=X.state.sunShadow,Lt.directionalLights.value=X.state.directional,Lt.directionalLightShadows.value=X.state.directionalShadow,Lt.spotLights.value=X.state.spot,Lt.spotLightShadows.value=X.state.spotShadow,Lt.rectAreaLights.value=X.state.rectArea,Lt.ltc_1.value=X.state.rectAreaLTC1,Lt.ltc_2.value=X.state.rectAreaLTC2,Lt.pointLights.value=X.state.point,Lt.pointLightShadows.value=X.state.pointShadow,Lt.hemisphereLights.value=X.state.hemi,Lt.sunShadowMatrix.value=X.state.sunShadowMatrix,Lt.sunShadowCascade.value=X.state.sunShadowCascade,Lt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Lt.spotLightMatrix.value=X.state.spotLightMatrix,Lt.spotLightMap.value=X.state.spotLightMap,Lt.pointShadowMatrix.value=X.state.pointShadowMatrix),k.numLightProbeGrids=tn(E.state.lightProbeGridArray),k.currentProgram=ne,k.uniformsList=null,ne}function Ir(b,U,Z,k,X){let Mt=Ut.get(b),Pt=Mt.currentProgram.id+","+k+","+X,St=Mt.programVariants.get(Pt);return St===void 0?(St=jn(b,U,Z),Mt.programVariants.set(Pt,St)):(Mt.currentProgram=St,Mt.uniformsList=null,Mt.outputColorSpace=k,Mt.toneMapping=X),St}function en(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Ao.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Ve(b,U){let Z=Ut.get(b);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function di(b,U,Z,k,X){U.isScene!==!0&&(U=oe),Bt.resetTextureUnits();let Mt=U.fog,Pt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,St=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:se.workingColorSpace,wt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ft=A.get(k.envMap||Pt,wt),Yt=k.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ne=!!Z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Lt=!!Z.morphAttributes.position,ie=!!Z.morphAttributes.normal,Je=!!Z.morphAttributes.color,Ae=Zi;k.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ae=C.toneMapping);let we=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xn=we!==void 0?we.length:0,Dt=Ut.get(k),Pn=E.state.lights;if(ee===!0&&(Y===!0||b!==R)){let De=b===R&&k.id===z;j.setState(k,b,De)}let ge=!1,Qs=!1;k.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==Pn.state.version||X.isBatchedMesh&&Dt.batching===!1||!X.isBatchedMesh&&Dt.batching===!0||X.isBatchedMesh&&Dt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Dt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Dt.instancing===!1||!X.isInstancedMesh&&Dt.instancing===!0||X.isSkinnedMesh&&Dt.skinning===!1||!X.isSkinnedMesh&&Dt.skinning===!0||X.isInstancedMesh&&Dt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Dt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Dt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Dt.instancingMorph===!1&&X.morphTexture!==null||Dt.envMap!==Ft||k.fog===!0&&Dt.fog!==Mt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==j.numPlanes||Dt.numIntersection!==j.numIntersection)||Dt.vertexAlphas!==Yt||Dt.vertexTangents!==ne||Dt.morphTargets!==Lt||Dt.morphNormals!==ie||Dt.morphColors!==Je||Dt.morphTargetsCount!==xn||Dt.numLightProbeGrids!==tn(E.state.lightProbeGridArray)?ge=!0:(Dt.outputColorSpace!==St||Dt.toneMapping!==Ae)&&(Qs=!0):(ge=!0,Dt.__version=k.version);let vn=Dt.currentProgram;(ge===!0||Qs===!0)&&(vn=Qs===!0?Ir(k,U,X,St,Ae):jn(k,U,X),N&&k.isNodeMaterial&&N.onUpdateProgram(k,vn,Dt));let qa=!1,bs=!1,js=!1,fe=vn.getUniforms(),dn=Dt.uniforms;if(dt.useProgram(vn.program)&&(qa=!0,bs=!0,js=!0),k.id!==z&&(z=k.id,bs=!0),qa||R!==b){dt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),fe.setValue(F,"projectionMatrix",b.projectionMatrix),fe.setValue(F,"viewMatrix",b.matrixWorldInverse);let an=fe.map.cameraPosition;an!==void 0&&an.setValue(F,Re.setFromMatrixPosition(b.matrixWorld)),Wt.logarithmicDepthBuffer&&fe.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&fe.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,bs=!0,js=!0)}if(Dt.needsLights&&(Pn.state.sunShadowMap.length>0&&fe.setValue(F,"sunShadowMap",Pn.state.sunShadowMap,Bt),Pn.state.directionalShadowMap.length>0&&fe.setValue(F,"directionalShadowMap",Pn.state.directionalShadowMap,Bt),Pn.state.spotShadowMap.length>0&&fe.setValue(F,"spotShadowMap",Pn.state.spotShadowMap,Bt),Pn.state.pointShadowMap.length>0&&fe.setValue(F,"pointShadowMap",Pn.state.pointShadowMap,Bt)),X.isSkinnedMesh){fe.setOptional(F,X,"bindMatrix"),fe.setOptional(F,X,"bindMatrixInverse");let De=X.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),fe.setValue(F,"boneTexture",De.boneTexture,Bt))}X.isBatchedMesh&&(fe.setOptional(F,X,"batchingTexture"),fe.setValue(F,"batchingTexture",X._matricesTexture,Bt),fe.setOptional(F,X,"batchingIdTexture"),fe.setValue(F,"batchingIdTexture",X._indirectTexture,Bt),fe.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&fe.setValue(F,"batchingColorTexture",X._colorsTexture,Bt));let wi=Z.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&Q.update(X,Z,vn),(bs||Dt.receiveShadow!==X.receiveShadow)&&(Dt.receiveShadow=X.receiveShadow,fe.setValue(F,"receiveShadow",X.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(dn.envMapIntensity.value=U.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=Vb()),bs){if(fe.setValue(F,"toneMappingExposure",C.toneMappingExposure),Dt.needsLights&&Ro(dn,js),Mt&&k.fog===!0&&ft.refreshFogUniforms(dn,Mt),ft.refreshMaterialUniforms(dn,k,ut,vt,E.state.transmissionRenderTarget[b.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){let De=y,an=0;for(let ji of E.state.lightProbeGridArray)ji.texture!==null&&(De.textures[an]=ji.texture,De.min[an]=ji.boundingBox.min,De.max[an]=ji.boundingBox.max,De.resolution[an]=ji.resolution,an++);for(let ji in De)De[ji].length=an;dn.probesSH.value=De.textures,dn.probesMin.value=De.min,dn.probesMax.value=De.max,dn.probesResolution.value=De.resolution}Ao.upload(F,en(Dt),dn,Bt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ao.upload(F,en(Dt),dn,Bt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&fe.setValue(F,"center",X.center),fe.setValue(F,"modelViewMatrix",X.modelViewMatrix),fe.setValue(F,"normalMatrix",X.normalMatrix),fe.setValue(F,"modelMatrix",X.matrixWorld),k.uniformsGroups!==void 0){let De=k.uniformsGroups;for(let an=0,ji=De.length;an<ji;an++){let fd=De[an];at.update(fd,vn),at.bind(fd,vn)}}return vn}function Ro(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Xa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(b,U,Z){let k=Ut.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ut.get(b.texture).__webglTexture=U,Ut.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let Z=Ut.get(b);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,Z=0){J=b,H=U,O=Z;let k=null,X=!1,Mt=!1;if(b){let St=Ut.get(b);if(St.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(F.FRAMEBUFFER,St.__webglFramebuffer),tt.copy(b.viewport),yt.copy(b.scissor),Nt=b.scissorTest,dt.viewport(tt),dt.scissor(yt),dt.setScissorTest(Nt),z=-1;return}else if(St.__webglFramebuffer===void 0)Bt.setupRenderTarget(b);else if(St.__hasExternalTextures)Bt.rebindTextures(b,Ut.get(b.texture).__webglTexture,Ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Yt=b.depthTexture;if(St.__boundDepthTexture!==Yt){if(Yt!==null&&Ut.has(Yt)&&(b.width!==Yt.image.width||b.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(b)}}let wt=b.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(Mt=!0);let Ft=Ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?k=Ft[U][Z]:k=Ft[U],X=!0):b.samples>0&&Bt.useMultisampledRTT(b)===!1?k=Ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Ft)?k=Ft[Z]:k=Ft,tt.copy(b.viewport),yt.copy(b.scissor),Nt=b.scissorTest}else tt.copy(Et).multiplyScalar(ut).floor(),yt.copy(zt).multiplyScalar(ut).floor(),Nt=It;if(Z!==0&&(k=G),dt.bindFramebuffer(F.FRAMEBUFFER,k)&&dt.drawBuffers(b,k),dt.viewport(tt),dt.scissor(yt),dt.setScissorTest(Nt),X){let St=Ut.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,Z)}else if(Mt){let St=U;for(let wt=0;wt<b.textures.length;wt++){let Ft=Ut.get(b.textures[wt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+wt,Ft.__webglTexture,Z,St)}}else if(b!==null&&Z!==0){let St=Ut.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,St.__webglTexture,Z)}z=-1};function Ms(b){let U=Ut.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=Wt.textureFormatReadable(b.format),U.__typeReadable=Wt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,Z,k,X,Mt,Pt,St=0){if(!(b&&b.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt],Array.isArray(wt)&&(wt=wt[0])),wt){dt.bindFramebuffer(F.FRAMEBUFFER,wt);try{let Ft=b.textures[St],Yt=Ft.format,ne=Ft.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+St);let Lt=Ms(Ft);if(Lt.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&Z>=0&&Z<=b.height-X&&F.readPixels(U,Z,k,X,lt.convert(Yt),lt.convert(ne),Mt)}finally{let Ft=J!==null?Ut.get(J).__webglFramebuffer:null;dt.bindFramebuffer(F.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(b,U,Z,k,X,Mt,Pt,St=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt],Array.isArray(wt)&&(wt=wt[0])),wt)if(U>=0&&U<=b.width-k&&Z>=0&&Z<=b.height-X){dt.bindFramebuffer(F.FRAMEBUFFER,wt);let Ft=b.textures[St],Yt=Ft.format,ne=Ft.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+St);let Lt=Ms(Ft);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ie=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ie),F.bufferData(F.PIXEL_PACK_BUFFER,Mt.byteLength,F.STREAM_READ),F.readPixels(U,Z,k,X,lt.convert(Yt),lt.convert(ne),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Je=J!==null?Ut.get(J).__webglFramebuffer:null;dt.bindFramebuffer(F.FRAMEBUFFER,Je);let Ae=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await xg(F,Ae,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ie),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Mt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ie),F.deleteSync(Ae),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,Z=0){let k=Math.pow(2,-Z),X=Math.floor(b.image.width*k),Mt=Math.floor(b.image.height*k),Pt=U!==null?U.x:0,St=U!==null?U.y:0;Bt.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Pt,St,X,Mt),dt.unbindTexture()},this.copyTextureToTexture=function(b,U,Z=null,k=null,X=0,Mt=0){let Pt,St,wt,Ft,Yt,ne,Lt,ie,Je,Ae=b.isCompressedTexture?b.mipmaps[Mt]:b.image;if(Z!==null)Pt=Z.max.x-Z.min.x,St=Z.max.y-Z.min.y,wt=Z.isBox3?Z.max.z-Z.min.z:1,Ft=Z.min.x,Yt=Z.min.y,ne=Z.isBox3?Z.min.z:0;else{let fe=Math.pow(2,-X);Pt=Math.floor(Ae.width*fe),St=Math.floor(Ae.height*fe),b.isDataArrayTexture?wt=Ae.depth:b.isData3DTexture?wt=Math.floor(Ae.depth*fe):wt=1,Ft=0,Yt=0,ne=0}k!==null?(Lt=k.x,ie=k.y,Je=k.z):(Lt=0,ie=0,Je=0);let we=lt.convert(U.format),xn=lt.convert(U.type),Dt;U.isData3DTexture?(Bt.setTexture3D(U,0),Dt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Bt.setTexture2DArray(U,0),Dt=F.TEXTURE_2D_ARRAY):(Bt.setTexture2D(U,0),Dt=F.TEXTURE_2D),dt.activeTexture(F.TEXTURE0),dt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),dt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),dt.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Pn=dt.getParameter(F.UNPACK_ROW_LENGTH),ge=dt.getParameter(F.UNPACK_IMAGE_HEIGHT),Qs=dt.getParameter(F.UNPACK_SKIP_PIXELS),vn=dt.getParameter(F.UNPACK_SKIP_ROWS),qa=dt.getParameter(F.UNPACK_SKIP_IMAGES);dt.pixelStorei(F.UNPACK_ROW_LENGTH,Ae.width),dt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae.height),dt.pixelStorei(F.UNPACK_SKIP_PIXELS,Ft),dt.pixelStorei(F.UNPACK_SKIP_ROWS,Yt),dt.pixelStorei(F.UNPACK_SKIP_IMAGES,ne);let bs=b.isDataArrayTexture||b.isData3DTexture,js=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let fe=Ut.get(b),dn=Ut.get(U),wi=Ut.get(fe.__renderTarget),De=Ut.get(dn.__renderTarget);dt.bindFramebuffer(F.READ_FRAMEBUFFER,wi.__webglFramebuffer),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let an=0;an<wt;an++)bs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.get(b).__webglTexture,X,ne+an),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.get(U).__webglTexture,Mt,Je+an)),F.blitFramebuffer(Ft,Yt,Ft+Pt,Yt+St,Lt,ie,Lt+Pt,ie+St,F.DEPTH_BUFFER_BIT,F.NEAREST);dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Ut.has(b)){let fe=Ut.get(b),dn=Ut.get(U);dt.bindFramebuffer(F.READ_FRAMEBUFFER,I),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let wi=0;wi<wt;wi++)bs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fe.__webglTexture,X,ne+wi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fe.__webglTexture,X),js?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,Mt,Je+wi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,Mt),X!==0?F.blitFramebuffer(Ft,Yt,Ft+Pt,Yt+St,Lt,ie,Lt+Pt,ie+St,F.COLOR_BUFFER_BIT,F.NEAREST):js?F.copyTexSubImage3D(Dt,Mt,Lt,ie,Je+wi,Ft,Yt,Pt,St):F.copyTexSubImage2D(Dt,Mt,Lt,ie,Ft,Yt,Pt,St);dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else js?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Dt,Mt,Lt,ie,Je,Pt,St,wt,we,xn,Ae.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Dt,Mt,Lt,ie,Je,Pt,St,wt,we,Ae.data):F.texSubImage3D(Dt,Mt,Lt,ie,Je,Pt,St,wt,we,xn,Ae):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Mt,Lt,ie,Pt,St,we,xn,Ae.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Mt,Lt,ie,Ae.width,Ae.height,we,Ae.data):F.texSubImage2D(F.TEXTURE_2D,Mt,Lt,ie,Pt,St,we,xn,Ae);dt.pixelStorei(F.UNPACK_ROW_LENGTH,Pn),dt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge),dt.pixelStorei(F.UNPACK_SKIP_PIXELS,Qs),dt.pixelStorei(F.UNPACK_SKIP_ROWS,vn),dt.pixelStorei(F.UNPACK_SKIP_IMAGES,qa),Mt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Dt),dt.unbindTexture()},this.initRenderTarget=function(b){Ut.get(b).__webglFramebuffer===void 0&&Bt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Bt.setTextureCube(b,0):b.isData3DTexture?Bt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Bt.setTexture2DArray(b,0):Bt.setTexture2D(b,0),dt.unbindTexture()},this.resetState=function(){H=0,O=0,J=null,dt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};Zt.registerPlugin(Gt);var fn=matchMedia("(prefers-reduced-motion: reduce)").matches,ud=matchMedia("(hover: hover) and (pointer: fine)").matches,Vt=(s,t=document)=>t.querySelector(s),Qi=(s,t=document)=>Array.from(t.querySelectorAll(s)),Gb=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),Rh=(s,t,e)=>s+(t-s)*e,Pr=(s,t,e)=>{let n=Gb((e-s)/(t-s));return n*n*(3-2*n)},Ki=null;fn||(Ki=new fm({duration:1.15,smoothWheel:!0}),Ki.on("scroll",Gt.update),Zt.ticker.add(s=>Ki.raf(s*1e3)),Zt.ticker.lagSmoothing(0),Ki.stop());Qi('a[href^="#"]').forEach(s=>{s.addEventListener("click",t=>{let e=s.getAttribute("href"),n=e.length>1&&Vt(e);n&&(t.preventDefault(),Ki?Ki.scrollTo(n,{offset:e==="#top"?0:-60,duration:1.6}):n.scrollIntoView())})});function Hb(){let s=Vt(".nav"),t=Vt(".dock"),e=Vt("#join"),n=Vt(".close"),i=0,r=()=>{let o=scrollY,a=innerHeight;s.classList.toggle("is-solid",o>a*.5),s.classList.toggle("is-hidden",o>a&&o>i+2),o<i-2&&s.classList.remove("is-hidden"),i=o;let l=e.getBoundingClientRect(),c=n.getBoundingClientRect(),h=l.top<a*.7&&l.bottom>a*.2||c.top<a*.8;t.classList.toggle("is-on",o>a*1.2&&!h)};addEventListener("scroll",r,{passive:!0}),r()}var Wb=`
uniform float uOpen,uTime,uHalf,uH,uY0,uSide;
varying vec2 vUv;varying vec3 vN;varying float vX;
void main(){
  vUv=uv;float u=uv.x;float e=uOpen;
  float k=mix(1.05,.16,e);
  float hang=1.-uv.y;
  float x=uSide*(uHalf-u*uHalf*k);
  x-=uSide*sin(e*3.14159)*hang*hang*uHalf*.12*u;
  float fr=26.;float amp=uHalf*mix(.02,.046,e);
  float ph=u*fr+uSide*1.3;
  float sway=sin(u*5.+uTime*.8+uSide)*uHalf*.012*hang;
  float z=sin(ph)*amp+sin(ph*2.3+1.)*amp*.35+sway;
  float dz=cos(ph)*fr*amp+cos(ph*2.3+1.)*2.3*fr*amp*.35;
  float dx=-uSide*uHalf*k;
  vec3 n=normalize(vec3(-dz,0.,dx));
  vN=n*sign(n.z+1e-5);
  vX=x;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(x,uY0+uv.y*uH,z,1.);
}`,Xb=`
precision highp float;
uniform float uOpen,uHalf;
varying vec2 vUv;varying vec3 vN;varying float vX;
void main(){
  vec3 n=normalize(vN);
  vec3 L=normalize(vec3(.25,.35,1.));
  float d=max(dot(n,L),0.);
  float rim=pow(1.-abs(n.z),1.5);
  vec3 base=vec3(.50,.045,.19);
  vec3 c=base*(.14+1.05*d*d)+vec3(1.,.28,.5)*rim*.2;
  float spill=uOpen*exp(-abs(vX)/(uHalf*.5));
  c+=vec3(1.,.6,.34)*spill*.5*d;
  c*=mix(1.1,.42,vUv.y);
  float trim=smoothstep(.062,.056,vUv.y)*smoothstep(.02,.026,vUv.y);
  c=mix(c,vec3(.96,.72,.38)*(.35+.9*d),trim);
  gl_FragColor=vec4(c,1.);
}`,i_="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",qb=`
precision highp float;
uniform float uAsp,uGlow,uTime;varying vec2 vUv;
float beam(vec2 p,vec2 a,vec2 b,float w){vec2 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);float d=length(pa-ba*h);return smoothstep(w*(.25+h),0.,d)*(1.-h*.55);}
void main(){
  vec2 p=vUv-.5;p.x*=uAsp;
  float d=length(p*vec2(1.,1.5));
  float g=exp(-d*3.);
  vec3 c=mix(vec3(.05,.015,.04),vec3(.5,.06,.22),g);
  c+=vec3(1.,.55,.32)*g*g*.6;
  float fl=.9+.1*sin(uTime*1.7);
  c+=vec3(1.,.72,.55)*(beam(p,vec2(-.8,.62),vec2(.06,-.25),.2)+beam(p,vec2(.8,.62),vec2(-.06,-.25),.2))*.2*fl;
  c*=mix(.35,1.,uGlow);
  gl_FragColor=vec4(c,1.);
}`,Yb=`
precision highp float;
uniform float uGlow;varying vec2 vUv;
void main(){
  vec2 q=vec2((vUv.x-.5)*3.2,(1.-vUv.y)*2.2);
  float g=exp(-length(q)*1.5);
  float streak=exp(-abs(vUv.x-.5)*9.)*vUv.y;
  vec3 c=vec3(.06,.018,.045)+vec3(1.,.3,.5)*g*.55*uGlow+vec3(1.,.5,.6)*streak*.22*uGlow;
  c+=vec3(.05,.012,.03)*(1.-vUv.y);
  gl_FragColor=vec4(c,1.);
}`;function Zb(){let s=Vt(".hero__stage"),t=Vt(".hero__canvas"),e=Vt(".hero__copy"),n=Vt(".hero__after"),i=Vt(".hero__hint"),r=Vt(".hero__shade"),o=Qi(".hero__title .line > span"),a={p:0},l=null;if(!fn)try{l=Jb(t,s)}catch{l=null}function c(h){a.p=h,Zt.set(e,{opacity:1-Pr(.02,.2,h),y:-60*Pr(.02,.25,h)}),Zt.set(i,{opacity:1-Pr(0,.08,h)}),Zt.set(n,{opacity:Pr(.72,.9,h),y:30*(1-Pr(.72,.92,h))}),Zt.set(r,{opacity:1-.8*Pr(.08,.6,h)}),l&&l.setProgress(h)}return fn?(Zt.set(n,{opacity:0}),{intro(){}}):(l||(t.style.display="none"),Gt.create({trigger:s,start:"top top",end:"+=230%",pin:!0,scrub:!0,anticipatePin:1,onUpdate:h=>c(h.progress),onToggle:h=>l&&l.setActive(h.isActive)}),c(0),Zt.set(o,{yPercent:110}),Zt.set([Vt(".hero__lead"),Vt(".hero__actions"),i],{opacity:0,y:20}),l&&l.setActive(!0),{intro(){Zt.to(o,{yPercent:0,duration:1.2,ease:"expo.out",stagger:.1}),Zt.to([Vt(".hero__lead"),Vt(".hero__actions")],{opacity:1,y:0,duration:1,ease:"power3.out",stagger:.12,delay:.45}),Zt.to(i,{opacity:1,y:0,duration:.8,delay:1.1,clearProps:"transform"})}})}function Jb(s,t){let e=new Eh({canvas:s,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setClearColor(1444371,1);let n=new Sa,i=42,r=7.2,o=3.5,a=-3.2,l=new kn(i,1,.1,60),c=Math.tan(i*Math.PI/360),h=rt=>({uOpen:{value:0},uTime:{value:0},uHalf:{value:3},uH:{value:6},uY0:{value:-3},uSide:{value:rt}}),d=new Yi(1,1,200,28),f=[1,-1].map(rt=>{let ct=new Hn(d,new Kn({uniforms:h(rt),vertexShader:Wb,fragmentShader:Xb,side:Ti}));return ct.frustumCulled=!1,n.add(ct),ct}),u={uAsp:{value:1},uGlow:{value:0},uTime:{value:0}},m=new Hn(new Yi(1,1),new Kn({uniforms:u,vertexShader:i_,fragmentShader:qb}));m.position.z=a,n.add(m);let _={uGlow:{value:0}},p=new Hn(new Yi(1,1),new Kn({uniforms:_,vertexShader:i_,fragmentShader:Yb}));p.rotation.x=-Math.PI/2,n.add(p);let g=document.createElement("canvas");g.width=1600,g.height=800;let v=g.getContext("2d");v.textAlign="center",v.textBaseline="alphabetic",v.font="900 300px Heebo, Arial, sans-serif";let w=()=>{v.fillText("Opulent",800,350),v.fillText("Charm",800,640)};v.shadowColor="#ff2f78",v.shadowBlur=90,v.fillStyle="#ff4f87",w(),w(),v.shadowBlur=30,w(),v.shadowBlur=8,v.shadowColor="#fff",v.fillStyle="#ffe9f0",w();let y=new Aa(g);y.colorSpace=zn;let T=new xo({map:y,transparent:!0,blending:To,depthWrite:!1}),E=new Hn(new Yi(2,1),T);E.position.z=a+.25,n.add(E);let x=260,S=new Float32Array(x*3);for(let rt=0;rt<x;rt++)S[rt*3]=(Math.random()-.5)*9,S[rt*3+1]=(Math.random()-.5)*6,S[rt*3+2]=a+.4+Math.random()*3.6;let P=new Li;P.setAttribute("position",new Mi(S,3));let C=new vo({color:16763296,size:.028,transparent:!0,opacity:0,blending:To,depthWrite:!1}),D=new ms;D.add(new wa(P,C)),n.add(D);let N=1,G=1,I=!1,B=0,H=0,O=0,J=0,z=0,R=0;function tt(){let rt=t.getBoundingClientRect();N=Math.max(2,rt.width),G=Math.max(2,rt.height),e.setPixelRatio(Math.min(devicePixelRatio||1,N<700?1.6:1.75)),e.setSize(N,G,!1);let ct=N/G;l.aspect=ct,l.updateProjectionMatrix();let vt=2*c*r,ut=vt*ct,Ct=o-a,ce=2*c*Ct,Et=ce*ct,zt=-ce*.36,It=vt*.62;f.forEach(Kt=>{let Re=Kt.material.uniforms;Re.uHalf.value=ut/2*1.1,Re.uY0.value=zt,Re.uH.value=It-zt});let Ot=r-a,re=2*c*Ot*1.25,ee=re*ct;m.scale.set(ee,re,1),u.uAsp.value=ct,p.scale.set(ee,6.4,1),p.position.set(0,zt,a+3.2);let Y=Math.min(Et*.94,ce*1.25);E.scale.set(Y/2,Y/2,1),E.position.y=ce*.1}tt(),addEventListener("resize",tt),ud&&addEventListener("pointermove",rt=>{z=rt.clientX/innerWidth-.5,R=rt.clientY/innerHeight-.5},{passive:!0});let yt=performance.now();function Nt(rt){if(B=0,!I||document.hidden)return;let ct=(rt-yt)/1e3;O+=(z-O)*.05,J+=(R-J)*.05;let vt=Pr(.06,.78,H),ut=H*H*(3-2*H);f.forEach(Ct=>{Ct.material.uniforms.uOpen.value=vt,Ct.material.uniforms.uTime.value=ct}),u.uGlow.value=.25+.75*vt,u.uTime.value=ct,_.uGlow.value=.2+.8*vt,T.opacity=(.35+.65*vt)*(.93+.07*Math.sin(ct*9)*Math.sin(ct*2.3)),C.opacity=.55*vt,D.position.y=Math.sin(ct*.25)*.15,D.rotation.y=Math.sin(ct*.1)*.08,l.position.set(O*.35,.05-J*.2,Rh(r,o,ut)),l.lookAt(O*.1,E.position.y*.5*ut,a),e.render(n,l),B=requestAnimationFrame(Nt)}let q=()=>{I&&!B&&(B=requestAnimationFrame(Nt))};return document.addEventListener("visibilitychange",q),{setProgress(rt){H=rt},setActive(rt){I=rt,q()}}}var $b=`precision highp float;
uniform vec2 r;uniform float t;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return s;}
void main(){
vec2 uv=gl_FragCoord.xy/r.xy;vec2 p=uv;p.x*=r.x/r.y;float tt=t*.07;
vec2 q=vec2(fbm(p*1.4+vec2(0.,tt)),fbm(p*1.4+vec2(5.2,-tt*1.2)));
vec2 w=vec2(fbm(p*1.2+3.4*q+vec2(1.7,9.2)+tt),fbm(p*1.2+3.4*q+vec2(8.3,2.8)-tt));
float f=fbm(p+3.8*w);
float fold=pow(abs(sin((f*7.+w.x*3.)*3.14159)),2.5);
vec3 c=mix(vec3(.16,.03,.09),vec3(.56,.07,.25),smoothstep(.15,.7,f));
c=mix(c,vec3(1.,.31,.53),smoothstep(.35,.9,f*w.y*2.1)*.9);
c+=vec3(1.,.82,.7)*fold*.22*smoothstep(.25,.85,f);
gl_FragColor=vec4(c,1.);}`;function Kb(s){if(!s||fn)return null;let t=s.getContext("webgl",{antialias:!1,alpha:!1});if(!t)return s.style.display="none",null;let e=(f,u)=>{let m=t.createShader(f);return t.shaderSource(m,u),t.compileShader(m),m},n=t.createProgram();if(t.attachShader(n,e(t.VERTEX_SHADER,"attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}")),t.attachShader(n,e(t.FRAGMENT_SHADER,$b)),t.linkProgram(n),!t.getProgramParameter(n,t.LINK_STATUS))return s.style.display="none",null;t.useProgram(n),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);let i=t.getAttribLocation(n,"p");t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0);let r=t.getUniformLocation(n,"r"),o=t.getUniformLocation(n,"t"),a=!1,l=0,c=()=>{let f=s.getBoundingClientRect(),u=f.width<700?.5:.55;s.width=Math.max(2,f.width*u),s.height=Math.max(2,f.height*u),t.viewport(0,0,s.width,s.height)};c(),addEventListener("resize",c);let h=performance.now(),d=f=>{l=0,!(!a||document.hidden)&&(t.uniform2f(r,s.width,s.height),t.uniform1f(o,(f-h)/1e3),t.drawArrays(t.TRIANGLES,0,3),l=requestAnimationFrame(d))};return new IntersectionObserver(f=>{a=f[0].isIntersecting,a&&!l&&(l=requestAnimationFrame(d))}).observe(s),!0}function Qb(){let s=Vt(".open__stage"),t=Vt(".open__mask"),e=Vt(".open__word"),n=Vt(".open__l1"),i=Vt(".open__l2"),r=Vt(".open__fill"),o=Vt(".open__sub"),a=Vt(".open__statement");if(Kb(Vt(".open__silk")),fn)return;let l="0 0";function c(){let d=s.clientWidth,f=s.clientHeight;t.setAttribute("viewBox",`0 0 ${d} ${f}`);let u=Math.min(d*.2,f*.3);e.setAttribute("font-size",u),n.setAttribute("x",d/2),i.setAttribute("x",d/2);let m=1;try{m=Math.max(n.getComputedTextLength(),i.getComputedTextLength())}catch{}m>1&&(u=Math.min(u*(d*.88)/m,f*.3),e.setAttribute("font-size",u));let _=f*.46;n.setAttribute("y",_-u*.04),i.setAttribute("y",_+u*.82);let p=d/2,g=_-u*.4;try{let v=n.getExtentOfChar(3);p=v.x+v.width*.2,g=v.y+v.height*.5}catch{}l=`${p} ${g}`}c(),Zt.timeline({scrollTrigger:{trigger:s,start:"top top",end:"+=220%",pin:!0,scrub:!0,anticipatePin:1,invalidateOnRefresh:!0,onRefreshInit:c}}).to(o,{opacity:0,y:20,duration:.12},0).fromTo(e,{scale:1,svgOrigin:()=>l},{scale:70,svgOrigin:()=>l,ease:"power3.in",duration:.55},0).to(r,{opacity:0,duration:.08},.5).fromTo(a,{opacity:0,y:40},{opacity:1,y:0,duration:.2,ease:"power2.out"},.6).to({},{duration:.2})}function jb(){let s=Vt(".about__text"),t=s.textContent.trim();s.setAttribute("aria-label",t),s.innerHTML=t.split(/\s+/).map(n=>`<span class="word" aria-hidden="true">${n}</span>`).join(" ");let e=Qi(".word",s);if(fn){e.forEach(n=>n.classList.add("is-on"));return}Gt.create({trigger:s,start:"top 78%",end:"bottom 45%",scrub:!0,onUpdate:n=>{let i=Math.round(n.progress*e.length);e.forEach((r,o)=>r.classList.toggle("is-on",o<i))}}),Zt.from(".about__vision p",{yPercent:30,opacity:0,duration:1.1,ease:"expo.out",scrollTrigger:{trigger:".about__vision",start:"top 82%",once:!0}}),Zt.from(".about__facts li",{y:30,opacity:0,duration:.9,ease:"power3.out",stagger:.1,scrollTrigger:{trigger:".about__facts",start:"top 86%",once:!0}})}function tT(){let s=Vt(".day__stage"),t=Vt(".day__canvas"),e=Vt(".day__meter"),n=Vt(".day__count"),i=Vt(".day__bar i"),r=Qi(".day__step");if(fn){t.style.display="none",e.style.display="none";return}let o=t.getContext("2d"),a=1,l=1,c=1,h=0,d=0,f=100,u=0,m=Array.from({length:130},()=>[Math.random(),Math.random()*.8,Math.random()*1.4+.4,Math.random()*6.28]);function _(){let T=s.getBoundingClientRect();a=T.width,l=T.height,c=Math.min(devicePixelRatio||1,2),t.width=a*c,t.height=l*c;let E=a>900;f=E?Math.min(a*.2,l*.33):Math.min(a*.38,l*.2),h=E?a*.27:a*.5,d=E?l*.54:f+96,e.style.setProperty("--cx",h+"px"),e.style.setProperty("--cy",d+"px"),e.style.setProperty("--r",f+"px"),p(performance.now())}function p(T){let E=6+u*24,x=E%24,S=Math.cos((x-13)/24*Math.PI*2)*.5+.5;o.setTransform(c,0,0,c,0,0);let P=o.createLinearGradient(0,0,0,l);P.addColorStop(0,`rgb(${Math.round(Rh(22,122,S))},${Math.round(Rh(10,16,S))},${Math.round(Rh(19,52,S))})`),P.addColorStop(1,"#160a13"),o.fillStyle=P,o.fillRect(0,0,a,l);let C=1-S;C>.02&&(o.fillStyle="#ffe9f0",m.forEach(J=>{o.globalAlpha=C*(.35+.65*Math.abs(Math.sin(T/900+J[3]))),o.beginPath(),o.arc(J[0]*a,J[1]*l,J[2],0,6.283),o.fill()}),o.globalAlpha=1);let D=6/24*Math.PI*2-Math.PI/2,N=D+u*Math.PI*2,G=o.createRadialGradient(h,d,f*.2,h,d,f*1.5);G.addColorStop(0,`rgba(255,79,135,${.1+.14*S})`),G.addColorStop(1,"rgba(255,79,135,0)"),o.fillStyle=G,o.beginPath(),o.arc(h,d,f*1.5,0,6.283),o.fill();for(let J=0;J<96;J++){let z=J/96*Math.PI*2-Math.PI/2,R=J%4===0,tt=J%24===0,yt=(z-D)%(Math.PI*2);yt<0&&(yt+=Math.PI*2);let Nt=yt<=u*Math.PI*2+1e-4,q=f,rt=f-(tt?f*.14:R?f*.08:f*.04);o.strokeStyle=Nt?"rgba(255,79,135,.95)":"rgba(238,231,226,.22)",o.lineWidth=tt?2.5:R?1.6:1,o.beginPath(),o.moveTo(h+Math.cos(z)*q,d+Math.sin(z)*q),o.lineTo(h+Math.cos(z)*rt,d+Math.sin(z)*rt),o.stroke()}o.lineWidth=1.5,o.strokeStyle="rgba(238,231,226,.16)",o.beginPath(),o.arc(h,d,f*1.12,0,6.283),o.stroke(),o.lineWidth=4,o.lineCap="round",o.strokeStyle="#ff4f87",o.beginPath(),o.arc(h,d,f*1.12,D,N),o.stroke();let I=h+Math.cos(N)*f*1.12,B=d+Math.sin(N)*f*1.12,H=S>.5?"243,183,100":"255,143,179",O=o.createRadialGradient(I,B,0,I,B,f*.5);O.addColorStop(0,`rgba(${H},.75)`),O.addColorStop(.25,`rgba(${H},.22)`),O.addColorStop(1,`rgba(${H},0)`),o.fillStyle=O,o.beginPath(),o.arc(I,B,f*.5,0,6.283),o.fill(),o.fillStyle="#fff3e6",o.beginPath(),o.arc(I,B,Math.max(6,f*.045),0,6.283),o.fill(),o.fillStyle="rgba(238,231,226,.5)",o.font=`600 ${Math.max(11,f*.075)}px Heebo, Arial`,o.textAlign="center",o.textBaseline="middle",[["00",-Math.PI/2],["06",0],["12",Math.PI/2],["18",Math.PI]].forEach(([J,z])=>o.fillText(J,h+Math.cos(z)*f*.76,d+Math.sin(z)*f*.76))}function g(T){u=T;let E=Math.round((6+T*24)*60/5)*5,x=Math.floor(E/60)%24,S=E%60;n.textContent=`${String(x).padStart(2,"0")}:${String(S).padStart(2,"0")}`,n.classList.toggle("is-night",x>=20||x<6),i.style.transform=`scaleX(${T})`;let P=T<.24?0:T<.5?1:T<.76?2:3;r.forEach((C,D)=>C.classList.toggle("is-on",D===P))}_(),addEventListener("resize",_);let v=!1,w=0,y=T=>{w=0,v&&(p(T),w=requestAnimationFrame(y))};Gt.create({trigger:s,start:"top top",end:"+=330%",pin:!0,scrub:!0,anticipatePin:1,onUpdate:T=>g(T.progress),onRefresh:_}),new IntersectionObserver(T=>{v=T[0].isIntersecting,v&&!w&&(w=requestAnimationFrame(y))}).observe(s),g(0)}function eT(){let s=Qi(".svc__row");ud?s.forEach(t=>{t.addEventListener("pointerenter",()=>t.classList.add("is-on")),t.addEventListener("pointerleave",()=>t.classList.remove("is-on"))}):fn||s.forEach(t=>Gt.create({trigger:t,start:"top 58%",end:"bottom 42%",toggleClass:{targets:t,className:"is-on"}})),!fn&&(Zt.from(".services .h2",{yPercent:40,opacity:0,duration:1.1,ease:"expo.out",scrollTrigger:{trigger:".services__head",start:"top 84%",once:!0}}),s.forEach(t=>{Zt.from(Vt(".svc__word",t),{xPercent:12,opacity:0,duration:1.1,ease:"expo.out",scrollTrigger:{trigger:t,start:"top 92%",once:!0}})}))}function nT(){let s=Vt(".steps__stage"),t=Vt(".steps__track"),e=Vt(".steps__progress i");if(fn)return;let n=()=>Math.max(0,t.scrollWidth-s.clientWidth),i=Zt.to(t,{x:()=>n(),ease:"none",scrollTrigger:{trigger:s,start:"top top",end:()=>"+="+(n()+innerHeight*.4),pin:!0,scrub:!0,anticipatePin:1,invalidateOnRefresh:!0,onUpdate:r=>{e.style.transform=`scaleX(${r.progress})`}}});Qi(".card__art span").forEach(r=>{Zt.fromTo(r,{xPercent:-18},{xPercent:18,ease:"none",scrollTrigger:{trigger:r,containerAnimation:i,start:"left right",end:"right left",scrub:!0}})})}function iT(){let s=Qi(".veil__rows li");if(fn){s.forEach(t=>t.classList.add("is-clear"));return}Zt.from(".veil__title",{yPercent:35,opacity:0,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:".veil",start:"top 70%",once:!0}}),s.forEach(t=>{Gt.create({trigger:t,start:"top 60%",once:!0,onEnter:()=>t.classList.add("is-clear")}),t.addEventListener("pointerenter",()=>t.classList.add("is-clear")),t.addEventListener("touchstart",()=>t.classList.add("is-clear"),{passive:!0})})}function sT(){if(fn)return;let s=0;Ki&&Ki.on("scroll",t=>{s=t.velocity}),Qi(".marquee__track").forEach(t=>{Array.from(t.children).forEach(a=>{let l=a.cloneNode(!0);l.setAttribute("aria-hidden","true"),l.tabIndex!==void 0&&(l.tabIndex=-1),t.appendChild(l)});let e=parseFloat(t.dataset.speed||"0.045"),n=0,i=!1,r=1,o=()=>{let a=parseFloat(getComputedStyle(t).columnGap)||0;r=(t.scrollWidth+a)/2};o(),addEventListener("resize",o),addEventListener("load",o),t.querySelector("a")&&(t.addEventListener("pointerenter",()=>{ud&&(i=!0)}),t.addEventListener("pointerleave",()=>{i=!1})),Zt.ticker.add((a,l)=>{let c=i?0:e+Math.min(Math.abs(s)*.02,.5);n-=c*l,-n>=r&&(n+=r),t.style.transform=`translate3d(${n}px,0,0)`})}),Zt.ticker.add(()=>{s*=.9})}function rT(){fn||(Qi(".voice").forEach((s,t)=>{let e=Vt(".voice__img",s),n=Vt("img",s);Zt.fromTo(e,{clipPath:"inset(100% 0 0 0)"},{clipPath:"inset(0% 0 0 0)",duration:1.3,ease:"expo.out",delay:t*.12,scrollTrigger:{trigger:s,start:"top 88%",once:!0}}),Zt.fromTo(n,{yPercent:-12},{yPercent:0,ease:"none",scrollTrigger:{trigger:s,start:"top bottom",end:"bottom top",scrub:!0}})}),Zt.from(".press__list li",{y:30,opacity:0,duration:.9,ease:"power3.out",stagger:.08,scrollTrigger:{trigger:".press__list",start:"top 86%",once:!0}}))}function oT(){fn||([".steps__head .h2",".voices .h2",".press .h2",".blog .h2",".faq .h2",".contact .h2"].forEach(s=>{let t=Vt(s);t&&Zt.from(t,{yPercent:35,opacity:0,duration:1.1,ease:"expo.out",scrollTrigger:{trigger:t,start:"top 86%",once:!0}})}),Zt.from(".faq details",{y:26,opacity:0,duration:.8,ease:"power3.out",stagger:.07,scrollTrigger:{trigger:".faq__list",start:"top 82%",once:!0}}),Zt.from(".form",{y:50,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:".form",start:"top 86%",once:!0}}))}function aT(){Qi(".faq details").forEach(s=>{let t=Vt("summary",s),e=Vt("p",s);t.addEventListener("click",n=>{fn||(n.preventDefault(),s.open?Zt.to(e,{height:0,paddingBottom:0,opacity:0,duration:.4,ease:"power3.inOut",onComplete:()=>{s.open=!1,Zt.set(e,{clearProps:"all"}),Gt.refresh()}}):(s.open=!0,Zt.from(e,{height:0,paddingBottom:0,opacity:0,duration:.55,ease:"power3.out",onComplete:()=>{Zt.set(e,{clearProps:"all"}),Gt.refresh()}})))})})}function lT(){let s=Vt(".form"),t=Vt(".form__error"),e=Vt(".form__done");s.addEventListener("submit",n=>{n.preventDefault();let i=Vt("#f-name"),r=Vt("#f-phone"),o=Vt("#f-age");[i,r].forEach(h=>h.classList.remove("is-bad"));let a=r.value.replace(/\D/g,""),l="",c=null;if(i.value.trim()?a.length<9||a.length>13?(l="\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF. \u05D4\u05E7\u05DC\u05D9\u05D3\u05D9 \u05DE\u05E1\u05E4\u05E8 \u05DE\u05DC\u05D0, \u05DC\u05DE\u05E9\u05DC 0501234567.",c=r):o.checked||(l="\u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA \u05E6\u05E8\u05D9\u05DA \u05DC\u05D0\u05E9\u05E8 \u05E9\u05D0\u05EA \u05D1\u05EA 18 \u05D5\u05DE\u05E2\u05DC\u05D4.",c=o):(l="\u05D7\u05E1\u05E8 \u05E9\u05DD \u05D0\u05D5 \u05DB\u05D9\u05E0\u05D5\u05D9.",c=i),l){t.textContent=l,t.hidden=!1,c!==o&&c.classList.add("is-bad"),c.focus();return}t.hidden=!0,e.hidden=!1,fn||Zt.from(e,{opacity:0,duration:.5}),e.tabIndex=-1,e.focus()})}function cT(){let s=Vt(".close__stage"),t=Vt(".close__label");if(fn){Zt.set(".close__curtain",{scaleX:1}),Zt.set(t,{opacity:1}),t.classList.add("is-on");return}Zt.timeline({scrollTrigger:{trigger:s,start:"top top",end:"+=160%",pin:!0,scrub:!0,anticipatePin:1,onUpdate:n=>t.classList.toggle("is-on",n.progress>.8)}}).fromTo(".close__line",{opacity:0,scale:.92},{opacity:1,scale:1,duration:.2,ease:"power2.out"},0).to(".close__curtain",{scaleX:1,duration:.5,ease:"power2.inOut"},.3).to(t,{opacity:1,duration:.15},.78).from(".close__brand",{yPercent:40,duration:.2,ease:"power3.out"},.76).to({},{duration:.08})}function s_(){Hb();let s=Zb();Qb(),jb(),tT(),eT(),nT(),rT(),iT(),sT(),oT(),aT(),lT(),cT(),Gt.refresh();let t=Vt(".loader"),e=()=>{document.body.classList.remove("is-loading"),Ki&&Ki.start(),s.intro()};if(fn||!t){t&&t.remove(),e();return}let n=Vt(".loader__count span"),i={v:0};Zt.timeline().to(i,{v:100,duration:1.3,ease:"power2.inOut",onUpdate:()=>{n.textContent=Math.round(i.v)}}).to(".loader__inner",{opacity:0,y:-20,duration:.35,ease:"power2.in"}).to(".loader__half",{scaleX:0,duration:1.1,ease:"expo.inOut"},"-=0.05").add(e,"-=0.75").add(()=>t.remove())}var hT=document.fonts&&document.fonts.load?Promise.all([document.fonts.load("900 100px Heebo","Opulent"),document.fonts.load("900 100px Heebo","\u05D0\u05D1"),document.fonts.ready]):Promise.resolve();Promise.race([hT,new Promise(s=>setTimeout(s,2500))]).then(s_,s_);addEventListener("load",()=>Gt.refresh());})();
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
