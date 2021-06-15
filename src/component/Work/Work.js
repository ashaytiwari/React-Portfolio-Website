import React, { useState } from "react";
import styles from "./Work.module.css";
import { Tab, Tabs, createMuiTheme, ThemeProvider } from "@material-ui/core";
import ProjectJson from "../../assets/Data/project.Data";
import ProjectViewer from "../CommonComponents/ProjectViewer/ProjectViewer";
import { Fade } from "react-reveal";

/**
 * functional component for rendering tab panel view
 * @param {*} props
 */
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role={"tabpanel"} hidden={value !== index} {...other}>
      {value === index && <div>{children}</div>}
    </div>
  );
}

/**
 * Default color theme
 */
const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#e61212"
    },
    secondary: {
      main: "#e61212"
    }
  }
});

const Work = () => {
  const [value, setValue] = useState(0);

  /**
   * function to handle the tab change
   */
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.workSection} id={"work"}>
      <Fade bottom>
        <div className={styles.header}>
          <h4 className={styles.aboutHeading}>Work</h4>
        </div>
      </Fade>
      <div className={styles.body}>
        {/* Tab Header Starts here */}
        <Fade bottom>
          <ThemeProvider theme={defaultMaterialTheme}>
            <Tabs
              value={value}
              onChange={handleChange}
              className={styles.tabHeader}
            >
              <Tab label={"HTML/CSS"} className={styles.tab} />
              <Tab label={"Javascript"} className={styles.tab} />
              <Tab label={"React"} className={styles.tab} />
              <Tab label={"All"} className={styles.tab} />
            </Tabs>
          </ThemeProvider>
        </Fade>
        {/* Tab Header ends here */}

        {Object.keys(ProjectJson).map((type, index) => (
          <TabPanel value={value} index={index}>
            <ProjectViewer data={ProjectJson[type]} />
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

export default Work;
