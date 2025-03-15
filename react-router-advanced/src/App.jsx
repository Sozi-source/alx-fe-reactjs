import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import ProfileDetails from "./Pages/Profile/ProfileDetails";
import ProfileSettings from "./Pages/Profile/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/LoginPage";


function App(){


  return (
    <Router>
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element= {<ProtectedRoute> <Profile /> </ProtectedRoute>} >
        </Route>
        
        {/* Dynamic Routes for Blog Post */}
        <Route path="/blog/:id" element ={<BlogPost />} />
      </Routes>
    </Router>
  )
    
}
export default App;