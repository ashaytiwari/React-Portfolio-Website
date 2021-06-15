import React from "react";
import { Grid } from "@material-ui/core";
// import { Row, Col, Button } from "react-bootstrap";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import styles from "./ProjectViewer.module.css";
import { findMultipleOf3 } from "../../../GlobalUtils/globalFunction";

const ProjectViewer = ({ data }) => {
  if (data.length % 3 === 0) {
    return (
      <Grid container>
        {data.map((item) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            className={styles.section}
          >
            <ProjectCard item={item} />
          </Grid>
        ))}
      </Grid>
    );
  } else if (data.length % 3 === 1) {
    return (
      <Grid container>
        {data.slice(0, findMultipleOf3(data.length)).map((item) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            className={styles.section}
          >
            <ProjectCard item={item} />
          </Grid>
        ))}
        {data.slice(data.length - 1).map((item) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={styles.section}
          >
            <ProjectCard item={item} />
          </Grid>
        ))}
      </Grid>
    );
  } else {
    return (
      <Grid container>
        {data.slice(0, findMultipleOf3(data.length)).map((item) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            className={styles.section}
          >
            <ProjectCard item={item} />
          </Grid>
        ))}
        {data.slice(findMultipleOf3(data.length)).map((item) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className={styles.section}
          >
            <ProjectCard item={item} />
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default ProjectViewer;
