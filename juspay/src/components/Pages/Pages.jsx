import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Pages.css';
import userProfileIcon from '../../assets/userProfile.svg';
import accountIcon from '../../assets/account.svg';
import corporateIcon from '../../assets/corporate.svg';
import blogIcon from '../../assets/blog.svg';
import socialIcon from '../../assets/social.svg';
import rightArrowIcon from '../../assets/right-arrow.svg';
import { selectPagesItems } from '../../store/slices/sidebarSlice';

const Pages = ({ activeItem, onItemClick }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const pagesItems = useSelector(selectPagesItems);

  const iconMap = {
    userProfileIcon,
    accountIcon,
    corporateIcon,
    blogIcon,
    socialIcon
  };

  const handleItemClick = (item) => {
    if (expandedItem === item.label) {
      setExpandedItem(null);
    } else {
      setExpandedItem(item.label);
    }
    onItemClick && onItemClick(item);
  };

  return (
    <div className="pages-section">
      <div className="header">Pages</div>
      {pagesItems.map((item) => (
        <div key={item.label} className="page-item-container">
          <div 
            className={`page-item ${activeItem === item.label ? 'active' : ''}`}
            onClick={() => handleItemClick(item)}
          >
            <div className="page-item-content">
              <img 
                src={rightArrowIcon} 
                alt="expand" 
                className={`arrow-icon ${expandedItem === item.label ? 'expanded' : ''}`}
                />
              <img src={iconMap[item.iconKey]} alt={item.label} className="page-item-icon" />
              <span className="page-item-label">{item.label}</span>
            </div>
          </div>
          {expandedItem === item.label && (
            <div className="subitems-container">
              {item.subitems.map((subitem) => (
                <div key={subitem} className="subitem">
                  {subitem}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pages;