// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n="function"==typeof Math.f16round?Math.f16round:null,r=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;var u=.0009765625,a=6103515625e-14;var e=4503599627370496;var f="function"==typeof n?n:function(n){var f,o,N,I;return 0===n||isNaN(n)||!function(n){return n==n&&n>t&&n<r}(n)?n:(I=n<0?-1:1,(o=function(n){return Math.abs(n)}(n))<a?I*(o/a/u+e-e)*a*u:(f=(N=4398046511105*o)-(N-o))>65504||isNaN(f)?I*r:I*f)};function o(n){return f(n)}export{o as default};
//# sourceMappingURL=mod.js.map
