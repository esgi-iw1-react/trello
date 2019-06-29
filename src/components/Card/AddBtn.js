import React, { useContext } from 'react';
import CardContext from "../context/CardContext";

const AddBtn = (props) => {
  
  const context = useContext(CardContext);
  
  const handleClick = (e) => {
    e.preventDefault();
    context.addCard('', props.list);
  };
  
  return <>
    <button className="bg-blue-400 font-semibold inline-block p-2 rounded text-blue-900 w-auto" onClick={handleClick}>
      Ajouter une carte
    </button>
  </>
};

export default AddBtn;