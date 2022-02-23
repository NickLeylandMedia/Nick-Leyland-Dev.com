/* Library Imports */
//React
import React from "react";

import Link from "next/link";

/* Module Imports */
import { urlFor } from "../modules/urlFor";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */
interface Props {
  projects: any[];
}

/* Component/Functions */
const ProjectFeature: React.FC<Props> = ({ projects }) => {
  let activeProjects;
  let renderedProjects;
  if (projects.length) {
    activeProjects = projects.filter((proj) => {
      return proj.featured;
    });
    renderedProjects = activeProjects.map(
      ({ name, url, description, image, slug }) => {
        return (
          <Link
            key={`proj${name}${url}`}
            href={`/projects/${slug.current}`}
            passHref
          >
            <div className="cursor-pointer project bg-white h-[175px] my-3 border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue flex flex-row justify-between md:justify-evenly xl:justify-center">
              <img
                className="w-[30%] h-auto ml-2 md:ml-0"
                src={urlFor(image).url()}
                alt=""
              />
              <div className="projectInfo w-[70%] flex flex-col my-2 lg:my-3">
                <h4 className="text-black mx-7 md:text-[19px]">{name}</h4>
                <p className="text-black text-[16px] md:text-[14px] lg:text-[20px] mx-7 mb-3">
                  {description}
                </p>
              </div>
            </div>
          </Link>
        );
      }
    );
  } else {
    renderedProjects = "No Projects";
  }
  //Function return statement
  return (
    <div className="Projects w-[95%] lg:w-3/5 mx-auto my-7 text-2xl text-white ">
      <h2 className="text-2xl my-2 dark:text-black">Projects</h2>
      <Link href="/projects" passHref>
        <a className="bg-white mt-2 mb-6 block w-[200px] p-2 rounded-md text-center text-black text-[16px]">
          See All Projects
        </a>
      </Link>
      <div className="projectShowcase w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
        {renderedProjects}
      </div>
    </div>
  );
};

/* Export Statement */
export default ProjectFeature;
