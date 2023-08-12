import React from 'react';
import UserPhoto from '../img/favicon_sanjeev.png';

const NavBar = () => {
  return (
    <div className="navbarClass flex items-center justify-between bg-indigo-900 h-16 px-6 text-white">
      <span className="logoClass text-xl font-semibold">Insta Chat</span>
      <div className="flex items-center space-x-2">
        <img
          src={UserPhoto}
          alt="User"
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="text-sm">George Costanza</span>
      </div>
    </div>
  );
};

export default NavBar;
