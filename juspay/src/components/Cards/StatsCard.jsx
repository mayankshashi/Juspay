import React from 'react';
import './Card.css';
import ArrowRise from '../../assets/ArrowRise.svg';
import ArrowFall from '../../assets/ArrowFall.svg';

const StatsCard = ({ title, value, trend, trendValue, className, background }) => {
  const isTrendPositive = parseFloat(trendValue) >= 0;
  
  return (
    <div className={`card ${className}`} style={{ background: background }}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-value-container">
      <h2 className="card-value">{value}</h2>
      {trend && (
          <div className={`card-trend ${isTrendPositive ? 'positive' : 'negative'}`}>
            <img 
              src={isTrendPositive ? ArrowRise : ArrowFall} 
              alt={isTrendPositive ? 'Rise' : 'Fall'} 
              className="trend-icon"
            />
            {isTrendPositive ? '+' : '-'}{Math.abs(trendValue)}%
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
