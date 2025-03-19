

import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';



function RecipeDetail() {
const {id}= useParams();
const[recipe, setRecipe]= useState(null)

useEffect(()=>{
    fetch('/data.json')
    .then(response=> response.json())
    .then(data=>{
        const selectedRecipe = data.find((recipe)=>recipe.id===parseInt(id));
    setRecipe(selectedRecipe);
    },[id]);
    })

    
    

if(!recipe) return <p>Loading...</p>


  return (
    <div>
        <h1>{recipe.title}</h1>
        <ul>{recipe.ingredients.map((ingredient, index)=>(
            <li key={index}>{ingredient}</li>
        ))}</ul>
        <p>{recipe.instructions}</p>
        <p>{recipe.image}</p>
    </div>
  )
}

export default RecipeDetail;