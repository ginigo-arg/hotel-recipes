import { useState, useEffect } from "react";
import { postLogin } from "../services/loginService";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState({
    data: { token: null },
    loading: false,
  });

  useEffect(() => {
    console.log("user:", user);

    if (user.data.token) {
      localStorage.setItem("token", JSON.stringify(user.data.token));

      navigate("/");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      ...user,
      loading: true,
    });

    postLogin(formValues).then((datos) => {
      setUser(datos);
      console.log("datos: ", datos);
    });
    setFormValues({
      email: "",
      password: "",
    });
  };

  return { user, handleChange, handleSubmit, formValues };
}
