import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  return createPortal(children);
};

export default Modal;
