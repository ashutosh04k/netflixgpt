import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../Utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import './Project.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';

const Login = () => {

  const [signupForm, setSignupForm] = useState(false);
  const [errormessage, setErrormessage] = useState()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const checkformvalidate = () => {
    // form vaidation 
    // checkValidData(email,password)
    const message = checkValidData(email.current.value, password.current.value)
    setErrormessage(message)
    if (message) return;
    if (signupForm) {
      // signup Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/56185371?v=4&size=64"
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
           dispatch(
          addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
        }));

            navigate("/browse")
          }).catch((error) => {
           setErrormessage(error.message)
          });
          console.log(" sign up user details", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage)
        });
    } else {
      // signin Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("Login user details", user);
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage("Invalid Email or Password")
        });
    }

  }
  const signup = () => {
    setSignupForm(!signupForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        // style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>



      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 relative p-12 bg-black bg-opacity-85 my-0 mx-auto right-0 left-0 top-40 text-white rounded'>
        <h1 className='font-bold text-3xl py-4'>{signupForm ? "Sign-up" : "Sign-In"}</h1>

        {signupForm && (
          <input
            ref={name}
            type='text'
            placeholder='Display Name'
            className='p-3 my-4 w-full bg-gray-700 rounded'
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder='Email or Mobile Number'
          className='p-3 my-4 w-full bg-gray-700 rounded'
        />

        <input
          ref={password}
          type="password"
          placeholder='Password'
          className='p-3 my-4  w-full bg-gray-700 rounded'
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errormessage}</p>

        <button className=' bg-red-600 text-wh p-4 my-6 w-full rounded' onClick={checkformvalidate}>{signupForm ? "SignUp" : "Login"}</button>
        <p>{signupForm ? "Already a User ?  " : "New to Netflix-Gpt ? "}
          <span className="cursor-pointer " onClick={signup}>
            {signupForm ? "Sign In Now " : "Sign Up Now"}
          </span>
        </p>
      </form>
    </div>
  )
}

export default Login