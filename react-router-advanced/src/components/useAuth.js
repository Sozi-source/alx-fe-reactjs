import { useEffect, useState } from "react";


const useAuth = () => {
const[isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated")==="true"

);

useEffect(()=>{
    setIsAuthenticated(localStorage.getItem("isAuthenticated")==="true");

}, []);

return isAuthenticated;
};
// Login function

export const login = () => {
    localStorage.setItem("isAuthenticated", "true");
    window.dispatchEvent(new Event("storage")); 
};

export default useAuth;