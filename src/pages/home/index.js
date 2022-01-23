import React from "react";
import { Container } from "react-bootstrap";
import Menu from "../../components/menu/menu";
import SearchRecipes from "../../components/searchRecipes/searchRecipes";

export default function Home() {
  return (
    <>
      <Container>
        <h4>Home</h4>
        <Menu />
      </Container>
    </>
  );
}
