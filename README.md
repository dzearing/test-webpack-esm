# Repro: Webpack 5 should produce proper esm

When you externalize a library, Webpack does not preserve the export in the ESM output.

Given a source (`utilities.js`):
```js
export * from '@fluentui/utilities';
```

Run webpack which outputs esm and externalizes `@fluentui/utilities`:

```tsx
yarn bundle
```

Expected output (dist/utilities.js):

```js
export * from '@fluentui/utilities';
```

Resulted output:

```js
import*as r from"@fluentui/utilities";var e={d:(r,t)=>{for(var o in t)e.o(t,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:t[o]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e)},t={};e.d(t,{K:()=>o}),e.d({},{});const o="bar";var a=t.K;export{a as bar};
```