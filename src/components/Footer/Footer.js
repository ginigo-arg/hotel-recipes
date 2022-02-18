import Logo from "../../sponnacular-logo-light.png";
import Github from "../../github-brands.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container bg-success border rounded py-3 Footer-App mt-5">
      <div className="row d-flex flex-direction-column align-items-center justify-content-center">
        <div className="col-4 d-flex justify-content-center ">
          <img src={Logo} alt="logo" className="w-50" />
        </div>
        <div className="col-4 d-flex justify-content-center Footer-img align-items-center sugerency">
          <a
            href="https://github.com/ginigo-arg/"
            target="_blank"
            rel="noreferrer"
            className="d-flex justify-content-center align-items-center"
          >
            Developed by
            <img src={Github} alt="profile-github" className="w-25 ms-2" />
          </a>
        </div>

        <div className="col-4 d-flex justify-content-center sugerency">
          <a
            href="https://github.com/ginigo-arg/hotel-recipes/issues/new"
            target="_blank"
            rel="noreferrer"
            className=" "
          >
            ● Send sugerency
          </a>
        </div>
      </div>
    </div>
  );
}
