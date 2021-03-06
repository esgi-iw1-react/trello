import React, { useContext } from 'react';
import CardListContainer from "./components/Card/CardListContainer";
import {DragDropContext} from "react-beautiful-dnd";
import CardContext from "./context/CardContext";
import Header from './components/Header';

function App() {
  
  const context = useContext(CardContext);
  const onDragEnd = result => {
    const { destination, source } = result;
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
      <Header/>
      <DragDropContext onDragEnd={onDragEnd}>
          <CardListContainer/>
      </DragDropContext>
    </div>
  );
}

export default App;
