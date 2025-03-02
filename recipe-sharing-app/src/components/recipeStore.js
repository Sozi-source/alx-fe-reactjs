import {create} from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  favourites: [],
  recommendations: [],
    

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
    const updatedFavorites = state.favourites.filter((fav) => fav.id !== id);
    return { favorites: updatedFavorites };
  }),
 
  generateRecommendations: () => set((state) => {
    const favoriteIds = state.favorites.map(fav => fav.id);
    const recommended = state.recipes.filter(recipe => favoriteIds.includes(recipe.id));
    return { recommendations: recommended };
  }),

}));


export default useRecipeStore;

