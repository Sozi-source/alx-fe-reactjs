import React, {useState} from "react";
 
function Counter(){
    const [count, setCount] = useState(0);

    return (
        <>
        <p style={{fontWeight:'bolder', fontSize:'20px', color:'darkblue'}}>Current Count: {count}</p>
        
    <button onClick={ () => setCount(count + 1)} style={{backgroundColor:'orange'}}>Increment</button>
    <button onClick={ () => setCount(0)}style={{backgroundColor:'greenyellow'}}>Reset</button>
    <button onClick={ () => setCount(count - 1)}style={{backgroundColor:'orange'}}>Decrement</button>
    
    </>
    )
}

export default Counter;