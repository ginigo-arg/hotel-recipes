import React from "react";
import { Link, Route } from "wouter";
import "./App.css";
import { MenuContextProvider } from "./context/MenuContext";
import SearchRecipes from "./components/searchRecipes/searchRecipes";
import Home from "./pages/home";
import SearchResults from "./pages/searchResults";

function App() {
  // const [recipes, setRecipes] = useState([]);
  // const [path, pushLocation] = useLocation();
  // const [keyword, setKeyword] = useState("");

  // useEffect(() => {
  //   getRecipes({ keyword: "burger" }).then((recipe) => {
  //     setRecipes(recipe);
  //   });
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   pushLocation(`/complexSearch?query=${keyword}`);
  //   console.log(keyword);
  // };
  // const handleChange = (e) => {
  //   setKeyword(e.target.value);
  // };

  return (
    <>
      <MenuContextProvider>
        <Route component={Home} path="/" />
        <SearchRecipes />
        <Route component={SearchResults} path="/search/:keyword" />
      </MenuContextProvider>
    </>
  );
}

export default App;
