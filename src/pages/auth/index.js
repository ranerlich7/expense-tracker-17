import { useNavigate } from "react-router-dom"
import { auth, provider } from "../../config/firebase-config"
import { signInWithPopup } from "firebase/auth"
function Auth() {
  const navigate = useNavigate()
  async function loginWithGoogle() {
    console.log("log in!")
    const result = await signInWithPopup(auth, provider)
    const authInfo = {
      userID: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    }
    localStorage.setItem("auth", JSON.stringify(authInfo))
    navigate("/expense-tracker")
  }
  return (
    <div>
      <h1>Please login</h1>
      <button onClick={loginWithGoogle}>Login with google</button>
    </div>
  )
}

export default Auth
