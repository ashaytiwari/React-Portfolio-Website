import React from "react";
import styles from "./Contact.module.css";
import { Fade } from "react-reveal";
import Band from "../../assets/Images/band.png";
import { Grid } from "@material-ui/core";
import ContactDetails from "../../assets/Data/contactDetails.Data";
import InputField from "../UI/InputField/InputField";

const Contact = () => {
  return (
    <div id={"contact"} className={styles.contactSection}>
      <Fade bottom>
        <div className={styles.header}>
          <h4 className={styles.aboutHeading}>Contact</h4>
          <p className={styles.greetMsg}>
            The Journey is the reward, Let's take a walk.
          </p>
          {/* <p className={styles.msg}>
            Although I'm not currently looking for any new opportunities,
          </p>
          <p className={styles.msg}>
            my inbox is always open. Whether you have a question or
          </p>
          <p className={styles.msg}>
            {" "}
            just want to say hi, I'll try my best to get back to you!
          </p> */}
        </div>
      </Fade>
      <Fade bottom>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={styles.header}
          >
            <img src={Band} className={styles.image} alt={"Band"} />
          </Grid>
        </Grid>
      </Fade>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className={`${styles.contactDetails}`}
        >
          {ContactDetails &&
            ContactDetails.map((item) => (
              <div className={styles.row}>
                {item.icon}
                <p className={styles.content}>{item.text}</p>
              </div>
            ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className={styles.contactForm}
        >
          <InputField id={"name"} name={"name"} label={"Name"} />
          <InputField id={"name"} name={"name"} label={"Name"} />
          <InputField id={"name"} name={"name"} label={"Name"} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
