import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useEffect(() => {
    const boxItems = document.querySelectorAll("#box-wrapper3 > div");
    const boxItems2 = document.querySelectorAll("#box-wrapper4 > div");

    // Circular Progress Animation
    const circularProgress = document.querySelector("#circular-progress");
    const radius = 50; // Radius of the circle
    const circumference = 2 * Math.PI * radius;

    // Set initial stroke dasharray and dashoffset
    circularProgress.style.strokeDasharray = `${circumference} ${circumference}`;
    circularProgress.style.strokeDashoffset = `${circumference}`;

    gsap.to(circularProgress, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: "#techstack-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Box Animations
    const timelineTechStackTransition = gsap.timeline({
      scrollTrigger: {
        trigger: "#techstack-section",
        start: "30% bottom",
        end: "80% 60%",
        id: "transition techstack",
        scrub: 2,
        markers: true,
        pinSpacing: false,
        onUpdate: (self) => console.log(self.progress),
      },
    });

    boxItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { width: 0, ease: "circ.inOut", height: "100%" },
        {
          scrollTrigger: {
            trigger: "#techstack-section",
            start: "top bottom",
            end: "80% 60%",
            id: "transition techstack",
            scrub: 2,
            markers: true,
            pinSpacing: false,
            onUpdate: (self) => console.log(self.progress),
          },
          width: `${5 * (3 - index) * (3 - index)}%`,
          opacity: 1,
        }
      );
    });
    boxItems2.forEach((item, index) => {
      gsap.fromTo(
        item,
        { width: 0, ease: "circ.inOut", height: "100%" },
        {
          scrollTrigger: {
            trigger: "#techstack-section",
            start: "top bottom",
            end: "80% 60%",
            id: "transition techstack",
            scrub: 2,
            markers: true,
            pinSpacing: false,
            onUpdate: (self) => console.log(self.progress),
          },
          width: `${7 * (index + 1) * (index + 1)}%`,
          opacity: 1,
        }
      );
    });
  }, []);

  return (
    <>
      <section
        id="techstack-section"
        className="bg-primary h-[300vh] text-secondary relative"
      >
        <div className="sticky top-0 h-screen w-full">
          <svg
            className="absolute bottom-4 left-4"
            width="120"
            height="120"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#ffffff"
              strokeWidth="8"
              opacity="0.3"
            />
            <circle
              id="circular-progress"
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#ffffff"
              strokeWidth="12"
              strokeLinecap="inherit"
            />
          </svg>

          <div
            id="box-wrapper3"
            className="w-full flex h-1/4  flex-col absolute top-0 left-0"
          >
            <div className="bg-secondary" />
            <div className="bg-secondary" />
            <div className="bg-secondary" />
          </div>
          <div
            id="box-wrapper4"
            className="w-full flex h-1/4  items-end flex-col absolute bottom-0 right-0"
          >
            <div className="bg-secondary" />
            <div className="bg-secondary" />
            <div className="bg-secondary" />
          </div>

          <main className="container h-full flex items-start py-20 justify-end">
            <div className="text-7xl font-bold">Technology I'm using</div>
          </main>
        </div>
      </section>
    </>
  );
};

export default TechStack;
