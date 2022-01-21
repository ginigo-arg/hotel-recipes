import React from "react";
import ItemsRecipe from "../itemsMeat/itemsRecipe";
import "./listRecipes.css";

export default function ListRecipes({ recipes }) {
  console.log("recipes: ", recipes);
  return (
    <>
      <div className="list-recipe-c">
        {recipes.map(({ title, id, healthScore, img }) => {
          return (
            <ItemsRecipe
              title={title}
              id={id}
              healthScore={healthScore}
              img={img}
              key={id}
            />
          );
        })}
      </div>
    </>
  );
}
