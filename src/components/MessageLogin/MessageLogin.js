import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function MessageLogin() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleAdmin = () => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE"
    );
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
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
        <Modal.Title>¡Hola Amigo/a!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Acceso a la aplicación:</h6>
        <ul>
          <li>
            Lamentablemente en el sitio deployado no podras interactuar con el
            formulario de login, ya que, el login se realiza a un endpoint con
            ruta HTTP y el Host solo permite peticiones con protocolo HTTPS.
          </li>
          <li>
            Para validar el formulario deberas clonar el repo y correrlo en
            local.... Suerte.
          </li>
        </ul>
        <div className="mt-2 text-success d-flex flex-direction-row justify-content-end">
          <span>Pero no te preocupes. Aqui te dejo un atajo 👇😊</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            handleAdmin();
            handleClose();
          }}
        >
          Ingresar como Super Admin.
        </button>
      </Modal.Footer>
    </Modal>
  );
}
