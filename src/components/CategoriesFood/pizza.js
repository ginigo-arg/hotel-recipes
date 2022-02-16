import { useRecipes } from "../../hooks/useRecipes";
import ListRecipes from "../listRecipes/listRecipes";
import Spinner from "../Spinner/Spinner";

export default function Pizza() {
  const { recipes, loading } = useRecipes({ keyword: "pizza", limit: "4" });

  return (
    <>
      <div className="container border rounded d-flex justify-content-center flex-wrap mb-5 pb-4 pt-2">
        {loading ? <Spinner /> : <ListRecipes recipes={recipes} />}
      </div>
    </>
  );
}
