import MenuList from "../../components/menu/menu";
import NavBar from "../../components/navBar/navBar";
import TotalsMenu from "../../components/totalsMenu/totalsMenu";
import { Modal } from "react-bootstrap";
import { useState } from "react";

export default function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavBar />
      <div className="container my-4">
        <h3>Menu</h3>
        <div className="row list-menu border rounded py-3 d-flex flex-direction-column justify-content-evenly flex-wrap">
          <div className="col-xs-12 col-lg-7">
            <MenuList />
          </div>
          <div className="col-xs-12 col-md-12 col-lg-4">
            <TotalsMenu />
            <button className="btn btn-dark" onClick={handleShow}>
              Place order
            </button>
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
            <form>
              <input type="text" placeholder="Name" className="w-100"></input>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-success">Send</button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
