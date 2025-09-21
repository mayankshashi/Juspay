import React from 'react';
import { useSelector } from 'react-redux';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Projection.css';
import { selectProjection } from '../../store/slices/ecommerceSlice';

const ProjectionChart = () => {
  const projection = useSelector(selectProjection);
  
  const data = projection.data.map(item => ({
    month: item.month,
    projected: item.projected,
    actual: item.actual
  }));

  return (
    <div className="projection-chart">
      <div className="projection-header">
        <h3 className="projection-title">Projections vs Actuals</h3>
      </div>
      <div className="projection-container">
        <ResponsiveContainer width="100%" height={175}>
          <ComposedChart 
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            barGap={-24}
          >
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
              dataKey="projected"
              barSize={24}
              fill="#E5ECF6"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="actual"
              barSize={24}
              fill="#A8C5DA"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectionChart;
