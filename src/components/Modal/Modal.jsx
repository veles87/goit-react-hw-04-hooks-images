import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default function Modal(props) {
  useEffect(() => {
    window.addEventListener('keydown', handleOnKeyDown);
    return () => {
      window.removeEventListener('keydown', handleOnKeyDown);
    };
  });

  const handleOnKeyDown = event => {
    if (event.code === 'Escape') {
      props.closeModal();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      props.closeModal();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={props.largeImage} alt="" />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
