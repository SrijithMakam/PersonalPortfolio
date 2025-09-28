import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
  isFeatured = false
}) => {
  const containerClass = isFeatured 
    ? `${styles.container} ${styles.featured}` 
    : styles.container;
    
  return (
    <article className={containerClass}>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        {isFeatured && <div className={styles.featuredBadge}>Featured</div>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
            <span>Demo</span>
          </a>
          <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
            <span>View</span>
          </a>
        </div>
      </div>
    </article>
  );
};
