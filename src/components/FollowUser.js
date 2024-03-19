import React from 'react'
import Avatar from "react-avatar";

const FollowUser = () => {
  return (
    <div>
      {/**start of follow user 1 */}
      <div className="flex justify-between">
      <div className="flex items-center">
        <div>
          <Avatar
            src="https://pbs.twimg.com/profile_images/1467810710767824898/wPhg9MWr_400x400.jpg"
            size="50"
            round={true}
          />
        </div>
        <div className="p-2">
          <h1 className="font-semibold">Lokesh Kumar </h1>
          <p>@lokeshkmr30</p>
        </div>
      </div>
      <div>
        <button className="p-2 mt-3 font-bold border-none bg-[#1d9bf0] text-white rounded-full">
          Follow
        </button>
      </div>
    </div>
    {/**end of follow user 1 */}

    </div>
  )
}

export default FollowUser
