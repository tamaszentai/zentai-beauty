import React, { useState } from "react";

import "./Admin.css";

const Admin = () => {
  const [bio, setBio] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');

const bioChangeHandler = event => {
  const newBio = event.target.value;
  setBio(newBio);
}

const bioUpdateHandler = (event) => {
  event.preventDefault();
}

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

  return (
    <div className="admin">
      <form onSubmit={bioUpdateHandler}>
        <textarea cols="30" rows="5" placeholder={bio} onChange={bioChangeHandler}></textarea>
        <button>Update</button>
      </form>
      <form onSubmit={pictureUploadHandler}>
        <input type="text" onChange={titleChangeHandler}></input>
        <input type="file" onChange={fileChangeHandler}></input> 
        <button>Upload</button>
      </form>
    </div>
  );
};

export default Admin;
