import React, { useContext, useEffect } from "react";
import MenuList from "../../components/menu/menu";
import NavBar from "../../components/navBar/navBar";
import TotalsMenu from "../../components/totalsMenu/totalsMenu";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import MenuContext from "../../context/MenuContext";
import FormMenu from "../../components/FormMenu/FormMenu";

export default function Menu() {
  const [show, setShow] = useState(false);
  const [botonDisable, setBotonDisable] = useState(true);
  const { menu } = useContext(MenuContext);

  useEffect(() => {
    if (menu.length > 0) {
      setBotonDisable(false);
    } else {
      setBotonDisable(true);
    }
  }, [menu.length]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavBar />
      <div className="container my-4">
        <h3>Menu</h3>
        <div className="row list-menu border rounded py-3 d-flex flex-direction-column justify-content-evenly flex-wrap">
          <div className="col-xs-12 col-lg-7">
            {menu.length > 0 ? (
              <MenuList />
            ) : (
              <div className="alert alert-secondary" role="alert">
                This Menu is Empty
              </div>
            )}
          </div>
          <div className="col-xs-12 col-md-12 col-lg-4">
            <TotalsMenu />
            <div className="row">
              <button
                className="btn btn-dark"
                onClick={handleShow}
                disabled={botonDisable}
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="continer d-flex flex-direction-column justify-content-center">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Complete with your data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormMenu />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
