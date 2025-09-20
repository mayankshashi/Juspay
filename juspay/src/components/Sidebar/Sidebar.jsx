import React, { useState } from 'react';
import './Sidebar.css';
import UserProfile from '../User/UserProfile';
import Favorites from '../Favorites/Favorites';
import Dashboard from '../Dashboard/Dashboard';
import Pages from '../Pages/Pages';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Default');

  const handleItemClick = (label) => {
    setActiveItem(label);
  };

  return (
    <div className="sidebar">
      <UserProfile />
      
      <Favorites 
        activeItem={activeItem}
        onItemClick={handleItemClick}
      />

      <Dashboard
        activeItem={activeItem}
        onItemClick={handleItemClick}
      />

      <Pages
        activeItem={activeItem}
        onItemClick={handleItemClick}
      />
    </div>
  );
};

export default Sidebar;