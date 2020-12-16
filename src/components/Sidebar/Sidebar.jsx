import React from 'react';
import { ExpandMore } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';

import './Sidebar.css';
import SidebarChannel from './SidebarChannel/SidebarChannel';

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
    </div>
  );
}

export default Sidebar;
