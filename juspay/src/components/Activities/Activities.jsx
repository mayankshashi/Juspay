import React from 'react';
import './Activities.css';
import Male_1 from '../../assets/3D05.png';
import Female05 from '../../assets/Female05.png';
import Male07 from '../../assets/Male07.png';
import Female01 from '../../assets/3D08.png';
import Male11 from '../../assets/Male11.png';

const Activities = () => {
  const activities = [
    {
      id: 1,
      icon: Male_1,
      message: 'You have a bug that needs...',
      time: 'Just now'
    },
    {
      id: 2,
      icon: Female05,
      message: 'Released a new version',
      time: '59 minutes ago'
    },
    {
      id: 3,
      icon: Female01,
      message: 'Submitted a bug',
      time: '12 hours ago'
    },
    {
      id: 4,
      icon: Male07,
      message: 'Modified A data in Page X',
      time: 'Today, 11:59 AM'
    },
    {
      id: 5,
      icon: Male11,
      message: 'Deleted a page in Project X',
      time: 'Feb 2, 2023'
    }
  ];

  return (
    <div className="activities-container">
      <h2 className="activities-title">Activities</h2>
      <div className="activities-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <img src={activity.icon} alt="" className="activity-icon" />
            <div className="activity-content">
              <p className="activity-message">{activity.message}</p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
