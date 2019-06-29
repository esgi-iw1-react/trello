import React from 'react'
import CardPreview from "./CardPreview";

const CardList = (props) => {
  const { id, name, cards } = props.list;
  return <div className="flex flex-col p-6 mr-2 bg-gray-200">
      <p className="font-bold uppercase text-blue-700 mb-4">{name}</p>
      {
        cards.map( (card, index) => <CardPreview key={index} card={card}/>)
      }
  </div>
};

export default CardList