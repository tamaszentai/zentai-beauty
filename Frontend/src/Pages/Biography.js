import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBio } from "../actions/bioActions";
import BioModal from "./BioModal";

const Biography = (props) => {
  const { bio } = props.biography;

  useEffect(() => {
    props.getBio();
  },[]);

  const bioItem = bio.map((item) => item.bio);

  return (
    <div className="bio">
      <h1>Bemutatkozás</h1>
      <h2>{bioItem}</h2>
      <BioModal buttonLabel="Szerkesztés" bio={bioItem} />
    </div>
  );
};

Biography.propTypes = {
  getBio: PropTypes.func.isRequired,
  bio: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  biography: state.biography
});

export default connect(mapStateToProps, { getBio })(Biography);
