//import { useLogin } from "../../hooks/useLogin";
import { Field, Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { postLogin } from "../../services/loginService";

export default function LoginForm() {
  //const { handleChange, handleSubmit, user, formValues } = useLogin();
  const navigate = useNavigate();
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

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};

          //validar mail
          if (!valores.email) {
            errores.email = "Please Field email.";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "Email can only contain letters, numbers, dots, hyphens and underscores";
          }

          //validar longitus password
          if (!valores.password) {
            errores.password = "Please Field password.";
          } else if (valores.password.length < 5) {
            errores.password = "Password must be at least 5 characters";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          const data = { email: valores.email, password: valores.password };
          setUser({
            ...user,
            loading: true,
          });
          postLogin(data).then((datos) => {
            setUser(datos);
            console.log("datos:", datos);
          });
          resetForm();
        }}
      >
        {({ values, touched, errors }) => (
          <Form>
            <div className="mb-3">
              <Field
                type="text"
                name="email"
                placeholder="E-mail"
                className="form-control"
                value={values.email}
              />
              {touched.email && errors.email && (
                <div className="alert alert-danger" role="alert">
                  {errors.email}
                </div>
              )}
            </div>
            <div className="mb-3">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                value={values.password}
              />
              {touched.password && errors.password && (
                <div className="alert alert-danger" role="alert">
                  {errors.password}
                </div>
              )}
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-dark" disabled={user.loading}>
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {user.data.error && (
        <div className="alert alert-danger mt-3 text-center" role="alert">
          <span>Usser or Password incorrect</span>
        </div>
      )}
    </>
  );
}
