import React, { useState, useEffect } from "react";
import axios from "axios";

import LoadingSpinner from '../Components/LoadingSpinner/loadingSpinner';

const Biography = (props) => {
  const [bio, setBio] = useState();
  const [originalBio, setOriginalBio] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/bio").then((res) => {
      res.data.map((biography, index) => {
        setOriginalBio(biography.bio);
      });
    });
  }, []);

  let bioBox;

  const bioChangeHandler = (event) => {
    const newBio = event.target.value;
    setBio(newBio);
  };

  const bioUpdateHandler = (event) => {
    event.preventDefault();
    axios.patch("http://localhost:5000/api/bio/5f242ecbc8c0e00aa2650206", {
      bio: bio,
    });
    setOriginalBio(bio);
  };

  if (props.loggedIn) {
    bioBox = (
      <form onSubmit={bioUpdateHandler}>
        <textarea
          cols="30"
          rows="5"
          placeholder={originalBio}
          onChange={bioChangeHandler}
        ></textarea>
        <button>Update</button>
      </form>
    );
  }

  return (
    <div className="bio">
      <h1>Bemutatkozás</h1>
      {bioBox}
      <h3>{originalBio}</h3>
    </div>
  );
};

export default Biography;
