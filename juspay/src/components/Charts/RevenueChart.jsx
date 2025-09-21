import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Charts.css';
import { selectRevenue } from '../../store/slices/ecommerceSlice';

const RevenueChart = () => {
  const revenue = useSelector(selectRevenue);
  
  const data = revenue.monthlyData;

  const currentWeek = {
    value: revenue.totalRevenue
  };

  const previousWeek = {
    value: '$' + (parseFloat(revenue.totalRevenue.replace('$', '').replace(',', '')) * 0.9).toLocaleString()
  };

  return (
    <div className="revenue-chart-card">
      <div className="chart-header">
        <h3 className="chart-title">Revenue</h3>
        <div className="chart-separator"></div>
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-dot current"></span>
            <span>Current Week: {currentWeek.value}</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot previous"></span>
            <span>Previous Week: {previousWeek.value}</span>
          </div>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data} margin={{ top: 40, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="month" 
              tickLine={false}
              tick={{ fill: '#475467', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#475467', fontSize: 12 }}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#1C1C1C"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#A8C5DA"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
