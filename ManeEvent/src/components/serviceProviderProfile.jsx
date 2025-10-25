import React from "react";
import Footer from "./footer";
import CheckHeader from "./checkHeader";


function ProviderProfile() {
  return (
    <>
      <CheckHeader />
      <div className="flex h-250">
        
        <div className="flex-1 flex flex-col items-start bg-[#2b6150] text-white px-12">
          <h1 className="block mt-70 mb-2 text-5xl font-extrabold ">Profile</h1>
          <label className="block mt-8 mb-2">Username:</label>
          <input
            type="username"
            className="border-2 border-white bg-white w-full px-2 py-1 rounded"
          ></input>
          <label className="block mt-4 mb-2">Name:</label>
          <input
            type="name"
            className="border-2 border-white bg-white w-full px-2 py-1 rounded"
          ></input>
          <label className="block mt-4 mb-2">Email:</label>
          <input
            type="email"
            className="border-2 border-white bg-white w-full px-2 py-1 rounded"
          ></input>
          <label className="block mt-4 mb-2">Ranking:</label>
          <input
            type="ranking"
            className="border-2 border-white bg-white w-full px-2 py-1 rounded"
          ></input>
          <p>
          <button className="primary" >History</button>
          <button className="primary">Edit Account</button>
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center bg-white text-[#2b6150] px-12">
          <label className="block mt-8 mb-2">Message:</label>
          <textarea
            className="border-2 border-black bg-white w-full px-2 py-2 rounded resize-none"
            rows={10}
          ></textarea>
          <button className="primary" >Save</button>
          <button className="primary">Edit</button>
        </div>
        
      </div>
      
      <Footer />
    </>
  );
};

export default ProviderProfile;
