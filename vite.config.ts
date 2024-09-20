import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // basicSsl({
    //   /** name of certification */
    //   name: "test",
    // }),
  ],
});
