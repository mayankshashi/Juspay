import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Charts.css';

const RevenueChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
  const data = [
    { month: 'Jan', current: 14, previous: 10 },
    { month: 'Feb', current: 10, previous: 19 },
    { month: 'Mar', current: 11, previous: 16 },
    { month: 'Apr', current: 16, previous: 12 },
    { month: 'May', current: 20, previous: 14 },
    { month: 'Jun', current: 21, previous: 22 }
  ];

  const currentWeek = {
    value: '$58,211'
  };

  const previousWeek = {
    value: '$68,768'
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
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#475467', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#475467', fontSize: 12 }}
              tickFormatter={(value) => `${value}M`}
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
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
