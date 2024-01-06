import "../style/loginForm.scss";
import { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const LoginComponent = () => {
  const [currentForm, setCurrentForm] = useState(<LogIn />);

  const handleLogInClick = () => {
    setCurrentForm(<LogIn />);
  };

  const handleSignUpClick = () => {
    setCurrentForm(<SignUp />);
  };

  return (
    <>
      <button onClick={handleLogInClick}>LogIn</button>
      <button onClick={handleSignUpClick}>SignUp</button>
      {currentForm}
    </>
  );
};

export default LoginComponent;
