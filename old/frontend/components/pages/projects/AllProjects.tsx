/* Library Imports */
//React
import React, { useState } from "react";
import Projects from "../../../pages/projects";

import Link from "next/link";

import { urlFor } from "../../../modules/urlFor";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */
interface Props {
  projects: any[];
  tools: any[];
}

/* Component/Functions */
const AllProjects: React.FC<Props> = ({ projects, tools }) => {
  //State to store active filters
  const [filts, updateFilts] = useState<any[]>([]);

  /* Project Rendering */
  let activeProjects;
  let renderedProjects;

  if (Projects.length) {
    activeProjects = projects.filter((proj) => {
      return proj.featured;
    });

    // /* Project Filtering */
    // for (let i: number = 0; i < activeProjects.length; i++) {
    //   activeProjects[i].tools.forEach((obj: any) => {
    //     let result;
    //     if (filts.length) {
    //       result = filts.includes(obj.name)
    //       console.log(result);
    //     } else {
    //       result = filts.includes(obj.name)
    //       console.log(result);
    //     }
    //   });
    // }

    renderedProjects = activeProjects.map(
      ({ name, slug = "", image, tools, description }) => {
        let renderedTools;
        let renderedExtras;
        if (tools && tools.length <= 4) {
          renderedTools = tools.map(({ image }: any) => {
            return (
              <div key={`tool${urlFor(image).url()}`} className="tool w-1/4">
                <img
                  className="w-[70px] h-[70px] m-auto p-2"
                  src={urlFor(image).url()}
                  alt=""
                />
              </div>
            );
          });
        } else if (tools && tools.length > 4) {
          const rem = +tools.length - 3;
          const shortenedTools = tools.slice(0, 3);
          renderedTools = shortenedTools.map(({ image }: any) => {
            return (
              <div
                key={`shortTool${urlFor(image).url()}`}
                className="tool w-1/4"
              >
                <img
                  className="w-[70px] h-[70px] m-auto p-2"
                  src={urlFor(image).url()}
                  alt=""
                />
              </div>
            );
          });
          //Extras
          renderedExtras = (
            <div className="w-[55px] h-[55px] rounded-lg bg-slate-500 m-auto p-2 text-center">
              <p className="text-white relative top-[6px] text-lg">{`+${rem}`}</p>
            </div>
          );
        }
        return (
          <div
            key={`proj${slug.current}`}
            className="projectCard text-black bg-white h-[350px] p-4 w-full border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue"
          >
            <div className="flex flex-row h-[50%]">
              <div className="projInfo w-[50%]">
                <h3 className="text-lg md:text-xl mt-6 md:mt-0">{name}</h3>
                <p className="text-md md:text-xl mt-2">{description}</p>
              </div>
              <div className="projGraphic w-[50%]">
                <img
                  src={urlFor(image).url()}
                  alt=""
                  className="h-[100px] relative top-10 md:top-0 md:h-full w-[100px] md:w-auto m-auto"
                />
              </div>
            </div>
            <div className="cardBottom">
              <h3>Tools</h3>
              <div className="projTools flex flex-row my-2">
                {renderedTools}
                {renderedExtras}
              </div>
              <Link href={`/projects/${slug.current}`}>
                <a className="bg-red-600 dark:bg-blue-600 text-white px-5 py-2 block m-auto text-center">
                  More Info
                </a>
              </Link>
            </div>
          </div>
        );
      }
    );
  }

  // const filterFunc = (name: string) => {
  //   const proxFilts = [...filts];
  //   if (proxFilts.includes(name)) {
  //     const pos = proxFilts.indexOf(name);
  //     proxFilts.splice(pos, 1);
  //     updateFilts(proxFilts);
  //   } else {
  //     proxFilts.push(name);
  //     updateFilts(proxFilts);
  //   }
  // };

  // /* Filter Rendering */
  // let renderedFilters;
  // if (tools) {
  //   renderedFilters = tools.map(({ name, image }) => {
  //     if (filts.includes(name)) {
  //       return (
  //         <div
  //           onClick={() => filterFunc(name)}
  //           className="filter bg-white rounded-lg flex flex-col border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue transition ease-in-out duration-500 cursor-pointer"
  //         >
  //           <img
  //             src={urlFor(image).url()}
  //             alt=""
  //             className="w-[75px] h-[75px] m-auto p-1"
  //           />
  //           <p className="filterTitle">{name}</p>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div
  //           onClick={() => filterFunc(name)}
  //           className="filter bg-white rounded-lg flex flex-col border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue opacity-40 hover:opacity-100 transition ease-in-out duration-500 cursor-pointer"
  //         >
  //           <img
  //             src={urlFor(image).url()}
  //             alt=""
  //             className="w-[75px] h-[75px] m-auto p-1"
  //           />
  //           <p className="filterTitle">{name}</p>
  //         </div>
  //       );
  //     }
  //   });
  // }

  //Function return statement
  return (
    <div className="AllProjects w-[95%] lg:w-3/5 m-auto">
      <h1 className="text-white text-2xl mb-4 dark:text-black">My Projects</h1>
      {/* <div className="projFilters flex flex-col text-center my-4 w-full">
        <h5 className="text-white dark:text-black leading my-2">Filter By:</h5>
        <div className="filterFlex grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {renderedFilters}
        </div>
      </div> */}
      {/* PROJECTS */}
      <div className="cardCont grid grid-cols-1 md:grid-cols-2 mb-5 w-full gap-4">
        {renderedProjects}
      </div>
    </div>
  );
};

/* Export Statement */
export default AllProjects;
