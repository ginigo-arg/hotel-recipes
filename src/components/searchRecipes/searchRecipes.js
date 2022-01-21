import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function SearchRecipes() {
  const [path, pushLocation] = useLocation();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
    console.log(keyword);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search Recipes"
          value={keyword}
        ></input>
        <button>Buscar</button>
      </form>
    </header>
  );
}
