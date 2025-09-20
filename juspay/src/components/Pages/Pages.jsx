import React from 'react';
import './Pages.css';
import NavSection from '../Navigation/NavSection';
import userProfileIcon from '../../assets/userProfile.svg';
import accountIcon from '../../assets/account.svg';
import corporateIcon from '../../assets/corporate.svg';
import blogIcon from '../../assets/blog.svg';
import socialIcon from '../../assets/social.svg';

const Pages = ({ activeItem, onItemClick }) => {
  const pagesItems = [
    { icon: userProfileIcon, label: 'User Profile' },
    { icon: accountIcon, label: 'Account' },
    { icon: corporateIcon, label: 'Corporate' },
    { icon: blogIcon, label: 'Blog' },
    { icon: socialIcon, label: 'Social' }
  ];

  return (
    <div className="pages-section">
      <NavSection
        title="Pages"
        items={pagesItems}
        activeItem={activeItem}
        onItemClick={onItemClick}
      />
    </div>
  );
};

export default Pages;