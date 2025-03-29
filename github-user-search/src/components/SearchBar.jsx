import React from 'react'
import { useState } from 'react'

const SearchBar =({onSearch})=> {

const[username, setUsername]=useState("");

const handleSubmit=(e)=>{
e.preventDefault()
if(username.trim()){
    onSearch(username);
    setUsername("")
}

}


  return (
    <div className='flex justify-center items-center h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col'> 
            <input type="text" placeholder='Enter github username' 
            value={username} onChange={(e)=>setUsername(e.target.value)} className='border border-gray-500 p-3 rounded-lg text-center'/>
        
            <button type='submit' className='mt-5 bg-blue-400 hover:bg-blue-700 w-fit mx-auto p-3 rounded-lg'>Search</button>
        </form>

    </div>
  )
}

export default SearchBar;