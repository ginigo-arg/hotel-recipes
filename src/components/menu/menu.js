import React, { useContext, useEffect } from "react";
import MenuContext from "../../context/MenuContext";
import MenuData from "../../context/MenuData";
import ItemMenu from "../itemMenu/itemMenu";

export default function MenuList() {
  const { menu } = useContext(MenuContext);
  const { setData } = useContext(MenuData);
  let totalScore = 0;
  let totalPrice = 0;
  let totalMinutes = 0;
  let items = 0;
  useEffect(() => {
    console.log("render menu list");
    menu.forEach(({ healthScore, pricePerServing, readyInMinutes }) => {
      totalScore += healthScore;
      totalPrice += pricePerServing;
      totalMinutes += readyInMinutes;
      items++;
      setData({
        totalScore: totalScore,
        totalPrice: totalPrice,
        totalMinutes: totalMinutes,
        items: items,
      });
    });
  }, [menu]);

  return (
    <>
      {menu.map(
        ({
          id,
          img,
          title,
          healthScore,
          readyInMinutes,
          servings,
          vegan,
          pricePerServing,
        }) => {
          return (
            <div key={id}>
              <ItemMenu
                id={id}
                img={img}
                title={title}
                servings={servings}
                pricePerServing={pricePerServing}
                vegan={vegan}
                healthScore={healthScore}
                readyInMinutes={readyInMinutes}
               
              />
            </div>
          );
        }
      )}
    </>
  );
}
