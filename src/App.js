import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Route } from "wouter";
import { MenuContextProvider } from "./context/MenuContext";
import { MenuDataProvider } from "./context/MenuData";
import Home from "./pages/home";
import SearchResults from "./pages/searchResults";
import Login from "./pages/Login/Login";
import "./App.css";

function App() {
  return (
    <>
      <MenuContextProvider>
        <MenuDataProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Login />} path="/login" />
              <Route element={<Home />} path="/" />
              <Route element={<SearchResults />} path="/search/:keyword" />
            </Routes>
          </BrowserRouter>
        </MenuDataProvider>
      </MenuContextProvider>
    </>
  );
}

export default App;
