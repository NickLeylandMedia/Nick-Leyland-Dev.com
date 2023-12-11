/* Library Imports */
//React
import type { NextPage } from "next";
import React from "react";

import Head from "next/head";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Bio from "../components/pages/about/Bio";
import Links from "../components/pages/about/Links";
import Sidebar from "../components/Sidebar";

/* Component Interfaces */

/* Component/Functions */
const About: NextPage = () => {
  //Function return statement
  return (
    <React.Fragment>
      <Head>
        <title>About Me - Nick Leyland</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Bio />
      {/* <Links /> */}
      <Sidebar />
      <Footer />
    </React.Fragment>
  );
};

/* Export Statement */
export default About;
