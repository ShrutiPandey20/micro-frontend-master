import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Footer from 'footer/Footer';
import PhotoPage from 'content/PhotoPage'

const App = () => (
  <div>
    
    <div className="container">
      <PhotoPage/>
    </div>
    <div >
    <Footer/>
  </div>
 </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
