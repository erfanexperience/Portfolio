import React from "react";
import styles from "./ContactMobile.module.css";

import bgMobile from "./Assets/mainBgMobileContact.webp";
import logoBehance from "./Assets/logoBehance.png";
import logoDribbble from "./Assets/logoDribbble.png";
import logoGitHub from "./Assets/logoGitHub.png";
import logoLinkedin from "./Assets/logoLinkedin.png";
import logoMail from "./Assets/logoMail.png";

const ContactMobile = () => {
  return (
    <div className={styles.contactMobileContainer}>
      <div className={styles.textContent}>
        <h1 className={styles.contactMobileTitle}>
          Let's <span className={styles.biggerText}>Connect!</span>
        </h1>
        <h3 className={styles.contactMobileSubtitle}>
          I would love to hear from you
        </h3>
      </div>
      <div className={styles.socialIcons}>
        <a
          href="https://github.com/erfanexperience"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoGitHub} alt="GitHub" className={styles.socialIcon} />
        </a>
        <a
          href="https://www.behance.net/erfanexperience"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoBehance} alt="Behance" className={styles.socialIcon} />
        </a>
        <a
          href="https://dribbble.com/erfanexperience"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={logoDribbble}
            alt="Dribbble"
            className={styles.socialIcon}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/erfanfarahani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={logoLinkedin}
            alt="LinkedIn"
            className={styles.socialIcon}
          />
        </a>
        <a href="mailto:erfan.experience@example.com">
          <img src={logoMail} alt="Email" className={styles.socialIcon} />
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img src={bgMobile} alt="Background" className={styles.mainImage} />
      </div>
    </div>
  );
};

export default ContactMobile;
