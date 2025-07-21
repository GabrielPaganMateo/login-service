import { useContext } from "react";
import AuthContext from "./AuthContext";

function User() {
    const {auth} = useContext(AuthContext)
    console.log(useContext(AuthContext))
    let message = 'hello ' + auth;
    return (
        <h1>{message}</h1>
    )
}

export default User;