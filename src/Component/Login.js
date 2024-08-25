import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../Utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { BG_URL, PHOTO_URL } from '../Utils/Constant';

const Login = () => {

  const [signupForm, setSignupForm] = useState(false);
  const [errormessage, setErrormessage] = useState()
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
            photoURL: PHOTO_URL
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
           dispatch(
          addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
        }));
          }).catch((error) => {
           setErrormessage(error.message)
          });
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
          src={BG_URL}
          alt="logo" 
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

export default Login;