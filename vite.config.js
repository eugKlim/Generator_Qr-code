import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  // base: '', // поправил путь для gh-pages пример: base: '/Mogo',
  // server: {
  //   port: 3000,
  // },
  plugins: [
    react(),
    // ViteImageOptimizer({
    //   png: {
    //     quality: 90,
    //   },
    //   jpeg: {
    //     quality: 90,
    //   },
    //   jpg: {
    //     quality: 90,
    //   },
    //   tiff: {
    //     quality: 90,
    //   },
    //   gif: {},
    //   webp: {
    //     lossless: false,
    //     quality: 87,
    //   },
    //   avif: {
    //     lossless: false,
    //     quality: 87,
    //   },
    // }),
  ],
});
