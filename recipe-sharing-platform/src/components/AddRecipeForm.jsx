import React, { useState } from 'react'


function AddRecipeForm() {

const[title, setTitle]=useState("")
const[ingredients, setIngredients]= useState("")
const[steps, setSteps]= useState("")
const[errors, setErrors] =useState({})

const handleSubmit=(e)=>{
    e.preventDefault()

    // Validation Error
const validate ={}
if(!title.trim())validate.title= "Title required"
if(!ingredients.trim())validate.ingredients = "Ingredients required"
if(!steps.trim())validate.steps = "Preparation steps required"

if (Object.keys(validate).length > 0){
    setErrors(validate);
    return
}

const newRecipe ={
    title: title.trim(),
    ingredients: ingredients.trim(),
    steps: steps.trim()
}
// store new recipes in localStorage
localStorage.setItem("New Recipes", JSON.stringify(newRecipe))
    // clear fields
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
}

return (
    <div className='flex justify-center mt-10'>
        <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 shadow-2xl bg-gray-300'>
            <div>
                <label htmlFor="title"className='font-bold font-serif'>Title</label><br />
            <textarea name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}
            className='border border-gray-400'></textarea> <br />
            {errors?.title && <p className='text-red-500'>{errors.title}</p>}
            </div>

            <div >
                <label htmlFor="ingredient" className='font-bold font-serif'>Ingredients</label><br />
            <textarea name="ingredients" id="ingredient" value={ingredients} onChange={(e)=>setIngredients(e.target.value)}
            className='border border-gray-400'></textarea> <br />
            {errors?.ingredients && <p className='text-red-500'>{errors.ingredients}</p>}
            </div>

            <div>
                <label htmlFor="preparation" className='font-bold font-serif' >Preparation Steps</label><br />
            <textarea name="preparation" id="preparation" value={steps} onChange={(e)=>setSteps(e.target.value)}
            className='border border-gray-400 mt'></textarea> <br />
            {errors?.steps && <p className='text-red-500'>{errors.steps}</p>}
            </div>
            
            <button type='submit' className=' rounded-md mt-5 border border-black bg-blue-400 hover:bg-red-500 w-20 h-12 font-semibold'>Submit</button>   
                  
        </form>
    </div>
  )
}

export default AddRecipeForm