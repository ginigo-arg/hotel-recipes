import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DetailContextProvider } from "../../context/DetailContext";
import { getSingleRecipe } from "../../services/getSingleRecipe";
import DetailRecipe from "../../components/detailRecipe/DetailRecipe";
import NavBar from "../../components/navBar/navBar";

export default function DetailPage() {

  useEffect(() => {
   
  }, []);

  return (
    <>
    <div className="container">

    <header>
      <NavBar/>
    </header>

      <DetailRecipe />
    
    </div>
    </>
  );
}
