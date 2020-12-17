import React, { useEffect, useState } from 'react';
import {
  ExpandMore,
  SignalCellularAltOutlined,
  InfoOutlined,
  MicNoneOutlined,
  HeadsetOutlined,
  SettingsOutlined,
} from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import { useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';

import './Sidebar.css';
import SidebarChannel from './SidebarChannel/SidebarChannel';
import { selectUser } from '../../reducers/userReducer';
import db from '../../firebase';

function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection('channels').onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  });

  const handleAddChannel = () => {
    const channelName = prompt('Enter a new channel name:');
    if (channelName) {
      db.collection('channels').add({ channelName });
    }
  };

  const userData = useSelector(selectUser);

  const { displayName, photoURL, uid } = userData;

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>Binay's Room</h3>
        <ExpandMore />
      </div>

      <div className='sidebar__channels'>
        <div className='sidebar__channelsHeader'>
          <div className='sidebar__header'>
            <ExpandMore />
            <h4>Text Channel</h4>
          </div>
          <AddIcon onClick={handleAddChannel} className='sidebar__addChannel' />
        </div>

        <div className='sidebar__channelsList'>
          {channels.map((el) => (
            <SidebarChannel />
          ))}
        </div>
      </div>

      <div className='sidebar__voice'>
        <SignalCellularAltOutlined
          className='sidebar__voiceIcon'
          fontSize='large'
        />
        <div className='sidebar__voiceInfo'>
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className='sidebar__voiceIcons'>
          <PhoneEnabledIcon />
          <InfoOutlined />
        </div>
      </div>

      <div className='sidebar__profile'>
        <Avatar src={photoURL} />
        <div className='sidebar__profileInfo'>
          <h3>{displayName}</h3>
          <p>@{uid.substring(0, 5)}</p>
        </div>
        <div className='sidebar__profileIcons'>
          <MicNoneOutlined />
          <HeadsetOutlined />
          <SettingsOutlined />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
