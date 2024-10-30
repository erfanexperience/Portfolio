import React from "react";
import styles from "./Contact.module.css";

import logoBehance from "./Assets/logoBehance.png";
import logoDribbble from "./Assets/logoDribbble.png";
import logoLinkedin from "./Assets/logoLinkedin.png";
import logoMail from "./Assets/logoMail.png";
import logoGitHub from "./Assets/logoGitHub.png";
import bg2 from "./Assets/bg4.webp";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contentSection}>
        <h1>Let's Connect!</h1>
        <h3>I would love to hear from you.</h3>

        <div className={styles.socialIcons}>
          <a
            href="https://github.com/erfanexperience"
            className={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoGitHub} alt="GitHub" className={styles.icon} />
          </a>
          <a
            href="https://www.behance.net/erfanexperience"
            className={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoBehance} alt="Behance" className={styles.icon} />
          </a>
          <a
            href="https://www.dribbble.com/erfanexperience"
            className={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoDribbble} alt="Dribbble" className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/erfanfarahani/"
            className={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoLinkedin} alt="LinkedIn" className={styles.icon} />
          </a>
          <a
            href="mailto:erfan.experience@example.com"
            className={styles.iconLink}
          >
            <img src={logoMail} alt="Email" className={styles.icon} />
          </a>
        </div>
      </div>

      <img src={bg2} alt="Background" className={styles.bgImage} />
    </div>
  );
};

export default Contact;
