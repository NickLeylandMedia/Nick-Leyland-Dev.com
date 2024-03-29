/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ProjectInfo.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

/* Module Imports */
import { components } from "../../../modules/portableText";
import { urlFor } from "../../../modules/urlFor";

/* Component Interfaces */
interface Props {
  title: string;
  summary: string;
  description: any;
  githubLink: string;
  lastUpdated: string;
  tools: any[];
  slug: string;
  publishDate: string;
  url: string;
  image: string;
}

/* Component */
const ProjectInfo: React.FC<Props> = ({
  title,
  summary,
  description,
  githubLink,
  lastUpdated,
  tools,
  slug,
  publishDate,
  url,
  image,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedTools: any = "No tools to display.";
  /* End Render Variables */

  /* Functions */
  //Logic to render tools
  if (tools.length > 0) {
    renderedTools = tools.map((tool) => {
      return (
        <div key={Math.random()} className={styles.toolTile}>
          <Image
            width={1280}
            height={720}
            src={urlFor(tool.image).url()}
            alt=""
          />
        </div>
      );
    });
  }

  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={`${styles.ProjectInfo} darkGrayOverlay`}>
      <h1 className="primary center light">{title}</h1>
      <div className={styles.projectImageBacking}>
        <Image
          height={720}
          width={1280}
          className={styles.projectImage}
          src={image}
          alt=""
        />
      </div>
      <div className={styles.projectActionBar}>
        <Link href={githubLink ? githubLink : ""} className={styles.githubLink}>
          GITHUB
        </Link>
        <Link href={url ? url : ""} className={styles.visitLink}>
          VIEW LIVE
        </Link>
      </div>
      <div className={styles.infoContainer}>
        <h2 className="primary light">Summary</h2>
        <p>{summary ? summary : "No summary to display."}</p>
        <h2 className="primary light">Tools</h2>
        <div className={styles.toolGrid}>{renderedTools}</div>
        <h2 className="primary light">Description</h2>
        {description ? (
          <PortableText value={description} components={components} />
        ) : (
          <p>No description to display.</p>
        )}
      </div>
    </div>
  );
};

/* Export Statement */
export default ProjectInfo;
