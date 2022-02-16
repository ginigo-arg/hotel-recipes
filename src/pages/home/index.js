import React from "react";
import NavBar from "../../components/navBar/navBar";
import SearchRecipes from "../../components/searchRecipes/searchRecipes";
import Burger from "../../components/CategoriesFood/burgers";
import Pizza from "../../components/CategoriesFood/pizza";
export default function Home() {
  // const [randomRecipes, setRandomRecipes] = useState([]);

  return (
    <>
      <NavBar />
      <SearchRecipes />

      <div className="container mt-4">
        <h3>Best burgers</h3>
        <Burger />
      </div>

      <div className="container mt-4">
        <h3>Best Pizzas</h3>
        <Pizza />
      </div>
    </>
  );
}
