
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
    'index.csr.html': {size: 5042, hash: '76c2465d76e6bd424ecd99d5dda3175c736ef8b5a3a443f9842a7d335be8f852', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1014, hash: 'd2c0c9e8a6ad10cd35049f1d9f1577ca84869bd7e83879b754328d1d63dc298a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 62280, hash: 'fcb20eecdacdb770d804187b2a0f3f7e60f27161144ead04c93a409636b7bfd5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-EMBJAXFM.css': {size: 315637, hash: 'jx7i+ifeyGg', text: () => import('./assets-chunks/styles-EMBJAXFM_css.mjs').then(m => m.default)}
  },
};
