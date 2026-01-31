import React from "react";
import LlamaRecipe from "./LlamaRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";
import { getRecipeFromLlama } from "../ai.js";

export default function Main() {

const [ingredients, setIngredients] = React.useState([])

const [recipe, setRecipe] = React.useState("");

function handleAddIngredient(formData) {
  const newIngredient = formData.get("ingredient");
  setIngredients(prevIndredients => [...prevIndredients, newIngredient]);
}

async function getRecipe() {
try {
        const recipeMarkdown = await getRecipeFromLlama(ingredients)
        setRecipe(recipeMarkdown)
    } catch (err) {
        console.error("Помилка:", err)
    }
}

return (
  <main>

<form className="add-ingredient-form" action={handleAddIngredient}>
<input
type="text"
placeholder="e.g. tomatoes"
aria-label="Add ingredients"
name="ingredient"
/>
<button>Add ingredient</button>
</form>

{ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}

{recipe && <LlamaRecipe recipe={recipe}/>}
  </main>
)
}