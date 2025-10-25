import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// This reads the environment variables at build time from process.env
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/CI_CD/",
});
