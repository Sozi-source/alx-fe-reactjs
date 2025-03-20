import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import './index.css'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'


function App() {
  return (
    <div>
      
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