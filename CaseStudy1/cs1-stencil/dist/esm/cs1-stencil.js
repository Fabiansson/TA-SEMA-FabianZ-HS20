import { p as promiseResolve, b as bootstrapLazy } from './index-df355ffd.js';

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["card-component",[[1,"card-component"]]],["my-component",[[1,"my-component",{"cards":[32]}]]]], options);
});
