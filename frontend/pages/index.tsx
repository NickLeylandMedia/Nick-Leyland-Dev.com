import type { NextPage } from "next";
import React from "react";

import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Tech from "../components/Tech";
import ProjectsFeature from "../components/ProjectFeature";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Nav />
      <Intro />
      <Tech />
      <ProjectsFeature />
      <Contact />
      <Sidebar />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
