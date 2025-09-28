import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Srijith D Makam</h1>
        <p className={styles.description}>
        Software Engineer with 3+ yrs experience building scalable distributed systems and high-performance applications.
        Expert in full-stack development, cloud architecture, and DevOps automation with experience optimizing 
        systems serving millions of users.Currently pursuing MS in Software Engineering at Northeastern University.
        </p>
        <a href="https://drive.google.com/file/d/1bJvUxugzWfJv20QbHlgjPzrgG2ObetG8/view" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/IMG_4401.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
