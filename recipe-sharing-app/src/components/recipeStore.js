import {create} from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  favourite: [],

  addRecipe: (newRecipe) => 
    set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => 
    set({ recipes }),

  deleteRecipe: (id) => 
    set((state) =>({recipes: state.recipes.filter((recipe) => recipe.id !== id)})),
  
  updateRecipe: (updatedRecipe) => 
    set((state) => ({recipes: state.recipes.map((recipe)=>
       recipe.id === updatedRecipe.id ? {...recipe, ...updatedRecipe}: recipe)})),

  
  
       AddFavourite: (recipe) => 
    set((state)=> {
    if(state.favourite.some((fav) => fav.id === recipe.id)){
  return state;
    }
  return {favourite: [...state.favourite, recipe]}
}),
}));


export default useRecipeStore;

