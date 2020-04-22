import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import ReactDOM from "react-dom";
import React from "react";
import Button from "react-bootstrap/Button";

export default function Details(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="detail-btn btn btn-sm btn-outline-secondary btn-details"
        variant="outline-secondary"
        onClick={handleShow}
      >
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details about this place</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Place: </strong> 
            {props.name}
          </p>
          <p>
            <strong>Nearest Town: </strong>
            {props.nearestTown}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}


