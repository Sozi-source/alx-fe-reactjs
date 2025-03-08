import { useState } from "react";

const RegistrationForm = ()=>{

const initialState = {username: '', email:'', password:''}
const [username, setUserName] = (initialState.username);
const [email, setEmail] = (initialState.email);
const [password, setPassword] = (initialState.password);


const handleChange = (e)=>{
const {name, value} = e.target
setData((prevState)=>({...prevState, [name]: value}))
}

const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(username, email, password)
    
    // reset form
    setUserName("");
    setEmail("");
    setPassword("");

};
return(
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" value={username} className="username" onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email} className="email" onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} className="password" onChange={handleChange} />
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>  
    </form>
)}

export default RegistrationForm;