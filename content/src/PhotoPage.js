import React from 'react';
import DropFileInput from './DropFileInput.jsx';
import './Photopage.css';
import "./css/App.css"
import Navbar from "./Navbar.js";
import ImageSlider from "./ImageSlider.js";
 function PhotoPage () {
    const onFileChange = (files) => {
        console.log(files);
    }
    return (
        <div>
        <br/><br/>
        <Navbar/>
        <br/>
        <ImageSlider/>
        <div className='drag'>
      <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
    </div>
    </div>
    )
}
export default PhotoPage;