/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./PostDetail.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

/* Module Imports */
import { ptComponents } from "@/components/blockContent/TextComponents";

/* Component Interfaces */
interface Props {
  title: string;
  summary: string;
  date: string;
  slug: any;
  image: string;
  tags: any[];
  categories: any[];
  body: any;
}

/* Component */
const PostDetail: React.FC<Props> = ({
  title,
  image,
  date,
  categories,
  tags,
  summary,
  body,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  const renderedDate = new Date(date).toLocaleDateString();
  let renderedCategories: any = "No categories to display.";
  let renderedTags: any = "No tags to display.";
  /* End Render Variables */

  /* Functions */
  //Logic to render categories
  if (categories && categories.length > 0) {
    renderedCategories = categories.map((category) => {
      return (
        <p key={Math.random()} className={styles.postCategory}>
          {category.name}
        </p>
      );
    });
  }
  //Logic to render tags
  if (tags && tags.length > 0) {
    renderedTags = tags.map((tag) => {
      return (
        <p key={Math.random()} className={styles.postTag}>
          {tag.name}
        </p>
      );
    });
  }
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={`${styles.PostDetail} darkGrayOverlay`}>
      <div className={styles.contentContainer}>
        <h1 className="primary">{title}</h1>
        <div className={styles.postImageBacking}>
          <Image
            width={1280}
            height={720}
            className={styles.postImage}
            src={image}
            alt=""
          />
        </div>
        <div className={styles.postInfo}>
          <p className="">Published On: {renderedDate}</p>
          <p>{summary}</p>
          <div className={styles.catContainer}>
            <h2 className="primary">Categories:</h2>
            <div className={styles.flexContainer}>{renderedCategories}</div>
          </div>
          <div className={styles.tagContainer}>
            <h2 className="primary">Tags:</h2>
            <div className={styles.flexContainer}>{renderedTags}</div>
          </div>
        </div>
        <div className={styles.textContainer}>
          <PortableText value={body} components={ptComponents} />
        </div>
        <div className={styles.postEnd}>
          <h2 className="primary">Thanks for reading!</h2>
          <div className={styles.postEndActions}>
            <Link href={"/blog"} className={styles.postActionLink}>
              BLOG
            </Link>
            <Link href={"/"} className={styles.postActionLink}>
              HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Export Statement */
export default PostDetail;
