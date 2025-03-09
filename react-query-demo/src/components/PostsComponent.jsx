import { useQuery } from "@tanstack/react-query";

const fetchPost = async()=>{
const res = await fetch("https://jsonplaceholder.typicode.com/posts")
if (!res.ok) throw new Error("Failed to fetch posts")

return res.json();

};


function PostComponent(){

    const{data, error, isLoading}= useQuery({
        queryKey: ["posts"],
        queryFn: fetchPost
    });

    //    Handling loading state
    if (error) return <div>Error fetching posts:{error.message}</div>
    if (isLoading) return <div>Loading Posts...</div>

    // Render fetched posts    

    return(
       <div>
         {data.map((posts)=>(
            <p key={posts.id}> {posts.title} </p>
        ))}

       </div>
        
    )
}
export default PostComponent;