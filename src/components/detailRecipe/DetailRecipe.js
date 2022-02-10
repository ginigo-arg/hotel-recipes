
import parse from "html-react-parser";
import { useContext } from "react";
import DetailContext from "../../context/DetailContext"

export default function DetailRecipe() {
const {detail}=useContext(DetailContext)
console.log("detail:",detail)
const { id,
  img,
  title,
  summary,
  healthScore,
  readyInMinutes,
  servings,
  vegan,
  pricePerServing,} = detail

  return (
    <div className="container w-50">
      <div className="row my-4">
        <div className="card p-0">
          <img src={img} className="card-img-top " alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className="row d-flex">
              <div className="col-10 d-inline">
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
              <div className="col-auto d-inline text-align-end">
                <strong>${pricePerServing}</strong>
              </div>
            </div>
            <p className="card-text">{parse(`<p>${summary}</p>`)}</p>
            <button className="bt btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    </div>
  );
}
