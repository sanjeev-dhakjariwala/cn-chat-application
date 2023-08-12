import { doc, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import Message from './Message';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const data = {};
  useEffect(() => {}, [data.chatId]);
  return (
    <div className="messageClass bg-gray-100 p-4 h-[calc(100vh-160px)] overflow-y-auto">
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default Messages;
