import React from "react";
import styles from "./Education.module.css";
import neu from "../../../assets/about/neu.png";
import sit from "../../../assets/about/sit.png";

export const Education = () => {
  return (
    <>
      <h2 className={styles.heading} id="Education">EDUCATION</h2>
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
            Expected: April 2025
            <br />
            GPA: 3.92
          </span>
          <p className={styles.coursework}>
            <strong>Coursework:</strong> Object Oriented Design, Program Structures
            and Algorithms, Web Design and User Experience Testing, Data Management and
            Database Design, Network Structures and Cloud Computing, User Experience Design and Testing
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
            <strong>Relavent Coursework:</strong> Project Management, Object Oriented Programming, Computer Aided Design and analysis
          </p>
        </div>
      </div>
    </>
  );
};
