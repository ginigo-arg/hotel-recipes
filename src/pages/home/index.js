import React from "react";
import ListRecipes from "../../components/listRecipes/listRecipes";
import MenuList from "../../components/menu/menu";
import TotalsMenu from "../../components/totalsMenu/totalsMenu";
import { MenuContextProvider } from "../../context/MenuContext";
import { MenuDataProvider } from "../../context/MenuData";
import { useRecipes } from "../../hooks/useRecipes";

export default function Home() {
  const { recipes } = useRecipes({ keyword: "burger" });

  return (
    <>
      <h4>Home</h4>
      <div className="container list-menu border rounded">
        <MenuList />
      </div>
      <div className="container">
        <TotalsMenu />
      </div>
      <div className="container">
        <h3>Best Burger´s</h3>
      </div>
      <div className="container border rounded d-flex flex-wrap">
        <ListRecipes recipes={recipes} />
      </div>
    </>
  );
}
