import { Link } from "react-router-dom";

const Navbar = ()=> {


    return (
        <nav>
            <ul>
                <li><Link to= "/add-recipe">Add Recipe</Link></li>
                <li><Link to= "/">Recipes</Link></li>
                <li><Link to= "/favourite">Favourites</Link></li>       
            </ul>
        </nav>

    )
}
export default Navbar;