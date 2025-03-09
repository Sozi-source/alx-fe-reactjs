import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { login } from "./useAuth";




function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isAuthenticated = useAuth();
    const navigate = useNavigate()

useEffect(()=>{
    if (isAuthenticated){
        navigate("/profile")
            }
        }, [isAuthenticated, navigate])
        
function handleLogin(e){
e.preventDefault();

// Authenticating login
if (email==="wilfred@gmail.com" && password==="12345"){
    login();
    navigate("/profile")
}
    else{
        alert("invalid credential, try again")
    }
    setEmail("");
    setPassword("");
}
 
    return(
        <>
        <h2>Login Page</h2>

        <form onSubmit={handleLogin}>
            <label htmlFor="email" className="login-label">Email:</label><br />
            <input type="email" className="login-input" required value={email} 
            onChange={(e)=>setEmail(e.target.value)} autoComplete="email"/><br />

            <label htmlFor="password" className="login-label">Password:</label><br />
            <input type="password" className="login-input" required value={password}
             onChange={(e)=>setPassword(e.target.value)} autoComplete="current-password"/><br />

            <button type="submit" className="login-button">Login</button>
        </form>
        
        </>
    )
}
export default LoginPage;