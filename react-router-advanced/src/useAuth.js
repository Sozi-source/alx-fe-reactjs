import { useEffect, useState } from "react";

const useAuth = () => {
const[isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated")==="true"

);

useEffect(()=>{
    setIsAuthenticated(localStorage.getItem(isAuthenticated)==="true");
}, []);

return isAuthenticated;
};

export default useAuth;