import "./ModalWithForm.css";
import closeIconGray from "../../assets/modal-close-icon-gray.svg";

function ModalWithForm({
  name,
  children,
  title,
  buttonText,
  activeModal,
  onClose,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${activeModal ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeIconGray}
            alt="Close Icon"
            className="modal__close-btn"
          />
        </button>
        <form className="modal__form" name={name}>
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
