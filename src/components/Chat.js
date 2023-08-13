import React, { useContext } from 'react';
import CamIcon from '../img/cam.png';
import AddIcon from '../img/add.png';
import MoreIcon from '../img/more.png';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="flex-1 bg-gray-100 flex flex-col">
      <div className="bg-indigo-800 h-16 p-4 flex items-center justify-between text-gray-400">
        <span className="text-white text-lg font-semibold">
          {data.user?.displayName}
        </span>
        <div className="flex gap-4">
          <img className="h-6 cursor-pointer" src={CamIcon} alt="Camera" />
          <img className="h-6 cursor-pointer" src={AddIcon} alt="Add" />
          <img className="h-6 cursor-pointer" src={MoreIcon} alt="More" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Messages />
      </div>
      <Input />
    </div>
  );
};

export default Chat;
