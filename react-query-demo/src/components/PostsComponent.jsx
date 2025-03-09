import { useQuery } from "@tanstack/react-query";

const fetchPosts = async()=>{
const res = await fetch("https://jsonplaceholder.typicode.com/posts")
if (!res.ok) throw new Error("Failed to fetch posts")

return res.json();

};


function PostComponent(){

    const{data, isError,error, isLoading, refetch}= useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 5000,
        
    });

    //    Handling loading state
    if (isError) return <div>Error fetching posts:{error.message}</div>
    if (isLoading) return <div>Loading Posts...</div>

    // Render fetched posts    

    return(
       <div>
        <h1>POSTS</h1>
         {/* Manual refetch button */}
         <button onClick={()=>refetch()}>Refetch Post</button>
         {data.map((posts)=>(
            <p key={posts.id}> {posts.title} </p>
        ))}

              </div>
        
    )
}
export default PostComponent;