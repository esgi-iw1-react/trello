import React, {useState, useContext} from 'react'
import CardSubmitBtn from "./CardSubmitBtn";
import CardContext from "../../context/CardContext";

const CardDescription = (props) => {
  
  const [description, setDescription] = useState(props.description);
  const [edit, setEdit] = useState(false);
  const context = useContext(CardContext);
  
  const handleChange = (e) => {
    setEdit(true);
    setDescription(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    context.editDescription(description, props.card, props.list);
  };
  
  const toggleEdit = (e) => {
    e.preventDefault();
    setEdit(true);
  };
  
  
  if(description !== "" && !edit){
    return <p className="py-1 text-gray-700 text-sm" onClick={toggleEdit}>{description}</p>
  } else {
    return <form onSubmit={handleSubmit}>
      <textarea className="w-full p-2 h-32"
                placeholder="Ajoutez une description"
                onChange={handleChange}
                value={description}
      >
      </textarea>
      <CardSubmitBtn/>
    </form>
  }
  
};

export default CardDescription;