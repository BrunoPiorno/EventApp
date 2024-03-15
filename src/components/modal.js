import './modal.css';

const Modal = ({ image, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={image} alt="Ampliada" />
      </div>
    </div>
  );
};

export default Modal;
