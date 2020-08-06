import React from "react";

const GalleryItem = (props) => {
  return (
    <div>
      <h3>{props.description}</h3>
      <img src={props.url} width="300"></img>
      <button>Törlés</button>
      <button>Szerkesztés</button>
    </div>
  );
};

export default GalleryItem;
