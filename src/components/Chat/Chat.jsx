import React from 'react';
import './Chat.css';
import ChatMessages from './ChaMessages/ChatMessages';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatInput from './ChatInput/ChatInput';

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}

export default Chat;
