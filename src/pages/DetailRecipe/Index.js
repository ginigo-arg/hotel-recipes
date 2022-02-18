import { useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../../components/navBar/navBar";
import DetailContext from "../../context/DetailContext";
import DetailRecipe from "../../components/detailRecipe/DetailRecipe";

export default function DetailPage() {
  const { detail } = useContext(DetailContext);
  const { title } = detail;
  useEffect(() => {}, []);
  return (
    <>
      <Helmet>
        <title>Detail | {title}</title>
      </Helmet>
      <NavBar />
      <div className="container">
        <DetailRecipe />
      </div>
    </>
  );
}
