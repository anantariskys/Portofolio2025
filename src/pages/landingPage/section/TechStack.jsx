import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { categorizedTechStack } from "../../../data/techStack";
import RenderTechStack from "../../../components/RenderTechStack";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useEffect(() => {
    const setupAnimations = (selector, multiplier, isTop = true) => {
      const items = document.querySelectorAll(selector);
      items.forEach((item, index) => {
        const width = `${multiplier * (isTop ? 3 - index : index + 1) * (isTop ? 3 - index : index + 1)}%`;
        gsap.fromTo(
          item,
          { width: 0, height: "100%", ease: "circ.inOut" },
          {
            width,
            opacity: 1,
            scrollTrigger: {
              trigger: "#techstack-section",
              start: "top bottom",
              end: "80% 60%",
              scrub: 1,
            
            },
          }
        );
      });
    };

    // Setup Line Animation
    const lineTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#techstack-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, 
    
      },
    });
    document.querySelectorAll("#tech-stack-line").forEach((line) => {
      lineTimeline.fromTo(line, { width: 0 }, { width: "80%" });
    });

    // Setup Tech Stack Item Animations
    const techStackItems = document.querySelectorAll("#tech-stack-wrapper > div");
    if (techStackItems.length) {
      const techStackTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#techstack-section",
          end: "85% bottom",
          start: "top top",
          scrub: 1, 
         
        },
      });

      techStackItems.forEach((item) => {
        techStackTimeline.fromTo(
          item,
          { opacity: 0, y: item.clientHeight / 4 },
          { opacity: 1, duration: 2, y: 0 }
        );
      });
    }

    setupAnimations("#box-wrapper3 > div", 3);
    setupAnimations("#box-wrapper4 > div", 7, false);
  }, []);

  return (
    <section
      id="techstack-section"
      className="bg-primary h-[300vh] text-secondary relative"
    >
      <div
        className="sticky top-0 h-fit md:h-screen w-full"
        style={{
          backgroundColor: "#212529",
          backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")`,
        }}
      >
        {/* Box Wrappers */}
        <div id="box-wrapper3" className="w-full hidden md:flex h-1/4 flex-col absolute top-0 left-0">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-secondary" />
          ))}
        </div>

        <div id="box-wrapper4" className="w-full hidden md:flex h-1/4 items-end flex-col absolute bottom-0 right-0">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-secondary" />
          ))}
        </div>

        {/* Main Content */}
        <main className="container h-full flex items-start md:items-end py-4 md:py-20 justify-start md:gap-4 flex-col">
          <div className="md:text-5xl text-4xl lg:text-7xl font-bold">Tech Stack & Skills</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <RenderTechStack title="Languages That I Speak" data={categorizedTechStack.languages} />
            <RenderTechStack title="Frameworks and Libraries I Love" data={categorizedTechStack.frameworksLibraries} />
            <RenderTechStack title="Where My Data Lives" data={categorizedTechStack.databases} />
          </div>
        </main>
      </div>
    </section>
  );
};

export default TechStack;
