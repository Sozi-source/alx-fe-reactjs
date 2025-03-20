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
    <div className="flex justify-center">
      <div className="m-6 rounded-2xl shadow-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center max-w-4xl">
        {recipe.map((recipe)=>(
           <div key={recipe.id} className="border border-gray-400 rounded-2xl mx-8">
            <h1 className="text-center text-blue-700 mt-10 text-xl">{recipe.title}</h1>
            {/* <p className="text-center text-green-500 mt-3">{recipe.summary}</p> */}
            <Link to={`/recipe/${recipe.id}`}> 
            <button className="text-center text-green-400 text justify-center text-xl">View Details</button>
            </Link>
           </div> 
        ))}
    </div>
    </div>
  )
}

export default HomePage;