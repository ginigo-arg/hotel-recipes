import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
// import { Route } from "wouter";
import { MenuContextProvider } from "./context/MenuContext";
import { MenuDataProvider } from "./context/MenuData";
import Home from "./pages/home";
import SearchResults from "./pages/searchResults";
import Login from "./pages/Login/Login";
import "./App.css";
import RequireJwt from "./components/PrivateRoutes/PrivateRoutes";
function App() {
  return (
    <>
      <MenuContextProvider>
        <MenuDataProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/search/:keyword" element={<SearchResults />} />
              <Route
                path="/"
                element={
                  <RequireJwt>
                    <Home />
                  </RequireJwt>
                }
              />
            </Routes>
          </BrowserRouter>
        </MenuDataProvider>
      </MenuContextProvider>
    </>
  );
}

export default App;
