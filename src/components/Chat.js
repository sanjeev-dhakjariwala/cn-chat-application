import React from 'react';
import Cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  const data = [];
  return (
    <>
      <div className="chat flex-2">
        <div className="chatInfoClass bg-indigo-800 h-16 p-4 flex items-center justify-between text-gray-400">
          <span>data.user?.displayName</span>
          <div className="chatIcons flex gap-6">
            <img className="h-6 cursor-pointer" src={Cam} alt="" />
            <img className="h-6 cursor-pointer" src={Add} alt="" />
            <img className="h-6 cursor-pointer" src={More} alt="" />
          </div>
        </div>
        <Messages />
        <Input />
      </div>
    </>
  );
};

export default Chat;
