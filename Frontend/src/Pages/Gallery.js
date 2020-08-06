import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryItem from "./GalleryItem";
import LoadingSpinner from '../Components/LoadingSpinner/loadingSpinner';

const Gallery = (props) => {
  const [galleryData, setGalleryData] = useState();
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/gallery").then((res) => {
      setGalleryData(res.data);
    });
  }, []);

  let galleryItem = null;

  if (galleryData) {
    galleryItem = galleryData.map((picture, index) => {
      return (
        <GalleryItem
          description={picture.description}
          url={picture.url}
          key={index}
        ></GalleryItem>
      );
    }); 
  } else {
    galleryItem = <LoadingSpinner />
  }


  const titleChangeHandler = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const fileChangeHandler = (event) => {
    const newFile = event.target.value;
    setFile(newFile);
  };

  const pictureUploadHandler = (event) => {
    event.preventDefault();
  };

  let pictureUpload;

  if (props.loggedIn) {
    pictureUpload = (
      <form onSubmit={pictureUploadHandler}>
        <input type="text" onChange={titleChangeHandler}></input>
        <input type="file" onChange={fileChangeHandler}></input>
        <button>Feltöltés</button>
      </form>
    );
  }

  return (
    <div>
      <h1>Galéria</h1>
      {pictureUpload}
      {galleryItem}
    </div>
  );
};

export default Gallery;
