import parse from "html-react-parser";
import { useContext, useEffect, useState } from "react";
import DetailContext from "../../context/DetailContext";
import MenuContext from "../../context/MenuContext";
import { Link } from "react-router-dom";
import "./DetailRecipe.css";
import swal from "sweetalert";
import { Toast, ToastContainer } from "react-bootstrap";
import Logo from "../../sponnacular-logo.png";

export default function DetailRecipe() {
  const { menu, setMenu } = useContext(MenuContext);
  const { detail } = useContext(DetailContext);
  const { prevLocation, setLocation } = useContext(DetailContext);
  const [showPush, setShowPush] = useState(false);
  const {
    id,
    img,
    title,
    summary,
    healthScore,
    readyInMinutes,
    servings,
    vegan,
    pricePerServing,
  } = detail;
  useEffect(() => {}, [detail]);

  const handleAddMenu = () => {
    if (menu.length < 4) {
      const newItem = {
        id,
        img,
        title,
        summary,
        healthScore,
        readyInMinutes,
        servings,
        vegan,
        pricePerServing,
      };

      setMenu([...menu, newItem]);
    } else {
      swal({
        title: "We're Sorry",
        text: "This Menus is Empty",
        icon: "error",
        button: {
          text: "Ok",
          className: "btn btn-success btn-alert",
        },
      });
    }
  };

  const toggleShowPush = () => {
    setShowPush(!showPush);
  };

  return (
    <>
      <div className="container my-5 w-xs-100 w-lg-75">
        <div className="row card border border-0">
          <div className="col-8 mb-4">
            <h2 className="card-title">{title}</h2>
            <img src={img} className="img-fluid w-100" alt={title} />
          </div>
          <div className="col card-body d-block bg-light">
            <div className="row d-flex justify-content-start">
              <div className="col-xs-12 col-ms-12 col-8 my-2">
                <span className="badge rounded-pill bg-success me-2">
                  Healt {healthScore}
                </span>
                {parse(
                  `<span className="badge rounded-pill bg-success me-2">vegan ${vegan}</span>`
                )}
                <span className="badge rounded-pill bg-success me-2">
                  Ready in {readyInMinutes}min.
                </span>
                <span className="badge rounded-pill bg-success me-2">
                  Servings {servings}
                </span>
              </div>
              <div className="col-auto text-align-end my-2">
                <strong>
                  ${(pricePerServing / 100).toFixed(2)} per Serving
                </strong>
              </div>
            </div>

            <span className="card-text">{parse(`<p>${summary}</p>`)}</span>
            <Link to={`${prevLocation.pathname}`}>
              <button className="btn btn-outline-success me-2">Back</button>
            </Link>
            <button
              type="button"
              id="liveToastBtn"
              className="btn btn-success"
              onClick={() => {
                handleAddMenu();
                toggleShowPush();
              }}
            >
              AddToMenu
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        className="position-fixed top-0 end-0 m-2"
        position="top-right"
      >
        <Toast show={showPush} onClose={toggleShowPush} className="m-xs-5">
          <Toast.Header>
            <img src={Logo} className="rounded me-2 w-25" alt="" />
            <strong className="me-auto">Boot</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you recipe has been add To Menu</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
