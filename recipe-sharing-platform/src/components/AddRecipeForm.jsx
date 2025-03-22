import React, { useState } from 'react'

function AddRecipeForm() {

const[title, setTitle]=useState("")
const[ingredients, setIngredients]= useState("")
const[preparation, setPreparation]= useState("")
const[error, setError] =useState({})

const handleSubmit=(e)=>{
    e.preventDefault()

    // Validation Error
const validationError ={}
if(!title.trim())validationError.title= "Title is required"
if(!ingredients.trim())validationError.ingredients = "Ingredients is required"
if(!preparation.trim())validationError.preparation = "Preparation method is required"

if (Object.keys(validationError).length > 0){
    setError(validationError);
    return
}

const newRecipe ={
    title: title.trim(),
    ingredients: ingredients.trim(),
    preparation: preparation.trim()
}
console.log("New Recipes", newRecipe)
    // clear fields
    setTitle("");
    setIngredients("");
    setPreparation("");
    setError({});
}

return (
    <div className='flex justify-center mt-10'>
        <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 shadow-2xl bg-gray-300'>
            <div>
                <label htmlFor="title">Title</label><br />
            <textarea name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}
            className='border border-gray-400'></textarea> <br />
            {error?.title && <p className='text-red-500'>{error.title}</p>}
            </div>

            <div >
                <label htmlFor="ingredient">Ingredients</label><br />
            <textarea name="ingredients" id="ingredient" value={ingredients} onChange={(e)=>setIngredients(e.target.value)}
            className='border border-gray-400'></textarea> <br />
            {error?.ingredients && <p className='text-red-500'>{error.ingredients}</p>}
            </div>

            <div>
                <label htmlFor="preparation">Preparation</label><br />
            <textarea name="preparation" id="preparation" value={preparation} onChange={(e)=>setPreparation(e.target.value)}
            className='border border-gray-400 mt'></textarea> <br />
            {error?.preparation && <p className='text-red-500'>{error.preparation}</p>}
            </div>
            
            <button type='submit' className=' rounded-md mt-5 border border-black bg-blue-400 hover:bg-red-500 w-20 h-12'>Submit</button>   
                  
        </form>
    </div>
  )
}

export default AddRecipeForm