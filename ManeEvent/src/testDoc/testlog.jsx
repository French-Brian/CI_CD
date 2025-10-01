import React from "react";
import { useState } from "react";
import Supabase from "../backend/supabase/supabaseClient";
import Pop_up from "./pop_up";

function TestLog() {
  //set the state for each input feild to blank to watch for changes
  const [setItemTested] = useState("");
  const [setFixNeeded] = useState("");
  const [setComments] = useState("");
  //event to what for the form to change
  const setTestLog = (event) => {
    event.preventDefault();
    //gets the from the DOM by element ID and sets the values to the testLogData object line 46-67
    const testLog = document.getElementById("testLog");
    //dot notiation for childen elements of the form
    const data = testLog.elements;
    const testLogData = {
      itemTested: data.itemTested.value,
      fixNeeded: data.fixNeeded.value,
      comments: data.comments.value,
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
          <label>Item tested: </label>
          <input
            id="itemTested"
            onChange={(e) => setItemTested(e.target.value)} //watch for changes in the input feild
          ></input>{" "}
          <br />
          <label>Fix needed: </label>
          <input
            id="fixNeeded"
            onChange={(e) => setFixNeeded(e.target.value)}
          ></input>{" "}
          <br />
          <label>Comments: </label>
          <textarea
            id="comments"
            placeholder="Document Test"
            onChange={(e) => setComments(e.target.value)}
          ></textarea>{" "}
          <br />
          <button type="submit">Submit</button>{" "}
          {/** No onclick when inside form submit, submit though onSubmit of form*/}
        </form>
      </div>
    </>
  );
}
export default TestLog;
