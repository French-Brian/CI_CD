//will show how to use get/fetch from supabase
import React, { StrictMode, useState } from "react";
import Supabase from "../backend/supabase/supabaseClient";

/*Make sure Supabase is capital , and not in {}, you don't need to import 
it will want to keep importing these import { supabase } from "../backend/supabase/supabaseClient";
import { client} from "@supabase/supabase-js"; this is what the Supabse from /backend/supabase/supabaseClient  comes in as*/

function TestFilter() {
  const [data, setdata] = useState([]);
  const [error, setError] = useState(null);
  const [filterdata, setfilterdata] = useState(false);

  async function getdata() {
    const { data, error } = await Supabase.from("testDocs")
      .select()
      .filter("fixNeeded", "eq", "yes"); //filter where fixNeeded is equal to true
    if (error) {
      setError(error);
    } else {
      setdata(data);

      setfilterdata(true);
    }
  }

  function mapdata() {
    return (
      <table className="bg-white rounded-2xl">
        {/*table is hidden until the state of logs is changed  when hidden state is false,  table is triggered when state of log const is changed*/}
        <thead>
          <tr className=" bg-[#2B6150]  text-white">
            <th>Item Tested</th>
            <th>Fix needed</th>
            <th>Comments</th>
          </tr>
        </thead>
        {/*map list to display each log entry*/}
        <tbody>
          {data.map((log) => (
            <tr key={log.id} className="rounded-2xl border-2">
              <td>{log.itemTested}</td>
              <td>{log.fixNeeded}</td>
              <td className="whitespace-normal break-words max-w-xs">
                {log.comments}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <button onClick={getdata}>Search data</button>
      {/*Triggers the getlog function line 14*/}
      {filterdata ? ( //if filterdata state is true show else show  object form mapdata.
        <div>
          <button
            onClick={() => {
              setfilterdata(false); // changes state of show log to false which hides the data
            }}
          >
            Hide data
          </button>
          <p>Need fix:</p>
          {mapdata()}
        </div>
      ) : (
        //if filterdata is false indicating an error occurred
        error && <p>Error: {error.message}</p> //display error if the error state is not null else do nothing
      )}
    </div>
  );
}
export default TestFilter;
