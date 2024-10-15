import React from "react";
import styled from "./Home.module.css";

import logoErfanUp from "./Assets/logoErfanUp.png";
import logoErfanDown from "./Assets/logoErfanDown.png";

import logoBehanceUp from "./Assets/logoBehanceUp.png";
import logoBehanceDown from "./Assets/logoBehanceDown.png";

import logoDribbbleUp from "./Assets/logoDribbbleUp.png";
import logoDribbbleDown from "./Assets/logoDribbbleDown.png";

import logoLinkedinUp from "./Assets/logoLinkedinUp.png";
import logoLinkedinDown from "./Assets/logoLinkedinDown.png";

import logoGitHubUp from "./Assets/logoGitHubUp.png";
import logoGitHubDown from "./Assets/logoGitHubDown.png";

const Home = () => {
  return (
    <div className={styled.HomeContainer}>
      <h1>Design to Feel Better</h1>
      <h3>
        Welcome to my creative universe!
        <br></br>I'm Erfan - designer, coder, and chef, cooking up happiness in
        everything I do.
      </h3>

      <div className={styled.logoErfan}>
        <img src={logoErfanUp} alt="" />
        <img src={logoErfanDown} alt="" />
      </div>

      <div className={styled.logoBehance}>
        <img src={logoBehanceUp} alt="" />
        <a href="https://www.behance.net/erfanexperience" target="_blank">
          <img src={logoBehanceDown} alt="" />
        </a>
      </div>

      <div className={styled.logoDribbble}>
        <img src={logoDribbbleUp} alt="" />
        <a href="https://dribbble.com/erfanexperience" target="_blank">
          <img src={logoDribbbleDown} alt="" />
        </a>
      </div>

      <div className={styled.logoLinkedin}>
        <img src={logoLinkedinUp} alt="" />
        <a href="https://www.linkedin.com/in/erfanfarahani/" target="_blank">
          <img src={logoLinkedinDown} alt="" />
        </a>
      </div>

      <div className={styled.logoMail}>
        <img src={logoGitHubUp} alt="" />
        <a href="https://github.com/erfanexperience" target="_blank">
          <img src={logoGitHubDown} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Home;
