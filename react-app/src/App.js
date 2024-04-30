import { useState } from 'react';
import './App.css';
import { MyModal } from './components/task1';

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = () => {
    setIsModalOpen(true);
  }

  const onCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="app">
      {!isModalOpen && (
        <div className="btn-container">
          <button className="btn btn-success" onClick={onOpenModal}>
            Open Modal
          </button>
        </div>
      )}

      {isModalOpen && (
        <MyModal 
          onClose={onCloseModal} 
          disableGlobalScroll={true} 
        >
          <h1>This is modal</h1>

          <p>
            You can put here any content you want. To close this modal just click on backdrop
            or click on the Close button!
          </p>
        </MyModal>
      )}
    </div>
  );
}
