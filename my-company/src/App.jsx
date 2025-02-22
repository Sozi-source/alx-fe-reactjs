import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'



function App() {
  

  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/" about = {<About/>} />
        <Route path = "/" service = {<Services/>} />
        <Route path = "/" Contacts = {<Contacts/>} />
      </Routes>
    </Router>
  )
}

export default App;
