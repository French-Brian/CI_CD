//will show how to use get/fetch from supabase
import React, { StrictMode, useState } from "react";
import Supabase from "../backend/supabase/supabaseClient";

/*Make sure Supabase is capital , and not in {}, you don't need to import 
it will want to keep importing these import { supabase } from "../backend/supabase/supabaseClient";
import { client} from "@supabase/supabase-js"; this is what the Supabse from /backend/supabase/supabaseClient  comes in as*/

function TestGetLogs() {
  const [logs, setLogs] = useState([]); //state to hold the logs from the database
  const [error, setError] = useState(null); //state to hold any error that occurs during fetching
  const [showLogs, setShowLogs] = useState(false); //state to control the visibility of logs

  async function getLogs() {
    const { data, error } = await Supabase.from("testDocs").select(); //select all from the testDocs table
    if (error) {
      setError(error);
    } else {
      setLogs(data); //changes the state of the log basically logs = data returned from supabase

      setShowLogs(true); //show the logs when fetched
    }
  }

  function mapdata() {
    return (
      <table>
        {/*table is hidden until the state of logs is changed  when hidden state is false,  table is triggered when state of log const is changed*/}
        <thead>
          <tr>
            <th>Item Tested</th>
            <th>Fix needed</th>
            <th>Comments</th>
          </tr>
        </thead>
        {/*map list to display each log entry*/}
        <tbody
          style={{ border: "1px solid black", outline: "1px solid black" }}
        >
          {logs.map((log) => (
            <tr
              key={log.id}
              style={{ border: "1px solid black", outline: "1px solid black" }}
            >
              <td>{log.itemTested}</td>
              <td>{log.fixNeeded}</td>
              <td>{log.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <button onClick={getLogs}>Show Logs</button>

      {/*Triggers the getlog function line 14*/}
      {showLogs ? ( //if showlogs state is true show else show  object form mapdata.
        <div>
          <button
            onClick={() => {
              setShowLogs(false); // changes state of show log to false which hides the logs
            }}
          >
            Hide Logs
          </button>
          <p>Logs from Database:</p>
          {mapdata()}
        </div>
      ) : (
        //if showlogs is false indicating an error occurred
        error && <p>Error: {error.message}</p> //display error if the error state is not null else do nothing
      )}
    </div>
  );
}
export default TestGetLogs;
