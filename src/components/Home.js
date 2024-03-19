import React from 'react'
import LeftSidebar from './LeftSidebar'
//import Feed from './Feed'
import RightSidebar from './RightSidebar'
import { Outlet } from 'react-router-dom' // Outlet is used for render conditionally children components.

const Home = () => {
  return (
    <div className='flex justify-between mx-auto w-[80%]'>
      <LeftSidebar/>
      <Outlet/>
      <RightSidebar/>
    </div>
  )
}

export default Home
