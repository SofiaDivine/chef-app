import React from "react";
import Recipe from "./Recipe.jsx";
import IngredientsList from "./IngredientsList.jsx";

export default function Main() {

const [ingredients, setIngredients] = React.useState(
["all the main spices", "pasta", "ground beef", "tomato paste"]
)

const [recipeShown, setRecipeShown] = React.useState(false);

function toggleRecipeShown() {
  setRecipeShown(prevShown => !prevShown);
}

function handleAddIngredient(formData) {
  const newIngredient = formData.get("ingredient");
  setIngredients(prevIndredients => [...prevIndredients, newIngredient]);
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

{ingredients.length > 0 && <IngredientsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown}/>}

{recipeShown && <Recipe/>}
  </main>
)
}