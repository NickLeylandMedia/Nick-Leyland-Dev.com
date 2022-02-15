/* Library Imports */
//React
import React from "react";

import type { NextPage } from "next";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ExtrasDir from "../components/pages/extras/ExtrasDir";

/* Component Interfaces */

/* Component/Functions */
const Extras: NextPage = () => {
  //Function return statement
  return (
    <React.Fragment>
      <Nav />
      <ExtrasDir />
      <Footer />
    </React.Fragment>
  );
};

/* Export Statement */
export default Extras;