import React, { useContext, useEffect } from "react";
import MenuContext from "../../context/MenuContext";
import MenuData from "../../context/MenuData";

export default function TotalsMenu() {
  const { menu } = useContext(MenuContext);
  const { data } = useContext(MenuData);
  let { totalScore, totalPrice, totalMinutes, items } = data;
  console.log("menu en totales:", menu);

  if (menu.length === 0) {
    totalScore = 0;
    totalPrice = 0;
    totalMinutes = 0;
    items = 0;
  }
  useEffect(() => {}, [data, menu]);

  return (
    <>
      <div className="row border rounded my-4 m-1">
        <h3>Totales</h3>
        <h6>Total Health: {totalScore}</h6>
        <h6>
          Ready In Aprox: {totalMinutes !== 0 ? totalMinutes / items : 0}min.
        </h6>
        <h6>Total Price: USD${totalPrice}</h6>
      </div>
    </>
  );
}
