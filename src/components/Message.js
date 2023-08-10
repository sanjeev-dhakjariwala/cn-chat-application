import React, { useState, useEffect, useRef } from 'react';

const Message = ({ message }) => {
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);
  return (
    <>
      <div
        ref={ref}
        className={`message message.senderId === currentUser.uid && "owner"}`}
      >
        <div className="messageInfo">
          <img
            src="message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL"
            alt=""
          />
          <span>Just Now</span>
        </div>
        <div className="messageContext">
          <p>message.text</p>
          message.img && <img src="message.img" alt="" />
        </div>
      </div>
    </>
  );
};

export default Message;
