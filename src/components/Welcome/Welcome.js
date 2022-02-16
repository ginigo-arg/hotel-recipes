import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Welcome() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>¡Hi Friend! Welcome to Sponnacular App </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Here get you some recommendations:</h6>
        <ul>
          <li>You can Add Up to 4 items in the menu.</li>
          <li>
            The Menu should have 2 recipes vegans and 2 recipes not vegans.
          </li>
          <li>Once your menu is ready, you can place your order.</li>
          <li>You can search your favorite recipes with our searcher.</li>
          <li>Also view recipe detail doing click on detail button.</li>
          <span>So that's all, enjoy our App 😊</span>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-success" onClick={handleClose}>
          Understood
        </button>
      </Modal.Footer>
    </Modal>
  );
}
