import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const Comp = useRef(null);

  return (
    <div className="wrapper">
      <div className="bg-green-500 h-screen w-screen">this is service</div>
      <div className="bg-red-500 h-screen w-screen">this is service2</div>
      <div className="bg-orange-500 h-screen w-screen">this is service3</div>
    </div>
  );
};

export default Service;
