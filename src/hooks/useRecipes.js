import { useEffect, useState } from "react";
import { getRecipes } from "../services/getRecipes";

export function useRecipes({ keyword, limit }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(
    function () {
      getRecipes({ keyword, limit }).then((recipes) => {
        setRecipes(recipes);
      });
    },
    [keyword, limit]
  );

  return { recipes };
}
