import React from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";

const ProjectViewer = ({ data }) => {
  return (
    <Grid container>
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <ProjectCard item={item} />
        </Grid>
      ))}
      {console.log(data)}
    </Grid>
  );
};

export default ProjectViewer;
