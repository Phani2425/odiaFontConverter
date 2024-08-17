import React, { useState } from 'react';
import './Modal.css';

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  if (isNaN(date.getTime())) return 'Invalid Date'; // Check for invalid date
  return date.toLocaleString(); // Customize date format if needed
};


const Modal = ({ isOpen, onClose, history ,clearHistory}) => {
  const [activeEntryIndex, setActiveEntryIndex] = useState(null);

  if (!isOpen) return null;

  const handleClick = (index) => {
    setActiveEntryIndex(index === activeEntryIndex ? null : index);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Conversion History</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index} onClick={() => handleClick(index)}>
              <div className="history-preview">
                <span><strong>Raw:</strong> {entry.raw.substring(0, 20)}...</span>
                <span>{formatDate(entry.date)}</span>
              </div>
              {activeEntryIndex === index && (
                <div className="history-details">
                  <strong>Raw:</strong> {entry.raw}
                  <br />
                  <strong>Converted:</strong> {entry.converted}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className='but-grp'>
        <button onClick={onClose} className="modal-close-button">Close</button>
        <button className="button clear-history" onClick={clearHistory}>
          Clear All History
        </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
