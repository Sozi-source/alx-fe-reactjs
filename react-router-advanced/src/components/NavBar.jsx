import { Link } from "react-router-dom";

function NavBar(){

return(
    <div>
        <nav>
            <li><Link to= "/">Home</Link></li>
            <li><Link to= "/about">About</Link></li>
            <li><Link to= "/contact">Contact</Link></li>
        </nav>
    </div>
)}
export default NavBar;