/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./Pagination.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  totalPages: number;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

/* Component */
const Pagination: React.FC<Props> = ({
  totalPages,
  activePage,
  setActivePage,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedPages: any = null;
  const pageArr = [];
  /* End Render Variables */

  /* Functions */
  //Logic to render pages

  if (totalPages > 1) {
    for (let i = 1; i <= totalPages; i++) {
      pageArr.push({
        page: i,
      });
    }
    renderedPages = pageArr.map((page) => {
      if (page.page === activePage) {
        return (
          <button className={styles.activePage} key={Math.random()}>
            {page.page}
          </button>
        );
      }
      if (page.page !== activePage) {
        return (
          <button
            className={styles.inactivePage}
            key={Math.random()}
            onClick={() => setActivePage(page.page)}
          >
            {page.page}
          </button>
        );
      }
    });
  }
  /* End Functions */

  /* Effects */
  //effect to generate array of pages
  /* End Effects */

  /* Component Return Statement */
  return <div className={`${styles.Pagination}`}>{renderedPages}</div>;
};

/* Export Statement */
export default Pagination;
