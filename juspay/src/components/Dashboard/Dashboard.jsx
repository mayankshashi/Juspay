import React from 'react';
import './Dashboard.css';
import defaultIcon from '../../assets/default.svg';
import ecommerceIcon from '../../assets/ecommerce.svg';
import projectsIcon from '../../assets/projects.svg';
import coursesIcon from '../../assets/courses.svg';
import arrowRight from '../../assets/right-arrow.svg';

const Dashboard = ({ activeItem, onItemClick }) => {
  const dashboardItems = [
    { icon: defaultIcon, label: 'Default' },
    { icon: ecommerceIcon, label: 'eCommerce' },
    { icon: projectsIcon, label: 'Projects' },
    { icon: coursesIcon, label: 'Online Courses' }
  ];

  return (
    <div className="dashboard-container">
      <div className="section-header">Dashboards</div>
      <div className="nav-items">
        {dashboardItems.map((item) => (
          <div 
            key={item.label} 
            className={`nav-item-container ${item.label === activeItem ? 'active' : ''}`}
            onClick={() => onItemClick?.(item.label)}
          >
            {item.label === activeItem && <div className="active-indicator" />}
            {item.label !== activeItem && <img src={arrowRight} alt="arrow" className="arrow-icon" />}
            <img src={item.icon} alt={item.label} className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;