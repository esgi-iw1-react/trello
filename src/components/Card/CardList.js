import React from 'react'
import CardPreview from "./CardPreview";

const CardList = ({ name, cards }) => {
  
  return <div className="flex flex-col">
      <p>{name}</p>
      {
        cards.map( (card, index) => <CardPreview key={index} card={card}/>)
      }
  </div>
};

export default CardList