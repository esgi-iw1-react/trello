import React from 'react'
import CardPreview from "./CardPreview";
import { BrowserRouter as Router } from "react-router-dom";
import AddCardBtn from "./AddCardBtn";
import { Droppable } from "react-beautiful-dnd";

const CardList = (props) => {
  const { id, name, cards } = props.list;
  return <>
  <Droppable droppableId={id}>
    {provided => (
      <>
      <div className="flex flex-col p-6 mr-2 bg-gray-200 rounded" {...provided.droppableProps} ref={provided.innerRef}>
        <p className="font-bold uppercase text-blue-700 mb-4">{name}</p>
        <Router>
          {cards.map((card, index) => <CardPreview key={index} card={card} list={props.list}/>)}
        </Router>
        {provided.placeholder}
        <AddCardBtn list={props.list}/>
      </div>
      </>
    )}
  </Droppable>
  </>
  
 };

export default CardList