import React from 'react'
import CardPreview from "./CardPreview";
import { BrowserRouter as Router } from "react-router-dom";
import AddCardBtn from "./AddCardBtn";
import { Droppable } from "react-beautiful-dnd";

const CardList = (props) => {
  const { _id, name, cards} = props.list;
  return <>
  <Droppable droppableId={'droppable-'+props.index}>
    {provided => (
      <>
      <div className="flex flex-col p-6 mr-2 bg-gray-200 rounded w-88" {...provided.droppableProps} ref={provided.innerRef}>
        <p className="font-bold uppercase text-blue-700 mb-4">{name} - {_id}</p>
        <Router>
          {cards.map((card, index) => <CardPreview index={index} key={index} card={card} list={props.list}/>)}
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