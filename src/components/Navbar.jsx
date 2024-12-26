import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 z-20 w-full bg-transparent mix-blend-difference  transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <main className="w-full container py-4 flex justify-center items-center">
        <ul
          className="flex items-center text-sm md:text-base text-white bg-white bg-opacity-80 mix-blend-difference gap-10 font-semibold w-fit rounded-xl py-2 md:py-4 px-4 md:px-8"
        
        >
          <li className="text-white mix-blend-difference">About</li>
          <li className="text-white mix-blend-difference">Services</li>
          <li className="text-white mix-blend-difference">Contact</li>
        </ul>
      </main>
    </nav>
  );
};

export default Navbar;
