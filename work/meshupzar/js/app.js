(()=>{var G_=Object.defineProperty;var V_=(s,t,e)=>t in s?G_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Wt=(s,t,e)=>V_(s,typeof t!="symbol"?t+"":t,e);var hm=0,Tf=1,um=2;var Ya=1,fm=2,Ro=3,tr=0,Tn=1,es=2,Rr=0,Co=1,wf=2,Ef=3,Af=4,dm=5;var Cr=100,pm=101,mm=102,gm=103,_m=104,xm=200,vm=201,ym=202,Sm=203,Rf=204,Cf=205,Mm=206,bm=207,Tm=208,wm=209,Em=210,Am=211,Rm=212,Cm=213,Pm=214,_c=0,xc=1,vc=2,_o=3,yc=4,Sc=5,Mc=6,bc=7,th=0,Im=1,Lm=2,ns=0,Pf=1,If=2,Lf=3,Za=4,Df=5,Nf=6,Of=7;var Uf=300,Pr=301,Po=302,eh=303,nh=304,Tc=1e3,$i=1001,wc=1002,xn=1003,Dm=1004;var Ja=1005;var Vn=1006,ih=1007;var Ts=1008;var jn=1009,Ff=1010,Bf=1011,Io=1012,sh=1013,Vi=1014,Ai=1015,Hi=1016,rh=1017,oh=1018,Ir=1020,zf=35902,kf=35899,Gf=1021,Vf=1022,Wi=1023,ys=1026,ws=1027,ah=1028,lh=1029,er=1030,ch=1031;var hh=1033,$a=33776,Ka=33777,Qa=33778,ja=33779,uh=35840,fh=35841,dh=35842,ph=35843,mh=36196,gh=37492,_h=37496,xh=37488,vh=37489,tl=37490,yh=37491,Sh=37808,Mh=37809,bh=37810,Th=37811,wh=37812,Eh=37813,Ah=37814,Rh=37815,Ch=37816,Ph=37817,Ih=37818,Lh=37819,Dh=37820,Nh=37821,Oh=36492,Uh=36494,Fh=36495,Bh=36283,zh=36284,el=36285,kh=36286;var ga=2300,Ec=2301,mc=2302,df=2303,pf=2400,mf=2401,gf=2402;var Nm=3200;var nl=0,Om=1,Es="",hi="srgb",_a="srgb-linear",xa="linear",Se="srgb";var gc=7680;var Um=519,Fm=512,Bm=513,zm=514,Hf=515,km=516,Gm=517,Wf=518,Xf=519,Vm=35044;var qf="300 es",wi=2e3,xo=2001;function H_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function W_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function va(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hm(){let s=va("canvas");return s.style.display="block",s}var Dp={},vo=null;function Yf(...s){let t="THREE."+s.shift();vo?vo("log",t,...s):console.log(t,...s)}function Wm(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Zt(...s){s=Wm(s);let t="THREE."+s.shift();if(vo)vo("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function $t(...s){s=Wm(s);let t="THREE."+s.shift();if(vo)vo("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function da(...s){let t=s.join(" ");t in Dp||(Dp[t]=!0,Zt(...s))}function Xm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var qm={[_c]:_c,[vc]:Mc,[yc]:yc,[_o]:Sc,[xc]:xc,[Mc]:vc,[bc]:bc,[Sc]:_o},Ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Gu=Math.PI/180,Ac=180/Math.PI;function Lo(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function ue(s,t,e){return Math.max(t,Math.min(e,s))}function X_(s,t){return(s%t+t)%t}function Vu(s,t,e){return(1-e)*s+e*t}function Ym(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function q_(s,t){if(t.constructor===Float32Array)return s;let e=Zf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Y_(s,t){if(t.constructor===Float32Array)return s;let e=Zf(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var td=class td{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};td.prototype.isVector2=!0;var Tt=td,Qi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*x;m<0&&(f=-f,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);g=Math.sin(g*y)/M,a=Math.sin(a*y)/M,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*u-c*f,t[e+1]=l*p+h*f+c*d-a*u,t[e+2]=c*p+h*u+a*f-l*d,t[e+3]=h*p-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ed=class ed{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Np.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Np.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hu.copy(this).projectOnVector(t),this.sub(Hu)}reflect(t){return this.sub(Hu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ed.prototype.isVector3=!0;var z=ed,Hu=new z,Np=new Qi,nd=class nd{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],x=i[0],m=i[3],g=i[6],y=i[1],M=i[4],v=i[7],T=i[2],E=i[5],_=i[8];return r[0]=o*x+a*y+l*T,r[3]=o*m+a*M+l*E,r[6]=o*g+a*v+l*_,r[1]=c*x+h*y+d*T,r[4]=c*m+h*M+d*E,r[7]=c*g+h*v+d*_,r[2]=f*x+u*y+p*T,r[5]=f*m+u*M+p*E,r[8]=f*g+u*v+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=e*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=u*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return da("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wu.makeScale(t,e)),this}rotate(t){return da("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wu.makeRotation(-t)),this}translate(t,e){return da("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nd.prototype.isMatrix3=!0;var jt=nd,Wu=new jt,Op=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Up=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Z_(){let s={enabled:!0,workingColorSpace:_a,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(i.r=go(i.r),i.g=go(i.g),i.b=go(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Es?xa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[_a]:{primaries:t,whitePoint:n,transfer:xa,toXYZ:Op,fromXYZ:Up,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Op,fromXYZ:Up,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}var pe=Z_();function vs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function go(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var eo,Rc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{eo===void 0&&(eo=va("canvas")),eo.width=t.width,eo.height=t.height;let i=eo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=eo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=va("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=vs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vs(e[n]/255)*255):e[n]=vs(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},J_=0,yo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Lo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Xu(i[o].image)):r.push(Xu(i[o]))}else r=Xu(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xu(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Rc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var $_=0,qu=new z,Qn=class s extends Ki{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=$i,i=$i,r=Vn,o=Ts,a=Wi,l=jn,c=s.DEFAULT_ANISOTROPY,h=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Lo(),this.name="",this.source=new yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(qu).x}get height(){return this.source.getSize(qu).y}get depth(){return this.source.getSize(qu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tc:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tc:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Uf;Qn.DEFAULT_ANISOTROPY=1;var id=class id{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(u+1)/2,T=(g+1)/2,E=(h+f)/4,_=(d+x)/4,S=(p+m)/4;return M>v&&M>T?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=_/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=S/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=_/r,i=S/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};id.prototype.isVector4=!0;var Ue=id,Cc=class extends Ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Qn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new yo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fi=class extends Cc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ya=class extends Qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pc=class extends Qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var jc=class jc{constructor(t,e,n,i,r,o,a,l,c,h,d,f,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,x,m)}set(t,e,n,i,r,o,a,l,c,h,d,f,u,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/no.setFromMatrixColumn(t,0).length(),r=1/no.setFromMatrixColumn(t,1).length(),o=1/no.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,p=c*h,x=c*d;e[0]=f+x*a,e[4]=p*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,p=c*h,x=c*d;e[0]=f-x*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-u,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=u*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+p,e[10]=f-x*d}else if(t.order==="XZY"){let f=o*l,u=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(K_,t,Q_)}lookAt(t,e,n){let i=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),ks.crossVectors(n,li),ks.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ks.crossVectors(n,li)),ks.normalize(),ql.crossVectors(li,ks),i[0]=ks.x,i[4]=ql.x,i[8]=li.x,i[1]=ks.y,i[5]=ql.y,i[9]=li.y,i[2]=ks.z,i[6]=ql.z,i[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],M=n[7],v=n[11],T=n[15],E=i[0],_=i[4],S=i[8],C=i[12],A=i[1],L=i[5],D=i[9],G=i[13],I=i[2],k=i[6],V=i[10],F=i[14],Q=i[3],X=i[7],P=i[11],j=i[15];return r[0]=o*E+a*A+l*I+c*Q,r[4]=o*_+a*L+l*k+c*X,r[8]=o*S+a*D+l*V+c*P,r[12]=o*C+a*G+l*F+c*j,r[1]=h*E+d*A+f*I+u*Q,r[5]=h*_+d*L+f*k+u*X,r[9]=h*S+d*D+f*V+u*P,r[13]=h*C+d*G+f*F+u*j,r[2]=p*E+x*A+m*I+g*Q,r[6]=p*_+x*L+m*k+g*X,r[10]=p*S+x*D+m*V+g*P,r[14]=p*C+x*G+m*F+g*j,r[3]=y*E+M*A+v*I+T*Q,r[7]=y*_+M*L+v*k+T*X,r[11]=y*S+M*D+v*V+T*P,r[15]=y*C+M*G+v*F+T*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],x=t[7],m=t[11],g=t[15],y=l*u-c*f,M=a*u-c*d,v=a*f-l*d,T=o*u-c*h,E=o*f-l*h,_=o*d-a*h;return e*(x*y-m*M+g*v)-n*(p*y-m*T+g*E)+i*(p*M-x*T+g*_)-r*(p*v-x*E+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=e*a-n*o,M=e*l-i*o,v=e*c-r*o,T=n*l-i*a,E=n*c-r*a,_=i*c-r*l,S=h*x-d*p,C=h*m-f*p,A=h*g-u*p,L=d*m-f*x,D=d*g-u*x,G=f*g-u*m,I=y*G-M*D+v*L+T*A-E*C+_*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return t[0]=(a*G-l*D+c*L)*k,t[1]=(i*D-n*G-r*L)*k,t[2]=(x*_-m*E+g*T)*k,t[3]=(f*E-d*_-u*T)*k,t[4]=(l*A-o*G-c*C)*k,t[5]=(e*G-i*A+r*C)*k,t[6]=(m*v-p*_-g*M)*k,t[7]=(h*_-f*v+u*M)*k,t[8]=(o*D-a*A+c*S)*k,t[9]=(n*A-e*D-r*S)*k,t[10]=(p*E-x*v+g*y)*k,t[11]=(d*v-h*E-u*y)*k,t[12]=(a*C-o*L-l*S)*k,t[13]=(e*L-n*C+i*S)*k,t[14]=(x*M-p*T-m*y)*k,t[15]=(h*T-d*M+f*y)*k,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,x=o*h,m=o*d,g=a*d,y=l*c,M=l*h,v=l*d,T=n.x,E=n.y,_=n.z;return i[0]=(1-(x+g))*T,i[1]=(u+v)*T,i[2]=(p-M)*T,i[3]=0,i[4]=(u-v)*E,i[5]=(1-(f+g))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(p+M)*_,i[9]=(m-y)*_,i[10]=(1-(f+x))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=no.set(i[0],i[1],i[2]).length(),a=no.set(i[4],i[5],i[6]).length(),l=no.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Fi.copy(this);let c=1/o,h=1/a,d=1/l;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=d,Fi.elements[9]*=d,Fi.elements[10]*=d,e.setFromRotationMatrix(Fi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=wi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===wi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===xo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=wi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===wi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===xo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};jc.prototype.isMatrix4=!0;var Te=jc,no=new z,Fi=new Te,K_=new z(0,0,0),Q_=new z(1,1,1),ks=new z,ql=new z,li=new z,Fp=new Te,Bp=new Qi,ji=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ji.DEFAULT_ORDER="XYZ";var Sa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},j_=0,zp=new z,io=new Qi,ps=new Te,Yl=new z,oa=new z,tx=new z,ex=new Qi,kp=new z(1,0,0),Gp=new z(0,1,0),Vp=new z(0,0,1),Hp={type:"added"},nx={type:"removed"},so={type:"childadded",child:null},Yu={type:"childremoved",child:null},sn=class s extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new z,e=new ji,n=new Qi,i=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new jt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return io.setFromAxisAngle(t,e),this.quaternion.multiply(io),this}rotateOnWorldAxis(t,e){return io.setFromAxisAngle(t,e),this.quaternion.premultiply(io),this}rotateX(t){return this.rotateOnAxis(kp,t)}rotateY(t){return this.rotateOnAxis(Gp,t)}rotateZ(t){return this.rotateOnAxis(Vp,t)}translateOnAxis(t,e){return zp.copy(t).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kp,t)}translateY(t){return this.translateOnAxis(Gp,t)}translateZ(t){return this.translateOnAxis(Vp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yl.copy(t):Yl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt(oa,Yl,this.up):ps.lookAt(Yl,oa,this.up),this.quaternion.setFromRotationMatrix(ps),i&&(ps.extractRotation(i.matrixWorld),io.setFromRotationMatrix(ps),this.quaternion.premultiply(io.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hp),so.child=t,this.dispatchEvent(so),so.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nx),Yu.child=t,this.dispatchEvent(Yu),Yu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ps.multiply(t.parent.matrixWorld)),t.applyMatrix4(ps),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hp),so.child=t,this.dispatchEvent(so),so.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,t,tx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,ex,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new z(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ix={type:"move"},So=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ix)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gs={h:0,s:0,l:0},Zl={h:0,s:0,l:0};function Zu(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ae=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=X_(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zu(o,r,t+1/3),this.g=Zu(o,r,t),this.b=Zu(o,r,t-1/3)}return pe.colorSpaceToWorking(this,i),this}setStyle(t,e=hi){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hi){let n=Zm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}copyLinearToSRGB(t){return this.r=go(t.r),this.g=go(t.g),this.b=go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return pe.workingToColorSpace(Ln.copy(this),t),Math.round(ue(Ln.r*255,0,255))*65536+Math.round(ue(Ln.g*255,0,255))*256+Math.round(ue(Ln.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(Ln.copy(this),e);let n=Ln.r,i=Ln.g,r=Ln.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=hi){pe.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,i=Ln.b;return t!==hi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Gs),this.setHSL(Gs.h+t,Gs.s+e,Gs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gs),t.getHSL(Zl);let n=Vu(Gs.h,Zl.h,e),i=Vu(Gs.s,Zl.s,e),r=Vu(Gs.l,Zl.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new ae;ae.NAMES=Zm;var Tr=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bi=new z,ms=new z,Ju=new z,gs=new z,ro=new z,oo=new z,Wp=new z,$u=new z,Ku=new z,Qu=new z,ju=new Ue,tf=new Ue,ef=new Ue,Xs=class s{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Bi.subVectors(t,e),i.cross(Bi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Bi.subVectors(i,e),ms.subVectors(n,e),Ju.subVectors(t,e);let o=Bi.dot(Bi),a=Bi.dot(ms),l=Bi.dot(Ju),c=ms.dot(ms),h=ms.dot(Ju),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,gs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gs.x),l.addScaledVector(o,gs.y),l.addScaledVector(a,gs.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ju.setScalar(0),tf.setScalar(0),ef.setScalar(0),ju.fromBufferAttribute(t,e),tf.fromBufferAttribute(t,n),ef.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ju,r.x),o.addScaledVector(tf,r.y),o.addScaledVector(ef,r.z),o}static isFrontFacing(t,e,n,i){return Bi.subVectors(n,e),ms.subVectors(t,e),Bi.cross(ms).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),Bi.cross(ms).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;ro.subVectors(i,n),oo.subVectors(r,n),$u.subVectors(t,n);let l=ro.dot($u),c=oo.dot($u);if(l<=0&&c<=0)return e.copy(n);Ku.subVectors(t,i);let h=ro.dot(Ku),d=oo.dot(Ku);if(h>=0&&d<=h)return e.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(ro,o);Qu.subVectors(t,r);let u=ro.dot(Qu),p=oo.dot(Qu);if(p>=0&&u<=p)return e.copy(r);let x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(oo,a);let m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return Wp.subVectors(r,i),a=(d-h)/(d-h+(u-p)),e.copy(i).addScaledVector(Wp,a);let g=1/(m+x+f);return o=x*g,a=f*g,e.copy(n).addScaledVector(ro,o).addScaledVector(oo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ei=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zi):zi.fromBufferAttribute(r,o),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jl.copy(n.boundingBox)),Jl.applyMatrix4(t.matrixWorld),this.union(Jl)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(aa),$l.subVectors(this.max,aa),ao.subVectors(t.a,aa),lo.subVectors(t.b,aa),co.subVectors(t.c,aa),Vs.subVectors(lo,ao),Hs.subVectors(co,lo),vr.subVectors(ao,co);let e=[0,-Vs.z,Vs.y,0,-Hs.z,Hs.y,0,-vr.z,vr.y,Vs.z,0,-Vs.x,Hs.z,0,-Hs.x,vr.z,0,-vr.x,-Vs.y,Vs.x,0,-Hs.y,Hs.x,0,-vr.y,vr.x,0];return!nf(e,ao,lo,co,$l)||(e=[1,0,0,0,1,0,0,0,1],!nf(e,ao,lo,co,$l))?!1:(Kl.crossVectors(Vs,Hs),e=[Kl.x,Kl.y,Kl.z],nf(e,ao,lo,co,$l))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_s),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_s=[new z,new z,new z,new z,new z,new z,new z,new z],zi=new z,Jl=new Ei,ao=new z,lo=new z,co=new z,Vs=new z,Hs=new z,vr=new z,aa=new z,$l=new z,Kl=new z,yr=new z;function nf(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){yr.fromArray(s,r);let a=i.x*Math.abs(yr.x)+i.y*Math.abs(yr.y)+i.z*Math.abs(yr.z),l=t.dot(yr),c=e.dot(yr),h=n.dot(yr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var nn=new z,Ql=new Tt,sx=0,Gi=class extends Ki{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vm,this.updateRanges=[],this.gpuType=Ai,this.version=0,this._normalizationScale=t!==void 0?Zf(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ql.fromBufferAttribute(this,e),Ql.applyMatrix3(t),this.setXY(e,Ql.x,Ql.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):q_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Y_(t,this.array)}};var Ma=class extends Gi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ba=class extends Gi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ie=class extends Gi{constructor(t,e,n){super(new Float32Array(t),e,n)}},rx=new Ei,la=new z,sf=new z,qs=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):rx.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;la.subVectors(t,this.center);let e=la.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(la,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(la.copy(t.center).add(sf)),this.expandByPoint(la.copy(t.center).sub(sf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ox=0,Ti=new Te,rf=new sn,ho=new z,ci=new Ei,ca=new Ei,_n=new z,di=class s extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(H_(t)?ba:Ma)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,e,n){return Ti.makeTranslation(t,e,n),this.applyMatrix4(Ti),this}scale(t,e,n){return Ti.makeScale(t,e,n),this.applyMatrix4(Ti),this}lookAt(t){return rf.lookAt(t),rf.updateMatrix(),this.applyMatrix4(rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ie(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ca.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(ci.min,ca.min),ci.expandByPoint(_n),_n.addVectors(ci.max,ca.max),ci.expandByPoint(_n)):(ci.expandByPoint(ca.min),ci.expandByPoint(ca.max))}ci.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)_n.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(_n));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_n.fromBufferAttribute(a,c),l&&(ho.fromBufferAttribute(t,c),_n.add(ho)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Gi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new z,l[C]=new z;let h=new z,d=new z,f=new z,u=new Tt,p=new Tt,x=new Tt,m=new z,g=new z;function y(C,A,L){c[C]=c[A]=c[L]=1,h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,A),f.fromBufferAttribute(n,L),u.fromBufferAttribute(r,C),p.fromBufferAttribute(r,A),x.fromBufferAttribute(r,L),d.sub(h),f.sub(h),p.sub(u),x.sub(u);let D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(D),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(D),a[C].add(m),a[A].add(m),a[L].add(m),l[C].add(g),l[A].add(g),l[L].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,A=M.length;C<A;++C){let L=M[C],D=L.start,G=L.count;for(let I=D,k=D+G;I<k;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new z,T=new z,E=new z,_=new z;function S(C){E.fromBufferAttribute(i,C),_.copy(E);let A=a[C];v.copy(A),v.sub(E.multiplyScalar(E.dot(A))).normalize(),T.crossVectors(_,A);let D=T.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,D)}for(let C=0,A=n.count;C<A;++C)c[C]&&S(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Gi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,d=new z;if(t)for(let f=0,u=t.count;f<u;f+=3){let p=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_n.fromBufferAttribute(t,e),_n.normalize(),t.setXYZ(e,_n.x,_n.y,_n.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new Gi(f,h,d)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var of=new z,ax=new z,lx=new jt,ki=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=of.subVectors(n,e).cross(ax.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(of),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lx.getNormalMatrix(t),i=this.coplanarPoint(of).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},cx=0,Ss=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=Co,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rf,this.blendDst=Cf,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gc,this.stencilZFail=gc,this.stencilZPass=gc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ki().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var xs=new z,af=new z,jl=new z,tc=new z,Ic=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xs.copy(this.origin).addScaledVector(this.direction,e),xs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){af.copy(t).add(e).multiplyScalar(.5),jl.copy(e).sub(t).normalize(),tc.copy(this.origin).sub(af);let r=t.distanceTo(e)*.5,o=-this.direction.dot(jl),a=tc.dot(this.direction),l=-tc.dot(jl),c=tc.lengthSq(),h=Math.abs(1-o*o),d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){let x=1/h;d*=x,f*=x,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(af).addScaledVector(jl,f),u}intersectSphere(t,e){if(t.radius<0)return null;xs.subVectors(t.center,this.origin);let n=xs.dot(this.direction),i=xs.dot(xs)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xs)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,y=n.y-o.y,M=n.z-o.z,v=Math.abs(l),T=Math.abs(c),E=Math.abs(h),_,S,C,A,L,D,G,I,k,V,F,Q;if(v>=T&&v>=E?(C=l,D=d,k=p,Q=g,l>=0?(_=c,S=h,A=f,L=u,G=x,I=m,V=y,F=M):(_=h,S=c,A=u,L=f,G=m,I=x,V=M,F=y)):T>=E?(C=c,D=f,k=x,Q=y,c>=0?(_=h,S=l,A=u,L=d,G=m,I=p,V=M,F=g):(_=l,S=h,A=d,L=u,G=p,I=m,V=g,F=M)):(C=h,D=u,k=m,Q=M,h>=0?(_=l,S=c,A=d,L=f,G=p,I=x,V=g,F=y):(_=c,S=l,A=f,L=d,G=x,I=p,V=y,F=g)),C===0)return null;let X=_/C,P=S/C,j=1/C,wt=A-X*D,Ft=L-P*D,Z=G-X*k,ut=I-P*k,Mt=V-X*Q,Rt=F-P*Q,gt=Mt*ut-Rt*Z,Dt=wt*Rt-Ft*Mt,_e=Z*Ft-ut*wt;if(i){if(gt<0||Dt<0||_e<0)return null}else if((gt<0||Dt<0||_e<0)&&(gt>0||Dt>0||_e>0))return null;let Nt=gt+Dt+_e;if(Nt===0)return null;let Xt=j*(gt*D+Dt*k+_e*Q);return(Nt>0?Xt<0:Xt>0)?null:this.at(Xt/Nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lc=class extends Ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xp=new Te,Sr=new Ic,ec=new qs,qp=new z,nc=new z,ic=new z,sc=new z,lf=new z,rc=new z,Yp=new z,oc=new z,De=class extends sn{constructor(t=new di,e=new Lc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){rc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(lf.fromBufferAttribute(d,t),o?rc.addScaledVector(lf,h):rc.addScaledVector(lf.sub(e),h))}e.add(rc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(r),Sr.copy(t.ray).recast(t.near),!(ec.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(ec,qp)===null||Sr.origin.distanceToSquared(qp)>(t.far-t.near)**2))&&(Xp.copy(r).invert(),Sr.copy(t.ray).applyMatrix4(Xp),!(n.boundingBox!==null&&Sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Sr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),M=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,T=M;v<T;v+=3){let E=a.getX(v),_=a.getX(v+1),S=a.getX(v+2);i=ac(this,g,t,n,c,h,d,E,_,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=ac(this,o,t,n,c,h,d,y,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,u.start),M=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,T=M;v<T;v+=3){let E=v,_=v+1,S=v+2;i=ac(this,g,t,n,c,h,d,E,_,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let y=m,M=m+1,v=m+2;i=ac(this,o,t,n,c,h,d,y,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function hx(s,t,e,n,i,r,o,a){let l;if(t.side===Tn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===tr,a),l===null)return null;oc.copy(a),oc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(oc);return c<e.near||c>e.far?null:{distance:c,point:oc.clone(),object:s}}function ac(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,nc),s.getVertexPosition(l,ic),s.getVertexPosition(c,sc);let h=hx(s,t,e,n,nc,ic,sc,Yp);if(h){let d=new z;Xs.getBarycoord(Yp,nc,ic,sc,d),i&&(h.uv=Xs.getInterpolatedAttribute(i,a,l,c,d,new Tt)),r&&(h.uv1=Xs.getInterpolatedAttribute(r,a,l,c,d,new Tt)),o&&(h.normal=Xs.getInterpolatedAttribute(o,a,l,c,d,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new z,materialIndex:0};Xs.getNormal(nc,ic,sc,f.normal),h.face=f,h.barycoord=d}return h}var Ta=class extends Qn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=xn,h=xn,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wa=class extends Gi{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},uo=new Te,Zp=new Te,lc=[],Jp=new Ei,ux=new Te,ha=new De,ua=new qs,wr=class extends De{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ux)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,uo),Jp.copy(t.boundingBox).applyMatrix4(uo),this.boundingBox.union(Jp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,uo),ua.copy(t.boundingSphere).applyMatrix4(uo),this.boundingSphere.union(ua)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),t.ray.intersectsSphere(ua)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,uo),Zp.multiplyMatrices(n,uo),ha.matrixWorld=Zp,ha.raycast(t,lc);for(let o=0,a=lc.length;o<a;o++){let l=lc[o];l.instanceId=r,l.object=this,e.push(l)}lc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ta(new Float32Array(i*this.count),i,this.count,ah,Ai));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mr=new qs,fx=new Tt(.5,.5),cc=new z,Ys=class{constructor(t=new ki,e=new ki,n=new ki,i=new ki,r=new ki,o=new ki){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wi,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],M=r[13],v=r[14],T=r[15];if(i[0].setComponents(c-o,u-h,g-p,T-y).normalize(),i[1].setComponents(c+o,u+h,g+p,T+y).normalize(),i[2].setComponents(c+a,u+d,g+x,T+M).normalize(),i[3].setComponents(c-a,u-d,g-x,T-M).normalize(),n)i[4].setComponents(l,f,m,v).normalize(),i[5].setComponents(c-l,u-f,g-m,T-v).normalize();else if(i[4].setComponents(c-l,u-f,g-m,T-v).normalize(),e===wi)i[5].setComponents(c+l,u+f,g+m,T+v).normalize();else if(e===xo)i[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){Mr.center.set(0,0,0);let e=fx.distanceTo(t.center);return Mr.radius=.7071067811865476+e,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(cc.x=i.normal.x>0?t.max.x:t.min.x,cc.y=i.normal.y>0?t.max.y:t.min.y,cc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(cc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$p=new Te,Dc=class s{constructor(){this.coordinateSystem=wi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];$p.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ys),n[i].setFromProjectionMatrix($p,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Ys),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Ea=class extends Qn{constructor(t=[],e=Pr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ms=class extends Qn{constructor(t,e,n=Vi,i,r,o,a=xn,l=xn,c,h=ys,d=1){if(h!==ys&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Aa=class extends Ms{constructor(t,e=Vi,n=Pr,i,r,o=xn,a=xn,l,c=ys){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ra=class extends Qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xe=class s extends di{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2));function p(x,m,g,y,M,v,T,E,_,S,C){let A=v/_,L=T/S,D=v/2,G=T/2,I=E/2,k=_+1,V=S+1,F=0,Q=0,X=new z;for(let P=0;P<V;P++){let j=P*L-G;for(let wt=0;wt<k;wt++){let Ft=wt*A-D;X[x]=Ft*y,X[m]=j*M,X[g]=I,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[g]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(wt/_),d.push(1-P/S),F+=1}}for(let P=0;P<S;P++)for(let j=0;j<_;j++){let wt=f+j+k*P,Ft=f+j+k*(P+1),Z=f+(j+1)+k*(P+1),ut=f+(j+1)+k*P;l.push(wt,Ft,ut),l.push(Ft,Z,ut),Q+=6}a.addGroup(u,Q,C),u+=Q,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Hn=class s extends di{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],f=[],u=[],p=0,x=[],m=n/2,g=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(u,2));function y(){let v=new z,T=new z,E=0,_=(e-t)/n;for(let S=0;S<=r;S++){let C=[],A=S/r,L=A*(e-t)+t;for(let D=0;D<=i;D++){let G=D/i,I=G*l+a,k=Math.sin(I),V=Math.cos(I);T.x=L*k,T.y=-A*n+m,T.z=L*V,d.push(T.x,T.y,T.z),v.set(k,_,V).normalize(),f.push(v.x,v.y,v.z),u.push(G,1-A),C.push(p++)}x.push(C)}for(let S=0;S<i;S++)for(let C=0;C<r;C++){let A=x[C][S],L=x[C+1][S],D=x[C+1][S+1],G=x[C][S+1];(t>0||C!==0)&&(h.push(A,L,G),E+=3),(e>0||C!==r-1)&&(h.push(L,D,G),E+=3)}c.addGroup(g,E,0),g+=E}function M(v){let T=p,E=new Tt,_=new z,S=0,C=v===!0?t:e,A=v===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,m*A,0),f.push(0,A,0),u.push(.5,.5),p++;let L=p;for(let D=0;D<=i;D++){let I=D/i*l+a,k=Math.cos(I),V=Math.sin(I);_.x=C*V,_.y=m*A,_.z=C*k,d.push(_.x,_.y,_.z),f.push(0,A,0),E.x=k*.5+.5,E.y=V*.5*A+.5,u.push(E.x,E.y),p++}for(let D=0;D<i;D++){let G=T+D,I=L+D;v===!0?h.push(I,I+1,G):h.push(I+1,I,G),S+=3}c.addGroup(g,S,v===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Tt:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new z,i=[],r=[],o=[],a=new z,l=new Te;for(let u=0;u<=t;u++){let p=u/t;i[u]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ue(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(ue(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Mo=class extends pi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Tt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Nc=class extends Mo{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jf(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,i(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Kp=new z,Qp=new z,cf=new Jf,hf=new Jf,uf=new Jf,Er=class extends pi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new z){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Qp.subVectors(i[0],i[1]).add(i[0]),c=Qp);let d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Kp.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Kp),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),cf.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,x,m),hf.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,x,m),uf.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(cf.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),hf.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),uf.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(cf.calc(l),hf.calc(l),uf.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new z().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function jp(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function dx(s,t){let e=1-s;return e*e*t}function px(s,t){return 2*(1-s)*s*t}function mx(s,t){return s*s*t}function pa(s,t,e,n){return dx(s,t)+px(s,e)+mx(s,n)}function gx(s,t){let e=1-s;return e*e*e*t}function _x(s,t){let e=1-s;return 3*e*e*s*t}function xx(s,t){return 3*(1-s)*s*s*t}function vx(s,t){return s*s*s*t}function ma(s,t,e,n,i){return gx(s,t)+_x(s,e)+xx(s,n)+vx(s,i)}var Ca=class extends pi{constructor(t=new Tt,e=new Tt,n=new Tt,i=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Tt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ma(t,i.x,r.x,o.x,a.x),ma(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oc=class extends pi{constructor(t=new z,e=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new z){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ma(t,i.x,r.x,o.x,a.x),ma(t,i.y,r.y,o.y,a.y),ma(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pa=class extends pi{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uc=class extends pi{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends pi{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(pa(t,i.x,r.x,o.x),pa(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},La=class extends pi{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(pa(t,i.x,r.x,o.x),pa(t,i.y,r.y,o.y),pa(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(jp(a,l.x,c.x,h.x,d.x),jp(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Tt().fromArray(i))}return this}},Fc=Object.freeze({__proto__:null,ArcCurve:Nc,CatmullRomCurve3:Er,CubicBezierCurve:Ca,CubicBezierCurve3:Oc,EllipseCurve:Mo,LineCurve:Pa,LineCurve3:Uc,QuadraticBezierCurve:Ia,QuadraticBezierCurve3:La,SplineCurve:Da}),Bc=class extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Fc[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},Zs=class extends Bc{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Pa(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Ia(this.currentPoint.clone(),new Tt(t,e),new Tt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Ca(this.currentPoint.clone(),new Tt(t,e),new Tt(n,i),new Tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Da(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Mo(t,e,n,i,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},bs=class extends Zs{constructor(t){super(t),this.uuid=Lo(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Zs().fromJSON(i))}return this}};function yx(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Jm(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=wx(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let f=e;f<i;f+=e){let u=s[f],p=s[f+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Na(r,o,e,a,l,c,0),o}function Jm(s,t,e,n,i){let r;if(i===Ux(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=tm(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=tm(o/n|0,s[o],s[o+1],r);return r&&bo(r,r.next)&&(Ua(r),r=r.next),r}function Ar(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(bo(e,e.next)||ze(e.prev,e,e.next)===0)){if(Ua(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Na(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Px(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Mx(s,n,i,r):Sx(s)){t.push(l.i,s.i,c.i),Ua(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=bx(Ar(s),t),Na(s,t,e,n,i,r,2)):o===2&&Tx(s,t,e,n,i,r):Na(Ar(s),t,e,n,i,r,1);break}}}function Sx(s){let t=s.prev,e=s,n=s.next;if(ze(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),f=Math.max(i,r,o),u=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&fa(i,a,r,l,o,c,p.x,p.y)&&ze(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Mx(s,t,e,n){let i=s.prev,r=s,o=s.next;if(ze(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,f=o.y,u=Math.min(a,l,c),p=Math.min(h,d,f),x=Math.max(a,l,c),m=Math.max(h,d,f),g=_f(u,p,t,e,n),y=_f(x,m,t,e,n),M=s.prevZ,v=s.nextZ;for(;M&&M.z>=g&&v&&v.z<=y;){if(M.x>=u&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&fa(a,h,l,d,c,f,M.x,M.y)&&ze(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=u&&v.x<=x&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&fa(a,h,l,d,c,f,v.x,v.y)&&ze(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=u&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&fa(a,h,l,d,c,f,M.x,M.y)&&ze(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=u&&v.x<=x&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&fa(a,h,l,d,c,f,v.x,v.y)&&ze(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function bx(s,t){let e=s;do{let n=e.prev,i=e.next.next;!bo(n,i)&&Km(n,e,e.next,i)&&Oa(n,i)&&Oa(i,n)&&(t.push(n.i,e.i,i.i),Ua(e),Ua(e.next),e=s=i),e=e.next}while(e!==s);return Ar(e)}function Tx(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dx(o,a)){let l=Qm(o,a);o=Ar(o,o.next),l=Ar(l,l.next),Na(o,t,e,n,i,r,0),Na(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function wx(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Jm(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Lx(c))}i.sort(Ex);for(let r=0;r<i.length;r++)e=Ax(i[r],e);return e}function Ex(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Ax(s,t){let e=Rx(s,t);if(!e)return t;let n=Qm(e,s);return Ar(n,n.next),Ar(e,e.next)}function Rx(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(bo(s,e))return e;do{if(bo(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&$m(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);Oa(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Cx(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Cx(s,t){return ze(s.prev,s,t.prev)<0&&ze(t.next,s,s.next)<0}function Px(s,t,e,n){let i=s;do i.z===0&&(i.z=_f(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ix(i)}function Ix(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function _f(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Lx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function $m(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function fa(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&$m(s,t,e,n,i,r,o,a)}function Dx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Nx(s,t)&&(Oa(s,t)&&Oa(t,s)&&Ox(s,t)&&(ze(s.prev,s,t.prev)||ze(s,t.prev,t))||bo(s,t)&&ze(s.prev,s,s.next)>0&&ze(t.prev,t,t.next)>0)}function ze(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function bo(s,t){return s.x===t.x&&s.y===t.y}function Km(s,t,e,n){let i=uc(ze(s,t,e)),r=uc(ze(s,t,n)),o=uc(ze(e,n,s)),a=uc(ze(e,n,t));return!!(i!==r&&o!==a||i===0&&hc(s,e,t)||r===0&&hc(s,n,t)||o===0&&hc(e,s,n)||a===0&&hc(e,t,n))}function hc(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function uc(s){return s>0?1:s<0?-1:0}function Nx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Km(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Oa(s,t){return ze(s.prev,s,s.next)<0?ze(s,t,s.next)>=0&&ze(s,s.prev,t)>=0:ze(s,t,s.prev)<0||ze(s,s.next,t)<0}function Ox(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Qm(s,t){let e=xf(s.i,s.x,s.y),n=xf(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function tm(s,t,e,n){let i=xf(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ua(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function xf(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ux(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var vf=class{static triangulate(t,e,n=2){return yx(t,e,n)}},br=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];em(t),nm(n,t);let o=t.length;e.forEach(em);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,nm(n,e[l]);let a=vf.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function em(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function nm(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Fa=class s extends di{constructor(t=new bs([new Tt(.5,.5),new Tt(-.5,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Ie(i,3)),this.setAttribute("uv",new Ie(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Fx,M,v=!1,T,E,_,S;if(g){M=g.getSpacedPoints(h),v=!0,f=!1;let K=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,K),E=new z,_=new z,S=new z}f||(m=0,u=0,p=0,x=0);let C=a.extractPoints(c),A=C.shape,L=C.holes;if(!br.isClockWise(A)){A=A.reverse();for(let K=0,lt=L.length;K<lt;K++){let ct=L[K];br.isClockWise(ct)&&(L[K]=ct.reverse())}}function G(K){let ct=10000000000000001e-36,B=K[0];for(let dt=1;dt<=K.length;dt++){let qt=dt%K.length,Ot=K[qt],Vt=Ot.x-B.x,Qt=Ot.y-B.y,ne=Vt*Vt+Qt*Qt,U=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(B.x),Math.abs(B.y)),oe=ct*U*U;if(ne<=oe){K.splice(qt,1),dt--;continue}B=Ot}}G(A),L.forEach(G);let I=L.length,k=A;for(let K=0;K<I;K++){let lt=L[K];A=A.concat(lt)}function V(K,lt,ct){return lt||$t("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(lt,ct)}let F=A.length;function Q(K,lt,ct){let B,dt,qt,Ot=K.x-lt.x,Vt=K.y-lt.y,Qt=ct.x-K.x,ne=ct.y-K.y,U=Ot*Ot+Vt*Vt,oe=Ot*ne-Vt*Qt;if(Math.abs(oe)>Number.EPSILON){let Kt=Math.sqrt(U),Jt=Math.sqrt(Qt*Qt+ne*ne),pt=lt.x-Vt/Kt,me=lt.y+Ot/Kt,zt=ct.x-ne/Jt,Yt=ct.y+Qt/Jt,R=((zt-pt)*ne-(Yt-me)*Qt)/(Ot*ne-Vt*Qt);B=pt+Ot*R-K.x,dt=me+Vt*R-K.y;let b=B*B+dt*dt;if(b<=2)return new Tt(B,dt);qt=Math.sqrt(b/2)}else{let Kt=!1;Ot>Number.EPSILON?Qt>Number.EPSILON&&(Kt=!0):Ot<-Number.EPSILON?Qt<-Number.EPSILON&&(Kt=!0):Math.sign(Vt)===Math.sign(ne)&&(Kt=!0),Kt?(B=-Vt,dt=Ot,qt=Math.sqrt(U)):(B=Ot,dt=Vt,qt=Math.sqrt(U/2))}return new Tt(B/qt,dt/qt)}let X=[];for(let K=0,lt=k.length,ct=lt-1,B=K+1;K<lt;K++,ct++,B++)ct===lt&&(ct=0),B===lt&&(B=0),X[K]=Q(k[K],k[ct],k[B]);let P=[],j,wt=X.concat();for(let K=0,lt=I;K<lt;K++){let ct=L[K];j=[];for(let B=0,dt=ct.length,qt=dt-1,Ot=B+1;B<dt;B++,qt++,Ot++)qt===dt&&(qt=0),Ot===dt&&(Ot=0),j[B]=Q(ct[B],ct[qt],ct[Ot]);P.push(j),wt=wt.concat(j)}let Ft;if(m===0)Ft=br.triangulateShape(k,L);else{let K=[],lt=[];for(let ct=0;ct<m;ct++){let B=ct/m,dt=u*Math.cos(B*Math.PI/2),qt=p*Math.sin(B*Math.PI/2)+x;for(let Ot=0,Vt=k.length;Ot<Vt;Ot++){let Qt=V(k[Ot],X[Ot],qt);Dt(Qt.x,Qt.y,-dt),B===0&&K.push(Qt)}for(let Ot=0,Vt=I;Ot<Vt;Ot++){let Qt=L[Ot];j=P[Ot];let ne=[];for(let U=0,oe=Qt.length;U<oe;U++){let Kt=V(Qt[U],j[U],qt);Dt(Kt.x,Kt.y,-dt),B===0&&ne.push(Kt)}B===0&&lt.push(ne)}}Ft=br.triangulateShape(K,lt)}let Z=Ft.length,ut=p+x;for(let K=0;K<F;K++){let lt=f?V(A[K],wt[K],ut):A[K];v?(_.copy(T.normals[0]).multiplyScalar(lt.x),E.copy(T.binormals[0]).multiplyScalar(lt.y),S.copy(M[0]).add(_).add(E),Dt(S.x,S.y,S.z)):Dt(lt.x,lt.y,0)}for(let K=1;K<=h;K++)for(let lt=0;lt<F;lt++){let ct=f?V(A[lt],wt[lt],ut):A[lt];v?(_.copy(T.normals[K]).multiplyScalar(ct.x),E.copy(T.binormals[K]).multiplyScalar(ct.y),S.copy(M[K]).add(_).add(E),Dt(S.x,S.y,S.z)):Dt(ct.x,ct.y,d/h*K)}for(let K=m-1;K>=0;K--){let lt=K/m,ct=u*Math.cos(lt*Math.PI/2),B=p*Math.sin(lt*Math.PI/2)+x;for(let dt=0,qt=k.length;dt<qt;dt++){let Ot=V(k[dt],X[dt],B);Dt(Ot.x,Ot.y,d+ct)}for(let dt=0,qt=L.length;dt<qt;dt++){let Ot=L[dt];j=P[dt];for(let Vt=0,Qt=Ot.length;Vt<Qt;Vt++){let ne=V(Ot[Vt],j[Vt],B);v?Dt(ne.x,ne.y+M[h-1].y,M[h-1].x+ct):Dt(ne.x,ne.y,d+ct)}}}Mt(),Rt();function Mt(){let K=i.length/3;if(f){let lt=0,ct=F*lt;for(let B=0;B<Z;B++){let dt=Ft[B];_e(dt[2]+ct,dt[1]+ct,dt[0]+ct)}lt=h+m*2,ct=F*lt;for(let B=0;B<Z;B++){let dt=Ft[B];_e(dt[0]+ct,dt[1]+ct,dt[2]+ct)}}else{for(let lt=0;lt<Z;lt++){let ct=Ft[lt];_e(ct[2],ct[1],ct[0])}for(let lt=0;lt<Z;lt++){let ct=Ft[lt];_e(ct[0]+F*h,ct[1]+F*h,ct[2]+F*h)}}n.addGroup(K,i.length/3-K,0)}function Rt(){let K=i.length/3,lt=0;gt(k,lt),lt+=k.length;for(let ct=0,B=L.length;ct<B;ct++){let dt=L[ct];gt(dt,lt),lt+=dt.length}n.addGroup(K,i.length/3-K,1)}function gt(K,lt){let ct=K.length;for(;--ct>=0;){let B=ct,dt=ct-1;dt<0&&(dt=K.length-1);for(let qt=0,Ot=h+m*2;qt<Ot;qt++){let Vt=F*qt,Qt=F*(qt+1),ne=lt+B+Vt,U=lt+dt+Vt,oe=lt+dt+Qt,Kt=lt+B+Qt;Nt(ne,U,oe,Kt)}}}function Dt(K,lt,ct){l.push(K),l.push(lt),l.push(ct)}function _e(K,lt,ct){Xt(K),Xt(lt),Xt(ct);let B=i.length/3,dt=y.generateTopUV(n,i,B-3,B-2,B-1);Lt(dt[0]),Lt(dt[1]),Lt(dt[2])}function Nt(K,lt,ct,B){Xt(K),Xt(lt),Xt(B),Xt(lt),Xt(ct),Xt(B);let dt=i.length/3,qt=y.generateSideWallUV(n,i,dt-6,dt-3,dt-2,dt-1);Lt(qt[0]),Lt(qt[1]),Lt(qt[3]),Lt(qt[1]),Lt(qt[2]),Lt(qt[3])}function Xt(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function Lt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Fc[i.type]().fromJSON(i)),new s(n,t.options)}},Fx={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Tt(r,o),new Tt(a,l),new Tt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[i*3],u=t[i*3+1],p=t[i*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Tt(o,1-l),new Tt(c,1-d),new Tt(f,1-p),new Tt(x,1-g)]:[new Tt(a,1-l),new Tt(h,1-d),new Tt(u,1-p),new Tt(m,1-g)]}};function Bx(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ba=class s extends di{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*f-o;for(let M=0;M<c;M++){let v=M*d-r;p.push(v,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let M=y+c*g,v=y+c*(g+1),T=y+1+c*(g+1),E=y+1+c*g;u.push(M,v,E),u.push(v,T,E)}this.setIndex(u),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var za=class s extends di{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new z,f=new z,u=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],M=g/n,v=o+M*a,T=t*Math.cos(v),E=Math.sqrt(t*t-T*T),_=0;g===0&&o===0?_=.5/e:g===n&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){let C=S/e,A=i+C*r;d.x=-E*Math.cos(A),d.y=T,d.z=E*Math.sin(A),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(C+_,1-M),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let M=h[g][y+1],v=h[g][y],T=h[g+1][y],E=h[g+1][y+1];(g!==0||o>0)&&u.push(M,v,E),(g!==n-1||l<Math.PI)&&u.push(v,T,E)}this.setIndex(u),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Js=class s extends di{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],f=new z,u=new z,p=new z;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=i;g++){let y=g/i*r;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let g=(i+1)*x+m-1,y=(i+1)*(x-1)+m-1,M=(i+1)*(x-1)+m,v=(i+1)*x+m;l.push(g,y,v),l.push(y,M,v)}this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var To=class s extends di{constructor(t=new La(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new z,l=new z,c=new Tt,h=new z,d=[],f=[],u=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(u,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),y(),g()}function m(M){h=t.getPointAt(M/e,h);let v=o.normals[M],T=o.binormals[M];for(let E=0;E<=i;E++){let _=E/i*Math.PI*2,S=Math.sin(_),C=-Math.cos(_);l.x=C*v.x+S*T.x,l.y=C*v.y+S*T.y,l.z=C*v.z+S*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=e;M++)for(let v=1;v<=i;v++){let T=(i+1)*(M-1)+(v-1),E=(i+1)*M+(v-1),_=(i+1)*M+v,S=(i+1)*(M-1)+v;p.push(T,E,S),p.push(E,_,S)}}function y(){for(let M=0;M<=e;M++)for(let v=0;v<=i;v++)c.x=M/e,c.y=v/i,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Fc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Lr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(im(i))i.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(im(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Dn(s){let t={};for(let e=0;e<s.length;e++){let n=Lr(s[e]);for(let i in n)t[i]=n[i]}return t}function im(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function zx(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function $f(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var jm={clone:Lr,merge:Dn},kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ts=class extends Ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kx,this.fragmentShader=Gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lr(t.uniforms),this.uniformsGroups=zx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ae().setHex(i.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(i.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Te().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},zc=class extends ts{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$s=class extends Ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ka=class extends Ss{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=th,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},kc=class extends Ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gc=class extends Ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function fo(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function fc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Ks=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vc=class extends Ks{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pf,endingEnd:pf}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case mf:r=t,a=2*e-n;break;case gf:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mf:o=t,l=2*n-e;break;case gf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,M=(-1-u)*m+(1.5+u)*x+.5*p,v=u*m-u*x;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+y*o[c+T]+M*o[l+T]+v*o[d+T];return r}},Hc=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Wc=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Xc=class extends Ks{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let f=a*2,u=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=u*f+p*2,y=d[g],M=d[g+1],v=t*f+p*2,T=h[v],E=h[v+1],_=Hx(n,e,y,T,i);r[p]=tg(_,x,M,E,m)}return r}};function tg(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Vx(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Hx(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=tg(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=Vx(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var mi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fo(e,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fo(t.times,Array),values:fo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),fc(t.settings)&&(n.settings={inTangents:fo(t.settings.inTangents,Array),outTangents:fo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Xc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ga:e=this.InterpolantFactoryMethodDiscrete;break;case Ec:e=this.InterpolantFactoryMethodLinear;break;case mc:e=this.InterpolantFactoryMethodSmooth;break;case df:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return Ec;case this.InterpolantFactoryMethodSmooth:return mc;case this.InterpolantFactoryMethodBezier:return df}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;fc(this.settings)&&(sm(this.settings.inTangents,t),sm(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;fc(this.settings)&&(rm(this.settings.inTangents,t),rm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){$t("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&W_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===mc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[f+p]||x!==e[u+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,fc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function sm(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function rm(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=Ec;var Qs=class extends mi{constructor(t,e,n){super(t,e,n)}};Qs.prototype.ValueTypeName="bool";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=ga;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var qc=class extends mi{constructor(t,e,n,i){super(t,e,n,i)}};qc.prototype.ValueTypeName="color";var Yc=class extends mi{constructor(t,e,n,i){super(t,e,n,i)}};Yc.prototype.ValueTypeName="number";var Zc=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Qi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ga=class extends mi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Zc(this.times,this.values,this.getValueSize(),t)}};Ga.prototype.ValueTypeName="quaternion";Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var js=class extends mi{constructor(t,e,n){super(t,e,n)}};js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=ga;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends mi{constructor(t,e,n,i){super(t,e,n,i)}};Jc.prototype.ValueTypeName="vector";var $c=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},eg=new $c,Kc=class{constructor(t){this.manager=t!==void 0?t:eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Kc.DEFAULT_MATERIAL_NAME="__DEFAULT";var wo=class extends sn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Va=class extends wo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ff=new Te,om=new z,am=new z,Ha=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;om.setFromMatrixPosition(t.matrixWorld),e.position.copy(om),am.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(am),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){ff.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ff,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===xo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ff)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},dc=new z,pc=new Qi,Ji=new z,Wa=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(dc,pc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,pc,Ji.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(dc,pc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,pc,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ws=new z,lm=new Tt,cm=new Tt,bn=class extends Wa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ac*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Gu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ac*2*Math.atan(Math.tan(Gu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ws.x,Ws.y).multiplyScalar(-t/Ws.z),Ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ws.x,Ws.y).multiplyScalar(-t/Ws.z)}getViewSize(t,e){return this.getViewBounds(t,lm,cm),e.subVectors(cm,lm)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Gu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var yf=class extends Ha{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}},Xa=class extends wo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},qa=class extends Wa{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sf=class extends Ha{constructor(){super(new qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Eo=class extends wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Sf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var po=-90,mo=1,Ao=class extends sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new bn(po,mo,t,e);i.layers=this.layers,this.add(i);let r=new bn(po,mo,t,e);r.layers=this.layers,this.add(r);let o=new bn(po,mo,t,e);o.layers=this.layers,this.add(o);let a=new bn(po,mo,t,e);a.layers=this.layers,this.add(a);let l=new bn(po,mo,t,e);l.layers=this.layers,this.add(l);let c=new bn(po,mo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Qc=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Kf="\\[\\]\\.:\\/",Wx=new RegExp("["+Kf+"]","g"),Qf="[^"+Kf+"]",Xx="[^"+Kf.replace("\\.","")+"]",qx=/((?:WC+[\/:])*)/.source.replace("WC",Qf),Yx=/(WCOD+)?/.source.replace("WCOD",Xx),Zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qf),Jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qf),$x=new RegExp("^"+qx+Yx+Zx+Jx+"$"),Kx=["material","materials","bones","map"],Mf=class{constructor(t,e,n){let i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wx,"")}static parseTrackName(t){let e=$x.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Kx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=Mf;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aw=new Float32Array(1);var sd=class sd{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};sd.prototype.isMatrix2=!0;var bf=sd;function jf(s,t,e,n){let i=Qx(n);switch(e){case Gf:return s*t;case ah:return s*t/i.components*i.byteLength;case lh:return s*t/i.components*i.byteLength;case er:return s*t*2/i.components*i.byteLength;case ch:return s*t*2/i.components*i.byteLength;case Vf:return s*t*3/i.components*i.byteLength;case Wi:return s*t*4/i.components*i.byteLength;case hh:return s*t*4/i.components*i.byteLength;case $a:case Ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qa:case ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fh:case ph:return Math.max(s,16)*Math.max(t,8)/4;case uh:case dh:return Math.max(s,8)*Math.max(t,8)/2;case mh:case gh:case xh:case vh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case _h:case tl:case yh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case bh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Th:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case wh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ch:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Dh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Nh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Oh:case Uh:case Fh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Bh:case zh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case el:case kh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qx(s){switch(s){case jn:case Ff:return{byteLength:1,components:1};case Io:case Bf:case Hi:return{byteLength:2,components:1};case rh:case oh:return{byteLength:2,components:4};case Vi:case sh:case Ai:return{byteLength:4,components:1};case zf:case kf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function bg(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function tv(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],x=d[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let x=d[u];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nv=`#ifdef USE_ALPHAHASH
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
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ov=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,av=`#ifdef USE_AOMAP
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
#endif`,lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
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
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pv=`#ifdef USE_IRIDESCENCE
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
#endif`,mv=`#ifdef USE_BUMPMAP
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tv=`#define PI 3.141592653589793
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
} // validated`,wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Nv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Fv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gv=`#ifdef USE_GRADIENTMAP
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
}`,Vv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qv=`#ifdef USE_ENVMAP
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
#endif`,Yv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kv=`PhysicalMaterial material;
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
#endif`,Qv=`uniform sampler2D dfgLUT;
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
}`,jv=`
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
#endif`,ty=`#if defined( RE_IndirectDiffuse )
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
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ny=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ay=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hy=`#if defined( USE_POINTS_UV )
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
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,py=`#if defined( USE_MORPHCOLORS )
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
#endif`,my=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`#ifdef USE_MORPHTARGETS
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
#endif`,_y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,by=`#ifdef USE_NORMALMAP
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
#endif`,Ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,By=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zy=`float getShadowMask() {
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
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gy=`#ifdef USE_SKINNING
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
#endif`,Vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,Wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zy=`#ifdef USE_TRANSMISSION
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
#endif`,Jy=`#ifdef USE_TRANSMISSION
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eS=`uniform sampler2D t2D;
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
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`uniform float backgroundBlurriness;
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`#include <common>
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
}`,aS=`#if DEPTH_PACKING == 3200
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
}`,lS=`#define DISTANCE
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
}`,cS=`#define DISTANCE
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
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`uniform float scale;
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
}`,dS=`uniform vec3 diffuse;
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
}`,pS=`#include <common>
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
}`,mS=`uniform vec3 diffuse;
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
}`,gS=`#define LAMBERT
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
}`,_S=`#define LAMBERT
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
}`,xS=`#define MATCAP
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
}`,vS=`#define MATCAP
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
}`,yS=`#define NORMAL
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
}`,SS=`#define NORMAL
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
}`,MS=`#define PHONG
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
}`,bS=`#define PHONG
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
}`,TS=`#define STANDARD
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
}`,wS=`#define STANDARD
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
}`,ES=`#define TOON
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
}`,AS=`#define TOON
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
}`,RS=`uniform float size;
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
}`,CS=`uniform vec3 diffuse;
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
}`,PS=`#include <common>
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
}`,IS=`uniform vec3 color;
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
}`,LS=`uniform float rotation;
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
}`,DS=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:ev,alphahash_pars_fragment:nv,alphamap_fragment:iv,alphamap_pars_fragment:sv,alphatest_fragment:rv,alphatest_pars_fragment:ov,aomap_fragment:av,aomap_pars_fragment:lv,batching_pars_vertex:cv,batching_vertex:hv,begin_vertex:uv,beginnormal_vertex:fv,bsdfs:dv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:gv,clipping_planes_pars_fragment:_v,clipping_planes_pars_vertex:xv,clipping_planes_vertex:vv,color_fragment:yv,color_pars_fragment:Sv,color_pars_vertex:Mv,color_vertex:bv,common:Tv,defaultnormal_vertex:wv,displacementmap_pars_vertex:Ev,displacementmap_vertex:Av,emissivemap_fragment:Rv,emissivemap_pars_fragment:Cv,colorspace_fragment:Pv,colorspace_pars_fragment:Iv,envmap_fragment:Lv,envmap_common_pars_fragment:Dv,envmap_pars_fragment:Nv,envmap_pars_vertex:Ov,envmap_physical_pars_fragment:qv,envmap_vertex:Uv,fog_vertex:Fv,fog_pars_vertex:Bv,fog_fragment:zv,fog_pars_fragment:kv,gradientmap_pars_fragment:Gv,lightmap_pars_fragment:Vv,lights_lambert_fragment:Hv,lights_lambert_pars_fragment:Wv,lights_pars_begin:Xv,lights_toon_fragment:Yv,lights_toon_pars_fragment:Zv,lights_phong_fragment:Jv,lights_phong_pars_fragment:$v,lights_physical_fragment:Kv,lights_physical_pars_fragment:Qv,lights_fragment_begin:jv,lights_fragment_maps:ty,lights_fragment_end:ey,lightprobes_pars_fragment:ny,logdepthbuf_fragment:iy,logdepthbuf_pars_fragment:sy,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:oy,map_fragment:ay,map_pars_fragment:ly,map_particle_fragment:cy,map_particle_pars_fragment:hy,metalnessmap_fragment:uy,metalnessmap_pars_fragment:fy,morphinstance_vertex:dy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:_y,normal_fragment_begin:xy,normal_fragment_maps:vy,normal_pars_fragment:yy,normal_pars_vertex:Sy,normal_vertex:My,normalmap_pars_fragment:by,clearcoat_normal_fragment_begin:Ty,clearcoat_normal_fragment_maps:wy,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:Ay,opaque_fragment:Ry,packing:Cy,premultiplied_alpha_fragment:Py,project_vertex:Iy,dithering_fragment:Ly,dithering_pars_fragment:Dy,roughnessmap_fragment:Ny,roughnessmap_pars_fragment:Oy,shadowmap_pars_fragment:Uy,shadowmap_pars_vertex:Fy,shadowmap_vertex:By,shadowmask_pars_fragment:zy,skinbase_vertex:ky,skinning_pars_vertex:Gy,skinning_vertex:Vy,skinnormal_vertex:Hy,specularmap_fragment:Wy,specularmap_pars_fragment:Xy,tonemapping_fragment:qy,tonemapping_pars_fragment:Yy,transmission_fragment:Zy,transmission_pars_fragment:Jy,uv_pars_fragment:$y,uv_pars_vertex:Ky,uv_vertex:Qy,worldpos_vertex:jy,background_vert:tS,background_frag:eS,backgroundCube_vert:nS,backgroundCube_frag:iS,cube_vert:sS,cube_frag:rS,depth_vert:oS,depth_frag:aS,distance_vert:lS,distance_frag:cS,equirect_vert:hS,equirect_frag:uS,linedashed_vert:fS,linedashed_frag:dS,meshbasic_vert:pS,meshbasic_frag:mS,meshlambert_vert:gS,meshlambert_frag:_S,meshmatcap_vert:xS,meshmatcap_frag:vS,meshnormal_vert:yS,meshnormal_frag:SS,meshphong_vert:MS,meshphong_frag:bS,meshphysical_vert:TS,meshphysical_frag:wS,meshtoon_vert:ES,meshtoon_frag:AS,points_vert:RS,points_frag:CS,shadow_vert:PS,shadow_frag:IS,sprite_vert:LS,sprite_frag:DS},Ct={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ss={basic:{uniforms:Dn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Dn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Dn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Dn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Dn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new ae(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Dn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Dn([Ct.points,Ct.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Dn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Dn([Ct.common,Ct.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Dn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Dn([Ct.sprite,Ct.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:Dn([Ct.common,Ct.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:Dn([Ct.lights,Ct.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};ss.physical={uniforms:Dn([ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var Gh={r:0,b:0,g:0},NS=new Te,Tg=new jt;Tg.set(-1,0,0,0,1,0,0,0,1);function OS(s,t,e,n,i,r){let o=new ae(0),a=i===!0?0:1,l,c,h=null,d=0,f=null;function u(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=t.get(M,v)}return M}function p(y){let M=!1,v=u(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,M){let v=u(M);v&&v.isCubeTexture?(c===void 0&&(c=new De(new Xe(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:Lr(ss.backgroundCube.uniforms),vertexShader:ss.backgroundCube.vertexShader,fragmentShader:ss.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(NS.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tg),c.material.toneMapped=pe.getTransfer(v.colorSpace)!==Se,(h!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new De(new Ba(2,2),new ts({name:"BackgroundMaterial",uniforms:Lr(ss.background.uniforms),vertexShader:ss.background.vertexShader,fragmentShader:ss.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=pe.getTransfer(v.colorSpace)!==Se,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(Gh,$f(s)),e.buffers.color.setClear(Gh.r,Gh.g,Gh.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function US(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(L,D,G,I,k){let V=!1,F=d(L,I,G,D);r!==F&&(r=F,c(r.object)),V=u(L,I,G,k),V&&p(L,I,G,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(L,D,G,I),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function d(L,D,G,I){let k=I.wireframe===!0,V=n[D.id];V===void 0&&(V={},n[D.id]=V);let F=L.isInstancedMesh===!0?L.id:0,Q=V[F];Q===void 0&&(Q={},V[F]=Q);let X=Q[G.id];X===void 0&&(X={},Q[G.id]=X);let P=X[k];return P===void 0&&(P=f(l()),X[k]=P),P}function f(L){let D=[],G=[],I=[];for(let k=0;k<e;k++)D[k]=0,G[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:I,object:L,attributes:{},index:null}}function u(L,D,G,I){let k=r.attributes,V=D.attributes,F=0,Q=G.getAttributes();for(let X in Q)if(Q[X].location>=0){let j=k[X],wt=V[X];if(wt===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(wt=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(wt=L.instanceColor)),j===void 0||j.attribute!==wt||wt&&j.data!==wt.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function p(L,D,G,I){let k={},V=D.attributes,F=0,Q=G.getAttributes();for(let X in Q)if(Q[X].location>=0){let j=V[X];j===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let wt={};wt.attribute=j,j&&j.data&&(wt.data=j.data),k[X]=wt,F++}r.attributes=k,r.attributesNum=F,r.index=I}function x(){let L=r.newAttributes;for(let D=0,G=L.length;D<G;D++)L[D]=0}function m(L){g(L,0)}function g(L,D){let G=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;G[L]=1,I[L]===0&&(s.enableVertexAttribArray(L),I[L]=1),k[L]!==D&&(s.vertexAttribDivisor(L,D),k[L]=D)}function y(){let L=r.newAttributes,D=r.enabledAttributes;for(let G=0,I=D.length;G<I;G++)D[G]!==L[G]&&(s.disableVertexAttribArray(G),D[G]=0)}function M(L,D,G,I,k,V,F){F===!0?s.vertexAttribIPointer(L,D,G,k,V):s.vertexAttribPointer(L,D,G,I,k,V)}function v(L,D,G,I){x();let k=I.attributes,V=G.getAttributes(),F=D.defaultAttributeValues;for(let Q in V){let X=V[Q];if(X.location>=0){let P=k[Q];if(P===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(P=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(P=L.instanceColor)),P!==void 0){let j=P.normalized,wt=P.itemSize,Ft=t.get(P);if(Ft===void 0)continue;let Z=Ft.buffer,ut=Ft.type,Mt=Ft.bytesPerElement,Rt=ut===s.INT||ut===s.UNSIGNED_INT||P.gpuType===sh;if(P.isInterleavedBufferAttribute){let gt=P.data,Dt=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,_e=P.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let Nt=0;Nt<X.locationSize;Nt++)g(X.location+Nt,gt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Nt=0;Nt<X.locationSize;Nt++)m(X.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let Nt=0;Nt<X.locationSize;Nt++)M(X.location+Nt,wt/X.locationSize,ut,j,Dt*Mt,(_e+wt/X.locationSize*Nt)*Mt,Rt)}else{if(P.isInstancedBufferAttribute){for(let gt=0;gt<X.locationSize;gt++)g(X.location+gt,P.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let gt=0;gt<X.locationSize;gt++)m(X.location+gt);s.bindBuffer(s.ARRAY_BUFFER,Z);for(let gt=0;gt<X.locationSize;gt++)M(X.location+gt,wt/X.locationSize,ut,j,wt*Mt,wt/X.locationSize*gt*Mt,Rt)}}else if(F!==void 0){let j=F[Q];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(X.location,j);break;case 3:s.vertexAttrib3fv(X.location,j);break;case 4:s.vertexAttrib4fv(X.location,j);break;default:s.vertexAttrib1fv(X.location,j)}}}}y()}function T(){C();for(let L in n){let D=n[L];for(let G in D){let I=D[G];for(let k in I){let V=I[k];for(let F in V)h(V[F].object),delete V[F];delete I[k]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let G in D){let I=D[G];for(let k in I){let V=I[k];for(let F in V)h(V[F].object),delete V[F];delete I[k]}}delete n[L.id]}function _(L){for(let D in n){let G=n[D];for(let I in G){let k=G[I];if(k[L.id]===void 0)continue;let V=k[L.id];for(let F in V)h(V[F].object),delete V[F];delete k[L.id]}}}function S(L){for(let D in n){let G=n[D],I=L.isInstancedMesh===!0?L.id:0,k=G[I];if(k!==void 0){for(let V in k){let F=k[V];for(let Q in F)h(F[Q].object),delete F[Q];delete k[V]}delete G[I],Object.keys(G).length===0&&delete n[D]}}}function C(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function FS(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function BS(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==Wi&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==jn&&_!==Ai&&!S&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:T,samples:E}}function zS(s){let t=this,e=null,n=0,i=!1,r=!1,o=new ki,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,M=y*4,v=g.clippingState||null;l.value=v,v=h(p,f,M,u);for(let T=0;T!==M;++T)v[T]=e[T];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=u+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=u;M!==x;++M,v+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var rl=class extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ea(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xe(5,5,5),r=new ts({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Rr});r.uniforms.tEquirect.value=e;let o=new De(i,r),a=e.minFilter;return e.minFilter===Ts&&(e.minFilter=Vn),new Ao(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},ng=256,kS=3,GS=20,wg=256,Eg=16,VS=3,HS=new z,WS=new ae,No=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ao(1,10,null),this._boxMesh=new De(new Xe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=HS}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(WS));let m=new Ao(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ng,Ym(t))}_fromTexture(t,e){t.mapping===Pr||t.mapping===Po?this._setSize(t.image.length===0?ng:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=ig(t,!1,!1),n=Math.log2(t)-kS;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ig(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Pr||t.mapping===Po?(this._cubemapMaterial===null&&(this._cubemapMaterial=rg()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=sg()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=XS(),this._integrationMaterial=qS());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Eg);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-VS)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(wg*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=YS());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function ig(s,t,e){return new rl(s,{minFilter:Ts,generateMipmaps:t,type:Hi,colorSpace:_a,depthBuffer:e})}function ol(s,t,e){return new ts({name:s,uniforms:t,vertexShader:se.cube_vert,fragmentShader:e,side:Tn,blending:Rr,depthTest:!1,depthWrite:!1})}function XS(){return ol("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${wg}u

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
	`)}function qS(){return ol("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Eg}},`

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
	`)}function YS(){return ol("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${GS}
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
	`)}function sg(){return ol("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function rg(){return ol("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ZS(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===eh||u===nh)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new rl(p.height);return x.fromEquirectangularTexture(s,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,p=u===eh||u===nh,x=u===Pr||u===Po;if(p||x){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new No(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new No(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===eh?f.mapping=Pr:u===nh&&(f.mapping=Po),f}function l(f){let u=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&u++;return u===p}function c(f){let u=f.target;u.removeEventListener("dispose",c);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function JS(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&da("WebGLRenderer: "+n+" extension not supported."),i}}}function $S(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?ba:Ma,v=new M(Math.ceil(y/3)*6,1),T=v.array;if(x!==null){let _=x.array;g=x.version;for(let S=0,C=0;S<y;S+=3){let A=_[S+0],L=_[S+1],D=_[S+2];T[C++]=A,T[C++]=L,T[C++]=L,T[C++]=D,T[C++]=D,T[C++]=A}}else{g=m.version;for(let _=0,S=0;_<y;_+=3){let C=_+0,A=_+1,L=_+2;T[S++]=C,T[S++]=A,T[S++]=A,T[S++]=L,T[S++]=L,T[S++]=C}}v.version=g;let E=r.get(p);E&&t.remove(E),r.set(p,v)}function f(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(let p in i){let x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function KS(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let x=0;for(let m=0;m<u;m++)x+=f[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function QS(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function jS(s,t,e){let n=new WeakMap,i=new Ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let C=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;u===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*T*4*d),_=new ya(E,v,T,d);_.type=Ai,_.needsUpdate=!0;let S=M*4;for(let A=0;A<d;A++){let L=m[A],D=g[A],G=y[A],I=v*T*4*A;for(let k=0;k<L.count;k++){let V=k*S;u===!0&&(i.fromBufferAttribute(L,k),E[I+V+0]=i.x,E[I+V+1]=i.y,E[I+V+2]=i.z,E[I+V+3]=0),p===!0&&(i.fromBufferAttribute(D,k),E[I+V+4]=i.x,E[I+V+5]=i.y,E[I+V+6]=i.z,E[I+V+7]=0),x===!0&&(i.fromBufferAttribute(G,k),E[I+V+8]=i.x,E[I+V+9]=i.y,E[I+V+10]=i.z,E[I+V+11]=G.itemSize===4?i.w:1)}}f={count:d,texture:_,size:new Tt(v,T)},n.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function tM(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var eM={[Pf]:"LINEAR_TONE_MAPPING",[If]:"REINHARD_TONE_MAPPING",[Lf]:"CINEON_TONE_MAPPING",[Za]:"ACES_FILMIC_TONE_MAPPING",[Nf]:"AGX_TONE_MAPPING",[Of]:"NEUTRAL_TONE_MAPPING",[Df]:"CUSTOM_TONE_MAPPING"};function nM(s,t,e,n,i,r){let o=new fi(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new di;h.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ie([0,2,0,0,2,0],2));let d=new zc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new De(h,d),u=new qa(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,y=null,M=[],v=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),l!==null&&l.setSize(T,E);for(let _=0;_<M.length;_++){let S=M[_];S.setSize&&S.setSize(T,E)}},this.setEffects=function(T){M=T,v=M.length>0&&M[0].isRenderPass===!0;let E=o.width,_=o.height;M.length>0&&a===null&&(a=new fi(E,_,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),l=new fi(E,_,{type:Hi,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&M.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ms(E,_),r===!0&&(c.format=ws,c.type=Ir)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<M.length;C++){let A=M[C];A.setSize&&A.setSize(E,_),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(T,E){if(m||T.toneMapping===ns&&M.length===0)return!1;if(y=E,E!==null){let _=E.width,S=E.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return v===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=ns,!0},this.hasRenderPass=function(){return v},this.end=function(T,E){T.toneMapping=g,m=!0;let _=o,S=a;for(let C=0;C<M.length;C++){let A=M[C];A.enabled!==!1&&(A.render(T,S,_,E),A.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(p!==T.outputColorSpace||x!==T.toneMapping){p=T.outputColorSpace,x=T.toneMapping,d.defines={},pe.getTransfer(p)===Se&&(d.defines.SRGB_TRANSFER="");let C=eM[x];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(y),T.render(f,u),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Ag=new Qn,Rg=new Ms(1,1),Cg=new Aa(1),Pg=new ya,Ig=new Pc,Lg=new Ea,og=[],ag=[],lg=new Float32Array(16),cg=new Float32Array(9),hg=new Float32Array(4);function Oo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=og[i];if(r===void 0&&(r=new Float32Array(i),og[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function fn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function dn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Wh(s,t){let e=ag[t];e===void 0&&(e=new Int32Array(t),ag[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function iM(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function sM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2fv(this.addr,t),dn(e,t)}}function rM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;s.uniform3fv(this.addr,t),dn(e,t)}}function oM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4fv(this.addr,t),dn(e,t)}}function aM(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;hg.set(n),s.uniformMatrix2fv(this.addr,!1,hg),dn(e,n)}}function lM(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;cg.set(n),s.uniformMatrix3fv(this.addr,!1,cg),dn(e,n)}}function cM(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;lg.set(n),s.uniformMatrix4fv(this.addr,!1,lg),dn(e,n)}}function hM(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function uM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2iv(this.addr,t),dn(e,t)}}function fM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;s.uniform3iv(this.addr,t),dn(e,t)}}function dM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4iv(this.addr,t),dn(e,t)}}function pM(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function mM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2uiv(this.addr,t),dn(e,t)}}function gM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;s.uniform3uiv(this.addr,t),dn(e,t)}}function _M(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4uiv(this.addr,t),dn(e,t)}}function Xh(s){return s.version===0&&(s.compareFunction=Xf,s.needsUpdate=!0),s}function xM(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Xh(Rg):r=Ag,e.setTexture2D(t||r,i)}function vM(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ig,i)}function yM(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Xh(Cg):r=Lg,e.setTextureCube(t||r,i)}function SM(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Pg,i)}function MM(s){switch(s){case 5126:return iM;case 35664:return sM;case 35665:return rM;case 35666:return oM;case 35674:return aM;case 35675:return lM;case 35676:return cM;case 5124:case 35670:return hM;case 35667:case 35671:return uM;case 35668:case 35672:return fM;case 35669:case 35673:return dM;case 5125:return pM;case 36294:return mM;case 36295:return gM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return yM;case 36289:case 36303:case 36311:case 36292:return SM}}function bM(s,t){s.uniform1fv(this.addr,t)}function TM(s,t){let e=Oo(t,this.size,2);s.uniform2fv(this.addr,e)}function wM(s,t){let e=Oo(t,this.size,3);s.uniform3fv(this.addr,e)}function EM(s,t){let e=Oo(t,this.size,4);s.uniform4fv(this.addr,e)}function AM(s,t){let e=Oo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function RM(s,t){let e=Oo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function CM(s,t){let e=Oo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function PM(s,t){s.uniform1iv(this.addr,t)}function IM(s,t){s.uniform2iv(this.addr,t)}function LM(s,t){s.uniform3iv(this.addr,t)}function DM(s,t){s.uniform4iv(this.addr,t)}function NM(s,t){s.uniform1uiv(this.addr,t)}function OM(s,t){s.uniform2uiv(this.addr,t)}function UM(s,t){s.uniform3uiv(this.addr,t)}function FM(s,t){s.uniform4uiv(this.addr,t)}function BM(s,t,e){let n=this.cache,i=t.length,r=Wh(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Xh(Rg):o=Ag;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function zM(s,t,e){let n=this.cache,i=t.length,r=Wh(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ig,r[o])}function kM(s,t,e){let n=this.cache,i=t.length,r=Wh(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Xh(Cg):o=Lg;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function GM(s,t,e){let n=this.cache,i=t.length,r=Wh(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Pg,r[o])}function VM(s){switch(s){case 5126:return bM;case 35664:return TM;case 35665:return wM;case 35666:return EM;case 35674:return AM;case 35675:return RM;case 35676:return CM;case 5124:case 35670:return PM;case 35667:case 35671:return IM;case 35668:case 35672:return LM;case 35669:case 35673:return DM;case 5125:return NM;case 36294:return OM;case 36295:return UM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return GM}}var ad=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=MM(e.type)}},ld=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=VM(e.type)}},cd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},rd=/(\w+)(\])?(\[|\.)?/g;function ug(s,t){s.seq.push(t),s.map[t.id]=t}function HM(s,t,e){let n=s.name,i=n.length;for(rd.lastIndex=0;;){let r=rd.exec(n),o=rd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ug(e,c===void 0?new ad(a,s,t):new ld(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new cd(a),ug(e,d)),e=d}}}var Do=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);HM(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function fg(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var WM=37297,XM=0;function qM(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var dg=new jt;function YM(s){pe._getMatrix(dg,pe.workingColorSpace,s);let t=`mat3( ${dg.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(s)){case xa:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function pg(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+qM(s.getShaderSource(t),a)}else return r}function ZM(s,t){let e=YM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var JM={[Pf]:"Linear",[If]:"Reinhard",[Lf]:"Cineon",[Za]:"ACESFilmic",[Nf]:"AgX",[Of]:"Neutral",[Df]:"Custom"};function $M(s,t){let e=JM[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vh=new z;function KM(){pe.getLuminanceCoefficients(Vh);let s=Vh.x.toFixed(4),t=Vh.y.toFixed(4),e=Vh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function jM(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tb(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function sl(s){return s!==""}function mg(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function gg(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(s){return s.replace(eb,nb)}function nb(s,t){let e=se[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return hd(e)}var ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _g(s){return s.replace(ib,sb)}function sb(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xg(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var rb={[Ya]:"SHADOWMAP_TYPE_PCF",[Ro]:"SHADOWMAP_TYPE_VSM"};function ob(s){return rb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ab={[Po]:"ENVMAP_MODE_REFRACTION"};function lb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ab[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cb={[th]:"ENVMAP_BLENDING_MULTIPLY",[Im]:"ENVMAP_BLENDING_MIX",[Lm]:"ENVMAP_BLENDING_ADD"};function hb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":cb[s.combine]||"ENVMAP_BLENDING_NONE"}function ub(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ob(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=lb(e),d=hb(e),f=QM(e),u=jM(r),p=i.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(sl).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(sl).join(`
`),m.length>0&&(m+=`
`)):(x=[xg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),m=[xg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ns?"#define TONE_MAPPING":"",e.toneMapping!==ns?se.tonemapping_pars_fragment:"",e.toneMapping!==ns?$M("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,ZM("linearToOutputTexel",e.outputColorSpace),KM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sl).join(`
`)),o=hd(o),o=mg(o,e),o=gg(o,e),a=hd(a),a=mg(a,e),a=gg(a,e),o=_g(o),a=_g(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+o,M=g+m+a,v=fg(i,i.VERTEX_SHADER,y),T=fg(i,i.FRAGMENT_SHADER,M);i.attachShader(p,v),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function E(A){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(p)||"",D=i.getShaderInfoLog(v)||"",G=i.getShaderInfoLog(T)||"",I=L.trim(),k=D.trim(),V=G.trim(),F=!0,Q=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,v,T);else{let X=pg(i,v,"vertex"),P=pg(i,T,"fragment");$t("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+X+`
`+P)}else I!==""?Zt("WebGLProgram: Program Info Log:",I):(k===""||V==="")&&(Q=!1);Q&&(A.diagnostics={runnable:F,programLog:I,vertexShader:{log:k,prefix:x},fragmentShader:{log:V,prefix:m}})}i.deleteShader(v),i.deleteShader(T),_=new Do(i,p),S=tb(i,p)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(p,WM)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=XM++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=T,this}var fb=0,ud=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new fd(t),e.set(t,n)),n}},fd=class{constructor(t){this.id=fb++,this.code=t,this.usedTimes=0}};function db(s){return s===er||s===tl||s===el}function pb(s,t,e,n,i,r){let o=new Sa,a=new ud,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,C,A,L,D){let G=A.fog,I=L.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=t.get(_.envMap||k,V),Q=f[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Zt("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let P=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=P!==void 0?P.length:0,wt=0;I.morphAttributes.position!==void 0&&(wt=1),I.morphAttributes.normal!==void 0&&(wt=2),I.morphAttributes.color!==void 0&&(wt=3);let Ft,Z,ut,Mt;if(Q){let it=ss[Q];Ft=it.vertexShader,Z=it.fragmentShader}else{Ft=_.vertexShader,Z=_.fragmentShader;let it=a.getVertexShaderStage(_),Pt=a.getFragmentShaderStage(_);a.update(_,it,Pt),ut=it.id,Mt=Pt.id}let Rt=s.getRenderTarget(),gt=s.state.buffers.depth.getReversed(),Dt=L.isInstancedMesh===!0,_e=L.isBatchedMesh===!0,Nt=!!_.map,Xt=!!_.matcap,Lt=!!F,K=Lt&&F.isPMREMTexture===!0,lt=!!_.aoMap,ct=!!_.lightMap,B=!!_.bumpMap&&_.wireframe===!1,dt=!!_.normalMap,qt=!!_.displacementMap,Ot=!!_.emissiveMap,Vt=!!_.metalnessMap,Qt=!!_.roughnessMap,ne=_.anisotropy>0,U=_.clearcoat>0,oe=_.diffuseRoughness>0,Kt=_.dispersion>0,Jt=_.retroreflectivity>0,pt=_.iridescence>0,me=_.sheen>0,zt=_.transmission>0,Yt=ne&&!!_.anisotropyMap,R=U&&!!_.clearcoatMap,b=U&&!!_.clearcoatNormalMap,W=U&&!!_.clearcoatRoughnessMap,ot=oe&&!!_.diffuseRoughnessMap,st=pt&&!!_.iridescenceMap,mt=pt&&!!_.iridescenceThicknessMap,yt=me&&!!_.sheenColorMap,q=me&&!!_.sheenRoughnessMap,et=!!_.specularMap,ft=!!_.specularColorMap,N=!!_.specularIntensityMap,tt=zt&&!!_.transmissionMap,$=zt&&!!_.thicknessMap,_t=!!_.gradientMap,ht=!!_.alphaMap,xt=_.alphaTest>0,at=!!_.alphaHash,vt=!!_.extensions,rt=ns;_.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(rt=s.toneMapping);let nt=K?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,St={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Ft,fragmentShader:Z,defines:_.defines,customVertexShaderID:ut,customFragmentShaderID:Mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:_e,batchingColor:_e&&L._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&L.instanceColor!==null,instancingMorph:Dt&&L.morphTexture!==null,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Nt,matcap:Xt,envMap:Lt,envMapMode:Lt&&F.mapping,envMapPMREM:K,envMapMaxLod:K?nt.length-1:null,envMapSize:K?nt[0].width:null,aoMap:lt,lightMap:ct,bumpMap:B,normalMap:dt,displacementMap:qt,emissiveMap:Ot,normalMapObjectSpace:dt&&_.normalMapType===Om,normalMapTangentSpace:dt&&_.normalMapType===nl,packedNormalMap:dt&&_.normalMapType===nl&&db(_.normalMap.format),metalnessMap:Vt,roughnessMap:Qt,anisotropy:ne,anisotropyMap:Yt,clearcoat:U,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:W,diffuseRoughness:oe,diffuseRoughnessMap:ot,dispersion:Kt,retroreflection:Jt,iridescence:pt,iridescenceMap:st,iridescenceThicknessMap:mt,sheen:me,sheenColorMap:yt,sheenRoughnessMap:q,specularMap:et,specularColorMap:ft,specularIntensityMap:N,transmission:zt,transmissionMap:tt,thicknessMap:$,gradientMap:_t,opaque:_.transparent===!1&&_.blending===Co&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:xt,alphaHash:at,combine:_.combine,mapUv:Nt&&u(_.map.channel),aoMapUv:lt&&u(_.aoMap.channel),lightMapUv:ct&&u(_.lightMap.channel),bumpMapUv:B&&u(_.bumpMap.channel),normalMapUv:dt&&u(_.normalMap.channel),displacementMapUv:qt&&u(_.displacementMap.channel),emissiveMapUv:Ot&&u(_.emissiveMap.channel),metalnessMapUv:Vt&&u(_.metalnessMap.channel),roughnessMapUv:Qt&&u(_.roughnessMap.channel),anisotropyMapUv:Yt&&u(_.anisotropyMap.channel),clearcoatMapUv:R&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:st&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:q&&u(_.sheenRoughnessMap.channel),specularMapUv:et&&u(_.specularMap.channel),specularColorMapUv:ft&&u(_.specularColorMap.channel),specularIntensityMapUv:N&&u(_.specularIntensityMap.channel),transmissionMapUv:tt&&u(_.transmissionMap.channel),thicknessMapUv:$&&u(_.thicknessMap.channel),alphaMapUv:ht&&u(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(dt||ne),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Nt||ht),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:wt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(it=>it.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:Nt&&_.map.isVideoTexture===!0&&pe.getTransfer(_.map.colorSpace)===Se,decodeVideoTextureEmissive:Ot&&_.emissiveMap.isVideoTexture===!0&&pe.getTransfer(_.emissiveMap.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===es,flipSided:_.side===Tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:vt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&_.extensions.multiDraw===!0||_e)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)S.push(C),S.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(S,_),g(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let S=f[_.type],C;if(S){let A=ss[S];C=jm.clone(A.uniforms)}else C=_.uniforms;return C}function M(_,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new ub(s,S,_,i),c.push(C),h.set(S,C)),C}function v(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:M,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:E}}function mb(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function gb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function vg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function yg(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,x,m,g){let y=s[t];return y===void 0?(y={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},s[t]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=p,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=m,y.group=g),t++,y}function l(f,u,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let M=a(f,u,p,x,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):e.push(M)}function c(f,u,p,x,m,g){let y=a(f,u,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):e.unshift(y)}function h(f,u){e.length>1&&e.sort(f||gb),n.length>1&&n.sort(u||vg),i.length>1&&i.sort(u||vg)}function d(){for(let f=t,u=s.length;f<u;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function _b(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new yg,s.set(n,[o])):i>=r.length?(o=new yg,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function xb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new ae};break;case"SpotLight":e={position:new z,direction:new z,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new z,halfWidth:new z,halfHeight:new z};break}return s[t.id]=e,e}}}function vb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var yb=0;function Sb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Mb(s){let t=new xb,e=vb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let i=new z,r=new Te,o=new Te;function a(c){let h=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,y=0,M=0,v=0,T=0,E=0,_=0,S=0,C=0,A=0;c.sort(Sb);for(let D=0,G=c.length;D<G;D++){let I=c[D],k=I.color,V=I.intensity,F=I.distance,Q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===er?Q=I.shadow.map.texture:Q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*V,d+=k.g*V,f+=k.b*V;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],V);A++}else if(I.isSunLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,j=e.get(I);j.shadowIntensity=P.intensity,j.shadowBias=P.bias,j.shadowNormalBias=P.normalBias,j.shadowRadius=P.radius,j.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[p]=j,n.sunShadowMap[p]=Q;let wt=P.getViewportCount();for(let Ft=0;Ft<wt;Ft++)n.sunShadowMatrix[x+Ft]=P.getMatrix(Ft),n.sunShadowCascade[x+Ft]=P._cascadeData[Ft];x+=wt,p++}n.sun[u]=X,u++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,j=e.get(I);j.shadowIntensity=P.intensity,j.shadowBias=P.bias,j.shadowNormalBias=P.normalBias,j.shadowRadius=P.radius,j.shadowMapSize=P.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=I.shadow.matrix,T++}n.directional[m]=X,m++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(k).multiplyScalar(V),X.distance=F,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[y]=X;let P=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,P.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[y]=P.matrix,I.castShadow){let j=e.get(I);j.shadowIntensity=P.intensity,j.shadowBias=P.bias,j.shadowNormalBias=P.normalBias,j.shadowRadius=P.radius,j.shadowMapSize=P.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=Q,_++}y++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(k).multiplyScalar(V),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=X,M++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let P=I.shadow,j=e.get(I);j.shadowIntensity=P.intensity,j.shadowBias=P.bias,j.shadowNormalBias=P.normalBias,j.shadowRadius=P.radius,j.shadowMapSize=P.mapSize,j.shadowCameraNear=P.camera.near,j.shadowCameraFar=P.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=X,g++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(V),X.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[v]=X,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let L=n.hash;(L.sunLength!==u||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==M||L.hemiLength!==v||L.numSunShadows!==p||L.numDirectionalShadows!==T||L.numPointShadows!==E||L.numSpotShadows!==_||L.numSpotMaps!==S||L.numLightProbes!==A)&&(n.sun.length=u,n.directional.length=m,n.spot.length=y,n.rectArea.length=M,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,L.sunLength=u,L.directionalLength=m,L.pointLength=g,L.spotLength=y,L.rectAreaLength=M,L.hemiLength=v,L.numSunShadows=p,L.numDirectionalShadows=T,L.numPointShadows=E,L.numSpotShadows=_,L.numSpotMaps=S,L.numLightProbes=A,n.version=yb++)}function l(c,h){let d=0,f=0,u=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),f++}else if(v.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Sg(s){let t=new Mb(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function bb(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Sg(s),t.set(i,[a])):r>=o.length?(a=new Sg(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
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
}`,Eb=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Ab=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Mg=new Te,il=new z,od=new z;function Rb(s,t,e){let n=new Ys,i=new Tt,r=new Tt,o=new Ue,a=new kc,l=new Gc,c={},h=e.maxTextureSize,d={[tr]:Tn,[Tn]:tr,[es]:es},f=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Tb,fragmentShader:wb}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new di;p.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new De(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let g=this.type;this.render=function(E,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===fm&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ya);let C=s.getRenderTarget(),A=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Rr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let G=g!==this.type;G&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=E.length;I<k;I++){let V=E[I],F=V.shadow;if(F===void 0){Zt("WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let Q=F.getFrameExtents();i.multiply(Q),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,F.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=X,F.map===null||G===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ro){if(V.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new fi(i.x,i.y,{format:er,type:Hi,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),F.map.texture.name=V.name+".shadowMap",F.map.depthTexture=new Ms(i.x,i.y,Ai),F.map.depthTexture.name=V.name+".shadowMapDepth",F.map.depthTexture.format=ys,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=xn,F.map.depthTexture.magFilter=xn}else V.isPointLight?(F.map=new rl(i.x),F.map.depthTexture=new Aa(i.x,Vi)):(F.map=new fi(i.x,i.y),F.map.depthTexture=new Ms(i.x,i.y,Vi)),F.map.depthTexture.name=V.name+".shadowMap",F.map.depthTexture.format=ys,this.type===Ya?(F.map.depthTexture.compareFunction=X?Wf:Hf,F.map.depthTexture.minFilter=Vn,F.map.depthTexture.magFilter=Vn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=xn,F.map.depthTexture.magFilter=xn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let P=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();V.isPointLight!==!0&&F.updateMatrices(V,S);let j=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:S.layers;for(let wt=0;wt<P;wt++){let Ft=F.getCamera(wt);if(V.isPointLight){let Z=F.camera,ut=F.matrix,Mt=V.distance||Z.far;Mt!==Z.far&&(Z.far=Mt,Z.updateProjectionMatrix()),il.setFromMatrixPosition(V.matrixWorld),Z.position.copy(il),od.copy(Z.position),od.add(Eb[wt]),Z.up.copy(Ab[wt]),Z.lookAt(od),Z.updateMatrixWorld(),ut.makeTranslation(-il.x,-il.y,-il.z),Mg.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Mg,Z.coordinateSystem,Z.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,wt),s.clear();else{wt===0&&(s.setRenderTarget(F.map),s.clear());let Z=F.getViewport(wt);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),D.viewport(o)}n=F.getFrustum(wt),v(_,S,Ft,V,j,this.type)}F.isPointLightShadow!==!0&&this.type===Ro&&y(F,S),F.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(C,A,L)};function y(E,_){let S=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new fi(i.x,i.y,{format:er,type:Hi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(_,null,S,f,x,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(_,null,S,u,x,null)}function M(E,_,S,C){let A=null,L=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)A=L;else if(A=S.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let D=A.uuid,G=_.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let k=I[G];k===void 0&&(k=A.clone(),I[G]=k,_.addEventListener("dispose",T)),A=k}if(A.visible=_.visible,A.wireframe=_.wireframe,C===Ro?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:d[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=s.properties.get(A);D.light=S}return A}function v(E,_,S,C,A,L){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Ro)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let I=t.update(E),k=E.material;if(Array.isArray(k)){let V=I.groups;for(let F=0,Q=V.length;F<Q;F++){let X=V[F],P=k[X.materialIndex];if(P&&P.visible){let j=M(E,P,C,L);E.onBeforeShadow(s,E,_,S,I,j,X),s.renderBufferDirect(S,null,I,j,E,X),E.onAfterShadow(s,E,_,S,I,j,X)}}}else if(k.visible){let V=M(E,k,C,L);E.onBeforeShadow(s,E,_,S,I,V,null),s.renderBufferDirect(S,null,I,V,E,null),E.onAfterShadow(s,E,_,S,I,V,null)}}let G=E.children;for(let I=0,k=G.length;I<k;I++)v(G[I],_,S,C,A,L)}function T(E){E.target.removeEventListener("dispose",T);for(let S in c){let C=c[S],A=E.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function Cb(s,t){function e(){let N=!1,tt=new Ue,$=null,_t=new Ue(0,0,0,0);return{setMask:function(ht){$!==ht&&!N&&(s.colorMask(ht,ht,ht,ht),$=ht)},setLocked:function(ht){N=ht},setClear:function(ht,xt,at,vt,rt){rt===!0&&(ht*=vt,xt*=vt,at*=vt),tt.set(ht,xt,at,vt),_t.equals(tt)===!1&&(s.clearColor(ht,xt,at,vt),_t.copy(tt))},reset:function(){N=!1,$=null,_t.set(-1,0,0,0)}}}function n(){let N=!1,tt=!1,$=null,_t=null,ht=null;return{setReversed:function(xt){if(tt!==xt){let at=t.get("EXT_clip_control");xt?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),tt=xt;let vt=ht;ht=null,this.setClear(vt)}},getReversed:function(){return tt},setTest:function(xt){xt?gt(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(xt){$!==xt&&!N&&(s.depthMask(xt),$=xt)},setFunc:function(xt){if(tt&&(xt=qm[xt]),_t!==xt){switch(xt){case _c:s.depthFunc(s.NEVER);break;case xc:s.depthFunc(s.ALWAYS);break;case vc:s.depthFunc(s.LESS);break;case _o:s.depthFunc(s.LEQUAL);break;case yc:s.depthFunc(s.EQUAL);break;case Sc:s.depthFunc(s.GEQUAL);break;case Mc:s.depthFunc(s.GREATER);break;case bc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=xt}},setLocked:function(xt){N=xt},setClear:function(xt){ht!==xt&&(ht=xt,tt&&(xt=1-xt),s.clearDepth(xt))},reset:function(){N=!1,$=null,_t=null,ht=null,tt=!1}}}function i(){let N=!1,tt=null,$=null,_t=null,ht=null,xt=null,at=null,vt=null,rt=null;return{setTest:function(nt){N||(nt?gt(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(nt){tt!==nt&&!N&&(s.stencilMask(nt),tt=nt)},setFunc:function(nt,St,it){($!==nt||_t!==St||ht!==it)&&(s.stencilFunc(nt,St,it),$=nt,_t=St,ht=it)},setOp:function(nt,St,it){(xt!==nt||at!==St||vt!==it)&&(s.stencilOp(nt,St,it),xt=nt,at=St,vt=it)},setLocked:function(nt){N=nt},setClear:function(nt){rt!==nt&&(s.clearStencil(nt),rt=nt)},reset:function(){N=!1,tt=null,$=null,_t=null,ht=null,xt=null,at=null,vt=null,rt=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,M=null,v=null,T=null,E=null,_=null,S=new ae(0,0,0),C=0,A=!1,L=null,D=null,G=null,I=null,k=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Q=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=Q>=2);let P=null,j={},wt=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),Z=new Ue().fromArray(wt),ut=new Ue().fromArray(Ft);function Mt(N,tt,$,_t){let ht=new Uint8Array(4),xt=s.createTexture();s.bindTexture(N,xt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<$;at++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(tt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(tt+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return xt}let Rt={};Rt[s.TEXTURE_2D]=Mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=Mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[s.TEXTURE_2D_ARRAY]=Mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=Mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(s.DEPTH_TEST),o.setFunc(_o),B(!1),dt(Tf),gt(s.CULL_FACE),lt(Rr);function gt(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Dt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function _e(N,tt){return f[N]!==tt?(s.bindFramebuffer(N,tt),f[N]=tt,N===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=tt),N===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=tt),!0):!1}function Nt(N,tt){let $=p,_t=!1;if(N){$=u.get(tt),$===void 0&&($=[],u.set(tt,$));let ht=N.textures;if($.length!==ht.length||$[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,at=ht.length;xt<at;xt++)$[xt]=s.COLOR_ATTACHMENT0+xt;$.length=ht.length,_t=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,_t=!0);_t&&s.drawBuffers($)}function Xt(N){return x!==N?(s.useProgram(N),x=N,!0):!1}let Lt={[Cr]:s.FUNC_ADD,[pm]:s.FUNC_SUBTRACT,[mm]:s.FUNC_REVERSE_SUBTRACT};Lt[gm]=s.MIN,Lt[_m]=s.MAX;let K={[xm]:s.ZERO,[vm]:s.ONE,[ym]:s.SRC_COLOR,[Rf]:s.SRC_ALPHA,[Em]:s.SRC_ALPHA_SATURATE,[Tm]:s.DST_COLOR,[Mm]:s.DST_ALPHA,[Sm]:s.ONE_MINUS_SRC_COLOR,[Cf]:s.ONE_MINUS_SRC_ALPHA,[wm]:s.ONE_MINUS_DST_COLOR,[bm]:s.ONE_MINUS_DST_ALPHA,[Am]:s.CONSTANT_COLOR,[Rm]:s.ONE_MINUS_CONSTANT_COLOR,[Cm]:s.CONSTANT_ALPHA,[Pm]:s.ONE_MINUS_CONSTANT_ALPHA};function lt(N,tt,$,_t,ht,xt,at,vt,rt,nt){if(N===Rr){m===!0&&(Dt(s.BLEND),m=!1);return}if(m===!1&&(gt(s.BLEND),m=!0),N!==dm){if(N!==g||nt!==A){if((y!==Cr||T!==Cr)&&(s.blendEquation(s.FUNC_ADD),y=Cr,T=Cr),nt)switch(N){case Co:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wf:s.blendFunc(s.ONE,s.ONE);break;case Ef:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Af:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:$t("WebGLState: Invalid blending: ",N);break}else switch(N){case Co:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ef:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Af:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",N);break}M=null,v=null,E=null,_=null,S.set(0,0,0),C=0,g=N,A=nt}return}ht=ht||tt,xt=xt||$,at=at||_t,(tt!==y||ht!==T)&&(s.blendEquationSeparate(Lt[tt],Lt[ht]),y=tt,T=ht),($!==M||_t!==v||xt!==E||at!==_)&&(s.blendFuncSeparate(K[$],K[_t],K[xt],K[at]),M=$,v=_t,E=xt,_=at),(vt.equals(S)===!1||rt!==C)&&(s.blendColor(vt.r,vt.g,vt.b,rt),S.copy(vt),C=rt),g=N,A=!1}function ct(N,tt){N.side===es?Dt(s.CULL_FACE):gt(s.CULL_FACE);let $=N.side===Tn;tt&&($=!$),B($),N.blending===Co&&N.transparent===!1?lt(Rr):lt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let _t=N.stencilWrite;a.setTest(_t),_t&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function B(N){L!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),L=N)}function dt(N){N!==hm?(gt(s.CULL_FACE),N!==D&&(N===Tf?s.cullFace(s.BACK):N===um?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),D=N}function qt(N){N!==G&&(F&&s.lineWidth(N),G=N)}function Ot(N,tt,$){N?(gt(s.POLYGON_OFFSET_FILL),(I!==tt||k!==$)&&(I=tt,k=$,o.getReversed()&&(tt=-tt,$=-$),s.polygonOffset(tt,$))):Dt(s.POLYGON_OFFSET_FILL)}function Vt(N){N?gt(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function Qt(N){N===void 0&&(N=s.TEXTURE0+V-1),P!==N&&(s.activeTexture(N),P=N)}function ne(N,tt,$){$===void 0&&(P===null?$=s.TEXTURE0+V-1:$=P);let _t=j[$];_t===void 0&&(_t={type:void 0,texture:void 0},j[$]=_t),(_t.type!==N||_t.texture!==tt)&&(P!==$&&(s.activeTexture($),P=$),s.bindTexture(N,tt||Rt[N]),_t.type=N,_t.texture=tt)}function U(){let N=j[P];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function oe(){try{s.compressedTexImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function Kt(){try{s.compressedTexImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function Jt(){try{s.texSubImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function pt(){try{s.texSubImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function me(){try{s.compressedTexSubImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function zt(){try{s.compressedTexSubImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function Yt(){try{s.texStorage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function R(){try{s.texStorage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function b(){try{s.texImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function W(){try{s.texImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function ot(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function st(N,tt){d[N]!==tt&&(s.pixelStorei(N,tt),d[N]=tt)}function mt(N){Z.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function yt(N){ut.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ut.copy(N))}function q(N,tt){let $=c.get(tt);$===void 0&&($=new WeakMap,c.set(tt,$));let _t=$.get(N);_t===void 0&&(_t=s.getUniformBlockIndex(tt,N.name),s.uniformBlockBinding(tt,_t,_t),$.set(N,_t))}function et(N,tt,$){let ht=c.get(tt).get(N);l[ht]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,ht,$),l[ht]=$)}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},P=null,j={},f={},l={},u=new WeakMap,p=[],x=null,m=!1,g=null,y=null,M=null,v=null,T=null,E=null,_=null,S=new ae(0,0,0),C=0,A=!1,L=null,D=null,G=null,I=null,k=null,Z.set(0,0,s.canvas.width,s.canvas.height),ut.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:Dt,bindFramebuffer:_e,drawBuffers:Nt,useProgram:Xt,setBlending:lt,setMaterial:ct,setFlipSided:B,setCullFace:dt,setLineWidth:qt,setPolygonOffset:Ot,setScissorTest:Vt,activeTexture:Qt,bindTexture:ne,unbindTexture:U,compressedTexImage2D:oe,compressedTexImage3D:Kt,texImage2D:b,texImage3D:W,pixelStorei:st,getParameter:ot,updateUBOMapping:q,uniformBlockBinding:et,texStorage2D:Yt,texStorage3D:R,texSubImage2D:Jt,texSubImage3D:pt,compressedTexSubImage2D:me,compressedTexSubImage3D:zt,scissor:mt,viewport:yt,reset:ft}}function Pb(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,d=new Set,f,u=new WeakMap,p=new Set,x=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return m?new OffscreenCanvas(R,b):va("canvas")}function y(R,b,W){let ot=1,st=Yt(R);if((st.width>W||st.height>W)&&(ot=W/Math.max(st.width,st.height)),ot<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let mt=Math.floor(ot*st.width),yt=Math.floor(ot*st.height);f===void 0&&(f=g(mt,yt));let q=b?g(mt,yt):f;return q.width=mt,q.height=yt,q.getContext("2d").drawImage(R,0,0,mt,yt),Zt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+mt+"x"+yt+")."),q}else return"data"in R&&Zt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function M(R){return R.generateMipmaps}function v(R){s.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(R,b,W,ot,st,mt=!1){if(R!==null){if(s[R]!==void 0)return s[R];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let yt;ot&&(yt=t.get("EXT_texture_norm16"),yt||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=b;if(b===s.RED&&(W===s.FLOAT&&(q=s.R32F),W===s.HALF_FLOAT&&(q=s.R16F),W===s.UNSIGNED_BYTE&&(q=s.R8),W===s.UNSIGNED_SHORT&&yt&&(q=yt.R16_EXT),W===s.SHORT&&yt&&(q=yt.R16_SNORM_EXT)),b===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(q=s.R8UI),W===s.UNSIGNED_SHORT&&(q=s.R16UI),W===s.UNSIGNED_INT&&(q=s.R32UI),W===s.BYTE&&(q=s.R8I),W===s.SHORT&&(q=s.R16I),W===s.INT&&(q=s.R32I)),b===s.RG&&(W===s.FLOAT&&(q=s.RG32F),W===s.HALF_FLOAT&&(q=s.RG16F),W===s.UNSIGNED_BYTE&&(q=s.RG8),W===s.UNSIGNED_SHORT&&yt&&(q=yt.RG16_EXT),W===s.SHORT&&yt&&(q=yt.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(q=s.RG8UI),W===s.UNSIGNED_SHORT&&(q=s.RG16UI),W===s.UNSIGNED_INT&&(q=s.RG32UI),W===s.BYTE&&(q=s.RG8I),W===s.SHORT&&(q=s.RG16I),W===s.INT&&(q=s.RG32I)),b===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(q=s.RGB8UI),W===s.UNSIGNED_SHORT&&(q=s.RGB16UI),W===s.UNSIGNED_INT&&(q=s.RGB32UI),W===s.BYTE&&(q=s.RGB8I),W===s.SHORT&&(q=s.RGB16I),W===s.INT&&(q=s.RGB32I)),b===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),W===s.UNSIGNED_INT&&(q=s.RGBA32UI),W===s.BYTE&&(q=s.RGBA8I),W===s.SHORT&&(q=s.RGBA16I),W===s.INT&&(q=s.RGBA32I)),b===s.RGB&&(W===s.UNSIGNED_SHORT&&yt&&(q=yt.RGB16_EXT),W===s.SHORT&&yt&&(q=yt.RGB16_SNORM_EXT),W===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),b===s.RGBA){let et=mt?xa:pe.getTransfer(st);W===s.FLOAT&&(q=s.RGBA32F),W===s.HALF_FLOAT&&(q=s.RGBA16F),W===s.UNSIGNED_BYTE&&(q=et===Se?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT&&yt&&(q=yt.RGBA16_EXT),W===s.SHORT&&yt&&(q=yt.RGBA16_SNORM_EXT),W===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(R,b){let W;return R?b===null||b===Vi||b===Ir?W=s.DEPTH24_STENCIL8:b===Ai?W=s.DEPTH32F_STENCIL8:b===Io&&(W=s.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Vi||b===Ir?W=s.DEPTH_COMPONENT24:b===Ai?W=s.DEPTH_COMPONENT32F:b===Io&&(W=s.DEPTH_COMPONENT16),W}function S(R,b){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==xn&&R.minFilter!==Vn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){let b=new WeakRef(R);n.get(R).__ref=b,p.add(b),x.register(R,b,b)}function A(R){let b=n.get(R).__ref;b!==void 0&&(p.delete(b),x.unregister(b))}function L(R){G(R.target)}function D(R){I(R.target)}function G(R){R.removeEventListener("dispose",L),A(R),V(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function I(R){R.removeEventListener("dispose",D),A(R),Q(R)}function k(){for(let R of p){let b=R.deref();b!==void 0&&(b.isRenderTarget===!0?I(b):G(b))}p.clear(),d.clear()}function V(R){let b=n.get(R);if(b.__webglInit===void 0)return;let W=R.source,ot=u.get(W);if(ot){let st=ot[b.__cacheKey];st.usedTimes--,st.usedTimes===0&&F(R),Object.keys(ot).length===0&&u.delete(W)}n.remove(R)}function F(R){let b=n.get(R);s.deleteTexture(b.__webglTexture);let W=R.source,ot=u.get(W);delete ot[b.__cacheKey],o.memory.textures--}function Q(R){let b=n.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();let W=R.depthTexture;if(W&&W.renderTarget===R&&G(W),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(b.__webglFramebuffer[st]))for(let mt=0;mt<b.__webglFramebuffer[st].length;mt++)s.deleteFramebuffer(b.__webglFramebuffer[st][mt]);else s.deleteFramebuffer(b.__webglFramebuffer[st]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[st])}else{if(Array.isArray(b.__webglFramebuffer))for(let st=0;st<b.__webglFramebuffer.length;st++)s.deleteFramebuffer(b.__webglFramebuffer[st]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let st=0;st<b.__webglColorRenderbuffer.length;st++)b.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[st]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ot=R.textures;for(let st=0,mt=ot.length;st<mt;st++){let yt=n.get(ot[st]);yt.__webglTexture&&(s.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(ot[st])}n.remove(R)}let X=0;function P(){X=0}function j(){return X}function wt(R){X=R}function Ft(){let R=X;return R>=i.maxTextures&&Zt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,R}function Z(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function ut(R,b){let W=n.get(R);if(R.isVideoTexture&&me(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){let ot=R.image;if(ot===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(W,R,b);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+b)}function Mt(R,b){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){ct(W,R,b);return}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+b)}function Rt(R,b){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){ct(W,R,b);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+b)}function gt(R,b){let W=n.get(R);if(R.version>0&&W.__version!==R.version){B(W,R,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+b)}let Dt={[Tc]:s.REPEAT,[$i]:s.CLAMP_TO_EDGE,[wc]:s.MIRRORED_REPEAT},_e={[xn]:s.NEAREST,[Dm]:s.NEAREST_MIPMAP_NEAREST,[Ja]:s.NEAREST_MIPMAP_LINEAR,[Vn]:s.LINEAR,[ih]:s.LINEAR_MIPMAP_NEAREST,[Ts]:s.LINEAR_MIPMAP_LINEAR},Nt={[Fm]:s.NEVER,[Xf]:s.ALWAYS,[Bm]:s.LESS,[Hf]:s.LEQUAL,[zm]:s.EQUAL,[Wf]:s.GEQUAL,[km]:s.GREATER,[Gm]:s.NOTEQUAL};function Xt(R,b){if(b.type===Ai&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Vn||b.magFilter===ih||b.magFilter===Ja||b.magFilter===Ts||b.minFilter===Vn||b.minFilter===ih||b.minFilter===Ja||b.minFilter===Ts)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Dt[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Dt[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Dt[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,_e[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,_e[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xn||b.minFilter!==Ja&&b.minFilter!==Ts||b.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Lt(R,b){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",L),C(b));let ot=b.source,st=u.get(ot);st===void 0&&(st={},u.set(ot,st));let mt=Z(b);if(mt!==R.__cacheKey){st[mt]===void 0&&(st[mt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),st[mt].usedTimes++;let yt=st[R.__cacheKey];yt!==void 0&&(st[R.__cacheKey].usedTimes--,yt.usedTimes===0&&F(b)),R.__cacheKey=mt,R.__webglTexture=st[mt].texture}return W}function K(R,b,W){return Math.floor(Math.floor(R/W)/b)}function lt(R,b,W,ot){let mt=R.updateRanges;if(mt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,W,ot,b.data);else{mt.sort((N,tt)=>N.start-tt.start);let yt=0;for(let N=1;N<mt.length;N++){let tt=mt[yt],$=mt[N],_t=tt.start+tt.count,ht=K($.start,b.width,4),xt=K(tt.start,b.width,4);$.start<=_t+1&&ht===xt&&K($.start+$.count-1,b.width,4)===ht?tt.count=Math.max(tt.count,$.start+$.count-tt.start):(++yt,mt[yt]=$)}mt.length=yt+1;let q=e.getParameter(s.UNPACK_ROW_LENGTH),et=e.getParameter(s.UNPACK_SKIP_PIXELS),ft=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let N=0,tt=mt.length;N<tt;N++){let $=mt[N],_t=Math.floor($.start/4),ht=Math.ceil($.count/4),xt=_t%b.width,at=Math.floor(_t/b.width),vt=ht,rt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(s.UNPACK_SKIP_ROWS,at),e.texSubImage2D(s.TEXTURE_2D,0,xt,at,vt,rt,W,ot,b.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,et),e.pixelStorei(s.UNPACK_SKIP_ROWS,ft)}}function ct(R,b,W){let ot=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ot=s.TEXTURE_3D);let st=Lt(R,b),mt=b.source;e.bindTexture(ot,R.__webglTexture,s.TEXTURE0+W);let yt=n.get(mt);if(mt.version!==yt.__version||st===!0){if(e.activeTexture(s.TEXTURE0+W),(typeof ImageBitmap!="undefined"&&b.image instanceof ImageBitmap)===!1){let rt=pe.getPrimaries(pe.workingColorSpace),nt=b.colorSpace===Es?null:pe.getPrimaries(b.colorSpace),St=b.colorSpace===Es||rt===nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let et=y(b.image,!1,i.maxTextureSize);et=zt(b,et);let ft=r.convert(b.format,b.colorSpace),N=r.convert(b.type),tt=E(b.internalFormat,ft,N,b.normalized,b.colorSpace,b.isVideoTexture);Xt(ot,b);let $,_t=b.mipmaps,ht=b.isVideoTexture!==!0,xt=yt.__version===void 0||st===!0,at=mt.dataReady,vt=S(b,et);if(b.isDepthTexture)tt=_(b.format===ws,b.type),xt&&(ht?e.texStorage2D(s.TEXTURE_2D,1,tt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,tt,et.width,et.height,0,ft,N,null));else if(b.isDataTexture)if(_t.length>0){ht&&xt&&e.texStorage2D(s.TEXTURE_2D,vt,tt,_t[0].width,_t[0].height);for(let rt=0,nt=_t.length;rt<nt;rt++)$=_t[rt],ht?at&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,$.width,$.height,ft,N,$.data):e.texImage2D(s.TEXTURE_2D,rt,tt,$.width,$.height,0,ft,N,$.data);b.generateMipmaps=!1}else ht?(xt&&e.texStorage2D(s.TEXTURE_2D,vt,tt,et.width,et.height),at&&lt(b,et,ft,N)):e.texImage2D(s.TEXTURE_2D,0,tt,et.width,et.height,0,ft,N,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ht&&xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,tt,_t[0].width,_t[0].height,et.depth);for(let rt=0,nt=_t.length;rt<nt;rt++)if($=_t[rt],b.format!==Wi)if(ft!==null)if(ht){if(at)if(b.layerUpdates.size>0){let St=jf($.width,$.height,b.format,b.type);for(let it of b.layerUpdates){let Pt=$.data.subarray(it*St/$.data.BYTES_PER_ELEMENT,(it+1)*St/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,it,$.width,$.height,1,ft,Pt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,$.width,$.height,et.depth,ft,$.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,tt,$.width,$.height,et.depth,0,$.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?at&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,$.width,$.height,et.depth,ft,N,$.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,tt,$.width,$.height,et.depth,0,ft,N,$.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ht&&xt&&e.texStorage2D(s.TEXTURE_2D,vt,tt,_t[0].width,_t[0].height);for(let rt=0,nt=_t.length;rt<nt;rt++)$=_t[rt],b.format!==Wi?ft!==null?ht?at&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,$.width,$.height,ft,$.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,tt,$.width,$.height,0,$.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?at&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,$.width,$.height,ft,N,$.data):e.texImage2D(s.TEXTURE_2D,rt,tt,$.width,$.height,0,ft,N,$.data)}else if(b.isDataArrayTexture)if(ht){if(xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,tt,et.width,et.height,et.depth),at)if(b.layerUpdates.size>0){let rt=jf(et.width,et.height,b.format,b.type);for(let nt of b.layerUpdates){let St=et.data.subarray(nt*rt/et.data.BYTES_PER_ELEMENT,(nt+1)*rt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,et.width,et.height,1,ft,N,St)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ft,N,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,et.width,et.height,et.depth,0,ft,N,et.data);else if(b.isData3DTexture)ht?(xt&&e.texStorage3D(s.TEXTURE_3D,vt,tt,et.width,et.height,et.depth),at&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ft,N,et.data)):e.texImage3D(s.TEXTURE_3D,0,tt,et.width,et.height,et.depth,0,ft,N,et.data);else if(b.isFramebufferTexture){if(xt)if(ht)e.texStorage2D(s.TEXTURE_2D,vt,tt,et.width,et.height);else{let rt=et.width,nt=et.height;for(let St=0;St<vt;St++)e.texImage2D(s.TEXTURE_2D,St,tt,rt,nt,0,ft,N,null),rt>>=1,nt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let rt=s.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),et.parentNode!==rt){rt.appendChild(et),d.add(b),rt.onpaint=nt=>{let St=nt.changedElements;for(let it of d)St.includes(it.image)&&(it.needsUpdate=!0)},rt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,et);else{let St=s.RGBA,it=s.RGBA,Pt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,St,it,Pt,et)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(_t.length>0){if(ht&&xt){let rt=Yt(_t[0]);e.texStorage2D(s.TEXTURE_2D,vt,tt,rt.width,rt.height)}for(let rt=0,nt=_t.length;rt<nt;rt++)$=_t[rt],ht?at&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,ft,N,$):e.texImage2D(s.TEXTURE_2D,rt,tt,ft,N,$);b.generateMipmaps=!1}else if(ht){if(xt){let rt=Yt(et);e.texStorage2D(s.TEXTURE_2D,vt,tt,rt.width,rt.height)}at&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,N,et)}else e.texImage2D(s.TEXTURE_2D,0,tt,ft,N,et);M(b)&&b.mipmapsAutoUpdate===!0&&v(ot),yt.__version=mt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function B(R,b,W){if(b.image.length!==6)return;let ot=Lt(R,b),st=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+W);let mt=n.get(st);if(st.version!==mt.__version||ot===!0){e.activeTexture(s.TEXTURE0+W);let yt=pe.getPrimaries(pe.workingColorSpace),q=b.colorSpace===Es?null:pe.getPrimaries(b.colorSpace),et=b.colorSpace===Es||yt===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ft=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,tt=[];for(let it=0;it<6;it++)!ft&&!N?tt[it]=y(b.image[it],!0,i.maxCubemapSize):tt[it]=N?b.image[it].image:b.image[it],tt[it]=zt(b,tt[it]);let $=tt[0],_t=r.convert(b.format,b.colorSpace),ht=r.convert(b.type),xt=E(b.internalFormat,_t,ht,b.normalized,b.colorSpace),at=b.isVideoTexture!==!0,vt=mt.__version===void 0||ot===!0,rt=st.dataReady,nt=S(b,$);Xt(s.TEXTURE_CUBE_MAP,b);let St;if(b.isDepthTexture){if(xt=_(b.format===ws,b.type),vt)if(at)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,xt,$.width,$.height);else for(let it=0;it<6;it++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,xt,$.width,$.height,0,_t,ht,null)}else if(ft){at&&vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,xt,$.width,$.height);for(let it=0;it<6;it++){St=tt[it].mipmaps;for(let Pt=0;Pt<St.length;Pt++){let he=St[Pt];b.format!==Wi?_t!==null?at?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,0,0,he.width,he.height,_t,he.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,xt,he.width,he.height,0,he.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,0,0,he.width,he.height,_t,ht,he.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,xt,he.width,he.height,0,_t,ht,he.data)}}}else{if(St=b.mipmaps,at&&vt){St.length>0&&nt++;let it=Yt(tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,xt,it.width,it.height)}for(let it=0;it<6;it++)if(N){at?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,tt[it].width,tt[it].height,_t,ht,tt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,xt,tt[it].width,tt[it].height,0,_t,ht,tt[it].data);for(let Pt=0;Pt<St.length;Pt++){let te=St[Pt].image[it].image;at?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,0,0,te.width,te.height,_t,ht,te.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,xt,te.width,te.height,0,_t,ht,te.data)}}else{at?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,_t,ht,tt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,xt,_t,ht,tt[it]);for(let Pt=0;Pt<St.length;Pt++){let he=St[Pt];at?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,0,0,_t,ht,he.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,xt,_t,ht,he.image[it])}}}M(b)&&b.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),mt.__version=st.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function dt(R,b,W,ot,st,mt){let yt=r.convert(W.format,W.colorSpace),q=r.convert(W.type),et=E(W.internalFormat,yt,q,W.normalized,W.colorSpace),ft=n.get(b),N=n.get(W);if(N.__renderTarget=b,!ft.__hasExternalTextures){let tt=Math.max(1,b.width>>mt),$=Math.max(1,b.height>>mt);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,mt,et,tt,$,b.depth,0,yt,q,null):e.texImage2D(st,mt,et,tt,$,0,yt,q,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),pt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,st,N.__webglTexture,0,Jt(b)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,st,N.__webglTexture,mt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(R,b,W){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){let ot=b.depthTexture,st=ot&&ot.isDepthTexture?ot.type:null,mt=_(b.stencilBuffer,st),yt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt(b),mt,b.width,b.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt(b),mt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,mt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,R)}else{let ot=b.textures;for(let st=0;st<ot.length;st++){let mt=ot[st],yt=r.convert(mt.format,mt.colorSpace),q=r.convert(mt.type),et=E(mt.internalFormat,yt,q,mt.normalized,mt.colorSpace);pt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt(b),et,b.width,b.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt(b),et,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,et,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(R,b,W){let ot=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(b.depthTexture);st.__renderTarget=b;let mt=ot?b.depthTexture.image[0]:b.depthTexture.image;(!st.__webglTexture||mt.width!==b.width||mt.height!==b.height)&&(mt.width=b.width,mt.height=b.height,b.depthTexture.needsUpdate=!0),ot?gt(b.depthTexture,0):ut(b.depthTexture,0);let yt=st.__webglTexture,q=Jt(b),et=ot?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,ft=b.depthTexture.format===ws?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===ys)pt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,et,yt,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,ft,et,yt,0);else if(b.depthTexture.format===ws)pt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,et,yt,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,ft,et,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(R){let b=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let ot=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ot){let st=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ot.removeEventListener("dispose",st)};ot.addEventListener("dispose",st),b.__depthDisposeCallback=st}b.__boundDepthTexture=ot}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let ot=0;ot<6;ot++)Ot(b.__webglFramebuffer[ot],R,ot);else R.texture.mipmaps.length>0?Ot(b.__webglFramebuffer[0],R,0):Ot(b.__webglFramebuffer,R,0);else if(W){b.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ot]),b.__webglDepthbuffer[ot]===void 0)b.__webglDepthbuffer[ot]=s.createRenderbuffer(),qt(b.__webglDepthbuffer[ot],R,!1);else{let st=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=b.__webglDepthbuffer[ot];s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,mt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),qt(b.__webglDepthbuffer,R,!1);else{let st=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,mt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(R,b,W){let ot=n.get(R);b!==void 0&&dt(ot.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Vt(R)}function ne(R){let b=R.texture,W=n.get(R),ot=n.get(b);R.addEventListener("dispose",D),C(R);let st=R.textures,mt=R.isWebGLCubeRenderTarget===!0,yt=st.length>1;if(yt||(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=b.version,o.memory.textures++),mt){W.__webglFramebuffer=[];for(let q=0;q<6;q++)if(b.mipmaps.length>0){W.__webglFramebuffer[q]=[];for(let et=0;et<b.mipmaps.length;et++)W.__webglFramebuffer[q][et]=s.createFramebuffer()}else W.__webglFramebuffer[q]=s.createFramebuffer()}else{if(b.mipmaps.length>0){W.__webglFramebuffer=[];for(let q=0;q<b.mipmaps.length;q++)W.__webglFramebuffer[q]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(yt)for(let q=0,et=st.length;q<et;q++){let ft=n.get(st[q]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&pt(R)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let q=0;q<st.length;q++){let et=st[q];W.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[q]);let ft=r.convert(et.format,et.colorSpace),N=r.convert(et.type),tt=E(et.internalFormat,ft,N,et.normalized,et.colorSpace,R.isXRRenderTarget===!0),$=Jt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,tt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,W.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),qt(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),Xt(s.TEXTURE_CUBE_MAP,b);for(let q=0;q<6;q++)if(b.mipmaps.length>0)for(let et=0;et<b.mipmaps.length;et++)dt(W.__webglFramebuffer[q][et],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,et);else dt(W.__webglFramebuffer[q],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);M(b)?v(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(yt){for(let q=0,et=st.length;q<et;q++){let ft=st[q],N=n.get(ft),tt=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,N.__webglTexture),Xt(tt,ft),dt(W.__webglFramebuffer,R,ft,s.COLOR_ATTACHMENT0+q,tt,0),M(ft)&&v(tt)}e.unbindTexture()}else{let q=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(q,ot.__webglTexture),Xt(q,b),b.mipmaps.length>0)for(let et=0;et<b.mipmaps.length;et++)dt(W.__webglFramebuffer[et],R,b,s.COLOR_ATTACHMENT0,q,et);else dt(W.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,q,0);M(b)?v(q):b.mipmaps.length>0&&s.texParameteri(q,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&Vt(R)}function U(R){let b=R.textures;for(let W=0,ot=b.length;W<ot;W++){let st=b[W];if(M(st)&&st.mipmapsAutoUpdate===!0){let mt=T(R),yt=n.get(st).__webglTexture;e.bindTexture(mt,yt),v(mt),e.unbindTexture()}}}let oe=[];function Kt(R){if(R.samples>0){if(pt(R)===!1){let b=R.textures,W=R.width,ot=R.height,st=s.COLOR_BUFFER_BIT,mt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(R),q=b.length>1;if(q)for(let ft=0;ft<b.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ft=0;ft<b.length;ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[ft]);let N=n.get(b[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,W,ot,0,0,W,ot,st,s.NEAREST),l===!0&&(oe.length=0,oe.push(s.COLOR_ATTACHMENT0+ft),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&oe.push(mt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let ft=0;ft<b.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,yt.__webglColorRenderbuffer[ft]);let N=n.get(b[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,N,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Jt(R){return Math.min(i.maxSamples,R.samples)}function pt(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function me(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function zt(R,b){let W=R.colorSpace,ot=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==_a&&W!==Es&&(pe.getTransfer(W)===Se?(ot!==Wi||st!==jn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",W)),b}function Yt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ft,this.resetTextureUnits=P,this.getTextureUnits=j,this.setTextureUnits=wt,this.setTexture2D=ut,this.setTexture2DArray=Mt,this.setTexture3D=Rt,this.setTextureCube=gt,this.rebindTextures=Qt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=pt,this.dispose=k}function Ib(s,t){function e(n,i=Es){let r,o=pe.getTransfer(i);if(n===jn)return s.UNSIGNED_BYTE;if(n===rh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===oh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===zf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===kf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ff)return s.BYTE;if(n===Bf)return s.SHORT;if(n===Io)return s.UNSIGNED_SHORT;if(n===sh)return s.INT;if(n===Vi)return s.UNSIGNED_INT;if(n===Ai)return s.FLOAT;if(n===Hi)return s.HALF_FLOAT;if(n===Gf)return s.ALPHA;if(n===Vf)return s.RGB;if(n===Wi)return s.RGBA;if(n===ys)return s.DEPTH_COMPONENT;if(n===ws)return s.DEPTH_STENCIL;if(n===ah)return s.RED;if(n===lh)return s.RED_INTEGER;if(n===er)return s.RG;if(n===ch)return s.RG_INTEGER;if(n===hh)return s.RGBA_INTEGER;if(n===$a||n===Ka||n===Qa||n===ja)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uh||n===fh||n===dh||n===ph)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ph)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mh||n===gh||n===_h||n===xh||n===vh||n===tl||n===yh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mh||n===gh)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_h)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xh)return r.COMPRESSED_R11_EAC;if(n===vh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===tl)return r.COMPRESSED_RG11_EAC;if(n===yh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sh||n===Mh||n===bh||n===Th||n===wh||n===Eh||n===Ah||n===Rh||n===Ch||n===Ph||n===Ih||n===Lh||n===Dh||n===Nh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Th)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ah)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ch)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ph)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ih)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oh||n===Uh||n===Fh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Oh)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bh||n===zh||n===el||n===kh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Lb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Db=`
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

}`,dd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ra(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ts({vertexShader:Lb,fragmentShader:Db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new Ba(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pd=class extends Ki{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null,x=typeof XRWebGLBinding!="undefined",m=new dd,g={},y=e.getContextAttributes(),M=null,v=null,T=[],E=[],_=new Tt,S=null,C=null,A=new bn;A.viewport=new Ue;let L=new bn;L.viewport=new Ue;let D=[A,L],G=new Qc,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ut=T[Z];return ut===void 0&&(ut=new So,T[Z]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Z){let ut=T[Z];return ut===void 0&&(ut=new So,T[Z]=ut),ut.getGripSpace()},this.getHand=function(Z){let ut=T[Z];return ut===void 0&&(ut=new So,T[Z]=ut),ut.getHandSpace()};function V(Z){let ut=E.indexOf(Z.inputSource);if(ut===-1)return;let Mt=T[ut];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,c||o),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<T.length;Z++){let ut=E[Z];ut!==null&&(E[Z]=null,T[Z].disconnect(ut))}I=null,k=null,m.reset();for(let Z in g)delete g[Z];if(t.setRenderTarget(M),u=null,f=null,d=null,i=null,v=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),C!==null){let Z=C.camera;Z.fov=C.fov,Z.zoom=C.zoom,Z.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",F),i.addEventListener("inputsourceschange",Q),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Rt=null,gt=null;y.depth&&(gt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=y.stencil?ws:ys,Rt=y.stencil?Ir:Vi);let Dt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Dt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new fi(f.textureWidth,f.textureHeight,{format:Wi,type:jn,depthTexture:new Ms(f.textureWidth,f.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,Mt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new fi(u.framebufferWidth,u.framebufferHeight,{format:Wi,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ft.setContext(i),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Z){for(let ut=0;ut<Z.removed.length;ut++){let Mt=Z.removed[ut],Rt=E.indexOf(Mt);Rt>=0&&(E[Rt]=null,T[Rt].disconnect(Mt))}for(let ut=0;ut<Z.added.length;ut++){let Mt=Z.added[ut],Rt=E.indexOf(Mt);if(Rt===-1){for(let Dt=0;Dt<T.length;Dt++)if(Dt>=E.length){E.push(Mt),Rt=Dt;break}else if(E[Dt]===null){E[Dt]=Mt,Rt=Dt;break}if(Rt===-1)break}let gt=T[Rt];gt&&gt.connect(Mt)}}function X(Z,ut){ut===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ut.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ut=Z.near,Mt=Z.far;m.texture!==null&&(m.depthNear>0&&(ut=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),G.near=L.near=A.near=ut,G.far=L.far=A.far=Mt,(I!==G.near||k!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,k=G.far),G.layers.mask=Z.layers.mask|6,A.layers.mask=G.layers.mask&-5,L.layers.mask=G.layers.mask&-3;let Rt=Z.parent,gt=G.cameras;X(G,Rt);for(let Dt=0;Dt<gt.length;Dt++)X(gt[Dt],Rt);G.projectionMatrix.copy(A.projectionMatrix),G.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&Z.isPerspectiveCamera&&(C={camera:Z,fov:Z.fov,zoom:Z.zoom}),P(Z,G,Rt)};function P(Z,ut,Mt){Mt===null?Z.matrix.copy(ut.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ut.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ut.projectionMatrix),Z.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ac*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Z){return g[Z]};let j=null;function wt(Z,ut){if(h=ut.getViewerPose(c||o),p=ut,h!==null){let Mt=h.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let Rt=!1;Mt.length!==G.cameras.length&&(G.cameras.length=0,Rt=!0);for(let Nt=0;Nt<Mt.length;Nt++){let Xt=Mt[Nt],Lt=null;if(u!==null)Lt=u.getViewport(Xt);else{let lt=d.getViewSubImage(f,Xt);Lt=lt.viewport,Nt===0&&(t.setRenderTargetTextures(v,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(v))}let K=D[Nt];K===void 0&&(K=new bn,K.layers.enable(Nt),K.viewport=new Ue,D[Nt]=K),K.matrix.fromArray(Xt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Xt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Nt===0&&(G.matrix.copy(K.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Rt===!0&&G.cameras.push(K)}let gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Nt=d.getDepthInformation(Mt[0]);Nt&&Nt.isValid&&Nt.texture&&m.init(Nt,i.renderState)}if(gt&&gt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Nt=0;Nt<Mt.length;Nt++){let Xt=Mt[Nt].camera;if(Xt){let Lt=g[Xt];Lt||(Lt=new Ra,g[Xt]=Lt);let K=d.getCameraImage(Xt);Lt.sourceTexture=K}}}}for(let Mt=0;Mt<T.length;Mt++){let Rt=E[Mt],gt=T[Mt];Rt!==null&&gt!==void 0&&gt.update(Rt,ut,c||o)}j&&j(Z,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),p=null}let Ft=new bg;Ft.setAnimationLoop(wt),this.setAnimationLoop=function(Z){j=Z},this.dispose=function(){}}},Nb=new Te,Dg=new jt;Dg.set(-1,0,0,0,1,0,0,0,1);function Ob(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,$f(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Tn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Tn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Dg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Tn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ub(s,t,e,n){let i={},r={};function o(y,M){let v=M.program;n.uniformBlockBinding(y,v,i[y.id])}function a(y,M){let v=i[y.id];v===void 0&&(p(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",m));let T=M.program;n.updateUBOMapping(y,T);let E=t.render.frame;r[y.id]!==E&&(c(y),r[y.id]=E)}function l(y){let M=s.createBuffer(),v=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,v,T),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(y){let M=i[y.id],v=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,_=v.length;E<_;E++){let S=v[E];if(Array.isArray(S))for(let C=0,A=S.length;C<A;C++)h(S[C],E,C,T);else h(S,E,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,M,v,T){if(f(y,M,v,T)===!0){let E=y.__offset,_=y.value;if(Array.isArray(_)){let S=0;for(let C=0;C<_.length;C++){let A=_[C],L=x(A,!0);d(A,y.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,y.__data)}}function d(y,M,v){typeof y=="number"||typeof y=="boolean"?M[v]=y:y.isMatrix3?(M[v]=y.elements[0],M[v+1]=y.elements[1],M[v+2]=y.elements[2],M[v+3]=0,M[v+4]=y.elements[3],M[v+5]=y.elements[4],M[v+6]=y.elements[5],M[v+7]=0,M[v+8]=y.elements[6],M[v+9]=y.elements[7],M[v+10]=y.elements[8],M[v+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-v),v):y.toArray(M,v)}function f(y,M,v,T){let E=y.value,_=M+"_"+v;if(Array.isArray(E)){T[_]===void 0&&(T[_]=[]);let S=T[_],C=!1;for(let A=0;A<E.length;A++)u(E[A],S,A)===!0&&(C=!0);return C}return u(E,T,_)}function u(y,M,v){if(M[v]===void 0)return typeof y=="number"||typeof y=="boolean"?M[v]=y:ArrayBuffer.isView(y)?M[v]=y.slice():M[v]=y.clone(),!0;{let T=M[v];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return M[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function p(y){let M=y.uniforms,v=0,T=16;for(let _=0,S=M.length;_<S;_++){let C=Array.isArray(M[_])?M[_]:[M[_]];for(let A=0,L=C.length;A<L;A++){let D=C[A],G=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(M[_])||Array.isArray(D.value),k=v;for(let F=0,Q=G.length;F<Q;F++){let X=G[F],P=x(X,I),j=v%T,wt=j%P.boundary,Ft=j+wt;v+=wt,Ft!==0&&T-Ft<P.storage&&(v+=T-Ft),F===0&&(k=v),v+=P.storage}let V=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new V((v-k)/Float32Array.BYTES_PER_ELEMENT),D.__offset=k}}let E=v%T;return E>0&&(v+=T-E),y.__size=v,y.__cache={},this}function x(y,M){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let M=y.target;M.removeEventListener("dispose",m),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(let y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:o,update:a,dispose:g}}var Fb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),is=null;function Bb(){return is===null&&(is=new Ta(Fb,16,16,er,Hi),is.name="DFG_LUT",is.minFilter=Vn,is.magFilter=Vn,is.wrapS=$i,is.wrapT=$i,is.generateMipmaps=!1,is.needsUpdate=!0),is}var Hh=class{constructor(t={}){let{canvas:e=Hm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=jn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=u,m=new Set([hh,ch,lh]),g=new Set([jn,Vi,Io,Ir,rh,oh]),y=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,E=null,_=[],S=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ns,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,D=null,G=null,I=null,k=null;this._outputColorSpace=hi;let V=0,F=0,Q=null,X=-1,P=null,j=new Ue,wt=new Ue,Ft=null,Z=new ae(0),ut=0,Mt=e.width,Rt=e.height,gt=1,Dt=null,_e=null,Nt=new Ue(0,0,Mt,Rt),Xt=new Ue(0,0,Mt,Rt),Lt=!1,K=new Ys,lt=new Dc,ct=!1,B=!1,dt=new Te,qt=new z,Ot=new Ue,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function ne(){return Q===null?gt:1}let U=n;function oe(w,O){return e.getContext(w,O)}let Kt,Jt,pt,me,zt,Yt,R,b,W,ot,st,mt,yt,q,et,ft,N,tt,$,_t,ht,xt,at;try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",it,!1),U===null){let O="webgl2";if(U=oe(O,w),U===null)throw oe(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}vt()}catch(w){throw e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",it,!1),$t("WebGLRenderer: "+w.message),w}function vt(){Kt=new JS(U),Kt.init(),ht=new Ib(U,Kt),Jt=new BS(U,Kt,t,ht),pt=new Cb(U,Kt),Jt.reversedDepthBuffer&&f&&pt.buffers.depth.setReversed(!0),G=U.createFramebuffer(),I=U.createFramebuffer(),k=U.createFramebuffer(),me=new QS(U),zt=new mb,Yt=new Pb(U,Kt,pt,zt,Jt,ht,me),R=new ZS(A),b=new tv(U),xt=new US(U,b),W=new $S(U,b,me,xt),ot=new tM(U,W,b,xt,me),tt=new jS(U,Jt,Yt),et=new zS(zt),st=new pb(A,R,Kt,Jt,xt,et),mt=new Ob(A,zt),yt=new _b,q=new bb(Kt),N=new OS(A,R,pt,ot,p,l),ft=new Rb(A,ot,Jt),at=new Ub(U,me,Jt,pt),$=new FS(U,Kt,me),_t=new KS(U,Kt,me),me.programs=st.programs,A.capabilities=Jt,A.extensions=Kt,A.properties=zt,A.renderLists=yt,A.shadowMap=ft,A.state=pt,A.info=me}x!==jn&&(C=new nM(x,e.width,e.height,a,i,r));let rt=new pd(A,U);this.xr=rt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=Kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(w){w!==void 0&&(gt=w,this.setSize(Mt,Rt,!1))},this.getSize=function(w){return w.set(Mt,Rt)},this.setSize=function(w,O,J=!0){if(rt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=w,Rt=O,e.width=Math.floor(w*gt),e.height=Math.floor(O*gt),J===!0&&(e.style.width=w+"px",e.style.height=O+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(Mt*gt,Rt*gt).floor()},this.setDrawingBufferSize=function(w,O,J){Mt=w,Rt=O,gt=J,e.width=Math.floor(w*J),e.height=Math.floor(O*J),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(x===jn){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(j)},this.getViewport=function(w){return w.copy(Nt)},this.setViewport=function(w,O,J,H){w.isVector4?Nt.set(w.x,w.y,w.z,w.w):Nt.set(w,O,J,H),pt.viewport(j.copy(Nt).multiplyScalar(ne()).round())},this.getScissor=function(w){return w.copy(Xt)},this.setScissor=function(w,O,J,H){w.isVector4?Xt.set(w.x,w.y,w.z,w.w):Xt.set(w,O,J,H),pt.scissor(wt.copy(Xt).multiplyScalar(ne()).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(w){pt.setScissorTest(Lt=w)},this.setOpaqueSort=function(w){Dt=w},this.setTransparentSort=function(w){_e=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,J=!0){let H=0;if(w){let Y=!1;if(Q!==null){let Et=Q.texture.format;Y=m.has(Et)}if(Y){let Et=Q.texture.type,Bt=g.has(Et),bt=N.getClearColor(),It=N.getClearAlpha(),Ht=bt.r,ee=bt.g,fe=bt.b;Bt?(y[0]=Ht,y[1]=ee,y[2]=fe,y[3]=It,U.clearBufferuiv(U.COLOR,0,y)):(M[0]=Ht,M[1]=ee,M[2]=fe,M[3]=It,U.clearBufferiv(U.COLOR,0,M))}else H|=U.COLOR_BUFFER_BIT}O&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",it,!1),N.dispose(),yt.dispose(),q.dispose(),Yt.dispose(),zt.dispose(),R.dispose(),ot.dispose(),W.dispose(),xt.dispose(),at.dispose(),st.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Ee),rt.removeEventListener("sessionend",ye),cn.stop()};function nt(w){w.preventDefault(),Yf("WebGLRenderer: Context Lost."),L=!0}function St(){Yf("WebGLRenderer: Context Restored."),L=!1;let w=me.autoReset,O=ft.enabled,J=ft.autoUpdate,H=ft.needsUpdate,Y=ft.type;vt(),me.autoReset=w,ft.enabled=O,ft.autoUpdate=J,ft.needsUpdate=H,ft.type=Y}function it(w){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pt(w){let O=w.target;O.removeEventListener("dispose",Pt),he(O)}function he(w){te(w),zt.remove(w)}function te(w){let O=zt.get(w).programs;O!==void 0&&(O.forEach(function(J){st.releaseProgram(J)}),w.isShaderMaterial&&st.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,J,H,Y,Et){O===null&&(O=Vt);let Bt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,bt=bi(w,O,J,H,Y);pt.setMaterial(H,Bt);let It=J.index,Ht=1;if(H.wireframe===!0){if(It=W.getWireframeAttribute(J),It===void 0)return;Ht=2}let ee=J.drawRange,fe=J.attributes.position,kt=ee.start*Ht,de=(ee.start+ee.count)*Ht;Et!==null&&(kt=Math.max(kt,Et.start*Ht),de=Math.min(de,(Et.start+Et.count)*Ht)),It!==null?(kt=Math.max(kt,0),de=Math.min(de,It.count)):fe!=null&&(kt=Math.max(kt,0),de=Math.min(de,fe.count));let en=de-kt;if(en<0||en===1/0)return;xt.setup(Y,H,bt,J,It);let Pe,Re=$;if(It!==null&&(Pe=b.get(It),Re=_t,Re.setIndex(Pe)),Y.isMesh)H.wireframe===!0?(pt.setLineWidth(H.wireframeLinewidth*ne()),Re.setMode(U.LINES)):Re.setMode(U.TRIANGLES);else if(Y.isLine){let Cn=H.linewidth;Cn===void 0&&(Cn=1),pt.setLineWidth(Cn*ne()),Y.isLineSegments?Re.setMode(U.LINES):Y.isLineLoop?Re.setMode(U.LINE_LOOP):Re.setMode(U.LINE_STRIP)}else Y.isPoints?Re.setMode(U.POINTS):Y.isSprite&&Re.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))Re.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Cn=Y._multiDrawStarts,Gt=Y._multiDrawCounts,Gn=Y._multiDrawCount,ve=It?b.get(It).bytesPerElement:1,_r=zt.get(H).currentProgram.getUniforms();for(let Pn=0;Pn<Gn;Pn++)_r.setValue(U,"_gl_DrawID",Pn),Re.render(Cn[Pn]/ve,Gt[Pn])}else if(Y.isInstancedMesh)Re.renderInstances(kt,en,Y.count);else if(J.isInstancedBufferGeometry){let Cn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Gt=Math.min(J.instanceCount,Cn);Re.renderInstances(kt,en,Gt)}else Re.render(kt,en)};function Ne(w,O,J,H){D!==null&&w.isNodeMaterial&&D.setObject(H,w),ct===!0&&et.setState(w,J,!1),w.transparent===!0&&w.side===es&&w.forceSinglePass===!1?(w.side=Tn,w.needsUpdate=!0,ai(w,O,H),w.side=tr,w.needsUpdate=!0,ai(w,O,H),w.side=es):ai(w,O,H)}this.compile=function(w,O,J=null){J===null&&(J=w),D!==null&&D.renderStart(w,O,J),E=q.get(J),E.init(O),S.push(E),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),w!==J&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),B=this.localClippingEnabled,ct=et.init(this.clippingPlanes,B),ct===!0&&et.setGlobalState(this.clippingPlanes,O),D!==null&&ft.render(E.state.shadowsArray,J,O);let H=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Et=Y.material;if(Et)if(Array.isArray(Et))for(let Bt=0;Bt<Et.length;Bt++){let bt=Et[Bt];Ne(bt,J,O,Y),H.add(bt)}else Ne(Et,J,O,Y),H.add(Et)}),E=S.pop(),D!==null&&D.renderEnd(),H},this.compileAsync=function(w,O,J=null){let H=this.compile(w,O,J);return new Promise(Y=>{function Et(){if(H.forEach(function(Bt){let It=zt.get(Bt).currentProgram;(It===void 0||It.isReady())&&H.delete(Bt)}),H.size===0){Y(w);return}setTimeout(Et,10)}Kt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let je=null;function Oe(w){je&&je(w)}function Ee(){cn.stop()}function ye(){cn.start()}let cn=new bg;cn.setAnimationLoop(Oe),typeof self!="undefined"&&cn.setContext(self),this.setAnimationLoop=function(w){je=w,rt.setAnimationLoop(w),w===null?cn.stop():cn.start()},rt.addEventListener("sessionstart",Ee),rt.addEventListener("sessionend",ye),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(w,O);let J=rt.enabled===!0&&rt.isPresenting===!0,H=C!==null&&(Q===null||J)&&C.begin(A,Q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(O),O=rt.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,O,Q),E=q.get(w,S.length),E.init(O),E.state.textureUnits=Yt.getTextureUnits(),S.push(E),dt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?lt.setFromArrayCamera(O):K.setFromProjectionMatrix(dt,wi,O.reversedDepth),B=this.localClippingEnabled,ct=et.init(this.clippingPlanes,B),T=yt.get(w,_.length),T.init(),_.push(T),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let Bt=A.xr.getDepthSensingMesh();Bt!==null&&Ae(Bt,O,-1/0,A.sortObjects)}Ae(w,O,0,A.sortObjects),T.finish(),D!==null&&D.updateLights(E.state.lightsArray),A.sortObjects===!0&&T.sort(Dt,_e),Qt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Qt&&N.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),ct===!0&&et.beginShadows();let Y=E.state.shadowsArray;if(ft.render(Y,w,O),ct===!0&&et.endShadows(),(H&&C.hasRenderPass())===!1){let Bt=T.opaque,bt=T.transmissive;if(E.setupLights(),O.isArrayCamera){let It=O.cameras;if(bt.length>0)for(let Ht=0,ee=It.length;Ht<ee;Ht++){let fe=It[Ht];oi(Bt,bt,w,fe)}Qt&&N.render(w);for(let Ht=0,ee=It.length;Ht<ee;Ht++){let fe=It[Ht];Rn(T,w,fe,fe.viewport)}}else bt.length>0&&oi(Bt,bt,w,O),Qt&&N.render(w),Rn(T,w,O)}Q!==null&&F===0&&(Yt.updateMultisampleRenderTarget(Q),Yt.updateRenderTargetMipmap(Q)),H&&C.end(A),w.isScene===!0&&w.onAfterRender(A,w,O),xt.resetDefaultState(),X=-1,P=null,S.pop(),S.length>0?(E=S[S.length-1],Yt.setTextureUnits(E.state.textureUnits),ct===!0&&et.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,D!==null&&D.renderEnd()};function Ae(w,O,J,H){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let Bt=O.isArrayCamera?lt:K;if(!w.frustumCulled||w.intersectsFrustum(Bt)){H&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);let bt=ot.update(w),It=w.material;It.visible&&T.push(w,bt,It,J,Ot.z,null,O)}}else if(w.isMesh||w.isLine||w.isPoints){let Bt=O.isArrayCamera?lt:K;if(!w.frustumCulled||w.intersectsFrustum(Bt)){let bt=ot.update(w),It=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ot.copy(bt.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(It)){let Ht=bt.groups;for(let ee=0,fe=Ht.length;ee<fe;ee++){let kt=Ht[ee],de=It[kt.materialIndex];de&&de.visible&&T.push(w,bt,de,J,Ot.z,kt,O)}}else It.visible&&T.push(w,bt,It,J,Ot.z,null,O)}}}let Et=w.children;for(let Bt=0,bt=Et.length;Bt<bt;Bt++)Ae(Et[Bt],O,J,H)}function Rn(w,O,J,H){let{opaque:Y,transmissive:Et,transparent:Bt}=w;E.setupLightsView(J),ct===!0&&et.setGlobalState(A.clippingPlanes,J),H&&pt.viewport(j.copy(H)),Y.length>0&&He(Y,O,J),Et.length>0&&He(Et,O,J),Bt.length>0&&He(Bt,O,J),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function oi(w,O,J,H){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let kt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new fi(1,1,{generateMipmaps:!0,type:kt?Hi:jn,minFilter:Ts,samples:Math.max(4,Jt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let Et=E.state.transmissionRenderTarget[H.id],Bt=H.viewport||j;Et.setSize(Bt.z*A.transmissionResolutionScale,Bt.w*A.transmissionResolutionScale);let bt=A.getRenderTarget(),It=A.getActiveCubeFace(),Ht=A.getActiveMipmapLevel();A.setRenderTarget(Et),A.getClearColor(Z),ut=A.getClearAlpha(),ut<1&&A.setClearColor(16777215,.5),A.clear(),Qt&&N.render(J);let ee=A.toneMapping;A.toneMapping=ns;let fe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),ct===!0&&et.setGlobalState(A.clippingPlanes,H),He(w,J,H),Yt.updateMultisampleRenderTarget(Et),Yt.updateRenderTargetMipmap(Et),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let de=0,en=O.length;de<en;de++){let Pe=O[de],{object:Re,geometry:Cn,material:Gt,group:Gn}=Pe;if(Gt.side===es&&Re.layers.test(H.layers)){let ve=Gt.side;Gt.side=Tn,Gt.needsUpdate=!0,tn(Re,J,H,Cn,Gt,Gn),Gt.side=ve,Gt.needsUpdate=!0,kt=!0}}kt===!0&&(Yt.updateMultisampleRenderTarget(Et),Yt.updateRenderTargetMipmap(Et))}A.setRenderTarget(bt,It,Ht),A.setClearColor(Z,ut),fe!==void 0&&(H.viewport=fe),A.toneMapping=ee}function He(w,O,J){let H=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,Et=w.length;Y<Et;Y++){let Bt=w[Y],{object:bt,geometry:It,group:Ht}=Bt,ee=Bt.material;ee.allowOverride===!0&&H!==null&&(ee=H),bt.layers.test(J.layers)&&tn(bt,O,J,It,ee,Ht)}}function tn(w,O,J,H,Y,Et){D!==null&&Y.isNodeMaterial&&D.setObject(w,Y),w.onBeforeRender(A,O,J,H,Y,Et),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(A,O,J,H,w,Et),Y.transparent===!0&&Y.side===es&&Y.forceSinglePass===!1?(Y.side=Tn,Y.needsUpdate=!0,A.renderBufferDirect(J,O,H,Y,w,Et),Y.side=tr,Y.needsUpdate=!0,A.renderBufferDirect(J,O,H,Y,w,Et),Y.side=es):A.renderBufferDirect(J,O,H,Y,w,Et),w.onAfterRender(A,O,J,H,Y,Et)}function hn(w){let O=0;for(let J of w)J.texture!==null&&O++;return O}function ai(w,O,J){O.isScene!==!0&&(O=Vt);let H=zt.get(w),Y=E.state.lights,Et=E.state.shadowsArray,Bt=Y.state.version,bt=st.getParameters(w,Y.state,Et,O,J,E.state.lightProbeGridArray),It=st.getProgramCacheKey(bt),Ht=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;let ee=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=R.get(w.envMap||H.environment,ee),H.envMapRotation=H.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",Pt),Ht=new Map,H.programs=Ht,H.programVariants=new Map);let fe=Ht.get(It);if(fe!==void 0){if(H.currentProgram===fe&&H.lightsStateVersion===Bt)return We(w,bt),fe}else bt.uniforms=st.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,J,bt),w.onBeforeCompile(bt,A),fe=st.acquireProgram(bt,It),Ht.set(It,fe),H.uniforms=bt.uniforms;let kt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(kt.clippingPlanes=et.uniform),We(w,bt),H.needsLights=Wl(w),H.lightsStateVersion=Bt,H.needsLights&&(kt.ambientLightColor.value=Y.state.ambient,kt.lightProbe.value=Y.state.probe,kt.sunLights.value=Y.state.sun,kt.sunLightShadows.value=Y.state.sunShadow,kt.directionalLights.value=Y.state.directional,kt.directionalLightShadows.value=Y.state.directionalShadow,kt.spotLights.value=Y.state.spot,kt.spotLightShadows.value=Y.state.spotShadow,kt.rectAreaLights.value=Y.state.rectArea,kt.ltc_1.value=Y.state.rectAreaLTC1,kt.ltc_2.value=Y.state.rectAreaLTC2,kt.pointLights.value=Y.state.point,kt.pointLightShadows.value=Y.state.pointShadow,kt.hemisphereLights.value=Y.state.hemi,kt.sunShadowMatrix.value=Y.state.sunShadowMatrix,kt.sunShadowCascade.value=Y.state.sunShadowCascade,kt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,kt.spotLightMatrix.value=Y.state.spotLightMatrix,kt.spotLightMap.value=Y.state.spotLightMap,kt.pointShadowMatrix.value=Y.state.pointShadowMatrix),H.numLightProbeGrids=hn(E.state.lightProbeGridArray),H.currentProgram=fe,H.uniformsList=null,fe}function to(w,O,J,H,Y){let Et=zt.get(w),Bt=Et.currentProgram.id+","+H+","+Y,bt=Et.programVariants.get(Bt);return bt===void 0?(bt=ai(w,O,J),Et.programVariants.set(Bt,bt)):(Et.currentProgram=bt,Et.uniformsList=null,Et.outputColorSpace=H,Et.toneMapping=Y),bt}function un(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Do.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function We(w,O){let J=zt.get(w);J.outputColorSpace=O.outputColorSpace,J.batching=O.batching,J.batchingColor=O.batchingColor,J.instancing=O.instancing,J.instancingColor=O.instancingColor,J.instancingMorph=O.instancingMorph,J.skinning=O.skinning,J.morphTargets=O.morphTargets,J.morphNormals=O.morphNormals,J.morphColors=O.morphColors,J.morphTargetsCount=O.morphTargetsCount,J.numClippingPlanes=O.numClippingPlanes,J.numIntersection=O.numClipIntersection,J.vertexAlphas=O.vertexAlphas,J.vertexTangents=O.vertexTangents,J.toneMapping=O.toneMapping}function bi(w,O,J,H,Y){O.isScene!==!0&&(O=Vt),Yt.resetTextureUnits();let Et=O.fog,Bt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,bt=Q===null?A.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:pe.workingColorSpace,It=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ht=R.get(H.envMap||Bt,It),ee=H.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,fe=!!J.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),kt=!!J.morphAttributes.position,de=!!J.morphAttributes.normal,en=!!J.morphAttributes.color,Pe=ns;H.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Pe=A.toneMapping);let Re=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Cn=Re!==void 0?Re.length:0,Gt=zt.get(H),Gn=E.state.lights;if(ct===!0&&(B===!0||w!==P)){let Be=w===P&&H.id===X;et.setState(H,w,Be)}let ve=!1,_r=!1;H.version===Gt.__version?Gt.needsLights&&Gt.lightsStateVersion!==Gn.state.version||Y.isBatchedMesh&&Gt.batching===!1||!Y.isBatchedMesh&&Gt.batching===!0||Y.isBatchedMesh&&Gt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Gt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Gt.instancing===!1||!Y.isInstancedMesh&&Gt.instancing===!0||Y.isSkinnedMesh&&Gt.skinning===!1||!Y.isSkinnedMesh&&Gt.skinning===!0||Y.isInstancedMesh&&Gt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Gt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Gt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Gt.instancingMorph===!1&&Y.morphTexture!==null||Gt.envMap!==Ht||H.fog===!0&&Gt.fog!==Et||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==et.numPlanes||Gt.numIntersection!==et.numIntersection)||Gt.vertexAlphas!==ee||Gt.vertexTangents!==fe||Gt.morphTargets!==kt||Gt.morphNormals!==de||Gt.morphColors!==en||Gt.morphTargetsCount!==Cn||Gt.numLightProbeGrids!==hn(E.state.lightProbeGridArray)?ve=!0:(Gt.outputColorSpace!==bt||Gt.toneMapping!==Pe)&&(_r=!0):(ve=!0,Gt.__version=H.version);let Pn=Gt.currentProgram;(ve===!0||_r===!0)&&(Pn=_r===!0?to(H,O,Y,bt,Pe):ai(H,O,Y),D&&H.isNodeMaterial&&D.onUpdateProgram(H,Pn,Gt));let Xl=!1,zs=!1,xr=!1,xe=Pn.getUniforms(),Mn=Gt.uniforms;if(pt.useProgram(Pn.program)&&(Xl=!0,zs=!0,xr=!0),H.id!==X&&(X=H.id,zs=!0),Xl||P!==w){pt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xe.setValue(U,"projectionMatrix",w.projectionMatrix),xe.setValue(U,"viewMatrix",w.matrixWorldInverse);let gn=xe.map.cameraPosition;gn!==void 0&&gn.setValue(U,qt.setFromMatrixPosition(w.matrixWorld)),Jt.logarithmicDepthBuffer&&xe.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xe.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),P!==w&&(P=w,zs=!0,xr=!0)}if(Gt.needsLights&&(Gn.state.sunShadowMap.length>0&&xe.setValue(U,"sunShadowMap",Gn.state.sunShadowMap,Yt),Gn.state.directionalShadowMap.length>0&&xe.setValue(U,"directionalShadowMap",Gn.state.directionalShadowMap,Yt),Gn.state.spotShadowMap.length>0&&xe.setValue(U,"spotShadowMap",Gn.state.spotShadowMap,Yt),Gn.state.pointShadowMap.length>0&&xe.setValue(U,"pointShadowMap",Gn.state.pointShadowMap,Yt)),Y.isSkinnedMesh){xe.setOptional(U,Y,"bindMatrix"),xe.setOptional(U,Y,"bindMatrixInverse");let Be=Y.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),xe.setValue(U,"boneTexture",Be.boneTexture,Yt))}Y.isBatchedMesh&&(xe.setOptional(U,Y,"batchingTexture"),xe.setValue(U,"batchingTexture",Y._matricesTexture,Yt),xe.setOptional(U,Y,"batchingIdTexture"),xe.setValue(U,"batchingIdTexture",Y._indirectTexture,Yt),xe.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&xe.setValue(U,"batchingColorTexture",Y._colorsTexture,Yt));let Ui=J.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&tt.update(Y,J,Pn),(zs||Gt.receiveShadow!==Y.receiveShadow)&&(Gt.receiveShadow=Y.receiveShadow,xe.setValue(U,"receiveShadow",Y.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Mn.envMapIntensity.value=O.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=Bb()),zs){if(xe.setValue(U,"toneMappingExposure",A.toneMappingExposure),Gt.needsLights&&ra(Mn,xr),Et&&H.fog===!0&&mt.refreshFogUniforms(Mn,Et),mt.refreshMaterialUniforms(Mn,H,gt,Rt,E.state.transmissionRenderTarget[w.id]),Gt.needsLights&&Gt.numLightProbeGrids>0){let Be=v,gn=0;for(let ds of E.state.lightProbeGridArray)ds.texture!==null&&(Be.textures[gn]=ds.texture,Be.min[gn]=ds.boundingBox.min,Be.max[gn]=ds.boundingBox.max,Be.resolution[gn]=ds.resolution,gn++);for(let ds in Be)Be[ds].length=gn;Mn.probesSH.value=Be.textures,Mn.probesMin.value=Be.min,Mn.probesMax.value=Be.max,Mn.probesResolution.value=Be.resolution}Do.upload(U,un(Gt),Mn,Yt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Do.upload(U,un(Gt),Mn,Yt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xe.setValue(U,"center",Y.center),xe.setValue(U,"modelViewMatrix",Y.modelViewMatrix),xe.setValue(U,"normalMatrix",Y.normalMatrix),xe.setValue(U,"modelMatrix",Y.matrixWorld),H.uniformsGroups!==void 0){let Be=H.uniformsGroups;for(let gn=0,ds=Be.length;gn<ds;gn++){let Lp=Be[gn];at.update(Lp,Pn),at.bind(Lp,Pn)}}return Pn}function ra(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.sunLights.needsUpdate=O,w.sunLightShadows.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Wl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(w,O,J){let H=zt.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),zt.get(w.texture).__webglTexture=O,zt.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:J,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let J=zt.get(w);J.__webglFramebuffer=O,J.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,J=0){Q=w,V=O,F=J;let H=null,Y=!1,Et=!1;if(w){let bt=zt.get(w);if(bt.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(U.FRAMEBUFFER,bt.__webglFramebuffer),j.copy(w.viewport),wt.copy(w.scissor),Ft=w.scissorTest,pt.viewport(j),pt.scissor(wt),pt.setScissorTest(Ft),X=-1;return}else if(bt.__webglFramebuffer===void 0)Yt.setupRenderTarget(w);else if(bt.__hasExternalTextures)Yt.rebindTextures(w,zt.get(w.texture).__webglTexture,zt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ee=w.depthTexture;if(bt.__boundDepthTexture!==ee){if(ee!==null&&zt.has(ee)&&(w.width!==ee.image.width||w.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(w)}}let It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Et=!0);let Ht=zt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ht[O])?H=Ht[O][J]:H=Ht[O],Y=!0):w.samples>0&&Yt.useMultisampledRTT(w)===!1?H=zt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ht)?H=Ht[J]:H=Ht,j.copy(w.viewport),wt.copy(w.scissor),Ft=w.scissorTest}else j.copy(Nt).multiplyScalar(gt).floor(),wt.copy(Xt).multiplyScalar(gt).floor(),Ft=Lt;if(J!==0&&(H=G),pt.bindFramebuffer(U.FRAMEBUFFER,H)&&pt.drawBuffers(w,H),pt.viewport(j),pt.scissor(wt),pt.setScissorTest(Ft),Y){let bt=zt.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,bt.__webglTexture,J)}else if(Et){let bt=O;for(let It=0;It<w.textures.length;It++){let Ht=zt.get(w.textures[It]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+It,Ht.__webglTexture,J,bt)}}else if(w!==null&&J!==0){let bt=zt.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bt.__webglTexture,J)}X=-1};function Bs(w){let O=zt.get(w);return(O.__readFormat!==w.format||O.__readType!==w.type)&&(O.__readFormat=w.format,O.__readType=w.type,O.__formatReadable=Jt.textureFormatReadable(w.format),O.__typeReadable=Jt.textureTypeReadable(w.type)),O}this.readRenderTargetPixels=function(w,O,J,H,Y,Et,Bt,bt=0){if(!(w&&w.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Bt!==void 0&&(It=It[Bt],Array.isArray(It)&&(It=It[0])),It){pt.bindFramebuffer(U.FRAMEBUFFER,It);try{let Ht=w.textures[bt],ee=Ht.format,fe=Ht.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+bt);let kt=Bs(Ht);if(kt.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-H&&J>=0&&J<=w.height-Y&&U.readPixels(O,J,H,Y,ht.convert(ee),ht.convert(fe),Et)}finally{let Ht=Q!==null?zt.get(Q).__webglFramebuffer:null;pt.bindFramebuffer(U.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(w,O,J,H,Y,Et,Bt,bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Bt!==void 0&&(It=It[Bt],Array.isArray(It)&&(It=It[0])),It)if(O>=0&&O<=w.width-H&&J>=0&&J<=w.height-Y){pt.bindFramebuffer(U.FRAMEBUFFER,It);let Ht=w.textures[bt],ee=Ht.format,fe=Ht.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+bt);let kt=Bs(Ht);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,de),U.bufferData(U.PIXEL_PACK_BUFFER,Et.byteLength,U.STREAM_READ),U.readPixels(O,J,H,Y,ht.convert(ee),ht.convert(fe),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let en=Q!==null?zt.get(Q).__webglFramebuffer:null;pt.bindFramebuffer(U.FRAMEBUFFER,en);let Pe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Xm(U,Pe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,de),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Et),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(de),U.deleteSync(Pe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,J=0){let H=Math.pow(2,-J),Y=Math.floor(w.image.width*H),Et=Math.floor(w.image.height*H),Bt=O!==null?O.x:0,bt=O!==null?O.y:0;Yt.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,Bt,bt,Y,Et),pt.unbindTexture()},this.copyTextureToTexture=function(w,O,J=null,H=null,Y=0,Et=0){let Bt,bt,It,Ht,ee,fe,kt,de,en,Pe=w.isCompressedTexture?w.mipmaps[Et]:w.image;if(J!==null)Bt=J.max.x-J.min.x,bt=J.max.y-J.min.y,It=J.isBox3?J.max.z-J.min.z:1,Ht=J.min.x,ee=J.min.y,fe=J.isBox3?J.min.z:0;else{let xe=Math.pow(2,-Y);Bt=Math.floor(Pe.width*xe),bt=Math.floor(Pe.height*xe),w.isDataArrayTexture?It=Pe.depth:w.isData3DTexture?It=Math.floor(Pe.depth*xe):It=1,Ht=0,ee=0,fe=0}H!==null?(kt=H.x,de=H.y,en=H.z):(kt=0,de=0,en=0);let Re=ht.convert(O.format),Cn=ht.convert(O.type),Gt;O.isData3DTexture?(Yt.setTexture3D(O,0),Gt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Yt.setTexture2DArray(O,0),Gt=U.TEXTURE_2D_ARRAY):(Yt.setTexture2D(O,0),Gt=U.TEXTURE_2D),pt.activeTexture(U.TEXTURE0),pt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),pt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),pt.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let Gn=pt.getParameter(U.UNPACK_ROW_LENGTH),ve=pt.getParameter(U.UNPACK_IMAGE_HEIGHT),_r=pt.getParameter(U.UNPACK_SKIP_PIXELS),Pn=pt.getParameter(U.UNPACK_SKIP_ROWS),Xl=pt.getParameter(U.UNPACK_SKIP_IMAGES);pt.pixelStorei(U.UNPACK_ROW_LENGTH,Pe.width),pt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Pe.height),pt.pixelStorei(U.UNPACK_SKIP_PIXELS,Ht),pt.pixelStorei(U.UNPACK_SKIP_ROWS,ee),pt.pixelStorei(U.UNPACK_SKIP_IMAGES,fe);let zs=w.isDataArrayTexture||w.isData3DTexture,xr=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let xe=zt.get(w),Mn=zt.get(O),Ui=zt.get(xe.__renderTarget),Be=zt.get(Mn.__renderTarget);pt.bindFramebuffer(U.READ_FRAMEBUFFER,Ui.__webglFramebuffer),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let gn=0;gn<It;gn++)zs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zt.get(w).__webglTexture,Y,fe+gn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zt.get(O).__webglTexture,Et,en+gn)),U.blitFramebuffer(Ht,ee,Ht+Bt,ee+bt,kt,de,kt+Bt,de+bt,U.DEPTH_BUFFER_BIT,U.NEAREST);pt.bindFramebuffer(U.READ_FRAMEBUFFER,null),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||zt.has(w)){let xe=zt.get(w),Mn=zt.get(O);pt.bindFramebuffer(U.READ_FRAMEBUFFER,I),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,k);for(let Ui=0;Ui<It;Ui++)zs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xe.__webglTexture,Y,fe+Ui):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xe.__webglTexture,Y),xr?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mn.__webglTexture,Et,en+Ui):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mn.__webglTexture,Et),Y!==0?U.blitFramebuffer(Ht,ee,Ht+Bt,ee+bt,kt,de,kt+Bt,de+bt,U.COLOR_BUFFER_BIT,U.NEAREST):xr?U.copyTexSubImage3D(Gt,Et,kt,de,en+Ui,Ht,ee,Bt,bt):U.copyTexSubImage2D(Gt,Et,kt,de,Ht,ee,Bt,bt);pt.bindFramebuffer(U.READ_FRAMEBUFFER,null),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else xr?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Gt,Et,kt,de,en,Bt,bt,It,Re,Cn,Pe.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Gt,Et,kt,de,en,Bt,bt,It,Re,Pe.data):U.texSubImage3D(Gt,Et,kt,de,en,Bt,bt,It,Re,Cn,Pe):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Et,kt,de,Bt,bt,Re,Cn,Pe.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Et,kt,de,Pe.width,Pe.height,Re,Pe.data):U.texSubImage2D(U.TEXTURE_2D,Et,kt,de,Bt,bt,Re,Cn,Pe);pt.pixelStorei(U.UNPACK_ROW_LENGTH,Gn),pt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve),pt.pixelStorei(U.UNPACK_SKIP_PIXELS,_r),pt.pixelStorei(U.UNPACK_SKIP_ROWS,Pn),pt.pixelStorei(U.UNPACK_SKIP_IMAGES,Xl),Et===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&U.generateMipmap(Gt),pt.unbindTexture()},this.initRenderTarget=function(w){zt.get(w).__webglFramebuffer===void 0&&Yt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Yt.setTextureCube(w,0):w.isData3DTexture?Yt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Yt.setTexture2DArray(w,0):Yt.setTexture2D(w,0),pt.unbindTexture()},this.resetState=function(){V=0,F=0,Q=null,pt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var qh=class extends Tr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Xe;t.deleteAttribute("uv");let e=new $s({side:Tn}),n=new $s,i=new Xa(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new De(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new wr(t,n,6),a=new sn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new De(t,Uo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new De(t,Uo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new De(t,Uo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new De(t,Uo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new De(t,Uo(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let u=new De(t,Uo(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Uo(s){return new ka({color:0,emissive:16777215,emissiveIntensity:s})}var al=new z;function Ri(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;al.copy(t),al[n]=0,al.normalize();let c=.5*o/(o+a),h=1-al.angleTo(s)/l;return Math.sign(al[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Ke=class s extends Xe{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new z,c=new z,h=new z(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,x=new z,m=.5/o;for(let g=0,y=0;g<d.length;g+=3,y+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),u[y+0]=Ri(x,c,"z","y",r,n),u[y+1]=1-Ri(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),u[y+0]=1-Ri(x,c,"z","y",r,n),u[y+1]=1-Ri(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),u[y+0]=1-Ri(x,c,"x","z",r,t),u[y+1]=Ri(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),u[y+0]=1-Ri(x,c,"x","z",r,t),u[y+1]=1-Ri(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),u[y+0]=1-Ri(x,c,"x","y",r,t),u[y+1]=1-Ri(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),u[y+0]=Ri(x,c,"x","y",r,t),u[y+1]=1-Ri(x,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};function As(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Vg(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},dl={duration:.5,overwrite:!1,delay:0},Pd,wn,Fe,Pi=1e8,we=1/Pi,Md=Math.PI*2,kb=Md/4,Gb=0,Hg=Math.sqrt,Vb=Math.cos,Hb=Math.sin,pn=function(t){return typeof t=="string"},qe=function(t){return typeof t=="function"},Cs=function(t){return typeof t=="number"},su=function(t){return typeof t=="undefined"},as=function(t){return typeof t=="object"},ni=function(t){return t!==!1},Id=function(){return typeof window!="undefined"},Yh=function(t){return qe(t)||pn(t)},Wg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},On=Array.isArray,Wb=/random\([^)]+\)/g,Xb=/,\s*/g,Ng=/(?:-?\.?\d|\.)+/gi,Ld=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ur=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,md=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Dd=/[+-]=-?[.\d]+/,qb=/[^,'"\[\]\s]+/gi,Yb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ge,rs,bd,Nd,_i={},Kh={},Xg,qg=function(t){return(Kh=Bo(t,_i))&&Un},ru=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},pl=function(t,e){return!e&&console.warn(t)},Yg=function(t,e){return t&&(_i[t]=e)&&Kh&&(Kh[t]=e)||_i},ml=function(){return 0},Zb={suppressEvents:!0,isStart:!0,kill:!1},Zh={suppressEvents:!0,kill:!1},Jb={suppressEvents:!0},Od={},ir=[],Td={},Zg,ti={},gd={},Og=30,Jh=[],Ud="",Fd=function(t){var e=t[0],n,i;if(as(e)||qe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Jh.length;i--&&!Jh[i].targetTest(e););n=Jh[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Gd(t[i],n)))||t.splice(i,1);return t},sr=function(t){return t._gsap||Fd(Ii(t))[0]._gsap},Bd=function(t,e,n){return(n=t[e])&&qe(n)?t[e]():su(n)&&t.getAttribute&&t.getAttribute(e)||n},Wn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ye=function(t){return Math.round(t*1e5)/1e5||0},ke=function(t){return Math.round(t*1e7)/1e7||0},Fr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},$b=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Qh=function(){var t=ir.length,e=ir.slice(0),n,i;for(Td={},ir.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},zd=function(t){return!!(t._initted||t._startAt||t.add)},Jg=function(t,e,n,i){ir.length&&!wn&&Qh(),t.render(e,n,i||!!(wn&&e<0&&zd(t))),ir.length&&!wn&&Qh()},$g=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(qb).length<2?e:pn(t)?t.trim():t},Kg=function(t){return t},xi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Kb=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Bo=function(t,e){for(var n in e)t[n]=e[n];return t},Ug=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=as(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},jh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},hl=function(t){var e=t.parent||Ge,n=t.keyframes?Kb(On(t.keyframes)):xi;if(ni(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Qb=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Qg=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},ou=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},rr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Dr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},jb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},wd=function(t,e,n,i){return t._startAt&&(wn?t._startAt.revert(Zh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},t1=function s(t){return!t||t._ts&&s(t.parent)},Fg=function(t){return t._repeat?zo(t._tTime,t=t.duration()+t._rDelay)*t:0},zo=function(t,e){var n=Math.floor(t=ke(t/e));return t&&n===t?n-1:n},tu=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},au=function(t){return t._end=ke(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},lu=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ke(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),au(t),n._dirty||Dr(n,t)),t},jg=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=tu(t.rawTime(),e),(!e._dur||vl(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),Dr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},os=function(t,e,n,i){return e.parent&&rr(e),e._start=ke((Cs(n)?n:!n&&eu(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Ge?Ci(t,n,e):t._time)+e._delay),e._end=ke(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Qg(t,e,"_first","_last",t._sort?"_start":0),eu(e)||(t._recent=e),i||jg(t,e),t._ts<0&&lu(t,t._tTime),t},t0=function(t,e){return(_i.ScrollTrigger||ru("scrollTrigger",e))&&_i.ScrollTrigger.create(e,t)},e0=function(t,e,n,i,r){if(Wd(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!wn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Zg!==ei.frame)return ir.push(t),t._lazy=[r,i],1},e1=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},eu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},n1=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&e1(t)&&!(!t._initted&&eu(t))||(t._ts<0||t._dp._ts<0)&&!eu(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=vl(0,t._tDur,e),h=zo(l,a),t._yoyo&&h&1&&(o=1-o),h!==zo(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||wn||i||t._zTime===we||!e&&t._zTime){if(!t._initted&&e0(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&wd(t,e,n,!0),t._onUpdate&&!n&&gi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&gi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&rr(t,1),!n&&!wn&&(gi(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},i1=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ko=function(t,e,n,i){var r=t._repeat,o=ke(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:ke(o*(r+1)+t._rDelay*r):o,a>0&&!i&&lu(t,t._tTime=t._tDur*a),t.parent&&au(t),n||Dr(t.parent,t),t},Bg=function(t){return t instanceof Nn?Dr(t):ko(t,t._dur)},s1={_start:0,endTime:ml,totalDuration:ml},Ci=function s(t,e,n){var i=t.labels,r=t._recent||s1,o=t.duration()>=Pi?r.endTime(!1):t._dur,a,l,c;return pn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(On(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ul=function(t,e,n){var i=Cs(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Qe(e[0],o,e[r+1])},or=function(t,e){return t||t===0?e(t):e},vl=function(t,e,n){return n<t?t:n>e?e:n},En=function(t,e){return!pn(t)||!(e=Yb.exec(t))?"":e[1]},r1=function(t,e,n){return or(n,function(i){return vl(t,e,i)})},Ed=[].slice,n0=function(t,e){return t&&as(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&as(t[0]))&&!t.nodeType&&t!==rs},o1=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return pn(i)&&!e||n0(i,1)?(r=n).push.apply(r,Ii(i)):n.push(i)})||n},Ii=function(t,e,n){return Fe&&!e&&Fe.selector?Fe.selector(t):pn(t)&&!n&&(bd||!Go())?Ed.call((e||Nd).querySelectorAll(t),0):On(t)?o1(t,n):n0(t)?Ed.call(t,0):t?[t]:[]},Ad=function(t){return t=Ii(t)[0]||pl("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ii(e,n.querySelectorAll?n:n===t?pl("Invalid scope")||Nd.createElement("div"):t)}},i0=function(t){return t.sort(function(){return .5-Math.random()})},s0=function(t){if(qe(t))return t;var e=as(t)?t:{each:t},n=Nr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return pn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(f,u,p){var x=(p||e).length,m=o[x],g,y,M,v,T,E,_,S,C;if(!m){if(C=e.grid==="auto"?0:(e.grid||[1,Pi])[1],!C){for(_=-Pi;_<(_=p[C++].getBoundingClientRect().left)&&C<x;);C<x&&C--}for(m=o[x]=[],g=l?Math.min(C,x)*h-.5:i%C,y=C===Pi?0:l?x*d/C-.5:i/C|0,_=0,S=Pi,E=0;E<x;E++)M=E%C-g,v=y-(E/C|0),m[E]=T=c?Math.abs(c==="y"?v:M):Hg(M*M+v*v),T>_&&(_=T),T<S&&(S=T);i==="random"&&i0(m),m.max=_-S,m.min=S,m.v=x=(parseFloat(e.amount)||parseFloat(e.each)*(C>x?x-1:c?c==="y"?x/C:C:Math.max(C,x/C))||0)*(i==="edges"?-1:1),m.b=x<0?r-x:r,m.u=En(e.amount||e.each)||0,n=n&&x<0?v1(n):n}return x=(m[f]-m.min)/m.max||0,ke(m.b+(n?n(x):x)*m.v)+m.u}},Rd=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ke(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Cs(n)?0:En(n))}},r0=function(t,e){var n=On(t),i,r;return!n&&as(t)&&(i=n=t.radius||Pi,t.values?(t=Ii(t.values),(r=!Cs(t[0]))&&(i*=i)):t=Rd(t.increment)),or(e,n?qe(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Pi,h=0,d=t.length,f,u;d--;)r?(f=t[d].x-a,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!i||c<=i?t[h]:o,r||h===o||Cs(o)?h:h+En(o)}:Rd(t))},o0=function(t,e,n,i){return or(On(t)?!e:n===!0?!!(n=0):!i,function(){return On(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},a1=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},l1=function(t,e){return function(n){return t(parseFloat(n))+(e||En(n))}},c1=function(t,e,n){return l0(t,e,0,1,n)},a0=function(t,e,n){return or(n,function(i){return t[~~e(i)]})},h1=function s(t,e,n){var i=e-t;return On(t)?a0(t,s(0,t.length),e):or(n,function(r){return(i+(r-t)%i)%i+t})},u1=function s(t,e,n){var i=e-t,r=i*2;return On(t)?a0(t,s(0,t.length-1),e):or(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Vo=function(t){return t.replace(Wb,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Xb);return o0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},l0=function(t,e,n,i,r){var o=e-t,a=i-n;return or(r,function(l){return n+((l-t)/o*a||0)})},f1=function s(t,e,n,i){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=pn(t),a={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(On(t)&&!On(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(p){p*=d;var x=Math.min(f,~~p);return h[x](p-x)},n=e}else i||(t=Bo(On(t)?[]:{},t));if(!h){for(l in e)Vd.call(a,t,l,"get",e[l]);r=function(p){return Yd(p,a)||(o?t.p:t)}}}return or(n,r)},zg=function(t,e,n){var i=t.labels,r=Pi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},gi=function(t,e,n){var i=t.vars,r=i[e],o=Fe,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&ir.length&&Qh(),a&&(Fe=a),h=l?r.apply(c,l):r.call(c),Fe=o,h},ll=function(t){return rr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!wn),t.progress()<1&&gi(t,"onInterrupt"),t},Fo,c0=[],h0=function(t){if(t)if(t=!t.name&&t.default||t,Id()||t.headless){var e=t.name,n=qe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:ml,render:Yd,add:Vd,kill:C1,modifier:R1,rawVars:0},o={targetTest:0,get:0,getSetter:cu,aliases:{},register:0};if(Go(),t!==i){if(ti[e])return;xi(i,xi(jh(t,r),o)),Bo(i.prototype,Bo(r,jh(t,o))),ti[i.prop=e]=i,t.targetTest&&(Jh.push(i),Od[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Yg(e,i),t.register&&t.register(Un,i,Xn)}else c0.push(t)},Ce=255,cl={aqua:[0,Ce,Ce],lime:[0,Ce,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ce],navy:[0,0,128],white:[Ce,Ce,Ce],olive:[128,128,0],yellow:[Ce,Ce,0],orange:[Ce,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ce,0,0],pink:[Ce,192,203],cyan:[0,Ce,Ce],transparent:[Ce,Ce,Ce,0]},_d=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ce+.5|0},u0=function(t,e,n){var i=t?Cs(t)?[t>>16,t>>8&Ce,t&Ce]:0:cl.black,r,o,a,l,c,h,d,f,u,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),cl[t])i=cl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ce,i&Ce,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ce,t&Ce]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(Ng),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=_d(l+1/3,r,o),i[1]=_d(l,r,o),i[2]=_d(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Ld),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ng)||cl.transparent;i=i.map(Number)}return e&&!p&&(r=i[0]/Ce,o=i[1]/Ce,a=i[2]/Ce,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===r?(o-a)/u+(o<a?6:0):d===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},f0=function(t){var e=[],n=[],i=-1;return t.split(Rs).forEach(function(r){var o=r.match(Ur)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},kg=function(t,e,n){var i="",r=(t+i).match(Rs),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(f){return(f=u0(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=f0(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Rs,"1").split(Ur),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Rs),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},Rs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in cl)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),d1=/hsl[a]?\(/,kd=function(t){var e=t.join(" "),n;if(Rs.lastIndex=0,Rs.test(e))return n=d1.test(e),t[1]=kg(t[1],n),t[0]=kg(t[0],n,f0(t[1])),!0},gl,ei=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,f,u,p=function x(m){var g=s()-i,y=m===!0,M,v,T,E;if((g>t||g<0)&&(n+=g-e),i+=g,T=i-n,M=T-o,(M>0||y)&&(E=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,o+=M+(M>=r?0:r-M),v=1),y||(l=c(x)),v)for(u=0;u<a.length;u++)a[u](T,f,E,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Xg&&(!bd&&Id()&&(rs=bd=window,Nd=rs.document||{},_i.gsap=Un,(rs.gsapVersions||(rs.gsapVersions=[])).push(Un.version),qg(Kh||rs.GreenSockGlobals||!rs.gsap&&rs||{}),c0.forEach(h0)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},gl=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),gl=0,c=ml},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,g,y){var M=g?function(v,T,E,_){m(v,T,E,_),d.remove(M)}:m;return d.remove(m),a[y?"unshift":"push"](M),Go(),M},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&u>=g&&u--},_listeners:a},d})(),Go=function(){return!gl&&ei.wake()},ge={},p1=/^[\d.\-M][\d.\-,\s]/,m1=/["']/g,g1=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(m1,"").trim():+c,i=l.substr(a+1).trim();return e},_1=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},x1=function(t){var e=(t+"").split("("),n=ge[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[g1(e[1])]:_1(t).split(",").map($g)):ge._CE&&p1.test(t)?ge._CE("",t):n},v1=function(t){return function(e){return 1-t(1-e)}},Nr=function(t,e){return t&&(qe(t)?t:ge[t]||x1(t))||e},Br=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Wn(t,function(a){ge[a]=_i[a]=r,ge[o=a.toLowerCase()]=n;for(var l in r)ge[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ge[a+"."+l]=r[l]}),r},d0=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},xd=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Md*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Hb((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:d0(a);return r=Md/r,l.config=function(c,h){return s(t,c,h)},l},vd=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:d0(n);return i.config=function(r){return s(t,r)},i};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Br(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ge.Linear.easeNone=ge.none=ge.Linear.easeIn;Br("Elastic",xd("in"),xd("out"),xd());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Br("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Br("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Br("Circ",function(s){return-(Hg(1-s*s)-1)});Br("Sine",function(s){return s===1?1:-Vb(s*kb)+1});Br("Back",vd("in"),vd("out"),vd());ge.SteppedEase=ge.steps=_i.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-we;return function(a){return((i*vl(0,o,a)|0)+r)*n}}};dl.ease=ge["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ud+=s+","+s+"Params,"});var Gd=function(t,e){this.id=Gb++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Bd,this.set=e?e.getSetter:cu},_l=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ko(this,+e.duration,1,1),this.data=e.data,Fe&&(this._ctx=Fe,Fe.data.push(this)),gl||ei.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ko(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Go(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(lu(this,n),!r._dp||r.parent||jg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&os(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===we||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jg(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fg(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?zo(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?tu(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(vl(-Math.abs(this._delay),a,r),i!==!1),au(this),jb(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Go(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==we,o;if(r)for(this._tTime-=we,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+we){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=ke(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&os(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ni(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tu(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Jb);var i=wn;return wn=n,zd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bg(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Bg(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ci(this,n),ni(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ni(i)),this._dur||(this._zTime=-we),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-we)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=qe(n)?n:Kg,l=function(){var h=i.then;i.then=null,r&&r(),qe(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ll(this)},s})();xi(_l.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});var Nn=(function(s){Vg(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ni(n.sortChildren),Ge&&os(n.parent||Ge,As(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&t0(As(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return ul(0,arguments,this),this},e.from=function(i,r,o){return ul(1,arguments,this),this},e.fromTo=function(i,r,o,a){return ul(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,hl(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Qe(i,r,Ci(this,o),1),this},e.call=function(i,r,o){return os(this,Qe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Qe(i,o,Ci(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,hl(o).immediateRender=ni(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,hl(a).immediateRender=ni(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ke(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,p,x,m,g,y,M,v,T,E,_;if(this!==Ge&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,v=this._start,M=this._ts,g=!M,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=ke(h%m),h===l?(x=this._repeat,f=c):(T=ke(h/m),x=~~T,x&&x===T&&(f=c,x--),f>c&&(f=c)),T=zo(this._tTime,m),!a&&this._tTime&&T!==x&&this._tTime-T*m-this._dur<=0&&(T=x),E&&x&1&&(f=c-f,_=1),x!==T&&!this._lock){var S=E&&T&1,C=S===(E&&x&1);if(x<T&&(S=!S),a=S?0:h%c?c:h,this._lock=1,this.render(a||(_?0:ke(x*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&gi(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,T=x),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,C&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=i1(this,ke(a),ke(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!T&&(gi(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(u=this._first;u;){if(p=u._next,(u._act||f>=u._start)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,r,o),f!==this._time||!this._ts&&!g){y=0,p&&(h+=this._zTime=-we);break}}u=p}else{u=this._last;for(var A=i<0?i:f;u;){if(p=u._prev,(u._act||A<=u._end)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(A-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(A-u._start)*u._ts,r,o||wn&&zd(u)),f!==this._time||!this._ts&&!g){y=0,p&&(h+=this._zTime=A?-we:we);break}}u=p}}if(y&&!r&&(this.pause(),y.render(f>=a?0:-we)._zTime=f>=a?1:-1,this._ts))return this._start=v,au(this),this.render(i,r,o);this._onUpdate&&!r&&gi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&rr(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(gi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Cs(r)||(r=Ci(this,r,i)),!(i instanceof _l)){if(On(i))return i.forEach(function(a){return o.add(a,r)}),this;if(pn(i))return this.addLabel(i,r);if(qe(i))i=Qe.delayedCall(0,i);else return this}return this!==i?os(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Pi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qe?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return pn(i)?this.removeLabel(i):qe(i)?this.killTweensOf(i):(i.parent===this&&ou(this,i),i===this._recent&&(this._recent=this._last),Dr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ke(ei.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Ci(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Qe.delayedCall(0,r||ml,o);return a.data="isPause",this._hasPause=1,os(this,a,Ci(this,i))},e.removePause=function(i){var r=this._first;for(i=Ci(this,i);r;)r._start===i&&r.data==="isPause"&&rr(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)nr!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Ii(i),l=this._first,c=Cs(r),h;l;)l instanceof Qe?$b(l._targets,a)&&(c?(!nr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Ci(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,p=Qe.to(o,xi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||we,onStart:function(){if(o.pause(),!u){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&ko(p,m,0,1).render(p._time,!0,!0),u=1}h&&h.apply(p,d||[])}},r));return f?p.render(0):p},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,xi({startAt:{time:Ci(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),zg(this,Ci(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),zg(this,Ci(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=ke(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Dr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Dr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=Pi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,os(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=ke(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;ko(o,o===Ge&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ge._ts&&(Jg(Ge,tu(i,Ge)),Zg=ei.frame),ei.frame>=Og){Og+=ii.autoSleep||120;var r=Ge._first;if((!r||!r._ts)&&ii.autoSleep&&ei._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ei.sleep()}}},t})(_l);xi(Nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var y1=function(t,e,n,i,r,o,a){var l=new Xn(this._pt,t,e,0,1,qd,null,r),c=0,h=0,d,f,u,p,x,m,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Vo(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),f=n.match(md)||[];d=md.exec(i);)p=d[0],x=i.substring(c,d.index),u?u=(u+1)%5:x.substr(-5)==="rgba("&&(u=1),p!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:x||h===1?x:",",s:m,c:p.charAt(1)==="="?Fr(m,p)-m:parseFloat(p)-m,m:u&&u<4?Math.round:0},c=md.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Dd.test(i)||g)&&(l.e=0),this._pt=l,l},Vd=function(t,e,n,i,r,o,a,l,c,h){qe(i)&&(i=i(r||0,t,o));var d=t[e],f=n!=="get"?n:qe(d)?c?t[e.indexOf("set")||!qe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=qe(d)?c?w1:m0:Xd,p;if(pn(i)&&(~i.indexOf("random(")&&(i=Vo(i)),i.charAt(1)==="="&&(p=Fr(f,i)+(En(f)||0),(p||p===0)&&(i=p))),!h||f!==i||Cd)return!isNaN(f*i)&&i!==""?(p=new Xn(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?A1:g0,0,u),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&ru(e,i),y1.call(this,t,e,f,i,u,l||ii.stringFilter,c))},S1=function(t,e,n,i,r){if(qe(t)&&(t=fl(t,r,e,n,i)),!as(t)||t.style&&t.nodeType||On(t)||Wg(t))return pn(t)?fl(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=fl(t[a],r,e,n,i);return o},Hd=function(t,e,n,i,r,o){var a,l,c,h;if(ti[t]&&(a=new ti[t]).init(r,a.rawVars?e[t]:S1(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Xn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Fo))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},nr,Cd,Wd=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,p=t._dur,x=t._startAt,m=t._targets,g=t.parent,y=g&&g.data==="nested"?g.vars.targets:m,M=t._overwrite==="auto"&&!Pd,v=t.timeline,T=i.easeReverse||d,E,_,S,C,A,L,D,G,I,k,V,F,Q;if(v&&(!f||!r)&&(r="none"),t._ease=Nr(r,dl.ease),t._rEase=T&&(Nr(T)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||f&&!i.stagger){if(G=m[0]?sr(m[0]).harness:0,F=G&&i[G.prop],E=jh(i,Od),x&&(x._zTime<0&&x.progress(1),e<0&&h&&a&&!u?x.render(-1,!0):x.revert(h&&p?Zh:Zb),x._lazy=0),o){if(rr(t._startAt=Qe.set(m,xi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!x&&ni(l),startAt:null,delay:0,onUpdate:c&&function(){return gi(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(wn||!a&&!u)&&t._startAt.revert(Zh),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!x){if(e&&(a=!1),S=xi({overwrite:!1,data:"isFromStart",lazy:a&&!x&&ni(l),immediateRender:a,stagger:0,parent:g},E),F&&(S[G.prop]=F),rr(t._startAt=Qe.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(wn?t._startAt.revert(Zh):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,we,we);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&ni(l)||l&&!p,_=0;_<m.length;_++){if(A=m[_],D=A._gsap||Fd(m)[_]._gsap,t._ptLookup[_]=k={},Td[D.id]&&ir.length&&Qh(),V=y===m?_:y.indexOf(A),G&&(I=new G).init(A,F||E,t,V,y)!==!1&&(t._pt=C=new Xn(t._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(X){k[X]=C}),I.priority&&(L=1)),!G||F)for(S in E)ti[S]&&(I=Hd(S,E,t,V,A,y))?I.priority&&(L=1):k[S]=C=Vd.call(t,A,S,"get",E[S],V,y,0,i.stringFilter);t._op&&t._op[_]&&t.kill(A,t._op[_]),M&&t._pt&&(nr=t,Ge.killTweensOf(A,k,t.globalTime(e)),Q=!t.parent,nr=0),t._pt&&l&&(Td[D.id]=1)}L&&Zd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,f&&e<=0&&v.render(Pi,!0,!0)},M1=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Cd=1,t.vars[e]="+=0",Wd(t,a),Cd=0,l?pl(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Ye(n)+En(d.e)),d.b&&(d.b=h.s+En(d.b))},b1=function(t,e){var n=t[0]?sr(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Bo({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},T1=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(On(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},fl=function(t,e,n,i,r){return qe(t)?t.call(e,n,i,r):pn(t)&&~t.indexOf("random(")?Vo(t):t},nu=Ud+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",p0={};Wn(nu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return p0[s]=1});nu=nu.split(",");var Qe=(function(s){Vg(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:hl(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,p=l.keyframes,x=l.defaults,m=l.scrollTrigger,g=i.parent||Ge,y=(On(n)||Wg(n)?Cs(n[0]):"length"in i)?[n]:Ii(n),M,v,T,E,_,S,C,A;if(a._targets=y.length?Fd(y):pl("GSAP target "+n+" not found. https://gsap.com",!ii.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,p||f||Yh(c)||Yh(h)){i=a.vars;var L=i.easeReverse||i.yoyoEase;if(M=a.timeline=new Nn({data:"nested",defaults:x||{},targets:g&&g.data==="nested"?g.vars.targets:y}),M.kill(),M.parent=M._dp=As(a),M._start=0,f||Yh(c)||Yh(h)){if(E=y.length,C=f&&s0(f),as(f))for(_ in f)~nu.indexOf(_)&&(A||(A={}),A[_]=f[_]);for(v=0;v<E;v++)T=jh(i,p0),T.stagger=0,L&&(T.easeReverse=L),A&&Bo(T,A),S=y[v],T.duration=+fl(c,As(a),v,S,y),T.delay=(+fl(h,As(a),v,S,y)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),M.to(S,T,C?C(v,S,y):0),M._ease=ge.none;M.duration()?c=h=0:a.timeline=0}else if(p){hl(xi(M.vars.defaults,{ease:"none"})),M._ease=Nr(p.ease||i.ease||"none");var D=0,G,I,k;if(On(p))p.forEach(function(V){return M.to(y,V,">")}),M.duration();else{T={};for(_ in p)_==="ease"||_==="easeEach"||T1(_,p[_],T,p.easeEach);for(_ in T)for(G=T[_].sort(function(V,F){return V.t-F.t}),D=0,v=0;v<G.length;v++)I=G[v],k={ease:I.e,duration:(I.t-(v?G[v-1].t:0))/100*c},k[_]=I.v,M.to(y,k,D),D+=k.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return u===!0&&!Pd&&(nr=As(a),Ge.killTweensOf(y),nr=0),os(g,As(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===ke(g._time)&&ni(d)&&t1(As(a))&&g.data!=="nested")&&(a._tTime=-we,a.render(Math.max(0,-h)||0)),m&&t0(As(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-we&&!h?l:i<we?0:i,f,u,p,x,m,g,y,M;if(!c)n1(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,M=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+i,r,o);if(f=ke(d%x),d===l?(p=this._repeat,f=c):(m=ke(d/x),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(f=c-f),m=zo(this._tTime,x),f===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==x&&this._initted&&(this._lock=o=1,this.render(ke(x*p),!0).invalidate()._lock=0)}if(!this._initted){if(e0(this,h?i:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var T=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(v?-1:1)/T:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!m&&(gi(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(y,u.d),u=u._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&wd(this,i,r,o),gi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&gi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&wd(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&rr(this,1),!r&&!(h&&!a)&&(d||a||g)&&(gi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){gl||ei.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Wd(this,c),h=this._ease(c/this._dur),M1(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(lu(this,0),this.parent||Qg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ll(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,nr&&nr.vars.overwrite!==!0)._first||ll(this),this.parent&&o!==this.timeline.totalDuration()&&ko(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ii(i):a,c=this._ptLookup,h=this._pt,d,f,u,p,x,m,g;if((!r||r==="all")&&Qb(a,l))return r==="all"&&(this._pt=0),ll(this);for(d=this._op=this._op||[],r!=="all"&&(pn(r)&&(x={},Wn(r,function(y){return x[y]=1}),r=x),r=b1(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(d[g]=r,p=f,u={}):(u=d[g]=d[g]||{},p=r);for(x in p)m=f&&f[x],m&&((!("kill"in m.d)||m.d.kill(x)===!0)&&ou(this,m,"_pt"),delete f[x]),u!=="all"&&(u[x]=1)}return this._initted&&!this._pt&&h&&ll(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return ul(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return ul(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Ge.killTweensOf(i,r,o)},t})(_l);xi(Qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(s){Qe[s]=function(){var t=new Nn,e=Ed.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Xd=function(t,e,n){return t[e]=n},m0=function(t,e,n){return t[e](n)},w1=function(t,e,n,i){return t[e](i.fp,n)},E1=function(t,e,n){return t.setAttribute(e,n)},cu=function(t,e){return qe(t[e])?m0:su(t[e])&&t.setAttribute?E1:Xd},g0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},A1=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},qd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Yd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},R1=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},C1=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ou(this,e,"_pt"):e.dep||(n=1),e=i;return!n},P1=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Zd=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Xn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||g0,this.d=l||this,this.set=c||Xd,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=P1,this.m=n,this.mt=r,this.tween=i},s})();Wn(Ud+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Od[s]=1});_i.TweenMax=_i.TweenLite=Qe;_i.TimelineLite=_i.TimelineMax=Nn;Ge=new Nn({sortChildren:!1,defaults:dl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ii.stringFilter=kd;var Or=[],$h={},I1=[],Gg=0,L1=0,yd=function(t){return($h[t]||I1).map(function(e){return e()})},xl=function(){var t=Date.now(),e=[];t-Gg>2&&(yd("matchMediaInit"),Or.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=rs.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),yd("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Gg=t,yd("matchMedia"))},_0=(function(){function s(e,n){this.selector=n&&Ad(n),this.data=[],this._r=[],this.isReverted=!1,this.id=L1++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){qe(n)&&(r=i,i=n,n=qe);var o=this,a=function(){var c=Fe,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ad(r)),Fe=o,d=i.apply(o,arguments),qe(d)&&o._r.push(d),Fe=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===qe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Fe;Fe=null,n(this),Fe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Qe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qe)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=Or.length;o--;)Or[o].id===this.id&&Or.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(xl):a.removeEventListener("change",xl)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),D1=(function(){function s(e){this.contexts=[],this.scope=e,Fe&&Fe.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){as(n)||(n={matches:n});var o=new _0(0,r||this.scope),a=o.conditions={},l,c,h;Fe&&!o.selector&&(o.selector=Fe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=rs.matchMedia(n[c]),l&&(Or.indexOf(o)<0&&Or.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(xl):l.addEventListener("change",xl),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),iu={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return h0(i)})},timeline:function(t){return new Nn(t)},getTweensOf:function(t,e){return Ge.getTweensOf(t,e)},getProperty:function(t,e,n,i){pn(t)&&(t=Ii(t)[0]);var r=sr(t||{}).get,o=n?Kg:$g;return n==="native"&&(n=""),t&&(e?o((ti[e]&&ti[e].get||r)(t,e,n,i)):function(a,l,c){return o((ti[a]&&ti[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Ii(t),t.length>1){var i=t.map(function(h){return Un.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=ti[e],a=sr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Fo._pt=0,d.init(t,n?h+n:h,Fo,0,[t]),d.render(1,d),Fo._pt&&Yd(1,Fo)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Un.to(t,xi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Ge.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Nr(t.ease,dl.ease)),Ug(dl,t||{})},config:function(t){return Ug(ii,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ti[a]&&!_i[a]&&pl(e+" effect requires "+a+" plugin.")}),gd[e]=function(a,l,c){return n(Ii(a),xi(l||{},r),c)},o&&(Nn.prototype[e]=function(a,l,c){return this.add(gd[e](a,as(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ge[t]=Nr(e)},parseEase:function(t,e){return arguments.length?Nr(t,e):ge},getById:function(t){return Ge.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Nn(t),i,r;for(n.smoothChildTiming=ni(t.smoothChildTiming),Ge.remove(n),n._dp=0,n._time=n._tTime=Ge._time,i=Ge._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Qe&&i.vars.onComplete===i._targets[0]))&&os(n,i,i._start-i._delay),i=r;return os(Ge,n,0),n},context:function(t,e){return t?new _0(t,e):Fe},matchMedia:function(t){return new D1(t)},matchMediaRefresh:function(){return Or.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||xl()},addEventListener:function(t,e){var n=$h[t]||($h[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=$h[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:h1,wrapYoyo:u1,distribute:s0,random:o0,snap:r0,normalize:c1,getUnit:En,clamp:r1,splitColor:u0,toArray:Ii,selector:Ad,mapRange:l0,pipe:a1,unitize:l1,interpolate:f1,shuffle:i0},install:qg,effects:gd,ticker:ei,updateRoot:Nn.updateRoot,plugins:ti,globalTimeline:Ge,core:{PropTween:Xn,globals:Yg,Tween:Qe,Timeline:Nn,Animation:_l,getCache:sr,_removeLinkedListItem:ou,reverting:function(){return wn},context:function(t){return t&&Fe&&(Fe.data.push(t),t._ctx=Fe),Fe},suppressOverwrites:function(t){return Pd=t}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return iu[s]=Qe[s]});ei.add(Nn.updateRoot);Fo=iu.to({},{duration:0});var N1=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},O1=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=N1(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Sd=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(pn(r)&&(l={},Wn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}O1(a,r)}}}},Un=iu.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)wn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Sd("roundProps",Rd),Sd("modifiers"),Sd("snap",r0))||iu;Qe.version=Nn.version=Un.version="3.15.1";Xg=1;Id()&&Go();var U1=ge.Power0,F1=ge.Power1,B1=ge.Power2,z1=ge.Power3,k1=ge.Power4,G1=ge.Linear,V1=ge.Quad,H1=ge.Cubic,W1=ge.Quart,X1=ge.Quint,q1=ge.Strong,Y1=ge.Elastic,Z1=ge.Back,J1=ge.SteppedEase,$1=ge.Bounce,K1=ge.Sine,Q1=ge.Expo,j1=ge.Circ;var x0,ar,Wo,tp,Vr,tT,v0,ep,eT=function(){return typeof window!="undefined"},Is={},Gr=180/Math.PI,Xo=Math.PI/180,Ho=Math.atan2,y0=1e8,np=/([A-Z])/g,nT=/(left|right|width|margin|padding|x)/i,iT=/[\s,\(]\S/,ls={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$d=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},sT=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},rT=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},oT=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},aT=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},R0=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},C0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},lT=function(t,e,n){return t.style[e]=n},cT=function(t,e,n){return t.style.setProperty(e,n)},hT=function(t,e,n){return t._gsap[e]=n},uT=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},fT=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},dT=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Ve="transform",si=Ve+"Origin",pT=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Is&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ls[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ps(i,a)}):this.tfm[t]=o.x?o[t]:Ps(i,t),t===si&&(this.tfm.zOrigin=o.zOrigin);else return ls.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Ve)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(si,e,"")),t=Ve}(r||e)&&this.props.push(t,e,r[t])},P0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},mT=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(np,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=ep(),(!r||!r.isStart)&&!n[Ve]&&(P0(n),i.zOrigin&&n[si]&&(n[si]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},I0=function(t,e){var n={target:t,props:[],revert:mT,save:pT};return t._gsap||Un.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},L0,Kd=function(t,e){var n=ar.createElementNS?ar.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ar.createElement(t);return n&&n.style?n:ar.createElement(t)},vi=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(np,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,qo(e)||e,1)||""},S0="O,Moz,ms,Ms,Webkit".split(","),qo=function(t,e,n){var i=e||Vr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(S0[o]+t in r););return o<0?null:(o===3?"ms":o>=0?S0[o]:"")+t},Qd=function(){eT()&&window.document&&(x0=window,ar=x0.document,Wo=ar.documentElement,Vr=Kd("div")||{style:{}},tT=Kd("div"),Ve=qo(Ve),si=Ve+"Origin",Vr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",L0=!!qo("perspective"),ep=Un.core.reverting,tp=1)},M0=function(t){var e=t.ownerSVGElement,n=Kd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Wo.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Wo.removeChild(n),r},b0=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},D0=function(t){var e,n;try{e=t.getBBox()}catch{e=M0(t),n=1}return e&&(e.width||e.height)||n||(e=M0(t)),e&&!e.width&&!e.x&&!e.y?{x:+b0(t,["x","cx","x1"])||0,y:+b0(t,["y","cy","y1"])||0,width:0,height:0}:e},N0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&D0(t))},cr=function(t,e){if(e){var n=t.style,i;e in Is&&e!==si&&(e=Ve),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(np,"-$1").toLowerCase())):n.removeAttribute(e)}},lr=function(t,e,n,i,r,o){var a=new Xn(t._pt,e,n,0,1,o?C0:R0);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},T0={deg:1,rad:1,turn:1},gT={grid:1,flex:1},hr=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Vr.style,l=nT.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",p,x,m,g;if(i===o||!r||T0[i]||T0[o])return r;if(o!=="px"&&!f&&(r=s(t,e,n,"px")),g=t.getCTM&&N0(t),(u||o==="%")&&(Is[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],Ye(u?r/p*d:r/100*p);if(a[l?"width":"height"]=d+(f?o:i),x=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(x=(t.ownerSVGElement||{}).parentNode),(!x||x===ar||!x.appendChild)&&(x=ar.body),m=x._gsap,m&&u&&m.width&&l&&m.time===ei.time&&!m.uncache)return Ye(r/m.width*d);if(u&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=d+i,p=t[h],y?t.style[e]=y:cr(t,e)}else(u||o==="%")&&!gT[vi(x,"display")]&&(a.position=vi(t,"position")),x===t&&(a.position="static"),x.appendChild(Vr),p=Vr[h],x.removeChild(Vr),a.position="absolute";return l&&u&&(m=sr(x),m.time=ei.time,m.width=x[h]),Ye(f?p*r/d:p&&r?d/p*r:0)},Ps=function(t,e,n,i){var r;return tp||Qd(),e in ls&&e!=="transform"&&(e=ls[e],~e.indexOf(",")&&(e=e.split(",")[0])),Is[e]&&e!=="transform"?(r=Ml(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:uu(vi(t,si))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=hu[e]&&hu[e](t,e,n)||vi(t,e)||Bd(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?hr(t,e,r,n)+n:r},_T=function(t,e,n,i){if(!n||n==="none"){var r=qo(e,t,1),o=r&&vi(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=vi(t,"borderTopColor"))}var a=new Xn(this._pt,t.style,e,0,1,qd),l=0,c=0,h,d,f,u,p,x,m,g,y,M,v,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=vi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=t.style[e],t.style[e]=i,i=vi(t,e)||i,x?t.style[e]=x:cr(t,e)),h=[n,i],kd(h),n=h[0],i=h[1],f=n.match(Ur)||[],T=i.match(Ur)||[],T.length){for(;d=Ur.exec(i);)m=d[0],y=i.substring(l,d.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),m!==(x=f[c++]||"")&&(u=parseFloat(x)||0,v=x.substr((u+"").length),m.charAt(1)==="="&&(m=Fr(u,m)+v),g=parseFloat(m),M=m.substr((g+"").length),l=Ur.lastIndex-M.length,M||(M=M||ii.units[e]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(u=hr(t,e,x,M)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:u,c:g-u,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?C0:R0;return Dd.test(i)&&(a.e=0),this._pt=a,a},w0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xT=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=w0[n]||n,e[1]=w0[i]||i,e.join(" ")},vT=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Is[a]&&(l=1,a=a==="transformOrigin"?si:Ve),cr(n,a);l&&(cr(n,Ve),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ml(n,1),o.uncache=1,P0(i)))}},hu={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Xn(t._pt,e,n,0,0,vT);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Sl=[1,0,0,1,0,0],O0={},U0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},E0=function(t){var e=vi(t,Ve);return U0(e)?Sl:e.substr(7).match(Ld).map(Ye)},ip=function(t,e){var n=t._gsap||sr(t),i=t.style,r=E0(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Sl:r):(r===Sl&&!t.offsetParent&&t!==Wo&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Wo.appendChild(t)),r=E0(t),l?i.display=l:cr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Wo.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},jd=function(t,e,n,i,r,o){var a=t._gsap,l=r||ip(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=l[0],p=l[1],x=l[2],m=l[3],g=l[4],y=l[5],M=e.split(" "),v=parseFloat(M[0])||0,T=parseFloat(M[1])||0,E,_,S,C;n?l!==Sl&&(_=u*m-p*x)&&(S=v*(m/_)+T*(-x/_)+(x*y-m*g)/_,C=v*(-p/_)+T*(u/_)-(u*y-p*g)/_,v=S,T=C):(E=D0(t),v=E.x+(~M[0].indexOf("%")?v/100*E.width:v),T=E.y+(~(M[1]||M[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&a.smooth?(g=v-c,y=T-h,a.xOffset=d+(g*u+y*x)-g,a.yOffset=f+(g*p+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[si]="0px 0px",o&&(lr(o,a,"xOrigin",c,v),lr(o,a,"yOrigin",h,T),lr(o,a,"xOffset",d,a.xOffset),lr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+T)},Ml=function(t,e){var n=t._gsap||new Gd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=vi(t,si)||"0",h,d,f,u,p,x,m,g,y,M,v,T,E,_,S,C,A,L,D,G,I,k,V,F,Q,X,P,j,wt,Ft,Z,ut;return h=d=f=x=m=g=y=M=v=0,u=p=1,n.svg=!!(t.getCTM&&N0(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ve]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ve]!=="none"?l[Ve]:"")),i.scale=i.rotate=i.translate="none"),_=ip(t,n.svg),n.svg&&(n.uncache?(Q=t.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),jd(t,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,_)),T=n.xOrigin||0,E=n.yOrigin||0,_!==Sl&&(L=_[0],D=_[1],G=_[2],I=_[3],h=k=_[4],d=V=_[5],_.length===6?(u=Math.sqrt(L*L+D*D),p=Math.sqrt(I*I+G*G),x=L||D?Ho(D,L)*Gr:0,y=G||I?Ho(G,I)*Gr+x:0,y&&(p*=Math.abs(Math.cos(y*Xo))),n.svg&&(h-=T-(T*L+E*G),d-=E-(T*D+E*I))):(ut=_[6],Ft=_[7],P=_[8],j=_[9],wt=_[10],Z=_[11],h=_[12],d=_[13],f=_[14],S=Ho(ut,wt),m=S*Gr,S&&(C=Math.cos(-S),A=Math.sin(-S),F=k*C+P*A,Q=V*C+j*A,X=ut*C+wt*A,P=k*-A+P*C,j=V*-A+j*C,wt=ut*-A+wt*C,Z=Ft*-A+Z*C,k=F,V=Q,ut=X),S=Ho(-G,wt),g=S*Gr,S&&(C=Math.cos(-S),A=Math.sin(-S),F=L*C-P*A,Q=D*C-j*A,X=G*C-wt*A,Z=I*A+Z*C,L=F,D=Q,G=X),S=Ho(D,L),x=S*Gr,S&&(C=Math.cos(S),A=Math.sin(S),F=L*C+D*A,Q=k*C+V*A,D=D*C-L*A,V=V*C-k*A,L=F,k=Q),m&&Math.abs(m)+Math.abs(x)>359.9&&(m=x=0,g=180-g),u=Ye(Math.sqrt(L*L+D*D+G*G)),p=Ye(Math.sqrt(V*V+ut*ut)),S=Ho(k,V),y=Math.abs(S)>2e-4?S*Gr:0,v=Z?1/(Z<0?-Z:Z):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!U0(vi(t,Ve)),F&&t.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(u*=-1,y+=x<=0?180:-180,x+=x<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ye(u),n.scaleY=Ye(p),n.rotation=Ye(x)+a,n.rotationX=Ye(m)+a,n.rotationY=Ye(g)+a,n.skewX=y+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[si]=uu(c)),n.xOffset=n.yOffset=0,n.force3D=ii.force3D,n.renderTransform=n.svg?ST:L0?F0:yT,n.uncache=0,n},uu=function(t){return(t=t.split(" "))[0]+" "+t[1]},Jd=function(t,e,n){var i=En(e);return Ye(parseFloat(e)+parseFloat(hr(t,"x",n+"px",i)))+i},yT=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,F0(t,e)},zr="0deg",yl="0px",kr=") ",F0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,p=n.scaleX,x=n.scaleY,m=n.transformPerspective,g=n.force3D,y=n.target,M=n.zOrigin,v="",T=g==="auto"&&t&&t!==1||g===!0;if(M&&(d!==zr||h!==zr)){var E=parseFloat(h)*Xo,_=Math.sin(E),S=Math.cos(E),C;E=parseFloat(d)*Xo,C=Math.cos(E),o=Jd(y,o,_*C*-M),a=Jd(y,a,-Math.sin(E)*-M),l=Jd(y,l,S*C*-M+M)}m!==yl&&(v+="perspective("+m+kr),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(T||o!==yl||a!==yl||l!==yl)&&(v+=l!==yl||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+kr),c!==zr&&(v+="rotate("+c+kr),h!==zr&&(v+="rotateY("+h+kr),d!==zr&&(v+="rotateX("+d+kr),(f!==zr||u!==zr)&&(v+="skew("+f+", "+u+kr),(p!==1||x!==1)&&(v+="scale("+p+", "+x+kr),y.style[Ve]=v||"translate(0, 0)"},ST=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,p=n.xOrigin,x=n.yOrigin,m=n.xOffset,g=n.yOffset,y=n.forceCSS,M=parseFloat(o),v=parseFloat(a),T,E,_,S,C;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Xo,c*=Xo,T=Math.cos(l)*d,E=Math.sin(l)*d,_=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(h*=Xo,C=Math.tan(c-h),C=Math.sqrt(1+C*C),_*=C,S*=C,h&&(C=Math.tan(h),C=Math.sqrt(1+C*C),T*=C,E*=C)),T=Ye(T),E=Ye(E),_=Ye(_),S=Ye(S)):(T=d,S=f,E=_=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=hr(u,"x",o,"px"),v=hr(u,"y",a,"px")),(p||x||m||g)&&(M=Ye(M+p-(p*T+x*_)+m),v=Ye(v+x-(p*E+x*S)+g)),(i||r)&&(C=u.getBBox(),M=Ye(M+i/100*C.width),v=Ye(v+r/100*C.height)),C="matrix("+T+","+E+","+_+","+S+","+M+","+v+")",u.setAttribute("transform",C),y&&(u.style[Ve]=C)},MT=function(t,e,n,i,r){var o=360,a=pn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Gr:1),c=l-i,h=i+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*y0)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*y0)%o-~~(c/o)*o)),t._pt=f=new Xn(t._pt,e,n,i,c,sT),f.e=h,f.u="deg",t._props.push(n),f},A0=function(t,e){for(var n in e)t[n]=e[n];return t},bT=function(t,e,n){var i=A0({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,f,u,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ve]=e,a=Ml(n,1),cr(n,Ve),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ve],o[Ve]=e,a=Ml(n,1),o[Ve]=c);for(l in Is)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=En(c),p=En(h),d=u!==p?hr(n,l,c,p):parseFloat(c),f=parseFloat(h),t._pt=new Xn(t._pt,a,l,d,f-d,$d),t._pt.u=p||0,t._props.push(l));A0(a,i)};Wn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});hu[t>1?"border"+s:s]=function(a,l,c,h,d){var f,u;if(arguments.length<4)return f=o.map(function(p){return Ps(a,p,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(p,x){return u[p]=f[x]=f[x]||f[(x-1)/2|0]}),a.init(l,u,d)}});var sp={name:"css",register:Qd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,f,u,p,x,m,g,y,M,v,T,E,_,S,C;tp||Qd(),this.styles=this.styles||I0(t),S=this.styles.props,this.tween=n;for(x in e)if(x!=="autoRound"&&(h=e[x],!(ti[x]&&Hd(x,e,n,i,t,r)))){if(u=typeof h,p=hu[x],u==="function"&&(h=h.call(n,i,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Vo(h)),p)p(this,t,x,h,n)&&(_=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(x)+"").trim(),h+="",Rs.lastIndex=0,Rs.test(c)||(m=En(c),g=En(h),g?m!==g&&(c=hr(t,x,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,x),o.push(x),S.push(x,0,a[x]);else if(u!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,t,r):l[x],pn(c)&&~c.indexOf("random(")&&(c=Vo(c)),En(c+"")||c==="auto"||(c+=ii.units[x]||En(Ps(t,x))||""),(c+"").charAt(1)==="="&&(c=Ps(t,x))):c=Ps(t,x),f=parseFloat(c),y=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),d=parseFloat(h),x in ls&&(x==="autoAlpha"&&(f===1&&Ps(t,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,a.visibility),lr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),x!=="scale"&&x!=="transform"&&(x=ls[x],~x.indexOf(",")&&(x=x.split(",")[0]))),M=x in Is,M){if(this.styles.save(x),C=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=vi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=vi(t,"perspective"),A?t.style.perspective=A:cr(t,"perspective")}d=parseFloat(h)}if(v||(T=t._gsap,T.renderTransform&&!e.parseTransform||Ml(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,v=this._pt=new Xn(this._pt,a,Ve,0,1,T.renderTransform,T,0,-1),v.dep=1),x==="scale")this._pt=new Xn(this._pt,T,"scaleY",T.scaleY,(y?Fr(T.scaleY,y+d):d)-T.scaleY||0,$d),this._pt.u=0,o.push("scaleY",x),x+="X";else if(x==="transformOrigin"){S.push(si,0,a[si]),h=xT(h),T.svg?jd(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==T.zOrigin&&lr(this,T,"zOrigin",T.zOrigin,g),lr(this,a,x,uu(c),uu(h)));continue}else if(x==="svgOrigin"){jd(t,h,1,E,0,this);continue}else if(x in O0){MT(this,T,x,f,y?Fr(f,y+h):h);continue}else if(x==="smoothOrigin"){lr(this,T,"smooth",T.smooth,h);continue}else if(x==="force3D"){T[x]=h;continue}else if(x==="transform"){bT(this,h,t);continue}}else x in a||(x=qo(x)||x);if(M||(d||d===0)&&(f||f===0)&&!iT.test(h)&&x in a)m=(c+"").substr((f+"").length),d||(d=0),g=En(h)||(x in ii.units?ii.units[x]:m),m!==g&&(f=hr(t,x,c,g)),this._pt=new Xn(this._pt,M?T:a,x,f,(y?Fr(f,y+d):d)-f,!M&&(g==="px"||x==="zIndex")&&e.autoRound!==!1?aT:$d),this._pt.u=g||0,M&&C!==h?(this._pt.b=c,this._pt.e=C,this._pt.r=oT):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=rT);else if(x in a)_T.call(this,t,x,c,y?y+h:h);else if(x in t)this.add(t,x,c||t[x],y?y+h:h,i,r);else if(x!=="parseTransform"){ru(x,h);continue}M||(x in a?S.push(x,0,a[x]):typeof t[x]=="function"?S.push(x,2,t[x]()):S.push(x,1,c||t[x])),o.push(x)}}_&&Zd(this)},render:function(t,e){if(e.tween._time||!ep())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ps,aliases:ls,getSetter:function(t,e,n){var i=ls[e];return i&&i.indexOf(",")<0&&(e=i),e in Is&&e!==si&&(t._gsap.x||Ps(t,"x"))?n&&v0===n?e==="scale"?uT:hT:(v0=n||{})&&(e==="scale"?fT:dT):t.style&&!su(t.style[e])?lT:~e.indexOf("-")?cT:cu(t,e)},core:{_removeProperty:cr,_getMatrix:ip}};Un.utils.checkPrefix=qo;Un.core.getStyleSaver=I0;(function(s,t,e,n){var i=Wn(s+","+t+","+e,function(r){Is[r]=1});Wn(t,function(r){ii.units[r]="deg",O0[r]=1}),ls[i[13]]=s+","+t,Wn(n,function(r){var o=r.split(":");ls[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ii.units[s]="px"});Un.registerPlugin(sp);var rn=Un.registerPlugin(sp)||Un,DR=rn.core.Tween;function B0(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function TT(s,t,e){return t&&B0(s.prototype,t),e&&B0(s,e),s}var An,pu,wT,ri,ur,fr,Zo,k0,Hr,Jo,G0,Ls,Xi,V0,H0=function(){return An||typeof window!="undefined"&&(An=window.gsap)&&An.registerPlugin&&An},W0=1,Yo=[],re=[],qi=[],Tl=Date.now,rp=function(t,e){return e},ET=function(){var t=Jo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,qi),re=n,qi=i,rp=function(o,a){return e[o](a)}},Ns=function(t,e){return~qi.indexOf(t)&&qi[qi.indexOf(t)+1][e]},wl=function(t){return!!~G0.indexOf(t)},Yn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},qn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},fu="scrollLeft",du="scrollTop",op=function(){return Ls&&Ls.isPressed||re.cache++},mu=function(t,e){var n=function i(r){if(r||r===0){W0&&ri.history.scrollRestoration!=="manual"&&(ri.history.scrollRestoration="manual");var o=Ls&&Ls.isPressed;r=i.v=Math.round(r)||(Ls&&Ls.iOS?1:0),t(r),i.cacheID=re.cache,o&&rp("ss",r)}else(e||re.cache!==i.cacheID||rp("ref"))&&(i.cacheID=re.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Fn={s:fu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:mu(function(s){return arguments.length?ri.scrollTo(s,on.sc()):ri.pageXOffset||ur[fu]||fr[fu]||Zo[fu]||0})},on={s:du,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fn,sc:mu(function(s){return arguments.length?ri.scrollTo(Fn.sc(),s):ri.pageYOffset||ur[du]||fr[du]||Zo[du]||0})},Zn=function(t,e){return(e&&e._ctx&&e._ctx.selector||An.utils.toArray)(t)[0]||(typeof t=="string"&&An.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},AT=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Ds=function(t,e){var n=e.s,i=e.sc;wl(t)&&(t=ur.scrollingElement||fr);var r=re.indexOf(t),o=i===on.sc?1:2;!~r&&(r=re.push(t)-1),re[r+o]||Yn(t,"scroll",op);var a=re[r+o],l=a||(re[r+o]=mu(Ns(t,n),!0)||(wl(t)?i:mu(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=An.getProperty(t,"scrollBehavior")==="smooth"),l},gu=function(t,e,n){var i=t,r=t,o=Tl(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,x){var m=Tl();x||m-o>l?(r=i,i=p,a=o,o=m):n?i+=p:i=r+(p-r)/(m-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},f=function(p){var x=a,m=r,g=Tl();return(p||p===0)&&p!==i&&h(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-x)*1e3};return{update:h,reset:d,getVelocity:f}},bl=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},z0=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},X0=function(){Jo=An.core.globals().ScrollTrigger,Jo&&Jo.core&&ET()},q0=function(t){return An=t||H0(),!pu&&An&&typeof document!="undefined"&&document.body&&(ri=window,ur=document,fr=ur.documentElement,Zo=ur.body,G0=[ri,ur,fr,Zo],wT=An.utils.clamp,V0=An.core.context||function(){},Hr="onpointerenter"in Zo?"pointer":"mouse",k0=Ze.isTouch=ri.matchMedia&&ri.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ri||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Xi=Ze.eventTypes=("ontouchstart"in fr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in fr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return W0=0},500),pu=1),Jo||X0(),pu};Fn.op=on;re.cache=0;var Ze=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){pu||q0(An)||console.warn("Please gsap.registerPlugin(Observer)"),Jo||X0();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,p=n.wheelSpeed,x=n.event,m=n.onDragStart,g=n.onDragEnd,y=n.onDrag,M=n.onPress,v=n.onRelease,T=n.onRight,E=n.onLeft,_=n.onUp,S=n.onDown,C=n.onChangeX,A=n.onChangeY,L=n.onChange,D=n.onToggleX,G=n.onToggleY,I=n.onHover,k=n.onHoverEnd,V=n.onMove,F=n.ignoreCheck,Q=n.isNormalizer,X=n.onGestureStart,P=n.onGestureEnd,j=n.onWheel,wt=n.onEnable,Ft=n.onDisable,Z=n.onClick,ut=n.scrollSpeed,Mt=n.capture,Rt=n.allowClicks,gt=n.lockAxis,Dt=n.onLockAxis;this.target=a=Zn(a)||fr,this.vars=n,u&&(u=An.utils.toArray(u)),i=i||1e-9,r=r||0,p=p||1,ut=ut||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ri.getComputedStyle(Zo).lineHeight)||22);var _e,Nt,Xt,Lt,K,lt,ct,B=this,dt=0,qt=0,Ot=n.passive||!h&&n.passive!==!1,Vt=Ds(a,Fn),Qt=Ds(a,on),ne=Vt(),U=Qt(),oe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Xi[0]==="pointerdown",Kt=wl(a),Jt=a.ownerDocument||ur,pt=[0,0,0],me=[0,0,0],zt=0,Yt=function(){return zt=Tl()},R=function(vt,rt){return(B.event=vt)&&u&&AT(vt.target,u)||rt&&oe&&vt.pointerType!=="touch"||F&&F(vt,rt)},b=function(){B._vx.reset(),B._vy.reset(),Nt.pause(),d&&d(B)},W=function(){var vt=B.deltaX=z0(pt),rt=B.deltaY=z0(me),nt=Math.abs(vt)>=i,St=Math.abs(rt)>=i;L&&(nt||St)&&L(B,vt,rt,pt,me),nt&&(T&&B.deltaX>0&&T(B),E&&B.deltaX<0&&E(B),C&&C(B),D&&B.deltaX<0!=dt<0&&D(B),dt=B.deltaX,pt[0]=pt[1]=pt[2]=0),St&&(S&&B.deltaY>0&&S(B),_&&B.deltaY<0&&_(B),A&&A(B),G&&B.deltaY<0!=qt<0&&G(B),qt=B.deltaY,me[0]=me[1]=me[2]=0),(Lt||Xt)&&(V&&V(B),Xt&&(m&&Xt===1&&m(B),y&&y(B),Xt=0),Lt=!1),lt&&!(lt=!1)&&Dt&&Dt(B),K&&(j(B),K=!1),_e=0},ot=function(vt,rt,nt){pt[nt]+=vt,me[nt]+=rt,B._vx.update(vt),B._vy.update(rt),c?_e||(_e=requestAnimationFrame(W)):W()},st=function(vt,rt){gt&&!ct&&(B.axis=ct=Math.abs(vt)>Math.abs(rt)?"x":"y",lt=!0),ct!=="y"&&(pt[2]+=vt,B._vx.update(vt,!0)),ct!=="x"&&(me[2]+=rt,B._vy.update(rt,!0)),c?_e||(_e=requestAnimationFrame(W)):W()},mt=function(vt){if(!R(vt,1)){vt=bl(vt,h);var rt=vt.clientX,nt=vt.clientY,St=rt-B.x,it=nt-B.y,Pt=B.isDragging;B.x=rt,B.y=nt,(Pt||(St||it)&&(Math.abs(B.startX-rt)>=r||Math.abs(B.startY-nt)>=r))&&(Xt||(Xt=Pt?2:1),Pt||(B.isDragging=!0),st(St,it))}},yt=B.onPress=function(at){R(at,1)||at&&at.button||(B.axis=ct=null,Nt.pause(),B.isPressed=!0,at=bl(at),dt=qt=0,B.startX=B.x=at.clientX,B.startY=B.y=at.clientY,B._vx.reset(),B._vy.reset(),Yn(Q?a:Jt,Xi[1],mt,Ot,!0),B.deltaX=B.deltaY=0,M&&M(B))},q=B.onRelease=function(at){if(!R(at,1)){qn(Q?a:Jt,Xi[1],mt,!0);var vt=!isNaN(B.y-B.startY),rt=B.isDragging,nt=rt&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),St=bl(at);!nt&&vt&&(B._vx.reset(),B._vy.reset(),h&&Rt&&An.delayedCall(.08,function(){if(Tl()-zt>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(Jt.createEvent){var it=Jt.createEvent("MouseEvents");it.initMouseEvent("click",!0,!0,ri,1,St.screenX,St.screenY,St.clientX,St.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(it)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,d&&rt&&!Q&&Nt.restart(!0),Xt&&W(),g&&rt&&g(B),v&&v(B,nt)}},et=function(vt){return vt.touches&&vt.touches.length>1&&(B.isGesturing=!0)&&X(vt,B.isDragging)},ft=function(){return(B.isGesturing=!1)||P(B)},N=function(vt){if(!R(vt)){var rt=Vt(),nt=Qt();ot((rt-ne)*ut,(nt-U)*ut,1),ne=rt,U=nt,d&&Nt.restart(!0)}},tt=function(vt){if(!R(vt)){vt=bl(vt,h),j&&(K=!0);var rt=(vt.deltaMode===1?l:vt.deltaMode===2?ri.innerHeight:1)*p;ot(vt.deltaX*rt,vt.deltaY*rt,0),d&&!Q&&Nt.restart(!0)}},$=function(vt){if(!R(vt)){var rt=vt.clientX,nt=vt.clientY,St=rt-B.x,it=nt-B.y;B.x=rt,B.y=nt,Lt=!0,d&&Nt.restart(!0),(St||it)&&st(St,it)}},_t=function(vt){B.event=vt,I(B)},ht=function(vt){B.event=vt,k(B)},xt=function(vt){return R(vt)||bl(vt,h)&&Z(B)};Nt=B._dc=An.delayedCall(f||.25,b).pause(),B.deltaX=B.deltaY=0,B._vx=gu(0,50,!0),B._vy=gu(0,50,!0),B.scrollX=Vt,B.scrollY=Qt,B.isDragging=B.isGesturing=B.isPressed=!1,V0(this),B.enable=function(at){return B.isEnabled||(Yn(Kt?Jt:a,"scroll",op),o.indexOf("scroll")>=0&&Yn(Kt?Jt:a,"scroll",N,Ot,Mt),o.indexOf("wheel")>=0&&Yn(a,"wheel",tt,Ot,Mt),(o.indexOf("touch")>=0&&k0||o.indexOf("pointer")>=0)&&(Yn(a,Xi[0],yt,Ot,Mt),Yn(Jt,Xi[2],q),Yn(Jt,Xi[3],q),Rt&&Yn(a,"click",Yt,!0,!0),Z&&Yn(a,"click",xt),X&&Yn(Jt,"gesturestart",et),P&&Yn(Jt,"gestureend",ft),I&&Yn(a,Hr+"enter",_t),k&&Yn(a,Hr+"leave",ht),V&&Yn(a,Hr+"move",$)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=Lt=Xt=!1,B._vx.reset(),B._vy.reset(),ne=Vt(),U=Qt(),at&&at.type&&yt(at),wt&&wt(B)),B},B.disable=function(){B.isEnabled&&(Yo.filter(function(at){return at!==B&&wl(at.target)}).length||qn(Kt?Jt:a,"scroll",op),B.isPressed&&(B._vx.reset(),B._vy.reset(),qn(Q?a:Jt,Xi[1],mt,!0)),qn(Kt?Jt:a,"scroll",N,Mt),qn(a,"wheel",tt,Mt),qn(a,Xi[0],yt,Mt),qn(Jt,Xi[2],q),qn(Jt,Xi[3],q),qn(a,"click",Yt,!0),qn(a,"click",xt),qn(Jt,"gesturestart",et),qn(Jt,"gestureend",ft),qn(a,Hr+"enter",_t),qn(a,Hr+"leave",ht),qn(a,Hr+"move",$),B.isEnabled=B.isPressed=B.isDragging=!1,Ft&&Ft(B))},B.kill=B.revert=function(){B.disable();var at=Yo.indexOf(B);at>=0&&Yo.splice(at,1),Ls===B&&(Ls=0)},Yo.push(B),Q&&wl(a)&&(Ls=B),B.enable(x)},TT(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Ze.version="3.15.1";Ze.create=function(s){return new Ze(s)};Ze.register=q0;Ze.getAll=function(){return Yo.slice()};Ze.getById=function(s){return Yo.filter(function(t){return t.vars.id===s})[0]};H0()&&An.registerPlugin(Ze);var Ut,jo,ce,be,Mi,Me,yp,Lu,Bl,Ll,Al,_u,Bn,Ou,dp,$n,Y0,Z0,ta,h_,ap,u_,Jn,pp,f_,d_,dr,mp,Sp,ea,Mp,pr,gp,lp,xu=1,zn=Date.now,cp=zn(),Ni=0,Rl=0,J0=function(t,e,n){var i=Si(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},$0=function(t,e){return e&&(!Si(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},RT=function s(){return Rl&&requestAnimationFrame(s)},K0=function(){return Ou=1},Q0=function(){return Ou=0},cs=function(t){return t},Cl=function(t){return Math.round(t*1e5)/1e5||0},p_=function(){return typeof window!="undefined"},m_=function(){return Ut||p_()&&(Ut=window.gsap)&&Ut.registerPlugin&&Ut},Jr=function(t){return!!~yp.indexOf(t)},g_=function(t){return(t==="Height"?Mp:ce["inner"+t])||Mi["client"+t]||Me["client"+t]},__=function(t){return Ns(t,"getBoundingClientRect")||(Jr(t)?function(){return Iu.width=ce.innerWidth,Iu.height=Mp,Iu}:function(){return Os(t)})},CT=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=Ns(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?g_(r):t["client"+r])||0}},PT=function(t,e){return!e||~qi.indexOf(t)?__(t):function(){return Iu}},hs=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Ns(t,n))?o()-__(t)()[r]:Jr(t)?(Mi[n]||Me[n])-g_(i):t[n]-t["offset"+i])},vu=function(t,e){for(var n=0;n<ta.length;n+=3)(!e||~e.indexOf(ta[n+1]))&&t(ta[n],ta[n+1],ta[n+2])},Si=function(t){return typeof t=="string"},kn=function(t){return typeof t=="function"},Pl=function(t){return typeof t=="number"},Wr=function(t){return typeof t=="object"},El=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},$o=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Ko=Math.abs,x_="left",v_="top",bp="right",Tp="bottom",qr="width",Yr="height",Dl="Right",Nl="Left",Ol="Top",Ul="Bottom",an="padding",Li="margin",ia="Width",wp="Height",mn="px",Di=function(t){return ce.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},IT=function(t){var e=Di(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},j0=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Os=function(t,e){var n=e&&Di(t)[dp]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ut.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Du=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},y_=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},LT=function(t){return function(e){return Ut.utils.snap(y_(t),e)}},Ep=function(t){var e=Ut.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},DT=function(t){return function(e,n){return Ep(y_(t))(e,n.direction)}},yu=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},yn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},vn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Su=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},t_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Mu={toggleActions:"play",anticipatePin:0},Nu={top:0,left:0,center:.5,bottom:1,right:1},Au=function(t,e){if(Si(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Nu?Nu[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},bu=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,u=r.fontWeight,p=be.createElement("div"),x=Jr(n)||Ns(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=x?Me:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,M=y?c:h,v="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&x?"fixed;":"absolute;"),(m||l||!x)&&(v+=(i===on?bp:Tp)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=y,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=v,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],Ru(p,0,i,y),p},Ru=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+ia]=1,r["border"+a+ia]=0,r[n.p]=e+"px",Ut.set(t,r)},le=[],_p={},zl,e_=function(){return zn()-Ni>34&&(zl||(zl=requestAnimationFrame(Us)))},Qo=function(){(!Jn||!Jn.isPressed||Jn.startX>Me.clientWidth)&&(re.cache++,Jn?zl||(zl=requestAnimationFrame(Us)):Us(),Ni||Kr("scrollStart"),Ni=zn())},hp=function(){d_=ce.innerWidth,f_=ce.innerHeight},Il=function(t){re.cache++,(t===!0||!Bn&&!u_&&!be.fullscreenElement&&!be.webkitFullscreenElement&&(!pp||d_!==ce.innerWidth||Math.abs(ce.innerHeight-f_)>ce.innerHeight*.25))&&Lu.restart(!0)},$r={},NT=[],S_=function s(){return vn(ie,"scrollEnd",s)||Xr(!0)},Kr=function(t){return $r[t]&&$r[t].map(function(e){return e()})||NT},yi=[],M_=function(t){for(var e=0;e<yi.length;e+=5)(!t||yi[e+4]&&yi[e+4].query===t)&&(yi[e].style.cssText=yi[e+1],yi[e].getBBox&&yi[e].setAttribute("transform",yi[e+2]||""),yi[e+3].uncache=1)},b_=function(){re.cache++,re.forEach(function(t){return kn(t)&&(t.rec=t())})},Ap=function(t,e){var n;for($n=0;$n<le.length;$n++)n=le[$n],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));pr=!0,e&&M_(e),e||Kr("revert")},T_=function(t,e){re.cache++,(e||!Kn)&&re.forEach(function(n){return kn(n)&&n.cacheID++&&(n.rec=0)}),Si(t)&&(Sp=t,ce.history.scrollRestoration!==t&&(ce.history.scrollRestoration=t))},Kn,Zr=0,n_,OT=function(){if(n_!==Zr){var t=n_=Zr;requestAnimationFrame(function(){return t===Zr&&Xr(!0)})}},w_=function(){Me.appendChild(ea),Mp=!Jn&&ea.offsetHeight||ce.innerHeight,Me.removeChild(ea)},i_=function(t){return Bl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Xr=function(t,e){if(Mi=be.documentElement,Me=be.body,yp=[ce,be,Mi,Me],Ni&&!t&&!pr){yn(ie,"scrollEnd",S_);return}w_(),Kn=ie.isRefreshing=!0,pr||b_();var n=Kr("refreshInit");h_&&ie.sort(),e||Ap(),re.forEach(function(i){kn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),le.slice(0).forEach(function(i){return i.refresh()}),pr=!1,le.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),gp=1,i_(!0),le.forEach(function(i){var r=hs(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),i_(!1),gp=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),re.forEach(function(i){kn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),T_(Sp,1),Lu.pause(),Zr++,Kn=2,Us(2),le.forEach(function(i){return kn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Kn=ie.isRefreshing=!1,Kr("refresh")},xp=0,Cu=1,Fl,Us=function(t){if(t===2||!Kn&&!pr){ie.isUpdating=!0,Fl&&Fl.update(0);var e=le.length,n=zn(),i=n-cp>=50,r=e&&le[0].scroll();if(Cu=xp>r?-1:1,Kn||(xp=r),i&&(Ni&&!Ou&&n-Ni>200&&(Ni=0,Kr("scrollEnd")),Al=cp,cp=n),Cu<0){for($n=e;$n-- >0;)le[$n]&&le[$n].update(0,i);Cu=1}else for($n=0;$n<e;$n++)le[$n]&&le[$n].update(0,i);ie.isUpdating=!1}zl=0},vp=[x_,v_,Tp,bp,Li+Ul,Li+Dl,Li+Ol,Li+Nl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Pu=vp.concat([qr,Yr,"boxSizing","max"+ia,"max"+wp,"position",Li,an,an+Ol,an+Dl,an+Ul,an+Nl]),UT=function(t,e,n){na(n);var i=t._gsap;if(i.spacerIsNative)na(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},up=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=vp.length,o=e.style,a=t.style,l;r--;)l=vp[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Tp]=a[bp]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[qr]=Du(t,Fn)+mn,o[Yr]=Du(t,on)+mn,o[an]=a[Li]=a[v_]=a[x_]="0",na(i),a[qr]=a["max"+ia]=n[qr],a[Yr]=a["max"+wp]=n[Yr],a[an]=n[an],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},FT=/([A-Z])/g,na=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Ut.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(FT,"-$1").toLowerCase())}},Tu=function(t){for(var e=Pu.length,n=t.style,i=[],r=0;r<e;r++)i.push(Pu[r],n[Pu[r]]);return i.t=t,i},BT=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Iu={left:0,top:0},s_=function(t,e,n,i,r,o,a,l,c,h,d,f,u,p){kn(t)&&(t=t(l)),Si(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Au("0"+t.substr(3),n):0));var x=u?u.time():0,m,g,y;if(u&&u.seek(0),isNaN(t)||(t=+t),Pl(t))u&&(t=Ut.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),a&&Ru(a,n,i,!0);else{kn(e)&&(e=e(l));var M=(t||"0").split(" "),v,T,E,_;y=Zn(e,l)||Me,v=Os(y)||{},(!v||!v.left&&!v.top)&&Di(y).display==="none"&&(_=y.style.display,y.style.display="block",v=Os(y),_?y.style.display=_:y.style.removeProperty("display")),T=Au(M[0],v[i.d]),E=Au(M[1]||"0",n),t=v[i.p]-c[i.p]-h+T+r-E,a&&Ru(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var S=t+n,C=o._isStart;m="scroll"+i.d2,Ru(o,S,i,C&&S>20||!C&&(d?Math.max(Me[m],Mi[m]):o.parentNode[m])<=S+1),d&&(c=Os(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+mn))}return u&&y&&(m=Os(y),u.seek(f),g=Os(y),u._caScrollDist=m[i.p]-g[i.p],t=t/u._caScrollDist*f),u&&u.seek(x),u?t:Math.round(t)},zT=/(webkit|moz|length|cssText|inset)/i,r_=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===Me){t._stOrig=r.cssText,a=Di(t);for(o in a)!+o&&!zT.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Ut.core.getCache(t).uncache=1,e.appendChild(t)}},E_=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},wu=function(t,e,n){var i={};i[e.p]="+="+n,Ut.set(t,i)},o_=function(t,e){var n=Ds(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var f=o.tween,u=l.onComplete,p={};c=c||n();var x=E_(n,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return x(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){re.cache++,o.tween&&Us()},l.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=Ut.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},yn(t,"wheel",n.wheelHandler),ie.isTouch&&yn(t,"touchmove",n.wheelHandler),r},ie=(function(){function s(e,n){jo||s.register(Ut)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),mp(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Rl){this.update=this.refresh=this.kill=cs;return}n=j0(Si(n)||Pl(n)||n.nodeType?{trigger:n}:n,Mu);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,u=r.pin,p=r.pinSpacing,x=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,y=r.onSnapComplete,M=r.once,v=r.snap,T=r.pinReparent,E=r.pinSpacer,_=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Fn:on,L=!d&&d!==0,D=Zn(n.scroller||ce),G=Ut.core.getCache(D),I=Jr(D),k=("pinType"in n?n.pinType:Ns(D,"pinType")||I&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=L&&n.toggleActions.split(" "),Q="markers"in n?n.markers:Mu.markers,X=I?0:parseFloat(Di(D)["border"+A.p2+ia])||0,P=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(P)},wt=CT(D,I,A),Ft=PT(D,I),Z=0,ut=0,Mt=0,Rt=Ds(D,A),gt,Dt,_e,Nt,Xt,Lt,K,lt,ct,B,dt,qt,Ot,Vt,Qt,ne,U,oe,Kt,Jt,pt,me,zt,Yt,R,b,W,ot,st,mt,yt,q,et,ft,N,tt,$,_t,ht;if(P._startClamp=P._endClamp=!1,P._dir=A,m*=45,P.scroller=D,P.scroll=_?_.time.bind(_):Rt,Nt=Rt(),pr&&Rt.rec==null&&(Rt.rec=Nt),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(h_=1,n.refreshPriority===-9999&&(Fl=P)),G.tweenScroll=G.tweenScroll||{top:o_(D,on),left:o_(D,Fn)},P.tweenTo=gt=G.tweenScroll[A.p],P.scrubDuration=function(nt){et=Pl(nt)&&nt,et?q?q.duration(nt):q=Ut.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:et,paused:!0,onComplete:function(){return g&&g(P)}}):(q&&q.progress(1).kill(),q=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),mt=0,l||(l=i.vars.id)),v&&((!Wr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Me.style&&Ut.set(I?[Me,Mi]:D,{scrollBehavior:"auto"}),re.forEach(function(nt){return kn(nt)&&nt.target===(I?be.scrollingElement||Mi:D)&&(nt.smooth=!1)}),_e=kn(v.snapTo)?v.snapTo:v.snapTo==="labels"?LT(i):v.snapTo==="labelsDirectional"?DT(i):v.directional!==!1?function(nt,St){return Ep(v.snapTo)(nt,zn()-ut<500?0:St.direction)}:Ut.utils.snap(v.snapTo),ft=v.duration||{min:.1,max:2},ft=Wr(ft)?Ll(ft.min,ft.max):Ll(ft,ft),N=Ut.delayedCall(v.delay||et/2||.1,function(){var nt=Rt(),St=zn()-ut<500,it=gt.tween;if((St||Math.abs(P.getVelocity())<10)&&!it&&!Ou&&Z!==nt){var Pt=(nt-Lt)/Vt,he=i&&!L?i.totalProgress():Pt,te=St?0:(he-yt)/(zn()-Al)*1e3||0,Ne=Ut.utils.clamp(-Pt,1-Pt,Ko(te/2)*te/.185),je=Pt+(v.inertia===!1?0:Ne),Oe,Ee,ye=v,cn=ye.onStart,Ae=ye.onInterrupt,Rn=ye.onComplete;if(Oe=_e(je,P),Pl(Oe)||(Oe=je),Ee=Math.max(0,Math.round(Lt+Oe*Vt)),nt<=K&&nt>=Lt&&Ee!==nt){if(it&&!it._initted&&it.data<=Ko(Ee-nt))return;v.inertia===!1&&(Ne=Oe-Pt),gt(Ee,{duration:ft(Ko(Math.max(Ko(je-he),Ko(Oe-he))*.185/te/.05||0)),ease:v.ease||"power3",data:Ko(Ee-nt),onInterrupt:function(){return N.restart(!0)&&Ae&&$o(P,Ae)},onComplete:function(){P.update(),Z=Rt(),i&&!L&&(q?q.resetTo("totalProgress",Oe,i._tTime/i._tDur):i.progress(Oe)),mt=yt=i&&!L?i.totalProgress():P.progress,y&&y(P),Rn&&$o(P,Rn)}},nt,Ne*Vt,Ee-nt-Ne*Vt),cn&&$o(P,cn,gt.tween)}}else P.isActive&&Z!==nt&&N.restart(!0)}).pause()),l&&(_p[l]=P),f=P.trigger=Zn(f||u!==!0&&u),ht=f&&f._gsap&&f._gsap.stRevert,ht&&(ht=ht(P)),u=u===!0?f:Zn(u),Si(a)&&(a={targets:f,className:a}),u&&(p===!1||p===Li||(p=!p&&u.parentNode&&u.parentNode.style&&Di(u.parentNode).display==="flex"?!1:an),P.pin=u,Dt=Ut.core.getCache(u),Dt.spacer?Qt=Dt.pinState:(E&&(E=Zn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Dt.spacerIsNative=!!E,E&&(Dt.spacerState=Tu(E))),Dt.spacer=oe=E||be.createElement("div"),oe.classList.add("pin-spacer"),l&&oe.classList.add("pin-spacer-"+l),Dt.pinState=Qt=Tu(u)),n.force3D!==!1&&Ut.set(u,{force3D:!0}),P.spacer=oe=Dt.spacer,st=Di(u),Yt=st[p+A.os2],Jt=Ut.getProperty(u),pt=Ut.quickSetter(u,A.a,mn),up(u,oe,st),U=Tu(u)),Q){qt=Wr(Q)?j0(Q,t_):t_,B=bu("scroller-start",l,D,A,qt,0),dt=bu("scroller-end",l,D,A,qt,0,B),Kt=B["offset"+A.op.d2];var xt=Zn(Ns(D,"content")||D);lt=this.markerStart=bu("start",l,xt,A,qt,Kt,0,_),ct=this.markerEnd=bu("end",l,xt,A,qt,Kt,0,_),_&&(_t=Ut.quickSetter([lt,ct],A.a,mn)),!k&&!(qi.length&&Ns(D,"fixedMarkers")===!0)&&(IT(I?Me:D),Ut.set([B,dt],{force3D:!0}),b=Ut.quickSetter(B,A.a,mn),ot=Ut.quickSetter(dt,A.a,mn))}if(_){var at=_.vars.onUpdate,vt=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){P.update(0,0,1),at&&at.apply(_,vt||[])})}if(P.previous=function(){return le[le.indexOf(P)-1]},P.next=function(){return le[le.indexOf(P)+1]},P.revert=function(nt,St){if(!St)return P.kill(!0);var it=nt!==!1||!P.enabled,Pt=Bn;it!==P.isReverted&&(it&&(tt=Math.max(Rt(),P.scroll.rec||0),Mt=P.progress,$=i&&i.progress()),lt&&[lt,ct,B,dt].forEach(function(he){return he.style.display=it?"none":"block"}),it&&(Bn=P,P.update(it)),u&&(!T||!P.isActive)&&(it?UT(u,oe,Qt):up(u,oe,Di(u),R)),it||P.update(it),Bn=Pt,P.isReverted=it)},P.refresh=function(nt,St,it,Pt){if(!((Bn||!P.enabled)&&!St)){if(u&&nt&&Ni){yn(s,"scrollEnd",S_);return}!Kn&&j&&j(P),Bn=P,gt.tween&&!it&&(gt.tween.kill(),gt.tween=0),q&&q.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(H){return H.vars.immediateRender&&H.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var he=wt(),te=Ft(),Ne=_?_.duration():hs(D,A),je=Vt<=.01||!Vt,Oe=0,Ee=Pt||0,ye=Wr(it)?it.end:n.end,cn=n.endTrigger||f,Ae=Wr(it)?it.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),Rn=P.pinnedContainer=n.pinnedContainer&&Zn(n.pinnedContainer,P),oi=f&&Math.max(0,le.indexOf(P))||0,He=oi,tn,hn,ai,to,un,We,bi,ra,Wl,Bs,w,O,J;for(Q&&Wr(it)&&(O=Ut.getProperty(B,A.p),J=Ut.getProperty(dt,A.p));He-- >0;)We=le[He],We.end||We.refresh(0,1)||(Bn=P),bi=We.pin,bi&&(bi===f||bi===u||bi===Rn)&&!We.isReverted&&(Bs||(Bs=[]),Bs.unshift(We),We.revert(!0,!0)),We!==le[He]&&(oi--,He--);for(kn(Ae)&&(Ae=Ae(P)),Ae=J0(Ae,"start",P),Lt=s_(Ae,f,he,A,Rt(),lt,B,P,te,X,k,Ne,_,P._startClamp&&"_startClamp")||(u?-.001:0),kn(ye)&&(ye=ye(P)),Si(ye)&&!ye.indexOf("+=")&&(~ye.indexOf(" ")?ye=(Si(Ae)?Ae.split(" ")[0]:"")+ye:(Oe=Au(ye.substr(2),he),ye=Si(Ae)?Ae:(_?Ut.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,Lt):Lt)+Oe,cn=f)),ye=J0(ye,"end",P),K=Math.max(Lt,s_(ye||(cn?"100% 0":Ne),cn,he,A,Rt()+Oe,ct,dt,P,te,X,k,Ne,_,P._endClamp&&"_endClamp"))||-.001,Oe=0,He=oi;He--;)We=le[He]||{},bi=We.pin,bi&&We.start-We._pinPush<=Lt&&!_&&We.end>0&&(tn=We.end-(P._startClamp?Math.max(0,We.start):We.start),(bi===f&&We.start-We._pinPush<Lt||bi===Rn)&&isNaN(Ae)&&(Oe+=tn*(1-We.progress)),bi===u&&(Ee+=tn));if(Lt+=Oe,K+=Oe,P._startClamp&&(P._startClamp+=Oe),P._endClamp&&!Kn&&(P._endClamp=K||-.001,K=Math.min(K,hs(D,A))),Vt=K-Lt||(Lt-=.01)&&.001,je&&(Mt=Ut.utils.clamp(0,1,Ut.utils.normalize(Lt,K,tt))),P._pinPush=Ee,lt&&Oe&&(tn={},tn[A.a]="+="+Oe,Rn&&(tn[A.p]="-="+Rt()),Ut.set([lt,ct],tn)),u&&!(gp&&P.end>=hs(D,A)))tn=Di(u),to=A===on,ai=Rt(),me=parseFloat(Jt(A.a))+Ee,!Ne&&K>1&&(w=(I?be.scrollingElement||Mi:D).style,w={style:w,value:w["overflow"+A.a.toUpperCase()]},I&&Di(Me)["overflow"+A.a.toUpperCase()]!=="scroll"&&(w.style["overflow"+A.a.toUpperCase()]="scroll")),up(u,oe,tn),U=Tu(u),hn=Os(u,!0),ra=k&&Ds(D,to?Fn:on)(),p?(R=[p+A.os2,Vt+Ee+mn],R.t=oe,He=p===an?Du(u,A)+Vt+Ee:0,He&&(R.push(A.d,He+mn),oe.style.flexBasis!=="auto"&&(oe.style.flexBasis=He+mn)),na(R),Rn&&le.forEach(function(H){H.pin===Rn&&H.vars.pinSpacing!==!1&&(H._subPinOffset=!0)}),k&&Rt(tt)):(He=Du(u,A),He&&oe.style.flexBasis!=="auto"&&(oe.style.flexBasis=He+mn)),k&&(un={top:hn.top+(to?ai-Lt:ra)+mn,left:hn.left+(to?ra:ai-Lt)+mn,boxSizing:"border-box",position:"fixed"},un[qr]=un["max"+ia]=Math.ceil(hn.width)+mn,un[Yr]=un["max"+wp]=Math.ceil(hn.height)+mn,un[Li]=un[Li+Ol]=un[Li+Dl]=un[Li+Ul]=un[Li+Nl]="0",un[an]=tn[an],un[an+Ol]=tn[an+Ol],un[an+Dl]=tn[an+Dl],un[an+Ul]=tn[an+Ul],un[an+Nl]=tn[an+Nl],ne=BT(Qt,un,T),Kn&&Rt(0)),i?(Wl=i._initted,ap(1),i.render(i.duration(),!0,!0),zt=Jt(A.a)-me+Vt+Ee,W=Math.abs(Vt-zt)>1,k&&W&&ne.splice(ne.length-2,2),i.render(0,!0,!0),Wl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ap(0)):zt=Vt,w&&(w.value?w.style["overflow"+A.a.toUpperCase()]=w.value:w.style.removeProperty("overflow-"+A.a));else if(f&&Rt()&&!_)for(hn=f.parentNode;hn&&hn!==Me;)hn._pinOffset&&(Lt-=hn._pinOffset,K-=hn._pinOffset),hn=hn.parentNode;Bs&&Bs.forEach(function(H){return H.revert(!1,!0)}),P.start=Lt,P.end=K,Nt=Xt=Kn?tt:Rt(),!_&&!Kn&&!pr&&(Nt<tt&&Rt(tt),P.scroll.rec=0),P.revert(!1,!0),ut=zn(),N&&(Z=-1,N.restart(!0)),Bn=0,i&&L&&(i._initted||$)&&i.progress()!==$&&i.progress($||0,!0).render(i.time(),!0,!0),(je||Mt!==P.progress||_||x||i&&!i._initted)&&(i&&!L&&(i._initted||Mt||i.vars.immediateRender!==!1)&&i.totalProgress(_&&Lt<-.001&&!Mt?Ut.utils.normalize(Lt,K,0):Mt,!0),P.progress=je||(Nt-Lt)/Vt===Mt?0:Mt),u&&p&&(oe._pinOffset=Math.round(P.progress*zt)),q&&q.invalidate(),isNaN(O)||(O-=Ut.getProperty(B,A.p),J-=Ut.getProperty(dt,A.p),wu(B,A,O),wu(lt,A,O-(Pt||0)),wu(dt,A,J),wu(ct,A,J-(Pt||0))),je&&!Kn&&P.update(),h&&!Kn&&!Ot&&(Ot=!0,h(P),Ot=!1)}},P.getVelocity=function(){return(Rt()-Xt)/(zn()-Al)*1e3||0},P.endAnimation=function(){El(P.callbackAnimation),i&&(q?q.progress(1):i.paused()?L||El(i,P.direction<0,1):El(i,i.reversed()))},P.labelToScroll=function(nt){return i&&i.labels&&(Lt||P.refresh()||Lt)+i.labels[nt]/i.duration()*Vt||0},P.getTrailing=function(nt){var St=le.indexOf(P),it=P.direction>0?le.slice(0,St).reverse():le.slice(St+1);return(Si(nt)?it.filter(function(Pt){return Pt.vars.preventOverlaps===nt}):it).filter(function(Pt){return P.direction>0?Pt.end<=Lt:Pt.start>=K})},P.update=function(nt,St,it){if(!(_&&!it&&!nt)){var Pt=Kn===!0?tt:P.scroll(),he=nt?0:(Pt-Lt)/Vt,te=he<0?0:he>1?1:he||0,Ne=P.progress,je,Oe,Ee,ye,cn,Ae,Rn,oi;if(St&&(Xt=Nt,Nt=_?Rt():Pt,v&&(yt=mt,mt=i&&!L?i.totalProgress():te)),m&&u&&!Bn&&!xu&&Ni&&(!te&&Lt<Pt+(Pt-Xt)/(zn()-Al)*m?te=1e-4:te===1&&K>Pt+(Pt-Xt)/(zn()-Al)*m&&(te=.9999)),te!==Ne&&P.enabled){if(je=P.isActive=!!te&&te<1,Oe=!!Ne&&Ne<1,Ae=je!==Oe,cn=Ae||!!te!=!!Ne,P.direction=te>Ne?1:-1,P.progress=te,cn&&!Bn&&(Ee=te&&!Ne?0:te===1?1:Ne===1?2:3,L&&(ye=!Ae&&F[Ee+1]!=="none"&&F[Ee+1]||F[Ee],oi=i&&(ye==="complete"||ye==="reset"||ye in i))),C&&(Ae||oi)&&(oi||d||!i)&&(kn(C)?C(P):P.getTrailing(C).forEach(function(ai){return ai.endAnimation()})),L||(q&&!Bn&&!xu?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",te,i._tTime/i._tDur):(q.vars.totalProgress=te,q.invalidate().restart())):i&&i.totalProgress(te,!!(Bn&&(ut||nt)))),u){if(nt&&p&&(oe.style[p+A.os2]=Yt),!k)pt(Cl(me+zt*te));else if(cn){if(Rn=!nt&&te>Ne&&K+1>Pt&&Pt+1>=hs(D,A),T)if(!nt&&(je||Rn)){var He=Os(u,!0),tn=Pt-Lt;r_(u,Me,He.top+(A===on?tn:0)+mn,He.left+(A===on?0:tn)+mn)}else r_(u,oe);na(je||Rn?ne:U),W&&te<1&&je||pt(me+(te===1&&!Rn?zt:0))}}v&&!gt.tween&&!Bn&&!xu&&N.restart(!0),a&&(Ae||M&&te&&(te<1||!lp))&&Bl(a.targets).forEach(function(ai){return ai.classList[je||M?"add":"remove"](a.className)}),o&&!L&&!nt&&o(P),cn&&!Bn?(L&&(oi&&(ye==="complete"?i.pause().totalProgress(1):ye==="reset"?i.restart(!0).pause():ye==="restart"?i.restart(!0):i[ye]()),o&&o(P)),(Ae||!lp)&&(c&&Ae&&$o(P,c),V[Ee]&&$o(P,V[Ee]),M&&(te===1?P.kill(!1,1):V[Ee]=0),Ae||(Ee=te===1?1:3,V[Ee]&&$o(P,V[Ee]))),S&&!je&&Math.abs(P.getVelocity())>(Pl(S)?S:2500)&&(El(P.callbackAnimation),q?q.progress(1):El(i,ye==="reverse"?1:!te,1))):L&&o&&!Bn&&o(P)}if(ot){var hn=_?Pt/_.duration()*(_._caScrollDist||0):Pt;b(hn+(B._isFlipped?1:0)),ot(hn)}_t&&_t(-Pt/_.duration()*(_._caScrollDist||0))}},P.enable=function(nt,St){P.enabled||(P.enabled=!0,yn(D,"resize",Il),I||yn(D,"scroll",Qo),j&&yn(s,"refreshInit",j),nt!==!1&&(P.progress=Mt=0,Nt=Xt=Z=Rt()),St!==!1&&P.refresh())},P.getTween=function(nt){return nt&&gt?gt.tween:q},P.setPositions=function(nt,St,it,Pt){if(_){var he=_.scrollTrigger,te=_.duration(),Ne=he.end-he.start;nt=he.start+Ne*nt/te,St=he.start+Ne*St/te}P.refresh(!1,!1,{start:$0(nt,it&&!!P._startClamp),end:$0(St,it&&!!P._endClamp)},Pt),P.update()},P.adjustPinSpacing=function(nt){if(R&&nt){var St=R.indexOf(A.d)+1;R[St]=parseFloat(R[St])+nt+mn,R[1]=parseFloat(R[1])+nt+mn,na(R)}},P.disable=function(nt,St){if(nt!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,St||q&&q.pause(),tt=0,Dt&&(Dt.uncache=1),j&&vn(s,"refreshInit",j),N&&(N.pause(),gt.tween&&gt.tween.kill()&&(gt.tween=0)),!I)){for(var it=le.length;it--;)if(le[it].scroller===D&&le[it]!==P)return;vn(D,"resize",Il),I||vn(D,"scroll",Qo)}},P.kill=function(nt,St){P.disable(nt,St),q&&!St&&q.kill(),l&&delete _p[l];var it=le.indexOf(P);it>=0&&le.splice(it,1),it===$n&&Cu>0&&$n--,it=0,le.forEach(function(Pt){return Pt.scroller===P.scroller&&(it=1)}),it||Kn||pr||(P.scroll.rec=0),i&&(i.scrollTrigger=null,nt&&i.revert({kill:!1}),St||i.kill()),lt&&[lt,ct,B,dt].forEach(function(Pt){return Pt.parentNode&&Pt.parentNode.removeChild(Pt)}),Fl===P&&(Fl=0),u&&(Dt&&(Dt.uncache=1),it=0,le.forEach(function(Pt){return Pt.pin===u&&it++}),it||(Dt.spacer=0)),n.onKill&&n.onKill(P)},le.push(P),P.enable(!1,!1),ht&&ht(P),i&&i.add&&!Vt){var rt=P.update;P.update=function(){P.update=rt,re.cache++,Lt||K||P.refresh()},Ut.delayedCall(.01,P.update),Vt=.01,Lt=K=0}else P.refresh();u&&OT()},s.register=function(n){return jo||(Ut=n||m_(),p_()&&window.document&&s.enable(),jo=Rl),jo},s.defaults=function(n){if(n)for(var i in n)Mu[i]=n[i];return Mu},s.disable=function(n,i){Rl=0,le.forEach(function(o){return o[i?"kill":"disable"](n)}),vn(ce,"wheel",Qo),vn(be,"scroll",Qo),clearInterval(_u),vn(be,"touchcancel",cs),vn(Me,"touchstart",cs),yu(vn,be,"pointerdown,touchstart,mousedown",K0),yu(vn,be,"pointerup,touchend,mouseup",Q0),Lu.kill(),vu(vn);for(var r=0;r<re.length;r+=3)Su(vn,re[r],re[r+1]),Su(vn,re[r],re[r+2])},s.enable=function(){if(ce=window,be=document,Mi=be.documentElement,Me=be.body,Ut){if(Bl=Ut.utils.toArray,Ll=Ut.utils.clamp,mp=Ut.core.context||cs,ap=Ut.core.suppressOverwrites||cs,Sp=ce.history.scrollRestoration||"auto",xp=ce.pageYOffset||0,Ut.core.globals("ScrollTrigger",s),Me){Rl=1,ea=document.createElement("div"),ea.style.height="100vh",ea.style.position="absolute",w_(),RT(),Ze.register(Ut),s.isTouch=Ze.isTouch,dr=Ze.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pp=Ze.isTouch===1,yn(ce,"wheel",Qo),yp=[ce,be,Mi,Me],Ut.matchMedia?(s.matchMedia=function(h){var d=Ut.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},Ut.addEventListener("matchMediaInit",function(){b_(),Ap()}),Ut.addEventListener("matchMediaRevert",function(){return M_()}),Ut.addEventListener("matchMedia",function(){Xr(0,1),Kr("matchMedia")}),Ut.matchMedia().add("(orientation: portrait)",function(){return hp(),hp})):console.warn("Requires GSAP 3.11.0 or later"),hp(),yn(be,"scroll",Qo);var n=Me.hasAttribute("style"),i=Me.style,r=i.borderTopStyle,o=Ut.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Os(Me),on.m=Math.round(a.top+on.sc())||0,Fn.m=Math.round(a.left+Fn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Me.setAttribute("style",""),Me.removeAttribute("style")),_u=setInterval(e_,250),Ut.delayedCall(.5,function(){return xu=0}),yn(be,"touchcancel",cs),yn(Me,"touchstart",cs),yu(yn,be,"pointerdown,touchstart,mousedown",K0),yu(yn,be,"pointerup,touchend,mouseup",Q0),dp=Ut.utils.checkPrefix("transform"),Pu.push(dp),jo=zn(),Lu=Ut.delayedCall(.2,Xr).pause(),ta=[be,"visibilitychange",function(){var h=ce.innerWidth,d=ce.innerHeight;be.hidden?(Y0=h,Z0=d):(Y0!==h||Z0!==d)&&Il()},be,"DOMContentLoaded",Xr,ce,"load",Xr,ce,"resize",Il],vu(yn),le.forEach(function(h){return h.enable(0,1)}),l=0;l<re.length;l+=3)Su(vn,re[l],re[l+1]),Su(vn,re[l],re[l+2])}else if(be){var c=function h(){s.enable(),be.removeEventListener("DOMContentLoaded",h)};be.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(lp=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(_u)||(_u=i)&&setInterval(e_,i),"ignoreMobileResize"in n&&(pp=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(vu(vn)||vu(yn,n.autoRefreshEvents||"none"),u_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Zn(n),o=re.indexOf(r),a=Jr(r);~o&&re.splice(o,a?6:2),i&&(a?qi.unshift(ce,i,Me,i,Mi,i):qi.unshift(r,i))},s.clearMatchMedia=function(n){le.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Si(n)?Zn(n):n).getBoundingClientRect(),a=o[r?qr:Yr]*i||0;return r?o.right-a>0&&o.left+a<ce.innerWidth:o.bottom-a>0&&o.top+a<ce.innerHeight},s.positionInViewport=function(n,i,r){Si(n)&&(n=Zn(n));var o=n.getBoundingClientRect(),a=o[r?qr:Yr],l=i==null?a/2:i in Nu?Nu[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/ce.innerWidth:(o.top+l)/ce.innerHeight},s.killAll=function(n){if(le.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=$r.killAll||[];$r={},i.forEach(function(r){return r()})}},s})();ie.version="3.15.1";ie.saveStyles=function(s){return s?Bl(s).forEach(function(t){if(t&&t.style){var e=yi.indexOf(t);e>=0&&yi.splice(e,5),yi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ut.core.getCache(t),mp())}}):yi};ie.revert=function(s,t){return Ap(!s,t)};ie.create=function(s,t){return new ie(s,t)};ie.refresh=function(s){return s?Il(!0):(jo||ie.register())&&Xr(!0)};ie.update=function(s){return++re.cache&&Us(s===!0?2:0)};ie.clearScrollMemory=T_;ie.maxScroll=function(s,t){return hs(s,t?Fn:on)};ie.getScrollFunc=function(s,t){return Ds(Zn(s),t?Fn:on)};ie.getById=function(s){return _p[s]};ie.getAll=function(){return le.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ie.isScrolling=function(){return!!Ni};ie.snapDirectional=Ep;ie.addEventListener=function(s,t){var e=$r[s]||($r[s]=[]);~e.indexOf(t)||e.push(t)};ie.removeEventListener=function(s,t){var e=$r[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ie.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],f=[],u=Ut.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(p){d.length||u.restart(!0),d.push(p.trigger),f.push(p),r<=d.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&kn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return kn(r)&&(r=r(),yn(ie,"refresh",function(){return r=t.batchMax()})),Bl(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(ie.create(c))}),e};var a_=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},fp=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ze.isTouch?" pinch-zoom":""):"none",t===Mi&&s(Me,e)},Eu={auto:1,scroll:1},kT=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Ut.core.getCache(r),a=zn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Me&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Eu[(l=Di(r)).overflowY]||Eu[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Jr(r)&&(Eu[(l=Di(r)).overflowY]||Eu[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},A_=function(t,e,n,i){return Ze.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&kT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&yn(be,Ze.eventTypes[0],c_,!1,!0)},onDisable:function(){return vn(be,Ze.eventTypes[0],c_,!0)}})},GT=/(input|label|select|textarea)/i,l_,c_=function(t){var e=GT.test(t.target.tagName);(e||l_)&&(t._gsapAllow=!0,l_=e)},VT=function(t){Wr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Zn(t.target)||Mi,h=Ut.core.globals().ScrollSmoother,d=h&&h.get(),f=dr&&(t.content&&Zn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=Ds(c,on),p=Ds(c,Fn),x=1,m=(Ze.isTouch&&ce.visualViewport?ce.visualViewport.scale*ce.visualViewport.width:ce.outerWidth)/ce.innerWidth,g=0,y=kn(i)?function(){return i(a)}:function(){return i||2.8},M,v,T=A_(c,t.type,!0,r),E=function(){return v=!1},_=cs,S=cs,C=function(){l=hs(c,on),S=Ll(dr?1:0,l),n&&(_=Ll(0,hs(c,Fn))),M=Zr},A=function(){f._gsap.y=Cl(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},L=function(){if(v){requestAnimationFrame(E);var Q=Cl(a.deltaY/2),X=S(u.v-Q);if(f&&X!==u.v+u.offset){u.offset=X-u.v;var P=Cl((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",u.cacheID=re.cache,Us()}return!0}u.offset&&A(),v=!0},D,G,I,k,V=function(){C(),D.isActive()&&D.vars.scrollY>l&&(u()>l?D.progress(1)&&u(l):D.resetTo("scrollY",l))};return f&&Ut.set(f,{y:"+=0"}),t.ignoreCheck=function(F){return dr&&F.type==="touchmove"&&L(F)||x>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},t.onPress=function(){v=!1;var F=x;x=Cl((ce.visualViewport&&ce.visualViewport.scale||1)/m),D.pause(),F!==x&&fp(c,x>1.01?!0:n?!1:"x"),G=p(),I=u(),C(),M=Zr},t.onRelease=t.onGestureStart=function(F,Q){if(u.offset&&A(),!Q)k.restart(!0);else{re.cache++;var X=y(),P,j;n&&(P=p(),j=P+X*.05*-F.velocityX/.227,X*=a_(p,P,j,hs(c,Fn)),D.vars.scrollX=_(j)),P=u(),j=P+X*.05*-F.velocityY/.227,X*=a_(u,P,j,hs(c,on)),D.vars.scrollY=S(j),D.invalidate().duration(X).play(.01),(dr&&D.vars.scrollY>=l||P>=l-1)&&Ut.to({},{onUpdate:V,duration:X})}o&&o(F)},t.onWheel=function(){D._ts&&D.pause(),zn()-g>1e3&&(M=0,g=zn())},t.onChange=function(F,Q,X,P,j){if(Zr!==M&&C(),Q&&n&&p(_(P[2]===Q?G+(F.startX-F.x):p()+Q-P[1])),X){u.offset&&A();var wt=j[2]===X,Ft=wt?I+F.startY-F.y:u()+X-j[1],Z=S(Ft);wt&&Ft!==Z&&(I+=Z-Ft),u(Z)}(X||Q)&&Us()},t.onEnable=function(){fp(c,n?!1:"x"),ie.addEventListener("refresh",V),yn(ce,"resize",V),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=p.smooth=!1),T.enable()},t.onDisable=function(){fp(c,!0),vn(ce,"resize",V),ie.removeEventListener("refresh",V),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ze(t),a.iOS=dr,dr&&!u()&&u(1),dr&&Ut.ticker.add(cs),k=a._dc,D=Ut.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:E_(u,u(),function(){return D.pause()})},onUpdate:Us,onComplete:k.vars.onComplete}),a};ie.sort=function(s){if(kn(s))return le.sort(s);var t=ce.pageYOffset||0;return ie.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ce.innerHeight}),le.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ie.observe=function(s){return new Ze(s)};ie.normalizeScroll=function(s){if(typeof s=="undefined")return Jn;if(s===!0&&Jn)return Jn.enable();if(s===!1){Jn&&Jn.kill(),Jn=s;return}var t=s instanceof Ze?s:VT(s);return Jn&&Jn.target===t.target&&Jn.kill(),Jr(t.target)&&(Jn=t),t};ie.core={_getVelocityProp:gu,_inputObserver:A_,_scrollers:re,_proxies:qi,bridge:{ss:function(){Ni||Kr("scrollStart"),Ni=zn()},ref:function(){return Bn}}};m_()&&Ut.registerPlugin(ie);var R_="1.3.27";function I_(s,t,e){return Math.max(s,Math.min(t,e))}function HT(s,t,e){return(1-e)*s+e*t}function WT(s,t,e,n){return HT(s,t,1-Math.exp(-e*n))}function XT(s,t){return(s%t+t)%t}var qT=class{constructor(){Wt(this,"isRunning",!1);Wt(this,"value",0);Wt(this,"from",0);Wt(this,"to",0);Wt(this,"currentTime",0);Wt(this,"lerp");Wt(this,"duration");Wt(this,"easing");Wt(this,"onUpdate")}advance(s){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let n=I_(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=WT(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=o}};function YT(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var ZT=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Wt(this,"width",0);Wt(this,"height",0);Wt(this,"scrollHeight",0);Wt(this,"scrollWidth",0);Wt(this,"debouncedResize");Wt(this,"wrapperResizeObserver");Wt(this,"contentResizeObserver");Wt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Wt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Wt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=YT(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,t;(s=this.wrapperResizeObserver)==null||s.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},L_=class{constructor(){Wt(this,"events",{})}emit(s,...t){var n;let e=this.events[s]||[];for(let i=0,r=e.length;i<r;i++)(n=e[i])==null||n.call(e,...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}}off(s,t){var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},JT=100/6,mr={passive:!1};function C_(s,t){return s===1?JT:s===2?t:1}var $T=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Wt(this,"touchStart",{x:0,y:0});Wt(this,"lastDelta",{x:0,y:0});Wt(this,"window",{width:0,height:0});Wt(this,"emitter",new L_);Wt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Wt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Wt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Wt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=C_(n,this.window.width),r=C_(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Wt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,mr),this.element.addEventListener("touchstart",this.onTouchStart,mr),this.element.addEventListener("touchmove",this.onTouchMove,mr),this.element.addEventListener("touchend",this.onTouchEnd,mr)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,mr),this.element.removeEventListener("touchstart",this.onTouchStart,mr),this.element.removeEventListener("touchmove",this.onTouchMove,mr),this.element.removeEventListener("touchend",this.onTouchEnd,mr)}},P_=s=>Math.min(1,1.001-2**(-10*s)),D_=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:p=1,autoResize:x=!0,prevent:m,virtualScroll:g,overscroll:y=!0,autoRaf:M=!1,anchors:v=!1,autoToggle:T=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:S=_,stopInertiaOnNavigate:C=!1,respectReducedMotion:A=!0}={}){Wt(this,"_isScrolling",!1);Wt(this,"_isStopped",!1);Wt(this,"_isLocked",!1);Wt(this,"_preventNextNativeScrollEvent",!1);Wt(this,"_resetVelocityTimeout",null);Wt(this,"_rafId",null);Wt(this,"_isDraggingSelection",!1);Wt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Wt(this,"isTouching");Wt(this,"isIos");Wt(this,"time",0);Wt(this,"userData",{});Wt(this,"lastVelocity",0);Wt(this,"velocity",0);Wt(this,"direction",0);Wt(this,"options");Wt(this,"targetScroll");Wt(this,"animatedScroll");Wt(this,"animate",new qT);Wt(this,"emitter",new L_);Wt(this,"dimensions");Wt(this,"virtualScroll");Wt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Wt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Wt(this,"onTransitionEnd",s=>{var t;(t=s.propertyName)!=null&&t.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Wt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Wt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Wt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>{var x,m,g,y,M;return p instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(p))||((x=p.hasAttribute)==null?void 0:x.call(p,"data-lenis-prevent"))||h==="vertical"&&((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent-vertical"))||h==="horizontal"&&((g=p.hasAttribute)==null?void 0:g.call(p,"data-lenis-prevent-horizontal"))||i&&((y=p.hasAttribute)==null?void 0:y.call(p,"data-lenis-prevent-touch"))||r&&((M=p.hasAttribute)==null?void 0:M.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let f=i&&this.options.syncTouch,u=i&&n.type==="touchend";u&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Wt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Wt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=R_,window.lenis||(window.lenis={}),window.lenis.version=R_,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=P_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:d,touchMultiplier:u,wheelMultiplier:p,autoResize:x,prevent:m,virtualScroll:g,overscroll:y,autoRaf:M,anchors:v,autoToggle:T,allowNestedScroll:E,naiveDimensions:S,stopInertiaOnNavigate:C,respectReducedMotion:A},this.dimensions=new ZT(s,t,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new $T(e,{touchMultiplier:u,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){var c;let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=(c=s.targetTouches[0])!=null?c:s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let f=s,u=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let p=null;if(typeof f=="string"?(p=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),p||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(p=f),p){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?v.left:v.top}let x=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),y=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);f=(this.isHorizontal?x.left:x.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(M)?0:M)}}if(typeof f=="number"){if(f+=u,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=f-this.animatedScroll;p>this.limit/2?f-=this.limit:p<-this.limit/2&&(f+=this.limit)}}else f=I_(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d!=null?d:{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=P_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(p,x)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),x||this.emit(),x&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){var E;let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,f,u,p;if(n-((E=i.time)!=null?E:0)>2e3){i.time=Date.now();let _=window.getComputedStyle(s);if(i.computedStyle=_,r=["auto","overlay","scroll"].includes(_.overflowX),o=["auto","overlay","scroll"].includes(_.overflowY),c=["auto"].includes(_.overscrollBehaviorX),h=["auto"].includes(_.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,f=s.scrollHeight,u=s.clientWidth,p=s.clientHeight,a=d>u,l=f>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=u,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,u=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let x=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,y,M,v,T;if(x==="horizontal")m=Math.round(s.scrollLeft),g=d-u,y=t,M=r,v=a,T=c;else if(x==="vertical")m=Math.round(s.scrollTop),g=f-p,y=e,M=o,v=l,T=h;else return!1;return!T&&(m>=g||m<=0)?!0:(y>0?m<g:m>0)&&M&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let s=this.options.wrapper;return this.isHorizontal?(t=s.scrollX)!=null?t:s.scrollLeft:(e=s.scrollY)!=null?e:s.scrollTop}get scroll(){return this.options.infinite?XT(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};rn.registerPlugin(ie);var $e=(s,t=document)=>t.querySelector(s),Hl=(s,t=document)=>[...t.querySelectorAll(s)],Oi=matchMedia("(prefers-reduced-motion: reduce)").matches,Ip=[{id:"sling",name:"\u05E8\u05E6\u05D5\u05E2\u05D4 \u05D8\u05E7\u05D8\u05D9\u05EA 2 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA",desc:"\u05DE\u05EA\u05DB\u05D5\u05D5\u05E0\u05E0\u05EA \u05D1\u05D9\u05D3 \u05D0\u05D7\u05EA, \u05E2\u05DD \u05E8\u05D9\u05E4\u05D5\u05D3 \u05DC\u05DB\u05EA\u05E3. \u05DC\u05D0 \u05D7\u05D5\u05EA\u05DB\u05EA \u05D1\u05E6\u05D5\u05D5\u05D0\u05E8 \u05D0\u05D7\u05E8\u05D9 \u05E9\u05DE\u05D9\u05E8\u05D4 \u05D0\u05E8\u05D5\u05DB\u05D4.",price:89},{id:"bands",name:"\u05D2\u05D5\u05DE\u05D9\u05D5\u05EA \u05E9\u05E4\u05E6\u05D5\u05E8",desc:"\u05D7\u05D1\u05D9\u05DC\u05D4 \u05E9\u05DC 6 \u05D2\u05D5\u05DE\u05D9\u05D5\u05EA \u05E2\u05D1\u05D5\u05EA. \u05DE\u05D7\u05D6\u05D9\u05E7\u05D5\u05EA \u05E8\u05E6\u05D5\u05E2\u05D4, \u05DB\u05D1\u05DC\u05D9\u05DD \u05D5\u05DB\u05DC \u05DE\u05D4 \u05E9\u05DE\u05EA\u05E0\u05D3\u05E0\u05D3.",price:19},{id:"grip",name:"\u05D9\u05D3\u05D9\u05EA \u05D0\u05D7\u05D9\u05D6\u05D4 \u05E7\u05D3\u05DE\u05D9\u05EA",desc:"\u05DE\u05EA\u05DC\u05D1\u05E9\u05EA \u05E2\u05DC \u05DE\u05E1\u05D9\u05DC\u05D4 \u05EA\u05D7\u05EA\u05D5\u05E0\u05D4. \u05D0\u05D7\u05D9\u05D6\u05D4 \u05D9\u05E6\u05D9\u05D1\u05D4 \u05D2\u05DD \u05E2\u05DD \u05DB\u05E4\u05E4\u05D5\u05EA.",price:79},{id:"rails",name:"\u05DB\u05D9\u05E1\u05D5\u05D9\u05D9 \u05DE\u05E1\u05D9\u05DC\u05D4",desc:"\u05E1\u05D8 \u05E9\u05DC 4 \u05DB\u05D9\u05E1\u05D5\u05D9\u05D9 \u05D2\u05D5\u05DE\u05D9. \u05D4\u05D9\u05D3 \u05DC\u05D0 \u05E0\u05E9\u05E8\u05D8\u05EA \u05D5\u05D4\u05DE\u05E1\u05D9\u05DC\u05D4 \u05DC\u05D0 \u05E0\u05E9\u05D7\u05E7\u05EA.",price:39},{id:"coupler",name:"\u05DE\u05E6\u05DE\u05D3 \u05DE\u05D7\u05E1\u05E0\u05D9\u05D5\u05EA",desc:"\u05DE\u05D7\u05D1\u05E8 \u05E9\u05EA\u05D9 \u05DE\u05D7\u05E1\u05E0\u05D9\u05D5\u05EA \u05D6\u05D5 \u05DC\u05D6\u05D5. \u05D4\u05D7\u05DC\u05E4\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4 \u05D1\u05DC\u05D9 \u05DC\u05D7\u05E4\u05E9 \u05D1\u05D0\u05E4\u05D5\u05D3.",price:49},{id:"pull",name:"\u05E9\u05DC\u05D5\u05E3 \u05DC\u05DE\u05D7\u05E1\u05E0\u05D9\u05EA",desc:"\u05E9\u05DC\u05D9\u05E9\u05D9\u05D9\u05EA \u05E9\u05DC\u05D5\u05E4\u05D9\u05DD \u05DE\u05E4\u05E8\u05E7\u05D5\u05E8\u05D3. \u05E9\u05D5\u05DC\u05E4\u05D9\u05DD \u05DE\u05D7\u05E1\u05E0\u05D9\u05EA \u05DE\u05D4\u05E4\u05D0\u05D5\u05E5\u05F3 \u05D1\u05DE\u05E9\u05D9\u05DB\u05D4 \u05D0\u05D7\u05EA.",price:35},{id:"cheek",name:"\u05DB\u05E8\u05D9\u05EA \u05DC\u05D7\u05D9 \u05DC\u05E7\u05EA",desc:"\u05E8\u05D9\u05E4\u05D5\u05D3 \u05E8\u05DA \u05E2\u05DD \u05E1\u05E7\u05D5\u05E5\u05F3. \u05D4\u05DC\u05D7\u05D9 \u05D9\u05D5\u05E9\u05D1\u05EA \u05D1\u05D0\u05D5\u05EA\u05D5 \u05DE\u05E7\u05D5\u05DD \u05D1\u05DB\u05DC \u05DB\u05D9\u05D5\u05D5\u05DF.",price:59},{id:"cover",name:"\u05DB\u05D9\u05E1\u05D5\u05D9 \u05DC\u05DB\u05D5\u05D5\u05E0\u05EA",desc:"\u05E0\u05D0\u05D5\u05E4\u05E8\u05DF \u05E0\u05DE\u05EA\u05D7 \u05E9\u05E9\u05D5\u05DE\u05E8 \u05E2\u05DC \u05D4\u05E2\u05D3\u05E9\u05D5\u05EA \u05DE\u05D0\u05D1\u05E7, \u05D2\u05E9\u05DD \u05D5\u05E9\u05E8\u05D9\u05D8\u05D5\u05EA.",price:45},{id:"cord",name:"\u05D0\u05D1\u05D8\u05D7\u05EA \u05E4\u05E8\u05E7\u05D5\u05E8\u05D3",desc:"\u05E9\u05E8\u05D5\u05DA \u05D0\u05D1\u05D8\u05D7\u05D4 \u05E7\u05DC\u05D5\u05E2 \u05DC\u05DB\u05D5\u05D5\u05E0\u05EA \u05D5\u05DC\u05D0\u05D1\u05D9\u05D6\u05E8\u05D9\u05DD. \u05DE\u05D4 \u05E9\u05E7\u05E9\u05D5\u05E8 \u05DC\u05D0 \u05D4\u05D5\u05DC\u05DA \u05DC\u05D0\u05D9\u05D1\u05D5\u05D3.",price:25},{id:"cap",name:"\u05DB\u05D5\u05D1\u05E2\u05D5\u05DF \u05DC\u05E7\u05E0\u05D4",desc:"\u05D7\u05DE\u05D9\u05E9\u05D4 \u05DB\u05D5\u05D1\u05E2\u05D5\u05E0\u05D9 \u05D2\u05D5\u05DE\u05D9. \u05D4\u05E7\u05E0\u05D4 \u05E0\u05E9\u05D0\u05E8 \u05E0\u05E7\u05D9 \u05DE\u05D7\u05D5\u05DC \u05D5\u05DE\u05D1\u05D5\u05E5.",price:12}],KT={id:"kit",name:"\u05D4\u05E2\u05E8\u05DB\u05D4 \u05D4\u05DE\u05DC\u05D0\u05D4",desc:"\u05DB\u05DC \u05E2\u05E9\u05E8\u05EA \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD",price:379},gr=Object.fromEntries([...Ip,KT].map(s=>[s.id,s])),jr=s=>"\u20AA"+s,QT={metal:3883070,metal2:4870221,poly:2566952,tan:11834207,olive:6713407,orange:14964526,rubber:1184530},Je=(s,t={})=>{var e,n;return new $s({color:s,roughness:(e=t.r)!=null?e:.62,metalness:(n=t.m)!=null?n:.25,...t.x})};var Sn=(s,t,e=20)=>{let n=new Hn(s,s,t,e);return n.rotateZ(Math.PI/2),n},At=(s,t,e,n=0,i=0,r=0)=>{let o=new De(t,e);return o.position.set(n,i,r),s.add(o),o},N_=(s,t)=>{let e=new Js(s,t,10,36);return e.rotateY(Math.PI/2),e},Fu=.0105,Qr=(s,t,e=16)=>{let n=new Hn(s,s,t,e);return n.rotateX(Math.PI/2),n},sa=s=>{let t=new bs;return s.forEach(([e,n],i)=>i?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t};function us(s,t,e=2){let n=new Fa(s,{depth:t-e*2,bevelEnabled:e>0,bevelSize:e,bevelThickness:e,bevelSegments:3,curveSegments:10});return n.translate(0,0,-(t-e*2)/2),n}var Bu=(()=>{let s=[],t=-153,e=-30,n=.05;for(let i=0;i<=175;i+=7)n=.05+(i>55?(i-55)/120*.4:0),s.push({x:t,y:e,th:n}),t-=Math.sin(n)*7,e-=Math.cos(n)*7;return s})(),O_=(s=31)=>{let t=[],e=[];return Bu.forEach(({x:n,y:i,th:r})=>{let o=Math.cos(r),a=-Math.sin(r);e.push([n+o*s,i+a*s]),t.push([n-o*s,i-a*s])}),sa([...e,...t.reverse()])},Fs=Bu[Bu.length-1],kl=Bu[15];function z_(s,t,e,n=0){At(s,us(O_(),22,1.5),t,0,0,n);let i=At(s,new Ke(68,6,26,2,1.5),e,Fs.x,Fs.y,n);i.rotation.z=-Fs.th,[-12,10].forEach(r=>{let o=At(s,us(O_(2),23.4,.4),e,r*Math.cos(.2),r*-.2,n);o.scale.y=.97})}function jT(){let s=new ui;s.scale.setScalar(Fu);let t=Je(1908513,{m:.75,r:.42}),e=Je(2500651,{m:.85,r:.34}),n=Je(2829615,{m:.6,r:.55}),i=Je(1316118,{m:.55,r:.58}),r=Je(460808,{m:.2,r:.9}),o=Je(5593180,{m:.9,r:.3}),a=s,l=[],c=new sn,h=(_,S,C,A)=>{c.position.set(_,S,C),c.rotation.set(A,0,0),c.updateMatrix(),l.push(c.matrix.clone())};At(a,Sn(9.4,34),e,-408,0),At(a,Sn(9.2,32,24),e,-440,0),At(a,Sn(7.8,36,24),e,-473,0),At(a,Sn(9.2,44,24),e,-512,0),At(a,Sn(10.4,3,24),o,-534,0),At(a,Sn(11,42,24),n,-556,0);for(let _=0;_<6;_++){let S=_/6*Math.PI*2+.52,C=At(a,new Xe(22,2.6,3),r,-560,Math.sin(S)*10.2,Math.cos(S)*10.2);C.rotation.x=-S}At(a,Sn(5.5,1,20),r,-577.2,0);let d=sa([[-397,-13],[-425,-13],[-425,9],[-417,58],[-405,58],[-397,9]]);d.holes.push(new Zs().setFromPoints([[-404,15],[-419,15],[-414.5,46],[-408,46]].map(_=>new Tt(..._)))),At(a,us(d,15,1.2),n),[-5.5,5.5].forEach(_=>At(a,new Xe(13,14,2.4),n,-411,64,_)),At(a,new Hn(1.4,1.4,11,8),o,-411,62,0),At(a,new Xe(15,8,9),n,-412,-18,0),At(a,new Js(7,1.6,8,20),e,-402,-24,0).rotation.y=Math.PI/2;let f=new Hn(25.5,25.5,170,8);f.rotateZ(Math.PI/2),f.rotateX(Math.PI/8),At(a,f,t,-293,0),[[0,26,0],[0,-26,0],[0,0,26],[0,0,-26]].forEach(([_,S,C],A)=>{let L=At(a,new Xe(170,6,21),t,-293,S,C);C&&(L.rotation.x=Math.PI/2);for(let D=-372;D<-212;D+=10)h(D,S?S+Math.sign(S)*5.2:0,C?C+Math.sign(C)*5.2:0,C?Math.PI/2:0)});for(let _=0;_<6;_++)[1,-1].forEach(S=>[1,-1].forEach(C=>{let A=At(a,new Hn(3.6,3.6,2,12),r,-360+_*26,S*17.2,C*17.2);A.rotation.x=S*C*Math.PI/4+(C<0?Math.PI:0)}));At(a,Sn(24.5,5,24),n,-380,0);let u=new Hn(20,25,14,28);u.rotateZ(-Math.PI/2),At(a,u,n,-204,0),At(a,us(sa([[-198,-20],[0,-20],[0,20],[-8,28],[-190,28],[-198,21]]),33,5),t),At(a,new Xe(192,3.4,21),t,-99,29.6,0);for(let _=-191;_<-4;_+=10)h(_,33.6,0,0);At(a,new Xe(58,15,1.2),r,-122,1,-16.2);let p=At(a,new Ke(60,12,3,2,1),n,-122,-13,-17.6);p.rotation.x=-.35,At(a,us(sa([[-88,-6],[-70,-6],[-70,14],[-76,16]]),7,1),t,0,0,-18);let x=At(a,new Hn(6,6,22,16),n,-34,6,-19);x.rotation.set(0,0,Math.PI/2-.25),x.rotation.y=.45,At(a,new Hn(4.2,4.2,4,14).rotateX(Math.PI/2),o,-128,-31,-15.5),At(a,new Ke(11,26,4,2,1.2),n,-116,-17,16.4),At(a,Qr(5.5,3,16),n,-32,-30,15.4);let m=At(a,new Ke(17,5,3,2,1),n,-39,-29,17.2);m.rotation.z=.15,At(a,new Xe(34,6,12),n,-10,22,0),At(a,new Ke(9,9,56,2,2),n,5,21,0),At(a,us(sa([[-192,-19],[10,-19],[10,-47],[-118,-47],[-121,-77],[-186,-71]]),28,2.5),t),At(a,us(sa([[-190,-22],[-122,-22],[-123,-76],[-185,-70.5]]),31,2),t),At(a,Sn(21,13,24),t,5,-1),At(a,new Ke(4,46,30,2,1.5),n,13,-6,0),[[-178,-27],[-10,-31]].forEach(([_,S])=>At(a,Qr(3.6,30.6,14),o,_,S)),[[-78,-34],[-64,-40]].forEach(([_,S])=>At(a,Qr(2,28.6,10),o,_,S));let g=At(a,new Ke(70,3.4,11,1,1),t,-85,-73,0);g.rotation.z=.06;let y=new bs;y.moveTo(-82,-47),y.quadraticCurveTo(-92,-58,-84,-68),y.lineTo(-81,-67),y.quadraticCurveTo(-87,-58,-76,-47),y.closePath(),At(a,us(y,6,.8),e);let M=new bs;M.moveTo(-52,-47),M.lineTo(0,-47),M.quadraticCurveTo(10,-52,16,-75),M.lineTo(36,-138),M.quadraticCurveTo(38,-147,28,-148),M.lineTo(-2,-150),M.quadraticCurveTo(-10,-150,-13,-141),M.lineTo(-27,-100),M.quadraticCurveTo(-34,-92,-33,-84),M.quadraticCurveTo(-36,-70,-50,-62),M.closePath(),At(a,us(M,31,7),i),z_(a,n,e),At(a,Sn(14.6,200,24),t,115,-1),At(a,Sn(19,9,12),n,22,-1);let v=new bs;v.moveTo(64,19),v.lineTo(248,19),v.quadraticCurveTo(258,19,258,9),v.lineTo(258,-102),v.quadraticCurveTo(258,-113,247,-112),v.lineTo(238,-110),v.lineTo(150,-36),v.lineTo(70,-27),v.quadraticCurveTo(62,-26,62,-18),v.lineTo(62,12),v.quadraticCurveTo(62,19,64,19),v.holes.push(new Zs().setFromPoints([[236,-38],[246,-38],[246,-72],[236,-72]].map(_=>new Tt(..._)))),At(a,us(v,40,6),i);for(let _=0;_<9;_++)At(a,new Xe(1.6,2.4,34),r,259.4,6-_*13,0);for(let _=0;_<5;_++)[1,-1].forEach(S=>At(a,new Xe(22,3,1.2),r,96+_*30,6,S*20.2));let T=At(a,new Ke(46,7,14,2,2),i,110,-38,0);T.rotation.z=-.1,At(a,new Ke(62,11,27,2,2),t,-80,41.5,0),At(a,Qr(7,10,14),n,-80,41,17),At(a,new Ke(20,22,44,2,3),t,-80,58,0),At(a,Sn(19,96,32),t,-80,68),[-126,-34].forEach(_=>At(a,Sn(22,14,32),t,_,68)),At(a,new Hn(9,9,10,20),n,-80,90,0),At(a,Qr(9,10,20),n,-80,68,24),At(a,Sn(18.5,1,32),Je(16742970,{r:.08,m:1,x:{emissive:9054726,emissiveIntensity:.7}}),-133.2,68),At(a,Sn(18.5,1,32),Je(791576,{r:.05,m:1}),-26.8,68);let E=new wr(new Xe(5,4.6,21),t,l.length);return l.forEach((_,S)=>E.setMatrixAt(S,_)),a.add(E),s}function U_(s,t,e=2,n=.75,i=110){let r=new Er(s.map(h=>new z(...h))),o=new To(r,i,t,10),a=o.attributes.position,l=new z,c=new z;for(let h=0;h<=i;h++){r.getPointAt(h/i,c);for(let d=0;d<=10;d++){let f=h*11+d;l.fromBufferAttribute(a,f).sub(c),a.setXYZ(f,c.x+l.x*n,c.y+l.y*n,c.z+l.z*e)}}return o.computeVertexNormals(),{g:o,curve:r}}function tw(){let s={},t=()=>{let p=new ui;return p.scale.setScalar(Fu),p},e=()=>Je(10256980,{r:.95,m:0}),n=()=>Je(11111002,{r:.68,m:.05}),i=()=>Je(6121274,{r:.9,m:0}),r=()=>Je(QT.orange,{r:.85,m:0}),o=()=>Je(1710619,{r:.45,m:.3});s.sling=t();let l=U_([[241,-52,22],[228,-150,34],[90,-262,58],[-170,-258,58],[-345,-140,46],[-376,-22,34]],6.5);s.sling.add(new De(l.g,e()));let c=l.curve.getPoints(60).slice(20,34).map(p=>[p.x,p.y,p.z]);s.sling.add(new De(U_(c,9.5,2.1,.9,40).g,Je(8284741,{r:1,m:0}))),[[241,-50,22],[-376,-20,34]].forEach(p=>At(s.sling,new Ke(12,22,32,2,3),o(),...p));let h=l.curve.getPointAt(.78);At(s.sling,new Ke(26,14,34,2,3),o(),h.x,h.y,h.z).rotation.z=.9,s.bands=t(),[-368,-352].forEach(p=>{At(s.bands,N_(35,4),Je(2302755,{r:.35,m:.1}),p,0).scale.set(1,1,1)}),s.grip=t(),At(s.grip,new Ke(48,13,30,2,3),n(),-300,-37,0),At(s.grip,Qr(4,34,12),o(),-300,-37,0),At(s.grip,new Hn(15,17.5,86,24),n(),-300,-86,0);for(let p=0;p<5;p++)At(s.grip,new Js(16.6+p*.25,1.5,6,28).rotateX(Math.PI/2),Je(9269832,{r:.8}),-300,-62-p*13,0);At(s.grip,new Hn(17.5,16,5,24),Je(9269832,{r:.8}),-300,-131,0),s.rails=t(),[[-250,1],[-335,1],[-250,-1],[-335,-1]].forEach(([p,x])=>{At(s.rails,new Ke(80,25,7,2,2.5),i(),p,0,x*33.5);for(let m=0;m<7;m++)At(s.rails,new Xe(4,21,2),Je(4936752,{r:.95}),p-30+m*10,0,x*37.6)}),s.coupler=t(),z_(s.coupler,Je(2829615,{m:.6,r:.55}),Je(2500651,{m:.85,r:.34}),31);let d=At(s.coupler,new Ke(72,30,62,2,4),n(),kl.x,kl.y,15.5);d.rotation.z=-kl.th,[1,-1].forEach(p=>At(s.coupler,Qr(3.4,66,10),o(),kl.x+p*28,kl.y+p*6,15.5)),s.pull=t();let f=At(s.pull,new Ke(72,9,28,2,3),r(),Fs.x-1,Fs.y-3,0);f.rotation.z=-Fs.th,At(s.pull,new Js(15,4.2,10,30),r(),Fs.x-12,Fs.y-22,0).rotation.z=-Fs.th,s.cheek=t(),At(s.cheek,new Ke(150,20,46,4,9),n(),160,27,0),[105,215].forEach(p=>At(s.cheek,new Ke(16,52,44,2,3),Je(8284741,{r:1,m:0}),p,2,0)),s.cover=t(),At(s.cover,Sn(23.6,108,32),i(),-80,68),[-130,-30].forEach(p=>At(s.cover,N_(23.6,2.2),Je(4936752,{r:.95}),p,68)),s.cord=t();let u=[[-60,44,16],[-72,22,27],[-135,6,31],[-196,14,30],[-216,33,15]];return s.cord.add(new De(new To(new Er(u.map(p=>new z(...p))),60,2.8,8),r())),[u[0],u[4]].forEach(p=>At(s.cord,new za(5.5,14,12),r(),...p)),s.cap=t(),At(s.cap,Sn(13.2,30,24),r(),-565,0),At(s.cap,Sn(14.6,5,24),r(),-552,0),s}var ew={sling:[0,-3.2,2.5],bands:[-3,0,0],grip:[0,-3,0],rails:[0,0,3],coupler:[0,-1.5,3.2],pull:[0,-2.4,0],cheek:[0,2.6,0],cover:[0,2.6,0],cord:[0,1.2,3],cap:[-3,0,0]},F_=(s,t)=>s.traverse(e=>{if(e.isMesh){let n=t<.999;e.material.transparent!==n&&(e.material.transparent=n,e.material.needsUpdate=!0),e.material.opacity=t,e.visible=t>.002}}),Gl=$e("#gl"),Vl=null,Yi={rx:.1,ry:-.42,fx:0,zoom:1,yo:-.09,sx:0},Rp={x:Oi?0:16,ry:Oi?0:-1.3},fs={x:0,y:0,tx:0,ty:0},Uu={};function nw(){let s;try{s=new Hh({canvas:Gl,alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{return null}s.toneMapping=Za,s.toneMappingExposure=1.3;let e=new No(s).fromScene(new qh,.04).texture,n=()=>{let v=new Tr;v.environment=e,v.environmentIntensity=1.25;let T=new Eo(16773596,3);T.position.set(4,7,9),v.add(T);let E=new Eo(16769725,3.2);return E.position.set(-6,5,-7),v.add(E),v.add(new Va(15129795,2304028,.5)),v},i=n(),r=new bn(28,1,.1,200),o=new ui,a=new ui,l=jT();Uu=tw(),a.add(l),Object.values(Uu).forEach(v=>a.add(v)),a.position.set(160*Fu,38*Fu,0);let c=new ui;c.add(a),o.add(c),i.add(o);let h={},d=(v,T,E,_,S)=>{let C=n(),A=v.clone(!0);C.add(A);let L=new Ei().setFromObject(A),D=L.getCenter(new z),G=L.getSize(new z),I=new bn(24,T/E,.01,1e5),k=G.y+G.z*.5,V=(G.x+G.z*.6)/(T/E),F=Math.max(k,V,.6)*S/(2*Math.tan(24*Math.PI/360));I.position.copy(D).add(new z(..._).normalize().multiplyScalar(F)),I.lookAt(D),s.setPixelRatio(1),s.setSize(T,E,!1),s.render(C,I);let Q=Gl.toDataURL("image/webp",.9);return Q.startsWith("data:image/webp")||(Q=Gl.toDataURL("image/png")),Q};try{Ip.forEach(v=>h[v.id]=d(Uu[v.id],520,520,[-.55,.3,1],v.id==="sling"?.92:1.35)),h.kit=d(a,1400,720,[-.5,.18,1],1.12)}catch{}let f=Math.tan(28*Math.PI/360),u=1,p=1,x=!1;function m(){let v=Gl.clientWidth,T=Gl.clientHeight;if(!v||!T)return;s.setPixelRatio(Math.min(devicePixelRatio,2)),s.setSize(v,T,!1);let E=v/T;x=E<.9;let _=x?1.12:E<1.4?.88:.75,S=Math.max(9.8/_/(2*f*E),15);r.aspect=E,r.position.set(0,0,S),r.updateProjectionMatrix(),u=2*S*f,p=u*E}m(),addEventListener("resize",m);let g=!0;new IntersectionObserver(v=>g=v[0].isIntersecting).observe($e(".stage"));let y=performance.now();function M(){if(requestAnimationFrame(M),!g)return;let v=(performance.now()-y)/1e3;fs.x+=(fs.tx-fs.x)*.05,fs.y+=(fs.ty-fs.y)*.05;let T=x&&Yi.zoom>1?1+(Yi.zoom-1)*2.3:Yi.zoom,E=Yi.ry+Rp.ry+fs.x*.14+(Oi?0:Math.sin(v*.5)*.035);c.rotation.set(Yi.rx+fs.y*.07+(Oi?0:Math.sin(v*.7)*.012),E,0),o.scale.setScalar(T),o.position.set(-Yi.fx*T*Math.cos(E)*(x?1:.12)+Rp.x+(x?0:Yi.sx*p),(x?(Yi.yo+.07)*.7:Yi.yo)*u+(Oi?0:Math.sin(v*.9)*.05),0),s.render(i,r)}return M(),{shots:h}}function iw(s={}){$e("#grid").innerHTML=Ip.map((t,e)=>`
    <li class="item">
      <span class="item__sku">\u05DE\u05E7\u05F4\u05D8 ${String(e+1).padStart(2,"0")}</span>
      <div class="item__img">${s[t.id]?`<img src="${s[t.id]}" alt="${t.name}" width="520" height="520" loading="lazy">`:""}</div>
      <h3 class="item__name">${t.name}</h3>
      <p class="item__desc">${t.desc}</p>
      <div class="item__row"><span class="item__price">${jr(t.price)}</span>
      <button class="add" type="button" data-add="${t.id}">\u05D4\u05D5\u05E1\u05E4\u05D4 \u05DC\u05E1\u05DC</button></div>
    </li>`).join(""),s.kit&&($e("#kitImg").innerHTML=`<img src="${s.kit}" alt="\u05E0\u05E9\u05E7 \u05E2\u05DD \u05DB\u05DC \u05E2\u05E9\u05E8\u05EA \u05D4\u05E9\u05E4\u05E6\u05D5\u05E8\u05D9\u05DD" width="1400" height="720" loading="lazy">`)}var k_="meshupzar-cart",ln={};try{ln=JSON.parse(localStorage.getItem(k_)||"{}")||{}}catch{}var Cp=()=>{try{localStorage.setItem(k_,JSON.stringify(ln))}catch{}},Zi=null;function zu(){let s=Object.keys(ln).filter(n=>gr[n]&&ln[n]>0),t=s.reduce((n,i)=>n+ln[i],0),e=s.reduce((n,i)=>n+ln[i]*gr[i].price,0);Hl("[data-count]").forEach(n=>{n.textContent=t,n.hidden=!t}),$e("#cartList").innerHTML=s.length?s.map(n=>`
    <li class="line"><div><strong>${gr[n].name}</strong><span>${jr(gr[n].price)}</span></div>
    <div class="qty"><button type="button" data-q="${n}" data-d="1" aria-label="\u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05D0\u05D7\u05D3">+</button><b>${ln[n]}</b><button type="button" data-q="${n}" data-d="-1" aria-label="\u05DC\u05D4\u05D5\u05E8\u05D9\u05D3 \u05D0\u05D7\u05D3">\u2212</button></div></li>`).join(""):'<li class="empty">\u05D4\u05E1\u05DC \u05E8\u05D9\u05E7. \u05DE\u05D5\u05E1\u05D9\u05E4\u05D9\u05DD \u05DE\u05D5\u05E6\u05E8 \u05D5\u05D4\u05D5\u05D0 \u05DE\u05D5\u05E4\u05D9\u05E2 \u05DB\u05D0\u05DF.</li>',$e("#cartTotal").textContent=jr(e),$e("#checkout").disabled=!s.length}function ku(s){document.body.classList.toggle("cart-open",s),$e("#cart").setAttribute("aria-hidden",String(!s)),Zi&&(s?Zi.stop():Zi.start()),s&&$e("#cartClose").focus()}document.addEventListener("click",s=>{let t=s.target.closest("[data-add]");if(t){let i=t.dataset.add;ln[i]=(ln[i]||0)+1,Cp(),zu();let r=t.textContent;t.textContent="\u05E0\u05D5\u05E1\u05E3 \u05DC\u05E1\u05DC",t.classList.add("is-done"),setTimeout(()=>{t.textContent=r,t.classList.remove("is-done")},1400),rn.fromTo(".cartbtn",{scale:1.25},{scale:1,duration:.5,ease:"back.out(3)"})}let e=s.target.closest("[data-q]");if(e){let i=e.dataset.q;ln[i]=Math.max(0,(ln[i]||0)+ +e.dataset.d),ln[i]||delete ln[i],Cp(),zu()}s.target.closest("[data-cart]")&&ku(!0),(s.target.closest("#cartClose")||s.target.matches(".cart__veil"))&&ku(!1),s.target.closest("#checkout")&&Pp(!0),s.target.closest("[data-payclose]")&&Pp(!1);let n=s.target.closest("[data-method]");n&&(Hl("[data-method]").forEach(i=>i.setAttribute("aria-pressed",String(i===n))),$e("#payCard").hidden=n.dataset.method!=="card",$e("#payBit").hidden=n.dataset.method!=="bit")});addEventListener("keydown",s=>{s.key==="Escape"&&(ku(!1),Pp(!1))});var B_=25;function Pp(s){let t=$e("#pay");if(s){let e=Object.keys(ln).filter(i=>gr[i]&&ln[i]>0);if(!e.length)return;let n=e.reduce((i,r)=>i+ln[r]*gr[r].price,0);$e("#payItems").innerHTML=e.map(i=>`<li><span>${gr[i].name}${ln[i]>1?" \xD7"+ln[i]:""}</span><b>${jr(ln[i]*gr[i].price)}</b></li>`).join(""),$e("#paySub").textContent=jr(n),$e("#payShip").textContent=jr(B_),Hl("[data-paytotal]").forEach(i=>i.textContent=jr(n+B_)),t.dataset.state="form",ku(!1)}document.body.classList.toggle("pay-open",s),t.setAttribute("aria-hidden",String(!s)),Zi&&(s?Zi.stop():Zi.start()),s&&(t.scrollTop=0,rn.fromTo(".pay__col > *",{y:26,autoAlpha:0},{y:0,autoAlpha:1,duration:.6,stagger:.06,ease:"power3.out",delay:.15}))}$e("#payForm").addEventListener("submit",s=>{s.preventDefault();let t=$e("#pay");t.dataset.state="busy",setTimeout(()=>{t.dataset.state="done",$e("#payOrder").textContent=String(1e3+Math.floor(Math.random()*9e3)),ln={},Cp(),zu(),rn.fromTo(".pay__done > *",{y:30,autoAlpha:0},{y:0,autoAlpha:1,duration:.7,stagger:.09,ease:"power3.out"}),rn.fromTo(".pay__check path",{strokeDashoffset:60},{strokeDashoffset:0,duration:.7,ease:"power2.out",delay:.2})},Oi?200:1700)});function sw(s){Oi||(Zi=new D_({lerp:.11}),Zi.on("scroll",ie.update),rn.ticker.add(o=>Zi.raf(o*1e3)),rn.ticker.lagSmoothing(0)),Hl('a[href^="#"]').forEach(o=>o.addEventListener("click",a=>{let l=$e(o.getAttribute("href"));l&&(a.preventDefault(),Zi?Zi.scrollTo(l,{offset:-10}):l.scrollIntoView())})),addEventListener("pointermove",o=>{fs.tx=o.clientX/innerWidth-.5,fs.ty=o.clientY/innerHeight-.5});let t=Hl(".step"),e=[{rx:.2,ry:.5,fx:.4,zoom:1.08},{rx:.28,ry:-.75,fx:-2.3,zoom:1.3},{rx:-.12,ry:.55,fx:-.6,zoom:1.32},{rx:.42,ry:-.5,fx:1.5,zoom:1.3},{rx:.2,ry:-.95,fx:-2.6,zoom:1.2}],n=[["sling","bands"],["grip","rails"],["coupler","pull"],["cheek","cover"],["cord","cap"]],i=rn.timeline({defaults:{ease:"power2.inOut"},scrollTrigger:{trigger:".stage",start:"top top",end:"bottom bottom",scrub:Oi?!0:.7}});i.to(".hero__copy",{autoAlpha:0,y:-50,duration:.5},.05).to(".hero__hint",{autoAlpha:0,duration:.3},0).to(".stage__ghost",{xPercent:28,duration:10,ease:"none"},0),rn.set(t,{autoAlpha:0}),rn.set(".final",{autoAlpha:0}),n.forEach((o,a)=>{let l=.6+a*1.65;i.to(Yi,{...e[a],yo:.1,sx:a%2?.09:-.1,duration:.9},l-.45),i.fromTo(t[a],{autoAlpha:0,y:40},{autoAlpha:1,y:0,duration:.35,ease:"power2.out"},l+.1),i.fromTo($e(".tape",t[a]),{scaleX:0},{scaleX:1,duration:.35,ease:"power3.out"},l+.15),s&&o.forEach((c,h)=>{let d=Uu[c],f={v:0},[u,p,x]=ew[c];i.fromTo(d.position,{x:u,y:p,z:x},{x:0,y:0,z:0,duration:.6,ease:"power3.out"},l+.3+h*.35),i.fromTo(f,{v:0},{v:1,duration:.35,ease:"none",onUpdate:()=>F_(d,f.v)},l+.3+h*.35),F_(d,0)}),i.to(t[a],{autoAlpha:0,y:-30,duration:.25,ease:"power2.in"},l+1.35)});let r=.6+5*1.65;i.to(Yi,{rx:.12,ry:-.42,fx:0,zoom:.9,yo:.17,sx:0,duration:.9},r-.4).fromTo(".final",{autoAlpha:0,y:40},{autoAlpha:1,y:0,duration:.4,ease:"power2.out"},r+.1).to({},{duration:.6}),Oi||ie.batch(".item",{start:"top 88%",once:!0,onEnter:o=>rn.fromTo(o,{y:34,autoAlpha:0},{y:0,autoAlpha:1,duration:.7,stagger:.06,ease:"power3.out"})}),Oi||rn.set(".item",{autoAlpha:0}),ie.create({trigger:".stage",start:"bottom 70%",onEnter:()=>document.body.classList.add("past"),onLeaveBack:()=>document.body.classList.remove("past")})}function rw(){Vl=nw(),Vl||document.body.classList.add("no-gl"),iw(Vl?Vl.shots:{}),zu(),sw(!!Vl);let s=()=>{document.body.classList.remove("is-loading"),!Oi&&(rn.to(Rp,{x:0,ry:0,duration:1.9,ease:"power4.out",delay:.15}),rn.from(".hero__title .ln > span",{yPercent:115,duration:1.1,stagger:.12,ease:"power4.out",delay:.35}),rn.from(".hero__lead, .hero__actions, .hero__hint",{autoAlpha:0,y:24,duration:.8,stagger:.1,ease:"power3.out",delay:.95}))};if(Oi)return s();let t={v:0},e=$e("#loaderNum");rn.to(t,{v:100,duration:1.1,ease:"power2.inOut",onUpdate:()=>e.textContent=Math.round(t.v),onComplete:()=>rn.to(".loader",{yPercent:-100,duration:.8,ease:"power4.inOut",onStart:s,onComplete:()=>$e(".loader").remove()})}),rn.to(".loader .tape",{scaleX:1,duration:1.1,ease:"power2.inOut"})}(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(rw);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

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
*/
