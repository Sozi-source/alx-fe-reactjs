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
    <div className="rounded-2xl shadow-lg">
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