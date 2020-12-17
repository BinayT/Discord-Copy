import React from 'react';
import {
  GroupOutlined,
  Help,
  NotificationsNoneOutlined,
  RoomOutlined,
  Send,
  SearchOutlined,
  ExitToAppOutlined,
} from '@material-ui/icons';

import './ChatHeader.css';
import { auth } from '../../../firebase';

function ChatHeader() {
  return (
    <div className='chatHeader'>
      <div className='chatHeader__left'>
        <h3>
          <span className='chatHeader__hash'>#</span>Youtube
        </h3>
      </div>
      <div className='chatHeader__right'>
        <NotificationsNoneOutlined />
        <RoomOutlined />
        <GroupOutlined />
        <div className='chatHeader__search'>
          <input type='text' placeholder='Search' />
          <SearchOutlined />
        </div>
        <Help />
        <ExitToAppOutlined onClick={() => auth.signOut()} />
      </div>
    </div>
  );
}

export default ChatHeader;
