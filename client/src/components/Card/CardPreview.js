import React from 'react'
import LabelSmall from "../Label/LabelSmall";
import { Route, Link } from "react-router-dom";
import Card from "./Card";
import { Draggable } from "react-beautiful-dnd";

const CardPreview = ({ card, list, index }) => {
  return <>
    <Draggable draggableId={'draggable-'+card.id} index={index}>
      {provided => (
        <Link to={"/card/"+card.id}>
          <div className="cursor-pointer bg-gray-100 w-64 mb-6 shadow p-4"
               {...provided.dragHandleProps}
               {...provided.draggableProps}
               ref={provided.innerRef}
          >
            <div className="flex mb-3">
              {
                card.labels.map( (label, index) => <LabelSmall key={index} name={label.name} color={label.color} /> )
              }
            </div>
            <p className="text-gray-700 font-semibold">{card.title}</p>
          </div>
        </Link>
      )}
    </Draggable>
    <Route path={"/card/"+card.id} render={(props) => <Card {...props} card={card} list={list} />}/>
  </>
  
};

export default CardPreview;