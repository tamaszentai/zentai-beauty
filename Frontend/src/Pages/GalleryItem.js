import React from "react";

const GalleryItem = (props) => {
  let button = null;

  if (props.loggedIn) {
    button = <button onClick={() => props.delete(props.id)}>Törlés</button>;
  }

  return (
    <div>
      <h3>{props.caption}</h3>
      <h4>{props.id}</h4>
      <img src={props.src} width="300"></img>
      {button}
    </div>
  );
};

export default GalleryItem;
