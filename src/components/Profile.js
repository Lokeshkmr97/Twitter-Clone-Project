import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-[45%] border-l border-r border-gray-300">
      <div className="flex py-2 items-center">
        <Link to="/" className="px-2 cursor-pointer hover:bg-slate-200 rounded-full">
          <IoArrowBackSharp size={"24px"} />
        </Link>
        <div className="ml-4">
          <h1 className="font-bold text-lg">Lokesh Kumar</h1>
          <p className="text-sm text-gray-800">200 Post</p>
        </div>
      </div>
      <div>
        <img
          src="https://pbs.twimg.com/profile_banners/409486555/1709127895/1080x360"
          alt="banner"
        />
      </div>
      <div className="absolute top-40 ml-4 border-4 border-white rounded-full">
      <Avatar
      src="https://pbs.twimg.com/profile_images/1467810710767824898/wPhg9MWr_400x400.jpg"
      size="150"
      round={true}
    />
      </div>

      <div className="text-right m-4">
      <button className="px-4 py-1 rounded-full hover:bg-gray-200 border ">Edit Profile</button>
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold">Lokesh Kumar</h1>
        <p className="text-sm text-gray-500">@lokeshkmr30</p>
      </div>
      <div className="px-4">
        <p>This is bio section of the user.</p>
      </div>
    </div>
  );
};

export default Profile;
