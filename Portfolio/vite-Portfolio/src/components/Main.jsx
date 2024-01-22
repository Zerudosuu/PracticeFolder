import Services from "./Sections/Services";
import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className=" h-auto">
      <Hero />
      <Services />
      <About />
    </div>
  );
};

export default Main;
