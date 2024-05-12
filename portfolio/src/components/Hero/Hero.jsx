import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Srijith Makam</h1>
        <p className={styles.description}>
        Dedicated Software Engineering Systems graduate student with nearly 3 years of hands-on experience in
the software industry. Proficient in building, configuring, and testing software products, including SaaS, coupled
with a relentless pursuit of continuous learning and excellent communication skills. Eager for dynamic
opportunities in software development, driven by a passion for technology and fortified organizational skills.
        </p>

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
