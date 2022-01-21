import axios from "axios"
import {URL, API_KEY} from './setting'


export const getRecipes = async ({keyword='', limit='4'}) => {
    
    const apiURL = `${URL}/recipes/complexSearch?query=${keyword}&number=${limit}&addRecipeInformation=true&apiKey=${API_KEY}`
    const resp = await axios(apiURL)
    const {results} = resp.data
    const recipes = results.map(recipe =>{
      return {
        id: recipe.id,
        img: recipe.image,
        title: recipe.title,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        readyInMinutes: recipe.readyInMinutes
      }
    })
    return recipes
    }