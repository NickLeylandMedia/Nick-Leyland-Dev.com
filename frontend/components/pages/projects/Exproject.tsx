/* Library Imports */
//React
import React from "react";

import { PortableText } from "@portabletext/react";

import { urlFor } from "../../../modules/urlFor";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */
interface Props {
  project: any;
}

/* Component/Functions */
const Exproject: React.FC<Props> = ({ project }) => {
  let renderedStack;
  if (project.tools.length) {
    renderedStack = project.tools.map((tool: any) => {
      return (
        <div key={`stackItem${tool.name}`} className="stackitem group">
          <img
            src={urlFor(tool.image).url()}
            alt=""
            className="w-[60px] h-[60px] m-auto bg-white p-2 rounded-lg dark:shadow-blue"
          />
          <div className="StackName text-center w-full">
            <p className="text-white mt-1 dark:text-black">{tool.name}</p>
          </div>
        </div>
      );
    });
  }

  const ptComponents = {
    block: {
      h1: ({ children }: any) => {
        return <h1 className="text-white dark:text-black">{children}</h1>;
      },
      normal: ({ children }: any) => {
        return <p className="text-white dark:text-black">{children}</p>;
      },
    },
  };

  //Function return statement
  return (
    <div className="Exproject w-[95%] lg:w-3/5 m-auto">
      <h1 className="text-white text-2xl my-4 dark:text-black">
        {project.name}
      </h1>
      <div className="projDets flex flex-col w-full">
        <div className="projGraphic w-full">
          <div className="bg-white rounded-lg md:w-[50%] m-auto h-[350px] border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue">
            <img
              src={urlFor(project.image).url()}
              alt=""
              className="w-52 h-52 relative top-[71px] mx-auto"
            />
          </div>
        </div>
        <div className="projInfo w-full">
          <p className="text-white dark:text-black text-xl my-7">
            {project.description}
          </p>
          <div className="flex flex-row">
            <div className="flex flex-col w-[45%] mx-auto">
              <h3 className="text-2xl text-white dark:text-black mb-2">Info</h3>
              <div className="infoRow flex flex-row my-2 py-2">
                <h4 className="text-white dark:text-black">Published On:</h4>
                <span className="text-white dark:text-black ml-2">
                  {project.publishDate}
                </span>
              </div>
              <div className="infoRow flex flex-row my-2 py-2">
                <h4 className="text-white dark:text-black">Updated On:</h4>
                <span className="text-white dark:text-black ml-2">
                  {project.lastUpdated}
                </span>
              </div>
            </div>
            <div className="projLinks flex flex-col w-[45%] mx-auto">
              <h3 className="text-2xl text-white dark:text-black mb-2">
                Links
              </h3>
              <div className="flex flex-col text-center">
                <a
                  className="bg-red-600 text-white my-2 py-2"
                  href={project.github}
                >
                  Github
                </a>
                <a
                  className="bg-red-600 text-white my-2 py-2"
                  href={project.url}
                >
                  Live Project
                </a>
              </div>
            </div>
          </div>
          <h3 className="text-2xl text-white my-3 dark:text-black">
            Tech Stack
          </h3>
          <div className="stackRow grid grid-cols-5 w-full mx-auto my-2 lg:my-5 gap-3 relative mb-4">
            {renderedStack}
          </div>

          <PortableText value={project.fulldesc} components={ptComponents} />
        </div>
      </div>
    </div>
  );
};

/* Export Statement */
export default Exproject;
