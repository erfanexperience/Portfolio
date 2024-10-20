import React from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = ({ scale }) => {
  return (
    <div
      className={styles.loadingScreen}
      style={{ transform: `scale(${scale})` }}
    >
      <div className={styles.loadingDots}>
        {[...Array(5)].map((_, index) => (
          <div key={index} className={styles.dot}></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
