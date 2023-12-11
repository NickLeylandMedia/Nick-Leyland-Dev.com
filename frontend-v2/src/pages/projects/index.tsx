/* Library Imports */
//Groq
import groq from "groq";
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import Navbar from "@/components/navbar/Navbar";
import ProjectGrid from "@/components/projects/projectGrid/ProjectGrid";

/* Module Imports */
import { client } from "../../modules/client";
import { paginate } from "@/modules/numtools";

/* Component Interfaces */
interface Props {
  projects: any;
  tools: any;
}

/* Component */
const Projects: React.FC<Props> = ({ projects, tools }) => {
  /* State Variables */
  //Menu State
  const [showMenu, setShowMenu] = useState(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(1);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(3);
  /* End State Variables */

  /* Render Variables */
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  //Effect to set total pages
  useEffect(() => {
    setTotalPages(paginate(6, projects.length));
  }, [projects]);

  //Effect to set start and end index
  useEffect(() => {
    setStartIndex((activePage - 1) * 6);
    setEndIndex(activePage * 6 - 1);
  }, [activePage]);
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className="Projects imagePage">
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
          <ProjectGrid
            items={
              totalPages > 1
                ? projects.slice(startIndex, endIndex + 1)
                : projects
            }
            activePage={activePage}
            totalPages={totalPages}
            setActivePage={setActivePage}
          />
        )}
      </div>
      {/* Content End */}
      {/* Footer Start */}
      {/* <Footer /> */}
      <div></div>
      {/* Footer End */}
    </div>
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
