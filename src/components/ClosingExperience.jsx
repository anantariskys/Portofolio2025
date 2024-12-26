import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import { use } from "react";

const ClosingExperience = () => {
    const titleRef = React.useRef(null);
    const lineRef = React.useRef(null);
    const sectionRef = React.useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(titleRef.current,{x:window.innerWidth} ,{
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1,

            },
            x: 0,
            ease: "none",
        });
        gsap.fromTo(lineRef.current,{x:-window.innerWidth} ,{
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom bottom",
                scrub: 3,

            },
            x: 0,
            ease: "none",
        });
        
    })
  return (
    <div ref={sectionRef} className="w-screen h-screen overflow-hidden   flex items-center text-secondary">
      <div ref={lineRef} className="h-1 md:h-4 w-full bg-secondary" />
      <main className="container ">
        <div className="flex  justify-start">
          <h1 ref={titleRef} className=" md:text-5xl text-2xl lg:text-7xl font-bold">This is just the beginning,greater things are yet to come!</h1>
        </div>
      </main>
    </div>
  );
};

export default ClosingExperience;
