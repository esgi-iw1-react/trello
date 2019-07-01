import React, { useContext } from 'react';
import CardProvider from "./components/context/CardProvider";
import CardListContainer from "./components/Card/CardListContainer";
import {DragDropContext} from "react-beautiful-dnd";
import CardContext from "./components/context/CardContext";

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
    const lists = context.lists;
    console.log(context, lists, lists.forEach(el => console.log(el)));
    debugger;
  };
  
  return (
    <div className="App">
      <header className="text-center font-bold text-3xl text-blue-600 py-4">Mini trello !</header>
        <DragDropContext onDragEnd={onDragEnd}>
          <CardProvider>
            <CardListContainer/>
          </CardProvider>
        </DragDropContext>
    </div>
  );
}

export default App;
