import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import styleX from "vite-plugin-stylex";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), styleX()],
  // dev 실행시 자동으로 브라우저를 열어줌
  server: {
    open: true,
  },
});
