import React, { useState } from 'react'

const Login = () => {

    const [isLogin,setIsLogin]=useState(true);

    const loginSignupHandler=()=>{
      setIsLogin(!isLogin);
    }

  return (

    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='flex items-center justify-evenly w-[80%]'>
        <div>
        <img className='ml-3 mt-3 cursor-pointer bg-none' src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=626&ext=jpg&ga=GA1.1.1004089666.1710502896&semt=ais" alt="twitter-logo" width={"400px"} />
        </div>

        <div className='w-[50%]'>
          <div className='font-bold text-6xl'>
            <h1>Happening Now !</h1>
          </div>
          <div className='font-bold text-3xl py-2'>
          <h1 className='mt-2'>{isLogin ? "Login" : "Sign Up"}</h1>
          </div>
          <div>
            <form action="" className='flex flex-col'>

            {
              !isLogin && (<>
                <input type="text" placeholder='Name' className='w-[50%] px-2 py-2 mt-2 rounded-full border'/>

              <input type="text" placeholder='Username' className='w-[50%] px-2 py-2 mt-2 rounded-full border'/>
                </>)
            }
              

              <input type="text" placeholder='Email' className='w-[50%] px-2 py-2 mt-2 rounded-full border'/>

              <input type="text" placeholder='Password' className='w-[50%] px-2 py-2 mt-2 rounded-full border'/>

              <button className='px-4 py-2 font-bold border-none bg-[#1d9bf0] text-white rounded-full w-[50%] mt-3 text-xl'>{isLogin ? "Login" : "Create Account"}</button>
              <h1 className='py-2'>{isLogin ? "Don't have an account ? " : "Already have an account ? "} <span onClick={loginSignupHandler} className='cursor-pointer text-blue-600 font-semibold hover:bg-gray-300 rounded-full p-1'>{isLogin ? "Sign Up " : "Login"}</span></h1>
            </form>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
