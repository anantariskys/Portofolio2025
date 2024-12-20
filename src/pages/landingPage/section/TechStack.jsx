import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


const TechStack = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const content = contentRef.current;

    // Membuat elemen pembungkus untuk efek smoothing
    const smoother = document.createElement("div");
    smoother.style.position = "fixed";
    smoother.style.top = "0";
    smoother.style.left = "0";
    smoother.style.width = "100%";
    smoother.style.height = "100%";
    smoother.style.overflow = "hidden";
    smoother.style.pointerEvents = "none";
    document.body.appendChild(smoother);

    const smoothContent = document.createElement("div");
    smoothContent.style.position = "relative";
    smoothContent.style.willChange = "transform";
    smoother.appendChild(smoothContent);

    // Memindahkan anak-anak konten asli ke elemen smoothContent
    while (content.firstChild) {
      smoothContent.appendChild(content.firstChild);
    }

    // GSAP ScrollTrigger untuk animasi smoothing
    gsap.to(smoothContent, {
      y: () => -(smoothContent.offsetHeight - window.innerHeight),
      ease: "power3.out",
      scrollTrigger: {
        trigger: content,
        start: "top top",
        end: "bottom bottom",
        scrub: true, // Mengaktifkan scrub untuk efek smooth
      },
    });

    // Membersihkan setelah unmount
    return () => {
      while (smoothContent.firstChild) {
        content.appendChild(smoothContent.firstChild);
      }
      document.body.removeChild(smoother);
    };
  }, []);

  return (
    <div ref={contentRef}>
      <section style={{ height: "100vh", background: "lightblue" }}>
        <h1>Section 1</h1>
      </section>
      <section style={{ height: "100vh", background: "lightcoral" }}>
        <h1>Section 2</h1>
      </section>
      <section style={{ height: "100vh", background: "lightgreen" }}>
        <h1>Section 3</h1>
      </section>
    </div>
  );
};

export default TechStack;
