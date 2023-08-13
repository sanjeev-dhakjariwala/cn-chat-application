import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import chatSlice from './slices/chatSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    chat: chatSlice.reducer, // Access the reducer function of the slice
    user: userSlice.reducer
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
