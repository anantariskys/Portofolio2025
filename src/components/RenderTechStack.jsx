import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const RenderTechStack = ({ title, data }) => {
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const techStackItems = wrapperRef.current.querySelectorAll("div");

    // Timeline untuk judul dan garis
    gsap.timeline({
      scrollTrigger: {
        trigger: "#techstack-section",
        start: "top top",
        end: "85% bottom",
        scrub: 1,
        pinSpacing: false,
        markers: false, // Disable markers in production
      },
    })
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, duration: 1, y: 0 }
      )
      .fromTo(
        lineRef.current,
        { width: 0 },
        { duration: 1, width: "80%" }
      );

    // Animasi untuk item tech stack dengan stagger
    gsap.fromTo(
      techStackItems,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2, // Adds delay between animations
        scrollTrigger: {
          trigger: "#techstack-section",
          start: "top top",
          end: "85% bottom",
          scrub: 1,
          pinSpacing: false,
          markers: false, // Disable markers in production
        },
      }
    );
  }, []);

  return (
    <section id="techstack-section" className="py-4 space-y-4">
      <div className="space-y-2">
        <h2 id="tech-stack-title" ref={titleRef} className="text-xl font-semibold">
          {title}
        </h2>
        <div id="tech-stack-line" ref={lineRef} className="h-0.5 w-3/5 bg-secondary"></div>
      </div>
      <div
        id="tech-stack-wrapper"
        ref={wrapperRef}
        className="grid grid-cols-5 gap-2 w-full"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full bg-opacity-50 bg-tertiary p-2 rounded-md h-fit"
          >
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
};

export default RenderTechStack;
