import React, { useState } from "react";

const Biography = (props) => {
  const [bio, setBio] = useState();
  const [dummyBio, setDummyBio] = useState("Hellobello, Betti vagyok a teleprol")

  let bioBox;

  const bioChangeHandler = (event) => {
    const newBio = event.target.value;
    setBio(newBio);
  };

  const bioUpdateHandler = (event) => {
    event.preventDefault();
    setDummyBio(bio);
  };

  if (props.loggedIn) {
    bioBox = (
      <form onSubmit={bioUpdateHandler}>
        <textarea
          cols="30"
          rows="5"
          placeholder={bio}
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
      <h3>{dummyBio}</h3>
    </div>
  );
};

export default Biography;
