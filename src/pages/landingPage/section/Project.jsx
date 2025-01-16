import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../../data/project";

const Project = () => {
  const sectionRef = useRef(null);
  const transitionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      if (transitionRef.current?.children) {
        const sections = Array.from(transitionRef.current.children);

        sections.forEach((section) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: `top top`,
              end: `+=${2000}%`,
              pin: true,
              pinSpacing: false,
              scrub: true,
              markers: false,
              anticipatePin: 1,
            },
          });
        });
      }
    }, transitionRef);

    return () => context.revert();
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
        <div
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/stardust.png")',
          }}
          className="min-h-screen w-full text-7xl  bg-white text-primary border-y-2 border-primary  flex items-center justify-center   font-bold"
        >
          <h2>My Projects</h2>
        </div>
        {projects.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundImage:
                'url("https://www.transparenttextures.com/patterns/stardust.png")',
            }}
            className="min-h-screen w-full   bg-white text-primary border-y-2 border-primary  "
          >
            <div className="container flex items-center justify-between gap-4     min-h-screen">
              <img
                src={item.img_url}
                className="aspect-video object-cover max-w-2xl w-full"
                alt=""
              />
              <div className="w-full space-y-2">
                <h3 className="text-4xl font-bold">{item.name}</h3>
                <p className="text-base">{item.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {item.tech_stack.map((tech, index) => (
                    <small
                      className="bg-primary text-secondary px-2 rounded-lg"
                      key={index}
                    >
                      {tech}
                    </small>
                  ))}
                </div>
                <div>
                  {item.link && (
                    <a href={item.link}>
                      <button className="bg-primary text-sm text-secondary px-4 py-2 rounded-lg">
                        View Project
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
      <div className="h-screen"></div>
    </section>
  );
};

export default Project;
