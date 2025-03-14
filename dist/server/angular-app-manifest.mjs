
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
    'index.csr.html': {size: 6088, hash: '5d24134e3b2993f971db2ce375e96c17be5d40a3cefd794143b98c60ae4108ba', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '9ad7638cede384e67df31324e6482d7feff815f7480d11476c5244d0a952d724', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17662, hash: '1efe54d148aa6988c5ae026b839eeb42fa9de459ae82167e861c338e5feac4b5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JSOVLV3C.css': {size: 330075, hash: '/wFtVtl8T58', text: () => import('./assets-chunks/styles-JSOVLV3C_css.mjs').then(m => m.default)}
  },
};
