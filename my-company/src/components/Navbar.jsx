import { Link } from "react-router-dom";

function Navbar(){

    return (

        <nav style={{ backgroundColor: "pink", padding: "10px", textAlign: "center" }}>
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "center", gap: "20px" }}> 
                <li ><Link to = "/" style={{ color: "black", textDecoration: "none", backgroundColor: "greenyellow"}}>Home</Link></li>
                <li><Link to = "/about" style={{ color: "black", textDecoration: "none", backgroundColor: "greenyellow" }}>About</Link></li>
                <li><Link to = "/services" style={{ color: "black", textDecoration: "none", backgroundColor: "greenyellow" }}>Service</Link></li>
                <li><Link to = "/contact" style={{ color: "black", textDecoration: "none", backgroundColor: "greenyellow" }}>Contacts</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;