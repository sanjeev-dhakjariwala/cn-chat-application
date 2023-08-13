import React, { useState } from 'react';
import { db, storage } from '../utils/firebase';
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc
} from 'firebase/firestore';

const Search = () => {
  const [userName, setUsername] = useState('');
  const [err, setError] = useState(false);
  const [user, setuser] = useState(null);

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  };
  //Handles Search
  const handleSearch = async () => {
    const query = query(collection(db, 'userCollection'));
    try {
    } catch (error) {
      setError(true);
    }
  };

  const handleSelect = () => {};

  return (
    <div className="searchClass border-b border-gray-400 p-2">
      <input
        className="w-full bg-transparent border-none text-white placeholder-gray-300 focus:outline-none"
        type="text"
        placeholder="Find a user..."
        onKeyDown={handleKey}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={userName}
      />
      {err && <span className="text-red-500">User Not found!!!</span>}
      {user && (
        <div
          className="userChat p-4 flex items-center gap-4 text-white cursor-pointer hover:bg-indigo-700"
          onClick={handleSelect}
        >
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={user.photoURL}
            alt=""
          />
          <div className="userChatInfo">
            <span className="text-xl font-semibold">{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
