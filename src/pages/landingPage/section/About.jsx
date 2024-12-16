import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const aboutWave = document.querySelector("#about-wave");

    gsap.fromTo(
      aboutWave,
      { width: "100px", height: "100px", borderRadius: "100%" },
      {
        scrollTrigger: {
          trigger: "#about-transition",
          start: "top 50%",
          end: "50% 90%",
          scrub: 1.5,
         
          // markers: true,
          pinSpacing: false,
         
        },
        width: "100%",
        height: "100vh",
        borderRadius: "0px",
       
      }
    );
  }, []);

  return (
    <div id="about-section" className="relative">
      <div id="about-transition" style={{
        backgroundColor: "#f8f9fa",
        backgroundImage : `url("https://www.transparenttextures.com/patterns/stardust.png")`
      }} className="h-[150vh] w-full relative">
        <div id="about-wave" className=" bg-primary sticky top-0 h-full"></div>
      </div>
      <div
        id="about-wrapper"
        className="space-y-4 relative h-[200vh] bg-primary text-secondary "
      >
        <h1>Ini about</h1>
        <div className=" top-0 sticky h-screen"></div>
      </div>
    </div>
  );
};

export default About;
