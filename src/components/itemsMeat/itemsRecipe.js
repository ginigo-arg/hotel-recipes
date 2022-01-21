import "./itemMeat.css";
import { useContext } from "react";
import MenuContext from "../../context/MenuContext";

export default function ItemsRecipe({ title, id, healthScore, img }) {
  const { menu, setMenu } = useContext(MenuContext);
  console.log("menu: ", menu);

  const handleAddMenu = () => {
    const newItem = { title, id, img };
    setMenu([...menu, newItem]);
  };
  return (
    <>
      <div className="card-contenedor">
        <div className="card-text">
          <h3>{title}</h3>
          <h5>{id}</h5>
          <span>{healthScore}</span>
          <button onClick={handleAddMenu}>Add To Menu</button>
        </div>
        <div className="card-img">
          <img src={img} alt={title} />
        </div>
      </div>
    </>
  );
}
