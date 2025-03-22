import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import './index.css'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
import AddRecipeForm from './components/AddRecipeForm'


function App() {
  return (
    <div>
      <AddRecipeForm />
      
      {/* Router */}
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/recipe/:id' element={<RecipeDetail/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;