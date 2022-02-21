/* Library Imports */
//React
import type { NextPage } from "next";
import React from "react";

import client from "../../modules/client";

import groq from "groq";

import Head from "next/head";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import Nav from "../../components/Nav";
import AllProjects from "../../components/pages/projects/AllProjects";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

/* Component Interfaces */
interface projPageInt {
  projects: any[];
  tools: any[];
}

/* Component/Functions */
const Projects = ({ projects, tools }: projPageInt) => {
  console.log(projects);
  //Function return statement
  return (
    <React.Fragment>
      <Head>
        <title>Dev Projects - Nick Leyland</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <AllProjects projects={projects} tools={tools} />
      <Sidebar />
      <Footer />
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const projects = await client.fetch(groq`
    *[_type == "project"]{
      name, url, slug, featured, github, description, image, fulldesc, tools[]->{name, image}
    }
  `);

  const tools = await client.fetch(groq`*[_type == "techtool"]{
    name, featured, url, image
  }`);

  return {
    props: {
      projects,
      tools,
    },
    revalidate: 10,
  };
}

/* Export Statement */
export default Projects;
