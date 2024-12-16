import React from "react";
import Navbar from "../components/Navbar";

const PageLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
};

export default PageLayout;
