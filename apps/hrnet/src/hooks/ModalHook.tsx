import React from "react";
import { useState } from "react";
import Modal from "modal";

export interface UseModalApi {
  openModal: (message: string, onCloseCallback?: () => void) => void;
  closeModal: () => void;
  modalComponent: JSX.Element;
}

export const useModal = (): UseModalApi => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [onCloseCallback, setOnCloseCallback] = useState<(() => void) | null>(
    null
  );

  const openModal = (message: string, onCloseCallback?: () => void): void => {
    setMessage(message);
    setIsOpen(true);
    setOnCloseCallback(() => onCloseCallback || null);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    if (onCloseCallback) {
      onCloseCallback();
    }
  };

  const modalComponent = (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h2>{message}</h2>
      <button onClick={closeModal}>Fermer</button>
    </Modal>
  );

  return { openModal, closeModal, modalComponent };
};
