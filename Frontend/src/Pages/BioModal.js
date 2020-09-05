import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from "react-redux";
import { updateBio } from "../actions/bioActions";

const BioModal = (props) => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [updatedBio, setUpdatedBio] = useState(props.bio);


  const onChangeHandler = (event) => {
    setUpdatedBio(event.target.value);
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    props.updateBio(updatedBio);
    toggle();

  };

  
  return (
    <div>
      <Button color="success" onClick={toggle}>{props.buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Szerkesztés</ModalHeader>
        <ModalBody>
          <form onSubmit={submitFormHandler}>
            <textarea onChange={onChangeHandler}>{props.bio}</textarea>
            <Button color="primary" type="submit">Szerkesztés</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  biography: state.biography
})

export default connect(mapStateToProps, { updateBio })(BioModal);