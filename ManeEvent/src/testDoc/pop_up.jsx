import React from "react";
import TestLog from "./testlog";
//import TestGetLogs from "./testGetLogs";
import TestFilter from "./testFilter";

//takes in parmaters used for showing and hinting the pop up, can also pass in children elements if desired
//use {pros.childeren} to access the children elements
//can use factory method if needed to customize the pop up more in the future
function Pop_up() {
  return (
    <div
      className="bg-[#f054b0]"
      style={{
        textAlign: "center",
        padding: "10px",
        color: "#2B6150",
        bottom: "0",
      }}
    >
      <hr />

      <div className="popup_inner">
        <h3>FOR DEV ONLY</h3>
        <div className="flex justify-center gap-3 mt-3">
          <div className="w-1/2">
            <TestLog />
          </div>
          <div className="w-1/2">
            <TestFilter />
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}

// Export the pop-up function so it can be used in other files
export default Pop_up;
