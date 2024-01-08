import React from "react";
import "../Card/Card.css";
import Card1 from "../../images/card1.png";

const Card = ({ onSelectCard }) => {
  return (
    <div className="card__element">
      <img
        src={Card1}
        className="card__image"
        //onClick={() => onSelectCard()}
        //alt={item.name}
      />
      <div className="card__title">
        <h2 className="card__name">Spot</h2>
        <button
          //className=""
          type="button"
          //onClick={() => handleCardLikeClick(item)}
        ></button>
        <h3>City, State</h3>
      </div>
    </div>
    // ------------ card 2

    // -----------------------------------
  );
};

export default Card;
