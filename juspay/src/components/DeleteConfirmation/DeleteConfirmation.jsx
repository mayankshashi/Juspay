import React from 'react';
import './DeleteConfirmation.css';

const DeleteConfirmation = ({ onClose, onConfirm, orderId }) => {
  return (
    <div className="delete-confirmation-overlay">
      <div className="delete-confirmation-modal">
        <div className="modal-header">
          <h2>Delete Order</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-content">
          <p>Are you sure you want to delete order #{orderId}?</p>
          <p className="warning-text">This action cannot be undone.</p>
        </div>
        <div className="modal-actions">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="delete-button" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
