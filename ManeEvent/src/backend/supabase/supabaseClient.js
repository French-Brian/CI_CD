import { createClient } from "@supabase/supabase-js";

//uses creatCklinet funciton form the supabase library to create a client
//VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are environment variables
// they are in the .evn file in the root directory of the project
// move this .env file to .gitignore to not expose keys  in production

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

//crate a single supabase client
const Supabase = createClient(supabaseUrl, supabaseKey);

export default Supabase;
