import React from "react";
import About from "../../component/About/About";
import Header from "../../component/Header/Header";
import Home from "../../component/Home/Home";
import Work from "../../component/Work/Work";
import Contact from "../../component/Contact/Contact";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default HomePage;
