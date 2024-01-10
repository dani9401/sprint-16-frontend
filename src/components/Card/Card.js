import React from "react";
import "../Card/Card.css";

const Card = ({ onSelectCard, item }) => {
  return (
    <div className="card__element">
      <img
        src={item.imageUrl}
        className="card__image"
        onClick={() => onSelectCard(item)}
        alt={item.name}
      />
      <div className="card__title">
        <h2 className="card__name">{item.name}</h2>
        <h3>{item.breed}</h3>
      </div>
    </div>
  );
};

export default Card;
