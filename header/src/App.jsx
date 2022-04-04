import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import "./index.scss";

const App = () =>{
  return(
  <div className="App"> 
  <Navbar/>
  </div>
);
}

ReactDOM.render(<App />, document.getElementById("app"));
