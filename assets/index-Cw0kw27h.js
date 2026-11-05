(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Zg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var qu={exports:{}},qo={},$u={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function P0(){if(fm)return pt;fm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(k){return k===null||typeof k!="object"?null:(k=g&&k[g]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(k,te,Ie){this.props=k,this.context=te,this.refs=E,this.updater=Ie||S}y.prototype.isReactComponent={},y.prototype.setState=function(k,te){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,te,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function x(){}x.prototype=y.prototype;function I(k,te,Ie){this.props=k,this.context=te,this.refs=E,this.updater=Ie||S}var L=I.prototype=new x;L.constructor=I,M(L,y.prototype),L.isPureReactComponent=!0;var A=Array.isArray,H=Object.prototype.hasOwnProperty,U={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function z(k,te,Ie){var Z,he={},Se=null,xe=null;if(te!=null)for(Z in te.ref!==void 0&&(xe=te.ref),te.key!==void 0&&(Se=""+te.key),te)H.call(te,Z)&&!N.hasOwnProperty(Z)&&(he[Z]=te[Z]);var Ae=arguments.length-2;if(Ae===1)he.children=Ie;else if(1<Ae){for(var Le=Array(Ae),$e=0;$e<Ae;$e++)Le[$e]=arguments[$e+2];he.children=Le}if(k&&k.defaultProps)for(Z in Ae=k.defaultProps,Ae)he[Z]===void 0&&(he[Z]=Ae[Z]);return{$$typeof:s,type:k,key:Se,ref:xe,props:he,_owner:U.current}}function C(k,te){return{$$typeof:s,type:k.type,key:te,ref:k.ref,props:k.props,_owner:k._owner}}function b(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function F(k){var te={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ie){return te[Ie]})}var ie=/\/+/g;function $(k,te){return typeof k=="object"&&k!==null&&k.key!=null?F(""+k.key):te.toString(36)}function ce(k,te,Ie,Z,he){var Se=typeof k;(Se==="undefined"||Se==="boolean")&&(k=null);var xe=!1;if(k===null)xe=!0;else switch(Se){case"string":case"number":xe=!0;break;case"object":switch(k.$$typeof){case s:case e:xe=!0}}if(xe)return xe=k,he=he(xe),k=Z===""?"."+$(xe,0):Z,A(he)?(Ie="",k!=null&&(Ie=k.replace(ie,"$&/")+"/"),ce(he,te,Ie,"",function($e){return $e})):he!=null&&(b(he)&&(he=C(he,Ie+(!he.key||xe&&xe.key===he.key?"":(""+he.key).replace(ie,"$&/")+"/")+k)),te.push(he)),1;if(xe=0,Z=Z===""?".":Z+":",A(k))for(var Ae=0;Ae<k.length;Ae++){Se=k[Ae];var Le=Z+$(Se,Ae);xe+=ce(Se,te,Ie,Le,he)}else if(Le=v(k),typeof Le=="function")for(k=Le.call(k),Ae=0;!(Se=k.next()).done;)Se=Se.value,Le=Z+$(Se,Ae++),xe+=ce(Se,te,Ie,Le,he);else if(Se==="object")throw te=String(k),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return xe}function le(k,te,Ie){if(k==null)return k;var Z=[],he=0;return ce(k,Z,"","",function(Se){return te.call(Ie,Se,he++)}),Z}function ae(k){if(k._status===-1){var te=k._result;te=te(),te.then(function(Ie){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ie)},function(Ie){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ie)}),k._status===-1&&(k._status=0,k._result=te)}if(k._status===1)return k._result.default;throw k._result}var oe={current:null},B={transition:null},ue={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:B,ReactCurrentOwner:U};function re(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:le,forEach:function(k,te,Ie){le(k,function(){te.apply(this,arguments)},Ie)},count:function(k){var te=0;return le(k,function(){te++}),te},toArray:function(k){return le(k,function(te){return te})||[]},only:function(k){if(!b(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},pt.Component=y,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=I,pt.StrictMode=i,pt.Suspense=d,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,pt.act=re,pt.cloneElement=function(k,te,Ie){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Z=M({},k.props),he=k.key,Se=k.ref,xe=k._owner;if(te!=null){if(te.ref!==void 0&&(Se=te.ref,xe=U.current),te.key!==void 0&&(he=""+te.key),k.type&&k.type.defaultProps)var Ae=k.type.defaultProps;for(Le in te)H.call(te,Le)&&!N.hasOwnProperty(Le)&&(Z[Le]=te[Le]===void 0&&Ae!==void 0?Ae[Le]:te[Le])}var Le=arguments.length-2;if(Le===1)Z.children=Ie;else if(1<Le){Ae=Array(Le);for(var $e=0;$e<Le;$e++)Ae[$e]=arguments[$e+2];Z.children=Ae}return{$$typeof:s,type:k.type,key:he,ref:Se,props:Z,_owner:xe}},pt.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},pt.createElement=z,pt.createFactory=function(k){var te=z.bind(null,k);return te.type=k,te},pt.createRef=function(){return{current:null}},pt.forwardRef=function(k){return{$$typeof:u,render:k}},pt.isValidElement=b,pt.lazy=function(k){return{$$typeof:m,_payload:{_status:-1,_result:k},_init:ae}},pt.memo=function(k,te){return{$$typeof:f,type:k,compare:te===void 0?null:te}},pt.startTransition=function(k){var te=B.transition;B.transition={};try{k()}finally{B.transition=te}},pt.unstable_act=re,pt.useCallback=function(k,te){return oe.current.useCallback(k,te)},pt.useContext=function(k){return oe.current.useContext(k)},pt.useDebugValue=function(){},pt.useDeferredValue=function(k){return oe.current.useDeferredValue(k)},pt.useEffect=function(k,te){return oe.current.useEffect(k,te)},pt.useId=function(){return oe.current.useId()},pt.useImperativeHandle=function(k,te,Ie){return oe.current.useImperativeHandle(k,te,Ie)},pt.useInsertionEffect=function(k,te){return oe.current.useInsertionEffect(k,te)},pt.useLayoutEffect=function(k,te){return oe.current.useLayoutEffect(k,te)},pt.useMemo=function(k,te){return oe.current.useMemo(k,te)},pt.useReducer=function(k,te,Ie){return oe.current.useReducer(k,te,Ie)},pt.useRef=function(k){return oe.current.useRef(k)},pt.useState=function(k){return oe.current.useState(k)},pt.useSyncExternalStore=function(k,te,Ie){return oe.current.useSyncExternalStore(k,te,Ie)},pt.useTransition=function(){return oe.current.useTransition()},pt.version="18.3.1",pt}var pm;function wd(){return pm||(pm=1,$u.exports=P0()),$u.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function I0(){if(mm)return qo;mm=1;var s=wd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,f){var m,g={},v=null,S=null;f!==void 0&&(v=""+f),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)i.call(d,m)&&!a.hasOwnProperty(m)&&(g[m]=d[m]);if(u&&u.defaultProps)for(m in d=u.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:u,key:v,ref:S,props:g,_owner:o.current}}return qo.Fragment=t,qo.jsx=c,qo.jsxs=c,qo}var gm;function L0(){return gm||(gm=1,qu.exports=I0()),qu.exports}var me=L0(),Wt=wd();const D0=Zg(Wt);var vl={},Ku={exports:{}},Fn={},Zu={exports:{}},Ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function N0(){return _m||(_m=1,(function(s){function e(B,ue){var re=B.length;B.push(ue);e:for(;0<re;){var k=re-1>>>1,te=B[k];if(0<o(te,ue))B[k]=ue,B[re]=te,re=k;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var ue=B[0],re=B.pop();if(re!==ue){B[0]=re;e:for(var k=0,te=B.length,Ie=te>>>1;k<Ie;){var Z=2*(k+1)-1,he=B[Z],Se=Z+1,xe=B[Se];if(0>o(he,re))Se<te&&0>o(xe,he)?(B[k]=xe,B[Se]=re,k=Se):(B[k]=he,B[Z]=re,k=Z);else if(Se<te&&0>o(xe,re))B[k]=xe,B[Se]=re,k=Se;else break e}}return ue}function o(B,ue){var re=B.sortIndex-ue.sortIndex;return re!==0?re:B.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();s.unstable_now=function(){return c.now()-u}}var d=[],f=[],m=1,g=null,v=3,S=!1,M=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var ue=t(f);ue!==null;){if(ue.callback===null)i(f);else if(ue.startTime<=B)i(f),ue.sortIndex=ue.expirationTime,e(d,ue);else break;ue=t(f)}}function A(B){if(E=!1,L(B),!M)if(t(d)!==null)M=!0,ae(H);else{var ue=t(f);ue!==null&&oe(A,ue.startTime-B)}}function H(B,ue){M=!1,E&&(E=!1,x(z),z=-1),S=!0;var re=v;try{for(L(ue),g=t(d);g!==null&&(!(g.expirationTime>ue)||B&&!F());){var k=g.callback;if(typeof k=="function"){g.callback=null,v=g.priorityLevel;var te=k(g.expirationTime<=ue);ue=s.unstable_now(),typeof te=="function"?g.callback=te:g===t(d)&&i(d),L(ue)}else i(d);g=t(d)}if(g!==null)var Ie=!0;else{var Z=t(f);Z!==null&&oe(A,Z.startTime-ue),Ie=!1}return Ie}finally{g=null,v=re,S=!1}}var U=!1,N=null,z=-1,C=5,b=-1;function F(){return!(s.unstable_now()-b<C)}function ie(){if(N!==null){var B=s.unstable_now();b=B;var ue=!0;try{ue=N(!0,B)}finally{ue?$():(U=!1,N=null)}}else U=!1}var $;if(typeof I=="function")$=function(){I(ie)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,le=ce.port2;ce.port1.onmessage=ie,$=function(){le.postMessage(null)}}else $=function(){y(ie,0)};function ae(B){N=B,U||(U=!0,$())}function oe(B,ue){z=y(function(){B(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,ae(H))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var re=v;v=ue;try{return B()}finally{v=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ue){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=v;v=B;try{return ue()}finally{v=re}},s.unstable_scheduleCallback=function(B,ue,re){var k=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?k+re:k):re=k,B){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=re+te,B={id:m++,callback:ue,priorityLevel:B,startTime:re,expirationTime:te,sortIndex:-1},re>k?(B.sortIndex=re,e(f,B),t(d)===null&&B===t(f)&&(E?(x(z),z=-1):E=!0,oe(A,re-k))):(B.sortIndex=te,e(d,B),M||S||(M=!0,ae(H))),B},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(B){var ue=v;return function(){var re=v;v=ue;try{return B.apply(this,arguments)}finally{v=re}}}})(Ju)),Ju}var vm;function U0(){return vm||(vm=1,Zu.exports=N0()),Zu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function k0(){if(xm)return Fn;xm=1;var s=wd(),e=U0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(n){return d.call(g,n)?!0:d.call(m,n)?!1:f.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,r,l,h){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,h){if(r===null||typeof r>"u"||S(n,r,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,h,p,_,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,I);y[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,I);y[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,I);y[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,h){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:h||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,h)&&(l=null),h||p===null?v(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,h=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?n.setAttributeNS(h,r,l):n.setAttribute(r,l))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),U=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),F=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),B=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,k;function te(n){if(k===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);k=r&&r[1]||""}return`
`+k+n}var Ie=!1;function Z(n,r){if(!n||Ie)return"";Ie=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(Q){var h=Q}Reflect.construct(n,[],r)}else{try{r.call()}catch(Q){h=Q}n.call(r.prototype)}else{try{throw Error()}catch(Q){h=Q}n()}}catch(Q){if(Q&&h&&typeof Q.stack=="string"){for(var p=Q.stack.split(`
`),_=h.stack.split(`
`),T=p.length-1,D=_.length-1;1<=T&&0<=D&&p[T]!==_[D];)D--;for(;1<=T&&0<=D;T--,D--)if(p[T]!==_[D]){if(T!==1||D!==1)do if(T--,D--,0>D||p[T]!==_[D]){var O=`
`+p[T].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=T&&0<=D);break}}}finally{Ie=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?te(n):""}function he(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case U:return"Portal";case C:return"Profiler";case z:return"StrictMode";case $:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case ie:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case le:return r=n.displayName||null,r!==null?r:Se(n.type)||"Memo";case ae:r=n._payload,n=n._init;try{return Se(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(r);case 8:return r===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function $e(n){var r=Le(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),h=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){h=""+T,_.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function bt(n){n._valueTracker||(n._valueTracker=$e(n))}function dt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),h="";return n&&(h=Le(n)?n.checked?"true":"false":n.value),n=h,n!==l?(r.setValue(n),!0):!1}function It(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function X(n,r){var l=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function cn(n,r){var l=r.defaultValue==null?"":r.defaultValue,h=r.checked!=null?r.checked:r.defaultChecked;l=Ae(r.value!=null?r.value:l),n._wrapperState={initialChecked:h,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ot(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function st(n,r){ot(n,r);var l=Ae(r.value),h=r.type;if(l!=null)h==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(h==="submit"||h==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Tt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Tt(n,r.type,Ae(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function qe(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var h=r.type;if(!(h!=="submit"&&h!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Tt(n,r,l){(r!=="number"||It(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var je=Array.isArray;function P(n,r,l,h){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&h&&(n[l].defaultSelected=!0)}else{for(l=""+Ae(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,h&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function w(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(je(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Ae(l)}}function de(n,r){var l=Ae(r.value),h=Ae(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),h!=null&&(n.defaultValue=""+h)}function ge(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,Ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,h,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,h,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ht(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Fe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Me[r]=Me[n]})});function Je(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Me.hasOwnProperty(n)&&Me[n]?(""+r).trim():r+"px"}function Qe(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Je(l,r[l],h);l==="float"&&(l="cssFloat"),h?n.setProperty(l,p):n[l]=p}}var Oe=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,r){if(r){if(Oe[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function it(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,se=null,pe=null;function De(n){if(n=Do(n)){if(typeof Re!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Da(r),Re(n.stateNode,n.type,r))}}function Pe(n){se?pe?pe.push(n):pe=[n]:se=n}function rt(){if(se){var n=se,r=pe;if(pe=se=null,De(n),r)for(n=0;n<r.length;n++)De(r[n])}}function kt(n,r){return n(r)}function qt(){}var yt=!1;function Pn(n,r,l){if(yt)return n(r,l);yt=!0;try{return kt(n,r,l)}finally{yt=!1,(se!==null||pe!==null)&&(qt(),rt())}}function Tn(n,r){var l=n.stateNode;if(l===null)return null;var h=Da(l);if(h===null)return null;l=h[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(n=n.type,h=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!h;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var cs=!1;if(u)try{var er={};Object.defineProperty(er,"passive",{get:function(){cs=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{cs=!1}function Li(n,r,l,h,p,_,T,D,O){var Q=Array.prototype.slice.call(arguments,3);try{r.apply(l,Q)}catch(ve){this.onError(ve)}}var Di=!1,Fr=null,Or=!1,tr=null,fa={onError:function(n){Di=!0,Fr=n}};function us(n,r,l,h,p,_,T,D,O){Di=!1,Fr=null,Li.apply(fa,arguments)}function pa(n,r,l,h,p,_,T,D,O){if(us.apply(this,arguments),Di){if(Di){var Q=Fr;Di=!1,Fr=null}else throw Error(t(198));Or||(Or=!0,tr=Q)}}function Si(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function ma(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function ga(n){if(Si(n)!==n)throw Error(t(188))}function gc(n){var r=n.alternate;if(!r){if(r=Si(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,h=r;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return ga(p),n;if(_===h)return ga(p),r;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var T=!1,D=p.child;D;){if(D===l){T=!0,l=p,h=_;break}if(D===h){T=!0,h=p,l=_;break}D=D.sibling}if(!T){for(D=_.child;D;){if(D===l){T=!0,l=_,h=p;break}if(D===h){T=!0,h=_,l=p;break}D=D.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function R(n){return n=gc(n),n!==null?W(n):null}function W(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=W(n);if(r!==null)return r;n=n.sibling}return null}var ee=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,j=e.unstable_shouldYield,we=e.unstable_requestPaint,Ee=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,We=e.unstable_LowPriority,vt=e.unstable_IdlePriority,Rt=null,_t=null;function fn(n){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:wt,Ye=Math.log,ai=Math.LN2;function wt(n){return n>>>=0,n===0?32:31-(Ye(n)/ai|0)|0}var pn=64,li=4194304;function $t(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mi(n,r){var l=n.pendingLanes;if(l===0)return 0;var h=0,p=n.suspendedLanes,_=n.pingedLanes,T=l&268435455;if(T!==0){var D=T&~p;D!==0?h=$t(D):(_&=T,_!==0&&(h=$t(_)))}else T=l&~p,T!==0?h=$t(T):_!==0&&(h=$t(_));if(h===0)return 0;if(r!==0&&r!==h&&(r&p)===0&&(p=h&-h,_=r&-r,p>=_||p===16&&(_&4194240)!==0))return r;if((h&4)!==0&&(h|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=h;0<r;)l=31-at(r),p=1<<l,h|=n[l],r&=~p;return h}function Nt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qn(n,r){for(var l=n.suspendedLanes,h=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var T=31-at(_),D=1<<T,O=p[T];O===-1?((D&l)===0||(D&h)!==0)&&(p[T]=Nt(D,r)):O<=r&&(n.expiredLanes|=D),_&=~D}}function Ni(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function wn(){var n=pn;return pn<<=1,(pn&4194240)===0&&(pn=64),n}function $n(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function In(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-at(r),n[r]=l}function _a(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var h=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-at(l),_=1<<p;r[p]=0,h[p]=-1,n[p]=-1,l&=~_}}function _c(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var h=31-at(l),p=1<<h;p&r|n[h]&r&&(n[h]|=r),l&=~p}}var Pt=0;function Wd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Xd,vc,jd,Yd,qd,xc=!1,va=[],nr=null,ir=null,rr=null,_o=new Map,vo=new Map,sr=[],J_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $d(n,r){switch(n){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":_o.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(r.pointerId)}}function xo(n,r,l,h,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},r!==null&&(r=Do(r),r!==null&&vc(r)),n):(n.eventSystemFlags|=h,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function Q_(n,r,l,h,p){switch(r){case"focusin":return nr=xo(nr,n,r,l,h,p),!0;case"dragenter":return ir=xo(ir,n,r,l,h,p),!0;case"mouseover":return rr=xo(rr,n,r,l,h,p),!0;case"pointerover":var _=p.pointerId;return _o.set(_,xo(_o.get(_)||null,n,r,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,vo.set(_,xo(vo.get(_)||null,n,r,l,h,p)),!0}return!1}function Kd(n){var r=Br(n.target);if(r!==null){var l=Si(r);if(l!==null){if(r=l.tag,r===13){if(r=ma(l),r!==null){n.blockedOn=r,qd(n.priority,function(){jd(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Sc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var h=new l.constructor(l.type,l);Ct=h,l.target.dispatchEvent(h),Ct=null}else return r=Do(l),r!==null&&vc(r),n.blockedOn=l,!1;r.shift()}return!0}function Zd(n,r,l){xa(n)&&l.delete(r)}function ev(){xc=!1,nr!==null&&xa(nr)&&(nr=null),ir!==null&&xa(ir)&&(ir=null),rr!==null&&xa(rr)&&(rr=null),_o.forEach(Zd),vo.forEach(Zd)}function yo(n,r){n.blockedOn===r&&(n.blockedOn=null,xc||(xc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ev)))}function So(n){function r(p){return yo(p,n)}if(0<va.length){yo(va[0],n);for(var l=1;l<va.length;l++){var h=va[l];h.blockedOn===n&&(h.blockedOn=null)}}for(nr!==null&&yo(nr,n),ir!==null&&yo(ir,n),rr!==null&&yo(rr,n),_o.forEach(r),vo.forEach(r),l=0;l<sr.length;l++)h=sr[l],h.blockedOn===n&&(h.blockedOn=null);for(;0<sr.length&&(l=sr[0],l.blockedOn===null);)Kd(l),l.blockedOn===null&&sr.shift()}var hs=A.ReactCurrentBatchConfig,ya=!0;function tv(n,r,l,h){var p=Pt,_=hs.transition;hs.transition=null;try{Pt=1,yc(n,r,l,h)}finally{Pt=p,hs.transition=_}}function nv(n,r,l,h){var p=Pt,_=hs.transition;hs.transition=null;try{Pt=4,yc(n,r,l,h)}finally{Pt=p,hs.transition=_}}function yc(n,r,l,h){if(ya){var p=Sc(n,r,l,h);if(p===null)Oc(n,r,h,Sa,l),$d(n,h);else if(Q_(p,n,r,l,h))h.stopPropagation();else if($d(n,h),r&4&&-1<J_.indexOf(n)){for(;p!==null;){var _=Do(p);if(_!==null&&Xd(_),_=Sc(n,r,l,h),_===null&&Oc(n,r,h,Sa,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else Oc(n,r,h,null,l)}}var Sa=null;function Sc(n,r,l,h){if(Sa=null,n=G(h),n=Br(n),n!==null)if(r=Si(n),r===null)n=null;else if(l=r.tag,l===13){if(n=ma(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Sa=n,null}function Jd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case ze:return 1;case et:return 4;case nt:case We:return 16;case vt:return 536870912;default:return 16}default:return 16}}var or=null,Mc=null,Ma=null;function Qd(){if(Ma)return Ma;var n,r=Mc,l=r.length,h,p="value"in or?or.value:or.textContent,_=p.length;for(n=0;n<l&&r[n]===p[n];n++);var T=l-n;for(h=1;h<=T&&r[l-h]===p[_-h];h++);return Ma=p.slice(n,1<h?1-h:void 0)}function Ea(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ta(){return!0}function ef(){return!1}function zn(n){function r(l,h,p,_,T){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(l=n[D],this[D]=l?l(_):_[D]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Ta:ef,this.isPropagationStopped=ef,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),r}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ec=zn(ds),Mo=re({},ds,{view:0,detail:0}),iv=zn(Mo),Tc,wc,Eo,wa=re({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Eo&&(Eo&&n.type==="mousemove"?(Tc=n.screenX-Eo.screenX,wc=n.screenY-Eo.screenY):wc=Tc=0,Eo=n),Tc)},movementY:function(n){return"movementY"in n?n.movementY:wc}}),tf=zn(wa),rv=re({},wa,{dataTransfer:0}),sv=zn(rv),ov=re({},Mo,{relatedTarget:0}),Ac=zn(ov),av=re({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),lv=zn(av),cv=re({},ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),uv=zn(cv),hv=re({},ds,{data:0}),nf=zn(hv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=pv[n])?!!r[n]:!1}function bc(){return mv}var gv=re({},Mo,{key:function(n){if(n.key){var r=dv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ea(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?fv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(n){return n.type==="keypress"?Ea(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ea(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),_v=zn(gv),vv=re({},wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rf=zn(vv),xv=re({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),yv=zn(xv),Sv=re({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mv=zn(Sv),Ev=re({},wa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Tv=zn(Ev),wv=[9,13,27,32],Rc=u&&"CompositionEvent"in window,To=null;u&&"documentMode"in document&&(To=document.documentMode);var Av=u&&"TextEvent"in window&&!To,sf=u&&(!Rc||To&&8<To&&11>=To),of=" ",af=!1;function lf(n,r){switch(n){case"keyup":return wv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fs=!1;function bv(n,r){switch(n){case"compositionend":return cf(r);case"keypress":return r.which!==32?null:(af=!0,of);case"textInput":return n=r.data,n===of&&af?null:n;default:return null}}function Rv(n,r){if(fs)return n==="compositionend"||!Rc&&lf(n,r)?(n=Qd(),Ma=Mc=or=null,fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return sf&&r.locale!=="ko"?null:r.data;default:return null}}var Cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Cv[n.type]:r==="textarea"}function hf(n,r,l,h){Pe(h),r=Pa(r,"onChange"),0<r.length&&(l=new Ec("onChange","change",null,l,h),n.push({event:l,listeners:r}))}var wo=null,Ao=null;function Pv(n){Cf(n,0)}function Aa(n){var r=vs(n);if(dt(r))return n}function Iv(n,r){if(n==="change")return r}var df=!1;if(u){var Cc;if(u){var Pc="oninput"in document;if(!Pc){var ff=document.createElement("div");ff.setAttribute("oninput","return;"),Pc=typeof ff.oninput=="function"}Cc=Pc}else Cc=!1;df=Cc&&(!document.documentMode||9<document.documentMode)}function pf(){wo&&(wo.detachEvent("onpropertychange",mf),Ao=wo=null)}function mf(n){if(n.propertyName==="value"&&Aa(Ao)){var r=[];hf(r,Ao,n,G(n)),Pn(Pv,r)}}function Lv(n,r,l){n==="focusin"?(pf(),wo=r,Ao=l,wo.attachEvent("onpropertychange",mf)):n==="focusout"&&pf()}function Dv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Aa(Ao)}function Nv(n,r){if(n==="click")return Aa(r)}function Uv(n,r){if(n==="input"||n==="change")return Aa(r)}function kv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ci=typeof Object.is=="function"?Object.is:kv;function bo(n,r){if(ci(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),h=Object.keys(r);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!d.call(r,p)||!ci(n[p],r[p]))return!1}return!0}function gf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function _f(n,r){var l=gf(n);n=0;for(var h;l;){if(l.nodeType===3){if(h=n+l.textContent.length,n<=r&&h>=r)return{node:l,offset:r-n};n=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=gf(l)}}function vf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?vf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function xf(){for(var n=window,r=It();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=It(n.document)}return r}function Ic(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Fv(n){var r=xf(),l=n.focusedElem,h=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&vf(l.ownerDocument.documentElement,l)){if(h!==null&&Ic(l)){if(r=h.start,n=h.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!n.extend&&_>h&&(p=h,h=_,_=p),p=_f(l,_);var T=_f(l,h);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),_>h?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ov=u&&"documentMode"in document&&11>=document.documentMode,ps=null,Lc=null,Ro=null,Dc=!1;function yf(n,r,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Dc||ps==null||ps!==It(h)||(h=ps,"selectionStart"in h&&Ic(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ro&&bo(Ro,h)||(Ro=h,h=Pa(Lc,"onSelect"),0<h.length&&(r=new Ec("onSelect","select",null,r,l),n.push({event:r,listeners:h}),r.target=ps)))}function ba(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var ms={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Nc={},Sf={};u&&(Sf=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Ra(n){if(Nc[n])return Nc[n];if(!ms[n])return n;var r=ms[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Sf)return Nc[n]=r[l];return n}var Mf=Ra("animationend"),Ef=Ra("animationiteration"),Tf=Ra("animationstart"),wf=Ra("transitionend"),Af=new Map,bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(n,r){Af.set(n,r),a(r,[n])}for(var Uc=0;Uc<bf.length;Uc++){var kc=bf[Uc],Bv=kc.toLowerCase(),zv=kc[0].toUpperCase()+kc.slice(1);ar(Bv,"on"+zv)}ar(Mf,"onAnimationEnd"),ar(Ef,"onAnimationIteration"),ar(Tf,"onAnimationStart"),ar("dblclick","onDoubleClick"),ar("focusin","onFocus"),ar("focusout","onBlur"),ar(wf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function Rf(n,r,l){var h=n.type||"unknown-event";n.currentTarget=l,pa(h,r,void 0,n),n.currentTarget=null}function Cf(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var h=n[l],p=h.event;h=h.listeners;e:{var _=void 0;if(r)for(var T=h.length-1;0<=T;T--){var D=h[T],O=D.instance,Q=D.currentTarget;if(D=D.listener,O!==_&&p.isPropagationStopped())break e;Rf(p,D,Q),_=O}else for(T=0;T<h.length;T++){if(D=h[T],O=D.instance,Q=D.currentTarget,D=D.listener,O!==_&&p.isPropagationStopped())break e;Rf(p,D,Q),_=O}}}if(Or)throw n=tr,Or=!1,tr=null,n}function Ft(n,r){var l=r[Wc];l===void 0&&(l=r[Wc]=new Set);var h=n+"__bubble";l.has(h)||(Pf(r,n,2,!1),l.add(h))}function Fc(n,r,l){var h=0;r&&(h|=4),Pf(l,n,h,r)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function Po(n){if(!n[Ca]){n[Ca]=!0,i.forEach(function(l){l!=="selectionchange"&&(Vv.has(l)||Fc(l,!1,n),Fc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ca]||(r[Ca]=!0,Fc("selectionchange",!1,r))}}function Pf(n,r,l,h){switch(Jd(r)){case 1:var p=tv;break;case 4:p=nv;break;default:p=yc}l=p.bind(null,r,l,n),p=void 0,!cs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),h?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Oc(n,r,l,h,p){var _=h;if((r&1)===0&&(r&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var D=h.stateNode.containerInfo;if(D===p||D.nodeType===8&&D.parentNode===p)break;if(T===4)for(T=h.return;T!==null;){var O=T.tag;if((O===3||O===4)&&(O=T.stateNode.containerInfo,O===p||O.nodeType===8&&O.parentNode===p))return;T=T.return}for(;D!==null;){if(T=Br(D),T===null)return;if(O=T.tag,O===5||O===6){h=_=T;continue e}D=D.parentNode}}h=h.return}Pn(function(){var Q=_,ve=G(l),ye=[];e:{var _e=Af.get(n);if(_e!==void 0){var Ne=Ec,Be=n;switch(n){case"keypress":if(Ea(l)===0)break e;case"keydown":case"keyup":Ne=_v;break;case"focusin":Be="focus",Ne=Ac;break;case"focusout":Be="blur",Ne=Ac;break;case"beforeblur":case"afterblur":Ne=Ac;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=yv;break;case Mf:case Ef:case Tf:Ne=lv;break;case wf:Ne=Mv;break;case"scroll":Ne=iv;break;case"wheel":Ne=Tv;break;case"copy":case"cut":case"paste":Ne=uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=rf}var Ve=(r&4)!==0,Xt=!Ve&&n==="scroll",Y=Ve?_e!==null?_e+"Capture":null:_e;Ve=[];for(var V=Q,K;V!==null;){K=V;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,Y!==null&&(Te=Tn(V,Y),Te!=null&&Ve.push(Io(V,Te,K)))),Xt)break;V=V.return}0<Ve.length&&(_e=new Ne(_e,Be,null,l,ve),ye.push({event:_e,listeners:Ve}))}}if((r&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Ne=n==="mouseout"||n==="pointerout",_e&&l!==Ct&&(Be=l.relatedTarget||l.fromElement)&&(Br(Be)||Be[Ui]))break e;if((Ne||_e)&&(_e=ve.window===ve?ve:(_e=ve.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ne?(Be=l.relatedTarget||l.toElement,Ne=Q,Be=Be?Br(Be):null,Be!==null&&(Xt=Si(Be),Be!==Xt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ne=null,Be=Q),Ne!==Be)){if(Ve=tf,Te="onMouseLeave",Y="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=rf,Te="onPointerLeave",Y="onPointerEnter",V="pointer"),Xt=Ne==null?_e:vs(Ne),K=Be==null?_e:vs(Be),_e=new Ve(Te,V+"leave",Ne,l,ve),_e.target=Xt,_e.relatedTarget=K,Te=null,Br(ve)===Q&&(Ve=new Ve(Y,V+"enter",Be,l,ve),Ve.target=K,Ve.relatedTarget=Xt,Te=Ve),Xt=Te,Ne&&Be)t:{for(Ve=Ne,Y=Be,V=0,K=Ve;K;K=gs(K))V++;for(K=0,Te=Y;Te;Te=gs(Te))K++;for(;0<V-K;)Ve=gs(Ve),V--;for(;0<K-V;)Y=gs(Y),K--;for(;V--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=gs(Ve),Y=gs(Y)}Ve=null}else Ve=null;Ne!==null&&If(ye,_e,Ne,Ve,!1),Be!==null&&Xt!==null&&If(ye,Xt,Be,Ve,!0)}}e:{if(_e=Q?vs(Q):window,Ne=_e.nodeName&&_e.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&_e.type==="file")var Xe=Iv;else if(uf(_e))if(df)Xe=Uv;else{Xe=Dv;var Ke=Lv}else(Ne=_e.nodeName)&&Ne.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Xe=Nv);if(Xe&&(Xe=Xe(n,Q))){hf(ye,Xe,l,ve);break e}Ke&&Ke(n,_e,Q),n==="focusout"&&(Ke=_e._wrapperState)&&Ke.controlled&&_e.type==="number"&&Tt(_e,"number",_e.value)}switch(Ke=Q?vs(Q):window,n){case"focusin":(uf(Ke)||Ke.contentEditable==="true")&&(ps=Ke,Lc=Q,Ro=null);break;case"focusout":Ro=Lc=ps=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,yf(ye,l,ve);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":yf(ye,l,ve)}var Ze;if(Rc)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else fs?lf(n,l)&&(tt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(tt="onCompositionStart");tt&&(sf&&l.locale!=="ko"&&(fs||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&fs&&(Ze=Qd()):(or=ve,Mc="value"in or?or.value:or.textContent,fs=!0)),Ke=Pa(Q,tt),0<Ke.length&&(tt=new nf(tt,n,null,l,ve),ye.push({event:tt,listeners:Ke}),Ze?tt.data=Ze:(Ze=cf(l),Ze!==null&&(tt.data=Ze)))),(Ze=Av?bv(n,l):Rv(n,l))&&(Q=Pa(Q,"onBeforeInput"),0<Q.length&&(ve=new nf("onBeforeInput","beforeinput",null,l,ve),ye.push({event:ve,listeners:Q}),ve.data=Ze))}Cf(ye,r)})}function Io(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Pa(n,r){for(var l=r+"Capture",h=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Tn(n,l),_!=null&&h.unshift(Io(n,_,p)),_=Tn(n,r),_!=null&&h.push(Io(n,_,p))),n=n.return}return h}function gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function If(n,r,l,h,p){for(var _=r._reactName,T=[];l!==null&&l!==h;){var D=l,O=D.alternate,Q=D.stateNode;if(O!==null&&O===h)break;D.tag===5&&Q!==null&&(D=Q,p?(O=Tn(l,_),O!=null&&T.unshift(Io(l,O,D))):p||(O=Tn(l,_),O!=null&&T.push(Io(l,O,D)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var Hv=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function Lf(n){return(typeof n=="string"?n:""+n).replace(Hv,`
`).replace(Gv,"")}function Ia(n,r,l){if(r=Lf(r),Lf(n)!==r&&l)throw Error(t(425))}function La(){}var Bc=null,zc=null;function Vc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Hc=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0,Df=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof Df<"u"?function(n){return Df.resolve(null).then(n).catch(jv)}:Hc;function jv(n){setTimeout(function(){throw n})}function Gc(n,r){var l=r,h=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){n.removeChild(p),So(r);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);So(r)}function lr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Nf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var _s=Math.random().toString(36).slice(2),Ei="__reactFiber$"+_s,Lo="__reactProps$"+_s,Ui="__reactContainer$"+_s,Wc="__reactEvents$"+_s,Yv="__reactListeners$"+_s,qv="__reactHandles$"+_s;function Br(n){var r=n[Ei];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Ui]||l[Ei]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Nf(n);n!==null;){if(l=n[Ei])return l;n=Nf(n)}return r}n=l,l=n.parentNode}return null}function Do(n){return n=n[Ei]||n[Ui],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Da(n){return n[Lo]||null}var Xc=[],xs=-1;function cr(n){return{current:n}}function Ot(n){0>xs||(n.current=Xc[xs],Xc[xs]=null,xs--)}function Ut(n,r){xs++,Xc[xs]=n.current,n.current=r}var ur={},mn=cr(ur),Ln=cr(!1),zr=ur;function ys(n,r){var l=n.type.contextTypes;if(!l)return ur;var h=n.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===r)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=r[_];return h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Dn(n){return n=n.childContextTypes,n!=null}function Na(){Ot(Ln),Ot(mn)}function Uf(n,r,l){if(mn.current!==ur)throw Error(t(168));Ut(mn,r),Ut(Ln,l)}function kf(n,r,l){var h=n.stateNode;if(r=r.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in r))throw Error(t(108,xe(n)||"Unknown",p));return re({},l,h)}function Ua(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ur,zr=mn.current,Ut(mn,n),Ut(Ln,Ln.current),!0}function Ff(n,r,l){var h=n.stateNode;if(!h)throw Error(t(169));l?(n=kf(n,r,zr),h.__reactInternalMemoizedMergedChildContext=n,Ot(Ln),Ot(mn),Ut(mn,n)):Ot(Ln),Ut(Ln,l)}var ki=null,ka=!1,jc=!1;function Of(n){ki===null?ki=[n]:ki.push(n)}function $v(n){ka=!0,Of(n)}function hr(){if(!jc&&ki!==null){jc=!0;var n=0,r=Pt;try{var l=ki;for(Pt=1;n<l.length;n++){var h=l[n];do h=h(!0);while(h!==null)}ki=null,ka=!1}catch(p){throw ki!==null&&(ki=ki.slice(n+1)),ee(ze,hr),p}finally{Pt=r,jc=!1}}return null}var Ss=[],Ms=0,Fa=null,Oa=0,Kn=[],Zn=0,Vr=null,Fi=1,Oi="";function Hr(n,r){Ss[Ms++]=Oa,Ss[Ms++]=Fa,Fa=n,Oa=r}function Bf(n,r,l){Kn[Zn++]=Fi,Kn[Zn++]=Oi,Kn[Zn++]=Vr,Vr=n;var h=Fi;n=Oi;var p=32-at(h)-1;h&=~(1<<p),l+=1;var _=32-at(r)+p;if(30<_){var T=p-p%5;_=(h&(1<<T)-1).toString(32),h>>=T,p-=T,Fi=1<<32-at(r)+p|l<<p|h,Oi=_+n}else Fi=1<<_|l<<p|h,Oi=n}function Yc(n){n.return!==null&&(Hr(n,1),Bf(n,1,0))}function qc(n){for(;n===Fa;)Fa=Ss[--Ms],Ss[Ms]=null,Oa=Ss[--Ms],Ss[Ms]=null;for(;n===Vr;)Vr=Kn[--Zn],Kn[Zn]=null,Oi=Kn[--Zn],Kn[Zn]=null,Fi=Kn[--Zn],Kn[Zn]=null}var Vn=null,Hn=null,zt=!1,ui=null;function zf(n,r){var l=ti(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Vf(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Vn=n,Hn=lr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Vn=n,Hn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Vr!==null?{id:Fi,overflow:Oi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ti(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Vn=n,Hn=null,!0):!1;default:return!1}}function $c(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Kc(n){if(zt){var r=Hn;if(r){var l=r;if(!Vf(n,r)){if($c(n))throw Error(t(418));r=lr(l.nextSibling);var h=Vn;r&&Vf(n,r)?zf(h,l):(n.flags=n.flags&-4097|2,zt=!1,Vn=n)}}else{if($c(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Vn=n}}}function Hf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Ba(n){if(n!==Vn)return!1;if(!zt)return Hf(n),zt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Vc(n.type,n.memoizedProps)),r&&(r=Hn)){if($c(n))throw Gf(),Error(t(418));for(;r;)zf(n,r),r=lr(r.nextSibling)}if(Hf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Hn=lr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Hn=null}}else Hn=Vn?lr(n.stateNode.nextSibling):null;return!0}function Gf(){for(var n=Hn;n;)n=lr(n.nextSibling)}function Es(){Hn=Vn=null,zt=!1}function Zc(n){ui===null?ui=[n]:ui.push(n)}var Kv=A.ReactCurrentBatchConfig;function No(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,n));var p=h,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(T){var D=p.refs;T===null?delete D[_]:D[_]=T},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function za(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Wf(n){var r=n._init;return r(n._payload)}function Xf(n){function r(Y,V){if(n){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function l(Y,V){if(!n)return null;for(;V!==null;)r(Y,V),V=V.sibling;return null}function h(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function p(Y,V){return Y=xr(Y,V),Y.index=0,Y.sibling=null,Y}function _(Y,V,K){return Y.index=K,n?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=2,V):K):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function T(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,V,K,Te){return V===null||V.tag!==6?(V=Hu(K,Y.mode,Te),V.return=Y,V):(V=p(V,K),V.return=Y,V)}function O(Y,V,K,Te){var Xe=K.type;return Xe===N?ve(Y,V,K.props.children,Te,K.key):V!==null&&(V.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&Wf(Xe)===V.type)?(Te=p(V,K.props),Te.ref=No(Y,V,K),Te.return=Y,Te):(Te=ul(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=No(Y,V,K),Te.return=Y,Te)}function Q(Y,V,K,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Gu(K,Y.mode,Te),V.return=Y,V):(V=p(V,K.children||[]),V.return=Y,V)}function ve(Y,V,K,Te,Xe){return V===null||V.tag!==7?(V=Kr(K,Y.mode,Te,Xe),V.return=Y,V):(V=p(V,K),V.return=Y,V)}function ye(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Hu(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case H:return K=ul(V.type,V.key,V.props,null,Y.mode,K),K.ref=No(Y,null,V),K.return=Y,K;case U:return V=Gu(V,Y.mode,K),V.return=Y,V;case ae:var Te=V._init;return ye(Y,Te(V._payload),K)}if(je(V)||ue(V))return V=Kr(V,Y.mode,K,null),V.return=Y,V;za(Y,V)}return null}function _e(Y,V,K,Te){var Xe=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:D(Y,V,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case H:return K.key===Xe?O(Y,V,K,Te):null;case U:return K.key===Xe?Q(Y,V,K,Te):null;case ae:return Xe=K._init,_e(Y,V,Xe(K._payload),Te)}if(je(K)||ue(K))return Xe!==null?null:ve(Y,V,K,Te,null);za(Y,K)}return null}function Ne(Y,V,K,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(K)||null,D(V,Y,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case H:return Y=Y.get(Te.key===null?K:Te.key)||null,O(V,Y,Te,Xe);case U:return Y=Y.get(Te.key===null?K:Te.key)||null,Q(V,Y,Te,Xe);case ae:var Ke=Te._init;return Ne(Y,V,K,Ke(Te._payload),Xe)}if(je(Te)||ue(Te))return Y=Y.get(K)||null,ve(V,Y,Te,Xe,null);za(V,Te)}return null}function Be(Y,V,K,Te){for(var Xe=null,Ke=null,Ze=V,tt=V=0,sn=null;Ze!==null&&tt<K.length;tt++){Ze.index>tt?(sn=Ze,Ze=null):sn=Ze.sibling;var At=_e(Y,Ze,K[tt],Te);if(At===null){Ze===null&&(Ze=sn);break}n&&Ze&&At.alternate===null&&r(Y,Ze),V=_(At,V,tt),Ke===null?Xe=At:Ke.sibling=At,Ke=At,Ze=sn}if(tt===K.length)return l(Y,Ze),zt&&Hr(Y,tt),Xe;if(Ze===null){for(;tt<K.length;tt++)Ze=ye(Y,K[tt],Te),Ze!==null&&(V=_(Ze,V,tt),Ke===null?Xe=Ze:Ke.sibling=Ze,Ke=Ze);return zt&&Hr(Y,tt),Xe}for(Ze=h(Y,Ze);tt<K.length;tt++)sn=Ne(Ze,Y,tt,K[tt],Te),sn!==null&&(n&&sn.alternate!==null&&Ze.delete(sn.key===null?tt:sn.key),V=_(sn,V,tt),Ke===null?Xe=sn:Ke.sibling=sn,Ke=sn);return n&&Ze.forEach(function(yr){return r(Y,yr)}),zt&&Hr(Y,tt),Xe}function Ve(Y,V,K,Te){var Xe=ue(K);if(typeof Xe!="function")throw Error(t(150));if(K=Xe.call(K),K==null)throw Error(t(151));for(var Ke=Xe=null,Ze=V,tt=V=0,sn=null,At=K.next();Ze!==null&&!At.done;tt++,At=K.next()){Ze.index>tt?(sn=Ze,Ze=null):sn=Ze.sibling;var yr=_e(Y,Ze,At.value,Te);if(yr===null){Ze===null&&(Ze=sn);break}n&&Ze&&yr.alternate===null&&r(Y,Ze),V=_(yr,V,tt),Ke===null?Xe=yr:Ke.sibling=yr,Ke=yr,Ze=sn}if(At.done)return l(Y,Ze),zt&&Hr(Y,tt),Xe;if(Ze===null){for(;!At.done;tt++,At=K.next())At=ye(Y,At.value,Te),At!==null&&(V=_(At,V,tt),Ke===null?Xe=At:Ke.sibling=At,Ke=At);return zt&&Hr(Y,tt),Xe}for(Ze=h(Y,Ze);!At.done;tt++,At=K.next())At=Ne(Ze,Y,tt,At.value,Te),At!==null&&(n&&At.alternate!==null&&Ze.delete(At.key===null?tt:At.key),V=_(At,V,tt),Ke===null?Xe=At:Ke.sibling=At,Ke=At);return n&&Ze.forEach(function(C0){return r(Y,C0)}),zt&&Hr(Y,tt),Xe}function Xt(Y,V,K,Te){if(typeof K=="object"&&K!==null&&K.type===N&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case H:e:{for(var Xe=K.key,Ke=V;Ke!==null;){if(Ke.key===Xe){if(Xe=K.type,Xe===N){if(Ke.tag===7){l(Y,Ke.sibling),V=p(Ke,K.props.children),V.return=Y,Y=V;break e}}else if(Ke.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&Wf(Xe)===Ke.type){l(Y,Ke.sibling),V=p(Ke,K.props),V.ref=No(Y,Ke,K),V.return=Y,Y=V;break e}l(Y,Ke);break}else r(Y,Ke);Ke=Ke.sibling}K.type===N?(V=Kr(K.props.children,Y.mode,Te,K.key),V.return=Y,Y=V):(Te=ul(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=No(Y,V,K),Te.return=Y,Y=Te)}return T(Y);case U:e:{for(Ke=K.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){l(Y,V.sibling),V=p(V,K.children||[]),V.return=Y,Y=V;break e}else{l(Y,V);break}else r(Y,V);V=V.sibling}V=Gu(K,Y.mode,Te),V.return=Y,Y=V}return T(Y);case ae:return Ke=K._init,Xt(Y,V,Ke(K._payload),Te)}if(je(K))return Be(Y,V,K,Te);if(ue(K))return Ve(Y,V,K,Te);za(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(l(Y,V.sibling),V=p(V,K),V.return=Y,Y=V):(l(Y,V),V=Hu(K,Y.mode,Te),V.return=Y,Y=V),T(Y)):l(Y,V)}return Xt}var Ts=Xf(!0),jf=Xf(!1),Va=cr(null),Ha=null,ws=null,Jc=null;function Qc(){Jc=ws=Ha=null}function eu(n){var r=Va.current;Ot(Va),n._currentValue=r}function tu(n,r,l){for(;n!==null;){var h=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),n===l)break;n=n.return}}function As(n,r){Ha=n,Jc=ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Nn=!0),n.firstContext=null)}function Jn(n){var r=n._currentValue;if(Jc!==n)if(n={context:n,memoizedValue:r,next:null},ws===null){if(Ha===null)throw Error(t(308));ws=n,Ha.dependencies={lanes:0,firstContext:n}}else ws=ws.next=n;return r}var Gr=null;function nu(n){Gr===null?Gr=[n]:Gr.push(n)}function Yf(n,r,l,h){var p=r.interleaved;return p===null?(l.next=l,nu(r)):(l.next=p.next,p.next=l),r.interleaved=l,Bi(n,h)}function Bi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var dr=!1;function iu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function fr(n,r,l){var h=n.updateQueue;if(h===null)return null;if(h=h.shared,(St&2)!==0){var p=h.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),h.pending=r,Bi(n,l)}return p=h.interleaved,p===null?(r.next=r,nu(h)):(r.next=p.next,p.next=r),h.interleaved=r,Bi(n,l)}function Ga(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,_c(n,l)}}function $f(n,r){var l=n.updateQueue,h=n.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=T:_=_.next=T,l=l.next}while(l!==null);_===null?p=_=r:_=_.next=r}else p=_=r;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Wa(n,r,l,h){var p=n.updateQueue;dr=!1;var _=p.firstBaseUpdate,T=p.lastBaseUpdate,D=p.shared.pending;if(D!==null){p.shared.pending=null;var O=D,Q=O.next;O.next=null,T===null?_=Q:T.next=Q,T=O;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,D=ve.lastBaseUpdate,D!==T&&(D===null?ve.firstBaseUpdate=Q:D.next=Q,ve.lastBaseUpdate=O))}if(_!==null){var ye=p.baseState;T=0,ve=Q=O=null,D=_;do{var _e=D.lane,Ne=D.eventTime;if((h&_e)===_e){ve!==null&&(ve=ve.next={eventTime:Ne,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Be=n,Ve=D;switch(_e=r,Ne=l,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){ye=Be.call(Ne,ye,_e);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,_e=typeof Be=="function"?Be.call(Ne,ye,_e):Be,_e==null)break e;ye=re({},ye,_e);break e;case 2:dr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,_e=p.effects,_e===null?p.effects=[D]:_e.push(D))}else Ne={eventTime:Ne,lane:_e,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ve===null?(Q=ve=Ne,O=ye):ve=ve.next=Ne,T|=_e;if(D=D.next,D===null){if(D=p.shared.pending,D===null)break;_e=D,D=_e.next,_e.next=null,p.lastBaseUpdate=_e,p.shared.pending=null}}while(!0);if(ve===null&&(O=ye),p.baseState=O,p.firstBaseUpdate=Q,p.lastBaseUpdate=ve,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else _===null&&(p.shared.lanes=0);jr|=T,n.lanes=T,n.memoizedState=ye}}function Kf(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var h=n[r],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Uo={},Ti=cr(Uo),ko=cr(Uo),Fo=cr(Uo);function Wr(n){if(n===Uo)throw Error(t(174));return n}function ru(n,r){switch(Ut(Fo,r),Ut(ko,n),Ut(Ti,Uo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:He(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=He(r,n)}Ot(Ti),Ut(Ti,r)}function bs(){Ot(Ti),Ot(ko),Ot(Fo)}function Zf(n){Wr(Fo.current);var r=Wr(Ti.current),l=He(r,n.type);r!==l&&(Ut(ko,n),Ut(Ti,l))}function su(n){ko.current===n&&(Ot(Ti),Ot(ko))}var Vt=cr(0);function Xa(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ou=[];function au(){for(var n=0;n<ou.length;n++)ou[n]._workInProgressVersionPrimary=null;ou.length=0}var ja=A.ReactCurrentDispatcher,lu=A.ReactCurrentBatchConfig,Xr=0,Ht=null,Kt=null,nn=null,Ya=!1,Oo=!1,Bo=0,Zv=0;function gn(){throw Error(t(321))}function cu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!ci(n[l],r[l]))return!1;return!0}function uu(n,r,l,h,p,_){if(Xr=_,Ht=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ja.current=n===null||n.memoizedState===null?t0:n0,n=l(h,p),Oo){_=0;do{if(Oo=!1,Bo=0,25<=_)throw Error(t(301));_+=1,nn=Kt=null,r.updateQueue=null,ja.current=i0,n=l(h,p)}while(Oo)}if(ja.current=Ka,r=Kt!==null&&Kt.next!==null,Xr=0,nn=Kt=Ht=null,Ya=!1,r)throw Error(t(300));return n}function hu(){var n=Bo!==0;return Bo=0,n}function wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Ht.memoizedState=nn=n:nn=nn.next=n,nn}function Qn(){if(Kt===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var r=nn===null?Ht.memoizedState:nn.next;if(r!==null)nn=r,Kt=n;else{if(n===null)throw Error(t(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},nn===null?Ht.memoizedState=nn=n:nn=nn.next=n}return nn}function zo(n,r){return typeof r=="function"?r(n):r}function du(n){var r=Qn(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=Kt,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var T=p.next;p.next=_.next,_.next=T}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var D=T=null,O=null,Q=_;do{var ve=Q.lane;if((Xr&ve)===ve)O!==null&&(O=O.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),h=Q.hasEagerState?Q.eagerState:n(h,Q.action);else{var ye={lane:ve,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};O===null?(D=O=ye,T=h):O=O.next=ye,Ht.lanes|=ve,jr|=ve}Q=Q.next}while(Q!==null&&Q!==_);O===null?T=h:O.next=D,ci(h,r.memoizedState)||(Nn=!0),r.memoizedState=h,r.baseState=T,r.baseQueue=O,l.lastRenderedState=h}if(n=l.interleaved,n!==null){p=n;do _=p.lane,Ht.lanes|=_,jr|=_,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function fu(n){var r=Qn(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=l.dispatch,p=l.pending,_=r.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do _=n(_,T.action),T=T.next;while(T!==p);ci(_,r.memoizedState)||(Nn=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),l.lastRenderedState=_}return[_,h]}function Jf(){}function Qf(n,r){var l=Ht,h=Qn(),p=r(),_=!ci(h.memoizedState,p);if(_&&(h.memoizedState=p,Nn=!0),h=h.queue,pu(np.bind(null,l,h,n),[n]),h.getSnapshot!==r||_||nn!==null&&nn.memoizedState.tag&1){if(l.flags|=2048,Vo(9,tp.bind(null,l,h,p,r),void 0,null),rn===null)throw Error(t(349));(Xr&30)!==0||ep(l,r,p)}return p}function ep(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Ht.updateQueue,r===null?(r={lastEffect:null,stores:null},Ht.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function tp(n,r,l,h){r.value=l,r.getSnapshot=h,ip(r)&&rp(n)}function np(n,r,l){return l(function(){ip(r)&&rp(n)})}function ip(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!ci(n,l)}catch{return!0}}function rp(n){var r=Bi(n,1);r!==null&&pi(r,n,1,-1)}function sp(n){var r=wi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},r.queue=n,n=n.dispatch=e0.bind(null,Ht,n),[r.memoizedState,n]}function Vo(n,r,l,h){return n={tag:n,create:r,destroy:l,deps:h,next:null},r=Ht.updateQueue,r===null?(r={lastEffect:null,stores:null},Ht.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(h=l.next,l.next=n,n.next=h,r.lastEffect=n)),n}function op(){return Qn().memoizedState}function qa(n,r,l,h){var p=wi();Ht.flags|=n,p.memoizedState=Vo(1|r,l,void 0,h===void 0?null:h)}function $a(n,r,l,h){var p=Qn();h=h===void 0?null:h;var _=void 0;if(Kt!==null){var T=Kt.memoizedState;if(_=T.destroy,h!==null&&cu(h,T.deps)){p.memoizedState=Vo(r,l,_,h);return}}Ht.flags|=n,p.memoizedState=Vo(1|r,l,_,h)}function ap(n,r){return qa(8390656,8,n,r)}function pu(n,r){return $a(2048,8,n,r)}function lp(n,r){return $a(4,2,n,r)}function cp(n,r){return $a(4,4,n,r)}function up(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function hp(n,r,l){return l=l!=null?l.concat([n]):null,$a(4,4,up.bind(null,r,n),l)}function mu(){}function dp(n,r){var l=Qn();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&cu(r,h[1])?h[0]:(l.memoizedState=[n,r],n)}function fp(n,r){var l=Qn();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&cu(r,h[1])?h[0]:(n=n(),l.memoizedState=[n,r],n)}function pp(n,r,l){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,Nn=!0),n.memoizedState=l):(ci(l,r)||(l=wn(),Ht.lanes|=l,jr|=l,n.baseState=!0),r)}function Jv(n,r){var l=Pt;Pt=l!==0&&4>l?l:4,n(!0);var h=lu.transition;lu.transition={};try{n(!1),r()}finally{Pt=l,lu.transition=h}}function mp(){return Qn().memoizedState}function Qv(n,r,l){var h=_r(n);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},gp(n))_p(r,l);else if(l=Yf(n,r,l,h),l!==null){var p=bn();pi(l,n,h,p),vp(l,r,h)}}function e0(n,r,l){var h=_r(n),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(gp(n))_p(r,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var T=r.lastRenderedState,D=_(T,l);if(p.hasEagerState=!0,p.eagerState=D,ci(D,T)){var O=r.interleaved;O===null?(p.next=p,nu(r)):(p.next=O.next,O.next=p),r.interleaved=p;return}}catch{}finally{}l=Yf(n,r,p,h),l!==null&&(p=bn(),pi(l,n,h,p),vp(l,r,h))}}function gp(n){var r=n.alternate;return n===Ht||r!==null&&r===Ht}function _p(n,r){Oo=Ya=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function vp(n,r,l){if((l&4194240)!==0){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,_c(n,l)}}var Ka={readContext:Jn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},t0={readContext:Jn,useCallback:function(n,r){return wi().memoizedState=[n,r===void 0?null:r],n},useContext:Jn,useEffect:ap,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,qa(4194308,4,up.bind(null,r,n),l)},useLayoutEffect:function(n,r){return qa(4194308,4,n,r)},useInsertionEffect:function(n,r){return qa(4,2,n,r)},useMemo:function(n,r){var l=wi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var h=wi();return r=l!==void 0?l(r):r,h.memoizedState=h.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},h.queue=n,n=n.dispatch=Qv.bind(null,Ht,n),[h.memoizedState,n]},useRef:function(n){var r=wi();return n={current:n},r.memoizedState=n},useState:sp,useDebugValue:mu,useDeferredValue:function(n){return wi().memoizedState=n},useTransition:function(){var n=sp(!1),r=n[0];return n=Jv.bind(null,n[1]),wi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var h=Ht,p=wi();if(zt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),rn===null)throw Error(t(349));(Xr&30)!==0||ep(h,r,l)}p.memoizedState=l;var _={value:l,getSnapshot:r};return p.queue=_,ap(np.bind(null,h,_,n),[n]),h.flags|=2048,Vo(9,tp.bind(null,h,_,l,r),void 0,null),l},useId:function(){var n=wi(),r=rn.identifierPrefix;if(zt){var l=Oi,h=Fi;l=(h&~(1<<32-at(h)-1)).toString(32)+l,r=":"+r+"R"+l,l=Bo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Zv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},n0={readContext:Jn,useCallback:dp,useContext:Jn,useEffect:pu,useImperativeHandle:hp,useInsertionEffect:lp,useLayoutEffect:cp,useMemo:fp,useReducer:du,useRef:op,useState:function(){return du(zo)},useDebugValue:mu,useDeferredValue:function(n){var r=Qn();return pp(r,Kt.memoizedState,n)},useTransition:function(){var n=du(zo)[0],r=Qn().memoizedState;return[n,r]},useMutableSource:Jf,useSyncExternalStore:Qf,useId:mp,unstable_isNewReconciler:!1},i0={readContext:Jn,useCallback:dp,useContext:Jn,useEffect:pu,useImperativeHandle:hp,useInsertionEffect:lp,useLayoutEffect:cp,useMemo:fp,useReducer:fu,useRef:op,useState:function(){return fu(zo)},useDebugValue:mu,useDeferredValue:function(n){var r=Qn();return Kt===null?r.memoizedState=n:pp(r,Kt.memoizedState,n)},useTransition:function(){var n=fu(zo)[0],r=Qn().memoizedState;return[n,r]},useMutableSource:Jf,useSyncExternalStore:Qf,useId:mp,unstable_isNewReconciler:!1};function hi(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function gu(n,r,l,h){r=n.memoizedState,l=l(h,r),l=l==null?r:re({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Za={isMounted:function(n){return(n=n._reactInternals)?Si(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var h=bn(),p=_r(n),_=zi(h,p);_.payload=r,l!=null&&(_.callback=l),r=fr(n,_,p),r!==null&&(pi(r,n,p,h),Ga(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var h=bn(),p=_r(n),_=zi(h,p);_.tag=1,_.payload=r,l!=null&&(_.callback=l),r=fr(n,_,p),r!==null&&(pi(r,n,p,h),Ga(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=bn(),h=_r(n),p=zi(l,h);p.tag=2,r!=null&&(p.callback=r),r=fr(n,p,h),r!==null&&(pi(r,n,h,l),Ga(r,n,h))}};function xp(n,r,l,h,p,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(h,_,T):r.prototype&&r.prototype.isPureReactComponent?!bo(l,h)||!bo(p,_):!0}function yp(n,r,l){var h=!1,p=ur,_=r.contextType;return typeof _=="object"&&_!==null?_=Jn(_):(p=Dn(r)?zr:mn.current,h=r.contextTypes,_=(h=h!=null)?ys(n,p):ur),r=new r(l,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Za,n.stateNode=r,r._reactInternals=n,h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),r}function Sp(n,r,l,h){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,h),r.state!==n&&Za.enqueueReplaceState(r,r.state,null)}function _u(n,r,l,h){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},iu(n);var _=r.contextType;typeof _=="object"&&_!==null?p.context=Jn(_):(_=Dn(r)?zr:mn.current,p.context=ys(n,_)),p.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(gu(n,r,_,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Za.enqueueReplaceState(p,p.state,null),Wa(n,l,p,h),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Rs(n,r){try{var l="",h=r;do l+=he(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:p,digest:null}}function vu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function xu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var r0=typeof WeakMap=="function"?WeakMap:Map;function Mp(n,r,l){l=zi(-1,l),l.tag=3,l.payload={element:null};var h=r.value;return l.callback=function(){rl||(rl=!0,Nu=h),xu(n,r)},l}function Ep(n,r,l){l=zi(-1,l),l.tag=3;var h=n.type.getDerivedStateFromError;if(typeof h=="function"){var p=r.value;l.payload=function(){return h(p)},l.callback=function(){xu(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){xu(n,r),typeof h!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function Tp(n,r,l){var h=n.pingCache;if(h===null){h=n.pingCache=new r0;var p=new Set;h.set(r,p)}else p=h.get(r),p===void 0&&(p=new Set,h.set(r,p));p.has(l)||(p.add(l),n=v0.bind(null,n,r,l),r.then(n,n))}function wp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Ap(n,r,l,h,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=zi(-1,1),r.tag=2,fr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var s0=A.ReactCurrentOwner,Nn=!1;function An(n,r,l,h){r.child=n===null?jf(r,null,l,h):Ts(r,n.child,l,h)}function bp(n,r,l,h,p){l=l.render;var _=r.ref;return As(r,p),h=uu(n,r,l,h,_,p),l=hu(),n!==null&&!Nn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Vi(n,r,p)):(zt&&l&&Yc(r),r.flags|=1,An(n,r,h,p),r.child)}function Rp(n,r,l,h,p){if(n===null){var _=l.type;return typeof _=="function"&&!Vu(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=_,Cp(n,r,_,h,p)):(n=ul(l.type,null,h,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,(n.lanes&p)===0){var T=_.memoizedProps;if(l=l.compare,l=l!==null?l:bo,l(T,h)&&n.ref===r.ref)return Vi(n,r,p)}return r.flags|=1,n=xr(_,h),n.ref=r.ref,n.return=r,r.child=n}function Cp(n,r,l,h,p){if(n!==null){var _=n.memoizedProps;if(bo(_,h)&&n.ref===r.ref)if(Nn=!1,r.pendingProps=h=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Nn=!0);else return r.lanes=n.lanes,Vi(n,r,p)}return yu(n,r,l,h,p)}function Pp(n,r,l){var h=r.pendingProps,p=h.children,_=n!==null?n.memoizedState:null;if(h.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ps,Gn),Gn|=l;else{if((l&1073741824)===0)return n=_!==null?_.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ut(Ps,Gn),Gn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,Ut(Ps,Gn),Gn|=h}else _!==null?(h=_.baseLanes|l,r.memoizedState=null):h=l,Ut(Ps,Gn),Gn|=h;return An(n,r,p,l),r.child}function Ip(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function yu(n,r,l,h,p){var _=Dn(l)?zr:mn.current;return _=ys(r,_),As(r,p),l=uu(n,r,l,h,_,p),h=hu(),n!==null&&!Nn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Vi(n,r,p)):(zt&&h&&Yc(r),r.flags|=1,An(n,r,l,p),r.child)}function Lp(n,r,l,h,p){if(Dn(l)){var _=!0;Ua(r)}else _=!1;if(As(r,p),r.stateNode===null)Qa(n,r),yp(r,l,h),_u(r,l,h,p),h=!0;else if(n===null){var T=r.stateNode,D=r.memoizedProps;T.props=D;var O=T.context,Q=l.contextType;typeof Q=="object"&&Q!==null?Q=Jn(Q):(Q=Dn(l)?zr:mn.current,Q=ys(r,Q));var ve=l.getDerivedStateFromProps,ye=typeof ve=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==h||O!==Q)&&Sp(r,T,h,Q),dr=!1;var _e=r.memoizedState;T.state=_e,Wa(r,h,T,p),O=r.memoizedState,D!==h||_e!==O||Ln.current||dr?(typeof ve=="function"&&(gu(r,l,ve,h),O=r.memoizedState),(D=dr||xp(r,l,D,h,_e,O,Q))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=O),T.props=h,T.state=O,T.context=Q,h=D):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{T=r.stateNode,qf(n,r),D=r.memoizedProps,Q=r.type===r.elementType?D:hi(r.type,D),T.props=Q,ye=r.pendingProps,_e=T.context,O=l.contextType,typeof O=="object"&&O!==null?O=Jn(O):(O=Dn(l)?zr:mn.current,O=ys(r,O));var Ne=l.getDerivedStateFromProps;(ve=typeof Ne=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==ye||_e!==O)&&Sp(r,T,h,O),dr=!1,_e=r.memoizedState,T.state=_e,Wa(r,h,T,p);var Be=r.memoizedState;D!==ye||_e!==Be||Ln.current||dr?(typeof Ne=="function"&&(gu(r,l,Ne,h),Be=r.memoizedState),(Q=dr||xp(r,l,Q,h,_e,Be,O)||!1)?(ve||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,Be,O),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,Be,O)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=Be),T.props=h,T.state=Be,T.context=O,h=Q):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),h=!1)}return Su(n,r,l,h,_,p)}function Su(n,r,l,h,p,_){Ip(n,r);var T=(r.flags&128)!==0;if(!h&&!T)return p&&Ff(r,l,!1),Vi(n,r,_);h=r.stateNode,s0.current=r;var D=T&&typeof l.getDerivedStateFromError!="function"?null:h.render();return r.flags|=1,n!==null&&T?(r.child=Ts(r,n.child,null,_),r.child=Ts(r,null,D,_)):An(n,r,D,_),r.memoizedState=h.state,p&&Ff(r,l,!0),r.child}function Dp(n){var r=n.stateNode;r.pendingContext?Uf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Uf(n,r.context,!1),ru(n,r.containerInfo)}function Np(n,r,l,h,p){return Es(),Zc(p),r.flags|=256,An(n,r,l,h),r.child}var Mu={dehydrated:null,treeContext:null,retryLane:0};function Eu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Up(n,r,l){var h=r.pendingProps,p=Vt.current,_=!1,T=(r.flags&128)!==0,D;if((D=T)||(D=n!==null&&n.memoizedState===null?!1:(p&2)!==0),D?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ut(Vt,p&1),n===null)return Kc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=h.children,n=h.fallback,_?(h=r.mode,_=r.child,T={mode:"hidden",children:T},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=hl(T,h,0,null),n=Kr(n,h,l,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=Eu(l),r.memoizedState=Mu,n):Tu(r,T));if(p=n.memoizedState,p!==null&&(D=p.dehydrated,D!==null))return o0(n,r,T,h,D,p,l);if(_){_=h.fallback,T=r.mode,p=n.child,D=p.sibling;var O={mode:"hidden",children:h.children};return(T&1)===0&&r.child!==p?(h=r.child,h.childLanes=0,h.pendingProps=O,r.deletions=null):(h=xr(p,O),h.subtreeFlags=p.subtreeFlags&14680064),D!==null?_=xr(D,_):(_=Kr(_,T,l,null),_.flags|=2),_.return=r,h.return=r,h.sibling=_,r.child=h,h=_,_=r.child,T=n.child.memoizedState,T=T===null?Eu(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=n.childLanes&~l,r.memoizedState=Mu,h}return _=n.child,n=_.sibling,h=xr(_,{mode:"visible",children:h.children}),(r.mode&1)===0&&(h.lanes=l),h.return=r,h.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=h,r.memoizedState=null,h}function Tu(n,r){return r=hl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ja(n,r,l,h){return h!==null&&Zc(h),Ts(r,n.child,null,l),n=Tu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function o0(n,r,l,h,p,_,T){if(l)return r.flags&256?(r.flags&=-257,h=vu(Error(t(422))),Ja(n,r,T,h)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=h.fallback,p=r.mode,h=hl({mode:"visible",children:h.children},p,0,null),_=Kr(_,p,T,null),_.flags|=2,h.return=r,_.return=r,h.sibling=_,r.child=h,(r.mode&1)!==0&&Ts(r,n.child,null,T),r.child.memoizedState=Eu(T),r.memoizedState=Mu,_);if((r.mode&1)===0)return Ja(n,r,T,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var D=h.dgst;return h=D,_=Error(t(419)),h=vu(_,h,void 0),Ja(n,r,T,h)}if(D=(T&n.childLanes)!==0,Nn||D){if(h=rn,h!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|T))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Bi(n,p),pi(h,n,p,-1))}return zu(),h=vu(Error(t(421))),Ja(n,r,T,h)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=x0.bind(null,n),p._reactRetry=r,null):(n=_.treeContext,Hn=lr(p.nextSibling),Vn=r,zt=!0,ui=null,n!==null&&(Kn[Zn++]=Fi,Kn[Zn++]=Oi,Kn[Zn++]=Vr,Fi=n.id,Oi=n.overflow,Vr=r),r=Tu(r,h.children),r.flags|=4096,r)}function kp(n,r,l){n.lanes|=r;var h=n.alternate;h!==null&&(h.lanes|=r),tu(n.return,r,l)}function wu(n,r,l,h,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function Fp(n,r,l){var h=r.pendingProps,p=h.revealOrder,_=h.tail;if(An(n,r,h.children,l),h=Vt.current,(h&2)!==0)h=h&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&kp(n,l,r);else if(n.tag===19)kp(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}h&=1}if(Ut(Vt,h),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&Xa(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),wu(r,!1,p,l,_);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Xa(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}wu(r,!0,l,null,_);break;case"together":wu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Qa(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Vi(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),jr|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=xr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=xr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function a0(n,r,l){switch(r.tag){case 3:Dp(r),Es();break;case 5:Zf(r);break;case 1:Dn(r.type)&&Ua(r);break;case 4:ru(r,r.stateNode.containerInfo);break;case 10:var h=r.type._context,p=r.memoizedProps.value;Ut(Va,h._currentValue),h._currentValue=p;break;case 13:if(h=r.memoizedState,h!==null)return h.dehydrated!==null?(Ut(Vt,Vt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Up(n,r,l):(Ut(Vt,Vt.current&1),n=Vi(n,r,l),n!==null?n.sibling:null);Ut(Vt,Vt.current&1);break;case 19:if(h=(l&r.childLanes)!==0,(n.flags&128)!==0){if(h)return Fp(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ut(Vt,Vt.current),h)break;return null;case 22:case 23:return r.lanes=0,Pp(n,r,l)}return Vi(n,r,l)}var Op,Au,Bp,zp;Op=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Au=function(){},Bp=function(n,r,l,h){var p=n.memoizedProps;if(p!==h){n=r.stateNode,Wr(Ti.current);var _=null;switch(l){case"input":p=X(n,p),h=X(n,h),_=[];break;case"select":p=re({},p,{value:void 0}),h=re({},h,{value:void 0}),_=[];break;case"textarea":p=w(n,p),h=w(n,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(n.onclick=La)}ft(l,h);var T;l=null;for(Q in p)if(!h.hasOwnProperty(Q)&&p.hasOwnProperty(Q)&&p[Q]!=null)if(Q==="style"){var D=p[Q];for(T in D)D.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?_||(_=[]):(_=_||[]).push(Q,null));for(Q in h){var O=h[Q];if(D=p!=null?p[Q]:void 0,h.hasOwnProperty(Q)&&O!==D&&(O!=null||D!=null))if(Q==="style")if(D){for(T in D)!D.hasOwnProperty(T)||O&&O.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in O)O.hasOwnProperty(T)&&D[T]!==O[T]&&(l||(l={}),l[T]=O[T])}else l||(_||(_=[]),_.push(Q,l)),l=O;else Q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,D=D?D.__html:void 0,O!=null&&D!==O&&(_=_||[]).push(Q,O)):Q==="children"?typeof O!="string"&&typeof O!="number"||(_=_||[]).push(Q,""+O):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(O!=null&&Q==="onScroll"&&Ft("scroll",n),_||D===O||(_=[])):(_=_||[]).push(Q,O))}l&&(_=_||[]).push("style",l);var Q=_;(r.updateQueue=Q)&&(r.flags|=4)}},zp=function(n,r,l,h){l!==h&&(r.flags|=4)};function Ho(n,r){if(!zt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:h.sibling=null}}function _n(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,h=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=h,n.childLanes=l,r}function l0(n,r,l){var h=r.pendingProps;switch(qc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(r),null;case 1:return Dn(r.type)&&Na(),_n(r),null;case 3:return h=r.stateNode,bs(),Ot(Ln),Ot(mn),au(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(n===null||n.child===null)&&(Ba(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ui!==null&&(Fu(ui),ui=null))),Au(n,r),_n(r),null;case 5:su(r);var p=Wr(Fo.current);if(l=r.type,n!==null&&r.stateNode!=null)Bp(n,r,l,h,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!h){if(r.stateNode===null)throw Error(t(166));return _n(r),null}if(n=Wr(Ti.current),Ba(r)){h=r.stateNode,l=r.type;var _=r.memoizedProps;switch(h[Ei]=r,h[Lo]=_,n=(r.mode&1)!==0,l){case"dialog":Ft("cancel",h),Ft("close",h);break;case"iframe":case"object":case"embed":Ft("load",h);break;case"video":case"audio":for(p=0;p<Co.length;p++)Ft(Co[p],h);break;case"source":Ft("error",h);break;case"img":case"image":case"link":Ft("error",h),Ft("load",h);break;case"details":Ft("toggle",h);break;case"input":cn(h,_),Ft("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},Ft("invalid",h);break;case"textarea":J(h,_),Ft("invalid",h)}ft(l,_),p=null;for(var T in _)if(_.hasOwnProperty(T)){var D=_[T];T==="children"?typeof D=="string"?h.textContent!==D&&(_.suppressHydrationWarning!==!0&&Ia(h.textContent,D,n),p=["children",D]):typeof D=="number"&&h.textContent!==""+D&&(_.suppressHydrationWarning!==!0&&Ia(h.textContent,D,n),p=["children",""+D]):o.hasOwnProperty(T)&&D!=null&&T==="onScroll"&&Ft("scroll",h)}switch(l){case"input":bt(h),qe(h,_,!0);break;case"textarea":bt(h),ge(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=La)}h=p,r.updateQueue=h,h!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof h.is=="string"?n=T.createElement(l,{is:h.is}):(n=T.createElement(l),l==="select"&&(T=n,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):n=T.createElementNS(n,l),n[Ei]=r,n[Lo]=h,Op(n,r,!1,!1),r.stateNode=n;e:{switch(T=it(l,h),l){case"dialog":Ft("cancel",n),Ft("close",n),p=h;break;case"iframe":case"object":case"embed":Ft("load",n),p=h;break;case"video":case"audio":for(p=0;p<Co.length;p++)Ft(Co[p],n);p=h;break;case"source":Ft("error",n),p=h;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),p=h;break;case"details":Ft("toggle",n),p=h;break;case"input":cn(n,h),p=X(n,h),Ft("invalid",n);break;case"option":p=h;break;case"select":n._wrapperState={wasMultiple:!!h.multiple},p=re({},h,{value:void 0}),Ft("invalid",n);break;case"textarea":J(n,h),p=w(n,h),Ft("invalid",n);break;default:p=h}ft(l,p),D=p;for(_ in D)if(D.hasOwnProperty(_)){var O=D[_];_==="style"?Qe(n,O):_==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ue(n,O)):_==="children"?typeof O=="string"?(l!=="textarea"||O!=="")&&ht(n,O):typeof O=="number"&&ht(n,""+O):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?O!=null&&_==="onScroll"&&Ft("scroll",n):O!=null&&L(n,_,O,T))}switch(l){case"input":bt(n),qe(n,h,!1);break;case"textarea":bt(n),ge(n);break;case"option":h.value!=null&&n.setAttribute("value",""+Ae(h.value));break;case"select":n.multiple=!!h.multiple,_=h.value,_!=null?P(n,!!h.multiple,_,!1):h.defaultValue!=null&&P(n,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=La)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return _n(r),null;case 6:if(n&&r.stateNode!=null)zp(n,r,n.memoizedProps,h);else{if(typeof h!="string"&&r.stateNode===null)throw Error(t(166));if(l=Wr(Fo.current),Wr(Ti.current),Ba(r)){if(h=r.stateNode,l=r.memoizedProps,h[Ei]=r,(_=h.nodeValue!==l)&&(n=Vn,n!==null))switch(n.tag){case 3:Ia(h.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ia(h.nodeValue,l,(n.mode&1)!==0)}_&&(r.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Ei]=r,r.stateNode=h}return _n(r),null;case 13:if(Ot(Vt),h=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Hn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Gf(),Es(),r.flags|=98560,_=!1;else if(_=Ba(r),h!==null&&h.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ei]=r}else Es(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;_n(r),_=!1}else ui!==null&&(Fu(ui),ui=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(h=h!==null,h!==(n!==null&&n.memoizedState!==null)&&h&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Vt.current&1)!==0?Zt===0&&(Zt=3):zu())),r.updateQueue!==null&&(r.flags|=4),_n(r),null);case 4:return bs(),Au(n,r),n===null&&Po(r.stateNode.containerInfo),_n(r),null;case 10:return eu(r.type._context),_n(r),null;case 17:return Dn(r.type)&&Na(),_n(r),null;case 19:if(Ot(Vt),_=r.memoizedState,_===null)return _n(r),null;if(h=(r.flags&128)!==0,T=_.rendering,T===null)if(h)Ho(_,!1);else{if(Zt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=Xa(n),T!==null){for(r.flags|=128,Ho(_,!1),h=T.updateQueue,h!==null&&(r.updateQueue=h,r.flags|=4),r.subtreeFlags=0,h=l,l=r.child;l!==null;)_=l,n=h,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,n=T.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ut(Vt,Vt.current&1|2),r.child}n=n.sibling}_.tail!==null&&Ee()>Is&&(r.flags|=128,h=!0,Ho(_,!1),r.lanes=4194304)}else{if(!h)if(n=Xa(T),n!==null){if(r.flags|=128,h=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Ho(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!zt)return _n(r),null}else 2*Ee()-_.renderingStartTime>Is&&l!==1073741824&&(r.flags|=128,h=!0,Ho(_,!1),r.lanes=4194304);_.isBackwards?(T.sibling=r.child,r.child=T):(l=_.last,l!==null?l.sibling=T:r.child=T,_.last=T)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=Ee(),r.sibling=null,l=Vt.current,Ut(Vt,h?l&1|2:l&1),r):(_n(r),null);case 22:case 23:return Bu(),h=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==h&&(r.flags|=8192),h&&(r.mode&1)!==0?(Gn&1073741824)!==0&&(_n(r),r.subtreeFlags&6&&(r.flags|=8192)):_n(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function c0(n,r){switch(qc(r),r.tag){case 1:return Dn(r.type)&&Na(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return bs(),Ot(Ln),Ot(mn),au(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return su(r),null;case 13:if(Ot(Vt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Es()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ot(Vt),null;case 4:return bs(),null;case 10:return eu(r.type._context),null;case 22:case 23:return Bu(),null;case 24:return null;default:return null}}var el=!1,vn=!1,u0=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Cs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Gt(n,r,h)}else l.current=null}function bu(n,r,l){try{l()}catch(h){Gt(n,r,h)}}var Vp=!1;function h0(n,r){if(Bc=ya,n=xf(),Ic(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var T=0,D=-1,O=-1,Q=0,ve=0,ye=n,_e=null;t:for(;;){for(var Ne;ye!==l||p!==0&&ye.nodeType!==3||(D=T+p),ye!==_||h!==0&&ye.nodeType!==3||(O=T+h),ye.nodeType===3&&(T+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)_e=ye,ye=Ne;for(;;){if(ye===n)break t;if(_e===l&&++Q===p&&(D=T),_e===_&&++ve===h&&(O=T),(Ne=ye.nextSibling)!==null)break;ye=_e,_e=ye.parentNode}ye=Ne}l=D===-1||O===-1?null:{start:D,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for(zc={focusedElem:n,selectionRange:l},ya=!1,ke=r;ke!==null;)if(r=ke,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ke=n;else for(;ke!==null;){r=ke;try{var Be=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,Xt=Be.memoizedState,Y=r.stateNode,V=Y.getSnapshotBeforeUpdate(r.elementType===r.type?Ve:hi(r.type,Ve),Xt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=r.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Gt(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,ke=n;break}ke=r.return}return Be=Vp,Vp=!1,Be}function Go(n,r,l){var h=r.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&bu(r,l,_)}p=p.next}while(p!==h)}}function tl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var h=l.create;l.destroy=h()}l=l.next}while(l!==r)}}function Ru(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Hp(n){var r=n.alternate;r!==null&&(n.alternate=null,Hp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ei],delete r[Lo],delete r[Wc],delete r[Yv],delete r[qv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Gp(n){return n.tag===5||n.tag===3||n.tag===4}function Wp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Gp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cu(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=La));else if(h!==4&&(n=n.child,n!==null))for(Cu(n,r,l),n=n.sibling;n!==null;)Cu(n,r,l),n=n.sibling}function Pu(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(h!==4&&(n=n.child,n!==null))for(Pu(n,r,l),n=n.sibling;n!==null;)Pu(n,r,l),n=n.sibling}var un=null,di=!1;function pr(n,r,l){for(l=l.child;l!==null;)Xp(n,r,l),l=l.sibling}function Xp(n,r,l){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Rt,l)}catch{}switch(l.tag){case 5:vn||Cs(l,r);case 6:var h=un,p=di;un=null,pr(n,r,l),un=h,di=p,un!==null&&(di?(n=un,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):un.removeChild(l.stateNode));break;case 18:un!==null&&(di?(n=un,l=l.stateNode,n.nodeType===8?Gc(n.parentNode,l):n.nodeType===1&&Gc(n,l),So(n)):Gc(un,l.stateNode));break;case 4:h=un,p=di,un=l.stateNode.containerInfo,di=!0,pr(n,r,l),un=h,di=p;break;case 0:case 11:case 14:case 15:if(!vn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&bu(l,r,T),p=p.next}while(p!==h)}pr(n,r,l);break;case 1:if(!vn&&(Cs(l,r),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(D){Gt(l,r,D)}pr(n,r,l);break;case 21:pr(n,r,l);break;case 22:l.mode&1?(vn=(h=vn)||l.memoizedState!==null,pr(n,r,l),vn=h):pr(n,r,l);break;default:pr(n,r,l)}}function jp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new u0),r.forEach(function(h){var p=y0.bind(null,n,h);l.has(h)||(l.add(h),h.then(p,p))})}}function fi(n,r){var l=r.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=n,T=r,D=T;e:for(;D!==null;){switch(D.tag){case 5:un=D.stateNode,di=!1;break e;case 3:un=D.stateNode.containerInfo,di=!0;break e;case 4:un=D.stateNode.containerInfo,di=!0;break e}D=D.return}if(un===null)throw Error(t(160));Xp(_,T,p),un=null,di=!1;var O=p.alternate;O!==null&&(O.return=null),p.return=null}catch(Q){Gt(p,r,Q)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Yp(r,n),r=r.sibling}function Yp(n,r){var l=n.alternate,h=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(r,n),Ai(n),h&4){try{Go(3,n,n.return),tl(3,n)}catch(Ve){Gt(n,n.return,Ve)}try{Go(5,n,n.return)}catch(Ve){Gt(n,n.return,Ve)}}break;case 1:fi(r,n),Ai(n),h&512&&l!==null&&Cs(l,l.return);break;case 5:if(fi(r,n),Ai(n),h&512&&l!==null&&Cs(l,l.return),n.flags&32){var p=n.stateNode;try{ht(p,"")}catch(Ve){Gt(n,n.return,Ve)}}if(h&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,T=l!==null?l.memoizedProps:_,D=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{D==="input"&&_.type==="radio"&&_.name!=null&&ot(p,_),it(D,T);var Q=it(D,_);for(T=0;T<O.length;T+=2){var ve=O[T],ye=O[T+1];ve==="style"?Qe(p,ye):ve==="dangerouslySetInnerHTML"?Ue(p,ye):ve==="children"?ht(p,ye):L(p,ve,ye,Q)}switch(D){case"input":st(p,_);break;case"textarea":de(p,_);break;case"select":var _e=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ne=_.value;Ne!=null?P(p,!!_.multiple,Ne,!1):_e!==!!_.multiple&&(_.defaultValue!=null?P(p,!!_.multiple,_.defaultValue,!0):P(p,!!_.multiple,_.multiple?[]:"",!1))}p[Lo]=_}catch(Ve){Gt(n,n.return,Ve)}}break;case 6:if(fi(r,n),Ai(n),h&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(Ve){Gt(n,n.return,Ve)}}break;case 3:if(fi(r,n),Ai(n),h&4&&l!==null&&l.memoizedState.isDehydrated)try{So(r.containerInfo)}catch(Ve){Gt(n,n.return,Ve)}break;case 4:fi(r,n),Ai(n);break;case 13:fi(r,n),Ai(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Du=Ee())),h&4&&jp(n);break;case 22:if(ve=l!==null&&l.memoizedState!==null,n.mode&1?(vn=(Q=vn)||ve,fi(r,n),vn=Q):fi(r,n),Ai(n),h&8192){if(Q=n.memoizedState!==null,(n.stateNode.isHidden=Q)&&!ve&&(n.mode&1)!==0)for(ke=n,ve=n.child;ve!==null;){for(ye=ke=ve;ke!==null;){switch(_e=ke,Ne=_e.child,_e.tag){case 0:case 11:case 14:case 15:Go(4,_e,_e.return);break;case 1:Cs(_e,_e.return);var Be=_e.stateNode;if(typeof Be.componentWillUnmount=="function"){h=_e,l=_e.return;try{r=h,Be.props=r.memoizedProps,Be.state=r.memoizedState,Be.componentWillUnmount()}catch(Ve){Gt(h,l,Ve)}}break;case 5:Cs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Kp(ye);continue}}Ne!==null?(Ne.return=_e,ke=Ne):Kp(ye)}ve=ve.sibling}e:for(ve=null,ye=n;;){if(ye.tag===5){if(ve===null){ve=ye;try{p=ye.stateNode,Q?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(D=ye.stateNode,O=ye.memoizedProps.style,T=O!=null&&O.hasOwnProperty("display")?O.display:null,D.style.display=Je("display",T))}catch(Ve){Gt(n,n.return,Ve)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=Q?"":ye.memoizedProps}catch(Ve){Gt(n,n.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:fi(r,n),Ai(n),h&4&&jp(n);break;case 21:break;default:fi(r,n),Ai(n)}}function Ai(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Gp(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(ht(p,""),h.flags&=-33);var _=Wp(n);Pu(n,_,p);break;case 3:case 4:var T=h.stateNode.containerInfo,D=Wp(n);Cu(n,D,T);break;default:throw Error(t(161))}}catch(O){Gt(n,n.return,O)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function d0(n,r,l){ke=n,qp(n)}function qp(n,r,l){for(var h=(n.mode&1)!==0;ke!==null;){var p=ke,_=p.child;if(p.tag===22&&h){var T=p.memoizedState!==null||el;if(!T){var D=p.alternate,O=D!==null&&D.memoizedState!==null||vn;D=el;var Q=vn;if(el=T,(vn=O)&&!Q)for(ke=p;ke!==null;)T=ke,O=T.child,T.tag===22&&T.memoizedState!==null?Zp(p):O!==null?(O.return=T,ke=O):Zp(p);for(;_!==null;)ke=_,qp(_),_=_.sibling;ke=p,el=D,vn=Q}$p(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,ke=_):$p(n)}}function $p(n){for(;ke!==null;){var r=ke;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:vn||tl(5,r);break;case 1:var h=r.stateNode;if(r.flags&4&&!vn)if(l===null)h.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:hi(r.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&Kf(r,_,h);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Kf(r,T,l)}break;case 5:var D=r.stateNode;if(l===null&&r.flags&4){l=D;var O=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&l.focus();break;case"img":O.src&&(l.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var Q=r.alternate;if(Q!==null){var ve=Q.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&So(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||r.flags&512&&Ru(r)}catch(_e){Gt(r,r.return,_e)}}if(r===n){ke=null;break}if(l=r.sibling,l!==null){l.return=r.return,ke=l;break}ke=r.return}}function Kp(n){for(;ke!==null;){var r=ke;if(r===n){ke=null;break}var l=r.sibling;if(l!==null){l.return=r.return,ke=l;break}ke=r.return}}function Zp(n){for(;ke!==null;){var r=ke;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{tl(4,r)}catch(O){Gt(r,l,O)}break;case 1:var h=r.stateNode;if(typeof h.componentDidMount=="function"){var p=r.return;try{h.componentDidMount()}catch(O){Gt(r,p,O)}}var _=r.return;try{Ru(r)}catch(O){Gt(r,_,O)}break;case 5:var T=r.return;try{Ru(r)}catch(O){Gt(r,T,O)}}}catch(O){Gt(r,r.return,O)}if(r===n){ke=null;break}var D=r.sibling;if(D!==null){D.return=r.return,ke=D;break}ke=r.return}}var f0=Math.ceil,nl=A.ReactCurrentDispatcher,Iu=A.ReactCurrentOwner,ei=A.ReactCurrentBatchConfig,St=0,rn=null,jt=null,hn=0,Gn=0,Ps=cr(0),Zt=0,Wo=null,jr=0,il=0,Lu=0,Xo=null,Un=null,Du=0,Is=1/0,Hi=null,rl=!1,Nu=null,mr=null,sl=!1,gr=null,ol=0,jo=0,Uu=null,al=-1,ll=0;function bn(){return(St&6)!==0?Ee():al!==-1?al:al=Ee()}function _r(n){return(n.mode&1)===0?1:(St&2)!==0&&hn!==0?hn&-hn:Kv.transition!==null?(ll===0&&(ll=wn()),ll):(n=Pt,n!==0||(n=window.event,n=n===void 0?16:Jd(n.type)),n)}function pi(n,r,l,h){if(50<jo)throw jo=0,Uu=null,Error(t(185));In(n,l,h),((St&2)===0||n!==rn)&&(n===rn&&((St&2)===0&&(il|=l),Zt===4&&vr(n,hn)),kn(n,h),l===1&&St===0&&(r.mode&1)===0&&(Is=Ee()+500,ka&&hr()))}function kn(n,r){var l=n.callbackNode;qn(n,r);var h=Mi(n,n===rn?hn:0);if(h===0)l!==null&&ne(l),n.callbackNode=null,n.callbackPriority=0;else if(r=h&-h,n.callbackPriority!==r){if(l!=null&&ne(l),r===1)n.tag===0?$v(Qp.bind(null,n)):Of(Qp.bind(null,n)),Xv(function(){(St&6)===0&&hr()}),l=null;else{switch(Wd(h)){case 1:l=ze;break;case 4:l=et;break;case 16:l=nt;break;case 536870912:l=vt;break;default:l=nt}l=am(l,Jp.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Jp(n,r){if(al=-1,ll=0,(St&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Ls()&&n.callbackNode!==l)return null;var h=Mi(n,n===rn?hn:0);if(h===0)return null;if((h&30)!==0||(h&n.expiredLanes)!==0||r)r=cl(n,h);else{r=h;var p=St;St|=2;var _=tm();(rn!==n||hn!==r)&&(Hi=null,Is=Ee()+500,qr(n,r));do try{g0();break}catch(D){em(n,D)}while(!0);Qc(),nl.current=_,St=p,jt!==null?r=0:(rn=null,hn=0,r=Zt)}if(r!==0){if(r===2&&(p=Ni(n),p!==0&&(h=p,r=ku(n,p))),r===1)throw l=Wo,qr(n,0),vr(n,h),kn(n,Ee()),l;if(r===6)vr(n,h);else{if(p=n.current.alternate,(h&30)===0&&!p0(p)&&(r=cl(n,h),r===2&&(_=Ni(n),_!==0&&(h=_,r=ku(n,_))),r===1))throw l=Wo,qr(n,0),vr(n,h),kn(n,Ee()),l;switch(n.finishedWork=p,n.finishedLanes=h,r){case 0:case 1:throw Error(t(345));case 2:$r(n,Un,Hi);break;case 3:if(vr(n,h),(h&130023424)===h&&(r=Du+500-Ee(),10<r)){if(Mi(n,0)!==0)break;if(p=n.suspendedLanes,(p&h)!==h){bn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Hc($r.bind(null,n,Un,Hi),r);break}$r(n,Un,Hi);break;case 4:if(vr(n,h),(h&4194240)===h)break;for(r=n.eventTimes,p=-1;0<h;){var T=31-at(h);_=1<<T,T=r[T],T>p&&(p=T),h&=~_}if(h=p,h=Ee()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*f0(h/1960))-h,10<h){n.timeoutHandle=Hc($r.bind(null,n,Un,Hi),h);break}$r(n,Un,Hi);break;case 5:$r(n,Un,Hi);break;default:throw Error(t(329))}}}return kn(n,Ee()),n.callbackNode===l?Jp.bind(null,n):null}function ku(n,r){var l=Xo;return n.current.memoizedState.isDehydrated&&(qr(n,r).flags|=256),n=cl(n,r),n!==2&&(r=Un,Un=l,r!==null&&Fu(r)),n}function Fu(n){Un===null?Un=n:Un.push.apply(Un,n)}function p0(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!ci(_(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function vr(n,r){for(r&=~Lu,r&=~il,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-at(r),h=1<<l;n[l]=-1,r&=~h}}function Qp(n){if((St&6)!==0)throw Error(t(327));Ls();var r=Mi(n,0);if((r&1)===0)return kn(n,Ee()),null;var l=cl(n,r);if(n.tag!==0&&l===2){var h=Ni(n);h!==0&&(r=h,l=ku(n,h))}if(l===1)throw l=Wo,qr(n,0),vr(n,r),kn(n,Ee()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,$r(n,Un,Hi),kn(n,Ee()),null}function Ou(n,r){var l=St;St|=1;try{return n(r)}finally{St=l,St===0&&(Is=Ee()+500,ka&&hr())}}function Yr(n){gr!==null&&gr.tag===0&&(St&6)===0&&Ls();var r=St;St|=1;var l=ei.transition,h=Pt;try{if(ei.transition=null,Pt=1,n)return n()}finally{Pt=h,ei.transition=l,St=r,(St&6)===0&&hr()}}function Bu(){Gn=Ps.current,Ot(Ps)}function qr(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Wv(l)),jt!==null)for(l=jt.return;l!==null;){var h=l;switch(qc(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Na();break;case 3:bs(),Ot(Ln),Ot(mn),au();break;case 5:su(h);break;case 4:bs();break;case 13:Ot(Vt);break;case 19:Ot(Vt);break;case 10:eu(h.type._context);break;case 22:case 23:Bu()}l=l.return}if(rn=n,jt=n=xr(n.current,null),hn=Gn=r,Zt=0,Wo=null,Lu=il=jr=0,Un=Xo=null,Gr!==null){for(r=0;r<Gr.length;r++)if(l=Gr[r],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var T=_.next;_.next=p,h.next=T}l.pending=h}Gr=null}return n}function em(n,r){do{var l=jt;try{if(Qc(),ja.current=Ka,Ya){for(var h=Ht.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Ya=!1}if(Xr=0,nn=Kt=Ht=null,Oo=!1,Bo=0,Iu.current=null,l===null||l.return===null){Zt=1,Wo=r,jt=null;break}e:{var _=n,T=l.return,D=l,O=r;if(r=hn,D.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var Q=O,ve=D,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var _e=ve.alternate;_e?(ve.updateQueue=_e.updateQueue,ve.memoizedState=_e.memoizedState,ve.lanes=_e.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ne=wp(T);if(Ne!==null){Ne.flags&=-257,Ap(Ne,T,D,_,r),Ne.mode&1&&Tp(_,Q,r),r=Ne,O=Q;var Be=r.updateQueue;if(Be===null){var Ve=new Set;Ve.add(O),r.updateQueue=Ve}else Be.add(O);break e}else{if((r&1)===0){Tp(_,Q,r),zu();break e}O=Error(t(426))}}else if(zt&&D.mode&1){var Xt=wp(T);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),Ap(Xt,T,D,_,r),Zc(Rs(O,D));break e}}_=O=Rs(O,D),Zt!==4&&(Zt=2),Xo===null?Xo=[_]:Xo.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var Y=Mp(_,O,r);$f(_,Y);break e;case 1:D=O;var V=_.type,K=_.stateNode;if((_.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(mr===null||!mr.has(K)))){_.flags|=65536,r&=-r,_.lanes|=r;var Te=Ep(_,D,r);$f(_,Te);break e}}_=_.return}while(_!==null)}im(l)}catch(Xe){r=Xe,jt===l&&l!==null&&(jt=l=l.return);continue}break}while(!0)}function tm(){var n=nl.current;return nl.current=Ka,n===null?Ka:n}function zu(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),rn===null||(jr&268435455)===0&&(il&268435455)===0||vr(rn,hn)}function cl(n,r){var l=St;St|=2;var h=tm();(rn!==n||hn!==r)&&(Hi=null,qr(n,r));do try{m0();break}catch(p){em(n,p)}while(!0);if(Qc(),St=l,nl.current=h,jt!==null)throw Error(t(261));return rn=null,hn=0,Zt}function m0(){for(;jt!==null;)nm(jt)}function g0(){for(;jt!==null&&!j();)nm(jt)}function nm(n){var r=om(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,r===null?im(n):jt=r,Iu.current=null}function im(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=l0(l,r,Gn),l!==null){jt=l;return}}else{if(l=c0(l,r),l!==null){l.flags&=32767,jt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,jt=null;return}}if(r=r.sibling,r!==null){jt=r;return}jt=r=n}while(r!==null);Zt===0&&(Zt=5)}function $r(n,r,l){var h=Pt,p=ei.transition;try{ei.transition=null,Pt=1,_0(n,r,l,h)}finally{ei.transition=p,Pt=h}return null}function _0(n,r,l,h){do Ls();while(gr!==null);if((St&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=l.lanes|l.childLanes;if(_a(n,_),n===rn&&(jt=rn=null,hn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||sl||(sl=!0,am(nt,function(){return Ls(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=ei.transition,ei.transition=null;var T=Pt;Pt=1;var D=St;St|=4,Iu.current=null,h0(n,l),Yp(l,n),Fv(zc),ya=!!Bc,zc=Bc=null,n.current=l,d0(l),we(),St=D,Pt=T,ei.transition=_}else n.current=l;if(sl&&(sl=!1,gr=n,ol=p),_=n.pendingLanes,_===0&&(mr=null),fn(l.stateNode),kn(n,Ee()),r!==null)for(h=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(rl)throw rl=!1,n=Nu,Nu=null,n;return(ol&1)!==0&&n.tag!==0&&Ls(),_=n.pendingLanes,(_&1)!==0?n===Uu?jo++:(jo=0,Uu=n):jo=0,hr(),null}function Ls(){if(gr!==null){var n=Wd(ol),r=ei.transition,l=Pt;try{if(ei.transition=null,Pt=16>n?16:n,gr===null)var h=!1;else{if(n=gr,gr=null,ol=0,(St&6)!==0)throw Error(t(331));var p=St;for(St|=4,ke=n.current;ke!==null;){var _=ke,T=_.child;if((ke.flags&16)!==0){var D=_.deletions;if(D!==null){for(var O=0;O<D.length;O++){var Q=D[O];for(ke=Q;ke!==null;){var ve=ke;switch(ve.tag){case 0:case 11:case 15:Go(8,ve,_)}var ye=ve.child;if(ye!==null)ye.return=ve,ke=ye;else for(;ke!==null;){ve=ke;var _e=ve.sibling,Ne=ve.return;if(Hp(ve),ve===Q){ke=null;break}if(_e!==null){_e.return=Ne,ke=_e;break}ke=Ne}}}var Be=_.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var Xt=Ve.sibling;Ve.sibling=null,Ve=Xt}while(Ve!==null)}}ke=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,ke=T;else e:for(;ke!==null;){if(_=ke,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Go(9,_,_.return)}var Y=_.sibling;if(Y!==null){Y.return=_.return,ke=Y;break e}ke=_.return}}var V=n.current;for(ke=V;ke!==null;){T=ke;var K=T.child;if((T.subtreeFlags&2064)!==0&&K!==null)K.return=T,ke=K;else e:for(T=V;ke!==null;){if(D=ke,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:tl(9,D)}}catch(Xe){Gt(D,D.return,Xe)}if(D===T){ke=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,ke=Te;break e}ke=D.return}}if(St=p,hr(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Rt,n)}catch{}h=!0}return h}finally{Pt=l,ei.transition=r}}return!1}function rm(n,r,l){r=Rs(l,r),r=Mp(n,r,1),n=fr(n,r,1),r=bn(),n!==null&&(In(n,1,r),kn(n,r))}function Gt(n,r,l){if(n.tag===3)rm(n,n,l);else for(;r!==null;){if(r.tag===3){rm(r,n,l);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(mr===null||!mr.has(h))){n=Rs(l,n),n=Ep(r,n,1),r=fr(r,n,1),n=bn(),r!==null&&(In(r,1,n),kn(r,n));break}}r=r.return}}function v0(n,r,l){var h=n.pingCache;h!==null&&h.delete(r),r=bn(),n.pingedLanes|=n.suspendedLanes&l,rn===n&&(hn&l)===l&&(Zt===4||Zt===3&&(hn&130023424)===hn&&500>Ee()-Du?qr(n,0):Lu|=l),kn(n,r)}function sm(n,r){r===0&&((n.mode&1)===0?r=1:(r=li,li<<=1,(li&130023424)===0&&(li=4194304)));var l=bn();n=Bi(n,r),n!==null&&(In(n,r,l),kn(n,l))}function x0(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),sm(n,l)}function y0(n,r){var l=0;switch(n.tag){case 13:var h=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=n.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(r),sm(n,l)}var om;om=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ln.current)Nn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Nn=!1,a0(n,r,l);Nn=(n.flags&131072)!==0}else Nn=!1,zt&&(r.flags&1048576)!==0&&Bf(r,Oa,r.index);switch(r.lanes=0,r.tag){case 2:var h=r.type;Qa(n,r),n=r.pendingProps;var p=ys(r,mn.current);As(r,l),p=uu(null,r,h,n,p,l);var _=hu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Dn(h)?(_=!0,Ua(r)):_=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,iu(r),p.updater=Za,r.stateNode=p,p._reactInternals=r,_u(r,h,n,l),r=Su(null,r,h,!0,_,l)):(r.tag=0,zt&&_&&Yc(r),An(null,r,p,l),r=r.child),r;case 16:h=r.elementType;e:{switch(Qa(n,r),n=r.pendingProps,p=h._init,h=p(h._payload),r.type=h,p=r.tag=M0(h),n=hi(h,n),p){case 0:r=yu(null,r,h,n,l);break e;case 1:r=Lp(null,r,h,n,l);break e;case 11:r=bp(null,r,h,n,l);break e;case 14:r=Rp(null,r,h,hi(h.type,n),l);break e}throw Error(t(306,h,""))}return r;case 0:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:hi(h,p),yu(n,r,h,p,l);case 1:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:hi(h,p),Lp(n,r,h,p,l);case 3:e:{if(Dp(r),n===null)throw Error(t(387));h=r.pendingProps,_=r.memoizedState,p=_.element,qf(n,r),Wa(r,h,null,l);var T=r.memoizedState;if(h=T.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){p=Rs(Error(t(423)),r),r=Np(n,r,h,l,p);break e}else if(h!==p){p=Rs(Error(t(424)),r),r=Np(n,r,h,l,p);break e}else for(Hn=lr(r.stateNode.containerInfo.firstChild),Vn=r,zt=!0,ui=null,l=jf(r,null,h,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Es(),h===p){r=Vi(n,r,l);break e}An(n,r,h,l)}r=r.child}return r;case 5:return Zf(r),n===null&&Kc(r),h=r.type,p=r.pendingProps,_=n!==null?n.memoizedProps:null,T=p.children,Vc(h,p)?T=null:_!==null&&Vc(h,_)&&(r.flags|=32),Ip(n,r),An(n,r,T,l),r.child;case 6:return n===null&&Kc(r),null;case 13:return Up(n,r,l);case 4:return ru(r,r.stateNode.containerInfo),h=r.pendingProps,n===null?r.child=Ts(r,null,h,l):An(n,r,h,l),r.child;case 11:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:hi(h,p),bp(n,r,h,p,l);case 7:return An(n,r,r.pendingProps,l),r.child;case 8:return An(n,r,r.pendingProps.children,l),r.child;case 12:return An(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(h=r.type._context,p=r.pendingProps,_=r.memoizedProps,T=p.value,Ut(Va,h._currentValue),h._currentValue=T,_!==null)if(ci(_.value,T)){if(_.children===p.children&&!Ln.current){r=Vi(n,r,l);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var D=_.dependencies;if(D!==null){T=_.child;for(var O=D.firstContext;O!==null;){if(O.context===h){if(_.tag===1){O=zi(-1,l&-l),O.tag=2;var Q=_.updateQueue;if(Q!==null){Q=Q.shared;var ve=Q.pending;ve===null?O.next=O:(O.next=ve.next,ve.next=O),Q.pending=O}}_.lanes|=l,O=_.alternate,O!==null&&(O.lanes|=l),tu(_.return,l,r),D.lanes|=l;break}O=O.next}}else if(_.tag===10)T=_.type===r.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=l,D=T.alternate,D!==null&&(D.lanes|=l),tu(T,l,r),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===r){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}An(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,h=r.pendingProps.children,As(r,l),p=Jn(p),h=h(p),r.flags|=1,An(n,r,h,l),r.child;case 14:return h=r.type,p=hi(h,r.pendingProps),p=hi(h.type,p),Rp(n,r,h,p,l);case 15:return Cp(n,r,r.type,r.pendingProps,l);case 17:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:hi(h,p),Qa(n,r),r.tag=1,Dn(h)?(n=!0,Ua(r)):n=!1,As(r,l),yp(r,h,p),_u(r,h,p,l),Su(null,r,h,!0,n,l);case 19:return Fp(n,r,l);case 22:return Pp(n,r,l)}throw Error(t(156,r.tag))};function am(n,r){return ee(n,r)}function S0(n,r,l,h){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,r,l,h){return new S0(n,r,l,h)}function Vu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function M0(n){if(typeof n=="function")return Vu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ie)return 11;if(n===le)return 14}return 2}function xr(n,r){var l=n.alternate;return l===null?(l=ti(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function ul(n,r,l,h,p,_){var T=2;if(h=n,typeof n=="function")Vu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case N:return Kr(l.children,p,_,r);case z:T=8,p|=8;break;case C:return n=ti(12,l,r,p|2),n.elementType=C,n.lanes=_,n;case $:return n=ti(13,l,r,p),n.elementType=$,n.lanes=_,n;case ce:return n=ti(19,l,r,p),n.elementType=ce,n.lanes=_,n;case oe:return hl(l,p,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:T=10;break e;case F:T=9;break e;case ie:T=11;break e;case le:T=14;break e;case ae:T=16,h=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ti(T,l,r,p),r.elementType=n,r.type=h,r.lanes=_,r}function Kr(n,r,l,h){return n=ti(7,n,h,r),n.lanes=l,n}function hl(n,r,l,h){return n=ti(22,n,h,r),n.elementType=oe,n.lanes=l,n.stateNode={isHidden:!1},n}function Hu(n,r,l){return n=ti(6,n,null,r),n.lanes=l,n}function Gu(n,r,l){return r=ti(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function E0(n,r,l,h,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$n(0),this.expirationTimes=$n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$n(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Wu(n,r,l,h,p,_,T,D,O){return n=new E0(n,r,l,D,O),r===1?(r=1,_===!0&&(r|=8)):r=0,_=ti(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},iu(_),n}function T0(n,r,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:h==null?null:""+h,children:n,containerInfo:r,implementation:l}}function lm(n){if(!n)return ur;n=n._reactInternals;e:{if(Si(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Dn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Dn(l))return kf(n,l,r)}return r}function cm(n,r,l,h,p,_,T,D,O){return n=Wu(l,h,!0,n,p,_,T,D,O),n.context=lm(null),l=n.current,h=bn(),p=_r(l),_=zi(h,p),_.callback=r??null,fr(l,_,p),n.current.lanes=p,In(n,p,h),kn(n,h),n}function dl(n,r,l,h){var p=r.current,_=bn(),T=_r(p);return l=lm(l),r.context===null?r.context=l:r.pendingContext=l,r=zi(_,T),r.payload={element:n},h=h===void 0?null:h,h!==null&&(r.callback=h),n=fr(p,r,T),n!==null&&(pi(n,p,T,_),Ga(n,p,T)),T}function fl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function um(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Xu(n,r){um(n,r),(n=n.alternate)&&um(n,r)}function w0(){return null}var hm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ju(n){this._internalRoot=n}pl.prototype.render=ju.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));dl(n,r,null,null)},pl.prototype.unmount=ju.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Yr(function(){dl(null,n,null,null)}),r[Ui]=null}};function pl(n){this._internalRoot=n}pl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Yd();n={blockedOn:null,target:n,priority:r};for(var l=0;l<sr.length&&r!==0&&r<sr[l].priority;l++);sr.splice(l,0,n),l===0&&Kd(n)}};function Yu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function dm(){}function A0(n,r,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var Q=fl(T);_.call(Q)}}var T=cm(r,h,n,0,null,!1,!1,"",dm);return n._reactRootContainer=T,n[Ui]=T.current,Po(n.nodeType===8?n.parentNode:n),Yr(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof h=="function"){var D=h;h=function(){var Q=fl(O);D.call(Q)}}var O=Wu(n,0,!1,null,null,!1,!1,"",dm);return n._reactRootContainer=O,n[Ui]=O.current,Po(n.nodeType===8?n.parentNode:n),Yr(function(){dl(r,O,l,h)}),O}function gl(n,r,l,h,p){var _=l._reactRootContainer;if(_){var T=_;if(typeof p=="function"){var D=p;p=function(){var O=fl(T);D.call(O)}}dl(r,T,n,p)}else T=A0(l,r,n,p,h);return fl(T)}Xd=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=$t(r.pendingLanes);l!==0&&(_c(r,l|1),kn(r,Ee()),(St&6)===0&&(Is=Ee()+500,hr()))}break;case 13:Yr(function(){var h=Bi(n,1);if(h!==null){var p=bn();pi(h,n,1,p)}}),Xu(n,1)}},vc=function(n){if(n.tag===13){var r=Bi(n,134217728);if(r!==null){var l=bn();pi(r,n,134217728,l)}Xu(n,134217728)}},jd=function(n){if(n.tag===13){var r=_r(n),l=Bi(n,r);if(l!==null){var h=bn();pi(l,n,r,h)}Xu(n,r)}},Yd=function(){return Pt},qd=function(n,r){var l=Pt;try{return Pt=n,r()}finally{Pt=l}},Re=function(n,r,l){switch(r){case"input":if(st(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var h=l[r];if(h!==n&&h.form===n.form){var p=Da(h);if(!p)throw Error(t(90));dt(h),st(h,p)}}}break;case"textarea":de(n,l);break;case"select":r=l.value,r!=null&&P(n,!!l.multiple,r,!1)}},kt=Ou,qt=Yr;var b0={usingClientEntryPoint:!1,Events:[Do,vs,Da,Pe,rt,Ou]},Yo={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R0={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=R(n),n===null?null:n.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||w0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Rt=_l.inject(R0),_t=_l}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0,Fn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yu(r))throw Error(t(200));return T0(n,r,null,l)},Fn.createRoot=function(n,r){if(!Yu(n))throw Error(t(299));var l=!1,h="",p=hm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Wu(n,1,!1,null,null,l,!1,h,p),n[Ui]=r.current,Po(n.nodeType===8?n.parentNode:n),new ju(r)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=R(r),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return Yr(n)},Fn.hydrate=function(n,r,l){if(!ml(r))throw Error(t(200));return gl(null,n,r,!0,l)},Fn.hydrateRoot=function(n,r,l){if(!Yu(n))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",T=hm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=cm(r,null,n,1,l??null,p,!1,_,T),n[Ui]=r.current,Po(n),h)for(n=0;n<h.length;n++)l=h[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new pl(r)},Fn.render=function(n,r,l){if(!ml(r))throw Error(t(200));return gl(null,n,r,!1,l)},Fn.unmountComponentAtNode=function(n){if(!ml(n))throw Error(t(40));return n._reactRootContainer?(Yr(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ui]=null})}),!0):!1},Fn.unstable_batchedUpdates=Ou,Fn.unstable_renderSubtreeIntoContainer=function(n,r,l,h){if(!ml(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gl(n,r,l,!1,h)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var ym;function F0(){if(ym)return Ku.exports;ym=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ku.exports=k0(),Ku.exports}var Sm;function O0(){if(Sm)return vl;Sm=1;var s=F0();return vl.createRoot=s.createRoot,vl.hydrateRoot=s.hydrateRoot,vl}var B0=O0();const z0=Zg(B0);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jg=(...s)=>s.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var H0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=Wt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:a,iconNode:c,...u},d)=>Wt.createElement("svg",{ref:d,...H0,width:e,height:e,stroke:s,strokeWidth:i?Number(t)*24/Number(e):t,className:Jg("lucide",o),...u},[...c.map(([f,m])=>Wt.createElement(f,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=(s,e)=>{const t=Wt.forwardRef(({className:i,...o},a)=>Wt.createElement(G0,{ref:a,iconNode:e,className:Jg(`lucide-${V0(s)}`,i),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=oi("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=oi("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=oi("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=oi("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=oi("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=oi("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=oi("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=oi("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=oi("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=oi("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=oi("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=oi("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);function Q0({value:s,onChange:e,onImport:t,onApply:i,onReset:o,validationError:a}){const c=u=>{var f;const d=(f=u.target.files)==null?void 0:f[0];d&&t(d),u.target.value=""};return me.jsxs("section",{className:"panel editor-panel",children:[me.jsxs("div",{className:"panel-heading",children:[me.jsxs("div",{children:[me.jsx("div",{className:"eyebrow",children:"INPUT SOURCE"}),me.jsx("h2",{children:"Skin JSON"}),me.jsx("p",{children:"Masukkan deskripsi skin dari AI atau unggah file."})]}),me.jsxs("span",{className:"format-chip",children:[me.jsx(e_,{size:14})," JSON"]})]}),me.jsxs("div",{className:"editor-toolbar",children:[me.jsxs("label",{className:"secondary-button file-button",children:[me.jsx(j0,{size:15})," Pilih file",me.jsx("input",{type:"file",accept:".json,application/json",onChange:c})]}),me.jsxs("button",{className:"text-button",onClick:o,type:"button",children:[me.jsx(t_,{size:14})," Contoh"]})]}),me.jsx("textarea",{className:`json-editor ${a?"has-error":""}`,spellCheck:!1,value:s,onChange:u=>e(u.target.value),"aria-label":"Skin JSON input"}),me.jsxs("div",{className:`validation-line ${a?"error":"valid"}`,children:[me.jsx("span",{className:"status-indicator"}),a||"Format JSON valid. Tekan Terapkan untuk memperbarui preview."]}),me.jsxs("button",{className:"primary-button apply-button",type:"button",onClick:i,children:[me.jsx(J0,{size:16})," Terapkan ke preview"]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lc="170",Js={ROTATE:0,DOLLY:1,PAN:2},qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ex=0,Mm=1,tx=2,n_=1,i_=2,qi=3,Ji=0,Bn=1,Ri=2,Lr=0,Qs=1,Em=2,Tm=3,wm=4,nx=5,rs=100,ix=101,rx=102,sx=103,ox=104,ax=200,lx=201,cx=202,ux=203,Uh=204,kh=205,hx=206,dx=207,fx=208,px=209,mx=210,gx=211,_x=212,vx=213,xx=214,Fh=0,Oh=1,Bh=2,no=3,zh=4,Vh=5,Hh=6,Gh=7,r_=0,yx=1,Sx=2,Dr=0,Mx=1,Ex=2,Tx=3,wx=4,Ax=5,bx=6,Rx=7,Am="attached",Cx="detached",s_=300,io=301,ro=302,Wh=303,Xh=304,cc=306,Zl=1e3,Pr=1001,Jl=1002,ln=1003,o_=1004,ea=1005,xi=1006,Wl=1007,Ir=1008,Qi=1009,a_=1010,l_=1011,aa=1012,Ad=1013,as=1014,Ci=1015,ha=1016,bd=1017,Rd=1018,so=1020,c_=35902,u_=1021,h_=1022,jn=1023,d_=1024,f_=1025,eo=1026,oo=1027,p_=1028,Cd=1029,m_=1030,Pd=1031,Id=1033,Xl=33776,jl=33777,Yl=33778,ql=33779,jh=35840,Yh=35841,qh=35842,$h=35843,Kh=36196,Zh=37492,Jh=37496,Qh=37808,ed=37809,td=37810,nd=37811,id=37812,rd=37813,sd=37814,od=37815,ad=37816,ld=37817,cd=37818,ud=37819,hd=37820,dd=37821,$l=36492,fd=36494,pd=36495,g_=36283,md=36284,gd=36285,_d=36286,__=2200,v_=2201,Px=2202,la=2300,Ql=2301,Qu=2302,$s=2400,Ks=2401,ec=2402,Ld=2500,Ix=2501,Lx=3200,Dx=3201,x_=0,Nx=1,$i="",Sn="srgb",co="srgb-linear",uc="linear",Lt="srgb",Ds=7680,bm=519,Ux=512,kx=513,Fx=514,y_=515,Ox=516,Bx=517,zx=518,Vx=519,Rm=35044,Cm="300 es",Ki=2e3,tc=2001;class Ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pm=1234567;const sa=Math.PI/180,ca=180/Math.PI;function kr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Mn(s,e,t){return Math.max(e,Math.min(t,s))}function Dd(s,e){return(s%e+e)%e}function Hx(s,e,t,i,o){return i+(s-e)*(o-i)/(t-e)}function Gx(s,e,t){return s!==e?(t-s)/(e-s):0}function oa(s,e,t){return(1-t)*s+t*e}function Wx(s,e,t,i){return oa(s,e,1-Math.exp(-t*i))}function Xx(s,e=1){return e-Math.abs(Dd(s,e*2)-e)}function jx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Yx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function qx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function $x(s,e){return s+Math.random()*(e-s)}function Kx(s){return s*(.5-Math.random())}function Zx(s){s!==void 0&&(Pm=s);let e=Pm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jx(s){return s*sa}function Qx(s){return s*ca}function ey(s){return(s&s-1)===0&&s!==0}function ty(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ny(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function iy(s,e,t,i,o){const a=Math.cos,c=Math.sin,u=a(t/2),d=c(t/2),f=a((e+i)/2),m=c((e+i)/2),g=a((e-i)/2),v=c((e-i)/2),S=a((i-e)/2),M=c((i-e)/2);switch(o){case"XYX":s.set(u*m,d*g,d*v,u*f);break;case"YZY":s.set(d*v,u*m,d*g,u*f);break;case"ZXZ":s.set(d*g,d*v,u*m,u*f);break;case"XZX":s.set(u*m,d*M,d*S,u*f);break;case"YXY":s.set(d*S,u*m,d*M,u*f);break;case"ZYZ":s.set(d*M,d*S,u*m,u*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ys(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const nc={DEG2RAD:sa,RAD2DEG:ca,generateUUID:kr,clamp:Mn,euclideanModulo:Dd,mapLinear:Hx,inverseLerp:Gx,lerp:oa,damp:Wx,pingpong:Xx,smoothstep:jx,smootherstep:Yx,randInt:qx,randFloat:$x,randFloatSpread:Kx,seededRandom:Zx,degToRad:Jx,radToDeg:Qx,isPowerOfTwo:ey,ceilPowerOfTwo:ty,floorPowerOfTwo:ny,setQuaternionFromProperEuler:iy,normalize:Rn,denormalize:Ys};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,i,o,a,c,u,d,f){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,d,f)}set(e,t,i,o,a,c,u,d,f){const m=this.elements;return m[0]=e,m[1]=o,m[2]=u,m[3]=t,m[4]=a,m[5]=d,m[6]=i,m[7]=c,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],d=i[6],f=i[1],m=i[4],g=i[7],v=i[2],S=i[5],M=i[8],E=o[0],y=o[3],x=o[6],I=o[1],L=o[4],A=o[7],H=o[2],U=o[5],N=o[8];return a[0]=c*E+u*I+d*H,a[3]=c*y+u*L+d*U,a[6]=c*x+u*A+d*N,a[1]=f*E+m*I+g*H,a[4]=f*y+m*L+g*U,a[7]=f*x+m*A+g*N,a[2]=v*E+S*I+M*H,a[5]=v*y+S*L+M*U,a[8]=v*x+S*A+M*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],m=e[8];return t*c*m-t*u*f-i*a*m+i*u*d+o*a*f-o*c*d}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],m=e[8],g=m*c-u*f,v=u*d-m*a,S=f*a-c*d,M=t*g+i*v+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(o*f-m*i)*E,e[2]=(u*i-o*c)*E,e[3]=v*E,e[4]=(m*t-o*d)*E,e[5]=(o*a-u*t)*E,e[6]=S*E,e[7]=(i*d-f*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const d=Math.cos(a),f=Math.sin(a);return this.set(i*d,i*f,-i*(d*c+f*u)+c+e,-o*f,o*d,-o*(-f*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(eh.makeScale(e,t)),this}rotate(e){return this.premultiply(eh.makeRotation(-e)),this}translate(e,t){return this.premultiply(eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eh=new lt;function S_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ic(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ry(){const s=ic("canvas");return s.style.display="block",s}const Im={};function ta(s){s in Im||(Im[s]=!0,console.warn(s))}function sy(s,e,t){return new Promise(function(i,o){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function oy(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ay(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Et={enabled:!0,workingColorSpace:co,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Lt&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Lt&&(s.r=to(s.r),s.g=to(s.g),s.b=to(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?uc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function to(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Lm=[.64,.33,.3,.6,.15,.06],Dm=[.2126,.7152,.0722],Nm=[.3127,.329],Um=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),km=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Et.define({[co]:{primaries:Lm,whitePoint:Nm,transfer:uc,toXYZ:Um,fromXYZ:km,luminanceCoefficients:Dm,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:Lm,whitePoint:Nm,transfer:Lt,toXYZ:Um,fromXYZ:km,luminanceCoefficients:Dm,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}});let Ns;class ly{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=ic("canvas")),Ns.width=e.width,Ns.height=e.height;const i=Ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ic("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Zi(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cy=0;class Nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=kr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(th(o[c].image)):a.push(th(o[c]))}else a=th(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function th(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ly.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uy=0;class dn extends Ur{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,i=Pr,o=Pr,a=xi,c=Ir,u=jn,d=Qi,f=dn.DEFAULT_ANISOTROPY,m=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=kr(),this.name="",this.source=new Nd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zl:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case Jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zl:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case Jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=s_;dn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,i=0,o=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const d=e.elements,f=d[0],m=d[4],g=d[8],v=d[1],S=d[5],M=d[9],E=d[2],y=d[6],x=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+y)<.1&&Math.abs(f+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(f+1)/2,A=(S+1)/2,H=(x+1)/2,U=(m+v)/4,N=(g+E)/4,z=(M+y)/4;return L>A&&L>H?L<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(L),o=U/i,a=N/i):A>H?A<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(A),i=U/o,a=z/o):H<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(H),i=N/a,o=z/a),this.set(i,o,a,t),this}let I=Math.sqrt((y-M)*(y-M)+(g-E)*(g-E)+(v-m)*(v-m));return Math.abs(I)<.001&&(I=1),this.x=(y-M)/I,this.y=(g-E)/I,this.z=(v-m)/I,this.w=Math.acos((f+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hy extends Ur{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new dn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends hy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class M_ extends dn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=ln,this.minFilter=ln,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dy extends dn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=ln,this.minFilter=ln,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let d=i[o+0],f=i[o+1],m=i[o+2],g=i[o+3];const v=a[c+0],S=a[c+1],M=a[c+2],E=a[c+3];if(u===0){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=v,e[t+1]=S,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==v||f!==S||m!==M){let y=1-u;const x=d*v+f*S+m*M+g*E,I=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const H=Math.sqrt(L),U=Math.atan2(H,x*I);y=Math.sin(y*U)/H,u=Math.sin(u*U)/H}const A=u*I;if(d=d*y+v*A,f=f*y+S*A,m=m*y+M*A,g=g*y+E*A,y===1-u){const H=1/Math.sqrt(d*d+f*f+m*m+g*g);d*=H,f*=H,m*=H,g*=H}}e[t]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],d=i[o+1],f=i[o+2],m=i[o+3],g=a[c],v=a[c+1],S=a[c+2],M=a[c+3];return e[t]=u*M+m*g+d*S-f*v,e[t+1]=d*M+m*v+f*g-u*S,e[t+2]=f*M+m*S+u*v-d*g,e[t+3]=m*M-u*g-d*v-f*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,f=u(i/2),m=u(o/2),g=u(a/2),v=d(i/2),S=d(o/2),M=d(a/2);switch(c){case"XYZ":this._x=v*m*g+f*S*M,this._y=f*S*g-v*m*M,this._z=f*m*M+v*S*g,this._w=f*m*g-v*S*M;break;case"YXZ":this._x=v*m*g+f*S*M,this._y=f*S*g-v*m*M,this._z=f*m*M-v*S*g,this._w=f*m*g+v*S*M;break;case"ZXY":this._x=v*m*g-f*S*M,this._y=f*S*g+v*m*M,this._z=f*m*M+v*S*g,this._w=f*m*g-v*S*M;break;case"ZYX":this._x=v*m*g-f*S*M,this._y=f*S*g+v*m*M,this._z=f*m*M-v*S*g,this._w=f*m*g+v*S*M;break;case"YZX":this._x=v*m*g+f*S*M,this._y=f*S*g+v*m*M,this._z=f*m*M-v*S*g,this._w=f*m*g-v*S*M;break;case"XZY":this._x=v*m*g-f*S*M,this._y=f*S*g-v*m*M,this._z=f*m*M+v*S*g,this._w=f*m*g+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],d=t[9],f=t[2],m=t[6],g=t[10],v=i+u+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-d)*S,this._y=(a-f)*S,this._z=(c-o)*S}else if(i>u&&i>g){const S=2*Math.sqrt(1+i-u-g);this._w=(m-d)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(a+f)/S}else if(u>g){const S=2*Math.sqrt(1+u-i-g);this._w=(a-f)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+g-i-u);this._w=(c-o)/S,this._x=(a+f)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,d=t._y,f=t._z,m=t._w;return this._x=i*m+c*u+o*f-a*d,this._y=o*m+c*d+a*u-i*f,this._z=a*m+c*f+i*d-o*u,this._w=c*m-i*u-o*d-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+o*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=o,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*i+t*this._x,this._y=S*o+t*this._y,this._z=S*a+t*this._z,this.normalize(),this}const f=Math.sqrt(d),m=Math.atan2(f,u),g=Math.sin((1-t)*m)/f,v=Math.sin(t*m)/f;return this._w=c*g+this._w*v,this._x=i*g+this._x*v,this._y=o*g+this._y*v,this._z=a*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,d=e.w,f=2*(c*o-u*i),m=2*(u*t-a*o),g=2*(a*i-c*t);return this.x=t+d*f+c*g-u*m,this.y=i+d*m+u*f-a*g,this.z=o+d*g+a*m-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=o*d-a*u,this.y=a*c-i*d,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new q,Fm=new si;class uo{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,mi):mi.fromBufferAttribute(a,c),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xl.copy(i.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),yl.subVectors(this.max,$o),Us.subVectors(e.a,$o),ks.subVectors(e.b,$o),Fs.subVectors(e.c,$o),Sr.subVectors(ks,Us),Mr.subVectors(Fs,ks),Zr.subVectors(Us,Fs);let t=[0,-Sr.z,Sr.y,0,-Mr.z,Mr.y,0,-Zr.z,Zr.y,Sr.z,0,-Sr.x,Mr.z,0,-Mr.x,Zr.z,0,-Zr.x,-Sr.y,Sr.x,0,-Mr.y,Mr.x,0,-Zr.y,Zr.x,0];return!ih(t,Us,ks,Fs,yl)||(t=[1,0,0,0,1,0,0,0,1],!ih(t,Us,ks,Fs,yl))?!1:(Sl.crossVectors(Sr,Mr),t=[Sl.x,Sl.y,Sl.z],ih(t,Us,ks,Fs,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gi=[new q,new q,new q,new q,new q,new q,new q,new q],mi=new q,xl=new uo,Us=new q,ks=new q,Fs=new q,Sr=new q,Mr=new q,Zr=new q,$o=new q,yl=new q,Sl=new q,Jr=new q;function ih(s,e,t,i,o){for(let a=0,c=s.length-3;a<=c;a+=3){Jr.fromArray(s,a);const u=o.x*Math.abs(Jr.x)+o.y*Math.abs(Jr.y)+o.z*Math.abs(Jr.z),d=e.dot(Jr),f=t.dot(Jr),m=i.dot(Jr);if(Math.max(-Math.max(d,f,m),Math.min(d,f,m))>u)return!1}return!0}const fy=new uo,Ko=new q,rh=new q;class ho{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fy.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const t=Ko.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Ko,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(rh)),this.expandByPoint(Ko.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new q,sh=new q,Ml=new q,Er=new q,oh=new q,El=new q,ah=new q;class hc{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){sh.copy(e).add(t).multiplyScalar(.5),Ml.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(sh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Ml),u=Er.dot(this.direction),d=-Er.dot(Ml),f=Er.lengthSq(),m=Math.abs(1-c*c);let g,v,S,M;if(m>0)if(g=c*d-u,v=c*u-d,M=a*m,g>=0)if(v>=-M)if(v<=M){const E=1/m;g*=E,v*=E,S=g*(g+c*v+2*u)+v*(c*g+v+2*d)+f}else v=a,g=Math.max(0,-(c*v+u)),S=-g*g+v*(v+2*d)+f;else v=-a,g=Math.max(0,-(c*v+u)),S=-g*g+v*(v+2*d)+f;else v<=-M?(g=Math.max(0,-(-c*a+u)),v=g>0?-a:Math.min(Math.max(-a,-d),a),S=-g*g+v*(v+2*d)+f):v<=M?(g=0,v=Math.min(Math.max(-a,-d),a),S=v*(v+2*d)+f):(g=Math.max(0,-(c*a+u)),v=g>0?a:Math.min(Math.max(-a,-d),a),S=-g*g+v*(v+2*d)+f);else v=c>0?-a:a,g=Math.max(0,-(c*v+u)),S=-g*g+v*(v+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(sh).addScaledVector(Ml,v),S}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);const i=Wi.dot(this.direction),o=Wi.dot(Wi)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,d;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return f>=0?(i=(e.min.x-v.x)*f,o=(e.max.x-v.x)*f):(i=(e.max.x-v.x)*f,o=(e.min.x-v.x)*f),m>=0?(a=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(a=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),g>=0?(u=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(u=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),i>d||u>o)||((u>i||i!==i)&&(i=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,i,o,a){oh.subVectors(t,e),El.subVectors(i,e),ah.crossVectors(oh,El);let c=this.direction.dot(ah),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Er.subVectors(this.origin,e);const d=u*this.direction.dot(El.crossVectors(Er,El));if(d<0)return null;const f=u*this.direction.dot(oh.cross(Er));if(f<0||d+f>c)return null;const m=-u*Er.dot(ah);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,o,a,c,u,d,f,m,g,v,S,M,E,y){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,d,f,m,g,v,S,M,E,y)}set(e,t,i,o,a,c,u,d,f,m,g,v,S,M,E,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=o,x[1]=a,x[5]=c,x[9]=u,x[13]=d,x[2]=f,x[6]=m,x[10]=g,x[14]=v,x[3]=S,x[7]=M,x[11]=E,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Os.setFromMatrixColumn(e,0).length(),a=1/Os.setFromMatrixColumn(e,1).length(),c=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(o),f=Math.sin(o),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const v=c*m,S=c*g,M=u*m,E=u*g;t[0]=d*m,t[4]=-d*g,t[8]=f,t[1]=S+M*f,t[5]=v-E*f,t[9]=-u*d,t[2]=E-v*f,t[6]=M+S*f,t[10]=c*d}else if(e.order==="YXZ"){const v=d*m,S=d*g,M=f*m,E=f*g;t[0]=v+E*u,t[4]=M*u-S,t[8]=c*f,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=S*u-M,t[6]=E+v*u,t[10]=c*d}else if(e.order==="ZXY"){const v=d*m,S=d*g,M=f*m,E=f*g;t[0]=v-E*u,t[4]=-c*g,t[8]=M+S*u,t[1]=S+M*u,t[5]=c*m,t[9]=E-v*u,t[2]=-c*f,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const v=c*m,S=c*g,M=u*m,E=u*g;t[0]=d*m,t[4]=M*f-S,t[8]=v*f+E,t[1]=d*g,t[5]=E*f+v,t[9]=S*f-M,t[2]=-f,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const v=c*d,S=c*f,M=u*d,E=u*f;t[0]=d*m,t[4]=E-v*g,t[8]=M*g+S,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-f*m,t[6]=S*g+M,t[10]=v-E*g}else if(e.order==="XZY"){const v=c*d,S=c*f,M=u*d,E=u*f;t[0]=d*m,t[4]=-g,t[8]=f*m,t[1]=v*g+E,t[5]=c*m,t[9]=S*g-M,t[2]=M*g-S,t[6]=u*m,t[10]=E*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(py,e,my)}lookAt(e,t,i){const o=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Tr.crossVectors(i,Wn),Tr.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Tr.crossVectors(i,Wn)),Tr.normalize(),Tl.crossVectors(Wn,Tr),o[0]=Tr.x,o[4]=Tl.x,o[8]=Wn.x,o[1]=Tr.y,o[5]=Tl.y,o[9]=Wn.y,o[2]=Tr.z,o[6]=Tl.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],d=i[8],f=i[12],m=i[1],g=i[5],v=i[9],S=i[13],M=i[2],E=i[6],y=i[10],x=i[14],I=i[3],L=i[7],A=i[11],H=i[15],U=o[0],N=o[4],z=o[8],C=o[12],b=o[1],F=o[5],ie=o[9],$=o[13],ce=o[2],le=o[6],ae=o[10],oe=o[14],B=o[3],ue=o[7],re=o[11],k=o[15];return a[0]=c*U+u*b+d*ce+f*B,a[4]=c*N+u*F+d*le+f*ue,a[8]=c*z+u*ie+d*ae+f*re,a[12]=c*C+u*$+d*oe+f*k,a[1]=m*U+g*b+v*ce+S*B,a[5]=m*N+g*F+v*le+S*ue,a[9]=m*z+g*ie+v*ae+S*re,a[13]=m*C+g*$+v*oe+S*k,a[2]=M*U+E*b+y*ce+x*B,a[6]=M*N+E*F+y*le+x*ue,a[10]=M*z+E*ie+y*ae+x*re,a[14]=M*C+E*$+y*oe+x*k,a[3]=I*U+L*b+A*ce+H*B,a[7]=I*N+L*F+A*le+H*ue,a[11]=I*z+L*ie+A*ae+H*re,a[15]=I*C+L*$+A*oe+H*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],d=e[9],f=e[13],m=e[2],g=e[6],v=e[10],S=e[14],M=e[3],E=e[7],y=e[11],x=e[15];return M*(+a*d*g-o*f*g-a*u*v+i*f*v+o*u*S-i*d*S)+E*(+t*d*S-t*f*v+a*c*v-o*c*S+o*f*m-a*d*m)+y*(+t*f*g-t*u*S-a*c*g+i*c*S+a*u*m-i*f*m)+x*(-o*u*m-t*d*g+t*u*v+o*c*g-i*c*v+i*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],m=e[8],g=e[9],v=e[10],S=e[11],M=e[12],E=e[13],y=e[14],x=e[15],I=g*y*f-E*v*f+E*d*S-u*y*S-g*d*x+u*v*x,L=M*v*f-m*y*f-M*d*S+c*y*S+m*d*x-c*v*x,A=m*E*f-M*g*f+M*u*S-c*E*S-m*u*x+c*g*x,H=M*g*d-m*E*d-M*u*v+c*E*v+m*u*y-c*g*y,U=t*I+i*L+o*A+a*H;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/U;return e[0]=I*N,e[1]=(E*v*a-g*y*a-E*o*S+i*y*S+g*o*x-i*v*x)*N,e[2]=(u*y*a-E*d*a+E*o*f-i*y*f-u*o*x+i*d*x)*N,e[3]=(g*d*a-u*v*a-g*o*f+i*v*f+u*o*S-i*d*S)*N,e[4]=L*N,e[5]=(m*y*a-M*v*a+M*o*S-t*y*S-m*o*x+t*v*x)*N,e[6]=(M*d*a-c*y*a-M*o*f+t*y*f+c*o*x-t*d*x)*N,e[7]=(c*v*a-m*d*a+m*o*f-t*v*f-c*o*S+t*d*S)*N,e[8]=A*N,e[9]=(M*g*a-m*E*a-M*i*S+t*E*S+m*i*x-t*g*x)*N,e[10]=(c*E*a-M*u*a+M*i*f-t*E*f-c*i*x+t*u*x)*N,e[11]=(m*u*a-c*g*a-m*i*f+t*g*f+c*i*S-t*u*S)*N,e[12]=H*N,e[13]=(m*E*o-M*g*o+M*i*v-t*E*v-m*i*y+t*g*y)*N,e[14]=(M*u*o-c*E*o-M*i*d+t*E*d+c*i*y-t*u*y)*N,e[15]=(c*g*o-m*u*o+m*i*d-t*g*d-c*i*v+t*u*v)*N,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,d=e.z,f=a*c,m=a*u;return this.set(f*c+i,f*u-o*d,f*d+o*u,0,f*u+o*d,m*u+i,m*d-o*c,0,f*d-o*u,m*d+o*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,f=a+a,m=c+c,g=u+u,v=a*f,S=a*m,M=a*g,E=c*m,y=c*g,x=u*g,I=d*f,L=d*m,A=d*g,H=i.x,U=i.y,N=i.z;return o[0]=(1-(E+x))*H,o[1]=(S+A)*H,o[2]=(M-L)*H,o[3]=0,o[4]=(S-A)*U,o[5]=(1-(v+x))*U,o[6]=(y+I)*U,o[7]=0,o[8]=(M+L)*N,o[9]=(y-I)*N,o[10]=(1-(v+E))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=Os.set(o[0],o[1],o[2]).length();const c=Os.set(o[4],o[5],o[6]).length(),u=Os.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],gi.copy(this);const f=1/a,m=1/c,g=1/u;return gi.elements[0]*=f,gi.elements[1]*=f,gi.elements[2]*=f,gi.elements[4]*=m,gi.elements[5]*=m,gi.elements[6]*=m,gi.elements[8]*=g,gi.elements[9]*=g,gi.elements[10]*=g,t.setFromRotationMatrix(gi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,o,a,c,u=Ki){const d=this.elements,f=2*a/(t-e),m=2*a/(i-o),g=(t+e)/(t-e),v=(i+o)/(i-o);let S,M;if(u===Ki)S=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===tc)S=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=f,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=Ki){const d=this.elements,f=1/(t-e),m=1/(i-o),g=1/(c-a),v=(t+e)*f,S=(i+o)*m;let M,E;if(u===Ki)M=(c+a)*g,E=-2*g;else if(u===tc)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Os=new q,gi=new xt,py=new q(0,0,0),my=new q(1,1,1),Tr=new q,Tl=new q,Wn=new q,Om=new xt,Bm=new si;class Pi{constructor(e=0,t=0,i=0,o=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],d=o[1],f=o[5],m=o[9],g=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Mn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(Mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-Mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Om,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bm.setFromEuler(this),this.setFromQuaternion(Bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class E_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gy=0;const zm=new q,Bs=new si,Xi=new xt,wl=new q,Zo=new q,_y=new q,vy=new si,Vm=new q(1,0,0),Hm=new q(0,1,0),Gm=new q(0,0,1),Wm={type:"added"},xy={type:"removed"},zs={type:"childadded",child:null},lh={type:"childremoved",child:null};class Qt extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new q,t=new Pi,i=new si,o=new q(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new xt},normalMatrix:{value:new lt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Vm,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Gm,e)}translateOnAxis(e,t){return zm.copy(e).applyQuaternion(this.quaternion),this.position.add(zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vm,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wl.copy(e):wl.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Zo,wl,this.up):Xi.lookAt(wl,Zo,this.up),this.quaternion.setFromRotationMatrix(Xi),o&&(Xi.extractRotation(o.matrixWorld),Bs.setFromRotationMatrix(Xi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wm),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xy),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wm),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,_y),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,vy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,m=d.length;f<m;f++){const g=d[f];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(a(e.materials,this.material[d]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),f=c(e.textures),m=c(e.images),g=c(e.shapes),v=c(e.skeletons),S=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),S.length>0&&(i.animations=S),M.length>0&&(i.nodes=M)}return i.object=o,i;function c(u){const d=[];for(const f in u){const m=u[f];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Qt.DEFAULT_UP=new q(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new q,ji=new q,ch=new q,Yi=new q,Vs=new q,Hs=new q,Xm=new q,uh=new q,hh=new q,dh=new q,fh=new Bt,ph=new Bt,mh=new Bt;class vi{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),_i.subVectors(e,t),o.cross(_i);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){_i.subVectors(o,t),ji.subVectors(i,t),ch.subVectors(e,t);const c=_i.dot(_i),u=_i.dot(ji),d=_i.dot(ch),f=ji.dot(ji),m=ji.dot(ch),g=c*f-u*u;if(g===0)return a.set(0,0,0),null;const v=1/g,S=(f*d-u*m)*v,M=(c*m-u*d)*v;return a.set(1-S-M,M,S)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,i,o,a,c,u,d){return this.getBarycoord(e,t,i,o,Yi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Yi.x),d.addScaledVector(c,Yi.y),d.addScaledVector(u,Yi.z),d)}static getInterpolatedAttribute(e,t,i,o,a,c){return fh.setScalar(0),ph.setScalar(0),mh.setScalar(0),fh.fromBufferAttribute(e,t),ph.fromBufferAttribute(e,i),mh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(fh,a.x),c.addScaledVector(ph,a.y),c.addScaledVector(mh,a.z),c}static isFrontFacing(e,t,i,o){return _i.subVectors(i,t),ji.subVectors(e,t),_i.cross(ji).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),_i.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;Vs.subVectors(o,i),Hs.subVectors(a,i),uh.subVectors(e,i);const d=Vs.dot(uh),f=Hs.dot(uh);if(d<=0&&f<=0)return t.copy(i);hh.subVectors(e,o);const m=Vs.dot(hh),g=Hs.dot(hh);if(m>=0&&g<=m)return t.copy(o);const v=d*g-m*f;if(v<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(i).addScaledVector(Vs,c);dh.subVectors(e,a);const S=Vs.dot(dh),M=Hs.dot(dh);if(M>=0&&S<=M)return t.copy(a);const E=S*f-d*M;if(E<=0&&f>=0&&M<=0)return u=f/(f-M),t.copy(i).addScaledVector(Hs,u);const y=m*M-S*g;if(y<=0&&g-m>=0&&S-M>=0)return Xm.subVectors(a,o),u=(g-m)/(g-m+(S-M)),t.copy(o).addScaledVector(Xm,u);const x=1/(y+E+v);return c=E*x,u=v*x,t.copy(i).addScaledVector(Vs,c).addScaledVector(Hs,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const T_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Al={h:0,s:0,l:0};function gh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class gt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Et.workingColorSpace){if(e=Dd(e,1),t=Mn(t,0,1),i=Mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=gh(c,a,e+1/3),this.g=gh(c,a,e),this.b=gh(c,a,e-1/3)}return Et.toWorkingColorSpace(this,o),this}setStyle(e,t=Sn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const i=T_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Et.fromWorkingColorSpace(yn.copy(this),e),Math.round(Mn(yn.r*255,0,255))*65536+Math.round(Mn(yn.g*255,0,255))*256+Math.round(Mn(yn.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(yn.copy(this),t);const i=yn.r,o=yn.g,a=yn.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let d,f;const m=(u+c)/2;if(u===c)d=0,f=0;else{const g=c-u;switch(f=m<=.5?g/(c+u):g/(2-c-u),c){case i:d=(o-a)/g+(o<a?6:0);break;case o:d=(a-i)/g+2;break;case a:d=(i-o)/g+4;break}d/=6}return e.h=d,e.s=f,e.l=m,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Sn){Et.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,i=yn.g,o=yn.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(Al);const i=oa(wr.h,Al.h,t),o=oa(wr.s,Al.s,t),a=oa(wr.l,Al.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new gt;gt.NAMES=T_;let yy=0;class fo extends Ur{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=kr(),this.name="",this.blending=Qs,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=kh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uh&&(i.blendSrc=this.blendSrc),this.blendDst!==kh&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class w_ extends fo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=r_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new q,bl=new ct;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rm,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array),o=Rn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array),o=Rn(o,this.array),a=Rn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rm&&(e.usage=this.usage),e}}class Ud extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class A_ extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class En extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Sy=0;const ni=new xt,_h=new Qt,Gs=new q,Xn=new uo,Jo=new uo,on=new q;class yi extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S_(e)?A_:Ud)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new lt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,i){return ni.makeTranslation(e,t,i),this.applyMatrix4(ni),this}scale(e,t,i){return ni.makeScale(e,t,i),this.applyMatrix4(ni),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new En(i,3))}else{for(let i=0,o=t.count;i<o;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Xn.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Jo.setFromBufferAttribute(u),this.morphTargetsRelative?(on.addVectors(Xn.min,Jo.min),Xn.expandByPoint(on),on.addVectors(Xn.max,Jo.max),Xn.expandByPoint(on)):(Xn.expandByPoint(Jo.min),Xn.expandByPoint(Jo.max))}Xn.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)on.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(on));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let f=0,m=u.count;f<m;f++)on.fromBufferAttribute(u,f),d&&(Gs.fromBufferAttribute(e,f),on.add(Gs)),o=Math.max(o,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let z=0;z<i.count;z++)u[z]=new q,d[z]=new q;const f=new q,m=new q,g=new q,v=new ct,S=new ct,M=new ct,E=new q,y=new q;function x(z,C,b){f.fromBufferAttribute(i,z),m.fromBufferAttribute(i,C),g.fromBufferAttribute(i,b),v.fromBufferAttribute(a,z),S.fromBufferAttribute(a,C),M.fromBufferAttribute(a,b),m.sub(f),g.sub(f),S.sub(v),M.sub(v);const F=1/(S.x*M.y-M.x*S.y);isFinite(F)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-S.y).multiplyScalar(F),y.copy(g).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(F),u[z].add(E),u[C].add(E),u[b].add(E),d[z].add(y),d[C].add(y),d[b].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let z=0,C=I.length;z<C;++z){const b=I[z],F=b.start,ie=b.count;for(let $=F,ce=F+ie;$<ce;$+=3)x(e.getX($+0),e.getX($+1),e.getX($+2))}const L=new q,A=new q,H=new q,U=new q;function N(z){H.fromBufferAttribute(o,z),U.copy(H);const C=u[z];L.copy(C),L.sub(H.multiplyScalar(H.dot(C))).normalize(),A.crossVectors(U,C);const F=A.dot(d[z])<0?-1:1;c.setXYZW(z,L.x,L.y,L.z,F)}for(let z=0,C=I.length;z<C;++z){const b=I[z],F=b.start,ie=b.count;for(let $=F,ce=F+ie;$<ce;$+=3)N(e.getX($+0)),N(e.getX($+1)),N(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,S=i.count;v<S;v++)i.setXYZ(v,0,0,0);const o=new q,a=new q,c=new q,u=new q,d=new q,f=new q,m=new q,g=new q;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),E=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),m.subVectors(c,a),g.subVectors(o,a),m.cross(g),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,y),u.add(m),d.add(m),f.add(m),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,a),g.subVectors(o,a),m.cross(g),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(u,d){const f=u.array,m=u.itemSize,g=u.normalized,v=new f.constructor(d.length*m);let S=0,M=0;for(let E=0,y=d.length;E<y;E++){u.isInterleavedBufferAttribute?S=d[E]*u.data.stride+u.offset:S=d[E]*m;for(let x=0;x<m;x++)v[M++]=f[S++]}return new an(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yi,i=this.index.array,o=this.attributes;for(const u in o){const d=o[u],f=e(d,i);t.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const d=[],f=a[u];for(let m=0,g=f.length;m<g;m++){const v=f[m],S=e(v,i);d.push(S)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const f=i[d];e.data.attributes[d]=f.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],m=[];for(let g=0,v=f.length;g<v;g++){const S=f[g];m.push(S.toJSON(e.data))}m.length>0&&(o[d]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const f in o){const m=o[f];this.setAttribute(f,m.clone(t))}const a=e.morphAttributes;for(const f in a){const m=[],g=a[f];for(let v=0,S=g.length;v<S;v++)m.push(g[v].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,m=c.length;f<m;f++){const g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jm=new xt,Qr=new hc,Rl=new ho,Ym=new q,Cl=new q,Pl=new q,Il=new q,vh=new q,Ll=new q,qm=new q,Dl=new q;class ri extends Qt{constructor(e=new yi,t=new w_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Ll.set(0,0,0);for(let d=0,f=a.length;d<f;d++){const m=u[d],g=a[d];m!==0&&(vh.fromBufferAttribute(g,e),c?Ll.addScaledVector(vh,m):Ll.addScaledVector(vh.sub(t),m))}t.add(Ll)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(a),Qr.copy(e.ray).recast(e.near),!(Rl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(Rl,Ym)===null||Qr.origin.distanceToSquared(Ym)>(e.far-e.near)**2))&&(jm.copy(a).invert(),Qr.copy(e.ray).applyMatrix4(jm),!(i.boundingBox!==null&&Qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,f=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,v=a.groups,S=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const y=v[M],x=c[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(u.count,Math.min(y.start+y.count,S.start+S.count));for(let A=I,H=L;A<H;A+=3){const U=u.getX(A),N=u.getX(A+1),z=u.getX(A+2);o=Nl(this,x,e,i,f,m,g,U,N,z),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),E=Math.min(u.count,S.start+S.count);for(let y=M,x=E;y<x;y+=3){const I=u.getX(y),L=u.getX(y+1),A=u.getX(y+2);o=Nl(this,c,e,i,f,m,g,I,L,A),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const y=v[M],x=c[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let A=I,H=L;A<H;A+=3){const U=A,N=A+1,z=A+2;o=Nl(this,x,e,i,f,m,g,U,N,z),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let y=M,x=E;y<x;y+=3){const I=y,L=y+1,A=y+2;o=Nl(this,c,e,i,f,m,g,I,L,A),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function My(s,e,t,i,o,a,c,u){let d;if(e.side===Bn?d=i.intersectTriangle(c,a,o,!0,u):d=i.intersectTriangle(o,a,c,e.side===Ji,u),d===null)return null;Dl.copy(u),Dl.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(Dl);return f<t.near||f>t.far?null:{distance:f,point:Dl.clone(),object:s}}function Nl(s,e,t,i,o,a,c,u,d,f){s.getVertexPosition(u,Cl),s.getVertexPosition(d,Pl),s.getVertexPosition(f,Il);const m=My(s,e,t,i,Cl,Pl,Il,qm);if(m){const g=new q;vi.getBarycoord(qm,Cl,Pl,Il,g),o&&(m.uv=vi.getInterpolatedAttribute(o,u,d,f,g,new ct)),a&&(m.uv1=vi.getInterpolatedAttribute(a,u,d,f,g,new ct)),c&&(m.normal=vi.getInterpolatedAttribute(c,u,d,f,g,new q),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:u,b:d,c:f,normal:new q,materialIndex:0};vi.getNormal(Cl,Pl,Il,v.normal),m.face=v,m.barycoord=g}return m}class da extends yi{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],f=[],m=[],g=[];let v=0,S=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,o,c,2),M("x","z","y",1,-1,e,i,-t,o,c,3),M("x","y","z",1,-1,e,t,i,o,a,4),M("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(d),this.setAttribute("position",new En(f,3)),this.setAttribute("normal",new En(m,3)),this.setAttribute("uv",new En(g,2));function M(E,y,x,I,L,A,H,U,N,z,C){const b=A/N,F=H/z,ie=A/2,$=H/2,ce=U/2,le=N+1,ae=z+1;let oe=0,B=0;const ue=new q;for(let re=0;re<ae;re++){const k=re*F-$;for(let te=0;te<le;te++){const Ie=te*b-ie;ue[E]=Ie*I,ue[y]=k*L,ue[x]=ce,f.push(ue.x,ue.y,ue.z),ue[E]=0,ue[y]=0,ue[x]=U>0?1:-1,m.push(ue.x,ue.y,ue.z),g.push(te/N),g.push(1-re/z),oe+=1}}for(let re=0;re<z;re++)for(let k=0;k<N;k++){const te=v+k+le*re,Ie=v+k+le*(re+1),Z=v+(k+1)+le*(re+1),he=v+(k+1)+le*re;d.push(te,Ie,he),d.push(Ie,Z,he),B+=6}u.addGroup(S,B,C),S+=B,v+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const i=ao(s[t]);for(const o in i)e[o]=i[o]}return e}function Ey(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function b_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Ty={clone:ao,merge:Cn};var wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nr extends fo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wy,this.fragmentShader=Ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=Ey(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class R_ extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new q,$m=new ct,Km=new ct;class ii extends R_{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,t){return this.getViewBounds(e,$m,Km),t.subVectors(Km,$m)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,f=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*i/f,o*=c.width/d,i*=c.height/f}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,Xs=1;class by extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(Ws,Xs,e,t);o.layers=this.layers,this.add(o);const a=new ii(Ws,Xs,e,t);a.layers=this.layers,this.add(a);const c=new ii(Ws,Xs,e,t);c.layers=this.layers,this.add(c);const u=new ii(Ws,Xs,e,t);u.layers=this.layers,this.add(u);const d=new ii(Ws,Xs,e,t);d.layers=this.layers,this.add(d);const f=new ii(Ws,Xs,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,d]=t;for(const f of t)this.remove(f);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,f,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,c),e.setRenderTarget(i,2,o),e.render(t,u),e.setRenderTarget(i,3,o),e.render(t,d),e.setRenderTarget(i,4,o),e.render(t,f),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,o),e.render(t,m),e.setRenderTarget(g,v,S),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class C_ extends dn{constructor(e,t,i,o,a,c,u,d,f,m){e=e!==void 0?e:[],t=t!==void 0?t:io,super(e,t,i,o,a,c,u,d,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ry extends ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new C_(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new da(5,5,5),a=new Nr({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:Lr});a.uniforms.tEquirect.value=t;const c=new ri(o,a),u=t.minFilter;return t.minFilter===Ir&&(t.minFilter=xi),new by(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}const xh=new q,Cy=new q,Py=new lt;class Cr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=xh.subVectors(i,t).cross(Cy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xh),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Py.getNormalMatrix(e),o=this.coplanarPoint(xh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new ho,Ul=new q;class kd{constructor(e=new Cr,t=new Cr,i=new Cr,o=new Cr,a=new Cr,c=new Cr){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki){const i=this.planes,o=e.elements,a=o[0],c=o[1],u=o[2],d=o[3],f=o[4],m=o[5],g=o[6],v=o[7],S=o[8],M=o[9],E=o[10],y=o[11],x=o[12],I=o[13],L=o[14],A=o[15];if(i[0].setComponents(d-a,v-f,y-S,A-x).normalize(),i[1].setComponents(d+a,v+f,y+S,A+x).normalize(),i[2].setComponents(d+c,v+m,y+M,A+I).normalize(),i[3].setComponents(d-c,v-m,y-M,A-I).normalize(),i[4].setComponents(d-u,v-g,y-E,A-L).normalize(),t===Ki)i[5].setComponents(d+u,v+g,y+E,A+L).normalize();else if(t===tc)i[5].setComponents(u,g,E,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Ul.x=o.normal.x>0?e.max.x:e.min.x,Ul.y=o.normal.y>0?e.max.y:e.min.y,Ul.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function P_(){let s=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function Iy(s){const e=new WeakMap;function t(u,d){const f=u.array,m=u.usage,g=f.byteLength,v=s.createBuffer();s.bindBuffer(d,v),s.bufferData(d,f,m),u.onUploadCallback();let S;if(f instanceof Float32Array)S=s.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)S=s.SHORT;else if(f instanceof Uint32Array)S=s.UNSIGNED_INT;else if(f instanceof Int32Array)S=s.INT;else if(f instanceof Int8Array)S=s.BYTE;else if(f instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:S,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,d,f){const m=d.array,g=d.updateRanges;if(s.bindBuffer(f,u),g.length===0)s.bufferSubData(f,0,m);else{g.sort((S,M)=>S.start-M.start);let v=0;for(let S=1;S<g.length;S++){const M=g[v],E=g[S];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let S=0,M=g.length;S<M;S++){const E=g[S];s.bufferSubData(f,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(s.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,d),f.version=u.version}}return{get:o,remove:a,update:c}}class dc extends yi{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),d=Math.floor(o),f=u+1,m=d+1,g=e/u,v=t/d,S=[],M=[],E=[],y=[];for(let x=0;x<m;x++){const I=x*v-c;for(let L=0;L<f;L++){const A=L*g-a;M.push(A,-I,0),E.push(0,0,1),y.push(L/u),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let I=0;I<u;I++){const L=I+f*x,A=I+f*(x+1),H=I+1+f*(x+1),U=I+1+f*x;S.push(L,A,U),S.push(A,H,U)}this.setIndex(S),this.setAttribute("position",new En(M,3)),this.setAttribute("normal",new En(E,3)),this.setAttribute("uv",new En(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dy=`#ifdef USE_ALPHAHASH
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
#endif`,Ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Oy=`#ifdef USE_AOMAP
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
#endif`,By=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zy=`#ifdef USE_BATCHING
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
#endif`,Vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xy=`#ifdef USE_IRIDESCENCE
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
#endif`,jy=`#ifdef USE_BUMPMAP
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
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tS=`#define PI 3.141592653589793
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
} // validated`,nS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iS=`vec3 transformedNormal = objectNormal;
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
#endif`,rS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lS="gl_FragColor = linearToOutputTexel( gl_FragColor );",cS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uS=`#ifdef USE_ENVMAP
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
#endif`,hS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dS=`#ifdef USE_ENVMAP
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
#endif`,fS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
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
#endif`,mS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xS=`#ifdef USE_GRADIENTMAP
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
}`,yS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ES=`uniform bool receiveShadow;
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
#endif`,TS=`#ifdef USE_ENVMAP
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
#endif`,wS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CS=`PhysicalMaterial material;
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
#endif`,PS=`struct PhysicalMaterial {
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
}`,IS=`
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
#endif`,LS=`#if defined( RE_IndirectDiffuse )
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
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,US=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VS=`#if defined( USE_POINTS_UV )
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
#endif`,HS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YS=`#ifdef USE_MORPHTARGETS
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
#endif`,qS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eM=`#ifdef USE_NORMALMAP
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
#endif`,tM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gM=`float getShadowMask() {
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
}`,_M=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vM=`#ifdef USE_SKINNING
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
#endif`,xM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yM=`#ifdef USE_SKINNING
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
#endif`,SM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wM=`#ifdef USE_TRANSMISSION
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
#endif`,AM=`#ifdef USE_TRANSMISSION
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
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LM=`uniform sampler2D t2D;
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
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`#include <common>
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
}`,OM=`#if DEPTH_PACKING == 3200
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
}`,BM=`#define DISTANCE
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
}`,zM=`#define DISTANCE
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
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`uniform float scale;
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
}`,WM=`uniform vec3 diffuse;
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
}`,XM=`#include <common>
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
}`,jM=`uniform vec3 diffuse;
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
}`,YM=`#define LAMBERT
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
}`,qM=`#define LAMBERT
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
}`,$M=`#define MATCAP
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
}`,KM=`#define MATCAP
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
}`,ZM=`#define NORMAL
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
}`,JM=`#define NORMAL
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
}`,QM=`#define PHONG
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
}`,eE=`#define PHONG
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
}`,tE=`#define STANDARD
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
}`,nE=`#define STANDARD
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
}`,iE=`#define TOON
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
}`,rE=`#define TOON
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
}`,sE=`uniform float size;
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
}`,oE=`uniform vec3 diffuse;
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
}`,aE=`#include <common>
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
}`,lE=`uniform vec3 color;
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
}`,cE=`uniform float rotation;
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
}`,uE=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:Ly,alphahash_pars_fragment:Dy,alphamap_fragment:Ny,alphamap_pars_fragment:Uy,alphatest_fragment:ky,alphatest_pars_fragment:Fy,aomap_fragment:Oy,aomap_pars_fragment:By,batching_pars_vertex:zy,batching_vertex:Vy,begin_vertex:Hy,beginnormal_vertex:Gy,bsdfs:Wy,iridescence_fragment:Xy,bumpmap_pars_fragment:jy,clipping_planes_fragment:Yy,clipping_planes_pars_fragment:qy,clipping_planes_pars_vertex:$y,clipping_planes_vertex:Ky,color_fragment:Zy,color_pars_fragment:Jy,color_pars_vertex:Qy,color_vertex:eS,common:tS,cube_uv_reflection_fragment:nS,defaultnormal_vertex:iS,displacementmap_pars_vertex:rS,displacementmap_vertex:sS,emissivemap_fragment:oS,emissivemap_pars_fragment:aS,colorspace_fragment:lS,colorspace_pars_fragment:cS,envmap_fragment:uS,envmap_common_pars_fragment:hS,envmap_pars_fragment:dS,envmap_pars_vertex:fS,envmap_physical_pars_fragment:TS,envmap_vertex:pS,fog_vertex:mS,fog_pars_vertex:gS,fog_fragment:_S,fog_pars_fragment:vS,gradientmap_pars_fragment:xS,lightmap_pars_fragment:yS,lights_lambert_fragment:SS,lights_lambert_pars_fragment:MS,lights_pars_begin:ES,lights_toon_fragment:wS,lights_toon_pars_fragment:AS,lights_phong_fragment:bS,lights_phong_pars_fragment:RS,lights_physical_fragment:CS,lights_physical_pars_fragment:PS,lights_fragment_begin:IS,lights_fragment_maps:LS,lights_fragment_end:DS,logdepthbuf_fragment:NS,logdepthbuf_pars_fragment:US,logdepthbuf_pars_vertex:kS,logdepthbuf_vertex:FS,map_fragment:OS,map_pars_fragment:BS,map_particle_fragment:zS,map_particle_pars_fragment:VS,metalnessmap_fragment:HS,metalnessmap_pars_fragment:GS,morphinstance_vertex:WS,morphcolor_vertex:XS,morphnormal_vertex:jS,morphtarget_pars_vertex:YS,morphtarget_vertex:qS,normal_fragment_begin:$S,normal_fragment_maps:KS,normal_pars_fragment:ZS,normal_pars_vertex:JS,normal_vertex:QS,normalmap_pars_fragment:eM,clearcoat_normal_fragment_begin:tM,clearcoat_normal_fragment_maps:nM,clearcoat_pars_fragment:iM,iridescence_pars_fragment:rM,opaque_fragment:sM,packing:oM,premultiplied_alpha_fragment:aM,project_vertex:lM,dithering_fragment:cM,dithering_pars_fragment:uM,roughnessmap_fragment:hM,roughnessmap_pars_fragment:dM,shadowmap_pars_fragment:fM,shadowmap_pars_vertex:pM,shadowmap_vertex:mM,shadowmask_pars_fragment:gM,skinbase_vertex:_M,skinning_pars_vertex:vM,skinning_vertex:xM,skinnormal_vertex:yM,specularmap_fragment:SM,specularmap_pars_fragment:MM,tonemapping_fragment:EM,tonemapping_pars_fragment:TM,transmission_fragment:wM,transmission_pars_fragment:AM,uv_pars_fragment:bM,uv_pars_vertex:RM,uv_vertex:CM,worldpos_vertex:PM,background_vert:IM,background_frag:LM,backgroundCube_vert:DM,backgroundCube_frag:NM,cube_vert:UM,cube_frag:kM,depth_vert:FM,depth_frag:OM,distanceRGBA_vert:BM,distanceRGBA_frag:zM,equirect_vert:VM,equirect_frag:HM,linedashed_vert:GM,linedashed_frag:WM,meshbasic_vert:XM,meshbasic_frag:jM,meshlambert_vert:YM,meshlambert_frag:qM,meshmatcap_vert:$M,meshmatcap_frag:KM,meshnormal_vert:ZM,meshnormal_frag:JM,meshphong_vert:QM,meshphong_frag:eE,meshphysical_vert:tE,meshphysical_frag:nE,meshtoon_vert:iE,meshtoon_frag:rE,points_vert:sE,points_frag:oE,shadow_vert:aE,shadow_frag:lE,sprite_vert:cE,sprite_frag:uE},Ce={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},bi={basic:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Cn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Cn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Cn([Ce.points,Ce.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Cn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Cn([Ce.common,Ce.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Cn([Ce.sprite,Ce.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Cn([Ce.common,Ce.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Cn([Ce.lights,Ce.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};bi.physical={uniforms:Cn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const kl={r:0,b:0,g:0},ts=new Pi,hE=new xt;function dE(s,e,t,i,o,a,c){const u=new gt(0);let d=a===!0?0:1,f,m,g=null,v=0,S=null;function M(I){let L=I.isScene===!0?I.background:null;return L&&L.isTexture&&(L=(I.backgroundBlurriness>0?t:e).get(L)),L}function E(I){let L=!1;const A=M(I);A===null?x(u,d):A&&A.isColor&&(x(A,1),L=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(I,L){const A=M(L);A&&(A.isCubeTexture||A.mapping===cc)?(m===void 0&&(m=new ri(new da(1,1,1),new Nr({name:"BackgroundCubeMaterial",uniforms:ao(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(H,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),ts.copy(L.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.material.uniforms.envMap.value=A,m.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(hE.makeRotationFromEuler(ts)),m.material.toneMapped=Et.getTransfer(A.colorSpace)!==Lt,(g!==A||v!==A.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,g=A,v=A.version,S=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(f===void 0&&(f=new ri(new dc(2,2),new Nr({name:"BackgroundMaterial",uniforms:ao(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=A,f.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,f.material.toneMapped=Et.getTransfer(A.colorSpace)!==Lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),f.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||v!==A.version||S!==s.toneMapping)&&(f.material.needsUpdate=!0,g=A,v=A.version,S=s.toneMapping),f.layers.enableAll(),I.unshift(f,f.geometry,f.material,0,0,null))}function x(I,L){I.getRGB(kl,b_(s)),i.buffers.color.setClear(kl.r,kl.g,kl.b,L,c)}return{getClearColor:function(){return u},setClearColor:function(I,L=1){u.set(I),d=L,x(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,x(u,d)},render:E,addToRenderList:y}}function fE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=v(null);let a=o,c=!1;function u(b,F,ie,$,ce){let le=!1;const ae=g($,ie,F);a!==ae&&(a=ae,f(a.object)),le=S(b,$,ie,ce),le&&M(b,$,ie,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(le||c)&&(c=!1,A(b,F,ie,$),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function d(){return s.createVertexArray()}function f(b){return s.bindVertexArray(b)}function m(b){return s.deleteVertexArray(b)}function g(b,F,ie){const $=ie.wireframe===!0;let ce=i[b.id];ce===void 0&&(ce={},i[b.id]=ce);let le=ce[F.id];le===void 0&&(le={},ce[F.id]=le);let ae=le[$];return ae===void 0&&(ae=v(d()),le[$]=ae),ae}function v(b){const F=[],ie=[],$=[];for(let ce=0;ce<t;ce++)F[ce]=0,ie[ce]=0,$[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ie,attributeDivisors:$,object:b,attributes:{},index:null}}function S(b,F,ie,$){const ce=a.attributes,le=F.attributes;let ae=0;const oe=ie.getAttributes();for(const B in oe)if(oe[B].location>=0){const re=ce[B];let k=le[B];if(k===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(k=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(k=b.instanceColor)),re===void 0||re.attribute!==k||k&&re.data!==k.data)return!0;ae++}return a.attributesNum!==ae||a.index!==$}function M(b,F,ie,$){const ce={},le=F.attributes;let ae=0;const oe=ie.getAttributes();for(const B in oe)if(oe[B].location>=0){let re=le[B];re===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(re=b.instanceColor));const k={};k.attribute=re,re&&re.data&&(k.data=re.data),ce[B]=k,ae++}a.attributes=ce,a.attributesNum=ae,a.index=$}function E(){const b=a.newAttributes;for(let F=0,ie=b.length;F<ie;F++)b[F]=0}function y(b){x(b,0)}function x(b,F){const ie=a.newAttributes,$=a.enabledAttributes,ce=a.attributeDivisors;ie[b]=1,$[b]===0&&(s.enableVertexAttribArray(b),$[b]=1),ce[b]!==F&&(s.vertexAttribDivisor(b,F),ce[b]=F)}function I(){const b=a.newAttributes,F=a.enabledAttributes;for(let ie=0,$=F.length;ie<$;ie++)F[ie]!==b[ie]&&(s.disableVertexAttribArray(ie),F[ie]=0)}function L(b,F,ie,$,ce,le,ae){ae===!0?s.vertexAttribIPointer(b,F,ie,ce,le):s.vertexAttribPointer(b,F,ie,$,ce,le)}function A(b,F,ie,$){E();const ce=$.attributes,le=ie.getAttributes(),ae=F.defaultAttributeValues;for(const oe in le){const B=le[oe];if(B.location>=0){let ue=ce[oe];if(ue===void 0&&(oe==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),oe==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){const re=ue.normalized,k=ue.itemSize,te=e.get(ue);if(te===void 0)continue;const Ie=te.buffer,Z=te.type,he=te.bytesPerElement,Se=Z===s.INT||Z===s.UNSIGNED_INT||ue.gpuType===Ad;if(ue.isInterleavedBufferAttribute){const xe=ue.data,Ae=xe.stride,Le=ue.offset;if(xe.isInstancedInterleavedBuffer){for(let $e=0;$e<B.locationSize;$e++)x(B.location+$e,xe.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let $e=0;$e<B.locationSize;$e++)y(B.location+$e);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let $e=0;$e<B.locationSize;$e++)L(B.location+$e,k/B.locationSize,Z,re,Ae*he,(Le+k/B.locationSize*$e)*he,Se)}else{if(ue.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)x(B.location+xe,ue.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<B.locationSize;xe++)y(B.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let xe=0;xe<B.locationSize;xe++)L(B.location+xe,k/B.locationSize,Z,re,k*he,k/B.locationSize*xe*he,Se)}}else if(ae!==void 0){const re=ae[oe];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(B.location,re);break;case 3:s.vertexAttrib3fv(B.location,re);break;case 4:s.vertexAttrib4fv(B.location,re);break;default:s.vertexAttrib1fv(B.location,re)}}}}I()}function H(){z();for(const b in i){const F=i[b];for(const ie in F){const $=F[ie];for(const ce in $)m($[ce].object),delete $[ce];delete F[ie]}delete i[b]}}function U(b){if(i[b.id]===void 0)return;const F=i[b.id];for(const ie in F){const $=F[ie];for(const ce in $)m($[ce].object),delete $[ce];delete F[ie]}delete i[b.id]}function N(b){for(const F in i){const ie=i[F];if(ie[b.id]===void 0)continue;const $=ie[b.id];for(const ce in $)m($[ce].object),delete $[ce];delete ie[b.id]}}function z(){C(),c=!0,a!==o&&(a=o,f(a.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:z,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:U,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:y,disableUnusedAttributes:I}}function pE(s,e,t){let i;function o(f){i=f}function a(f,m){s.drawArrays(i,f,m),t.update(m,i,1)}function c(f,m,g){g!==0&&(s.drawArraysInstanced(i,f,m,g),t.update(m,i,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,m,0,g);let S=0;for(let M=0;M<g;M++)S+=m[M];t.update(S,i,1)}function d(f,m,g,v){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<f.length;M++)c(f[M],m[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(i,f,0,m,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*v[E];t.update(M,i,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function mE(s,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(N){return!(N!==jn&&i.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(N){const z=N===ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Qi&&i.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ci&&!z)}function d(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=d(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=M>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:A,vertexTextures:H,maxSamples:U}}function gE(s){const e=this;let t=null,i=0,o=!1,a=!1;const c=new Cr,u=new lt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||i!==0||o;return o=v,i=g.length,S},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,S){const M=g.clippingPlanes,E=g.clipIntersection,y=g.clipShadows,x=s.get(g);if(!o||M===null||M.length===0||a&&!y)a?m(null):f();else{const I=a?0:i,L=I*4;let A=x.clippingState||null;d.value=A,A=m(M,v,L,S);for(let H=0;H!==L;++H)A[H]=t[H];x.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,v,S,M){const E=g!==null?g.length:0;let y=null;if(E!==0){if(y=d.value,M!==!0||y===null){const x=S+E*4,I=v.matrixWorldInverse;u.getNormalMatrix(I),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,A=S;L!==E;++L,A+=4)c.copy(g[L]).applyMatrix4(I,u),c.normal.toArray(y,A),y[A+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function _E(s){let e=new WeakMap;function t(c,u){return u===Wh?c.mapping=io:u===Xh&&(c.mapping=ro),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===Wh||u===Xh)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const f=new Ry(d.height);return f.fromEquirectangularTexture(s,c),e.set(c,f),c.addEventListener("dispose",o),t(f.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class I_ extends R_{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zs=4,Zm=[.125,.215,.35,.446,.526,.582],ss=20,yh=new I_,Jm=new gt;let Sh=null,Mh=0,Eh=0,Th=!1;const is=(1+Math.sqrt(5))/2,js=1/is,Qm=[new q(-is,js,0),new q(is,js,0),new q(-js,0,is),new q(js,0,is),new q(0,is,-js),new q(0,is,js),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){Sh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,Mh,Eh),this._renderer.xr.enabled=Th,e.scissorTest=!1,Fl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:ha,format:jn,colorSpace:co,depthBuffer:!1},o=tg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vE(a)),this._blurMaterial=xE(a,e,t)}return o}_compileMaterial(e){const t=new ri(this._lodPlanes[0],e);this._renderer.compile(t,yh)}_sceneToCubeUV(e,t,i,o){const u=new ii(90,1,t,i),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(Jm),m.toneMapping=Dr,m.autoClear=!1;const S=new w_({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),M=new ri(new da,S);let E=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,E=!0):(S.color.copy(Jm),E=!0);for(let x=0;x<6;x++){const I=x%3;I===0?(u.up.set(0,d[x],0),u.lookAt(f[x],0,0)):I===1?(u.up.set(0,0,d[x]),u.lookAt(0,f[x],0)):(u.up.set(0,d[x],0),u.lookAt(0,0,f[x]));const L=this._cubeSize;Fl(o,I*L,x>2?L:0,L,L),m.setRenderTarget(o),E&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===io||e.mapping===ro;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ng());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new ri(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;Fl(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,yh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Qm[(o-a-1)%Qm.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,u){const d=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new ri(this._lodPlanes[o],f),v=f.uniforms,S=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*ss-1),E=a/M,y=isFinite(a)?1+Math.floor(m*E):ss;y>ss&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ss}`);const x=[];let I=0;for(let N=0;N<ss;++N){const z=N/E,C=Math.exp(-z*z/2);x.push(C),N===0?I+=C:N<y&&(I+=2*C)}for(let N=0;N<x.length;N++)x[N]=x[N]/I;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:L}=this;v.dTheta.value=M,v.mipInt.value=L-i;const A=this._sizeLods[o],H=3*A*(o>L-Zs?o-L+Zs:0),U=4*(this._cubeSize-A);Fl(t,H,U,3*A,2*A),d.setRenderTarget(t),d.render(g,yh)}}function vE(s){const e=[],t=[],i=[];let o=s;const a=s-Zs+1+Zm.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);t.push(u);let d=1/u;c>s-Zs?d=Zm[c-s+Zs-1]:c===0&&(d=0),i.push(d);const f=1/(u-2),m=-f,g=1+f,v=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,M=6,E=3,y=2,x=1,I=new Float32Array(E*M*S),L=new Float32Array(y*M*S),A=new Float32Array(x*M*S);for(let U=0;U<S;U++){const N=U%3*2/3-1,z=U>2?0:-1,C=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];I.set(C,E*M*U),L.set(v,y*M*U);const b=[U,U,U,U,U,U];A.set(b,x*M*U)}const H=new yi;H.setAttribute("position",new an(I,E)),H.setAttribute("uv",new an(L,y)),H.setAttribute("faceIndex",new an(A,x)),e.push(H),o>Zs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function tg(s,e,t){const i=new ls(s,e,t);return i.texture.mapping=cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fl(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function xE(s,e,t){const i=new Float32Array(ss),o=new q(0,1,0);return new Nr({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function ng(){return new Nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function ig(){return new Nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Fd(){return`

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
	`}function yE(s){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,f=d===Wh||d===Xh,m=d===io||d===ro;if(f||m){let g=e.get(u);const v=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new eg(s)),g=f?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const S=u.image;return f&&S&&S.height>0||m&&S&&o(S)?(t===null&&(t=new eg(s)),g=f?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function o(u){let d=0;const f=6;for(let m=0;m<f;m++)u[m]!==void 0&&d++;return d===f}function a(u){const d=u.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function SE(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&ta("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function ME(s,e,t,i){const o={},a=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);for(const M in v.morphAttributes){const E=v.morphAttributes[M];for(let y=0,x=E.length;y<x;y++)e.remove(E[y])}v.removeEventListener("dispose",c),delete o[v.id];const S=a.get(v);S&&(e.remove(S),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(g,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const M in v)e.update(v[M],s.ARRAY_BUFFER);const S=g.morphAttributes;for(const M in S){const E=S[M];for(let y=0,x=E.length;y<x;y++)e.update(E[y],s.ARRAY_BUFFER)}}function f(g){const v=[],S=g.index,M=g.attributes.position;let E=0;if(S!==null){const I=S.array;E=S.version;for(let L=0,A=I.length;L<A;L+=3){const H=I[L+0],U=I[L+1],N=I[L+2];v.push(H,U,U,N,N,H)}}else if(M!==void 0){const I=M.array;E=M.version;for(let L=0,A=I.length/3-1;L<A;L+=3){const H=L+0,U=L+1,N=L+2;v.push(H,U,U,N,N,H)}}else return;const y=new(S_(v)?A_:Ud)(v,1);y.version=E;const x=a.get(g);x&&e.remove(x),a.set(g,y)}function m(g){const v=a.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&f(g)}else f(g);return a.get(g)}return{get:u,update:d,getWireframeAttribute:m}}function EE(s,e,t){let i;function o(v){i=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function d(v,S){s.drawElements(i,S,a,v*c),t.update(S,i,1)}function f(v,S,M){M!==0&&(s.drawElementsInstanced(i,S,a,v*c,M),t.update(S,i,M))}function m(v,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,S,0,a,v,0,M);let y=0;for(let x=0;x<M;x++)y+=S[x];t.update(y,i,1)}function g(v,S,M,E){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)f(v[x]/c,S[x],E[x]);else{y.multiDrawElementsInstancedWEBGL(i,S,0,a,v,0,E,0,M);let x=0;for(let I=0;I<M;I++)x+=S[I]*E[I];t.update(x,i,1)}}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function TE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=u*(a/3);break;case s.LINES:t.lines+=u*(a/2);break;case s.LINE_STRIP:t.lines+=u*(a-1);break;case s.LINE_LOOP:t.lines+=u*a;break;case s.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function wE(s,e,t){const i=new WeakMap,o=new Bt;function a(c,u,d){const f=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let v=i.get(u);if(v===void 0||v.count!==g){let b=function(){z.dispose(),i.delete(u),u.removeEventListener("dispose",b)};var S=b;v!==void 0&&v.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let A=0;M===!0&&(A=1),E===!0&&(A=2),y===!0&&(A=3);let H=u.attributes.position.count*A,U=1;H>e.maxTextureSize&&(U=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const N=new Float32Array(H*U*4*g),z=new M_(N,H,U,g);z.type=Ci,z.needsUpdate=!0;const C=A*4;for(let F=0;F<g;F++){const ie=x[F],$=I[F],ce=L[F],le=H*U*4*F;for(let ae=0;ae<ie.count;ae++){const oe=ae*C;M===!0&&(o.fromBufferAttribute(ie,ae),N[le+oe+0]=o.x,N[le+oe+1]=o.y,N[le+oe+2]=o.z,N[le+oe+3]=0),E===!0&&(o.fromBufferAttribute($,ae),N[le+oe+4]=o.x,N[le+oe+5]=o.y,N[le+oe+6]=o.z,N[le+oe+7]=0),y===!0&&(o.fromBufferAttribute(ce,ae),N[le+oe+8]=o.x,N[le+oe+9]=o.y,N[le+oe+10]=o.z,N[le+oe+11]=ce.itemSize===4?o.w:1)}}v={count:g,texture:z,size:new ct(H,U)},i.set(u,v),u.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<f.length;y++)M+=f[y];const E=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",f)}d.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:a}}function AE(s,e,t,i){let o=new WeakMap;function a(d){const f=i.render.frame,m=d.geometry,g=e.get(d,m);if(o.get(g)!==f&&(e.update(g),o.set(g,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),o.get(d)!==f&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),o.set(d,f))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==f&&(v.update(),o.set(v,f))}return g}function c(){o=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:c}}class L_ extends dn{constructor(e,t,i,o,a,c,u,d,f,m=eo){if(m!==eo&&m!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===eo&&(i=as),i===void 0&&m===oo&&(i=so),super(null,o,a,c,u,d,m,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:ln,this.minFilter=d!==void 0?d:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const D_=new dn,rg=new L_(1,1),N_=new M_,U_=new dy,k_=new C_,sg=[],og=[],ag=new Float32Array(16),lg=new Float32Array(9),cg=new Float32Array(4);function po(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let a=sg[o];if(a===void 0&&(a=new Float32Array(o),sg[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,s[c].toArray(a,u)}return a}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function fc(s,e){let t=og[e];t===void 0&&(t=new Int32Array(e),og[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function bE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function RE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function CE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function PE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function IE(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;cg.set(i),s.uniformMatrix2fv(this.addr,!1,cg),tn(t,i)}}function LE(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;lg.set(i),s.uniformMatrix3fv(this.addr,!1,lg),tn(t,i)}}function DE(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;ag.set(i),s.uniformMatrix4fv(this.addr,!1,ag),tn(t,i)}}function NE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function UE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function kE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function FE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function OE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function BE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function zE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function VE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function HE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let a;this.type===s.SAMPLER_2D_SHADOW?(rg.compareFunction=y_,a=rg):a=D_,t.setTexture2D(e||a,o)}function GE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||U_,o)}function WE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||k_,o)}function XE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||N_,o)}function jE(s){switch(s){case 5126:return bE;case 35664:return RE;case 35665:return CE;case 35666:return PE;case 35674:return IE;case 35675:return LE;case 35676:return DE;case 5124:case 35670:return NE;case 35667:case 35671:return UE;case 35668:case 35672:return kE;case 35669:case 35673:return FE;case 5125:return OE;case 36294:return BE;case 36295:return zE;case 36296:return VE;case 35678:case 36198:case 36298:case 36306:case 35682:return HE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return XE}}function YE(s,e){s.uniform1fv(this.addr,e)}function qE(s,e){const t=po(e,this.size,2);s.uniform2fv(this.addr,t)}function $E(s,e){const t=po(e,this.size,3);s.uniform3fv(this.addr,t)}function KE(s,e){const t=po(e,this.size,4);s.uniform4fv(this.addr,t)}function ZE(s,e){const t=po(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function JE(s,e){const t=po(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function QE(s,e){const t=po(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function eT(s,e){s.uniform1iv(this.addr,e)}function tT(s,e){s.uniform2iv(this.addr,e)}function nT(s,e){s.uniform3iv(this.addr,e)}function iT(s,e){s.uniform4iv(this.addr,e)}function rT(s,e){s.uniform1uiv(this.addr,e)}function sT(s,e){s.uniform2uiv(this.addr,e)}function oT(s,e){s.uniform3uiv(this.addr,e)}function aT(s,e){s.uniform4uiv(this.addr,e)}function lT(s,e,t){const i=this.cache,o=e.length,a=fc(t,o);en(i,a)||(s.uniform1iv(this.addr,a),tn(i,a));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||D_,a[c])}function cT(s,e,t){const i=this.cache,o=e.length,a=fc(t,o);en(i,a)||(s.uniform1iv(this.addr,a),tn(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||U_,a[c])}function uT(s,e,t){const i=this.cache,o=e.length,a=fc(t,o);en(i,a)||(s.uniform1iv(this.addr,a),tn(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||k_,a[c])}function hT(s,e,t){const i=this.cache,o=e.length,a=fc(t,o);en(i,a)||(s.uniform1iv(this.addr,a),tn(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||N_,a[c])}function dT(s){switch(s){case 5126:return YE;case 35664:return qE;case 35665:return $E;case 35666:return KE;case 35674:return ZE;case 35675:return JE;case 35676:return QE;case 5124:case 35670:return eT;case 35667:case 35671:return tT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return rT;case 36294:return sT;case 36295:return oT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return hT}}class fT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jE(t.type)}}class pT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dT(t.type)}}class mT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function ug(s,e){s.seq.push(e),s.map[e.id]=e}function gT(s,e,t){const i=s.name,o=i.length;for(wh.lastIndex=0;;){const a=wh.exec(i),c=wh.lastIndex;let u=a[1];const d=a[2]==="]",f=a[3];if(d&&(u=u|0),f===void 0||f==="["&&c+2===o){ug(t,f===void 0?new fT(u,s,e):new pT(u,s,e));break}else{let g=t.map[u];g===void 0&&(g=new mT(u),ug(t,g)),t=g}}}class Kl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);gT(a,c,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function hg(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const _T=37297;let vT=0;function xT(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const dg=new lt;function yT(s){Et._getMatrix(dg,Et.workingColorSpace,s);const e=`mat3( ${dg.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case uc:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function fg(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+xT(s.getShaderSource(e),c)}else return o}function ST(s,e){const t=yT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function MT(s,e){let t;switch(e){case Mx:t="Linear";break;case Ex:t="Reinhard";break;case Tx:t="Cineon";break;case wx:t="ACESFilmic";break;case bx:t="AgX";break;case Rx:t="Neutral";break;case Ax:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ol=new q;function ET(){Et.getLuminanceCoefficients(Ol);const s=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function wT(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AT(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=s.getActiveAttrib(e,o),c=a.name;let u=1;a.type===s.FLOAT_MAT2&&(u=2),a.type===s.FLOAT_MAT3&&(u=3),a.type===s.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:s.getAttribLocation(e,c),locationSize:u}}return t}function na(s){return s!==""}function pg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bT=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(s){return s.replace(bT,CT)}const RT=new Map;function CT(s,e){let t=ut[e];if(t===void 0){const i=RT.get(e);if(i!==void 0)t=ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vd(t)}const PT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gg(s){return s.replace(PT,IT)}function IT(s,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function _g(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===i_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function DT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function UT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case r_:e="ENVMAP_BLENDING_MULTIPLY";break;case yx:e="ENVMAP_BLENDING_MIX";break;case Sx:e="ENVMAP_BLENDING_ADD";break}return e}function kT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function FT(s,e,t,i){const o=s.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=LT(t),f=DT(t),m=NT(t),g=UT(t),v=kT(t),S=TT(t),M=wT(a),E=o.createProgram();let y,x,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(na).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(na).join(`
`),x.length>0&&(x+=`
`)):(y=[_g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),x=[_g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dr?"#define TONE_MAPPING":"",t.toneMapping!==Dr?ut.tonemapping_pars_fragment:"",t.toneMapping!==Dr?MT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,ST("linearToOutputTexel",t.outputColorSpace),ET(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),c=vd(c),c=pg(c,t),c=mg(c,t),u=vd(u),u=pg(u,t),u=mg(u,t),c=gg(c),u=gg(u),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=I+y+c,A=I+x+u,H=hg(o,o.VERTEX_SHADER,L),U=hg(o,o.FRAGMENT_SHADER,A);o.attachShader(E,H),o.attachShader(E,U),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function N(F){if(s.debug.checkShaderErrors){const ie=o.getProgramInfoLog(E).trim(),$=o.getShaderInfoLog(H).trim(),ce=o.getShaderInfoLog(U).trim();let le=!0,ae=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(le=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,H,U);else{const oe=fg(o,H,"vertex"),B=fg(o,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ie+`
`+oe+`
`+B)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):($===""||ce==="")&&(ae=!1);ae&&(F.diagnostics={runnable:le,programLog:ie,vertexShader:{log:$,prefix:y},fragmentShader:{log:ce,prefix:x}})}o.deleteShader(H),o.deleteShader(U),z=new Kl(o,E),C=AT(o,E)}let z;this.getUniforms=function(){return z===void 0&&N(this),z};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=o.getProgramParameter(E,_T)),b},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=H,this.fragmentShader=U,this}let OT=0;class BT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new zT(e),t.set(e,i)),i}}class zT{constructor(e){this.id=OT++,this.code=e,this.usedTimes=0}}function VT(s,e,t,i,o,a,c){const u=new E_,d=new BT,f=new Set,m=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return f.add(C),C===0?"uv":`uv${C}`}function y(C,b,F,ie,$){const ce=ie.fog,le=$.geometry,ae=C.isMeshStandardMaterial?ie.environment:null,oe=(C.isMeshStandardMaterial?t:e).get(C.envMap||ae),B=oe&&oe.mapping===cc?oe.image.height:null,ue=M[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const re=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,k=re!==void 0?re.length:0;let te=0;le.morphAttributes.position!==void 0&&(te=1),le.morphAttributes.normal!==void 0&&(te=2),le.morphAttributes.color!==void 0&&(te=3);let Ie,Z,he,Se;if(ue){const yt=bi[ue];Ie=yt.vertexShader,Z=yt.fragmentShader}else Ie=C.vertexShader,Z=C.fragmentShader,d.update(C),he=d.getVertexShaderID(C),Se=d.getFragmentShaderID(C);const xe=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Le=$.isInstancedMesh===!0,$e=$.isBatchedMesh===!0,bt=!!C.map,dt=!!C.matcap,It=!!oe,X=!!C.aoMap,cn=!!C.lightMap,ot=!!C.bumpMap,st=!!C.normalMap,qe=!!C.displacementMap,Tt=!!C.emissiveMap,je=!!C.metalnessMap,P=!!C.roughnessMap,w=C.anisotropy>0,J=C.clearcoat>0,de=C.dispersion>0,ge=C.iridescence>0,fe=C.sheen>0,He=C.transmission>0,be=w&&!!C.anisotropyMap,Ue=J&&!!C.clearcoatMap,ht=J&&!!C.clearcoatNormalMap,Me=J&&!!C.clearcoatRoughnessMap,Fe=ge&&!!C.iridescenceMap,Je=ge&&!!C.iridescenceThicknessMap,Qe=fe&&!!C.sheenColorMap,Oe=fe&&!!C.sheenRoughnessMap,ft=!!C.specularMap,it=!!C.specularColorMap,Ct=!!C.specularIntensityMap,G=He&&!!C.transmissionMap,Re=He&&!!C.thicknessMap,se=!!C.gradientMap,pe=!!C.alphaMap,De=C.alphaTest>0,Pe=!!C.alphaHash,rt=!!C.extensions;let kt=Dr;C.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(kt=s.toneMapping);const qt={shaderID:ue,shaderType:C.type,shaderName:C.name,vertexShader:Ie,fragmentShader:Z,defines:C.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:$e,batchingColor:$e&&$._colorsTexture!==null,instancing:Le,instancingColor:Le&&$.instanceColor!==null,instancingMorph:Le&&$.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:co,alphaToCoverage:!!C.alphaToCoverage,map:bt,matcap:dt,envMap:It,envMapMode:It&&oe.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:cn,bumpMap:ot,normalMap:st,displacementMap:v&&qe,emissiveMap:Tt,normalMapObjectSpace:st&&C.normalMapType===Nx,normalMapTangentSpace:st&&C.normalMapType===x_,metalnessMap:je,roughnessMap:P,anisotropy:w,anisotropyMap:be,clearcoat:J,clearcoatMap:Ue,clearcoatNormalMap:ht,clearcoatRoughnessMap:Me,dispersion:de,iridescence:ge,iridescenceMap:Fe,iridescenceThicknessMap:Je,sheen:fe,sheenColorMap:Qe,sheenRoughnessMap:Oe,specularMap:ft,specularColorMap:it,specularIntensityMap:Ct,transmission:He,transmissionMap:G,thicknessMap:Re,gradientMap:se,opaque:C.transparent===!1&&C.blending===Qs&&C.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:Pe,combine:C.combine,mapUv:bt&&E(C.map.channel),aoMapUv:X&&E(C.aoMap.channel),lightMapUv:cn&&E(C.lightMap.channel),bumpMapUv:ot&&E(C.bumpMap.channel),normalMapUv:st&&E(C.normalMap.channel),displacementMapUv:qe&&E(C.displacementMap.channel),emissiveMapUv:Tt&&E(C.emissiveMap.channel),metalnessMapUv:je&&E(C.metalnessMap.channel),roughnessMapUv:P&&E(C.roughnessMap.channel),anisotropyMapUv:be&&E(C.anisotropyMap.channel),clearcoatMapUv:Ue&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:ht&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&E(C.sheenRoughnessMap.channel),specularMapUv:ft&&E(C.specularMap.channel),specularColorMapUv:it&&E(C.specularColorMap.channel),specularIntensityMapUv:Ct&&E(C.specularIntensityMap.channel),transmissionMapUv:G&&E(C.transmissionMap.channel),thicknessMapUv:Re&&E(C.thicknessMap.channel),alphaMapUv:pe&&E(C.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(st||w),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!le.attributes.uv&&(bt||pe),fog:!!ce,useFog:C.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:$.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:bt&&C.map.isVideoTexture===!0&&Et.getTransfer(C.map.colorSpace)===Lt,decodeVideoTextureEmissive:Tt&&C.emissiveMap.isVideoTexture===!0&&Et.getTransfer(C.emissiveMap.colorSpace)===Lt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ri,flipSided:C.side===Bn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:rt&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&C.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return qt.vertexUv1s=f.has(1),qt.vertexUv2s=f.has(2),qt.vertexUv3s=f.has(3),f.clear(),qt}function x(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)b.push(F),b.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(I(b,C),L(b,C),b.push(s.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function I(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function L(C,b){u.disableAll(),b.supportsVertexTextures&&u.enable(0),b.instancing&&u.enable(1),b.instancingColor&&u.enable(2),b.instancingMorph&&u.enable(3),b.matcap&&u.enable(4),b.envMap&&u.enable(5),b.normalMapObjectSpace&&u.enable(6),b.normalMapTangentSpace&&u.enable(7),b.clearcoat&&u.enable(8),b.iridescence&&u.enable(9),b.alphaTest&&u.enable(10),b.vertexColors&&u.enable(11),b.vertexAlphas&&u.enable(12),b.vertexUv1s&&u.enable(13),b.vertexUv2s&&u.enable(14),b.vertexUv3s&&u.enable(15),b.vertexTangents&&u.enable(16),b.anisotropy&&u.enable(17),b.alphaHash&&u.enable(18),b.batching&&u.enable(19),b.dispersion&&u.enable(20),b.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.reverseDepthBuffer&&u.enable(4),b.skinning&&u.enable(5),b.morphTargets&&u.enable(6),b.morphNormals&&u.enable(7),b.morphColors&&u.enable(8),b.premultipliedAlpha&&u.enable(9),b.shadowMapEnabled&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.decodeVideoTextureEmissive&&u.enable(20),b.alphaToCoverage&&u.enable(21),C.push(u.mask)}function A(C){const b=M[C.type];let F;if(b){const ie=bi[b];F=Ty.clone(ie.uniforms)}else F=C.uniforms;return F}function H(C,b){let F;for(let ie=0,$=m.length;ie<$;ie++){const ce=m[ie];if(ce.cacheKey===b){F=ce,++F.usedTimes;break}}return F===void 0&&(F=new FT(s,b,C,a),m.push(F)),F}function U(C){if(--C.usedTimes===0){const b=m.indexOf(C);m[b]=m[m.length-1],m.pop(),C.destroy()}}function N(C){d.remove(C)}function z(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:A,acquireProgram:H,releaseProgram:U,releaseShaderCache:N,programs:m,dispose:z}}function HT(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let u=s.get(c);return u===void 0&&(u={},s.set(c,u)),u}function i(c){s.delete(c)}function o(c,u,d){s.get(c)[u]=d}function a(){s=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function GT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xg(){const s=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(g,v,S,M,E,y){let x=s[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:S,groupOrder:M,renderOrder:g.renderOrder,z:E,group:y},s[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=S,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=E,x.group=y),e++,x}function u(g,v,S,M,E,y){const x=c(g,v,S,M,E,y);S.transmission>0?i.push(x):S.transparent===!0?o.push(x):t.push(x)}function d(g,v,S,M,E,y){const x=c(g,v,S,M,E,y);S.transmission>0?i.unshift(x):S.transparent===!0?o.unshift(x):t.unshift(x)}function f(g,v){t.length>1&&t.sort(g||GT),i.length>1&&i.sort(v||vg),o.length>1&&o.sort(v||vg)}function m(){for(let g=e,v=s.length;g<v;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:u,unshift:d,finish:m,sort:f}}function WT(){let s=new WeakMap;function e(i,o){const a=s.get(i);let c;return a===void 0?(c=new xg,s.set(i,[c])):o>=a.length?(c=new xg,a.push(c)):c=a[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function XT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new gt};break;case"SpotLight":t={position:new q,direction:new q,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function jT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let YT=0;function qT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $T(s){const e=new XT,t=jT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new q);const o=new q,a=new xt,c=new xt;function u(f){let m=0,g=0,v=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let S=0,M=0,E=0,y=0,x=0,I=0,L=0,A=0,H=0,U=0,N=0;f.sort(qT);for(let C=0,b=f.length;C<b;C++){const F=f[C],ie=F.color,$=F.intensity,ce=F.distance,le=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)m+=ie.r*$,g+=ie.g*$,v+=ie.b*$;else if(F.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(F.sh.coefficients[ae],$);N++}else if(F.isDirectionalLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const oe=F.shadow,B=t.get(F);B.shadowIntensity=oe.intensity,B.shadowBias=oe.bias,B.shadowNormalBias=oe.normalBias,B.shadowRadius=oe.radius,B.shadowMapSize=oe.mapSize,i.directionalShadow[S]=B,i.directionalShadowMap[S]=le,i.directionalShadowMatrix[S]=F.shadow.matrix,I++}i.directional[S]=ae,S++}else if(F.isSpotLight){const ae=e.get(F);ae.position.setFromMatrixPosition(F.matrixWorld),ae.color.copy(ie).multiplyScalar($),ae.distance=ce,ae.coneCos=Math.cos(F.angle),ae.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ae.decay=F.decay,i.spot[E]=ae;const oe=F.shadow;if(F.map&&(i.spotLightMap[H]=F.map,H++,oe.updateMatrices(F),F.castShadow&&U++),i.spotLightMatrix[E]=oe.matrix,F.castShadow){const B=t.get(F);B.shadowIntensity=oe.intensity,B.shadowBias=oe.bias,B.shadowNormalBias=oe.normalBias,B.shadowRadius=oe.radius,B.shadowMapSize=oe.mapSize,i.spotShadow[E]=B,i.spotShadowMap[E]=le,A++}E++}else if(F.isRectAreaLight){const ae=e.get(F);ae.color.copy(ie).multiplyScalar($),ae.halfWidth.set(F.width*.5,0,0),ae.halfHeight.set(0,F.height*.5,0),i.rectArea[y]=ae,y++}else if(F.isPointLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),ae.distance=F.distance,ae.decay=F.decay,F.castShadow){const oe=F.shadow,B=t.get(F);B.shadowIntensity=oe.intensity,B.shadowBias=oe.bias,B.shadowNormalBias=oe.normalBias,B.shadowRadius=oe.radius,B.shadowMapSize=oe.mapSize,B.shadowCameraNear=oe.camera.near,B.shadowCameraFar=oe.camera.far,i.pointShadow[M]=B,i.pointShadowMap[M]=le,i.pointShadowMatrix[M]=F.shadow.matrix,L++}i.point[M]=ae,M++}else if(F.isHemisphereLight){const ae=e.get(F);ae.skyColor.copy(F.color).multiplyScalar($),ae.groundColor.copy(F.groundColor).multiplyScalar($),i.hemi[x]=ae,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=v;const z=i.hash;(z.directionalLength!==S||z.pointLength!==M||z.spotLength!==E||z.rectAreaLength!==y||z.hemiLength!==x||z.numDirectionalShadows!==I||z.numPointShadows!==L||z.numSpotShadows!==A||z.numSpotMaps!==H||z.numLightProbes!==N)&&(i.directional.length=S,i.spot.length=E,i.rectArea.length=y,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=A+H-U,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=N,z.directionalLength=S,z.pointLength=M,z.spotLength=E,z.rectAreaLength=y,z.hemiLength=x,z.numDirectionalShadows=I,z.numPointShadows=L,z.numSpotShadows=A,z.numSpotMaps=H,z.numLightProbes=N,i.version=YT++)}function d(f,m){let g=0,v=0,S=0,M=0,E=0;const y=m.matrixWorldInverse;for(let x=0,I=f.length;x<I;x++){const L=f[x];if(L.isDirectionalLight){const A=i.directional[g];A.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),g++}else if(L.isSpotLight){const A=i.spot[S];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const A=i.rectArea[M];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(y),c.identity(),a.copy(L.matrixWorld),a.premultiply(y),c.extractRotation(a),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const A=i.point[v];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const A=i.hemi[E];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(y),E++}}}return{setup:u,setupView:d,state:i}}function yg(s){const e=new $T(s),t=[],i=[];function o(m){f.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function c(m){i.push(m)}function u(){e.setup(t)}function d(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:f,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:c}}function KT(s){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new yg(s),e.set(o,[u])):a>=c.length?(u=new yg(s),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}class ZT extends fo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JT extends fo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ew=`uniform sampler2D shadow_pass;
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
}`;function tw(s,e,t){let i=new kd;const o=new ct,a=new ct,c=new Bt,u=new ZT({depthPacking:Dx}),d=new JT,f={},m=t.maxTextureSize,g={[Ji]:Bn,[Bn]:Ji,[Ri]:Ri},v=new Nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:QT,fragmentShader:ew}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new yi;M.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ri(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n_;let x=this.type;this.render=function(U,N,z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;const C=s.getRenderTarget(),b=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(Lr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const $=x!==qi&&this.type===qi,ce=x===qi&&this.type!==qi;for(let le=0,ae=U.length;le<ae;le++){const oe=U[le],B=oe.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const ue=B.getFrameExtents();if(o.multiply(ue),a.copy(B.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/ue.x),o.x=a.x*ue.x,B.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/ue.y),o.y=a.y*ue.y,B.mapSize.y=a.y)),B.map===null||$===!0||ce===!0){const k=this.type!==qi?{minFilter:ln,magFilter:ln}:{};B.map!==null&&B.map.dispose(),B.map=new ls(o.x,o.y,k),B.map.texture.name=oe.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const re=B.getViewportCount();for(let k=0;k<re;k++){const te=B.getViewport(k);c.set(a.x*te.x,a.y*te.y,a.x*te.z,a.y*te.w),ie.viewport(c),B.updateMatrices(oe,k),i=B.getFrustum(),A(N,z,B.camera,oe,this.type)}B.isPointLightShadow!==!0&&this.type===qi&&I(B,z),B.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(C,b,F)};function I(U,N){const z=e.update(E);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ls(o.x,o.y)),v.uniforms.shadow_pass.value=U.map.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(N,null,z,v,E,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(N,null,z,S,E,null)}function L(U,N,z,C){let b=null;const F=z.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(F!==void 0)b=F;else if(b=z.isPointLight===!0?d:u,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ie=b.uuid,$=N.uuid;let ce=f[ie];ce===void 0&&(ce={},f[ie]=ce);let le=ce[$];le===void 0&&(le=b.clone(),ce[$]=le,N.addEventListener("dispose",H)),b=le}if(b.visible=N.visible,b.wireframe=N.wireframe,C===qi?b.side=N.shadowSide!==null?N.shadowSide:N.side:b.side=N.shadowSide!==null?N.shadowSide:g[N.side],b.alphaMap=N.alphaMap,b.alphaTest=N.alphaTest,b.map=N.map,b.clipShadows=N.clipShadows,b.clippingPlanes=N.clippingPlanes,b.clipIntersection=N.clipIntersection,b.displacementMap=N.displacementMap,b.displacementScale=N.displacementScale,b.displacementBias=N.displacementBias,b.wireframeLinewidth=N.wireframeLinewidth,b.linewidth=N.linewidth,z.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ie=s.properties.get(b);ie.light=z}return b}function A(U,N,z,C,b){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&b===qi)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,U.matrixWorld);const $=e.update(U),ce=U.material;if(Array.isArray(ce)){const le=$.groups;for(let ae=0,oe=le.length;ae<oe;ae++){const B=le[ae],ue=ce[B.materialIndex];if(ue&&ue.visible){const re=L(U,ue,C,b);U.onBeforeShadow(s,U,N,z,$,re,B),s.renderBufferDirect(z,null,$,re,U,B),U.onAfterShadow(s,U,N,z,$,re,B)}}}else if(ce.visible){const le=L(U,ce,C,b);U.onBeforeShadow(s,U,N,z,$,le,null),s.renderBufferDirect(z,null,$,le,U,null),U.onAfterShadow(s,U,N,z,$,le,null)}}const ie=U.children;for(let $=0,ce=ie.length;$<ce;$++)A(ie[$],N,z,C,b)}function H(U){U.target.removeEventListener("dispose",H);for(const z in f){const C=f[z],b=U.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const nw={[Fh]:Oh,[Bh]:Hh,[zh]:Gh,[no]:Vh,[Oh]:Fh,[Hh]:Bh,[Gh]:zh,[Vh]:no};function iw(s,e){function t(){let G=!1;const Re=new Bt;let se=null;const pe=new Bt(0,0,0,0);return{setMask:function(De){se!==De&&!G&&(s.colorMask(De,De,De,De),se=De)},setLocked:function(De){G=De},setClear:function(De,Pe,rt,kt,qt){qt===!0&&(De*=kt,Pe*=kt,rt*=kt),Re.set(De,Pe,rt,kt),pe.equals(Re)===!1&&(s.clearColor(De,Pe,rt,kt),pe.copy(Re))},reset:function(){G=!1,se=null,pe.set(-1,0,0,0)}}}function i(){let G=!1,Re=!1,se=null,pe=null,De=null;return{setReversed:function(Pe){if(Re!==Pe){const rt=e.get("EXT_clip_control");Re?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const kt=De;De=null,this.setClear(kt)}Re=Pe},getReversed:function(){return Re},setTest:function(Pe){Pe?xe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Pe){se!==Pe&&!G&&(s.depthMask(Pe),se=Pe)},setFunc:function(Pe){if(Re&&(Pe=nw[Pe]),pe!==Pe){switch(Pe){case Fh:s.depthFunc(s.NEVER);break;case Oh:s.depthFunc(s.ALWAYS);break;case Bh:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case zh:s.depthFunc(s.EQUAL);break;case Vh:s.depthFunc(s.GEQUAL);break;case Hh:s.depthFunc(s.GREATER);break;case Gh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){De!==Pe&&(Re&&(Pe=1-Pe),s.clearDepth(Pe),De=Pe)},reset:function(){G=!1,se=null,pe=null,De=null,Re=!1}}}function o(){let G=!1,Re=null,se=null,pe=null,De=null,Pe=null,rt=null,kt=null,qt=null;return{setTest:function(yt){G||(yt?xe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(yt){Re!==yt&&!G&&(s.stencilMask(yt),Re=yt)},setFunc:function(yt,Pn,Tn){(se!==yt||pe!==Pn||De!==Tn)&&(s.stencilFunc(yt,Pn,Tn),se=yt,pe=Pn,De=Tn)},setOp:function(yt,Pn,Tn){(Pe!==yt||rt!==Pn||kt!==Tn)&&(s.stencilOp(yt,Pn,Tn),Pe=yt,rt=Pn,kt=Tn)},setLocked:function(yt){G=yt},setClear:function(yt){qt!==yt&&(s.clearStencil(yt),qt=yt)},reset:function(){G=!1,Re=null,se=null,pe=null,De=null,Pe=null,rt=null,kt=null,qt=null}}}const a=new t,c=new i,u=new o,d=new WeakMap,f=new WeakMap;let m={},g={},v=new WeakMap,S=[],M=null,E=!1,y=null,x=null,I=null,L=null,A=null,H=null,U=null,N=new gt(0,0,0),z=0,C=!1,b=null,F=null,ie=null,$=null,ce=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,oe=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(B)[1]),ae=oe>=1):B.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ae=oe>=2);let ue=null,re={};const k=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),Ie=new Bt().fromArray(k),Z=new Bt().fromArray(te);function he(G,Re,se,pe){const De=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(G,Pe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<se;rt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Re+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Pe}const Se={};Se[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),xe(s.DEPTH_TEST),c.setFunc(no),ot(!1),st(Mm),xe(s.CULL_FACE),X(Lr);function xe(G){m[G]!==!0&&(s.enable(G),m[G]=!0)}function Ae(G){m[G]!==!1&&(s.disable(G),m[G]=!1)}function Le(G,Re){return g[G]!==Re?(s.bindFramebuffer(G,Re),g[G]=Re,G===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Re),G===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function $e(G,Re){let se=S,pe=!1;if(G){se=v.get(Re),se===void 0&&(se=[],v.set(Re,se));const De=G.textures;if(se.length!==De.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,rt=De.length;Pe<rt;Pe++)se[Pe]=s.COLOR_ATTACHMENT0+Pe;se.length=De.length,pe=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,pe=!0);pe&&s.drawBuffers(se)}function bt(G){return M!==G?(s.useProgram(G),M=G,!0):!1}const dt={[rs]:s.FUNC_ADD,[ix]:s.FUNC_SUBTRACT,[rx]:s.FUNC_REVERSE_SUBTRACT};dt[sx]=s.MIN,dt[ox]=s.MAX;const It={[ax]:s.ZERO,[lx]:s.ONE,[cx]:s.SRC_COLOR,[Uh]:s.SRC_ALPHA,[mx]:s.SRC_ALPHA_SATURATE,[fx]:s.DST_COLOR,[hx]:s.DST_ALPHA,[ux]:s.ONE_MINUS_SRC_COLOR,[kh]:s.ONE_MINUS_SRC_ALPHA,[px]:s.ONE_MINUS_DST_COLOR,[dx]:s.ONE_MINUS_DST_ALPHA,[gx]:s.CONSTANT_COLOR,[_x]:s.ONE_MINUS_CONSTANT_COLOR,[vx]:s.CONSTANT_ALPHA,[xx]:s.ONE_MINUS_CONSTANT_ALPHA};function X(G,Re,se,pe,De,Pe,rt,kt,qt,yt){if(G===Lr){E===!0&&(Ae(s.BLEND),E=!1);return}if(E===!1&&(xe(s.BLEND),E=!0),G!==nx){if(G!==y||yt!==C){if((x!==rs||A!==rs)&&(s.blendEquation(s.FUNC_ADD),x=rs,A=rs),yt)switch(G){case Qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Em:s.blendFunc(s.ONE,s.ONE);break;case Tm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Em:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Tm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,L=null,H=null,U=null,N.set(0,0,0),z=0,y=G,C=yt}return}De=De||Re,Pe=Pe||se,rt=rt||pe,(Re!==x||De!==A)&&(s.blendEquationSeparate(dt[Re],dt[De]),x=Re,A=De),(se!==I||pe!==L||Pe!==H||rt!==U)&&(s.blendFuncSeparate(It[se],It[pe],It[Pe],It[rt]),I=se,L=pe,H=Pe,U=rt),(kt.equals(N)===!1||qt!==z)&&(s.blendColor(kt.r,kt.g,kt.b,qt),N.copy(kt),z=qt),y=G,C=!1}function cn(G,Re){G.side===Ri?Ae(s.CULL_FACE):xe(s.CULL_FACE);let se=G.side===Bn;Re&&(se=!se),ot(se),G.blending===Qs&&G.transparent===!1?X(Lr):X(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const pe=G.stencilWrite;u.setTest(pe),pe&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Tt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(G){b!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),b=G)}function st(G){G!==ex?(xe(s.CULL_FACE),G!==F&&(G===Mm?s.cullFace(s.BACK):G===tx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),F=G}function qe(G){G!==ie&&(ae&&s.lineWidth(G),ie=G)}function Tt(G,Re,se){G?(xe(s.POLYGON_OFFSET_FILL),($!==Re||ce!==se)&&(s.polygonOffset(Re,se),$=Re,ce=se)):Ae(s.POLYGON_OFFSET_FILL)}function je(G){G?xe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function P(G){G===void 0&&(G=s.TEXTURE0+le-1),ue!==G&&(s.activeTexture(G),ue=G)}function w(G,Re,se){se===void 0&&(ue===null?se=s.TEXTURE0+le-1:se=ue);let pe=re[se];pe===void 0&&(pe={type:void 0,texture:void 0},re[se]=pe),(pe.type!==G||pe.texture!==Re)&&(ue!==se&&(s.activeTexture(se),ue=se),s.bindTexture(G,Re||Se[G]),pe.type=G,pe.texture=Re)}function J(){const G=re[ue];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function de(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qe(G){Ie.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ie.copy(G))}function Oe(G){Z.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Z.copy(G))}function ft(G,Re){let se=f.get(Re);se===void 0&&(se=new WeakMap,f.set(Re,se));let pe=se.get(G);pe===void 0&&(pe=s.getUniformBlockIndex(Re,G.name),se.set(G,pe))}function it(G,Re){const pe=f.get(Re).get(G);d.get(Re)!==pe&&(s.uniformBlockBinding(Re,pe,G.__bindingPointIndex),d.set(Re,pe))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ue=null,re={},g={},v=new WeakMap,S=[],M=null,E=!1,y=null,x=null,I=null,L=null,A=null,H=null,U=null,N=new gt(0,0,0),z=0,C=!1,b=null,F=null,ie=null,$=null,ce=null,Ie.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:xe,disable:Ae,bindFramebuffer:Le,drawBuffers:$e,useProgram:bt,setBlending:X,setMaterial:cn,setFlipSided:ot,setCullFace:st,setLineWidth:qe,setPolygonOffset:Tt,setScissorTest:je,activeTexture:P,bindTexture:w,unbindTexture:J,compressedTexImage2D:de,compressedTexImage3D:ge,texImage2D:Fe,texImage3D:Je,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:ht,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:He,compressedTexSubImage2D:be,compressedTexSubImage3D:Ue,scissor:Qe,viewport:Oe,reset:Ct}}function Sg(s,e,t,i){const o=rw(i);switch(t){case u_:return s*e;case d_:return s*e;case f_:return s*e*2;case p_:return s*e/o.components*o.byteLength;case Cd:return s*e/o.components*o.byteLength;case m_:return s*e*2/o.components*o.byteLength;case Pd:return s*e*2/o.components*o.byteLength;case h_:return s*e*3/o.components*o.byteLength;case jn:return s*e*4/o.components*o.byteLength;case Id:return s*e*4/o.components*o.byteLength;case Xl:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yh:case $h:return Math.max(s,16)*Math.max(e,8)/4;case jh:case qh:return Math.max(s,8)*Math.max(e,8)/2;case Kh:case Zh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case td:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case nd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case id:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case rd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case sd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case od:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ad:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ld:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case cd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ud:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case hd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case dd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case $l:case fd:case pd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case g_:case md:return Math.ceil(s/4)*Math.ceil(e/4)*8;case gd:case _d:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rw(s){switch(s){case Qi:case a_:return{byteLength:1,components:1};case aa:case l_:case ha:return{byteLength:2,components:1};case bd:case Rd:return{byteLength:2,components:4};case as:case Ad:case Ci:return{byteLength:4,components:1};case c_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function sw(s,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ct,m=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,w){return S?new OffscreenCanvas(P,w):ic("canvas")}function E(P,w,J){let de=1;const ge=je(P);if((ge.width>J||ge.height>J)&&(de=J/Math.max(ge.width,ge.height)),de<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(de*ge.width),He=Math.floor(de*ge.height);g===void 0&&(g=M(fe,He));const be=w?M(fe,He):g;return be.width=fe,be.height=He,be.getContext("2d").drawImage(P,0,0,fe,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+He+")."),be}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function y(P){return P.generateMipmaps}function x(P){s.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(P,w,J,de,ge=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=w;if(w===s.RED&&(J===s.FLOAT&&(fe=s.R32F),J===s.HALF_FLOAT&&(fe=s.R16F),J===s.UNSIGNED_BYTE&&(fe=s.R8)),w===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.R8UI),J===s.UNSIGNED_SHORT&&(fe=s.R16UI),J===s.UNSIGNED_INT&&(fe=s.R32UI),J===s.BYTE&&(fe=s.R8I),J===s.SHORT&&(fe=s.R16I),J===s.INT&&(fe=s.R32I)),w===s.RG&&(J===s.FLOAT&&(fe=s.RG32F),J===s.HALF_FLOAT&&(fe=s.RG16F),J===s.UNSIGNED_BYTE&&(fe=s.RG8)),w===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RG8UI),J===s.UNSIGNED_SHORT&&(fe=s.RG16UI),J===s.UNSIGNED_INT&&(fe=s.RG32UI),J===s.BYTE&&(fe=s.RG8I),J===s.SHORT&&(fe=s.RG16I),J===s.INT&&(fe=s.RG32I)),w===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),J===s.UNSIGNED_INT&&(fe=s.RGB32UI),J===s.BYTE&&(fe=s.RGB8I),J===s.SHORT&&(fe=s.RGB16I),J===s.INT&&(fe=s.RGB32I)),w===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),J===s.UNSIGNED_INT&&(fe=s.RGBA32UI),J===s.BYTE&&(fe=s.RGBA8I),J===s.SHORT&&(fe=s.RGBA16I),J===s.INT&&(fe=s.RGBA32I)),w===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),w===s.RGBA){const He=ge?uc:Et.getTransfer(de);J===s.FLOAT&&(fe=s.RGBA32F),J===s.HALF_FLOAT&&(fe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(fe=He===Lt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function A(P,w){let J;return P?w===null||w===as||w===so?J=s.DEPTH24_STENCIL8:w===Ci?J=s.DEPTH32F_STENCIL8:w===aa&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===as||w===so?J=s.DEPTH_COMPONENT24:w===Ci?J=s.DEPTH_COMPONENT32F:w===aa&&(J=s.DEPTH_COMPONENT16),J}function H(P,w){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==ln&&P.minFilter!==xi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function U(P){const w=P.target;w.removeEventListener("dispose",U),z(w),w.isVideoTexture&&m.delete(w)}function N(P){const w=P.target;w.removeEventListener("dispose",N),b(w)}function z(P){const w=i.get(P);if(w.__webglInit===void 0)return;const J=P.source,de=v.get(J);if(de){const ge=de[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&C(P),Object.keys(de).length===0&&v.delete(J)}i.remove(P)}function C(P){const w=i.get(P);s.deleteTexture(w.__webglTexture);const J=P.source,de=v.get(J);delete de[w.__cacheKey],c.memory.textures--}function b(P){const w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(w.__webglFramebuffer[de]))for(let ge=0;ge<w.__webglFramebuffer[de].length;ge++)s.deleteFramebuffer(w.__webglFramebuffer[de][ge]);else s.deleteFramebuffer(w.__webglFramebuffer[de]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[de])}else{if(Array.isArray(w.__webglFramebuffer))for(let de=0;de<w.__webglFramebuffer.length;de++)s.deleteFramebuffer(w.__webglFramebuffer[de]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let de=0;de<w.__webglColorRenderbuffer.length;de++)w.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[de]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=P.textures;for(let de=0,ge=J.length;de<ge;de++){const fe=i.get(J[de]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),c.memory.textures--),i.remove(J[de])}i.remove(P)}let F=0;function ie(){F=0}function $(){const P=F;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),F+=1,P}function ce(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function le(P,w){const J=i.get(P);if(P.isVideoTexture&&qe(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const de=P.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(J,P,w);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+w)}function ae(P,w){const J=i.get(P);if(P.version>0&&J.__version!==P.version){Z(J,P,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+w)}function oe(P,w){const J=i.get(P);if(P.version>0&&J.__version!==P.version){Z(J,P,w);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+w)}function B(P,w){const J=i.get(P);if(P.version>0&&J.__version!==P.version){he(J,P,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+w)}const ue={[Zl]:s.REPEAT,[Pr]:s.CLAMP_TO_EDGE,[Jl]:s.MIRRORED_REPEAT},re={[ln]:s.NEAREST,[o_]:s.NEAREST_MIPMAP_NEAREST,[ea]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Wl]:s.LINEAR_MIPMAP_NEAREST,[Ir]:s.LINEAR_MIPMAP_LINEAR},k={[Ux]:s.NEVER,[Vx]:s.ALWAYS,[kx]:s.LESS,[y_]:s.LEQUAL,[Fx]:s.EQUAL,[zx]:s.GEQUAL,[Ox]:s.GREATER,[Bx]:s.NOTEQUAL};function te(P,w){if(w.type===Ci&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===xi||w.magFilter===Wl||w.magFilter===ea||w.magFilter===Ir||w.minFilter===xi||w.minFilter===Wl||w.minFilter===ea||w.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ue[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ue[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ue[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,re[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,k[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ln||w.minFilter!==ea&&w.minFilter!==Ir||w.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ie(P,w){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",U));const de=w.source;let ge=v.get(de);ge===void 0&&(ge={},v.set(de,ge));const fe=ce(w);if(fe!==P.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,J=!0),ge[fe].usedTimes++;const He=ge[P.__cacheKey];He!==void 0&&(ge[P.__cacheKey].usedTimes--,He.usedTimes===0&&C(w)),P.__cacheKey=fe,P.__webglTexture=ge[fe].texture}return J}function Z(P,w,J){let de=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(de=s.TEXTURE_3D);const ge=Ie(P,w),fe=w.source;t.bindTexture(de,P.__webglTexture,s.TEXTURE0+J);const He=i.get(fe);if(fe.version!==He.__version||ge===!0){t.activeTexture(s.TEXTURE0+J);const be=Et.getPrimaries(Et.workingColorSpace),Ue=w.colorSpace===$i?null:Et.getPrimaries(w.colorSpace),ht=w.colorSpace===$i||be===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Me=E(w.image,!1,o.maxTextureSize);Me=Tt(w,Me);const Fe=a.convert(w.format,w.colorSpace),Je=a.convert(w.type);let Qe=L(w.internalFormat,Fe,Je,w.colorSpace,w.isVideoTexture);te(de,w);let Oe;const ft=w.mipmaps,it=w.isVideoTexture!==!0,Ct=He.__version===void 0||ge===!0,G=fe.dataReady,Re=H(w,Me);if(w.isDepthTexture)Qe=A(w.format===oo,w.type),Ct&&(it?t.texStorage2D(s.TEXTURE_2D,1,Qe,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,Qe,Me.width,Me.height,0,Fe,Je,null));else if(w.isDataTexture)if(ft.length>0){it&&Ct&&t.texStorage2D(s.TEXTURE_2D,Re,Qe,ft[0].width,ft[0].height);for(let se=0,pe=ft.length;se<pe;se++)Oe=ft[se],it?G&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Je,Oe.data):t.texImage2D(s.TEXTURE_2D,se,Qe,Oe.width,Oe.height,0,Fe,Je,Oe.data);w.generateMipmaps=!1}else it?(Ct&&t.texStorage2D(s.TEXTURE_2D,Re,Qe,Me.width,Me.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Fe,Je,Me.data)):t.texImage2D(s.TEXTURE_2D,0,Qe,Me.width,Me.height,0,Fe,Je,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){it&&Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Qe,ft[0].width,ft[0].height,Me.depth);for(let se=0,pe=ft.length;se<pe;se++)if(Oe=ft[se],w.format!==jn)if(Fe!==null)if(it){if(G)if(w.layerUpdates.size>0){const De=Sg(Oe.width,Oe.height,w.format,w.type);for(const Pe of w.layerUpdates){const rt=Oe.data.subarray(Pe*De/Oe.data.BYTES_PER_ELEMENT,(Pe+1)*De/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Pe,Oe.width,Oe.height,1,Fe,rt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,Me.depth,Fe,Oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Qe,Oe.width,Oe.height,Me.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,Me.depth,Fe,Je,Oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,Qe,Oe.width,Oe.height,Me.depth,0,Fe,Je,Oe.data)}else{it&&Ct&&t.texStorage2D(s.TEXTURE_2D,Re,Qe,ft[0].width,ft[0].height);for(let se=0,pe=ft.length;se<pe;se++)Oe=ft[se],w.format!==jn?Fe!==null?it?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Oe.data):t.compressedTexImage2D(s.TEXTURE_2D,se,Qe,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Je,Oe.data):t.texImage2D(s.TEXTURE_2D,se,Qe,Oe.width,Oe.height,0,Fe,Je,Oe.data)}else if(w.isDataArrayTexture)if(it){if(Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Qe,Me.width,Me.height,Me.depth),G)if(w.layerUpdates.size>0){const se=Sg(Me.width,Me.height,w.format,w.type);for(const pe of w.layerUpdates){const De=Me.data.subarray(pe*se/Me.data.BYTES_PER_ELEMENT,(pe+1)*se/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Fe,Je,De)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Fe,Je,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Qe,Me.width,Me.height,Me.depth,0,Fe,Je,Me.data);else if(w.isData3DTexture)it?(Ct&&t.texStorage3D(s.TEXTURE_3D,Re,Qe,Me.width,Me.height,Me.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Fe,Je,Me.data)):t.texImage3D(s.TEXTURE_3D,0,Qe,Me.width,Me.height,Me.depth,0,Fe,Je,Me.data);else if(w.isFramebufferTexture){if(Ct)if(it)t.texStorage2D(s.TEXTURE_2D,Re,Qe,Me.width,Me.height);else{let se=Me.width,pe=Me.height;for(let De=0;De<Re;De++)t.texImage2D(s.TEXTURE_2D,De,Qe,se,pe,0,Fe,Je,null),se>>=1,pe>>=1}}else if(ft.length>0){if(it&&Ct){const se=je(ft[0]);t.texStorage2D(s.TEXTURE_2D,Re,Qe,se.width,se.height)}for(let se=0,pe=ft.length;se<pe;se++)Oe=ft[se],it?G&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Fe,Je,Oe):t.texImage2D(s.TEXTURE_2D,se,Qe,Fe,Je,Oe);w.generateMipmaps=!1}else if(it){if(Ct){const se=je(Me);t.texStorage2D(s.TEXTURE_2D,Re,Qe,se.width,se.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,Je,Me)}else t.texImage2D(s.TEXTURE_2D,0,Qe,Fe,Je,Me);y(w)&&x(de),He.__version=fe.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function he(P,w,J){if(w.image.length!==6)return;const de=Ie(P,w),ge=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+J);const fe=i.get(ge);if(ge.version!==fe.__version||de===!0){t.activeTexture(s.TEXTURE0+J);const He=Et.getPrimaries(Et.workingColorSpace),be=w.colorSpace===$i?null:Et.getPrimaries(w.colorSpace),Ue=w.colorSpace===$i||He===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ht=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let pe=0;pe<6;pe++)!ht&&!Me?Fe[pe]=E(w.image[pe],!0,o.maxCubemapSize):Fe[pe]=Me?w.image[pe].image:w.image[pe],Fe[pe]=Tt(w,Fe[pe]);const Je=Fe[0],Qe=a.convert(w.format,w.colorSpace),Oe=a.convert(w.type),ft=L(w.internalFormat,Qe,Oe,w.colorSpace),it=w.isVideoTexture!==!0,Ct=fe.__version===void 0||de===!0,G=ge.dataReady;let Re=H(w,Je);te(s.TEXTURE_CUBE_MAP,w);let se;if(ht){it&&Ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ft,Je.width,Je.height);for(let pe=0;pe<6;pe++){se=Fe[pe].mipmaps;for(let De=0;De<se.length;De++){const Pe=se[De];w.format!==jn?Qe!==null?it?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Pe.width,Pe.height,Qe,Pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ft,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Pe.width,Pe.height,Qe,Oe,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ft,Pe.width,Pe.height,0,Qe,Oe,Pe.data)}}}else{if(se=w.mipmaps,it&&Ct){se.length>0&&Re++;const pe=je(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){it?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe[pe].width,Fe[pe].height,Qe,Oe,Fe[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Fe[pe].width,Fe[pe].height,0,Qe,Oe,Fe[pe].data);for(let De=0;De<se.length;De++){const rt=se[De].image[pe].image;it?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,rt.width,rt.height,Qe,Oe,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ft,rt.width,rt.height,0,Qe,Oe,rt.data)}}else{it?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Qe,Oe,Fe[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Qe,Oe,Fe[pe]);for(let De=0;De<se.length;De++){const Pe=se[De];it?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,Qe,Oe,Pe.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ft,Qe,Oe,Pe.image[pe])}}}y(w)&&x(s.TEXTURE_CUBE_MAP),fe.__version=ge.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Se(P,w,J,de,ge,fe){const He=a.convert(J.format,J.colorSpace),be=a.convert(J.type),Ue=L(J.internalFormat,He,be,J.colorSpace),ht=i.get(w),Me=i.get(J);if(Me.__renderTarget=w,!ht.__hasExternalTextures){const Fe=Math.max(1,w.width>>fe),Je=Math.max(1,w.height>>fe);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,fe,Ue,Fe,Je,w.depth,0,He,be,null):t.texImage2D(ge,fe,Ue,Fe,Je,0,He,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),st(w)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ge,Me.__webglTexture,0,ot(w)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,ge,Me.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(P,w,J){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const de=w.depthTexture,ge=de&&de.isDepthTexture?de.type:null,fe=A(w.stencilBuffer,ge),He=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=ot(w);st(w)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,fe,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,fe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,fe,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,P)}else{const de=w.textures;for(let ge=0;ge<de.length;ge++){const fe=de[ge],He=a.convert(fe.format,fe.colorSpace),be=a.convert(fe.type),Ue=L(fe.internalFormat,He,be,fe.colorSpace),ht=ot(w);J&&st(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Ue,w.width,w.height):st(w)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Ue,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=i.get(w.depthTexture);de.__renderTarget=w,(!de.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),le(w.depthTexture,0);const ge=de.__webglTexture,fe=ot(w);if(w.depthTexture.format===eo)st(w)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(w.depthTexture.format===oo)st(w)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Le(P){const w=i.get(P),J=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const de=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),de){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,de.removeEventListener("dispose",ge)};de.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=de}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,P)}else if(J){w.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[de]),w.__webglDepthbuffer[de]===void 0)w.__webglDepthbuffer[de]=s.createRenderbuffer(),xe(w.__webglDepthbuffer[de],P,!1);else{const ge=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),xe(w.__webglDepthbuffer,P,!1);else{const de=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,ge)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(P,w,J){const de=i.get(P);w!==void 0&&Se(de.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Le(P)}function bt(P){const w=P.texture,J=i.get(P),de=i.get(w);P.addEventListener("dispose",N);const ge=P.textures,fe=P.isWebGLCubeRenderTarget===!0,He=ge.length>1;if(He||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=w.version,c.memory.textures++),fe){J.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[be]=[];for(let Ue=0;Ue<w.mipmaps.length;Ue++)J.__webglFramebuffer[be][Ue]=s.createFramebuffer()}else J.__webglFramebuffer[be]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)J.__webglFramebuffer[be]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(He)for(let be=0,Ue=ge.length;be<Ue;be++){const ht=i.get(ge[be]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),c.memory.textures++)}if(P.samples>0&&st(P)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let be=0;be<ge.length;be++){const Ue=ge[be];J.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[be]);const ht=a.convert(Ue.format,Ue.colorSpace),Me=a.convert(Ue.type),Fe=L(Ue.internalFormat,ht,Me,Ue.colorSpace,P.isXRRenderTarget===!0),Je=ot(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Fe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,J.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(J.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),te(s.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)Se(J.__webglFramebuffer[be][Ue],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue);else Se(J.__webglFramebuffer[be],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(w)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let be=0,Ue=ge.length;be<Ue;be++){const ht=ge[be],Me=i.get(ht);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),te(s.TEXTURE_2D,ht),Se(J.__webglFramebuffer,P,ht,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),y(ht)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,de.__webglTexture),te(be,w),w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)Se(J.__webglFramebuffer[Ue],P,w,s.COLOR_ATTACHMENT0,be,Ue);else Se(J.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,be,0);y(w)&&x(be),t.unbindTexture()}P.depthBuffer&&Le(P)}function dt(P){const w=P.textures;for(let J=0,de=w.length;J<de;J++){const ge=w[J];if(y(ge)){const fe=I(P),He=i.get(ge).__webglTexture;t.bindTexture(fe,He),x(fe),t.unbindTexture()}}}const It=[],X=[];function cn(P){if(P.samples>0){if(st(P)===!1){const w=P.textures,J=P.width,de=P.height;let ge=s.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=i.get(P),be=w.length>1;if(be)for(let Ue=0;Ue<w.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ue=0;Ue<w.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ue]);const ht=i.get(w[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,J,de,0,0,J,de,ge,s.NEAREST),d===!0&&(It.length=0,X.length=0,It.push(s.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(It.push(fe),X.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ue=0;Ue<w.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ue]);const ht=i.get(w[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ht,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ot(P){return Math.min(o.maxSamples,P.samples)}function st(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qe(P){const w=c.render.frame;m.get(P)!==w&&(m.set(P,w),P.update())}function Tt(P,w){const J=P.colorSpace,de=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==co&&J!==$i&&(Et.getTransfer(J)===Lt?(de!==jn||ge!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}function je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(f.width=P.naturalWidth||P.width,f.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(f.width=P.displayWidth,f.height=P.displayHeight):(f.width=P.width,f.height=P.height),f}this.allocateTextureUnit=$,this.resetTextureUnits=ie,this.setTexture2D=le,this.setTexture2DArray=ae,this.setTexture3D=oe,this.setTextureCube=B,this.rebindTextures=$e,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=st}function ow(s,e){function t(i,o=$i){let a;const c=Et.getTransfer(o);if(i===Qi)return s.UNSIGNED_BYTE;if(i===bd)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Rd)return s.UNSIGNED_SHORT_5_5_5_1;if(i===c_)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===a_)return s.BYTE;if(i===l_)return s.SHORT;if(i===aa)return s.UNSIGNED_SHORT;if(i===Ad)return s.INT;if(i===as)return s.UNSIGNED_INT;if(i===Ci)return s.FLOAT;if(i===ha)return s.HALF_FLOAT;if(i===u_)return s.ALPHA;if(i===h_)return s.RGB;if(i===jn)return s.RGBA;if(i===d_)return s.LUMINANCE;if(i===f_)return s.LUMINANCE_ALPHA;if(i===eo)return s.DEPTH_COMPONENT;if(i===oo)return s.DEPTH_STENCIL;if(i===p_)return s.RED;if(i===Cd)return s.RED_INTEGER;if(i===m_)return s.RG;if(i===Pd)return s.RG_INTEGER;if(i===Id)return s.RGBA_INTEGER;if(i===Xl||i===jl||i===Yl||i===ql)if(c===Lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Xl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Xl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ql)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jh||i===Yh||i===qh||i===$h)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===jh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$h)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kh||i===Zh||i===Jh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Kh||i===Zh)return c===Lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Jh)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qh||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===hd||i===dd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Qh)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ed)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===td)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nd)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===id)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rd)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sd)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===od)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ad)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ld)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cd)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ud)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hd)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dd)return c===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$l||i===fd||i===pd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===$l)return c===Lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===g_||i===md||i===gd||i===_d)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===$l)return a.COMPRESSED_RED_RGTC1_EXT;if(i===md)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_d)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}class aw extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ia extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lw={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,i),x=this._getHandJoint(f,E);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],v=m.position.distanceTo(g.position),S=.02,M=.005;f.inputState.pinching&&v>S+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=S-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(lw)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ia;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const cw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uw=`
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

}`;class hw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new dn,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Nr({vertexShader:cw,fragmentShader:uw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ri(new dc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dw extends Ur{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",d=1,f=null,m=null,g=null,v=null,S=null,M=null;const E=new hw,y=t.getContextAttributes();let x=null,I=null;const L=[],A=[],H=new ct;let U=null;const N=new ii;N.viewport=new Bt;const z=new ii;z.viewport=new Bt;const C=[N,z],b=new aw;let F=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=L[Z];return he===void 0&&(he=new Ah,L[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=L[Z];return he===void 0&&(he=new Ah,L[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=L[Z];return he===void 0&&(he=new Ah,L[Z]=he),he.getHandSpace()};function $(Z){const he=A.indexOf(Z.inputSource);if(he===-1)return;const Se=L[he];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,f||c),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ce(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",le);for(let Z=0;Z<L.length;Z++){const he=A[Z];he!==null&&(A[Z]=null,L[Z].disconnect(he))}F=null,ie=null,E.reset(),e.setRenderTarget(x),S=null,v=null,g=null,o=null,I=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){u=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(Z){f=Z},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",le),y.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(H),o.renderState.layers===void 0){const he={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(o,t,he),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new ls(S.framebufferWidth,S.framebufferHeight,{format:jn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let he=null,Se=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=y.stencil?oo:eo,Se=y.stencil?so:as);const Ae={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:a};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(Ae),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),I=new ls(v.textureWidth,v.textureHeight,{format:jn,type:Qi,depthTexture:new L_(v.textureWidth,v.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await o.requestReferenceSpace(u),Ie.setContext(o),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function le(Z){for(let he=0;he<Z.removed.length;he++){const Se=Z.removed[he],xe=A.indexOf(Se);xe>=0&&(A[xe]=null,L[xe].disconnect(Se))}for(let he=0;he<Z.added.length;he++){const Se=Z.added[he];let xe=A.indexOf(Se);if(xe===-1){for(let Le=0;Le<L.length;Le++)if(Le>=A.length){A.push(Se),xe=Le;break}else if(A[Le]===null){A[Le]=Se,xe=Le;break}if(xe===-1)break}const Ae=L[xe];Ae&&Ae.connect(Se)}}const ae=new q,oe=new q;function B(Z,he,Se){ae.setFromMatrixPosition(he.matrixWorld),oe.setFromMatrixPosition(Se.matrixWorld);const xe=ae.distanceTo(oe),Ae=he.projectionMatrix.elements,Le=Se.projectionMatrix.elements,$e=Ae[14]/(Ae[10]-1),bt=Ae[14]/(Ae[10]+1),dt=(Ae[9]+1)/Ae[5],It=(Ae[9]-1)/Ae[5],X=(Ae[8]-1)/Ae[0],cn=(Le[8]+1)/Le[0],ot=$e*X,st=$e*cn,qe=xe/(-X+cn),Tt=qe*-X;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Tt),Z.translateZ(qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const je=$e+qe,P=bt+qe,w=ot-Tt,J=st+(xe-Tt),de=dt*bt/P*je,ge=It*bt/P*je;Z.projectionMatrix.makePerspective(w,J,de,ge,je,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let he=Z.near,Se=Z.far;E.texture!==null&&(E.depthNear>0&&(he=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),b.near=z.near=N.near=he,b.far=z.far=N.far=Se,(F!==b.near||ie!==b.far)&&(o.updateRenderState({depthNear:b.near,depthFar:b.far}),F=b.near,ie=b.far),N.layers.mask=Z.layers.mask|2,z.layers.mask=Z.layers.mask|4,b.layers.mask=N.layers.mask|z.layers.mask;const xe=Z.parent,Ae=b.cameras;ue(b,xe);for(let Le=0;Le<Ae.length;Le++)ue(Ae[Le],xe);Ae.length===2?B(b,N,z):b.projectionMatrix.copy(N.projectionMatrix),re(Z,b,xe)};function re(Z,he,Se){Se===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ca*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(Z){d=Z,v!==null&&(v.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(b)};let k=null;function te(Z,he){if(m=he.getViewerPose(f||c),M=he,m!==null){const Se=m.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let xe=!1;Se.length!==b.cameras.length&&(b.cameras.length=0,xe=!0);for(let Le=0;Le<Se.length;Le++){const $e=Se[Le];let bt=null;if(S!==null)bt=S.getViewport($e);else{const It=g.getViewSubImage(v,$e);bt=It.viewport,Le===0&&(e.setRenderTargetTextures(I,It.colorTexture,v.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(I))}let dt=C[Le];dt===void 0&&(dt=new ii,dt.layers.enable(Le),dt.viewport=new Bt,C[Le]=dt),dt.matrix.fromArray($e.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray($e.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(bt.x,bt.y,bt.width,bt.height),Le===0&&(b.matrix.copy(dt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xe===!0&&b.cameras.push(dt)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Le=g.getDepthInformation(Se[0]);Le&&Le.isValid&&Le.texture&&E.init(e,Le,o.renderState)}}for(let Se=0;Se<L.length;Se++){const xe=A[Se],Ae=L[Se];xe!==null&&Ae!==void 0&&Ae.update(xe,he,f||c)}k&&k(Z,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),M=null}const Ie=new P_;Ie.setAnimationLoop(te),this.setAnimationLoop=function(Z){k=Z},this.dispose=function(){}}}const ns=new Pi,fw=new xt;function pw(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function i(y,x){x.color.getRGB(y.fogColor.value,b_(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,I,L,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(y,x):x.isMeshToonMaterial?(a(y,x),g(y,x)):x.isMeshPhongMaterial?(a(y,x),m(y,x)):x.isMeshStandardMaterial?(a(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,A)):x.isMeshMatcapMaterial?(a(y,x),M(y,x)):x.isMeshDepthMaterial?a(y,x):x.isMeshDistanceMaterial?(a(y,x),E(y,x)):x.isMeshNormalMaterial?a(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&u(y,x)):x.isPointsMaterial?d(y,x,I,L):x.isSpriteMaterial?f(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Bn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Bn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const I=e.get(x),L=I.envMap,A=I.envMapRotation;L&&(y.envMap.value=L,ns.copy(A),ns.x*=-1,ns.y*=-1,ns.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),y.envMapRotation.value.setFromMatrix4(fw.makeRotationFromEuler(ns)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function u(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,I,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*I,y.scale.value=L*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,I){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Bn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function E(y,x){const I=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function mw(s,e,t,i){let o={},a={},c=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(I,L){const A=L.program;i.uniformBlockBinding(I,A)}function f(I,L){let A=o[I.id];A===void 0&&(M(I),A=m(I),o[I.id]=A,I.addEventListener("dispose",y));const H=L.program;i.updateUBOMapping(I,H);const U=e.render.frame;a[I.id]!==U&&(v(I),a[I.id]=U)}function m(I){const L=g();I.__bindingPointIndex=L;const A=s.createBuffer(),H=I.__size,U=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,H,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,A),A}function g(){for(let I=0;I<u;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const L=o[I.id],A=I.uniforms,H=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let U=0,N=A.length;U<N;U++){const z=Array.isArray(A[U])?A[U]:[A[U]];for(let C=0,b=z.length;C<b;C++){const F=z[C];if(S(F,U,C,H)===!0){const ie=F.__offset,$=Array.isArray(F.value)?F.value:[F.value];let ce=0;for(let le=0;le<$.length;le++){const ae=$[le],oe=E(ae);typeof ae=="number"||typeof ae=="boolean"?(F.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,ie+ce,F.__data)):ae.isMatrix3?(F.__data[0]=ae.elements[0],F.__data[1]=ae.elements[1],F.__data[2]=ae.elements[2],F.__data[3]=0,F.__data[4]=ae.elements[3],F.__data[5]=ae.elements[4],F.__data[6]=ae.elements[5],F.__data[7]=0,F.__data[8]=ae.elements[6],F.__data[9]=ae.elements[7],F.__data[10]=ae.elements[8],F.__data[11]=0):(ae.toArray(F.__data,ce),ce+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,L,A,H){const U=I.value,N=L+"_"+A;if(H[N]===void 0)return typeof U=="number"||typeof U=="boolean"?H[N]=U:H[N]=U.clone(),!0;{const z=H[N];if(typeof U=="number"||typeof U=="boolean"){if(z!==U)return H[N]=U,!0}else if(z.equals(U)===!1)return z.copy(U),!0}return!1}function M(I){const L=I.uniforms;let A=0;const H=16;for(let N=0,z=L.length;N<z;N++){const C=Array.isArray(L[N])?L[N]:[L[N]];for(let b=0,F=C.length;b<F;b++){const ie=C[b],$=Array.isArray(ie.value)?ie.value:[ie.value];for(let ce=0,le=$.length;ce<le;ce++){const ae=$[ce],oe=E(ae),B=A%H,ue=B%oe.boundary,re=B+ue;A+=ue,re!==0&&H-re<oe.storage&&(A+=H-re),ie.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=A,A+=oe.storage}}}const U=A%H;return U>0&&(A+=H-U),I.__size=A,I.__cache={},this}function E(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function y(I){const L=I.target;L.removeEventListener("dispose",y);const A=c.indexOf(L.__bindingPointIndex);c.splice(A,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete a[L.id]}function x(){for(const I in o)s.deleteBuffer(o[I]);c=[],o={},a={}}return{bind:d,update:f,dispose:x}}class gw{constructor(e={}){const{canvas:t=ry(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=c;const M=new Uint32Array(4),E=new Int32Array(4);let y=null,x=null;const I=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=Dr,this.toneMappingExposure=1;const A=this;let H=!1,U=0,N=0,z=null,C=-1,b=null;const F=new Bt,ie=new Bt;let $=null;const ce=new gt(0);let le=0,ae=t.width,oe=t.height,B=1,ue=null,re=null;const k=new Bt(0,0,ae,oe),te=new Bt(0,0,ae,oe);let Ie=!1;const Z=new kd;let he=!1,Se=!1;const xe=new xt,Ae=new xt,Le=new q,$e=new Bt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function It(){return z===null?B:1}let X=i;function cn(R,W){return t.getContext(R,W)}try{const R={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lc}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),X===null){const W="webgl2";if(X=cn(W,R),X===null)throw cn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ot,st,qe,Tt,je,P,w,J,de,ge,fe,He,be,Ue,ht,Me,Fe,Je,Qe,Oe,ft,it,Ct,G;function Re(){ot=new SE(X),ot.init(),it=new ow(X,ot),st=new mE(X,ot,e,it),qe=new iw(X,ot),st.reverseDepthBuffer&&v&&qe.buffers.depth.setReversed(!0),Tt=new TE(X),je=new HT,P=new sw(X,ot,qe,je,st,it,Tt),w=new _E(A),J=new yE(A),de=new Iy(X),Ct=new fE(X,de),ge=new ME(X,de,Tt,Ct),fe=new AE(X,ge,de,Tt),Qe=new wE(X,st,P),Me=new gE(je),He=new VT(A,w,J,ot,st,Ct,Me),be=new pw(A,je),Ue=new WT,ht=new KT(ot),Je=new dE(A,w,J,qe,fe,S,d),Fe=new tw(A,fe,st),G=new mw(X,Tt,st,qe),Oe=new pE(X,ot,Tt),ft=new EE(X,ot,Tt),Tt.programs=He.programs,A.capabilities=st,A.extensions=ot,A.properties=je,A.renderLists=Ue,A.shadowMap=Fe,A.state=qe,A.info=Tt}Re();const se=new dw(A,X);this.xr=se,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(ae,oe,!1))},this.getSize=function(R){return R.set(ae,oe)},this.setSize=function(R,W,ee=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=R,oe=W,t.width=Math.floor(R*B),t.height=Math.floor(W*B),ee===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(ae*B,oe*B).floor()},this.setDrawingBufferSize=function(R,W,ee){ae=R,oe=W,B=ee,t.width=Math.floor(R*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(k)},this.setViewport=function(R,W,ee,ne){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,W,ee,ne),qe.viewport(F.copy(k).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(te)},this.setScissor=function(R,W,ee,ne){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,W,ee,ne),qe.scissor(ie.copy(te).multiplyScalar(B).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(R){qe.setScissorTest(Ie=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(R=!0,W=!0,ee=!0){let ne=0;if(R){let j=!1;if(z!==null){const we=z.texture.format;j=we===Id||we===Pd||we===Cd}if(j){const we=z.texture.type,Ee=we===Qi||we===as||we===aa||we===so||we===bd||we===Rd,Ge=Je.getClearColor(),ze=Je.getClearAlpha(),et=Ge.r,nt=Ge.g,We=Ge.b;Ee?(M[0]=et,M[1]=nt,M[2]=We,M[3]=ze,X.clearBufferuiv(X.COLOR,0,M)):(E[0]=et,E[1]=nt,E[2]=We,E[3]=ze,X.clearBufferiv(X.COLOR,0,E))}else ne|=X.COLOR_BUFFER_BIT}W&&(ne|=X.DEPTH_BUFFER_BIT),ee&&(ne|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ue.dispose(),ht.dispose(),je.dispose(),w.dispose(),J.dispose(),fe.dispose(),Ct.dispose(),G.dispose(),He.dispose(),se.dispose(),se.removeEventListener("sessionstart",cs),se.removeEventListener("sessionend",er),Li.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Tt.autoReset,W=Fe.enabled,ee=Fe.autoUpdate,ne=Fe.needsUpdate,j=Fe.type;Re(),Tt.autoReset=R,Fe.enabled=W,Fe.autoUpdate=ee,Fe.needsUpdate=ne,Fe.type=j}function Pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function rt(R){const W=R.target;W.removeEventListener("dispose",rt),kt(W)}function kt(R){qt(R),je.remove(R)}function qt(R){const W=je.get(R).programs;W!==void 0&&(W.forEach(function(ee){He.releaseProgram(ee)}),R.isShaderMaterial&&He.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ee,ne,j,we){W===null&&(W=bt);const Ee=j.isMesh&&j.matrixWorld.determinant()<0,Ge=ma(R,W,ee,ne,j);qe.setMaterial(ne,Ee);let ze=ee.index,et=1;if(ne.wireframe===!0){if(ze=ge.getWireframeAttribute(ee),ze===void 0)return;et=2}const nt=ee.drawRange,We=ee.attributes.position;let vt=nt.start*et,Rt=(nt.start+nt.count)*et;we!==null&&(vt=Math.max(vt,we.start*et),Rt=Math.min(Rt,(we.start+we.count)*et)),ze!==null?(vt=Math.max(vt,0),Rt=Math.min(Rt,ze.count)):We!=null&&(vt=Math.max(vt,0),Rt=Math.min(Rt,We.count));const _t=Rt-vt;if(_t<0||_t===1/0)return;Ct.setup(j,ne,Ge,ee,ze);let fn,at=Oe;if(ze!==null&&(fn=de.get(ze),at=ft,at.setIndex(fn)),j.isMesh)ne.wireframe===!0?(qe.setLineWidth(ne.wireframeLinewidth*It()),at.setMode(X.LINES)):at.setMode(X.TRIANGLES);else if(j.isLine){let Ye=ne.linewidth;Ye===void 0&&(Ye=1),qe.setLineWidth(Ye*It()),j.isLineSegments?at.setMode(X.LINES):j.isLineLoop?at.setMode(X.LINE_LOOP):at.setMode(X.LINE_STRIP)}else j.isPoints?at.setMode(X.POINTS):j.isSprite&&at.setMode(X.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)at.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))at.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ye=j._multiDrawStarts,ai=j._multiDrawCounts,wt=j._multiDrawCount,pn=ze?de.get(ze).bytesPerElement:1,li=je.get(ne).currentProgram.getUniforms();for(let $t=0;$t<wt;$t++)li.setValue(X,"_gl_DrawID",$t),at.render(Ye[$t]/pn,ai[$t])}else if(j.isInstancedMesh)at.renderInstances(vt,_t,j.count);else if(ee.isInstancedBufferGeometry){const Ye=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,ai=Math.min(ee.instanceCount,Ye);at.renderInstances(vt,_t,ai)}else at.render(vt,_t)};function yt(R,W,ee){R.transparent===!0&&R.side===Ri&&R.forceSinglePass===!1?(R.side=Bn,R.needsUpdate=!0,us(R,W,ee),R.side=Ji,R.needsUpdate=!0,us(R,W,ee),R.side=Ri):us(R,W,ee)}this.compile=function(R,W,ee=null){ee===null&&(ee=R),x=ht.get(ee),x.init(W),L.push(x),ee.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),R!==ee&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const ne=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let Ee=0;Ee<we.length;Ee++){const Ge=we[Ee];yt(Ge,ee,j),ne.add(Ge)}else yt(we,ee,j),ne.add(we)}),L.pop(),x=null,ne},this.compileAsync=function(R,W,ee=null){const ne=this.compile(R,W,ee);return new Promise(j=>{function we(){if(ne.forEach(function(Ee){je.get(Ee).currentProgram.isReady()&&ne.delete(Ee)}),ne.size===0){j(R);return}setTimeout(we,10)}ot.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Pn=null;function Tn(R){Pn&&Pn(R)}function cs(){Li.stop()}function er(){Li.start()}const Li=new P_;Li.setAnimationLoop(Tn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(R){Pn=R,se.setAnimationLoop(R),R===null?Li.stop():Li.start()},se.addEventListener("sessionstart",cs),se.addEventListener("sessionend",er),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(W),W=se.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,W,z),x=ht.get(R,L.length),x.init(W),L.push(x),Ae.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(Ae),Se=this.localClippingEnabled,he=Me.init(this.clippingPlanes,Se),y=Ue.get(R,I.length),y.init(),I.push(y),se.enabled===!0&&se.isPresenting===!0){const we=A.xr.getDepthSensingMesh();we!==null&&Di(we,W,-1/0,A.sortObjects)}Di(R,W,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(ue,re),dt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,dt&&Je.addToRenderList(y,R),this.info.render.frame++,he===!0&&Me.beginShadows();const ee=x.state.shadowsArray;Fe.render(ee,R,W),he===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=y.opaque,j=y.transmissive;if(x.setupLights(),W.isArrayCamera){const we=W.cameras;if(j.length>0)for(let Ee=0,Ge=we.length;Ee<Ge;Ee++){const ze=we[Ee];Or(ne,j,R,ze)}dt&&Je.render(R);for(let Ee=0,Ge=we.length;Ee<Ge;Ee++){const ze=we[Ee];Fr(y,R,ze,ze.viewport)}}else j.length>0&&Or(ne,j,R,W),dt&&Je.render(R),Fr(y,R,W);z!==null&&(P.updateMultisampleRenderTarget(z),P.updateRenderTargetMipmap(z)),R.isScene===!0&&R.onAfterRender(A,R,W),Ct.resetDefaultState(),C=-1,b=null,L.pop(),L.length>0?(x=L[L.length-1],he===!0&&Me.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Di(R,W,ee,ne){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){ne&&$e.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ae);const Ee=fe.update(R),Ge=R.material;Ge.visible&&y.push(R,Ee,Ge,ee,$e.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const Ee=fe.update(R),Ge=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),$e.copy(R.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),$e.copy(Ee.boundingSphere.center)),$e.applyMatrix4(R.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ge)){const ze=Ee.groups;for(let et=0,nt=ze.length;et<nt;et++){const We=ze[et],vt=Ge[We.materialIndex];vt&&vt.visible&&y.push(R,Ee,vt,ee,$e.z,We)}}else Ge.visible&&y.push(R,Ee,Ge,ee,$e.z,null)}}const we=R.children;for(let Ee=0,Ge=we.length;Ee<Ge;Ee++)Di(we[Ee],W,ee,ne)}function Fr(R,W,ee,ne){const j=R.opaque,we=R.transmissive,Ee=R.transparent;x.setupLightsView(ee),he===!0&&Me.setGlobalState(A.clippingPlanes,ee),ne&&qe.viewport(F.copy(ne)),j.length>0&&tr(j,W,ee),we.length>0&&tr(we,W,ee),Ee.length>0&&tr(Ee,W,ee),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Or(R,W,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ne.id]===void 0&&(x.state.transmissionRenderTarget[ne.id]=new ls(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?ha:Qi,minFilter:Ir,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const we=x.state.transmissionRenderTarget[ne.id],Ee=ne.viewport||F;we.setSize(Ee.z,Ee.w);const Ge=A.getRenderTarget();A.setRenderTarget(we),A.getClearColor(ce),le=A.getClearAlpha(),le<1&&A.setClearColor(16777215,.5),A.clear(),dt&&Je.render(ee);const ze=A.toneMapping;A.toneMapping=Dr;const et=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),x.setupLightsView(ne),he===!0&&Me.setGlobalState(A.clippingPlanes,ne),tr(R,ee,ne),P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we),ot.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let We=0,vt=W.length;We<vt;We++){const Rt=W[We],_t=Rt.object,fn=Rt.geometry,at=Rt.material,Ye=Rt.group;if(at.side===Ri&&_t.layers.test(ne.layers)){const ai=at.side;at.side=Bn,at.needsUpdate=!0,fa(_t,ee,ne,fn,at,Ye),at.side=ai,at.needsUpdate=!0,nt=!0}}nt===!0&&(P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we))}A.setRenderTarget(Ge),A.setClearColor(ce,le),et!==void 0&&(ne.viewport=et),A.toneMapping=ze}function tr(R,W,ee){const ne=W.isScene===!0?W.overrideMaterial:null;for(let j=0,we=R.length;j<we;j++){const Ee=R[j],Ge=Ee.object,ze=Ee.geometry,et=ne===null?Ee.material:ne,nt=Ee.group;Ge.layers.test(ee.layers)&&fa(Ge,W,ee,ze,et,nt)}}function fa(R,W,ee,ne,j,we){R.onBeforeRender(A,W,ee,ne,j,we),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(A,W,ee,ne,R,we),j.transparent===!0&&j.side===Ri&&j.forceSinglePass===!1?(j.side=Bn,j.needsUpdate=!0,A.renderBufferDirect(ee,W,ne,j,R,we),j.side=Ji,j.needsUpdate=!0,A.renderBufferDirect(ee,W,ne,j,R,we),j.side=Ri):A.renderBufferDirect(ee,W,ne,j,R,we),R.onAfterRender(A,W,ee,ne,j,we)}function us(R,W,ee){W.isScene!==!0&&(W=bt);const ne=je.get(R),j=x.state.lights,we=x.state.shadowsArray,Ee=j.state.version,Ge=He.getParameters(R,j.state,we,W,ee),ze=He.getProgramCacheKey(Ge);let et=ne.programs;ne.environment=R.isMeshStandardMaterial?W.environment:null,ne.fog=W.fog,ne.envMap=(R.isMeshStandardMaterial?J:w).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",rt),et=new Map,ne.programs=et);let nt=et.get(ze);if(nt!==void 0){if(ne.currentProgram===nt&&ne.lightsStateVersion===Ee)return Si(R,Ge),nt}else Ge.uniforms=He.getUniforms(R),R.onBeforeCompile(Ge,A),nt=He.acquireProgram(Ge,ze),et.set(ze,nt),ne.uniforms=Ge.uniforms;const We=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=Me.uniform),Si(R,Ge),ne.needsLights=gc(R),ne.lightsStateVersion=Ee,ne.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=nt,ne.uniformsList=null,nt}function pa(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Kl.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Si(R,W){const ee=je.get(R);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function ma(R,W,ee,ne,j){W.isScene!==!0&&(W=bt),P.resetTextureUnits();const we=W.fog,Ee=ne.isMeshStandardMaterial?W.environment:null,Ge=z===null?A.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:co,ze=(ne.isMeshStandardMaterial?J:w).get(ne.envMap||Ee),et=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,nt=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),We=!!ee.morphAttributes.position,vt=!!ee.morphAttributes.normal,Rt=!!ee.morphAttributes.color;let _t=Dr;ne.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(_t=A.toneMapping);const fn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,at=fn!==void 0?fn.length:0,Ye=je.get(ne),ai=x.state.lights;if(he===!0&&(Se===!0||R!==b)){const wn=R===b&&ne.id===C;Me.setState(ne,R,wn)}let wt=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ai.state.version||Ye.outputColorSpace!==Ge||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==ze||ne.fog===!0&&Ye.fog!==we||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==nt||Ye.morphTargets!==We||Ye.morphNormals!==vt||Ye.morphColors!==Rt||Ye.toneMapping!==_t||Ye.morphTargetsCount!==at)&&(wt=!0):(wt=!0,Ye.__version=ne.version);let pn=Ye.currentProgram;wt===!0&&(pn=us(ne,W,j));let li=!1,$t=!1,Mi=!1;const Nt=pn.getUniforms(),qn=Ye.uniforms;if(qe.useProgram(pn.program)&&(li=!0,$t=!0,Mi=!0),ne.id!==C&&(C=ne.id,$t=!0),li||b!==R){qe.buffers.depth.getReversed()?(xe.copy(R.projectionMatrix),oy(xe),ay(xe),Nt.setValue(X,"projectionMatrix",xe)):Nt.setValue(X,"projectionMatrix",R.projectionMatrix),Nt.setValue(X,"viewMatrix",R.matrixWorldInverse);const $n=Nt.map.cameraPosition;$n!==void 0&&$n.setValue(X,Le.setFromMatrixPosition(R.matrixWorld)),st.logarithmicDepthBuffer&&Nt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Nt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,$t=!0,Mi=!0)}if(j.isSkinnedMesh){Nt.setOptional(X,j,"bindMatrix"),Nt.setOptional(X,j,"bindMatrixInverse");const wn=j.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Nt.setValue(X,"boneTexture",wn.boneTexture,P))}j.isBatchedMesh&&(Nt.setOptional(X,j,"batchingTexture"),Nt.setValue(X,"batchingTexture",j._matricesTexture,P),Nt.setOptional(X,j,"batchingIdTexture"),Nt.setValue(X,"batchingIdTexture",j._indirectTexture,P),Nt.setOptional(X,j,"batchingColorTexture"),j._colorsTexture!==null&&Nt.setValue(X,"batchingColorTexture",j._colorsTexture,P));const Ni=ee.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Qe.update(j,ee,pn),($t||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,Nt.setValue(X,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(qn.envMap.value=ze,qn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&W.environment!==null&&(qn.envMapIntensity.value=W.environmentIntensity),$t&&(Nt.setValue(X,"toneMappingExposure",A.toneMappingExposure),Ye.needsLights&&ga(qn,Mi),we&&ne.fog===!0&&be.refreshFogUniforms(qn,we),be.refreshMaterialUniforms(qn,ne,B,oe,x.state.transmissionRenderTarget[R.id]),Kl.upload(X,pa(Ye),qn,P)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Kl.upload(X,pa(Ye),qn,P),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Nt.setValue(X,"center",j.center),Nt.setValue(X,"modelViewMatrix",j.modelViewMatrix),Nt.setValue(X,"normalMatrix",j.normalMatrix),Nt.setValue(X,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const wn=ne.uniformsGroups;for(let $n=0,In=wn.length;$n<In;$n++){const _a=wn[$n];G.update(_a,pn),G.bind(_a,pn)}}return pn}function ga(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function gc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,W,ee){je.get(R.texture).__webglTexture=W,je.get(R.depthTexture).__webglTexture=ee;const ne=je.get(R);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=ee===void 0,ne.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const ee=je.get(R);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,ee=0){z=R,U=W,N=ee;let ne=!0,j=null,we=!1,Ee=!1;if(R){const ze=je.get(R);if(ze.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(X.FRAMEBUFFER,null),ne=!1;else if(ze.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(ze.__hasExternalTextures)P.rebindTextures(R,je.get(R.texture).__webglTexture,je.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const We=R.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&je.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ee=!0);const nt=je.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[W])?j=nt[W][ee]:j=nt[W],we=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?j=je.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?j=nt[ee]:j=nt,F.copy(R.viewport),ie.copy(R.scissor),$=R.scissorTest}else F.copy(k).multiplyScalar(B).floor(),ie.copy(te).multiplyScalar(B).floor(),$=Ie;if(qe.bindFramebuffer(X.FRAMEBUFFER,j)&&ne&&qe.drawBuffers(R,j),qe.viewport(F),qe.scissor(ie),qe.setScissorTest($),we){const ze=je.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,ee)}else if(Ee){const ze=je.get(R.texture),et=W||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,ze.__webglTexture,ee||0,et)}C=-1},this.readRenderTargetPixels=function(R,W,ee,ne,j,we,Ee){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ge=Ge[Ee]),Ge){qe.bindFramebuffer(X.FRAMEBUFFER,Ge);try{const ze=R.texture,et=ze.format,nt=ze.type;if(!st.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-ne&&ee>=0&&ee<=R.height-j&&X.readPixels(W,ee,ne,j,it.convert(et),it.convert(nt),we)}finally{const ze=z!==null?je.get(z).__webglFramebuffer:null;qe.bindFramebuffer(X.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,W,ee,ne,j,we,Ee){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ge=Ge[Ee]),Ge){const ze=R.texture,et=ze.format,nt=ze.type;if(!st.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-ne&&ee>=0&&ee<=R.height-j){qe.bindFramebuffer(X.FRAMEBUFFER,Ge);const We=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.bufferData(X.PIXEL_PACK_BUFFER,we.byteLength,X.STREAM_READ),X.readPixels(W,ee,ne,j,it.convert(et),it.convert(nt),0);const vt=z!==null?je.get(z).__webglFramebuffer:null;qe.bindFramebuffer(X.FRAMEBUFFER,vt);const Rt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await sy(X,Rt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,we),X.deleteBuffer(We),X.deleteSync(Rt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,ee=0){R.isTexture!==!0&&(ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const ne=Math.pow(2,-ee),j=Math.floor(R.image.width*ne),we=Math.floor(R.image.height*ne),Ee=W!==null?W.x:0,Ge=W!==null?W.y:0;P.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ee,0,0,Ee,Ge,j,we),qe.unbindTexture()},this.copyTextureToTexture=function(R,W,ee=null,ne=null,j=0){R.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,R=arguments[1],W=arguments[2],j=arguments[3]||0,ee=null);let we,Ee,Ge,ze,et,nt,We,vt,Rt;const _t=R.isCompressedTexture?R.mipmaps[j]:R.image;ee!==null?(we=ee.max.x-ee.min.x,Ee=ee.max.y-ee.min.y,Ge=ee.isBox3?ee.max.z-ee.min.z:1,ze=ee.min.x,et=ee.min.y,nt=ee.isBox3?ee.min.z:0):(we=_t.width,Ee=_t.height,Ge=_t.depth||1,ze=0,et=0,nt=0),ne!==null?(We=ne.x,vt=ne.y,Rt=ne.z):(We=0,vt=0,Rt=0);const fn=it.convert(W.format),at=it.convert(W.type);let Ye;W.isData3DTexture?(P.setTexture3D(W,0),Ye=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),Ye=X.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),Ye=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const ai=X.getParameter(X.UNPACK_ROW_LENGTH),wt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),pn=X.getParameter(X.UNPACK_SKIP_PIXELS),li=X.getParameter(X.UNPACK_SKIP_ROWS),$t=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,_t.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,_t.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ze),X.pixelStorei(X.UNPACK_SKIP_ROWS,et),X.pixelStorei(X.UNPACK_SKIP_IMAGES,nt);const Mi=R.isDataArrayTexture||R.isData3DTexture,Nt=W.isDataArrayTexture||W.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const qn=je.get(R),Ni=je.get(W),wn=je.get(qn.__renderTarget),$n=je.get(Ni.__renderTarget);qe.bindFramebuffer(X.READ_FRAMEBUFFER,wn.__webglFramebuffer),qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let In=0;In<Ge;In++)Mi&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,je.get(R).__webglTexture,j,nt+In),R.isDepthTexture?(Nt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,je.get(W).__webglTexture,j,Rt+In),X.blitFramebuffer(ze,et,we,Ee,We,vt,we,Ee,X.DEPTH_BUFFER_BIT,X.NEAREST)):Nt?X.copyTexSubImage3D(Ye,j,We,vt,Rt+In,ze,et,we,Ee):X.copyTexSubImage2D(Ye,j,We,vt,Rt+In,ze,et,we,Ee);qe.bindFramebuffer(X.READ_FRAMEBUFFER,null),qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Nt?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Ye,j,We,vt,Rt,we,Ee,Ge,fn,at,_t.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(Ye,j,We,vt,Rt,we,Ee,Ge,fn,_t.data):X.texSubImage3D(Ye,j,We,vt,Rt,we,Ee,Ge,fn,at,_t):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,j,We,vt,we,Ee,fn,at,_t.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,j,We,vt,_t.width,_t.height,fn,_t.data):X.texSubImage2D(X.TEXTURE_2D,j,We,vt,we,Ee,fn,at,_t);X.pixelStorei(X.UNPACK_ROW_LENGTH,ai),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,wt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,pn),X.pixelStorei(X.UNPACK_SKIP_ROWS,li),X.pixelStorei(X.UNPACK_SKIP_IMAGES,$t),j===0&&W.generateMipmaps&&X.generateMipmap(Ye),qe.unbindTexture()},this.copyTextureToTexture3D=function(R,W,ee=null,ne=null,j=0){return R.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,ne=arguments[1]||null,R=arguments[2],W=arguments[3],j=arguments[4]||0),ta('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,ee,ne,j)},this.initRenderTarget=function(R){je.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),qe.unbindTexture()},this.resetState=function(){U=0,N=0,z=null,qe.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}class xd extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mg=new q,Eg=new Bt,Tg=new Bt,_w=new q,wg=new xt,Bl=new q,bh=new ho,Ag=new xt,Rh=new hc;class vw extends ri{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Am,this.bindMatrix=new xt,this.bindMatrixInverse=new xt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new uo),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Bl),this.boundingBox.expandByPoint(Bl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ho),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Bl),this.boundingSphere.expandByPoint(Bl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,o=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bh.copy(this.boundingSphere),bh.applyMatrix4(o),e.ray.intersectsSphere(bh)!==!1&&(Ag.copy(o).invert(),Rh.copy(e.ray).applyMatrix4(Ag),!(this.boundingBox!==null&&Rh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Bt,t=this.geometry.attributes.skinWeight;for(let i=0,o=t.count;i<o;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Am?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,o=this.geometry;Eg.fromBufferAttribute(o.attributes.skinIndex,e),Tg.fromBufferAttribute(o.attributes.skinWeight,e),Mg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=Tg.getComponent(a);if(c!==0){const u=Eg.getComponent(a);wg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(_w.copy(Mg).applyMatrix4(wg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rr extends Qt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xw extends dn{constructor(e=null,t=1,i=1,o,a,c,u,d,f=ln,m=ln,g,v){super(null,c,u,d,f,m,o,a,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bg=new xt,yw=new xt;class Od{constructor(e=[],t=[]){this.uuid=kr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,o=this.bones.length;i<o;i++)this.boneInverses.push(new xt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new xt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,o=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:yw;bg.multiplyMatrices(u,t[a]),bg.toArray(i,a*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new Od(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new xw(t,e,e,jn,Ci);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const o=this.bones[t];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,o=e.bones.length;i<o;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new Rr),this.bones.push(c),this.boneInverses.push(new xt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let o=0,a=t.length;o<a;o++){const c=t[o];e.bones.push(c.uuid);const u=i[o];e.boneInverses.push(u.toArray())}return e}}class F_ extends fo{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rc=new q,sc=new q,Rg=new xt,Qo=new hc,zl=new ho,Ch=new q,Cg=new q;class Sw extends Qt{constructor(e=new yi,t=new F_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,a=t.count;o<a;o++)rc.fromBufferAttribute(t,o-1),sc.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=rc.distanceTo(sc);e.setAttribute("lineDistance",new En(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(o),zl.radius+=a,e.ray.intersectsSphere(zl)===!1)return;Rg.copy(o).invert(),Qo.copy(e.ray).applyMatrix4(Rg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,m=i.index,v=i.attributes.position;if(m!==null){const S=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=S,y=M-1;E<y;E+=f){const x=m.getX(E),I=m.getX(E+1),L=Vl(this,e,Qo,d,x,I);L&&t.push(L)}if(this.isLineLoop){const E=m.getX(M-1),y=m.getX(S),x=Vl(this,e,Qo,d,E,y);x&&t.push(x)}}else{const S=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let E=S,y=M-1;E<y;E+=f){const x=Vl(this,e,Qo,d,E,E+1);x&&t.push(x)}if(this.isLineLoop){const E=Vl(this,e,Qo,d,M-1,S);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Vl(s,e,t,i,o,a){const c=s.geometry.attributes.position;if(rc.fromBufferAttribute(c,o),sc.fromBufferAttribute(c,a),t.distanceSqToSegment(rc,sc,Ch,Cg)>i)return;Ch.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(Ch);if(!(d<e.near||d>e.far))return{distance:d,point:Cg.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Pg=new q,Ig=new q;class Mw extends Sw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,a=t.count;o<a;o+=2)Pg.fromBufferAttribute(t,o),Ig.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Pg.distanceTo(Ig);e.setAttribute("lineDistance",new En(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ph extends dn{constructor(e,t,i,o,a,c,u,d,f,m,g,v){super(null,c,u,d,f,m,o,a,g,v),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class O_ extends dn{constructor(e,t,i,o,a,c,u,d,f){super(e,t,i,o,a,c,u,d,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yd extends fo{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x_,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Hl(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ew(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Tw(s){function e(o,a){return s[o]-s[a]}const t=s.length,i=new Array(t);for(let o=0;o!==t;++o)i[o]=o;return i.sort(e),i}function Lg(s,e,t){const i=s.length,o=new s.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let d=0;d!==e;++d)o[c++]=s[u+d]}return o}function B_(s,e,t,i){let o=1,a=s[0];for(;a!==void 0&&a[i]===void 0;)a=s[o++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=s[o++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=s[o++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=s[o++];while(a!==void 0)}class pc{constructor(e,t,i,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,o=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<o)){for(let u=i+2;;){if(o===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=o,o=t[++i],e<o)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(o=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(o=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,o)}return this.interpolate_(i,a,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=e*o;for(let c=0;c!==o;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ww extends pc{constructor(e,t,i,o){super(e,t,i,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$s,endingEnd:$s}}intervalChanged_(e,t,i){const o=this.parameterPositions;let a=e-2,c=e+1,u=o[a],d=o[c];if(u===void 0)switch(this.getSettings_().endingStart){case Ks:a=e,u=2*t-i;break;case ec:a=o.length-2,u=t+o[a]-o[a+1];break;default:a=e,u=i}if(d===void 0)switch(this.getSettings_().endingEnd){case Ks:c=e,d=2*i-t;break;case ec:c=1,d=i+o[1]-o[0];break;default:c=e-1,d=t}const f=(i-t)*.5,m=this.valueSize;this._weightPrev=f/(t-u),this._weightNext=f/(d-i),this._offsetPrev=a*m,this._offsetNext=c*m}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,f=d-u,m=this._offsetPrev,g=this._offsetNext,v=this._weightPrev,S=this._weightNext,M=(i-t)/(o-t),E=M*M,y=E*M,x=-v*y+2*v*E-v*M,I=(1+v)*y+(-1.5-2*v)*E+(-.5+v)*M+1,L=(-1-S)*y+(1.5+S)*E+.5*M,A=S*y-S*E;for(let H=0;H!==u;++H)a[H]=x*c[m+H]+I*c[f+H]+L*c[d+H]+A*c[g+H];return a}}class z_ extends pc{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,f=d-u,m=(i-t)/(o-t),g=1-m;for(let v=0;v!==u;++v)a[v]=c[f+v]*g+c[d+v]*m;return a}}class Aw extends pc{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ii{constructor(e,t,i,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hl(t,this.TimeBufferType),this.values=Hl(i,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Hl(e.times,Array),values:Hl(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(i.interpolation=o)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Aw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new z_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ww(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case la:t=this.InterpolantFactoryMethodDiscrete;break;case Ql:t=this.InterpolantFactoryMethodLinear;break;case Qu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return Ql;case this.InterpolantFactoryMethodSmooth:return Qu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]*=e}return this}trim(e,t){const i=this.times,o=i.length;let a=0,c=o-1;for(;a!==o&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==o){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,o=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const d=i[u];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,d),e=!1;break}if(c!==null&&c>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,d,c),e=!1;break}c=d}if(o!==void 0&&Ew(o))for(let u=0,d=o.length;u!==d;++u){const f=o[u];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),o=this.getInterpolation()===Qu,a=e.length-1;let c=1;for(let u=1;u<a;++u){let d=!1;const f=e[u],m=e[u+1];if(f!==m&&(u!==1||f!==e[0]))if(o)d=!0;else{const g=u*i,v=g-i,S=g+i;for(let M=0;M!==i;++M){const E=t[g+M];if(E!==t[v+M]||E!==t[S+M]){d=!0;break}}}if(d){if(u!==c){e[c]=e[u];const g=u*i,v=c*i;for(let S=0;S!==i;++S)t[v+S]=t[g+S]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,d=c*i,f=0;f!==i;++f)t[d+f]=t[u+f];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,o=new i(this.name,e,t);return o.createInterpolant=this.createInterpolant,o}}Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Ql;class mo extends Ii{constructor(e,t,i){super(e,t,i)}}mo.prototype.ValueTypeName="bool";mo.prototype.ValueBufferType=Array;mo.prototype.DefaultInterpolation=la;mo.prototype.InterpolantFactoryMethodLinear=void 0;mo.prototype.InterpolantFactoryMethodSmooth=void 0;class V_ extends Ii{}V_.prototype.ValueTypeName="color";class ua extends Ii{}ua.prototype.ValueTypeName="number";class bw extends pc{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=(i-t)/(o-t);let f=e*u;for(let m=f+u;f!==m;f+=4)si.slerpFlat(a,0,c,f-u,c,f,d);return a}}class mc extends Ii{InterpolantFactoryMethodLinear(e){return new bw(this.times,this.values,this.getValueSize(),e)}}mc.prototype.ValueTypeName="quaternion";mc.prototype.InterpolantFactoryMethodSmooth=void 0;class go extends Ii{constructor(e,t,i){super(e,t,i)}}go.prototype.ValueTypeName="string";go.prototype.ValueBufferType=Array;go.prototype.DefaultInterpolation=la;go.prototype.InterpolantFactoryMethodLinear=void 0;go.prototype.InterpolantFactoryMethodSmooth=void 0;class oc extends Ii{}oc.prototype.ValueTypeName="vector";class Sd{constructor(e="",t=-1,i=[],o=Ld){this.name=e,this.tracks=i,this.duration=t,this.blendMode=o,this.uuid=kr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,o=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(Cw(i[c]).scale(o));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,o={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Ii.toJSON(i[a]));return o}static CreateFromMorphTargetSequence(e,t,i,o){const a=t.length,c=[];for(let u=0;u<a;u++){let d=[],f=[];d.push((u+a-1)%a,u,(u+1)%a),f.push(0,1,0);const m=Tw(d);d=Lg(d,1,m),f=Lg(f,1,m),!o&&d[0]===0&&(d.push(a),f.push(f[0])),c.push(new ua(".morphTargetInfluences["+t[u].name+"]",d,f).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const o=e;i=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<i.length;o++)if(i[o].name===t)return i[o];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const o={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,d=e.length;u<d;u++){const f=e[u],m=f.name.match(a);if(m&&m.length>1){const g=m[1];let v=o[g];v||(o[g]=v=[]),v.push(f)}}const c=[];for(const u in o)c.push(this.CreateFromMorphTargetSequence(u,o[u],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,v,S,M,E){if(S.length!==0){const y=[],x=[];B_(S,y,x,M),y.length!==0&&E.push(new g(v,y,x))}},o=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let d=e.length||-1;const f=e.hierarchy||[];for(let g=0;g<f.length;g++){const v=f[g].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const S={};let M;for(M=0;M<v.length;M++)if(v[M].morphTargets)for(let E=0;E<v[M].morphTargets.length;E++)S[v[M].morphTargets[E]]=-1;for(const E in S){const y=[],x=[];for(let I=0;I!==v[M].morphTargets.length;++I){const L=v[M];y.push(L.time),x.push(L.morphTarget===E?1:0)}o.push(new ua(".morphTargetInfluence["+E+"]",y,x))}d=S.length*c}else{const S=".bones["+t[g].name+"]";i(oc,S+".position",v,"pos",o),i(mc,S+".quaternion",v,"rot",o),i(oc,S+".scale",v,"scl",o)}}return o.length===0?null:new this(a,d,o,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,o=e.length;i!==o;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rw(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ua;case"vector":case"vector2":case"vector3":case"vector4":return oc;case"color":return V_;case"quaternion":return mc;case"bool":case"boolean":return mo;case"string":return go}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Cw(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rw(s.type);if(s.times===void 0){const t=[],i=[];B_(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}class H_ extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Pw extends H_{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ih=new xt,Dg=new q,Ng=new q;class Iw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Dg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dg),Ng.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ng),t.updateMatrixWorld(),Ih.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ih),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Lw extends Iw{constructor(){super(new I_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ug extends H_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new Lw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=kg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kg(){return performance.now()}class Nw{constructor(e,t,i){this.binding=e,this.valueSize=i;let o,a,c;switch(t){case"quaternion":o=this._slerp,a=this._slerpAdditive,c=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":o=this._select,a=this._select,c=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:o=this._lerp,a=this._lerpAdditive,c=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=o,this._mixBufferRegionAdditive=a,this._setIdentity=c,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,o=this.valueSize,a=e*o+o;let c=this.cumulativeWeight;if(c===0){for(let u=0;u!==o;++u)i[a+u]=i[u];c=t}else{c+=t;const u=t/c;this._mixBufferRegion(i,a,0,u,o)}this.cumulativeWeight=c}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,o=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,o,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,o=e*t+t,a=this.cumulativeWeight,c=this.cumulativeWeightAdditive,u=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){const d=t*this._origIndex;this._mixBufferRegion(i,o,d,1-a,t)}c>0&&this._mixBufferRegionAdditive(i,o,this._addIndex*t,1,t);for(let d=t,f=t+t;d!==f;++d)if(i[d]!==i[d+t]){u.setValue(i,o);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,o=i*this._origIndex;e.getValue(t,o);for(let a=i,c=o;a!==c;++a)t[a]=t[o+a%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,o,a){if(o>=.5)for(let c=0;c!==a;++c)e[t+c]=e[i+c]}_slerp(e,t,i,o){si.slerpFlat(e,t,e,t,e,i,o)}_slerpAdditive(e,t,i,o,a){const c=this._workIndex*a;si.multiplyQuaternionsFlat(e,c,e,t,e,i),si.slerpFlat(e,t,e,t,e,c,o)}_lerp(e,t,i,o,a){const c=1-o;for(let u=0;u!==a;++u){const d=t+u;e[d]=e[d]*c+e[i+u]*o}}_lerpAdditive(e,t,i,o,a){for(let c=0;c!==a;++c){const u=t+c;e[u]=e[u]+e[i+c]*o}}}const Bd="\\[\\]\\.:\\/",Uw=new RegExp("["+Bd+"]","g"),zd="[^"+Bd+"]",kw="[^"+Bd.replace("\\.","")+"]",Fw=/((?:WC+[\/:])*)/.source.replace("WC",zd),Ow=/(WCOD+)?/.source.replace("WCOD",kw),Bw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zd),zw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zd),Vw=new RegExp("^"+Fw+Ow+Bw+zw+"$"),Hw=["material","materials","bones","map"];class Gw{constructor(e,t,i){const o=i||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,o=this._bindings[i];o!==void 0&&o.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let o=this._targetGroup.nCachedObjects_,a=i.length;o!==a;++o)i[o].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Mt{constructor(e,t,i){this.path=t,this.parsedPath=i||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,i):new Mt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Uw,"")}static parseTrackName(e){const t=Vw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=i.nodeName&&i.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const a=i.nodeName.substring(o+1);Hw.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,o),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const d=i(u.children);if(d)return d}return null},o=i(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)e[t++]=i[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,o=t.propertyName;let a=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===f){f=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(f!==void 0){if(e[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const c=e[o];if(c===void 0){const f=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+o+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=Gw;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ww{constructor(e,t,i=null,o=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=o;const a=t.tracks,c=a.length,u=new Array(c),d={endingStart:$s,endingEnd:$s};for(let f=0;f!==c;++f){const m=a[f].createInterpolant(null);u[f]=m,m.settings=d}this._interpolantSettings=d,this._interpolants=u,this._propertyBindings=new Array(c),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=v_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const o=this._clip.duration,a=e._clip.duration,c=a/o,u=o/a;e.warp(1,c,t),this.warp(u,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const o=this._mixer,a=o.time,c=this.timeScale;let u=this._timeScaleInterpolant;u===null&&(u=o._lendControlInterpolant(),this._timeScaleInterpolant=u);const d=u.parameterPositions,f=u.sampleValues;return d[0]=a,d[1]=a+i,f[0]=e/c,f[1]=t/c,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,o){if(!this.enabled){this._updateWeight(e);return}const a=this._startTime;if(a!==null){const d=(e-a)*i;d<0||i===0?t=0:(this._startTime=null,t=i*d)}t*=this._updateTimeScale(e);const c=this._updateTime(t),u=this._updateWeight(e);if(u>0){const d=this._interpolants,f=this._propertyBindings;switch(this.blendMode){case Ix:for(let m=0,g=d.length;m!==g;++m)d[m].evaluate(c),f[m].accumulateAdditive(u);break;case Ld:default:for(let m=0,g=d.length;m!==g;++m)d[m].evaluate(c),f[m].accumulate(o,u)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const o=i.evaluate(e)[0];t*=o,e>i.parameterPositions[1]&&(this.stopFading(),o===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const o=i.evaluate(e)[0];t*=o,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let o=this.time+e,a=this._loopCount;const c=i===Px;if(e===0)return a===-1?o:c&&(a&1)===1?t-o:o;if(i===__){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(o>=t)o=t;else if(o<0)o=0;else{this.time=o;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=o,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,c)):this._setEndings(this.repetitions===0,!0,c)),o>=t||o<0){const u=Math.floor(o/t);o-=t*u,a+=Math.abs(u);const d=this.repetitions-a;if(d<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,o=e>0?t:0,this.time=o,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(d===1){const f=e<0;this._setEndings(f,!f,c)}else this._setEndings(!1,!1,c);this._loopCount=a,this.time=o,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:u})}}else this.time=o;if(c&&(a&1)===1)return t-o}return o}_setEndings(e,t,i){const o=this._interpolantSettings;i?(o.endingStart=Ks,o.endingEnd=Ks):(e?o.endingStart=this.zeroSlopeAtStart?Ks:$s:o.endingStart=ec,t?o.endingEnd=this.zeroSlopeAtEnd?Ks:$s:o.endingEnd=ec)}_scheduleFading(e,t,i){const o=this._mixer,a=o.time;let c=this._weightInterpolant;c===null&&(c=o._lendControlInterpolant(),this._weightInterpolant=c);const u=c.parameterPositions,d=c.sampleValues;return u[0]=a,d[0]=t,u[1]=a+e,d[1]=i,this}}const Xw=new Float32Array(1);class jw extends Ur{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,o=e._clip.tracks,a=o.length,c=e._propertyBindings,u=e._interpolants,d=i.uuid,f=this._bindingsByRootAndName;let m=f[d];m===void 0&&(m={},f[d]=m);for(let g=0;g!==a;++g){const v=o[g],S=v.name;let M=m[S];if(M!==void 0)++M.referenceCount,c[g]=M;else{if(M=c[g],M!==void 0){M._cacheIndex===null&&(++M.referenceCount,this._addInactiveBinding(M,d,S));continue}const E=t&&t._propertyBindings[g].binding.parsedPath;M=new Nw(Mt.create(i,S,E),v.ValueTypeName,v.getValueSize()),++M.referenceCount,this._addInactiveBinding(M,d,S),c[g]=M}u[g].resultBuffer=M.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,o=e._clip.uuid,a=this._actionsByClip[o];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,o,i)}const t=e._propertyBindings;for(let i=0,o=t.length;i!==o;++i){const a=t[i];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,o=t.length;i!==o;++i){const a=t[i];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const o=this._actions,a=this._actionsByClip;let c=a[t];if(c===void 0)c={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=c;else{const u=c.knownActions;e._byClipCacheIndex=u.length,u.push(e)}e._cacheIndex=o.length,o.push(e),c.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],o=e._cacheIndex;i._cacheIndex=o,t[o]=i,t.pop(),e._cacheIndex=null;const a=e._clip.uuid,c=this._actionsByClip,u=c[a],d=u.knownActions,f=d[d.length-1],m=e._byClipCacheIndex;f._byClipCacheIndex=m,d[m]=f,d.pop(),e._byClipCacheIndex=null;const g=u.actionByRoot,v=(e._localRoot||this._root).uuid;delete g[v],d.length===0&&delete c[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,o=t.length;i!==o;++i){const a=t[i];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,o=this._nActiveActions++,a=t[o];e._cacheIndex=o,t[o]=e,a._cacheIndex=i,t[i]=a}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,o=--this._nActiveActions,a=t[o];e._cacheIndex=o,t[o]=e,a._cacheIndex=i,t[i]=a}_addInactiveBinding(e,t,i){const o=this._bindingsByRootAndName,a=this._bindings;let c=o[t];c===void 0&&(c={},o[t]=c),c[i]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,o=i.rootNode.uuid,a=i.path,c=this._bindingsByRootAndName,u=c[o],d=t[t.length-1],f=e._cacheIndex;d._cacheIndex=f,t[f]=d,t.pop(),delete u[a],Object.keys(u).length===0&&delete c[o]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,o=this._nActiveBindings++,a=t[o];e._cacheIndex=o,t[o]=e,a._cacheIndex=i,t[i]=a}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,o=--this._nActiveBindings,a=t[o];e._cacheIndex=o,t[o]=e,a._cacheIndex=i,t[i]=a}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new z_(new Float32Array(2),new Float32Array(2),1,Xw),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,o=--this._nActiveControlInterpolants,a=t[o];e.__cacheIndex=o,t[o]=e,a.__cacheIndex=i,t[i]=a}clipAction(e,t,i){const o=t||this._root,a=o.uuid;let c=typeof e=="string"?Sd.findByName(o,e):e;const u=c!==null?c.uuid:e,d=this._actionsByClip[u];let f=null;if(i===void 0&&(c!==null?i=c.blendMode:i=Ld),d!==void 0){const g=d.actionByRoot[a];if(g!==void 0&&g.blendMode===i)return g;f=d.knownActions[0],c===null&&(c=f._clip)}if(c===null)return null;const m=new Ww(this,c,t,i);return this._bindAction(m,f),this._addInactiveAction(m,u,a),m}existingAction(e,t){const i=t||this._root,o=i.uuid,a=typeof e=="string"?Sd.findByName(i,e):e,c=a?a.uuid:e,u=this._actionsByClip[c];return u!==void 0&&u.actionByRoot[o]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,o=this.time+=e,a=Math.sign(e),c=this._accuIndex^=1;for(let f=0;f!==i;++f)t[f]._update(o,e,a,c);const u=this._bindings,d=this._nActiveBindings;for(let f=0;f!==d;++f)u[f].apply(c);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,o=this._actionsByClip,a=o[i];if(a!==void 0){const c=a.knownActions;for(let u=0,d=c.length;u!==d;++u){const f=c[u];this._deactivateAction(f);const m=f._cacheIndex,g=t[t.length-1];f._cacheIndex=null,f._byClipCacheIndex=null,g._cacheIndex=m,t[m]=g,t.pop(),this._removeInactiveBindingsForAction(f)}delete o[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const c in i){const u=i[c].actionByRoot,d=u[t];d!==void 0&&(this._deactivateAction(d),this._removeInactiveAction(d))}const o=this._bindingsByRootAndName,a=o[t];if(a!==void 0)for(const c in a){const u=a[c];u.restoreOriginalState(),this._removeInactiveBinding(u)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class Fg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yw extends Mw{constructor(e=10,t=10,i=4473924,o=8947848){i=new gt(i),o=new gt(o);const a=t/2,c=e/t,u=e/2,d=[],f=[];for(let v=0,S=0,M=-u;v<=t;v++,M+=c){d.push(-u,0,M,u,0,M),d.push(M,0,-u,M,0,u);const E=v===a?i:o;E.toArray(f,S),S+=3,E.toArray(f,S),S+=3,E.toArray(f,S),S+=3,E.toArray(f,S),S+=3}const m=new yi;m.setAttribute("position",new En(d,3)),m.setAttribute("color",new En(f,3));const g=new F_({vertexColors:!0,toneMapped:!1});super(m,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class qw extends Ur{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);const Og={type:"change"},Vd={type:"start"},G_={type:"end"},Gl=new hc,Bg=new Cr,$w=Math.cos(70*nc.DEG2RAD),Jt=new q,On=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lh=1e-6;class Kw extends qw{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Js.ROTATE,MIDDLE:Js.DOLLY,RIGHT:Js.PAN},this.touches={ONE:qs.ROTATE,TWO:qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new si,this._lastTargetPosition=new q,this._quat=new si().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fg,this._sphericalDelta=new Fg,this._scale=1,this._panOffset=new q,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new q,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Jw.bind(this),this._onPointerDown=Zw.bind(this),this._onPointerUp=Qw.bind(this),this._onContextMenu=o1.bind(this),this._onMouseWheel=n1.bind(this),this._onKeyDown=i1.bind(this),this._onTouchStart=r1.bind(this),this._onTouchMove=s1.bind(this),this._onMouseDown=e1.bind(this),this._onMouseMove=t1.bind(this),this._interceptControlDown=a1.bind(this),this._interceptControlUp=l1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Og),this.update(),this.state=Dt.NONE}update(e=null){const t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=On:i>Math.PI&&(i-=On),o<-Math.PI?o+=On:o>Math.PI&&(o-=On),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=Jt.length();c=this._clampDistance(u*this._scale);const d=u-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){const u=new q(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;const f=new q(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(u),this.object.updateMatrixWorld(),c=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Gl.origin.copy(this.object.position),Gl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gl.direction))<$w?this.object.lookAt(this.target):(Bg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gl.intersectPlane(Bg,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Lh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lh||this._lastTargetPosition.distanceToSquared(this.target)>Lh?(this.dispatchEvent(Og),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Jt.copy(o).sub(this.target);let a=Jt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,a=t-i.top,c=i.width,u=i.height;this._mouse.x=o/c*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(On*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-On*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(On*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-On*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ct,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Zw(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Jw(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Qw(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(G_),this.state=Dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function e1(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Dt.DOLLY;break;case Js.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}break;case Js.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Vd)}function t1(s){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function n1(s){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(s.preventDefault(),this.dispatchEvent(Vd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(G_))}function i1(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function r1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case qs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Dt.TOUCH_ROTATE;break;case qs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Dt.TOUCH_DOLLY_PAN;break;case qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Vd)}function s1(s){switch(this._trackPointer(s),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Dt.NONE}}function o1(s){this.enabled!==!1&&s.preventDefault()}function a1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const c1={id:"idle",name:"Idle",description:"Gerakan diam dengan ayunan tubuh dan kepala yang halus.",duration:2.4,loop:!0,tracks:[{target:"body",property:"position",axis:"y",keyframes:[{time:0,value:18},{time:1.2,value:18.22},{time:2.4,value:18}]},{target:"head",property:"rotation",axis:"y",keyframes:[{time:0,value:-.035},{time:1.2,value:.035},{time:2.4,value:-.035}]},{target:"right_arm",property:"rotation",axis:"x",keyframes:[{time:0,value:.025},{time:1.2,value:-.025},{time:2.4,value:.025}]},{target:"left_arm",property:"rotation",axis:"x",keyframes:[{time:0,value:-.025},{time:1.2,value:.025},{time:2.4,value:-.025}]}]},u1=Object.freeze(Object.defineProperty({__proto__:null,animation:c1},Symbol.toStringTag,{value:"Module"})),h1={id:"jump",name:"Jump",description:"Melompat satu kali dengan lutut tertekuk dan tangan terangkat.",duration:1.15,loop:!1,tracks:[{target:"root",property:"position",axis:"y",keyframes:[{time:0,value:0},{time:.22,value:0},{time:.52,value:5},{time:.78,value:5},{time:1.15,value:0}]},{target:"right_arm",property:"rotation",axis:"x",keyframes:[{time:0,value:0},{time:.3,value:-2.1},{time:.8,value:-2.1},{time:1.15,value:0}]},{target:"left_arm",property:"rotation",axis:"x",keyframes:[{time:0,value:0},{time:.3,value:-2.1},{time:.8,value:-2.1},{time:1.15,value:0}]},{target:"right_leg",property:"rotation",axis:"x",keyframes:[{time:0,value:0},{time:.5,value:-.35},{time:.8,value:-.35},{time:1.15,value:0}]},{target:"left_leg",property:"rotation",axis:"x",keyframes:[{time:0,value:0},{time:.5,value:-.35},{time:.8,value:-.35},{time:1.15,value:0}]}]},d1=Object.freeze(Object.defineProperty({__proto__:null,animation:h1},Symbol.toStringTag,{value:"Module"})),f1={id:"run",name:"Run",description:"Langkah lebih lebar dan cepat dengan badan sedikit condong.",duration:.62,loop:!0,tracks:[{target:"right_leg",property:"rotation",axis:"x",keyframes:[{time:0,value:.82},{time:.31,value:-.82},{time:.62,value:.82}]},{target:"left_leg",property:"rotation",axis:"x",keyframes:[{time:0,value:-.82},{time:.31,value:.82},{time:.62,value:-.82}]},{target:"right_arm",property:"rotation",axis:"x",keyframes:[{time:0,value:-.85},{time:.31,value:.85},{time:.62,value:-.85}]},{target:"left_arm",property:"rotation",axis:"x",keyframes:[{time:0,value:.85},{time:.31,value:-.85},{time:.62,value:.85}]},{target:"body",property:"rotation",axis:"x",keyframes:[{time:0,value:-.12},{time:.31,value:-.2},{time:.62,value:-.12}]},{target:"body",property:"position",axis:"y",keyframes:[{time:0,value:18},{time:.155,value:18.8},{time:.31,value:18},{time:.465,value:18.8},{time:.62,value:18}]}]},p1=Object.freeze(Object.defineProperty({__proto__:null,animation:f1},Symbol.toStringTag,{value:"Module"})),m1={id:"walk",name:"Walk",description:"Ayunan tangan dan kaki bergantian seperti berjalan.",duration:1,loop:!0,tracks:[{target:"right_leg",property:"rotation",axis:"x",keyframes:[{time:0,value:.55},{time:.5,value:-.55},{time:1,value:.55}]},{target:"left_leg",property:"rotation",axis:"x",keyframes:[{time:0,value:-.55},{time:.5,value:.55},{time:1,value:-.55}]},{target:"right_arm",property:"rotation",axis:"x",keyframes:[{time:0,value:-.48},{time:.5,value:.48},{time:1,value:-.48}]},{target:"left_arm",property:"rotation",axis:"x",keyframes:[{time:0,value:.48},{time:.5,value:-.48},{time:1,value:.48}]},{target:"body",property:"position",axis:"y",keyframes:[{time:0,value:18},{time:.25,value:18.35},{time:.5,value:18},{time:.75,value:18.35},{time:1,value:18}]}]},g1=Object.freeze(Object.defineProperty({__proto__:null,animation:m1},Symbol.toStringTag,{value:"Module"})),_1={id:"wave",name:"Wave",description:"Mengangkat lengan kanan dan melambaikan tangan.",duration:1.8,loop:!1,tracks:[{target:"right_arm",property:"rotation",axis:"z",keyframes:[{time:0,value:0},{time:.35,value:-2.55},{time:.55,value:-2.25},{time:.75,value:-2.65},{time:.95,value:-2.25},{time:1.15,value:-2.65},{time:1.35,value:-2.25},{time:1.8,value:0}]},{target:"right_arm",property:"rotation",axis:"x",keyframes:[{time:0,value:0},{time:.35,value:-.2},{time:1.35,value:-.2},{time:1.8,value:0}]},{target:"head",property:"rotation",axis:"z",keyframes:[{time:0,value:0},{time:.4,value:.08},{time:1.3,value:.08},{time:1.8,value:0}]}]},v1=Object.freeze(Object.defineProperty({__proto__:null,animation:_1},Symbol.toStringTag,{value:"Module"})),x1=Object.assign({"./definitions/idle.ts":u1,"./definitions/jump.ts":d1,"./definitions/run.ts":p1,"./definitions/walk.ts":g1,"./definitions/wave.ts":v1}),lo=Object.values(x1).map(s=>s.animation).filter(Boolean).sort((s,e)=>s.name.localeCompare(e.name)),zg=new Set;for(const s of lo){if(zg.has(s.id))throw new Error(`ID animasi duplikat: ${s.id}`);zg.add(s.id)}function y1(s){if(s)return lo.find(e=>e.id===s)}function W_(s){if(!Number.isFinite(s.duration)||s.duration<=0)throw new Error(`Animasi ${s.id}: duration harus berupa angka positif.`);const e=[];for(const t of s.tracks){const i=[...t.keyframes].sort((c,u)=>c.time-u.time);if(i.length<2)throw new Error(`Animasi ${s.id}: track ${t.target} memerlukan minimal dua keyframe.`);for(let c=0;c<i.length;c+=1){if(!Number.isFinite(i[c].time)||!Number.isFinite(i[c].value))throw new Error(`Animasi ${s.id}: keyframe mengandung angka tidak valid.`);if(c>0&&i[c].time<=i[c-1].time)throw new Error(`Animasi ${s.id}: waktu keyframe harus unik dan meningkat.`)}if(i[0].time!==0)throw new Error(`Animasi ${s.id}: keyframe pertama track ${t.target} harus dimulai pada 0.`);if(i[i.length-1].time>s.duration)throw new Error(`Animasi ${s.id}: keyframe track ${t.target} melewati duration.`);const o=i.map(c=>c.time),a=i.map(c=>c.value);e.push(new ua(`${t.target}.${t.property}[${t.axis}]`,o,a))}return new Sd(s.name,s.duration,e)}const X_=["head","body","right_arm","left_arm","right_leg","left_leg"],j_=["top","bottom","right","front","left","back"],Y_=["base","outer"],Hd=s=>typeof s=="object"&&s!==null&&!Array.isArray(s),Gd=s=>typeof s=="string"&&/^#[0-9a-fA-F]{6}$/.test(s),Md=s=>typeof s=="number"&&Number.isInteger(s);function S1(s,e){if(!Hd(s))throw new Error(`regions[${e}] harus berupa objek.`);const{part:t,layer:i="base",face:o,x:a,y:c,width:u,height:d,color:f}=s;if(!X_.includes(t))throw new Error(`regions[${e}].part tidak dikenal.`);if(!Y_.includes(i))throw new Error(`regions[${e}].layer harus base atau outer.`);if(!j_.includes(o))throw new Error(`regions[${e}].face tidak dikenal.`);if(![a,c,u,d].every(Md)||u<1||d<1||a<0||c<0)throw new Error(`regions[${e}] membutuhkan x/y >= 0 dan width/height berupa bilangan bulat positif.`);if(!Gd(f))throw new Error(`regions[${e}].color harus berupa HEX, misalnya #D9A078.`);return{part:t,layer:i,face:o,x:a,y:c,width:u,height:d,color:f}}function M1(s,e){if(!Hd(s))throw new Error(`pixels[${e}] harus berupa objek.`);const{part:t,layer:i="base",face:o,x:a,y:c,color:u}=s;if(!X_.includes(t))throw new Error(`pixels[${e}].part tidak dikenal.`);if(!Y_.includes(i))throw new Error(`pixels[${e}].layer harus base atau outer.`);if(!j_.includes(o))throw new Error(`pixels[${e}].face tidak dikenal.`);if(!Md(a)||!Md(c)||a<0||c<0)throw new Error(`pixels[${e}] membutuhkan x/y berupa bilangan bulat >= 0.`);if(!Gd(u))throw new Error(`pixels[${e}].color harus berupa HEX, misalnya #D9A078.`);return{part:t,layer:i,face:o,x:a,y:c,color:u}}function Vg(s){try{const e=JSON.parse(s);if(!Hd(e))throw new Error("JSON utama harus berupa objek.");if(e.version!==1)throw new Error("version harus bernilai 1.");if(e.model!=="classic"&&e.model!=="slim")throw new Error("model harus classic atau slim.");if(!Gd(e.default_skin))throw new Error("default_skin harus berupa warna HEX, misalnya #D9A078.");if(e.regions!==void 0&&!Array.isArray(e.regions))throw new Error("regions harus berupa array.");if(e.pixels!==void 0&&!Array.isArray(e.pixels))throw new Error("pixels harus berupa array.");const t=(e.regions??[]).map(S1),i=(e.pixels??[]).map(M1),o={version:1,model:e.model,default_skin:e.default_skin,regions:t,pixels:i};return T1(o),{ok:!0,value:o}}catch(e){return{ok:!1,error:e instanceof Error?e.message:"JSON tidak valid."}}}function E1(s){const e=(d,f,m,g,v,S)=>({top:d,bottom:f,right:m,front:g,left:v,back:S}),t=(d,f,m)=>e({x:d+4,y:f,width:m,height:4},{x:d+4+m,y:f,width:m,height:4},{x:d,y:f+4,width:4,height:12},{x:d+4,y:f+4,width:m,height:12},{x:d+4+m,y:f+4,width:4,height:12},{x:d+8+m,y:f+4,width:m,height:12}),i=s==="classic"?t(40,16,4):e({x:44,y:16,width:3,height:4},{x:47,y:16,width:3,height:4},{x:40,y:20,width:4,height:12},{x:44,y:20,width:3,height:12},{x:47,y:20,width:4,height:12},{x:51,y:20,width:3,height:12}),o=s==="classic"?t(32,48,4):e({x:36,y:48,width:3,height:4},{x:39,y:48,width:3,height:4},{x:32,y:52,width:4,height:12},{x:36,y:52,width:3,height:12},{x:39,y:52,width:4,height:12},{x:43,y:52,width:3,height:12}),a=e({x:8,y:0,width:8,height:8},{x:16,y:0,width:8,height:8},{x:0,y:8,width:8,height:8},{x:8,y:8,width:8,height:8},{x:16,y:8,width:8,height:8},{x:24,y:8,width:8,height:8}),c=e({x:20,y:16,width:8,height:4},{x:28,y:16,width:8,height:4},{x:16,y:20,width:4,height:12},{x:20,y:20,width:8,height:12},{x:28,y:20,width:4,height:12},{x:32,y:20,width:8,height:12}),u=(d,f)=>e({x:d+4,y:f,width:4,height:4},{x:d+8,y:f,width:4,height:4},{x:d,y:f+4,width:4,height:12},{x:d+4,y:f+4,width:4,height:12},{x:d+8,y:f+4,width:4,height:12},{x:d+12,y:f+4,width:4,height:12});return{head:a,body:c,right_arm:i,left_arm:o,right_leg:u(0,16),left_leg:u(16,48)}}function os(s,e,t){const i=E1(t);return s==="head"&&e==="outer"?{top:{x:40,y:0,width:8,height:8},bottom:{x:48,y:0,width:8,height:8},right:{x:32,y:8,width:8,height:8},front:{x:40,y:8,width:8,height:8},left:{x:48,y:8,width:8,height:8},back:{x:56,y:8,width:8,height:8}}:s==="body"&&e==="outer"?{top:{x:20,y:32,width:8,height:4},bottom:{x:28,y:32,width:8,height:4},right:{x:16,y:36,width:4,height:12},front:{x:20,y:36,width:8,height:12},left:{x:28,y:36,width:4,height:12},back:{x:32,y:36,width:8,height:12}}:s==="right_arm"&&e==="outer"?t==="classic"?{top:{x:44,y:32,width:4,height:4},bottom:{x:48,y:32,width:4,height:4},right:{x:40,y:36,width:4,height:12},front:{x:44,y:36,width:4,height:12},left:{x:48,y:36,width:4,height:12},back:{x:52,y:36,width:4,height:12}}:{top:{x:44,y:32,width:3,height:4},bottom:{x:47,y:32,width:3,height:4},right:{x:40,y:36,width:4,height:12},front:{x:44,y:36,width:3,height:12},left:{x:47,y:36,width:4,height:12},back:{x:51,y:36,width:3,height:12}}:s==="left_arm"&&e==="outer"?t==="classic"?{top:{x:52,y:48,width:4,height:4},bottom:{x:56,y:48,width:4,height:4},right:{x:48,y:52,width:4,height:12},front:{x:52,y:52,width:4,height:12},left:{x:56,y:52,width:4,height:12},back:{x:60,y:52,width:4,height:12}}:{top:{x:52,y:48,width:3,height:4},bottom:{x:55,y:48,width:3,height:4},right:{x:48,y:52,width:4,height:12},front:{x:52,y:52,width:3,height:12},left:{x:55,y:52,width:4,height:12},back:{x:59,y:52,width:3,height:12}}:s==="right_leg"&&e==="outer"?{top:{x:4,y:32,width:4,height:4},bottom:{x:8,y:32,width:4,height:4},right:{x:0,y:36,width:4,height:12},front:{x:4,y:36,width:4,height:12},left:{x:8,y:36,width:4,height:12},back:{x:12,y:36,width:4,height:12}}:s==="left_leg"&&e==="outer"?{top:{x:4,y:48,width:4,height:4},bottom:{x:8,y:48,width:4,height:4},right:{x:0,y:52,width:4,height:12},front:{x:4,y:52,width:4,height:12},left:{x:8,y:52,width:4,height:12},back:{x:12,y:52,width:4,height:12}}:i[s]}function T1(s){for(const[e,t]of[["regions",s.regions??[]],["pixels",s.pixels??[]]])t.forEach((i,o)=>{const a=os(i.part,i.layer??"base",s.model)[i.face],c="width"in i?Number(i.width):1,u="height"in i?Number(i.height):1;if(i.x+c>a.width||i.y+u>a.height)throw new Error(`${e}[${o}] melewati batas face ${i.face} (${a.width}×${a.height}) pada ${i.part}/${i.layer??"base"}.`)})}function Ed(s,e){const t=document.createElement("canvas");t.width=64,t.height=64;const i=t.getContext("2d");if(!i)throw new Error("Browser tidak mendukung Canvas 2D.");if(i.clearRect(0,0,64,64),e==="base"){i.fillStyle=s.default_skin;const o=["head","body","right_arm","left_arm","right_leg","left_leg"];for(const a of o){const c=os(a,"base",s.model);for(const u of Object.values(c))i.fillRect(u.x,u.y,u.width,u.height)}}for(const o of s.regions??[]){if((o.layer??"base")!==e)continue;const a=os(o.part,e,s.model)[o.face];i.fillStyle=o.color,i.fillRect(a.x+o.x,a.y+o.y,o.width,o.height)}for(const o of s.pixels??[]){if((o.layer??"base")!==e)continue;const a=os(o.part,e,s.model)[o.face];i.fillStyle=o.color,i.fillRect(a.x+o.x,a.y+o.y,1,1)}return t}function Hg(s,e){const t=new O_(Ed(s,e));return t.colorSpace=Sn,t.magFilter=ln,t.minFilter=ln,t.generateMipmaps=!1,t.flipY=!0,t.needsUpdate=!0,t}function Gg(s,e){const{width:t,height:i,depth:o,position:[a,c,u],uv:d,name:f}=s,m=t/2,g=i/2,v=o/2,S=[],M=[],E=[],y={front:[[-m,-g,v],[m,-g,v],[m,g,v],[-m,g,v]],back:[[m,-g,-v],[-m,-g,-v],[-m,g,-v],[m,g,-v]],right:[[-m,-g,-v],[-m,-g,v],[-m,g,v],[-m,g,-v]],left:[[m,-g,v],[m,-g,-v],[m,g,-v],[m,g,v]],top:[[-m,g,v],[m,g,v],[m,g,-v],[-m,g,-v]],bottom:[[-m,-g,-v],[m,-g,-v],[m,-g,v],[-m,-g,v]]};["front","back","right","left","top","bottom"].forEach(A=>{const H=S.length/3,U=d[A],N=U.x/64,z=(U.x+U.width)/64,C=1-U.y/64,b=1-(U.y+U.height)/64;y[A].forEach(([ie,$,ce])=>S.push(ie+a,$+c,ce+u)),M.push(N,b,z,b,z,C,N,C),E.push(H,H+1,H+2,H,H+2,H+3)});const I=new yi;I.setAttribute("position",new En(S,3)),I.setAttribute("uv",new En(M,2)),I.setIndex(E),I.computeVertexNormals();const L=new ri(I,e);return L.name=f,L.castShadow=!0,L.receiveShadow=!0,L}function w1(s){const e=new ia;e.name="MinecraftCharacter";const t=new Rr;t.name="root",e.add(t);const i=new Rr;i.name="body",i.position.set(0,18,0),t.add(i);const o=new Rr;o.name="head",o.position.set(0,6,0),i.add(o);const a=new Rr;a.name="right_arm",a.position.set(-6,6,0),i.add(a);const c=new Rr;c.name="left_arm",c.position.set(6,6,0),i.add(c);const u=new Rr;u.name="right_leg",u.position.set(-2,12,0),t.add(u);const d=new Rr;d.name="left_leg",d.position.set(2,12,0),t.add(d);const f=s.model==="slim"?3:4;return{root:e,rootBone:t,bones:[t,i,o,a,c,u,d],parts:[{name:"head",size:[8,8,8],pivotWorld:[0,24,0],localCenter:[0,4,0],bone:o},{name:"body",size:[8,12,4],pivotWorld:[0,18,0],localCenter:[0,0,0],bone:i},{name:"right_arm",size:[f,12,4],pivotWorld:[-6,24,0],localCenter:[0,-6,0],bone:a},{name:"left_arm",size:[f,12,4],pivotWorld:[6,24,0],localCenter:[0,-6,0],bone:c},{name:"right_leg",size:[4,12,4],pivotWorld:[-2,12,0],localCenter:[0,-6,0],bone:u},{name:"left_leg",size:[4,12,4],pivotWorld:[2,12,0],localCenter:[0,-6,0],bone:d}]}}function A1(s,e){const t=Hg(s,"base"),i=Hg(s,"outer"),o=new yd({map:t,roughness:1,metalness:0}),a=new yd({map:i,roughness:1,metalness:0,transparent:!0,alphaTest:.015,side:Ji,depthWrite:!0});for(const c of e.parts){const[u,d,f]=c.size;c.bone.add(Gg({width:u,height:d,depth:f,position:c.localCenter,uv:os(c.name,"base",s.model),name:`${c.name}_base`},o)),c.bone.add(Gg({width:u+.5,height:d+.5,depth:f+.5,position:c.localCenter,uv:os(c.name,"outer",s.model),name:`${c.name}_outer`},a))}return e.root.userData.renderMode="standard",e.root.userData.skinModel=s.model,e.root}function br(s,e,t){return s.clone().lerp(e,t)}function b1(s,e,t,i,o){const a=e/2,c=t/2,u=i/2,[d,f,m]=o,v={front:[[-a,-c,u],[a,-c,u],[a,c,u],[-a,c,u]],back:[[a,-c,-u],[-a,-c,-u],[-a,c,-u],[a,c,-u]],right:[[-a,-c,-u],[-a,-c,u],[-a,c,u],[-a,c,-u]],left:[[a,-c,u],[a,-c,-u],[a,c,-u],[a,c,u]],top:[[-a,c,u],[a,c,u],[a,c,-u],[-a,c,-u]],bottom:[[-a,-c,-u],[a,-c,-u],[a,-c,u],[-a,-c,u]]}[s],S=M=>{const[E,y,x]=v[M];return new q(E+d,y+f,x+m)};return[S(0),S(1),S(2),S(3)]}function R1(s,e){const t={base:Ed(s,"base"),outer:Ed(s,"outer")},i={base:t.base.getContext("2d").getImageData(0,0,64,64),outer:t.outer.getContext("2d").getImageData(0,0,64,64)},o=document.createElement("canvas");o.width=64,o.height=64;const a=o.getContext("2d");if(!a)throw new Error("Browser tidak mendukung Canvas 2D untuk palet warna.");const c=a.createImageData(64,64),u=new Map,d=[],f=[],m=[],g=[],v=[],S=["front","back","right","left","top","bottom"],M=["base","outer"],E=new Map(e.bones.map((U,N)=>[U.name,N])),y=U=>{const N=U.join(","),z=u.get(N);if(z!==void 0)return z;const C=u.size;if(C>=4096)throw new Error("Palet warna melebihi kapasitas 4096 warna.");u.set(N,C);const b=C*4;return c.data[b]=U[0],c.data[b+1]=U[1],c.data[b+2]=U[2],c.data[b+3]=255,C};for(const U of e.parts)for(const N of M){const[z,C,b]=U.size,F=N==="outer"?.5:0,ie=z+F,$=C+F,ce=b+F,le=[U.pivotWorld[0]+U.localCenter[0],U.pivotWorld[1]+U.localCenter[1],U.pivotWorld[2]+U.localCenter[2]],ae=E.get(U.name);if(ae===void 0)throw new Error(`Bone ${U.name} tidak ditemukan.`);for(const oe of S){const B=os(U.name,N,s.model)[oe],ue=b1(oe,ie,$,ce,le),[re,k,te,Ie]=ue;for(let Z=0;Z<B.height;Z+=1)for(let he=0;he<B.width;he+=1){const Se=B.x+he,Ae=((B.y+Z)*64+Se)*4,Le=i[N].data,$e=[Le[Ae],Le[Ae+1],Le[Ae+2],Le[Ae+3]];if($e[3]===0)continue;const bt=y($e),dt=bt%64,It=Math.floor(bt/64),X=(dt+.5)/64,cn=1-(It+.5)/64,ot=he/B.width,st=(he+1)/B.width,qe=Z/B.height,Tt=(Z+1)/B.height,je=br(Ie,te,ot).lerp(br(re,k,ot),qe),P=br(Ie,te,st).lerp(br(re,k,st),qe),w=br(Ie,te,st).lerp(br(re,k,st),Tt),J=br(Ie,te,ot).lerp(br(re,k,ot),Tt),de=d.length/3;[J,w,P,je].forEach(ge=>{d.push(ge.x,ge.y,ge.z),f.push(X,cn),m.push(ae,0,0,0),g.push(1,0,0,0)}),v.push(de,de+1,de+2,de,de+2,de+3)}}}a.putImageData(c,0,0);const x=new O_(o);x.colorSpace=Sn,x.magFilter=ln,x.minFilter=ln,x.generateMipmaps=!1,x.flipY=!0,x.needsUpdate=!0;const I=new yi;I.setAttribute("position",new En(d,3)),I.setAttribute("uv",new En(f,2)),I.setAttribute("skinIndex",new Ud(m,4)),I.setAttribute("skinWeight",new En(g,4)),I.setIndex(v),I.computeVertexNormals();const L=new yd({map:x,roughness:1,metalness:0}),A=new vw(I,L);A.name="MinecraftCharacter_LightMesh",A.castShadow=!0,A.receiveShadow=!0,A.frustumCulled=!1;const H=new Od(e.bones);return e.root.add(A),e.root.updateMatrixWorld(!0),A.bind(H),e.root.userData.renderMode="light",e.root.userData.skinModel=s.model,e.root.userData.paletteColorCount=u.size,e.root.userData.meshCount=1,e.root}function q_(s,e="light"){const t=w1(s);return e==="light"?R1(s,t):A1(s,t)}function $_(s){const e=new Set,t=new Set;s.traverse(i=>{i instanceof ri&&(e.add(i.geometry),(Array.isArray(i.material)?i.material:[i.material]).forEach(a=>t.add(a)))}),e.forEach(i=>i.dispose()),t.forEach(i=>{const o=i.map;o==null||o.dispose(),i.dispose()})}const C1="light";function P1({skin:s,animationId:e,playing:t,loopEnabled:i,restartToken:o}){const a=Wt.useRef(null),c=Wt.useRef(null),u=C1;return Wt.useEffect(()=>{const d=a.current;if(!d)return;const f=new xd;f.background=new gt("#111827");const m=new ii(36,1,.1,500);m.position.set(31,25,43),m.lookAt(0,16,0);const g=new gw({antialias:!0,alpha:!1});g.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),g.outputColorSpace=Sn,g.shadowMap.enabled=!0,g.shadowMap.type=i_,g.setClearColor("#111827"),d.appendChild(g.domElement);const v=new Kw(m,g.domElement);v.target.set(0,16,0),v.enableDamping=!0,v.dampingFactor=.07,v.minDistance=18,v.maxDistance=100,v.maxPolarAngle=Math.PI*.88;const S=new Pw(14477567,3424340,2);f.add(S);const M=new Ug(16777215,2.6);M.position.set(-18,34,28),M.castShadow=!0,M.shadow.mapSize.set(1024,1024),f.add(M);const E=new Ug(10206463,1);E.position.set(18,16,-24),f.add(E);const y=new Yw(80,40,4477290,2568775);y.position.y=-.08,f.add(y);const x=q_(s,u);f.add(x);const I=new jw(x),L=new Map;for(const C of lo)try{L.set(C.id,W_(C))}catch(b){console.warn(`Animasi ${C.id} dilewati:`,b)}c.current={mixer:I,clips:L,activeAction:null};const A=()=>{const C=Math.max(d.clientWidth,1),b=Math.max(d.clientHeight,1);m.aspect=C/b,m.updateProjectionMatrix(),g.setSize(C,b,!1)},H=new ResizeObserver(A);H.observe(d),A();const U=new Dw;let N=0;const z=()=>{N=requestAnimationFrame(z),I.update(Math.min(U.getDelta(),.05)),v.update(),g.render(f,m)};return z(),()=>{cancelAnimationFrame(N),H.disconnect(),v.dispose(),I.stopAllAction(),I.uncacheRoot(x),c.current=null,$_(x),g.dispose(),g.domElement.remove(),f.clear()}},[s]),Wt.useEffect(()=>{const d=c.current;if(!d||(d.mixer.stopAllAction(),d.activeAction=null,!e))return;const f=d.clips.get(e);if(!f)return;const m=d.mixer.clipAction(f);m.reset(),m.setLoop(i?v_:__,i?1/0:1),m.clampWhenFinished=!i,m.play(),m.paused=!t,d.activeAction=m},[e,i,o]),Wt.useEffect(()=>{var f;const d=(f=c.current)==null?void 0:f.activeAction;d&&(d.paused=!t)},[t]),me.jsxs("div",{className:"viewer-shell",children:[me.jsx("div",{className:"viewer-canvas",ref:a}),me.jsxs("div",{className:"viewer-hint",children:[me.jsx("span",{className:"hint-dot"})," Seret untuk memutar ",me.jsx("span",{children:"·"})," Scroll untuk zoom"]}),me.jsxs("div",{className:"viewer-tag",children:[me.jsx("span",{className:"live-dot"})," LIVE PREVIEW · LIGHT"]})]})}function I1({animationId:s,playing:e,loopEnabled:t,onAnimationChange:i,onPlayingChange:o,onLoopChange:a,onRestart:c}){const u=y1(s);return me.jsxs("section",{className:"panel animation-panel",children:[me.jsxs("div",{className:"panel-heading compact-heading",children:[me.jsxs("div",{children:[me.jsx("div",{className:"eyebrow",children:"MOTION LIBRARY"}),me.jsx("h2",{children:"Animasi karakter"})]}),me.jsxs("span",{className:"animation-count",children:[lo.length," CLIPS"]})]}),me.jsx("label",{className:"animation-select-label",htmlFor:"animation-select",children:"Gerakan"}),me.jsxs("select",{id:"animation-select",className:"animation-select",value:s??"",onChange:d=>{i(d.target.value||null),o(!1)},children:[me.jsx("option",{value:"",children:"Pose statis"}),lo.map(d=>me.jsx("option",{value:d.id,children:d.name},d.id))]}),me.jsx("p",{className:"animation-description",children:(u==null?void 0:u.description)??"Karakter ditampilkan dalam pose dasar."}),me.jsxs("div",{className:"animation-toolbar",children:[me.jsxs("button",{className:"primary-button animation-play",type:"button",disabled:!u,onClick:()=>o(!e),children:[e?me.jsx(q0,{size:15}):me.jsx($0,{size:15}),e?"Pause":"Play"]}),me.jsxs("button",{className:"secondary-button animation-restart",type:"button",disabled:!u,onClick:c,"aria-label":"Ulangi animasi",children:[me.jsx(t_,{size:15})," Ulangi"]}),me.jsxs("button",{className:`loop-toggle ${t?"selected":""}`,type:"button",disabled:!u,onClick:()=>a(!t),"aria-pressed":t,children:[me.jsx(K0,{size:14})," Loop"]})]}),u&&me.jsxs("div",{className:"animation-meta",children:[me.jsxs("span",{children:["Durasi ",u.duration.toFixed(2)," detik"]}),me.jsx("span",{children:u.loop?"Loop bawaan":"Satu kali"})]})]})}const L1=`# Panduan Penggunaan Minecraft Skin Studio

## 1. Memahami fungsi website

Minecraft Skin Studio (Blockform) adalah aplikasi yang menerima deskripsi
skin atau model Minecraft dalam format JSON dan menampilkan hasilnya
sebagai preview 3D di browser. Semua proses dilakukan secara lokal di
browser Anda; tidak ada data yang dikirim ke server.

## 2. Membuat JSON dengan AI lain

Klik tombol **Salin instruksi AI** di ujung kanan header untuk menyalin
petunjuk(format instruksi) ke clipboard. Berikan instruksi tersebut
bersama dengan deskripsi karakter yang ingin Anda buat kepada AI yang
Anda gunakan. AI akan mengembalikan hasil dalam format JSON sesuai
petunjuk.

## 3. Memasukkan JSON

Salin hasil JSON dari AI dan tempelkan ke panel **Skin JSON** di sebelah
kiri layar. Panel ini juga menyediakan tombol **Pilih file** jika Anda
ingin memuat berkas JSON dari komputer. Setelah mengetik atau memuat
JSON, klik **Terapkan ke preview** untuk memperbarui model 3D.

## 4. Memeriksa hasil

Periksa model pada preview 3D di sebelah kanan. Seret mouse untuk
melihat model dari berbagai sudut, dan gulir untuk memperbesar atau
memperkecil tampilan. Gunakan panel **Animasi karakter** untuk
melihat gerakan yang tersedia, misalnya Idle, Walk, Run, Jump, dan Wave.

## 5. Mengatur karakter

Di panel **Pengaturan karakter** (bagian bawah kolom kiri), Anda dapat:

- **Tipe model**: pilih *Classic* atau *Slim* untuk menyesuaikan
  proporsi lengan karakter.
- **Warna default skin**: pilih warna HEX untuk mengisi semua area base
  yang belum diberi warna.

## 6. Ekspor GLB

Klik tombol **Ekspor GLB** di header untuk mengunduh model dalam mode
Light beserta **seluruh animasi** yang tersedia. File yang diunduh
berupa satu berkas GLB yang dapat dibuka di viewer GLB eksternal. Tidak
perlu memilih animasi satu per satu; semua animasi otomatis ikut
disertakan.

## 7. Ekspor JSON

Klik tombol **Ekspor JSON** di header untuk menyimpan data skin sebagai
berkas JSON terkompresi (minified) ke komputer Anda.

## 8. Membuka panduan lagi

Klik tombol **?** di ujung kanan header kapan saja untuk membuka kembali
panduan penggunaan ini. Panduan akan otomatis muncul saat kunjungan
pertama, dan setelah Anda menekan tombol **Paham**, panduan tidak akan
muncul otomatis pada kunjungan berikutnya.`,D1="blockform_instructions_seen";function N1(s){let e=s.replace(/^### (.*$)/gim,"<h3>$1</h3>").replace(/^## (.*$)/gim,"<h2>$1</h2>").replace(/^# (.*$)/gim,"<h1>$1</h1>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/^\* (.*$)/gim,"<li>$1</li>").replace(/^- (.*$)/gim,"<li>$1</li>").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>");return e.includes("<li>")&&(e=e.replace(/(<li>.*<\/li>)/gs,"<ul>$1</ul>")),"<p>"+e+"</p>"}function U1({open:s,onClose:e}){const[t,i]=Wt.useState("");return Wt.useEffect(()=>{s&&localStorage.setItem(D1,"true")},[s]),Wt.useEffect(()=>{i(N1(L1))},[]),s?me.jsx("div",{className:"instructions-modal-overlay",role:"dialog","aria-modal":"true","aria-label":"Panduan penggunaan",children:me.jsxs("div",{className:"instructions-modal-panel",children:[me.jsxs("div",{className:"instructions-modal-header",children:[me.jsx(Qg,{size:20}),me.jsx("h2",{children:"Panduan Penggunaan"}),me.jsx("button",{className:"instructions-modal-close",type:"button",onClick:e,"aria-label":"Tutup panduan",children:"Paham"})]}),me.jsx("div",{className:"instructions-modal-content",children:t?me.jsx("div",{className:"instructions-markdown",dangerouslySetInnerHTML:{__html:t}}):me.jsx("p",{children:"Memuat panduan..."})})]})}):null}const Wg={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class ac{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new X1(e)}),this.register(function(e){return new j1(e)}),this.register(function(e){return new K1(e)}),this.register(function(e){return new Z1(e)}),this.register(function(e){return new J1(e)}),this.register(function(e){return new Q1(e)}),this.register(function(e){return new Y1(e)}),this.register(function(e){return new q1(e)}),this.register(function(e){return new $1(e)}),this.register(function(e){return new eA(e)}),this.register(function(e){return new tA(e)}),this.register(function(e){return new nA(e)}),this.register(function(e){return new iA(e)}),this.register(function(e){return new rA(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,i,o){const a=new W1,c=[];for(let u=0,d=this.pluginCallbacks.length;u<d;u++)c.push(this.pluginCallbacks[u](a));a.setPlugins(c),a.setTextureUtils(this.textureUtils),a.writeAsync(e,t,o).catch(i)}parseAsync(e,t){const i=this;return new Promise(function(o,a){i.parse(e,o,a,t)})}}const mt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Dh="KHR_mesh_quantization",Yn={};Yn[ln]=mt.NEAREST;Yn[o_]=mt.NEAREST_MIPMAP_NEAREST;Yn[ea]=mt.NEAREST_MIPMAP_LINEAR;Yn[xi]=mt.LINEAR;Yn[Wl]=mt.LINEAR_MIPMAP_NEAREST;Yn[Ir]=mt.LINEAR_MIPMAP_LINEAR;Yn[Pr]=mt.CLAMP_TO_EDGE;Yn[Zl]=mt.REPEAT;Yn[Jl]=mt.MIRRORED_REPEAT;const Xg={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},k1=new gt,jg=12,F1=1179937895,O1=2,Yg=8,B1=1313821514,z1=5130562;function ra(s,e){return s.length===e.length&&s.every(function(t,i){return t===e[i]})}function V1(s){return new TextEncoder().encode(s).buffer}function H1(s){return ra(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function G1(s,e,t){const i={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let o=e;o<e+t;o++)for(let a=0;a<s.itemSize;a++){let c;s.itemSize>4?c=s.array[o*s.itemSize+a]:(a===0?c=s.getX(o):a===1?c=s.getY(o):a===2?c=s.getZ(o):a===3&&(c=s.getW(o)),s.normalized===!0&&(c=nc.normalize(c,s.array))),i.min[a]=Math.min(i.min[a],c),i.max[a]=Math.max(i.max[a],c)}return i}function K_(s){return Math.ceil(s/4)*4}function Nh(s,e=0){const t=K_(s.byteLength);if(t!==s.byteLength){const i=new Uint8Array(t);if(i.set(new Uint8Array(s)),e!==0)for(let o=s.byteLength;o<t;o++)i[o]=e;return i.buffer}return s}function qg(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function $g(s,e){if(s.toBlob!==void 0)return new Promise(i=>s.toBlob(i,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}class W1{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+lc}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const o=this,a=o.buffers,c=o.json;i=o.options;const u=o.extensionsUsed,d=o.extensionsRequired,f=new Blob(a,{type:"application/octet-stream"}),m=Object.keys(u),g=Object.keys(d);if(m.length>0&&(c.extensionsUsed=m),g.length>0&&(c.extensionsRequired=g),c.buffers&&c.buffers.length>0&&(c.buffers[0].byteLength=f.size),i.binary===!0){const v=new FileReader;v.readAsArrayBuffer(f),v.onloadend=function(){const S=Nh(v.result),M=new DataView(new ArrayBuffer(Yg));M.setUint32(0,S.byteLength,!0),M.setUint32(4,z1,!0);const E=Nh(V1(JSON.stringify(c)),32),y=new DataView(new ArrayBuffer(Yg));y.setUint32(0,E.byteLength,!0),y.setUint32(4,B1,!0);const x=new ArrayBuffer(jg),I=new DataView(x);I.setUint32(0,F1,!0),I.setUint32(4,O1,!0);const L=jg+y.byteLength+E.byteLength+M.byteLength+S.byteLength;I.setUint32(8,L,!0);const A=new Blob([x,y,E,M,S],{type:"application/octet-stream"}),H=new FileReader;H.readAsArrayBuffer(A),H.onloadend=function(){t(H.result)}}}else if(c.buffers&&c.buffers.length>0){const v=new FileReader;v.readAsDataURL(f),v.onloadend=function(){const S=v.result;c.buffers[0].uri=S,t(c)}}else t(c)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const i=this.options,o=this.extensionsUsed;try{const a=JSON.parse(JSON.stringify(e.userData));if(i.includeCustomExtensions&&a.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const c in a.gltfExtensions)t.extensions[c]=a.gltfExtensions[c],o[c]=!0;delete a.gltfExtensions}Object.keys(a).length>0&&(t.extras=a)}catch(a){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+a.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const o=new Map;o.set(!0,this.uid++),o.set(!1,this.uid++),this.uids.set(e,o)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const i=new q;for(let o=0,a=e.count;o<a;o++)if(Math.abs(i.fromBufferAttribute(e,o).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const i=e.clone(),o=new q;for(let a=0,c=i.count;a<c;a++)o.fromBufferAttribute(i,a),o.x===0&&o.y===0&&o.z===0?o.setX(1):o.normalize(),i.setXYZ(a,o.x,o.y,o.z);return t.attributesNormalized.set(e,i),i}applyTextureTransform(e,t){let i=!1;const o={};(t.offset.x!==0||t.offset.y!==0)&&(o.offset=t.offset.toArray(),i=!0),t.rotation!==0&&(o.rotation=t.rotation,i=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(o.scale=t.repeat.toArray(),i=!0),i&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=o,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function i(S){return S.colorSpace===Sn?function(E){return E<.04045?E*.0773993808:Math.pow(E*.9478672986+.0521327014,2.4)}:function(E){return E}}e instanceof Ph&&(e=await this.decompressTextureAsync(e)),t instanceof Ph&&(t=await this.decompressTextureAsync(t));const o=e?e.image:null,a=t?t.image:null,c=Math.max(o?o.width:0,a?a.width:0),u=Math.max(o?o.height:0,a?a.height:0),d=qg();d.width=c,d.height=u;const f=d.getContext("2d",{willReadFrequently:!0});f.fillStyle="#00ffff",f.fillRect(0,0,c,u);const m=f.getImageData(0,0,c,u);if(o){f.drawImage(o,0,0,c,u);const S=i(e),M=f.getImageData(0,0,c,u).data;for(let E=2;E<M.length;E+=4)m.data[E]=S(M[E]/256)*256}if(a){f.drawImage(a,0,0,c,u);const S=i(t),M=f.getImageData(0,0,c,u).data;for(let E=1;E<M.length;E+=4)m.data[E]=S(M[E]/256)*256}f.putImageData(m,0,0);const v=(e||t).clone();return v.source=new Nd(d),v.colorSpace=$i,v.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),v}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,i=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),i.push(e),0}processBufferView(e,t,i,o,a){const c=this.json;c.bufferViews||(c.bufferViews=[]);let u;switch(t){case mt.BYTE:case mt.UNSIGNED_BYTE:u=1;break;case mt.SHORT:case mt.UNSIGNED_SHORT:u=2;break;default:u=4}let d=e.itemSize*u;a===mt.ARRAY_BUFFER&&(d=Math.ceil(d/4)*4);const f=K_(o*d),m=new DataView(new ArrayBuffer(f));let g=0;for(let M=i;M<i+o;M++){for(let E=0;E<e.itemSize;E++){let y;e.itemSize>4?y=e.array[M*e.itemSize+E]:(E===0?y=e.getX(M):E===1?y=e.getY(M):E===2?y=e.getZ(M):E===3&&(y=e.getW(M)),e.normalized===!0&&(y=nc.normalize(y,e.array))),t===mt.FLOAT?m.setFloat32(g,y,!0):t===mt.INT?m.setInt32(g,y,!0):t===mt.UNSIGNED_INT?m.setUint32(g,y,!0):t===mt.SHORT?m.setInt16(g,y,!0):t===mt.UNSIGNED_SHORT?m.setUint16(g,y,!0):t===mt.BYTE?m.setInt8(g,y):t===mt.UNSIGNED_BYTE&&m.setUint8(g,y),g+=u}g%d!==0&&(g+=d-g%d)}const v={buffer:this.processBuffer(m.buffer),byteOffset:this.byteOffset,byteLength:f};return a!==void 0&&(v.target=a),a===mt.ARRAY_BUFFER&&(v.byteStride=d),this.byteOffset+=f,c.bufferViews.push(v),{id:c.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,i=t.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(o){const a=new FileReader;a.readAsArrayBuffer(e),a.onloadend=function(){const c=Nh(a.result),u={buffer:t.processBuffer(c),byteOffset:t.byteOffset,byteLength:c.byteLength};t.byteOffset+=c.byteLength,o(i.bufferViews.push(u)-1)}})}processAccessor(e,t,i,o){const a=this.json,c={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let u;if(e.array.constructor===Float32Array)u=mt.FLOAT;else if(e.array.constructor===Int32Array)u=mt.INT;else if(e.array.constructor===Uint32Array)u=mt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)u=mt.SHORT;else if(e.array.constructor===Uint16Array)u=mt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)u=mt.BYTE;else if(e.array.constructor===Uint8Array)u=mt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(i===void 0&&(i=0),(o===void 0||o===1/0)&&(o=e.count),o===0)return null;const d=G1(e,i,o);let f;t!==void 0&&(f=e===t.index?mt.ELEMENT_ARRAY_BUFFER:mt.ARRAY_BUFFER);const m=this.processBufferView(e,u,i,o,f),g={bufferView:m.id,byteOffset:m.byteOffset,componentType:u,count:o,max:d.max,min:d.min,type:c[e.itemSize]};return e.normalized===!0&&(g.normalized=!0),a.accessors||(a.accessors=[]),a.accessors.push(g)-1}processImage(e,t,i,o="image/png"){if(e!==null){const a=this,c=a.cache,u=a.json,d=a.options,f=a.pending;c.images.has(e)||c.images.set(e,{});const m=c.images.get(e),g=o+":flipY/"+i.toString();if(m[g]!==void 0)return m[g];u.images||(u.images=[]);const v={mimeType:o},S=qg();S.width=Math.min(e.width,d.maxTextureSize),S.height=Math.min(e.height,d.maxTextureSize);const M=S.getContext("2d",{willReadFrequently:!0});if(i===!0&&(M.translate(0,S.height),M.scale(1,-1)),e.data!==void 0){t!==jn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>d.maxTextureSize||e.height>d.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const y=new Uint8ClampedArray(e.height*e.width*4);for(let x=0;x<y.length;x+=4)y[x+0]=e.data[x+0],y[x+1]=e.data[x+1],y[x+2]=e.data[x+2],y[x+3]=e.data[x+3];M.putImageData(new ImageData(y,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)M.drawImage(e,0,0,S.width,S.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");d.binary===!0?f.push($g(S,o).then(y=>a.processBufferViewImage(y)).then(y=>{v.bufferView=y})):S.toDataURL!==void 0?v.uri=S.toDataURL(o):f.push($g(S,o).then(y=>new FileReader().readAsDataURL(y)).then(y=>{v.uri=y}));const E=u.images.push(v)-1;return m[g]=E,E}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const i={magFilter:Yn[e.magFilter],minFilter:Yn[e.minFilter],wrapS:Yn[e.wrapS],wrapT:Yn[e.wrapT]};return t.samplers.push(i)-1}async processTextureAsync(e){const i=this.options,o=this.cache,a=this.json;if(o.textures.has(e))return o.textures.get(e);a.textures||(a.textures=[]),e instanceof Ph&&(e=await this.decompressTextureAsync(e,i.maxTextureSize));let c=e.userData.mimeType;c==="image/webp"&&(c="image/png");const u={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,c)};e.name&&(u.name=e.name),await this._invokeAllAsync(async function(f){f.writeTexture&&await f.writeTexture(e,u)});const d=a.textures.push(u)-1;return o.textures.set(e,d),d}async processMaterialAsync(e){const t=this.cache,i=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;i.materials||(i.materials=[]);const o={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const a=e.color.toArray().concat([e.opacity]);if(ra(a,[1,1,1,1])||(o.pbrMetallicRoughness.baseColorFactor=a),e.isMeshStandardMaterial?(o.pbrMetallicRoughness.metallicFactor=e.metalness,o.pbrMetallicRoughness.roughnessFactor=e.roughness):(o.pbrMetallicRoughness.metallicFactor=0,o.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const u=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),d={index:await this.processTextureAsync(u),texCoord:u.channel};this.applyTextureTransform(d,u),o.pbrMetallicRoughness.metallicRoughnessTexture=d}if(e.map){const u={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(u,e.map),o.pbrMetallicRoughness.baseColorTexture=u}if(e.emissive){const u=e.emissive;if(Math.max(u.r,u.g,u.b)>0&&(o.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const f={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(f,e.emissiveMap),o.emissiveTexture=f}}if(e.normalMap){const u={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(u.scale=e.normalScale.x),this.applyTextureTransform(u,e.normalMap),o.normalTexture=u}if(e.aoMap){const u={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(u.strength=e.aoMapIntensity),this.applyTextureTransform(u,e.aoMap),o.occlusionTexture=u}e.transparent?o.alphaMode="BLEND":e.alphaTest>0&&(o.alphaMode="MASK",o.alphaCutoff=e.alphaTest),e.side===Ri&&(o.doubleSided=!0),e.name!==""&&(o.name=e.name),this.serializeUserData(e,o),await this._invokeAllAsync(async function(u){u.writeMaterialAsync&&await u.writeMaterialAsync(e,o)});const c=i.materials.push(o)-1;return t.materials.set(e,c),c}async processMeshAsync(e){const t=this.cache,i=this.json,o=[e.geometry.uuid];if(Array.isArray(e.material))for(let A=0,H=e.material.length;A<H;A++)o.push(e.material[A].uuid);else o.push(e.material.uuid);const a=o.join(":");if(t.meshes.has(a))return t.meshes.get(a);const c=e.geometry;let u;e.isLineSegments?u=mt.LINES:e.isLineLoop?u=mt.LINE_LOOP:e.isLine?u=mt.LINE_STRIP:e.isPoints?u=mt.POINTS:u=e.material.wireframe?mt.LINES:mt.TRIANGLES;const d={},f={},m=[],g=[],v={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},S=c.getAttribute("normal");S!==void 0&&!this.isNormalizedNormalAttribute(S)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),c.setAttribute("normal",this.createNormalizedNormalAttribute(S)));let M=null;for(let A in c.attributes){if(A.slice(0,5)==="morph")continue;const H=c.attributes[A];if(A=v[A]||A.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(A)||(A="_"+A),t.attributes.has(this.getUID(H))){f[A]=t.attributes.get(this.getUID(H));continue}M=null;const N=H.array;A==="JOINTS_0"&&!(N instanceof Uint16Array)&&!(N instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),M=new an(new Uint16Array(N),H.itemSize,H.normalized)):(N instanceof Uint32Array||N instanceof Int32Array)&&!A.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${A}" converted to type FLOAT.`),M=ac.Utils.toFloat32BufferAttribute(H));const z=this.processAccessor(M||H,c);z!==null&&(A.startsWith("_")||this.detectMeshQuantization(A,H),f[A]=z,t.attributes.set(this.getUID(H),z))}if(S!==void 0&&c.setAttribute("normal",S),Object.keys(f).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const A=[],H=[],U={};if(e.morphTargetDictionary!==void 0)for(const N in e.morphTargetDictionary)U[e.morphTargetDictionary[N]]=N;for(let N=0;N<e.morphTargetInfluences.length;++N){const z={};let C=!1;for(const b in c.morphAttributes){if(b!=="position"&&b!=="normal"){C||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),C=!0);continue}const F=c.morphAttributes[b][N],ie=b.toUpperCase(),$=c.attributes[b];if(t.attributes.has(this.getUID(F,!0))){z[ie]=t.attributes.get(this.getUID(F,!0));continue}const ce=F.clone();if(!c.morphTargetsRelative)for(let le=0,ae=F.count;le<ae;le++)for(let oe=0;oe<F.itemSize;oe++)oe===0&&ce.setX(le,F.getX(le)-$.getX(le)),oe===1&&ce.setY(le,F.getY(le)-$.getY(le)),oe===2&&ce.setZ(le,F.getZ(le)-$.getZ(le)),oe===3&&ce.setW(le,F.getW(le)-$.getW(le));z[ie]=this.processAccessor(ce,c),t.attributes.set(this.getUID($,!0),z[ie])}g.push(z),A.push(e.morphTargetInfluences[N]),e.morphTargetDictionary!==void 0&&H.push(U[N])}d.weights=A,H.length>0&&(d.extras={},d.extras.targetNames=H)}const E=Array.isArray(e.material);if(E&&c.groups.length===0)return null;let y=!1;if(E&&c.index===null){const A=[];for(let H=0,U=c.attributes.position.count;H<U;H++)A[H]=H;c.setIndex(A),y=!0}const x=E?e.material:[e.material],I=E?c.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let A=0,H=I.length;A<H;A++){const U={mode:u,attributes:f};if(this.serializeUserData(c,U),g.length>0&&(U.targets=g),c.index!==null){let z=this.getUID(c.index);(I[A].start!==void 0||I[A].count!==void 0)&&(z+=":"+I[A].start+":"+I[A].count),t.attributes.has(z)?U.indices=t.attributes.get(z):(U.indices=this.processAccessor(c.index,c,I[A].start,I[A].count),t.attributes.set(z,U.indices)),U.indices===null&&delete U.indices}const N=await this.processMaterialAsync(x[I[A].materialIndex]);N!==null&&(U.material=N),m.push(U)}y===!0&&c.setIndex(null),d.primitives=m,i.meshes||(i.meshes=[]),await this._invokeAllAsync(function(A){A.writeMesh&&A.writeMesh(e,d)});const L=i.meshes.push(d)-1;return t.meshes.set(a,L),L}detectMeshQuantization(e,t){if(this.extensionsUsed[Dh])return;let i;switch(t.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}t.normalized&&(i+=" normalized");const o=e.split("_",1)[0];Wg[o]&&Wg[o].includes(i)&&(this.extensionsUsed[Dh]=!0,this.extensionsRequired[Dh]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const i=e.isOrthographicCamera,o={type:i?"orthographic":"perspective"};return i?o.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:o.perspective={aspectRatio:e.aspect,yfov:nc.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(o.name=e.type),t.cameras.push(o)-1}processAnimation(e,t){const i=this.json,o=this.nodeMap;i.animations||(i.animations=[]),e=ac.Utils.mergeMorphTargetTracks(e.clone(),t);const a=e.tracks,c=[],u=[];for(let d=0;d<a.length;++d){const f=a[d],m=Mt.parseTrackName(f.name);let g=Mt.findNode(t,m.nodeName);const v=Xg[m.propertyName];if(m.objectName==="bones"&&(g.isSkinnedMesh===!0?g=g.skeleton.getBoneByName(m.objectIndex):g=void 0),!g||!v){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',f.name);continue}const S=1;let M=f.values.length/f.times.length;v===Xg.morphTargetInfluences&&(M/=g.morphTargetInfluences.length);let E;f.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(E="CUBICSPLINE",M/=3):f.getInterpolation()===la?E="STEP":E="LINEAR",u.push({input:this.processAccessor(new an(f.times,S)),output:this.processAccessor(new an(f.values,M)),interpolation:E}),c.push({sampler:u.length-1,target:{node:o.get(g),path:v}})}return i.animations.push({name:e.name||"clip_"+i.animations.length,samplers:u,channels:c}),i.animations.length-1}processSkin(e){const t=this.json,i=this.nodeMap,o=t.nodes[i.get(e)],a=e.skeleton;if(a===void 0)return null;const c=e.skeleton.bones[0];if(c===void 0)return null;const u=[],d=new Float32Array(a.bones.length*16),f=new xt;for(let g=0;g<a.bones.length;++g)u.push(i.get(a.bones[g])),f.copy(a.boneInverses[g]),f.multiply(e.bindMatrix).toArray(d,g*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new an(d,16)),joints:u,skeleton:i.get(c)}),o.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,i=this.options,o=this.nodeMap;t.nodes||(t.nodes=[]);const a={};if(i.trs){const u=e.quaternion.toArray(),d=e.position.toArray(),f=e.scale.toArray();ra(u,[0,0,0,1])||(a.rotation=u),ra(d,[0,0,0])||(a.translation=d),ra(f,[1,1,1])||(a.scale=f)}else e.matrixAutoUpdate&&e.updateMatrix(),H1(e.matrix)===!1&&(a.matrix=e.matrix.elements);if(e.name!==""&&(a.name=String(e.name)),this.serializeUserData(e,a),e.isMesh||e.isLine||e.isPoints){const u=await this.processMeshAsync(e);u!==null&&(a.mesh=u)}else e.isCamera&&(a.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const u=[];for(let d=0,f=e.children.length;d<f;d++){const m=e.children[d];if(m.visible||i.onlyVisible===!1){const g=await this.processNodeAsync(m);g!==null&&u.push(g)}}u.length>0&&(a.children=u)}await this._invokeAllAsync(function(u){u.writeNode&&u.writeNode(e,a)});const c=t.nodes.push(a)-1;return o.set(e,c),c}async processSceneAsync(e){const t=this.json,i=this.options;t.scenes||(t.scenes=[],t.scene=0);const o={};e.name!==""&&(o.name=e.name),t.scenes.push(o);const a=[];for(let c=0,u=e.children.length;c<u;c++){const d=e.children[c];if(d.visible||i.onlyVisible===!1){const f=await this.processNodeAsync(d);f!==null&&a.push(f)}}a.length>0&&(o.nodes=a),this.serializeUserData(e,o)}async processObjectsAsync(e){const t=new xd;t.name="AuxScene";for(let i=0;i<e.length;i++)t.children.push(e[i]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(o){o.beforeParse&&o.beforeParse(e)});const i=[];for(let o=0;o<e.length;o++)e[o]instanceof xd?await this.processSceneAsync(e[o]):i.push(e[o]);i.length>0&&await this.processObjectsAsync(i);for(let o=0;o<this.skins.length;++o)this.processSkin(this.skins[o]);for(let o=0;o<t.animations.length;++o)this.processAnimation(t.animations[o],e[0]);await this._invokeAllAsync(function(o){o.afterParse&&o.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,i=this.plugins.length;t<i;t++)await e(this.plugins[t])}}class X1{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const i=this.writer,o=i.json,a=i.extensionsUsed,c={};e.name&&(c.name=e.name),c.color=e.color.toArray(),c.intensity=e.intensity,e.isDirectionalLight?c.type="directional":e.isPointLight?(c.type="point",e.distance>0&&(c.range=e.distance)):e.isSpotLight&&(c.type="spot",e.distance>0&&(c.range=e.distance),c.spot={},c.spot.innerConeAngle=(1-e.penumbra)*e.angle,c.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),a[this.name]||(o.extensions=o.extensions||{},o.extensions[this.name]={lights:[]},a[this.name]=!0);const u=o.extensions[this.name].lights;u.push(c),t.extensions=t.extensions||{},t.extensions[this.name]={light:u.length-1}}}class j1{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const o=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},o[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class Y1{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const i=this.writer,o=i.extensionsUsed,a={};if(a.clearcoatFactor=e.clearcoat,e.clearcoatMap){const c={index:await i.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};i.applyTextureTransform(c,e.clearcoatMap),a.clearcoatTexture=c}if(a.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const c={index:await i.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};i.applyTextureTransform(c,e.clearcoatRoughnessMap),a.clearcoatRoughnessTexture=c}if(e.clearcoatNormalMap){const c={index:await i.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(c.scale=e.clearcoatNormalScale.x),i.applyTextureTransform(c,e.clearcoatNormalMap),a.clearcoatNormalTexture=c}t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class q1{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const o=this.writer.extensionsUsed,a={};a.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class $1{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const i=this.writer,o=i.extensionsUsed,a={};if(a.iridescenceFactor=e.iridescence,e.iridescenceMap){const c={index:await i.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};i.applyTextureTransform(c,e.iridescenceMap),a.iridescenceTexture=c}if(a.iridescenceIor=e.iridescenceIOR,a.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],a.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const c={index:await i.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};i.applyTextureTransform(c,e.iridescenceThicknessMap),a.iridescenceThicknessTexture=c}t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class K1{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const i=this.writer,o=i.extensionsUsed,a={};if(a.transmissionFactor=e.transmission,e.transmissionMap){const c={index:await i.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};i.applyTextureTransform(c,e.transmissionMap),a.transmissionTexture=c}t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class Z1{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const i=this.writer,o=i.extensionsUsed,a={};if(a.thicknessFactor=e.thickness,e.thicknessMap){const c={index:await i.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};i.applyTextureTransform(c,e.thicknessMap),a.thicknessTexture=c}e.attenuationDistance!==1/0&&(a.attenuationDistance=e.attenuationDistance),a.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class J1{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const o=this.writer.extensionsUsed,a={};a.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class Q1{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(k1)&&!e.specularIntensityMap&&!e.specularColorMap)return;const i=this.writer,o=i.extensionsUsed,a={};if(e.specularIntensityMap){const c={index:await i.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};i.applyTextureTransform(c,e.specularIntensityMap),a.specularTexture=c}if(e.specularColorMap){const c={index:await i.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};i.applyTextureTransform(c,e.specularColorMap),a.specularColorTexture=c}a.specularFactor=e.specularIntensity,a.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class eA{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const i=this.writer,o=i.extensionsUsed,a={};if(e.sheenRoughnessMap){const c={index:await i.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};i.applyTextureTransform(c,e.sheenRoughnessMap),a.sheenRoughnessTexture=c}if(e.sheenColorMap){const c={index:await i.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};i.applyTextureTransform(c,e.sheenColorMap),a.sheenColorTexture=c}a.sheenRoughnessFactor=e.sheenRoughness,a.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class tA{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const i=this.writer,o=i.extensionsUsed,a={};if(e.anisotropyMap){const c={index:await i.processTextureAsync(e.anisotropyMap)};i.applyTextureTransform(c,e.anisotropyMap),a.anisotropyTexture=c}a.anisotropyStrength=e.anisotropy,a.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class nA{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const o=this.writer.extensionsUsed,a={};a.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class iA{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const i=this.writer,o=i.extensionsUsed,a={};if(e.bumpMap){const c={index:await i.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};i.applyTextureTransform(c,e.bumpMap),a.bumpTexture=c}a.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=a,o[this.name]=!0}}class rA{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const i=this.writer,o=e,a=new Float32Array(o.count*3),c=new Float32Array(o.count*4),u=new Float32Array(o.count*3),d=new xt,f=new q,m=new si,g=new q;for(let S=0;S<o.count;S++)o.getMatrixAt(S,d),d.decompose(f,m,g),f.toArray(a,S*3),m.toArray(c,S*4),g.toArray(u,S*3);const v={TRANSLATION:i.processAccessor(new an(a,3)),ROTATION:i.processAccessor(new an(c,4)),SCALE:i.processAccessor(new an(u,3))};o.instanceColor&&(v._COLOR_0=i.processAccessor(o.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:v},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}}ac.Utils={insertKeyframe:function(s,e){const i=s.getValueSize(),o=new s.TimeBufferType(s.times.length+1),a=new s.ValueBufferType(s.values.length+i),c=s.createInterpolant(new s.ValueBufferType(i));let u;if(s.times.length===0){o[0]=e;for(let d=0;d<i;d++)a[d]=0;u=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;o[0]=e,o.set(s.times,1),a.set(c.evaluate(e),0),a.set(s.values,i),u=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;o[o.length-1]=e,o.set(s.times,0),a.set(s.values,0),a.set(c.evaluate(e),s.values.length),u=o.length-1}else for(let d=0;d<s.times.length;d++){if(Math.abs(s.times[d]-e)<.001)return d;if(s.times[d]<e&&s.times[d+1]>e){o.set(s.times.slice(0,d+1),0),o[d+1]=e,o.set(s.times.slice(d+1),d+2),a.set(s.values.slice(0,(d+1)*i),0),a.set(c.evaluate(e),(d+1)*i),a.set(s.values.slice((d+1)*i),(d+2)*i),u=d+1;break}}return s.times=o,s.values=a,u},mergeMorphTargetTracks:function(s,e){const t=[],i={},o=s.tracks;for(let a=0;a<o.length;++a){let c=o[a];const u=Mt.parseTrackName(c.name),d=Mt.findNode(e,u.nodeName);if(u.propertyName!=="morphTargetInfluences"||u.propertyIndex===void 0){t.push(c);continue}if(c.createInterpolant!==c.InterpolantFactoryMethodDiscrete&&c.createInterpolant!==c.InterpolantFactoryMethodLinear){if(c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),c=c.clone(),c.setInterpolation(Ql)}const f=d.morphTargetInfluences.length,m=d.morphTargetDictionary[u.propertyIndex];if(m===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+u.propertyIndex);let g;if(i[d.uuid]===void 0){g=c.clone();const S=new g.ValueBufferType(f*g.times.length);for(let M=0;M<g.times.length;M++)S[M*f+m]=g.values[M];g.name=(u.nodeName||"")+".morphTargetInfluences",g.values=S,i[d.uuid]=g,t.push(g);continue}const v=c.createInterpolant(new c.ValueBufferType(1));g=i[d.uuid];for(let S=0;S<g.times.length;S++)g.values[S*f+m]=v.evaluate(g.times[S]);for(let S=0;S<c.times.length;S++){const M=this.insertKeyframe(g,c.times[S]);g.values[M*f+m]=c.values[S]}}return s.tracks=t,s},toFloat32BufferAttribute:function(s){const e=new an(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return e.array.set(s.array),e;for(let t=0,i=s.count;t<i;t++)for(let o=0;o<s.itemSize;o++)e.setComponent(t,o,s.getComponent(t,o));return e}};function Z_(s,e){const t=URL.createObjectURL(s),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(t)}function sA(s,e,t="application/json"){Z_(new Blob([s],{type:t}),e)}async function oA(s,e="light",t){const i=q_(s,e);i.updateMatrixWorld(!0);const o=new ac;try{const a=lo.map(d=>W_(d)),c=await new Promise((d,f)=>{o.parse(i,m=>{m instanceof ArrayBuffer?d(m):f(new Error("Exporter menghasilkan JSON glTF, bukan GLB."))},m=>f(m),{binary:!0,onlyVisible:!0,truncateDrawRange:!0,animations:a,trs:!1})}),u=e==="light"?"-light":"";Z_(new Blob([c],{type:"model/gltf-binary"}),`minecraft-skin${u}-all.glb`)}finally{$_(i)}}const aA=`Buat karakter Minecraft skin 64x64 dalam format JSON yang dapat langsung diimpor ke Minecraft Skin Studio.

ATURAN FORMAT:
- Balas hanya dengan satu objek JSON valid. Jangan gunakan Markdown fence atau penjelasan.
- version wajib 1.
- model bernilai "classic" atau "slim".
- default_skin adalah warna HEX #RRGGBB untuk mengisi semua sisi base yang belum diberi warna.
- regions adalah array area warna. Setiap objek memiliki part, layer, face, x, y, width, height, color.
- pixels adalah array opsional untuk detail satu piksel. Setiap objek memiliki part, layer, face, x, y, color.
- part: head, body, right_arm, left_arm, right_leg, left_leg.
- layer: base atau outer. Jika tidak ditulis, dianggap base. Outer adalah lapisan kedua seperti topi, jaket, dan aksesori.
- face: front, back, right, left, top, bottom.
- x dan y adalah koordinat lokal pada face tersebut, dimulai dari 0 di sudut kiri atas.
- width dan height adalah ukuran area dalam piksel. Gunakan bilangan bulat positif.
- color selalu HEX #RRGGBB.
- Ukuran face: head 8x8; body 8x12 untuk front/back dan 4x12 untuk sisi; arms 4x12 (classic) atau 3x12 (slim) untuk front/back; legs 4x12 untuk front/back. Face top/bottom mengikuti lebar dan kedalaman bagian.
- Jangan membuat koordinat di luar ukuran face. Hindari field tambahan yang tidak disebutkan.
- Gunakan regions untuk area besar dan pixels hanya untuk detail kecil.
- Jangan menambahkan data animasi, tulang, keyframe, atau properti animations ke JSON skin. Gerakan karakter dibuat terpisah oleh programmer pada modul TypeScript aplikasi.

CONTOH STRUKTUR:
{
  "version": 1,
  "model": "classic",
  "default_skin": "#D9A078",
  "regions": [
    { "part": "head", "layer": "base", "face": "front", "x": 0, "y": 0, "width": 8, "height": 2, "color": "#38251F" },
    { "part": "body", "layer": "base", "face": "front", "x": 0, "y": 0, "width": 8, "height": 12, "color": "#315C91" },
    { "part": "head", "layer": "outer", "face": "front", "x": 0, "y": 0, "width": 8, "height": 2, "color": "#38251F" }
  ],
  "pixels": [
    { "part": "head", "layer": "base", "face": "front", "x": 2, "y": 4, "color": "#33251F" }
  ]
}

RANCANG karakter sesuai deskripsi pengguna, gunakan warna konsisten, dan sebarkan detail ke sisi samping/belakang bila relevan agar model terlihat selesai dari semua arah.`,Td={version:1,model:"classic",default_skin:"#D9A078",regions:[{part:"body",layer:"base",face:"front",x:0,y:0,width:8,height:12,color:"#315C91"},{part:"right_leg",layer:"base",face:"front",x:0,y:7,width:4,height:5,color:"#263448"},{part:"left_leg",layer:"base",face:"front",x:0,y:7,width:4,height:5,color:"#263448"},{part:"head",layer:"base",face:"front",x:0,y:0,width:8,height:2,color:"#38251F"},{part:"head",layer:"base",face:"front",x:1,y:4,width:2,height:1,color:"#FFFFFF"},{part:"head",layer:"base",face:"front",x:5,y:4,width:2,height:1,color:"#FFFFFF"},{part:"head",layer:"base",face:"front",x:2,y:4,width:1,height:1,color:"#33251F"},{part:"head",layer:"base",face:"front",x:5,y:4,width:1,height:1,color:"#33251F"}]},Kg=JSON.stringify(Td,null,2);function lA(){const[s,e]=Wt.useState(Kg),[t,i]=Wt.useState(Td),[o,a]=Wt.useState("idle"),[c,u]=Wt.useState(!1),[d]=Wt.useState(!0),[f,m]=Wt.useState(0),[g,v]=Wt.useState(!1),S="light",M=Wt.useMemo(()=>Vg(s),[s]),E=M.ok?null:M.error,y=()=>{M.ok&&i(M.value)},x=async F=>{try{const ie=await F.text();e(ie);const $=Vg(ie);$.ok&&i($.value)}catch{e(`{
  "error": "File tidak dapat dibaca"
}`)}},I=()=>{e(Kg),i(Td)},L=F=>{if(!M.ok)return;const ie={...M.value,default_skin:F};e(JSON.stringify(ie,null,2)),i(ie)},A=F=>{a(F),u(!1)},H=F=>{if(!M.ok)return;const ie={...M.value,model:F};e(JSON.stringify(ie,null,2)),i(ie)},U=async()=>{try{await oA(t,S)}catch(F){console.error("Ekspor GLB gagal:",F)}},N=()=>{sA(JSON.stringify(t),"minecraft-skin.min.json")},z=async()=>{try{await navigator.clipboard.writeText(aA)}catch{console.error("Clipboard tidak tersedia.")}},C=()=>{v(!0)},b=()=>{v(!1)};return me.jsxs("main",{className:"app-shell",children:[me.jsxs("header",{className:"topbar",children:[me.jsxs("div",{className:"brand-lockup",children:[me.jsx("div",{className:"brand-icon",children:me.jsx(W0,{size:21,strokeWidth:2.2})}),me.jsxs("div",{children:[me.jsxs("div",{className:"brand-name",children:["BLOCK",me.jsx("span",{children:"FORM"})]}),me.jsx("div",{className:"brand-subtitle",children:"MINECRAFT SKIN STUDIO"})]})]}),me.jsxs("div",{className:"topbar-actions",children:[me.jsxs("button",{className:"header-button header-button-glb",type:"button",onClick:U,children:[me.jsx(X0,{size:16})," Ekspor GLB"]}),me.jsxs("button",{className:"header-button header-button-json",type:"button",onClick:N,children:[me.jsx(e_,{size:16})," Ekspor JSON"]}),me.jsxs("button",{className:"header-button header-button-copy",type:"button",onClick:z,children:[me.jsx(Y0,{size:16})," Salin instruksi AI"]}),me.jsxs("button",{className:"header-button header-button-help",type:"button",onClick:C,"aria-label":"Buka panduan penggunaan",children:[me.jsx(Qg,{size:18})," ?"]})]})]}),me.jsxs("div",{className:"workspace-grid",children:[me.jsxs("div",{className:"workspace-left",children:[me.jsx(Q0,{value:s,onChange:e,onImport:x,onApply:y,onReset:I,validationError:E}),me.jsx(I1,{animationId:o,playing:c,loopEnabled:d,onAnimationChange:A,onPlayingChange:u,onLoopChange:()=>{},onRestart:()=>{m(F=>F+1),u(!0)}}),me.jsxs("section",{className:"panel settings-panel",children:[me.jsxs("div",{className:"panel-heading compact-heading",children:[me.jsxs("div",{children:[me.jsx("div",{className:"eyebrow",children:"MODEL SETTINGS"}),me.jsx("h2",{children:"Pengaturan karakter"})]}),me.jsx(Z0,{size:18,className:"muted-icon"})]}),me.jsxs("div",{className:"settings-row",children:[me.jsxs("div",{children:[me.jsx("strong",{children:"Tipe model"}),me.jsx("small",{children:"Proporsi lengan karakter"})]}),me.jsxs("div",{className:"segmented-control",children:[me.jsx("button",{type:"button",className:t.model==="classic"?"selected":"",onClick:()=>H("classic"),children:"Classic"}),me.jsx("button",{type:"button",className:t.model==="slim"?"selected":"",onClick:()=>H("slim"),children:"Slim"})]})]}),me.jsxs("div",{className:"settings-row skin-color-row",children:[me.jsxs("div",{children:[me.jsx("strong",{children:"Default skin color"}),me.jsx("small",{children:"Warna dasar area base yang belum diwarnai"})]}),me.jsxs("label",{className:"color-picker-wrap",children:[me.jsx("span",{children:t.default_skin.toUpperCase()}),me.jsx("input",{type:"color",value:t.default_skin,onChange:F=>L(F.target.value),"aria-label":"Default skin color"})]})]})]})]}),me.jsx("div",{className:"workspace-right",children:me.jsx(P1,{skin:t,renderMode:S,animationId:o,playing:c,loopEnabled:d,restartToken:f})})]}),me.jsx(U1,{open:g,onClose:b}),me.jsxs("footer",{className:"app-footer",children:[me.jsx("span",{children:"BLOCKFORM STUDIO"}),me.jsx("span",{children:"All processing happens in your browser."})]})]})}z0.createRoot(document.getElementById("root")).render(me.jsx(D0.StrictMode,{children:me.jsx(lA,{})}));
