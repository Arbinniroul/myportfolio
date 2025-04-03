import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['axios'] 
  },
  build: {
    rollupOptions: {
      external: [], 
      output: {
        assetFileNames: 'assets/[name].[ext]' 
      }
    },
    commonjsOptions: {
      include: [/node_modules/] 
    }
  },
  resolve: {
    alias: {
      '@': '/src' 
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
});