import { Link } from "react-router-dom";

const Navbar = ()=> {


    return (
        <nav>
        <ul>
            <li><Link to= "/">Home</Link></li>
            <li><Link to= "/recipe">Recipes</Link></li>
            <li><Link to= "/add-recipe">Add Recipe</Link></li>
            <li><Link to= "/favourite">Favourites</Link></li>
            <li><Link to= "/edit">Edit Recipes</Link></li>        
        </ul>
        </nav>

    )
}
export default Navbar;