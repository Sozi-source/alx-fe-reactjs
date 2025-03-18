import { useState, useEffect } from "react";
import React from 'react'


function HomePage() {

const[recipes, setRecipes]= useState([]);

useEffect(()=>{
    import("../data.json") 
      .then((module) => setRecipes(module.default))
      .catch((error) => console.error("Error loading JSON:", error));
},[])
  
    
    return (
    <div className="rounded-2xl shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <h1 className="text-center font-bold text-2xl hover:bg-green-500">Recipe List</h1>
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