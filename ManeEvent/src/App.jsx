import "./App.css";
import React from "react";
import logo from "./assets/lightLogo_800X800.png";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Pop_up from "./testDoc/pop_up";
import { useState } from "react";

function App() {
  const [ButtonPopup, setButtonPopup] = useState(false);
  const navigate = useNavigate();
  const register = () => {
    navigate("/register");
  };
  const Login = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="container bg-white flex flex-col items-center justify-center min-h-screen">
        <img
          src={logo}
          style={{ width: "55%", height: "55%", objectFit: "scale-down" }}
        />
        <div className="buttons">
          <button className="primary" onClick={Login}>
            Login
          </button>
          <button className="primary" onClick={register}>
            Join
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <button onClick={() => setButtonPopup(true)}>Log test</button>
      <Pop_up trigger={ButtonPopup} setTrigger={setButtonPopup} />
    </>
  );
}

export default App;
