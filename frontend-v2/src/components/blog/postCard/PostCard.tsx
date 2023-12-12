/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./PostCard.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {
  title: string;
  summary: string;
  date: string;
  slug: any;
  image: string;
  tags: any[];
  categories: any[];
}

/* Component */
const PostCard: React.FC<Props> = ({
  title,
  summary,
  date,
  slug,
  image,
  tags,
  categories,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  const renderedDate = new Date(date).toLocaleDateString();
  let renderedCatTags = null;
  /* End Render Variables */

  /* Functions */
  //Logic to render categories and tags
  const renderArr: any = [];
  if (categories && categories.length > 0) {
    categories.forEach((category, index) => {
      renderArr.push({ type: "category", name: category.name });
    });
  }
  if (tags && tags.length > 0) {
    tags.forEach((tag, index) => {
      renderArr.push({ type: "tag", name: tag.name });
    });
  }
  renderedCatTags = renderArr.map((item: any) => {
    if (item.type === "category") {
      return (
        <p key={Math.random()} className={styles.catPill}>
          {item.name}
        </p>
      );
    }
    if (item.type === "tag") {
      return (
        <p key={Math.random()} className={styles.tagPill}>
          {item.name}
        </p>
      );
    }
  });

  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={`${styles.PostCard} whiteCard`}>
      <h2 className="primary">{title}</h2>
      <p className="">{renderedDate}</p>
      <Image
        height={720}
        width={1280}
        src={image}
        alt=""
        className={styles.postImage}
      />
      <div className={styles.catTagContainer}>{renderedCatTags}</div>
      <p>{summary}</p>
      <Link className={styles.postCardLink} href={`/blog/${slug}`}>
        READ
      </Link>
    </div>
  );
};

/* Export Statement */
export default PostCard;
