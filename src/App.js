import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import './App.css';

function App() {
  return (
    <div className='app'>
      {/* SideBar */}
      <Sidebar />
      {/* Chat */}
      <Chat />
    </div>
  );
}

export default App;
