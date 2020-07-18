import React from "react";
import "./App.css";
import {ListOfGif} from './components/ListOfGif'

function App() {
  return (
    <div className="App">
      <section className="App-section">
      <ListOfGif keyword='panda' />
      </section>
    </div>
  );
}

export default App;
