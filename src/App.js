import React from "react";
import { Link, Route } from "wouter";
import { MenuContextProvider } from "./context/MenuContext";
import SearchRecipes from "./components/searchRecipes/searchRecipes";
import Home from "./pages/home";
import SearchResults from "./pages/searchResults";
import { Col, Container, Row, Image } from "react-bootstrap";
import Logo from "./sponnacular-logo.png";
import "./App.css";
import NavBar from "./components/navBar/navBar";

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
        <div className="container">
          <header>
            <NavBar />
          </header>
        </div>
        <SearchRecipes />
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
      </MenuContextProvider>
    </>
  );
}

export default App;
