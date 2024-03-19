import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Feed from './Feed';
import Communities from './Communities';
import Bookmarks from './Bookmarks';
import Notifications from './Notifications';
import Grok from './Grok';
import Lists from './Lists';
import Messages from './Messages';
import Premium from './Premium';
import Explore from './Explore';

const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Home/>,
            children:[{
                        path:"/",
                        element:<Feed/>
                      },
                      {
                        path:"/profile",
                        element:<Profile/>
                      },
                      {
                        path:"/notifications",
                        element:<Notifications/>
                      },
                      {
                        path:"/explore",
                        element:<Explore/>
                      },
                      {
                        path:"/messages",
                        element:<Messages/>
                      },
                      {
                        path:"/grok",
                        element:<Grok/>
                      },
                      {
                        path:"/lists",
                        element:<Lists/>
                      },
                      {
                        path:"/bookmarks",
                        element:<Bookmarks/>
                      },
                      {
                        path:"/communities",
                        element:<Communities/>
                      },
                      {
                        path:"/premium",
                        element:<Premium/>
                      }
              
                    ]   
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/profile",
            element:<Profile/>
        }

    ])

  return (
    <div>
      <RouterProvider router={appRouter}/> 
    </div>
  )
}

export default Body
