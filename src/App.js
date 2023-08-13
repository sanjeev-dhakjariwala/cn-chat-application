import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const currentUser = useSelector((state) => state.user.user);
  console.log(`CURRENT USER ${currentUser.displayName}`);
  
  useEffect(() => {

  },[currentUser])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={currentUser.displayName ? <HomePage /> : <Login />}
          ></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
