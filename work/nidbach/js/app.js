var P0=Object.defineProperty;var I0=(r,t,e)=>t in r?P0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Bt=(r,t,e)=>I0(r,typeof t!="symbol"?t+"":t,e);function Hi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Hd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$o={duration:.5,overwrite:!1,delay:0},gh,un,Fe,hi=1e8,Ce=1/hi,lh=Math.PI*2,L0=lh/4,D0=0,Vd=Math.sqrt,U0=Math.cos,N0=Math.sin,en=function(t){return typeof t=="string"},We=function(t){return typeof t=="function"},Gi=function(t){return typeof t=="number"},hl=function(t){return typeof t=="undefined"},Li=function(t){return typeof t=="object"},Vn=function(t){return t!==!1},_h=function(){return typeof window!="undefined"},ja=function(t){return We(t)||en(t)},Gd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mn=Array.isArray,O0=/random\([^)]+\)/g,F0=/,\s*/g,Dd=/(?:-?\.?\d|\.)+/gi,xh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$r=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,vh=/[+-]=-?[.\d]+/,B0=/[^,'"\[\]\s]+/gi,z0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ve,Pi,ch,yh,Kn={},il={},Wd,Xd=function(t){return(il=Ds(t,Kn))&&gn},ul=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Zo=function(t,e){return!e&&console.warn(t)},Yd=function(t,e){return t&&(Kn[t]=e)&&il&&(il[t]=e)||Kn},Jo=function(){return 0},k0={suppressEvents:!0,isStart:!0,kill:!1},tl={suppressEvents:!0,kill:!1},H0={suppressEvents:!0},Mh={},gr=[],hh={},qd,kn={},nh={},Ud=30,el=[],Sh="",bh=function(t){var e=t[0],n,i;if(Li(e)||We(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=el.length;i--&&!el[i].targetTest(e););n=el[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ah(t[i],n)))||t.splice(i,1);return t},_r=function(t){return t._gsap||bh(ui(t))[0]._gsap},wh=function(t,e,n){return(n=t[e])&&We(n)?t[e]():hl(n)&&t.getAttribute&&t.getAttribute(e)||n},Rn=function(t,e){return(t=t.split(",")).forEach(e)||t},Xe=function(t){return Math.round(t*1e5)/1e5||0},He=function(t){return Math.round(t*1e7)/1e7||0},Zr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},V0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},rl=function(){var t=gr.length,e=gr.slice(0),n,i;for(hh={},gr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Eh=function(t){return!!(t._initted||t._startAt||t.add)},$d=function(t,e,n,i){gr.length&&!un&&rl(),t.render(e,n,i||!!(un&&e<0&&Eh(t))),gr.length&&!un&&rl()},Zd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(B0).length<2?e:en(t)?t.trim():t},Jd=function(t){return t},Qn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},G0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ds=function(t,e){for(var n in e)t[n]=e[n];return t},Nd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Li(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},sl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Xo=function(t){var e=t.parent||Ve,n=t.keyframes?G0(mn(t.keyframes)):Qn;if(Vn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},W0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Kd=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},fl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},xr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Xr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},X0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},uh=function(t,e,n,i){return t._startAt&&(un?t._startAt.revert(tl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Y0=function r(t){return!t||t._ts&&r(t.parent)},Od=function(t){return t._repeat?Us(t._tTime,t=t.duration()+t._rDelay)*t:0},Us=function(t,e){var n=Math.floor(t=He(t/e));return t&&n===t?n-1:n},ol=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},dl=function(t){return t._end=He(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ce)||0))},pl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=He(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),dl(t),n._dirty||Xr(n,t)),t},Qd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ol(t.rawTime(),e),(!e._dur||ta(0,e.totalDuration(),n)-e._tTime>Ce)&&e.render(n,!0)),Xr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ce}},Ii=function(t,e,n,i){return e.parent&&xr(e),e._start=He((Gi(n)?n:!n&&al(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Ve?ci(t,n,e):t._time)+e._delay),e._end=He(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Kd(t,e,"_first","_last",t._sort?"_start":0),al(e)||(t._recent=e),i||Qd(t,e),t._ts<0&&pl(t,t._tTime),t},jd=function(t,e){return(Kn.ScrollTrigger||ul("scrollTrigger",e))&&Kn.ScrollTrigger.create(e,t)},tp=function(t,e,n,i,s){if(Ph(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!un&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&qd!==Hn.frame)return gr.push(t),t._lazy=[s,i],1},q0=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},al=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},$0=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&q0(t)&&!(!t._initted&&al(t))||(t._ts<0||t._dp._ts<0)&&!al(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=ta(0,t._tDur,e),h=Us(l,a),t._yoyo&&h&1&&(o=1-o),h!==Us(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||un||i||t._zTime===Ce||!e&&t._zTime){if(!t._initted&&tp(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Ce:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&uh(t,e,n,!0),t._onUpdate&&!n&&Jn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Jn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&xr(t,1),!n&&!un&&(Jn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Z0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ns=function(t,e,n,i){var s=t._repeat,o=He(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:He(o*(s+1)+t._rDelay*s):o,a>0&&!i&&pl(t,t._tTime=t._tDur*a),t.parent&&dl(t),n||Xr(t.parent,t),t},Fd=function(t){return t instanceof pn?Xr(t):Ns(t,t._dur)},J0={_start:0,endTime:Jo,totalDuration:Jo},ci=function r(t,e,n){var i=t.labels,s=t._recent||J0,o=t.duration()>=hi?s.endTime(!1):t._dur,a,l,c;return en(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(mn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Yo=function(t,e,n){var i=Gi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Vn(l.vars.inherit)&&l.parent;o.immediateRender=Vn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Je(e[0],o,e[s+1])},vr=function(t,e){return t||t===0?e(t):e},ta=function(t,e,n){return n<t?t:n>e?e:n},fn=function(t,e){return!en(t)||!(e=z0.exec(t))?"":e[1]},K0=function(t,e,n){return vr(n,function(i){return ta(t,e,i)})},fh=[].slice,ep=function(t,e){return t&&Li(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Li(t[0]))&&!t.nodeType&&t!==Pi},Q0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return en(i)&&!e||ep(i,1)?(s=n).push.apply(s,ui(i)):n.push(i)})||n},ui=function(t,e,n){return Fe&&!e&&Fe.selector?Fe.selector(t):en(t)&&!n&&(ch||!Os())?fh.call((e||yh).querySelectorAll(t),0):mn(t)?Q0(t,n):ep(t)?fh.call(t,0):t?[t]:[]},dh=function(t){return t=ui(t)[0]||Zo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ui(e,n.querySelectorAll?n:n===t?Zo("Invalid scope")||yh.createElement("div"):t)}},np=function(t){return t.sort(function(){return .5-Math.random()})},ip=function(t){if(We(t))return t;var e=Li(t)?t:{each:t},n=Yr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return en(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(u,d,g){var _=(g||e).length,m=o[_],p,M,S,v,T,A,b,C,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,hi])[1],!y){for(b=-hi;b<(b=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*h-.5:i%y,M=y===hi?0:l?_*f/y-.5:i/y|0,b=0,C=hi,A=0;A<_;A++)S=A%y-p,v=M-(A/y|0),m[A]=T=c?Math.abs(c==="y"?v:S):Vd(S*S+v*v),T>b&&(b=T),T<C&&(C=T);i==="random"&&np(m),m.max=b-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=fn(e.amount||e.each)||0,n=n&&_<0?u_(n):n}return _=(m[u]-m.min)/m.max||0,He(m.b+(n?n(_):_)*m.v)+m.u}},ph=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=He(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Gi(n)?0:fn(n))}},rp=function(t,e){var n=mn(t),i,s;return!n&&Li(t)&&(i=n=t.radius||hi,t.values?(t=ui(t.values),(s=!Gi(t[0]))&&(i*=i)):t=ph(t.increment)),vr(e,n?We(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=hi,h=0,f=t.length,u,d;f--;)s?(u=t[f].x-a,d=t[f].y-l,u=u*u+d*d):u=Math.abs(t[f]-a),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:o,s||h===o||Gi(o)?h:h+fn(o)}:ph(t))},sp=function(t,e,n,i){return vr(mn(t)?!e:n===!0?!!(n=0):!i,function(){return mn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},j0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},t_=function(t,e){return function(n){return t(parseFloat(n))+(e||fn(n))}},e_=function(t,e,n){return ap(t,e,0,1,n)},op=function(t,e,n){return vr(n,function(i){return t[~~e(i)]})},n_=function r(t,e,n){var i=e-t;return mn(t)?op(t,r(0,t.length),e):vr(n,function(s){return(i+(s-t)%i)%i+t})},i_=function r(t,e,n){var i=e-t,s=i*2;return mn(t)?op(t,r(0,t.length-1),e):vr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Fs=function(t){return t.replace(O0,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(F0);return sp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ap=function(t,e,n,i,s){var o=e-t,a=i-n;return vr(s,function(l){return n+((l-t)/o*a||0)})},r_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=en(t),a={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(mn(t)&&!mn(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=Ds(mn(t)?[]:{},t));if(!h){for(l in e)Rh.call(a,t,l,"get",e[l]);s=function(g){return Dh(g,a)||(o?t.p:t)}}}return vr(n,s)},Bd=function(t,e,n){var i=t.labels,s=hi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Jn=function(t,e,n){var i=t.vars,s=i[e],o=Fe,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&gr.length&&rl(),a&&(Fe=a),h=l?s.apply(c,l):s.call(c),Fe=o,h},Go=function(t){return xr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!un),t.progress()<1&&Jn(t,"onInterrupt"),t},Ls,lp=[],cp=function(t){if(t)if(t=!t.name&&t.default||t,_h()||t.headless){var e=t.name,n=We(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Jo,render:Dh,add:Rh,kill:M_,modifier:y_,rawVars:0},o={targetTest:0,get:0,getSetter:ml,aliases:{},register:0};if(Os(),t!==i){if(kn[e])return;Qn(i,Qn(sl(t,s),o)),Ds(i.prototype,Ds(s,sl(t,o))),kn[i.prop=e]=i,t.targetTest&&(el.push(i),Mh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Yd(e,i),t.register&&t.register(gn,i,Cn)}else lp.push(t)},De=255,Wo={aqua:[0,De,De],lime:[0,De,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,De],navy:[0,0,128],white:[De,De,De],olive:[128,128,0],yellow:[De,De,0],orange:[De,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[De,0,0],pink:[De,192,203],cyan:[0,De,De],transparent:[De,De,De,0]},ih=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*De+.5|0},hp=function(t,e,n){var i=t?Gi(t)?[t>>16,t>>8&De,t&De]:0:Wo.black,s,o,a,l,c,h,f,u,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Wo[t])i=Wo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&De,i&De,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&De,t&De]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Dd),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=ih(l+1/3,s,o),i[1]=ih(l,s,o),i[2]=ih(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(xh),n&&i.length<4&&(i[3]=1),i}else i=t.match(Dd)||Wo.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/De,o=i[1]/De,a=i[2]/De,f=Math.max(s,o,a),u=Math.min(s,o,a),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},up=function(t){var e=[],n=[],i=-1;return t.split(Vi).forEach(function(s){var o=s.match($r)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},zd=function(t,e,n){var i="",s=(t+i).match(Vi),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return t;if(s=s.map(function(u){return(u=hp(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=up(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Vi,"1").split($r),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Vi),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Vi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Wo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),s_=/hsl[a]?\(/,Th=function(t){var e=t.join(" "),n;if(Vi.lastIndex=0,Vi.test(e))return n=s_.test(e),t[1]=zd(t[1],n),t[0]=zd(t[0],n,up(t[1])),!0},Ko,Hn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,u,d,g=function _(m){var p=r()-i,M=m===!0,S,v,T,A;if((p>t||p<0)&&(n+=p-e),i+=p,T=i-n,S=T-o,(S>0||M)&&(A=++f.frame,u=T-f.time*1e3,f.time=T=T/1e3,o+=S+(S>=s?0:s-S),v=1),M||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](T,u,A,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Wd&&(!ch&&_h()&&(Pi=ch=window,yh=Pi.document||{},Kn.gsap=gn,(Pi.gsapVersions||(Pi.gsapVersions=[])).push(gn.version),Xd(il||Pi.GreenSockGlobals||!Pi.gsap&&Pi||{}),lp.forEach(cp)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Ko=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ko=0,c=Jo},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,M){var S=p?function(v,T,A,b){m(v,T,A,b),f.remove(S)}:m;return f.remove(m),a[M?"unshift":"push"](S),Os(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),Os=function(){return!Ko&&Hn.wake()},ye={},o_=/^[\d.\-M][\d.\-,\s]/,a_=/["']/g,l_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(a_,"").trim():+c,i=l.substr(a+1).trim();return e},c_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},h_=function(t){var e=(t+"").split("("),n=ye[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[l_(e[1])]:c_(t).split(",").map(Zd)):ye._CE&&o_.test(t)?ye._CE("",t):n},u_=function(t){return function(e){return 1-t(1-e)}},Yr=function(t,e){return t&&(We(t)?t:ye[t]||h_(t))||e},Jr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Rn(t,function(a){ye[a]=Kn[a]=s,ye[o=a.toLowerCase()]=n;for(var l in s)ye[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ye[a+"."+l]=s[l]}),s},fp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},rh=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/lh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*N0((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:fp(a);return s=lh/s,l.config=function(c,h){return r(t,c,h)},l},sh=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:fp(n);return i.config=function(s){return r(t,s)},i};Rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Jr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ye.Linear.easeNone=ye.none=ye.Linear.easeIn;Jr("Elastic",rh("in"),rh("out"),rh());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Jr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Jr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Jr("Circ",function(r){return-(Vd(1-r*r)-1)});Jr("Sine",function(r){return r===1?1:-U0(r*L0)+1});Jr("Back",sh("in"),sh("out"),sh());ye.SteppedEase=ye.steps=Kn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Ce;return function(a){return((i*ta(0,o,a)|0)+s)*n}}};$o.ease=ye["quad.out"];Rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Sh+=r+","+r+"Params,"});var Ah=function(t,e){this.id=D0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:wh,this.set=e?e.getSetter:ml},Qo=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ns(this,+e.duration,1,1),this.data=e.data,Fe&&(this._ctx=Fe,Fe.data.push(this)),Ko||Hn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ns(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Os(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(pl(this,n),!s._dp||s.parent||Qd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ce||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$d(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Od(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Od(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Us(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ce?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ol(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Ce?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(ta(-Math.abs(this._delay),a,s),i!==!1),dl(this),X0(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Os(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Ce,o;if(s)for(this._tTime-=Ce,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Ce){s=!1;break}o=o._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=He(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ii(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ol(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=H0);var i=un;return un=n,Eh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),un=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Fd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ci(this,n),Vn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Vn(i)),this._dur||(this._zTime=-Ce),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ce,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ce)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=We(n)?n:Jd,l=function(){var h=i.then;i.then=null,s&&s(),We(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Go(this)},r})();Qn(Qo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ce,_prom:0,_ps:!1,_rts:1});var pn=(function(r){Hd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Vn(n.sortChildren),Ve&&Ii(n.parent||Ve,Hi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&jd(Hi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Yo(0,arguments,this),this},e.from=function(i,s,o){return Yo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Yo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Xo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Je(i,s,ci(this,o),1),this},e.call=function(i,s,o){return Ii(this,Je.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Je(i,o,ci(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Xo(o).immediateRender=Vn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,Xo(a).immediateRender=Vn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:He(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,g,_,m,p,M,S,v,T,A,b;if(this!==Ve&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,v=this._start,S=this._ts,p=!S,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(u=He(h%m),h===l?(_=this._repeat,u=c):(T=He(h/m),_=~~T,_&&_===T&&(u=c,_--),u>c&&(u=c)),T=Us(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),A&&_&1&&(u=c-u,b=1),_!==T&&!this._lock){var C=A&&T&1,y=C===(A&&_&1);if(_<T&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(b?0:He(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Jn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Z0(this,He(a),He(u)),M&&(h-=u-(u=M._start))),this._tTime=h,this._time=u,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!T&&(Jn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||u>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,o),u!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=-Ce);break}}d=g}else{d=this._last;for(var x=i<0?i:u;d;){if(g=d._prev,(d._act||x<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||un&&Eh(d)),u!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=x?-Ce:Ce);break}}d=g}}if(M&&!s&&(this.pause(),M.render(u>=a?0:-Ce)._zTime=u>=a?1:-1,this._ts))return this._start=v,dl(this),this.render(i,s,o);this._onUpdate&&!s&&Jn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&xr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Jn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Gi(s)||(s=ci(this,s,i)),!(i instanceof Qo)){if(mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(en(i))return this.addLabel(i,s);if(We(i))i=Je.delayedCall(0,i);else return this}return this!==i?Ii(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-hi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Je?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return en(i)?this.removeLabel(i):We(i)?this.killTweensOf(i):(i.parent===this&&fl(this,i),i===this._recent&&(this._recent=this._last),Xr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=He(Hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ci(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Je.delayedCall(0,s||Jo,o);return a.data="isPause",this._hasPause=1,Ii(this,a,ci(this,i))},e.removePause=function(i){var s=this._first;for(i=ci(this,i);s;)s._start===i&&s.data==="isPause"&&xr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)mr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ui(i),l=this._first,c=Gi(s),h;l;)l instanceof Je?V0(l._targets,a)&&(c?(!mr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=ci(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,g=Je.to(o,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ce,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ns(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,f||[])}},s));return u?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Qn({startAt:{time:ci(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Bd(this,ci(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Bd(this,ci(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ce)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=He(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Xr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=hi,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ii(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=He(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ns(o,o===Ve&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ve._ts&&($d(Ve,ol(i,Ve)),qd=Hn.frame),Hn.frame>=Ud){Ud+=Gn.autoSleep||120;var s=Ve._first;if((!s||!s._ts)&&Gn.autoSleep&&Hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Hn.sleep()}}},t})(Qo);Qn(pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var f_=function(t,e,n,i,s,o,a){var l=new Cn(this._pt,t,e,0,1,Lh,null,s),c=0,h=0,f,u,d,g,_,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Fs(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),u=n.match(eh)||[];f=eh.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Zr(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=eh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(vh.test(i)||p)&&(l.e=0),this._pt=l,l},Rh=function(t,e,n,i,s,o,a,l,c,h){We(i)&&(i=i(s||0,t,o));var f=t[e],u=n!=="get"?n:We(f)?c?t[e.indexOf("set")||!We(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=We(f)?c?__:pp:Ih,g;if(en(i)&&(~i.indexOf("random(")&&(i=Fs(i)),i.charAt(1)==="="&&(g=Zr(u,i)+(fn(u)||0),(g||g===0)&&(i=g))),!h||u!==i||mh)return!isNaN(u*i)&&i!==""?(g=new Cn(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?v_:mp,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&ul(e,i),f_.call(this,t,e,u,i,d,l||Gn.stringFilter,c))},d_=function(t,e,n,i,s){if(We(t)&&(t=qo(t,s,e,n,i)),!Li(t)||t.style&&t.nodeType||mn(t)||Gd(t))return en(t)?qo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=qo(t[a],s,e,n,i);return o},Ch=function(t,e,n,i,s,o){var a,l,c,h;if(kn[t]&&(a=new kn[t]).init(s,a.rawVars?e[t]:d_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Cn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ls))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},mr,mh,Ph=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!gh,v=t.timeline,T=i.easeReverse||f,A,b,C,y,x,L,D,O,z,X,F,U,k;if(v&&(!u||!s)&&(s="none"),t._ease=Yr(s,$o.ease),t._rEase=T&&(Yr(T)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(O=m[0]?_r(m[0]).harness:0,U=O&&i[O.prop],A=sl(i,Mh),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&g?tl:k0),_._lazy=0),o){if(xr(t._startAt=Je.set(m,Qn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Vn(l),startAt:null,delay:0,onUpdate:c&&function(){return Jn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(un||!a&&!d)&&t._startAt.revert(tl),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),C=Qn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Vn(l),immediateRender:a,stagger:0,parent:p},A),U&&(C[O.prop]=U),xr(t._startAt=Je.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(un?t._startAt.revert(tl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Ce,Ce);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Vn(l)||l&&!g,b=0;b<m.length;b++){if(x=m[b],D=x._gsap||bh(m)[b]._gsap,t._ptLookup[b]=X={},hh[D.id]&&gr.length&&rl(),F=M===m?b:M.indexOf(x),O&&(z=new O).init(x,U||A,t,F,M)!==!1&&(t._pt=y=new Cn(t._pt,x,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(J){X[J]=y}),z.priority&&(L=1)),!O||U)for(C in A)kn[C]&&(z=Ch(C,A,t,F,x,M))?z.priority&&(L=1):X[C]=y=Rh.call(t,x,C,"get",A[C],F,M,0,i.stringFilter);t._op&&t._op[b]&&t.kill(x,t._op[b]),S&&t._pt&&(mr=t,Ve.killTweensOf(x,X,t.globalTime(e)),k=!t.parent,mr=0),t._pt&&l&&(hh[D.id]=1)}L&&Uh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!k,u&&e<=0&&v.render(hi,!0,!0)},p_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(h=u[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return mh=1,t.vars[e]="+=0",Ph(t,a),mh=0,l?Zo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Xe(n)+fn(f.e)),f.b&&(f.b=h.s+fn(f.b))},m_=function(t,e){var n=t[0]?_r(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ds({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},g_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(mn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},qo=function(t,e,n,i,s){return We(t)?t.call(e,n,i,s):en(t)&&~t.indexOf("random(")?Fs(t):t},ll=Sh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",dp={};Rn(ll+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return dp[r]=1});ll=ll.split(",");var Je=(function(r){Hd(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Xo(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Ve,M=(mn(n)||Gd(n)?Gi(n[0]):"length"in i)?[n]:ui(n),S,v,T,A,b,C,y,x;if(a._targets=M.length?bh(M):Zo("GSAP target "+n+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||u||ja(c)||ja(h)){i=a.vars;var L=i.easeReverse||i.yoyoEase;if(S=a.timeline=new pn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:M}),S.kill(),S.parent=S._dp=Hi(a),S._start=0,u||ja(c)||ja(h)){if(A=M.length,y=u&&ip(u),Li(u))for(b in u)~ll.indexOf(b)&&(x||(x={}),x[b]=u[b]);for(v=0;v<A;v++)T=sl(i,dp),T.stagger=0,L&&(T.easeReverse=L),x&&Ds(T,x),C=M[v],T.duration=+qo(c,Hi(a),v,C,M),T.delay=(+qo(h,Hi(a),v,C,M)||0)-a._delay,!u&&A===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),S.to(C,T,y?y(v,C,M):0),S._ease=ye.none;S.duration()?c=h=0:a.timeline=0}else if(g){Xo(Qn(S.vars.defaults,{ease:"none"})),S._ease=Yr(g.ease||i.ease||"none");var D=0,O,z,X;if(mn(g))g.forEach(function(F){return S.to(M,F,">")}),S.duration();else{T={};for(b in g)b==="ease"||b==="easeEach"||g_(b,g[b],T,g.easeEach);for(b in T)for(O=T[b].sort(function(F,U){return F.t-U.t}),D=0,v=0;v<O.length;v++)z=O[v],X={ease:z.e,duration:(z.t-(v?O[v-1].t:0))/100*c},X[b]=z.v,S.to(M,X,D),D+=X.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!gh&&(mr=Hi(a),Ve.killTweensOf(M),mr=0),Ii(p,Hi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===He(p._time)&&Vn(f)&&Y0(Hi(a))&&p.data!=="nested")&&(a._tTime=-Ce,a.render(Math.max(0,-h)||0)),m&&jd(Hi(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Ce&&!h?l:i<Ce?0:i,u,d,g,_,m,p,M,S;if(!c)$0(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=He(f%_),f===l?(g=this._repeat,u=c):(m=He(f/_),g=~~m,g&&g===m?(u=c,g--):u>c&&(u=c)),p=this._yoyo&&g&1,p&&(u=c-u),m=Us(this._tTime,_),u===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(He(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(tp(this,h?i:u,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=u<a;if(v!==this._inv){var T=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(v?-1:1)/T:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(u/c);if(this._from&&(this.ratio=M=1-M),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Jn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&uh(this,i,s,o),Jn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Jn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&uh(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&xr(this,1),!s&&!(h&&!a)&&(f||a||p)&&(Jn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Ko||Hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ph(this,c),h=this._ease(c/this._dur),p_(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(pl(this,0),this.parent||Kd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Go(this):this.scrollTrigger&&this.scrollTrigger.kill(!!un),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,mr&&mr.vars.overwrite!==!0)._first||Go(this),this.parent&&o!==this.timeline.totalDuration()&&Ns(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ui(i):a,c=this._ptLookup,h=this._pt,f,u,d,g,_,m,p;if((!s||s==="all")&&W0(a,l))return s==="all"&&(this._pt=0),Go(this);for(f=this._op=this._op||[],s!=="all"&&(en(s)&&(_={},Rn(s,function(M){return _[M]=1}),s=_),s=m_(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){u=c[p],s==="all"?(f[p]=s,g=u,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&fl(this,m,"_pt"),delete u[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Go(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Yo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Yo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ve.killTweensOf(i,s,o)},t})(Qo);Qn(Je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Rn("staggerTo,staggerFrom,staggerFromTo",function(r){Je[r]=function(){var t=new pn,e=fh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Ih=function(t,e,n){return t[e]=n},pp=function(t,e,n){return t[e](n)},__=function(t,e,n,i){return t[e](i.fp,n)},x_=function(t,e,n){return t.setAttribute(e,n)},ml=function(t,e){return We(t[e])?pp:hl(t[e])&&t.setAttribute?x_:Ih},mp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},v_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Lh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Dh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},y_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},M_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?fl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},S_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Uh=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Cn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||mp,this.d=l||this,this.set=c||Ih,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=S_,this.m=n,this.mt=s,this.tween=i},r})();Rn(Sh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Mh[r]=1});Kn.TweenMax=Kn.TweenLite=Je;Kn.TimelineLite=Kn.TimelineMax=pn;Ve=new pn({sortChildren:!1,defaults:$o,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gn.stringFilter=Th;var qr=[],nl={},b_=[],kd=0,w_=0,oh=function(t){return(nl[t]||b_).map(function(e){return e()})},jo=function(){var t=Date.now(),e=[];t-kd>2&&(oh("matchMediaInit"),qr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Pi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),oh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kd=t,oh("matchMedia"))},gp=(function(){function r(e,n){this.selector=n&&dh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=w_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){We(n)&&(s=i,i=n,n=We);var o=this,a=function(){var c=Fe,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=dh(s)),Fe=o,f=i.apply(o,arguments),We(f)&&o._r.push(f),Fe=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===We?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Fe;Fe=null,n(this),Fe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Je&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof pn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Je)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=qr.length;o--;)qr[o].id===this.id&&qr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(jo):a.removeEventListener("change",jo)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r})(),E_=(function(){function r(e){this.contexts=[],this.scope=e,Fe&&Fe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Li(n)||(n={matches:n});var o=new gp(0,s||this.scope),a=o.conditions={},l,c,h;Fe&&!o.selector&&(o.selector=Fe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Pi.matchMedia(n[c]),l&&(qr.indexOf(o)<0&&qr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(jo):l.addEventListener("change",jo),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),cl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return cp(i)})},timeline:function(t){return new pn(t)},getTweensOf:function(t,e){return Ve.getTweensOf(t,e)},getProperty:function(t,e,n,i){en(t)&&(t=ui(t)[0]);var s=_r(t||{}).get,o=n?Jd:Zd;return n==="native"&&(n=""),t&&(e?o((kn[e]&&kn[e].get||s)(t,e,n,i)):function(a,l,c){return o((kn[a]&&kn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ui(t),t.length>1){var i=t.map(function(h){return gn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var o=kn[e],a=_r(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;Ls._pt=0,f.init(t,n?h+n:h,Ls,0,[t]),f.render(1,f),Ls._pt&&Dh(1,Ls)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=gn.to(t,Qn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Ve.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Yr(t.ease,$o.ease)),Nd($o,t||{})},config:function(t){return Nd(Gn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!kn[a]&&!Kn[a]&&Zo(e+" effect requires "+a+" plugin.")}),nh[e]=function(a,l,c){return n(ui(a),Qn(l||{},s),c)},o&&(pn.prototype[e]=function(a,l,c){return this.add(nh[e](a,Li(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ye[t]=Yr(e)},parseEase:function(t,e){return arguments.length?Yr(t,e):ye},getById:function(t){return Ve.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new pn(t),i,s;for(n.smoothChildTiming=Vn(t.smoothChildTiming),Ve.remove(n),n._dp=0,n._time=n._tTime=Ve._time,i=Ve._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Je&&i.vars.onComplete===i._targets[0]))&&Ii(n,i,i._start-i._delay),i=s;return Ii(Ve,n,0),n},context:function(t,e){return t?new gp(t,e):Fe},matchMedia:function(t){return new E_(t)},matchMediaRefresh:function(){return qr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||jo()},addEventListener:function(t,e){var n=nl[t]||(nl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=nl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:n_,wrapYoyo:i_,distribute:ip,random:sp,snap:rp,normalize:e_,getUnit:fn,clamp:K0,splitColor:hp,toArray:ui,selector:dh,mapRange:ap,pipe:j0,unitize:t_,interpolate:r_,shuffle:np},install:Xd,effects:nh,ticker:Hn,updateRoot:pn.updateRoot,plugins:kn,globalTimeline:Ve,core:{PropTween:Cn,globals:Yd,Tween:Je,Timeline:pn,Animation:Qo,getCache:_r,_removeLinkedListItem:fl,reverting:function(){return un},context:function(t){return t&&Fe&&(Fe.data.push(t),t._ctx=Fe),Fe},suppressOverwrites:function(t){return gh=t}}};Rn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return cl[r]=Je[r]});Hn.add(pn.updateRoot);Ls=cl.to({},{duration:0});var T_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},A_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=T_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},ah=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(en(s)&&(l={},Rn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}A_(a,s)}}}},gn=cl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ah("roundProps",ph),ah("modifiers"),ah("snap",rp))||cl;Je.version=pn.version=gn.version="3.15.1";Wd=1;_h()&&Os();var R_=ye.Power0,C_=ye.Power1,P_=ye.Power2,I_=ye.Power3,L_=ye.Power4,D_=ye.Linear,U_=ye.Quad,N_=ye.Cubic,O_=ye.Quart,F_=ye.Quint,B_=ye.Strong,z_=ye.Elastic,k_=ye.Back,H_=ye.SteppedEase,V_=ye.Bounce,G_=ye.Sine,W_=ye.Expo,X_=ye.Circ;var _p,yr,zs,kh,ts,Y_,xp,Hh,q_=function(){return typeof window!="undefined"},Xi={},jr=180/Math.PI,ks=Math.PI/180,Bs=Math.atan2,vp=1e8,Vh=/([A-Z])/g,$_=/(left|right|width|margin|padding|x)/i,Z_=/[\s,\(]\S/,Di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Oh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},J_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},K_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Q_=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},j_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Ap=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Rp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},tx=function(t,e,n){return t.style[e]=n},ex=function(t,e,n){return t.style.setProperty(e,n)},nx=function(t,e,n){return t._gsap[e]=n},ix=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},rx=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},sx=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ge="transform",Wn=Ge+"Origin",ox=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Xi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Di[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Wi(i,a)}):this.tfm[t]=o.x?o[t]:Wi(i,t),t===Wn&&(this.tfm.zOrigin=o.zOrigin);else return Di.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ge)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Wn,e,"")),t=Ge}(s||e)&&this.props.push(t,e,s[t])},Cp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ax=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Vh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Hh(),(!s||!s.isStart)&&!n[Ge]&&(Cp(n),i.zOrigin&&n[Wn]&&(n[Wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Pp=function(t,e){var n={target:t,props:[],revert:ax,save:ox};return t._gsap||gn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Ip,Fh=function(t,e){var n=yr.createElementNS?yr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):yr.createElement(t);return n&&n.style?n:yr.createElement(t)},jn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Vh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Hs(e)||e,1)||""},yp="O,Moz,ms,Ms,Webkit".split(","),Hs=function(t,e,n){var i=e||ts,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(yp[o]+t in s););return o<0?null:(o===3?"ms":o>=0?yp[o]:"")+t},Bh=function(){q_()&&window.document&&(_p=window,yr=_p.document,zs=yr.documentElement,ts=Fh("div")||{style:{}},Y_=Fh("div"),Ge=Hs(Ge),Wn=Ge+"Origin",ts.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ip=!!Hs("perspective"),Hh=gn.core.reverting,kh=1)},Mp=function(t){var e=t.ownerSVGElement,n=Fh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),zs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),zs.removeChild(n),s},Sp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Lp=function(t){var e,n;try{e=t.getBBox()}catch{e=Mp(t),n=1}return e&&(e.width||e.height)||n||(e=Mp(t)),e&&!e.width&&!e.x&&!e.y?{x:+Sp(t,["x","cx","x1"])||0,y:+Sp(t,["y","cy","y1"])||0,width:0,height:0}:e},Dp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Lp(t))},Sr=function(t,e){if(e){var n=t.style,i;e in Xi&&e!==Wn&&(e=Ge),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Vh,"-$1").toLowerCase())):n.removeAttribute(e)}},Mr=function(t,e,n,i,s,o){var a=new Cn(t._pt,e,n,0,1,o?Rp:Ap);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},bp={deg:1,rad:1,turn:1},lx={grid:1,flex:1},br=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ts.style,l=$_.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||bp[i]||bp[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),p=t.getCTM&&Dp(t),(d||o==="%")&&(Xi[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],Xe(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===yr||!_.appendChild)&&(_=yr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Hn.time&&!m.uncache)return Xe(s/m.width*f);if(d&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=f+i,g=t[h],M?t.style[e]=M:Sr(t,e)}else(d||o==="%")&&!lx[jn(_,"display")]&&(a.position=jn(t,"position")),_===t&&(a.position="static"),_.appendChild(ts),g=ts[h],_.removeChild(ts),a.position="absolute";return l&&d&&(m=_r(_),m.time=Hn.time,m.width=_[h]),Xe(u?g*s/f:g&&s?f/g*s:0)},Wi=function(t,e,n,i){var s;return kh||Bh(),e in Di&&e!=="transform"&&(e=Di[e],~e.indexOf(",")&&(e=e.split(",")[0])),Xi[e]&&e!=="transform"?(s=ia(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:_l(jn(t,Wn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=gl[e]&&gl[e](t,e,n)||jn(t,e)||wh(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?br(t,e,s,n)+n:s},cx=function(t,e,n,i){if(!n||n==="none"){var s=Hs(e,t,1),o=s&&jn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=jn(t,"borderTopColor"))}var a=new Cn(this._pt,t.style,e,0,1,Lh),l=0,c=0,h,f,u,d,g,_,m,p,M,S,v,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=jn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=jn(t,e)||i,_?t.style[e]=_:Sr(t,e)),h=[n,i],Th(h),n=h[0],i=h[1],u=n.match($r)||[],T=i.match($r)||[],T.length){for(;f=$r.exec(i);)m=f[0],M=i.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=u[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Zr(d,m)+v),p=parseFloat(m),S=m.substr((p+"").length),l=$r.lastIndex-S.length,S||(S=S||Gn.units[e]||v,l===i.length&&(i+=S,a.e+=S)),v!==S&&(d=br(t,e,_,S)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Rp:Ap;return vh.test(i)&&(a.e=0),this._pt=a,a},wp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=wp[n]||n,e[1]=wp[i]||i,e.join(" ")},ux=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Xi[a]&&(l=1,a=a==="transformOrigin"?Wn:Ge),Sr(n,a);l&&(Sr(n,Ge),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ia(n,1),o.uncache=1,Cp(i)))}},gl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Cn(t._pt,e,n,0,0,ux);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},na=[1,0,0,1,0,0],Up={},Np=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ep=function(t){var e=jn(t,Ge);return Np(e)?na:e.substr(7).match(xh).map(Xe)},Gh=function(t,e){var n=t._gsap||_r(t),i=t.style,s=Ep(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?na:s):(s===na&&!t.offsetParent&&t!==zs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,zs.appendChild(t)),s=Ep(t),l?i.display=l:Sr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):zs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zh=function(t,e,n,i,s,o){var a=t._gsap,l=s||Gh(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,u=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],S=e.split(" "),v=parseFloat(S[0])||0,T=parseFloat(S[1])||0,A,b,C,y;n?l!==na&&(b=d*m-g*_)&&(C=v*(m/b)+T*(-_/b)+(_*M-m*p)/b,y=v*(-g/b)+T*(d/b)-(d*M-g*p)/b,v=C,T=y):(A=Lp(t),v=A.x+(~S[0].indexOf("%")?v/100*A.width:v),T=A.y+(~(S[1]||S[0]).indexOf("%")?T/100*A.height:T)),i||i!==!1&&a.smooth?(p=v-c,M=T-h,a.xOffset=f+(p*d+M*_)-p,a.yOffset=u+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Wn]="0px 0px",o&&(Mr(o,a,"xOrigin",c,v),Mr(o,a,"yOrigin",h,T),Mr(o,a,"xOffset",f,a.xOffset),Mr(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+T)},ia=function(t,e){var n=t._gsap||new Ah(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=jn(t,Wn)||"0",h,f,u,d,g,_,m,p,M,S,v,T,A,b,C,y,x,L,D,O,z,X,F,U,k,J,R,Q,Rt,mt,K,it;return h=f=u=_=m=p=M=S=v=0,d=g=1,n.svg=!!(t.getCTM&&Dp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ge]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ge]!=="none"?l[Ge]:"")),i.scale=i.rotate=i.translate="none"),b=Gh(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),zh(t,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,b)),T=n.xOrigin||0,A=n.yOrigin||0,b!==na&&(L=b[0],D=b[1],O=b[2],z=b[3],h=X=b[4],f=F=b[5],b.length===6?(d=Math.sqrt(L*L+D*D),g=Math.sqrt(z*z+O*O),_=L||D?Bs(D,L)*jr:0,M=O||z?Bs(O,z)*jr+_:0,M&&(g*=Math.abs(Math.cos(M*ks))),n.svg&&(h-=T-(T*L+A*O),f-=A-(T*D+A*z))):(it=b[6],mt=b[7],R=b[8],Q=b[9],Rt=b[10],K=b[11],h=b[12],f=b[13],u=b[14],C=Bs(it,Rt),m=C*jr,C&&(y=Math.cos(-C),x=Math.sin(-C),U=X*y+R*x,k=F*y+Q*x,J=it*y+Rt*x,R=X*-x+R*y,Q=F*-x+Q*y,Rt=it*-x+Rt*y,K=mt*-x+K*y,X=U,F=k,it=J),C=Bs(-O,Rt),p=C*jr,C&&(y=Math.cos(-C),x=Math.sin(-C),U=L*y-R*x,k=D*y-Q*x,J=O*y-Rt*x,K=z*x+K*y,L=U,D=k,O=J),C=Bs(D,L),_=C*jr,C&&(y=Math.cos(C),x=Math.sin(C),U=L*y+D*x,k=X*y+F*x,D=D*y-L*x,F=F*y-X*x,L=U,X=k),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Xe(Math.sqrt(L*L+D*D+O*O)),g=Xe(Math.sqrt(F*F+it*it)),C=Bs(X,F),M=Math.abs(C)>2e-4?C*jr:0,v=K?1/(K<0?-K:K):0),n.svg&&(U=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Np(jn(t,Ge)),U&&t.setAttribute("transform",U))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Xe(d),n.scaleY=Xe(g),n.rotation=Xe(_)+a,n.rotationX=Xe(m)+a,n.rotationY=Xe(p)+a,n.skewX=M+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Wn]=_l(c)),n.xOffset=n.yOffset=0,n.force3D=Gn.force3D,n.renderTransform=n.svg?dx:Ip?Op:fx,n.uncache=0,n},_l=function(t){return(t=t.split(" "))[0]+" "+t[1]},Nh=function(t,e,n){var i=fn(e);return Xe(parseFloat(e)+parseFloat(br(t,"x",n+"px",i)))+i},fx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Op(t,e)},Kr="0deg",ea="0px",Qr=") ",Op=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,v="",T=p==="auto"&&t&&t!==1||p===!0;if(S&&(f!==Kr||h!==Kr)){var A=parseFloat(h)*ks,b=Math.sin(A),C=Math.cos(A),y;A=parseFloat(f)*ks,y=Math.cos(A),o=Nh(M,o,b*y*-S),a=Nh(M,a,-Math.sin(A)*-S),l=Nh(M,l,C*y*-S+S)}m!==ea&&(v+="perspective("+m+Qr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(T||o!==ea||a!==ea||l!==ea)&&(v+=l!==ea||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Qr),c!==Kr&&(v+="rotate("+c+Qr),h!==Kr&&(v+="rotateY("+h+Qr),f!==Kr&&(v+="rotateX("+f+Qr),(u!==Kr||d!==Kr)&&(v+="skew("+u+", "+d+Qr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Qr),M.style[Ge]=v||"translate(0, 0)"},dx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(o),v=parseFloat(a),T,A,b,C,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ks,c*=ks,T=Math.cos(l)*f,A=Math.sin(l)*f,b=Math.sin(l-c)*-u,C=Math.cos(l-c)*u,c&&(h*=ks,y=Math.tan(c-h),y=Math.sqrt(1+y*y),b*=y,C*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),T*=y,A*=y)),T=Xe(T),A=Xe(A),b=Xe(b),C=Xe(C)):(T=f,C=u,A=b=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=br(d,"x",o,"px"),v=br(d,"y",a,"px")),(g||_||m||p)&&(S=Xe(S+g-(g*T+_*b)+m),v=Xe(v+_-(g*A+_*C)+p)),(i||s)&&(y=d.getBBox(),S=Xe(S+i/100*y.width),v=Xe(v+s/100*y.height)),y="matrix("+T+","+A+","+b+","+C+","+S+","+v+")",d.setAttribute("transform",y),M&&(d.style[Ge]=y)},px=function(t,e,n,i,s){var o=360,a=en(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?jr:1),c=l-i,h=i+c+"deg",f,u;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*vp)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*vp)%o-~~(c/o)*o)),t._pt=u=new Cn(t._pt,e,n,i,c,J_),u.e=h,u.u="deg",t._props.push(n),u},Tp=function(t,e){for(var n in e)t[n]=e[n];return t},mx=function(t,e,n){var i=Tp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,u,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ge]=e,a=ia(n,1),Sr(n,Ge),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ge],o[Ge]=e,a=ia(n,1),o[Ge]=c);for(l in Xi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=fn(c),g=fn(h),f=d!==g?br(n,l,c,g):parseFloat(c),u=parseFloat(h),t._pt=new Cn(t._pt,a,l,f,u-f,Oh),t._pt.u=g||0,t._props.push(l));Tp(a,i)};Rn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});gl[t>1?"border"+r:r]=function(a,l,c,h,f){var u,d;if(arguments.length<4)return u=o.map(function(g){return Wi(a,g,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},o.forEach(function(g,_){return d[g]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,d,f)}});var Wh={name:"css",register:Bh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,u,d,g,_,m,p,M,S,v,T,A,b,C,y;kh||Bh(),this.styles=this.styles||Pp(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(kn[_]&&Ch(_,e,n,i,t,s)))){if(d=typeof h,g=gl[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Fs(h)),g)g(this,t,_,h,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Vi.lastIndex=0,Vi.test(c)||(m=fn(c),p=fn(h),p?m!==p&&(c=br(t,_,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],en(c)&&~c.indexOf("random(")&&(c=Fs(c)),fn(c+"")||c==="auto"||(c+=Gn.units[_]||fn(Wi(t,_))||""),(c+"").charAt(1)==="="&&(c=Wi(t,_))):c=Wi(t,_),u=parseFloat(c),M=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),f=parseFloat(h),_ in Di&&(_==="autoAlpha"&&(u===1&&Wi(t,"visibility")==="hidden"&&f&&(u=0),C.push("visibility",0,a.visibility),Mr(this,a,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Di[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Xi,S){if(this.styles.save(_),y=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=jn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=h,h=jn(t,"perspective"),x?t.style.perspective=x:Sr(t,"perspective")}f=parseFloat(h)}if(v||(T=t._gsap,T.renderTransform&&!e.parseTransform||ia(t,e.parseTransform),A=e.smoothOrigin!==!1&&T.smooth,v=this._pt=new Cn(this._pt,a,Ge,0,1,T.renderTransform,T,0,-1),v.dep=1),_==="scale")this._pt=new Cn(this._pt,T,"scaleY",T.scaleY,(M?Zr(T.scaleY,M+f):f)-T.scaleY||0,Oh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Wn,0,a[Wn]),h=hx(h),T.svg?zh(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==T.zOrigin&&Mr(this,T,"zOrigin",T.zOrigin,p),Mr(this,a,_,_l(c),_l(h)));continue}else if(_==="svgOrigin"){zh(t,h,1,A,0,this);continue}else if(_ in Up){px(this,T,_,u,M?Zr(u,M+h):h);continue}else if(_==="smoothOrigin"){Mr(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){mx(this,h,t);continue}}else _ in a||(_=Hs(_)||_);if(S||(f||f===0)&&(u||u===0)&&!Z_.test(h)&&_ in a)m=(c+"").substr((u+"").length),f||(f=0),p=fn(h)||(_ in Gn.units?Gn.units[_]:m),m!==p&&(u=br(t,_,c,p)),this._pt=new Cn(this._pt,S?T:a,_,u,(M?Zr(u,M+f):f)-u,!S&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?j_:Oh),this._pt.u=p||0,S&&y!==h?(this._pt.b=c,this._pt.e=y,this._pt.r=Q_):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=K_);else if(_ in a)cx.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){ul(_,h);continue}S||(_ in a?C.push(_,0,a[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,c||t[_])),o.push(_)}}b&&Uh(this)},render:function(t,e){if(e.tween._time||!Hh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Wi,aliases:Di,getSetter:function(t,e,n){var i=Di[e];return i&&i.indexOf(",")<0&&(e=i),e in Xi&&e!==Wn&&(t._gsap.x||Wi(t,"x"))?n&&xp===n?e==="scale"?ix:nx:(xp=n||{})&&(e==="scale"?rx:sx):t.style&&!hl(t.style[e])?tx:~e.indexOf("-")?ex:ml(t,e)},core:{_removeProperty:Sr,_getMatrix:Gh}};gn.utils.checkPrefix=Hs;gn.core.getStyleSaver=Pp;(function(r,t,e,n){var i=Rn(r+","+t+","+e,function(s){Xi[s]=1});Rn(t,function(s){Gn.units[s]="deg",Up[s]=1}),Di[i[13]]=r+","+t,Rn(n,function(s){var o=s.split(":");Di[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Gn.units[r]="px"});gn.registerPlugin(Wh);var Ue=gn.registerPlugin(Wh)||gn,Fw=Ue.core.Tween;function Fp(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function gx(r,t,e){return t&&Fp(r.prototype,t),e&&Fp(r,e),r}var dn,yl,_x,Xn,wr,Er,Gs,zp,es,Ws,kp,Yi,yi,Hp,Vp=function(){return dn||typeof window!="undefined"&&(dn=window.gsap)&&dn.registerPlugin&&dn},Gp=1,Vs=[],ue=[],Mi=[],sa=Date.now,Xh=function(t,e){return e},xx=function(){var t=Ws.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ue),i.push.apply(i,Mi),ue=n,Mi=i,Xh=function(o,a){return e[o](a)}},$i=function(t,e){return~Mi.indexOf(t)&&Mi[Mi.indexOf(t)+1][e]},oa=function(t){return!!~kp.indexOf(t)},In=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Pn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},xl="scrollLeft",vl="scrollTop",Yh=function(){return Yi&&Yi.isPressed||ue.cache++},Ml=function(t,e){var n=function i(s){if(s||s===0){Gp&&Xn.history.scrollRestoration!=="manual"&&(Xn.history.scrollRestoration="manual");var o=Yi&&Yi.isPressed;s=i.v=Math.round(s)||(Yi&&Yi.iOS?1:0),t(s),i.cacheID=ue.cache,o&&Xh("ss",s)}else(e||ue.cache!==i.cacheID||Xh("ref"))&&(i.cacheID=ue.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},_n={s:xl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ml(function(r){return arguments.length?Xn.scrollTo(r,Qe.sc()):Xn.pageXOffset||wr[xl]||Er[xl]||Gs[xl]||0})},Qe={s:vl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:_n,sc:Ml(function(r){return arguments.length?Xn.scrollTo(_n.sc(),r):Xn.pageYOffset||wr[vl]||Er[vl]||Gs[vl]||0})},Ln=function(t,e){return(e&&e._ctx&&e._ctx.selector||dn.utils.toArray)(t)[0]||(typeof t=="string"&&dn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},vx=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},qi=function(t,e){var n=e.s,i=e.sc;oa(t)&&(t=wr.scrollingElement||Er);var s=ue.indexOf(t),o=i===Qe.sc?1:2;!~s&&(s=ue.push(t)-1),ue[s+o]||In(t,"scroll",Yh);var a=ue[s+o],l=a||(ue[s+o]=Ml($i(t,n),!0)||(oa(t)?i:Ml(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=dn.getProperty(t,"scrollBehavior")==="smooth"),l},Sl=function(t,e,n){var i=t,s=t,o=sa(),a=o,l=e||50,c=Math.max(500,l*3),h=function(g,_){var m=sa();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},u=function(g){var _=a,m=s,p=sa();return(g||g===0)&&g!==i&&h(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:h,reset:f,getVelocity:u}},ra=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Bp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Wp=function(){Ws=dn.core.globals().ScrollTrigger,Ws&&Ws.core&&xx()},Xp=function(t){return dn=t||Vp(),!yl&&dn&&typeof document!="undefined"&&document.body&&(Xn=window,wr=document,Er=wr.documentElement,Gs=wr.body,kp=[Xn,wr,Er,Gs],_x=dn.utils.clamp,Hp=dn.core.context||function(){},es="onpointerenter"in Gs?"pointer":"mouse",zp=Ye.isTouch=Xn.matchMedia&&Xn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Xn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,yi=Ye.eventTypes=("ontouchstart"in Er?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Er?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Gp=0},500),yl=1),Ws||Wp(),yl};_n.op=Qe;ue.cache=0;var Ye=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){yl||Xp(dn)||console.warn("Please gsap.registerPlugin(Observer)"),Ws||Wp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,S=n.onPress,v=n.onRelease,T=n.onRight,A=n.onLeft,b=n.onUp,C=n.onDown,y=n.onChangeX,x=n.onChangeY,L=n.onChange,D=n.onToggleX,O=n.onToggleY,z=n.onHover,X=n.onHoverEnd,F=n.onMove,U=n.ignoreCheck,k=n.isNormalizer,J=n.onGestureStart,R=n.onGestureEnd,Q=n.onWheel,Rt=n.onEnable,mt=n.onDisable,K=n.onClick,it=n.scrollSpeed,St=n.capture,ht=n.allowClicks,Tt=n.lockAxis,Dt=n.onLockAxis;this.target=a=Ln(a)||Er,this.vars=n,d&&(d=dn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,it=it||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Xn.getComputedStyle(Gs).lineHeight)||22);var ee,ne,zt,kt,H,_e,Yt,q=this,wt=0,oe=0,Ot=n.passive||!h&&n.passive!==!1,P=qi(a,_n),w=qi(a,Qe),Z=P(),ot=w(),rt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&yi[0]==="pointerdown",nt=oa(a),yt=a.ownerDocument||wr,xt=[0,0,0],Mt=[0,0,0],re=0,ut=function(){return re=sa()},_t=function(gt,It){return(q.event=gt)&&d&&vx(gt.target,d)||It&&rt&&gt.pointerType!=="touch"||U&&U(gt,It)},Ht=function(){q._vx.reset(),q._vy.reset(),ne.pause(),f&&f(q)},Vt=function(){var gt=q.deltaX=Bp(xt),It=q.deltaY=Bp(Mt),ft=Math.abs(gt)>=i,Nt=Math.abs(It)>=i;L&&(ft||Nt)&&L(q,gt,It,xt,Mt),ft&&(T&&q.deltaX>0&&T(q),A&&q.deltaX<0&&A(q),y&&y(q),D&&q.deltaX<0!=wt<0&&D(q),wt=q.deltaX,xt[0]=xt[1]=xt[2]=0),Nt&&(C&&q.deltaY>0&&C(q),b&&q.deltaY<0&&b(q),x&&x(q),O&&q.deltaY<0!=oe<0&&O(q),oe=q.deltaY,Mt[0]=Mt[1]=Mt[2]=0),(kt||zt)&&(F&&F(q),zt&&(m&&zt===1&&m(q),M&&M(q),zt=0),kt=!1),_e&&!(_e=!1)&&Dt&&Dt(q),H&&(Q(q),H=!1),ee=0},At=function(gt,It,ft){xt[ft]+=gt,Mt[ft]+=It,q._vx.update(gt),q._vy.update(It),c?ee||(ee=requestAnimationFrame(Vt)):Vt()},ae=function(gt,It){Tt&&!Yt&&(q.axis=Yt=Math.abs(gt)>Math.abs(It)?"x":"y",_e=!0),Yt!=="y"&&(xt[2]+=gt,q._vx.update(gt,!0)),Yt!=="x"&&(Mt[2]+=It,q._vy.update(It,!0)),c?ee||(ee=requestAnimationFrame(Vt)):Vt()},$t=function(gt){if(!_t(gt,1)){gt=ra(gt,h);var It=gt.clientX,ft=gt.clientY,Nt=It-q.x,pt=ft-q.y,Ct=q.isDragging;q.x=It,q.y=ft,(Ct||(Nt||pt)&&(Math.abs(q.startX-It)>=s||Math.abs(q.startY-ft)>=s))&&(zt||(zt=Ct?2:1),Ct||(q.isDragging=!0),ae(Nt,pt))}},lt=q.onPress=function(dt){_t(dt,1)||dt&&dt.button||(q.axis=Yt=null,ne.pause(),q.isPressed=!0,dt=ra(dt),wt=oe=0,q.startX=q.x=dt.clientX,q.startY=q.y=dt.clientY,q._vx.reset(),q._vy.reset(),In(k?a:yt,yi[1],$t,Ot,!0),q.deltaX=q.deltaY=0,S&&S(q))},I=q.onRelease=function(dt){if(!_t(dt,1)){Pn(k?a:yt,yi[1],$t,!0);var gt=!isNaN(q.y-q.startY),It=q.isDragging,ft=It&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),Nt=ra(dt);!ft&&gt&&(q._vx.reset(),q._vy.reset(),h&&ht&&dn.delayedCall(.08,function(){if(sa()-re>300&&!dt.defaultPrevented){if(dt.target.click)dt.target.click();else if(yt.createEvent){var pt=yt.createEvent("MouseEvents");pt.initMouseEvent("click",!0,!0,Xn,1,Nt.screenX,Nt.screenY,Nt.clientX,Nt.clientY,!1,!1,!1,!1,0,null),dt.target.dispatchEvent(pt)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,f&&It&&!k&&ne.restart(!0),zt&&Vt(),p&&It&&p(q),v&&v(q,ft)}},et=function(gt){return gt.touches&&gt.touches.length>1&&(q.isGesturing=!0)&&J(gt,q.isDragging)},V=function(){return(q.isGesturing=!1)||R(q)},G=function(gt){if(!_t(gt)){var It=P(),ft=w();At((It-Z)*it,(ft-ot)*it,1),Z=It,ot=ft,f&&ne.restart(!0)}},tt=function(gt){if(!_t(gt)){gt=ra(gt,h),Q&&(H=!0);var It=(gt.deltaMode===1?l:gt.deltaMode===2?Xn.innerHeight:1)*g;At(gt.deltaX*It,gt.deltaY*It,0),f&&!k&&ne.restart(!0)}},j=function(gt){if(!_t(gt)){var It=gt.clientX,ft=gt.clientY,Nt=It-q.x,pt=ft-q.y;q.x=It,q.y=ft,kt=!0,f&&ne.restart(!0),(Nt||pt)&&ae(Nt,pt)}},Et=function(gt){q.event=gt,z(q)},Gt=function(gt){q.event=gt,X(q)},Zt=function(gt){return _t(gt)||ra(gt,h)&&K(q)};ne=q._dc=dn.delayedCall(u||.25,Ht).pause(),q.deltaX=q.deltaY=0,q._vx=Sl(0,50,!0),q._vy=Sl(0,50,!0),q.scrollX=P,q.scrollY=w,q.isDragging=q.isGesturing=q.isPressed=!1,Hp(this),q.enable=function(dt){return q.isEnabled||(In(nt?yt:a,"scroll",Yh),o.indexOf("scroll")>=0&&In(nt?yt:a,"scroll",G,Ot,St),o.indexOf("wheel")>=0&&In(a,"wheel",tt,Ot,St),(o.indexOf("touch")>=0&&zp||o.indexOf("pointer")>=0)&&(In(a,yi[0],lt,Ot,St),In(yt,yi[2],I),In(yt,yi[3],I),ht&&In(a,"click",ut,!0,!0),K&&In(a,"click",Zt),J&&In(yt,"gesturestart",et),R&&In(yt,"gestureend",V),z&&In(a,es+"enter",Et),X&&In(a,es+"leave",Gt),F&&In(a,es+"move",j)),q.isEnabled=!0,q.isDragging=q.isGesturing=q.isPressed=kt=zt=!1,q._vx.reset(),q._vy.reset(),Z=P(),ot=w(),dt&&dt.type&&lt(dt),Rt&&Rt(q)),q},q.disable=function(){q.isEnabled&&(Vs.filter(function(dt){return dt!==q&&oa(dt.target)}).length||Pn(nt?yt:a,"scroll",Yh),q.isPressed&&(q._vx.reset(),q._vy.reset(),Pn(k?a:yt,yi[1],$t,!0)),Pn(nt?yt:a,"scroll",G,St),Pn(a,"wheel",tt,St),Pn(a,yi[0],lt,St),Pn(yt,yi[2],I),Pn(yt,yi[3],I),Pn(a,"click",ut,!0),Pn(a,"click",Zt),Pn(yt,"gesturestart",et),Pn(yt,"gestureend",V),Pn(a,es+"enter",Et),Pn(a,es+"leave",Gt),Pn(a,es+"move",j),q.isEnabled=q.isPressed=q.isDragging=!1,mt&&mt(q))},q.kill=q.revert=function(){q.disable();var dt=Vs.indexOf(q);dt>=0&&Vs.splice(dt,1),Yi===q&&(Yi=0)},Vs.push(q),k&&oa(a)&&(Yi=q),q.enable(_)},gx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ye.version="3.15.1";Ye.create=function(r){return new Ye(r)};Ye.register=Xp;Ye.getAll=function(){return Vs.slice()};Ye.getById=function(r){return Vs.filter(function(t){return t.vars.id===r})[0]};Vp()&&dn.registerPlugin(Ye);var Ut,$s,ge,Ae,ni,Te,ou,Bl,va,da,la,bl,xn,Hl,jh,Un,Yp,qp,Zs,cm,qh,hm,Dn,tu,um,fm,Tr,eu,au,Js,lu,Ar,nu,$h,wl=1,vn=Date.now,Zh=vn(),pi=0,ca=0,$p=function(t,e,n){var i=ei(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Zp=function(t,e){return e&&(!ei(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},yx=function r(){return ca&&requestAnimationFrame(r)},Jp=function(){return Hl=1},Kp=function(){return Hl=0},Ui=function(t){return t},ha=function(t){return Math.round(t*1e5)/1e5||0},dm=function(){return typeof window!="undefined"},pm=function(){return Ut||dm()&&(Ut=window.gsap)&&Ut.registerPlugin&&Ut},as=function(t){return!!~ou.indexOf(t)},mm=function(t){return(t==="Height"?lu:ge["inner"+t])||ni["client"+t]||Te["client"+t]},gm=function(t){return $i(t,"getBoundingClientRect")||(as(t)?function(){return Fl.width=ge.innerWidth,Fl.height=lu,Fl}:function(){return Zi(t)})},Mx=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=$i(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?mm(s):t["client"+s])||0}},Sx=function(t,e){return!e||~Mi.indexOf(t)?gm(t):function(){return Fl}},Ni=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=$i(t,n))?o()-gm(t)()[s]:as(t)?(ni[n]||Te[n])-mm(i):t[n]-t["offset"+i])},El=function(t,e){for(var n=0;n<Zs.length;n+=3)(!e||~e.indexOf(Zs[n+1]))&&t(Zs[n],Zs[n+1],Zs[n+2])},ei=function(t){return typeof t=="string"},yn=function(t){return typeof t=="function"},ua=function(t){return typeof t=="number"},ns=function(t){return typeof t=="object"},aa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Xs=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Ys=Math.abs,_m="left",xm="top",cu="right",hu="bottom",rs="width",ss="height",pa="Right",ma="Left",ga="Top",_a="Bottom",je="padding",fi="margin",Qs="Width",uu="Height",nn="px",di=function(t){return ge.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},bx=function(t){var e=di(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Qp=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Zi=function(t,e){var n=e&&di(t)[jh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ut.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},zl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},vm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},wx=function(t){return function(e){return Ut.utils.snap(vm(t),e)}},fu=function(t){var e=Ut.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Ex=function(t){return function(e,n){return fu(vm(t))(e,n.direction)}},Tl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},an=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},on=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Al=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},jp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Rl={toggleActions:"play",anticipatePin:0},kl={top:0,left:0,center:.5,bottom:1,right:1},Dl=function(t,e){if(ei(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in kl?kl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Cl=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,g=Ae.createElement("div"),_=as(n)||$i(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?Te:n.tagName==="IFRAME"?n.contentDocument.body:n,M=t.indexOf("start")!==-1,S=M?c:h,v="border-color:"+S+";font-size:"+f+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===Qe?cu:hu)+":"+(o+parseFloat(u))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Ul(g,0,i,M),g},Ul=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Qs]=1,s["border"+a+Qs]=0,s[n.p]=e+"px",Ut.set(t,s)},me=[],iu={},ya,tm=function(){return vn()-pi>34&&(ya||(ya=requestAnimationFrame(Ji)))},qs=function(){(!Dn||!Dn.isPressed||Dn.startX>Te.clientWidth)&&(ue.cache++,Dn?ya||(ya=requestAnimationFrame(Ji)):Ji(),pi||cs("scrollStart"),pi=vn())},Jh=function(){fm=ge.innerWidth,um=ge.innerHeight},fa=function(t){ue.cache++,(t===!0||!xn&&!hm&&!Ae.fullscreenElement&&!Ae.webkitFullscreenElement&&(!tu||fm!==ge.innerWidth||Math.abs(ge.innerHeight-um)>ge.innerHeight*.25))&&Bl.restart(!0)},ls={},Tx=[],ym=function r(){return on(Kt,"scrollEnd",r)||is(!0)},cs=function(t){return ls[t]&&ls[t].map(function(e){return e()})||Tx},ti=[],Mm=function(t){for(var e=0;e<ti.length;e+=5)(!t||ti[e+4]&&ti[e+4].query===t)&&(ti[e].style.cssText=ti[e+1],ti[e].getBBox&&ti[e].setAttribute("transform",ti[e+2]||""),ti[e+3].uncache=1)},Sm=function(){ue.cache++,ue.forEach(function(t){return yn(t)&&(t.rec=t())})},du=function(t,e){var n;for(Un=0;Un<me.length;Un++)n=me[Un],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ar=!0,e&&Mm(e),e||cs("revert")},bm=function(t,e){ue.cache++,(e||!Nn)&&ue.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),ei(t)&&(au=t,ge.history.scrollRestoration!==t&&(ge.history.scrollRestoration=t))},Nn,os=0,em,Ax=function(){if(em!==os){var t=em=os;requestAnimationFrame(function(){return t===os&&is(!0)})}},wm=function(){Te.appendChild(Js),lu=!Dn&&Js.offsetHeight||ge.innerHeight,Te.removeChild(Js)},nm=function(t){return va(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},is=function(t,e){if(ni=Ae.documentElement,Te=Ae.body,ou=[ge,Ae,ni,Te],pi&&!t&&!Ar){an(Kt,"scrollEnd",ym);return}wm(),Nn=Kt.isRefreshing=!0,Ar||Sm();var n=cs("refreshInit");cm&&Kt.sort(),e||du(),ue.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),me.slice(0).forEach(function(i){return i.refresh()}),Ar=!1,me.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),nu=1,nm(!0),me.forEach(function(i){var s=Ni(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),nm(!1),nu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ue.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),bm(au,1),Bl.pause(),os++,Nn=2,Ji(2),me.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Nn=Kt.isRefreshing=!1,cs("refresh")},ru=0,Nl=1,xa,Ji=function(t){if(t===2||!Nn&&!Ar){Kt.isUpdating=!0,xa&&xa.update(0);var e=me.length,n=vn(),i=n-Zh>=50,s=e&&me[0].scroll();if(Nl=ru>s?-1:1,Nn||(ru=s),i&&(pi&&!Hl&&n-pi>200&&(pi=0,cs("scrollEnd")),la=Zh,Zh=n),Nl<0){for(Un=e;Un-- >0;)me[Un]&&me[Un].update(0,i);Nl=1}else for(Un=0;Un<e;Un++)me[Un]&&me[Un].update(0,i);Kt.isUpdating=!1}ya=0},su=[_m,xm,hu,cu,fi+_a,fi+pa,fi+ga,fi+ma,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ol=su.concat([rs,ss,"boxSizing","max"+Qs,"max"+uu,"position",fi,je,je+ga,je+pa,je+_a,je+ma]),Rx=function(t,e,n){Ks(n);var i=t._gsap;if(i.spacerIsNative)Ks(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Kh=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=su.length,o=e.style,a=t.style,l;s--;)l=su[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[hu]=a[cu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[rs]=zl(t,_n)+nn,o[ss]=zl(t,Qe)+nn,o[je]=a[fi]=a[xm]=a[_m]="0",Ks(i),a[rs]=a["max"+Qs]=n[rs],a[ss]=a["max"+uu]=n[ss],a[je]=n[je],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Cx=/([A-Z])/g,Ks=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Ut.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Cx,"-$1").toLowerCase())}},Pl=function(t){for(var e=Ol.length,n=t.style,i=[],s=0;s<e;s++)i.push(Ol[s],n[Ol[s]]);return i.t=t,i},Px=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Fl={left:0,top:0},im=function(t,e,n,i,s,o,a,l,c,h,f,u,d,g){yn(t)&&(t=t(l)),ei(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Dl("0"+t.substr(3),n):0));var _=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(t)||(t=+t),ua(t))d&&(t=Ut.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,t)),a&&Ul(a,n,i,!0);else{yn(e)&&(e=e(l));var S=(t||"0").split(" "),v,T,A,b;M=Ln(e,l)||Te,v=Zi(M)||{},(!v||!v.left&&!v.top)&&di(M).display==="none"&&(b=M.style.display,M.style.display="block",v=Zi(M),b?M.style.display=b:M.style.removeProperty("display")),T=Dl(S[0],v[i.d]),A=Dl(S[1]||"0",n),t=v[i.p]-c[i.p]-h+T+s-A,a&&Ul(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var C=t+n,y=o._isStart;m="scroll"+i.d2,Ul(o,C,i,y&&C>20||!y&&(f?Math.max(Te[m],ni[m]):o.parentNode[m])<=C+1),f&&(c=Zi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+nn))}return d&&M&&(m=Zi(M),d.seek(u),p=Zi(M),d._caScrollDist=m[i.p]-p[i.p],t=t/d._caScrollDist*u),d&&d.seek(_),d?t:Math.round(t)},Ix=/(webkit|moz|length|cssText|inset)/i,rm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Te){t._stOrig=s.cssText,a=di(t);for(o in a)!+o&&!Ix.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ut.core.getCache(t).uncache=1,e.appendChild(t)}},Em=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Il=function(t,e,n){var i={};i[e.p]="+="+n,Ut.set(t,i)},sm=function(t,e){var n=qi(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,f){var u=o.tween,d=l.onComplete,g={};c=c||n();var _=Em(n,c,function(){u.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*u.ratio+f*u.ratio*u.ratio)},l.onUpdate=function(){ue.cache++,o.tween&&Ji()},l.onComplete=function(){o.tween=0,d&&d.call(u)},u=o.tween=Ut.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},an(t,"wheel",n.wheelHandler),Kt.isTouch&&an(t,"touchmove",n.wheelHandler),s},Kt=(function(){function r(e,n){$s||r.register(Ut)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),eu(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ca){this.update=this.refresh=this.kill=Ui;return}n=Qp(ei(n)||ua(n)||n.nodeType?{trigger:n}:n,Rl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,S=s.once,v=s.snap,T=s.pinReparent,A=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,y=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?_n:Qe,L=!f&&f!==0,D=Ln(n.scroller||ge),O=Ut.core.getCache(D),z=as(D),X=("pinType"in n?n.pinType:$i(D,"pinType")||z&&"fixed")==="fixed",F=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=L&&n.toggleActions.split(" "),k="markers"in n?n.markers:Rl.markers,J=z?0:parseFloat(di(D)["border"+x.p2+Qs])||0,R=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Rt=Mx(D,z,x),mt=Sx(D,z),K=0,it=0,St=0,ht=qi(D,x),Tt,Dt,ee,ne,zt,kt,H,_e,Yt,q,wt,oe,Ot,P,w,Z,ot,rt,nt,yt,xt,Mt,re,ut,_t,Ht,Vt,At,ae,$t,lt,I,et,V,G,tt,j,Et,Gt;if(R._startClamp=R._endClamp=!1,R._dir=x,m*=45,R.scroller=D,R.scroll=b?b.time.bind(b):ht,ne=ht(),Ar&&ht.rec==null&&(ht.rec=ne),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(cm=1,n.refreshPriority===-9999&&(xa=R)),O.tweenScroll=O.tweenScroll||{top:sm(D,Qe),left:sm(D,_n)},R.tweenTo=Tt=O.tweenScroll[x.p],R.scrubDuration=function(ft){et=ua(ft)&&ft,et?I?I.duration(ft):I=Ut.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:et,paused:!0,onComplete:function(){return p&&p(R)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),$t=0,l||(l=i.vars.id)),v&&((!ns(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Te.style&&Ut.set(z?[Te,ni]:D,{scrollBehavior:"auto"}),ue.forEach(function(ft){return yn(ft)&&ft.target===(z?Ae.scrollingElement||ni:D)&&(ft.smooth=!1)}),ee=yn(v.snapTo)?v.snapTo:v.snapTo==="labels"?wx(i):v.snapTo==="labelsDirectional"?Ex(i):v.directional!==!1?function(ft,Nt){return fu(v.snapTo)(ft,vn()-it<500?0:Nt.direction)}:Ut.utils.snap(v.snapTo),V=v.duration||{min:.1,max:2},V=ns(V)?da(V.min,V.max):da(V,V),G=Ut.delayedCall(v.delay||et/2||.1,function(){var ft=ht(),Nt=vn()-it<500,pt=Tt.tween;if((Nt||Math.abs(R.getVelocity())<10)&&!pt&&!Hl&&K!==ft){var Ct=(ft-kt)/P,Ft=i&&!L?i.totalProgress():Ct,Wt=Nt?0:(Ft-lt)/(vn()-la)*1e3||0,xe=Ut.utils.clamp(-Ct,1-Ct,Ys(Wt/2)*Wt/.185),Le=Ct+(v.inertia===!1?0:xe),Me,jt,te=v,Ze=te.onStart,Se=te.onInterrupt,ke=te.onComplete;if(Me=ee(Le,R),ua(Me)||(Me=Le),jt=Math.max(0,Math.round(kt+Me*P)),ft<=H&&ft>=kt&&jt!==ft){if(pt&&!pt._initted&&pt.data<=Ys(jt-ft))return;v.inertia===!1&&(xe=Me-Ct),Tt(jt,{duration:V(Ys(Math.max(Ys(Le-Ft),Ys(Me-Ft))*.185/Wt/.05||0)),ease:v.ease||"power3",data:Ys(jt-ft),onInterrupt:function(){return G.restart(!0)&&Se&&Xs(R,Se)},onComplete:function(){R.update(),K=ht(),i&&!L&&(I?I.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),$t=lt=i&&!L?i.totalProgress():R.progress,M&&M(R),ke&&Xs(R,ke)}},ft,xe*P,jt-ft-xe*P),Ze&&Xs(R,Ze,Tt.tween)}}else R.isActive&&K!==ft&&G.restart(!0)}).pause()),l&&(iu[l]=R),u=R.trigger=Ln(u||d!==!0&&d),Gt=u&&u._gsap&&u._gsap.stRevert,Gt&&(Gt=Gt(R)),d=d===!0?u:Ln(d),ei(a)&&(a={targets:u,className:a}),d&&(g===!1||g===fi||(g=!g&&d.parentNode&&d.parentNode.style&&di(d.parentNode).display==="flex"?!1:je),R.pin=d,Dt=Ut.core.getCache(d),Dt.spacer?w=Dt.pinState:(A&&(A=Ln(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Dt.spacerIsNative=!!A,A&&(Dt.spacerState=Pl(A))),Dt.spacer=rt=A||Ae.createElement("div"),rt.classList.add("pin-spacer"),l&&rt.classList.add("pin-spacer-"+l),Dt.pinState=w=Pl(d)),n.force3D!==!1&&Ut.set(d,{force3D:!0}),R.spacer=rt=Dt.spacer,ae=di(d),ut=ae[g+x.os2],yt=Ut.getProperty(d),xt=Ut.quickSetter(d,x.a,nn),Kh(d,rt,ae),ot=Pl(d)),k){oe=ns(k)?Qp(k,jp):jp,q=Cl("scroller-start",l,D,x,oe,0),wt=Cl("scroller-end",l,D,x,oe,0,q),nt=q["offset"+x.op.d2];var Zt=Ln($i(D,"content")||D);_e=this.markerStart=Cl("start",l,Zt,x,oe,nt,0,b),Yt=this.markerEnd=Cl("end",l,Zt,x,oe,nt,0,b),b&&(Et=Ut.quickSetter([_e,Yt],x.a,nn)),!X&&!(Mi.length&&$i(D,"fixedMarkers")===!0)&&(bx(z?Te:D),Ut.set([q,wt],{force3D:!0}),Ht=Ut.quickSetter(q,x.a,nn),At=Ut.quickSetter(wt,x.a,nn))}if(b){var dt=b.vars.onUpdate,gt=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){R.update(0,0,1),dt&&dt.apply(b,gt||[])})}if(R.previous=function(){return me[me.indexOf(R)-1]},R.next=function(){return me[me.indexOf(R)+1]},R.revert=function(ft,Nt){if(!Nt)return R.kill(!0);var pt=ft!==!1||!R.enabled,Ct=xn;pt!==R.isReverted&&(pt&&(tt=Math.max(ht(),R.scroll.rec||0),St=R.progress,j=i&&i.progress()),_e&&[_e,Yt,q,wt].forEach(function(Ft){return Ft.style.display=pt?"none":"block"}),pt&&(xn=R,R.update(pt)),d&&(!T||!R.isActive)&&(pt?Rx(d,rt,w):Kh(d,rt,di(d),_t)),pt||R.update(pt),xn=Ct,R.isReverted=pt)},R.refresh=function(ft,Nt,pt,Ct){if(!((xn||!R.enabled)&&!Nt)){if(d&&ft&&pi){an(r,"scrollEnd",ym);return}!Nn&&Q&&Q(R),xn=R,Tt.tween&&!pt&&(Tt.tween.kill(),Tt.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ve){return ve.vars.immediateRender&&ve.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ft=Rt(),Wt=mt(),xe=b?b.duration():Ni(D,x),Le=P<=.01||!P,Me=0,jt=Ct||0,te=ns(pt)?pt.end:n.end,Ze=n.endTrigger||u,Se=ns(pt)?pt.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),ke=R.pinnedContainer=n.pinnedContainer&&Ln(n.pinnedContainer,R),E=u&&Math.max(0,me.indexOf(R))||0,B=E,W,$,N,st,at,ct,vt,qt,Jt,Pt,se,de,pe;for(k&&ns(pt)&&(de=Ut.getProperty(q,x.p),pe=Ut.getProperty(wt,x.p));B-- >0;)ct=me[B],ct.end||ct.refresh(0,1)||(xn=R),vt=ct.pin,vt&&(vt===u||vt===d||vt===ke)&&!ct.isReverted&&(Pt||(Pt=[]),Pt.unshift(ct),ct.revert(!0,!0)),ct!==me[B]&&(E--,B--);for(yn(Se)&&(Se=Se(R)),Se=$p(Se,"start",R),kt=im(Se,u,Ft,x,ht(),_e,q,R,Wt,J,X,xe,b,R._startClamp&&"_startClamp")||(d?-.001:0),yn(te)&&(te=te(R)),ei(te)&&!te.indexOf("+=")&&(~te.indexOf(" ")?te=(ei(Se)?Se.split(" ")[0]:"")+te:(Me=Dl(te.substr(2),Ft),te=ei(Se)?Se:(b?Ut.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,kt):kt)+Me,Ze=u)),te=$p(te,"end",R),H=Math.max(kt,im(te||(Ze?"100% 0":xe),Ze,Ft,x,ht()+Me,Yt,wt,R,Wt,J,X,xe,b,R._endClamp&&"_endClamp"))||-.001,Me=0,B=E;B--;)ct=me[B]||{},vt=ct.pin,vt&&ct.start-ct._pinPush<=kt&&!b&&ct.end>0&&(W=ct.end-(R._startClamp?Math.max(0,ct.start):ct.start),(vt===u&&ct.start-ct._pinPush<kt||vt===ke)&&isNaN(Se)&&(Me+=W*(1-ct.progress)),vt===d&&(jt+=W));if(kt+=Me,H+=Me,R._startClamp&&(R._startClamp+=Me),R._endClamp&&!Nn&&(R._endClamp=H||-.001,H=Math.min(H,Ni(D,x))),P=H-kt||(kt-=.01)&&.001,Le&&(St=Ut.utils.clamp(0,1,Ut.utils.normalize(kt,H,tt))),R._pinPush=jt,_e&&Me&&(W={},W[x.a]="+="+Me,ke&&(W[x.p]="-="+ht()),Ut.set([_e,Yt],W)),d&&!(nu&&R.end>=Ni(D,x)))W=di(d),st=x===Qe,N=ht(),Mt=parseFloat(yt(x.a))+jt,!xe&&H>1&&(se=(z?Ae.scrollingElement||ni:D).style,se={style:se,value:se["overflow"+x.a.toUpperCase()]},z&&di(Te)["overflow"+x.a.toUpperCase()]!=="scroll"&&(se.style["overflow"+x.a.toUpperCase()]="scroll")),Kh(d,rt,W),ot=Pl(d),$=Zi(d,!0),qt=X&&qi(D,st?_n:Qe)(),g?(_t=[g+x.os2,P+jt+nn],_t.t=rt,B=g===je?zl(d,x)+P+jt:0,B&&(_t.push(x.d,B+nn),rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=B+nn)),Ks(_t),ke&&me.forEach(function(ve){ve.pin===ke&&ve.vars.pinSpacing!==!1&&(ve._subPinOffset=!0)}),X&&ht(tt)):(B=zl(d,x),B&&rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=B+nn)),X&&(at={top:$.top+(st?N-kt:qt)+nn,left:$.left+(st?qt:N-kt)+nn,boxSizing:"border-box",position:"fixed"},at[rs]=at["max"+Qs]=Math.ceil($.width)+nn,at[ss]=at["max"+uu]=Math.ceil($.height)+nn,at[fi]=at[fi+ga]=at[fi+pa]=at[fi+_a]=at[fi+ma]="0",at[je]=W[je],at[je+ga]=W[je+ga],at[je+pa]=W[je+pa],at[je+_a]=W[je+_a],at[je+ma]=W[je+ma],Z=Px(w,at,T),Nn&&ht(0)),i?(Jt=i._initted,qh(1),i.render(i.duration(),!0,!0),re=yt(x.a)-Mt+P+jt,Vt=Math.abs(P-re)>1,X&&Vt&&Z.splice(Z.length-2,2),i.render(0,!0,!0),Jt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),qh(0)):re=P,se&&(se.value?se.style["overflow"+x.a.toUpperCase()]=se.value:se.style.removeProperty("overflow-"+x.a));else if(u&&ht()&&!b)for($=u.parentNode;$&&$!==Te;)$._pinOffset&&(kt-=$._pinOffset,H-=$._pinOffset),$=$.parentNode;Pt&&Pt.forEach(function(ve){return ve.revert(!1,!0)}),R.start=kt,R.end=H,ne=zt=Nn?tt:ht(),!b&&!Nn&&!Ar&&(ne<tt&&ht(tt),R.scroll.rec=0),R.revert(!1,!0),it=vn(),G&&(K=-1,G.restart(!0)),xn=0,i&&L&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(Le||St!==R.progress||b||_||i&&!i._initted)&&(i&&!L&&(i._initted||St||i.vars.immediateRender!==!1)&&i.totalProgress(b&&kt<-.001&&!St?Ut.utils.normalize(kt,H,0):St,!0),R.progress=Le||(ne-kt)/P===St?0:St),d&&g&&(rt._pinOffset=Math.round(R.progress*re)),I&&I.invalidate(),isNaN(de)||(de-=Ut.getProperty(q,x.p),pe-=Ut.getProperty(wt,x.p),Il(q,x,de),Il(_e,x,de-(Ct||0)),Il(wt,x,pe),Il(Yt,x,pe-(Ct||0))),Le&&!Nn&&R.update(),h&&!Nn&&!Ot&&(Ot=!0,h(R),Ot=!1)}},R.getVelocity=function(){return(ht()-zt)/(vn()-la)*1e3||0},R.endAnimation=function(){aa(R.callbackAnimation),i&&(I?I.progress(1):i.paused()?L||aa(i,R.direction<0,1):aa(i,i.reversed()))},R.labelToScroll=function(ft){return i&&i.labels&&(kt||R.refresh()||kt)+i.labels[ft]/i.duration()*P||0},R.getTrailing=function(ft){var Nt=me.indexOf(R),pt=R.direction>0?me.slice(0,Nt).reverse():me.slice(Nt+1);return(ei(ft)?pt.filter(function(Ct){return Ct.vars.preventOverlaps===ft}):pt).filter(function(Ct){return R.direction>0?Ct.end<=kt:Ct.start>=H})},R.update=function(ft,Nt,pt){if(!(b&&!pt&&!ft)){var Ct=Nn===!0?tt:R.scroll(),Ft=ft?0:(Ct-kt)/P,Wt=Ft<0?0:Ft>1?1:Ft||0,xe=R.progress,Le,Me,jt,te,Ze,Se,ke,E;if(Nt&&(zt=ne,ne=b?ht():Ct,v&&(lt=$t,$t=i&&!L?i.totalProgress():Wt)),m&&d&&!xn&&!wl&&pi&&(!Wt&&kt<Ct+(Ct-zt)/(vn()-la)*m?Wt=1e-4:Wt===1&&H>Ct+(Ct-zt)/(vn()-la)*m&&(Wt=.9999)),Wt!==xe&&R.enabled){if(Le=R.isActive=!!Wt&&Wt<1,Me=!!xe&&xe<1,Se=Le!==Me,Ze=Se||!!Wt!=!!xe,R.direction=Wt>xe?1:-1,R.progress=Wt,Ze&&!xn&&(jt=Wt&&!xe?0:Wt===1?1:xe===1?2:3,L&&(te=!Se&&U[jt+1]!=="none"&&U[jt+1]||U[jt],E=i&&(te==="complete"||te==="reset"||te in i))),y&&(Se||E)&&(E||f||!i)&&(yn(y)?y(R):R.getTrailing(y).forEach(function(N){return N.endAnimation()})),L||(I&&!xn&&!wl?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",Wt,i._tTime/i._tDur):(I.vars.totalProgress=Wt,I.invalidate().restart())):i&&i.totalProgress(Wt,!!(xn&&(it||ft)))),d){if(ft&&g&&(rt.style[g+x.os2]=ut),!X)xt(ha(Mt+re*Wt));else if(Ze){if(ke=!ft&&Wt>xe&&H+1>Ct&&Ct+1>=Ni(D,x),T)if(!ft&&(Le||ke)){var B=Zi(d,!0),W=Ct-kt;rm(d,Te,B.top+(x===Qe?W:0)+nn,B.left+(x===Qe?0:W)+nn)}else rm(d,rt);Ks(Le||ke?Z:ot),Vt&&Wt<1&&Le||xt(Mt+(Wt===1&&!ke?re:0))}}v&&!Tt.tween&&!xn&&!wl&&G.restart(!0),a&&(Se||S&&Wt&&(Wt<1||!$h))&&va(a.targets).forEach(function(N){return N.classList[Le||S?"add":"remove"](a.className)}),o&&!L&&!ft&&o(R),Ze&&!xn?(L&&(E&&(te==="complete"?i.pause().totalProgress(1):te==="reset"?i.restart(!0).pause():te==="restart"?i.restart(!0):i[te]()),o&&o(R)),(Se||!$h)&&(c&&Se&&Xs(R,c),F[jt]&&Xs(R,F[jt]),S&&(Wt===1?R.kill(!1,1):F[jt]=0),Se||(jt=Wt===1?1:3,F[jt]&&Xs(R,F[jt]))),C&&!Le&&Math.abs(R.getVelocity())>(ua(C)?C:2500)&&(aa(R.callbackAnimation),I?I.progress(1):aa(i,te==="reverse"?1:!Wt,1))):L&&o&&!xn&&o(R)}if(At){var $=b?Ct/b.duration()*(b._caScrollDist||0):Ct;Ht($+(q._isFlipped?1:0)),At($)}Et&&Et(-Ct/b.duration()*(b._caScrollDist||0))}},R.enable=function(ft,Nt){R.enabled||(R.enabled=!0,an(D,"resize",fa),z||an(D,"scroll",qs),Q&&an(r,"refreshInit",Q),ft!==!1&&(R.progress=St=0,ne=zt=K=ht()),Nt!==!1&&R.refresh())},R.getTween=function(ft){return ft&&Tt?Tt.tween:I},R.setPositions=function(ft,Nt,pt,Ct){if(b){var Ft=b.scrollTrigger,Wt=b.duration(),xe=Ft.end-Ft.start;ft=Ft.start+xe*ft/Wt,Nt=Ft.start+xe*Nt/Wt}R.refresh(!1,!1,{start:Zp(ft,pt&&!!R._startClamp),end:Zp(Nt,pt&&!!R._endClamp)},Ct),R.update()},R.adjustPinSpacing=function(ft){if(_t&&ft){var Nt=_t.indexOf(x.d)+1;_t[Nt]=parseFloat(_t[Nt])+ft+nn,_t[1]=parseFloat(_t[1])+ft+nn,Ks(_t)}},R.disable=function(ft,Nt){if(ft!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Nt||I&&I.pause(),tt=0,Dt&&(Dt.uncache=1),Q&&on(r,"refreshInit",Q),G&&(G.pause(),Tt.tween&&Tt.tween.kill()&&(Tt.tween=0)),!z)){for(var pt=me.length;pt--;)if(me[pt].scroller===D&&me[pt]!==R)return;on(D,"resize",fa),z||on(D,"scroll",qs)}},R.kill=function(ft,Nt){R.disable(ft,Nt),I&&!Nt&&I.kill(),l&&delete iu[l];var pt=me.indexOf(R);pt>=0&&me.splice(pt,1),pt===Un&&Nl>0&&Un--,pt=0,me.forEach(function(Ct){return Ct.scroller===R.scroller&&(pt=1)}),pt||Nn||Ar||(R.scroll.rec=0),i&&(i.scrollTrigger=null,ft&&i.revert({kill:!1}),Nt||i.kill()),_e&&[_e,Yt,q,wt].forEach(function(Ct){return Ct.parentNode&&Ct.parentNode.removeChild(Ct)}),xa===R&&(xa=0),d&&(Dt&&(Dt.uncache=1),pt=0,me.forEach(function(Ct){return Ct.pin===d&&pt++}),pt||(Dt.spacer=0)),n.onKill&&n.onKill(R)},me.push(R),R.enable(!1,!1),Gt&&Gt(R),i&&i.add&&!P){var It=R.update;R.update=function(){R.update=It,ue.cache++,kt||H||R.refresh()},Ut.delayedCall(.01,R.update),P=.01,kt=H=0}else R.refresh();d&&Ax()},r.register=function(n){return $s||(Ut=n||pm(),dm()&&window.document&&r.enable(),$s=ca),$s},r.defaults=function(n){if(n)for(var i in n)Rl[i]=n[i];return Rl},r.disable=function(n,i){ca=0,me.forEach(function(o){return o[i?"kill":"disable"](n)}),on(ge,"wheel",qs),on(Ae,"scroll",qs),clearInterval(bl),on(Ae,"touchcancel",Ui),on(Te,"touchstart",Ui),Tl(on,Ae,"pointerdown,touchstart,mousedown",Jp),Tl(on,Ae,"pointerup,touchend,mouseup",Kp),Bl.kill(),El(on);for(var s=0;s<ue.length;s+=3)Al(on,ue[s],ue[s+1]),Al(on,ue[s],ue[s+2])},r.enable=function(){if(ge=window,Ae=document,ni=Ae.documentElement,Te=Ae.body,Ut){if(va=Ut.utils.toArray,da=Ut.utils.clamp,eu=Ut.core.context||Ui,qh=Ut.core.suppressOverwrites||Ui,au=ge.history.scrollRestoration||"auto",ru=ge.pageYOffset||0,Ut.core.globals("ScrollTrigger",r),Te){ca=1,Js=document.createElement("div"),Js.style.height="100vh",Js.style.position="absolute",wm(),yx(),Ye.register(Ut),r.isTouch=Ye.isTouch,Tr=Ye.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),tu=Ye.isTouch===1,an(ge,"wheel",qs),ou=[ge,Ae,ni,Te],Ut.matchMedia?(r.matchMedia=function(h){var f=Ut.matchMedia(),u;for(u in h)f.add(u,h[u]);return f},Ut.addEventListener("matchMediaInit",function(){Sm(),du()}),Ut.addEventListener("matchMediaRevert",function(){return Mm()}),Ut.addEventListener("matchMedia",function(){is(0,1),cs("matchMedia")}),Ut.matchMedia().add("(orientation: portrait)",function(){return Jh(),Jh})):console.warn("Requires GSAP 3.11.0 or later"),Jh(),an(Ae,"scroll",qs);var n=Te.hasAttribute("style"),i=Te.style,s=i.borderTopStyle,o=Ut.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Zi(Te),Qe.m=Math.round(a.top+Qe.sc())||0,_n.m=Math.round(a.left+_n.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Te.setAttribute("style",""),Te.removeAttribute("style")),bl=setInterval(tm,250),Ut.delayedCall(.5,function(){return wl=0}),an(Ae,"touchcancel",Ui),an(Te,"touchstart",Ui),Tl(an,Ae,"pointerdown,touchstart,mousedown",Jp),Tl(an,Ae,"pointerup,touchend,mouseup",Kp),jh=Ut.utils.checkPrefix("transform"),Ol.push(jh),$s=vn(),Bl=Ut.delayedCall(.2,is).pause(),Zs=[Ae,"visibilitychange",function(){var h=ge.innerWidth,f=ge.innerHeight;Ae.hidden?(Yp=h,qp=f):(Yp!==h||qp!==f)&&fa()},Ae,"DOMContentLoaded",is,ge,"load",is,ge,"resize",fa],El(an),me.forEach(function(h){return h.enable(0,1)}),l=0;l<ue.length;l+=3)Al(on,ue[l],ue[l+1]),Al(on,ue[l],ue[l+2])}else if(Ae){var c=function h(){r.enable(),Ae.removeEventListener("DOMContentLoaded",h)};Ae.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&($h=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(bl)||(bl=i)&&setInterval(tm,i),"ignoreMobileResize"in n&&(tu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(El(on)||El(an,n.autoRefreshEvents||"none"),hm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Ln(n),o=ue.indexOf(s),a=as(s);~o&&ue.splice(o,a?6:2),i&&(a?Mi.unshift(ge,i,Te,i,ni,i):Mi.unshift(s,i))},r.clearMatchMedia=function(n){me.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(ei(n)?Ln(n):n).getBoundingClientRect(),a=o[s?rs:ss]*i||0;return s?o.right-a>0&&o.left+a<ge.innerWidth:o.bottom-a>0&&o.top+a<ge.innerHeight},r.positionInViewport=function(n,i,s){ei(n)&&(n=Ln(n));var o=n.getBoundingClientRect(),a=o[s?rs:ss],l=i==null?a/2:i in kl?kl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ge.innerWidth:(o.top+l)/ge.innerHeight},r.killAll=function(n){if(me.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ls.killAll||[];ls={},i.forEach(function(s){return s()})}},r})();Kt.version="3.15.1";Kt.saveStyles=function(r){return r?va(r).forEach(function(t){if(t&&t.style){var e=ti.indexOf(t);e>=0&&ti.splice(e,5),ti.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ut.core.getCache(t),eu())}}):ti};Kt.revert=function(r,t){return du(!r,t)};Kt.create=function(r,t){return new Kt(r,t)};Kt.refresh=function(r){return r?fa(!0):($s||Kt.register())&&is(!0)};Kt.update=function(r){return++ue.cache&&Ji(r===!0?2:0)};Kt.clearScrollMemory=bm;Kt.maxScroll=function(r,t){return Ni(r,t?_n:Qe)};Kt.getScrollFunc=function(r,t){return qi(Ln(r),t?_n:Qe)};Kt.getById=function(r){return iu[r]};Kt.getAll=function(){return me.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Kt.isScrolling=function(){return!!pi};Kt.snapDirectional=fu;Kt.addEventListener=function(r,t){var e=ls[r]||(ls[r]=[]);~e.indexOf(t)||e.push(t)};Kt.removeEventListener=function(r,t){var e=ls[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Kt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var f=[],u=[],d=Ut.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),u.push(g),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&yn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return yn(s)&&(s=s(),an(Kt,"refresh",function(){return s=t.batchMax()})),va(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Kt.create(c))}),e};var om=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Qh=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ye.isTouch?" pinch-zoom":""):"none",t===ni&&r(Te,e)},Ll={auto:1,scroll:1},Lx=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ut.core.getCache(s),a=vn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Te&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ll[(l=di(s)).overflowY]||Ll[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!as(s)&&(Ll[(l=di(s)).overflowY]||Ll[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Tm=function(t,e,n,i){return Ye.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Lx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&an(Ae,Ye.eventTypes[0],lm,!1,!0)},onDisable:function(){return on(Ae,Ye.eventTypes[0],lm,!0)}})},Dx=/(input|label|select|textarea)/i,am,lm=function(t){var e=Dx.test(t.target.tagName);(e||am)&&(t._gsapAllow=!0,am=e)},Ux=function(t){ns(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Ln(t.target)||ni,h=Ut.core.globals().ScrollSmoother,f=h&&h.get(),u=Tr&&(t.content&&Ln(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=qi(c,Qe),g=qi(c,_n),_=1,m=(Ye.isTouch&&ge.visualViewport?ge.visualViewport.scale*ge.visualViewport.width:ge.outerWidth)/ge.innerWidth,p=0,M=yn(i)?function(){return i(a)}:function(){return i||2.8},S,v,T=Tm(c,t.type,!0,s),A=function(){return v=!1},b=Ui,C=Ui,y=function(){l=Ni(c,Qe),C=da(Tr?1:0,l),n&&(b=da(0,Ni(c,_n))),S=os},x=function(){u._gsap.y=ha(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(v){requestAnimationFrame(A);var k=ha(a.deltaY/2),J=C(d.v-k);if(u&&J!==d.v+d.offset){d.offset=J-d.v;var R=ha((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",d.cacheID=ue.cache,Ji()}return!0}d.offset&&x(),v=!0},D,O,z,X,F=function(){y(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return u&&Ut.set(u,{y:"+=0"}),t.ignoreCheck=function(U){return Tr&&U.type==="touchmove"&&L(U)||_>1.05&&U.type!=="touchstart"||a.isGesturing||U.touches&&U.touches.length>1},t.onPress=function(){v=!1;var U=_;_=ha((ge.visualViewport&&ge.visualViewport.scale||1)/m),D.pause(),U!==_&&Qh(c,_>1.01?!0:n?!1:"x"),O=g(),z=d(),y(),S=os},t.onRelease=t.onGestureStart=function(U,k){if(d.offset&&x(),!k)X.restart(!0);else{ue.cache++;var J=M(),R,Q;n&&(R=g(),Q=R+J*.05*-U.velocityX/.227,J*=om(g,R,Q,Ni(c,_n)),D.vars.scrollX=b(Q)),R=d(),Q=R+J*.05*-U.velocityY/.227,J*=om(d,R,Q,Ni(c,Qe)),D.vars.scrollY=C(Q),D.invalidate().duration(J).play(.01),(Tr&&D.vars.scrollY>=l||R>=l-1)&&Ut.to({},{onUpdate:F,duration:J})}o&&o(U)},t.onWheel=function(){D._ts&&D.pause(),vn()-p>1e3&&(S=0,p=vn())},t.onChange=function(U,k,J,R,Q){if(os!==S&&y(),k&&n&&g(b(R[2]===k?O+(U.startX-U.x):g()+k-R[1])),J){d.offset&&x();var Rt=Q[2]===J,mt=Rt?z+U.startY-U.y:d()+J-Q[1],K=C(mt);Rt&&mt!==K&&(z+=K-mt),d(K)}(J||k)&&Ji()},t.onEnable=function(){Qh(c,n?!1:"x"),Kt.addEventListener("refresh",F),an(ge,"resize",F),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),T.enable()},t.onDisable=function(){Qh(c,!0),on(ge,"resize",F),Kt.removeEventListener("refresh",F),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ye(t),a.iOS=Tr,Tr&&!d()&&d(1),Tr&&Ut.ticker.add(Ui),X=a._dc,D=Ut.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Em(d,d(),function(){return D.pause()})},onUpdate:Ji,onComplete:X.vars.onComplete}),a};Kt.sort=function(r){if(yn(r))return me.sort(r);var t=ge.pageYOffset||0;return Kt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ge.innerHeight}),me.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Kt.observe=function(r){return new Ye(r)};Kt.normalizeScroll=function(r){if(typeof r=="undefined")return Dn;if(r===!0&&Dn)return Dn.enable();if(r===!1){Dn&&Dn.kill(),Dn=r;return}var t=r instanceof Ye?r:Ux(r);return Dn&&Dn.target===t.target&&Dn.kill(),as(t.target)&&(Dn=t),t};Kt.core={_getVelocityProp:Sl,_inputObserver:Tm,_scrollers:ue,_proxies:Mi,bridge:{ss:function(){pi||cs("scrollStart"),pi=vn()},ref:function(){return xn}}};pm()&&Ut.registerPlugin(Kt);var Ma,Sa,Am=typeof Symbol=="function"?Symbol():"_split",mu,Nx=()=>mu||Wl.register(window.gsap),Rm=typeof Intl!="undefined"&&"Segmenter"in Intl?new Intl.Segmenter:0,ba=r=>r?typeof r=="string"?ba(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((t,e)=>(typeof e=="string"?t.push(...ba(e)):t.push(e),t),[]):[r]:[],Cm=r=>ba(r).filter(t=>t&&t.nodeType===1),Vl=[],pu=function(){},Ox={add:r=>r()},Fx=/\s+/g,Pm=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Gl={left:0,top:0,width:0,height:0},Bx=(r,t)=>{for(;++t<r.length&&r[t]===Gl;);return r[t]||Gl},Im=({element:r,html:t,ariaL:e,ariaH:n})=>{r.innerHTML=t,e?r.setAttribute("aria-label",e):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},Lm=(r,t)=>{if(t){let e=new Set(r.join("").match(t)||Vl),n=r.length,i,s,o,a;if(e.size)for(;--n>-1;){s=r[n];for(o of e)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},Dm=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),js=(r,t,e)=>t.insertBefore(typeof r=="string"?document.createTextNode(r):r,e),gu=(r,t,e)=>{let n=t[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=t,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let f=document.createElement(i),u=e.length+1;return n&&(f.className=n+(l?" "+n+u:"")),o&&f.style.setProperty("--"+r,u+""),s!=="none"&&f.setAttribute("aria-hidden","true"),i!=="span"&&(f.style.position="relative",f.style.display=a),f.textContent=h,e.push(f),f};return l&&(n=n.replace("++","")),c.collection=e,c},zx=(r,t,e,n)=>{let i=gu("line",e,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},Um=(r,t,e,n,i,s,o,a,l,c)=>{var h;let f=Array.from(r.childNodes),u=0,{wordDelimiter:d,reduceWhiteSpace:g=!0,prepareText:_}=t,m=r.getBoundingClientRect(),p=m,M=!g&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",S=s&&c&&window.getComputedStyle(r).direction==="rtl",v=0,T=e.collection,A,b,C,y,x,L,D,O,z,X,F,U,k,J,R,Q,Rt,mt;for(typeof d=="object"?(C=d.delimiter||d,b=d.replaceWith||""):b=d===""?"":d||" ",A=b!==" ";u<f.length;u++)if(y=f[u],y.nodeType===3){for(R=y.textContent||"",g?R=R.replace(Fx," "):M&&(R=R.replace(/\n/g,b+`
`)),_&&(R=_(R,r)),y.textContent=R,x=b||C?R.split(C||b):R.match(a)||Vl,Rt=x[x.length-1],O=A?Rt.slice(-1)===" ":!Rt,Rt||x.pop(),p=m,D=A?x[0].charAt(0)===" ":!x[0],D&&js(" ",r,y),x[0]||x.shift(),Lm(x,l),s&&c||(y.textContent=""),z=1;z<=x.length;z++)if(Q=x[z-1],!g&&M&&Q.charAt(0)===`
`&&((h=y.previousSibling)==null||h.remove(),js(document.createElement("br"),r,y),Q=Q.slice(1)),!g&&Q==="")js(b,r,y);else if(Q===" ")r.insertBefore(document.createTextNode(" "),y);else{if(A&&Q.charAt(0)===" "&&js(" ",r,y),v&&z===1&&!D&&T.indexOf(v.parentNode)>-1?(L=T[T.length-1],L.appendChild(document.createTextNode(n?"":Q))):(L=e(n?"":Q),js(L,r,y),v&&z===1&&!D&&L.insertBefore(v,L.firstChild)),n){if(F=Rm?Lm([...Rm.segment(Q)].map(K=>K.segment),l):Q.match(a)||Vl,l){let K=Q.match(l);K&&K.some(it=>F.indexOf(it)<0)&&(F=Q.match(a)||Vl)}for(mt=0;mt<F.length;mt++)L.appendChild(F[mt]===" "?document.createTextNode(" "):n(F[mt]))}if(s&&c){if(R=y.textContent=R.substring(Q.length+1,R.length),X=L.getBoundingClientRect(),X.top>p.top&&(S?X.left>=p.left:X.left<=p.left)){for(U=r.cloneNode(),k=r.childNodes[0];k&&k!==L;)J=k,k=k.nextSibling,U.appendChild(J);r.parentNode.insertBefore(U,r),i&&Dm(U)}p=X}(z<x.length||O)&&js(z>=x.length?" ":A&&Q.slice(-1)===" "?" "+b:b,r,y)}r.removeChild(y),v=0}else y.nodeType===1&&(o&&o.indexOf(y)>-1?(T.indexOf(y.previousSibling)>-1&&T[T.length-1].appendChild(y),v=y):(Um(y,t,e,n,i,s,o,a,l,!0),v=0),i&&Dm(y))},Nm=class Om{constructor(t,e){this.isSplit=!1,Nx(),this.elements=Cm(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(s=>{var o;e.overwrite!==!1&&((o=s[Am])==null||o._data.orig.filter(({element:a})=>a===s).forEach(Im)),s[Am]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i=()=>{let s=n.length,o;for(;s--;){o=n[s];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver!="undefined"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(i,200)})},pu(this),this.split(e)}split(t){return(this._ctx||Ox).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,f=e.indexOf("chars")>-1,u=e.indexOf("words")>-1,d=f&&!u&&!h,g=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=g?new RegExp(g.source+"|"+Pm.source,"gu"):Pm,m=!!t.ignore&&Cm(t.ignore),{orig:p,animTime:M,obs:S}=this._data,v;(f||u||h)&&(this.elements.forEach((T,A)=>{p[A]={element:T,html:T.innerHTML,ariaL:T.getAttribute("aria-label"),ariaH:T.getAttribute("aria-hidden")},n==="auto"?T.setAttribute("aria-label",(T.textContent||"").trim()):n==="hidden"&&T.setAttribute("aria-hidden","true");let b=[],C=[],y=[],x=f?gu("char",t,b):null,L=gu("word",t,C),D,O,z,X;if(Um(T,t,L,x,d,i&&(h||d),m,_,g,!1),h){let F=ba(T.childNodes),U=zx(T,F,t,y),k,J=[],R=0,Q=window.getComputedStyle(T).direction==="rtl",Rt=F.map(it=>it.nodeType===1?it.getBoundingClientRect():Gl),mt=Gl,K;for(D=0;D<F.length;D++)k=F[D],k.nodeType===1&&(k.nodeName==="BR"?((!D||F[D-1].nodeName!=="BR")&&(J.push(k),U(R,D+1)),R=D+1,mt=Bx(Rt,D)):(K=Rt[D],D&&K.top>mt.top&&(Q?K.left+K.width>mt.left+1:K.left<mt.left+mt.width-1)&&(U(R,D),R=D),mt=K));R<D&&U(R,D),J.forEach(it=>{var St;return(St=it.parentNode)==null?void 0:St.removeChild(it)})}if(!u){for(D=0;D<C.length;D++)if(O=C[D],f||!O.nextSibling||O.nextSibling.nodeType!==3)if(s&&!h){for(z=document.createElement("span"),z.style.whiteSpace="nowrap";O.firstChild;)z.appendChild(O.firstChild);O.replaceWith(z)}else O.replaceWith(...O.childNodes);else X=O.nextSibling,X&&X.nodeType===3&&(X.textContent=(O.textContent||"")+(X.textContent||""),O.remove());C.length=0,T.normalize()}this.lines.push(...y),this.words.push(...C),this.chars.push(...b)}),c&&this[c]&&this.masks.push(...this[c].map(T=>{let A=T.cloneNode();return T.replaceWith(A),A.appendChild(T),T.className&&(A.className=T.className.trim().split(" ").map(b=>b+"-mask").join(" ")),A.style.overflow="clip",A.style.verticalAlign="top",A}))),this.isSplit=!0,Sa&&h&&a&&Sa.addEventListener("loadingdone",this._split),(v=o&&o(this))&&v.totalTime&&(this._data.anim=M?v.totalTime(M):v),h&&a&&this.elements.forEach((T,A)=>{p[A].width=T.offsetWidth,S&&S.observe(T)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),Sa==null||Sa.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(Im),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new Om(t,e)}static register(t){Ma=Ma||t||window.gsap,Ma&&(ba=Ma.utils.toArray,pu=Ma.core.context||pu),!mu&&window.innerWidth>0&&(Sa=document.fonts,mu=!0)}};Nm.version="3.15.1";var Wl=Nm;var Fm="1.3.27";function km(r,t,e){return Math.max(r,Math.min(t,e))}function kx(r,t,e){return(1-e)*r+e*t}function Hx(r,t,e,n){return kx(r,t,1-Math.exp(-e*n))}function Vx(r,t){return(r%t+t)%t}var Gx=class{constructor(){Bt(this,"isRunning",!1);Bt(this,"value",0);Bt(this,"from",0);Bt(this,"to",0);Bt(this,"currentTime",0);Bt(this,"lerp");Bt(this,"duration");Bt(this,"easing");Bt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let n=km(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Hx(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Wx(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var Xx=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Bt(this,"width",0);Bt(this,"height",0);Bt(this,"scrollHeight",0);Bt(this,"scrollWidth",0);Bt(this,"debouncedResize");Bt(this,"wrapperResizeObserver");Bt(this,"contentResizeObserver");Bt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Bt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Bt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Wx(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Hm=class{constructor(){Bt(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},Yx=100/6,Rr={passive:!1};function Bm(r,t){return r===1?Yx:r===2?t:1}var qx=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Bt(this,"touchStart",{x:0,y:0});Bt(this,"lastDelta",{x:0,y:0});Bt(this,"window",{width:0,height:0});Bt(this,"emitter",new Hm);Bt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Bt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Bt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Bt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=Bm(n,this.window.width),s=Bm(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Bt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Rr),this.element.addEventListener("touchstart",this.onTouchStart,Rr),this.element.addEventListener("touchmove",this.onTouchMove,Rr),this.element.addEventListener("touchend",this.onTouchEnd,Rr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Rr),this.element.removeEventListener("touchstart",this.onTouchStart,Rr),this.element.removeEventListener("touchmove",this.onTouchMove,Rr),this.element.removeEventListener("touchend",this.onTouchEnd,Rr)}},zm=r=>Math.min(1,1.001-2**(-10*r)),Vm=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:u=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:M=!0,autoRaf:S=!1,anchors:v=!1,autoToggle:T=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:b=!1,naiveDimensions:C=b,stopInertiaOnNavigate:y=!1,respectReducedMotion:x=!0}={}){Bt(this,"_isScrolling",!1);Bt(this,"_isStopped",!1);Bt(this,"_isLocked",!1);Bt(this,"_preventNextNativeScrollEvent",!1);Bt(this,"_resetVelocityTimeout",null);Bt(this,"_rafId",null);Bt(this,"_isDraggingSelection",!1);Bt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Bt(this,"isTouching");Bt(this,"isIos");Bt(this,"time",0);Bt(this,"userData",{});Bt(this,"lastVelocity",0);Bt(this,"velocity",0);Bt(this,"direction",0);Bt(this,"options");Bt(this,"targetScroll");Bt(this,"animatedScroll");Bt(this,"animate",new Gx);Bt(this,"emitter",new Hm);Bt(this,"dimensions");Bt(this,"virtualScroll");Bt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Bt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Bt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Bt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Bt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Bt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>{var _,m,p,M,S;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||h==="vertical"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-vertical"))||h==="horizontal"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-horizontal"))||i&&((M=g.hasAttribute)==null?void 0:M.call(g,"data-lenis-prevent-touch"))||s&&((S=g.hasAttribute)==null?void 0:S.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Bt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Bt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Fm,window.lenis||(window.lenis={}),window.lenis.version=Fm,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=zm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:f,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:M,autoRaf:S,anchors:v,autoToggle:T,allowNestedScroll:A,naiveDimensions:C,stopInertiaOnNavigate:y,respectReducedMotion:x},this.dimensions=new Xx(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new qx(e,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){var c;let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=(c=r.targetTouches[0])!=null?c:r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,d=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let g=null;if(typeof u=="string"?(g=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),g||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(g=u),g){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?v.left:v.top}let _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),M=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(S)?0:S)}}if(typeof u=="number"){if(u+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let g=u-this.animatedScroll;g>this.limit/2?u-=this.limit:g<-this.limit/2&&(u+=this.limit)}}else u=km(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f!=null?f:{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=zm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){var A;let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,f,u,d,g;if(n-((A=i.time)!=null?A:0)>2e3){i.time=Date.now();let b=window.getComputedStyle(r);if(i.computedStyle=b,s=["auto","overlay","scroll"].includes(b.overflowX),o=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),h=["auto"].includes(b.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,u=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,a=f>d,l=u>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=u,i.clientWidth=d,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,u=i.scrollHeight,d=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,p,M,S,v,T;if(_==="horizontal")m=Math.round(r.scrollLeft),p=f-d,M=t,S=s,v=a,T=c;else if(_==="vertical")m=Math.round(r.scrollTop),p=u-g,M=e,S=o,v=l,T=h;else return!1;return!T&&(m>=p||m<=0)?!0:(M>0?m<p:m>0)&&S&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let r=this.options.wrapper;return this.isHorizontal?(t=r.scrollX)!=null?t:r.scrollLeft:(e=r.scrollY)!=null?e:r.scrollTop}get scroll(){return this.options.infinite?Vx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var $x=0,Gm=1,Zx=2;var Zg=1,ud=2,nr=3,zr=0,En=1,Ei=2,Fr=0,Mo=1,Wm=2,Xm=3,Ym=4,Jx=5,_s=100,Kx=101,Qx=102,jx=103,tv=104,ev=200,nv=201,iv=202,rv=203,qu=204,$u=205,sv=206,ov=207,av=208,lv=209,cv=210,hv=211,uv=212,fv=213,dv=214,Zu=0,Ju=1,Ku=2,Eo=3,Qu=4,ju=5,tf=6,ef=7,Jg=0,pv=1,mv=2,Br=0,gv=1,_v=2,xv=3,fd=4,vv=5,yv=6,Mv=7;var Kg=300,To=301,Ao=302,nf=303,rf=304,Gc=306,Ro=1e3,vs=1001,sf=1002,si=1003,Sv=1004;var Xl=1005;var Fi=1006,_u=1007;var ys=1008;var ar=1009,Qg=1010,jg=1011,Ba=1012,dd=1013,Ms=1014,Bi=1015,qa=1016,pd=1017,md=1018,Co=1020,t0=35902,e0=1021,n0=1022,Ai=1023,i0=1024,r0=1025,So=1026,Po=1027,gd=1028,_d=1029,s0=1030,xd=1031;var vd=1033,_c=33776,xc=33777,vc=33778,yc=33779,of=35840,af=35841,lf=35842,cf=35843,hf=36196,uf=37492,ff=37496,df=37808,pf=37809,mf=37810,gf=37811,_f=37812,xf=37813,vf=37814,yf=37815,Mf=37816,Sf=37817,bf=37818,wf=37819,Ef=37820,Tf=37821,Mc=36492,Af=36494,Rf=36495,o0=36283,Cf=36284,Pf=36285,If=36286;var Sc=2300,Lf=2301,xu=2302,qm=2400,$m=2401,Zm=2402;var bv=3200,wv=3201;var a0=0,Ev=1,Nr="",bn="srgb",Oo="srgb-linear",Wc="linear",Pe="srgb";var to=7680;var Jm=519,Tv=512,Av=513,Rv=514,l0=515,Cv=516,Pv=517,Iv=518,Lv=519,Df=35044;var Km="300 es",rr=2e3,bc=2001,kr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qm=1234567,Na=Math.PI/180,za=180/Math.PI;function sr(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function wn(r,t,e){return Math.max(t,Math.min(e,r))}function yd(r,t){return(r%t+t)%t}function Dv(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Uv(r,t,e){return r!==t?(e-r)/(t-r):0}function Oa(r,t,e){return(1-e)*r+e*t}function Nv(r,t,e,n){return Oa(r,t,1-Math.exp(-e*n))}function Ov(r,t=1){return t-Math.abs(yd(r,t*2)-t)}function Fv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Bv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function zv(r,t){return r+Math.floor(Math.random()*(t-r+1))}function kv(r,t){return r+Math.random()*(t-r)}function Hv(r){return r*(.5-Math.random())}function Vv(r){r!==void 0&&(Qm=r);let t=Qm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gv(r){return r*Na}function Wv(r){return r*za}function Xv(r){return(r&r-1)===0&&r!==0}function Yv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function qv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $v(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),u=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*f,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*f,a*c);break;case"ZXZ":r.set(l*f,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ti(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Re(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var $a={DEG2RAD:Na,RAD2DEG:za,generateUUID:sr,clamp:wn,euclideanModulo:yd,mapLinear:Dv,inverseLerp:Uv,lerp:Oa,damp:Nv,pingpong:Ov,smoothstep:Fv,smootherstep:Bv,randInt:zv,randFloat:kv,randFloatSpread:Hv,seededRandom:Vv,degToRad:Gv,radToDeg:Wv,isPowerOfTwo:Xv,ceilPowerOfTwo:Yv,floorPowerOfTwo:qv,setQuaternionFromProperEuler:$v,normalize:Re,denormalize:Ti},le=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(wn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ce=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],S=i[4],v=i[7],T=i[2],A=i[5],b=i[8];return s[0]=o*_+a*M+l*T,s[3]=o*m+a*S+l*A,s[6]=o*p+a*v+l*b,s[1]=c*_+h*M+f*T,s[4]=c*m+h*S+f*A,s[7]=c*p+h*v+f*b,s[2]=u*_+d*M+g*T,s[5]=u*m+d*S+g*A,s[8]=u*p+d*v+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*s,d=c*s-o*l,g=e*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vu.makeScale(t,e)),this}rotate(t){return this.premultiply(vu.makeRotation(-t)),this}translate(t,e){return this.premultiply(vu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},vu=new ce;function c0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function wc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zv(){let r=wc("canvas");return r.style.display="block",r}var jm={};function Da(r){r in jm||(jm[r]=!0,console.warn(r))}function Jv(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Kv(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qv(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var we={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Pe&&(r.r=or(r.r),r.g=or(r.g),r.b=or(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Pe&&(r.r=bo(r.r),r.g=bo(r.g),r.b=bo(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Nr?Wc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function or(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var tg=[.64,.33,.3,.6,.15,.06],eg=[.2126,.7152,.0722],ng=[.3127,.329],ig=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rg=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);we.define({[Oo]:{primaries:tg,whitePoint:ng,transfer:Wc,toXYZ:ig,fromXYZ:rg,luminanceCoefficients:eg,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:tg,whitePoint:ng,transfer:Pe,toXYZ:ig,fromXYZ:rg,luminanceCoefficients:eg,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}});var eo,Uf=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{eo===void 0&&(eo=wc("canvas")),eo.width=t.width,eo.height=t.height;let n=eo.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=eo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=wc("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=or(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(or(e[n]/255)*255):e[n]=or(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jv=0,Ec=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=sr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(yu(i[o].image)):s.push(yu(i[o]))}else s=yu(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function yu(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Uf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ty=0,Yn=class r extends kr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=vs,i=vs,s=Fi,o=ys,a=Ai,l=ar,c=r.DEFAULT_ANISOTROPY,h=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=sr(),this.name="",this.source=new Ec(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ro:t.x=t.x-Math.floor(t.x);break;case vs:t.x=t.x<0?0:1;break;case sf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ro:t.y=t.y-Math.floor(t.y);break;case vs:t.y=t.y<0?0:1;break;case sf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Kg;Yn.DEFAULT_ANISOTROPY=1;var qe=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(d+1)/2,T=(p+1)/2,A=(h+u)/4,b=(f+_)/4,C=(g+m)/4;return S>v&&S>T?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=b/n):v>T?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=A/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=b/s,i=C/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nf=class extends kr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Yn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ec(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},lr=class extends Nf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Tc=class extends Yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=si,this.minFilter=si,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Of=class extends Yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=si,this.minFilter=si,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==u||c!==d||h!==g){let m=1-a,p=l*u+c*d+h*g+f*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let T=Math.sqrt(S),A=Math.atan2(T,p*M);m=Math.sin(m*A)/T,a=Math.sin(a*A)/T}let v=a*M;if(l=l*m+u*v,c=c*m+d*v,h=h*m+g*v,f=f*m+_*v,m===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],u=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-a*d,t[e+2]=c*g+h*d+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),u=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(wn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mu.copy(this).projectOnVector(t),this.sub(Mu)}reflect(t){return this.sub(Mu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(wn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mu=new Y,sg=new zi,cr=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Si):Si.fromBufferAttribute(s,o),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yl.copy(n.boundingBox)),Yl.applyMatrix4(t.matrixWorld),this.union(Yl)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wa),ql.subVectors(this.max,wa),no.subVectors(t.a,wa),io.subVectors(t.b,wa),ro.subVectors(t.c,wa),Cr.subVectors(io,no),Pr.subVectors(ro,io),hs.subVectors(no,ro);let e=[0,-Cr.z,Cr.y,0,-Pr.z,Pr.y,0,-hs.z,hs.y,Cr.z,0,-Cr.x,Pr.z,0,-Pr.x,hs.z,0,-hs.x,-Cr.y,Cr.x,0,-Pr.y,Pr.x,0,-hs.y,hs.x,0];return!Su(e,no,io,ro,ql)||(e=[1,0,0,0,1,0,0,0,1],!Su(e,no,io,ro,ql))?!1:($l.crossVectors(Cr,Pr),e=[$l.x,$l.y,$l.z],Su(e,no,io,ro,ql))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ki=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Si=new Y,Yl=new cr,no=new Y,io=new Y,ro=new Y,Cr=new Y,Pr=new Y,hs=new Y,wa=new Y,ql=new Y,$l=new Y,us=new Y;function Su(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){us.fromArray(r,s);let a=i.x*Math.abs(us.x)+i.y*Math.abs(us.y)+i.z*Math.abs(us.z),l=t.dot(us),c=e.dot(us),h=n.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ey=new cr,Ea=new Y,bu=new Y,Ss=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ey.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ea.subVectors(t,this.center);let e=Ea.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ea,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ea.copy(t.center).add(bu)),this.expandByPoint(Ea.copy(t.center).sub(bu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qi=new Y,wu=new Y,Zl=new Y,Ir=new Y,Eu=new Y,Jl=new Y,Tu=new Y,Ff=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,e),Qi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wu.copy(t).add(e).multiplyScalar(.5),Zl.copy(e).sub(t).normalize(),Ir.copy(this.origin).sub(wu);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Zl),a=Ir.dot(this.direction),l=-Ir.dot(Zl),c=Ir.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*l-a,u=o*a-l,g=s*h,f>=0)if(u>=-g)if(u<=g){let _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(wu).addScaledVector(Zl,u),d}intersectSphere(t,e){Qi.subVectors(t.center,this.origin);let n=Qi.dot(this.direction),i=Qi.dot(Qi)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,e,n,i,s){Eu.subVectors(e,t),Jl.subVectors(n,t),Tu.crossVectors(Eu,Jl);let o=this.direction.dot(Tu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ir.subVectors(this.origin,t);let l=a*this.direction.dot(Jl.crossVectors(Ir,Jl));if(l<0)return null;let c=a*this.direction.dot(Eu.cross(Ir));if(c<0||l+c>o)return null;let h=-a*Ir.dot(Tu);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class r{constructor(t,e,n,i,s,o,a,l,c,h,f,u,d,g,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,u,d,g,_,m)}set(t,e,n,i,s,o,a,l,c,h,f,u,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/so.setFromMatrixColumn(t,0).length(),s=1/so.setFromMatrixColumn(t,1).length(),o=1/so.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let u=o*h,d=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){let u=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ny,t,iy)}lookAt(t,e,n){let i=this.elements;return ii.subVectors(t,e),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Lr.crossVectors(n,ii),Lr.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Lr.crossVectors(n,ii)),Lr.normalize(),Kl.crossVectors(ii,Lr),i[0]=Lr.x,i[4]=Kl.x,i[8]=ii.x,i[1]=Lr.y,i[5]=Kl.y,i[9]=ii.y,i[2]=Lr.z,i[6]=Kl.z,i[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],v=n[11],T=n[15],A=i[0],b=i[4],C=i[8],y=i[12],x=i[1],L=i[5],D=i[9],O=i[13],z=i[2],X=i[6],F=i[10],U=i[14],k=i[3],J=i[7],R=i[11],Q=i[15];return s[0]=o*A+a*x+l*z+c*k,s[4]=o*b+a*L+l*X+c*J,s[8]=o*C+a*D+l*F+c*R,s[12]=o*y+a*O+l*U+c*Q,s[1]=h*A+f*x+u*z+d*k,s[5]=h*b+f*L+u*X+d*J,s[9]=h*C+f*D+u*F+d*R,s[13]=h*y+f*O+u*U+d*Q,s[2]=g*A+_*x+m*z+p*k,s[6]=g*b+_*L+m*X+p*J,s[10]=g*C+_*D+m*F+p*R,s[14]=g*y+_*O+m*U+p*Q,s[3]=M*A+S*x+v*z+T*k,s[7]=M*b+S*L+v*X+T*J,s[11]=M*C+S*D+v*F+T*R,s[15]=M*y+S*O+v*U+T*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*f-i*c*f-s*a*u+n*c*u+i*a*d-n*l*d)+_*(+e*l*d-e*c*u+s*o*u-i*o*d+i*c*h-s*l*h)+m*(+e*c*f-e*a*d-s*o*f+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-e*l*f+e*a*u+i*o*f-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=f*m*c-_*u*c+_*l*d-a*m*d-f*l*p+a*u*p,S=g*u*c-h*m*c-g*l*d+o*m*d+h*l*p-o*u*p,v=h*_*c-g*f*c+g*a*d-o*_*d-h*a*p+o*f*p,T=g*f*l-h*_*l-g*a*u+o*_*u+h*a*m-o*f*m,A=e*M+n*S+i*v+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/A;return t[0]=M*b,t[1]=(_*u*s-f*m*s-_*i*d+n*m*d+f*i*p-n*u*p)*b,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*b,t[3]=(f*l*s-a*u*s-f*i*c+n*u*c+a*i*d-n*l*d)*b,t[4]=S*b,t[5]=(h*m*s-g*u*s+g*i*d-e*m*d-h*i*p+e*u*p)*b,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*b,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*d+e*l*d)*b,t[8]=v*b,t[9]=(g*f*s-h*_*s-g*n*d+e*_*d+h*n*p-e*f*p)*b,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*b,t[11]=(h*a*s-o*f*s-h*n*c+e*f*c+o*n*d-e*a*d)*b,t[12]=T*b,t[13]=(h*_*i-g*f*i+g*n*u-e*_*u-h*n*m+e*f*m)*b,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*b,t[15]=(o*f*i-h*a*i+h*n*l-e*f*l-o*n*u+e*a*u)*b,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,u=s*c,d=s*h,g=s*f,_=o*h,m=o*f,p=a*f,M=l*c,S=l*h,v=l*f,T=n.x,A=n.y,b=n.z;return i[0]=(1-(_+p))*T,i[1]=(d+v)*T,i[2]=(g-S)*T,i[3]=0,i[4]=(d-v)*A,i[5]=(1-(u+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+S)*b,i[9]=(m-M)*b,i[10]=(1-(u+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=so.set(i[0],i[1],i[2]).length(),o=so.set(i[4],i[5],i[6]).length(),a=so.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],bi.copy(this);let c=1/s,h=1/o,f=1/a;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=f,bi.elements[9]*=f,bi.elements[10]*=f,e.setFromRotationMatrix(bi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=rr){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),d,g;if(a===rr)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===bc)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=rr){let l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(o-s),u=(e+t)*c,d=(n+i)*h,g,_;if(a===rr)g=(o+s)*f,_=-2*f;else if(a===bc)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},so=new Y,bi=new Ie,ny=new Y(0,0,0),iy=new Y(1,1,1),Lr=new Y,Kl=new Y,ii=new Y,og=new Ie,ag=new zi,ki=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(wn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return og.makeRotationFromQuaternion(t),this.setFromRotationMatrix(og,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ag.setFromEuler(this),this.setFromQuaternion(ag,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ki.DEFAULT_ORDER="XYZ";var Ac=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ry=0,lg=new Y,oo=new zi,ji=new Ie,Ql=new Y,Ta=new Y,sy=new Y,oy=new zi,cg=new Y(1,0,0),hg=new Y(0,1,0),ug=new Y(0,0,1),fg={type:"added"},ay={type:"removed"},ao={type:"childadded",child:null},Au={type:"childremoved",child:null},An=class r extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new Y,e=new ki,n=new zi,i=new Y(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ce}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.multiply(oo),this}rotateOnWorldAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.premultiply(oo),this}rotateX(t){return this.rotateOnAxis(cg,t)}rotateY(t){return this.rotateOnAxis(hg,t)}rotateZ(t){return this.rotateOnAxis(ug,t)}translateOnAxis(t,e){return lg.copy(t).applyQuaternion(this.quaternion),this.position.add(lg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cg,t)}translateY(t){return this.translateOnAxis(hg,t)}translateZ(t){return this.translateOnAxis(ug,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ql.copy(t):Ql.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Ta,Ql,this.up):ji.lookAt(Ql,Ta,this.up),this.quaternion.setFromRotationMatrix(ji),i&&(ji.extractRotation(i.matrixWorld),oo.setFromRotationMatrix(ji),this.quaternion.premultiply(oo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fg),ao.child=t,this.dispatchEvent(ao),ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ay),Au.child=t,this.dispatchEvent(Au),Au.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fg),ao.child=t,this.dispatchEvent(ao),ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,t,sy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,oy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};An.DEFAULT_UP=new Y(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=new Y,tr=new Y,Ru=new Y,er=new Y,lo=new Y,co=new Y,dg=new Y,Cu=new Y,Pu=new Y,Iu=new Y,Lu=new qe,Du=new qe,Uu=new qe,Or=class r{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wi.subVectors(t,e),i.cross(wi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){wi.subVectors(i,e),tr.subVectors(n,e),Ru.subVectors(t,e);let o=wi.dot(wi),a=wi.dot(tr),l=wi.dot(Ru),c=tr.dot(tr),h=tr.dot(Ru),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,er.x),l.addScaledVector(o,er.y),l.addScaledVector(a,er.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Lu.setScalar(0),Du.setScalar(0),Uu.setScalar(0),Lu.fromBufferAttribute(t,e),Du.fromBufferAttribute(t,n),Uu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Lu,s.x),o.addScaledVector(Du,s.y),o.addScaledVector(Uu,s.z),o}static isFrontFacing(t,e,n,i){return wi.subVectors(n,e),tr.subVectors(t,e),wi.cross(tr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),wi.cross(tr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;lo.subVectors(i,n),co.subVectors(s,n),Cu.subVectors(t,n);let l=lo.dot(Cu),c=co.dot(Cu);if(l<=0&&c<=0)return e.copy(n);Pu.subVectors(t,i);let h=lo.dot(Pu),f=co.dot(Pu);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(lo,o);Iu.subVectors(t,s);let d=lo.dot(Iu),g=co.dot(Iu);if(g>=0&&d<=g)return e.copy(s);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(co,a);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return dg.subVectors(s,i),a=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(dg,a);let p=1/(m+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(lo,o).addScaledVector(co,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},h0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},jl={h:0,s:0,l:0};function Nu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=we.workingColorSpace){if(t=yd(t,1),e=wn(e,0,1),n=wn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Nu(o,s,t+1/3),this.g=Nu(o,s,t),this.b=Nu(o,s,t-1/3)}return we.toWorkingColorSpace(this,i),this}setStyle(t,e=bn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){let n=h0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}copyLinearToSRGB(t){return this.r=bo(t.r),this.g=bo(t.g),this.b=bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return we.fromWorkingColorSpace(Sn.copy(this),t),Math.round(wn(Sn.r*255,0,255))*65536+Math.round(wn(Sn.g*255,0,255))*256+Math.round(wn(Sn.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(Sn.copy(this),e);let n=Sn.r,i=Sn.g,s=Sn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=bn){we.fromWorkingColorSpace(Sn.copy(this),t);let e=Sn.r,n=Sn.g,i=Sn.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Dr),this.setHSL(Dr.h+t,Dr.s+e,Dr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dr),t.getHSL(jl);let n=Oa(Dr.h,jl.h,e),i=Oa(Dr.s,jl.s,e),s=Oa(Dr.l,jl.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Qt;Qt.NAMES=h0;var ly=0,Hr=class extends kr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=sr(),this.name="",this.blending=Mo,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qu,this.blendDst=$u,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(n.blending=this.blending),this.side!==zr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qu&&(n.blendSrc=this.blendSrc),this.blendDst!==$u&&(n.blendDst=this.blendDst),this.blendEquation!==_s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(n.stencilFail=this.stencilFail),this.stencilZFail!==to&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},bs=class extends Hr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Jg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var tn=new Y,tc=new le,Tn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Df,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tc.fromBufferAttribute(this,e),tc.applyMatrix3(t),this.setXY(e,tc.x,tc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Df&&(t.usage=this.usage),t}};var Rc=class extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cc=class extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ze=class extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},cy=0,mi=new Ie,Ou=new An,ho=new Y,ri=new cr,Aa=new cr,ln=new Y,qn=class r extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(c0(t)?Cc:Rc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ce().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,e,n){return mi.makeTranslation(t,e,n),this.applyMatrix4(mi),this}scale(t,e,n){return mi.makeScale(t,e,n),this.applyMatrix4(mi),this}lookAt(t){return Ou.lookAt(t),Ou.updateMatrix(),this.applyMatrix4(Ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ze(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Aa.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(ri.min,Aa.min),ri.expandByPoint(ln),ln.addVectors(ri.max,Aa.max),ri.expandByPoint(ln)):(ri.expandByPoint(Aa.min),ri.expandByPoint(Aa.max))}ri.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ln.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ln));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ln.fromBufferAttribute(a,c),l&&(ho.fromBufferAttribute(t,c),ln.add(ho)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new Y,l[C]=new Y;let c=new Y,h=new Y,f=new Y,u=new le,d=new le,g=new le,_=new Y,m=new Y;function p(C,y,x){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,x),u.fromBufferAttribute(s,C),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,x),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[C].add(_),a[y].add(_),a[x].add(_),l[C].add(m),l[y].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,y=M.length;C<y;++C){let x=M[C],L=x.start,D=x.count;for(let O=L,z=L+D;O<z;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let S=new Y,v=new Y,T=new Y,A=new Y;function b(C){T.fromBufferAttribute(i,C),A.copy(T);let y=a[C];S.copy(y),S.sub(T.multiplyScalar(T.dot(y))).normalize(),v.crossVectors(A,y);let L=v.dot(l[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,L)}for(let C=0,y=M.length;C<y;++C){let x=M[C],L=x.start,D=x.count;for(let O=L,z=L+D;O<z;O+=3)b(t.getX(O+0)),b(t.getX(O+1)),b(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,h=new Y,f=new Y;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new Tn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pg=new Ie,fs=new Ff,ec=new Ss,mg=new Y,nc=new Y,ic=new Y,rc=new Y,Fu=new Y,sc=new Y,gg=new Y,oc=new Y,Ee=class extends An{constructor(t=new qn,e=new bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){sc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(Fu.fromBufferAttribute(f,t),o?sc.addScaledVector(Fu,h):sc.addScaledVector(Fu.sub(e),h))}e.add(sc)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(s),fs.copy(t.ray).recast(t.near),!(ec.containsPoint(fs.origin)===!1&&(fs.intersectSphere(ec,mg)===null||fs.origin.distanceToSquared(mg)>(t.far-t.near)**2))&&(pg.copy(s).invert(),fs.copy(t.ray).applyMatrix4(pg),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=S;v<T;v+=3){let A=a.getX(v),b=a.getX(v+1),C=a.getX(v+2);i=ac(this,p,t,n,c,h,f,A,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let M=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);i=ac(this,o,t,n,c,h,f,M,S,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=S;v<T;v+=3){let A=v,b=v+1,C=v+2;i=ac(this,p,t,n,c,h,f,A,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let M=m,S=m+1,v=m+2;i=ac(this,o,t,n,c,h,f,M,S,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function hy(r,t,e,n,i,s,o,a){let l;if(t.side===En?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===zr,a),l===null)return null;oc.copy(a),oc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(oc);return c<e.near||c>e.far?null:{distance:c,point:oc.clone(),object:r}}function ac(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,nc),r.getVertexPosition(l,ic),r.getVertexPosition(c,rc);let h=hy(r,t,e,n,nc,ic,rc,gg);if(h){let f=new Y;Or.getBarycoord(gg,nc,ic,rc,f),i&&(h.uv=Or.getInterpolatedAttribute(i,a,l,c,f,new le)),s&&(h.uv1=Or.getInterpolatedAttribute(s,a,l,c,f,new le)),o&&(h.normal=Or.getInterpolatedAttribute(o,a,l,c,f,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new Y,materialIndex:0};Or.getNormal(nc,ic,rc,u.normal),h.face=u,h.barycoord=f}return h}var zn=class r extends qn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(f,2));function g(_,m,p,M,S,v,T,A,b,C,y){let x=v/b,L=T/C,D=v/2,O=T/2,z=A/2,X=b+1,F=C+1,U=0,k=0,J=new Y;for(let R=0;R<F;R++){let Q=R*L-O;for(let Rt=0;Rt<X;Rt++){let mt=Rt*x-D;J[_]=mt*M,J[m]=Q*S,J[p]=z,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=A>0?1:-1,h.push(J.x,J.y,J.z),f.push(Rt/b),f.push(1-R/C),U+=1}}for(let R=0;R<C;R++)for(let Q=0;Q<b;Q++){let Rt=u+Q+X*R,mt=u+Q+X*(R+1),K=u+(Q+1)+X*(R+1),it=u+(Q+1)+X*R;l.push(Rt,mt,it),l.push(mt,K,it),k+=6}a.addGroup(d,k,y),d+=k,u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Io(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fn(r){let t={};for(let e=0;e<r.length;e++){let n=Io(r[e]);for(let i in n)t[i]=n[i]}return t}function uy(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function u0(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}var fy={clone:Io,merge:Fn},dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gi=class extends Hr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dy,this.fragmentShader=py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Io(t.uniforms),this.uniformsGroups=uy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Pc=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=rr}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ur=new Y,_g=new le,xg=new le,Bn=class extends Pc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return za*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ur.x,Ur.y).multiplyScalar(-t/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ur.x,Ur.y).multiplyScalar(-t/Ur.z)}getViewSize(t,e){return this.getViewBounds(t,_g,xg),e.subVectors(xg,_g)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Na*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},uo=-90,fo=1,Bf=class extends An{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Bn(uo,fo,t,e);i.layers=this.layers,this.add(i);let s=new Bn(uo,fo,t,e);s.layers=this.layers,this.add(s);let o=new Bn(uo,fo,t,e);o.layers=this.layers,this.add(o);let a=new Bn(uo,fo,t,e);a.layers=this.layers,this.add(a);let l=new Bn(uo,fo,t,e);l.layers=this.layers,this.add(l);let c=new Bn(uo,fo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===rr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ic=class extends Yn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:To,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zf=class extends lr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ic(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zn(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:Fr});s.uniforms.tEquirect.value=e;let o=new Ee(i,s),a=e.minFilter;return e.minFilter===ys&&(e.minFilter=Fi),new Bf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},Bu=new Y,my=new Y,gy=new ce,ir=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Bu.subVectors(n,e).cross(my.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Bu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||gy.getNormalMatrix(t),i=this.coplanarPoint(Bu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ds=new Ss,lc=new Y,ka=class{constructor(t=new ir,e=new ir,n=new ir,i=new ir,s=new ir,o=new ir){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=rr){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],u=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],S=i[14],v=i[15];if(n[0].setComponents(l-s,u-c,m-d,v-p).normalize(),n[1].setComponents(l+s,u+c,m+d,v+p).normalize(),n[2].setComponents(l+o,u+h,m+g,v+M).normalize(),n[3].setComponents(l-o,u-h,m-g,v-M).normalize(),n[4].setComponents(l-a,u-f,m-_,v-S).normalize(),e===rr)n[5].setComponents(l+a,u+f,m+_,v+S).normalize();else if(e===bc)n[5].setComponents(a,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(lc.x=i.normal.x>0?t.max.x:t.min.x,lc.y=i.normal.y>0?t.max.y:t.min.y,lc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(lc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function f0(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function _y(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Vr=class r extends qn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let M=p*u-o;for(let S=0;S<c;S++){let v=S*f-s;g.push(v,-M,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let S=M+c*p,v=M+c*(p+1),T=M+1+c*(p+1),A=M+1+c*p;d.push(S,v,A),d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vy=`#ifdef USE_ALPHAHASH
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
#endif`,yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,My=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,by=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wy=`#ifdef USE_AOMAP
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
#endif`,Ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ty=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ay=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Py=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ly=`#ifdef USE_BUMPMAP
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
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,By=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hy=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Vy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gy=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$y="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
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
}`,oM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,hM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,gM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_M=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AM=`#if defined( USE_POINTS_UV )
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
#endif`,RM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`#ifdef USE_MORPHTARGETS
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
#endif`,UM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,OM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kM=`#ifdef USE_NORMALMAP
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
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$M=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,eS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,nS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,iS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rS=`#ifdef USE_SKINNING
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
#endif`,sS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oS=`#ifdef USE_SKINNING
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
#endif`,aS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uS=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fS=`#ifdef USE_TRANSMISSION
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
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xS=`uniform sampler2D t2D;
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`#include <common>
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
}`,wS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ES=`#define DISTANCE
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
}`,TS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,AS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`uniform float scale;
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
}`,PS=`uniform vec3 diffuse;
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
}`,IS=`#include <common>
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
}`,LS=`uniform vec3 diffuse;
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
}`,DS=`#define LAMBERT
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
}`,US=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,NS=`#define MATCAP
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
}`,OS=`#define MATCAP
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
}`,FS=`#define NORMAL
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
}`,BS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zS=`#define PHONG
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
}`,kS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,HS=`#define STANDARD
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
}`,VS=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,GS=`#define TOON
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
}`,WS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,XS=`uniform float size;
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
}`,YS=`uniform vec3 diffuse;
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
}`,qS=`#include <common>
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
}`,$S=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ZS=`uniform float rotation;
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
}`,JS=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:xy,alphahash_pars_fragment:vy,alphamap_fragment:yy,alphamap_pars_fragment:My,alphatest_fragment:Sy,alphatest_pars_fragment:by,aomap_fragment:wy,aomap_pars_fragment:Ey,batching_pars_vertex:Ty,batching_vertex:Ay,begin_vertex:Ry,beginnormal_vertex:Cy,bsdfs:Py,iridescence_fragment:Iy,bumpmap_pars_fragment:Ly,clipping_planes_fragment:Dy,clipping_planes_pars_fragment:Uy,clipping_planes_pars_vertex:Ny,clipping_planes_vertex:Oy,color_fragment:Fy,color_pars_fragment:By,color_pars_vertex:zy,color_vertex:ky,common:Hy,cube_uv_reflection_fragment:Vy,defaultnormal_vertex:Gy,displacementmap_pars_vertex:Wy,displacementmap_vertex:Xy,emissivemap_fragment:Yy,emissivemap_pars_fragment:qy,colorspace_fragment:$y,colorspace_pars_fragment:Zy,envmap_fragment:Jy,envmap_common_pars_fragment:Ky,envmap_pars_fragment:Qy,envmap_pars_vertex:jy,envmap_physical_pars_fragment:hM,envmap_vertex:tM,fog_vertex:eM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:rM,gradientmap_pars_fragment:sM,lightmap_pars_fragment:oM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:lM,lights_pars_begin:cM,lights_toon_fragment:uM,lights_toon_pars_fragment:fM,lights_phong_fragment:dM,lights_phong_pars_fragment:pM,lights_physical_fragment:mM,lights_physical_pars_fragment:gM,lights_fragment_begin:_M,lights_fragment_maps:xM,lights_fragment_end:vM,logdepthbuf_fragment:yM,logdepthbuf_pars_fragment:MM,logdepthbuf_pars_vertex:SM,logdepthbuf_vertex:bM,map_fragment:wM,map_pars_fragment:EM,map_particle_fragment:TM,map_particle_pars_fragment:AM,metalnessmap_fragment:RM,metalnessmap_pars_fragment:CM,morphinstance_vertex:PM,morphcolor_vertex:IM,morphnormal_vertex:LM,morphtarget_pars_vertex:DM,morphtarget_vertex:UM,normal_fragment_begin:NM,normal_fragment_maps:OM,normal_pars_fragment:FM,normal_pars_vertex:BM,normal_vertex:zM,normalmap_pars_fragment:kM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:VM,clearcoat_pars_fragment:GM,iridescence_pars_fragment:WM,opaque_fragment:XM,packing:YM,premultiplied_alpha_fragment:qM,project_vertex:$M,dithering_fragment:ZM,dithering_pars_fragment:JM,roughnessmap_fragment:KM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:jM,shadowmap_pars_vertex:tS,shadowmap_vertex:eS,shadowmask_pars_fragment:nS,skinbase_vertex:iS,skinning_pars_vertex:rS,skinning_vertex:sS,skinnormal_vertex:oS,specularmap_fragment:aS,specularmap_pars_fragment:lS,tonemapping_fragment:cS,tonemapping_pars_fragment:hS,transmission_fragment:uS,transmission_pars_fragment:fS,uv_pars_fragment:dS,uv_pars_vertex:pS,uv_vertex:mS,worldpos_vertex:gS,background_vert:_S,background_frag:xS,backgroundCube_vert:vS,backgroundCube_frag:yS,cube_vert:MS,cube_frag:SS,depth_vert:bS,depth_frag:wS,distanceRGBA_vert:ES,distanceRGBA_frag:TS,equirect_vert:AS,equirect_frag:RS,linedashed_vert:CS,linedashed_frag:PS,meshbasic_vert:IS,meshbasic_frag:LS,meshlambert_vert:DS,meshlambert_frag:US,meshmatcap_vert:NS,meshmatcap_frag:OS,meshnormal_vert:FS,meshnormal_frag:BS,meshphong_vert:zS,meshphong_frag:kS,meshphysical_vert:HS,meshphysical_frag:VS,meshtoon_vert:GS,meshtoon_frag:WS,points_vert:XS,points_frag:YS,shadow_vert:qS,shadow_frag:$S,sprite_vert:ZS,sprite_frag:JS},bt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Oi={basic:{uniforms:Fn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Fn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Fn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Fn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Fn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Fn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Fn([bt.points,bt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Fn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Fn([bt.common,bt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Fn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Fn([bt.sprite,bt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Fn([bt.common,bt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Fn([bt.lights,bt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Oi.physical={uniforms:Fn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var cc={r:0,b:0,g:0},ps=new ki,KS=new Ie;function QS(r,t,e,n,i,s,o){let a=new Qt(0),l=s===!0?0:1,c,h,f=null,u=0,d=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function _(M){let S=!1,v=g(M);v===null?p(a,l):v&&v.isColor&&(p(v,1),S=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,S){let v=g(S);v&&(v.isCubeTexture||v.mapping===Gc)?(h===void 0&&(h=new Ee(new zn(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Io(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ps.copy(S.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(KS.makeRotationFromEuler(ps)),h.material.toneMapped=we.getTransfer(v.colorSpace)!==Pe,(f!==v||u!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,d=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ee(new Vr(2,2),new gi({name:"BackgroundMaterial",uniforms:Io(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=we.getTransfer(v.colorSpace)!==Pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(cc,u0(r)),n.buffers.color.setClear(cc.r,cc.g,cc.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m}}function jS(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(x,L,D,O,z){let X=!1,F=f(O,D,L);s!==F&&(s=F,c(s.object)),X=d(x,O,D,z),X&&g(x,O,D,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(x,L,D,O),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function h(x){return r.deleteVertexArray(x)}function f(x,L,D){let O=D.wireframe===!0,z=n[x.id];z===void 0&&(z={},n[x.id]=z);let X=z[L.id];X===void 0&&(X={},z[L.id]=X);let F=X[O];return F===void 0&&(F=u(l()),X[O]=F),F}function u(x){let L=[],D=[],O=[];for(let z=0;z<e;z++)L[z]=0,D[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:O,object:x,attributes:{},index:null}}function d(x,L,D,O){let z=s.attributes,X=L.attributes,F=0,U=D.getAttributes();for(let k in U)if(U[k].location>=0){let R=z[k],Q=X[k];if(Q===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),R===void 0||R.attribute!==Q||Q&&R.data!==Q.data)return!0;F++}return s.attributesNum!==F||s.index!==O}function g(x,L,D,O){let z={},X=L.attributes,F=0,U=D.getAttributes();for(let k in U)if(U[k].location>=0){let R=X[k];R===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(R=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(R=x.instanceColor));let Q={};Q.attribute=R,R&&R.data&&(Q.data=R.data),z[k]=Q,F++}s.attributes=z,s.attributesNum=F,s.index=O}function _(){let x=s.newAttributes;for(let L=0,D=x.length;L<D;L++)x[L]=0}function m(x){p(x,0)}function p(x,L){let D=s.newAttributes,O=s.enabledAttributes,z=s.attributeDivisors;D[x]=1,O[x]===0&&(r.enableVertexAttribArray(x),O[x]=1),z[x]!==L&&(r.vertexAttribDivisor(x,L),z[x]=L)}function M(){let x=s.newAttributes,L=s.enabledAttributes;for(let D=0,O=L.length;D<O;D++)L[D]!==x[D]&&(r.disableVertexAttribArray(D),L[D]=0)}function S(x,L,D,O,z,X,F){F===!0?r.vertexAttribIPointer(x,L,D,z,X):r.vertexAttribPointer(x,L,D,O,z,X)}function v(x,L,D,O){_();let z=O.attributes,X=D.getAttributes(),F=L.defaultAttributeValues;for(let U in X){let k=X[U];if(k.location>=0){let J=z[U];if(J===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(J=x.instanceColor)),J!==void 0){let R=J.normalized,Q=J.itemSize,Rt=t.get(J);if(Rt===void 0)continue;let mt=Rt.buffer,K=Rt.type,it=Rt.bytesPerElement,St=K===r.INT||K===r.UNSIGNED_INT||J.gpuType===dd;if(J.isInterleavedBufferAttribute){let ht=J.data,Tt=ht.stride,Dt=J.offset;if(ht.isInstancedInterleavedBuffer){for(let ee=0;ee<k.locationSize;ee++)p(k.location+ee,ht.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ee=0;ee<k.locationSize;ee++)m(k.location+ee);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let ee=0;ee<k.locationSize;ee++)S(k.location+ee,Q/k.locationSize,K,R,Tt*it,(Dt+Q/k.locationSize*ee)*it,St)}else{if(J.isInstancedBufferAttribute){for(let ht=0;ht<k.locationSize;ht++)p(k.location+ht,J.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ht=0;ht<k.locationSize;ht++)m(k.location+ht);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let ht=0;ht<k.locationSize;ht++)S(k.location+ht,Q/k.locationSize,K,R,Q*it,Q/k.locationSize*ht*it,St)}}else if(F!==void 0){let R=F[U];if(R!==void 0)switch(R.length){case 2:r.vertexAttrib2fv(k.location,R);break;case 3:r.vertexAttrib3fv(k.location,R);break;case 4:r.vertexAttrib4fv(k.location,R);break;default:r.vertexAttrib1fv(k.location,R)}}}}M()}function T(){C();for(let x in n){let L=n[x];for(let D in L){let O=L[D];for(let z in O)h(O[z].object),delete O[z];delete L[D]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;let L=n[x.id];for(let D in L){let O=L[D];for(let z in O)h(O[z].object),delete O[z];delete L[D]}delete n[x.id]}function b(x){for(let L in n){let D=n[L];if(D[x.id]===void 0)continue;let O=D[x.id];for(let z in O)h(O[z].object),delete O[z];delete D[x.id]}}function C(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function tb(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function l(c,h,f,u){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function eb(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==Ai&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let C=b===qa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ar&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Bi&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:T,maxSamples:A}}function nb(r){let t=this,e=null,n=0,i=!1,s=!1,o=new ir,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let M=s?0:n,S=M*4,v=p.clippingState||null;l.value=v,v=h(g,u,S,d);for(let T=0;T!==S;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==_;++S,v+=4)o.copy(f[S]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ib(r){let t=new WeakMap;function e(o,a){return a===nf?o.mapping=To:a===rf&&(o.mapping=Ao),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===nf||a===rf)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new zf(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Lc=class extends Pc{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yo=4,vg=[.125,.215,.35,.446,.526,.582],xs=20,zu=new Lc,yg=new Qt,ku=null,Hu=0,Vu=0,Gu=!1,gs=(1+Math.sqrt(5))/2,po=1/gs,Mg=[new Y(-gs,po,0),new Y(gs,po,0),new Y(-po,0,gs),new Y(po,0,gs),new Y(0,gs,-po),new Y(0,gs,po),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],Lo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ku=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ku,Hu,Vu),this._renderer.xr.enabled=Gu,t.scissorTest=!1,hc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===To||t.mapping===Ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ku=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:qa,format:Ai,colorSpace:Oo,depthBuffer:!1},i=Sg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sg(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rb(s)),this._blurMaterial=sb(s,t,e)}return i}_compileMaterial(t){let e=new Ee(this._lodPlanes[0],t);this._renderer.compile(e,zu)}_sceneToCubeUV(t,e,n,i){let a=new Bn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(yg),h.toneMapping=Br,h.autoClear=!1;let d=new bs({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),g=new Ee(new zn,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(yg),_=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let S=this._cubeSize;hc(i,M*S,p>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===To||t.mapping===Ao;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bg());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;hc(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,zu)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mg[(i-s-1)%Mg.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Ee(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*xs-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):xs;m>xs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xs}`);let p=[],M=0;for(let b=0;b<xs;++b){let C=b/_,y=Math.exp(-C*C/2);p.push(y),b===0?M+=y:b<m&&(M+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;let v=this._sizeLods[i],T=3*v*(i>S-yo?i-S+yo:0),A=4*(this._cubeSize-v);hc(e,T,A,3*v,2*v),l.setRenderTarget(e),l.render(f,zu)}};function rb(r){let t=[],e=[],n=[],i=r,s=r-yo+1+vg.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-yo?l=vg[o-r+yo-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),S=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let A=0;A<d;A++){let b=A%3*2/3-1,C=A>2?0:-1,y=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];M.set(y,_*g*A),S.set(u,m*g*A);let x=[A,A,A,A,A,A];v.set(x,p*g*A)}let T=new qn;T.setAttribute("position",new Tn(M,_)),T.setAttribute("uv",new Tn(S,m)),T.setAttribute("faceIndex",new Tn(v,p)),t.push(T),i>yo&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sg(r,t,e){let n=new lr(r,t,e);return n.texture.mapping=Gc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hc(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function sb(r,t,e){let n=new Float32Array(xs),i=new Y(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function bg(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function wg(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ob(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===nf||l===rf,h=l===To||l===Ao;if(c||h){let f=t.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Lo(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Lo(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ab(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Da("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lb(r,t,e,n){let i={},s=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete i[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let g in u)t.update(u[g],r.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(f){let u=[],d=f.index,g=f.attributes.position,_=0;if(d!==null){let M=d.array;_=d.version;for(let S=0,v=M.length;S<v;S+=3){let T=M[S+0],A=M[S+1],b=M[S+2];u.push(T,A,A,b,b,T)}}else if(g!==void 0){let M=g.array;_=g.version;for(let S=0,v=M.length/3-1;S<v;S+=3){let T=S+0,A=S+1,b=S+2;u.push(T,A,A,b,b,T)}}else return;let m=new(c0(u)?Cc:Rc)(u,1);m.version=_;let p=s.get(f);p&&t.remove(p),s.set(f,m)}function h(f){let u=s.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function cb(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,d){r.drawElements(n,d,s,u*o),e.update(d,n,1)}function c(u,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,u*o,g),e.update(d,n,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(u,d,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,u,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function hb(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ub(r,t,e){let n=new WeakMap,i=new qe;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let y=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let v=a.attributes.position.count*S,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*T*4*f),b=new Tc(A,v,T,f);b.type=Bi,b.needsUpdate=!0;let C=S*4;for(let x=0;x<f;x++){let L=m[x],D=p[x],O=M[x],z=v*T*4*x;for(let X=0;X<L.count;X++){let F=X*C;d===!0&&(i.fromBufferAttribute(L,X),A[z+F+0]=i.x,A[z+F+1]=i.y,A[z+F+2]=i.z,A[z+F+3]=0),g===!0&&(i.fromBufferAttribute(D,X),A[z+F+4]=i.x,A[z+F+5]=i.y,A[z+F+6]=i.z,A[z+F+7]=0),_===!0&&(i.fromBufferAttribute(O,X),A[z+F+8]=i.x,A[z+F+9]=i.y,A[z+F+10]=i.z,A[z+F+11]=O.itemSize===4?i.w:1)}}u={count:f,texture:b,size:new le(v,T)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function fb(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Dc=class extends Yn{constructor(t,e,n,i,s,o,a,l,c,h=So){if(h!==So&&h!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===So&&(n=Ms),n===void 0&&h===Po&&(n=Co),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:si,this.minFilter=l!==void 0?l:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},d0=new Yn,Eg=new Dc(1,1),p0=new Tc,m0=new Of,g0=new Ic,Tg=[],Ag=[],Rg=new Float32Array(16),Cg=new Float32Array(9),Pg=new Float32Array(4);function Fo(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Tg[i];if(s===void 0&&(s=new Float32Array(i),Tg[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function rn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function sn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Xc(r,t){let e=Ag[t];e===void 0&&(e=new Int32Array(t),Ag[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function db(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function pb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2fv(this.addr,t),sn(e,t)}}function mb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;r.uniform3fv(this.addr,t),sn(e,t)}}function gb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4fv(this.addr,t),sn(e,t)}}function _b(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;Pg.set(n),r.uniformMatrix2fv(this.addr,!1,Pg),sn(e,n)}}function xb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;Cg.set(n),r.uniformMatrix3fv(this.addr,!1,Cg),sn(e,n)}}function vb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;Rg.set(n),r.uniformMatrix4fv(this.addr,!1,Rg),sn(e,n)}}function yb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Mb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2iv(this.addr,t),sn(e,t)}}function Sb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;r.uniform3iv(this.addr,t),sn(e,t)}}function bb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4iv(this.addr,t),sn(e,t)}}function wb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Eb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2uiv(this.addr,t),sn(e,t)}}function Tb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;r.uniform3uiv(this.addr,t),sn(e,t)}}function Ab(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4uiv(this.addr,t),sn(e,t)}}function Rb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Eg.compareFunction=l0,s=Eg):s=d0,e.setTexture2D(t||s,i)}function Cb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||m0,i)}function Pb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||g0,i)}function Ib(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||p0,i)}function Lb(r){switch(r){case 5126:return db;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return xb;case 35676:return vb;case 5124:case 35670:return yb;case 35667:case 35671:return Mb;case 35668:case 35672:return Sb;case 35669:case 35673:return bb;case 5125:return wb;case 36294:return Eb;case 36295:return Tb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Db(r,t){r.uniform1fv(this.addr,t)}function Ub(r,t){let e=Fo(t,this.size,2);r.uniform2fv(this.addr,e)}function Nb(r,t){let e=Fo(t,this.size,3);r.uniform3fv(this.addr,e)}function Ob(r,t){let e=Fo(t,this.size,4);r.uniform4fv(this.addr,e)}function Fb(r,t){let e=Fo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Bb(r,t){let e=Fo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function zb(r,t){let e=Fo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function kb(r,t){r.uniform1iv(this.addr,t)}function Hb(r,t){r.uniform2iv(this.addr,t)}function Vb(r,t){r.uniform3iv(this.addr,t)}function Gb(r,t){r.uniform4iv(this.addr,t)}function Wb(r,t){r.uniform1uiv(this.addr,t)}function Xb(r,t){r.uniform2uiv(this.addr,t)}function Yb(r,t){r.uniform3uiv(this.addr,t)}function qb(r,t){r.uniform4uiv(this.addr,t)}function $b(r,t,e){let n=this.cache,i=t.length,s=Xc(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||d0,s[o])}function Zb(r,t,e){let n=this.cache,i=t.length,s=Xc(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||m0,s[o])}function Jb(r,t,e){let n=this.cache,i=t.length,s=Xc(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||g0,s[o])}function Kb(r,t,e){let n=this.cache,i=t.length,s=Xc(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||p0,s[o])}function Qb(r){switch(r){case 5126:return Db;case 35664:return Ub;case 35665:return Nb;case 35666:return Ob;case 35674:return Fb;case 35675:return Bb;case 35676:return zb;case 5124:case 35670:return kb;case 35667:case 35671:return Hb;case 35668:case 35672:return Vb;case 35669:case 35673:return Gb;case 5125:return Wb;case 36294:return Xb;case 36295:return Yb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return Kb}}var kf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lb(e.type)}},Hf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qb(e.type)}},Vf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Wu=/(\w+)(\])?(\[|\.)?/g;function Ig(r,t){r.seq.push(t),r.map[t.id]=t}function jb(r,t,e){let n=r.name,i=n.length;for(Wu.lastIndex=0;;){let s=Wu.exec(n),o=Wu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ig(e,c===void 0?new kf(a,r,t):new Hf(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new Vf(a),Ig(e,f)),e=f}}}var wo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);jb(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Lg(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var t1=37297,e1=0;function n1(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Dg=new ce;function i1(r){we._getMatrix(Dg,we.workingColorSpace,r);let t=`mat3( ${Dg.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(r)){case Wc:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ug(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+n1(r.getShaderSource(t),o)}else return i}function r1(r,t){let e=i1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function s1(r,t){let e;switch(t){case gv:e="Linear";break;case _v:e="Reinhard";break;case xv:e="Cineon";break;case fd:e="ACESFilmic";break;case yv:e="AgX";break;case Mv:e="Neutral";break;case vv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uc=new Y;function o1(){we.getLuminanceCoefficients(uc);let r=uc.x.toFixed(4),t=uc.y.toFixed(4),e=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function l1(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function c1(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ua(r){return r!==""}function Ng(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Og(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var h1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(r){return r.replace(h1,f1)}var u1=new Map;function f1(r,t){let e=fe[t];if(e===void 0){let n=u1.get(t);if(n!==void 0)e=fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gf(e)}var d1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(r){return r.replace(d1,p1)}function p1(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bg(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function m1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zg?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ud?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===nr&&(t="SHADOWMAP_TYPE_VSM"),t}function g1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case To:case Ao:t="ENVMAP_TYPE_CUBE";break;case Gc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _1(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Ao&&(t="ENVMAP_MODE_REFRACTION"),t}function x1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Jg:t="ENVMAP_BLENDING_MULTIPLY";break;case pv:t="ENVMAP_BLENDING_MIX";break;case mv:t="ENVMAP_BLENDING_ADD";break}return t}function v1(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function y1(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=m1(e),c=g1(e),h=_1(e),f=x1(e),u=v1(e),d=a1(e),g=l1(s),_=i.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ua).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ua).join(`
`),p.length>0&&(p+=`
`)):(m=[Bg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),p=[Bg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Br?"#define TONE_MAPPING":"",e.toneMapping!==Br?fe.tonemapping_pars_fragment:"",e.toneMapping!==Br?s1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,r1("linearToOutputTexel",e.outputColorSpace),o1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ua).join(`
`)),o=Gf(o),o=Ng(o,e),o=Og(o,e),a=Gf(a),a=Ng(a,e),a=Og(a,e),o=Fg(o),a=Fg(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Km?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=M+m+o,v=M+p+a,T=Lg(i,i.VERTEX_SHADER,S),A=Lg(i,i.FRAGMENT_SHADER,v);i.attachShader(_,T),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(L){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(T).trim(),z=i.getShaderInfoLog(A).trim(),X=!0,F=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,A);else{let U=Ug(i,T,"vertex"),k=Ug(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+U+`
`+k)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||z==="")&&(F=!1);F&&(L.diagnostics={runnable:X,programLog:D,vertexShader:{log:O,prefix:m},fragmentShader:{log:z,prefix:p}})}i.deleteShader(T),i.deleteShader(A),C=new wo(i,_),y=c1(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,t1)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}var M1=0,Wf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xf(t),e.set(t,n)),n}},Xf=class{constructor(t){this.id=M1++,this.code=t,this.usedTimes=0}};function S1(r,t,e,n,i,s,o){let a=new Ac,l=new Wf,c=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,L,D,O){let z=D.fog,X=O.geometry,F=y.isMeshStandardMaterial?D.environment:null,U=(y.isMeshStandardMaterial?e:t).get(y.envMap||F),k=U&&U.mapping===Gc?U.image.height:null,J=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let R=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Q=R!==void 0?R.length:0,Rt=0;X.morphAttributes.position!==void 0&&(Rt=1),X.morphAttributes.normal!==void 0&&(Rt=2),X.morphAttributes.color!==void 0&&(Rt=3);let mt,K,it,St;if(J){let dt=Oi[J];mt=dt.vertexShader,K=dt.fragmentShader}else mt=y.vertexShader,K=y.fragmentShader,l.update(y),it=l.getVertexShaderID(y),St=l.getFragmentShaderID(y);let ht=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),Dt=O.isInstancedMesh===!0,ee=O.isBatchedMesh===!0,ne=!!y.map,zt=!!y.matcap,kt=!!U,H=!!y.aoMap,_e=!!y.lightMap,Yt=!!y.bumpMap,q=!!y.normalMap,wt=!!y.displacementMap,oe=!!y.emissiveMap,Ot=!!y.metalnessMap,P=!!y.roughnessMap,w=y.anisotropy>0,Z=y.clearcoat>0,ot=y.dispersion>0,rt=y.iridescence>0,nt=y.sheen>0,yt=y.transmission>0,xt=w&&!!y.anisotropyMap,Mt=Z&&!!y.clearcoatMap,re=Z&&!!y.clearcoatNormalMap,ut=Z&&!!y.clearcoatRoughnessMap,_t=rt&&!!y.iridescenceMap,Ht=rt&&!!y.iridescenceThicknessMap,Vt=nt&&!!y.sheenColorMap,At=nt&&!!y.sheenRoughnessMap,ae=!!y.specularMap,$t=!!y.specularColorMap,lt=!!y.specularIntensityMap,I=yt&&!!y.transmissionMap,et=yt&&!!y.thicknessMap,V=!!y.gradientMap,G=!!y.alphaMap,tt=y.alphaTest>0,j=!!y.alphaHash,Et=!!y.extensions,Gt=Br;y.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Gt=r.toneMapping);let Zt={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:mt,fragmentShader:K,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ee,batchingColor:ee&&O._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&O.instanceColor!==null,instancingMorph:Dt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Oo,alphaToCoverage:!!y.alphaToCoverage,map:ne,matcap:zt,envMap:kt,envMapMode:kt&&U.mapping,envMapCubeUVHeight:k,aoMap:H,lightMap:_e,bumpMap:Yt,normalMap:q,displacementMap:u&&wt,emissiveMap:oe,normalMapObjectSpace:q&&y.normalMapType===Ev,normalMapTangentSpace:q&&y.normalMapType===a0,metalnessMap:Ot,roughnessMap:P,anisotropy:w,anisotropyMap:xt,clearcoat:Z,clearcoatMap:Mt,clearcoatNormalMap:re,clearcoatRoughnessMap:ut,dispersion:ot,iridescence:rt,iridescenceMap:_t,iridescenceThicknessMap:Ht,sheen:nt,sheenColorMap:Vt,sheenRoughnessMap:At,specularMap:ae,specularColorMap:$t,specularIntensityMap:lt,transmission:yt,transmissionMap:I,thicknessMap:et,gradientMap:V,opaque:y.transparent===!1&&y.blending===Mo&&y.alphaToCoverage===!1,alphaMap:G,alphaTest:tt,alphaHash:j,combine:y.combine,mapUv:ne&&_(y.map.channel),aoMapUv:H&&_(y.aoMap.channel),lightMapUv:_e&&_(y.lightMap.channel),bumpMapUv:Yt&&_(y.bumpMap.channel),normalMapUv:q&&_(y.normalMap.channel),displacementMapUv:wt&&_(y.displacementMap.channel),emissiveMapUv:oe&&_(y.emissiveMap.channel),metalnessMapUv:Ot&&_(y.metalnessMap.channel),roughnessMapUv:P&&_(y.roughnessMap.channel),anisotropyMapUv:xt&&_(y.anisotropyMap.channel),clearcoatMapUv:Mt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(y.sheenRoughnessMap.channel),specularMapUv:ae&&_(y.specularMap.channel),specularColorMapUv:$t&&_(y.specularColorMap.channel),specularIntensityMapUv:lt&&_(y.specularIntensityMap.channel),transmissionMapUv:I&&_(y.transmissionMap.channel),thicknessMapUv:et&&_(y.thicknessMap.channel),alphaMapUv:G&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(q||w),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(ne||G),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Tt,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Rt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Gt,decodeVideoTexture:ne&&y.map.isVideoTexture===!0&&we.getTransfer(y.map.colorSpace)===Pe,decodeVideoTextureEmissive:oe&&y.emissiveMap.isVideoTexture===!0&&we.getTransfer(y.emissiveMap.colorSpace)===Pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ei,flipSided:y.side===En,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Et&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&y.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function p(y){let x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)x.push(L),x.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(M(x,y),S(x,y),x.push(r.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function M(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function S(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){let x=g[y.type],L;if(x){let D=Oi[x];L=fy.clone(D.uniforms)}else L=y.uniforms;return L}function T(y,x){let L;for(let D=0,O=h.length;D<O;D++){let z=h[D];if(z.cacheKey===x){L=z,++L.usedTimes;break}}return L===void 0&&(L=new y1(r,x,y,s),h.push(L)),L}function A(y){if(--y.usedTimes===0){let x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function b(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:A,releaseShaderCache:b,programs:h,dispose:C}}function b1(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function w1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function zg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function kg(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,u,d,g,_,m){let p=r[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,u,d,g,_,m){let p=o(f,u,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(f,u,d,g,_,m){let p=o(f,u,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||w1),n.length>1&&n.sort(u||zg),i.length>1&&i.sort(u||zg)}function h(){for(let f=t,u=r.length;f<u;f++){let d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function E1(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new kg,r.set(n,[o])):i>=s.length?(o=new kg,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function T1(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new Qt};break;case"SpotLight":e={position:new Y,direction:new Y,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=e,e}}}function A1(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var R1=0;function C1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function P1(r){let t=new T1,e=A1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);let i=new Y,s=new Ie,o=new Ie;function a(c){let h=0,f=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,S=0,v=0,T=0,A=0,b=0;c.sort(C1);for(let y=0,x=c.length;y<x;y++){let L=c[y],D=L.color,O=L.intensity,z=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=D.r*O,f+=D.g*O,u+=D.b*O;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],O);b++}else if(L.isDirectionalLight){let F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let U=L.shadow,k=e.get(L);k.shadowIntensity=U.intensity,k.shadowBias=U.bias,k.shadowNormalBias=U.normalBias,k.shadowRadius=U.radius,k.shadowMapSize=U.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=L.shadow.matrix,M++}n.directional[d]=F,d++}else if(L.isSpotLight){let F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(D).multiplyScalar(O),F.distance=z,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[_]=F;let U=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,U.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=U.matrix,L.castShadow){let k=e.get(L);k.shadowIntensity=U.intensity,k.shadowBias=U.bias,k.shadowNormalBias=U.normalBias,k.shadowRadius=U.radius,k.shadowMapSize=U.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=X,v++}_++}else if(L.isRectAreaLight){let F=t.get(L);F.color.copy(D).multiplyScalar(O),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=F,m++}else if(L.isPointLight){let F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){let U=L.shadow,k=e.get(L);k.shadowIntensity=U.intensity,k.shadowBias=U.bias,k.shadowNormalBias=U.normalBias,k.shadowRadius=U.radius,k.shadowMapSize=U.mapSize,k.shadowCameraNear=U.camera.near,k.shadowCameraFar=U.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=F,g++}else if(L.isHemisphereLight){let F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(O),F.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[p]=F,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==S||C.numSpotShadows!==v||C.numSpotMaps!==T||C.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=S,C.numSpotShadows=v,C.numSpotMaps=T,C.numLightProbes=b,n.version=R1++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let S=c[p];if(S.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(S.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(S.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Hg(r){let t=new P1(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function I1(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Hg(r),t.set(i,[a])):s>=o.length?(a=new Hg(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Yf=class extends Hr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qf=class extends Hr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},L1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function U1(r,t,e){let n=new ka,i=new le,s=new le,o=new qe,a=new Yf({depthPacking:wv}),l=new qf,c={},h=e.maxTextureSize,f={[zr]:En,[En]:zr,[Ei]:Ei},u=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:L1,fragmentShader:D1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new qn;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ee(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zg;let p=this.type;this.render=function(A,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let y=r.getRenderTarget(),x=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Fr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=p!==nr&&this.type===nr,z=p===nr&&this.type!==nr;for(let X=0,F=A.length;X<F;X++){let U=A[X],k=U.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let J=k.getFrameExtents();if(i.multiply(J),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/J.x),i.x=s.x*J.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/J.y),i.y=s.y*J.y,k.mapSize.y=s.y)),k.map===null||O===!0||z===!0){let Q=this.type!==nr?{minFilter:si,magFilter:si}:{};k.map!==null&&k.map.dispose(),k.map=new lr(i.x,i.y,Q),k.map.texture.name=U.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();let R=k.getViewportCount();for(let Q=0;Q<R;Q++){let Rt=k.getViewport(Q);o.set(s.x*Rt.x,s.y*Rt.y,s.x*Rt.z,s.y*Rt.w),D.viewport(o),k.updateMatrices(U,Q),n=k.getFrustum(),v(b,C,k.camera,U,this.type)}k.isPointLightShadow!==!0&&this.type===nr&&M(k,C),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,x,L)};function M(A,b){let C=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new lr(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,C,u,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,C,d,_,null)}function S(A,b,C,y){let x=null,L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)x=L;else if(x=C.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let D=x.uuid,O=b.uuid,z=c[D];z===void 0&&(z={},c[D]=z);let X=z[O];X===void 0&&(X=x.clone(),z[O]=X,b.addEventListener("dispose",T)),x=X}if(x.visible=b.visible,x.wireframe=b.wireframe,y===nr?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let D=r.properties.get(x);D.light=C}return x}function v(A,b,C,y,x){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===nr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let O=t.update(A),z=A.material;if(Array.isArray(z)){let X=O.groups;for(let F=0,U=X.length;F<U;F++){let k=X[F],J=z[k.materialIndex];if(J&&J.visible){let R=S(A,J,y,x);A.onBeforeShadow(r,A,b,C,O,R,k),r.renderBufferDirect(C,null,O,R,A,k),A.onAfterShadow(r,A,b,C,O,R,k)}}}else if(z.visible){let X=S(A,z,y,x);A.onBeforeShadow(r,A,b,C,O,X,null),r.renderBufferDirect(C,null,O,X,A,null),A.onAfterShadow(r,A,b,C,O,X,null)}}let D=A.children;for(let O=0,z=D.length;O<z;O++)v(D[O],b,C,y,x)}function T(A){A.target.removeEventListener("dispose",T);for(let C in c){let y=c[C],x=A.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}var N1={[Zu]:Ju,[Ku]:tf,[Qu]:ef,[Eo]:ju,[Ju]:Zu,[tf]:Ku,[ef]:Qu,[ju]:Eo};function O1(r,t){function e(){let I=!1,et=new qe,V=null,G=new qe(0,0,0,0);return{setMask:function(tt){V!==tt&&!I&&(r.colorMask(tt,tt,tt,tt),V=tt)},setLocked:function(tt){I=tt},setClear:function(tt,j,Et,Gt,Zt){Zt===!0&&(tt*=Gt,j*=Gt,Et*=Gt),et.set(tt,j,Et,Gt),G.equals(et)===!1&&(r.clearColor(tt,j,Et,Gt),G.copy(et))},reset:function(){I=!1,V=null,G.set(-1,0,0,0)}}}function n(){let I=!1,et=!1,V=null,G=null,tt=null;return{setReversed:function(j){if(et!==j){let Et=t.get("EXT_clip_control");et?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT);let Gt=tt;tt=null,this.setClear(Gt)}et=j},getReversed:function(){return et},setTest:function(j){j?ht(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(j){V!==j&&!I&&(r.depthMask(j),V=j)},setFunc:function(j){if(et&&(j=N1[j]),G!==j){switch(j){case Zu:r.depthFunc(r.NEVER);break;case Ju:r.depthFunc(r.ALWAYS);break;case Ku:r.depthFunc(r.LESS);break;case Eo:r.depthFunc(r.LEQUAL);break;case Qu:r.depthFunc(r.EQUAL);break;case ju:r.depthFunc(r.GEQUAL);break;case tf:r.depthFunc(r.GREATER);break;case ef:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}G=j}},setLocked:function(j){I=j},setClear:function(j){tt!==j&&(et&&(j=1-j),r.clearDepth(j),tt=j)},reset:function(){I=!1,V=null,G=null,tt=null,et=!1}}}function i(){let I=!1,et=null,V=null,G=null,tt=null,j=null,Et=null,Gt=null,Zt=null;return{setTest:function(dt){I||(dt?ht(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(dt){et!==dt&&!I&&(r.stencilMask(dt),et=dt)},setFunc:function(dt,gt,It){(V!==dt||G!==gt||tt!==It)&&(r.stencilFunc(dt,gt,It),V=dt,G=gt,tt=It)},setOp:function(dt,gt,It){(j!==dt||Et!==gt||Gt!==It)&&(r.stencilOp(dt,gt,It),j=dt,Et=gt,Gt=It)},setLocked:function(dt){I=dt},setClear:function(dt){Zt!==dt&&(r.clearStencil(dt),Zt=dt)},reset:function(){I=!1,et=null,V=null,G=null,tt=null,j=null,Et=null,Gt=null,Zt=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},u=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,S=null,v=null,T=null,A=null,b=new Qt(0,0,0),C=0,y=!1,x=null,L=null,D=null,O=null,z=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,U=0,k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=U>=1):k.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=U>=2);let J=null,R={},Q=r.getParameter(r.SCISSOR_BOX),Rt=r.getParameter(r.VIEWPORT),mt=new qe().fromArray(Q),K=new qe().fromArray(Rt);function it(I,et,V,G){let tt=new Uint8Array(4),j=r.createTexture();r.bindTexture(I,j),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Et=0;Et<V;Et++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(et,0,r.RGBA,1,1,G,0,r.RGBA,r.UNSIGNED_BYTE,tt):r.texImage2D(et+Et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,tt);return j}let St={};St[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),St[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),St[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(r.DEPTH_TEST),o.setFunc(Eo),Yt(!1),q(Gm),ht(r.CULL_FACE),H(Fr);function ht(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function Tt(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function Dt(I,et){return f[I]!==et?(r.bindFramebuffer(I,et),f[I]=et,I===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=et),I===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=et),!0):!1}function ee(I,et){let V=d,G=!1;if(I){V=u.get(et),V===void 0&&(V=[],u.set(et,V));let tt=I.textures;if(V.length!==tt.length||V[0]!==r.COLOR_ATTACHMENT0){for(let j=0,Et=tt.length;j<Et;j++)V[j]=r.COLOR_ATTACHMENT0+j;V.length=tt.length,G=!0}}else V[0]!==r.BACK&&(V[0]=r.BACK,G=!0);G&&r.drawBuffers(V)}function ne(I){return g!==I?(r.useProgram(I),g=I,!0):!1}let zt={[_s]:r.FUNC_ADD,[Kx]:r.FUNC_SUBTRACT,[Qx]:r.FUNC_REVERSE_SUBTRACT};zt[jx]=r.MIN,zt[tv]=r.MAX;let kt={[ev]:r.ZERO,[nv]:r.ONE,[iv]:r.SRC_COLOR,[qu]:r.SRC_ALPHA,[cv]:r.SRC_ALPHA_SATURATE,[av]:r.DST_COLOR,[sv]:r.DST_ALPHA,[rv]:r.ONE_MINUS_SRC_COLOR,[$u]:r.ONE_MINUS_SRC_ALPHA,[lv]:r.ONE_MINUS_DST_COLOR,[ov]:r.ONE_MINUS_DST_ALPHA,[hv]:r.CONSTANT_COLOR,[uv]:r.ONE_MINUS_CONSTANT_COLOR,[fv]:r.CONSTANT_ALPHA,[dv]:r.ONE_MINUS_CONSTANT_ALPHA};function H(I,et,V,G,tt,j,Et,Gt,Zt,dt){if(I===Fr){_===!0&&(Tt(r.BLEND),_=!1);return}if(_===!1&&(ht(r.BLEND),_=!0),I!==Jx){if(I!==m||dt!==y){if((p!==_s||v!==_s)&&(r.blendEquation(r.FUNC_ADD),p=_s,v=_s),dt)switch(I){case Mo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wm:r.blendFunc(r.ONE,r.ONE);break;case Xm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ym:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Mo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ym:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,S=null,T=null,A=null,b.set(0,0,0),C=0,m=I,y=dt}return}tt=tt||et,j=j||V,Et=Et||G,(et!==p||tt!==v)&&(r.blendEquationSeparate(zt[et],zt[tt]),p=et,v=tt),(V!==M||G!==S||j!==T||Et!==A)&&(r.blendFuncSeparate(kt[V],kt[G],kt[j],kt[Et]),M=V,S=G,T=j,A=Et),(Gt.equals(b)===!1||Zt!==C)&&(r.blendColor(Gt.r,Gt.g,Gt.b,Zt),b.copy(Gt),C=Zt),m=I,y=!1}function _e(I,et){I.side===Ei?Tt(r.CULL_FACE):ht(r.CULL_FACE);let V=I.side===En;et&&(V=!V),Yt(V),I.blending===Mo&&I.transparent===!1?H(Fr):H(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);let G=I.stencilWrite;a.setTest(G),G&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),oe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(I){x!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),x=I)}function q(I){I!==$x?(ht(r.CULL_FACE),I!==L&&(I===Gm?r.cullFace(r.BACK):I===Zx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),L=I}function wt(I){I!==D&&(F&&r.lineWidth(I),D=I)}function oe(I,et,V){I?(ht(r.POLYGON_OFFSET_FILL),(O!==et||z!==V)&&(r.polygonOffset(et,V),O=et,z=V)):Tt(r.POLYGON_OFFSET_FILL)}function Ot(I){I?ht(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function P(I){I===void 0&&(I=r.TEXTURE0+X-1),J!==I&&(r.activeTexture(I),J=I)}function w(I,et,V){V===void 0&&(J===null?V=r.TEXTURE0+X-1:V=J);let G=R[V];G===void 0&&(G={type:void 0,texture:void 0},R[V]=G),(G.type!==I||G.texture!==et)&&(J!==V&&(r.activeTexture(V),J=V),r.bindTexture(I,et||St[I]),G.type=I,G.texture=et)}function Z(){let I=R[J];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ot(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ht(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(I){mt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),mt.copy(I))}function At(I){K.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function ae(I,et){let V=c.get(et);V===void 0&&(V=new WeakMap,c.set(et,V));let G=V.get(I);G===void 0&&(G=r.getUniformBlockIndex(et,I.name),V.set(I,G))}function $t(I,et){let G=c.get(et).get(I);l.get(et)!==G&&(r.uniformBlockBinding(et,G,I.__bindingPointIndex),l.set(et,G))}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,R={},f={},u=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,S=null,v=null,T=null,A=null,b=new Qt(0,0,0),C=0,y=!1,x=null,L=null,D=null,O=null,z=null,mt.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ht,disable:Tt,bindFramebuffer:Dt,drawBuffers:ee,useProgram:ne,setBlending:H,setMaterial:_e,setFlipSided:Yt,setCullFace:q,setLineWidth:wt,setPolygonOffset:oe,setScissorTest:Ot,activeTexture:P,bindTexture:w,unbindTexture:Z,compressedTexImage2D:ot,compressedTexImage3D:rt,texImage2D:_t,texImage3D:Ht,updateUBOMapping:ae,uniformBlockBinding:$t,texStorage2D:re,texStorage3D:ut,texSubImage2D:nt,texSubImage3D:yt,compressedTexSubImage2D:xt,compressedTexSubImage3D:Mt,scissor:Vt,viewport:At,reset:lt}}function Vg(r,t,e,n){let i=F1(n);switch(e){case e0:return r*t;case i0:return r*t;case r0:return r*t*2;case gd:return r*t/i.components*i.byteLength;case _d:return r*t/i.components*i.byteLength;case s0:return r*t*2/i.components*i.byteLength;case xd:return r*t*2/i.components*i.byteLength;case n0:return r*t*3/i.components*i.byteLength;case Ai:return r*t*4/i.components*i.byteLength;case vd:return r*t*4/i.components*i.byteLength;case _c:case xc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case vc:case yc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case af:case cf:return Math.max(r,16)*Math.max(t,8)/4;case of:case lf:return Math.max(r,8)*Math.max(t,8)/2;case hf:case uf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ff:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case df:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pf:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case mf:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case gf:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case _f:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case xf:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case vf:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case yf:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Mf:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Sf:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case bf:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case wf:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ef:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Tf:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Mc:case Af:case Rf:return Math.ceil(r/4)*Math.ceil(t/4)*16;case o0:case Cf:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Pf:case If:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function F1(r){switch(r){case ar:case Qg:return{byteLength:1,components:1};case Ba:case jg:case qa:return{byteLength:2,components:1};case pd:case md:return{byteLength:2,components:4};case Ms:case dd:case Bi:return{byteLength:4,components:1};case t0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function B1(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return d?new OffscreenCanvas(P,w):wc("canvas")}function _(P,w,Z){let ot=1,rt=Ot(P);if((rt.width>Z||rt.height>Z)&&(ot=Z/Math.max(rt.width,rt.height)),ot<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let nt=Math.floor(ot*rt.width),yt=Math.floor(ot*rt.height);f===void 0&&(f=g(nt,yt));let xt=w?g(nt,yt):f;return xt.width=nt,xt.height=yt,xt.getContext("2d").drawImage(P,0,0,nt,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+nt+"x"+yt+")."),xt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(P,w,Z,ot,rt=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let nt=w;if(w===r.RED&&(Z===r.FLOAT&&(nt=r.R32F),Z===r.HALF_FLOAT&&(nt=r.R16F),Z===r.UNSIGNED_BYTE&&(nt=r.R8)),w===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(nt=r.R8UI),Z===r.UNSIGNED_SHORT&&(nt=r.R16UI),Z===r.UNSIGNED_INT&&(nt=r.R32UI),Z===r.BYTE&&(nt=r.R8I),Z===r.SHORT&&(nt=r.R16I),Z===r.INT&&(nt=r.R32I)),w===r.RG&&(Z===r.FLOAT&&(nt=r.RG32F),Z===r.HALF_FLOAT&&(nt=r.RG16F),Z===r.UNSIGNED_BYTE&&(nt=r.RG8)),w===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(nt=r.RG8UI),Z===r.UNSIGNED_SHORT&&(nt=r.RG16UI),Z===r.UNSIGNED_INT&&(nt=r.RG32UI),Z===r.BYTE&&(nt=r.RG8I),Z===r.SHORT&&(nt=r.RG16I),Z===r.INT&&(nt=r.RG32I)),w===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(nt=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(nt=r.RGB16UI),Z===r.UNSIGNED_INT&&(nt=r.RGB32UI),Z===r.BYTE&&(nt=r.RGB8I),Z===r.SHORT&&(nt=r.RGB16I),Z===r.INT&&(nt=r.RGB32I)),w===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(nt=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(nt=r.RGBA16UI),Z===r.UNSIGNED_INT&&(nt=r.RGBA32UI),Z===r.BYTE&&(nt=r.RGBA8I),Z===r.SHORT&&(nt=r.RGBA16I),Z===r.INT&&(nt=r.RGBA32I)),w===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(nt=r.RGB9_E5),w===r.RGBA){let yt=rt?Wc:we.getTransfer(ot);Z===r.FLOAT&&(nt=r.RGBA32F),Z===r.HALF_FLOAT&&(nt=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(nt=yt===Pe?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(nt=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(nt=r.RGB5_A1)}return(nt===r.R16F||nt===r.R32F||nt===r.RG16F||nt===r.RG32F||nt===r.RGBA16F||nt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(P,w){let Z;return P?w===null||w===Ms||w===Co?Z=r.DEPTH24_STENCIL8:w===Bi?Z=r.DEPTH32F_STENCIL8:w===Ba&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ms||w===Co?Z=r.DEPTH_COMPONENT24:w===Bi?Z=r.DEPTH_COMPONENT32F:w===Ba&&(Z=r.DEPTH_COMPONENT16),Z}function T(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==si&&P.minFilter!==Fi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function A(P){let w=P.target;w.removeEventListener("dispose",A),C(w),w.isVideoTexture&&h.delete(w)}function b(P){let w=P.target;w.removeEventListener("dispose",b),x(w)}function C(P){let w=n.get(P);if(w.__webglInit===void 0)return;let Z=P.source,ot=u.get(Z);if(ot){let rt=ot[w.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&y(P),Object.keys(ot).length===0&&u.delete(Z)}n.remove(P)}function y(P){let w=n.get(P);r.deleteTexture(w.__webglTexture);let Z=P.source,ot=u.get(Z);delete ot[w.__cacheKey],o.memory.textures--}function x(P){let w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(w.__webglFramebuffer[ot]))for(let rt=0;rt<w.__webglFramebuffer[ot].length;rt++)r.deleteFramebuffer(w.__webglFramebuffer[ot][rt]);else r.deleteFramebuffer(w.__webglFramebuffer[ot]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[ot])}else{if(Array.isArray(w.__webglFramebuffer))for(let ot=0;ot<w.__webglFramebuffer.length;ot++)r.deleteFramebuffer(w.__webglFramebuffer[ot]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ot=0;ot<w.__webglColorRenderbuffer.length;ot++)w.__webglColorRenderbuffer[ot]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[ot]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Z=P.textures;for(let ot=0,rt=Z.length;ot<rt;ot++){let nt=n.get(Z[ot]);nt.__webglTexture&&(r.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(Z[ot])}n.remove(P)}let L=0;function D(){L=0}function O(){let P=L;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function z(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function X(P,w){let Z=n.get(P);if(P.isVideoTexture&&wt(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){let ot=P.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Z,P,w);return}}e.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+w)}function F(P,w){let Z=n.get(P);if(P.version>0&&Z.__version!==P.version){K(Z,P,w);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+w)}function U(P,w){let Z=n.get(P);if(P.version>0&&Z.__version!==P.version){K(Z,P,w);return}e.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+w)}function k(P,w){let Z=n.get(P);if(P.version>0&&Z.__version!==P.version){it(Z,P,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+w)}let J={[Ro]:r.REPEAT,[vs]:r.CLAMP_TO_EDGE,[sf]:r.MIRRORED_REPEAT},R={[si]:r.NEAREST,[Sv]:r.NEAREST_MIPMAP_NEAREST,[Xl]:r.NEAREST_MIPMAP_LINEAR,[Fi]:r.LINEAR,[_u]:r.LINEAR_MIPMAP_NEAREST,[ys]:r.LINEAR_MIPMAP_LINEAR},Q={[Tv]:r.NEVER,[Lv]:r.ALWAYS,[Av]:r.LESS,[l0]:r.LEQUAL,[Rv]:r.EQUAL,[Iv]:r.GEQUAL,[Cv]:r.GREATER,[Pv]:r.NOTEQUAL};function Rt(P,w){if(w.type===Bi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Fi||w.magFilter===_u||w.magFilter===Xl||w.magFilter===ys||w.minFilter===Fi||w.minFilter===_u||w.minFilter===Xl||w.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,J[w.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,J[w.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,J[w.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,R[w.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,R[w.minFilter]),w.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===si||w.minFilter!==Xl&&w.minFilter!==ys||w.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function mt(P,w){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",A));let ot=w.source,rt=u.get(ot);rt===void 0&&(rt={},u.set(ot,rt));let nt=z(w);if(nt!==P.__cacheKey){rt[nt]===void 0&&(rt[nt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),rt[nt].usedTimes++;let yt=rt[P.__cacheKey];yt!==void 0&&(rt[P.__cacheKey].usedTimes--,yt.usedTimes===0&&y(w)),P.__cacheKey=nt,P.__webglTexture=rt[nt].texture}return Z}function K(P,w,Z){let ot=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ot=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ot=r.TEXTURE_3D);let rt=mt(P,w),nt=w.source;e.bindTexture(ot,P.__webglTexture,r.TEXTURE0+Z);let yt=n.get(nt);if(nt.version!==yt.__version||rt===!0){e.activeTexture(r.TEXTURE0+Z);let xt=we.getPrimaries(we.workingColorSpace),Mt=w.colorSpace===Nr?null:we.getPrimaries(w.colorSpace),re=w.colorSpace===Nr||xt===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ut=_(w.image,!1,i.maxTextureSize);ut=oe(w,ut);let _t=s.convert(w.format,w.colorSpace),Ht=s.convert(w.type),Vt=S(w.internalFormat,_t,Ht,w.colorSpace,w.isVideoTexture);Rt(ot,w);let At,ae=w.mipmaps,$t=w.isVideoTexture!==!0,lt=yt.__version===void 0||rt===!0,I=nt.dataReady,et=T(w,ut);if(w.isDepthTexture)Vt=v(w.format===Po,w.type),lt&&($t?e.texStorage2D(r.TEXTURE_2D,1,Vt,ut.width,ut.height):e.texImage2D(r.TEXTURE_2D,0,Vt,ut.width,ut.height,0,_t,Ht,null));else if(w.isDataTexture)if(ae.length>0){$t&&lt&&e.texStorage2D(r.TEXTURE_2D,et,Vt,ae[0].width,ae[0].height);for(let V=0,G=ae.length;V<G;V++)At=ae[V],$t?I&&e.texSubImage2D(r.TEXTURE_2D,V,0,0,At.width,At.height,_t,Ht,At.data):e.texImage2D(r.TEXTURE_2D,V,Vt,At.width,At.height,0,_t,Ht,At.data);w.generateMipmaps=!1}else $t?(lt&&e.texStorage2D(r.TEXTURE_2D,et,Vt,ut.width,ut.height),I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ut.width,ut.height,_t,Ht,ut.data)):e.texImage2D(r.TEXTURE_2D,0,Vt,ut.width,ut.height,0,_t,Ht,ut.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){$t&&lt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,Vt,ae[0].width,ae[0].height,ut.depth);for(let V=0,G=ae.length;V<G;V++)if(At=ae[V],w.format!==Ai)if(_t!==null)if($t){if(I)if(w.layerUpdates.size>0){let tt=Vg(At.width,At.height,w.format,w.type);for(let j of w.layerUpdates){let Et=At.data.subarray(j*tt/At.data.BYTES_PER_ELEMENT,(j+1)*tt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,j,At.width,At.height,1,_t,Et)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,At.width,At.height,ut.depth,_t,At.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,V,Vt,At.width,At.height,ut.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?I&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,At.width,At.height,ut.depth,_t,Ht,At.data):e.texImage3D(r.TEXTURE_2D_ARRAY,V,Vt,At.width,At.height,ut.depth,0,_t,Ht,At.data)}else{$t&&lt&&e.texStorage2D(r.TEXTURE_2D,et,Vt,ae[0].width,ae[0].height);for(let V=0,G=ae.length;V<G;V++)At=ae[V],w.format!==Ai?_t!==null?$t?I&&e.compressedTexSubImage2D(r.TEXTURE_2D,V,0,0,At.width,At.height,_t,At.data):e.compressedTexImage2D(r.TEXTURE_2D,V,Vt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?I&&e.texSubImage2D(r.TEXTURE_2D,V,0,0,At.width,At.height,_t,Ht,At.data):e.texImage2D(r.TEXTURE_2D,V,Vt,At.width,At.height,0,_t,Ht,At.data)}else if(w.isDataArrayTexture)if($t){if(lt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,Vt,ut.width,ut.height,ut.depth),I)if(w.layerUpdates.size>0){let V=Vg(ut.width,ut.height,w.format,w.type);for(let G of w.layerUpdates){let tt=ut.data.subarray(G*V/ut.data.BYTES_PER_ELEMENT,(G+1)*V/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,G,ut.width,ut.height,1,_t,Ht,tt)}w.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,_t,Ht,ut.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Vt,ut.width,ut.height,ut.depth,0,_t,Ht,ut.data);else if(w.isData3DTexture)$t?(lt&&e.texStorage3D(r.TEXTURE_3D,et,Vt,ut.width,ut.height,ut.depth),I&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,_t,Ht,ut.data)):e.texImage3D(r.TEXTURE_3D,0,Vt,ut.width,ut.height,ut.depth,0,_t,Ht,ut.data);else if(w.isFramebufferTexture){if(lt)if($t)e.texStorage2D(r.TEXTURE_2D,et,Vt,ut.width,ut.height);else{let V=ut.width,G=ut.height;for(let tt=0;tt<et;tt++)e.texImage2D(r.TEXTURE_2D,tt,Vt,V,G,0,_t,Ht,null),V>>=1,G>>=1}}else if(ae.length>0){if($t&&lt){let V=Ot(ae[0]);e.texStorage2D(r.TEXTURE_2D,et,Vt,V.width,V.height)}for(let V=0,G=ae.length;V<G;V++)At=ae[V],$t?I&&e.texSubImage2D(r.TEXTURE_2D,V,0,0,_t,Ht,At):e.texImage2D(r.TEXTURE_2D,V,Vt,_t,Ht,At);w.generateMipmaps=!1}else if($t){if(lt){let V=Ot(ut);e.texStorage2D(r.TEXTURE_2D,et,Vt,V.width,V.height)}I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,Ht,ut)}else e.texImage2D(r.TEXTURE_2D,0,Vt,_t,Ht,ut);m(w)&&p(ot),yt.__version=nt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function it(P,w,Z){if(w.image.length!==6)return;let ot=mt(P,w),rt=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Z);let nt=n.get(rt);if(rt.version!==nt.__version||ot===!0){e.activeTexture(r.TEXTURE0+Z);let yt=we.getPrimaries(we.workingColorSpace),xt=w.colorSpace===Nr?null:we.getPrimaries(w.colorSpace),Mt=w.colorSpace===Nr||yt===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let re=w.isCompressedTexture||w.image[0].isCompressedTexture,ut=w.image[0]&&w.image[0].isDataTexture,_t=[];for(let G=0;G<6;G++)!re&&!ut?_t[G]=_(w.image[G],!0,i.maxCubemapSize):_t[G]=ut?w.image[G].image:w.image[G],_t[G]=oe(w,_t[G]);let Ht=_t[0],Vt=s.convert(w.format,w.colorSpace),At=s.convert(w.type),ae=S(w.internalFormat,Vt,At,w.colorSpace),$t=w.isVideoTexture!==!0,lt=nt.__version===void 0||ot===!0,I=rt.dataReady,et=T(w,Ht);Rt(r.TEXTURE_CUBE_MAP,w);let V;if(re){$t&&lt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,et,ae,Ht.width,Ht.height);for(let G=0;G<6;G++){V=_t[G].mipmaps;for(let tt=0;tt<V.length;tt++){let j=V[tt];w.format!==Ai?Vt!==null?$t?I&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt,0,0,j.width,j.height,Vt,j.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt,ae,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt,0,0,j.width,j.height,Vt,At,j.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt,ae,j.width,j.height,0,Vt,At,j.data)}}}else{if(V=w.mipmaps,$t&&lt){V.length>0&&et++;let G=Ot(_t[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,et,ae,G.width,G.height)}for(let G=0;G<6;G++)if(ut){$t?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,_t[G].width,_t[G].height,Vt,At,_t[G].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,ae,_t[G].width,_t[G].height,0,Vt,At,_t[G].data);for(let tt=0;tt<V.length;tt++){let Et=V[tt].image[G].image;$t?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt+1,0,0,Et.width,Et.height,Vt,At,Et.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt+1,ae,Et.width,Et.height,0,Vt,At,Et.data)}}else{$t?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Vt,At,_t[G]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,ae,Vt,At,_t[G]);for(let tt=0;tt<V.length;tt++){let j=V[tt];$t?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt+1,0,0,Vt,At,j.image[G]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,tt+1,ae,Vt,At,j.image[G])}}}m(w)&&p(r.TEXTURE_CUBE_MAP),nt.__version=rt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function St(P,w,Z,ot,rt,nt){let yt=s.convert(Z.format,Z.colorSpace),xt=s.convert(Z.type),Mt=S(Z.internalFormat,yt,xt,Z.colorSpace),re=n.get(w),ut=n.get(Z);if(ut.__renderTarget=w,!re.__hasExternalTextures){let _t=Math.max(1,w.width>>nt),Ht=Math.max(1,w.height>>nt);rt===r.TEXTURE_3D||rt===r.TEXTURE_2D_ARRAY?e.texImage3D(rt,nt,Mt,_t,Ht,w.depth,0,yt,xt,null):e.texImage2D(rt,nt,Mt,_t,Ht,0,yt,xt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),q(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,rt,ut.__webglTexture,0,Yt(w)):(rt===r.TEXTURE_2D||rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ot,rt,ut.__webglTexture,nt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(P,w,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),w.depthBuffer){let ot=w.depthTexture,rt=ot&&ot.isDepthTexture?ot.type:null,nt=v(w.stencilBuffer,rt),yt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=Yt(w);q(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt,nt,w.width,w.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,nt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,nt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,P)}else{let ot=w.textures;for(let rt=0;rt<ot.length;rt++){let nt=ot[rt],yt=s.convert(nt.format,nt.colorSpace),xt=s.convert(nt.type),Mt=S(nt.internalFormat,yt,xt,nt.colorSpace),re=Yt(w);Z&&q(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,Mt,w.width,w.height):q(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,Mt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Mt,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Tt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ot=n.get(w.depthTexture);ot.__renderTarget=w,(!ot.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);let rt=ot.__webglTexture,nt=Yt(w);if(w.depthTexture.format===So)q(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0);else if(w.depthTexture.format===Po)q(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Dt(P){let w=n.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let ot=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ot){let rt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ot.removeEventListener("dispose",rt)};ot.addEventListener("dispose",rt),w.__depthDisposeCallback=rt}w.__boundDepthTexture=ot}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Tt(w.__webglFramebuffer,P)}else if(Z){w.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ot]),w.__webglDepthbuffer[ot]===void 0)w.__webglDepthbuffer[ot]=r.createRenderbuffer(),ht(w.__webglDepthbuffer[ot],P,!1);else{let rt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=w.__webglDepthbuffer[ot];r.bindRenderbuffer(r.RENDERBUFFER,nt),r.framebufferRenderbuffer(r.FRAMEBUFFER,rt,r.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ht(w.__webglDepthbuffer,P,!1);else{let ot=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,rt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ee(P,w,Z){let ot=n.get(P);w!==void 0&&St(ot.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&Dt(P)}function ne(P){let w=P.texture,Z=n.get(P),ot=n.get(w);P.addEventListener("dispose",b);let rt=P.textures,nt=P.isWebGLCubeRenderTarget===!0,yt=rt.length>1;if(yt||(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=w.version,o.memory.textures++),nt){Z.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[xt]=[];for(let Mt=0;Mt<w.mipmaps.length;Mt++)Z.__webglFramebuffer[xt][Mt]=r.createFramebuffer()}else Z.__webglFramebuffer[xt]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let xt=0;xt<w.mipmaps.length;xt++)Z.__webglFramebuffer[xt]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(yt)for(let xt=0,Mt=rt.length;xt<Mt;xt++){let re=n.get(rt[xt]);re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&q(P)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let xt=0;xt<rt.length;xt++){let Mt=rt[xt];Z.__webglColorRenderbuffer[xt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[xt]);let re=s.convert(Mt.format,Mt.colorSpace),ut=s.convert(Mt.type),_t=S(Mt.internalFormat,re,ut,Mt.colorSpace,P.isXRRenderTarget===!0),Ht=Yt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,_t,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,Z.__webglColorRenderbuffer[xt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),ht(Z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(nt){e.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),Rt(r.TEXTURE_CUBE_MAP,w);for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)St(Z.__webglFramebuffer[xt][Mt],P,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Mt);else St(Z.__webglFramebuffer[xt],P,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(w)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let xt=0,Mt=rt.length;xt<Mt;xt++){let re=rt[xt],ut=n.get(re);e.bindTexture(r.TEXTURE_2D,ut.__webglTexture),Rt(r.TEXTURE_2D,re),St(Z.__webglFramebuffer,P,re,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,0),m(re)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let xt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(xt,ot.__webglTexture),Rt(xt,w),w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)St(Z.__webglFramebuffer[Mt],P,w,r.COLOR_ATTACHMENT0,xt,Mt);else St(Z.__webglFramebuffer,P,w,r.COLOR_ATTACHMENT0,xt,0);m(w)&&p(xt),e.unbindTexture()}P.depthBuffer&&Dt(P)}function zt(P){let w=P.textures;for(let Z=0,ot=w.length;Z<ot;Z++){let rt=w[Z];if(m(rt)){let nt=M(P),yt=n.get(rt).__webglTexture;e.bindTexture(nt,yt),p(nt),e.unbindTexture()}}}let kt=[],H=[];function _e(P){if(P.samples>0){if(q(P)===!1){let w=P.textures,Z=P.width,ot=P.height,rt=r.COLOR_BUFFER_BIT,nt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=n.get(P),xt=w.length>1;if(xt)for(let Mt=0;Mt<w.length;Mt++)e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Mt=0;Mt<w.length;Mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(rt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(rt|=r.STENCIL_BUFFER_BIT)),xt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);let re=n.get(w[Mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,Z,ot,0,0,Z,ot,rt,r.NEAREST),l===!0&&(kt.length=0,H.length=0,kt.push(r.COLOR_ATTACHMENT0+Mt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(kt.push(nt),H.push(nt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xt)for(let Mt=0;Mt<w.length;Mt++){e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);let re=n.get(w[Mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,re,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let w=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Yt(P){return Math.min(i.maxSamples,P.samples)}function q(P){let w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function wt(P){let w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function oe(P,w){let Z=P.colorSpace,ot=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==Oo&&Z!==Nr&&(we.getTransfer(Z)===Pe?(ot!==Ai||rt!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function Ot(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=F,this.setTexture3D=U,this.setTextureCube=k,this.rebindTextures=ee,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=q}function z1(r,t){function e(n,i=Nr){let s,o=we.getTransfer(i);if(n===ar)return r.UNSIGNED_BYTE;if(n===pd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===md)return r.UNSIGNED_SHORT_5_5_5_1;if(n===t0)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Qg)return r.BYTE;if(n===jg)return r.SHORT;if(n===Ba)return r.UNSIGNED_SHORT;if(n===dd)return r.INT;if(n===Ms)return r.UNSIGNED_INT;if(n===Bi)return r.FLOAT;if(n===qa)return r.HALF_FLOAT;if(n===e0)return r.ALPHA;if(n===n0)return r.RGB;if(n===Ai)return r.RGBA;if(n===i0)return r.LUMINANCE;if(n===r0)return r.LUMINANCE_ALPHA;if(n===So)return r.DEPTH_COMPONENT;if(n===Po)return r.DEPTH_STENCIL;if(n===gd)return r.RED;if(n===_d)return r.RED_INTEGER;if(n===s0)return r.RG;if(n===xd)return r.RG_INTEGER;if(n===vd)return r.RGBA_INTEGER;if(n===_c||n===xc||n===vc||n===yc)if(o===Pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_c)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_c)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===of||n===af||n===lf||n===cf)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===of)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===af)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hf||n===uf||n===ff)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===hf||n===uf)return o===Pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ff)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===df||n===pf||n===mf||n===gf||n===_f||n===xf||n===vf||n===yf||n===Mf||n===Sf||n===bf||n===wf||n===Ef||n===Tf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===df)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pf)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mf)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gf)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_f)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xf)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vf)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yf)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mf)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sf)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bf)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wf)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ef)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tf)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mc||n===Af||n===Rf)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Mc)return o===Pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Af)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===o0||n===Cf||n===Pf||n===If)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Mc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Cf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===If)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Co?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var $f=class extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Oe=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}},k1={type:"move"},Fa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},H1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V1=`
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

}`,Zf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Yn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new gi({vertexShader:H1,fragmentShader:V1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new Vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jf=class extends kr{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,_=new Zf,m=e.getContextAttributes(),p=null,M=null,S=[],v=[],T=new le,A=null,b=new Bn;b.viewport=new qe;let C=new Bn;C.viewport=new qe;let y=[b,C],x=new $f,L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let it=S[K];return it===void 0&&(it=new Fa,S[K]=it),it.getTargetRaySpace()},this.getControllerGrip=function(K){let it=S[K];return it===void 0&&(it=new Fa,S[K]=it),it.getGripSpace()},this.getHand=function(K){let it=S[K];return it===void 0&&(it=new Fa,S[K]=it),it.getHandSpace()};function O(K){let it=v.indexOf(K.inputSource);if(it===-1)return;let St=S[it];St!==void 0&&(St.update(K.inputSource,K.frame,c||o),St.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",X);for(let K=0;K<S.length;K++){let it=v[K];it!==null&&(v[K]=null,S[K].disconnect(it))}L=null,D=null,_.reset(),t.setRenderTarget(p),d=null,u=null,f=null,i=null,M=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",z),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){let it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new lr(d.framebufferWidth,d.framebufferHeight,{format:Ai,type:ar,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,St=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Po:So,St=m.stencil?Co:Ms);let Tt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(Tt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new lr(u.textureWidth,u.textureHeight,{format:Ai,type:ar,depthTexture:new Dc(u.textureWidth,u.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),mt.setContext(i),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(K){for(let it=0;it<K.removed.length;it++){let St=K.removed[it],ht=v.indexOf(St);ht>=0&&(v[ht]=null,S[ht].disconnect(St))}for(let it=0;it<K.added.length;it++){let St=K.added[it],ht=v.indexOf(St);if(ht===-1){for(let Dt=0;Dt<S.length;Dt++)if(Dt>=v.length){v.push(St),ht=Dt;break}else if(v[Dt]===null){v[Dt]=St,ht=Dt;break}if(ht===-1)break}let Tt=S[ht];Tt&&Tt.connect(St)}}let F=new Y,U=new Y;function k(K,it,St){F.setFromMatrixPosition(it.matrixWorld),U.setFromMatrixPosition(St.matrixWorld);let ht=F.distanceTo(U),Tt=it.projectionMatrix.elements,Dt=St.projectionMatrix.elements,ee=Tt[14]/(Tt[10]-1),ne=Tt[14]/(Tt[10]+1),zt=(Tt[9]+1)/Tt[5],kt=(Tt[9]-1)/Tt[5],H=(Tt[8]-1)/Tt[0],_e=(Dt[8]+1)/Dt[0],Yt=ee*H,q=ee*_e,wt=ht/(-H+_e),oe=wt*-H;if(it.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(oe),K.translateZ(wt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Tt[10]===-1)K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Ot=ee+wt,P=ne+wt,w=Yt-oe,Z=q+(ht-oe),ot=zt*ne/P*Ot,rt=kt*ne/P*Ot;K.projectionMatrix.makePerspective(w,Z,ot,rt,Ot,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function J(K,it){it===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(it.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let it=K.near,St=K.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(St=_.depthFar)),x.near=C.near=b.near=it,x.far=C.far=b.far=St,(L!==x.near||D!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,D=x.far),b.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,x.layers.mask=b.layers.mask|C.layers.mask;let ht=K.parent,Tt=x.cameras;J(x,ht);for(let Dt=0;Dt<Tt.length;Dt++)J(Tt[Dt],ht);Tt.length===2?k(x,b,C):x.projectionMatrix.copy(b.projectionMatrix),R(K,x,ht)};function R(K,it,St){St===null?K.matrix.copy(it.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(it.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=za*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Q=null;function Rt(K,it){if(h=it.getViewerPose(c||o),g=it,h!==null){let St=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let ht=!1;St.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let Dt=0;Dt<St.length;Dt++){let ee=St[Dt],ne=null;if(d!==null)ne=d.getViewport(ee);else{let kt=f.getViewSubImage(u,ee);ne=kt.viewport,Dt===0&&(t.setRenderTargetTextures(M,kt.colorTexture,u.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(M))}let zt=y[Dt];zt===void 0&&(zt=new Bn,zt.layers.enable(Dt),zt.viewport=new qe,y[Dt]=zt),zt.matrix.fromArray(ee.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(ee.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ne.x,ne.y,ne.width,ne.height),Dt===0&&(x.matrix.copy(zt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(zt)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Dt=f.getDepthInformation(St[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,i.renderState)}}for(let St=0;St<S.length;St++){let ht=v[St],Tt=S[St];ht!==null&&Tt!==void 0&&Tt.update(ht,it,c||o)}Q&&Q(K,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let mt=new f0;mt.setAnimationLoop(Rt),this.setAnimationLoop=function(K){Q=K},this.dispose=function(){}}},ms=new ki,G1=new Ie;function W1(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,u0(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,ms.copy(v),ms.x*=-1,ms.y*=-1,ms.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.envMapRotation.value.setFromMatrix4(G1.makeRotationFromEuler(ms)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function X1(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let v=S.program;n.uniformBlockBinding(M,v)}function c(M,S){let v=i[M.id];v===void 0&&(g(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",m));let T=S.program;n.updateUBOMapping(M,T);let A=t.render.frame;s[M.id]!==A&&(u(M),s[M.id]=A)}function h(M){let S=f();M.__bindingPointIndex=S;let v=r.createBuffer(),T=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,T,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,v),v}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let S=i[M.id],v=M.uniforms,T=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,b=v.length;A<b;A++){let C=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,x=C.length;y<x;y++){let L=C[y];if(d(L,A,y,T)===!0){let D=L.__offset,O=Array.isArray(L.value)?L.value:[L.value],z=0;for(let X=0;X<O.length;X++){let F=O[X],U=_(F);typeof F=="number"||typeof F=="boolean"?(L.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,D+z,L.__data)):F.isMatrix3?(L.__data[0]=F.elements[0],L.__data[1]=F.elements[1],L.__data[2]=F.elements[2],L.__data[3]=0,L.__data[4]=F.elements[3],L.__data[5]=F.elements[4],L.__data[6]=F.elements[5],L.__data[7]=0,L.__data[8]=F.elements[6],L.__data[9]=F.elements[7],L.__data[10]=F.elements[8],L.__data[11]=0):(F.toArray(L.__data,z),z+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,S,v,T){let A=M.value,b=S+"_"+v;if(T[b]===void 0)return typeof A=="number"||typeof A=="boolean"?T[b]=A:T[b]=A.clone(),!0;{let C=T[b];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return T[b]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(M){let S=M.uniforms,v=0,T=16;for(let b=0,C=S.length;b<C;b++){let y=Array.isArray(S[b])?S[b]:[S[b]];for(let x=0,L=y.length;x<L;x++){let D=y[x],O=Array.isArray(D.value)?D.value:[D.value];for(let z=0,X=O.length;z<X;z++){let F=O[z],U=_(F),k=v%T,J=k%U.boundary,R=k+J;v+=J,R!==0&&T-R<U.storage&&(v+=T-R),D.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=U.storage}}}let A=v%T;return A>0&&(v+=T-A),M.__size=v,M.__cache={},this}function _(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){let S=M.target;S.removeEventListener("dispose",m);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(let M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Uc=class{constructor(t={}){let{canvas:e=Zv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=Br,this.toneMappingExposure=1;let v=this,T=!1,A=0,b=0,C=null,y=-1,x=null,L=new qe,D=new qe,O=null,z=new Qt(0),X=0,F=e.width,U=e.height,k=1,J=null,R=null,Q=new qe(0,0,F,U),Rt=new qe(0,0,F,U),mt=!1,K=new ka,it=!1,St=!1,ht=new Ie,Tt=new Ie,Dt=new Y,ee=new qe,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function kt(){return C===null?k:1}let H=n;function _e(E,B){return e.getContext(E,B)}try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",G,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",j,!1),H===null){let B="webgl2";if(H=_e(B,E),H===null)throw _e(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Yt,q,wt,oe,Ot,P,w,Z,ot,rt,nt,yt,xt,Mt,re,ut,_t,Ht,Vt,At,ae,$t,lt,I;function et(){Yt=new ab(H),Yt.init(),$t=new z1(H,Yt),q=new eb(H,Yt,t,$t),wt=new O1(H,Yt),q.reverseDepthBuffer&&u&&wt.buffers.depth.setReversed(!0),oe=new hb(H),Ot=new b1,P=new B1(H,Yt,wt,Ot,q,$t,oe),w=new ib(v),Z=new ob(v),ot=new _y(H),lt=new jS(H,ot),rt=new lb(H,ot,oe,lt),nt=new fb(H,rt,ot,oe),Vt=new ub(H,q,P),ut=new nb(Ot),yt=new S1(v,w,Z,Yt,q,lt,ut),xt=new W1(v,Ot),Mt=new E1,re=new I1(Yt),Ht=new QS(v,w,Z,wt,nt,d,l),_t=new U1(v,nt,q),I=new X1(H,oe,q,wt),At=new tb(H,Yt,oe),ae=new cb(H,Yt,oe),oe.programs=yt.programs,v.capabilities=q,v.extensions=Yt,v.properties=Ot,v.renderLists=Mt,v.shadowMap=_t,v.state=wt,v.info=oe}et();let V=new Jf(v,H);this.xr=V,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let E=Yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(F,U,!1))},this.getSize=function(E){return E.set(F,U)},this.setSize=function(E,B,W=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,U=B,e.width=Math.floor(E*k),e.height=Math.floor(B*k),W===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(F*k,U*k).floor()},this.setDrawingBufferSize=function(E,B,W){F=E,U=B,k=W,e.width=Math.floor(E*W),e.height=Math.floor(B*W),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,B,W,$){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,B,W,$),wt.viewport(L.copy(Q).multiplyScalar(k).round())},this.getScissor=function(E){return E.copy(Rt)},this.setScissor=function(E,B,W,$){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,B,W,$),wt.scissor(D.copy(Rt).multiplyScalar(k).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(E){wt.setScissorTest(mt=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){R=E},this.getClearColor=function(E){return E.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(E=!0,B=!0,W=!0){let $=0;if(E){let N=!1;if(C!==null){let st=C.texture.format;N=st===vd||st===xd||st===_d}if(N){let st=C.texture.type,at=st===ar||st===Ms||st===Ba||st===Co||st===pd||st===md,ct=Ht.getClearColor(),vt=Ht.getClearAlpha(),qt=ct.r,Jt=ct.g,Pt=ct.b;at?(g[0]=qt,g[1]=Jt,g[2]=Pt,g[3]=vt,H.clearBufferuiv(H.COLOR,0,g)):(_[0]=qt,_[1]=Jt,_[2]=Pt,_[3]=vt,H.clearBufferiv(H.COLOR,0,_))}else $|=H.COLOR_BUFFER_BIT}B&&($|=H.DEPTH_BUFFER_BIT),W&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",G,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",j,!1),Mt.dispose(),re.dispose(),Ot.dispose(),w.dispose(),Z.dispose(),nt.dispose(),lt.dispose(),I.dispose(),yt.dispose(),V.dispose(),V.removeEventListener("sessionstart",ft),V.removeEventListener("sessionend",Nt),pt.stop()};function G(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=oe.autoReset,B=_t.enabled,W=_t.autoUpdate,$=_t.needsUpdate,N=_t.type;et(),oe.autoReset=E,_t.enabled=B,_t.autoUpdate=W,_t.needsUpdate=$,_t.type=N}function j(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Et(E){let B=E.target;B.removeEventListener("dispose",Et),Gt(B)}function Gt(E){Zt(E),Ot.remove(E)}function Zt(E){let B=Ot.get(E).programs;B!==void 0&&(B.forEach(function(W){yt.releaseProgram(W)}),E.isShaderMaterial&&yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,W,$,N,st){B===null&&(B=ne);let at=N.isMesh&&N.matrixWorld.determinant()<0,ct=Ze(E,B,W,$,N);wt.setMaterial($,at);let vt=W.index,qt=1;if($.wireframe===!0){if(vt=rt.getWireframeAttribute(W),vt===void 0)return;qt=2}let Jt=W.drawRange,Pt=W.attributes.position,se=Jt.start*qt,de=(Jt.start+Jt.count)*qt;st!==null&&(se=Math.max(se,st.start*qt),de=Math.min(de,(st.start+st.count)*qt)),vt!==null?(se=Math.max(se,0),de=Math.min(de,vt.count)):Pt!=null&&(se=Math.max(se,0),de=Math.min(de,Pt.count));let pe=de-se;if(pe<0||pe===1/0)return;lt.setup(N,$,ct,W,vt);let ve,ie=At;if(vt!==null&&(ve=ot.get(vt),ie=ae,ie.setIndex(ve)),N.isMesh)$.wireframe===!0?(wt.setLineWidth($.wireframeLinewidth*kt()),ie.setMode(H.LINES)):ie.setMode(H.TRIANGLES);else if(N.isLine){let Lt=$.linewidth;Lt===void 0&&(Lt=1),wt.setLineWidth(Lt*kt()),N.isLineSegments?ie.setMode(H.LINES):N.isLineLoop?ie.setMode(H.LINE_LOOP):ie.setMode(H.LINE_STRIP)}else N.isPoints?ie.setMode(H.POINTS):N.isSprite&&ie.setMode(H.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ie.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ie.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Lt=N._multiDrawStarts,hn=N._multiDrawCounts,be=N._multiDrawCount,vi=vt?ot.get(vt).bytesPerElement:1,Is=Ot.get($).currentProgram.getUniforms();for(let Zn=0;Zn<be;Zn++)Is.setValue(H,"_gl_DrawID",Zn),ie.render(Lt[Zn]/vi,hn[Zn])}else if(N.isInstancedMesh)ie.renderInstances(se,pe,N.count);else if(W.isInstancedBufferGeometry){let Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,hn=Math.min(W.instanceCount,Lt);ie.renderInstances(se,pe,hn)}else ie.render(se,pe)};function dt(E,B,W){E.transparent===!0&&E.side===Ei&&E.forceSinglePass===!1?(E.side=En,E.needsUpdate=!0,Me(E,B,W),E.side=zr,E.needsUpdate=!0,Me(E,B,W),E.side=Ei):Me(E,B,W)}this.compile=function(E,B,W=null){W===null&&(W=E),p=re.get(W),p.init(B),S.push(p),W.traverseVisible(function(N){N.isLight&&N.layers.test(B.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==W&&E.traverseVisible(function(N){N.isLight&&N.layers.test(B.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let $=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let st=N.material;if(st)if(Array.isArray(st))for(let at=0;at<st.length;at++){let ct=st[at];dt(ct,W,N),$.add(ct)}else dt(st,W,N),$.add(st)}),S.pop(),p=null,$},this.compileAsync=function(E,B,W=null){let $=this.compile(E,B,W);return new Promise(N=>{function st(){if($.forEach(function(at){Ot.get(at).currentProgram.isReady()&&$.delete(at)}),$.size===0){N(E);return}setTimeout(st,10)}Yt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let gt=null;function It(E){gt&&gt(E)}function ft(){pt.stop()}function Nt(){pt.start()}let pt=new f0;pt.setAnimationLoop(It),typeof self!="undefined"&&pt.setContext(self),this.setAnimationLoop=function(E){gt=E,V.setAnimationLoop(E),E===null?pt.stop():pt.start()},V.addEventListener("sessionstart",ft),V.addEventListener("sessionend",Nt),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(B),B=V.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,B,C),p=re.get(E,S.length),p.init(B),S.push(p),Tt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(Tt),St=this.localClippingEnabled,it=ut.init(this.clippingPlanes,St),m=Mt.get(E,M.length),m.init(),M.push(m),V.enabled===!0&&V.isPresenting===!0){let st=v.xr.getDepthSensingMesh();st!==null&&Ct(st,B,-1/0,v.sortObjects)}Ct(E,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(J,R),zt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,zt&&Ht.addToRenderList(m,E),this.info.render.frame++,it===!0&&ut.beginShadows();let W=p.state.shadowsArray;_t.render(W,E,B),it===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,N=m.transmissive;if(p.setupLights(),B.isArrayCamera){let st=B.cameras;if(N.length>0)for(let at=0,ct=st.length;at<ct;at++){let vt=st[at];Wt($,N,E,vt)}zt&&Ht.render(E);for(let at=0,ct=st.length;at<ct;at++){let vt=st[at];Ft(m,E,vt,vt.viewport)}}else N.length>0&&Wt($,N,E,B),zt&&Ht.render(E),Ft(m,E,B);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,B),lt.resetDefaultState(),y=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],it===!0&&ut.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ct(E,B,W,$){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){$&&ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Tt);let at=nt.update(E),ct=E.material;ct.visible&&m.push(E,at,ct,W,ee.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||K.intersectsObject(E))){let at=nt.update(E),ct=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ee.copy(E.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),ee.copy(at.boundingSphere.center)),ee.applyMatrix4(E.matrixWorld).applyMatrix4(Tt)),Array.isArray(ct)){let vt=at.groups;for(let qt=0,Jt=vt.length;qt<Jt;qt++){let Pt=vt[qt],se=ct[Pt.materialIndex];se&&se.visible&&m.push(E,at,se,W,ee.z,Pt)}}else ct.visible&&m.push(E,at,ct,W,ee.z,null)}}let st=E.children;for(let at=0,ct=st.length;at<ct;at++)Ct(st[at],B,W,$)}function Ft(E,B,W,$){let N=E.opaque,st=E.transmissive,at=E.transparent;p.setupLightsView(W),it===!0&&ut.setGlobalState(v.clippingPlanes,W),$&&wt.viewport(L.copy($)),N.length>0&&xe(N,B,W),st.length>0&&xe(st,B,W),at.length>0&&xe(at,B,W),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Wt(E,B,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new lr(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?qa:ar,minFilter:ys,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));let st=p.state.transmissionRenderTarget[$.id],at=$.viewport||L;st.setSize(at.z,at.w);let ct=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(z),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),zt&&Ht.render(W);let vt=v.toneMapping;v.toneMapping=Br;let qt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),it===!0&&ut.setGlobalState(v.clippingPlanes,$),xe(E,W,$),P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Pt=0,se=B.length;Pt<se;Pt++){let de=B[Pt],pe=de.object,ve=de.geometry,ie=de.material,Lt=de.group;if(ie.side===Ei&&pe.layers.test($.layers)){let hn=ie.side;ie.side=En,ie.needsUpdate=!0,Le(pe,W,$,ve,ie,Lt),ie.side=hn,ie.needsUpdate=!0,Jt=!0}}Jt===!0&&(P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st))}v.setRenderTarget(ct),v.setClearColor(z,X),qt!==void 0&&($.viewport=qt),v.toneMapping=vt}function xe(E,B,W){let $=B.isScene===!0?B.overrideMaterial:null;for(let N=0,st=E.length;N<st;N++){let at=E[N],ct=at.object,vt=at.geometry,qt=$===null?at.material:$,Jt=at.group;ct.layers.test(W.layers)&&Le(ct,B,W,vt,qt,Jt)}}function Le(E,B,W,$,N,st){E.onBeforeRender(v,B,W,$,N,st),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(v,B,W,$,E,st),N.transparent===!0&&N.side===Ei&&N.forceSinglePass===!1?(N.side=En,N.needsUpdate=!0,v.renderBufferDirect(W,B,$,N,E,st),N.side=zr,N.needsUpdate=!0,v.renderBufferDirect(W,B,$,N,E,st),N.side=Ei):v.renderBufferDirect(W,B,$,N,E,st),E.onAfterRender(v,B,W,$,N,st)}function Me(E,B,W){B.isScene!==!0&&(B=ne);let $=Ot.get(E),N=p.state.lights,st=p.state.shadowsArray,at=N.state.version,ct=yt.getParameters(E,N.state,st,B,W),vt=yt.getProgramCacheKey(ct),qt=$.programs;$.environment=E.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(E.isMeshStandardMaterial?Z:w).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,qt===void 0&&(E.addEventListener("dispose",Et),qt=new Map,$.programs=qt);let Jt=qt.get(vt);if(Jt!==void 0){if($.currentProgram===Jt&&$.lightsStateVersion===at)return te(E,ct),Jt}else ct.uniforms=yt.getUniforms(E),E.onBeforeCompile(ct,v),Jt=yt.acquireProgram(ct,vt),qt.set(vt,Jt),$.uniforms=ct.uniforms;let Pt=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=ut.uniform),te(E,ct),$.needsLights=ke(E),$.lightsStateVersion=at,$.needsLights&&(Pt.ambientLightColor.value=N.state.ambient,Pt.lightProbe.value=N.state.probe,Pt.directionalLights.value=N.state.directional,Pt.directionalLightShadows.value=N.state.directionalShadow,Pt.spotLights.value=N.state.spot,Pt.spotLightShadows.value=N.state.spotShadow,Pt.rectAreaLights.value=N.state.rectArea,Pt.ltc_1.value=N.state.rectAreaLTC1,Pt.ltc_2.value=N.state.rectAreaLTC2,Pt.pointLights.value=N.state.point,Pt.pointLightShadows.value=N.state.pointShadow,Pt.hemisphereLights.value=N.state.hemi,Pt.directionalShadowMap.value=N.state.directionalShadowMap,Pt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pt.spotShadowMap.value=N.state.spotShadowMap,Pt.spotLightMatrix.value=N.state.spotLightMatrix,Pt.spotLightMap.value=N.state.spotLightMap,Pt.pointShadowMap.value=N.state.pointShadowMap,Pt.pointShadowMatrix.value=N.state.pointShadowMatrix),$.currentProgram=Jt,$.uniformsList=null,Jt}function jt(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=wo.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function te(E,B){let W=Ot.get(E);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Ze(E,B,W,$,N){B.isScene!==!0&&(B=ne),P.resetTextureUnits();let st=B.fog,at=$.isMeshStandardMaterial?B.environment:null,ct=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Oo,vt=($.isMeshStandardMaterial?Z:w).get($.envMap||at),qt=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Jt=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Pt=!!W.morphAttributes.position,se=!!W.morphAttributes.normal,de=!!W.morphAttributes.color,pe=Br;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pe=v.toneMapping);let ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=ve!==void 0?ve.length:0,Lt=Ot.get($),hn=p.state.lights;if(it===!0&&(St===!0||E!==x)){let li=E===x&&$.id===y;ut.setState($,E,li)}let be=!1;$.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==hn.state.version||Lt.outputColorSpace!==ct||N.isBatchedMesh&&Lt.batching===!1||!N.isBatchedMesh&&Lt.batching===!0||N.isBatchedMesh&&Lt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Lt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Lt.instancing===!1||!N.isInstancedMesh&&Lt.instancing===!0||N.isSkinnedMesh&&Lt.skinning===!1||!N.isSkinnedMesh&&Lt.skinning===!0||N.isInstancedMesh&&Lt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Lt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Lt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Lt.instancingMorph===!1&&N.morphTexture!==null||Lt.envMap!==vt||$.fog===!0&&Lt.fog!==st||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ut.numPlanes||Lt.numIntersection!==ut.numIntersection)||Lt.vertexAlphas!==qt||Lt.vertexTangents!==Jt||Lt.morphTargets!==Pt||Lt.morphNormals!==se||Lt.morphColors!==de||Lt.toneMapping!==pe||Lt.morphTargetsCount!==ie)&&(be=!0):(be=!0,Lt.__version=$.version);let vi=Lt.currentProgram;be===!0&&(vi=Me($,B,N));let Is=!1,Zn=!1,Ho=!1,Ne=vi.getUniforms(),Ci=Lt.uniforms;if(wt.useProgram(vi.program)&&(Is=!0,Zn=!0,Ho=!0),$.id!==y&&(y=$.id,Zn=!0),Is||x!==E){wt.buffers.depth.getReversed()?(ht.copy(E.projectionMatrix),Kv(ht),Qv(ht),Ne.setValue(H,"projectionMatrix",ht)):Ne.setValue(H,"projectionMatrix",E.projectionMatrix),Ne.setValue(H,"viewMatrix",E.matrixWorldInverse);let dr=Ne.map.cameraPosition;dr!==void 0&&dr.setValue(H,Dt.setFromMatrixPosition(E.matrixWorld)),q.logarithmicDepthBuffer&&Ne.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ne.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Zn=!0,Ho=!0)}if(N.isSkinnedMesh){Ne.setOptional(H,N,"bindMatrix"),Ne.setOptional(H,N,"bindMatrixInverse");let li=N.skeleton;li&&(li.boneTexture===null&&li.computeBoneTexture(),Ne.setValue(H,"boneTexture",li.boneTexture,P))}N.isBatchedMesh&&(Ne.setOptional(H,N,"batchingTexture"),Ne.setValue(H,"batchingTexture",N._matricesTexture,P),Ne.setOptional(H,N,"batchingIdTexture"),Ne.setValue(H,"batchingIdTexture",N._indirectTexture,P),Ne.setOptional(H,N,"batchingColorTexture"),N._colorsTexture!==null&&Ne.setValue(H,"batchingColorTexture",N._colorsTexture,P));let Vo=W.morphAttributes;if((Vo.position!==void 0||Vo.normal!==void 0||Vo.color!==void 0)&&Vt.update(N,W,vi),(Zn||Lt.receiveShadow!==N.receiveShadow)&&(Lt.receiveShadow=N.receiveShadow,Ne.setValue(H,"receiveShadow",N.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Ci.envMap.value=vt,Ci.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(Ci.envMapIntensity.value=B.environmentIntensity),Zn&&(Ne.setValue(H,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&Se(Ci,Ho),st&&$.fog===!0&&xt.refreshFogUniforms(Ci,st),xt.refreshMaterialUniforms(Ci,$,k,U,p.state.transmissionRenderTarget[E.id]),wo.upload(H,jt(Lt),Ci,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(wo.upload(H,jt(Lt),Ci,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ne.setValue(H,"center",N.center),Ne.setValue(H,"modelViewMatrix",N.modelViewMatrix),Ne.setValue(H,"normalMatrix",N.normalMatrix),Ne.setValue(H,"modelMatrix",N.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let li=$.uniformsGroups;for(let dr=0,pr=li.length;dr<pr;dr++){let Ld=li[dr];I.update(Ld,vi),I.bind(Ld,vi)}}return vi}function Se(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function ke(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,B,W){Ot.get(E.texture).__webglTexture=B,Ot.get(E.depthTexture).__webglTexture=W;let $=Ot.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){let W=Ot.get(E);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,W=0){C=E,A=B,b=W;let $=!0,N=null,st=!1,at=!1;if(E){let vt=Ot.get(E);if(vt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(H.FRAMEBUFFER,null),$=!1;else if(vt.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(vt.__hasExternalTextures)P.rebindTextures(E,Ot.get(E.texture).__webglTexture,Ot.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Pt=E.depthTexture;if(vt.__boundDepthTexture!==Pt){if(Pt!==null&&Ot.has(Pt)&&(E.width!==Pt.image.width||E.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}let qt=E.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(at=!0);let Jt=Ot.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Jt[B])?N=Jt[B][W]:N=Jt[B],st=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?N=Ot.get(E).__webglMultisampledFramebuffer:Array.isArray(Jt)?N=Jt[W]:N=Jt,L.copy(E.viewport),D.copy(E.scissor),O=E.scissorTest}else L.copy(Q).multiplyScalar(k).floor(),D.copy(Rt).multiplyScalar(k).floor(),O=mt;if(wt.bindFramebuffer(H.FRAMEBUFFER,N)&&$&&wt.drawBuffers(E,N),wt.viewport(L),wt.scissor(D),wt.setScissorTest(O),st){let vt=Ot.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,vt.__webglTexture,W)}else if(at){let vt=Ot.get(E.texture),qt=B||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,vt.__webglTexture,W||0,qt)}y=-1},this.readRenderTargetPixels=function(E,B,W,$,N,st,at){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ct=Ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&at!==void 0&&(ct=ct[at]),ct){wt.bindFramebuffer(H.FRAMEBUFFER,ct);try{let vt=E.texture,qt=vt.format,Jt=vt.type;if(!q.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-$&&W>=0&&W<=E.height-N&&H.readPixels(B,W,$,N,$t.convert(qt),$t.convert(Jt),st)}finally{let vt=C!==null?Ot.get(C).__webglFramebuffer:null;wt.bindFramebuffer(H.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(E,B,W,$,N,st,at){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ct=Ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&at!==void 0&&(ct=ct[at]),ct){let vt=E.texture,qt=vt.format,Jt=vt.type;if(!q.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-$&&W>=0&&W<=E.height-N){wt.bindFramebuffer(H.FRAMEBUFFER,ct);let Pt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Pt),H.bufferData(H.PIXEL_PACK_BUFFER,st.byteLength,H.STREAM_READ),H.readPixels(B,W,$,N,$t.convert(qt),$t.convert(Jt),0);let se=C!==null?Ot.get(C).__webglFramebuffer:null;wt.bindFramebuffer(H.FRAMEBUFFER,se);let de=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Jv(H,de,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Pt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,st),H.deleteBuffer(Pt),H.deleteSync(de),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,W=0){E.isTexture!==!0&&(Da("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);let $=Math.pow(2,-W),N=Math.floor(E.image.width*$),st=Math.floor(E.image.height*$),at=B!==null?B.x:0,ct=B!==null?B.y:0;P.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,at,ct,N,st),wt.unbindTexture()},this.copyTextureToTexture=function(E,B,W=null,$=null,N=0){E.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,E=arguments[1],B=arguments[2],N=arguments[3]||0,W=null);let st,at,ct,vt,qt,Jt,Pt,se,de,pe=E.isCompressedTexture?E.mipmaps[N]:E.image;W!==null?(st=W.max.x-W.min.x,at=W.max.y-W.min.y,ct=W.isBox3?W.max.z-W.min.z:1,vt=W.min.x,qt=W.min.y,Jt=W.isBox3?W.min.z:0):(st=pe.width,at=pe.height,ct=pe.depth||1,vt=0,qt=0,Jt=0),$!==null?(Pt=$.x,se=$.y,de=$.z):(Pt=0,se=0,de=0);let ve=$t.convert(B.format),ie=$t.convert(B.type),Lt;B.isData3DTexture?(P.setTexture3D(B,0),Lt=H.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(P.setTexture2DArray(B,0),Lt=H.TEXTURE_2D_ARRAY):(P.setTexture2D(B,0),Lt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);let hn=H.getParameter(H.UNPACK_ROW_LENGTH),be=H.getParameter(H.UNPACK_IMAGE_HEIGHT),vi=H.getParameter(H.UNPACK_SKIP_PIXELS),Is=H.getParameter(H.UNPACK_SKIP_ROWS),Zn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,pe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,pe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,vt),H.pixelStorei(H.UNPACK_SKIP_ROWS,qt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Jt);let Ho=E.isDataArrayTexture||E.isData3DTexture,Ne=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Ci=Ot.get(E),Vo=Ot.get(B),li=Ot.get(Ci.__renderTarget),dr=Ot.get(Vo.__renderTarget);wt.bindFramebuffer(H.READ_FRAMEBUFFER,li.__webglFramebuffer),wt.bindFramebuffer(H.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let pr=0;pr<ct;pr++)Ho&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ot.get(E).__webglTexture,N,Jt+pr),E.isDepthTexture?(Ne&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ot.get(B).__webglTexture,N,de+pr),H.blitFramebuffer(vt,qt,st,at,Pt,se,st,at,H.DEPTH_BUFFER_BIT,H.NEAREST)):Ne?H.copyTexSubImage3D(Lt,N,Pt,se,de+pr,vt,qt,st,at):H.copyTexSubImage2D(Lt,N,Pt,se,de+pr,vt,qt,st,at);wt.bindFramebuffer(H.READ_FRAMEBUFFER,null),wt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ne?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(Lt,N,Pt,se,de,st,at,ct,ve,ie,pe.data):B.isCompressedArrayTexture?H.compressedTexSubImage3D(Lt,N,Pt,se,de,st,at,ct,ve,pe.data):H.texSubImage3D(Lt,N,Pt,se,de,st,at,ct,ve,ie,pe):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,N,Pt,se,st,at,ve,ie,pe.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,N,Pt,se,pe.width,pe.height,ve,pe.data):H.texSubImage2D(H.TEXTURE_2D,N,Pt,se,st,at,ve,ie,pe);H.pixelStorei(H.UNPACK_ROW_LENGTH,hn),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,be),H.pixelStorei(H.UNPACK_SKIP_PIXELS,vi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Is),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Zn),N===0&&B.generateMipmaps&&H.generateMipmap(Lt),wt.unbindTexture()},this.copyTextureToTexture3D=function(E,B,W=null,$=null,N=0){return E.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,$=arguments[1]||null,E=arguments[2],B=arguments[3],N=arguments[4]||0),Da('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,W,$,N)},this.initRenderTarget=function(E){Ot.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),wt.unbindTexture()},this.resetState=function(){A=0,b=0,C=null,wt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}};var Nc=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ha=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Oc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Df,this.updateRanges=[],this.version=0,this.uuid=sr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},On=new Y,Va=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)On.fromBufferAttribute(this,e),On.applyMatrix4(t),this.setXYZ(e,On.x,On.y,On.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)On.fromBufferAttribute(this,e),On.applyNormalMatrix(t),this.setXYZ(e,On.x,On.y,On.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)On.fromBufferAttribute(this,e),On.transformDirection(t),this.setXYZ(e,On.x,On.y,On.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ti(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),s=Re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ga=class extends Hr{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mo,Ra=new Y,go=new Y,_o=new Y,xo=new le,Ca=new le,_0=new Ie,fc=new Y,Pa=new Y,dc=new Y,Gg=new le,Xu=new le,Wg=new le,Fc=class extends An{constructor(t=new Ga){if(super(),this.isSprite=!0,this.type="Sprite",mo===void 0){mo=new qn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Oc(e,5);mo.setIndex([0,1,2,0,2,3]),mo.setAttribute("position",new Va(n,3,0,!1)),mo.setAttribute("uv",new Va(n,2,3,!1))}this.geometry=mo,this.material=t,this.center=new le(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),go.setFromMatrixScale(this.matrixWorld),_0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_o.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&go.multiplyScalar(-_o.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;pc(fc.set(-.5,-.5,0),_o,o,go,i,s),pc(Pa.set(.5,-.5,0),_o,o,go,i,s),pc(dc.set(.5,.5,0),_o,o,go,i,s),Gg.set(0,0),Xu.set(1,0),Wg.set(1,1);let a=t.ray.intersectTriangle(fc,Pa,dc,!1,Ra);if(a===null&&(pc(Pa.set(-.5,.5,0),_o,o,go,i,s),Xu.set(0,1),a=t.ray.intersectTriangle(fc,dc,Pa,!1,Ra),a===null))return;let l=t.ray.origin.distanceTo(Ra);l<t.near||l>t.far||e.push({distance:l,point:Ra.clone(),uv:Or.getInterpolation(Ra,fc,Pa,dc,Gg,Xu,Wg,new le),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pc(r,t,e,n,i,s){xo.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ca.x=s*xo.x-i*xo.y,Ca.y=i*xo.x+s*xo.y):Ca.copy(xo),r.copy(t),r.x+=Ca.x,r.y+=Ca.y,r.applyMatrix4(_0)}var Kf=class extends Yn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=si,h=si,f,u){super(null,o,a,l,c,h,i,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wa=class extends Tn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vo=new Ie,Xg=new Ie,mc=[],Yg=new cr,Y1=new Ie,Ia=new Ee,La=new Ss,Gr=class extends Ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Y1)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vo),Yg.copy(t.boundingBox).applyMatrix4(vo),this.boundingBox.union(Yg)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vo),La.copy(t.boundingSphere).applyMatrix4(vo),this.boundingSphere.union(La)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),t.ray.intersectsSphere(La)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,vo),Xg.multiplyMatrices(n,vo),Ia.matrixWorld=Xg,Ia.raycast(t,mc);for(let o=0,a=mc.length;o<a;o++){let l=mc[o];l.instanceId=s,l.object=this,e.push(l)}mc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Kf(new Float32Array(i*this.count),i,this.count,gd,Bi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Do=class extends Yn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bc=class r extends qn{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new Y,h=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(a,3)),this.setAttribute("uv",new ze(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xa=class r extends qn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],f=[],u=[],d=[],g=0,_=[],m=n/2,p=0;M(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ze(f,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(d,2));function M(){let v=new Y,T=new Y,A=0,b=(e-t)/n;for(let C=0;C<=s;C++){let y=[],x=C/s,L=x*(e-t)+t;for(let D=0;D<=i;D++){let O=D/i,z=O*l+a,X=Math.sin(z),F=Math.cos(z);T.x=L*X,T.y=-x*n+m,T.z=L*F,f.push(T.x,T.y,T.z),v.set(X,b,F).normalize(),u.push(v.x,v.y,v.z),d.push(O,1-x),y.push(g++)}_.push(y)}for(let C=0;C<i;C++)for(let y=0;y<s;y++){let x=_[y][C],L=_[y+1][C],D=_[y+1][C+1],O=_[y][C+1];(t>0||y!==0)&&(h.push(x,L,O),A+=3),(e>0||y!==s-1)&&(h.push(L,D,O),A+=3)}c.addGroup(p,A,0),p+=A}function S(v){let T=g,A=new le,b=new Y,C=0,y=v===!0?t:e,x=v===!0?1:-1;for(let D=1;D<=i;D++)f.push(0,m*x,0),u.push(0,x,0),d.push(.5,.5),g++;let L=g;for(let D=0;D<=i;D++){let z=D/i*l+a,X=Math.cos(z),F=Math.sin(z);b.x=y*F,b.y=m*x,b.z=y*X,f.push(b.x,b.y,b.z),u.push(0,x,0),A.x=X*.5+.5,A.y=F*.5*x+.5,d.push(A.x,A.y),g++}for(let D=0;D<i;D++){let O=T+D,z=L+D;v===!0?h.push(z,z+1,O):h.push(z+1,z,O),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Qf=class r extends qn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ze(s,3)),this.setAttribute("normal",new ze(s.slice(),3)),this.setAttribute("uv",new ze(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let S=new Y,v=new Y,T=new Y;for(let A=0;A<e.length;A+=3)d(e[A+0],S),d(e[A+1],v),d(e[A+2],T),l(S,v,T,M)}function l(M,S,v,T){let A=T+1,b=[];for(let C=0;C<=A;C++){b[C]=[];let y=M.clone().lerp(v,C/A),x=S.clone().lerp(v,C/A),L=A-C;for(let D=0;D<=L;D++)D===0&&C===A?b[C][D]=y:b[C][D]=y.clone().lerp(x,D/L)}for(let C=0;C<A;C++)for(let y=0;y<2*(A-C)-1;y++){let x=Math.floor(y/2);y%2===0?(u(b[C][x+1]),u(b[C+1][x]),u(b[C][x])):(u(b[C][x+1]),u(b[C+1][x+1]),u(b[C+1][x]))}}function c(M){let S=new Y;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(M),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function h(){let M=new Y;for(let S=0;S<s.length;S+=3){M.x=s[S+0],M.y=s[S+1],M.z=s[S+2];let v=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;o.push(v,1-T)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){let S=o[M+0],v=o[M+2],T=o[M+4],A=Math.max(S,v,T),b=Math.min(S,v,T);A>.9&&b<.1&&(S<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function d(M,S){let v=M*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function g(){let M=new Y,S=new Y,v=new Y,T=new Y,A=new le,b=new le,C=new le;for(let y=0,x=0;y<s.length;y+=9,x+=6){M.set(s[y+0],s[y+1],s[y+2]),S.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),A.set(o[x+0],o[x+1]),b.set(o[x+2],o[x+3]),C.set(o[x+4],o[x+5]),T.copy(M).add(S).add(v).divideScalar(3);let L=m(T);_(A,x+0,M,L),_(b,x+2,S,L),_(C,x+4,v,L)}}function _(M,S,v,T){T<0&&M.x===1&&(o[S]=M.x-1),v.x===0&&v.z===0&&(o[S]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var ws=class r extends Qf{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Uo=class r extends qn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new Y,u=new Y,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let M=[],S=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){let A=T/e;f.x=-t*Math.cos(i+A*s)*Math.sin(o+S*a),f.y=t*Math.cos(o+S*a),f.z=t*Math.sin(i+A*s)*Math.sin(o+S*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),m.push(A+v,1-S),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let S=h[p][M+1],v=h[p][M],T=h[p+1][M],A=h[p+1][M+1];(p!==0||o>0)&&d.push(S,v,A),(p!==n-1||l<Math.PI)&&d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ke=class extends Hr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a0,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ya=class extends Ke{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function gc(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function q1(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var No=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jf=class extends No{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qm,endingEnd:qm}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case $m:s=t,a=2*e-n;break;case Zm:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $m:o=t,l=2*n-e;break;case Zm:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,M=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,S=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let T=0;T!==a;++T)s[T]=p*o[h+T]+M*o[c+T]+S*o[l+T]+v*o[f+T];return s}},td=class extends No{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*f+o[l+u]*h;return s}},ed=class extends No{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ri=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gc(e,this.TimeBufferType),this.values=gc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gc(t.times,Array),values:gc(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ed(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new td(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Sc:e=this.InterpolantFactoryMethodDiscrete;break;case Lf:e=this.InterpolantFactoryMethodLinear;break;case xu:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sc;case this.InterpolantFactoryMethodLinear:return Lf;case this.InterpolantFactoryMethodSmooth:return xu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&q1(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xu,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let _=e[f+g];if(_!==e[u+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=Lf;var Es=class extends Ri{constructor(t,e,n){super(t,e,n)}};Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Sc;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var nd=class extends Ri{};nd.prototype.ValueTypeName="color";var id=class extends Ri{};id.prototype.ValueTypeName="number";var rd=class extends No{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)zi.slerpFlat(s,0,o,c-a,o,c,l);return s}},zc=class extends Ri{InterpolantFactoryMethodLinear(t){return new rd(this.times,this.values,this.getValueSize(),t)}};zc.prototype.ValueTypeName="quaternion";zc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends Ri{constructor(t,e,n){super(t,e,n)}};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Sc;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var sd=class extends Ri{};sd.prototype.ValueTypeName="vector";var od=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},$1=new od,ad=class{constructor(t){this.manager=t!==void 0?t:$1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ad.DEFAULT_MATERIAL_NAME="__DEFAULT";var kc=class extends An{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Hc=class extends kc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Yu=new Ie,qg=new Y,$g=new Y,ld=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;qg.setFromMatrixPosition(t.matrixWorld),e.position.copy(qg),$g.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($g),e.updateMatrixWorld(),Yu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var cd=class extends ld{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vc=class extends kc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new cd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Sd="\\[\\]\\.:\\/",Z1=new RegExp("["+Sd+"]","g"),bd="[^"+Sd+"]",J1="[^"+Sd.replace("\\.","")+"]",K1=/((?:WC+[\/:])*)/.source.replace("WC",bd),Q1=/(WCOD+)?/.source.replace("WCOD",J1),j1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bd),tw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bd),ew=new RegExp("^"+K1+Q1+j1+tw+"$"),nw=["material","materials","bones","map"],hd=class{constructor(t,e,n){let i=n||Be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Be=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Z1,"")}static parseTrackName(t){let e=ew.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);nw.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=hd;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jw=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function v0(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new qn,c=0;for(let h=0;h<r.length;++h){let f=r[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<r.length;++u){let d=r[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=r[u].attributes.position.count}l.setIndex(f)}for(let h in s){let f=x0(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][u]);let g=x0(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function x0(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new Tn(o,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){let _=h.getComponent(u,g);a.setComponent(u+f,g,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var As=(r,t=0,e=1)=>Math.min(e,Math.max(t,r)),Wr=(r,t,e)=>As((r-t)/(e-t)),Za=(r,t,e)=>r+(t-r)*e,Yc=r=>1-Math.pow(1-r,3),rw=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,Bo=r=>r*r*(3-2*r);function zo(r){let t=r%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647)/2147483647}var $n={W:26,D:16,lobbyH:6.2,floorH:3.3,typical:18,phH:3.6,balcony:2.1};$n.levels=1+$n.typical+2;$n.top=$n.lobbyH+$n.typical*$n.floorH+2*$n.phH;function Xt(r,t,e,n,i,s,o){let a=new zn(r,t,e);if(a.translate(n,i,s),o!==void 0){let l=a.attributes.position.count;a.setAttribute("aRand",new ze(new Float32Array(l).fill(o),1))}return a}function $e(r){if(!r.length)return null;let t=v0(r,!1);return r.forEach(e=>e.dispose()),t}function sw(){let r=document.createElement("canvas");r.width=64,r.height=64;let t=r.getContext("2d");t.clearRect(0,0,64,64),t.strokeStyle="#fff",t.lineWidth=7,t.strokeRect(0,0,64,64),t.lineWidth=4,t.beginPath(),t.moveTo(0,0),t.lineTo(64,64),t.moveTo(64,0),t.lineTo(0,64),t.stroke();let e=new Do(r);return e.wrapS=e.wrapT=Ro,e.anisotropy=4,e}function ow(){let r=document.createElement("canvas");r.width=256,r.height=256;let t=r.getContext("2d"),e=zo(7);t.fillStyle="#d9c9ab",t.fillRect(0,0,256,256);let n=4,i=256/n;for(let o=0;o<n;o++){let a=o%2?-40:0;for(;a<256;){let l=70+e()*50,c=200+e()*26;t.fillStyle=`rgb(${c+14},${c},${c-26})`,t.fillRect(a+1,o*i+1,l-2,i-2);for(let h=0;h<60;h++)t.fillStyle=`rgba(120,100,70,${e()*.12})`,t.fillRect(a+e()*l,o*i+e()*i,2,2);a+=l}}t.fillStyle="rgba(150,135,110,.9)";for(let o=0;o<=n;o++)t.fillRect(0,o*i-1,256,2);let s=new Do(r);return s.wrapS=s.wrapT=Ro,s.colorSpace=bn,s.anisotropy=8,s}function aw(r){let n=document.createElement("canvas");n.width=512,n.height=256;let i=n.getContext("2d"),s=zo(r);for(let a=0;a<70;a++){let l=s(),c=512*(.12+.76*s()),h=256*(.55+.2*(s()-.5))-Math.sin(c/512*Math.PI)*256*.18,f=20+s()*70*Math.sin(c/512*Math.PI),u=i.createRadialGradient(c,h,0,c,h,f);u.addColorStop(0,`rgba(255,255,255,${.22+l*.2})`),u.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=u,i.beginPath(),i.arc(c,h,f,0,Math.PI*2),i.fill()}let o=new Do(n);return o.colorSpace=bn,o}function y0(r,t={}){let e=!!t.mobile,n=new Uc({canvas:r,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.capture});n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.6:1.75)),n.toneMapping=fd,n.toneMappingExposure=.5,n.outputColorSpace=bn,n.shadowMap.enabled=!0,n.shadowMap.type=ud;let i=new Ha,s=new Bn(30,1,2,3e4),o={uLights:{value:0},uDusk:{value:0}},a={uTop:{value:new Qt},uMid:{value:new Qt},uHor:{value:new Qt},uHorAway:{value:new Qt},uGlow:{value:new Qt},uSun:{value:new Y(0,.1,1)},uGlowAmt:{value:1}},l=new gi({uniforms:a,side:En,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uHor; uniform vec3 uHorAway; uniform vec3 uGlow; uniform vec3 uSun; uniform float uGlowAmt; varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir);
        float h = d.y;
        vec2 sa = normalize(uSun.xz + 1e-5); vec2 da = normalize(d.xz + 1e-5);
        float toward = dot(sa, da) * 0.5 + 0.5;
        vec3 hor = mix(uHorAway, uHor, pow(toward, 1.6));
        vec3 c = mix(hor, uMid, smoothstep(-0.02, 0.22, h));
        c = mix(c, uTop, smoothstep(0.18, 0.85, h));
        float s = max(dot(d, normalize(uSun)), 0.0);
        c += uGlow * uGlowAmt * (pow(s, 6.0) * 0.35 + pow(s, 60.0) * 0.6 + pow(s, 900.0) * 3.0);
        c = mix(c, hor * 0.9, smoothstep(0.0, -0.08, h));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,toneMapped:!1}),c=new Ee(new Uo(16e3,32,16),l);c.frustumCulled=!1,c.renderOrder=-1,i.add(c);let h={gold:{top:"#5f8fc4",mid:"#b4c3d1",hor:"#f6c99c",away:"#e9d6c6",glow:"#ffb46a"},warm:{top:"#5785bd",mid:"#bcc4cc",hor:"#f7c596",away:"#e7d2c0",glow:"#ffb46a"}},f=new Qt,u=new Qt;function d(lt,I,et,V){return f.set(h[I][lt]),u.set(h[et][lt]),f.lerp(u,V)}let g=new Y,_=-52,m=new Qt("#e9c7a4");i.fog=new Nc(m,160,1350);let p=new Hc("#d4e2f0","#c8b597",.5);i.add(p);let M=new Vc("#ffd2a0",6);M.castShadow=!0,M.shadow.mapSize.set(e?2048:4096,e?2048:4096),M.shadow.radius=3;let S=M.shadow.camera;S.left=-150,S.right=150,S.top=150,S.bottom=-60,S.near=10,S.far=900,M.shadow.bias=-4e-4,M.shadow.normalBias=.6,i.add(M),i.add(M.target);let v=new Lo(n),T=null,A=new Ha,b=new Ee(new Uo(500,32,16),l);A.add(b);let C=new Ee(new Bc(480,24),new bs({color:"#bdb3a4"}));C.rotation.x=-Math.PI/2,C.position.y=-5,A.add(C);function y(){T&&T.dispose(),T=v.fromScene(A,.03),i.environment=T.texture}let x={white:new Ke({color:"#efece6",roughness:.82}),concrete:new Ke({color:"#b7b3ab",roughness:.95}),stone:new Ke({color:"#ffffff",map:ow(),roughness:.9}),dark:new Ke({color:"#2a2e32",roughness:.7}),frame:new Ke({color:"#3b4146",roughness:.45,metalness:.6}),rail:new Ya({color:"#a9c4d2",roughness:.05,metalness:0,transparent:!0,opacity:.32,depthWrite:!1}),glass:new Ya({color:"#93a9ba",roughness:.05,metalness:.82,envMapIntensity:1.6}),wood:new Ke({color:"#9b6b45",roughness:.7}),green:new Ke({color:"#6f8656",roughness:1,flatShading:!0}),crane:new Ke({color:"#f2b327",roughness:.55,metalness:.2}),craneLattice:null,ground:new Ke({color:"#8d8983",roughness:1}),park:new Ke({color:"#b4bd98",roughness:1}),plate:new Ke({color:"#e4ded2",roughness:1}),sand:new Ke({color:"#e2d2b4",roughness:1}),sea:new Ke({color:"#21455f",roughness:.14,metalness:.85,envMapIntensity:1.2}),city:new Ke({color:"#f1ece3",roughness:.92})},L=sw();x.craneLattice=new Ke({color:"#f2b327",roughness:.55,metalness:.2,map:L,alphaTest:.5,side:Ei}),x.glass.onBeforeCompile=lt=>{lt.uniforms.uLights=o.uLights,lt.vertexShader=lt.vertexShader.replace("#include <common>",`#include <common>
attribute float aRand;
varying float vRand;
varying float vLy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRand = aRand;
vLy = position.y;`),lt.fragmentShader=lt.fragmentShader.replace("#include <common>",`#include <common>
uniform float uLights;
varying float vRand;
varying float vLy;`).replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb *= 0.82 + 0.4 * fract(vRand * 5.17);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float on = smoothstep(vRand - 0.05, vRand, uLights) * step(0.28, fract(vRand * 7.31));
        vec3 warm = mix(vec3(1.0, 0.55, 0.22), vec3(1.0, 0.74, 0.45), fract(vRand * 13.7));
        float band = 0.55 + 0.45 * fract(vRand * 3.3);
        float grad = 0.55 + 0.45 * smoothstep(0.0, 2.6, vLy);
        totalEmissiveRadiance += warm * on * 1.15 * band * grad;`)},x.city.onBeforeCompile=lt=>{lt.uniforms.uLights=o.uLights,lt.vertexShader=lt.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
varying vec3 vWN;
varying float vSeed;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 wp4 = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          wp4 = instanceMatrix * wp4;
          vSeed = instanceMatrix[3].x * 0.137 + instanceMatrix[3].z * 0.311;
        #else
          vSeed = 0.0;
        #endif
        wp4 = modelMatrix * wp4;
        vWP = wp4.xyz;
        vWN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * objectNormal);`),lt.fragmentShader=lt.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uLights;
        varying vec3 vWP; varying vec3 vWN; varying float vSeed;
        float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
        float vert = 1.0 - step(0.5, abs(vWN.y));
        vec2 tang = vec2(-vWN.z, vWN.x);
        float along = dot(vWP.xz, tang);
        vec2 cell = vec2(along / 3.1, vWP.y / 3.2);
        vec2 f = fract(cell);
        float win = step(0.18, f.x) * step(f.x, 0.82) * step(0.28, f.y) * step(f.y, 0.86) * vert * step(1.4, vWP.y);
        diffuseColor.rgb *= 1.0 - win * 0.1;
        float rnd = h21(floor(cell) + vSeed);
        float litW = win * step(0.72, rnd) * smoothstep(rnd - 0.6, rnd - 0.3, uLights);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += vec3(1.0, 0.62, 0.3) * litW * 1.1;`)};let D=new Oe;i.add(D);{let lt=new Ee(new Vr(9e3,9e3),x.ground);lt.rotation.x=-Math.PI/2,lt.receiveShadow=!0,D.add(lt);let I=-260,et=new Ee(new Vr(6e3,9e3),x.sea);et.rotation.x=-Math.PI/2,et.position.set(I-3e3-40,.15,0),D.add(et);let V=new Ee(new Vr(60,9e3),x.sand);V.rotation.x=-Math.PI/2,V.position.set(I-10,.1,0),D.add(V);let G=zo(42),tt=54,j=42,Et=[],Gt=[],Zt=[],dt=[],gt=[],It=(N,st,at,ct,vt,qt)=>{let Jt=Math.atan2(N,st)*180/Math.PI,Pt=Math.hypot(N,st);return Jt>=at&&Jt<=ct&&Pt>=vt&&Pt<=qt};for(let N=-17;N<=17;N++)for(let st=-17;st<=17;st++){let at=N*tt,ct=st*tt,vt=Math.hypot(at,ct);if(vt>900||at-j/2<I+20)continue;let qt=N===0&&st===0,Jt=!qt&&(It(at,ct,-62,-8,20,215)||It(at,ct,-75,20,20,80)||vt<260&&G()<.08);if((Jt?Gt:Et).push([at,ct]),vt<560&&gt.push([at+j/2+1.6,ct-9],[at+j/2+1.6,ct+11],[at-9,ct+j/2+1.6]),qt)continue;if(Jt){let de=9+Math.floor(G()*8);for(let pe=0;pe<de;pe++){let ve=at+(G()-.5)*(j-6),ie=ct+(G()-.5)*(j-6),Lt=Math.hypot(ve+52,ie-90),hn=Math.atan2(ve,ie)*180/Math.PI,be=Math.hypot(ve,ie);Lt<75||hn>-52&&hn<2&&be>28&&be<230||dt.push([ve,ie,(2.2+G()*2.4)*(Lt<140?.8:1)])}continue}if(vt<460&&vt>100){let de=2+Math.floor(G()*4);for(let pe=0;pe<de;pe++){let ve=Math.floor(G()*4),ie=(G()-.5)*j*.85,Lt=j/2-2,hn=ve===0?[at+ie,ct+Lt]:ve===1?[at+ie,ct-Lt]:ve===2?[at+Lt,ct+ie]:[at-Lt,ct+ie];dt.push([hn[0],hn[1],2.6+G()*2.4])}}if(vt>380&&G()<.35)continue;let Pt=1+Math.floor(G()*(vt<380?3:2)),se=Math.max(0,1-Math.hypot(at-520,ct+700)/360);for(let de=0;de<Pt;de++){let pe=12+G()*15,ve=10+G()*13,ie;vt<130?ie=5+G()*5:vt<200?ie=6+G()*9:vt<420?ie=8+G()*16+(G()<.12?18:0):ie=10+G()*22+Math.pow(G(),3)*30,se>0&&G()<.65&&(ie+=se*(35+G()*85));let Lt=at+(G()-.5)*(j-pe-6),hn=ct+(G()-.5)*(j-ve-6);Zt.push([Lt,hn,pe,ie,ve])}}{let N=new zn(j,.32,j);N.translate(0,.16,0);let st=new Gr(N,x.park,Gt.length),at=new Ie;Gt.forEach((ct,vt)=>{at.makeTranslation(ct[0],0,ct[1]),st.setMatrixAt(vt,at)}),st.receiveShadow=!0,D.add(st)}let ft=new zn(j,.3,j);ft.translate(0,.15,0);let Nt=new Gr(ft,x.plate,Et.length),pt=new Ie;Et.forEach((N,st)=>{pt.makeTranslation(N[0],0,N[1]),Nt.setMatrixAt(st,pt)}),Nt.receiveShadow=!0,D.add(Nt);let Ct=new zn(1,1,1);Ct.translate(0,.5,0);let Ft=new Gr(Ct,x.city,Zt.length),Wt=new zi;Zt.forEach((N,st)=>{pt.compose(new Y(N[0],.3,N[1]),Wt,new Y(N[2],N[3],N[4])),Ft.setMatrixAt(st,pt)}),Ft.castShadow=!0,Ft.receiveShadow=!0,D.add(Ft);let xe=new ws(1,1),Le=new Gr(xe,x.green,dt.length);dt.forEach((N,st)=>{pt.compose(new Y(N[0],N[2]*.9+.8,N[1]),Wt,new Y(N[2]*.9,N[2],N[2]*.9)),Le.setMatrixAt(st,pt)}),Le.castShadow=!0,D.add(Le);let Me=new Uo(.35,6,4),jt=new bs({color:"#000000",toneMapped:!1}),te=new Gr(Me,jt,gt.length);gt.forEach((N,st)=>{pt.makeTranslation(N[0],6,N[1]),te.setMatrixAt(st,pt)}),D.add(te),D.userData.lamps=te;let Ze=[],Se=j/2-1;Ze.push(Xt(j-2,2.4,.2,0,1.5,Se),Xt(j-2,2.4,.2,0,1.5,-Se)),Ze.push(Xt(.2,2.4,j-2,Se,1.5,0),Xt(.2,2.4,j-2,-Se,1.5,0));let ke=new Ee($e(Ze),new Ke({color:"#4a5660",roughness:.8}));ke.castShadow=!0,ke.receiveShadow=!0,D.add(ke);let E=new Ke({color:"#b9a789",roughness:1}),B=new Ee(new zn(j-.4,.34,j-.4),E);B.position.y=.17,B.receiveShadow=!0,D.add(B);let W=new Oe,$=zo(5);[[-17,15],[-12,17.5],[14,17],[17,12],[17,-6],[-17,-10],[-17,2],[6,17.5]].forEach(([N,st])=>{let at=new Ee(new ws(1,1),x.green),ct=2.4+$()*1.6;at.scale.set(ct,ct*1.15,ct),at.position.set(N,ct+.6,st),at.castShadow=!0,at.userData.s=ct,W.add(at)}),D.add(W),D.userData.site={fence:ke,siteMat:E,land:W}}let O=new Oe;i.add(O);{let lt=zo(11);for(let I=0;I<0;I++){let et=new Ga({map:aw(100+I),color:"#ffe9d6",transparent:!0,opacity:.4,depthWrite:!1,fog:!1}),V=new Fc(et),G=$a.degToRad(-200+lt()*170),tt=2600+lt()*2600;V.position.set(Math.cos(G)*tt,380+lt()*700,Math.sin(G)*tt);let j=1400+lt()*1600;V.scale.set(j,j*.22,1),V.userData.speed=2+lt()*4,O.add(V)}}let z=new Oe;i.add(z);let X=[],{W:F,D:U,floorH:k,balcony:J}=$n,R=F/2,Q=U/2,Rt=zo(2024);function mt(lt,I,et=!0,V=!0){let G=new Ee(lt,I);return G.castShadow=et,G.receiveShadow=V,G}function K(lt,I,et,V,G,tt,j,Et=0){let Gt=Math.max(1,Math.round(I/j)),Zt=I/Gt;for(let dt=0;dt<Gt;dt++){let gt=-I/2+Zt*(dt+.5),It=Rt();et==="x"?lt.push(Xt(Zt-.12,tt,.08,gt,G+tt/2,V,It)):lt.push(Xt(.08,tt,Zt-.12,V,G+tt/2,gt,It))}}function it(lt,I,et={}){let V=new Oe;V.position.y=I;let G=new Oe,tt=new Oe;V.add(G,tt);let j=k,Et=[];Et.push(Xt(F,.32,U,0,.16,0)),Et.push(Xt(F+0,.32,J,0,.16,Q+J/2)),Et.push(Xt(J,.32,U/2+J,-R-J/2,.16,U/4+J/2));let Gt=[],Zt=[-R+.3,-R/3,R/3,R-.3],dt=[-Q+.3,0,Q-.3];Zt.forEach(jt=>dt.forEach(te=>Gt.push(Xt(.55,j-.32,.55,jt,.32+(j-.32)/2,te))));let gt=Xt(6,j-.32,5,0,.32+(j-.32)/2,-1);G.add(mt($e(Et),x.white)),G.add(mt($e(Gt),x.white)),G.add(mt(gt,x.concrete));let It=[],ft=[],Nt=[],pt=[],Ct=.32,Ft=j-.32-.05;K(It,F-.8,"x",Q-.05,Ct,Ft,2.6),K(It,U/2-.4,"z",-R+.05,Ct,Ft,2.4),It.forEach(jt=>jt.translate(0,0,0));{let jt=It.splice(It.length-Math.max(1,Math.round((U/2-.4)/2.4))).map(te=>(te.translate(0,0,U/4),te));It.push(...jt)}ft.push(Xt(.35,Ft,U/2,-R+.12,Ct+Ft/2,-U/4)),It.push(Xt(.1,Ft*.62,1.6,-R-.08,Ct+Ft*.45,-U/4-1.6,Rt())),It.push(Xt(.1,Ft*.62,1.6,-R-.08,Ct+Ft*.45,-U/4+1.8,Rt())),ft.push(Xt(F,Ft,.35,0,Ct+Ft/2,-Q+.12));for(let jt=0;jt<7;jt++){let te=-R+2.2+jt*((F-4.4)/6);It.push(Xt(1.7,Ft*.62,.1,te,Ct+Ft*.45,-Q-.08,Rt()))}ft.push(Xt(.35,Ft,U,R-.12,Ct+Ft/2,0));for(let jt=0;jt<4;jt++){let te=-Q+2.2+jt*((U-4.4)/3);It.push(Xt(.1,Ft*.8,1.1,R+.08,Ct+Ft*.42,te,Rt()))}let Wt=Xt(F-1.2,Ft,U-1.2,0,Ct+Ft/2,0);if(Nt.push(Xt(F,1.05,.04,0,.32+.52,Q+J-.06)),Nt.push(Xt(.04,1.05,U/2+J,-R-J+.06,.32+.52,U/4+J/2)),pt.push(Xt(F,.05,.07,0,.32+1.07,Q+J-.06)),pt.push(Xt(.07,.05,U/2+J,-R-J+.06,.32+1.07,U/4+J/2)),lt%3===0){let jt=Xt(1.2,.6,1.2,-R-J/2,.62,Q+J/2);pt.push(jt);let te=new Ee(new ws(.85,0),x.green);te.position.set(-R-J/2,.32+1.1,Q+J/2),te.castShadow=!0,tt.add(te)}let xe=[];xe.push(Xt(1.1,j,1.1,R+.15,j/2,Q+J-.55)),[-R+F/3,-R+2*F/3].forEach(jt=>xe.push(Xt(.28,j-.32,J+.1,jt,.32+(j-.32)/2,Q+J/2))),xe.push(Xt(F+1.6,.46,.22,.2,.08,Q+J+.05)),xe.push(Xt(.22,.46,U/2+J,-R-J-.05,.08,U/4+J/2)),tt.add(mt($e(xe),x.white));let Le=[Xt(F-.4,.03,J-.3,0,j-.02,Q+J/2-.1)];tt.add(mt($e(Le),x.wood,!1,!0)),tt.add(mt($e(It),x.glass,!1,!0)),tt.add(mt($e(ft),x.stone)),tt.add(mt(Wt,x.dark,!1,!1)),tt.add(mt($e(pt),x.frame));let Me=mt($e(Nt),x.rail,!1,!1);return Me.renderOrder=2,tt.add(Me),z.add(V),{base:V,struct:G,facade:tt,y:I,h:j}}function St(){let lt=new Oe,I=new Oe,et=new Oe;lt.add(I,et);let V=$n.lobbyH,G=[Xt(F+6,.5,U+6,0,.25,0)],tt=[];[-R+.4,-R/3,R/3,R-.4].forEach(Zt=>[-Q+.4,Q-.4].forEach(dt=>tt.push(Xt(.7,V-.5,.7,Zt,.5+(V-.5)/2,dt)))),I.add(mt($e(G),x.white)),I.add(mt($e(tt),x.white)),I.add(mt(Xt(6,V-.5,5,0,.5+(V-.5)/2,-1),x.concrete));let j=[];K(j,F-4,"x",Q-1.6,.5,V-.7,3.2),K(j,U-3,"z",-R+1.6,.5,V-.7,3.2),et.add(mt($e(j),x.glass,!1,!0));let Et=[Xt(F-1,V-.6,.6,0,.5+(V-.6)/2,-Q+.6),Xt(.6,V-.6,U-2,R-.6,.5+(V-.6)/2,-.5)];et.add(mt($e(Et),x.stone)),et.add(mt(Xt(F-4,V-.8,U-4,0,.5+(V-.8)/2,-.4),x.dark,!1,!1));let Gt=[Xt(12,.35,5,-3,V-1.3,Q+1.8)];return et.add(mt($e(Gt),x.white)),z.add(lt),{base:lt,struct:I,facade:et,y:0,h:V}}function ht(lt,I){let et=new Oe;et.position.y=I;let V=new Oe,G=new Oe;et.add(V,G);let tt=$n.phH,j=F-6-lt*3,Et=U-3-lt*1.5,Gt=1.5+lt*1.5,Zt=-1.2-lt*.6;V.add(mt(Xt(F,.35,U+(lt===0?J:0),0,.17,lt===0?J/2:0),x.white));let dt=[];[-j/2+.3,j/2-.3].forEach(pt=>[-Et/2+.3,Et/2-.3].forEach(Ct=>dt.push(Xt(.5,tt-.35,.5,pt+Gt,.35+(tt-.35)/2,Ct+Zt)))),V.add(mt($e(dt),x.white));let gt=[];K(gt,j,"x",Zt+Et/2,.35,tt-.4,2.8),gt.forEach(pt=>pt.translate(Gt,0,0));let It=gt.length;K(gt,Et,"z",Gt-j/2,.35,tt-.4,2.8);for(let pt=It;pt<gt.length;pt++)gt[pt].translate(0,0,Zt);G.add(mt($e(gt),x.glass,!1,!0)),G.add(mt($e([Xt(j,tt-.4,.3,Gt,.35+(tt-.4)/2,Zt-Et/2),Xt(.3,tt-.4,Et,Gt+j/2,.35+(tt-.4)/2,Zt)]),x.stone)),G.add(mt(Xt(j-.6,tt-.5,Et-.6,Gt,.35+(tt-.5)/2,Zt),x.dark,!1,!1));let ft=[Xt(F,1.05,.04,0,.35+.52,(lt===0?Q+J:Q)-.06),Xt(.04,1.05,U,-R+.06,.35+.52,lt===0?J/2:0)],Nt=mt($e(ft),x.rail,!1,!1);if(Nt.renderOrder=2,G.add(Nt),lt===1){let pt=[];for(let Ft=0;Ft<12;Ft++)pt.push(Xt(.12,.25,5.5,-R+1+Ft*.6,tt-.2,Q-3));pt.push(Xt(8,.3,.3,-R+4.3,tt-.45,Q-.4)),pt.push(Xt(.25,tt-.6,.25,-R+.5,(tt-.6)/2+.35,Q-.4)),G.add(mt($e(pt),x.wood));let Ct=[];for(let Ft=0;Ft<5;Ft++){let Wt=new ws(.7+Ft%2*.3,0);Wt.translate(-R+1+Ft*2.2,.35+.8,Q-.9),Ct.push(Wt)}G.add(mt($e(Ct),x.green))}return z.add(et),{base:et,struct:V,facade:G,y:I,h:tt}}X.push(St());let Tt=$n.lobbyH;for(let lt=0;lt<$n.typical;lt++)X.push(it(lt,Tt)),Tt+=k;X.push(ht(0,Tt)),Tt+=$n.phH,X.push(ht(1,Tt)),Tt+=$n.phH;let Dt=new Oe;Dt.position.y=Tt,Dt.add(mt($e([Xt(F-12,.4,U-5,4.5,.2,-2.4),Xt(7,2.6,6,6,1.6,-3)]),x.white)),z.add(Dt);let ee={base:Dt,struct:Dt,facade:null,y:Tt,h:3};X.push(ee);let ne=X.length;{let lt=[];for(let I=0;I<6;I++)for(let et=0;et<4;et++)lt.push(Xt(.9,.6,.9,-R+2+I*((F-4)/5),.3,-Q+2+et*((U-4)/3)));z.add(mt($e(lt),x.concrete))}let zt=new Oe;zt.position.set(R+7.5,0,-Q-3.5),i.add(zt);let kt=x.craneLattice.clone();kt.map=L.clone(),kt.map.needsUpdate=!0;let H=new Ee(new zn(2,1,2),kt);H.geometry.translate(0,.5,0),H.castShadow=!0,zt.add(H),zt.add(mt(Xt(5,1.2,5,0,.6,0),x.concrete));let _e=new Oe;zt.add(_e);{let et=x.craneLattice.clone();et.map=L.clone(),et.map.repeat.set(52/1.8,1),et.map.needsUpdate=!0;let V=new Ee(new zn(52,1.8,1.8),et);V.position.set(-52/2+1,1.2,0),V.castShadow=!0,_e.add(V);let G=x.craneLattice.clone();G.map=L.clone(),G.map.repeat.set(15/1.8,1),G.map.needsUpdate=!0;let tt=new Ee(new zn(15,1.6,1.8),G);tt.position.set(15/2,1.1,0),_e.add(tt),_e.add(mt(Xt(3.4,3,2.4,13,-.4,0),x.concrete)),_e.add(mt(Xt(2.2,2.2,2.2,1.6,-.6,1.6),x.crane));let j=x.craneLattice.clone();j.map=L.clone(),j.map.repeat.set(1,4),j.map.needsUpdate=!0;let Et=new Ee(new zn(1.4,8,1.4),j);Et.position.set(0,6,0),_e.add(Et);let Gt=(It,ft,Nt,pt)=>{let Ct=Math.hypot(Nt-It,pt-ft),Ft=new Xa(.07,.07,Ct,4),Wt=new Ee(Ft,x.frame);Wt.position.set((It+Nt)/2,(ft+pt)/2,0),Wt.rotation.z=Math.atan2(pt-ft,Nt-It)-Math.PI/2,_e.add(Wt)};Gt(0,10,-34,2),Gt(0,10,-14,2),Gt(0,10,14,2);let Zt=new Oe;Zt.position.set(-30,0,0),_e.add(Zt),Zt.add(mt(Xt(1.6,.6,2,0,0,0),x.dark));let dt=new Ee(new Xa(.05,.05,1,4),x.frame);dt.geometry.translate(0,-.5,0),Zt.add(dt);let gt=new Oe;gt.add(mt(Xt(.9,1.1,.9,0,0,0),x.crane)),gt.add(mt(Xt(5.5,.35,.5,0,-2.4,0),x.concrete)),Zt.add(gt),zt.userData={trolley:Zt,cable:dt,hook:gt,jibLen:52}}let Yt=0,q=0,wt=1,oe=1,Ot=new Y,P=new Y,w=null,Z={floorsBuilt:0,level:0,elevation:0,phase:0};function ot(lt){let I=$a.degToRad(90-lt),et=$a.degToRad(_);g.setFromSphericalCoords(1,I,et),a.uSun.value.copy(g),M.position.copy(g).multiplyScalar(500).add(new Y(0,0,0)),M.target.position.set(0,20,0)}let rt=[[0,-32,104,15,13],[.28,-18,124,26,24],[.56,-6,170,46,36],[.78,2,178,72,30],[1,6,186,78,30]],nt=[[0,-26,165,20,31],[.28,-14,190,28,34],[.56,-6,212,44,38],[.78,0,212,74,34],[1,4,222,80,34]];function yt(lt,I){let et=0;for(;et<lt.length-2&&I>lt[et+1][0];)et++;let V=lt[et],G=lt[et+1],tt=rw(As((I-V[0])/(G[0]-V[0])));return[Za(V[1],G[1],tt),Za(V[2],G[2],tt),Za(V[3],G[3],tt),Za(V[4],G[4],tt)]}function xt(lt){let I=Yt,et=Wr(I,0,.58),V=0,G=0;o.uLights.value=0,o.uDusk.value=0;let tt=1.7,j=tt+et*(ne-tt),Et=3.4*(1-Bo(Wr(I,.5,.66))),Gt=j-Et+Wr(I,.58,.66)*1.5;Z.floorsBuilt=j;let Zt=0;for(let B=0;B<ne;B++){let W=X[B],$=As(j-B),N=As(Gt-B);if($<=0){W.base.visible=!1;continue}W.base.visible=!0;let st=Yc($);if(W.struct.position.y=(1-st)*6,W.struct.scale.set(1,Math.max(.001,st),1),W.facade){W.facade.visible=N>0;let at=Yc(N);W.facade.scale.set(1,Math.max(.001,at),1),W.facade.position.y=(1-st)*6}Zt=W.y+W.h*st}let dt=Math.min(ne-2,Math.max(0,Math.floor(j-1)));Z.level=dt,Z.elevation=Math.max(0,Zt-(j>=ne?3:0)),Z.phase=I<.05?0:j<ne-.05?Gt<ne*.5?1:2:I<.68?3:4;let gt=Math.max(34,Zt+14),It=Bo(Wr(I,.6,.72));H.scale.y=gt,H.material.map.repeat.set(1,gt/2),_e.position.y=gt,zt.position.y=-It*(gt+25),zt.visible=It<.999;let ft=zt.userData;_e.rotation.y=.75+Math.sin(lt*.22)*.07+et*2.2,ft.trolley.position.x=-18-16*(.5+.5*Math.sin(lt*.16+et*6));let Nt=10+6*(.5+.5*Math.sin(lt*.28));ft.cable.scale.y=Nt,ft.hook.position.y=-Nt-.6,ft.hook.rotation.y=Math.sin(lt*.4)*.3;let pt=Za(16,10,Bo(Wr(I,0,1)));ot(pt);let Ct=Bo(Wr(I,.15,.95));for(let[B,W]of[[a.uTop,"top"],[a.uMid,"mid"],[a.uHor,"hor"],[a.uHorAway,"away"],[a.uGlow,"glow"]])B.value.copy(d(W,"gold","warm",Ct));a.uGlowAmt.value=1,M.intensity=6.5,M.color.set("#ffdab0").lerp(new Qt("#ffc78f"),Ct),p.intensity=.55,n.toneMappingExposure=.48,i.environmentIntensity=.65,m.copy(a.uHorAway.value).lerp(a.uHor.value,.35).lerp(a.uMid.value,.15),i.fog.color.copy(m),(w===null||Math.abs(I-w)>.045||I>=.999&&w<.999||I<=.001&&w>.001)&&(y(),w=I);let Ft=Bo(Wr(I,.6,.72)),Wt=D.userData.site;Wt.fence.position.y=-Ft*3,Wt.fence.visible=Ft<.99,Wt.siteMat.color.set("#b9a789").lerp(new Qt("#e4ded2"),Ft),Wt.land.children.forEach((B,W)=>{let $=Yc(As(Ft*1.6-W*.07));B.visible=$>.01;let N=B.userData.s*$;B.scale.set(N,N*1.15,N)}),D.userData.lamps.visible=!1;let xe=wt/oe<.9,[Le,Me,jt,te]=yt(xe?nt:rt,I),Ze=Yc(q),Se=$a.degToRad(Le+(1-Ze)*16+Math.sin(lt*.11)*.6),ke=Me+(1-Ze)*60,E=jt+(1-Ze)*30;Ot.set(Math.sin(Se)*ke,E,Math.cos(Se)*ke),P.set(0,te,0),s.position.copy(Ot),s.lookAt(P),ut()}let Mt=0,re=-1;function ut(){let lt=Mt*(1-Bo(Wr(Yt,.02,.2)));Math.abs(lt-re)<5e-4||(re=lt,lt>5e-4?s.setViewOffset(wt,oe,lt*wt,0,wt,oe):s.clearViewOffset(),s.updateProjectionMatrix())}function _t(){wt=r.clientWidth||window.innerWidth,oe=r.clientHeight||window.innerHeight,n.setSize(wt,oe,!1),s.aspect=wt/oe,s.fov=wt/oe<.9?36:28,Mt=wt/oe>1.2?.16:0,ut()}_t(),w=null;let Ht=!1,Vt=0,At=performance.now();function ae(){Ht&&(Vt=requestAnimationFrame(ae),$t())}function $t(lt){let I=lt!==void 0?lt:(performance.now()-At)/1e3;xt(I),n.render(i,s)}return{state:Z,renderer:n,setProgress(lt){Yt=As(lt)},getProgress(){return Yt},setIntro(lt){q=As(lt)},resize:_t,renderNow:$t,start(){Ht||(Ht=!0,ae())},stop(){Ht=!1,cancelAnimationFrame(Vt)},get running(){return Ht}}}var wd="http://www.w3.org/2000/svg";function M0(r){let t=[],e={},n=U=>(e[U]||(e[U]=document.createElementNS(wd,"g"),r.appendChild(e[U])),e[U]);function i(U,k,J="",R="main"){let Q=document.createElementNS(wd,"path");return Q.setAttribute("d",U),J.includes("dash")||Q.setAttribute("pathLength","1"),Q.setAttribute("class","d "+J),Q.style.strokeDasharray=J.includes("dash")?"":"1 1",Q.style.strokeDashoffset="1",n(R).appendChild(Q),t.push({el:Q,step:k,type:J.includes("dash")?"fade":"path"}),J.includes("dash")&&(Q.style.opacity="0"),Q}function s(U,k,J,R,Q="",Rt="middle",mt=0,K="main"){let it=document.createElementNS(wd,"text");return it.textContent=U,it.setAttribute("x",k),it.setAttribute("y",J),it.setAttribute("text-anchor",Rt),Q&&it.setAttribute("class",Q),mt&&it.setAttribute("transform",`rotate(${mt} ${k} ${J})`),n(K).appendChild(it),t.push({el:it,step:R,type:"text"}),it}let o=(U,k,J,R)=>`M${U} ${k}h${J}v${R}h${-J}z`,a=700,l=180,c=420,h=c-l,f=44,u=26,d=18,g=28,_=a-f,m=_-d*u,p=m-g,M=p-g;i(`M40 ${a}H560`,1,"hv");let S="";for(let U=46;U<560;U+=14)S+=`M${U} ${a+2}l-9 11`;i(S,1,"th"),i(`M110 ${a}V${a-26}M490 ${a}V${a-26}`,1,"dash"),i(o(168,a,264,30),1,"dash");let v="";for(let U=0;U<7;U++){let k=186+U*38;v+=`M${k} ${a+30}V${a+96}M${k-6} ${a+96}h12`}i(v,1,""),i(`M110 ${a+116}H490M110 ${a+108}v16M490 ${a+108}v16`,1,"th"),s("42.00",300,a+110,1),s("\u05D2\u05D1\u05D5\u05DC \u05DE\u05D2\u05E8\u05E9",110,a-32,1),s("+0.00",74,a-6,1,"big");let T=["\u05D0","\u05D1","\u05D2","\u05D3"];[l,l+h/3,l+2*h/3,c].forEach((U,k)=>{i(`M${U} 74V${a+100}`,2,"th dash"),i(`M${U} 40a11 11 0 1 0 0.01 0`,2,"th"),s(T[k],U,55,2)}),[[a,null],[_,"+6.20"],[_-9*u,"+35.90"],[m,"+65.60"],[M,"+72.80"]].forEach(([U,k])=>{k&&(i(`M60 ${U}H540`,2,"th dash"),i(`M92 ${U-9}l7 9l7 -9z`,2,""),s(k,74,U-6,2,"big"))}),i(`M${l} ${a}V${m}H${c}V${a}`,2,"hv"),i(`M${l+14} ${m}V${M}H${c-40}V${m}`,2,"hv"),i(o(c-120,M-16,60,16),2,""),i(`M${l-6} ${_}H${c+6}`,3,"hv");let b="";for(let U=0;U<6;U++)b+=o(l+10+U*38,a-38,32,32);i(b,3,"th");for(let U=0;U<d;U++){let k=_-(U+1)*u,J=`M${l-18} ${k}H${c+4}`;J+=`M${l-18} ${k}v8`;for(let R=0;R<9;R++)J+=o(l+6+R*25.8,k+5,21,u-8);i(J,3,U%3===2?"":"th")}i(`M${c} ${_}V${m}M${c+8} ${_}V${m-4}H${c}`,3,"hv");let C="";for(let U=0;U<6;U++)C+=o(l+22+U*30,p+6,24,g-9);for(let U=0;U<5;U++)C+=o(l+26+U*30,M+6,24,g-9);i(C,3,"th");let y=470,x=`M${y-6} ${a}V96M${y+6} ${a}V96`;for(let U=a;U>104;U-=16)x+=`M${y-6} ${U}L${y+6} ${U-16}`;i(x,3,"ac","crane"),i(`M${y+46} 96H236M${y+46} 88H236M${y} 96V62L236 88M${y} 62L${y+46} 88`,3,"ac","crane"),i(`M${y+30} 96v18h16v-18`,3,"ac","crane"),i("M290 96V176M282 176h16M286 176v6h8v-6",3,"ac","crane");let L=(U,k)=>`M${U} ${a}V${a-k*1.2}M${U} ${a-k*1.2-k}a${k} ${k} 0 1 0 0.01 0`;i(L(70,16)+L(128,12)+L(150,18),4,""),i(L(500,14)+L(536,19),4,"");let D=U=>`M${U} ${a}l3 -7l3 7M${U+3} ${a-7}v-6M${U} ${a-11}h6M${U+3} ${a-15}a2 2 0 1 0 0.01 0`;i(D(236)+D(252)+D(330),4,"hv"),i(`M${l-2} ${_-6}H${l+110}`,4,"hv"),i(`M556 ${a}V${M}M550 ${a}h12M550 ${M}h12`,4,"th"),s("72.80",572,(a+M)/2,4,"big","middle",-90),i(o(360,742,200,64)+"M360 766H560M470 742V806",4,"th"),s("\u05E0\u05D3\u05D1\u05DA",515,760,4,"big ac"),s("\u05D7\u05D6\u05D9\u05EA \u05D3\u05E8\u05D5\u05DE\u05D9\u05EA",415,760,4),s("\u05DE\u05D2\u05D3\u05DC\u05D9 \u05D4\u05D7\u05D5\u05E3",460,788,4),s("1:200",515,788,4);let O={};t.forEach(U=>{O[U.step]=(O[U.step]||0)+1});let z={};t.forEach(U=>{U.idx=(z[U.step]=(z[U.step]||0)+1)-1,U.count=O[U.step]});let X=e.crane,F=-1;return function(k){if(Math.abs(k-F)<5e-4)return;F=k;let J=k*4;for(let R of t){let Q=Math.min(1,Math.max(0,J-(R.step-1)+.12)),Rt=R.idx/R.count*.55,mt=Math.min(1,Math.max(0,(Q-Rt)/.45));R.type==="path"?R.el.style.strokeDashoffset=String(1-mt):R.el.style.opacity=String(mt)}X&&(X.style.opacity=String(1-Math.min(1,Math.max(0,(J-3.1)/.5))*.88))}}Ue.registerPlugin(Kt,Wl);Kt.config({ignoreMobileResize:!0});var he=(r,t=document)=>t.querySelector(r),_i=(r,t=document)=>Array.from(t.querySelectorAll(r)),Kc=(r,t=0,e=1)=>Math.min(e,Math.max(t,r)),ur=(r,t,e)=>Kc((r-t)/(e-t)),lw=r=>r*r*(3-2*r),S0=(r,t,e)=>r+(t-r)*e,cw=new URLSearchParams(location.search),jc=cw.has("capture"),xi=matchMedia("(prefers-reduced-motion: reduce)").matches,th=matchMedia("(pointer: coarse)").matches,Cs=()=>window.innerWidth<900,hw=th||Cs(),ko=!1;document.documentElement.classList.remove("no-js");var ai=null;!xi&&!th&&!jc&&(ai=new Vm({lerp:.085,wheelMultiplier:.9}),ai.on("scroll",Kt.update),Ue.ticker.add(r=>ai.raf(r*1e3)),Ue.ticker.lagSmoothing(0),ai.stop());function Ed(r){if(ai)ai.scrollTo(r,{duration:1.6});else{let t=typeof r=="number"?r:r.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:t,behavior:xi?"auto":"smooth"})}}var R0=he(".hero"),b0=he(".hero__canvas"),cn=null;try{cn=y0(b0,{mobile:hw,capture:jc})}catch(r){console.warn("WebGL unavailable",r),b0.remove(),he(".hero__fallback").hidden=!1}var uw=he(".hud"),fw=he(".hud__fill"),dw=he(".hud__marker"),pw=he(".hud__elev"),mw=he(".hud__floor b"),gw=he(".hud__phase"),Zc=he(".hero__copy"),_w=he(".hero__hint"),xw=he(".hero__veil"),w0=he(".hero__since"),fr=he(".nav"),vw=["\u05D9\u05E1\u05D5\u05D3\u05D5\u05EA","\u05E9\u05DC\u05D3","\u05DE\u05E2\u05D8\u05E4\u05EA","\u05D2\u05DE\u05E8 \u05D5\u05DE\u05E1\u05D9\u05E8\u05D4","\u05DE\u05D0\u05D5\u05DB\u05DC\u05E1"],yw=72.8,Ka=0,Rs=0,Qa=!0,Mw=!1,Ps=he(".hero__mask"),qc=he(".m-t",Ps),Sw=he(".m-g",Ps),bw=he(".m-o",Ps),E0=he(".m-g2",Ps),oi={s0:40,O:{x:0,y:0},V:{x:0,y:0},ready:!1};function Pd(){let r=R0.clientWidth,t=window.innerHeight;Ps.setAttribute("viewBox",`0 0 ${r} ${t}`);let e=document.createElement("canvas"),n=e.getContext("2d"),i=200;n.font=`700 ${i}px Karantina`,n.direction="rtl",n.textAlign="center";let s=n.measureText("\u05E0\u05D3\u05D1\u05DA"),o=s.actualBoundingBoxLeft+s.actualBoundingBoxRight,a=s.actualBoundingBoxAscent,l=s.actualBoundingBoxDescent,c=a+l,h=Math.min(r*(r<700?.9:.8)/o,t*(r<700?.42:.6)/c)*i,f=h/i,u=r/2,d=t*.47,g=s.actualBoundingBoxLeft*f,_=s.actualBoundingBoxRight*f,m=u+(g-_)/2,p=d+(a-l)*f/2;qc.setAttribute("font-size",h.toFixed(2)),qc.setAttribute("x",m.toFixed(2)),qc.setAttribute("y",p.toFixed(2)),qc.setAttribute("text-anchor","middle");for(let[O,z]of[["font-size",h.toFixed(2)],["x",m.toFixed(2)],["y",p.toFixed(2)],["text-anchor","middle"]])bw.setAttribute(O,z);let M=.5,S=Math.ceil(r*M),v=Math.ceil(t*M);e.width=S,e.height=v;let T=e.getContext("2d");T.fillStyle="#000",T.fillRect(0,0,S,v),T.fillStyle="#fff",T.font=`700 ${h*M}px Karantina`,T.direction="rtl",T.textAlign="center",T.textBaseline="alphabetic",T.fillText("\u05E0\u05D3\u05D1\u05DA",m*M,p*M);let A=T.getImageData(0,0,S,v).data,b=S*v,C=1e9,y=new Float32Array(b);for(let O=0;O<b;O++)y[O]=A[O*4]>127?C:0;for(let O=0;O<v;O++)for(let z=0;z<S;z++){let X=O*S+z;if(!y[X])continue;let F=y[X];z>0&&(F=Math.min(F,y[X-1]+1)),O>0&&(F=Math.min(F,y[X-S]+1)),z>0&&O>0&&(F=Math.min(F,y[X-S-1]+1.414)),z<S-1&&O>0&&(F=Math.min(F,y[X-S+1]+1.414)),y[X]=F}let x=0,L=0;for(let O=v-1;O>=0;O--)for(let z=S-1;z>=0;z--){let X=O*S+z;if(!y[X])continue;let F=y[X];z<S-1&&(F=Math.min(F,y[X+1]+1)),O<v-1&&(F=Math.min(F,y[X+S]+1)),z<S-1&&O<v-1&&(F=Math.min(F,y[X+S+1]+1.414)),z>0&&O<v-1&&(F=Math.min(F,y[X+S-1]+1.414)),y[X]=F,F>x&&(x=F,L=X)}let D=x/M;oi.O={x:L%S/M,y:Math.floor(L/S)/M},oi.V={x:r/2,y:t/2},oi.s0=D>2?Math.hypot(r,t)/2/D*1.08:60,oi.ready=!0}function ww(r){let t=ur(r,.755,.94);if(t<=0||!oi.ready){Ps.style.visibility="hidden";return}Ps.style.visibility="visible";let e=lw(t),n=Math.exp(Math.log(oi.s0)*(1-e)),i=S0(oi.V.x,oi.O.x,e),s=S0(oi.V.y,oi.O.y,e),o=i-n*oi.O.x,a=s-n*oi.O.y,l=`translate(${o.toFixed(2)} ${a.toFixed(2)}) scale(${n.toFixed(4)})`;Sw.setAttribute("transform",l),E0.setAttribute("transform",l),E0.style.opacity=String(ur(t,.55,1)*.55)}function Ew(r){let t=ur(r,.015,.09);Zc.style.opacity=String(1-t),Zc.style.transform=`translateY(${-t*60}px)`,Zc.style.visibility=t>=1?"hidden":"visible",_w.style.opacity=String(1-ur(r,.005,.03)),xw.style.opacity=String(1-ur(r,.02,.12));let e=ur(r,.04,.09)*(1-ur(r,.7,.76));if(uw.style.opacity=String(e),cn){let n=cn.state,i=Kc(n.elevation/yw);fw.style.height=(i*100).toFixed(2)+"%",dw.style.bottom=(i*100).toFixed(2)+"%",pw.textContent="+"+n.elevation.toFixed(2);let s=Math.min(20,Math.max(0,Math.floor(n.floorsBuilt-1)));mw.textContent=String(s).padStart(2,"0"),gw.textContent=vw[n.phase]}Qa&&!ko&&(fr.dataset.mode="dark"),ww(r),w0.style.opacity=String(ur(r,.92,.985)),w0.style.transform=`translateY(${(1-ur(r,.92,.985))*16}px)`}var Qc=null;cn&&!xi?(Qc=Kt.create({trigger:R0,start:"top top",end:()=>"+="+Math.round(window.innerHeight*(Cs()?4.4:4.8)),pin:!0,anticipatePin:1,onUpdate:r=>{Ka=r.progress},onToggle:r=>{Qa=r.isActive||r.progress<1},onLeave:()=>{Qa=!1},onEnterBack:()=>{Qa=!0}}),Ue.ticker.add(()=>{let r=jc?1:th?.14:.2;Rs+=(Ka-Rs)*r,Math.abs(Ka-Rs)<5e-5&&(Rs=Ka),cn.setProgress(Rs),(Qa||Qc.progress<1)&&!document.hidden&&cn.renderNow(),Ew(Rs)})):cn&&(cn.setIntro(1),cn.setProgress(.62),cn.renderNow(1),Zc.style.opacity="1");function Tw(){let r=Ue.timeline({defaults:{ease:"expo.out"}}),t=_i(".loader__word span");r.fromTo(t,{clipPath:"inset(100% 0% 0% 0%)",yPercent:18},{clipPath:"inset(0% 0% 0% 0%)",yPercent:0,duration:.9,stagger:.07},0);let e=he(".loader__bar i"),n=Promise.all([document.fonts?document.fonts.load("700 100px Karantina","\u05E0\u05D3\u05D1\u05DA"):Promise.resolve(),document.fonts?document.fonts.ready:Promise.resolve(),new Promise(i=>setTimeout(i,700))]);r.to(e,{scaleX:.7,duration:1.1,ease:"power2.out"},.1),n.then(()=>{Pd(),cn&&cn.renderNow(0);let i=Ue.timeline({defaults:{ease:"expo.inOut"}});i.to(e,{scaleX:1,duration:.4,ease:"power2.out"},Math.max(0,1.05-r.time())),i.fromTo(t,{clipPath:"inset(0% 0% 0% 0%)"},{clipPath:"inset(0% 0% 100% 0%)",yPercent:-12,duration:.8,stagger:.05,immediateRender:!1},">-0.05"),i.fromTo(".loader",{clipPath:"inset(0% 0% 0% 0%)"},{clipPath:"inset(0% 0% 100% 0%)",duration:1,immediateRender:!1},"<0.25"),i.add(()=>{document.body.classList.remove("is-loading"),he(".loader").style.display="none",ai&&ai.start(),Kt.refresh()});let s={v:0};i.to(s,{v:1,duration:2.8,ease:"power3.out",onUpdate:()=>cn&&cn.setIntro(s.v)},"<0.1"),i.from(".hero__title .ln > span",{yPercent:105,duration:1.3,stagger:.09,ease:"expo.out"},"<0.25"),i.from([".hero__lead",".hero__actions"],{opacity:0,y:24,duration:1.1,stagger:.08,ease:"expo.out"},"<0.35"),i.from(".nav",{opacity:0,duration:1,ease:"power2.out"},"<"),i.from(".hero__hint",{opacity:0,duration:.8},"<0.4"),i.add(()=>{Mw=!0,_i('img[loading="lazy"]').forEach(o=>{o.loading="eager"})})})}xi||jc?(document.body.classList.remove("is-loading"),he(".loader").style.display="none",cn&&cn.setIntro(1),(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>{Pd(),Kt.refresh()})):Tw();(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>{let r=new Wl(".manifesto__text",{type:"words",wordsClass:"w"});xi||Ue.to(r.words,{color:"#1c2125",stagger:.12,ease:"none",scrollTrigger:{trigger:".manifesto",start:"top 72%",end:"bottom 62%",scrub:.6}})});if(!xi){let r=Ue.timeline({scrollTrigger:{trigger:".expand",start:"top top",end:()=>"+="+Math.round(window.innerHeight*1.7),pin:!0,scrub:.7,anticipatePin:1}});r.fromTo(".expand__media",{clipPath:()=>Cs()?"inset(26% 16% 26% 16%)":"inset(22% 30% 22% 30%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1,ease:"power2.inOut"},0).to(".expand__media img",{scale:1,duration:1,ease:"power2.inOut"},0),_i(".lvl").forEach((t,e)=>{r.to(he(".lvl__line",t),{scaleX:1,duration:.45,ease:"power2.out"},.9+e*.22).to(he(".lvl__tag",t),{opacity:1,y:0,duration:.35,ease:"power2.out"},1+e*.22)}),r.to(".expand__caption",{opacity:1,duration:.3},1.6),r.to({},{duration:.35}),Ue.set(".lvl__tag",{y:14})}var Rd=he(".projects__track"),Td=_i(".proj",Rd);if(xi)Td.forEach(r=>r.classList.add("is-seen"));else{let r=()=>Math.max(0,Rd.scrollWidth-window.innerWidth),t=Ue.to(Rd,{x:()=>r(),ease:"none",scrollTrigger:{trigger:".projects",start:"top top",end:()=>"+="+Math.round(r()*(Cs()?1.1:1)+window.innerHeight*.3),pin:!0,scrub:.8,anticipatePin:1,invalidateOnRefresh:!0,onUpdate:e=>Ue.set(".projects__bar i",{scaleX:e.progress})}});Td.forEach(e=>{let n=he(".proj__media img",e);n&&Ue.fromTo(n,{xPercent:7},{xPercent:-7,ease:"none",scrollTrigger:{trigger:e,containerAnimation:t,start:"left right",end:"right left",scrub:!0}}),Kt.create({trigger:e,containerAnimation:t,start:"left 85%",onEnter:()=>e.classList.add("is-seen")})}),Kt.create({trigger:".projects",start:"top 60%",onEnter:()=>Td.slice(0,Cs()?1:3).forEach(e=>e.classList.add("is-seen"))})}if(!xi){let r=_i(".col");if(Cs())r.forEach(t=>{Ue.timeline({scrollTrigger:{trigger:t,start:"top 88%",end:"top 45%",scrub:.6}}).fromTo(he(".col__img",t),{clipPath:"inset(100% 0% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",ease:"power3.out"},0).fromTo(he(".col__img img",t),{yPercent:-10},{yPercent:0,ease:"power2.out"},0)});else{let t=Ue.timeline({scrollTrigger:{trigger:".layers__cols",start:"top 82%",end:"bottom 70%",scrub:.8}});r.forEach((e,n)=>{let i=[2,1,3,0,4][n];t.fromTo(he(".col__img",e),{clipPath:"inset(100% 0% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1,ease:"power3.out"},i*.18).fromTo(he(".col__img img",e),{yPercent:-10},{yPercent:0,duration:1.2,ease:"power2.out"},i*.18).from([he("h3",e),he("p",e)],{opacity:0,y:14,duration:.5,stagger:.1},i*.18+.5)})}}var T0=M0(he(".bp")),Jc=_i(".step"),Aw=_i(".process__dots i"),$c=0;Ue.set(Jc.slice(1),{autoAlpha:0});function Rw(r){if(r===$c)return;let t=Jc[$c],e=Jc[r],n=r>$c?1:-1;Ue.to(t,{autoAlpha:0,y:-24*n,duration:.45,ease:"power2.in",overwrite:!0}),Ue.fromTo(e,{autoAlpha:0,y:28*n},{autoAlpha:1,y:0,duration:.7,delay:.2,ease:"expo.out",overwrite:!0}),Jc.forEach((i,s)=>i.classList.toggle("is-active",s===r)),$c=r}xi?T0(1):Kt.create({trigger:".process",start:"top top",end:()=>"+="+Math.round(window.innerHeight*3.2),pin:!0,anticipatePin:1,scrub:!0,onUpdate:r=>{let t=r.progress;T0(Kc(t*1.04)),Rw(Math.min(3,Math.floor(t*4*.999))),Aw.forEach((e,n)=>e.style.setProperty("--p",Kc(t*4-n).toFixed(3)))}});var C0=_i(".svc__row");(th||Cs())&&C0.forEach(r=>Kt.create({trigger:r,start:"top 58%",end:"bottom 42%",toggleClass:"is-on"}));xi||Ue.from(".svc__row",{opacity:0,y:40,stagger:.08,duration:1,ease:"expo.out",scrollTrigger:{trigger:".svc",start:"top 80%"}});C0.forEach(r=>{let t=he("a",r);t.addEventListener("click",()=>{let e=t.dataset.interest,n=he(`.chips input[value="${e}"]`);n&&(n.checked=!0)})});xi||Ue.fromTo(".contact__bg img",{yPercent:-12},{yPercent:0,ease:"none",scrollTrigger:{trigger:".contact",start:"top bottom",end:"bottom top",scrub:!0}});var hr=he(".form");hr.addEventListener("submit",r=>{r.preventDefault();let t=hr.name.value.trim(),e=hr.phone.value.replace(/[^\d]/g,""),n=he(".form__error",hr);_i(".field",hr).forEach(o=>o.classList.remove("is-bad"));let i=[];if(t.length<2&&i.push(hr.name),/^0\d{8,9}$/.test(e)||i.push(hr.phone),i.length){i.forEach(o=>o.closest(".field").classList.add("is-bad")),n.textContent=i.length===2?"\u05D7\u05E1\u05E8\u05D9\u05DD \u05E9\u05DD \u05D5\u05D8\u05DC\u05E4\u05D5\u05DF. \u05D1\u05DC\u05E2\u05D3\u05D9\u05D4\u05DD \u05DC\u05D0 \u05E0\u05D5\u05DB\u05DC \u05DC\u05D7\u05D6\u05D5\u05E8 \u05D0\u05DC\u05D9\u05DB\u05DD.":i[0]===hr.name?"\u05D7\u05E1\u05E8 \u05E9\u05DD \u05DE\u05DC\u05D0.":"\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF. \u05DB\u05EA\u05D1\u05D5 \u05D0\u05D5\u05EA\u05D5 \u05E2\u05DD \u05E7\u05D9\u05D3\u05D5\u05DE\u05EA, \u05DC\u05DE\u05E9\u05DC 050-1234567.",n.hidden=!1,i[0].focus();return}n.hidden=!0;let s=he(".form__done",hr);s.hidden=!1,Ue.fromTo(s,{clipPath:"inset(100% 0% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:.9,ease:"expo.inOut"})});xi||Ue.fromTo(".foot__word span",{clipPath:"inset(100% 0% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",stagger:.12,ease:"power3.out",scrollTrigger:{trigger:".foot",start:"top 85%",end:"bottom bottom",scrub:.6}});_i("[data-nav]").forEach(r=>{Kt.create({trigger:r,start:"top 40px",end:"bottom 40px",onToggle:t=>{t.isActive&&!ko&&(fr.dataset.mode=r.dataset.nav)}})});var Ad=0;Kt.create({start:0,end:"max",onUpdate:r=>{let t=r.scroll(),e=Qc?t<Qc.end-10:t<window.innerHeight;!e&&t>Ad+4&&t>200?fr.classList.add("is-hidden"):(t<Ad-4||e)&&fr.classList.remove("is-hidden"),Ad=t}});var Ja=he("#menu"),Cd=he(".nav__menu");function Id(r){ko=r,Cd.setAttribute("aria-expanded",String(r)),Cd.textContent=r?"\u05E1\u05D2\u05D9\u05E8\u05D4":"\u05EA\u05E4\u05E8\u05D9\u05D8",r?(Ja.hidden=!1,fr.dataset.prev=fr.dataset.mode,fr.dataset.mode="light",ai&&ai.stop(),Ue.fromTo(Ja,{clipPath:"inset(0% 0% 100% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:.8,ease:"expo.inOut"}),Ue.from(_i("nav a",Ja),{yPercent:60,opacity:0,stagger:.06,duration:.8,delay:.3,ease:"expo.out"})):(ai&&ai.start(),fr.dataset.mode=fr.dataset.prev||"dark",Ue.fromTo(Ja,{clipPath:"inset(0% 0% 0% 0%)"},{clipPath:"inset(0% 0% 100% 0%)",duration:.6,ease:"expo.inOut",onComplete:()=>{Ja.hidden=!0}}))}Cd.addEventListener("click",()=>Id(!ko));document.addEventListener("keydown",r=>{r.key==="Escape"&&ko&&Id(!1)});_i('a[href^="#"]').forEach(r=>{r.addEventListener("click",t=>{let e=r.getAttribute("href");if(e.length<2)return;let n=he(e);n&&(t.preventDefault(),ko&&Id(!1),Ed(e==="#top"?0:n))})});var A0;window.addEventListener("resize",()=>{clearTimeout(A0),A0=setTimeout(()=>{cn&&cn.resize(),oi.ready&&Pd()},150)});window.__site={setHero:r=>{Ka=r,Rs=r},ST:Kt,lenis:ai};
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

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
