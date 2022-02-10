import React from "react";
import ItemsRecipe from "../itemsRecipe/itemsRecipe";
import "./listRecipes.css";

export default function ListRecipes({ recipes }) {
  console.log("recipes: ", recipes);
  return (
    <>
      {recipes.map(
        ({
          id,
          img,
          title,
          summary,
          healthScore,
          readyInMinutes,
          servings,
          vegan,
          pricePerServing,
        }) => {
          return (
            <ItemsRecipe
              id={id}
              img={img}
              title={title}
              summary={summary}
              healthScore={healthScore}
              readyInMinutes={readyInMinutes}
              servings={servings}
              vegan={vegan}
              pricePerServing={pricePerServing}
              key={id}
            />
          );
        }
      )}
    </>
  );
}
