import react from "react";
import MenuList from "../../components/menu/menu";
import NavBar from "../../components/navBar/navBar";
import TotalsMenu from "../../components/totalsMenu/totalsMenu";

export default function Menu() {
  return (
    <>
      <header className="container mb-5">
        <NavBar />
      </header>
      <div className="container">
        <h3>Menu</h3>
        <div className="container list-menu border rounded py-3 d-flex flex-direction-column justify-content-evenly flex-wrap">
          <div className="col-xs-12 col-lg-7">
            <MenuList />
          </div>
          <div className="col-xs-12 col-md-12 col-lg-4 d-flex flex-direction-row align-items-end">
            <TotalsMenu />
          </div>
        </div>
      </div>
    </>
  );
}
