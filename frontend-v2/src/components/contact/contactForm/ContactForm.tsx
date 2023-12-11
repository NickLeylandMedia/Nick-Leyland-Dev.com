/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ContactForm.module.scss";

/* Image Imports */
import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

/* Component Imports */
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {}

/* Component */
const ContactForm: React.FC<Props> = () => {
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
    <div className={`${styles.ContactForm} darkGrayOverlay`}>
      <div className={styles.contactTitleBox}>
        <h1 className="primary">Wanna Work Together?</h1>
        <h2 className="secondary">Here&apos;s what I do!</h2>
      </div>
      <div className={styles.contactServiceBox}>
        <div className={styles.contactService}>
          <FaReact className={styles.contactServiceIcon} />

          <h3 className="primary">Frontend</h3>
          <br />
          <h3 className="primary"> Development</h3>
          {/* <p>
            I build modern, responsive, and performant websites using the latest
            technologies.
          </p> */}
        </div>
        <div className={styles.contactService}>
          <FaServer className={styles.contactServiceIcon} />
          <h3 className="primary">Backend</h3>
          <br />
          <h3 className="primary">Development</h3>
          {/* <p>
            I build scalable and secure backend systems using the latest
            technologies.
          </p> */}
        </div>
        <div className={styles.contactService}>
          <MdAdminPanelSettings className={styles.contactServiceIcon} />
          <h3 className="primary">Web</h3>
          <br />
          <h3 className="primary">Administration</h3>
          {/* <p>
            I build scalable and secure backend systems using the latest
            technologies.
          </p> */}
        </div>
      </div>
      <div className={styles.contactFormBox}>
        <h2 className="primary">Let&apos;s Talk!</h2>
        <div className={styles.contactFormInput}>
          <label className="secondary" htmlFor="Name">
            Name
          </label>
          <input type="text" placeholder="Click Here" />
        </div>
        <div className={styles.contactFormInput}>
          <label className="secondary" htmlFor="Email">
            Email
          </label>
          <input type="text" placeholder="Click Here" />
        </div>
        <div className={styles.contactFormInput}>
          <label className="secondary" htmlFor="Phone">
            Phone Number
          </label>
          <input type="text" placeholder="Click Here" />
        </div>
        <div className={styles.contactFormInput}>
          <label className="secondary" htmlFor="Subject">
            Subject
          </label>
          <input type="text" placeholder="Click Here" />
        </div>
        <div className={styles.contactFormInput}>
          <label className="secondary" htmlFor="Message">
            Message
          </label>
          <textarea placeholder="Click Here" rows={15} />
        </div>
        <div className={styles.contactSubmitBox}>
          <button className={styles.contactSubmit}>SEND</button>
        </div>
      </div>
    </div>
  );
};

/* Export Statement */
export default ContactForm;
