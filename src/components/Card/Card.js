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
      <div className="card__info">
        <h2 className="card__name">{item.name}</h2>
        <h3 className="card__details">
          {item.age} / {item.gender} / {item.breed}
        </h3>
        <p className="card__short-description">
          Description goes here Description goes here Description goes here
          Description goes here Description goes here Description goes here
          Description goes here Description goes here
        </p>
      </div>
    </div>
  );
};

export default Card;
