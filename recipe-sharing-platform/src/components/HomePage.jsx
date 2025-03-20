import { useState, useEffect } from "react";
import React from 'react'
import { Link } from "react-router-dom";

function HomePage() {

const[recipe, setRecipe]= useState([]);

useEffect(()=>{
    import("../data.json") 
      .then((module) => setRecipe(module.default))
      .catch((error) => console.error("Error loading JSON:", error));
},[])
  
    
    return (
    <div className="rounded-2xl shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipe.map((recipe)=>(
           <div key={recipe.id}>
            <h1 className="text-center text-blue-700 mt-10">{recipe.title}</h1>
            <p className="text-center text-green-500 mt-3">{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`}> 
            <button className="text-center text-amber-400">Vier Details</button>
            </Link>
           </div> 
        ))}
    </div>
  )
}

export default HomePage;