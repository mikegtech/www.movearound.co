import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

import path from 'path';

export default defineConfig({
  plugins: [imagetools(), react()],
  server: {
    port: 3000, // Use the same port as CRA (optional)
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      src: path.resolve('/src/'),
      blocks: "/src/blocks",
      components: "/src/components",
      demos: "/src/demos",
      docs: "/src/docs",
      layouts: "/src/layouts",
      svg: "/src/svg",
      theme: "/src/theme",
      views: "/src/views",
    },
  }
});
