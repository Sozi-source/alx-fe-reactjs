import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import './index.css'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'


function App() {
  return (
    <div>
      <h1 className='text-black text-center pt-10 font-bold text-4xl hover:bg-green-500'>Recipe Sharing Platform</h1>
      
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