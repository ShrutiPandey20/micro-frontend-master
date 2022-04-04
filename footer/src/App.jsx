import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Foot from './components/Footer';

const App = () => (
    <div>
        <Foot/>
    </div>
 
);

ReactDOM.render(<App />, document.getElementById("app"));
