import { auth, googleProvider } from "../../config/firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import "./Auth.css";
import Signup from "./Signup";

const Auth = () => {
  // TODO: Need to study about how to create collections and append the orders to it, with different users.
  // ! IMPORTANT: This should be refactored as well as follow SRP

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const userInfo = {
        userID: result.user.uid,
        name: result.user.displayName,
        profilePhoto: result.user.photoURL,
        isAuth: true,
      };

      console.log(userInfo);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className="Form">
      <Signup />
      <button onClick={signInWithGoogle}>Google Sign in</button>
    </div>
  );
};

export default Auth;
