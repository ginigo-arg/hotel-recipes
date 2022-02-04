import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./searchRecipes.css";

export default function SearchRecipes() {
  // const [path, pushLocation] = useLocation();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
    setKeyword("");
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="container my-4">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              placeholder="Search Recipes..."
              value={keyword}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
