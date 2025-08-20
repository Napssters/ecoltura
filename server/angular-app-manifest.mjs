
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ecoltura/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ecoltura"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5154, hash: '93cbf13341456fbe9ce6ea41ed1b0ed56b74968f825f9c9692bbd3f24bade8a2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1126, hash: '5dc1e720f049da64e3081d76cb194e64fa51ba6e8535144382f6b1467f2c3697', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63259, hash: '7e45024cff195642c24ce425bab97014680593a9e0673023760afaaa5e7954ce', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-EMBJAXFM.css': {size: 315637, hash: 'jx7i+ifeyGg', text: () => import('./assets-chunks/styles-EMBJAXFM_css.mjs').then(m => m.default)}
  },
};
