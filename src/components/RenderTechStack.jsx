import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const RenderTechStack = ({ title, data }) => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const techStackItems = document.querySelectorAll(
      "#tech-stack-wrapper > div"
    );

    const techStacktimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#techstack-section",
        end: "85% bottom",
        id: "render-tech-stack",
        start: "top top",
        scrub: 1,
        markers: false,
        pinSpacing: false,
        // onUpdate: (self) => {
        //   console.log(self.progress);
        // },
      },
    });
    const techStacktimeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#techstack-section",
        end: "85% bottom",
        id: "render-tech-stack",
        start: "top top",
        scrub: 1,
        markers: false,
        pinSpacing: false,
        // onUpdate: (self) => {
        //   console.log(self.progress);
        // },
      },
    });
    techStacktimeline2.fromTo(
      "#tech-stack-title",
      { opacity: 0, y: 20 },
      { opacity: 1, duration: 2, y: 0 }
    ).fromTo(
      "#tech-stack-line",
      {  width: 0 },
      {  duration: 2, width: '80%' }
    );


    techStackItems.forEach((item, index) => {
      techStacktimeline.fromTo(
        item,
        { opacity: 0, y: item.clientHeight / 4 },
        { opacity: 1, duration: 2, y: 0 }
      );
    });
  }, []);
  return (
    <section className="py-4 space-y-4">
      <div  className="space-y-2">
        <h2 id="tech-stack-title" className="text-xl font-semibold ">{title}</h2>
        <div id="tech-stack-line" className="h-0.5 w-3/5 bg-secondary"></div>
      </div>
      <div id="tech-stack-wrapper" className="grid grid-cols-5 gap-2 w-full">
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
