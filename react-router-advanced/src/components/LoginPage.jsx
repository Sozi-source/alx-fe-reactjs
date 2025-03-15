import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthStore from "./AuthProvider";

function Login(){
    const [email, setEmail] =useState("");
    const[password, setPassword] =useState("");
    const[error, setError]= useState("");
    const login =AuthStore((state)=>state.login)
    const navigate = useNavigate()

    const handleLogin =(e)=>{
    e.preventDefault()

    const success = login(email, password);
    if(success){
        navigate("/profile")
    // Reset form
    setEmail("");
    setPassword("");
    }
    else{
        setError("Invalid Credentials")
    }
    // store userdata to local Storage
    const userData ={email, password}
    localStorage.setItem("userData", JSON.stringify(userData))
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
            {error && <p style={{color:"red"}}>{error}</p> }
        </form>
        
        </>
    )
}
export default Login;

 
    
