import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Hero from "./section/Hero";
import About from "./section/About";

const LandingPage = () => {
  const target = useRef(null);

  
  const { scrollY } = useScroll({
    container: target, 
  });

  const translateY = useTransform(scrollY, [0, 1000], [0, -500], {
  });

  return (
    <motion.div
      ref={target}
      className=" w-full text-primary bg-secondary relative"
    >
      {/* Hero Section */}
      <motion.div
        style={{ translateY }}
        className=" w-full  bg-red-500"
      >
        <Hero />
      </motion.div>

      {/* About Section */}
      <motion.div
        style={{ translateY }}
        className=" w-full  bg-blue-500"
      >
        <About />
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
