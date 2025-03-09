import { Link, Outlet } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import ProfileDetails from "../Pages/Profile/ProfileDetails";
import ProfileSettings from "../Pages/Profile/ProfileSettings";



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
        
        {/* Routes */}
        <Routes>
            <Route path="profiledetails" element ={<ProfileDetails />} />
            <Route path="profilesettings" element ={<ProfileSettings />} />
        </Routes>

        <Outlet />
        </div>
    )
}
export default Profile;