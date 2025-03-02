import "./App.css"
import useRecipeStore from "./components/recipeStore";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import DeleteRecipe from "./components/DeleteRecipeButton";
import EditRecipeForm from "./components/EditRecipeForm";
import FavoritesList from "./components/FavoritesList";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { Routes, Route } from "react-router-dom";



function App(){

 return (
<>
<SearchBar />
<DeleteRecipe />
<h2 style={{marginLeft:"100px"}}>Recipes</h2>

{/* Router */}
  <div>
    <Navbar/>
  <Routes>
    <Route path="/" element = {<RecipeList/>} />
    <Route path="/recipe"  element = {<RecipeDetails/>} />
    <Route path="/edit/:id"  element = {<EditRecipeForm/>} />
    <Route path="/add-recipe"  element = {<AddRecipeForm/>} />
    <Route path="/favourite"  element = {<FavoritesList/>} />
 </Routes>
  </div>
 
    

</>
)}
export default App;