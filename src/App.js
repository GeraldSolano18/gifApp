import React from "react";
import { Home } from "./pages/Home";
import { SearchResults } from "./components/SearchResults";
import {Detail} from './pages/Detail'
import {GifsContextProvider} from './context/GifsContext'
import { Route } from "wouter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GifsContextProvider>
        <Route 
        component={Home} 
        path="/" />
        <Route 
        component={SearchResults} 
        path="/search/:keyword" />
        <Route 
        component={Detail} 
        path="/gif/:id" />
      </GifsContextProvider>
    </div>
  );
}

export default App;
