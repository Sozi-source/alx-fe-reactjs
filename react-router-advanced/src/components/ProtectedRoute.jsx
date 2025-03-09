import { Navigate } from "react-router-dom"

function ProtectedRoute(Profile){

    const isAuthenticated = localStorage.get("isAuthenticated")

    return isAuthenticated ? <Profile/> : <Navigate to= "/login" />
}
export default ProtectedRoute;