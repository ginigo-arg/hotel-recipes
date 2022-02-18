import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { Route } from "wouter";
import { MenuContextProvider } from "./context/MenuContext";
import { MenuDataProvider } from "./context/MenuData";
import Home from "./pages/home";
import SearchResults from "./pages/searchResults";
import Login from "./pages/Login/Login";
import "./App.css";
import RequireJwt from "./components/PrivateRoutes/PrivateRoutes";
import DetailPage from "./pages/DetailRecipe/Index";
import { DetailContextProvider } from "./context/DetailContext";
import Menu from "./pages/Menu";
import NoMatch from "./components/404/NoMatch";

function App() {
  return (
    <>
      <MenuContextProvider>
        <MenuDataProvider>
          <DetailContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/search/:keyword"
                  element={
                    <RequireJwt>
                      <SearchResults />
                    </RequireJwt>
                  }
                />
                <Route
                  path="/"
                  element={
                    <RequireJwt>
                      <Home />
                    </RequireJwt>
                  }
                />
                <Route
                  path="/menu"
                  element={
                    <RequireJwt>
                      <Menu />
                    </RequireJwt>
                  }
                />
                <Route
                  path="/detail/:name/:id"
                  element={
                    <RequireJwt>
                      <DetailPage />
                    </RequireJwt>
                  }
                />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </BrowserRouter>
          </DetailContextProvider>
        </MenuDataProvider>
      </MenuContextProvider>
    </>
  );
}

export default App;
