import React from "react";
import { useAuth } from "../context/Authorization";

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <div>
        <h1>Welcome,{user} </h1>
        <p>This is your main dashboard area.</p>
      </div>
    </>
  );
};
export default Home;
