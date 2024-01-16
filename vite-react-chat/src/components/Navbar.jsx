export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Ron Chat</span>
      <div className="user">
        <img src="https://i.pinimg.com/originals/58/c8/b8/58c8b892f847590145c3e913f36fe48e.png" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};
