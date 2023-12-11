/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ProjectCard.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {
  name: string;
  description: string;
  githubLink: string;
  featured: boolean;
  image: string;
  slug: string;
  tools: any[];
  url: string;
}

/* Component */
const ProjectCard: React.FC<Props> = ({
  name,
  description,
  githubLink,
  featured,
  image,
  slug,
  tools,
  url,
}) => {
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
    <div className={`${styles.ProjectCard} whiteCard`}>
      <div className={styles.contentBox}>
        <h2 className="primary">{name}</h2>
        <Image
          className={styles.projectCardImage}
          src={image}
          alt=""
          height={720}
          width={1280}
        />
        <div className={styles.linkContainer}></div>
        <p>{description ? description : "No description available."}</p>
        <Link href={`/projects/${slug}`} className={styles.projectCardLink}>
          VIEW
        </Link>
        <div className={styles.projectLinkContainer}></div>
      </div>
    </div>
  );
};

/* Export Statement */
export default ProjectCard;
