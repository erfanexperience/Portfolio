import React from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.loadingDots}>
        {[...Array(5)].map((_, index) => (
          <div key={index} className={styles.dot}></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
