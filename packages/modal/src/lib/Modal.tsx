import React, { useState, useEffect } from "react";
import "./modal.css";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="blocker" onClick={handleClose}>
      <div className="modal">
        <button className="close-modal" onClick={closeModal}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
