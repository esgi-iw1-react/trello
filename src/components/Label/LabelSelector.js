import React, { useState } from 'react'
import Label from "./Label";

const LabelSelector = (props) =>{
  
  const [labels, setLabels] = useState(
    [
      { name: 'Admin', color: 'bg-yellow-500' , selected: false},
      { name: 'Front', color: 'bg-red-500' , selected: false},
      { name: 'Debug', color: 'bg-green-500' , selected: true},
      { name: 'Back', color: 'bg-purple-500' , selected: false},
      { name: 'Test', color: 'bg-blue-500' , selected: true}
    ]
  );
  
  return (
    <div className="p-4 bg-white shadow absolute top-auto right-0 z-10 w-56">
      <div className="flex flex-col w-full">
        {
          labels.map( (label, index) => { return <Label key={index} name={label.name}
                                                        color={label.color} selected={label.selected}
                                                        card={props.card}
          /> })
        }
      </div>
    </div>
  )
  
};

export default LabelSelector;

