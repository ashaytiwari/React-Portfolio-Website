import React from "react";
import styles from "./ProjectCard.module.css";
import Button from "../Button/Button";

const ProjectCard = ({ item }) => {
  return (
    <div className={styles.column}>
      <div className={styles.card}>
        <img src={item.src} alt={item.name} className={styles.image} />
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>{item.name}</h2>
            <p className={styles.title}>{item.desc}</p>
          </div>
          <p>
            <Button
              className={styles.button}
              onClick={() => window.open(item.url)}
            >
              Learn More
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
