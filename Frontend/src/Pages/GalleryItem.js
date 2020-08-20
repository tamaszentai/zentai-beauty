import React from "react";
import axios from 'axios';

const GalleryItem = (props) => {

  const pictureDeleteHandler = () => {
    console.log(props.id);
    axios
      .delete("http://localhost:5000/api/gallery/" + props.id)
      .then((response) => {
        if (200 === response.status) {
          console.log("deleted");
        }
      });
};
  
  let button = null;

  if(props.loggedIn) {
    button = <button onClick={pictureDeleteHandler}>Törlés</button>
  };

  return (
    <div>
      <h3>{props.description}</h3>
      <h4>{props.id}</h4>
      <img src={`http://localhost:5000/${props.url}`} width="300"></img>
      {button}
    </div>
  );
};

export default GalleryItem;
