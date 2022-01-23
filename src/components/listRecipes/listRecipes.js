import React from "react";
import ItemsRecipe from "../itemsMeat/itemsRecipe";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export default function ListRecipes({ recipes }) {
  console.log("recipes: ", recipes);
  return (
    <>
      <Container>
        <div>
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
      </Container>
    </>
  );
}
