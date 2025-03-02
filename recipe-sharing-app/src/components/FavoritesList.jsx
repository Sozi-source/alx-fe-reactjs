import useRecipeStore  from './recipeStore';

const FavoritesList = () => {
  const favourites = useRecipeStore(state => state.favourites)


  return (
    <div>
      <h2>My Favorites</h2>
      {favourites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
export default FavoritesList;