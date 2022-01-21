import React, { useContext, useState, useEffect } from "react";
import MenuContext from "../../context/MenuContext";
import ItemsRecipe from "../itemsMeat/itemsRecipe";

export default function Menu() {
  const { menu, setMenu } = useContext(MenuContext);

  useEffect(() => {
    console.log("renderizandondo menu");
  }, [menu]);

  return (
    <>
      {menu.map(({ title, id, img }) => {
        return (
          <div>
            <img src={img} alt={img} />
            <h4>{title}</h4>
          </div>
        );
      })}
    </>
  );
}
