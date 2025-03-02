import "./App.css"
import useRecipeStore from "./components/recipeStore";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeleteRecipe from "./components/DeleteRecipeButton";
import EditRecipeForm from "./components/EditRecipeForm";
import FavoritesList from "./components/FavoritesList";
import Navbar from "./components/Navbar";



function App(){

 return (
<>
<h2 style={{marginLeft:"100px"}}>Recipes</h2>

{/* Router */}
  <Router>
    <Navbar/>
  <Routes>
    <Route path="/" element = {<RecipeList/>} />
    <Route path="/recipe"  element = {<RecipeDetails/>} />
    <Route path="/edit/:id"  element = {<EditRecipeForm/>} />
    <Route path="/add-recipe"  element = {<AddRecipeForm/>} />
    <Route path="/favourite"  element = {<FavoritesList/>} />
 </Routes>
  </Router>
 
    

</>
)}
export default App;