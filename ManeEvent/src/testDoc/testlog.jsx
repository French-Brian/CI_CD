import React from "react";
import { useState } from "react";
import Supabase from "../backend/supabase/supabaseClient";

function TestLog() {
  const [setItemTested] = useState("");
  const [setFixNeeded] = useState("");
  const [setComments] = useState("");

  const setTestLog = (event) => {
    event.preventDefault();
    const testLog = document.getElementById("testLog");
    const data = testLog.elements;
    const testLogData = {
      itemTested: data.itemTested.value,
      fixNeeded: data.fixNeeded.value,
      comments: data.comments.value,
    };
    console.log(testLogData);
    sendtoDB(testLogData);
    testLog.reset();
  };
  async function sendtoDB(testLogData) {
    const { data, error } = await Supabase.from("testDocs").insert([
      {
        //set vlaues for the columns in the table
        itemTested: testLogData.itemTested,
        fixNeeded: testLogData.fixNeeded,
        comments: testLogData.comments,
      },
    ]);
    if (error) {
      console.log("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
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
            onChange={(e) => setItemTested(e.target.value)}
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
export default TestLog;
