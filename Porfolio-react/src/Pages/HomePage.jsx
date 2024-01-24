import ContactSec from "../Components/Home/ContactSec";
import Hero from "../Components/Home/Hero";
import Projects from "../Components/Home/Projects";
import Services from "../Components/Home/Services";
import "../Styles/Home/Home.scss";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Hero />
      <Projects />
      <Services />
      <ContactSec />
    </div>
  );
};

export default HomePage;
