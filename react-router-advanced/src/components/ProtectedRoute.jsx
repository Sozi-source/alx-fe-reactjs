import { Navigate, Outlet } from "react-router-dom";
import AuthStore from "./AuthProvider";

function ProtectedRoute({children}) {
    const user = AuthStore((state)=>state.user);
    return user? children : <Navigate to ="/login" />
}

export default ProtectedRoute;
