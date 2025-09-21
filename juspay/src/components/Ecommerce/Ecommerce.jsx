import React from 'react';
import StatsCard from '../Cards/StatsCard';
import RevenueChart from '../Charts/RevenueChart';
import ProjectionChart from '../Projection/ProjectionChart';
import Location from '../Location/Location';
import Sales from '../Sales/Sales';
import TotalSales from '../TotalSales/TotalSales';
import './Ecommerce.css';

const Ecommerce = () => {
  const stats = [
    {
      title: 'Customers',
      value: '3,781',
      trend: true,
      trendValue: '11.01',
      background: 'var(--Primary-Blue, #E3F5FF)'
    },
    {
      title: 'Orders',
      value: '1,219',
      trend: true,
      trendValue: '-0.03',
      background: 'var(--Primary-Purple, #F7F9FB)'
    },
    {
      title: 'Revenue',
      value: '$695',
      trend: true,
      trendValue: '15.03',
      background: 'var(--Primary-Green, #F7F9FB)'
    },
    {
      title: 'Growth',
      value: '30.1%',
      trend: true,
      trendValue: '6.08',
      background: 'var(--Primary-Yellow, #E5ECF6)'
    }
  ];

  return (
    <div className="ecommerce">
      <div className="first-row">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            trendValue={stat.trendValue}
            background={stat.background}
          />
        ))}
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
