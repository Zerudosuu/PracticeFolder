import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseconfig";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const signInWithPasswordandEmail = async (e) => {
    e.preventDefault();

    try {
      const { username, email, password } = user;
      await createUserWithEmailAndPassword(auth, email, password);

      localStorage.setItem("user", user);
      console.log("success!");
    } catch (error) {
      console.error("Error signing in with email and password:", error.message);
    }
  };

  return (
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
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Signup;
