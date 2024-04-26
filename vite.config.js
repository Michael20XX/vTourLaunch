import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig(() => {
  return {
    /*
    base: '/vTourLaunch/',
    plugins: [
      ViteImageOptimizer({
        jpg: {
            quality: 35,
          }
      }),
    ],
    */
    build: {
        rollupOptions: {
            input: {
                
                main: resolve(__dirname, 'index.html'),
                floor001: resolve(__dirname, 'floor001/index.html'),
                floor002: resolve(__dirname, 'floor002/index.html'),
                floor003: resolve(__dirname, 'floor003/index.html'),
                floor004: resolve(__dirname, 'floor004/index.html')
            
            }
        }
    }
  };
});