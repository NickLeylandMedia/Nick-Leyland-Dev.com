/* Library Imports */
//React
import { NextPage } from "next";
import React from "react";

import Head from "next/head";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FullForm from "../components/pages/contact/FullForm";

/* Component Interfaces */

/* Component/Functions */
const Contact: NextPage = () => {
  //Function return statement
  return (
    <React.Fragment>
      <Head>
        <title>Contact - Nick Leyland</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <FullForm />
      <Sidebar />
      <Footer />
    </React.Fragment>
  );
};

/* Export Statement */
export default Contact;
