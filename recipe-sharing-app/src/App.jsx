import "./App.css"
import useRecipeStore from "./components/recipeStore";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";


function App(){

  const recipes = useRecipeStore((state) => state.recipes)


return (
<>
<h2 style={{marginLeft:"100px"}}>Recipes</h2>

<AddRecipeForm /> <br />
<RecipeDetails />

</>
)}
export default App;