import React from "react";

import Supabase from "../backend/supabase/supabaseClient";
import Pop_up from "./pop_up";

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
    <>
      <div>
        <h2>Test Log </h2>
        <form id="testLog" onSubmit={setTestLog}>
          <label>
            Item tested:
            <input id="itemTested"></input>
          </label>
          <br />
          <label>
            Fix needed:
            <input id="fixNeeded"></input>
          </label>
          <br />
          <label for="comments">Comments: </label>
          <textarea id="comments" placeholder="Document Test"></textarea>
          <br />
          <button type="submit">Submit Test Doc</button> <hr />
          {/** No onclick when inside form submit, submit though onSubmit of form*/}
        </form>
      </div>
    </>
  );
}
export default TestLog;
