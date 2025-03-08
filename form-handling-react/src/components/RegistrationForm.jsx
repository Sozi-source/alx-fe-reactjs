import { useState } from "react";

const registrationForm = ()=>{

const initialState = {username: '', email:'', password:''}
const[data, setData] = useState(initialState)


const handleChange = (e)=>{
const {name, value} = e.target
setData((prevState)=>({...prevState, [name]: value}))
}

const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(data)
    setData(initialState)
};
return(
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">User Name</label>
            <input type="text" name="username" value={data.username} className="username" onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={data.email} className="email" onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" value={data.password} className="password" onChange={handleChange} />
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>  
    </form>
)}

export default registrationForm;