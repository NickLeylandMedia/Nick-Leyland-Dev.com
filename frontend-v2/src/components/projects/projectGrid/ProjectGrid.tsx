/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ProjectGrid.module.scss";

/* Image Imports */

/* Component Imports */
import Pagination from "@/components/pagination/Pagination";
import ProjectCard from "../projectCard/ProjectCard";

/* Module Imports */
import { urlFor } from "@/modules/urlFor";

/* Component Interfaces */
interface Props {
  items: any[];
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

/* Component */
const ProjectGrid: React.FC<Props> = ({
  items,
  totalPages,
  activePage,
  setActivePage,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedProjects: any = "No Projects Found";
  /* End Render Variables */

  /* Functions */
  //Logic to render projects
  if (items.length > 0) {
    renderedProjects = items.map((item, index) => {
      return (
        <ProjectCard
          key={index}
          name={item.name}
          description={item.description}
          githubLink={item.github}
          featured={item.featured}
          image={urlFor(item.image).url()}
          slug={item.slug.current}
          tools={item.tools}
          url={item.url}
        />
      );
    });
  }

  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={`${styles.ProjectGrid} darkGrayOverlay`}>
      <h1 className={`primary light`}>My Projects</h1>
      <div className={styles.gridContainer}>{renderedProjects}</div>
      <Pagination
        totalPages={totalPages}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
};

/* Export Statement */
export default ProjectGrid;
