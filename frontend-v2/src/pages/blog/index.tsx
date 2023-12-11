/* Library Imports */
//Groq
import groq from "groq";
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import Navbar from "@/components/navbar/Navbar";
import Pagination from "@/components/pagination/Pagination";
import PostGrid from "@/components/blog/postGrid/PostGrid";

/* Module Imports */
//Paginate
import { paginate } from "../../modules/numtools";
//Sanity Client
import { client } from "../../modules/client";

/* Component Interfaces */
interface Props {
  cats: any[];
  posts: any[];
}

/* Component */
const Blog: React.FC<Props> = ({ posts, cats }) => {
  /* State Variables */
  const [totalPages, setTotalPages] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(1);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(3);
  //Menu State
  const [showMenu, setShowMenu] = useState(false);
  /* End State Variables */

  /* Render Variables */
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  //Effect to set total pages
  useEffect(() => {
    setTotalPages(paginate(4, posts.length));
  }, [posts]);

  //Effect to set start and end index
  useEffect(() => {
    setStartIndex((activePage - 1) * 4);
    setEndIndex(activePage * 4 - 1);
  }, [activePage]);
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className="Blog imagePage">
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
          <PostGrid
            posts={
              totalPages > 1 ? posts.slice(startIndex, endIndex + 1) : posts
            }
            totalPages={totalPages}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        )}
      </div>
      {/* Content End */}
      {/* Footer Start */}
      {/* <Footer /> */}
      {/* Footer End */}
    </div>
  );
};

/* Server-Side Rendering Logic */
export async function getStaticProps() {
  //Fetch Post Categories
  const cats = await client.fetch(groq`
  *[_type == "postCategory"][]{
    name
  }`);

  //Fetch Blog Posts
  const posts = await client.fetch(groq`
  *[_type == "post"][]{
    title, slug, author->{name, image}, mainImage, mainImageAlt, categories[]->{name}, publishedAt, galleryLink, videoLink, body, tags[]->{name}, summary
  }`);

  return {
    props: {
      cats,
      posts,
    },
    revalidate: 10,
  };
}

/* Export Statement */
export default Blog;
