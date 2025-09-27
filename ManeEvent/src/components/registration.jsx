import React from "react";
import Footer from "./footer";
import Header from "./header";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Registration() {
  // will use later const navigate = useNavigate();

  return (
    <>
      <div
        className="card"
        style={{
          width: "300px",
          height: "300px",
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          position: "relative",
        }}
      >
        <p>Registration Page</p>

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
            <Link to="/">
              <button className="primary">Cancel</button>
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
export default Registration;
