import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryItem from "./GalleryItem";
import LoadingSpinner from "../Components/LoadingSpinner/loadingSpinner";
import Slideshow from '../Components/Slideshow/Slideshow';
import { connect } from "react-redux";
import { getGallery } from '../actions/galleryActions'

const Gallery = (props) => {
  const { galleryData } = props.gallery;

  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    props.getGallery()
  }, []);

  const pictureDeleteHandler = (id) => {
    axios.delete("http://localhost:5000/api/gallery/" + id)
    .then((res) => {
      if (200 === res.status) {
        const filteredArray = galleryData.filter(image => image._id !== id)
        console.log("deleted", galleryData);
        
      }
    });
  };

  let galleryItem = null;

  if (galleryData) {
    galleryItem = galleryData.map((picture, index) => {
      return (
        <GalleryItem
          description={picture.description}
          url={picture.url}
          key={index}
          id={picture._id}
          loggedIn={props.loggedIn}
          delete={pictureDeleteHandler}
        />
      );
    });
  } else {
    galleryItem = <LoadingSpinner />;
  }

  const descriptionHandler = (event) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  };

  const fileHandler = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const pictureUploadHandler = async (event) => {
    event.preventDefault();
    try {
      if (file !== "") {
        const fileData = new FormData();
        fileData.append("file", file);
        fileData.append("description", description);

        await axios
          .post("http://localhost:5000/api/gallery", fileData, {
            headers: {
              accept: "application/json",
              "Content-Type": "multipart/form-data",
            },
          })

          .then((res) => {
            if (200 === res.status) {
              const newGallery = [res.data, ...galleryData];
              
              
            }
          });

        }   
    } catch (error) {}
  };

  let pictureUpload;

  if (props.loggedIn) {
    pictureUpload = (
      <form onSubmit={pictureUploadHandler}>
        <input type="text" onChange={descriptionHandler}></input>
        <input
          type="file"
          onChange={fileHandler}
          accept=".jpg,.png,.jpeg"
        ></input>
        <button>Feltöltés</button>
      </form>
    );
  }

  return (
    <div>
      <h1>Galéria</h1>
      { galleryData? <Slideshow galleryData={galleryData}/> : null }
      {pictureUpload}
      {galleryItem}
    </div>
  );
};

const mapStateToProps = (state) => ({
  gallery: state.gallery
});

export default connect(mapStateToProps, { getGallery })(Gallery);