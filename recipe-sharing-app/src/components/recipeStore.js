import {create} from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  favourites: [],
    

  addRecipe: (newRecipe) => 
    set(state => ({ recipes: [...state.recipes, newRecipe] })),
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

  
  addFavourites: (recipe) => 
    set((state)=> {
    if(state.favourites.some((fav) => fav.id === recipe.id)){
  return {favourites: state.favourites};
    }
  return {favourites: [...state.favourites, recipe]}
}),

removeFavourite: (id) =>
  set((state) => {
    const updatedFavourites = state.favourites.filter((fav) => fav.id !== id);
    return { favourites: updatedFavourites };
  }),


}));


export default useRecipeStore;

