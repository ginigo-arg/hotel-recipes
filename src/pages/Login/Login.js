import Logo from "../../sponnacular-logo-light.png";
import LoginForm from "../../components/Login/loginForm";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Spoonacular App | Login</title>
      </Helmet>
      <div className="container-fluid w-100 vh-100 bg-success d-flex justify-content-center">
        <div className="row d-flex flex-column align-items-center justify-content-center">
          <div className="col-12">
            <Link to="/">
              <img src={Logo} alt="app-logo" className="w-100" />
            </Link>
          </div>
          <div className="col-12">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
