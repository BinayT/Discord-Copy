import React from 'react';
import { useSelector } from 'react-redux';

import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import './App.css';
import { selectUser } from './reducers/userReducer';
import Login from './components/Login/Login';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className='app'>
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
