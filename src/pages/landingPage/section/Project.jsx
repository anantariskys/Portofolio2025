import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = () => {
  const sectionRef = useRef(null);
  const transitionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      if (transitionRef.current?.children) {
        const sections = Array.from(transitionRef.current.children);

        sections.forEach((section, index) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: `top ${index*2}%`,
            //   end: `+=${1000}%`,
              pin: true,
              pinSpacing: false,
              scrub: true,
              markers: false, // Set to true for debugging
              anticipatePin: 1
            }
          });

        });
      }
    }, transitionRef);

    return () => context.revert(); // Cleanup
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/stardust.png")',
        backgroundColor: "#212529",
      }}
    >
      <main ref={transitionRef} className="relative">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="h-screen w-full  bg-white text-primary border-2 border-primary  flex items-center justify-center  text-2xl font-bold"
          >
            Section {index + 1}
          </div>
        ))}
      </main>
      <div className="h-screen">

      </div>
    </section>
  );
};

export default Project;