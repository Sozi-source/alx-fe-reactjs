import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import ProfileDetails from "./Pages/Profile/ProfileDetails";
import ProfileSettings from "./Pages/Profile/ProfileSettings";




function App(){


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile/>} >
            <Route path="profiledetails" element ={<ProfileDetails/>} />
            <Route path="profilesettings" element ={<ProfileSettings/>} />
        </Route>
      </Routes>
    </Router>
  )
    
}
export default App;