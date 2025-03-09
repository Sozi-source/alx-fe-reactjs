import { Link } from "react-router-dom";
function Home(){

    return(
        <div>
            <h1>HOME PAGE</h1>
           <p>Welcome to your home page</p>
        <div>
        <Link to="/login" className="login">Login</Link>
        </div>
       <button className="sign-up">Sign Up</button>
        </div>
    )
}
export default Home;