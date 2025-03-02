import useRecipeStore  from './recipeStore';

const FavoritesList = () => {
  const favourites = useRecipeStore(state => state.favourites) || [];
  const removeFavourite = useRecipeStore(state => state.removeFavourite);

  return (
    <div>
      <h2>My Favorites</h2>
      {favourites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavourite(recipe.id)}>Remove from favourite</button>
        </div>
      ))}
      
    </div>
  );
};
export default FavoritesList;