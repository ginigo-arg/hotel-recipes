import React, { useContext, useEffect } from "react";
import MenuList from "../../components/menu/menu";
import NavBar from "../../components/navBar/navBar";
import TotalsMenu from "../../components/totalsMenu/totalsMenu";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import MenuContext from "../../context/MenuContext";
import FormMenu from "../../components/FormMenu/FormMenu";
import Footer from "../../components/Footer/Footer";

export default function Menu() {
  const [show, setShow] = useState(false);
  const [botonDisable, setBotonDisable] = useState(true);
  const { menu, orderOk, setOrderOk } = useContext(MenuContext);

  useEffect(() => {
    if (menu.length > 0) {
      setBotonDisable(false);
    } else {
      setBotonDisable(true);
    }
  }, [menu.length, setOrderOk]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavBar />
      <div className="container my-5">
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
            {orderOk && menu.length < 1 && (
              <div className="alert alert-success mt-2" role="alert">
                <h4>You order is cooking</h4>
                <p>We send an email with details your order</p>
                <p>
                  <strong>¡Thanks you!</strong>
                </p>
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
        <Footer className="p-fixed bottom-end" />
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
