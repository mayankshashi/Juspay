import React from 'react';
import { useSelector } from 'react-redux';
import './Location.css';
import WorldMap from '../../assets/Maps.svg';
import { selectLocation } from '../../store/slices/ecommerceSlice';

const Location = () => {
  const locationData = useSelector(selectLocation);
  const locations = locationData.topLocations.map(loc => ({
    name: loc.city,
    revenue: `${loc.orders}K`,
    percentage: loc.percentage
  }));

  return (
    <div className="location-card">
      <h3 className="location-title">Revenue by Location</h3>
      
      <div className="map-container">
        <div className="map-wrapper">
          <img src={WorldMap} alt="World Map" className="world-map" />
          <svg className="markers-overlay" viewBox="0 0 154 82">
            <circle cx="35" cy="32" r="2" fill="#1C1C1C" className="location-marker" />
            <circle cx="50" cy="35" r="2" fill="#1C1C1C" className="location-marker" />
            <circle cx="115" cy="25" r="2" fill="#1C1C1C" className="location-marker" />
            <circle cx="125" cy="62" r="2" fill="#1C1C1C" className="location-marker" />
          </svg>
        </div>
      </div>

      <div className="location-list">
        {locations.map((location, index) => (
          <div key={index} className="location-item">
            <div className="location-info">
              <span className="location-name">{location.name}</span>
              <span className="location-revenue">{location.revenue}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${location.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
