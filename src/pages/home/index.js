import React, { useContext, useState } from "react";
import NavBar from "../../components/navBar/navBar";
import SearchRecipes from "../../components/searchRecipes/searchRecipes";
import Burger from "../../components/CategoriesFood/burgers";
import Pizza from "../../components/CategoriesFood/pizza";
import Pasta from "../../components/CategoriesFood/pasta";
import Welcome from "../../components/Welcome/Welcome";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  function abrirModal() {
    if (!localStorage.getItem("modalAbierto")) {
      setShowModal(true);
      localStorage.setItem("modalAbierto", true);
    }
  }

  return (
    <>
      <NavBar />
      <SearchRecipes />

      <div className="invisible">{setTimeout(() => abrirModal(), 5000)}</div>
      <div>{showModal && <Welcome />}</div>
      <div className="container mt-4">
        <h3>Best burgers</h3>
        <Burger />
      </div>

      <div className="container mt-4">
        <h3>Best Pizzas</h3>
        <Pizza />
      </div>

      <div className="container mt-4">
        <h3>Best Pastas</h3>
        <Pasta />
      </div>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}
