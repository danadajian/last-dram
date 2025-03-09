import { defineConfig as defineCypressConfig } from 'cypress';
import { defineConfig as defineViteConfig } from 'vite';

const extensions = ['.web.tsx', '.tsx', '.web.ts', '.ts', '.web.jsx', '.jsx', '.web.js', '.js', '.css', '.json', '.mjs'];

export default defineCypressConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: defineViteConfig({
        clearScreen: true,
        define: {
          global: 'window',
          __DEV__: JSON.stringify(true),
          DEV: JSON.stringify(true),
          'process.env.NODE_ENV': JSON.stringify('development')
        },
        resolve: {
          extensions: extensions,
          alias: {
            'react-native': 'react-native-web'
          }
        },
        optimizeDeps: {
          esbuildOptions: {
            resolveExtensions: extensions,
            jsx: 'automatic',
            loader: { '.js': 'jsx' }
          }
        }
      })
    }
  },
  screenshotOnRunFailure: false,
  video: false
});
