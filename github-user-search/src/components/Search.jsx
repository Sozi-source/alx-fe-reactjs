// import React from 'react'
// import { useState } from 'react'
// import { fetchUserData } from '../services/githubService';

// const Search =()=> {

// const[username, setUsername]=useState("");
// const[error, setError]=useState(null);
// const [loading, setLoading] = useState(false)
// const [location, setLocation] = useState("")
// const [minRepos, setMinRepos] =useState("")
// const [page, setPage] = useState(1)
// const[totalResults, setTotalResults] = useState(0)
// const [users, setUsers] =useState([])


// const handleSubmit = async(e)=>{
// e.preventDefault()
// if(!username.trim()&& !location.trim()&& !minRepos.trim()) return;

// setLoading(true);
// setError(null);
// setPage(1);
// setUsers([])

// try{
//   const data = await fetchUserData(username, location, minRepos, 1);
//   setUsers(data.items)
//   setTotalResults(data.total_count)
// }
// catch (err) {
//   setError("Looks like we cant find the user")
// } finally{
//   setLoading(false)
// }
// };

// const loadMore = async()=>{
//   const nextPage = page +1;
//   setLoading(true)

//   try{
//     const data = await fetchUserData(username, location, minRepos, nextPage);
//     setUsers((prevUsers)=>[...prevUsers, ...data.items])
//     setPage(nextPage);
//   }catch (err){
//     setError("Failed to load more users")
//   }finally{
//     setLoading(false)
//   }
// }


// return (
//   <div className='flex flex-col items-center shadow-lg w-full p-6 bg-gray-100 min-h-screen'>
    
//     {/* Search form card */}
//     <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-lg'>

//     <h1 className='flex justify-center items-center text-3xl mt-3 border border-gray-400 bg-amber-100'>Github User Search</h1>
      
//       <form onSubmit={handleSubmit} className='mt-5 flex flex-col gap-4'> 

//           <input type="text" placeholder='Enter github username' 
//           value={username} onChange={(e)=>setUsername(e.target.value)} 
//           className='border border-gray-500 p-3 rounded-lg w-full'/>


//           <input type="text" placeholder='Enter location' 
//           value={location} onChange={(e)=>setLocation(e.target.value)}
//           className='border border-gray-500 p-3 rounded-lg w-full'/>

//           <input type="number" placeholder='Minimun Repositories' 
//           value={minRepos} onChange={(e)=>setMinRepos(e.target.value)}
//           className='border border-gray-500 p-3 rounded-lg w-full'/>

      
//           <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-lg w-full'>Search</button>
//       </form>

//       {/* Display Loading & Error */}
//       {loading && (<p className='text-gray-600 font-bold text-center mt-4'>Loading...</p>)}
//       {error && (<p className='text-red-600 text-center mt-4'>{error} </p>)}
      
// </div>
      

//       {/* Display User List */}
     
//       {users && users.length > 0 &&(
        
//         <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl mt-6'>
//           <h2 className='text-lg font-bold text-center mb-4'>Search Results</h2>


//         {/* Grid layout responsive */}
//          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10'>
//          {users.map((user)=>(
//             <div key={user.id}>
              
//               <img src={user.avatar_url} alt={user.login}
//               className="w-24 h-24 rounded-full mx-auto"/>

//             <h3 className='font-bold mt-2'>@{user.login} </h3>
//             {user.location && <p className='text-gray-600'>{user.location} </p> }

//             <a href={user.html_url} target='_blank' className="text-blue-500 hover:underline block mt-2">View profile</a>
//             <p className='text-gray-700'>Public Repos: {user.public_repos}</p>
//             <p className='text-gray-700'>Followers: {user.followers} | Following: {user.following}</p>
//             </div>
//           ))}
//           </div> 

//            {/* 🔹 Load More Button */}
//         {users.length > 0 && users.length < totalResults && (
//         <div className='flex justify-center mb-10'>
//           <button onClick={loadMore} 
//           className='mt-4 bg-green-500 hover:bg-green-700 text-white p-3 rounded-lg w-full max-w-sm flex justify-center items-center'>Load More</button>
//         </div>
//       )}
//     </div>
//       )}

//     </div>
// )}

// export default Search;
      

import React, { useState, useEffect, useCallback } from "react";
import { fetchUserData } from "../services/githubService";
import debounce from "lodash.debounce";

const Search = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [users, setUsers] = useState([]);

  // ✅ Debounce API calls to prevent excessive fetching while typing
  const debouncedFetch = useCallback(
    debounce(async (query, location, minRepos) => {
      if (!query.trim() && !location.trim() && !minRepos.trim()) return;

      setLoading(true);
      setError(null);
      setUsers([]);
      setPage(1);

      try {
        const data = await fetchUserData(query, location, minRepos, 1);
        setUsers(data.items || []);
        setTotalResults(data.total_count || 0);
      } catch (err) {
        setError("Unable to fetch users. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 500), // Delay API calls by 500ms
    []
  );

  useEffect(() => {
    if (username || location || minRepos) {
      debouncedFetch(username, location, minRepos);
    }
  }, [username, location, minRepos, debouncedFetch]);

  // ✅ Load More Users (Pagination)
  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await fetchUserData(username, location, minRepos, nextPage);
      setUsers((prevUsers) => [...prevUsers, ...data.items]);
      setPage(nextPage);
    } catch (err) {
      setError("Failed to load more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center shadow-lg w-full p-6 bg-gray-100 min-h-screen">
      {/* Search Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-center text-3xl mt-3 border border-gray-400 bg-amber-100">
          GitHub User Search
        </h1>

        <form className="mt-5 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-500 p-3 rounded-lg w-full"
          />

          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-500 p-3 rounded-lg w-full"
          />

          <input
            type="number"
            placeholder="Minimum Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border border-gray-500 p-3 rounded-lg w-full"
          />
        </form>

        {/* Display Loading & Error */}
        {loading && (
          <p className="text-gray-600 font-bold text-center mt-4">Loading...</p>
        )}
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </div>

      {/* Display User List */}
      {users.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl mt-6">
          <h2 className="text-lg font-bold text-center mb-4">Search Results</h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {users.map((user) => (
              <div key={user.id} className="text-center">
                {/* ✅ Lazy Load Image */}
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-24 h-24 rounded-full mx-auto"
                  loading="lazy"
                />
                <h3 className="font-bold mt-2">@{user.login}</h3>
                {user.location && (
                  <p className="text-gray-600">{user.location}</p>
                )}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline block mt-2"
                >
                  View Profile
                </a>
                <p className="text-gray-700">Public Repos: {user.public_repos}</p>
                <p className="text-gray-700">
                  Followers: {user.followers} | Following: {user.following}
                </p>
              </div>
            ))}
          </div>

          {/* ✅ Load More Button */}
          {users.length > 0 && users.length < totalResults && (
            <div className="flex justify-center mb-10">
              <button
                onClick={loadMore}
                className="mt-4 bg-green-500 hover:bg-green-700 text-white p-3 rounded-lg w-full max-w-sm flex justify-center items-center"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;

  