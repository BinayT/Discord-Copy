import React from 'react';
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

import './Sidebar.css';
import SidebarChannel from './SidebarChannel/SidebarChannel';
import { Avatar } from '@material-ui/core';

function Sidebar() {
  function handleAdd() {}

  return (
    <div className='sidebar'>
      <h2>I'm a sidebar</h2>
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
          <AddIcon onClick={handleAdd} className='sidebar__addChannel' />
        </div>

        <div className='sidebar__channelsList'>
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
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
        <Avatar />
        <div className='sidebar__profileInfo'>
          <h3>Binay Timilsina</h3>
          <p>@myid</p>
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
