import React, { useState, useContext } from 'react'
import CardContext from "../../context/CardContext";

const CardTitle = (props) => {
  
  const [title, setTitle] = useState(props.title);
  const [edit, setEdit] = useState(false);
  const context = useContext(CardContext);
  
  const handleChange = (e) => {
    setTitle(e.target.value);
    setEdit(true);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    context.editTitle(title, props.card, props.list);
  };
  
  const toggleEdit = (e) => {
    e.preventDefault();
    setEdit(true);
  };
  
  if(title !== "" && !edit){
    return <h1 className="font-bold text-gray-900 text-sm text-xl" onClick={toggleEdit}>{title}</h1>
  } else {
    return <form onSubmit={handleSubmit}>
      <input type="text" className="w-full p-2"
                placeholder="Ajoutez un titre"
                onChange={handleChange}
                value={title}
      >
      </input>
    </form>
  }
  
};

export default CardTitle;