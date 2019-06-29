import React, { useContext, useEffect, useRef } from 'react'
import CardContext from "../context/CardContext";
import CardList from "./CardList";

const CardListContainer = () => {
  
  const context = useContext(CardContext);
  const ref = useRef();
  
  useEffect( () => {
    context.fetchLists();
    ref.current = true;
  }, []);
  
  return <div className="h-full h-screen flex">
    {
      context.lists.map((list, index) => {
        return <CardList key={index} list={list}/>
      })
    }
  </div>
  
};

export default CardListContainer;