// RecipeList component
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const addFavourites = useRecipeStore ((state)=>state.addFavourites)
  return (
    <div style={{marginLeft: "100px"}}>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3> <Link to = {`/recipe/${recipe.id}`}>{recipe.title}</Link> </h3>
          <p>{recipe.description}</p>

          <button onClick={()=> addFavourites(recipe)}>Add to Favourite ❤️</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;