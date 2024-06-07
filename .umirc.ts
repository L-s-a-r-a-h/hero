import { defineConfig } from "umi";

export default defineConfig({

  proxy: {
    '/api': {
      'target': 'https://pvp.qq.com',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },

  routes: [
    { path: "/", component: "index" },
    { path: "/items", component: "items" },
    { path: "/summoners", component: "summoners" },
  ],
  npmClient: 'yarn',
});
