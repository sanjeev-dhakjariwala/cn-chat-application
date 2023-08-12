import React, { useState, useEffect, useRef } from 'react';

const Message = ({ message }) => {
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);
  return (
    <div ref={ref} className={`message flex items-center gap-20 mb-20`}>
      <div className="messageInfo flex flex-col text-gray-300 font-light">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src="message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL"
          alt=""
        />
        <span className="text-xs">Just Now</span>
      </div>
      <div className="messageContent max-w-80 flex flex-col gap-10">
        <p className="bg-white p-4 rounded-[0px 10px 10px 10px] max-w-max">
          message.text
        </p>
        message.img && <img className="w-1/2" src="message.img" alt="" />
      </div>
    </div>
  );
};

export default Message;
