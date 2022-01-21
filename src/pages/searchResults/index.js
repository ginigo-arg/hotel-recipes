import { useState, useEffect } from "react";
import ListRecipes from "../../components/listRecipes/listRecipes";
import { getRecipes } from "../../services/getRecipes";

export default function SearchResults({ params }) {
  const { keyword } = params;
  console.log(params);
  const [recipes, setRecipes] = useState([]);

  useEffect(
    function () {
      getRecipes({ keyword }).then((recipes) => {
        setRecipes(recipes);
      });
    },
    [keyword]
  );

  return (
    <>
      <ListRecipes recipes={recipes} />
    </>
  );
}
