import { p as promiseResolve, b as bootstrapLazy } from './index-df355ffd.js';

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["card-component",[[1,"card-component"]]],["my-component",[[1,"my-component",{"cards":[32]}]]]], options);
  });
};

export { defineCustomElements };
