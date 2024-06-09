import React, { useState } from 'react'; 
import Header from './Header';

const Login = () => {
  const [signupForm,setSignupForm] =useState(false);
  
  const signup = () => {
    setSignupForm(!signupForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute '>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
      </div>
      <form className='w-3/12 relative p-12 bg-black bg-opacity-85 my-0 mx-auto right-0 left-0 top-40 text-white rounded'>
      <h1 className='font-bold text-3xl py-4'>{signupForm? "Sign-up" :"Sign-In"}</h1>
        {signupForm && <input
        type='text'
        placeholder='Display Name'
        className='p-3 my-4 w-full bg-gray-700 rounded'
        />}
        <input
         type="text"
         placeholder='Email or Mobile Number' 
         className='p-3 my-4 w-full bg-gray-700 rounded'
        />
        <input
         type="password"
         placeholder='Password'
         className='p-3 my-4  w-full bg-gray-700 rounded' 
        />
        <button className=' bg-red-600 text-wh p-4 my-6 w-full rounded'>{signupForm? "SignUp" :"Login"}</button>
      <p>{signupForm ? "New to Netflix-Gpt ? ":"Already a User ? " } 
        <span className="cursor-pointer " onClick={signup}>
         {signupForm ? "Sign Up Now" :"Sign In Now"}
        </span>
         </p>
      </form>
    </div>
  )
}

export default Login