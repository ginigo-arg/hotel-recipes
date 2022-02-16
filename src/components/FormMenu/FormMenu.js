import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import swal from "sweetalert";

export default function FormMenu() {
  const [sendForm, setSendForm] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validate={(valores) => {
          let errores = {};

          //validacion nombre
          if (!valores.name) {
            errores.name = "Por favor ingresa un nombre.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "El nombre solo puede contener letras y espacios";
          }
          //validacion correo
          if (!valores.email) {
            errores.email = "Por favor ingresa un correo.";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          setSendForm(true);
          setTimeout(() => setSendForm(false), 3000);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <Field
                className="form-control"
                name="name"
                type="text"
                placeholder="Name"
              />
            </div>
            {touched.name && errors.name && (
              <div className="alert alert-danger" role="alert">
                {errors.name}
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <Field
                className="form-control"
                name="email"
                type="email"
                placeholder="challenge@alkemy.org"
              />
            </div>
            {touched.email && errors.email && (
              <div className="alert alert-danger" role="alert">
                {errors.email}
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Some detail</label>
              <Field
                name="mensaje"
                as="textarea"
                placeholder="your detail"
                className="form-control"
              />
            </div>
            <button className="btn btn-success my-2">Send</button>
            {sendForm === true && <div>mensaje enviado con exito</div>}
          </Form>
        )}
      </Formik>
    </>
  );
}
