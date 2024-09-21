import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Mode développement pour tester la démo
  server: {
    open: "/src/demo.tsx",
  },
});
