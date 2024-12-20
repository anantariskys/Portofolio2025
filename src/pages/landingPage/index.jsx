
import { useEffect, useRef } from "react";
import Hero from "./section/Hero";
import About from "./section/About";
import TechStack from "./section/TechStack";



const LandingPage = () => {
  
  return (
    <div
   
      className=" w-full scroll-smooth text-primary bg-secondary relative"
    >
      <Hero />
      <About />
      <TechStack/>
    </div>
  );
};

export default LandingPage;
