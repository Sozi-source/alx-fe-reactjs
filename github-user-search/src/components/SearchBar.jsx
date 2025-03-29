import React from 'react'
import { useState } from 'react'
import { fetchUserData } from '../services/githubService';

const SearchBar =({onSearch})=> {

const[username, setUsername]=useState("");
const[userData, setUserData]=useState(null);
const[error, setError]=useState(null);
const [loading, setLoading] = useState(false)


const handleSubmit = async(e)=>{
e.preventDefault()
if(!username.trim()) return;

setLoading(true)
setError(null)
setUserData(null)

try{
  const data = await fetchUserData(username);
  setUserData(data);
}
catch (err) {
  setError("User does not exist !!")
} finally{
  setLoading(false)
}
};


return (
  <div className='flex flex-col justify-center items-center h-screen'>
      <form onSubmit={handleSubmit}> 
          <input type="text" placeholder='Enter github username' 
          value={username} onChange={(e)=>setUsername(e.target.value)} className='border border-gray-500 p-3 rounded-lg text-center'/>
      
          <button type='submit' className='mt-5 bg-blue-400 hover:bg-blue-700 w-fit mx-auto p-3 rounded-lg ml-5'>Search</button>
      </form>

      {/* Display Loading  */}
      {loading && (<p className='mt-4 text-gray-600 font-bold'>Loading...</p>)}
      
      
      {/* Display Error */}
      
      {error && (
        <p className='text-red-600 mt-4 animate-bounce font-bold'>{error} </p>
      )}
      

      {/* Display UserData */}
     
      {userData &&(
        
        <div className='mt-6 p-6 border rounded-lg shadow-lg text-center w-80 bg-green-100'>

         <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full mx-auto"
          />

        <h2 className='mt-2 text-xl font-bold'>{userData.name || userData.login} </h2>
          <p className="text-gray-600">@{userData.login}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <p>Followers: {userData.followers} | Following: {userData.following}</p>

          <a href={userData.html_url} target='_blank' className="block mt-2 text-blue-500 hover:underline">View profile</a>
        </div>
      )}

       
  </div>
)}

export default SearchBar;




  