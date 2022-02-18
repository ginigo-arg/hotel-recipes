import ListRecipes from "../../components/listRecipes/listRecipes";
import NavBar from "../../components/navBar/navBar";
import { useRecipes } from "../../hooks/useRecipes";
import "./listRecipes.css";
import { useParams } from "react-router";
import SearchRecipes from "../../components/searchRecipes/searchRecipes";
import Spinner from "../../components/Spinner/Spinner";
import { Helmet } from "react-helmet";

export default function SearchResults() {
  const { keyword } = useParams();
  const { recipes, loading } = useRecipes({ keyword });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Helmet>
          <title>Result | {keyword}</title>
        </Helmet>
      )}
      <NavBar />

      <SearchRecipes />
      <div className="container mt-4 pe-0 mb-0">
        <p> ●Results for {keyword}</p>
      </div>
      <div className="container Recipe-result d-flex justify-content-center">
        {loading ? <Spinner /> : <ListRecipes recipes={recipes} />}
      </div>
      <div className="container Recipe-result d-flex justify-content-center">
        {recipes.length > 0 ? (
          <ListRecipes recipes={recipes} />
        ) : (
          <div className="alert alert-danger" role="alert">
            We're Sorry don't found any recipe.
          </div>
        )}
      </div>
    </>
  );
}
