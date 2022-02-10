import { API_KEY, SINGLE_URL } from "./setting";
import axios from "axios";

export const getSingleRecipe = async (id) => {
  const apiURL = `${SINGLE_URL}/${id}/information?apiKey=${API_KEY}`;
  const resp = await axios(apiURL);
  const recipe = resp.data;

  const SingleRecipe = {
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
  return SingleRecipe;
};
