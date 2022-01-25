import React, { useContext, useEffect } from "react";
import MenuContext from "../../context/MenuContext";

export default function Menu() {
  //extrayendo datos del hook menu
  const { menu, setmenu } = useContext(MenuContext);

  useEffect(() => {
    console.log("renderizandondo menu");
  }, [menu]);

  return (
    <>
      {menu.map(({ title, img, id }) => {
        return (
          <>
            <div className="container">
              <div className="row">
                <div className="col" key={id}>
                  <img src={img} alt={img} style={{ width: "120px" }} />
                </div>
                <div className="col">
                  <h6>{title}</h6>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
