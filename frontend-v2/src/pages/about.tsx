/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import Bio from "@/components/about/bio/Bio";
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import Navbar from "@/components/navbar/Navbar";

/* Module Imports */

/* Component Interfaces */
interface Props {}

/* Component */
const About: React.FC<Props> = () => {
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

  return (
    <div className="About imagePage">
      {/* Header Start */}
      <header>
        <Navbar setter={setShowMenu} showMenu={showMenu} />
      </header>
      {/* Header End */}
      {/* Content Start */}
      <div className="mainContent">{showMenu ? <MobileMenu /> : <Bio />}</div>
      {/* Content End */}
      {/* Footer Start */}
      {/* <Footer /> */}
      {/* Footer End */}
    </div>
  );
};

/* Export Statement */
export default About;
