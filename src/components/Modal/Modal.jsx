import "./modal.css";
import { Children, useEffect } from "react";

const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div
      className="modal-container"
      onClick={() => {
        toggleModal(false);
      }}
    >
      <div
        className="modal-content"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          className="leave-button"
          onClick={() => {
            toggleModal(false);
          }}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
