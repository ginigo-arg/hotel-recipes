import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import Logo from "../../sponnacular-logo-light.png";
import "./navBar.css";
import {
  faConciergeBell,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import MenuContext from "../../context/MenuContext";
import { useNavigate, Link } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const { menu } = useContext(MenuContext);
  console.log("data navbar: ", menu.length);

  useEffect(() => {
    console.log("render navbar");
  }, [menu]);

  const handleLoginOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-light bg-success navbar-expand-lg mt-4  rounded">
        <div className="container d-flex justify-content-center d-sm-flex flex- ">
          <div className="row w-100">
            <div className="col-4 App-logo">
              <Link to="/">
                <img src={Logo} alt="app-logo" />
              </Link>
            </div>
            <div className="col-4 App-menu">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                <li className="nav-item position-relative me-2">
                  <Link to="/" className="nav-link" aria-current="page">
                    <FontAwesomeIcon icon={faHome} className="me-1" />
                    Home
                  </Link>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                    {menu.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </li>
                <li className="nav-item me-2">
                  <Link to="" className="nav-link">
                    <FontAwesomeIcon icon={faConciergeBell} className="me-1" />
                    Menu
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link to="" className="nav-link">
                    <FontAwesomeIcon icon={faSearch} className="me-1" />
                    Searchs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4 App-session d-flex justify-content-end pe-5">
              <button
                type="button"
                className="btn btn-outline-warning"
                onClick={handleLoginOut}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
