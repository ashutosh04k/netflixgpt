import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  //subscribing to the store
  const user = useSelector(store =>store.user)
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='fixed w-screen h-20 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className='relative'>
        <div className='flex items-center p-2 cursor-pointer rounded-full' onClick={toggleDropdown}>
          <img
            className='w-8 h-8'
            alt='usericon'
            src={user.photoURL}
          />
        </div>
        { dropdownOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg'>
            <button onClick={handleSignOut} className="font-bold text-black p-2 w-full text-left b-black">
              Sign out
            </button>
          </div>
        )}
      </div>}
    </div>
  );
};

export default Header;
