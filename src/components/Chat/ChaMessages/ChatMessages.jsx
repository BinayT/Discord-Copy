import React from 'react';
import { Avatar } from '@material-ui/core';

import './ChatMessages.css';

function ChatMessages({ message, user, timestamps }) {
  return (
    <div className='message'>
      <Avatar src={user.photoURL} />
      <div className='message__info'>
        <h4>
          {user.displayName}
          <span className='message__timestamp'>
            {new Date(timestamps?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatMessages;
