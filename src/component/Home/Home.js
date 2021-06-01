import React from "react";
import HomeImage from "../../assets/Images/image2.jpg";
import styles from "./Home.module.css";
import Button from "../../component/UI/Button/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Home = () => {
  return (
    <div id={"home"} className={`${styles.container}`}>
      <img
        src={HomeImage}
        alt={"home"}
        className={`${styles.homeImage} img-fluid`}
      />
      <div className={styles.homeContent}>
        <p className={styles.introText}>
          Hello, I'm <span className={styles.higlightName}>Ashay Tiwari</span>
        </p>
        <p className={styles.statusText}>I'm a Frontend Developer</p>
        <p className={styles.loveText}>I love to build things for the web</p>
        <Button className={styles.resumeBtn}>
          View my resume <ArrowRightAltIcon className={styles.icon} />
        </Button>
      </div>
    </div>
  );
};

export default Home;
