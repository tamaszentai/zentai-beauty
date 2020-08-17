import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryItem from "./GalleryItem";
import LoadingSpinner from "../Components/LoadingSpinner/loadingSpinner";

const Gallery = (props) => {
  const [galleryData, setGalleryData] = useState();
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");

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
        // Creating a FormData object
        const fileData = new FormData();
        fileData.append("file", file);
        fileData.append("description", description);
        // Adding the 'image' field and the selected file as value to our FormData object
        // Changing file name to make it unique and avoid potential later overrides

        await axios
          .post("http://localhost:5000/api/gallery", fileData, {
            headers: {
              accept: "application/json",
              "Content-Type": `multipart/form-data`,
            },
          })
          .then((response) =>
            console.log(response.data.fileLocation, response.data.fileName)
          );
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
      {pictureUpload}
      {galleryItem}
    </div>
  );
};

export default Gallery;
