/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ExtrasDisp.module.scss";

/* Image Imports */

/* Component Imports */
import DevResources from "../devResources/DevResources";
import SiteBuiltWith from "../siteBuiltWith/SiteBuiltWith";

/* Module Imports */

/* Component Interfaces */
interface Props {
  builtWith: any[];
  resources: any[];
}

/* Component */
const ExtrasDisp: React.FC<Props> = ({ builtWith, resources }) => {
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
    <div className={`${styles.ExtrasDisp} darkGrayOverlay`}>
      <div className="content">
        <h1 className="primary">Extras</h1>
        <SiteBuiltWith items={builtWith} />
        <DevResources items={resources} />
      </div>
    </div>
  );
};

/* Export Statement */
export default ExtrasDisp;
