import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { RiEditBoxLine } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import { IoBookmarkSharp } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <div className='w-[20%]'>
        <div>
            <div><img className='ml-3 mt-3 cursor-pointer' src="https://w7.pngwing.com/pngs/748/680/png-transparent-twitter-x-logo-thumbnail.png" alt="twitter-logo" width={"24px"} /></div>

            <div className='my-5'>
                <Link to="/" className='flex items-center my-2 py-2 px-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                  <IoMdHome size={"20px"}/>
                  <h1 className='font-semibold text-lg mx-3'>Home</h1>
                </Link>

                <Link to="/explore" className='flex items-center my-2 py-2 px-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                  <FaSearch size={"20px"}/>
                  <h1 className='font-semibold text-lg mx-3'>Explore</h1>
                </Link>

                <Link to="/notifications" className='flex items-center my-2 py-2 px-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                  <IoNotifications size={"20px"}/>
                  <h1 className='font-semibold text-lg mx-3'>Notifications</h1>
                </Link>

                <Link to="/messages" className='flex items-center my-2 py-2 px-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                  <FaMessage size={"20px"}/>
                  <h1 className='font-semibold text-lg mx-3'>Messages</h1>
                </Link>

                <Link to="/grok" className='flex items-center my-2 py-2 px-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                  <RiEditBoxLine size={"20px"}/>
                  <h1 className='font-semibold text-lg mx-3'>Grok</h1>
                </Link>

                <Link to="/lists" className='flex items-center my-2 py-2 px-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                  <FaClipboardList size={"20px"}/>
                  <h1 className='font-semibold text-lg mx-3'>Lists</h1>
                </Link>

                <Link to="/bookmarks" className='flex items-center my-2 py-2 px-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                  <IoBookmarkSharp size={"20px"}/>
                  <h1 className='font-semibold text-lg mx-3'>Bookmarks</h1>
                </Link>

                <Link to="/communities" className='flex items-center my-2 py-2 px-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                  <MdPeopleAlt size={"20px"}/>
                  <h1 className='font-semibold text-lg mx-3'>Communities</h1>
                </Link>

                <Link to="/premium" className='flex items-center my-2 py-2 px-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                  <BsTwitterX size={"20px"}/>
                  <h1 className='font-semibold text-lg mx-3'>Premium</h1>
                </Link>

                <Link to="/profile" className='flex items-center my-2 py-2 px-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                  <CgProfile size={"20px"}/>
                  <h1 className='font-semibold text-lg mx-3'>Profile</h1>
                </Link>

                <div className='flex items-center my-2 py-2 px-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                  <CiCircleMore size={"20px"}/>
                  <h1 className='font-semibold text-lg mx-3'>More</h1>
                </div>

                <div className='flex items-center my-2 py-2 px-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                  <AiOutlineLogout size={"20px"}/>
                  <h1 className='font-semibold text-lg mx-3'>Logout</h1>
                </div>

                <button className='px-4 py-2 font-bold border-none bg-[#1d9bf0] text-white rounded-full w-full'>Post</button>
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar
