import React from 'react';
import { useSelector } from 'react-redux';
import './Notifications.css';
import bugIcon from '../../assets/BugBeetle.svg';
import userIcon from '../../assets/new user.svg';
import { selectNotifications } from '../../store/slices/sidebarSlice';

const iconMap = {
  bug: bugIcon,
  user: userIcon
};

const Notifications = () => {
  const notifications = useSelector(selectNotifications);

  return (
    <div className="notifications-container">
      <h2 className="notifications-title">Notifications</h2>
      <div className="notifications-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            <div className={`notification-icon-container ${notification.type}`}>
              <img src={iconMap[notification.type]} alt="" className="notification-icon" />
            </div>
            <div className="notification-content">
              <p className="notification-message">{notification.message}</p>
              <span className="notification-time">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
