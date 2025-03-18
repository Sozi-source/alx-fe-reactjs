import { useState, useEffect } from "react";

import React from 'react'

function HomePage() {

const[recipes, setRecipes]= useState([]);

useEffect(()=>{

    fetch("/data.json")
    .then(response =>response.json())
    .then(data => setRecipes(data))
    .catch((error)=>console.error("An error occured", error))
})
  
    
    return (
    <div>
        <h1 className="text-center font-bold text-2xl">Recipe List</h1>
        {recipes.map((recipe)=>(
           <div key={recipe.id}>
            <p className="text-center text-blue-700">{recipe.title}</p>
            <p className="text-center text-red-400">{recipe.summary}</p>
           </div> 
        ))}
    </div>
  )
}

export default HomePage;