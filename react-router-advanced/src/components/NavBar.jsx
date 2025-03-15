import { Link } from "react-router-dom";

function NavBar(){

return(
    <div>
        <nav className="navbar">
            <ul className="navlinks">
            <li><Link to= "/">Home</Link></li>
            <li><Link to= "/about">About</Link></li>
            <li><Link to= "/contact">Contact</Link></li>
            <li><Link to= "/blog/:id">Blogs</Link></li>
            </ul>
        </nav>
    </div>
)}
export default NavBar;