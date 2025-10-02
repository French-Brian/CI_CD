import React from "react";
import TestLog from "./testlog";
import { useState } from "react";
import TestGetLogs from "./testGetLogs";

//takes in parmaters used for showing and hinting the pop up, can also pass in children elements if desired
//use {pros.childeren} to access the children elements
//can use factory method if needed to customize the pop up more in the future
function Pop_up(props) {
  return props.trigger ? (
    <div className="popup">
      <button onClick={() => props.setTrigger(false)}>close</button>
      <div className="popup_inner">
        <h1>Test log</h1>
        <TestLog />
        <TestGetLogs />
      </div>
    </div>
  ) : (
    ""
  );
}
//exports the pop up function so it can be used in other files
export default Pop_up;
