import React from 'react';
import { Avatar } from '@material-ui/core';

import './ChatMessages.css';

function ChatMessages() {
  return (
    <div className='chat__messages'>
      <div className='message'>
        <Avatar />
        <div className='message__info'>
          <h4>
            Binay Timilsina
            <span className='message__timestamp'>Timestamp</span>
          </h4>
          <p>This is a message</p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessages;
