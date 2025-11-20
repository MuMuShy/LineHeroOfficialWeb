import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 載入本地環境變數 (如果有 .env 檔案)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      // 關鍵設定：將程式碼中的 process.env.API_KEY 替換為實際的環境變數值
      // 優先讀取系統變數 (Cloudflare)，其次讀取本地 .env
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY || env.API_KEY),
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: true,
    },
  };
});