import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ item }) => {
  return (
    <div className={styles.container}>
      <img src={item.src} alt={item.name} className={styles.image} />
      <div className={styles.overlay}>
        <p className={styles.text}>{item.name}</p>
        <a className={styles.visitBtn} href={item.url}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
