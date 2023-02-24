import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Transition from "./Transition";

function App():JSX.Element {
  return (
    <div className="App">
      <Router>
        <Transition />
      </Router>
    </div>
  );
}

export default App;
