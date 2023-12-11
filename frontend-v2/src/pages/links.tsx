/* Library Imports */
//Groq
import groq from "groq";
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import LinkShowcase from "@/components/links/linkShowcase/LinkShowcase";
import Loader from "@/components/loader/Loader";
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import Navbar from "@/components/navbar/Navbar";

/* Module Imports */
import { client } from "../modules/client";

/* Component Interfaces */
interface Props {
  links: any[];
  cats: any[];
  categorizedLinks: any[];
}

/* Component */
const Links: React.FC<Props> = ({ links, cats, categorizedLinks }) => {
  console.log(links);
  console.log(cats);
  console.log(categorizedLinks);
  /* State Variables */
  //Menu State
  const [showMenu, setShowMenu] = useState(false);
  /* End State Variables */

  /* Render Variables */
  /* End Render Variables */

  /* Functions */
  //Logic to render links by category

  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className="Links imagePage">
      {/* Header Start */}
      <header>
        <Navbar setter={setShowMenu} showMenu={showMenu} />
      </header>
      {/* Header End */}
      {/* Content Start */}
      <div className="mainContent">
        {showMenu ? <MobileMenu /> : <LinkShowcase items={categorizedLinks} />}
      </div>
      {/* Content End */}
      {/* Footer Start */}
      {/* <Footer /> */}
      {/* Footer End */}
    </div>
  );
};

export async function getStaticProps() {
  const links = await client.fetch(groq`
    *[_type == "link"]{
      name, url,  image, category->{name}
    }
  `);

  const cats = await client.fetch(groq`*[_type == "linkCategory"]{
    name, description
  }`);

  const categorizedLinks = cats.map((cat: any) => {
    return {
      name: cat.name,
      links: links.filter((link: any) => {
        return link.category.name === cat.name;
      }),
    };
  });

  return {
    props: {
      links,
      cats,
      categorizedLinks,
    },
    revalidate: 10,
  };
}

/* Export Statement */
export default Links;
