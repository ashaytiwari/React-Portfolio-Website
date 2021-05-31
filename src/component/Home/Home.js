import React from "react";
import HomeImage from "../../assets/Images/image2.jpg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div id={"home"} className={`container ${styles.container}`}>
      <img
        src={HomeImage}
        alt={"home"}
        className={`${styles.homeImage} img-fluid img-thumbnail`}
      />
      <div className={styles.homeContent}>
        <div>
          <h2>
            Hello, I'm <span className={styles.higlightName}>Ashay Tiwari</span>
          </h2>
          <h4>I'm a Frontend Developer</h4>
          <p>I love to build things for the web</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
