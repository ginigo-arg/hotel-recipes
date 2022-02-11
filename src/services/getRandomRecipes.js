import axios from "axios";
import { URL, API_KEY } from "./setting";

export const getRandomRecipes = async () => {
  const apiURL = `${URL}/recipes/random?number=4&apiKey=${API_KEY}&addRecipeInformation=true`;
  const resp = await axios(apiURL);
  const { recipes } = resp.data;
  const RandomRecipes = recipes.map((recipe) => {
    return {
      id: recipe.id,
      img: recipe.image,
      title: recipe.title,
      summary: recipe.summary,
      healthScore: recipe.healthScore,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      vegan: recipe.vegan,
      pricePerServing: recipe.pricePerServing,
    };
  })

  return RandomRecipes ;

};
