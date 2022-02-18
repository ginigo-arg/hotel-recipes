import React, { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import swal from "sweetalert";
import MenuContext from "../../context/MenuContext";

export default function FormMenu() {
  const { setOrderOk, setMenu } = useContext(MenuContext);

  function congrulation() {
    return swal({
      title: "Congrulations",
      text: "Your order has been send",
      icon: "success",
      button: {
        text: "Ok",
        className: "btn btn-success btn-alert",
      },
    });
  }

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          tel: "",
          textarea: "",
        }}
        validate={(valores) => {
          let errores = {};

          //validacion nombre
          if (!valores.name) {
            errores.name = "Please input your name.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "Name must be only letters and spaces";
          }
          //validacion correo
          if (!valores.tel) {
            errores.tel = "Please input your phone.";
          } else if (
            !/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(
              valores.tel
            )
          ) {
            errores.tel = "Number phone is incorrect";
          }

          return errores;
        }}
        onSubmit={(e, { resetForm }) => {
          resetForm();
          congrulation();
          setOrderOk(true);
          setMenu([]);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-3">
              <label className="form-label">
                Your Name{" "}
                <span className="badge rounded-pill bg-dark ms-2">
                  obligatory
                </span>
              </label>
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
              <label
                className="form-label "
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Phone number must be without spaces and simbols"
              >
                Your Phone
                <span className="badge rounded-pill bg-dark ms-2">
                  obligatory
                </span>
              </label>
              <Field
                className="form-control"
                name="tel"
                type="tel"
                placeholder="54381577728"
              />
            </div>
            {touched.tel && errors.tel && (
              <div className="alert alert-danger" role="alert">
                {errors.tel}
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Some detail </label>
              <Field
                name="textarea"
                as="textarea"
                placeholder="your detail"
                className="form-control"
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-success my-2">
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
