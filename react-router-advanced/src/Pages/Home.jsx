import { Link } from "react-router-dom";
function Home(){

    return(
        <div>
            <h1>HOME PAGE</h1>
           <p>Welcome to your home page</p>
        <div>
        <Link to="/login" className="login">Login</Link>
        </div>
        </div>
    )
}
export default Home;