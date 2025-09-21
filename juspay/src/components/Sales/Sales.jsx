import React from 'react';
import './Sales.css';

const Sales = () => {
  const products = [
    {
      name: 'ASOS Ridley High Waist',
      price: '$79.49',
      quantity: 82,
      amount: '$6,518.18'
    },
    {
      name: 'Marco Lightweight Shirt',
      price: '$128.50',
      quantity: 37,
      amount: '$4,754.50'
    },
    {
      name: 'Half Sleeve Shirt',
      price: '$39.99',
      quantity: 64,
      amount: '$2,559.36'
    },
    {
      name: 'Lightweight Jacket',
      price: '$20.00',
      quantity: 184,
      amount: '$3,680.00'
    },
    {
      name: 'Marco Shoes',
      price: '$79.49',
      quantity: 64,
      amount: '$1,965.81'
    }
  ];

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
