import React from 'react';
import './UserProfile.css';
import userAvatar from '../../assets/user.svg';

const UserProfile = () => {
  return (
    <div className="user-section">
      <div className="user-profile">
        <img src={userAvatar} alt="User Profile" className="user-avatar" />
        <span className="user-name">ByeWind</span>
      </div>
    </div>
  );
};

export default UserProfile;
