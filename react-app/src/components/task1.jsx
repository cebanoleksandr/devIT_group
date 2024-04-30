import { useEffect } from 'react';
import './task1.css';

export const MyModal = ({ onClose, disableGlobalScroll, children }) => {
  useEffect(() => {
    if (disableGlobalScroll) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [disableGlobalScroll]);

  return (
    <div className="modal-container">
      <div className="backdrop" onClick={onClose} />

      <dialog open className="modal">
        {children}
        <div className="text-right">
          <button className="btn btn-danger" onClick={onClose}>
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
}
