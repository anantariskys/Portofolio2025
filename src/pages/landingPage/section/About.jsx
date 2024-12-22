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
        // markers: true,
        pinSpacing: false,
        onUpdate: (self) => {
          console.log(self.progress);
        },
      },
    });
    timeline3.fromTo(
      "#github-calendar",
      { width: 0, opacity: 0 },
      {
        width: "100%",
        opacity: 1,
      }
    );
    gsap.fromTo(
      "#about-title",
      { opacity: 0, x: -window.innerWidth / 4 },
      {
        scrollTrigger: {
          trigger: "#about-transition",
          end: "85% 80%",
          id: "transition3",
          start: "50% 90%",
          scrub: 1,
          pinSpacing: false,
          onUpdate: (self) => {
            console.log(self.progress);
          },
        },
        opacity: 1,
        x: 0,
      }
    );
    gsap.fromTo(
      "#about-line",
      { opacity: 0, x: -window.innerWidth / 4 },
      {
        scrollTrigger: {
          trigger: "#about-transition",
          end: "85% 80%",
          id: "transition3",
          start: "50% 90%",
          scrub: 3,
          pinSpacing: false,
          onUpdate: (self) => {
            console.log(self.progress);
          },
        },
        opacity: 1,
        x: 0,
      }
    );
    gsap.fromTo(
      "#about-description",
      { opacity: 0, x: -window.innerWidth / 2, fontSize: 16 },
      {
        scrollTrigger: {
          trigger: "#about-transition",
          end: "85% 80%",
          id: "transition3",
          start: "50% 90%",
          scrub: 5,
          pinSpacing: false,
          onUpdate: (self) => {
            console.log(self.progress);
          },
        },
        opacity: 1,
        x: 0,
        fontSize: 16,
      }
    );

    // Periksa apakah elemen boxItem ada
    if (boxItems.length > 0) {
      timeline2.fromTo(
        "#box-wrapper",
        { opacity: 0 },
        {
          opacity: 1,
          width: "100%",
        }
      );
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
          x: windowWidth - waveWidth - 64,
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
    <div id="about-section" className="relative ">
      <div
        id="about-transition"
        style={{
          backgroundColor: "#f8f9fa",
          backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")`,
        }}
        className="h-[300vh] w-full relative "
      >
        <div
          id="about-wave"
          className="bg-primary sticky top-0 h-full "
          style={{ width: "100px", height: "100px",
            backgroundColor: "#212529",
            backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")`,
           }}
        >
          <main className="container  flex flex-col gap-4 justify-center h-full">
            <div className=" text-secondary space-y-4 flex max-w-4xl flex-col justify-center">
              <h2 id="about-title" className="font-bold text-9xl">
                About Me.
              </h2>
              <div id="about-line" className="h-1 bg-secondary max-w-3xl"></div>
              <p
                id="about-description"
                className="text-lg text-justify max-w-4xl relative z-30 mix-blend-difference"
              >
                I am a student studying Information Technology Education at the
                Faculty of Computer Science, Brawijaya University. I have an
                interest in programming, web development and related fields. My
                academic endeavors have given me a deep understanding of
                education and computer science. I have translated theoretical
                knowledge into practical skills through my role as a practicum
                assistant. Additionally, my involvement in various campus
                organizations has enriched my skills and knowledge,
                strengthening my readiness to excel in a variety of IT-related
                roles.
              </p>
              <div id="about-description" className="space-y-2 relative rounded-md  max-w-20 text-center">
                <h3 className="text-2xl font-bold">20 +</h3>
                <small>Completed Project</small>
              </div>
            </div>
            <div id="github-calendar" className="flex gap-4 relative z-10 text-secondary">
              <GitHubCalendar
                username="anantariskys"
                blockSize={15}
                blockMargin={2}
                colorScheme="dark"
                fontSize={12}
                
              />
            </div>
          </main>
          <div
            id="box-wrapper"
            className="absolute z-0 overflow-hidden flex justify-end  size-fit w-full h-full top-0 right-0"
            onClick={() => console.log("clicked")}
          >
            {sosialMedia.map((item, index) => (
              <div
                id={`box${index + 1}`}
                key={index}
                className="bg-secondary h-32 w-32 group flex flex-col hover:bg-opacity-90 duration-300 cursor-pointer justify-center items-center relative"
              >
                <a href={item.url} target="_blank" rel="noopener noreferrer">
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
      
    </div>
  );
};

export default About;
