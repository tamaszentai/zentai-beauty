import React, { useState, useEffect } from "react";
import GalleryItem from "./GalleryItem";
import LoadingSpinner from "../Components/LoadingSpinner/loadingSpinner";
import { connect } from "react-redux";
import { getGallery, addGalleryItem, deleteGalleryItem } from "../actions/galleryActions";


const Gallery = (props) => {
  const { galleryData } = props.gallery;

  const [file, setFile] = useState("");
  const [caption, setCaption] = useState("");

  // Fetching galleryData
  useEffect(() => {
    props.getGallery();
  }, []);

  // Delete galleryItem
  const pictureDeleteHandler = (id) => {
    props.deleteGalleryItem(id);
  };

  let galleryItem = null;

  if (galleryData) {
    galleryItem = galleryData.map((picture, index) => {
      return (
        <GalleryItem
          caption={picture.caption}
          src={picture.src}
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

  const captionHandler = (event) => {
    const newCaption = event.target.value;
    setCaption(newCaption);
  };

  const fileHandler = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  // galleryItem uploading
  const pictureUploadHandler = (event) => {
    event.preventDefault();

    if (file !== "") {
      const fileData = new FormData();
      fileData.append("file", file);
      fileData.append("caption", caption);
      props.addGalleryItem(fileData);
      setFile('');
      setCaption('');
      event.target.reset();
    }
  };

  let pictureUpload;

  if (props.loggedIn) {
    pictureUpload = (
      <form onSubmit={pictureUploadHandler}>
        <input type="text" onChange={captionHandler}></input>
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
    <div className="gallery content">
      <h1>Galéria</h1>
      {/* {galleryData ? <Slideshow galleryData={galleryData} /> : null} */}
      {pictureUpload}
      {galleryItem}
    </div>
  );
};

const mapStateToProps = (state) => ({
  gallery: state.gallery,
});

export default connect(mapStateToProps, { getGallery, addGalleryItem, deleteGalleryItem })(
  Gallery
);
