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
import Recommended from "./components/RecommendationsList";



function App(){

 return (
<>
<SearchBar />
<DeleteRecipe />
{/* Router */}
  <div>
    <Navbar/>
  <Routes>
    <Route path="/add-recipe"  element = {<AddRecipeForm/>} />
    <Route path="/" element = {<RecipeList/>} />
    <Route path="/favourite"  element = {<FavoritesList/>} />
    <Route path="/recommended"  element = {<Recommended/>} />
 </Routes>
  </div>
 
    

</>
)}
export default App;