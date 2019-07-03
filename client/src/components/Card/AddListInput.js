import React, { useState, useContext} from 'react';
import CardContext from "../../context/CardContext";

const AddListInput = (props) => {
  
  const [name, setName] = useState('');
  const context = useContext(CardContext);
  
  const handleChange = (e) => {
    setName(e.target.value);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    context.addList(name);
    const input = document.querySelector('#add-list-input');
    input.value = '';
    setName('');
  };
  
  return <form onSubmit={handleSubmit}>
    <input className="bg-orange-300 font-semibold inline-block p-3 rounded text-orange-900" id="add-list-input" type="text"
           value={name} placeholder="Ajouter une liste" onChange={handleChange}/>
  </form>
  
};

export default AddListInput;