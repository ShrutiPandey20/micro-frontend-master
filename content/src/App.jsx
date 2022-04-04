import React from "react";
import ReactDOM from "react-dom";
import PhotoPage from "./PhotoPage";


import "./index.css";

const App = () => (
    <div className="container">
    <PhotoPage />
  </div>
  
);
ReactDOM.render(<App />, document.getElementById("app"));