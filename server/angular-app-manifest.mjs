
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ConySite/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ConySite"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6088, hash: 'e6ed98faf24d8317ac9ec3dfe9302eae8ff7dbd6ed14de53af04bf1b4779a718', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '3f41d49e532a201346a6a9776e3da58effea8f708fe0d51a35c01a896efff701', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17662, hash: 'f82c387d6554db932c68651e3435c60315739c40bdf92e76a50ae9c9834d7c7d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JSOVLV3C.css': {size: 330075, hash: '/wFtVtl8T58', text: () => import('./assets-chunks/styles-JSOVLV3C_css.mjs').then(m => m.default)}
  },
};
