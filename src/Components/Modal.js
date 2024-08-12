// Modal.js
import React from 'react';
import './Modal.css'; // Import your modal styles

const Modal = ({ isOpen, onClose, history }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Conversion History</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              <strong>Raw:</strong> {entry.raw}
              <br />
              <strong>Converted:</strong> {entry.converted}
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="modal-close-button">Close</button>
      </div>
    </div>
  );
};

export default Modal;
