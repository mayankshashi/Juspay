import React from 'react';
import './Notifications.css';
import bugIcon from '../../assets/BugBeetle.svg';
import userIcon from '../../assets/new user.svg';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      icon: bugIcon,
      type: 'bug',
      message: 'You have a bug that needs...',
      time: 'Just now'
    },
    {
      id: 2,
      icon: userIcon,
      type: 'user',
      message: 'New user registered',
      time: '39 minutes ago'
    },
    {
      id: 3,
      icon: bugIcon,
      type: 'bug',
      message: 'You have a bug that needs...',
      time: '12 hours ago'
    },
    {
      id: 4,
      icon: userIcon,
      type: 'user',
      message: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM'
    },
  ];

  return (
    <div className="notifications-container">
      <h2 className="notifications-title">Notifications</h2>
      <div className="notifications-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            {notification.icon && (
              <div className={`notification-icon-container ${notification.type}`}>
                <img src={notification.icon} alt="" className="notification-icon" />
              </div>
            )}
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
