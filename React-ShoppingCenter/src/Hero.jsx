import "./style/Hero.scss";
import { useState } from "react";

const HeroSection = () => {
  const display = ["Ronald", "John", "Alice", "Bob"];
  const [currentDisplay, setDisplay] = useState(0);

  const decrease = () => {
    setDisplay(
      (prevdisplay) => (prevdisplay - 1 + display.length) % display.length
    );
  };

  const increase = () => {
    setDisplay((prevdisplay) => (prevdisplay + 1) % display.length);
  };

  return (
    <div className="Hero">
      <div className="hero__container  container">
        <div className="hero__sideSelection"></div>
        <div className="hero__carousel">
          <h1>{currentDisplay}</h1>
          <button onClick={increase}>right</button>
          <button onClick={decrease}>left</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
