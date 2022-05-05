import Logo from "../../sponnacular-logo-light.png";
import LoginForm from "../../components/Login/loginForm";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router";
import MessageLogin from "../../components/MessageLogin/MessageLogin";

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  function abrirModal() {
    if (!localStorage.getItem("token")) {
      setShowModal(true);
    }
  }
  const handleAdmin = () => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE"
    );
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <>
      <Helmet>
        <title>Spoonacular App | Login</title>
      </Helmet>
      <div className="w-100 bg-success text-success">
        {setTimeout(() => abrirModal(), 3000)}
      </div>
      <div className="text-success d-flex flex-direction-row justify-content-end bg-success text-white">
        <button className="btn btn-succes text-white" onClick={handleAdmin}>
          Sig in as Super Admin
        </button>
      </div>
      <div className="bg-success">{showModal && <MessageLogin />}</div>
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
