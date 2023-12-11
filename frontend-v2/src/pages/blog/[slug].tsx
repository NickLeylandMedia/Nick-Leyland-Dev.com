/* Library Imports */
//Groq
import groq from "groq";

//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import Loader from "@/components/loader/Loader";
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import Navbar from "@/components/navbar/Navbar";
import PostDetail from "@/components/blog/postDetail/PostDetail";

/* Module Imports */
//Nextjs Router
import { useRouter } from "next/router";
//Sanity Client
import { client } from "../../modules/client";
//Sanity Image URL
import { urlFor } from "../../modules/urlFor";

/* Component Interfaces */
interface Props {
  post: any;
}

/* Component */
const BlogPost: React.FC<Props> = ({ post }) => {
  /* State Variables */
  //Menu State
  const [showMenu, setShowMenu] = useState(false);
  //Router Initialization
  const router = useRouter();
  /* End State Variables */

  /* Render Variables */
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  if (router.isFallback) {
    return (
      <div className="BlogPost imagePage">
        {/* Header Start */}
        <header>
          <Navbar setter={setShowMenu} showMenu={showMenu} />
        </header>
        {/* Header End */}
        {/* Content Start */}
        <div className="mainContent">
          <Loader />
        </div>
        {/* Content End */}
        {/* Footer Start */}
        {/* <Footer /> */}
        {/* Footer End */}
      </div>
    );
  }

  return (
    <div className="BlogPost imagePage">
      {/* Header Start */}
      <header>
        <Navbar setter={setShowMenu} showMenu={showMenu} />
      </header>
      {/* Header End */}
      {/* Content Start */}
      <div className="mainContent">
        {showMenu ? (
          <MobileMenu />
        ) : (
          <PostDetail
            title={post.title}
            summary={post.summary}
            slug={post.slug.current}
            date={post.publishedAt}
            image={urlFor(post.mainImage).url()}
            tags={post.tags}
            categories={post.categories}
            body={post.body}
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
//Query Variable
const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title, summary, slug, author->{name}, mainImage, mainImageAlt, categories[]->{name}, publishedAt, galleryLink, videoLink, body, tags[]->{name}
  }`;

//Get Static Paths
export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

//Get Static Props
export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

/* Export Statement */
export default BlogPost;
