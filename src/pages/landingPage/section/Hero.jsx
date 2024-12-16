import { useEffect, useRef } from "react";
import Lanyard from "./Lanyard";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
  const target = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Animasi Scroll
    gsap.to("#content-1", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: window.innerHeight / 8,
    });
    gsap.to("#content-2", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: -window.innerHeight / 8,
    });

    // Animasi Huruf per Huruf
    const texts = document.querySelectorAll(".anim-text"); // Elemen teks
    texts.forEach((text) => {
      const letters = text.textContent.split("").map((letter) => `<span>${letter}</span>`).join("");
      text.innerHTML = letters; 

      gsap.fromTo(
        text.querySelectorAll("span"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
          stagger: 0.1, // Durasi antar huruf
          ease: "power3.inOut",
          duration: 0.8,
        }
      );
    });
  }, []);

  return (
    <section
      ref={target}
      id="hero-section"
      style={{
        backgroundColor: "#f8f9fa",
        backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")`,
      }}
      className="h-screen w-full snap-start flex md:flex-row flex-col-reverse md:items-center justify-end md:justify-center overflow-hidden container"
    >
      <div id="content-1" className="md:w-1/2 flex flex-col">
        <p className="anim-text">Fortis Fortuna Adiuvat</p>
        <h1 className="font-semibold text-xl md:text-4xl anim-text">Ananta Risky S</h1>
        <h3 className="md:text-8xl text-5xl font-black anim-text">Full Stack Developer</h3>
      </div>
      <div id="content-2" className="md:w-1/2 h-3/5 md:h-full">
        <Lanyard />
      </div>
    </section>
  );
};

export default Hero;
