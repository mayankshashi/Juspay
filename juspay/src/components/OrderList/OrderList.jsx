import React, { useState } from 'react';
import './OrderList.css';

const OrderList = () => {
  const [selectedOrders, setSelectedOrders] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const orders = [
    {
      id: 'CM9801',
      user: { name: 'Natali Craig', avatar: '/src/assets/Female05.png' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'In Progress'
    },
    {
      id: 'CM9802',
      user: { name: 'Kate Morrison', avatar: '/src/assets/Female08.png' },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'Complete'
    },
    {
      id: 'CM9803',
      user: { name: 'Drew Cano', avatar: '/src/assets/Male06.png' },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'Pending'
    },
    {
      id: 'CM9804',
      user: { name: 'Orlando Diggs', avatar: '/src/assets/Male07.png' },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'Approved'
    },
    {
      id: 'CM9805',
      user: { name: 'Andi Lane', avatar: '/src/assets/Female09.png' },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: 'Rejected'
    },
    {
      id: 'CM9806',
      user: { name: 'Sarah Wilson', avatar: '/src/assets/Female15.png' },
      project: 'Mobile App',
      address: 'Main Street Boston',
      date: 'Feb 1, 2023',
      status: 'In Progress'
    },
    {
      id: 'CM9807',
      user: { name: 'John Smith', avatar: '/src/assets/Male08.png' },
      project: 'Website Redesign',
      address: 'Oak Avenue Chicago',
      date: 'Jan 30, 2023',
      status: 'Complete'
    },
    {
      id: 'CM9808',
      user: { name: 'Emily Davis', avatar: '/src/assets/Female05 (1).png' },
      project: 'E-commerce Platform',
      address: 'Pine Street Seattle',
      date: 'Jan 28, 2023',
      status: 'Pending'
    },
    {
      id: 'CM9809',
      user: { name: 'Michael Brown', avatar: '/src/assets/Male11.png' },
      project: 'Analytics Dashboard',
      address: 'Cedar Lane Miami',
      date: 'Jan 25, 2023',
      status: 'Approved'
    },
    {
      id: 'CM9810',
      user: { name: 'Lisa Johnson', avatar: '/src/assets/Female08.png' },
      project: 'Portfolio Site',
      address: 'Elm Street Denver',
      date: 'Jan 22, 2023',
      status: 'In Progress'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return '#3B82F6';
      case 'Complete': return '#10B981';
      case 'Pending': return '#06B6D4';
      case 'Approved': return '#F59E0B';
      case 'Rejected': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const handleSelectAll = () => {
    if (selectedOrders.size === orders.length) {
      setSelectedOrders(new Set());
    } else {
      setSelectedOrders(new Set(orders.map(order => order.id)));
    }
  };

  const handleSelectOrder = (orderId) => {
    const newSelected = new Set(selectedOrders);
    if (newSelected.has(orderId)) {
      newSelected.delete(orderId);
    } else {
      newSelected.add(orderId);
    }
    setSelectedOrders(newSelected);
  };

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / 10);
  const startIndex = (currentPage - 1) * 10;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + 10);

  return (
    <div className="order-list-container">
      <div className="order-list-header">
        <h1 className="order-list-title">Order List</h1>
        
        <div className="order-list-actions">
          <div className="action-buttons">
            <button className="action-btn add-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="action-btn filter-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4H14M4 8H12M6 12H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="action-btn sort-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 2L12 6M4 10L8 14L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="search-container">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="2"/>
              <path d="M13 13L10.1 10.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="order-table-container">
        <table className="order-table">
          <thead>
            <tr>
              <th className="checkbox-column">
                <input
                  type="checkbox"
                  checked={selectedOrders.size === orders.length && orders.length > 0}
                  onChange={handleSelectAll}
                  className="checkbox"
                />
                <span className="column-label">Order ID</span>
              </th>
              <th>User</th>
              <th>Project</th>
              <th>Address</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order, index) => (
              <tr key={order.id} className={index === 4 ? 'highlighted-row' : ''}>
                <td className="checkbox-column">
                  <input
                    type="checkbox"
                    checked={selectedOrders.has(order.id)}
                    onChange={() => handleSelectOrder(order.id)}
                    className="checkbox"
                  />
                  <span className="order-id">#{order.id}</span>
                </td>
                <td className="user-cell">
                  <div className="user-info">
                    <div className="user-avatar">
                      <img src={order.user.avatar} alt={order.user.name} />
                    </div>
                    <span className="user-name">{order.user.name}</span>
                  </div>
                </td>
                <td className="project-cell">{order.project}</td>
                <td className="address-cell">
                  <div className="address-content">
                    <span>{order.address}</span>
                    {order.id === 'CM9805' && (
                      <svg className="clipboard-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <rect x="2" y="2" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1"/>
                        <path d="M4 1V3M8 1V3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                </td>
                <td className="date-cell">
                  <div className="date-content">
                    <svg className="calendar-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect x="1" y="2" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1"/>
                      <path d="M1 4H11" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="3" cy="1" r="0.5" fill="currentColor"/>
                      <circle cx="9" cy="1" r="0.5" fill="currentColor"/>
                    </svg>
                    <span>{order.date}</span>
                  </div>
                </td>
                <td className="status-cell">
                  <div className="status-content">
                    <div 
                      className="status-dot" 
                      style={{ backgroundColor: getStatusColor(order.status) }}
                    ></div>
                    <span className="status-text">{order.status}</span>
                    {order.status === 'Rejected' && (
                      <svg className="more-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="2" r="1" fill="currentColor"/>
                        <circle cx="6" cy="6" r="1" fill="currentColor"/>
                        <circle cx="6" cy="10" r="1" fill="currentColor"/>
                      </svg>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-container">
        <div className="pagination">
          <button 
            className="pagination-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M7.5 3L4.5 6L7.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                className={`pagination-number ${pageNum === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}
          
          <button 
            className="pagination-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
