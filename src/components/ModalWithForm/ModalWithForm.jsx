import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <form className="modal__form">
        <h2 className="modal__title">New garment</h2>
        <button type="button" className="modal__close">
          CLOSE
        </button>
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="modal__radio-btns">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input type="radio" className="modal__radio-input" />
          </label>
          <label htmlFor="warm" className="modal__label modal__label_type_radio">
            <input type="radio" className="modal__radio-input" />
          </label>
          <label htmlFor="cold" className="modal__label modal__label_type_radio">
            <input type="radio" className="modal__radio-input" />
          </label>
        </fieldset>
      </form>
    </div>
  );
}

export default ModalWithForm;
