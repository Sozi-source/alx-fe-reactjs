import useRecipeStore from "./store/useRecipeStore";
import AddRecipeForm from "./comp/AddRecipeForm";
import RecipeList from "./componnets/RecipeList";

function App(){

  const recipes = useRecipeStore((state) => state.recipes)


return (
<>
<h2>Recipes</h2>

<AddRecipeForm />
<RecipeList />

</>
)}
export default App;