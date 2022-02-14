/* Library Imports */
//React
import type { NextPage } from "next";
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import Nav from "../components/Nav";
import AllProjects from "../components/pages/projects/AllProjects";
import Footer from "../components/Footer";

/* Component Interfaces */

/* Component/Functions */
const Projects: NextPage = () => {
  //Function return statement
  return (
    <React.Fragment>
      <Nav />
      <AllProjects />
      <Footer />
    </React.Fragment>
  );
};

/* Export Statement */
export default Projects;
