import React from 'react';
import CardProvider from "./components/context/CardProvider";
import CardListContainer from "./components/Card/CardListContainer";

function App() {
  return (
    <div className="App">
      <header className="text-center font-bold text-3xl text-blue-600 py-4">Mini trello !</header>
      <CardProvider>
        <CardListContainer/>
      </CardProvider>
    </div>
  );
}

export default App;
