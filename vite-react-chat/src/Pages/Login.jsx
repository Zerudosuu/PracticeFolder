export const Login = () => {
  return (
    <div className="formCointainer">
      <div className="formWrapper">
        <span className="logo">Ronald Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
        </form>

        <p> Do you have no account? Register</p>
      </div>
    </div>
  );
};
