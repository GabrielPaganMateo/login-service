import { useContext } from "react"
import Login from "./Login"
import AuthContext from "./AuthContext"
import User from "./User"
import ErrorEnum from "./ErrorEnum"

function App() {
  const {auth} = useContext(AuthContext)
  let isAuthenticated = false;
  if (auth !== undefined && (ErrorEnum.isError(auth) === false)) {
    isAuthenticated = true;
  }


  return (
    <>
      {isAuthenticated ? <User/> : <Login/>}
    </>
  )
}

export default App
