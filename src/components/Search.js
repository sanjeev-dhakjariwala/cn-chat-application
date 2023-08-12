import React, { useState } from 'react';

const Search = () => {
  const [userName, setUsername] = useState('');
  const [err, setError] = useState(false);
  const [user, setuser] = useState(null);
  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  };
  const handleSearch = async () => {};

  const handleSelect = () => {};
  return (
    <div className="searchClass border-b border-gray-400">
      <div className="searchFormClass p-2">
        <input
          className="bg-transparent border-none text-white outline-none placeholder-lightgray"
          type="text"
          placeholder="Find a user..."
          onKeyDown={handleKey}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={userName}
        />
      </div>
      {err && <span>User Not found!!!</span>}
      {user && (
        <div
          className="userChat p-4 flex items-center gap-10 text-white cursor-pointer hover:bg-indigo-700"
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
