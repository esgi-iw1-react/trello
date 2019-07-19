import React, { useState, useContext } from 'react'
import CardContext from "../../context/CardContext";

const Label = (props) => {
  
  const [name, setName] = useState(props.name);
  const [selected, setSelected] = useState(props.selected);
  const [color] = useState(props.color);
  const [edit, setEdit] = useState(false);
  const context = useContext(CardContext);
  
  
  const check = (e) => {
    e.preventDefault();
    setSelected(!selected);
    const label = { _id: props.id, name, selected, color };
    if(!selected){
      context.addLabel(label, props.card, props.list)
    } else {
      context.removeLabel(label, props.card, props.list)
    }
  };
  
  const toggleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };
  
  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(!edit);
    context.editLabel({_id: props.id, name, selected, color }, props.card, props.list);
  };
  
  return <div className="flex items-center">
        {edit ?
        <form onSubmit={handleSubmit}>
          <input className="text-gray-900 z-20 w-full" type="text" value={name} onChange={handleChange}/>
          <label>
            <input type="submit" className="hidden" id="submit"/>
          </label>
        </form>
            :
          <>
        <div onClick={check} className={color + " cursor-pointer px-2 py-1 font-semibold rounded text-white my-2 mr-2 text-sm flex justify-between w-full h-8 items-center"}>
            <span>{name}</span>
          {selected ? <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="20" width="20" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg> : ''}
        </div>
        <svg onClick={toggleEdit} height="25" width="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="edit"><rect width="24" height="24" opacity="0"/><path d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z"/></g></g></svg>
        </>
        }
      </div>
  
  
};

export default Label;