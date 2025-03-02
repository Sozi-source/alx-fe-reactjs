import "./App.css"
import useRecipeStore from "./components/recipeStore";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { Routes, Route } from "react-router-dom";
import DeleteRecipe from "./components/DeleteRecipeButton";
import EditRecipeForm from "./components/EditRecipeForm";



function App(){

  const recipes = useRecipeStore((state) => state.recipes)


return (
<>
<h2 style={{marginLeft:"100px"}}>Recipes</h2>

<AddRecipeForm /> <br />
<RecipeDetails />
<DeleteRecipe/>
<EditRecipeForm />


{/* Router */}

 <Routes>
    <Route path="/" element = {<RecipeList/>} />
    <Route path="/recipe/: id"  element = {<RecipeDetails/>} />
    <Route path="/edit/: id"  element = {<RecipeDetails/>} />
 
 </Routes>
    

</>
)}
export default App;