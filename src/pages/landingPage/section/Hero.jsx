import { useEffect, useRef } from "react";
import Lanyard from "./Lanyard";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
  const target = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const boxItems = document.querySelectorAll("#box-wrapper2 > div");

    // Timeline untuk animasi box
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "80% 60%",
        scrub: 1,
        // markers: true,
        pinSpacing: false,
        onUpdate: (self) => console.log(self.progress),
      },
    });

    boxItems.forEach((item, index) => {
      timeline2.fromTo(
        item,
        {width: `${(6*(index+1)) * (index + 1)}%`, opacity: 1, height: "100%" },
        { duration: 1,  width:0,ease:"circ.inOut"}
      );
    });

   
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

    // Animasi teks per huruf
    const texts = document.querySelectorAll(".anim-text");
    texts.forEach((text) => {
      const letters = text.textContent
        .split("")
        .map((letter) => `<span>${letter}</span>`)
        .join("");

      text.innerHTML = letters;

      gsap.fromTo(
        text.querySelectorAll("span"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
          stagger: 0.1,
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
      className="relative h-screen mb-4"
    >
      {/* Box Wrapper Animasi */}
      <div
        id="box-wrapper2"
        className=" h-1/4 w-full hidden lg:flex flex-col absolute bottom-0 left-0"
      >
        <div className="bg-primary" />
        <div className="bg-primary" />
        <div className="bg-primary" />
      </div>

      {/* Konten Utama */}
      <main className="container w-full h-full snap-start flex md:flex-row flex-col-reverse md:items-center justify-end md:justify-center overflow-hidden">
        {/* Konten Kiri */}
        <div id="content-1" className="md:w-1/2 flex flex-col">
          <p className="anim-text">Fortis Fortuna Adiuvat</p>
          <h1 className="font-semibold text-xl md:text-4xl anim-text">
            Ananta Risky S
          </h1>
          <h3 className="font-black text-5xl md:text-8xl anim-text">
            Full Stack Developer
          </h3>
        </div>

        {/* Konten Kanan */}
        <div id="content-2" className="md:w-1/2 h-3/5 md:h-full">
          <Lanyard />
        </div>
      </main>
    </section>
  );
};

export default Hero;
