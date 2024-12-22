import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { categorizedTechStack } from "../../../data/techStack";

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
    boxItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { width: 0, height: "100%", ease: "circ.inOut" },
        {
          width: `${5 * (3 - index) * (3 - index)}%`,
          opacity: 1,
          scrollTrigger: {
            trigger: "#techstack-section",
            start: "top bottom",
            end: "80% 60%",
            scrub: 2,
          },
        }
      );
    });

    boxItems2.forEach((item, index) => {
      gsap.fromTo(
        item,
        { width: 0, height: "100%", ease: "circ.inOut" },
        {
          width: `${7 * (index + 1) * (index + 1)}%`,
          opacity: 1,
          scrollTrigger: {
            trigger: "#techstack-section",
            start: "top bottom",
            end: "80% 60%",
            scrub: 2,
          },
        }
      );
    });
  }, []);

  const renderTechStack = (title, data) => (
    <section>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-5 gap-2 w-full">
        {data.map((item, index) => (
          <div key={index} className="w-full bg-opacity-50 bg-tertiary p-2 rounded-md h-fit">
            <img
              src={item.imageUrl}
              draggable="false"
              alt={item.title}
              className="w-full aspect-square object-contain"
            />
            <p className="text-xs text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <section
      id="techstack-section"
      className="bg-primary h-[300vh] text-secondary relative"
    >
      <div className="sticky top-0 h-screen w-full"  style={{ 
            backgroundColor: "#212529",
            backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")`,
           }}>
        {/* Circular Progress Indicator */}
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
            strokeLinecap="round"
          />
        </svg>

        {/* Animated Boxes */}
        <div
          id="box-wrapper3"
          className="w-full flex h-1/4 flex-col absolute top-0 left-0"
        >
          <div className="bg-secondary" />
          <div className="bg-secondary" />
          <div className="bg-secondary" />
        </div>

        <div
          id="box-wrapper4"
          className="w-full flex h-1/4 items-end flex-col absolute bottom-0 right-0"
        >
          <div className="bg-secondary" />
          <div className="bg-secondary" />
          <div className="bg-secondary" />
        </div>

        {/* Main Content */}
        <main className="container h-full flex items-end py-20 justify-start gap-4 flex-col">
          <div className="text-7xl font-bold">Tech Stack & Skills</div>
          <div className="grid grid-cols-3 gap-8">
            {renderTechStack("Languages That I Speak", categorizedTechStack.languages)}
            {renderTechStack("Frameworks and Libraries I Love", categorizedTechStack.frameworksLibraries)}
            {renderTechStack("Where My Data Lives", categorizedTechStack.databases)}
          </div>
        </main>
      </div>
    </section>
  );
};

export default TechStack;
