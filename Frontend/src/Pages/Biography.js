import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBio } from "../actions/bioActions";
import './Biography.css';
import BioModal from '../Components/BioModal/BioModal';

const Biography = (props) => {
  const { bio } = props.biography;

  useEffect(() => {
    props.getBio();
  },[]);

  const bioItem = bio.map((item) => item.bio);

  return (
    <div className="biography">
      <h1>Bemutatkozás</h1>
      <h2>{bioItem}</h2>
      <BioModal bio={bioItem}/>
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
