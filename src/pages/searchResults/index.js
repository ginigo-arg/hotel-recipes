import ListRecipes from "../../components/listRecipes/listRecipes";
import NavBar from "../../components/navBar/navBar";
import { useRecipes } from "../../hooks/useRecipes";
import "./listRecipes.css";
import { useParams } from "react-router";
import SearchRecipes from "../../components/searchRecipes/searchRecipes";

export default function SearchResults() {
  const { keyword } = useParams();
  const { recipes } = useRecipes({ keyword });
  console.log("keyword:", keyword);

  return (
    <>
      <div className="container">
        <header>
          <NavBar />
        </header>
      </div>
      <SearchRecipes />
      <div className="container Recipe-result">
        <ListRecipes recipes={recipes} />
      </div>
    </>
  );
}
