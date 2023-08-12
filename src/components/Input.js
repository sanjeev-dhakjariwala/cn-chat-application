import React, { useState } from 'react';
import Img from '../img/img.png';
import Attach from '../img/attach.png';
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc
} from 'firebase/firestore';
import { db, storage } from '../utils/firebase';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Input = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const handleSend = async () => {};
  return (
    <div className="input h-16 bg-white p-4 flex items-center justify-between shadow-md">
      <input
        className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500 text-base placeholder-gray-500"
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex items-center space-x-4">
        <label htmlFor="file" className="cursor-pointer">
          <img className="h-6" src={Attach} alt="Attach" />
        </label>
        <input
          className="hidden"
          type="file"
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file" className="cursor-pointer">
          <img className="h-6" src={Img} alt="Image" />
        </label>
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded focus:outline-none hover:bg-indigo-700"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
