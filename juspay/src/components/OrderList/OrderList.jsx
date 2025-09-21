import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './OrderList.css';
import AddIcon from '../../assets/Add.svg';
import ArrowsDownUpIcon from '../../assets/ArrowsDownUp.svg';
import FunnelSimpleIcon from '../../assets/FunnelSimple.svg';
import SearchIcon from '../../assets/Search.svg';
import ClipboardIcon from '../../assets/ClipboardText.svg';
import DotsThreeVerticalIcon from '../../assets/DotsThreeOutlineVertical.svg';
import CalendarBlankIcon from '../../assets/CalendarBlank.svg';
import AddOrder from '../AddOrder/AddOrder';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';
import {
  selectOrders,
  selectSelectedOrders,
  selectSearchTerm,
  selectCurrentPage,
  setOrders,
  addOrder,
  updateOrder,
  deleteOrder,
  setSelectedOrders,
  setSearchTerm,
  setCurrentPage,
} from '../../store/slices/orderSlice';

const INITIAL_ORDERS = [
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
  // ... other initial orders
];

const OrderList = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const selectedOrders = useSelector(selectSelectedOrders);
  const searchTerm = useSelector(selectSearchTerm);
  const currentPage = useSelector(selectCurrentPage);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMoreClick = (e, order) => {
    e.stopPropagation();
    setShowDropdown(showDropdown === order.id ? null : order.id);
    setSelectedOrder(order);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowAddModal(true);
    setShowDropdown(null);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
    setShowDropdown(null);
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteOrder(selectedOrder.id));
    setShowDeleteModal(false);
    setSelectedOrder(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return '#8A8CD9';
      case 'Complete': return '#4AA785';
      case 'Pending': return '#59A8D4';
      case 'Approved': return '#FFC555';
      case 'Rejected': return 'var(--black-40, rgba(28, 28, 28, 0.40))';
      default: return 'var(--black-40, rgba(28, 28, 28, 0.40))';
    }
  };

  const handleSelectAll = () => {
    if (selectedOrders.size === orders.length) {
      dispatch(setSelectedOrders(new Set()));
    } else {
      dispatch(setSelectedOrders(new Set(orders.map(order => order.id))));
    }
  };

  const handleSelectOrder = (orderId) => {
    const newSelected = new Set(selectedOrders);
    if (newSelected.has(orderId)) {
      newSelected.delete(orderId);
    } else {
      newSelected.add(orderId);
    }
    dispatch(setSelectedOrders(newSelected));
  };

  const filteredOrders = orders.filter(order => {
    const searchTermLower = searchTerm.toLowerCase().trim();
    if (!searchTermLower) return true;

    return (
      order.id.toLowerCase().includes(searchTermLower) ||
      order.user.name.toLowerCase().includes(searchTermLower) ||
      order.project.toLowerCase().includes(searchTermLower) ||
      order.address.toLowerCase().includes(searchTermLower) ||
      order.status.toLowerCase().includes(searchTermLower) ||
      order.date.toLowerCase().includes(searchTermLower)
    );
  });

  const totalPages = Math.ceil(filteredOrders.length / 10);
  const startIndex = (currentPage - 1) * 10;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + 10);

  return (
    <div className="order-list-container">
      <div className="order-list-header">
        <h1 className="order-list-title">Order List</h1>
      </div>

      <div className="order-list-actions">
        <div className="action-buttons">
          <button className="action-btn" onClick={() => setShowAddModal(true)}>
            <img src={AddIcon} alt="Add" className="nav-icon" />
          </button>
          <button className="action-btn">
            <img src={FunnelSimpleIcon} alt="Filter" className="nav-icon" />
          </button>
          <button className="action-btn">
            <img src={ArrowsDownUpIcon} alt="Sort" className="nav-icon" />
          </button>
        </div>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <img src={SearchIcon} alt="Search" className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => {
                dispatch(setSearchTerm(e.target.value));
              }}
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
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    checked={selectedOrders.size === orders.length && orders.length > 0}
                    onChange={handleSelectAll}
                    className="checkbox"
                  />
                  <span className="column-label">Order ID</span>
                </div>
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
              <tr key={order.id}>
                <td className="checkbox-column">
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      checked={selectedOrders.has(order.id)}
                      onChange={() => handleSelectOrder(order.id)}
                      className="checkbox hover-element"
                    />
                    <span className="order-id">#{order.id}</span>
                  </div>
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
                    <img src={ClipboardIcon} alt="Copy" className="hover-icon clipboard-icon" />
                  </div>
                </td>
                <td className="date-cell">
                  <div className="date-content">
                    <img src={CalendarBlankIcon} alt="Calendar" className="calendar-icon" />
                    <span>{order.date}</span>
                  </div>
                </td>
                <td className="status-cell">
                  <div 
                    className="status-content"
                    style={{ color: getStatusColor(order.status) }}
                  >
                    <div 
                      className="status-dot" 
                      style={{ backgroundColor: getStatusColor(order.status) }}
                    ></div>
                    <span className="status-text">{order.status}</span>
                    <div className="more-options" ref={showDropdown === order.id ? dropdownRef : null}>
                      <img 
                        src={DotsThreeVerticalIcon} 
                        alt="More" 
                        className="hover-icon more-icon" 
                        onClick={(e) => handleMoreClick(e, order)}
                      />
                      {showDropdown === order.id && (
                        <div className="dropdown-menu">
                          <button onClick={handleEdit}>Edit</button>
                          <button onClick={handleDelete}>Delete</button>
                        </div>
                      )}
                    </div>
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
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                className={`pagination-number ${pageNum === currentPage ? 'active' : ''}`}
                onClick={() => dispatch(setCurrentPage(pageNum))}
              >
                {pageNum}
              </button>
            );
          })}
          
          <button 
            className="pagination-btn"
            disabled={currentPage === totalPages}
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {showAddModal && (
        <AddOrder
          onClose={() => {
            setShowAddModal(false);
            setIsEditing(false);
            setSelectedOrder(null);
          }}
          onAdd={(orderData) => {
            if (isEditing) {
              dispatch(updateOrder({ ...orderData, id: selectedOrder.id }));
            } else {
              dispatch(addOrder(orderData));
            }
            setIsEditing(false);
            setSelectedOrder(null);
          }}
          initialData={selectedOrder}
          isEditing={isEditing}
        />
      )}

      {showDeleteModal && (
        <DeleteConfirmation
          orderId={selectedOrder?.id}
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedOrder(null);
          }}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
};

export default OrderList;
