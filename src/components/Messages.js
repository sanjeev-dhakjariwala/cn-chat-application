import { doc, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect, useContext } from 'react';
import { db } from '../utils/firebase';
import Message from './Message';
import { ChatContext } from '../context/ChatContext';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages);
  
  return (
    <div className="messageClass bg-gray-100 p-4 h-[calc(100vh-160px)] overflow-y-auto">
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default Messages;
