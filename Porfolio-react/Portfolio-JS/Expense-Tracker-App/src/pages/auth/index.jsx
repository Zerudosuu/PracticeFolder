import { auth, provider } from "../../config/firebase-config"; // ? importing the auth and provider which is google from the config
import { signInWithPopup } from "firebase/auth"; // ? this is for firebase windowsign in
import { useNavigate } from "react-router-dom";
import "./style.css";
const Auth = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider); // ? pop up will open and will redirect to sign in with google account
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };

    //? after authentication it will be stored in authinfo object then will store to the local storage.
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };

  return (
    <div className="login-page">
      <p>Sign in with Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};
export default Auth;
