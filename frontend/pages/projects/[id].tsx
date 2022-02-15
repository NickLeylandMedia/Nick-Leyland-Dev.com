/* Library Imports */
//React
import React from "react";

import type { NextPage } from "next";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Exproject from "../../components/pages/projects/Exproject";

/* Component Interfaces */

/* Component/Functions */
const ProjDetail: NextPage = () => {
  //Function return statement
  return (
    <React.Fragment>
      <Nav />
      <Exproject />
      <Footer />
    </React.Fragment>
  );
};

/* Export Statement */
export default ProjDetail;
