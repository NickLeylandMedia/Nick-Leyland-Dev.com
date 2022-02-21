/* Library Imports */
//React
import React from "react";

import { urlFor } from "../modules/urlFor";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */
interface Props {
  tools: any[];
}

/* Component/Functions */
const Tech: React.FC<Props> = ({ tools }) => {
  let featured: any[];
  let renderedTech;
  if (tools.length) {
    featured = tools.filter((tool) => {
      return tool.featured === true;
    });

    if (featured.length) {
      renderedTech = featured.map(({ name, url, image }) => {
        return (
          <div
            key={`tech${name}${url}`}
            className="techtool bg-white text-center w-full lg:w-[75%] m-auto h-44 lg:h-48 xl:h-48 relative border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue"
          >
            <a href={url}>
              <div className="toolInfo w-full h-full relative top-[35%]">
                <img
                  className="w-auto h-[50px] m-auto max-w-[50%]"
                  src={urlFor(image).url()}
                  alt=""
                />
                <h4 className="mt-2">{name}</h4>
              </div>
            </a>
          </div>
        );
      });
    }
  }

  //Function return statement
  return (
    <div className="Tech w-[95%] lg:w-3/5 mx-auto my-5">
      <h1 className="text-white text-2xl dark:text-black">My Tools</h1>
      <p className="text-white text-xl border my-4 dark:text-black">
        Over the years I've gained experience with many different web
        technologies. These are the tools I use most frequently!
      </p>
      <div className="toolShowcase w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {renderedTech}
      </div>
    </div>
  );
};

/* Export Statement */
export default Tech;
