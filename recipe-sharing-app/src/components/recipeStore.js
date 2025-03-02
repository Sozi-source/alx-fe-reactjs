import {create} from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  favourite: [],
    

  addRecipe: (newRecipe) => 
    set(state => ({ recipes: [...state.recipes, {newRecipe}] })),
  setRecipes: (recipes) => 
    set({ recipes }),

  deleteRecipe: (id) => 
    set((state) =>({recipes: state.recipes.filter((recipe) => recipe.id !== id)})),
  
  updateRecipe: (updatedRecipe) => 
    set((state) => ({recipes: state.recipes.map((recipe)=>
       recipe.id === updatedRecipe.id ? {...recipe, ...updatedRecipe}: recipe)})),

  
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  getFilteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return searchTerm ? recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    
    :recipes
  },

  
  addFavourite: (recipe) => 
    set((state)=> {
    if(state.favourite.some((fav) => fav.id === recipe.id)){
  return {favourite: state.favourite};
    }
  return {favourite: [...state.favourite, recipe]}
}),


}));


export default useRecipeStore;

