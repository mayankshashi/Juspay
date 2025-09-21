import React from 'react';
import { useSelector } from 'react-redux';
import './Sales.css';
import { selectSales } from '../../store/slices/ecommerceSlice';

const Sales = () => {
  const salesData = useSelector(selectSales);
  const products = salesData.recentSales;

  return (
      <div className="sales-card">
      <h3 className="sales-title">Top Selling Products</h3>
      
      <div className="table-container">
        <table className="products-table">
          <thead>
            <tr className="table-header">
              <th className="name-column">Name</th>
              <th className="price-column">Price</th>
              <th className="quantity-column">Quantity</th>
              <th className="amount-column">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="table-row">
                <td className="name-column">{product.name}</td>
                <td className="price-column">{product.price}</td>
                <td className="quantity-column">{product.quantity}</td>
                <td className="amount-column">{product.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;
