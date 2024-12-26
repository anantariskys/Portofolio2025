import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

const Project = () => {
    const sectionRef = useRef(null);
    const transitionRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            transitionRef.current,
            {
              width: 0,
              height: 0,
            
            },
            {
              width: "100%",
              height: "100vh",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub:1,
            //    pin: true,
                pinSpacing: false,
              },
            }
            )
        
        
    })
  return (
    <section ref={sectionRef} className='h-[400vh] relative ' style={{
        backgroundImage:
        'url("https://www.transparenttextures.com/patterns/stardust.png")',
      backgroundColor: "#212529",
    }}>
        <main ref={transitionRef}  className='sticky top-1/2  bg-white h4 w-4 -translate-y-1/2'>
halo
        </main>
      
    </section>
  )
}

export default Project
