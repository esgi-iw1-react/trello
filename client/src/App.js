import React, { useContext } from 'react';
import CardListContainer from "./components/Card/CardListContainer";
import {DragDropContext} from "react-beautiful-dnd";
import CardContext from "./context/CardContext";
import Login from "./components/Auth/login";

function App() {
  
  const context = useContext(CardContext);
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if(!destination){
      return;
    }
    if(destination.droppableId === source.droppableId && destination.index === source.index){
      return;
    }
    const sourceCol = source.droppableId.split('-')[1];
    const sourceIndex = source.index;
    const destinationCol = destination.droppableId.split('-')[1];
    const destinationIndex = destination.index;
    context.reorder(sourceCol, sourceIndex, destinationCol, destinationIndex);
  };
  
  return (
    <div className="App">
      <Login/>
      {/*<header className="text-center font-bold text-3xl text-blue-600 py-4">Mini trello !</header>*/}
      {/*  <DragDropContext onDragEnd={onDragEnd}>*/}
      {/*      <CardListContainer/>*/}
      {/*  </DragDropContext>*/}
    </div>
  );
}

export default App;
