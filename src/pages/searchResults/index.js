import ListRecipes from "../../components/listRecipes/listRecipes";

import { useRecipes } from "../../hooks/useRecipes";
import "./listRecipes.css";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { recipes } = useRecipes({ keyword });

  return (
    <>
      <div className="container Recipe-result">
        <ListRecipes recipes={recipes} />
      </div>
    </>
  );
}
