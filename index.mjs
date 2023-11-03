// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-broadcast-array@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function i(i,o){var a,d,m,l;if(!e(i))throw new TypeError(s("null4f,Pc",i));if(!r(o))throw new TypeError(s("invalid argument. Second argument must be an array of nonnegative integers. Value: `%s`.",o));if(d=o.length,(a=i.shape).length===d){for(l=0;l<d;l++){if(m=o[l],!t(m))throw new TypeError(s("invalid argument. Second argument must be an array of nonnegative integers. Value: `%s`.","["+o.join(",")+"]"));if(a[l]!==m)return n(i,o)}return i}return n(i,o)}export{i as default};
//# sourceMappingURL=index.mjs.map
