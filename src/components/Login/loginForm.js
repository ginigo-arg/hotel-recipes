//import { useLogin } from "../../hooks/useLogin";
import { Field, Formik, Form } from "formik";

export default function LoginForm() {
  //const { handleChange, handleSubmit, user, formValues } = useLogin();

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
            errores.email = "Please input email.";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "Email can only contain letters, numbers, periods, hyphens and underscores";
          }

          //validar longitus password
          if (!valores.password) {
            errores.password = "Please input password.";
          } else if (valores.password.length < 5) {
            errores.password = "Password must be at least 5 characters";
          }
          return errores;
        }}
        onSubmit={() => {}}
      >
        {({ values, touched, errors }) => (
          <Form>
            <div className="mb-3">
              <Field
                type="text"
                name="email"
                placeholder="correo@correo.com"
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
                placeholder="*******"
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
              <button className="btn btn-dark" type="button">
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
