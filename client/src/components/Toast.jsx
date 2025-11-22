import React, { useEffect } from 'react';

const Toast = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`toast-container position-fixed top-0 end-0 p-3`}
      style={{ zIndex: 9999 }}
    >
      <div
        className={`toast show align-items-center text-white bg-${
          type === 'success' ? 'success' : 'danger'
        } border-0`}
        role="alert"
      >
        <div className="d-flex">
          <div className="toast-body">{message}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Toast;

