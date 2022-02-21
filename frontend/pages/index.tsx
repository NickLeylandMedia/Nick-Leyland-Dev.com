import type { NextPage } from "next";
import type { ReactNode } from "react";
import React, { useEffect } from "react";
import groq from "groq";

import client from "../modules/client";

import Head from "next/head";

import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Tech from "../components/Tech";
import ProjectsFeature from "../components/ProjectFeature";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Sidebar from "../components/Sidebar";

interface IHomeProps {
  projects: any[];
  tools: any[];
  children?: ReactNode; // import from react if needed
}

const Home = ({ projects, tools }: IHomeProps) => {
  console.log(projects, tools);
  return (
    <React.Fragment>
      <Head>
        <title>Nick Leyland - Fullstack Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Intro />
      <Tech tools={tools} />
      <ProjectsFeature projects={projects} />
      <Contact />
      <Sidebar />
      <Footer />
    </React.Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  const projects = await client.fetch(groq`
  *[_type == "project"]{
    name, url, description, image, tools[]->{name,image}, slug, featured
  }`);

  const tools = await client.fetch(groq`*[_type == "techtool"]{
    name, featured, url, image
  }`);

  return {
    props: {
      projects,
      tools,
    },
  };
}
