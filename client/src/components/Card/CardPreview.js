import React from 'react'
import LabelSmall from "../Label/LabelSmall";
import { Route, Link } from "react-router-dom";
import Card from "./Card";
import { Draggable } from "react-beautiful-dnd";
import UserAvatar from "../User/UserAvatar";

const CardPreview = ({ card, list, index }) => {
  return <>
    <Draggable draggableId={'draggable-'+card._id} index={index}>
      {provided => (
        <Link to={"/card/"+card._id}>
          <div className="cursor-pointer bg-gray-100 mb-6 shadow p-4"
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
            <div className="flex mt-2 justify-end">
              {
                card.users.map((user, index) => { return <UserAvatar key={index} username={user.username.charAt(0).toUpperCase()}/>   })
              }
            </div>
          </div>
        </Link>
      )}
    </Draggable>
    <Route path={"/card/"+card._id} render={(props) => <Card {...props} card={card} list={list} />}/>
  </>
  
};

export default CardPreview;