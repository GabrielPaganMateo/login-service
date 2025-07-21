import { useContext, useState } from "react";
import { postUser } from "./fetchAuth";
import AuthContext from "./AuthContext";
import ErrorEnum from "./ErrorEnum";

function Login() {
    const [user, setUser] = useState({ username : "", password : ""});
    const {auth, setAuth} = useContext(AuthContext)
    console.log(auth)
    const handleLoginInput = (event) => {
        setUser({...user, [event.target.name]:event.target.value})
    }

    function handleLoginResponse(response) {
        if (response.accessToken !== undefined) {
            setAuth(response.accessToken);
        } else {
            setAuth(response);
        }
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        postUser(user).then(handleLoginResponse)
    }

    return (
        <>
            <div id="login" className="form-container">
                <form name="login" method="post" onSubmit={handleLoginSubmit}>
                    {ErrorEnum.isError(auth) && <div id='loginError'>{ErrorEnum.getError(auth)}</div>}
                    <label>Username:</label><br/>
                    <input name="username" value={user.username} onChange={handleLoginInput}></input><br/><br/>
                    <label>Password:</label><br/>
                    <input name="password" type="password" value={user.password} onChange={handleLoginInput}></input><br/><br/>
                    <input type="submit" value="Log in"></input>
                </form>
            </div>
        </>
    )
}

export default Login;