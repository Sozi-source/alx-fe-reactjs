import "./App.css"
import useRecipeStore from "./components/recipeStore";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import { Routes, Route } from "react-router-dom";


function App(){

  const recipes = useRecipeStore((state) => state.recipes)


return (
<>
<h2 style={{marginLeft:"100px"}}>Recipes</h2>

<AddRecipeForm /> <br />
<RecipeDetails />

{/* Router */}

 <Routes>
    <Route path="/" element = {<RecipeList/>} />
    <Route path="/recipe/: id"  element = {<RecipeDetails/>} />
    <Route path="/edit/: id"  element = {<RecipeDetails/>} />
 
 </Routes>
    

</>
)}
export default App;