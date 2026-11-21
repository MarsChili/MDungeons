import { defineConfig } from 'vite';

export default defineConfig({
  // 相对路径产物：dist 可直接部署到任意子目录（GitHub Pages / 静态服务器）
  base: './',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
  },
});
