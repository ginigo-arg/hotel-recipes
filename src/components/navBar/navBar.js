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

  useEffect(() => {}, [menu]);

  const handleLoginOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-light bg-success navbar-expand-lg mt-lg-4  rounded me-lg-5 ms-lg-5">
          <div className="container d-flex justify-content-center">
            <div className="row">
              <div className="col-xs-12 col-lg-4 App-logo">
                <Link to="/">
                  <img src={Logo} alt="app-logo" />
                </Link>
              </div>
              <div className="col-xs-12 col-md-12 col-lg-4 App-menu">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item me-2">
                    <Link to="/" className="nav-link" aria-current="page">
                      <FontAwesomeIcon icon={faHome} className="me-1" />
                      Home
                    </Link>
                  </li>
                  <li className="nav-item position-relative me-2">
                    <Link to="/menu" className="nav-link">
                      <FontAwesomeIcon
                        icon={faConciergeBell}
                        className="me-1"
                      />
                      Menu
                    </Link>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                      {menu.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </li>
                  <li className="nav-item me-2">
                    <Link to="/search/" className="nav-link">
                      <FontAwesomeIcon icon={faSearch} className="me-1" />
                      Searchs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-lg-4 App-session pe-lg-5">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={handleLoginOut}
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
