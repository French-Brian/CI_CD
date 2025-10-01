import React from "react";
import TestLog from "./testlog";

//takes in parmaters used for showing and hinting the pop up, can also pass in children elements if desired
//use {pros.childeren} to access the children elements
//can use factory method if needed to customize the pop up more in the future
function Pop_up(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup_inner">
        <h1>Test log</h1>
        <TestLog />
        <button onClick={() => props.setTrigger(false)}>close</button>
      </div>
    </div>
  ) : (
    ""
  );
}
//exports the pop up function so it can be used in other files
export default Pop_up;
