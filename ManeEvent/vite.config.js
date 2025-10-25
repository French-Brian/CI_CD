import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// This reads the environment variables at build time from process.env
const supabaseUrl = "https://iymuizxrloixssfaueyp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5bXVpenhybG9peHNzZmF1ZXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1OTczMjEsImV4cCI6MjA3MzE3MzMyMX0.Ky_SoQbkGwbsEto7GSsVVJMQUJ7gl9hb60vevdsU8w8";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/CI_CD/",
});
