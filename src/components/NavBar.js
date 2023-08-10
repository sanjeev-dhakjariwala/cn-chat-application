import React from 'react';
import UserPhoto from '../img/favicon_sanjeev.png';

const NavBar = () => {
  return (
    <>
      <div className="flex item-center bg-indigo-800 h-50 p-10 justify-between text-blue-200">
        <span className="font-bold">Insta Chat</span>
        <div className="flex mx-2">
          <img
            src={UserPhoto}
            alt="User"
            className="w-12 h-10 rounded-full object-cover"
          />
          <span>George Costanza</span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
