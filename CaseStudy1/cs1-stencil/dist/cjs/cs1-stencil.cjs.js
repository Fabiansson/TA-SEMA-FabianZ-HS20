'use strict';

const index = require('./index-5c361e21.js');

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('cs1-stencil.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["card-component.cjs",[[1,"card-component"]]],["my-component.cjs",[[1,"my-component",{"cards":[32]}]]]], options);
});
