import "./EditModal.scss";
import CloseX from "../assets/icons/close-x.svg";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="edit-modal">
        <div className="edit-modal__header">
          <h1 className="edit-modal__title">Update training maxes</h1>
          <img src={CloseX} alt="Close X" onClick={handleClose} />
        </div>
        <form className="edit-modal__form" action="">
          <label className="edit-modal__form--wrapper">
            <p className="edit-modal__form--text">Squat</p>
            <input type="text" className="edit-modal__form--input"></input>
            <span className="edit-modal__form--inputSpan">lbs</span>
          </label>
          <label className="edit-modal__form--wrapper">
            <p className="edit-modal__form--text">Bench</p>
            <input type="text" className="edit-modal__form--input"></input>
            <span className="edit-modal__form--inputSpan">lbs</span>
          </label>
          <label className="edit-modal__form--wrapper">
            <p className="edit-modal__form--text">Deadlift</p>
            <input type="text" className="edit-modal__form--input"></input>
            <span className="edit-modal__form--inputSpan">lbs</span>
          </label>
        </form>
        <div className="edit-button__container">
          <button className="edit-button" type="button" onClick={handleClose}>
            Cancel
          </button>
          <button
            className="edit-button edit-button--green"
            type="button"
            onClick={handleClose}
          >
            Update
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
