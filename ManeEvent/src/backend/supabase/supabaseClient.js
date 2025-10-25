import { createClient } from "@supabase/supabase-js";

//uses creatCklinet funciton form the supabase library to create a client
//VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are environment variables
// they are in the .evn file in the root directory of the project
// move this .env file to .gitignore to not expose keys  in production

const supabaseUrl = "https://iymuizxrloixssfaueyp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5bXVpenhybG9peHNzZmF1ZXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1OTczMjEsImV4cCI6MjA3MzE3MzMyMX0.Ky_SoQbkGwbsEto7GSsVVJMQUJ7gl9hb60vevdsU8w8";

//crate a single supabase client
const Supabase = createClient(supabaseUrl, supabaseKey);
console.log("Supabase URL from Vite:", import.meta.env.VITE_SUPABASE_URL);

export default Supabase;
