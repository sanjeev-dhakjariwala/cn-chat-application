import React from 'react';
import Chat from '../components/Chat';
import SideBar from '../components/SideBar';

const HomePage = () => {
  return (
    <>
      <div className="homeClass bg-blue-300 h-screen flex items-center justify-center">
        <div className="containerClass border border-white rounded-lg w-65 h-80 flex overflow-hidden tablet:w-90">
          <SideBar />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default HomePage;
