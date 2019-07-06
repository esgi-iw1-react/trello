import React, { useState, useContext, useEffect, useRef } from 'react'
import Label from "./Label";
import CardContext from "../../context/CardContext";

const LabelSelector = (props) =>{
  
  const context = useContext(CardContext);
  const ref = useRef();
  
  useEffect( () => {
    context.fetchLabels();
    ref.current = true;
  }, []);
  
  if(context.labels.length > 0){
    const labelIds = props.card.labels.map(label => label._id);
    const labels = context.labels.map(label => {
      if(labelIds.includes(label._id)){
        label.selected = true;
      } else {
        label.selected = false;
      }
      return label;
    });
    return <div className="p-4 bg-white shadow absolute top-auto right-0 z-10 w-56">
        <div className="flex flex-col w-full">
          {
            labels.map( (label, index) => { return <Label key={index} id={label._id} name={label.name}
                                                          color={label.color}
                                                          card={props.card} list={props.list} selected={label.selected}
            /> })
          }
        </div>
      </div>
  } else {
    return <div>fuckk</div>
  }
  
};

export default LabelSelector;

