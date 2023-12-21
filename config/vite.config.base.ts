import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite'
import configNaiveUiResolverPlugin, { autoImportPlugin } from './plugins/autoImport';

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    configNaiveUiResolverPlugin(),
    autoImportPlugin()
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, '../src'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, '../src/assets'),
      },
    ],
    extensions: ['.ts', '.js'],
  },
  define: {
    'process.env': {},
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // 默认只支持驼峰，修改为同时支持横线和驼峰
    }
  },
});
