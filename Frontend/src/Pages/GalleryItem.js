import React from "react";

const GalleryItem = (props) => {
  let button = null;

  if (props.loggedIn) {
    button = <button onClick={() => props.delete(props.id)}>Törlés</button>;
  }

  return (
    <div>
      <img src={props.src} alt={props.caption} height="300" onClick={props.handleOpen}></img>
      {button}
    </div>
  );
};

export default GalleryItem;
