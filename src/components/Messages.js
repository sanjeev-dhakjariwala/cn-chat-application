import { doc, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import Message from './Message';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const data = {};

  return (
    <>
      <div className="messages">
        <p>Message Page</p>
      </div>
    </>
  );
};

export default Messages;
