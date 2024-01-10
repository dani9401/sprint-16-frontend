import "../ViewCardModal/ViewCardModal.css";

const ViewCardModal = ({ selectedCard, onClose }) => {
  //need specific info from api to pass into fields below

  return (
    <div className={`modal`}>
      <div className="modal__container-image">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button-white"
        ></button>
        <img
          src={selectedCard.imageUrl}
          className="modal__image-preview"
          alt={selectedCard.name}
        ></img>
        <div className="modal__item-name">{selectedCard.name}</div>
      </div>
    </div>
  );
};

export default ViewCardModal;
