import React, { useState, useEffect, useRef } from 'react';

const Message = ({ message }) => {
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);
  return (
    <>
      <div ref={ref} className={`flex gap-10 mb-20`}>
        <div className="flex flex-col text-gray-400 font-light">
          <img
            className="w-40 h-40 rounded-full object-cover"
            src="message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL"
            alt=""
          />
          <span>Just Now</span>
        </div>
        <div className="max-w-80 flex flex-col gap-10">
          <p className="bg-white p-10 border-l border-b rounded-br-md max-w-max">
            message.text
          </p>
          message.img && <img className="w-1/2" src="message.img" alt="" />
        </div>
      </div>
    </>
  );
};

export default Message;
