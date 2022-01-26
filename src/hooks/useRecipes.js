import { useEffect, useState } from "react";
import { getRecipes } from "../services/getRecipes";

export function useRecipes({ keyword }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(
    function () {
      getRecipes({ keyword }).then((recipes) => {
        setRecipes(recipes);
      });
    },
    [keyword]
  );

  return { recipes };
}
