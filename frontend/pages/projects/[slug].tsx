/* Library Imports */
//React
import React from "react";

import type { NextPage } from "next";

import { useRouter } from "next/router";

import client from "../../modules/client";

import groq from "groq";

import Head from "next/head";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import Exproject from "../../components/pages/projects/Exproject";

/* Component Interfaces */
interface projDetailProps {
  project: any;
}

/* Component/Functions */
const ProjDetail = ({ project }: projDetailProps) => {
  console.log(project);
  const router = useRouter();
  //Function return statement
  return (
    <React.Fragment>
      <Head>
        <title>{project.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Exproject project={project} />
      <Sidebar />
      <Footer />
    </React.Fragment>
  );
};

const query = groq`*[_type == "project" && slug.current == $slug][0]{
  name, url, slug, github, description, image, publishDate, lastUpdated, fulldesc, tools[]->{name, image}
}`;

//Get Static Paths
export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: false,
  };
}

//Get Static Props
export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const project = await client.fetch(query, { slug });
  return {
    props: {
      project,
    },
  };
}

/* Export Statement */
export default ProjDetail;
