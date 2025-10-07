import React from "react";
import Supabase from "../backend/supabase/supabaseClient";
import "./testlog.css";
function TestLog() {
  //set the state for each input feild to blank to watch for changes

  //event to what for the form to change
  const setTestLog = (event) => {
    event.preventDefault();
    //gets the from the DOM by element ID and sets the values to the testLogData object line 46-67
    const testLog = document.getElementById("testLog");
    var fixMade = false;
    if (testLog.fixNeeded.value.trim().toUpperCase() === "NO") {
      fixMade = true;
    }

    const testLogData = {
      itemTested: testLog.itemTested.value,
      fixNeeded: testLog.fixNeeded.value,
      comments: testLog.comments.value,
      fixMade: fixMade,
    };
    //console.log(testLogData); // uncomment console.log(testLogData) for testing purposes prints the data in the web console use f12 to view in browser
    sendtoDB(testLogData); //calls the function to send the data to the database
    testLog.reset(); //reset the form after submission
  };
  async function sendtoDB(testLogData) {
    //async must have await to work properly
    {
      /** const { data, error } = await Supabase.from("TABLENAME").insert([
      {
        
        COLUMNNAME: testLogData.itemTested,
        COLUMNNAME: testLogData.fixNeeded,
        COLUMNNAME: testLogData.comments,
      },
    ]); */
    }
    const { data, error } = await Supabase.from("testDocs").insert([
      {
        //set vlaues for the columns in the table
        itemTested: testLogData.itemTested,
        fixNeeded: testLogData.fixNeeded,
        comments: testLogData.comments,
        fixMade: testLogData.fixMade,
      },
    ]);
    if (error) {
      //error handling if subabase returns an error CHECK ROLE LEVEL SECURITY IN SUPABASE
      //NOTE: for testing just turn off row level security in supabase to allow inserts to make sure every thing is working
      console.log("Error inserting data:", error);
      //prints to bowser console
    } else {
      console.log("Data inserted successfully:", data);
      //prints to bowser console
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-blue-950 border border-[#2b6150]">
      <h2 className="text-2xl font-black text-[#2b6150] mb-6 text-center">
        Test Log
      </h2>

      <form id="testLog" onSubmit={setTestLog} className="space-y-4">
        <div>
          <label
            htmlFor="itemTested"
            className="block text-[#2b6150] font-medium mb-1"
          >
            Item tested:
          </label>
          <input
            id="itemTested"
            type="text"
            className="w-full border border-[#2b6150] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2b6150]/70"
          />
        </div>

        <div>
          <label
            htmlFor="fixNeeded"
            className="block text-[#2b6150] font-medium mb-1"
          >
            Fix needed:
          </label>
          <input
            id="fixNeeded"
            type="text"
            className="w-full border border-[#2b6150] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2b6150]/70"
          />
        </div>

        <div>
          <label
            htmlFor="comments"
            className="block text-[#2b6150] font-medium mb-1"
          >
            Comments:
          </label>
          <textarea
            id="comments"
            placeholder="Document Test"
            className="w-full border border-[#2b6150] rounded-lg px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#2b6150]/70"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#2b6150] text-white font-semibold py-2 rounded-lg hover:bg-[#2b6150]/80 transition-colors"
        >
          Submit Test Doc
        </button>

        <hr className="mt-6 border-[#2b6150]/40" />
      </form>
    </div>
  );
}

export default TestLog;
