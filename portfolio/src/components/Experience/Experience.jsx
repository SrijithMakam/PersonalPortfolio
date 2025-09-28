import React from "react";

import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: ["Java", "C#", "Python", "SQL", "JavaScript", "TypeScript"]
    },
    {
      category: "Frontend",
      skills: ["ReactJS", "Redux", "AngularJS", "HTML5", "CSS3", "SASS", "Kendo UI", "Material UI", "Figma"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Django", "REST APIs", ".Net Core", "MVC"]
    },
    {
      category: "Databases",
      skills: ["Oracle Database", "MS SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Azure DevOps", "GitHub Actions", "Terraform", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Dynatrace"]
    },
    {
      category: "Tools and Platforms",
      skills: ["GitHub", "Git", "Postman", "Swagger", "MS Test", "Cypress", "PowerShell", "Linux/Unix", "VS Code", "GitHub Copilot"]
    }
  ];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Technical Skills & Experience</h2>
      <div className={styles.content}>
        <div className={styles.skillsSection}>
          <div className={styles.skillsTable}>
            {skillsData.map((skillCategory, id) => (
              <div key={id} className={styles.skillRow}>
                <div className={styles.skillCategory}>
                  {skillCategory.category}
                </div>
                <div className={styles.skillList}>
                  {skillCategory.skills.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
