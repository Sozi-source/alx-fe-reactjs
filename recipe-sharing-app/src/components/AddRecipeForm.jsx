// AddRecipeForm component
import { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const {recipes, addRecipe, deleteRecipe, updateRecipe} = useRecipeStore();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };


  return (

    <>
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title" style={{marginLeft: "100px", border: "solid black", height:"25px", width: "100%", fontWeight:"bolder"}}
      /> <br/>
      <textarea style={{marginTop: "20px", marginLeft:"100px", width: "100%", border: "solid greenyellow"}}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      /> <br/>
      <button type="submit" style={{border: "solid brown", marginLeft:"100px"}}>Add Recipe</button>
    </form>

  

    </>
  );
    
};
export default AddRecipeForm;