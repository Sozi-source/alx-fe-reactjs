import {Routes, Route } from "react-router-dom";
import ProfileDetails from "../Pages/Profile/ProfileDetails";
import ProfileSettings from "../Pages/Profile/ProfileSettings";



function Profile(){

    return(
        <div>
            <h1>PROFILE PAGE</h1>


    // Routes to child components
        <Routes>
            <Route path="/profiledetails" Component={ProfileDetails} />
            <Route path="/profilesettings" Component={ProfileSettings} />

        </Routes>

        </div>
    )
}
export default Profile;