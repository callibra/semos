import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import axios from "axios";
import { API_URL } from "./utils/constants";
import "./css/App.css";
import { GalleryContext } from "./utils/GalleryContext";

export function App() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/photos`)
      .then((res) => setPhotos(res.data))
      .catch((err) => alert(err));
  }, []);
  
  function deletePhoto(){
   setPhotos([...photos.filter(photo=>photo.url !== selectedPhoto)]);
   setSelectedPhoto("");
  }
  return (
    <div id="app">
      <Nav />
      <GalleryContext.Provider value={{selectedPhoto,setSelectedPhoto,deletePhoto}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/gallery"
            element={
              <Gallery
                listOfPhotos={photos}
              />
            }
          />
        </Routes>
      </GalleryContext.Provider>
    </div>
  );
}