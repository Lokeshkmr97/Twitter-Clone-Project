import React from "react";
import { FaSearch } from "react-icons/fa";
import FollowUser from "./FollowUser";

const RightSidebar = () => {
  return (
    <div className="w-[30%]">
      <div className="flex items-center mt-2 p-3 rounded-full w-full bg-gray-200">
        <FaSearch size={"20px"} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none border-none bg-transparent ml-2"
        />
      </div>

      {/* this section is Subscribe  */}
      <div className="p-4 bg-gray-200 mt-4 rounded-3xl">
        <div className="font-bold text-lg">
          <h1>Subscribe to Premium</h1>
        </div>

        <p>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button className="p-2 mt-3 font-bold border-none bg-[#1d9bf0] text-white rounded-full">
          Subscribe
        </button>
      </div>

      {/** This section is follow details */}

      <div className="p-4 mt-4 items-center bg-gray-200 rounded-3xl">
        <div>
          <h1 className="font-bold text-xl">Who to follow</h1>
        </div>
        {/** this code is written in FollowUser.js File */}
        <FollowUser/>
        <FollowUser/>
        <FollowUser/>
        <FollowUser/>
        
      </div>
    </div>
  );
};

export default RightSidebar;
