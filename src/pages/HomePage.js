import React from "react";
import Chat from "../components/Chat";
import SideBar from "../components/SideBar";

const HomePage = () => {
  return (
    <>
      <div className="bg-sky-500 flex h-[100vh] items-center justify-center">
        <div className="border-2 border-white rounded-lg flex w-65 h-80 overflow-hidden">
          <SideBar />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default HomePage;
