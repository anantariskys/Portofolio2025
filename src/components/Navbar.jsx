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
      className={`absolute top-0 left-0 z-20 w-full transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <main className="w-full container text-primary py-4 flex justify-center items-center">
        <ul className="flex items-center mix-blend-multiply gap-10 font-semibold w-fit bg-secondary rounded-xl  py-4 px-8 bg-opacity-50 backdrop-blur-xl">
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </main>
    </nav>
  );
};

export default Navbar;
