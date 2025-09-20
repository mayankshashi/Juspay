import React from 'react';
import './NavItem.css';

const NavItem = ({ icon, label, isActive, onClick }) => {
  return (
    <li className={`nav-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <img src={icon} alt={label} className="nav-icon" />
      <span>{label}</span>
    </li>
  );
};

export default NavItem;
