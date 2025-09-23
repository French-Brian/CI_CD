import React from "react";
import Footer from "./footer";
import Header from "./header";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const goback = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <div>Registration Page</div>
        <form>
          <p>
            <label className="label">Enter a username: </label>
            <input placeholder="Username" id="username"></input>
          </p>
          <label className="label">Enter a password: </label>
          <input placeholder="Password" id="password"></input>
          <p>
            <label className="label">What you would like to be called: </label>
            <input placeholder="Name" id="name"></input>
          </p>
          <p>
            <label className="label">Select Account Type:</label>
            <input type="radio" name="Client" value="Client" />
            Client
            <input
              className="label"
              type="radio"
              name="Provider"
              value="Provider"
            />
            Provider
          </p>
          <div className="buttons">
            <button className="primary">Submit</button>
            <button className="primary" onClick={goback}>
              Cancel
            </button>
          </div>
        </form>

        <Footer />
      </div>
    </>
  );
}
export default Registration;
