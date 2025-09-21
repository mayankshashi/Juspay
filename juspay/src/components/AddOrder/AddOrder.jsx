import React, { useState } from 'react';
import './AddOrder.css';

const AddOrder = ({ onClose, onAdd, initialData, isEditing }) => {
  const [formData, setFormData] = useState(
    initialData || {
      id: '',
      user: { name: '', avatarKey: 'user' },
      project: '',
      address: '',
      date: 'Just now',
      status: 'Pending'
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'id') {
      // Only allow numbers
      const numbersOnly = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numbersOnly
      }));
    } else if (name === 'userName') {
      setFormData(prev => ({
        ...prev,
        user: { ...prev.user, name: value }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    onClose();
  };

  return (
    <div className="add-order-overlay">
      <div className="add-order-modal">
        <div className="modal-header">
          <h2>{isEditing ? 'Edit Order' : 'Add New Order'}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">Order ID</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="Enter Order ID (numbers only)"
              pattern="[0-9]*"
              inputMode="numeric"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.user.name}
              onChange={handleChange}
              placeholder="Enter User Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="project">Project</label>
            <input
              type="text"
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              placeholder="Enter Project Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              {isEditing ? 'Save Changes' : 'Add Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrder;
