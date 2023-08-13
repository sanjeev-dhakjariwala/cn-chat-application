import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(`SIGN IN SUCCESSFULL!!!`);
      navigate('/');
    } catch (err) {
      setErr(true);
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      const serializableUser = {
        accessToken: user?.accessToken,
        uid: user?.uid,
        displayName: user?.displayName,
        email: user?.email,
        photoUrl: user?.photoURL
        // Add any other necessary properties
      };
      dispatch(setUser(serializableUser));
    });

    return () => {
      unsub();
    };
  },[]);
  return (
    <div className="flex items-center justify-center h-screen bg-blue-300">
      <div className="bg-white p-8 rounded-2xl flex flex-col gap-4 items-center w-96">
        <span className="text-indigo-700 font-bold text-3xl">Insta Chat</span>
        <span className="text-indigo-700 text-sm">Login</span>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="px-4 py-3 border-b-2 border-blue-300 w-full placeholder-gray-700"
            type="email"
            placeholder="Email"
          />
          <input
            className="px-4 py-3 border-b-2 border-blue-300 w-full placeholder-gray-700"
            type="password"
            placeholder="Password"
          />
          <button className="bg-blue-600 text-white py-2 px-4 font-bold rounded cursor-pointer">
            Sign in
          </button>
          {err && <span className="text-red-500">Something went wrong</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
