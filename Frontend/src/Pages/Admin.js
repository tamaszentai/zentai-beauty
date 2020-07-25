import React, { useState } from "react";

import "./Admin.css";

const Admin = () => {
  const [bio, setBio] = useState('');

const textareaChangeHandler = (event) => {
  event.preventDefault();

}

  return (
    <div className="admin">
      <form onSubmit={textareaChangeHandler}>
        <textarea cols="30" rows="5" placeholder={bio}></textarea>
        <button>Update</button>
      </form>
    </div>
  );
};

export default Admin;
