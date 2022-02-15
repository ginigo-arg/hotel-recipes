import { useEffect } from "react";
import DetailRecipe from "../../components/detailRecipe/DetailRecipe";
import NavBar from "../../components/navBar/navBar";

export default function DetailPage() {
  useEffect(() => {}, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <DetailRecipe />
      </div>
    </>
  );
}
