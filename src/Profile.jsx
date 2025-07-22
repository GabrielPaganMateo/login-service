import { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import getUser from "./fetchUser";
import User from "./User";
import Loader from "./Loader";

function Profile() {
    const {auth} = useContext(AuthContext)
    const [user, setUser] = useState();
    useEffect(() => {
        getUser(auth).then(handleUserResponse)
    }, [auth])

    function handleUserResponse(response) {
        console.log(response)
        setUser(new User(response))
    }
    return (
        <>
            {user !== undefined ?
                <div className="profile-container">
                    <img id="picture" src={user.image} alt="Profile Picture"></img>
                </div>

                :
                <Loader/>
            }
        </>
    )
}
//<div class="profile-container"><img src={user.image} alt="Profile Picture"></img></div>
export default Profile;