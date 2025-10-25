import React from "react";
import Footer from "./footer";
import Header from "./header";

function ClientProfile() {
  return (
    <>
      <Header />

      <div className="flex h-250">

        <div className="flex-1 flex flex-col items-start bg-[#2b6150] text-white px-12">
          <h1 className="block mt-70 mb-2 text-5xl font-extrabold">Client Profile</h1>

          <label className="block mt-8 mb-2">Username:</label>
          <input
            type="text"
            className="border-2 border-white bg-white w-full px-2 py-1 rounded text-black"
            placeholder="Enter username"
          />

          <label className="block mt-4 mb-2">Name:</label>
          <input
            type="text"
            className="border-2 border-white bg-white w-full px-2 py-1 rounded text-black"
            placeholder="Enter full name"
          />

          <label className="block mt-4 mb-2">Email:</label>
          <input
            type="email"
            className="border-2 border-white bg-white w-full px-2 py-1 rounded text-black"
            placeholder="Enter email"
          />


          <div className="mt-6 space-x-4">
            <button className="primary">History</button>
            <button className="primary">Edit Account</button>
          </div>
        </div>


        <div className="flex-1 flex flex-col justify-center bg-white text-[#2b6150] px-12">
          <label className="block mt-8 mb-2">Message:</label>
          <textarea
            className="border-2 border-black bg-white w-full px-2 py-2 rounded resize-none"
            rows={10}
            placeholder="Leave a message..."
          ></textarea>

          <div className="mt-6 space-x-4">
            <button className="primary">Save</button>
            <button className="primary">Edit</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ClientProfile;