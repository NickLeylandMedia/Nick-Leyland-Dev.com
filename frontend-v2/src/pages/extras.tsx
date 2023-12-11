/* Library Imports */
//Groq
import groq from "groq";

//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import ExtrasDisp from "@/components/extras/extrasDisp/ExtrasDisp";
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import Navbar from "@/components/navbar/Navbar";
import SiteBuiltWith from "@/components/extras/siteBuiltWith/SiteBuiltWith";

/* Module Imports */
import { client } from "../modules/client";

/* Component Interfaces */
interface Props {
  pageInfo: any;
  resources: any[];
}

/* Component */
const Extras: React.FC<Props> = ({ pageInfo, resources }) => {
  /* State Variables */
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
  console.log(resources);
  return (
    <div className="Extras imagePage">
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
          <ExtrasDisp builtWith={pageInfo.builtWith} resources={resources} />
        )}
      </div>
      {/* Content End */}
      {/* Footer Start */}
      {/* <Footer /> */}
      {/* Footer End */}
    </div>
  );
};

export async function getStaticProps() {
  const pageInfo =
    await client.fetch(groq`*[_type == "extrasPage" && active == true][0]{
    active, builtWith[]->{name, url, image}
  }`);

  const resources = await client.fetch(groq`*[_type == "devResource"][]{
  name, url, description, image
}`);

  return {
    props: {
      pageInfo,
      resources,
    },
    revalidate: 10,
  };
}

/* Export Statement */
export default Extras;
