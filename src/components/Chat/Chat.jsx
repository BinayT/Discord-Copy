import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatInput from './ChatInput/ChatInput';

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className='chat__messages'></div>
      <ChatInput />
    </div>
  );
}

export default Chat;
