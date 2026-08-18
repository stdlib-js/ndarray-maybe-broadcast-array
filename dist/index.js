"use strict";var g=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=g(function(w,v){
var m=require('@stdlib/assert-is-ndarray-like/dist'),d=require('@stdlib/assert-is-collection/dist'),f=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/ndarray-broadcast-array/dist'),l=require('@stdlib/ndarray-shape/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function y(e,r){var a,n,t,i;if(!m(e))throw new TypeError(u('1k34f',e));if(!d(r))throw new TypeError(u('1k3F3',r));if(n=r.length,a=l(e),a.length===n){for(i=0;i<n;i++){if(t=r[i],!f(t))throw new TypeError(u('1k3F3',"["+r.join(",")+"]"));if(a[i]!==t)return o(e,r)}return e}return o(e,r)}v.exports=y
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
