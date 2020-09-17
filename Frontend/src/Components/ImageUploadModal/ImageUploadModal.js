import React, { useState } from "react";
import { connect } from "react-redux";
import { addGalleryItem } from "../../actions/galleryActions";
import { addTattooGalleryItem } from "../../actions/tattooGalleryActions";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ImageUploadModal = (props) => {
  const [file, setFile] = useState("");
  const [caption, setCaption] = useState("");
  const [imageType, setImageType] = useState('smink');

  const captionHandler = (event) => {
    const newCaption = event.target.value;
    setCaption(newCaption);
  };

  const fileHandler = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleTypeChange = (event) => {
    setImageType(event.target.value);
  }

  // tattooGalleryItem uploading
  const pictureUploadHandler = (event) => {
    event.preventDefault();

    if (file !== "") {
      const fileData = new FormData();
      fileData.append("file", file);
      fileData.append("caption", caption);
      if (imageType === 'smink') {
        props.addGalleryItem(fileData);
      } else {
      props.addTattooGalleryItem(fileData);
      }
      setFile("");
      setCaption("");
      event.target.reset();
      handleClose();
    }
  };

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
        Képfeltöltés
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
            <h2 id="transition-modal-title">Képfeltöltés</h2>
            <form onSubmit={pictureUploadHandler}>
              <label>Kép leírása: </label>
              <textarea  onChange={captionHandler}></textarea>
              <br />
              <br />
              <input
                type="file"
                onChange={fileHandler}
                accept=".jpg,.png,.jpeg"
              ></input>
              <br />
              <br />
              <label for="images">Kép besorolása: </label>
              <select onChange={handleTypeChange} name="type" id="type">
                <option value="smink">Smink</option>
                <option value="sminktetovalas">Sminktetoválás</option>
              </select>
              <br />
              <br />
              <button>Feltöltés</button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  gallery: state.gallery,
  tattoGallery: state.tattoGallery,
});

export default connect(mapStateToProps, {
  addGalleryItem,
  addTattooGalleryItem,
})(ImageUploadModal);
