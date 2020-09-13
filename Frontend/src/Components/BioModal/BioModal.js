import React, { useState } from 'react';
import { connect } from "react-redux";
import { updateBio } from "../../actions/bioActions";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const BioModal = (props) => {
  const [updatedBio, setUpdatedBio] = useState(props.bio);

  const updateBio = (event) => {
    event.preventDefault();
    props.updateBio(updatedBio);
  }

  const bioChangeHandler = (event) => {
    setUpdatedBio(event.target.value);
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Szerkesztés
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <h2 id="transition-modal-title">Bemutatkozás szerkesztése</h2>
            <form onSubmit={updateBio}>
              <textarea rows="3" cols="50" onChange={bioChangeHandler}>{props.bio}</textarea>
              <br />
              <br />
              <button type="submit">Szerkesztés</button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  biography: state.biography
});

export default connect(mapStateToProps, { updateBio })(BioModal);