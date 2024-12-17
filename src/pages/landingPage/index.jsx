import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Hero from "./section/Hero";
import About from "./section/About";



const LandingPage = () => {
  
  return (
    <motion.div
   
      className=" w-full scroll-smooth text-primary bg-secondary relative"
    >
      <Hero />
      <About />
    </motion.div>
  );
};

export default LandingPage;
