import React from "react";

const TattooGalleryItem = (props) => {
  let button = null;

  if (props.loggedIn) {
    button = <button onClick={() => props.delete(props.id)}>Törlés</button>;
  }

  return (
    <div>
      <h3>{props.caption}</h3>
      <h4>{props.id}</h4>
      <img src={props.src} height="300"></img>
      {button}
    </div>
  );
};

export default TattooGalleryItem;
