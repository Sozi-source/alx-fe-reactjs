
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
        <div>
            <button onClick={()=>navigate(-1)}>Back</button>
            <h1>{recipe.title}</h1>
            <p> {recipe.ingredients}</p>
            <p> {recipe.instructions} </p>
        </div>
     )
}

export default RecipeDetail;