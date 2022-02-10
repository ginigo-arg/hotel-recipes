
import parse from "html-react-parser";
import { useContext, useEffect } from "react";
import DetailContext from "../../context/DetailContext"
import { Link } from "react-router-dom";

export default function DetailRecipe() {
 
const {detail}=useContext(DetailContext)
const {prevLocation, setLocation} = useContext(DetailContext)
const { id,
  img,
  title,
  summary,
  healthScore,
  readyInMinutes,
  servings,
  vegan,
  pricePerServing,} = detail
useEffect(()=>{

},[detail])

  return (
    <div className="container my-4">
      <div className="row row-md-card d-flex flex-direction-row justify-content-center border rounded-2 border-warning">
        
          <div className="col-5">
          <img src={img} className="img-fluid w-100" alt={title} />
          </div>
          <div className="col-7 card-body d-block">
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
                  
            <span className="card-text">{parse(`<p>${summary}</p>`)}</span>
            <Link to={`${prevLocation.pathname}`}>
            <button className="btn btn-outline-success me-2">Back</button>
            </Link>
            <button className="btn btn-success">AddToMenu</button>
          </div>
        </div>
      
    </div>
  );
}
