import React, { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  useEffect(() => {
    // Initialize Materialize UI

    M.AutoInit();
  });

  
  return (
    <div className="App">
      <header></header>
      <body>
        <NavBar />

        <div >
          <Home />
        </div>
      </body>
    </div>
  );
}

export default App;
