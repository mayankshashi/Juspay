import React, { useState } from 'react';
import './Favorites.css';
import bulletPoint from '../../assets/bullet.svg';

const Favorites = () => {
  const [activeSection, setActiveSection] = useState('favorites');

  const items = {
    favorites: [
      { icon: bulletPoint, label: 'Overview' },
      { icon: bulletPoint, label: 'Projects' }
    ],
    recently: [
      { icon: bulletPoint, label: 'Overview' },
      { icon: bulletPoint, label: 'Projects' }
    ]
  };

  return (
    <div className="favorites-container">
      <div className="section-headers">
        <div 
          className={`section-header ${activeSection === 'favorites' ? 'active' : ''}`}
          onClick={() => setActiveSection('favorites')}
        >
          Favorites
        </div>
        <div 
          className={`section-header ${activeSection === 'recently' ? 'active' : ''}`}
          onClick={() => setActiveSection('recently')}
        >
          Recently
        </div>
      </div>

      <div className="nav-items">
        {items[activeSection].map((item) => (
          <div key={item.label} className="nav-item-container">
            <img src={item.icon} alt={item.label} className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;