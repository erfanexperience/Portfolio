import React from "react";
import styles from "./HomeMobile.module.css";

import mainBgMobile from "./Assets/mainBgMobile.webp";
import logoBehance from "./Assets/logoBehance.png";
import logoDribbble from "./Assets/logoDribbble.png";
import logoGitHub from "./Assets/logoGitHub.png";
import logoLinkedin from "./Assets/logoLinkedin.png";

const HomeMobile = () => {
  return (
    <div className={styles.homeMobileContainer}>
      <div className={styles.textContent}>
        <h1 className={styles.homeMobileTitle}>
          <span className={styles.biggerText}>Design</span> to{" "}
          <span className={styles.biggerText}>Feel Better</span>
        </h1>
        <h3 className={styles.homeMobileSubtitle}>
          Hello and welcome to my world!
          <br />
          I'm Erfan, and I love to Design, Code, and Cook — all to create a
          happier me.
        </h3>
      </div>
      <div className={styles.socialIcons}>
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
          href="https://github.com/erfanexperience"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoGitHub} alt="GitHub" className={styles.socialIcon} />
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
      </div>
      <div className={styles.imageContainer}>
        <img src={mainBgMobile} alt="Background" className={styles.mainImage} />
      </div>
    </div>
  );
};

export default HomeMobile;
