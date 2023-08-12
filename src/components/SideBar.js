import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Chats from './Chats';

const SideBar = () => {
  return (
    <div className='bg-indigo-800 relative"'>
      <div className="flex-1">
        <NavBar />
        <Search />
      </div>
      <div className="flex">
        <Chats />
      </div>
    </div>
  );
};

export default SideBar;
