import React,{useContext} from 'react';
import {GalleryContext} from './../utils/GalleryContext';

export const Popup = (
    ) =>{
        const {selectedPhoto,setSelectedPhoto,deletePhoto} = useContext(GalleryContext)
    return(
        <div id = "popup">
            <button className='close-popup' 
            onClick={()=>{setSelectedPhoto("")}}>&times;</button>
            <button onClick={deletePhoto} className='delete-popup'>Delete</button>
            <div className='popup-container'>
                <img src ={selectedPhoto} alt={"Image"}/>
            </div>
        </div>
    )
}