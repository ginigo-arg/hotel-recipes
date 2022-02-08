import { useEffect, useState } from "react";
import { getRecipes } from "../services/getRecipes";

export function useRecipes({ keyword, limit }) {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getRecipes({ keyword, limit }).then((recipes) => {
        setRecipes(recipes);
        setLoading(false);
      });
    },
    [keyword, limit]
  );

  return { recipes, loading };
}
