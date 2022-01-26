import React from "react";
import { Route } from "wouter";
import { MenuContextProvider } from "./context/MenuContext";
import { MenuDataProvider } from "./context/MenuData";
import SearchRecipes from "./components/searchRecipes/searchRecipes";
import Home from "./pages/home";
import SearchResults from "./pages/searchResults";

import "./App.css";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <>
      <MenuContextProvider>
        <MenuDataProvider>
          <div className="container">
            <header>
              <NavBar />
            </header>
          </div>
          <SearchRecipes />
          <Route component={Home} path="/" />
          <Route component={SearchResults} path="/search/:keyword" />
        </MenuDataProvider>
      </MenuContextProvider>
    </>
  );
}

export default App;
