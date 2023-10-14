"use strict";var g=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=g(function(q,s){
var m=require('@stdlib/assert-is-ndarray-like/dist'),d=require('@stdlib/assert-is-collection/dist'),f=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/ndarray-broadcast-array/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function l(e,r){var n,i,t,a;if(!m(e))throw new TypeError(u('1k34f',e));if(!d(r))throw new TypeError(u('1k3F3',r));if(i=r.length,n=e.shape,n.length===i){for(a=0;a<i;a++){if(t=r[a],!f(t))throw new TypeError(u('1k3F3',"["+r.join(",")+"]"));if(n[a]!==t)return o(e,r)}return e}return o(e,r)}s.exports=l
});var y=v();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
