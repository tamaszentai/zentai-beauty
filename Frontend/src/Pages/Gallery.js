import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryItem from "./GalleryItem";
import LoadingSpinner from "../Components/LoadingSpinner/loadingSpinner";

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
    galleryItem = <LoadingSpinner />;
  }

  const titleChangeHandler = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const fileChangeHandler = (event) => {
    if(event.target.files[0]){
    setFile(event.target.files[0]);
    }
  };

  const pictureUploadHandler = async (event) => {
    event.preventDefault();

    try {
      if (file !== '') {
        // Creating a FormData object
        let fileData = new FormData();

        // Adding the 'image' field and the selected file as value to our FormData object
        // Changing file name to make it unique and avoid potential later overrides
        fileData.set(
          'image',
          file
          // `${Date.now()}-${file.name}`
        );

        await axios({
          method: 'post',
          url: "http://localhost:5000/api/gallery",
          data: fileData,
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then( ( response ) => console.log(response.data.fileLocation))
      }
      
    } catch (error) {
     
    }
  };

  let pictureUpload;

  if (props.loggedIn) {
    pictureUpload = (
      <form onSubmit={pictureUploadHandler}>
        <input type="text" onChange={titleChangeHandler}></input>
        <input
          type="file"
          onChange={fileChangeHandler}
          accept=".jpg,.png,.jpeg"
        ></input>
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
