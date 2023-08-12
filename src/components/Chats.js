import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

const Chats = () => {
  const [chats, setChat] = useState([]);

  useEffect(() => {}, []);

  const handleSelect = () => {};
  return (
    <div className="chats overflow-y-auto">
      {Object.entries(chats)
        .sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat p-4 flex items-center gap-4 text-white cursor-pointer hover:bg-indigo-700"
            key={chat[0]}
            onClick={() => {
              handleSelect(chat[1].userInfo);
            }}
          >
            <img
              className="h-12 w-12 rounded-full object-cover"
              src={chat[1].userInfo.photoURL}
              alt=""
            />
            <div className="userChatInfo">
              <span className="text-xl font-semibold">
                {chat[1].userInfo?.displayName}
              </span>
              <p className="text-sm text-gray-300">
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
