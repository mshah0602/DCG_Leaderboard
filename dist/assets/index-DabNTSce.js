(function(){const $=document.createElement("link").relList;if($&&$.supports&&$.supports("modulepreload"))return;for(const V of document.querySelectorAll('link[rel="modulepreload"]'))Ae(V);new MutationObserver(V=>{for(const J of V)if(J.type==="childList")for(const xe of J.addedNodes)xe.tagName==="LINK"&&xe.rel==="modulepreload"&&Ae(xe)}).observe(document,{childList:!0,subtree:!0});function h(V){const J={};return V.integrity&&(J.integrity=V.integrity),V.referrerPolicy&&(J.referrerPolicy=V.referrerPolicy),V.crossOrigin==="use-credentials"?J.credentials="include":V.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function Ae(V){if(V.ep)return;V.ep=!0;const J=h(V);fetch(V.href,J)}})();function Ed(R){return R&&R.__esModule&&Object.prototype.hasOwnProperty.call(R,"default")?R.default:R}var So={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xu;function _d(){if(xu)return D;xu=1;var R=Symbol.for("react.element"),$=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),Ae=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),xe=Symbol.for("react.context"),Me=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),Ue=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),ae=Symbol.iterator;function le(c){return c===null||typeof c!="object"?null:(c=ae&&c[ae]||c["@@iterator"],typeof c=="function"?c:null)}var hn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ve=Object.assign,Y={};function H(c,m,M){this.props=c,this.context=m,this.refs=Y,this.updater=M||hn}H.prototype.isReactComponent={},H.prototype.setState=function(c,m){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,m,"setState")},H.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function gn(){}gn.prototype=H.prototype;function on(c,m,M){this.props=c,this.context=m,this.refs=Y,this.updater=M||hn}var Xe=on.prototype=new gn;Xe.constructor=on,Ve(Xe,H.prototype),Xe.isPureReactComponent=!0;var ge=Array.isArray,Ze=Object.prototype.hasOwnProperty,ke={current:null},Ee={key:!0,ref:!0,__self:!0,__source:!0};function He(c,m,M){var O,I={},j=null,W=null;if(m!=null)for(O in m.ref!==void 0&&(W=m.ref),m.key!==void 0&&(j=""+m.key),m)Ze.call(m,O)&&!Ee.hasOwnProperty(O)&&(I[O]=m[O]);var A=arguments.length-2;if(A===1)I.children=M;else if(1<A){for(var X=Array(A),Oe=0;Oe<A;Oe++)X[Oe]=arguments[Oe+2];I.children=X}if(c&&c.defaultProps)for(O in A=c.defaultProps,A)I[O]===void 0&&(I[O]=A[O]);return{$$typeof:R,type:c,key:j,ref:W,props:I,_owner:ke.current}}function _n(c,m){return{$$typeof:R,type:c.type,key:m,ref:c.ref,props:c.props,_owner:c._owner}}function mn(c){return typeof c=="object"&&c!==null&&c.$$typeof===R}function $n(c){var m={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(M){return m[M]})}var sn=/\/+/g;function De(c,m){return typeof c=="object"&&c!==null&&c.key!=null?$n(""+c.key):m.toString(36)}function Je(c,m,M,O,I){var j=typeof c;(j==="undefined"||j==="boolean")&&(c=null);var W=!1;if(c===null)W=!0;else switch(j){case"string":case"number":W=!0;break;case"object":switch(c.$$typeof){case R:case $:W=!0}}if(W)return W=c,I=I(W),c=O===""?"."+De(W,0):O,ge(I)?(M="",c!=null&&(M=c.replace(sn,"$&/")+"/"),Je(I,m,M,"",function(Oe){return Oe})):I!=null&&(mn(I)&&(I=_n(I,M+(!I.key||W&&W.key===I.key?"":(""+I.key).replace(sn,"$&/")+"/")+c)),m.push(I)),1;if(W=0,O=O===""?".":O+":",ge(c))for(var A=0;A<c.length;A++){j=c[A];var X=O+De(j,A);W+=Je(j,m,M,X,I)}else if(X=le(c),typeof X=="function")for(c=X.call(c),A=0;!(j=c.next()).done;)j=j.value,X=O+De(j,A++),W+=Je(j,m,M,X,I);else if(j==="object")throw m=String(c),Error("Objects are not valid as a React child (found: "+(m==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":m)+"). If you meant to render a collection of children, use an array instead.");return W}function an(c,m,M){if(c==null)return c;var O=[],I=0;return Je(c,O,"","",function(j){return m.call(M,j,I++)}),O}function _e(c){if(c._status===-1){var m=c._result;m=m(),m.then(function(M){(c._status===0||c._status===-1)&&(c._status=1,c._result=M)},function(M){(c._status===0||c._status===-1)&&(c._status=2,c._result=M)}),c._status===-1&&(c._status=0,c._result=m)}if(c._status===1)return c._result.default;throw c._result}var ee={current:null},x={transition:null},L={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:x,ReactCurrentOwner:ke};function C(){throw Error("act(...) is not supported in production builds of React.")}return D.Children={map:an,forEach:function(c,m,M){an(c,function(){m.apply(this,arguments)},M)},count:function(c){var m=0;return an(c,function(){m++}),m},toArray:function(c){return an(c,function(m){return m})||[]},only:function(c){if(!mn(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},D.Component=H,D.Fragment=h,D.Profiler=V,D.PureComponent=on,D.StrictMode=Ae,D.Suspense=he,D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,D.act=C,D.cloneElement=function(c,m,M){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var O=Ve({},c.props),I=c.key,j=c.ref,W=c._owner;if(m!=null){if(m.ref!==void 0&&(j=m.ref,W=ke.current),m.key!==void 0&&(I=""+m.key),c.type&&c.type.defaultProps)var A=c.type.defaultProps;for(X in m)Ze.call(m,X)&&!Ee.hasOwnProperty(X)&&(O[X]=m[X]===void 0&&A!==void 0?A[X]:m[X])}var X=arguments.length-2;if(X===1)O.children=M;else if(1<X){A=Array(X);for(var Oe=0;Oe<X;Oe++)A[Oe]=arguments[Oe+2];O.children=A}return{$$typeof:R,type:c.type,key:I,ref:j,props:O,_owner:W}},D.createContext=function(c){return c={$$typeof:xe,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:J,_context:c},c.Consumer=c},D.createElement=He,D.createFactory=function(c){var m=He.bind(null,c);return m.type=c,m},D.createRef=function(){return{current:null}},D.forwardRef=function(c){return{$$typeof:Me,render:c}},D.isValidElement=mn,D.lazy=function(c){return{$$typeof:it,_payload:{_status:-1,_result:c},_init:_e}},D.memo=function(c,m){return{$$typeof:Ue,type:c,compare:m===void 0?null:m}},D.startTransition=function(c){var m=x.transition;x.transition={};try{c()}finally{x.transition=m}},D.unstable_act=C,D.useCallback=function(c,m){return ee.current.useCallback(c,m)},D.useContext=function(c){return ee.current.useContext(c)},D.useDebugValue=function(){},D.useDeferredValue=function(c){return ee.current.useDeferredValue(c)},D.useEffect=function(c,m){return ee.current.useEffect(c,m)},D.useId=function(){return ee.current.useId()},D.useImperativeHandle=function(c,m,M){return ee.current.useImperativeHandle(c,m,M)},D.useInsertionEffect=function(c,m){return ee.current.useInsertionEffect(c,m)},D.useLayoutEffect=function(c,m){return ee.current.useLayoutEffect(c,m)},D.useMemo=function(c,m){return ee.current.useMemo(c,m)},D.useReducer=function(c,m,M){return ee.current.useReducer(c,m,M)},D.useRef=function(c){return ee.current.useRef(c)},D.useState=function(c){return ee.current.useState(c)},D.useSyncExternalStore=function(c,m,M){return ee.current.useSyncExternalStore(c,m,M)},D.useTransition=function(){return ee.current.useTransition()},D.version="18.3.1",D}var ku;function Nu(){return ku||(ku=1,So.exports=_d()),So.exports}var Pd=Nu();const Nl=Ed(Pd);var Pl={},Co={exports:{}},Re={},Eo={exports:{}},_o={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Su;function Nd(){return Su||(Su=1,(function(R){function $(x,L){var C=x.length;x.push(L);e:for(;0<C;){var c=C-1>>>1,m=x[c];if(0<V(m,L))x[c]=L,x[C]=m,C=c;else break e}}function h(x){return x.length===0?null:x[0]}function Ae(x){if(x.length===0)return null;var L=x[0],C=x.pop();if(C!==L){x[0]=C;e:for(var c=0,m=x.length,M=m>>>1;c<M;){var O=2*(c+1)-1,I=x[O],j=O+1,W=x[j];if(0>V(I,C))j<m&&0>V(W,I)?(x[c]=W,x[j]=C,c=j):(x[c]=I,x[O]=C,c=O);else if(j<m&&0>V(W,C))x[c]=W,x[j]=C,c=j;else break e}}return L}function V(x,L){var C=x.sortIndex-L.sortIndex;return C!==0?C:x.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var J=performance;R.unstable_now=function(){return J.now()}}else{var xe=Date,Me=xe.now();R.unstable_now=function(){return xe.now()-Me}}var he=[],Ue=[],it=1,ae=null,le=3,hn=!1,Ve=!1,Y=!1,H=typeof setTimeout=="function"?setTimeout:null,gn=typeof clearTimeout=="function"?clearTimeout:null,on=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Xe(x){for(var L=h(Ue);L!==null;){if(L.callback===null)Ae(Ue);else if(L.startTime<=x)Ae(Ue),L.sortIndex=L.expirationTime,$(he,L);else break;L=h(Ue)}}function ge(x){if(Y=!1,Xe(x),!Ve)if(h(he)!==null)Ve=!0,_e(Ze);else{var L=h(Ue);L!==null&&ee(ge,L.startTime-x)}}function Ze(x,L){Ve=!1,Y&&(Y=!1,gn(He),He=-1),hn=!0;var C=le;try{for(Xe(L),ae=h(he);ae!==null&&(!(ae.expirationTime>L)||x&&!$n());){var c=ae.callback;if(typeof c=="function"){ae.callback=null,le=ae.priorityLevel;var m=c(ae.expirationTime<=L);L=R.unstable_now(),typeof m=="function"?ae.callback=m:ae===h(he)&&Ae(he),Xe(L)}else Ae(he);ae=h(he)}if(ae!==null)var M=!0;else{var O=h(Ue);O!==null&&ee(ge,O.startTime-L),M=!1}return M}finally{ae=null,le=C,hn=!1}}var ke=!1,Ee=null,He=-1,_n=5,mn=-1;function $n(){return!(R.unstable_now()-mn<_n)}function sn(){if(Ee!==null){var x=R.unstable_now();mn=x;var L=!0;try{L=Ee(!0,x)}finally{L?De():(ke=!1,Ee=null)}}else ke=!1}var De;if(typeof on=="function")De=function(){on(sn)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,an=Je.port2;Je.port1.onmessage=sn,De=function(){an.postMessage(null)}}else De=function(){H(sn,0)};function _e(x){Ee=x,ke||(ke=!0,De())}function ee(x,L){He=H(function(){x(R.unstable_now())},L)}R.unstable_IdlePriority=5,R.unstable_ImmediatePriority=1,R.unstable_LowPriority=4,R.unstable_NormalPriority=3,R.unstable_Profiling=null,R.unstable_UserBlockingPriority=2,R.unstable_cancelCallback=function(x){x.callback=null},R.unstable_continueExecution=function(){Ve||hn||(Ve=!0,_e(Ze))},R.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_n=0<x?Math.floor(1e3/x):5},R.unstable_getCurrentPriorityLevel=function(){return le},R.unstable_getFirstCallbackNode=function(){return h(he)},R.unstable_next=function(x){switch(le){case 1:case 2:case 3:var L=3;break;default:L=le}var C=le;le=L;try{return x()}finally{le=C}},R.unstable_pauseExecution=function(){},R.unstable_requestPaint=function(){},R.unstable_runWithPriority=function(x,L){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var C=le;le=x;try{return L()}finally{le=C}},R.unstable_scheduleCallback=function(x,L,C){var c=R.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?c+C:c):C=c,x){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=C+m,x={id:it++,callback:L,priorityLevel:x,startTime:C,expirationTime:m,sortIndex:-1},C>c?(x.sortIndex=C,$(Ue,x),h(he)===null&&x===h(Ue)&&(Y?(gn(He),He=-1):Y=!0,ee(ge,C-c))):(x.sortIndex=m,$(he,x),Ve||hn||(Ve=!0,_e(Ze))),x},R.unstable_shouldYield=$n,R.unstable_wrapCallback=function(x){var L=le;return function(){var C=le;le=L;try{return x.apply(this,arguments)}finally{le=C}}}})(_o)),_o}var Cu;function zd(){return Cu||(Cu=1,Eo.exports=Nd()),Eo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eu;function Ld(){if(Eu)return Re;Eu=1;var R=Nu(),$=zd();function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ae=new Set,V={};function J(e,n){xe(e,n),xe(e+"Capture",n)}function xe(e,n){for(V[e]=n,e=0;e<n.length;e++)Ae.add(n[e])}var Me=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),he=Object.prototype.hasOwnProperty,Ue=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,it={},ae={};function le(e){return he.call(ae,e)?!0:he.call(it,e)?!1:Ue.test(e)?ae[e]=!0:(it[e]=!0,!1)}function hn(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ve(e,n,t,r){if(n===null||typeof n>"u"||hn(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Y(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){H[e]=new Y(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];H[n]=new Y(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){H[e]=new Y(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){H[e]=new Y(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){H[e]=new Y(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){H[e]=new Y(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){H[e]=new Y(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){H[e]=new Y(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){H[e]=new Y(e,5,!1,e.toLowerCase(),null,!1,!1)});var gn=/[\-:]([a-z])/g;function on(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(gn,on);H[n]=new Y(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(gn,on);H[n]=new Y(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(gn,on);H[n]=new Y(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){H[e]=new Y(e,1,!1,e.toLowerCase(),null,!1,!1)}),H.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){H[e]=new Y(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xe(e,n,t,r){var l=H.hasOwnProperty(n)?H[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ve(n,t,l,r)&&(t=null),r||l===null?le(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var ge=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ze=Symbol.for("react.element"),ke=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),He=Symbol.for("react.strict_mode"),_n=Symbol.for("react.profiler"),mn=Symbol.for("react.provider"),$n=Symbol.for("react.context"),sn=Symbol.for("react.forward_ref"),De=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),an=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),x=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var C=Object.assign,c;function m(e){if(c===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);c=n&&n[1]||""}return`
`+c+e}var M=!1;function O(e,n){if(!e||M)return"";M=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var r=p}Reflect.construct(e,[],n)}else{try{n.call()}catch(p){r=p}e.call(n.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{M=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?m(e):""}function I(e){switch(e.tag){case 5:return m(e.type);case 16:return m("Lazy");case 13:return m("Suspense");case 19:return m("SuspenseList");case 0:case 2:case 15:return e=O(e.type,!1),e;case 11:return e=O(e.type.render,!1),e;case 1:return e=O(e.type,!0),e;default:return""}}function j(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ee:return"Fragment";case ke:return"Portal";case _n:return"Profiler";case He:return"StrictMode";case De:return"Suspense";case Je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $n:return(e.displayName||"Context")+".Consumer";case mn:return(e._context.displayName||"Context")+".Provider";case sn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case an:return n=e.displayName||null,n!==null?n:j(e.type)||"Memo";case _e:n=e._payload,e=e._init;try{return j(e(n))}catch{}}return null}function W(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return j(n);case 8:return n===He?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function A(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function X(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Oe(e){var n=X(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function mr(e){e._valueTracker||(e._valueTracker=Oe(e))}function Po(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=X(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zl(e,n){var t=n.checked;return C({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function No(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=A(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function zo(e,n){n=n.checked,n!=null&&Xe(e,"checked",n,!1)}function Ll(e,n){zo(e,n);var t=A(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Tl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Tl(e,n.type,A(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Lo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Tl(e,n,t){(n!=="number"||vr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Rt=Array.isArray;function ot(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+A(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Rl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(h(91));return C({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function To(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(h(92));if(Rt(t)){if(1<t.length)throw Error(h(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:A(t)}}function Ro(e,n){var t=A(n.value),r=A(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Mo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Do(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Do(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,Oo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Mt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Dt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zu=["Webkit","ms","Moz","O"];Object.keys(Dt).forEach(function(e){zu.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Dt[n]=Dt[e]})});function Fo(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Dt.hasOwnProperty(e)&&Dt[e]?(""+n).trim():n+"px"}function Io(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Fo(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Lu=C({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dl(e,n){if(n){if(Lu[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(h(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(h(61))}if(n.style!=null&&typeof n.style!="object")throw Error(h(62))}}function Ol(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fl=null;function Il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jl=null,st=null,at=null;function jo(e){if(e=nr(e)){if(typeof jl!="function")throw Error(h(280));var n=e.stateNode;n&&(n=Vr(n),jl(e.stateNode,e.type,n))}}function Bo(e){st?at?at.push(e):at=[e]:st=e}function Ao(){if(st){var e=st,n=at;if(at=st=null,jo(e),n)for(e=0;e<n.length;e++)jo(n[e])}}function Uo(e,n){return e(n)}function Vo(){}var Bl=!1;function Ho(e,n,t){if(Bl)return e(n,t);Bl=!0;try{return Uo(e,n,t)}finally{Bl=!1,(st!==null||at!==null)&&(Vo(),Ao())}}function Ot(e,n){var t=e.stateNode;if(t===null)return null;var r=Vr(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(h(231,n,typeof t));return t}var Al=!1;if(Me)try{var Ft={};Object.defineProperty(Ft,"passive",{get:function(){Al=!0}}),window.addEventListener("test",Ft,Ft),window.removeEventListener("test",Ft,Ft)}catch{Al=!1}function Tu(e,n,t,r,l,i,o,s,a){var p=Array.prototype.slice.call(arguments,3);try{n.apply(t,p)}catch(v){this.onError(v)}}var It=!1,wr=null,xr=!1,Ul=null,Ru={onError:function(e){It=!0,wr=e}};function Mu(e,n,t,r,l,i,o,s,a){It=!1,wr=null,Tu.apply(Ru,arguments)}function Du(e,n,t,r,l,i,o,s,a){if(Mu.apply(this,arguments),It){if(It){var p=wr;It=!1,wr=null}else throw Error(h(198));xr||(xr=!0,Ul=p)}}function Kn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Wo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Qo(e){if(Kn(e)!==e)throw Error(h(188))}function Ou(e){var n=e.alternate;if(!n){if(n=Kn(e),n===null)throw Error(h(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Qo(l),e;if(i===r)return Qo(l),n;i=i.sibling}throw Error(h(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o)throw Error(h(189))}}if(t.alternate!==r)throw Error(h(190))}if(t.tag!==3)throw Error(h(188));return t.stateNode.current===t?e:n}function $o(e){return e=Ou(e),e!==null?Ko(e):null}function Ko(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ko(e);if(n!==null)return n;e=e.sibling}return null}var Go=$.unstable_scheduleCallback,Yo=$.unstable_cancelCallback,Fu=$.unstable_shouldYield,Iu=$.unstable_requestPaint,te=$.unstable_now,ju=$.unstable_getCurrentPriorityLevel,Vl=$.unstable_ImmediatePriority,Xo=$.unstable_UserBlockingPriority,kr=$.unstable_NormalPriority,Bu=$.unstable_LowPriority,Zo=$.unstable_IdlePriority,Sr=null,un=null;function Au(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Sr,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Hu,Uu=Math.log,Vu=Math.LN2;function Hu(e){return e>>>=0,e===0?32:31-(Uu(e)/Vu|0)|0}var Cr=64,Er=4194304;function jt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _r(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~l;s!==0?r=jt(s):(i&=o,i!==0&&(r=jt(i)))}else o=t&~l,o!==0?r=jt(o):i!==0&&(r=jt(i));if(r===0)return 0;if(n!==0&&n!==r&&(n&l)===0&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-qe(n),l=1<<t,r|=e[t],n&=~l;return r}function Wu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qu(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-qe(i),s=1<<o,a=l[o];a===-1?((s&t)===0||(s&r)!==0)&&(l[o]=Wu(s,n)):a<=n&&(e.expiredLanes|=s),i&=~s}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jo(){var e=Cr;return Cr<<=1,(Cr&4194240)===0&&(Cr=64),e}function Wl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Bt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-qe(n),e[n]=t}function $u(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-qe(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Ql(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-qe(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var U=0;function qo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var bo,$l,es,ns,ts,Kl=!1,Pr=[],Pn=null,Nn=null,zn=null,At=new Map,Ut=new Map,Ln=[],Ku="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rs(e,n){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":At.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ut.delete(n.pointerId)}}function Vt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=nr(n),n!==null&&$l(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Gu(e,n,t,r,l){switch(n){case"focusin":return Pn=Vt(Pn,e,n,t,r,l),!0;case"dragenter":return Nn=Vt(Nn,e,n,t,r,l),!0;case"mouseover":return zn=Vt(zn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return At.set(i,Vt(At.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Ut.set(i,Vt(Ut.get(i)||null,e,n,t,r,l)),!0}return!1}function ls(e){var n=Gn(e.target);if(n!==null){var t=Kn(n);if(t!==null){if(n=t.tag,n===13){if(n=Wo(t),n!==null){e.blockedOn=n,ts(e.priority,function(){es(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Yl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Fl=r,t.target.dispatchEvent(r),Fl=null}else return n=nr(t),n!==null&&$l(n),e.blockedOn=t,!1;n.shift()}return!0}function is(e,n,t){Nr(e)&&t.delete(n)}function Yu(){Kl=!1,Pn!==null&&Nr(Pn)&&(Pn=null),Nn!==null&&Nr(Nn)&&(Nn=null),zn!==null&&Nr(zn)&&(zn=null),At.forEach(is),Ut.forEach(is)}function Ht(e,n){e.blockedOn===n&&(e.blockedOn=null,Kl||(Kl=!0,$.unstable_scheduleCallback($.unstable_NormalPriority,Yu)))}function Wt(e){function n(l){return Ht(l,e)}if(0<Pr.length){Ht(Pr[0],e);for(var t=1;t<Pr.length;t++){var r=Pr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Pn!==null&&Ht(Pn,e),Nn!==null&&Ht(Nn,e),zn!==null&&Ht(zn,e),At.forEach(n),Ut.forEach(n),t=0;t<Ln.length;t++)r=Ln[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ln.length&&(t=Ln[0],t.blockedOn===null);)ls(t),t.blockedOn===null&&Ln.shift()}var ut=ge.ReactCurrentBatchConfig,zr=!0;function Xu(e,n,t,r){var l=U,i=ut.transition;ut.transition=null;try{U=1,Gl(e,n,t,r)}finally{U=l,ut.transition=i}}function Zu(e,n,t,r){var l=U,i=ut.transition;ut.transition=null;try{U=4,Gl(e,n,t,r)}finally{U=l,ut.transition=i}}function Gl(e,n,t,r){if(zr){var l=Yl(e,n,t,r);if(l===null)di(e,n,r,Lr,t),rs(e,r);else if(Gu(l,e,n,t,r))r.stopPropagation();else if(rs(e,r),n&4&&-1<Ku.indexOf(e)){for(;l!==null;){var i=nr(l);if(i!==null&&bo(i),i=Yl(e,n,t,r),i===null&&di(e,n,r,Lr,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else di(e,n,r,null,t)}}var Lr=null;function Yl(e,n,t,r){if(Lr=null,e=Il(r),e=Gn(e),e!==null)if(n=Kn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Wo(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Lr=e,null}function os(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ju()){case Vl:return 1;case Xo:return 4;case kr:case Bu:return 16;case Zo:return 536870912;default:return 16}default:return 16}}var Tn=null,Xl=null,Tr=null;function ss(){if(Tr)return Tr;var e,n=Xl,t=n.length,r,l="value"in Tn?Tn.value:Tn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return Tr=l.slice(e,1<r?1-r:void 0)}function Rr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function as(){return!1}function Fe(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Mr:as,this.isPropagationStopped=as,this}return C(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),n}var ct={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=Fe(ct),Qt=C({},ct,{view:0,detail:0}),Ju=Fe(Qt),Jl,ql,$t,Dr=C({},Qt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ei,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$t&&($t&&e.type==="mousemove"?(Jl=e.screenX-$t.screenX,ql=e.screenY-$t.screenY):ql=Jl=0,$t=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),us=Fe(Dr),qu=C({},Dr,{dataTransfer:0}),bu=Fe(qu),ec=C({},Qt,{relatedTarget:0}),bl=Fe(ec),nc=C({},ct,{animationName:0,elapsedTime:0,pseudoElement:0}),tc=Fe(nc),rc=C({},ct,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lc=Fe(rc),ic=C({},ct,{data:0}),cs=Fe(ic),oc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ac={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ac[e])?!!n[e]:!1}function ei(){return uc}var cc=C({},Qt,{key:function(e){if(e.key){var n=oc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ei,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dc=Fe(cc),fc=C({},Dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ds=Fe(fc),pc=C({},Qt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ei}),hc=Fe(pc),gc=C({},ct,{propertyName:0,elapsedTime:0,pseudoElement:0}),mc=Fe(gc),vc=C({},Dr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yc=Fe(vc),wc=[9,13,27,32],ni=Me&&"CompositionEvent"in window,Kt=null;Me&&"documentMode"in document&&(Kt=document.documentMode);var xc=Me&&"TextEvent"in window&&!Kt,fs=Me&&(!ni||Kt&&8<Kt&&11>=Kt),ps=" ",hs=!1;function gs(e,n){switch(e){case"keyup":return wc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ms(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dt=!1;function kc(e,n){switch(e){case"compositionend":return ms(n);case"keypress":return n.which!==32?null:(hs=!0,ps);case"textInput":return e=n.data,e===ps&&hs?null:e;default:return null}}function Sc(e,n){if(dt)return e==="compositionend"||!ni&&gs(e,n)?(e=ss(),Tr=Xl=Tn=null,dt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fs&&n.locale!=="ko"?null:n.data;default:return null}}var Cc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Cc[e.type]:n==="textarea"}function ys(e,n,t,r){Bo(r),n=Br(n,"onChange"),0<n.length&&(t=new Zl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Gt=null,Yt=null;function Ec(e){Is(e,0)}function Or(e){var n=mt(e);if(Po(n))return e}function _c(e,n){if(e==="change")return n}var ws=!1;if(Me){var ti;if(Me){var ri="oninput"in document;if(!ri){var xs=document.createElement("div");xs.setAttribute("oninput","return;"),ri=typeof xs.oninput=="function"}ti=ri}else ti=!1;ws=ti&&(!document.documentMode||9<document.documentMode)}function ks(){Gt&&(Gt.detachEvent("onpropertychange",Ss),Yt=Gt=null)}function Ss(e){if(e.propertyName==="value"&&Or(Yt)){var n=[];ys(n,Yt,e,Il(e)),Ho(Ec,n)}}function Pc(e,n,t){e==="focusin"?(ks(),Gt=n,Yt=t,Gt.attachEvent("onpropertychange",Ss)):e==="focusout"&&ks()}function Nc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Or(Yt)}function zc(e,n){if(e==="click")return Or(n)}function Lc(e,n){if(e==="input"||e==="change")return Or(n)}function Tc(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var be=typeof Object.is=="function"?Object.is:Tc;function Xt(e,n){if(be(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!he.call(n,l)||!be(e[l],n[l]))return!1}return!0}function Cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Es(e,n){var t=Cs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Cs(t)}}function _s(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_s(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ps(){for(var e=window,n=vr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=vr(e.document)}return n}function li(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Rc(e){var n=Ps(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&_s(t.ownerDocument.documentElement,t)){if(r!==null&&li(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Es(t,i);var o=Es(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mc=Me&&"documentMode"in document&&11>=document.documentMode,ft=null,ii=null,Zt=null,oi=!1;function Ns(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;oi||ft==null||ft!==vr(r)||(r=ft,"selectionStart"in r&&li(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zt&&Xt(Zt,r)||(Zt=r,r=Br(ii,"onSelect"),0<r.length&&(n=new Zl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ft)))}function Fr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var pt={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},si={},zs={};Me&&(zs=document.createElement("div").style,"AnimationEvent"in window||(delete pt.animationend.animation,delete pt.animationiteration.animation,delete pt.animationstart.animation),"TransitionEvent"in window||delete pt.transitionend.transition);function Ir(e){if(si[e])return si[e];if(!pt[e])return e;var n=pt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in zs)return si[e]=n[t];return e}var Ls=Ir("animationend"),Ts=Ir("animationiteration"),Rs=Ir("animationstart"),Ms=Ir("transitionend"),Ds=new Map,Os="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(e,n){Ds.set(e,n),J(n,[e])}for(var ai=0;ai<Os.length;ai++){var ui=Os[ai],Dc=ui.toLowerCase(),Oc=ui[0].toUpperCase()+ui.slice(1);Rn(Dc,"on"+Oc)}Rn(Ls,"onAnimationEnd"),Rn(Ts,"onAnimationIteration"),Rn(Rs,"onAnimationStart"),Rn("dblclick","onDoubleClick"),Rn("focusin","onFocus"),Rn("focusout","onBlur"),Rn(Ms,"onTransitionEnd"),xe("onMouseEnter",["mouseout","mouseover"]),xe("onMouseLeave",["mouseout","mouseover"]),xe("onPointerEnter",["pointerout","pointerover"]),xe("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jt));function Fs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Du(r,n,void 0,e),e.currentTarget=null}function Is(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,p=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;Fs(l,s,p),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,p=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;Fs(l,s,p),i=a}}}if(xr)throw e=Ul,xr=!1,Ul=null,e}function K(e,n){var t=n[vi];t===void 0&&(t=n[vi]=new Set);var r=e+"__bubble";t.has(r)||(js(n,e,2,!1),t.add(r))}function ci(e,n,t){var r=0;n&&(r|=4),js(t,e,r,n)}var jr="_reactListening"+Math.random().toString(36).slice(2);function qt(e){if(!e[jr]){e[jr]=!0,Ae.forEach(function(t){t!=="selectionchange"&&(Fc.has(t)||ci(t,!1,e),ci(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jr]||(n[jr]=!0,ci("selectionchange",!1,n))}}function js(e,n,t,r){switch(os(n)){case 1:var l=Xu;break;case 4:l=Zu;break;default:l=Gl}t=l.bind(null,n,t,e),l=void 0,!Al||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function di(e,n,t,r,l){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Gn(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Ho(function(){var p=i,v=Il(t),y=[];e:{var g=Ds.get(e);if(g!==void 0){var k=Zl,E=e;switch(e){case"keypress":if(Rr(t)===0)break e;case"keydown":case"keyup":k=dc;break;case"focusin":E="focus",k=bl;break;case"focusout":E="blur",k=bl;break;case"beforeblur":case"afterblur":k=bl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=bu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=hc;break;case Ls:case Ts:case Rs:k=tc;break;case Ms:k=mc;break;case"scroll":k=Ju;break;case"wheel":k=yc;break;case"copy":case"cut":case"paste":k=lc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ds}var _=(n&4)!==0,re=!_&&e==="scroll",d=_?g!==null?g+"Capture":null:g;_=[];for(var u=p,f;u!==null;){f=u;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=Ot(u,d),w!=null&&_.push(bt(u,w,f)))),re)break;u=u.return}0<_.length&&(g=new k(g,E,null,t,v),y.push({event:g,listeners:_}))}}if((n&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&t!==Fl&&(E=t.relatedTarget||t.fromElement)&&(Gn(E)||E[vn]))break e;if((k||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,k?(E=t.relatedTarget||t.toElement,k=p,E=E?Gn(E):null,E!==null&&(re=Kn(E),E!==re||E.tag!==5&&E.tag!==6)&&(E=null)):(k=null,E=p),k!==E)){if(_=us,w="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(_=ds,w="onPointerLeave",d="onPointerEnter",u="pointer"),re=k==null?g:mt(k),f=E==null?g:mt(E),g=new _(w,u+"leave",k,t,v),g.target=re,g.relatedTarget=f,w=null,Gn(v)===p&&(_=new _(d,u+"enter",E,t,v),_.target=f,_.relatedTarget=re,w=_),re=w,k&&E)n:{for(_=k,d=E,u=0,f=_;f;f=ht(f))u++;for(f=0,w=d;w;w=ht(w))f++;for(;0<u-f;)_=ht(_),u--;for(;0<f-u;)d=ht(d),f--;for(;u--;){if(_===d||d!==null&&_===d.alternate)break n;_=ht(_),d=ht(d)}_=null}else _=null;k!==null&&Bs(y,g,k,_,!1),E!==null&&re!==null&&Bs(y,re,E,_,!0)}}e:{if(g=p?mt(p):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var P=_c;else if(vs(g))if(ws)P=Lc;else{P=Nc;var N=Pc}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=zc);if(P&&(P=P(e,p))){ys(y,P,t,v);break e}N&&N(e,g,p),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&Tl(g,"number",g.value)}switch(N=p?mt(p):window,e){case"focusin":(vs(N)||N.contentEditable==="true")&&(ft=N,ii=p,Zt=null);break;case"focusout":Zt=ii=ft=null;break;case"mousedown":oi=!0;break;case"contextmenu":case"mouseup":case"dragend":oi=!1,Ns(y,t,v);break;case"selectionchange":if(Mc)break;case"keydown":case"keyup":Ns(y,t,v)}var z;if(ni)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else dt?gs(e,t)&&(T="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(fs&&t.locale!=="ko"&&(dt||T!=="onCompositionStart"?T==="onCompositionEnd"&&dt&&(z=ss()):(Tn=v,Xl="value"in Tn?Tn.value:Tn.textContent,dt=!0)),N=Br(p,T),0<N.length&&(T=new cs(T,e,null,t,v),y.push({event:T,listeners:N}),z?T.data=z:(z=ms(t),z!==null&&(T.data=z)))),(z=xc?kc(e,t):Sc(e,t))&&(p=Br(p,"onBeforeInput"),0<p.length&&(v=new cs("onBeforeInput","beforeinput",null,t,v),y.push({event:v,listeners:p}),v.data=z))}Is(y,n)})}function bt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Br(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Ot(e,t),i!=null&&r.unshift(bt(e,i,l)),i=Ot(e,n),i!=null&&r.push(bt(e,i,l))),e=e.return}return r}function ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bs(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var s=t,a=s.alternate,p=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&p!==null&&(s=p,l?(a=Ot(t,i),a!=null&&o.unshift(bt(t,a,s))):l||(a=Ot(t,i),a!=null&&o.push(bt(t,a,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Ic=/\r\n?/g,jc=/\u0000|\uFFFD/g;function As(e){return(typeof e=="string"?e:""+e).replace(Ic,`
`).replace(jc,"")}function Ar(e,n,t){if(n=As(n),As(e)!==n&&t)throw Error(h(425))}function Ur(){}var fi=null,pi=null;function hi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout=="function"?setTimeout:void 0,Bc=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,Ac=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(e){return Us.resolve(null).then(e).catch(Uc)}:gi;function Uc(e){setTimeout(function(){throw e})}function mi(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Wt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Wt(n)}function Mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Vs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var gt=Math.random().toString(36).slice(2),cn="__reactFiber$"+gt,er="__reactProps$"+gt,vn="__reactContainer$"+gt,vi="__reactEvents$"+gt,Vc="__reactListeners$"+gt,Hc="__reactHandles$"+gt;function Gn(e){var n=e[cn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[vn]||t[cn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Vs(e);e!==null;){if(t=e[cn])return t;e=Vs(e)}return n}e=t,t=e.parentNode}return null}function nr(e){return e=e[cn]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Vr(e){return e[er]||null}var yi=[],vt=-1;function Dn(e){return{current:e}}function G(e){0>vt||(e.current=yi[vt],yi[vt]=null,vt--)}function Q(e,n){vt++,yi[vt]=e.current,e.current=n}var On={},me=Dn(On),Pe=Dn(!1),Yn=On;function yt(e,n){var t=e.type.contextTypes;if(!t)return On;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ne(e){return e=e.childContextTypes,e!=null}function Hr(){G(Pe),G(me)}function Hs(e,n,t){if(me.current!==On)throw Error(h(168));Q(me,n),Q(Pe,t)}function Ws(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(h(108,W(e)||"Unknown",l));return C({},t,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||On,Yn=me.current,Q(me,e),Q(Pe,Pe.current),!0}function Qs(e,n,t){var r=e.stateNode;if(!r)throw Error(h(169));t?(e=Ws(e,n,Yn),r.__reactInternalMemoizedMergedChildContext=e,G(Pe),G(me),Q(me,e)):G(Pe),Q(Pe,t)}var yn=null,Qr=!1,wi=!1;function $s(e){yn===null?yn=[e]:yn.push(e)}function Wc(e){Qr=!0,$s(e)}function Fn(){if(!wi&&yn!==null){wi=!0;var e=0,n=U;try{var t=yn;for(U=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}yn=null,Qr=!1}catch(l){throw yn!==null&&(yn=yn.slice(e+1)),Go(Vl,Fn),l}finally{U=n,wi=!1}}return null}var wt=[],xt=0,$r=null,Kr=0,We=[],Qe=0,Xn=null,wn=1,xn="";function Zn(e,n){wt[xt++]=Kr,wt[xt++]=$r,$r=e,Kr=n}function Ks(e,n,t){We[Qe++]=wn,We[Qe++]=xn,We[Qe++]=Xn,Xn=e;var r=wn;e=xn;var l=32-qe(r)-1;r&=~(1<<l),t+=1;var i=32-qe(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,wn=1<<32-qe(n)+l|t<<l|r,xn=i+e}else wn=1<<i|t<<l|r,xn=e}function xi(e){e.return!==null&&(Zn(e,1),Ks(e,1,0))}function ki(e){for(;e===$r;)$r=wt[--xt],wt[xt]=null,Kr=wt[--xt],wt[xt]=null;for(;e===Xn;)Xn=We[--Qe],We[Qe]=null,xn=We[--Qe],We[Qe]=null,wn=We[--Qe],We[Qe]=null}var Ie=null,je=null,Z=!1,en=null;function Gs(e,n){var t=Ye(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ys(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ie=e,je=Mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ie=e,je=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Xn!==null?{id:wn,overflow:xn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ye(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ie=e,je=null,!0):!1;default:return!1}}function Si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ci(e){if(Z){var n=je;if(n){var t=n;if(!Ys(e,n)){if(Si(e))throw Error(h(418));n=Mn(t.nextSibling);var r=Ie;n&&Ys(e,n)?Gs(r,t):(e.flags=e.flags&-4097|2,Z=!1,Ie=e)}}else{if(Si(e))throw Error(h(418));e.flags=e.flags&-4097|2,Z=!1,Ie=e}}}function Xs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Gr(e){if(e!==Ie)return!1;if(!Z)return Xs(e),Z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!hi(e.type,e.memoizedProps)),n&&(n=je)){if(Si(e))throw Zs(),Error(h(418));for(;n;)Gs(e,n),n=Mn(n.nextSibling)}if(Xs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){je=Mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}je=null}}else je=Ie?Mn(e.stateNode.nextSibling):null;return!0}function Zs(){for(var e=je;e;)e=Mn(e.nextSibling)}function kt(){je=Ie=null,Z=!1}function Ei(e){en===null?en=[e]:en.push(e)}var Qc=ge.ReactCurrentBatchConfig;function tr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(h(309));var r=t.stateNode}if(!r)throw Error(h(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(h(284));if(!t._owner)throw Error(h(290,e))}return e}function Yr(e,n){throw e=Object.prototype.toString.call(n),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Js(e){var n=e._init;return n(e._payload)}function qs(e){function n(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function t(d,u){if(!e)return null;for(;u!==null;)n(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function l(d,u){return d=Wn(d,u),d.index=0,d.sibling=null,d}function i(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,f,w){return u===null||u.tag!==6?(u=mo(f,d.mode,w),u.return=d,u):(u=l(u,f),u.return=d,u)}function a(d,u,f,w){var P=f.type;return P===Ee?v(d,u,f.props.children,w,f.key):u!==null&&(u.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===_e&&Js(P)===u.type)?(w=l(u,f.props),w.ref=tr(d,u,f),w.return=d,w):(w=yl(f.type,f.key,f.props,null,d.mode,w),w.ref=tr(d,u,f),w.return=d,w)}function p(d,u,f,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=vo(f,d.mode,w),u.return=d,u):(u=l(u,f.children||[]),u.return=d,u)}function v(d,u,f,w,P){return u===null||u.tag!==7?(u=lt(f,d.mode,w,P),u.return=d,u):(u=l(u,f),u.return=d,u)}function y(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=mo(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ze:return f=yl(u.type,u.key,u.props,null,d.mode,f),f.ref=tr(d,null,u),f.return=d,f;case ke:return u=vo(u,d.mode,f),u.return=d,u;case _e:var w=u._init;return y(d,w(u._payload),f)}if(Rt(u)||L(u))return u=lt(u,d.mode,f,null),u.return=d,u;Yr(d,u)}return null}function g(d,u,f,w){var P=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return P!==null?null:s(d,u,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ze:return f.key===P?a(d,u,f,w):null;case ke:return f.key===P?p(d,u,f,w):null;case _e:return P=f._init,g(d,u,P(f._payload),w)}if(Rt(f)||L(f))return P!==null?null:v(d,u,f,w,null);Yr(d,f)}return null}function k(d,u,f,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,s(u,d,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ze:return d=d.get(w.key===null?f:w.key)||null,a(u,d,w,P);case ke:return d=d.get(w.key===null?f:w.key)||null,p(u,d,w,P);case _e:var N=w._init;return k(d,u,f,N(w._payload),P)}if(Rt(w)||L(w))return d=d.get(f)||null,v(u,d,w,P,null);Yr(u,w)}return null}function E(d,u,f,w){for(var P=null,N=null,z=u,T=u=0,de=null;z!==null&&T<f.length;T++){z.index>T?(de=z,z=null):de=z.sibling;var B=g(d,z,f[T],w);if(B===null){z===null&&(z=de);break}e&&z&&B.alternate===null&&n(d,z),u=i(B,u,T),N===null?P=B:N.sibling=B,N=B,z=de}if(T===f.length)return t(d,z),Z&&Zn(d,T),P;if(z===null){for(;T<f.length;T++)z=y(d,f[T],w),z!==null&&(u=i(z,u,T),N===null?P=z:N.sibling=z,N=z);return Z&&Zn(d,T),P}for(z=r(d,z);T<f.length;T++)de=k(z,d,T,f[T],w),de!==null&&(e&&de.alternate!==null&&z.delete(de.key===null?T:de.key),u=i(de,u,T),N===null?P=de:N.sibling=de,N=de);return e&&z.forEach(function(Qn){return n(d,Qn)}),Z&&Zn(d,T),P}function _(d,u,f,w){var P=L(f);if(typeof P!="function")throw Error(h(150));if(f=P.call(f),f==null)throw Error(h(151));for(var N=P=null,z=u,T=u=0,de=null,B=f.next();z!==null&&!B.done;T++,B=f.next()){z.index>T?(de=z,z=null):de=z.sibling;var Qn=g(d,z,B.value,w);if(Qn===null){z===null&&(z=de);break}e&&z&&Qn.alternate===null&&n(d,z),u=i(Qn,u,T),N===null?P=Qn:N.sibling=Qn,N=Qn,z=de}if(B.done)return t(d,z),Z&&Zn(d,T),P;if(z===null){for(;!B.done;T++,B=f.next())B=y(d,B.value,w),B!==null&&(u=i(B,u,T),N===null?P=B:N.sibling=B,N=B);return Z&&Zn(d,T),P}for(z=r(d,z);!B.done;T++,B=f.next())B=k(z,d,T,B.value,w),B!==null&&(e&&B.alternate!==null&&z.delete(B.key===null?T:B.key),u=i(B,u,T),N===null?P=B:N.sibling=B,N=B);return e&&z.forEach(function(Cd){return n(d,Cd)}),Z&&Zn(d,T),P}function re(d,u,f,w){if(typeof f=="object"&&f!==null&&f.type===Ee&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ze:e:{for(var P=f.key,N=u;N!==null;){if(N.key===P){if(P=f.type,P===Ee){if(N.tag===7){t(d,N.sibling),u=l(N,f.props.children),u.return=d,d=u;break e}}else if(N.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===_e&&Js(P)===N.type){t(d,N.sibling),u=l(N,f.props),u.ref=tr(d,N,f),u.return=d,d=u;break e}t(d,N);break}else n(d,N);N=N.sibling}f.type===Ee?(u=lt(f.props.children,d.mode,w,f.key),u.return=d,d=u):(w=yl(f.type,f.key,f.props,null,d.mode,w),w.ref=tr(d,u,f),w.return=d,d=w)}return o(d);case ke:e:{for(N=f.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){t(d,u.sibling),u=l(u,f.children||[]),u.return=d,d=u;break e}else{t(d,u);break}else n(d,u);u=u.sibling}u=vo(f,d.mode,w),u.return=d,d=u}return o(d);case _e:return N=f._init,re(d,u,N(f._payload),w)}if(Rt(f))return E(d,u,f,w);if(L(f))return _(d,u,f,w);Yr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(t(d,u.sibling),u=l(u,f),u.return=d,d=u):(t(d,u),u=mo(f,d.mode,w),u.return=d,d=u),o(d)):t(d,u)}return re}var St=qs(!0),bs=qs(!1),Xr=Dn(null),Zr=null,Ct=null,_i=null;function Pi(){_i=Ct=Zr=null}function Ni(e){var n=Xr.current;G(Xr),e._currentValue=n}function zi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Et(e,n){Zr=e,_i=Ct=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(ze=!0),e.firstContext=null)}function $e(e){var n=e._currentValue;if(_i!==e)if(e={context:e,memoizedValue:n,next:null},Ct===null){if(Zr===null)throw Error(h(308));Ct=e,Zr.dependencies={lanes:0,firstContext:e}}else Ct=Ct.next=e;return n}var Jn=null;function Li(e){Jn===null?Jn=[e]:Jn.push(e)}function ea(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Li(n)):(t.next=l.next,l.next=t),n.interleaved=t,kn(e,r)}function kn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var In=!1;function Ti(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function na(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Sn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function jn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(F&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,kn(e,t)}return l=r.interleaved,l===null?(n.next=n,Li(r)):(n.next=l.next,l.next=n),r.interleaved=n,kn(e,t)}function Jr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ql(e,t)}}function ta(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function qr(e,n,t,r){var l=e.updateQueue;In=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,p=a.next;a.next=null,o===null?i=p:o.next=p,o=a;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==o&&(s===null?v.firstBaseUpdate=p:s.next=p,v.lastBaseUpdate=a))}if(i!==null){var y=l.baseState;o=0,v=p=a=null,s=i;do{var g=s.lane,k=s.eventTime;if((r&g)===g){v!==null&&(v=v.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,_=s;switch(g=n,k=t,_.tag){case 1:if(E=_.payload,typeof E=="function"){y=E.call(k,y,g);break e}y=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=_.payload,g=typeof E=="function"?E.call(k,y,g):E,g==null)break e;y=C({},y,g);break e;case 2:In=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else k={eventTime:k,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(p=v=k,a=y):v=v.next=k,o|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(v===null&&(a=y),l.baseState=a,l.firstBaseUpdate=p,l.lastBaseUpdate=v,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);et|=o,e.lanes=o,e.memoizedState=y}}function ra(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var rr={},dn=Dn(rr),lr=Dn(rr),ir=Dn(rr);function qn(e){if(e===rr)throw Error(h(174));return e}function Ri(e,n){switch(Q(ir,n),Q(lr,e),Q(dn,rr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ml(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ml(n,e)}G(dn),Q(dn,n)}function _t(){G(dn),G(lr),G(ir)}function la(e){qn(ir.current);var n=qn(dn.current),t=Ml(n,e.type);n!==t&&(Q(lr,e),Q(dn,t))}function Mi(e){lr.current===e&&(G(dn),G(lr))}var q=Dn(0);function br(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Di=[];function Oi(){for(var e=0;e<Di.length;e++)Di[e]._workInProgressVersionPrimary=null;Di.length=0}var el=ge.ReactCurrentDispatcher,Fi=ge.ReactCurrentBatchConfig,bn=0,b=null,oe=null,ue=null,nl=!1,or=!1,sr=0,$c=0;function ve(){throw Error(h(321))}function Ii(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!be(e[t],n[t]))return!1;return!0}function ji(e,n,t,r,l,i){if(bn=i,b=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,el.current=e===null||e.memoizedState===null?Xc:Zc,e=t(r,l),or){i=0;do{if(or=!1,sr=0,25<=i)throw Error(h(301));i+=1,ue=oe=null,n.updateQueue=null,el.current=Jc,e=t(r,l)}while(or)}if(el.current=ll,n=oe!==null&&oe.next!==null,bn=0,ue=oe=b=null,nl=!1,n)throw Error(h(300));return e}function Bi(){var e=sr!==0;return sr=0,e}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?b.memoizedState=ue=e:ue=ue.next=e,ue}function Ke(){if(oe===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var n=ue===null?b.memoizedState:ue.next;if(n!==null)ue=n,oe=e;else{if(e===null)throw Error(h(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?b.memoizedState=ue=e:ue=ue.next=e}return ue}function ar(e,n){return typeof n=="function"?n(e):n}function Ai(e){var n=Ke(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=oe,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,p=i;do{var v=p.lane;if((bn&v)===v)a!==null&&(a=a.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var y={lane:v,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};a===null?(s=a=y,o=r):a=a.next=y,b.lanes|=v,et|=v}p=p.next}while(p!==null&&p!==i);a===null?o=r:a.next=s,be(r,n.memoizedState)||(ze=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,b.lanes|=i,et|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ui(e){var n=Ke(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);be(i,n.memoizedState)||(ze=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function ia(){}function oa(e,n){var t=b,r=Ke(),l=n(),i=!be(r.memoizedState,l);if(i&&(r.memoizedState=l,ze=!0),r=r.queue,Vi(ua.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ue!==null&&ue.memoizedState.tag&1){if(t.flags|=2048,ur(9,aa.bind(null,t,r,l,n),void 0,null),ce===null)throw Error(h(349));(bn&30)!==0||sa(t,n,l)}return l}function sa(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=b.updateQueue,n===null?(n={lastEffect:null,stores:null},b.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function aa(e,n,t,r){n.value=t,n.getSnapshot=r,ca(n)&&da(e)}function ua(e,n,t){return t(function(){ca(n)&&da(e)})}function ca(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!be(e,t)}catch{return!0}}function da(e){var n=kn(e,1);n!==null&&ln(n,e,1,-1)}function fa(e){var n=fn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},n.queue=e,e=e.dispatch=Yc.bind(null,b,e),[n.memoizedState,e]}function ur(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=b.updateQueue,n===null?(n={lastEffect:null,stores:null},b.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function pa(){return Ke().memoizedState}function tl(e,n,t,r){var l=fn();b.flags|=e,l.memoizedState=ur(1|n,t,void 0,r===void 0?null:r)}function rl(e,n,t,r){var l=Ke();r=r===void 0?null:r;var i=void 0;if(oe!==null){var o=oe.memoizedState;if(i=o.destroy,r!==null&&Ii(r,o.deps)){l.memoizedState=ur(n,t,i,r);return}}b.flags|=e,l.memoizedState=ur(1|n,t,i,r)}function ha(e,n){return tl(8390656,8,e,n)}function Vi(e,n){return rl(2048,8,e,n)}function ga(e,n){return rl(4,2,e,n)}function ma(e,n){return rl(4,4,e,n)}function va(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ya(e,n,t){return t=t!=null?t.concat([e]):null,rl(4,4,va.bind(null,n,e),t)}function Hi(){}function wa(e,n){var t=Ke();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ii(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function xa(e,n){var t=Ke();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ii(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function ka(e,n,t){return(bn&21)===0?(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=t):(be(t,n)||(t=Jo(),b.lanes|=t,et|=t,e.baseState=!0),n)}function Kc(e,n){var t=U;U=t!==0&&4>t?t:4,e(!0);var r=Fi.transition;Fi.transition={};try{e(!1),n()}finally{U=t,Fi.transition=r}}function Sa(){return Ke().memoizedState}function Gc(e,n,t){var r=Vn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ca(e))Ea(n,t);else if(t=ea(e,n,t,r),t!==null){var l=Ce();ln(t,e,r,l),_a(t,n,r)}}function Yc(e,n,t){var r=Vn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ca(e))Ea(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,s=i(o,t);if(l.hasEagerState=!0,l.eagerState=s,be(s,o)){var a=n.interleaved;a===null?(l.next=l,Li(n)):(l.next=a.next,a.next=l),n.interleaved=l;return}}catch{}finally{}t=ea(e,n,l,r),t!==null&&(l=Ce(),ln(t,e,r,l),_a(t,n,r))}}function Ca(e){var n=e.alternate;return e===b||n!==null&&n===b}function Ea(e,n){or=nl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function _a(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ql(e,t)}}var ll={readContext:$e,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},Xc={readContext:$e,useCallback:function(e,n){return fn().memoizedState=[e,n===void 0?null:n],e},useContext:$e,useEffect:ha,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,tl(4194308,4,va.bind(null,n,e),t)},useLayoutEffect:function(e,n){return tl(4194308,4,e,n)},useInsertionEffect:function(e,n){return tl(4,2,e,n)},useMemo:function(e,n){var t=fn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=fn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Gc.bind(null,b,e),[r.memoizedState,e]},useRef:function(e){var n=fn();return e={current:e},n.memoizedState=e},useState:fa,useDebugValue:Hi,useDeferredValue:function(e){return fn().memoizedState=e},useTransition:function(){var e=fa(!1),n=e[0];return e=Kc.bind(null,e[1]),fn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=b,l=fn();if(Z){if(t===void 0)throw Error(h(407));t=t()}else{if(t=n(),ce===null)throw Error(h(349));(bn&30)!==0||sa(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,ha(ua.bind(null,r,i,e),[e]),r.flags|=2048,ur(9,aa.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=fn(),n=ce.identifierPrefix;if(Z){var t=xn,r=wn;t=(r&~(1<<32-qe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=sr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=$c++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Zc={readContext:$e,useCallback:wa,useContext:$e,useEffect:Vi,useImperativeHandle:ya,useInsertionEffect:ga,useLayoutEffect:ma,useMemo:xa,useReducer:Ai,useRef:pa,useState:function(){return Ai(ar)},useDebugValue:Hi,useDeferredValue:function(e){var n=Ke();return ka(n,oe.memoizedState,e)},useTransition:function(){var e=Ai(ar)[0],n=Ke().memoizedState;return[e,n]},useMutableSource:ia,useSyncExternalStore:oa,useId:Sa,unstable_isNewReconciler:!1},Jc={readContext:$e,useCallback:wa,useContext:$e,useEffect:Vi,useImperativeHandle:ya,useInsertionEffect:ga,useLayoutEffect:ma,useMemo:xa,useReducer:Ui,useRef:pa,useState:function(){return Ui(ar)},useDebugValue:Hi,useDeferredValue:function(e){var n=Ke();return oe===null?n.memoizedState=e:ka(n,oe.memoizedState,e)},useTransition:function(){var e=Ui(ar)[0],n=Ke().memoizedState;return[e,n]},useMutableSource:ia,useSyncExternalStore:oa,useId:Sa,unstable_isNewReconciler:!1};function nn(e,n){if(e&&e.defaultProps){n=C({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Wi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:C({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var il={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ce(),l=Vn(e),i=Sn(r,l);i.payload=n,t!=null&&(i.callback=t),n=jn(e,i,l),n!==null&&(ln(n,e,l,r),Jr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ce(),l=Vn(e),i=Sn(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=jn(e,i,l),n!==null&&(ln(n,e,l,r),Jr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ce(),r=Vn(e),l=Sn(t,r);l.tag=2,n!=null&&(l.callback=n),n=jn(e,l,r),n!==null&&(ln(n,e,r,t),Jr(n,e,r))}};function Pa(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Xt(t,r)||!Xt(l,i):!0}function Na(e,n,t){var r=!1,l=On,i=n.contextType;return typeof i=="object"&&i!==null?i=$e(i):(l=Ne(n)?Yn:me.current,r=n.contextTypes,i=(r=r!=null)?yt(e,l):On),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=il,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function za(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&il.enqueueReplaceState(n,n.state,null)}function Qi(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Ti(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=$e(i):(i=Ne(n)?Yn:me.current,l.context=yt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Wi(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&il.enqueueReplaceState(l,l.state,null),qr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Pt(e,n){try{var t="",r=n;do t+=I(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function $i(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ki(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var qc=typeof WeakMap=="function"?WeakMap:Map;function La(e,n,t){t=Sn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){fl||(fl=!0,so=r),Ki(e,n)},t}function Ta(e,n,t){t=Sn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Ki(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ki(e,n),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Ra(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new qc;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=fd.bind(null,e,n,t),n.then(e,e))}function Ma(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Da(e,n,t,r,l){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Sn(-1,1),n.tag=2,jn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var bc=ge.ReactCurrentOwner,ze=!1;function Se(e,n,t,r){n.child=e===null?bs(n,null,t,r):St(n,e.child,t,r)}function Oa(e,n,t,r,l){t=t.render;var i=n.ref;return Et(n,l),r=ji(e,n,t,r,i,l),t=Bi(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Cn(e,n,l)):(Z&&t&&xi(n),n.flags|=1,Se(e,n,r,l),n.child)}function Fa(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!go(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Ia(e,n,i,r,l)):(e=yl(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,(e.lanes&l)===0){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Xt,t(o,r)&&e.ref===n.ref)return Cn(e,n,l)}return n.flags|=1,e=Wn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Ia(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Xt(i,r)&&e.ref===n.ref)if(ze=!1,n.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(ze=!0);else return n.lanes=e.lanes,Cn(e,n,l)}return Gi(e,n,t,r,l)}function ja(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(zt,Be),Be|=t;else{if((t&1073741824)===0)return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Q(zt,Be),Be|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,Q(zt,Be),Be|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,Q(zt,Be),Be|=r;return Se(e,n,l,t),n.child}function Ba(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Gi(e,n,t,r,l){var i=Ne(t)?Yn:me.current;return i=yt(n,i),Et(n,l),t=ji(e,n,t,r,i,l),r=Bi(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Cn(e,n,l)):(Z&&r&&xi(n),n.flags|=1,Se(e,n,t,l),n.child)}function Aa(e,n,t,r,l){if(Ne(t)){var i=!0;Wr(n)}else i=!1;if(Et(n,l),n.stateNode===null)sl(e,n),Na(n,t,r),Qi(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var a=o.context,p=t.contextType;typeof p=="object"&&p!==null?p=$e(p):(p=Ne(t)?Yn:me.current,p=yt(n,p));var v=t.getDerivedStateFromProps,y=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==p)&&za(n,o,r,p),In=!1;var g=n.memoizedState;o.state=g,qr(n,r,o,l),a=n.memoizedState,s!==r||g!==a||Pe.current||In?(typeof v=="function"&&(Wi(n,t,v,r),a=n.memoizedState),(s=In||Pa(n,t,s,r,g,a,p))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=p,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,na(e,n),s=n.memoizedProps,p=n.type===n.elementType?s:nn(n.type,s),o.props=p,y=n.pendingProps,g=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=$e(a):(a=Ne(t)?Yn:me.current,a=yt(n,a));var k=t.getDerivedStateFromProps;(v=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==y||g!==a)&&za(n,o,r,a),In=!1,g=n.memoizedState,o.state=g,qr(n,r,o,l);var E=n.memoizedState;s!==y||g!==E||Pe.current||In?(typeof k=="function"&&(Wi(n,t,k,r),E=n.memoizedState),(p=In||Pa(n,t,p,r,g,E,a)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=E),o.props=r,o.state=E,o.context=a,r=p):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return Yi(e,n,t,r,i,l)}function Yi(e,n,t,r,l,i){Ba(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&Qs(n,t,!1),Cn(e,n,i);r=n.stateNode,bc.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=St(n,e.child,null,i),n.child=St(n,null,s,i)):Se(e,n,s,i),n.memoizedState=r.state,l&&Qs(n,t,!0),n.child}function Ua(e){var n=e.stateNode;n.pendingContext?Hs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Hs(e,n.context,!1),Ri(e,n.containerInfo)}function Va(e,n,t,r,l){return kt(),Ei(l),n.flags|=256,Se(e,n,t,r),n.child}var Xi={dehydrated:null,treeContext:null,retryLane:0};function Zi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ha(e,n,t){var r=n.pendingProps,l=q.current,i=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Q(q,l&1),e===null)return Ci(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=wl(o,r,0,null),e=lt(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Zi(t),n.memoizedState=Xi,e):Ji(n,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return ed(e,n,o,r,s,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Wn(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Wn(s,i):(i=lt(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Zi(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Xi,r}return i=e.child,e=i.sibling,r=Wn(i,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ji(e,n){return n=wl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ol(e,n,t,r){return r!==null&&Ei(r),St(n,e.child,null,t),e=Ji(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ed(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=$i(Error(h(422))),ol(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=wl({mode:"visible",children:r.children},l,0,null),i=lt(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,(n.mode&1)!==0&&St(n,e.child,null,o),n.child.memoizedState=Zi(o),n.memoizedState=Xi,i);if((n.mode&1)===0)return ol(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(h(419)),r=$i(i,r,void 0),ol(e,n,o,r)}if(s=(o&e.childLanes)!==0,ze||s){if(r=ce,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|o))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,kn(e,l),ln(r,e,l,-1))}return ho(),r=$i(Error(h(421))),ol(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=pd.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,je=Mn(l.nextSibling),Ie=n,Z=!0,en=null,e!==null&&(We[Qe++]=wn,We[Qe++]=xn,We[Qe++]=Xn,wn=e.id,xn=e.overflow,Xn=n),n=Ji(n,r.children),n.flags|=4096,n)}function Wa(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),zi(e.return,n,t)}function qi(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Qa(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(Se(e,n,r.children,t),r=q.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wa(e,t,n);else if(e.tag===19)Wa(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(q,r),(n.mode&1)===0)n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&br(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),qi(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&br(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}qi(n,!0,t,null,i);break;case"together":qi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function sl(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Cn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),et|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(h(153));if(n.child!==null){for(e=n.child,t=Wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function nd(e,n,t){switch(n.tag){case 3:Ua(n),kt();break;case 5:la(n);break;case 1:Ne(n.type)&&Wr(n);break;case 4:Ri(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;Q(Xr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Q(q,q.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?Ha(e,n,t):(Q(q,q.current&1),e=Cn(e,n,t),e!==null?e.sibling:null);Q(q,q.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Qa(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Q(q,q.current),r)break;return null;case 22:case 23:return n.lanes=0,ja(e,n,t)}return Cn(e,n,t)}var $a,bi,Ka,Ga;$a=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},bi=function(){},Ka=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,qn(dn.current);var i=null;switch(t){case"input":l=zl(e,l),r=zl(e,r),i=[];break;case"select":l=C({},l,{value:void 0}),r=C({},r,{value:void 0}),i=[];break;case"textarea":l=Rl(e,l),r=Rl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}Dl(t,r);var o;t=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var s=l[p];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(V.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in r){var a=r[p];if(s=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&a!==s&&(a!=null||s!=null))if(p==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(i||(i=[]),i.push(p,t)),t=a;else p==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(p,a)):p==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(p,""+a):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(V.hasOwnProperty(p)?(a!=null&&p==="onScroll"&&K("scroll",e),i||s===a||(i=[])):(i=i||[]).push(p,a))}t&&(i=i||[]).push("style",t);var p=i;(n.updateQueue=p)&&(n.flags|=4)}},Ga=function(e,n,t,r){t!==r&&(n.flags|=4)};function cr(e,n){if(!Z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function td(e,n,t){var r=n.pendingProps;switch(ki(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(n),null;case 1:return Ne(n.type)&&Hr(),ye(n),null;case 3:return r=n.stateNode,_t(),G(Pe),G(me),Oi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,en!==null&&(co(en),en=null))),bi(e,n),ye(n),null;case 5:Mi(n);var l=qn(ir.current);if(t=n.type,e!==null&&n.stateNode!=null)Ka(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(h(166));return ye(n),null}if(e=qn(dn.current),Gr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[cn]=n,r[er]=i,e=(n.mode&1)!==0,t){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(l=0;l<Jt.length;l++)K(Jt[l],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":No(r,i),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},K("invalid",r);break;case"textarea":To(r,i),K("invalid",r)}Dl(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ar(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ar(r.textContent,s,e),l=["children",""+s]):V.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&K("scroll",r)}switch(t){case"input":mr(r),Lo(r,i,!0);break;case"textarea":mr(r),Mo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ur)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Do(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[cn]=n,e[er]=r,$a(e,n,!1,!1),n.stateNode=e;e:{switch(o=Ol(t,r),t){case"dialog":K("cancel",e),K("close",e),l=r;break;case"iframe":case"object":case"embed":K("load",e),l=r;break;case"video":case"audio":for(l=0;l<Jt.length;l++)K(Jt[l],e);l=r;break;case"source":K("error",e),l=r;break;case"img":case"image":case"link":K("error",e),K("load",e),l=r;break;case"details":K("toggle",e),l=r;break;case"input":No(e,r),l=zl(e,r),K("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=C({},r,{value:void 0}),K("invalid",e);break;case"textarea":To(e,r),l=Rl(e,r),K("invalid",e);break;default:l=r}Dl(t,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Io(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Oo(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Mt(e,a):typeof a=="number"&&Mt(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(V.hasOwnProperty(i)?a!=null&&i==="onScroll"&&K("scroll",e):a!=null&&Xe(e,i,a,o))}switch(t){case"input":mr(e),Lo(e,r,!1);break;case"textarea":mr(e),Mo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+A(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ot(e,!!r.multiple,i,!1):r.defaultValue!=null&&ot(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ye(n),null;case 6:if(e&&n.stateNode!=null)Ga(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(h(166));if(t=qn(ir.current),qn(dn.current),Gr(n)){if(r=n.stateNode,t=n.memoizedProps,r[cn]=n,(i=r.nodeValue!==t)&&(e=Ie,e!==null))switch(e.tag){case 3:Ar(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ar(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[cn]=n,n.stateNode=r}return ye(n),null;case 13:if(G(q),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&je!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Zs(),kt(),n.flags|=98560,i=!1;else if(i=Gr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[cn]=n}else kt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ye(n),i=!1}else en!==null&&(co(en),en=null),i=!0;if(!i)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(q.current&1)!==0?se===0&&(se=3):ho())),n.updateQueue!==null&&(n.flags|=4),ye(n),null);case 4:return _t(),bi(e,n),e===null&&qt(n.stateNode.containerInfo),ye(n),null;case 10:return Ni(n.type._context),ye(n),null;case 17:return Ne(n.type)&&Hr(),ye(n),null;case 19:if(G(q),i=n.memoizedState,i===null)return ye(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)cr(i,!1);else{if(se!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=br(e),o!==null){for(n.flags|=128,cr(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Q(q,q.current&1|2),n.child}e=e.sibling}i.tail!==null&&te()>Lt&&(n.flags|=128,r=!0,cr(i,!1),n.lanes=4194304)}else{if(!r)if(e=br(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Z)return ye(n),null}else 2*te()-i.renderingStartTime>Lt&&t!==1073741824&&(n.flags|=128,r=!0,cr(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=te(),n.sibling=null,t=q.current,Q(q,r?t&1|2:t&1),n):(ye(n),null);case 22:case 23:return po(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(Be&1073741824)!==0&&(ye(n),n.subtreeFlags&6&&(n.flags|=8192)):ye(n),null;case 24:return null;case 25:return null}throw Error(h(156,n.tag))}function rd(e,n){switch(ki(n),n.tag){case 1:return Ne(n.type)&&Hr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _t(),G(Pe),G(me),Oi(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Mi(n),null;case 13:if(G(q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(h(340));kt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(q),null;case 4:return _t(),null;case 10:return Ni(n.type._context),null;case 22:case 23:return po(),null;case 24:return null;default:return null}}var al=!1,we=!1,ld=typeof WeakSet=="function"?WeakSet:Set,S=null;function Nt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ne(e,n,r)}else t.current=null}function eo(e,n,t){try{t()}catch(r){ne(e,n,r)}}var Ya=!1;function id(e,n){if(fi=zr,e=Ps(),li(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,s=-1,a=-1,p=0,v=0,y=e,g=null;n:for(;;){for(var k;y!==t||l!==0&&y.nodeType!==3||(s=o+l),y!==i||r!==0&&y.nodeType!==3||(a=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(k=y.firstChild)!==null;)g=y,y=k;for(;;){if(y===e)break n;if(g===t&&++p===l&&(s=o),g===i&&++v===r&&(a=o),(k=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=k}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(pi={focusedElem:e,selectionRange:t},zr=!1,S=n;S!==null;)if(n=S,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,S=e;else for(;S!==null;){n=S;try{var E=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var _=E.memoizedProps,re=E.memoizedState,d=n.stateNode,u=d.getSnapshotBeforeUpdate(n.elementType===n.type?_:nn(n.type,_),re);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){ne(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,S=e;break}S=n.return}return E=Ya,Ya=!1,E}function dr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&eo(n,t,i)}l=l.next}while(l!==r)}}function ul(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function no(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Xa(e){var n=e.alternate;n!==null&&(e.alternate=null,Xa(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[cn],delete n[er],delete n[vi],delete n[Vc],delete n[Hc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Za(e){return e.tag===5||e.tag===3||e.tag===4}function Ja(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Za(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function to(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(to(e,n,t),e=e.sibling;e!==null;)to(e,n,t),e=e.sibling}function ro(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ro(e,n,t),e=e.sibling;e!==null;)ro(e,n,t),e=e.sibling}var fe=null,tn=!1;function Bn(e,n,t){for(t=t.child;t!==null;)qa(e,n,t),t=t.sibling}function qa(e,n,t){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Sr,t)}catch{}switch(t.tag){case 5:we||Nt(t,n);case 6:var r=fe,l=tn;fe=null,Bn(e,n,t),fe=r,tn=l,fe!==null&&(tn?(e=fe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):fe.removeChild(t.stateNode));break;case 18:fe!==null&&(tn?(e=fe,t=t.stateNode,e.nodeType===8?mi(e.parentNode,t):e.nodeType===1&&mi(e,t),Wt(e)):mi(fe,t.stateNode));break;case 4:r=fe,l=tn,fe=t.stateNode.containerInfo,tn=!0,Bn(e,n,t),fe=r,tn=l;break;case 0:case 11:case 14:case 15:if(!we&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&eo(t,n,o),l=l.next}while(l!==r)}Bn(e,n,t);break;case 1:if(!we&&(Nt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){ne(t,n,s)}Bn(e,n,t);break;case 21:Bn(e,n,t);break;case 22:t.mode&1?(we=(r=we)||t.memoizedState!==null,Bn(e,n,t),we=r):Bn(e,n,t);break;default:Bn(e,n,t)}}function ba(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ld),n.forEach(function(r){var l=hd.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function rn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:fe=s.stateNode,tn=!1;break e;case 3:fe=s.stateNode.containerInfo,tn=!0;break e;case 4:fe=s.stateNode.containerInfo,tn=!0;break e}s=s.return}if(fe===null)throw Error(h(160));qa(i,o,l),fe=null,tn=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(p){ne(l,n,p)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)eu(n,e),n=n.sibling}function eu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rn(n,e),pn(e),r&4){try{dr(3,e,e.return),ul(3,e)}catch(_){ne(e,e.return,_)}try{dr(5,e,e.return)}catch(_){ne(e,e.return,_)}}break;case 1:rn(n,e),pn(e),r&512&&t!==null&&Nt(t,t.return);break;case 5:if(rn(n,e),pn(e),r&512&&t!==null&&Nt(t,t.return),e.flags&32){var l=e.stateNode;try{Mt(l,"")}catch(_){ne(e,e.return,_)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&zo(l,i),Ol(s,o);var p=Ol(s,i);for(o=0;o<a.length;o+=2){var v=a[o],y=a[o+1];v==="style"?Io(l,y):v==="dangerouslySetInnerHTML"?Oo(l,y):v==="children"?Mt(l,y):Xe(l,v,y,p)}switch(s){case"input":Ll(l,i);break;case"textarea":Ro(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?ot(l,!!i.multiple,k,!1):g!==!!i.multiple&&(i.defaultValue!=null?ot(l,!!i.multiple,i.defaultValue,!0):ot(l,!!i.multiple,i.multiple?[]:"",!1))}l[er]=i}catch(_){ne(e,e.return,_)}}break;case 6:if(rn(n,e),pn(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(_){ne(e,e.return,_)}}break;case 3:if(rn(n,e),pn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Wt(n.containerInfo)}catch(_){ne(e,e.return,_)}break;case 4:rn(n,e),pn(e);break;case 13:rn(n,e),pn(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(oo=te())),r&4&&ba(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(we=(p=we)||v,rn(n,e),we=p):rn(n,e),pn(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!v&&(e.mode&1)!==0)for(S=e,v=e.child;v!==null;){for(y=S=v;S!==null;){switch(g=S,k=g.child,g.tag){case 0:case 11:case 14:case 15:dr(4,g,g.return);break;case 1:Nt(g,g.return);var E=g.stateNode;if(typeof E.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,E.props=n.memoizedProps,E.state=n.memoizedState,E.componentWillUnmount()}catch(_){ne(r,t,_)}}break;case 5:Nt(g,g.return);break;case 22:if(g.memoizedState!==null){ru(y);continue}}k!==null?(k.return=g,S=k):ru(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{l=y.stateNode,p?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=y.stateNode,a=y.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Fo("display",o))}catch(_){ne(e,e.return,_)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=p?"":y.memoizedProps}catch(_){ne(e,e.return,_)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:rn(n,e),pn(e),r&4&&ba(e);break;case 21:break;default:rn(n,e),pn(e)}}function pn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Za(t)){var r=t;break e}t=t.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Mt(l,""),r.flags&=-33);var i=Ja(e);ro(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Ja(e);to(e,s,o);break;default:throw Error(h(161))}}catch(a){ne(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function od(e,n,t){S=e,nu(e)}function nu(e,n,t){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||al;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||we;s=al;var p=we;if(al=o,(we=a)&&!p)for(S=l;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?lu(l):a!==null?(a.return=o,S=a):lu(l);for(;i!==null;)S=i,nu(i),i=i.sibling;S=l,al=s,we=p}tu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,S=i):tu(e)}}function tu(e){for(;S!==null;){var n=S;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:we||ul(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!we)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:nn(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&ra(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ra(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var v=p.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&Wt(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}we||n.flags&512&&no(n)}catch(g){ne(n,n.return,g)}}if(n===e){S=null;break}if(t=n.sibling,t!==null){t.return=n.return,S=t;break}S=n.return}}function ru(e){for(;S!==null;){var n=S;if(n===e){S=null;break}var t=n.sibling;if(t!==null){t.return=n.return,S=t;break}S=n.return}}function lu(e){for(;S!==null;){var n=S;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ul(4,n)}catch(a){ne(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(a){ne(n,l,a)}}var i=n.return;try{no(n)}catch(a){ne(n,i,a)}break;case 5:var o=n.return;try{no(n)}catch(a){ne(n,o,a)}}}catch(a){ne(n,n.return,a)}if(n===e){S=null;break}var s=n.sibling;if(s!==null){s.return=n.return,S=s;break}S=n.return}}var sd=Math.ceil,cl=ge.ReactCurrentDispatcher,lo=ge.ReactCurrentOwner,Ge=ge.ReactCurrentBatchConfig,F=0,ce=null,ie=null,pe=0,Be=0,zt=Dn(0),se=0,fr=null,et=0,dl=0,io=0,pr=null,Le=null,oo=0,Lt=1/0,En=null,fl=!1,so=null,An=null,pl=!1,Un=null,hl=0,hr=0,ao=null,gl=-1,ml=0;function Ce(){return(F&6)!==0?te():gl!==-1?gl:gl=te()}function Vn(e){return(e.mode&1)===0?1:(F&2)!==0&&pe!==0?pe&-pe:Qc.transition!==null?(ml===0&&(ml=Jo()),ml):(e=U,e!==0||(e=window.event,e=e===void 0?16:os(e.type)),e)}function ln(e,n,t,r){if(50<hr)throw hr=0,ao=null,Error(h(185));Bt(e,t,r),((F&2)===0||e!==ce)&&(e===ce&&((F&2)===0&&(dl|=t),se===4&&Hn(e,pe)),Te(e,r),t===1&&F===0&&(n.mode&1)===0&&(Lt=te()+500,Qr&&Fn()))}function Te(e,n){var t=e.callbackNode;Qu(e,n);var r=_r(e,e===ce?pe:0);if(r===0)t!==null&&Yo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Yo(t),n===1)e.tag===0?Wc(ou.bind(null,e)):$s(ou.bind(null,e)),Ac(function(){(F&6)===0&&Fn()}),t=null;else{switch(qo(r)){case 1:t=Vl;break;case 4:t=Xo;break;case 16:t=kr;break;case 536870912:t=Zo;break;default:t=kr}t=hu(t,iu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function iu(e,n){if(gl=-1,ml=0,(F&6)!==0)throw Error(h(327));var t=e.callbackNode;if(Tt()&&e.callbackNode!==t)return null;var r=_r(e,e===ce?pe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=vl(e,r);else{n=r;var l=F;F|=2;var i=au();(ce!==e||pe!==n)&&(En=null,Lt=te()+500,tt(e,n));do try{cd();break}catch(s){su(e,s)}while(!0);Pi(),cl.current=i,F=l,ie!==null?n=0:(ce=null,pe=0,n=se)}if(n!==0){if(n===2&&(l=Hl(e),l!==0&&(r=l,n=uo(e,l))),n===1)throw t=fr,tt(e,0),Hn(e,r),Te(e,te()),t;if(n===6)Hn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!ad(l)&&(n=vl(e,r),n===2&&(i=Hl(e),i!==0&&(r=i,n=uo(e,i))),n===1))throw t=fr,tt(e,0),Hn(e,r),Te(e,te()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(h(345));case 2:rt(e,Le,En);break;case 3:if(Hn(e,r),(r&130023424)===r&&(n=oo+500-te(),10<n)){if(_r(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=gi(rt.bind(null,e,Le,En),n);break}rt(e,Le,En);break;case 4:if(Hn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-qe(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sd(r/1960))-r,10<r){e.timeoutHandle=gi(rt.bind(null,e,Le,En),r);break}rt(e,Le,En);break;case 5:rt(e,Le,En);break;default:throw Error(h(329))}}}return Te(e,te()),e.callbackNode===t?iu.bind(null,e):null}function uo(e,n){var t=pr;return e.current.memoizedState.isDehydrated&&(tt(e,n).flags|=256),e=vl(e,n),e!==2&&(n=Le,Le=t,n!==null&&co(n)),e}function co(e){Le===null?Le=e:Le.push.apply(Le,e)}function ad(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!be(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Hn(e,n){for(n&=~io,n&=~dl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-qe(n),r=1<<t;e[t]=-1,n&=~r}}function ou(e){if((F&6)!==0)throw Error(h(327));Tt();var n=_r(e,0);if((n&1)===0)return Te(e,te()),null;var t=vl(e,n);if(e.tag!==0&&t===2){var r=Hl(e);r!==0&&(n=r,t=uo(e,r))}if(t===1)throw t=fr,tt(e,0),Hn(e,n),Te(e,te()),t;if(t===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,rt(e,Le,En),Te(e,te()),null}function fo(e,n){var t=F;F|=1;try{return e(n)}finally{F=t,F===0&&(Lt=te()+500,Qr&&Fn())}}function nt(e){Un!==null&&Un.tag===0&&(F&6)===0&&Tt();var n=F;F|=1;var t=Ge.transition,r=U;try{if(Ge.transition=null,U=1,e)return e()}finally{U=r,Ge.transition=t,F=n,(F&6)===0&&Fn()}}function po(){Be=zt.current,G(zt)}function tt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Bc(t)),ie!==null)for(t=ie.return;t!==null;){var r=t;switch(ki(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:_t(),G(Pe),G(me),Oi();break;case 5:Mi(r);break;case 4:_t();break;case 13:G(q);break;case 19:G(q);break;case 10:Ni(r.type._context);break;case 22:case 23:po()}t=t.return}if(ce=e,ie=e=Wn(e.current,null),pe=Be=n,se=0,fr=null,io=dl=et=0,Le=pr=null,Jn!==null){for(n=0;n<Jn.length;n++)if(t=Jn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}Jn=null}return e}function su(e,n){do{var t=ie;try{if(Pi(),el.current=ll,nl){for(var r=b.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}nl=!1}if(bn=0,ue=oe=b=null,or=!1,sr=0,lo.current=null,t===null||t.return===null){se=1,fr=n,ie=null;break}e:{var i=e,o=t.return,s=t,a=n;if(n=pe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var p=a,v=s,y=v.tag;if((v.mode&1)===0&&(y===0||y===11||y===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var k=Ma(o);if(k!==null){k.flags&=-257,Da(k,o,s,i,n),k.mode&1&&Ra(i,p,n),n=k,a=p;var E=n.updateQueue;if(E===null){var _=new Set;_.add(a),n.updateQueue=_}else E.add(a);break e}else{if((n&1)===0){Ra(i,p,n),ho();break e}a=Error(h(426))}}else if(Z&&s.mode&1){var re=Ma(o);if(re!==null){(re.flags&65536)===0&&(re.flags|=256),Da(re,o,s,i,n),Ei(Pt(a,s));break e}}i=a=Pt(a,s),se!==4&&(se=2),pr===null?pr=[i]:pr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=La(i,a,n);ta(i,d);break e;case 1:s=a;var u=i.type,f=i.stateNode;if((i.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(An===null||!An.has(f)))){i.flags|=65536,n&=-n,i.lanes|=n;var w=Ta(i,s,n);ta(i,w);break e}}i=i.return}while(i!==null)}cu(t)}catch(P){n=P,ie===t&&t!==null&&(ie=t=t.return);continue}break}while(!0)}function au(){var e=cl.current;return cl.current=ll,e===null?ll:e}function ho(){(se===0||se===3||se===2)&&(se=4),ce===null||(et&268435455)===0&&(dl&268435455)===0||Hn(ce,pe)}function vl(e,n){var t=F;F|=2;var r=au();(ce!==e||pe!==n)&&(En=null,tt(e,n));do try{ud();break}catch(l){su(e,l)}while(!0);if(Pi(),F=t,cl.current=r,ie!==null)throw Error(h(261));return ce=null,pe=0,se}function ud(){for(;ie!==null;)uu(ie)}function cd(){for(;ie!==null&&!Fu();)uu(ie)}function uu(e){var n=pu(e.alternate,e,Be);e.memoizedProps=e.pendingProps,n===null?cu(e):ie=n,lo.current=null}function cu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=td(t,n,Be),t!==null){ie=t;return}}else{if(t=rd(t,n),t!==null){t.flags&=32767,ie=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ie=null;return}}if(n=n.sibling,n!==null){ie=n;return}ie=n=e}while(n!==null);se===0&&(se=5)}function rt(e,n,t){var r=U,l=Ge.transition;try{Ge.transition=null,U=1,dd(e,n,t,r)}finally{Ge.transition=l,U=r}return null}function dd(e,n,t,r){do Tt();while(Un!==null);if((F&6)!==0)throw Error(h(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if($u(e,i),e===ce&&(ie=ce=null,pe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||pl||(pl=!0,hu(kr,function(){return Tt(),null})),i=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||i){i=Ge.transition,Ge.transition=null;var o=U;U=1;var s=F;F|=4,lo.current=null,id(e,t),eu(t,e),Rc(pi),zr=!!fi,pi=fi=null,e.current=t,od(t),Iu(),F=s,U=o,Ge.transition=i}else e.current=t;if(pl&&(pl=!1,Un=e,hl=l),i=e.pendingLanes,i===0&&(An=null),Au(t.stateNode),Te(e,te()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(fl)throw fl=!1,e=so,so=null,e;return(hl&1)!==0&&e.tag!==0&&Tt(),i=e.pendingLanes,(i&1)!==0?e===ao?hr++:(hr=0,ao=e):hr=0,Fn(),null}function Tt(){if(Un!==null){var e=qo(hl),n=Ge.transition,t=U;try{if(Ge.transition=null,U=16>e?16:e,Un===null)var r=!1;else{if(e=Un,Un=null,hl=0,(F&6)!==0)throw Error(h(331));var l=F;for(F|=4,S=e.current;S!==null;){var i=S,o=i.child;if((S.flags&16)!==0){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var p=s[a];for(S=p;S!==null;){var v=S;switch(v.tag){case 0:case 11:case 15:dr(8,v,i)}var y=v.child;if(y!==null)y.return=v,S=y;else for(;S!==null;){v=S;var g=v.sibling,k=v.return;if(Xa(v),v===p){S=null;break}if(g!==null){g.return=k,S=g;break}S=k}}}var E=i.alternate;if(E!==null){var _=E.child;if(_!==null){E.child=null;do{var re=_.sibling;_.sibling=null,_=re}while(_!==null)}}S=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:dr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,S=d;break e}S=i.return}}var u=e.current;for(S=u;S!==null;){o=S;var f=o.child;if((o.subtreeFlags&2064)!==0&&f!==null)f.return=o,S=f;else e:for(o=u;S!==null;){if(s=S,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:ul(9,s)}}catch(P){ne(s,s.return,P)}if(s===o){S=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,S=w;break e}S=s.return}}if(F=l,Fn(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Sr,e)}catch{}r=!0}return r}finally{U=t,Ge.transition=n}}return!1}function du(e,n,t){n=Pt(t,n),n=La(e,n,1),e=jn(e,n,1),n=Ce(),e!==null&&(Bt(e,1,n),Te(e,n))}function ne(e,n,t){if(e.tag===3)du(e,e,t);else for(;n!==null;){if(n.tag===3){du(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){e=Pt(t,e),e=Ta(n,e,1),n=jn(n,e,1),e=Ce(),n!==null&&(Bt(n,1,e),Te(n,e));break}}n=n.return}}function fd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ce(),e.pingedLanes|=e.suspendedLanes&t,ce===e&&(pe&t)===t&&(se===4||se===3&&(pe&130023424)===pe&&500>te()-oo?tt(e,0):io|=t),Te(e,n)}function fu(e,n){n===0&&((e.mode&1)===0?n=1:(n=Er,Er<<=1,(Er&130023424)===0&&(Er=4194304)));var t=Ce();e=kn(e,n),e!==null&&(Bt(e,n,t),Te(e,t))}function pd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),fu(e,t)}function hd(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(n),fu(e,t)}var pu;pu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Pe.current)ze=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return ze=!1,nd(e,n,t);ze=(e.flags&131072)!==0}else ze=!1,Z&&(n.flags&1048576)!==0&&Ks(n,Kr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;sl(e,n),e=n.pendingProps;var l=yt(n,me.current);Et(n,t),l=ji(null,n,r,e,l,t);var i=Bi();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ne(r)?(i=!0,Wr(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ti(n),l.updater=il,n.stateNode=l,l._reactInternals=n,Qi(n,r,e,t),n=Yi(null,n,r,!0,i,t)):(n.tag=0,Z&&i&&xi(n),Se(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(sl(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=md(r),e=nn(r,e),l){case 0:n=Gi(null,n,r,e,t);break e;case 1:n=Aa(null,n,r,e,t);break e;case 11:n=Oa(null,n,r,e,t);break e;case 14:n=Fa(null,n,r,nn(r.type,e),t);break e}throw Error(h(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:nn(r,l),Gi(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:nn(r,l),Aa(e,n,r,l,t);case 3:e:{if(Ua(n),e===null)throw Error(h(387));r=n.pendingProps,i=n.memoizedState,l=i.element,na(e,n),qr(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=Pt(Error(h(423)),n),n=Va(e,n,r,t,l);break e}else if(r!==l){l=Pt(Error(h(424)),n),n=Va(e,n,r,t,l);break e}else for(je=Mn(n.stateNode.containerInfo.firstChild),Ie=n,Z=!0,en=null,t=bs(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(kt(),r===l){n=Cn(e,n,t);break e}Se(e,n,r,t)}n=n.child}return n;case 5:return la(n),e===null&&Ci(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,hi(r,l)?o=null:i!==null&&hi(r,i)&&(n.flags|=32),Ba(e,n),Se(e,n,o,t),n.child;case 6:return e===null&&Ci(n),null;case 13:return Ha(e,n,t);case 4:return Ri(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=St(n,null,r,t):Se(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:nn(r,l),Oa(e,n,r,l,t);case 7:return Se(e,n,n.pendingProps,t),n.child;case 8:return Se(e,n,n.pendingProps.children,t),n.child;case 12:return Se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,Q(Xr,r._currentValue),r._currentValue=o,i!==null)if(be(i.value,o)){if(i.children===l.children&&!Pe.current){n=Cn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Sn(-1,t&-t),a.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var v=p.pending;v===null?a.next=a:(a.next=v.next,v.next=a),p.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),zi(i.return,t,n),s.lanes|=t;break}a=a.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(h(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),zi(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Se(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Et(n,t),l=$e(l),r=r(l),n.flags|=1,Se(e,n,r,t),n.child;case 14:return r=n.type,l=nn(r,n.pendingProps),l=nn(r.type,l),Fa(e,n,r,l,t);case 15:return Ia(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:nn(r,l),sl(e,n),n.tag=1,Ne(r)?(e=!0,Wr(n)):e=!1,Et(n,t),Na(n,r,l),Qi(n,r,l,t),Yi(null,n,r,!0,e,t);case 19:return Qa(e,n,t);case 22:return ja(e,n,t)}throw Error(h(156,n.tag))};function hu(e,n){return Go(e,n)}function gd(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,n,t,r){return new gd(e,n,t,r)}function go(e){return e=e.prototype,!(!e||!e.isReactComponent)}function md(e){if(typeof e=="function")return go(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sn)return 11;if(e===an)return 14}return 2}function Wn(e,n){var t=e.alternate;return t===null?(t=Ye(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function yl(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")go(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ee:return lt(t.children,l,i,n);case He:o=8,l|=8;break;case _n:return e=Ye(12,t,n,l|2),e.elementType=_n,e.lanes=i,e;case De:return e=Ye(13,t,n,l),e.elementType=De,e.lanes=i,e;case Je:return e=Ye(19,t,n,l),e.elementType=Je,e.lanes=i,e;case ee:return wl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mn:o=10;break e;case $n:o=9;break e;case sn:o=11;break e;case an:o=14;break e;case _e:o=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return n=Ye(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function lt(e,n,t,r){return e=Ye(7,e,r,n),e.lanes=t,e}function wl(e,n,t,r){return e=Ye(22,e,r,n),e.elementType=ee,e.lanes=t,e.stateNode={isHidden:!1},e}function mo(e,n,t){return e=Ye(6,e,null,n),e.lanes=t,e}function vo(e,n,t){return n=Ye(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function vd(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function yo(e,n,t,r,l,i,o,s,a){return e=new vd(e,n,t,s,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ye(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ti(i),e}function yd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function gu(e){if(!e)return On;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(h(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ne(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(h(171))}if(e.tag===1){var t=e.type;if(Ne(t))return Ws(e,t,n)}return n}function mu(e,n,t,r,l,i,o,s,a){return e=yo(t,r,!0,e,l,i,o,s,a),e.context=gu(null),t=e.current,r=Ce(),l=Vn(t),i=Sn(r,l),i.callback=n??null,jn(t,i,l),e.current.lanes=l,Bt(e,l,r),Te(e,r),e}function xl(e,n,t,r){var l=n.current,i=Ce(),o=Vn(l);return t=gu(t),n.context===null?n.context=t:n.pendingContext=t,n=Sn(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=jn(l,n,o),e!==null&&(ln(e,l,o,i),Jr(e,l,o)),o}function kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function wo(e,n){vu(e,n),(e=e.alternate)&&vu(e,n)}function wd(){return null}var yu=typeof reportError=="function"?reportError:function(e){console.error(e)};function xo(e){this._internalRoot=e}Sl.prototype.render=xo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(h(409));xl(e,n,null,null)},Sl.prototype.unmount=xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;nt(function(){xl(null,e,null,null)}),n[vn]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var n=ns();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ln.length&&n!==0&&n<Ln[t].priority;t++);Ln.splice(t,0,e),t===0&&ls(e)}};function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wu(){}function xd(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var p=kl(o);i.call(p)}}var o=mu(n,r,e,0,null,!1,!1,"",wu);return e._reactRootContainer=o,e[vn]=o.current,qt(e.nodeType===8?e.parentNode:e),nt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var p=kl(a);s.call(p)}}var a=yo(e,0,!1,null,null,!1,!1,"",wu);return e._reactRootContainer=a,e[vn]=a.current,qt(e.nodeType===8?e.parentNode:e),nt(function(){xl(n,a,t,r)}),a}function El(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=kl(o);s.call(a)}}xl(n,o,e,l)}else o=xd(t,n,e,l,r);return kl(o)}bo=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=jt(n.pendingLanes);t!==0&&(Ql(n,t|1),Te(n,te()),(F&6)===0&&(Lt=te()+500,Fn()))}break;case 13:nt(function(){var r=kn(e,1);if(r!==null){var l=Ce();ln(r,e,1,l)}}),wo(e,1)}},$l=function(e){if(e.tag===13){var n=kn(e,134217728);if(n!==null){var t=Ce();ln(n,e,134217728,t)}wo(e,134217728)}},es=function(e){if(e.tag===13){var n=Vn(e),t=kn(e,n);if(t!==null){var r=Ce();ln(t,e,n,r)}wo(e,n)}},ns=function(){return U},ts=function(e,n){var t=U;try{return U=e,n()}finally{U=t}},jl=function(e,n,t){switch(n){case"input":if(Ll(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Vr(r);if(!l)throw Error(h(90));Po(r),Ll(r,l)}}}break;case"textarea":Ro(e,t);break;case"select":n=t.value,n!=null&&ot(e,!!t.multiple,n,!1)}},Uo=fo,Vo=nt;var kd={usingClientEntryPoint:!1,Events:[nr,mt,Vr,Bo,Ao,fo]},gr={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sd={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$o(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||wd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Sr=_l.inject(Sd),un=_l}catch{}}return Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kd,Re.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ko(n))throw Error(h(200));return yd(e,n,null,t)},Re.createRoot=function(e,n){if(!ko(e))throw Error(h(299));var t=!1,r="",l=yu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=yo(e,1,!1,null,null,t,!1,r,l),e[vn]=n.current,qt(e.nodeType===8?e.parentNode:e),new xo(n)},Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=$o(n),e=e===null?null:e.stateNode,e},Re.flushSync=function(e){return nt(e)},Re.hydrate=function(e,n,t){if(!Cl(n))throw Error(h(200));return El(null,e,n,!0,t)},Re.hydrateRoot=function(e,n,t){if(!ko(e))throw Error(h(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=yu;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=mu(n,null,e,1,t??null,l,!1,i,o),e[vn]=n.current,qt(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Sl(n)},Re.render=function(e,n,t){if(!Cl(n))throw Error(h(200));return El(null,e,n,!1,t)},Re.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(h(40));return e._reactRootContainer?(nt(function(){El(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1},Re.unstable_batchedUpdates=fo,Re.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Cl(t))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return El(e,n,t,!1,r)},Re.version="18.3.1-next-f1338f8080-20240426",Re}var _u;function Td(){if(_u)return Co.exports;_u=1;function R(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R)}catch($){console.error($)}}return R(),Co.exports=Ld(),Co.exports}var Pu;function Rd(){if(Pu)return Pl;Pu=1;var R=Td();return Pl.createRoot=R.createRoot,Pl.hydrateRoot=R.hydrateRoot,Pl}var Md=Rd();const Dd=`<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Investigation Desk</title>
<!-- Tailwind CSS v3 -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<!-- Google Fonts for Vintage Investigation aesthetic -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&amp;family=Cinzel:wght@500;700;900&amp;family=Courier+Prime:ital,wght@0,400;0,700;1,400&amp;family=Playfair+Display:ital,wght@0,600;1,400&amp;display=swap" rel="stylesheet"/>
<!-- Core Layout & Desk Base Styles -->
<style data-purpose="desk-surfaces">
    :root {
      --wood-dark: #120703;
      --wood-mid: #25120a;
      --wood-warm: #3d1b0e;
      --spotlight-amber: rgba(255, 215, 145, 0.45);
      --red-john: #7e1215;
    }

    body {
      background-color: #080302;
      overflow-x: hidden;
      user-select: none;
      font-family: 'Courier Prime', monospace;
    }

    /* Polished Mahogany Table Surface with ambient woodgrain texture */
    .desk-wood-surface {
      background: 
        radial-gradient(circle at 50% 0%, rgba(255, 214, 153, 0.35) 0%, rgba(130, 60, 25, 0.15) 35%, rgba(18, 7, 3, 0.95) 80%),
        repeating-linear-gradient(90deg, #180905 0px, #2a130b 140px, #1a0a05 280px, #120603 420px);
      box-shadow: inset 0 0 160px 40px rgba(0, 0, 0, 0.95);
    }

    /* Overhead Cinematic Brass Lamp Shade & Spotlight Cones */
    .lamp-glow-cone {
      background: radial-gradient(ellipse at 50% 0%, 
        rgba(255, 238, 190, 0.85) 0%, 
        rgba(255, 195, 115, 0.5) 22%, 
        rgba(210, 110, 35, 0.18) 52%, 
        transparent 75%);
      mix-blend-mode: screen;
      pointer-events: none;
    }

    /* Central Executive Leather Desk Blotter */
    .blotter-pad {
      background: 
        radial-gradient(circle at 50% 15%, #18191b 0%, #0c0d0e 80%),
        repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 2px, transparent 2px, transparent 4px);
      box-shadow: 
        0 30px 60px -15px rgba(0, 0, 0, 0.9),
        0 4px 12px rgba(0, 0, 0, 0.8),
        inset 0 1px 1px rgba(255, 255, 255, 0.08),
        inset 0 -2px 6px rgba(0, 0, 0, 0.8);
    }

    /* Burgundy Leather Rails on Desk Pad Edges */
    .leather-rail-left {
      background: linear-gradient(90deg, #360a0f 0%, #4f1118 60%, #2f080c 100%);
      box-shadow: inset -1px 0 2px rgba(0,0,0,0.6), inset 1px 0 2px rgba(255,255,255,0.1);
      border-right: 1px dashed rgba(220, 160, 120, 0.35);
    }
    .leather-rail-right {
      background: linear-gradient(90deg, #2f080c 0%, #4f1118 40%, #360a0f 100%);
      box-shadow: inset 1px 0 2px rgba(0,0,0,0.6), inset -1px 0 2px rgba(255,255,255,0.1);
      border-left: 1px dashed rgba(220, 160, 120, 0.35);
    }
  </style>
<!-- Artifact Textures, Shadows and Distresses -->
<style data-purpose="artifact-styling">
    .paper-aged {
      background: #dfcfab;
      background-image: 
        radial-gradient(circle at 10% 20%, rgba(139, 90, 43, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 85% 80%, rgba(110, 60, 20, 0.22) 0%, transparent 55%),
        linear-gradient(135deg, rgba(255, 248, 220, 0.6) 0%, rgba(200, 175, 130, 0.7) 100%);
      color: #2b1f14;
    }

    .polaroid-frame {
      background: #eee8d5;
      box-shadow: 
        2px 8px 18px rgba(0, 0, 0, 0.75),
        0 1px 3px rgba(0, 0, 0, 0.6);
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
    }
    .polaroid-frame:hover {
      transform: translateY(-6px) scale(1.04) rotate(0deg) !important;
      box-shadow: 4px 16px 28px rgba(0, 0, 0, 0.85);
      z-index: 50 !important;
    }

    .playing-card {
      background: #f7f2e4;
      border: 1px solid #c9bda3;
      box-shadow: 2px 5px 12px rgba(0, 0, 0, 0.65);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .playing-card:hover {
      transform: translateY(-8px) scale(1.06) rotate(0deg) !important;
      box-shadow: 4px 14px 22px rgba(0, 0, 0, 0.85);
      z-index: 45 !important;
    }

    .chess-piece {
      filter: drop-shadow(4px 10px 8px rgba(0,0,0,0.85));
      transition: transform 0.2s ease;
    }
    .chess-piece:hover {
      transform: scale(1.08) translateY(-4px);
    }

    .red-john-symbol {
      mix-blend-mode: multiply;
      filter: drop-shadow(0 0 10px rgba(120, 10, 15, 0.45)) blur(0.35px);
      opacity: 0.68;
      transition: opacity 0.5s ease;
    }
    .red-john-symbol:hover {
      opacity: 0.95;
      filter: drop-shadow(0 0 14px rgba(180, 20, 25, 0.8));
    }

    /* Realistic string effect */
    .forensic-string {
      stroke: #c81d25;
      stroke-width: 1.8;
      stroke-linecap: round;
      filter: drop-shadow(1px 2px 2px rgba(0,0,0,0.7));
    }
  </style>
  <style data-purpose="responsive-investigation-desk">
    html,
    body {
      width: 100%;
      height: 100%;
      margin: 0;
    }

    body {
      width: 100vw;
      height: 100vh;
      height: 100dvh;
      min-height: 0 !important;
      padding: 0 !important;
      overflow: hidden;
    }

    #mentalist-desk {
      position: fixed;
      inset: 0;
      display: block;
      width: 100vw;
      height: 100vh;
      height: 100dvh;
      min-height: 0 !important;
      max-width: none;
      aspect-ratio: auto;
      border: 0;
      border-radius: 0;
    }

    .desk-canvas {
      position: absolute;
      top: 50%;
      left: 50%;
      display: flex;
      width: 1440px;
      height: 810px;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      border: 1px solid #292018;
      border-radius: 16px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
      transform: translate(-50%, -50%) scale(var(--desk-scale, 1));
      transform-origin: center;
    }

    .event-title-banner {
      position: absolute;
      z-index: 40;
      top: 12px;
      left: 50%;
      display: flex;
      width: 720px;
      min-height: 112px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 24px 8px;
      transform: translateX(-50%);
      border: 1px solid rgba(91, 66, 42, 0.45);
      background:
        radial-gradient(ellipse at 50% 0%, rgba(255, 255, 244, 0.58), transparent 70%),
        linear-gradient(180deg, #eee5ce 0%, #dfd1b3 100%);
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.52), inset 0 1px 0 rgba(255, 255, 255, 0.65);
      color: #211710;
      text-align: center;
    }

    .event-title-banner::before {
      position: absolute;
      top: -10px;
      left: 28px;
      width: 18px;
      height: 18px;
      border: 1px solid #681a1c;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 28%, #ff7268 0%, #c5232a 55%, #74171b 100%);
      box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.55);
      content: "";
    }

    .event-title-meta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      color: #625847;
      font-family: "Courier Prime", monospace;
      font-size: 11px;
      letter-spacing: 1.2px;
      text-transform: uppercase;
    }

    .event-title-stamp {
      padding: 3px 7px;
      border: 2px dashed rgba(139, 38, 40, 0.75);
      color: #8b2628;
      font-weight: 700;
      letter-spacing: 1.5px;
    }

    .event-title-file {
      white-space: nowrap;
    }

    .event-title-name {
      margin: 2px 0 1px;
      color: #17120e;
      font-family: "Cinzel", "Playfair Display", Georgia, serif;
      font-size: 46px;
      font-weight: 900;
      letter-spacing: 9px;
      line-height: 1.05;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.55);
    }

    .event-title-subtitle {
      width: 100%;
      margin: 0;
      padding-top: 5px;
      border-top: 1px solid rgba(90, 72, 48, 0.24);
      color: #655b4a;
      font-family: "Courier Prime", monospace;
      font-size: 9px;
      letter-spacing: 1px;
      line-height: 1.35;
      text-transform: uppercase;
    }

    .event-title-subtitle strong {
      color: #8b2628;
      font-weight: 700;
    }

    [data-purpose="executive-desk-blotter-container"] {
      height: 550px;
      min-height: 0;
    }

    #desk-stage {
      min-width: 0;
      padding: 10px;
    }

    .leaderboard-card {
      display: grid;
      width: 100%;
      height: 100%;
      min-width: 0;
      grid-template-rows: auto minmax(0, 1fr) auto;
      overflow: hidden;
      padding: 12px 20px 0;
      border: 1px solid rgba(106, 80, 46, 0.55);
      border-radius: 3px;
      background:
        radial-gradient(ellipse at 8% 5%, rgba(255, 248, 222, 0.72), transparent 38%),
        repeating-linear-gradient(0deg, rgba(104, 75, 34, 0.025) 0 1px, transparent 1px 4px),
        #e2d0a7;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.48), inset 0 0 0 3px rgba(255, 244, 211, 0.2);
      color: #281d12;
      font-family: "Courier Prime", monospace;
    }

    .standings-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding-bottom: 7px;
      border-bottom: 1px solid rgba(99, 75, 41, 0.25);
    }

    .standings-kicker {
      margin: 0 0 2px;
      color: #715b38;
      font-size: 9px;
      letter-spacing: 1.5px;
    }

    .standings-title {
      margin: 0;
      color: #21170f;
      font-family: "Playfair Display", Georgia, serif;
      font-size: 25px;
      font-weight: 900;
      line-height: 1.1;
    }

    .standings-subtitle {
      margin: 3px 0 0;
      color: #6f5b3a;
      font-family: "Space Grotesk", Arial, sans-serif;
      font-size: 11px;
    }

    .standings-live {
      display: flex;
      flex: 0 0 auto;
      align-items: center;
      gap: 6px;
      padding: 6px 8px;
      border: 1px solid rgba(107, 78, 39, 0.3);
      border-radius: 3px;
      color: #5c472b;
      font-size: 9px;
      letter-spacing: 0.5px;
      white-space: nowrap;
    }

    .standings-live::before {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #4a9b63;
      box-shadow: 0 0 0 2px rgba(74, 155, 99, 0.16);
      content: "";
    }

    .standings-table-wrap {
      min-height: 0;
      overflow-x: hidden;
      overflow-y: auto;
      scrollbar-color: rgba(99, 75, 41, 0.55) transparent;
      scrollbar-width: thin;
    }

    .standings-table-wrap::-webkit-scrollbar {
      width: 6px;
    }

    .standings-table-wrap::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background: rgba(99, 75, 41, 0.45);
    }

    .standings-table {
      width: 100%;
      height: 100%;
      border-collapse: separate;
      border-spacing: 0 1px;
      table-layout: fixed;
      text-align: left;
    }

    .standings-table thead {
      height: 25px;
      border-bottom: 1px solid rgba(99, 75, 41, 0.35);
    }

    .standings-table th {
      color: #715b38;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.8px;
    }

    .standings-table th:first-child,
    .standings-table td:first-child {
      width: 16%;
      padding-left: 6px;
    }

    .standings-table th:last-child,
    .standings-table td:last-child {
      width: 18%;
      padding-right: 8px;
      text-align: right;
    }

    .standings-table tbody tr {
      height: auto;
      box-shadow: inset 0 -1px rgba(99, 75, 41, 0.15);
      transition: background-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
    }

    .standings-table tbody tr:hover,
    .standings-table tbody tr:focus-visible {
      position: relative;
      z-index: 1;
      outline: none;
      background: rgba(255, 248, 222, 0.62);
      box-shadow: inset 3px 0 0 rgba(177, 139, 35, 0.72);
      transform: translateX(2px);
    }

    .standings-table tbody tr:focus-visible {
      box-shadow: inset 3px 0 0 #8b2628, 0 0 0 2px rgba(139, 38, 40, 0.38);
    }

    .standings-table tbody tr:last-child {
      border-bottom: 0;
    }

    .standings-table td {
      padding: 3px 0;
      font-family: "Space Grotesk", Arial, sans-serif;
      font-size: 13px;
      line-height: 1.25;
    }

    .standings-table td:nth-child(2) {
      padding-left: 8px;
    }

    .standing-rank {
      display: inline-grid;
      width: 20px;
      height: 20px;
      place-items: center;
      border: 1px solid rgba(99, 75, 41, 0.28);
      border-radius: 50%;
      background: rgba(255, 248, 222, 0.46);
      color: #594326;
      font-family: "Courier Prime", monospace;
      font-size: 11px;
      font-weight: 700;
    }

    .standing-rank.gold {
      border-color: #b18b23;
      background: #e6c24f;
      color: #38270d;
    }

    .standing-rank.silver {
      border-color: #919797;
      background: #c5c9c5;
    }

    .standing-rank.bronze {
      border-color: #ad7044;
      background: #ca8e5b;
      color: #2e1a0e;
    }

    .standing-team {
      display: flex;
      align-items: center;
      gap: 0;
      overflow: hidden;
      font-weight: 600;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .standing-points {
      color: #342417;
      font-family: "Courier Prime", monospace !important;
      font-size: 13px !important;
      font-weight: 700;
      font-variant-numeric: tabular-nums;
    }

    .standings-footer {
      display: grid;
      min-height: 27px;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      gap: 6px;
      border-top: 1px solid rgba(99, 75, 41, 0.22);
      color: #715b38;
      font-size: 9px;
    }

    .standings-updated {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .standings-updated::before {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #4a9b63;
      content: "";
    }

    .standings-count {
      text-align: center;
    }

    .standings-season {
      text-align: right;
    }

    [data-purpose="profiling-investigation-materials"] > .paper-aged:first-child {
      width: calc(100% - 8px);
      padding: 18px;
    }

    [data-purpose="profiling-investigation-materials"] > .paper-aged:nth-child(2) {
      width: calc(100% - 24px);
      padding: 14px;
    }

    [data-purpose="profiling-investigation-materials"] > .paper-aged p {
      font-size: 12px;
      line-height: 1.35;
    }

    [data-purpose="profiling-investigation-materials"] > .paper-aged:nth-child(2) .flex.gap-2 > div:first-child {
      width: 112px;
      height: 128px;
      flex: 0 0 auto;
    }

    [data-purpose="profiling-investigation-materials"] > .paper-aged:nth-child(2) .flex.gap-2 > div:last-child svg {
      width: 64px;
      height: 48px;
    }

    [data-purpose="profiling-investigation-materials"] > .flex.items-end.gap-2 > div {
      width: 84px;
      height: 84px;
    }

    [data-purpose="profiling-investigation-materials"] > .paper-aged:nth-child(2) > .flex.items-center > .flex-1 {
      font-size: 10px;
      line-height: 1.35;
    }

    [data-purpose="lower-evidence-row"] [title="Handwritten Cryptic Letter"] > div:nth-child(2) {
      font-size: 12px;
      line-height: 1.1;
    }

    @media (max-aspect-ratio: 4 / 3) {
      .desk-canvas {
        top: 0;
        left: 0;
        width: 100vw;
        height: 100dvh;
        transform: none;
      }

      .event-title-banner {
        top: 10px;
        width: min(680px, calc(100% - 36px));
        min-height: 0;
        padding: 8px 10px 7px;
      }

      .event-title-banner::before {
        top: -8px;
        left: 18px;
        width: 14px;
        height: 14px;
      }

      .event-title-meta {
        flex-wrap: wrap;
        gap: 4px 8px;
        font-size: clamp(7px, 2.2vw, 10px);
        letter-spacing: 0.7px;
      }

      .event-title-stamp {
        padding: 2px 4px;
      }

      .event-title-name {
        margin-top: 2px;
        font-size: clamp(26px, 8vw, 38px);
        letter-spacing: clamp(4px, 1.5vw, 7px);
      }

      .event-title-subtitle {
        padding-top: 5px;
        font-size: clamp(6px, 1.9vw, 9px);
        letter-spacing: 0.45px;
      }

      .desk-canvas > [data-purpose="profiling-investigation-materials"],
      .desk-canvas > [data-purpose="forensic-crime-scene-evidence"],
      .desk-canvas > [data-purpose="top-left-sleight-of-hand-artifacts"],
      .desk-canvas > [data-purpose="bottom-chess-and-cards"] {
        display: none !important;
      }

      [data-purpose="executive-desk-blotter-container"] {
        width: calc(100% - 20px) !important;
        height: min(66dvh, 620px) !important;
        position: absolute !important;
        top: 56%;
        left: 50%;
        margin: 0 !important;
        transform: translate(-50%, -50%) !important;
      }

      .leather-rail-left,
      .leather-rail-right {
        width: 16px !important;
        flex: 0 0 16px;
      }

      #desk-stage {
        padding: 7px;
      }

      .leaderboard-card {
        padding: 8px 8px 0;
      }

      .standings-header {
        padding-bottom: 5px;
      }

      .standings-kicker {
        font-size: clamp(6px, 1.7vw, 9px);
        letter-spacing: 0.8px;
      }

      .standings-title {
        font-size: clamp(14px, 3.5vw, 23px);
      }

      .standings-subtitle {
        font-size: clamp(8px, 2vw, 11px);
      }

      .standings-live {
        padding: 4px 5px;
        font-size: clamp(5px, 1.25vw, 8px);
      }

      .standings-table thead {
        height: 20px;
      }

      .standings-table th {
        font-size: clamp(6px, 1.5vw, 9px);
      }

      .standings-table th:first-child,
      .standings-table td:first-child {
        width: 17%;
        padding-left: 2px;
      }

      .standings-table th:last-child,
      .standings-table td:last-child {
        width: 17%;
        padding-right: 3px;
      }

      .standings-table tbody tr {
        height: auto;
      }

      .standings-table {
        border-spacing: 0 1px;
      }

      .standings-table td {
        padding: 3px 0;
      }

      .standings-table td:nth-child(2) {
        padding-left: 4px;
      }

      .standings-table td,
      .standing-points {
        font-size: clamp(8.5px, 2vw, 13px) !important;
      }

      .standing-rank {
        width: clamp(13px, 3vw, 18px);
        height: clamp(13px, 3vw, 18px);
        font-size: clamp(8px, 1.8vw, 11px);
      }

      .standings-footer {
        min-height: 21px;
        gap: 3px;
        font-size: clamp(6px, 1.45vw, 9px);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .standings-table tbody tr {
        transition: none;
      }
    }

    @media (max-height: 520px) and (min-aspect-ratio: 4 / 3) {
      [data-purpose="executive-desk-blotter-container"] {
        height: 520px;
      }

      .event-title-banner {
        top: 4px;
        min-height: 96px;
        padding-top: 6px;
        padding-bottom: 5px;
      }

      .event-title-name {
        font-size: 40px;
      }
    }
  </style>
</head>
<body class="min-h-screen text-amber-100 flex items-center justify-center p-2 md:p-6 lg:p-10 bg-black selection:bg-red-950 selection:text-white">
<!-- BEGIN: MasterDeskWorkspace -->
<main class="relative w-full max-w-[1440px] aspect-[16/9] min-h-[720px] rounded-2xl overflow-hidden desk-wood-surface border border-stone-800 shadow-2xl flex flex-col justify-between" id="mentalist-desk">
<div class="desk-canvas" id="desk-canvas">
<header class="event-title-banner" aria-label="Nexus 2.0 event heading">
  <div class="event-title-meta">
    <span class="event-title-stamp">DJS Consulting Group</span>
    <span class="event-title-file">File No. BGS-2026-NEXUS</span>
  </div>
  <h1 class="event-title-name">NEXUS 2.0</h1>
  <p class="event-title-subtitle">
    Case File Archive // Strategic Consulting Leaderboard
    <span aria-hidden="true"> · </span>
    <strong>Forensic Merit Division</strong>
  </p>
</header>
<!-- BEGIN: OverheadLampSpotlight -->
<div class="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-32 flex flex-col items-center pointer-events-none z-30" data-purpose="overhead-lamp-fixture">
<!-- Vintage brass lamp rim -->
<div class="w-48 h-12 rounded-full bg-gradient-to-b from-[#6b471c] via-[#d4af37] to-[#3a2208] shadow-[0_12px_35px_rgba(255,200,100,0.65)] border-b-2 border-amber-300"></div>
<!-- Blinding radial downward beam -->
<div class="absolute top-6 w-[860px] h-[720px] -translate-x-1/2 left-1/2 lamp-glow-cone rounded-full blur-2xl"></div>
</div>
<!-- END: OverheadLampSpotlight -->
<!-- BEGIN: RedJohnInsigniaWall -->
<!-- Faint bloody smiley insignia on dark wood wall in top right corner -->
<div class="absolute top-4 right-8 w-36 h-36 z-10 pointer-events-auto cursor-pointer" data-purpose="red-john-mark" title="Insignia of Red John">
<svg class="w-full h-full red-john-symbol" viewbox="0 0 100 100">
<!-- Bloody hand-drawn circle -->
<path d="M 50,8 C 74,7 93,26 92,51 C 91,76 72,94 48,93 C 24,92 7,72 8,48 C 9,23 27,9 50,8 Z" fill="none" stroke="#7e1215" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.2"></path>
<!-- Eye Left -->
<circle cx="35" cy="40" fill="#720f12" r="4.2"></circle>
<path d="M 35,44 Q 35,56 36,58" fill="none" opacity="0.8" stroke="#720f12" stroke-linecap="round" stroke-width="2.2"></path>
<!-- Eye Right -->
<circle cx="65" cy="40" fill="#720f12" r="4.2"></circle>
<path d="M 65,44 Q 65,58 64,62" fill="none" opacity="0.8" stroke="#720f12" stroke-linecap="round" stroke-width="2.2"></path>
<!-- Gruesome curved bloody smile with drip -->
<path d="M 28,63 Q 50,84 72,63" fill="none" stroke="#7e1215" stroke-linecap="round" stroke-width="5"></path>
<!-- Drips running down wood grain -->
<path d="M 50,73 Q 50.5,86 50,91" opacity="0.8" stroke="#7e1215" stroke-linecap="round" stroke-width="1.8"></path>
</svg>
</div>
<!-- END: RedJohnInsigniaWall -->
<!-- BEGIN: TopLeftCornerCardsAndChess -->
<!-- Antique playing cards fan & fallen black king/pawn -->
<div class="absolute top-5 left-6 z-20 flex items-start gap-4" data-purpose="top-left-sleight-of-hand-artifacts">
<!-- Cards Fan -->
<div class="relative w-36 h-40">
<!-- Card 1: Ace of Hearts -->
<div class="absolute left-0 top-2 w-20 h-28 rounded playing-card p-1 transform -rotate-12">
<div class="text-xs font-bold text-red-700 font-serif leading-none">A♥️</div>
<div class="w-full h-16 flex items-center justify-center text-red-700 text-2xl">♥️</div>
</div>
<!-- Card 2: King of Clubs -->
<div class="absolute left-6 top-0 w-20 h-28 rounded playing-card p-1 transform rotate-6 border-stone-300">
<div class="text-xs font-bold text-stone-900 font-serif leading-none">K♣️</div>
<div class="text-[9px] text-center text-stone-600 mt-1 uppercase font-serif tracking-tighter">Court Illusion</div>
<div class="w-full h-12 flex items-center justify-center text-stone-800 text-xl">♣️</div>
</div>
<!-- Card 3: Queen of Spades -->
<div class="absolute left-14 top-4 w-20 h-28 rounded playing-card p-1 transform rotate-24">
<div class="text-xs font-bold text-stone-900 font-serif leading-none">Q♠️</div>
<div class="w-full h-16 flex items-center justify-center text-stone-900 text-2xl">♠️</div>
</div>
</div>
<!-- Wooden Chess: Upright Pawn and Fallen Black King -->
<div class="relative w-32 h-24 mt-2 flex items-center">
<!-- Upright White Pawn (Boxwood) -->
<div class="chess-piece cursor-pointer" title="Boxwood Pawn">
<svg height="48" viewbox="0 0 34 48" width="34">
<ellipse cx="17" cy="11" fill="url(#boxwood-grad)" rx="8" ry="8" stroke="#4a3118" stroke-width="1"></ellipse>
<path d="M12,18 C13,24 10,29 8,39 L26,39 C24,29 21,24 22,18 Z" fill="url(#boxwood-grad)" stroke="#4a3118" stroke-width="1"></path>
<path d="M5,39 C5,39 4,45 17,45 C30,45 29,39 29,39 Z" fill="url(#boxwood-grad)" stroke="#3f2710" stroke-width="1.2"></path>
<defs>
<lineargradient id="boxwood-grad" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#eed8ae"></stop>
<stop offset="45%" stop-color="#fff1d4"></stop>
<stop offset="100%" stop-color="#b8935c"></stop>
</lineargradient>
</defs>
</svg>
</div>
<!-- Fallen Dark Stained King Piece -->
<div class="chess-piece cursor-pointer -rotate-75 translate-x-3 translate-y-4" title="Fallen Dark King">
<svg height="64" viewbox="0 0 42 64" width="42">
<!-- Cross -->
<path d="M20,2 L22,2 L22,8 L20,8 Z M17,4 L25,4 L25,6 L17,6 Z" fill="#d5aa6e"></path>
<!-- Finial & Crown -->
<path d="M15,9 C15,9 21,7 27,9 C28,15 30,17 31,21 L11,21 C12,17 14,15 15,9 Z" fill="url(#darkwood-grad)" stroke="#1a0b06" stroke-width="1"></path>
<!-- Body Profile -->
<path d="M14,21 C16,30 11,42 9,54 L33,54 C31,42 26,30 28,21 Z" fill="url(#darkwood-grad)" stroke="#1a0b06" stroke-width="1"></path>
<rect fill="url(#darkwood-grad)" height="7" rx="2" stroke="#120703" stroke-width="1" width="30" x="6" y="54"></rect>
<defs>
<lineargradient id="darkwood-grad" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#2a140d"></stop>
<stop offset="50%" stop-color="#552c1a"></stop>
<stop offset="100%" stop-color="#190904"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>
<!-- END: TopLeftCornerCardsAndChess -->
<!-- BEGIN: LeftPerimeterCaseFilesAndDiagrams -->
<div class="absolute left-3 top-28 bottom-6 w-72 flex flex-col justify-between pointer-events-auto z-20" data-purpose="profiling-investigation-materials">
<!-- Manila Case File Folder with CBI Behavioral Profiling -->
<div class="relative w-68 paper-aged rounded-r-lg p-3 shadow-2xl border-l-4 border-amber-900 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
<!-- File Header Tab -->
<div class="flex items-center justify-between border-b border-stone-500/40 pb-1.5 mb-2">
<span class="text-[11px] uppercase tracking-widest font-black text-red-900">Case File Note</span>
<div class="text-[8px] border border-stone-500 px-1 font-mono text-stone-700">EXH: 07-B</div>
</div>
<div class="text-[12px] font-bold text-stone-900 tracking-tight font-serif">Behavioral Profiling:</div>
<p class="text-[9.5px] text-stone-800 leading-tight mt-1 font-mono italic opacity-95">
          "Subject communicates high behavioral narcissism, deceptive cues in micro-tremors, pre-selected choices masked as spontaneous free will. Noticeable fixation on control..."
        </p>
<!-- Subtle CBI Official Stamp -->
<div class="mt-2 inline-block border-2 border-red-800 text-red-800 text-[8px] font-mono px-1 py-0.5 font-bold uppercase tracking-wider rotate-[-6deg] opacity-75">
          CBI CONSULTANT OBSERVATION
        </div>
</div>
<!-- Sepia Sketch: Patrick Jane Male Profile & Cranial Diagram -->
<div class="relative w-60 paper-aged p-2.5 rounded shadow-xl border border-stone-400 transform rotate-1 hover:rotate-0 transition-transform">
<div class="flex items-center justify-between text-[9px] font-mono uppercase text-stone-700 border-b border-stone-400 pb-1">
<span>Psychological Sketch</span>
<span>Fig. 14</span>
</div>
<div class="flex gap-2 mt-2 items-center">
<!-- Hand-drawn face illustration (Mentalist Jane likeness in line art) -->
<div class="w-24 h-28 bg-[#ede2c8] rounded border border-stone-400 p-1 flex items-center justify-center">
<svg class="w-full h-full opacity-85" viewbox="0 0 100 120">
<!-- Head contour -->
<path d="M50,15 C33,15 25,28 25,48 C25,72 35,92 50,95 C65,92 75,72 75,48 C75,28 67,15 50,15 Z" fill="none" stroke="#3d2a1b" stroke-width="1.6"></path>
<!-- Curly wavy hair locks -->
<path d="M24,42 C20,30 26,18 36,12 C44,7 58,8 65,13 C74,18 78,28 76,40 C72,25 64,18 50,18 C36,18 28,26 24,42 Z" fill="#4d3522" opacity="0.65"></path>
<path d="M28,24 Q38,14 54,20 Q68,14 74,28" fill="none" stroke="#3d2a1b" stroke-width="1.4"></path>
<!-- Eyebrows -->
<path d="M32,40 Q40,36 46,40" fill="none" stroke="#3d2a1b" stroke-width="1.8"></path>
<path d="M54,40 Q60,36 68,40" fill="none" stroke="#3d2a1b" stroke-width="1.8"></path>
<!-- Eyes with perceptive gaze -->
<ellipse cx="39" cy="45" fill="#2d1c10" rx="4" ry="2.2"></ellipse>
<ellipse cx="61" cy="45" fill="#2d1c10" rx="4" ry="2.2"></ellipse>
<!-- Nose line -->
<path d="M49,44 L48,58 L54,60" fill="none" stroke="#3d2a1b" stroke-width="1.3"></path>
<!-- Subtle knowing smile -->
<path d="M38,72 Q50,77 62,71" fill="none" stroke="#3d2a1b" stroke-width="1.8"></path>
<!-- Cheekbones and chin hatching -->
<path d="M45,80 Q50,83 55,80" fill="none" stroke="#3d2a1b" stroke-width="1"></path>
<line opacity="0.5" stroke="#5d422f" stroke-width="0.8" x1="30" x2="35" y1="58" y2="62"></line>
<line opacity="0.5" stroke="#5d422f" stroke-width="0.8" x1="70" x2="65" y1="58" y2="62"></line>
</svg>
</div>
<!-- Anatomical / Optical cranial diagrams -->
<div class="flex-1 space-y-1.5 text-[8.5px] font-mono text-stone-800">
<div class="font-bold text-stone-900 uppercase">Perceptual Cortex</div>
<div class="text-[7.5px] leading-tight text-stone-700">Rapid sensory assimilation, pupil dilation reflex, cold reading response mapping.</div>
<!-- Small cranial vector diagram -->
<svg class="w-12 h-8 stroke-stone-700 fill-none opacity-70" viewbox="0 0 50 35">
<circle cx="20" cy="18" r="14" stroke-width="1"></circle>
<path d="M10,18 H32 M20,6 V28" stroke-dasharray="1,2" stroke-width="0.8"></path>
<circle cx="34" cy="18" fill="#884433" r="3" stroke="none"></circle>
</svg>
</div>
</div>
</div>
<!-- Optical Illusion Vortex Patterns & Card Corner -->
<div class="flex items-end gap-2 -mb-2">
<!-- Illusion Disc 1 (Square Hypnotic Spiral) -->
<div class="w-16 h-16 bg-white border border-stone-800 shadow-lg p-0.5 transform -rotate-6 hover:rotate-45 transition-transform duration-700 cursor-pointer" title="Optical Illusion Stimulus">
<svg class="w-full h-full" viewbox="0 0 100 100">
<rect fill="#0c0c0c" height="100" width="100"></rect>
<polygon fill="#f5f5f5" points="10,10 90,10 90,90 10,90"></polygon>
<polygon fill="#0c0c0c" points="18,18 82,18 82,82 18,82"></polygon>
<polygon fill="#f5f5f5" points="25,25 75,25 75,75 25,75"></polygon>
<polygon fill="#0c0c0c" points="32,32 68,32 68,68 32,68"></polygon>
<polygon fill="#f5f5f5" points="38,38 62,38 62,62 38,62"></polygon>
<polygon fill="#0c0c0c" points="44,44 56,44 56,56 44,56"></polygon>
</svg>
</div>
<!-- Illusion Disc 2 (Concentric Tunnel) -->
<div class="w-16 h-16 bg-white border border-stone-800 shadow-lg p-0.5 transform rotate-6 hover:rotate-180 transition-transform duration-700 cursor-pointer" title="Perceptual Tunnel Pattern">
<svg class="w-full h-full" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="#111" r="48"></circle>
<circle cx="50" cy="50" fill="#eee" r="41"></circle>
<circle cx="50" cy="50" fill="#111" r="34"></circle>
<circle cx="50" cy="50" fill="#eee" r="27"></circle>
<circle cx="50" cy="50" fill="#111" r="20"></circle>
<circle cx="50" cy="50" fill="#eee" r="14"></circle>
<circle cx="50" cy="50" fill="#111" r="8"></circle>
</svg>
</div>
</div>
</div>
<!-- END: LeftPerimeterCaseFilesAndDiagrams -->
<!-- BEGIN: BottomLeftPerimeterChessAndCards -->
<!-- Fallen Knight, Pawn, and Six of Diamonds in bottom left area -->
<div class="absolute bottom-4 left-64 z-20 flex items-center gap-5" data-purpose="bottom-chess-and-cards">
<!-- Fallen Boxwood Knight -->
<div class="chess-piece cursor-pointer transform rotate-80 translate-y-2" title="Fallen Knight">
<svg height="52" viewbox="0 0 40 52" width="40">
<path d="M10,48 L32,48 C30,42 30,36 30,30 C30,22 28,14 24,9 C20,3 12,4 10,12 C9,17 12,21 10,25 C8,28 3,30 4,36 C5,41 7,46 10,48 Z" fill="url(#boxwood-knight)" stroke="#4a3118" stroke-width="1.2"></path>
<circle cx="14" cy="14" fill="#2d1706" r="1.6"></circle>
<path d="M12,22 C16,22 20,24 22,28" fill="none" stroke="#4a3118" stroke-width="1"></path>
<defs>
<lineargradient id="boxwood-knight" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#fff0d0"></stop>
<stop offset="50%" stop-color="#ddba82"></stop>
<stop offset="100%" stop-color="#9d733b"></stop>
</lineargradient>
</defs>
</svg>
</div>
<!-- Tumbled King Base -->
<div class="chess-piece cursor-pointer transform -rotate-45" title="Overturned Boxwood Pawn">
<svg height="42" viewbox="0 0 28 42" width="28">
<circle cx="14" cy="9" fill="url(#boxwood-grad)" r="7" stroke="#4a3118" stroke-width="1"></circle>
<path d="M10,16 C11,21 9,26 6,34 L22,34 C19,26 17,21 18,16 Z" fill="url(#boxwood-grad)" stroke="#4a3118" stroke-width="1"></path>
<rect fill="url(#boxwood-grad)" height="4" rx="1.5" stroke="#3f2710" stroke-width="1" width="20" x="4" y="34"></rect>
</svg>
</div>
<!-- Playing Card: Six of Diamonds -->
<div class="w-16 h-24 rounded playing-card p-1 transform rotate-12 -translate-y-3 cursor-pointer" title="Six of Diamonds">
<div class="text-[10px] font-bold text-red-600 font-serif leading-none">6♦️</div>
<div class="grid grid-cols-2 gap-1 px-1 py-1 text-center text-red-600 text-xs">
<span>♦️</span><span>♦️</span>
<span>♦️</span><span>♦️</span>
<span>♦️</span><span>♦️</span>
</div>
</div>
</div>
<!-- END: BottomLeftPerimeterChessAndCards -->
<!-- BEGIN: CentralBlotterWorkArea -->
<!-- Central dark executive desk pad -->
<div class="relative mx-auto my-auto w-full max-w-[820px] h-[550px] rounded-xl flex shadow-2xl z-10 border border-stone-800/80" data-purpose="executive-desk-blotter-container">
<!-- Left Burgundy Leather Border with Gold Stitching -->
<div class="w-12 h-full rounded-l-xl leather-rail-left flex flex-col items-center justify-between py-6">
<div class="w-1 h-3 rounded bg-amber-400/30"></div>
<div class="w-0.5 h-12 bg-amber-200/20"></div>
<div class="w-1 h-3 rounded bg-amber-400/30"></div>
</div>
<!-- Central leaderboard replacing the investigation-desk message -->
<div class="flex-1 h-full blotter-pad relative p-3" id="desk-stage">
<section class="leaderboard-card" aria-labelledby="standings-title">
  <header class="standings-header">
    <div>
      <p class="standings-kicker">SEASON 04 · TEAM STANDINGS</p>
      <h2 class="standings-title" id="standings-title">BEST TEAM LEADERBOARD</h2>
      <p class="standings-subtitle">The top teams, ranked by points earned this season.</p>
    </div>
    <span class="standings-live">SEASON IN PROGRESS</span>
  </header>

  <div class="standings-table-wrap">
    <table class="standings-table">
      <thead>
        <tr>
          <th scope="col">SERIAL NO.</th>
          <th scope="col">TEAM NAME</th>
          <th scope="col">POINTS <span aria-hidden="true">↓</span></th>
        </tr>
      </thead>
      <tbody>
        <tr tabindex="0"><td><span class="standing-rank gold">1</span></td><td class="standing-team">Golden Falcons</td><td class="standing-points">980</td></tr>
        <tr tabindex="0"><td><span class="standing-rank silver">2</span></td><td class="standing-team">Crimson Comets</td><td class="standing-points">945</td></tr>
        <tr tabindex="0"><td><span class="standing-rank bronze">3</span></td><td class="standing-team">Silver Wolves</td><td class="standing-points">910</td></tr>
        <tr tabindex="0"><td><span class="standing-rank">4</span></td><td class="standing-team">Emerald Eagles</td><td class="standing-points">875</td></tr>
        <tr tabindex="0"><td><span class="standing-rank">5</span></td><td class="standing-team">Midnight Mavericks</td><td class="standing-points">840</td></tr>
        <tr tabindex="0"><td><span class="standing-rank">6</span></td><td class="standing-team">Copper Cobras</td><td class="standing-points">805</td></tr>
        <tr tabindex="0"><td><span class="standing-rank">7</span></td><td class="standing-team">Royal Raiders</td><td class="standing-points">770</td></tr>
        <tr tabindex="0"><td><span class="standing-rank">8</span></td><td class="standing-team">Storm Breakers</td><td class="standing-points">735</td></tr>
        <tr tabindex="0"><td><span class="standing-rank">9</span></td><td class="standing-team">Iron Titans</td><td class="standing-points">700</td></tr>
        <tr tabindex="0"><td><span class="standing-rank">10</span></td><td class="standing-team">Neon Knights</td><td class="standing-points">665</td></tr>
        <tr tabindex="0"><td><span class="standing-rank">11</span></td><td class="standing-team">Amber Arrows</td><td class="standing-points">630</td></tr>
        <tr tabindex="0"><td><span class="standing-rank">12</span></td><td class="standing-team">Frost Giants</td><td class="standing-points">595</td></tr>
      </tbody>
    </table>
  </div>

  <footer class="standings-footer">
    <span class="standings-updated">Rankings updated just now</span>
    <span class="standings-count">Showing 1–12 of 12 teams</span>
    <span class="standings-season">TOP 15 · SEASON 04</span>
  </footer>
</section>
</div>
<!-- Right Burgundy Leather Border with Gold Stitching -->
<div class="w-12 h-full rounded-r-xl leather-rail-right flex flex-col items-center justify-between py-6">
<div class="w-1 h-3 rounded bg-amber-400/30"></div>
<div class="w-0.5 h-12 bg-amber-200/20"></div>
<div class="w-1 h-3 rounded bg-amber-400/30"></div>
</div>
</div>
<!-- END: CentralBlotterWorkArea -->
<!-- BEGIN: RightPerimeterCrimeSceneEvidenceBoard -->
<div class="absolute right-3 top-16 bottom-4 w-72 pointer-events-auto z-20 flex flex-col justify-between items-end" data-purpose="forensic-crime-scene-evidence">
<!-- Pinned Newspaper & Triangulated Forensic Polaroids with Red Forensic String -->
<div class="relative w-72 h-[360px]">
<!-- Background Torn Newspaper Article -->
<div class="absolute -top-3 right-2 w-64 p-3 bg-[#d8ccae] rounded shadow-lg border border-stone-400 transform rotate-3 select-none">
<div class="text-[13px] font-black uppercase tracking-tight text-black border-b border-stone-700 font-serif leading-none pb-0.5">
            CRIME SCENE POLICE
          </div>
<div class="text-[9px] uppercase font-bold text-stone-800 mt-1">Written forensic information clippings</div>
<p class="text-[8px] text-stone-700 font-serif leading-tight mt-1 line-clamp-3">
            Sacramento detectives cordoned off the residency late Thursday evening after anonymous coordinates led authorities to undisclosed artifacts...
          </p>
</div>
<!-- SVG Vector Forensic Red String connecting Polaroids -->
<svg class="absolute inset-0 w-full h-full pointer-events-none z-30" viewbox="0 0 288 320">
<!-- Pushpin 1 (Top Left) to Pushpin 2 (Top Right) -->
<line class="forensic-string" x1="52" x2="238" y1="92" y2="78"></line>
<!-- Pushpin 2 to Pushpin 3 (Center Bottom) -->
<line class="forensic-string" x1="238" x2="148" y1="78" y2="242"></line>
<!-- Pushpin 3 back to Pushpin 1 forming tension triangle -->
<line class="forensic-string" x1="148" x2="52" y1="242" y2="92"></line>
<!-- Golden Pushpin Heads with drop shadow -->
<circle cx="52" cy="92" fill="#e63946" r="4.5" stroke="#220205" stroke-width="1.2"></circle>
<circle cx="238" cy="78" fill="#e63946" r="4.5" stroke="#220205" stroke-width="1.2"></circle>
<circle cx="148" cy="242" fill="#e63946" r="4.5" stroke="#220205" stroke-width="1.2"></circle>
</svg>
<!-- Polaroid 1 (Top-Left): Pinned Crime Scene Origami / Clue -->
<div class="absolute top-10 left-2 w-36 polaroid-frame p-2 pb-5 transform -rotate-8 cursor-pointer z-20" title="Evidence Photo: Origami Swan">
<div class="w-full h-24 bg-stone-900 overflow-hidden flex items-center justify-center border border-stone-700">
<!-- Macro Origami Swan Drawing in grayscale -->
<svg class="w-18 h-18" viewbox="0 0 60 60">
<polygon fill="#aaa" opacity="0.9" points="10,40 30,10 45,35 25,48"></polygon>
<polygon fill="#fff" opacity="0.9" points="30,10 42,22 55,20 42,32"></polygon>
<polygon fill="#666" opacity="0.8" points="10,40 25,48 40,46 50,42"></polygon>
</svg>
</div>
<div class="text-[9px] font-mono text-stone-800 font-bold mt-1 tracking-tight text-center">EVID: 01-A SWAN</div>
</div>
<!-- Polaroid 2 (Top-Right): Crime Scene Room Angle -->
<div class="absolute top-8 right-1 w-36 polaroid-frame p-2 pb-5 transform rotate-6 cursor-pointer z-20" title="Evidence Photo: Chamber Corridor">
<div class="w-full h-24 bg-stone-950 overflow-hidden flex items-center justify-center border border-stone-700">
<!-- Crime scene room perspective lines -->
<svg class="w-full h-full stroke-stone-500 fill-none opacity-80" viewbox="0 0 60 60">
<rect height="50" stroke-width="1" width="50" x="5" y="5"></rect>
<line stroke-width="1" x1="5" x2="22" y1="5" y2="22"></line>
<line stroke-width="1" x1="55" x2="38" y1="5" y2="22"></line>
<line stroke-width="1" x1="5" x2="22" y1="55" y2="38"></line>
<line stroke-width="1" x1="55" x2="38" y1="55" y2="38"></line>
<rect height="16" stroke="#c81d25" stroke-width="1.2" width="16" x="22" y="22"></rect>
</svg>
</div>
<div class="text-[9px] font-mono text-stone-800 font-bold mt-1 tracking-tight text-center">LOC: NORTH FOYER</div>
</div>
<!-- Polaroid 3 (Bottom-Center): Forensic Detail -->
<div class="absolute bottom-4 left-20 w-40 polaroid-frame p-2.5 pb-6 transform rotate-2 cursor-pointer z-20" title="Evidence Photo: Smudge &amp; Entry Mark">
<div class="w-full h-24 bg-stone-900 overflow-hidden flex items-center justify-center border border-stone-700">
<svg class="w-20 h-16" viewbox="0 0 60 50">
<path d="M10,25 Q30,10 50,25 T20,40" fill="none" stroke="#777" stroke-width="2"></path>
<circle cx="32" cy="24" fill="#7e1215" opacity="0.8" r="5"></circle>
</svg>
</div>
<div class="text-[9px] font-mono text-stone-800 font-bold mt-1 text-center">LATENT RESIDUE #09</div>
</div>
</div>
<!-- Lower Evidence Tray: Hand-written Letter, Magnifying Glass, Latent Fingerprint, Dusting Tape -->
<div class="relative w-full flex items-end justify-between" data-purpose="lower-evidence-row">
<!-- Fingerprint Dusting Tape Roll -->
<div class="relative w-[72px] h-[72px] rounded-full border-4 border-stone-300 bg-stone-900 shadow-xl flex items-center justify-center transform -rotate-12 cursor-pointer" title="Fingerprint Lift Tape">
<div class="w-10 h-10 rounded-full border-2 border-dashed border-stone-500 bg-stone-800"></div>
<!-- Adhesive flap peeling off -->
<div class="absolute -right-3 -top-2 w-6 h-5 bg-stone-200/50 rounded-sm transform rotate-45 border border-stone-400"></div>
</div>
<!-- Brass & Polished Mahogany Magnifying Glass -->
<div class="relative w-[84px] h-36 transform rotate-45 -translate-y-4 -translate-x-3 z-30 cursor-pointer group" title="Inspect with Magnifying Glass">
<!-- Lens Rim -->
<div class="w-20 h-20 rounded-full border-4 border-[#cda250] bg-white/10 backdrop-blur-[1.5px] shadow-[0_8px_20px_rgba(0,0,0,0.85)] flex items-center justify-center group-hover:scale-110 transition-transform">
<!-- Glass Specular Highlight -->
<div class="w-16 h-16 rounded-full border-t-2 border-l-2 border-white/50 -rotate-45"></div>
</div>
<!-- Brass Ferrule and Wood Handle -->
<div class="w-3 h-4 bg-[#b88c32] mx-auto -mt-0.5 rounded-sm"></div>
<div class="w-3.5 h-16 bg-gradient-to-r from-[#210c05] via-[#4d2410] to-[#1a0803] mx-auto rounded-b-md shadow-md border-t border-[#7a481c]"></div>
</div>
<!-- Latent Fingerprint Lift Card & Handwritten Letter -->
<div class="relative flex flex-col items-end">
<!-- Latent Fingerprint Index Card -->
<div class="w-[92px] h-[112px] paper-aged p-2 rounded shadow-lg border border-stone-400 transform -rotate-6 mb-[-18px] mr-6 z-10 cursor-pointer" title="Forensic Latent Fingerprint">
<div class="text-[6.5px] font-mono text-stone-800 uppercase tracking-tight border-b border-stone-400">Fingerprint #38</div>
<!-- Realistic Latent Fingerprint Ridge Pattern in SVG -->
<div class="w-full h-18 flex items-center justify-center py-1">
<svg class="w-14 h-16 stroke-stone-900 fill-none opacity-90 stroke-[1.1]" viewbox="0 0 50 60">
<path d="M25,12 C21,12 18,15 18,19 C18,24 22,27 25,27 C28,27 32,24 32,19 C32,15 29,12 25,12 Z"></path>
<path d="M25,6 C17,6 12,11 12,19 C12,28 18,33 25,33 C32,33 38,28 38,19 C38,11 33,6 25,6 Z"></path>
<path d="M25,1 C13,1 7,8 7,19 C7,33 14,40 25,40 C36,40 43,33 43,19 C43,8 37,1 25,1 Z"></path>
<path d="M3,20 C3,37 11,47 25,47 C39,47 47,37 47,20"></path>
<path d="M2,30 C3,43 12,54 25,54 C38,54 47,43 48,30"></path>
</svg>
</div>
</div>
<!-- Vintage Handwritten Letter ("Dear...") -->
<div class="w-[136px] h-[208px] paper-aged p-3.5 rounded shadow-2xl border border-stone-400 transform rotate-3 z-10 cursor-pointer hover:rotate-0 transition-transform" title="Handwritten Cryptic Letter">
<div class="font-['Caveat'] text-[17px] font-bold text-stone-900 leading-none">Dear Patrick,</div>
<div class="font-['Caveat'] text-[12px] text-stone-800 leading-tight mt-1 space-y-0.5">
<p>I have observed and that what the human mind does in distress is quite predictable.</p>
<p>The rules of the game remain strictly mine. Do not look too closely at what you think you understand...</p>
</div>
<div class="mt-2 text-right font-['Caveat'] text-[14px] font-bold text-stone-900">
              - An Old Friend
            </div>
</div>
</div>
</div>
</div>
<!-- END: RightPerimeterCrimeSceneEvidenceBoard -->
</div>
</main>
<!-- END: MasterDeskWorkspace -->
<script data-purpose="responsive-desk-scaling">
    const deskCanvas = document.getElementById('desk-canvas');
    const portraitLayout = window.matchMedia('(max-aspect-ratio: 4/3)');

    function fitDeskToViewport() {
      document.body.classList.toggle('portrait-layout', portraitLayout.matches);
      const scale = Math.min(
        window.innerWidth / 1440,
        window.innerHeight / 810,
        1,
      );
      deskCanvas.style.setProperty('--desk-scale', scale);
    }

    window.addEventListener('resize', fitDeskToViewport);
    portraitLayout.addEventListener('change', fitDeskToViewport);
    fitDeskToViewport();
  <\/script>
</body></html>`;function Od(){return Nl.createElement("iframe",{className:"investigation-desk",title:"Investigation desk",srcDoc:Dd})}Md.createRoot(document.getElementById("root")).render(Nl.createElement(Nl.StrictMode,null,Nl.createElement(Od,null)));
