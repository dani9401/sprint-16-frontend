import "../Card/Card.css";

const Card = () => {
  return (
    <div className="card__element">
      <img
        //src={item.imageUrl}
        className="card__image"
        // onClick={() => onSelectCard(item)}
        //alt={item.name}
      />
      <div className="card__title">
        <h2 className="card__name">Item Name</h2>
        <button
          //className=""
          type="button"
          //onClick={() => handleCardLikeClick(item)}
        ></button>
      </div>
    </div>
  );
};

export default Card;
