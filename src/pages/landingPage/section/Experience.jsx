import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import OpeningExperience from "../../../components/OpeningExperience";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
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

  const experiences = [
    {
      title: "Software Engineer",
      company: "KBMDSI",
      date: "17 Sep 2022 - 18 Sep 2023",
      description: "Developed and maintained various enterprise-level software solutions.",
      location: "Jakarta, Indonesia",
    },
    {
      title: "Frontend Developer",
      company: "Tech Corp",
      date: "01 Oct 2021 - 02 Oct 2022",
      description: "Worked on building and optimizing user interfaces for web applications.",
      location: "Bandung, Indonesia",
    },
    {
      title: "Full Stack Developer",
      company: "DevWorks",
      date: "10 Oct 2020 - 12 Oct 2021",
      description: "Developed both frontend and backend services for client projects.",
      location: "Yogyakarta, Indonesia",
    },
    {
      title: "UI/UX Designer",
      company: "InnoTech",
      date: "15 Oct 2019 - 17 Oct 2020",
      description: "Designed user interfaces and improved user experience for mobile apps.",
      location: "Surabaya, Indonesia",
    },
    {
      title: "Junior Developer",
      company: "CodeX",
      date: "20 Oct 2018 - 22 Oct 2019",
      description: "Assisted in developing small web applications and bug fixes.",
      location: "Malang, Indonesia",
    },
  ];

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
          className="w-fit h-screen sticky top-0 flex"
        >
          <OpeningExperience />
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="w-screen h-screen relative flex items-center justify-around text-secondary"
            >
              <div className="h-4 absolute w-full bg-secondary" />
              
              {/* Experience Top (Left) */}
              <div
                className={`top-1/2 flex flex-col items-center transform -translate-y-1/2`}
              >
                <div className="p-2">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <div className="flex items-center justify-between">
                    <small>{experience.company}</small>
                    <small>{experience.date}</small>
                  </div>
                  <p>{experience.description}</p>
                  <small>{experience.location}</small>
                </div>
                <div className="w-2 h-8 bg-secondary" />
              </div>

              {/* Experience Bottom (Right) */}
              <div
                className={`top-1/2 flex flex-col items-center transform translate-y-1/2`}
              >
                <div className="w-2 h-8 bg-secondary" />
                <div className="p-2">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <div className="flex items-center justify-between">
                    <small>{experience.company}</small>
                    <small>{experience.date}</small>
                  </div>
                  <p>{experience.description}</p>
                  <small>{experience.location}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
