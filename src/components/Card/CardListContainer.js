import React, { useContext, useEffect, useRef } from 'react'
import CardContext from "../context/CardContext";
import CardList from "./CardList";
import AddListInput from "./AddListInput";

const CardListContainer = () => {
  const context = useContext(CardContext);
  const ref = useRef();
  
  useEffect( () => {
    context.fetchLists();
    ref.current = true;
  }, []);
  
  return <div className="h-full flex mx-10">
    {
      context.lists.map((list, index) => {
        return <CardList key={index} list={list} index={index}/>
      })
    }
    <AddListInput/>
  </div>
  
};

export default CardListContainer;