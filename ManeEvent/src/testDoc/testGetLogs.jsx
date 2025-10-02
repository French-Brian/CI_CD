//will show how to use get from supabase
import React, { StrictMode, useState } from "react";
import Supabase from "../backend/supabase/supabaseClient";

/*Make sure Supabase is capital , and not in {}, you don't need to import 
it will want to keep importing these import { supabase } from "../backend/supabase/supabaseClient";
import { client} from "@supabase/supabase-js"; this is what the Supabse from /backend/supabase/supabaseClient  comes in as*/

function TestGetLogs() {
  const [logs, setLogs] = useState([]); //state to hold the logs from the database
  async function getLogs() {
    const { data, error } = await Supabase.from("testDocs").select("*"); //select all from the testDocs table
    if (error) {
      console.log("Error fetching logs:", error);
      setLogs(data);
      console.log("Logs fetched successfully:", data);
    }
  }
  return (
    <div>
      <button onClick={getLogs}>Get Logs</button>
      <p>Logs from Database:</p>
      <ul>
        {/*map list to display each log entry*/}
        {logs.map((log) => (
          <li key={log.id}>
            Item Tested: {log.itemTested}, Fix Needed: {log.fixNeeded},
            Comments: {log.comments}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TestGetLogs;
