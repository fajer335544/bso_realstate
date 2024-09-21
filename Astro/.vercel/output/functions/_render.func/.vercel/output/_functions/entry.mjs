import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_jL_C6fZ2.mjs';
import { manifest } from './manifest_Bo6PUn0s.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/login.astro.mjs');
const _page3 = () => import('./pages/api/logout.astro.mjs');
const _page4 = () => import('./pages/api/product.astro.mjs');
const _page5 = () => import('./pages/api/register.astro.mjs');
const _page6 = () => import('./pages/create-post.astro.mjs');
const _page7 = () => import('./pages/login.astro.mjs');
const _page8 = () => import('./pages/register.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/login.ts", _page2],
    ["src/pages/api/logout.ts", _page3],
    ["src/pages/api/product.ts", _page4],
    ["src/pages/api/register.ts", _page5],
    ["src/pages/create-post.astro", _page6],
    ["src/pages/login.astro", _page7],
    ["src/pages/register.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "9b5bfe9a-0030-4240-9903-0b06de54c13e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
