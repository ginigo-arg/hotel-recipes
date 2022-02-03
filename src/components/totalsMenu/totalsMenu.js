import React, { useContext, useEffect } from "react";

import MenuData from "../../context/MenuData";

export default function TotalsMenu() {
  const { data } = useContext(MenuData);
  const { totalScore, totalPrice, totalMinutes, items } = data;
  useEffect(() => {}, [data]);

  return (
    <>
      <div className="container border rounded my-4">
        <h3>Totales</h3>
        <h6>Total Health: {totalScore}</h6>
        <h6>Ready In Aprox: {totalMinutes / items}min.</h6>
        <h6>Total Price: USD${totalPrice}</h6>
      </div>
    </>
  );
}
