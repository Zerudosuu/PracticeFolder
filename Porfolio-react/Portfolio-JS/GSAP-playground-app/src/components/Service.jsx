import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const comp = useRef(null);
  const lenisRef = useRef(null);

  useGSAP(
    () => {
      gsap.to("#box", {
        xPercent: "+=300",
        duration: 1,
        scrollTrigger: {
          trigger: comp.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          markers: true,
        },
      });
    },

    { scope: comp }
  );
  useLenis(({ scroll }) => {
    console.log(scroll);
  });

  return (
    <ReactLenis root>
      <div className="h-[100vh]"></div>
      <div
        ref={comp}
        className="relative h-[50vh] bg-slate-200 flex items-center w-screen pl-10"
        id="wrapper"
      >
        <div
          id="box"
          className="absolute -left-100 border border-solid border-1 border-black w-[300px] h-[300px] flex items-center justify-center text-[100px]"
        >
          2
        </div>
      </div>
      <div
        id="wrapper2"
        className="h-[100vh] flex items-center justify-end pr-10"
      >
        <div
          id="box2"
          className="border border-solid border-1 border-white w-[300px] h-[300px] flex items-center justify-center text-[100px] text-white"
        >
          3
        </div>
      </div>
    </ReactLenis>
  );
};

// useEffect(() => {
//   let ctx = gsap.context(() => {
//     const tl = gsap.timeline();

//     tl.to("#box", {
//       duration: 0.3,
//       x: "+=600", // Move the box to the right by 200 pixels
//       rotate: 360,
//       marker: true,
//       scrollTrigger: {
//         trigger: "#wrapper",
//         start: "top center",
//         end: "bottom center",
//         scrub: 1,
//         markers: true,
//         pin: true,
//       },
//     });

//     tl.to("#box2", {
//       x: "-=600",
//       rotate: 360,
//       marker: true,
//       scrollTrigger: {
//         trigger: "#wrapper2",
//         start: "top center",
//         end: "bottom center",
//         scrub: 1,
//         markers: true,
//         pin: true,
//         pinSpacer: false,
//       },
//     });
//   }, comp);

//   return () => ctx.revert();
// }, []);
export default Service;
