import React from 'react';
import { useSelector } from 'react-redux';
import StatsCard from '../Cards/StatsCard';
import RevenueChart from '../Charts/RevenueChart';
import ProjectionChart from '../Projection/ProjectionChart';
import Location from '../Location/Location';
import Sales from '../Sales/Sales';
import TotalSales from '../TotalSales/TotalSales';
import './Ecommerce.css';
import { selectStats } from '../../store/slices/ecommerceSlice';

const Ecommerce = () => {
  const stats = useSelector(selectStats);

  return (
    <div className="ecommerce">
      <div className="ecommerce-header">
        <h1 className="ecommerce-title">eCommerce</h1>
      </div>
      <div className="first-row">
      <div className="stats-grid">
        {stats.map((stat, index) => {
          const fixedColorClass = (stat.title === 'Customers' || stat.title === 'Growth') ? 'fixed-colors' : '';
          return (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              trend={stat.trend}
              trendValue={stat.trendValue}
              background={stat.background}
              className={fixedColorClass}
            />
          );
        })}
        </div>
        <ProjectionChart />
      </div>
      <div className="second-row">
          <RevenueChart />
          <Location />
      </div>
      <div className="third-row">
          <Sales />
          <TotalSales />
      </div>
    </div>
  );
};

export default Ecommerce;
