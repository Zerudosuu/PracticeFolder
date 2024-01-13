import addAvatar from "../images/addAvatar.png";

export const Register = () => {
  return (
    <div className="formCointainer">
      <div className="formWrapper">
        <span className="logo">Ronald Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={addAvatar} alt="" />
            <span>add an image</span>
          </label>
          <button>Sign Up</button>
        </form>

        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};
