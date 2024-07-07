import React, { useEffect } from 'react'
import Login from "./Login";
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../Utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removerUser } from '../Utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/> 
    },
    {
      path: "/browse",
      element: <Browse/>
    },
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user ;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
        }));

      } else {
        dispatch(removerUser());
      }
    });
  },[])

  return (
    <div>
      <RouterProvider router={appRouter}/>
      {/* <Login/> */}
      {/* <Browse/> */}
      </div>
  )
}

export default Body;
