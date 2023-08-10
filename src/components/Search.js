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
    <>
      <div className="search">
        <div className="searchForm">
          <input
            type="text"
            placeholder="Find a user"
            onKeyDown={handleKey}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={userName}
          />
        </div>
        {err && <span>User Not found!!!</span>}
        {user && (
          <div className="userChat" onClick={handleSelect}>
            <img src={user.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{user.displayName}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
