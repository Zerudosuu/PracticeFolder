import { useState } from "react";
import { auth, googleProvider } from "../../config/firebaseconfig";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const signInWithPasswordandEmail = async (e) => {
    e.preventDefault();

    try {
      const { username, email, password } = user;

      // You can add validation here before proceeding with authentication

      // Example of creating a user with email and password
      await createUserWithEmailAndPassword(auth, email, password);

      // Further logic or redirection can be added here

      localStorage.setItem("user", user);
      console.log("success!");
    } catch (error) {
      console.error("Error signing in with email and password:", error.message);
    }
  };

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

      // Further logic or redirection can be added here
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div>
      <form onSubmit={signInWithPasswordandEmail}>
        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Sign In with Email and Password</button>
      </form>

      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default Auth;
