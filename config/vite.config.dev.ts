import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';

export default mergeConfig(
  {
    base: '/',
    mode: 'development',
    server: {
      port: 9900,
      open: true,
      fs: {
        strict: true,
      },
      // proxy: {
      //   '/api': {
      //     target: 'http://192.168.100.193:9015/sso-base-system',
      //     // target: 'http://192.168.98.70:9015/sso-base-system',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ''),
      //   },
      // },
    },
  },
  baseConfig
);
