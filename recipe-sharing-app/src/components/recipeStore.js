// import {create} from 'zustand'

// const useRecipeStore = create(set => ({
//   recipes: [],
//   favourite: [],

//   addRecipe: (newRecipe) => 
//     set(state => ({ recipes: [...state.recipes, newRecipe] })),
//   setRecipes: (recipes) => 
//     set({ recipes }),

//   deleteRecipe: (id) => 
//     set((state) =>({recipes: state.recipes.filter((recipe) => recipe.id !== id)})),
  
//   updateRecipe: (updatedRecipe) => 
//     set((state) => ({recipes: state.recipes.map((recipe)=>
//        recipe.id === updatedRecipe.id ? {...recipe, ...updatedRecipe}: recipe)})),

  
  
//        AddFavourite: (recipe) => 
//     set((state)=> {
//     if(state.favourite.some((fav) => fav.id === recipe.id)){
//   return state;
//     }
//   return {favourite: [...state.favourite, recipe]}
// }),
// }));


// export default useRecipeStore;

import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: JSON.parse(localStorage.getItem("recipes")) || [],
  favourites: JSON.parse(localStorage.getItem("favourites")) || [],
  searchTerm: "", // 🔍 Add search state

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      return { recipes: updatedRecipes };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      const updatedFavourites = state.favourites.filter((favId) => favId !== id);
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return { recipes: updatedRecipes, favourites: updatedFavourites };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
      );
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      return { recipes: updatedRecipes };
    }),

  addFavourite: (id) =>
    set((state) => {
      if (state.favourites.includes(id)) return state;
      const updatedFavourites = [...state.favourites, id];
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return { favourites: updatedFavourites };
    }),

  removeFavourite: (id) =>
    set((state) => {
      const updatedFavourites = state.favourites.filter((favId) => favId !== id);
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return { favourites: updatedFavourites };
    }),

  setSearchTerm: (term) => set({ searchTerm: term }), // 🔍 Add search functionality
}));

export default useRecipeStore;
