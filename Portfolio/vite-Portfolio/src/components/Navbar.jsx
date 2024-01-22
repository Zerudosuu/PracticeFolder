const Navbar = () => {
  return (
    <div className="border border-black border-solid border-1 h-20  flex w-screen items-center fixed">
      <nav className=" flex  justify-between container  border border-red-950 border-solid border-1 items-center">
        <a href="#" className="text-2xl text-pink-900 ">
          Logo
        </a>
        <ul className="flex gap-10 text-xl">
          <li>About</li>
          <li>Home</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
