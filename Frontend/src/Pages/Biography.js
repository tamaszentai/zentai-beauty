import React, { useState, useEffect } from "react";
import axios from 'axios';

const Biography = (props) => {
  const [bio, setBio] = useState();
  const [dummyBio, setDummyBio] = useState('')

  useEffect(() => {
    axios.get("http://localhost:5000/api/bio")
    .then(res => {
        res.data.map((biography, index) => {
          setDummyBio(biography.bio)
        })
      });
},[])  

  // useEffect(() => {
  //   const fetchBio = async () => {
  //     try {
  //       const responseData = await axios(
  //         "http://localhost:5000/api/bio"
  //       );
  //       const data = responseData.data;
  //       console.log(data)
  //       setDummyBio(data.bio);
  //     } catch (err) {}
  //   };
  //   fetchBio();
  // }, []);

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
