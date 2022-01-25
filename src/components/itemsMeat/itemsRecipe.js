import { useContext } from "react";
import MenuContext from "../../context/MenuContext";
import "./itemRecipe.css";
import parse from "html-react-parser";
import { Parser } from "htmlparser2";
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
  console.log("vegan: ", vegan);
  const { menu, setMenu } = useContext(MenuContext);

  const handleAddMenu = () => {
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
    console.log("handlemenu: ", ...menu);
    localStorage.setItem("menu", JSON.stringify(...menu));
  };
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
              <button
                type="button"
                className="btn btn-success Btn-addMenu"
                variant="success"
                onClick={handleAddMenu}
              >
                Add to menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
