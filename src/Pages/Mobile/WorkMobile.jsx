import React, { useState, useEffect } from "react";
import styles from "./WorkMobile.module.css";
import workSamplesData from "../../Components/workSample/Data.json";

import Smart from "../../Pages/Work/Assets/Smart.webp";
import Construction from "../../Pages/Work/Assets/Construction.gif";
import Jones from "../../Pages/Work/Assets/Jones.gif";
import Hop from "../../Pages/Work/Assets/Hop.gif";

const WorkMobile = () => {
  const [workSamples, setWorkSamples] = useState([]);
  const [activeGalleryImage, setActiveGalleryImage] = useState(null);

  useEffect(() => {
    setWorkSamples(workSamplesData);
  }, []);

  const interfaceDesigns = [
    {
      id: "Hop",
      src: Hop,
      alt: "MediaHop",
      title: "Hop",
      description:
        "Designing HOP was my first experience creating a ride-hailing app. After conducting a small user research study for this concept, I realized that delivery requests via scooters through applications like these are both possible and in demand, so l included this idea in my design.",
    },
    {
      id: "Jones",
      src: Jones,
      alt: "MediaJones",
      title: "Olivia Jones",
      description:
        "Designing a biography webpage was my first time doing so. Olivia Jones was the recipient of it. I tried to use phrases and images that really show her professional journey. The goal was to give visitors a clear sense of her professional journey. Don't forget to look at the spectators with more details; they are taking pictures.",
    },
    {
      id: "Smart",
      src: Smart,
      alt: "MediaSmart",
      title: "Home Maestro",
      description:
        "Designing Home Maestro was my attempt to build a complete application in a new morphism style. Here, I developed my iconography skills and tried to use them in my design. Also, with a quick benchmarking study, I found some holes in the market so that I could design not only a comparable but also a better app.",
    },
    {
      id: "Construction",
      src: Construction,
      alt: "MediaConstruction",
      title: "Beck Construction",
      description:
        "For this project, I created a visually striking landing page for Beck Construction. The website includes Illustrator-designed graphics and Figma animations. I intended to create this website to ensure viewers understand the company's message and be motivated to take the desired action.",
    },
  ];

  return (
    <div className={styles.workMobileContainer}>
      <div className={styles.workHeader}>
        <h1 className={styles.workTitle}>Bringing Ideas to Life</h1>
        <h3 className={styles.workSubtitle}>
          Explore a selection of projects that highlight my expertise. They
          range from user experience design to programming and development.
        </h3>
      </div>

      <div className={styles.workSamplesContainer}>
        {workSamples.map((sample) => (
          <div key={sample.Id} className={styles.workSampleItem}>
            <img
              src={sample.Media}
              alt={sample.Header}
              className={styles.workSampleImage}
            />
            <h2 className={styles.workSampleTitle}>{sample.Header}</h2>
            <p className={styles.workSampleDescription}>{sample.Description}</p>
            <div className={styles.workSampleButtons}>
              <a
                href={sample.pHref}
                className={styles.buttonPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sample.BtnPrimary}
              </a>
              <a
                href={sample.sHref}
                className={styles.buttonSecondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sample.BtnSecondary}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.interfaceDesignContainer}>
        <h2 className={styles.sectionTitle}>Interface Design Gallery</h2>
        <p className={styles.sectionDescription}>
          Here are some UI design samples I've created over the past few months
          as part of my journey to learn more about this world. The main tools I
          used for these projects were Sketch, Figma, Adobe XD, with assistance
          from Photoshop and Adobe Illustrator for graphic design.
        </p>
        <div className={styles.interSamplesContainer}>
          {interfaceDesigns.map((design) => (
            <div key={design.id} className={styles.workSampleItem}>
              <img
                src={design.src}
                alt={design.alt}
                className={styles.interSampleImage}
              />
              <h2 className={styles.workSampleTitle}>{design.title}</h2>
              <p className={styles.workSampleDescription}>
                {design.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkMobile;
