import { Navigate, useLocation } from "react-router-dom";

export default function RequireJwt({ children }) {
  const jwt = localStorage.getItem("token");
  const location = useLocation();
  console.log("jwtApp:", jwt);


  if (!jwt) {
    return <Navigate to="/login" />;
  }

  return children;
}
