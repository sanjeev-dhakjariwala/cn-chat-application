import React from 'react';
import UserPhoto from '../img/favicon_sanjeev.png';

const NavBar = () => {
  return (
    <div className="navbarClass flex justify-between items-center bg-indigo-900 h-16 p-4 text-gray-400">
      <span className="logoClass font-bold">Insta Chat</span>
      <div className="userClass flex gap-2 items-center">
        <img
          src={UserPhoto}
          alt=""
          className="h-6 w-6 bg-blue-200 rounded-full object-cover"
        />
        <span>George Costanza</span>
      </div>
    </div>
  );
};

export default NavBar;
