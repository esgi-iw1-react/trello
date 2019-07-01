import React from 'react';
import CardProvider from "./components/context/CardProvider";
import CardListContainer from "./components/Card/CardListContainer";
import {DragDropContext} from "react-beautiful-dnd";

function App() {
  return (
    <div className="App">
      <header className="text-center font-bold text-3xl text-blue-600 py-4">Mini trello !</header>
        <DragDropContext onDragEnd={() => {}}>
          <CardProvider>
            <CardListContainer/>
          </CardProvider>
        </DragDropContext>
    </div>
  );
}

export default App;
