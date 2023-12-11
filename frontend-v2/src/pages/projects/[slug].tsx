/* Library Imports */
//Groq
import groq from "groq";
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import Loader from "@/components/loader/Loader";
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import Navbar from "@/components/navbar/Navbar";
import ProjectInfo from "@/components/projects/projectDetail/ProjectInfo";

/* Module Imports */
//Nextjs Router
import { useRouter } from "next/router";
import { client } from "../../modules/client";
import { urlFor } from "../../modules/urlFor";
/* Component Interfaces */
interface Props {
  project: any;
}

/* Component */
const ProjectDetail: React.FC<Props> = ({ project }) => {
  /* State Variables */
  const router = useRouter();
  //Menu State
  const [showMenu, setShowMenu] = useState(false);
  /* End State Variables */

  /* Render Variables */
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  if (router.isFallback) {
    return (
      <div className="ProjectDetail imagePage">
        {/* Header Start */}
        <header>
          <Navbar showMenu={showMenu} setter={setShowMenu} />
        </header>
        {/* Header End */}
        {/* Content Start */}
        <div className="mainContent">
          <Loader />
        </div>
        {/* Content End */}
        {/* Footer Start */}
        {/* <Footer /> */}
        {/* Footer End */}
      </div>
    );
  }
  return (
    <div className="ProjectDetail imagePage">
      {/* Header Start */}
      <header>
        <Navbar showMenu={showMenu} setter={setShowMenu} />
      </header>
      {/* Header End */}
      {/* Content Start */}
      <div className="mainContent">
        {showMenu ? (
          <MobileMenu />
        ) : (
          <ProjectInfo
            title={project.name}
            summary={project.description}
            description={project.fulldesc}
            githubLink={project.github}
            lastUpdated={project.lastUpdated}
            tools={project.tools}
            slug={project.slug.current}
            publishDate={project.publishDate}
            url={project.url}
            image={urlFor(project.image).url()}
          />
        )}
      </div>
      {/* Content End */}
      {/* Footer Start */}
      {/* <Footer /> */}
      {/* Footer End */}
    </div>
  );
};

/* Server Side Rendering Logic */
//Query Variable
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
    fallback: true,
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
    revalidate: 10,
  };
}

/* Export Statement */
export default ProjectDetail;
