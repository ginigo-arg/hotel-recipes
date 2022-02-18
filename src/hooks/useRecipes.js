import { useEffect, useState } from "react";
import { getRecipes } from "../services/getRecipes";

export function useRecipes({ keyword, limit }) {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      getRecipes({ keyword, limit }).then((recipes) => {
        setRecipes(recipes);
        setLoading(false);
      });
      if (recipes.length < 1) {
        setError(true);
      }
    },
    [keyword, limit, recipes.length]
  );

  return { recipes, loading, error };
}
