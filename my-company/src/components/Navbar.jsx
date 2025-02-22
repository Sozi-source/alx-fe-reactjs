import { Link } from "react-router-dom";

function Navbar(){

    return (

        <nav style={{ background: "white", padding: "10px", textAlign: "center" }}>
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "center", gap: "20px" }}> 
                <li ><Link to = "/" style={{ color: "blue", textDecoration: "none" }}>Home</Link></li>
                <li><Link to = "/about" style={{ color: "blue", textDecoration: "none" }}>About</Link></li>
                <li><Link to = "/services" style={{ color: "blue", textDecoration: "none" }}>Service</Link></li>
                <li><Link to = "/contact" style={{ color: "blue", textDecoration: "none" }}>Contacts</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;