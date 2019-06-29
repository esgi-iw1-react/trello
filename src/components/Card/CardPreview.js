import React from 'react'
import LabelSmall from "../Label/LabelSmall";
import { Route, Link } from "react-router-dom";
import Card from "./Card";

const CardPreview = ({ card }) => {
  
  return <>
    <Link to={"/card/"+card.id}>
      <div className="cursor-pointer bg-gray-100 w-64 mb-6 shadow p-4">
        <div className="flex mb-3">
          {
            card.labels.map( (label, index) => <LabelSmall key={index} name={label.name} color={label.color} /> )
          }
        </div>
        <p className="text-gray-700 font-semibold">{card.title}</p>
      </div>
    </Link>
    <Route path={"/card/"+card.id} render={(props) => <Card {...props} card={card} />}/>
  </>
  
};

export default CardPreview;