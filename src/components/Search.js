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
import { useSelector } from 'react-redux';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const currentUser = useSelector((state) => state.user.user);

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, 'chats', combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        });

        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername('');
  };

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
        value={username}
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
