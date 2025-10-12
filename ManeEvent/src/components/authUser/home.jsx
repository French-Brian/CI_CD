import React, { useEffect, useState } from "react";
//import { userState } from "react";
import ClientHeader from "./ClientHeader";
import Supabase from "../../backend/supabase/supabaseClient";
import ProfileSetup from "./ProfileSetup";
import { useUser } from "../context/Authorization"; //passed from the authenitcation user form supabase

const Home = () => {
  const { user } = useUser(); //getcontext- aka user is authorized via supabase
  const [profile, setProfile] = useState(null);
  const [err, setErr] = useState("");
  useEffect(() => {
    if (!user?.id) return; //see if there is a login user
    const getProfile = async () => {
      //unable to mod supabase user table to select roles and other data
      const { data, error } = await Supabase.from("profiles")
        .select("*")
        .eq("id", user.id); //check if the user set up profile

      if (error) {
        setErr(error);
      } else {
        if (user.profile) {
          setProfile(data[0]); //response from supabasee
        }
      }
    };
    getProfile();
  }, [user]);

  return (
    <>
      <ClientHeader />
      <p>{err ? String(err) : ""}</p>
      {/* ck error if none dont render in tree */}
      <div className="p-25" id="profile">
        <h1>
          Welcome,{" "}
          {profile ? profile.displayname : "we did not find a profile for you."}
          {/**ck profile is set or not */}
        </h1>
        {!profile && <ProfileSetup onProfileCreated={setProfile} />}
      </div>
    </>
  );
};
export default Home;
