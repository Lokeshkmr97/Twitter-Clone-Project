import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlinePoll } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlineScheduleSend } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="mt-3 w-[100%]">
      <div className="flex justify-evenly items-center border-b border-gray-300 ">
        <div className="cursor-pointer">
          <h1 className="font-semibold text-gray-800 text-lg hover:bg-gray-300 w-full text-center p-3">
            For You
          </h1>
        </div>
        <div className="cursor-pointer">
          <h1 className="font-semibold text-gray-800 text-lg hover:bg-gray-300 w-full text-center p-3">
            Following
          </h1>
        </div>
        <div>
          <IoSettingsOutline className="font-bold text-gray-800 text-lg hover:bg-gray-300 rounded-full" />
        </div>
      </div>

      <div className="p-4 flex w-full items-center">
        <div>
          <Avatar
            src="https://pbs.twimg.com/profile_images/1467810710767824898/wPhg9MWr_400x400.jpg"
            size="50"
            round={true}
          />
        </div>
        <input
          type="text"
          placeholder="What is happening?!"
          className="ml-5 w-[80%] outline-none border-none text-lg"
        />
      </div>

      <hr />
      <div className="flex items-center p-4 mt-2 w-full border-b justify-evenly">
        <div className="flex w-[80%]">
          <div className="text-2xl ml-3">
            <button><CiImageOn /></button>
          </div>
          <div className="text-2xl ml-3">
            <button><MdOutlineGifBox /></button>
          </div>

          <div className="text-2xl ml-3">
            <button><MdOutlinePoll /></button>
          </div>

          <div className="text-2xl ml-3">
            <button><BsEmojiSmile /></button>
          </div>

          <div className="text-2xl ml-3">
            <button><MdOutlineScheduleSend /></button>
          </div>

          <div className="text-2xl ml-3">
            <button><CiLocationOn /></button>
          </div>
        </div>
        <div>
          <button className="px-4 py-2 font-bold border-none bg-[#1d9bf0] text-white rounded-full items-end">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
