
import recipeStore from "./components/recipeStore";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";


function App(){

  const recipes = recipeStore((state) => state.recipes)


return (
<>
<h2>Recipes</h2>

<AddRecipeForm />
<RecipeList />

</>
)}
export default App;