import { create } from "zustand";

const AuthStore = create((set)=>({
    user: JSON.parse(localStorage.getItem("userData")) || {},

    login: (email, password)=>{

        const validUser ={
            email:"wilfred@gmail.com",
            password: "@2025"
        };
        
        if(email===validUser.email && password===validUser.password){
            set(()=>({user: validUser}));
            localStorage.setItem("userData", JSON.stringify(validUser));
            return true;
        }
        else return false;
    }

    
}))
export default AuthStore;