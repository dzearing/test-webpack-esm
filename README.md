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
import*as e from"@fluentui/utilities";var r={d:(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};r.d({},{});
```

The repo also has an `index.js` file which exports * from `utilities.js`. If this is used as the entry point in the `webpack.config.js`, the expected/resulted output are the same. (ESBuild has a bug in this situation where the entry doesn't export the external library from the entrypoint which hasn't been resolved for some time. https://github.com/evanw/esbuild/issues/1737)
