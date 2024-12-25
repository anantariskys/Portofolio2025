import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import OpeningExperience from "../../../components/OpeningExperience";
import ExperienceCard from "../../../components/ExperienceCard";
import { section } from "framer-motion/client";
import { experiences } from "../../../data/experience";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const wrapperRef= React.useRef(null);
  useEffect(() => {
    const sections = gsap.utils.toArray("#experience-wrapper > div");

    gsap.fromTo(
      "#experience-wrapper",
      { x: "0%" },
      {
        x: `-${100 - 100 / sections.length}%`,
        scrollTrigger: {
          trigger: "#experience-section",
          start: "20% top",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );
 
  

    
  }, []);


  

  return (
    <div
      id="experience-section"
      className="relative h-[500vh] bg-gray-800"
      style={{
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/stardust.png")',
      }}
    >
      <div
        className="overflow-hidden sticky top-0"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/stardust.png")',
          backgroundColor: "#212529",
        }}
      >
        <div
          id="experience-wrapper"
          className="w-fit h-screen sticky overflow-x-hidden top-0 flex"
         
        >
          <OpeningExperience />
          {experiences.map((experience, index) => (
            <div
            
              key={index}
              className="w-screen h-screen relative flex overflow-x-hidden items-center justify-around text-secondary"
            >
              <div className="h-4 absolute w-full bg-secondary" />
              <ExperienceCard experience={experience[0]} top={true}/>
              {
                experience[1] ? (
                  <ExperienceCard experience={experience[1]} top={false} />
                  
                ):(
                  <div className="opacity-0">

                    <ExperienceCard experience={experience[0]} top={false} />
                  </div>
                )
              }

           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
