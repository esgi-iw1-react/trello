import React, { useContext, useEffect, useRef } from 'react'
import CardContext from "../context/CardContext";
import Card from "./Card";

const CardList = () => {

  const context = useContext(CardContext);
  const ref = useRef();
  
  useEffect( () => {
   context.listCard();
   ref.current = true
  }, []);
  
  return context.cards.map( (card, index) => <Card key={index} card={card}/>);
};

export default CardList