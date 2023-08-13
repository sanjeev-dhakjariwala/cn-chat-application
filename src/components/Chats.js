import React, { useState, useEffect, useContext } from 'react';
import { db } from '../utils/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { ChatContext } from '../context/ChatContext';

const Chats = () => {
  const currentUser = useSelector((state) => state.user.user);

  const [chats, setChats] = useState([]);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: 'CHANGE_USER', payload: u });
  };

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
