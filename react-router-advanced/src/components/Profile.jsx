import { Link, Outlet } from "react-router-dom";

function Profile(){

    return(
        <div>
            <h1>PROFILE PAGE</h1>
        <nav>
            <ul>
                <li><Link to= "profiledetails">Profile Details</Link></li>
                <li><Link to= "profilesettings">Profile Settings</Link></li>
            </ul>
        </nav>
        
        <Outlet />
        </div>
    )
}
export default Profile;