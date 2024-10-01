import React from "react";
import styled from "./Work.module.css";
import WorkSample from "../../Components/workSample/workSample";
import InterfaceDesignGallery from "../../Components/InterfaceDesignGallery/InterfaceDesignGallery";

import logoFigma from "./Assets/logoFigma.png";
import logoVsCode from "./Assets/logoVsCode.png";
import logoXd from "./Assets/logoXd.png";

import Smart from "./Assets/Smart.webp";
import Construction from "./Assets/Construction.gif";
import Jones from "./Assets/Jones.gif";
import Hop from "./Assets/Hop.gif";

const Work = () => {
  const galleryImages = [
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
        "Designing a biography webpage was my first time doing so. Olivia Jones was the recipient of it. I tried to use phrases and images that really show her professional journey. The goal was to give visitors a clear sense of her professional journey. Dont forget to look at the spectators with more details; they are taking pictures.",
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
        "For this project, I created a visually striking landing page for Beck Construction. The website includes Illustrator-designed graphics and Figma animations. I intended to create this website to ensure viewers understand the companys message and be motivated to take the desired action.",
    },
  ];

  return (
    <div className={styled.WorkContainer}>
      <div className={styled.WorkHeader}>
        <img
          className={styled.Logo}
          id={styled.Figma}
          src={logoFigma}
          alt="logoFigma"
        />
        <img
          className={styled.Logo}
          id={styled.VsCode}
          src={logoVsCode}
          alt="logoVsCode"
        />
        <img className={styled.Logo} id={styled.Xd} src={logoXd} alt="logoXd" />
        <h1>Bringing Ideas to Life</h1>
        <h3>
          Explore a selection of projects that highlight my expertise. <br />
          They range from user experience design to programming and development.
        </h3>
      </div>

      <WorkSample />

      <div className={styled.interfaceDesignContainer}>
        <h2>Interface Design Gallary</h2>
        <h3>
          Here are some UI design samples I've created over the past few months
          as part of my journey to learn more about this world. The main tools I
          used for these projects were Sketch, Figma, Adobe XD, with assistance
          from Photoshop and Adobe Illustrator for graphic design.
        </h3>
        <InterfaceDesignGallery images={galleryImages} />
      </div>
    </div>
  );
};

export default Work;
