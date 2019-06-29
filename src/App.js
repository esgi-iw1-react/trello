import React from 'react';
import CardProvider from "./components/context/CardProvider";
import CardList from "./components/Card/CardList";

function App() {
  return (
    <div className="App">
      <header className="text-center font-bold text-3xl">Mini trello !</header>
      <CardProvider>
        <CardList/>
      </CardProvider>
    </div>
  );
}

export default App;
