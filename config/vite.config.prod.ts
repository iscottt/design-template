import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';
import configCompressPlugin from './plugins/compress';
import configVisualizerPlugin from './plugins/visualizer';
// import legacy from '@vitejs/plugin-legacy'

export default mergeConfig(
  {
    base:'./',
    mode: 'production',
    plugins: [
      configCompressPlugin('gzip'),
      configVisualizerPlugin(),
      // legacy({
      //   targets: ['defaults', 'not IE 11']
      // }),
    ],
  },
  baseConfig
);
