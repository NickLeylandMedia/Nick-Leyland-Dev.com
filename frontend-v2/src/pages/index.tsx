/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import HomeHero from "../components/home/homeHero/HomeHero";
import HomeHeroV2 from "@/components/home/homeHeroV2/HomeHeroV2";

/* Module Imports */

/* Component Interfaces */
interface Props {}

/* Component */
const Home: React.FC<Props> = () => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className="Home hero">
      {/* Content Start */}
      {/* <HomeHero /> */}
      <HomeHeroV2 />
      {/* Content End */}
    </div>
  );
};

/* Export Statement */
export default Home;
