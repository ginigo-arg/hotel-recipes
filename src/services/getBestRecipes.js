import axios from "axios";
import { URL, API_KEY } from "./setting";

export const getBestRecipes = async ({ limit = "5" }) => {
  const apiURL = `${URL}/recipes/complexSearch?number=${limit}&apiKey=${API_KEY}&addRecipeInformation=true`;
  const resp = await axios(apiURL);
  const { results } = resp.data;
  const recipes = results.map((recipe) => {
    return {
      id: recipe.id,
      img: recipe.image,
      title: recipe.title,
      summary: recipe.summary,
      healthScore: recipe.healthScore,
      readyInMinutes: recipe.readyInMinutes,
    };
  });
  return recipes;
};
