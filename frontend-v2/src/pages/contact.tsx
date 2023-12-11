/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import ContactForm from "@/components/contact/contactForm/ContactForm";
import Navbar from "@/components/navbar/Navbar";

/* Module Imports */

/* Component Interfaces */
interface Props {}

/* Component */
const Contact: React.FC<Props> = () => {
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
    <div className="Contact imagePage">
      {/* Header Start */}
      <header>
        <Navbar showMenu={showMenu} setter={setShowMenu} />
      </header>
      {/* Header End */}
      {/* Content Start */}
      <div className="mainContent">
        {showMenu ? <MobileMenu /> : <ContactForm />}
      </div>
      {/* Content End */}
      {/* Footer Start */}
      {/* <Footer /> */}
      {/* Footer End */}
    </div>
  );
};

/* Export Statement */
export default Contact;
