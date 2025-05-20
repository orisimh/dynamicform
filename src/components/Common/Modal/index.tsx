import React from 'react';
import '../../../styles/Common/Modal/main.scss';
import { ModalProps } from '../../../types/Common/Modal';



const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data, modalHeader }) => {
  
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>{modalHeader}</h2>
        <div className="data-list">
                {Object.entries(data).map(([key, value]) => (
                    <div className="data-item" key={key}>
                    <strong>{key}</strong><span>{String(value)}</span>
                    </div>
                ))}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;