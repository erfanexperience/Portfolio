import React from "react";
import styles from "./About.module.css";
import aboutVideo from "./Assets/aboutMedia.webm";

const About = () => {
  return (
    <div className={styles.AboutContainer}>
      <h1 className={styles.heading}>Who I am?</h1>

      <div className={styles.videoContainer}>
        <video className={styles.aboutVideo} autoPlay loop muted playsInline>
          <source src={aboutVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.bioContainer}>
        <p>
          Today, I'm a UX design and Coding enthusiast. But that's not the whole
          story…
        </p>
        <p>
          Since high school, I've tried many things to find what truly makes me
          happy. My high school story was about a boy destined to become a
          mechanical engineer. But just when I could have started engineering at
          the top universities in my country, I swam against the tide and
          studied tourism management instead.
        </p>
        <p>
          After finishing my bachelor's degree, everyone thought my path to
          progress, which was supposed to go through engineering, was now
          blocked by tourism. Yet, I received the top scholarship from the
          European Union for a master's degree at the University of Glasgow in
          the UK and Lund University in Sweden, starting my journey to Europe.
        </p>
        <p>
          During my master's studies, I advanced and learned in both academic
          and work environments in tourism and digital marketing across
          countries like the UK, Malta, Sweden, and Denmark. Everything was
          better than before, but one thing was problematic: I kept checking the
          time for the next break when working on my laptop.
        </p>
        <p>
          Then, through a friend, I discovered the world of UX, and what a
          delightful discovery it was! Here, I don't care what time it is. I
          spend hours on design, coding with html and css, learning, user
          research and brainstorming ideas. It all feels like a break from the
          outside world.
        </p>
        <p>
          I'm here to learn more and create better experiences with design and
          code. It could be the smile of an elderly man who, through a
          well-designed app, reaches his main goal of ordering his medications
          or a creative teenager who finds an app to make and order their own
          special ice cream creatively. And I think that's the ultimate goal of
          design.
        </p>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.experiences}>
          <h2>Experiences</h2>
          <ul>
            <li>
              <strong>Freelance - London, UK</strong> - UX/UI Designer,
              Developer
            </li>
            <li>
              <strong>New Forest Business Partnership - Lymington, UK</strong> -
              Design Intern
            </li>
            <li>
              <strong>Skipit CC - Copenhagen, DE</strong> - Marketing Assistant
            </li>
          </ul>
        </div>
        <div className={styles.education}>
          <h2>Education</h2>
          <ul>
            <li>
              <strong>University of Glasgow, Lund University</strong> - Joint
              M.Sc Degree
            </li>
            <li>
              <strong>Google LLC</strong> - UX Design Specialization Certificate
            </li>
            <li>
              <strong>Inverse School</strong> - UI/UX Design and User Research
              Training
            </li>
            <li>
              <strong>W3Schools</strong> - HTML and CSS, JS and React Course
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
