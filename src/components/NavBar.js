import React from 'react';
import UserPhoto from '../img/costanza.png';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/userSlice';

const NavBar = () => {
  const currentUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const logOut = async () => {
    try {
      await signOut(auth);
      console.log('<<<SIGNOUT');
      dispatch(logout());
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="navbarClass flex items-center justify-between bg-indigo-900 h-16 px-6 text-white">
      <span className="logoClass text-xl font-semibold">Insta Chat</span>
      <div className="flex items-center space-x-2">
        <img
          src={currentUser?.photoURL}
          alt="User"
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="text-sm">{currentUser?.displayName}</span>
        <button className="text-sm" onClick={logOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
