import { useContext, useState} from "react";
import MenuContext from "../../context/MenuContext";
import DetailContext, { DetailContextProvider } from "../../context/DetailContext"
import "./itemRecipe.css";
import parse from "html-react-parser";
import swal from "sweetalert";
import {Link, useLocation} from "react-router-dom"
import {Toast, ToastContainer} from "react-bootstrap"
import Logo from '../../sponnacular-logo.png'



export default function ItemsRecipe({
  id,
  img,
  title,
  summary,
  healthScore,
  readyInMinutes,
  servings,
  vegan,
  pricePerServing,
}) {
  const { menu, setMenu } = useContext(MenuContext);
  const {detail, setDetail, setLocation} = useContext(DetailContext)
  const location = useLocation()
  const [showPush, setShowPush] = useState(false)

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

  const handleDetail = () =>{
    const details = { id,
      img,
      title,
      summary,
      healthScore,
      readyInMinutes,
      servings,
      vegan,
      pricePerServing,}

      setDetail(details)
      setLocation(location)
  }
  const toggleShowPush = () => {setShowPush(!showPush)}

  return (
    <>
   
      <div className="container mt-3 box ">
        <div className="row Card-item">
          <div
            className="col-xs-12
          col-md-5 Card-img"
          >
            <img src={img} alt="item" className="Img-item-recipe" />
          </div>
          <div className="col-md-7 Card-body">
            <div className="col-xs-12 Card-Title mt-2">
              <h3>{title}</h3>
            </div>
            <div>
              <span className="badge rounded-pill bg-success me-2">
                Healt {healthScore}
              </span>
              {parse(
                `<span className="badge rounded-pill bg-success me-2">vegan ${vegan}</span>`
              )}
              <span className="badge rounded-pill bg-success me-2">
                Ready in {readyInMinutes}
              </span>
            </div>
            <div className="Card-text">{parse(`<p>${summary}</p>`)}</div>
            <div className="Card-footer mt-3 mb-2 d-flex justify-content-end">
              <Link to={`/detail/${title}/${id}`}>
                <button onClick={handleDetail} type="button" className="btn btn-outline-success me-2" data-bs-toggle="tooltip" data-bs-placement="bottom $tooltip-bg: $black" title="Click here to see more">Detail</button>
              
              </Link>
              <button
                type="button"
                className="btn btn-success Btn-addMenu"
                variant="success"
                onClick={()=>{
                  
                  handleAddMenu()
                
                  toggleShowPush(!showPush)
                  
                }}
              >
                Add to menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="position-fixed bottom-0 end-0 m-4" position="bottom-end">
    <Toast show={showPush} onClose={toggleShowPush} >
          <Toast.Header>
            <img
              src={Logo}
              className="rounded me-2 w-25"
              alt=""
            />
            <strong className="me-auto">Boot</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you recipe has been add To Menu</Toast.Body>
        </Toast>
    </ToastContainer>
    </>
  );
}
