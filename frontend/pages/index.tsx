import type { NextPage } from "next";
import React from "react";

import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Tech from "../components/Tech";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Nav />
      <Intro />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
