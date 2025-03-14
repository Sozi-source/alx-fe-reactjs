import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null)



export const AuthProvider = ({children})=>{
    const[user, setUser] = useState(null)

    const navigate = useNavigate()


    useEffect(()=>{
        const storedUser = localStorage.getItem("user");
         if (storedUser){
            setUser(JSON.parse(storedUser))
         }
    }, [])

    const login = (userData)=>{
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData))
        navigate("/profile")
    }
    
    return (
        <AuthContext.Provider value={{user, login}}>
        {children}
</AuthContext.Provider>
    );
};

export const useAuth = ()=>{
    return useContext(AuthProvider)
};

export default AuthProvider;

