import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DetailContextProvider } from "../../context/DetailContext";
import { getSingleRecipe } from "../../services/getSingleRecipe";
import DetailRecipe from "../../components/detailRecipe/DetailRecipe";

export default function DetailPage() {

  useEffect(() => {
   
  }, []);

  return (
    <>
   

      <DetailRecipe />
    
    </>
  );
}
