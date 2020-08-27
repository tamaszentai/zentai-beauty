import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import BioModal from './BioModal';

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

    setBio(event.target.value);
  };

  const bioUpdateHandler = (event) => {
    event.preventDefault();
    axios.patch("http://localhost:5000/api/bio/5f242ecbc8c0e00aa2650206", {bio: bio}).then((res) => {
      const updatedBio = res.data.bio;
      setOriginalBio(updatedBio);
    })
  };

  if (props.loggedIn) {
    bioBox = (
      <form onSubmit={bioUpdateHandler}>
        <textarea
          cols="50"
          rows="5"
          placeholder={originalBio}
          onChange={bioChangeHandler}
        ></textarea>
      </form>
    );
  }

  return (
    <div className="bio">
      <h1>Bemutatkozás</h1>
      <BioModal buttonLabel='Szerkesztés' bioBox={bioBox} bioUpdateHandler={bioUpdateHandler} />
      <h3>{originalBio}</h3>
    </div>
  );
};

export default Biography;