import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa6";

const Tweet = () => {
  return (
    <div>
      <div>
        <div className="flex p-4 border-b border-gray-300">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1467810710767824898/wPhg9MWr_400x400.jpg"
            size="50"
            round={true}
          />
          <div className="pl-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">Lokesh Kumar</h1>
              <p className="text-gray-500 text-sm ml-1">@lokeskmr30. 1 min</p>
            </div>
            <div>
              <p>This post is all about to AI Developer</p>
            </div>

            <div className="flex justify-between mt-8">
              <div className="flex items-center">
              <div className="hover:bg-gray-300 rounded-full cursor-pointer p-2">
                <FaRegComment size="20px"/>
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="hover:bg-gray-300 rounded-full cursor-pointer p-2">
                    <BiRepost size="20px"/>
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
              <div className="hover:bg-gray-300 rounded-full cursor-pointer p-2">
                <CiHeart size="20px"/>
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
              <div className="hover:bg-gray-300 rounded-full cursor-pointer p-2">
                <CiViewBoard size="20px"/>
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
              <div className="hover:bg-gray-300 rounded-full cursor-pointer p-2">
                <FaRegBookmark size="20px"/>
                </div>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
