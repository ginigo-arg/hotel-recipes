import { useContext, useEffect } from "react";
import MenuContext, { MenuContextProvider } from "../../context/MenuContext";
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

  console.log("menu:", menu);

  function removeItemFromMenu(arr, id) {
    return arr.filter((item) => item.id !== id);
  }

  const handleRemoveItem = () => {
    const newMenu = removeItemFromMenu(menu, id);
    console.log("newMenu:", newMenu);

    setMenu(newMenu);
  };
  return (
    <>
      <MenuContextProvider>
        <MenuDataProvider>
          <ol className="list-group" key={id}>
            <li
              className="list-group-item d-flex justify-content-between align-items-start"
              key={id}
            >
              <div className="me-auto">
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
              <div className="container w-50">
                <div className="row d-flex flex-direcction-column justify-content-end align-items-end">
                  <span className="badge bg-success h-25 w-50 pe-0 ps-0 d-block">
                    USD${(pricePerServing / 100).toFixed(2)}
                  </span>

                  <button
                    onClick={handleRemoveItem}
                    className="btn btn-success p-0 ms-2 mt-4 w-50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          </ol>
        </MenuDataProvider>
      </MenuContextProvider>
    </>
  );
}
