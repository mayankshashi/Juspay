import React from 'react';
import { useSelector } from 'react-redux';
import './Activities.css';
import Male_1 from '../../assets/3D05.png';
import Female05 from '../../assets/Female05.png';
import Male07 from '../../assets/Male07.png';
import Female01 from '../../assets/3D08.png';
import Male11 from '../../assets/Male11.png';
import { selectActivities } from '../../store/slices/sidebarSlice';

const avatarMap = {
  Male_1,
  Female05,
  Male07,
  Female01,
  Male11
};

const Activities = () => {
  const activities = useSelector(selectActivities);

  return (
    <div className="activities-container">
      <h2 className="activities-title">Activities</h2>
      <div className="activities-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <img src={avatarMap[activity.avatarKey]} alt="" className="activity-icon" />
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
