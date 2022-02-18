import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchRecipes.css";
import { Field, Form, Formik } from "formik";

export default function SearchRecipes() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate(`/search/${keyword}`);
  //   setKeyword("");
  // };
  // const handleChange = (e) => {
  //   setKeyword(e.target.value);
  // };

  return (
    <div className="container my-4">
      <div className="row d-flex justify-content-center">
        <div className="col-xs-12 col-lg-6">
          <Formik
            initialValues={{
              keyword: "",
            }}
            validate={(valores) => {
              let errores = {};
              if (valores.keyword.length < 3) {
                errores.keyword = "Keyword must have at least 3 characters";
              }
              return errores;
            }}
            onSubmit={(values, { resetForm }) => {
              const inputKeyword = values.keyword;
              navigate(`/search/${inputKeyword}`);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div>
                  <Field
                    className="form-control"
                    type="text"
                    placeholder="Search Recipes..."
                    name="keyword"
                  />
                </div>
                {errors.keyword && (
                  <div className="alert alert-warning" role="alert">
                    {errors.keyword}
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
