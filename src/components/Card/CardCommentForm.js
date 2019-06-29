import React, { useState, useContext } from 'react'
import CardSubmitBtn from "./CardSubmitBtn";
import CardContext from "../context/CardContext";

const CardCommentForm = (props) => {
  
  const [comment, setComment] = useState('');
  const context = useContext(CardContext);
  
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setComment("");
    context.addComment(comment, props.card, props.list);
  };
  
  return <form onSubmit={handleSubmit}>
    <textarea className="w-full p-2 h-32" name="comment"
              placeholder="Ecrivez un commentaire"
              onChange={handleChange}
              value={comment}>
    </textarea>
    <CardSubmitBtn/>
  </form>
  
};

export default CardCommentForm;