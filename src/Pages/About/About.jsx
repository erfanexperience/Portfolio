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
          Today, I'm a UX design and coding enthusiast, but my journey with
          technology and creativity started long ago...
        </p>
        <p>
          Since childhood, I've been fascinated by computers and design. I spent
          countless hours exploring software, tinkering with code, and creating
          digital art. This passion grew stronger through high school, where I
          balanced my academic studies with personal projects in web design and
          basic programming.
        </p>
        <p>
          I was thrilled to receive a prestigious scholarship from the European
          Union for a joint master's degree program at the University of Glasgow
          in the UK and Lund University in Sweden. This opportunity not only
          broadened my horizons but also allowed me to explore new fields of
          study in Europe.
        </p>
        <p>
          During my master's studies, I continued to nurture my passion for
          technology alongside my formal coursework. I dedicated my free time to
          online courses in UX design and programming, working on personal
          projects that allowed me to apply these skills. The diverse and
          challenging academic environment across the UK and Sweden inspired me
          to push my boundaries and explore the intersection of my studies with
          my tech interests.
        </p>
        <p>
          What truly sets my heart racing is the perfect blend of design and
          code. I've worked with various clients and gained experience at
          prestigious companies in Denmark and the UK. I lose track of time when
          crafting user interfaces, writing efficient code, or developing
          innovative solutions. The synthesis of creativity and logic in UX
          design and development feels like a natural extension of my passions.
        </p>
        <p>
          My goal is to create digital experiences that make a real difference
          in people's lives. Whether it's designing an intuitive app that helps
          elderly users easily manage their medications or developing a platform
          that allows young creatives to bring their ideas to life, I believe in
          the power of thoughtful design and clean code to enhance human
          experiences. To me, that's the ultimate goal of being a UX designer
          and developer - crafting digital solutions that are not just
          functional, but delightful and impactful.
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
              UI Design Associate
            </li>
            <li>
              <strong>Skipit CC - Copenhagen, Denmark</strong> - Digital
              Marketing Specialist & Content Designer
            </li>
          </ul>
        </div>
        <div className={styles.education}>
          <h2>Education</h2>
          <ul>
            <li>
              <strong>University of Glasgow, Lund University</strong> - Erasmus
              Mundus Joint M.Sc Degree
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
