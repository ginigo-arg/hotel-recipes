import React from "react";
import ListRecipes from "../../components/listRecipes/listRecipes";
import MenuList from "../../components/menu/menu";
import TotalsMenu from "../../components/totalsMenu/totalsMenu";
import { useRecipes } from "../../hooks/useRecipes";
import NavBar from "../../components/navBar/navBar";
import SearchRecipes from "../../components/searchRecipes/searchRecipes";
export default function Home() {
  const { recipes } = useRecipes({ keyword: "burger", limit: "4" });

  return (
    <>
      <div className="container">
        <header>
          <NavBar />
        </header>
        <SearchRecipes />
      </div>
      <h3 className="container">Menu</h3>
      <div className="container list-menu border rounded py-3 d-flex  justify-content-evenly flex-wrap">
        <div className="col-7">
          <MenuList />
        </div>
        <div className="col-4 d-flex flex-direction-row align-items-end">
          <TotalsMenu />
        </div>
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
