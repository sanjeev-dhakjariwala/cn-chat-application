import React from 'react';
import Chat from '../components/Chat';
import SideBar from '../components/SideBar';

const HomePage = () => {
  return (
    <div className="homeClass bg-blue-300 min-h-screen flex items-center justify-center">
      <div className="containerClass border border-white rounded-lg w-full max-w-screen-xl h-4/5 flex overflow-hidden tablet:w-4/5">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default HomePage;
