import React from 'react';
import { useSelector } from 'react-redux';

import './Chat.css';
import ChatMessages from './ChaMessages/ChatMessages';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatInput from './ChatInput/ChatInput';
import { selectChannelId, selectChannelName } from '../../reducers/appReducer';

function Chat() {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName} channelId={channelId} />
      <div className='chat__messages'>
        <ChatMessages />
        <ChatMessages />
      </div>
      <ChatInput channelName={channelName} channelId={channelId} />
    </div>
  );
}

export default Chat;
