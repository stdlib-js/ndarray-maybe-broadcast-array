// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-broadcast-array@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function d(d,o){var m,j,l,a;if(!r(d))throw new TypeError(n("1k34f",d));if(!s(o))throw new TypeError(n("1k3F3",o));if(j=o.length,(m=i(d)).length===j){for(a=0;a<j;a++){if(l=o[a],!t(l))throw new TypeError(n("1k3F3","["+o.join(",")+"]"));if(m[a]!==l)return e(d,o)}return d}return e(d,o)}export{d as default};
//# sourceMappingURL=index.mjs.map
