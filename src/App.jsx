import { useContext } from "react"
import Login from "./Login"
import AuthContext from "./AuthContext"
import Profile from "./Profile"
import ErrorEnum from "./ErrorEnum"

function App() {
  const {auth} = useContext(AuthContext)
  let isAuthenticated = false;
  if (auth !== undefined && (ErrorEnum.isError(auth) === false)) {
    isAuthenticated = true;
  }


  return (
    <>
      {isAuthenticated ? <Profile/> : <Login/>}
    </>
  )
}

export default App
