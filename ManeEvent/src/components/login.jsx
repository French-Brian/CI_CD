import "../App.css";
import logo from "../assets/lightLogo_800X800.png";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import FAQ from "./faq";
import { useUser } from "./context/Authorization";
import React, { useRef, useState } from "react";
import Supabase from "../backend/supabase/supabaseClient";
const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const { setUser } = useUser(); //get context from auth
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.current?.value || !password.current.value) {
      setErr("Something is not right");
      return;
    }

    try {
      const {
        data: { user, session },
        error,
      } = await Supabase.auth.signInWithPassword({
        email: email.current.value,
        password: password.current.value,
      });
      {
        /**send to supabase for auth */
      }

      if (user && session) {
        {
          /**if user is returned form supabase then set the user in the context of the app then navigate /home */
        }
        //console.log(user);
        setUser(user);
        navigate("/home");
      }
      if (error.code === "invalid_credentials") {
        setErr("That combination did not match");
        email.current.value = "";
        password.current.value = "";
      }
    } catch (error) {
      setErr(error);
    }
  };

  return (
    <>
      <FAQ />
      <div className="card container bg-white flex flex-col items-center justify-center min-h-screen">
        <img
          src={logo}
          style={{ width: "35%", height: "35%", objectFit: "scale-down" }}
        />
        <p className="text-red-600 font-bold">{err ? err : ""}</p>
        <form className="form" onSubmit={handleSubmit}>
          <p>
            <label htmlFor="email">Email: </label>
            <input
              className=" backdrop-blur-2xl font-bold"
              placeholder=""
              type="email"
              id="email"
              autoComplete="email"
              ref={email}
            ></input>
          </p>
          <p className="p-5"></p>
          <p>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              className="backdrop-blur-2xl font-bold mask-auto"
              placeholder=""
              id="password"
              autoComplete="current-password"
              ref={password}
            ></input>
          </p>
          <div className="buttons p-2">
            <button type="submit" className="primary">
              Submit
            </button>
            <Link to="/">
              <button className="primary">cancel</button>
            </Link>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
