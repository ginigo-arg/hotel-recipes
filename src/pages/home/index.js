import React from "react";
import ListRecipes from "../../components/listRecipes/listRecipes";
import MenuList from "../../components/menu/menu";
import TotalsMenu from "../../components/totalsMenu/totalsMenu";
import { useRecipes } from "../../hooks/useRecipes";
import NavBar from "../../components/navBar/navBar";
import SearchRecipes from "../../components/searchRecipes/searchRecipes";
import { useEffect, useState } from "react";
import { getRandomRecipes } from "../../services/getRandomRecipes";
import Spinner from "../../components/Spinner/Spinner"
export default function Home() {
  // const { recipes } = useRecipes({ keyword: "burger", limit: "4" });
  const [loading, setLoading] = useState(false)
   const [randomRecipes, setRandomRecipes] = useState([])
  useEffect(function(){
    setLoading(true)
    getRandomRecipes().then((randomRecipes)=>{
      setRandomRecipes(randomRecipes)
      setLoading(false)
    })
  },[])
  
  return (
    <>
      <div className="container">
        <header>
          <NavBar />
        </header>
        <SearchRecipes />
      </div>
    

      <div className="container mt-4">
        <h3>Best Foods</h3>
      </div>

      <div className="container border rounded d-flex justify-content-center flex-wrap mb-5 pb-4 pt-2">
        {loading ? <Spinner/> : <ListRecipes recipes={randomRecipes} />}
      </div>
    </>
  );
}
