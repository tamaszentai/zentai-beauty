import React, { useState } from "react";

const Gallery = (props) => {
  const [file, setFile] = useState('');
  const [title, setTitle] = useState('');

  const titleChangeHandler = event => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  const fileChangeHandler = event => {
    const newFile = event.target.value;
    setFile(newFile);
  }
  
  const pictureUploadHandler = (event) => {
    event.preventDefault();
  }

  let pictureUpload;

  if(props.loggedIn){
    pictureUpload = (
      <form onSubmit={pictureUploadHandler}>
      <input type="text" onChange={titleChangeHandler}></input>
      <input type="file" onChange={fileChangeHandler}></input> 
      <button>Upload</button>
    </form>
    )
  }

  return <div>
    <h1>Galéria</h1>
    {pictureUpload}
  </div>;
};

export default Gallery;
