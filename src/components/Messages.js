import { doc, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import Message from './Message';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const data = {};
  useEffect(() => {}, [data.chatId]);
  return (
    <>
      <div className="messages">
        {messages.map((m) => (
          <Message message={m} key={m.id} />
        ))}
      </div>
    </>
  );
};

export default Messages;
