import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react/dist/iconify.js";
import { sosialMedia } from "../../../data/sosialMedia";
import { Link } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const aboutWave = document.querySelector("#about-wave");
    const boxItems = document.querySelectorAll("#box-wrapper > div");

    const timeline1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-transition",
        start: "top 50%",
        id: "transition",
        end: "50% 90%",
        scrub: 2,
        // markers: true,
        pinSpacing: false,
      },
    });

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-transition",
        end: "85% 80%",
        id: "transition2",
        start: "50% 90%",
        scrub: 2,
        // markers: true,
        pinSpacing: false,
        // onUpdate: (self) => {
        //   console.log(self.progress);
        // },
      },
    });

    const timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-transition",
        end: "85% 80%",
        id: "transition3",
        start: "50% 90%",
        scrub: 2,
        markers: true,
        pinSpacing: false,
        onUpdate: (self) => {
          console.log(self.progress);
        },
      },
    });
    timeline3.fromTo("#github-calendar",{width: 0,opacity:0}, {
      width: "100%",opacity:1,
    });

    // Periksa apakah elemen boxItem ada
    if (boxItems.length > 0) {
      timeline2.fromTo("#box-wrapper",
        {opacity:0}, {
          opacity:1,
        width: "100%",
      });
      boxItems.forEach((item, index) => {
        timeline2
          .fromTo(
            item,
            {
              width: "15%",
              opacity: 1,
              height: 0,
              fontSize: 0,
            },
            {
              duration: 1,
              height: `${25 * (index + 1)}%`,
              y: 0,

              ease: "power2.out",
            }
          )
          .to(item, {
            fontSize: 60,
          });
      });
    }

    const windowWidth = window.innerWidth;
    const waveWidth = aboutWave.clientWidth;

    timeline1
      .fromTo(
        aboutWave,
        {
          x: windowWidth - waveWidth - 16,
          scale: 0,
          top: 16,
          borderRadius: "50%",
        },
        { duration: 2, scale: 1 }
      )
      .to(aboutWave, { x: 16, duration: 2 })
      .to(aboutWave, {
        top: 0,
        x: 0,
        width: "100%",
        height: "100vh",
        borderRadius: "0px",
        duration: 2,
        marginBottom: "0px",
      });

    return () => {
      timeline1.kill();
      timeline2.kill();
      timeline3.kill();
    };
  }, []);

  return (
    <div id="about-section" className="relative">
      <div
        id="about-transition"
        style={{
          backgroundColor: "#f8f9fa",
          backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")`,
        }}
        className="h-[300vh] w-full relative"
      >
        <div
          id="about-wave"
          className="bg-primary sticky top-0 h-full "
          style={{ width: "100px", height: "100px" }}
        >
             <div id="github-calendar" className="absolute bottom-4 overflow-hidden text-secondary   left-0 px-4">
              <GitHubCalendar
              
                username="anantariskys"
                blockSize={15} 
                blockMargin={2} 
                colorScheme="dark" 
                fontSize={12} 
              />
            </div>
          <div
            id="box-wrapper"
            className="absolute overflow-hidden flex justify-end size-fit w-full h-full   top-0 right-0"
          >
            {sosialMedia.map((item, index) => (
              <div
                id={`box${index + 1}`}
                key={index}
                className="bg-secondary h-32 w-32 group flex flex-col hover:bg-opacity-90 duration-300 cursor-pointer justify-center items-center relative"
              >
                <a
                  href={item.link}
                  className="flex justify-center items-center w-full h-full"
                >
                  <Icon
                    className="group-hover:scale-105 transition-transform"
                    icon={item.icon}
                  />
                </a>
              </div>
            ))}
           
          </div>
        </div>
      </div>
      <div
        id="about-wrapper"
        className="space-y-4 relative h-[200vh] bg-primary text-secondary"
      >
        <h1>Ini about</h1>
        <div className="top-0 sticky h-screen"></div>
      </div>
    </div>
  );
};

export default About;
