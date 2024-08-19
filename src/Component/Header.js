import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removerUser } from '../Utils/userSlice';
import { LOGO } from '../Utils/Constant';
import { initialState } from '../Utils/GptSearchSlice';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const showgptsearch = useSelector(store => store.gptsearch?.currentstate)
  // subscribing to the store
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };

  const handleGptSearch = () =>{
    //logic to hadle gpt search over here and it to be toggle button 
    dispatch(initialState())
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        }));
        navigate('/browse');
      } else {
        dispatch(removerUser());
        navigate('/');
      }
    });
    // Unmounting from browser
    return () => unsubscribe();
  }, []);

  return (
    <div className='fixed w-screen h-20 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className='flex items-center'>
          <button  className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearch}>
            GPT Search
          </button>
          <div className='relative'>
            <div className='flex items-center p-2 cursor-pointer rounded-full' onClick={toggleDropdown}>
              <img
                className='w-8 h-8'
                alt='usericon'
                src={user.photoURL}
              />
            </div>
            {dropdownOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20'>
                <button onClick={handleSignOut} className="font-bold text-black p-2 w-full text-left border-t border-gray-200">
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
