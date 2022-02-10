import ListRecipes from "../../components/listRecipes/listRecipes";
import NavBar from "../../components/navBar/navBar";
import { useRecipes } from "../../hooks/useRecipes";
import "./listRecipes.css";
import { useParams } from "react-router";
import SearchRecipes from "../../components/searchRecipes/searchRecipes";
import Spinner from "../../components/Spinner/Spinner";

export default function SearchResults() {
  const { keyword } = useParams();
  const { recipes, loading } = useRecipes({ keyword });
  return (
    <>
      <div className="container">
        <header>
          <NavBar />
        </header>
      </div>
      <SearchRecipes />
      <div className="container Recipe-result d-flex justify-content-center">
        {loading ? <Spinner /> : <ListRecipes recipes={recipes} />}
      </div>
    </>
  );
}
