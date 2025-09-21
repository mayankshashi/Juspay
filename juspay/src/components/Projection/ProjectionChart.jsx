import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Projection.css';

const ProjectionChart = () => {
  const data = [
    { month: 'Jan', value: 20, fill: '#A8C5DA', topFill: '#E5ECF6' },
    { month: 'Feb', value: 25, fill: '#A8C5DA', topFill: '#E5ECF6' },
    { month: 'Mar', value: 18, fill: '#A8C5DA', topFill: '#E5ECF6' },
    { month: 'Apr', value: 22, fill: '#A8C5DA', topFill: '#E5ECF6' },
    { month: 'May', value: 15, fill: '#A8C5DA', topFill: '#E5ECF6' },
    { month: 'Jun', value: 20, fill: '#A8C5DA', topFill: '#E5ECF6' }
  ];

  return (
    <div className="projection-chart">
      <div className="projection-header">
        <h3 className="projection-title">Projections vs Actuals</h3>
      </div>
      <div className="projection-container">
        <ResponsiveContainer width="100%" height={175}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid className="projection-grid" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ className: 'projection-axis' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ className: 'projection-axis' }}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
            />
            <Bar
              dataKey="value"
              radius={[4, 4, 0, 0]}
              barSize={24}
              shape={(props) => {
                const { x, y, width, height, fill } = props;
                const topHeight = height * 0.3;

                return (
                  <g>
                    {/* Main bar */}
                    {/* Main bar */}
                    <path
                      d={`
                        M ${x},${y + height}
                        L ${x},${y + topHeight}
                        L ${x + width},${y + topHeight}
                        L ${x + width},${y + height}
                        Z
                      `}
                      className="projection-bar-main"
                    />
                    {/* Top portion with rounded top corners */}
                    <path
                      d={`
                        M ${x},${y + topHeight}
                        L ${x},${y + 4}
                        Q ${x},${y} ${x + 4},${y}
                        L ${x + width - 4},${y}
                        Q ${x + width},${y} ${x + width},${y + 4}
                        L ${x + width},${y + topHeight}
                        Z
                      `}
                      className="projection-bar-top"
                    />
                  </g>
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectionChart;
