
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function RecipeDetail() {
const {id}=useParams()
const[recipe, setRecipe]= useState([])
const navigate =useNavigate();

useEffect(()=>{
    import('../data.json')
    .then(({default: recipes})=> {
        const selectedRecipe = recipes.find((r)=>r.id.toString()===id);
        setRecipe(selectedRecipe || null);
    })

}, [id])

if(!recipe) return <p>Recipe Loading...</p>

  return (   
        <div className='max-w-md mx-auto px-6 py-6 bg-rose-200 shadow-xl rounded-2xl border border-gray-200 mt-5'>
            <button onClick={()=>navigate(-1)} className='mb-4 px-4 bg-blue-300 text-gray-800 rounded-lg hover:bg-gray-400 transition'>Back</button>
            
            <img src='recipe.image' alt='recipe.title'/>
            <p className='text-2xl font-bold text-gray-800 mb-2'>{recipe.title}</p>

            <h1 className='text-lg font-bold text-gray-700 mt-4 gap-2'>Ingredients</h1>
            <p className='text-1g text-gray-700 mt-4 gap-2 italic'> {recipe.ingredients?.join(", ")}</p>

            <p className='text-gray-600 font-bold'>Instructions</p>
            <ol className='list-decimal list-inside'> {recipe.instructions?.split(".").map((step, index)=>(
                <li key={index}>{step}. </li>
            ))} 
            </ol>
        </div>
     )
}

export default RecipeDetail;