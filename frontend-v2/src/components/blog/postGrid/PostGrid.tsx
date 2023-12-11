/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./PostGrid.module.scss";

/* Image Imports */

/* Component Imports */
import Pagination from "@/components/pagination/Pagination";
import PostCard from "../postCard/PostCard";

/* Module Imports */
import { urlFor } from "@/modules/urlFor";

/* Component Interfaces */
interface Props {
  posts: any[];
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

/* Component */
const PostGrid: React.FC<Props> = ({
  posts,
  totalPages,
  activePage,
  setActivePage,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedPosts: any = "No Posts Found";
  /* End Render Variables */

  /* Functions */
  //Logic to render posts
  if (posts.length > 0) {
    renderedPosts = posts.map((post, index) => {
      return (
        <PostCard
          key={index}
          title={post.title}
          summary={post.summary}
          date={post.publishedAt}
          slug={post.slug.current}
          image={urlFor(post.mainImage).url()}
          tags={post.tags}
          categories={post.categories}
        />
      );
    });
  }
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={`${styles.PostGrid} darkGrayOverlay`}>
      <h1 className="primary text-3xl">Blog</h1>
      <div className={styles.gridContainer}>{renderedPosts}</div>
      {totalPages > 1 ? (
        <Pagination
          totalPages={totalPages}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      ) : null}
    </div>
  );
};

/* Export Statement */
export default PostGrid;
