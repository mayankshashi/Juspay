import React from 'react';
import './RightSidebar.css';
import Notifications from '../Notifications/Notifications';
import Activities from '../Activities/Activities';
import Contacts from '../Contacts/Contacts';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <Notifications />
      <Activities />
      <Contacts />
    </div>
  );
};

export default RightSidebar;
