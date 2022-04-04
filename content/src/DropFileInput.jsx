import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {FaHeart} from "react-icons/fa";
import {FaTrash} from "react-icons/fa";
import './drop-file-input.css';



const DropFileInput = props => {
    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);
    

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');
    
    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }
    
    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    const [favourites, setFavourites] = useState([]);
    const fileAdd = (file)=>{
        const newFile=file
        if(newFile)
        {
            const updatedList = [...favourites, newFile];
            setFavourites(updatedList);
            props.onFileChange(updatedList);
        }
    }
    const fileRemove2 = (file) => {
        const updatedList = [...favourites];
        updatedList.splice(favourites.indexOf(file), 1);
        setFavourites(updatedList);
        props.onFileChange(updatedList);
    }
    
    return (
        <>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                {/*<div className="drop-file-input__label">
                    <img src={uploadImg} alt="" />
                 
                </div>*/}
                <input type="file" value="" onChange={onFileDrop} accept=".mp3,audio/*" />
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <div className="drop-file-preview_item_info">
                                        <p>{item.name}</p>
                                    </div>
                                    <span className='Drop-file-preview-like' onClick={()=> fileAdd(item)}><FaHeart/></span>
                                    <span className="drop-file-preview_item_del" onClick={() => fileRemove(item)}><FaTrash/></span>
                                </div>
                        
                            ))
                        }
                       
                    </div>
                ) : null
            }
            <div className='ListFav'>
            <p className='Fav'>Liked Song&nbsp;&nbsp;<FaHeart/></p>
            
            {
                favourites.length > 0 ? (
                    <div className="drop-file-preview-fav">
                        {
                            favourites.map((item, index) => (
                                <div key={index} className="drop-file-preview__item_fav">
                                    <div className="drop-file-preview_item_info">
                                        <p>{item.name}</p>
                                    </div>
                                    <span className="drop-file-preview_item_del_fav" onClick={() => fileRemove2(item)}><FaTrash/></span>
                                </div>
                        
                            ))
                        }
                       
                    </div>
                ) : null
            }
            </div>
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;

