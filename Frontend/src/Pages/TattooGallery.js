import React, { useEffect } from "react";
import TattooGalleryItem from "./TattooGalleryItem";
import LoadingSpinner from "../Components/LoadingSpinner/loadingSpinner";
import { connect } from "react-redux";
import { getTattooGallery, addTattooGalleryItem, deleteTattooGalleryItem } from "../actions/tattooGalleryActions";
import ImageUploadModal from "../Components/ImageUploadModal/ImageUploadModal";


const TattooGallery = (props) => {
  const { tattooGalleryData } = props.tattooGallery;

  // Fetching tattooGalleryData
  useEffect(() => {
    props.getTattooGallery();
  }, []);

  // Delete tattooGalleryItem
  const pictureDeleteHandler = (id) => {
    props.deleteTattooGalleryItem(id);
  };

  let tattooGalleryItem = null;

  if (tattooGalleryData) {
    tattooGalleryItem = tattooGalleryData.map((picture, index) => {
      return (
        <TattooGalleryItem
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
    tattooGalleryItem = <LoadingSpinner />;
  }

  return (
    <div className="gallery content">
      <h1>Sminktetoválás</h1>
      {/* {galleryData ? <Slideshow galleryData={galleryData} /> : null} */}
      <ImageUploadModal />
      {tattooGalleryItem}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tattooGallery: state.tattooGallery,
});

export default connect(mapStateToProps, { getTattooGallery, addTattooGalleryItem, deleteTattooGalleryItem })(
  TattooGallery
);
