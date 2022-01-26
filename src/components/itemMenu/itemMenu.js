import { useContext } from "react";
import MenuContext from "../../context/MenuContext";
import parse from "html-react-parser";
import "./itemMenu.css";
import { MenuDataProvider } from "../../context/MenuData";

export default function ItemMenu({
  id,
  img,
  title,
  healthScore,
  readyInMinutes,
  servings,
  vegan,
  pricePerServing,
}) {
  const { menu, setMenu } = useContext(MenuContext);

  const handleRemoveItem = () => {
    const quitItem = {
      id,
      img,
      title,
      healthScore,
      readyInMinutes,
      servings,
      vegan,
      pricePerServing,
    };
    setMenu([...menu, quitItem]);
  };
  return (
    <>
      <MenuDataProvider>
        <ol className="list-group" key={id}>
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={id}
          >
            <div className="ms-2 me-auto" key={id}>
              <div className="fw-bold">{title}</div>
              <div>
                <span className="badge rounded-pill bg-success me-2">
                  Health {healthScore}
                </span>
                {parse(
                  `<span className="badge rounded-pill bg-success me-2">vegan ${vegan}</span>`
                )}
                <span className="badge rounded-pill bg-success me-2">
                  Ready in {readyInMinutes}
                </span>
                <span className="badge rounded-pill bg-success me-2">
                  Servings {servings}
                </span>
              </div>
            </div>
            <span className="badge bg-success ">USD${pricePerServing}</span>
          </li>
        </ol>
      </MenuDataProvider>
    </>
  );
}
