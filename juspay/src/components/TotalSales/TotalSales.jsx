import React from 'react';
import { useSelector } from 'react-redux';
import './TotalSales.css';
import { selectSales } from '../../store/slices/ecommerceSlice';

const TotalSales = () => {
  const salesData = useSelector(selectSales);
  const totalSalesData = [
    { name: 'Direct', value: parseFloat(salesData.totalSales.daily.replace('$', '').replace(',', '')), color: '#1C1C1C' },
    { name: 'Affiliate', value: parseFloat(salesData.totalSales.weekly.replace('$', '').replace(',', '')) / 7, color: '#BAEDBD' },
    { name: 'Sponsored', value: parseFloat(salesData.totalSales.monthly.replace('$', '').replace(',', '')) / 30, color: '#95A4FC' },
    { name: 'E-mail', value: salesData.recentSales.reduce((sum, sale) => sum + parseFloat(sale.amount.replace('$', '').replace(',', '')), 0), color: '#B1E3FF' }
  ];

  const totalValue = totalSalesData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="totalsales-card">
      <h3 className="totalsales-title">Total Sales</h3>
      
      <div className="chart-container">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="120" 
          height="120" 
          viewBox="0 0 120 120" 
          fill="none"
          className="pie-chart-svg"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M104.67 19.9323C100.925 15.7481 94.5123 15.406 90.3471 19.1681C86.1819 22.9302 85.8413 29.372 89.5863 33.5562C95.8916 40.6008 99.716 49.895 99.716 60.1106C99.716 75.22 91.3208 88.3596 78.9606 95.079C82.633 96.7797 85.5611 100.036 86.7152 104.261C87.6888 107.824 87.2271 111.443 85.6819 114.496C105.965 104.874 120 84.139 120 60.1106C120 44.6722 114.193 30.5722 104.67 19.9323Z" 
            fill="#1C1C1C"
          />
          <path 
            d="M36.9919 27.4926C43.3946 23.0062 51.17 20.3765 59.5872 20.3765C68.0044 20.3765 75.7798 23.0062 82.1825 27.4926C82.3342 27.5989 82.4878 27.7005 82.6431 27.7973C82.333 23.5486 83.9129 19.2063 87.3104 16.1376C89.73 13.9521 92.6914 12.756 95.7029 12.5229C95.1532 11.8765 94.5135 11.2892 93.787 10.7801C84.0906 3.98588 72.2871 0 59.5872 0C46.8873 0 35.0837 3.98588 25.3874 10.7801C20.7933 13.9992 19.6668 20.35 22.8713 24.9651C26.0758 29.5801 32.3978 30.7117 36.9919 27.4926Z" 
            fill="#95A4FC"
          />
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M17.012 18.3464C16.3669 18.7926 15.7633 19.3215 15.2167 19.9323C10.6472 25.0376 6.93133 30.94 4.30199 37.4135C2.18591 42.6233 4.67475 48.57 9.86095 50.6957C15.0472 52.8214 20.9668 50.3212 23.0829 45.1114C24.8159 40.8446 27.2707 36.941 30.3003 33.5562C30.352 33.4983 30.403 33.4401 30.4532 33.3814C26.2304 33.1581 22.1505 31.0504 19.5439 27.2965C17.6539 24.5746 16.8401 21.4214 17.012 18.3464Z" 
            fill="#B1E3FF"
          />
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M1.81254 47.2352C3.26614 50.4037 5.87327 53.047 9.34258 54.469C13.1587 56.0332 17.2585 55.8083 20.7197 54.1839C20.4333 56.1122 20.2841 58.0908 20.2841 60.1106C20.2841 72.9641 26.3595 84.3921 35.7831 91.6548C36.2843 91.894 36.7726 92.1779 37.2428 92.5074C43.6455 96.9938 51.4209 99.6235 59.8382 99.6235C63.4875 99.6235 67.0059 99.1297 70.3383 98.2109C75.7398 96.7216 81.3205 99.9131 82.803 105.339C84.2856 110.765 81.1086 116.371 75.7071 117.861C70.6418 119.257 65.3183 120 59.8382 120C56.1352 120 52.5085 119.661 48.988 119.013C49.0629 119.102 49.1388 119.19 49.2158 119.277C21.2354 114.241 0 89.6672 0 60.1106C0 56.7798 0.270663 53.505 0.793098 50.3091C0.973374 49.2063 1.32363 48.1741 1.81254 47.2352Z" 
            fill="#BAEDBD"
          />
        </svg>
        <div className="chart-center-label">
          <span className="percentage">38.6%</span>
        </div>
      </div>

      <div className="sales-legend">
        {totalSalesData.map((item, index) => (
          <div key={index} className="legend-item">
            <div 
              className="legend-dot" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="legend-name">{item.name}</span>
            <span className="legend-value">${item.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSales;
