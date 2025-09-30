import React from "react";
import { useState } from "react";
import { supabase } from "../backend/supabase/supabase_client";
const TestLog = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="testDoc"
      style={{
        margin: "20px",
        border: "2px solid black",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <form>
        <h3>Test Documentation</h3>
        <label htmlFor="testItem">Item tested: </label>
        <input id="log" name="testItem" placeholder="Item Tested"></input>
        <br />
        <label htmlFor="tstStatus">Item status: </label>
        <input id="log" name="tstStatus" placeholder="Test status "></input>
        <br />
        <label htmlFor="fixstat">Fix needed: </label>
        <input id="log" name="fixstat" placeholder="Fix needed"></input> <br />
        <label htmlFor="gitT">GitTicket: </label>
        <input id="log" name="gitT" placeholder="GitTicket"></input> <br />
        <label htmlFor="log">Test Log: </label>
        <textarea
          id="log"
          name="log"
          placeholder="Enter your test log here..."
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>{" "}
    </div>
  );
};

export default TestLog;
