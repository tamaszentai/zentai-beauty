import React, { useEffect } from "react";
import GalleryItem from "./GalleryItem";
import LoadingSpinner from "../Components/LoadingSpinner/loadingSpinner";
import { connect } from "react-redux";
import {
  getGallery,
  addGalleryItem,
  deleteGalleryItem,
} from "../actions/galleryActions";
import ImageUploadModal from "../Components/ImageUploadModal/ImageUploadModal";
// import GridList from "../Components/GridList/GridList";

import { SRLWrapper } from "simple-react-lightbox";


const Gallery = (props) => {
  const { galleryData } = props.gallery;
  
  const options = {
    settings: {
      overlayColor: "rgba(0, 0, 0, 0.6)",
      autoplaySpeed: 1500,
      transitionSpeed: 900,
    }
  };


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

  return (
    <div className="gallery content">
      <h1>Smink</h1>
      <ImageUploadModal />
      <SRLWrapper options={options}>
        {/* <GridList tileData={galleryData} /> */}
        
{galleryItem}
      </SRLWrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  gallery: state.gallery,
});

export default connect(mapStateToProps, {
  getGallery,
  addGalleryItem,
  deleteGalleryItem,
})(Gallery);
