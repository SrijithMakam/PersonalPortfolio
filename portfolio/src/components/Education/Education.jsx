import React from "react";
import styles from "./Education.module.css";
import neu from "../../../assets/about/neu.png";
import sit from "../../../assets/about/sit.png";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.education}>
        <div className={styles.educationInfo}>
          <div className={styles.flexContainer}>
            <div>
              <img src={neu} alt="neu logo" className={styles.logo} />
            </div>
            <div>
              <p>
                <strong className={styles.degree}>
                  Master of Science in Computer Software Engineering
                </strong>
                <br />
                <span className={styles.university}>Northeastern University, Boston, MA</span>
              </p>
            </div>
          </div>
          <span className={styles.gpa}>
            <br />
            Expected: Dec 2025
            <br />
            GPA: 3.9
          </span>
          <p className={styles.coursework}>
            <strong>Coursework:</strong> 
            <br />Object Oriented Design, Design Patterns, Data structures and Algorithms, Web Design and UI/UX,
            Data Management and Database Design, <br />Network structures and Cloud Computing, Agentic AI
          </p>
        </div>
      </div>
      <div className={styles.education}>
        <div className={styles.educationInfo}>
          <div className={styles.flexContainer}>
            <div>
              <img src={sit} alt="sit logo" className={styles.logo} />
            </div>
            <div>
              <p>
                <strong className={styles.degree}>
                  Bachelor of Engineering in Mechanical Engineering
                </strong>
                <br />
                <span className={styles.university}>Siddaganga Institute of Technology, Tumakuru, KA, India</span>
              </p>
            </div>
          </div>
          <span className={styles.gpa}>
            <br />
            Graduated: Aug 2020
            <br />
            GPA: 3.62
          </span>
          <p className={styles.coursework}>
            <strong>Relavent Coursework:</strong> 
            <br />Project Management, Object Oriented Programming, Computer Aided Design and analysis
          </p>
        </div>
      </div>
    </section>
  );
};
