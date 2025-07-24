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
            {user !== undefined 
                ?
                <>
                    <div id="profile" className="container">
                        <div id="identity" className="container">
                            <div className="container">
                                <img id="picture" src={user.image} alt="Profile Picture"></img>
                            </div>
                            <div className="container">
                                <h1 id="name">{user.firstName} {user.lastName}</h1>
                            </div>
                        </div>
                        <div id="contact" className="container">
                            <div><h2>Contact Information:</h2></div>
                            <div>{user.contact.phone}</div>
                            <div>{user.contact.email}</div>
                            <div><h2>Physical Address:</h2></div>
                            {
                                Object.entries(user.contact.address).filter(([key]) => key !== "coordinates").map(([key, value]) => {
                                    return <div key={key}>{value}</div>
                                })
                            }
                        </div>
                    </div>
                </>
                :
                <Loader/>
            }
        </>
    )
}
//<div class="profile-container"><img src={user.image} alt="Profile Picture"></img></div>
export default Profile;