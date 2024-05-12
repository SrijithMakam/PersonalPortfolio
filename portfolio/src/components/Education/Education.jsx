import React from "react";
import styles from "./Education.module.css";

export const Education = () => {
  return (
    <>
    <h2 className={styles.heading}>EDUCATION</h2>
     <div className={styles.education}>
          <div className={styles.educationInfo}>
              <p>
                  <strong className={styles.degree}>
                      Master of Science in Computer Software Engineering
                  </strong>
                  <br />
                  <span className={styles.university}>Northeastern University, Boston, MA</span>
                  <span className={styles.gpa}>
                  <br />
                  Expected: April 2025
                  <br />
                  GPA: 3.92
                  </span>
              </p>
              <p className={styles.coursework}>
                  <strong>Coursework:</strong> Object Oriented Design, Program Structures
                  and Algorithms, Web Design and User Experience Testing, Data Management and
                  Database Design, Network Structures and Cloud Computing, User Experience Design and Testing
              </p>
          </div>
      </div>
      <div className={styles.education}>
          <div className={styles.educationInfo}>
              <p>
                  <strong className={styles.degree}>
                  Bachelor of Engineering in Mechanical Engineering
                  </strong>
                  <br />
                  <span className={styles.university}>Siddaganga Institute of Technology, Tumakuru, KA, India</span>
                  <span className={styles.gpa}>
                  <br />
                  Graduated: Aug 2020
                  <br />
                  GPA: 3.62
                  </span>
              </p>
              <p className={styles.coursework}>
                  <strong>Relavent Coursework:</strong> Project Management, Object Oriented Programming, Computer Aided Design and analysis
              </p>
          </div>
      </div>
      </>
  );
};

