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
              Cras justo odio
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
        </ol>
      </MenuDataProvider>
    </>
  );
}
