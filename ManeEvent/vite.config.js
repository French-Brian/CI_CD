import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => {
  // Directly read from process.env
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

  console.log(
    "Vite build sees Supabase URL:",
    supabaseUrl ? "✅ loaded" : "❌ missing"
  );

  return {
    plugins: [react(), tailwindcss()],
    base: "/CI_CD/",
    define: {
      "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(supabaseUrl),
      "import.meta.env.VITE_SUPABASE_ANON_KEY": JSON.stringify(supabaseKey),
    },
  };
});
