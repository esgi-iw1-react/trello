import React from 'react'

const LabelSmall = (props) => {
  
  return <div className={props.color + " px-2 py-1 font-semibold rounded text-white mr-2 text-sm"}>
    <span>{props.name}</span>
  </div>
  
};

export default LabelSmall;