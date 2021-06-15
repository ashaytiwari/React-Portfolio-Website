import React from "react";
import styles from "./ProgressBar.module.css";
import { Grid } from "@material-ui/core";

const ProgressBarComponent = ({ data }) => {
  return (
    <Grid container className={styles.progressWrapper}>
      <Grid
        item
        xs={3}
        sm={3}
        md={3}
        lg={3}
        xl={3}
        className={styles.skillsName}
      >
        {data.name || ""}
      </Grid>
      <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
        <div
          className={styles.progress}
          style={{ width: data.percentage }}
        ></div>
      </Grid>
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        xl={1}
        className={styles.percentage}
      >
        {data.percentage || ""}
      </Grid>
    </Grid>
  );
};

export default ProgressBarComponent;
