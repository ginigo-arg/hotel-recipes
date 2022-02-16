import { Navigate } from "react-router-dom";

export default function RequireJwt({ children }) {
  const jwt = localStorage.getItem("token");

  if (!jwt) {
    return <Navigate to="/login" />;
  }

  return children;
}
