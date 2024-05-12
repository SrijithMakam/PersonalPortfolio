import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutimage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud and DevOps Engineer</h3>
              <p>
                Proficient in Azure with experience in managing end-to-end cloud infrastructure and automation
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>MERN Stack Developer</h3>
              <p>
                Built robust web applications, with expertise in MongoDB, Express.js, React.js, and Node.js, adept at implementing scalable and efficient solutions to meet project requirements.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
              Skilled UI/UX designer proficient in Figma, creating visually appealing and user-friendly digital experiences through innovative design solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
