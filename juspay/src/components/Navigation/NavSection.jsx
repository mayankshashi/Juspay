import React from 'react';
import './NavSection.css';
import NavItem from './NavItem';

const NavSection = ({ title, items, activeItem, onItemClick }) => {
  return (
    <div className="nav-section">
      <h3 className="section-title">{title}</h3>
      <ul className="nav-list">
        {items.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.label}
            onClick={() => onItemClick(item.label)}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavSection;