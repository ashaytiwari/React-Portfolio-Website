import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Fade } from "react-reveal";
import Band from "../../assets/Images/band.png";
import { Grid } from "@material-ui/core";
import ContactDetails from "../../assets/Data/contactDetails.Data";
import InputField from "../UI/InputField/InputField";
import TelegramIcon from "@material-ui/icons/Telegram";
import Button from "../UI/Button/Button";
import { useSnackbar } from "notistack";
import {
  NameIsRequired,
  EmailIsNotValid,
  EmailIsRequired,
  MessageIsRequierd,
  DataSuccessSubmit,
  NetworkError,
  DataErrorSubmit
} from "../../GlobalUtils/globalconstants";
import { emailValidation, resetForm } from "../../GlobalUtils/globalFunction";
import * as Emailjs from "emailjs-com";
import {
  EmailServcieId,
  EmailTemplateId,
  EmailUserId
} from "../../GlobalUtils/configFileAccessor";
import Loader from "react-loader-spinner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const submitHandler = () => {
    if (!name) {
      enqueueSnackbar(NameIsRequired, {
        variant: "error"
      });
    } else if (!email) {
      enqueueSnackbar(EmailIsRequired, {
        variant: "error"
      });
    } else if (!message) {
      enqueueSnackbar(MessageIsRequierd, {
        variant: "error"
      });
    } else if (emailValidation(email)) {
      enqueueSnackbar(EmailIsNotValid, {
        variant: "error"
      });
    } else {
      setIsLoading(true);
      let params = {
        to_name: name,
        from_name: "Ashay Tiwari",
        message: message,
        reply_to: email
      };
      Emailjs.send(EmailServcieId, EmailTemplateId, params, EmailUserId)
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            enqueueSnackbar(DataSuccessSubmit, {
              variant: "success"
            });
            resetForm(setName, setMessage, setEmail);
            setIsLoading(false);
          } else {
            enqueueSnackbar(DataErrorSubmit, {
              variant: "error"
            });
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          enqueueSnackbar(NetworkError, {
            variant: "error"
          });
          setIsLoading(false);
        });
    }
  };

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
          <Fade bottom>
            {ContactDetails &&
              ContactDetails.map((item) => (
                <div className={styles.row}>
                  {item.icon}
                  <p className={styles.content}>{item.text}</p>
                </div>
              ))}
          </Fade>
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
          {isLoading ? (
            <div className={styles.loader}>
              <Loader
                type="MutatingDots"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
          ) : (
            <Fade bottom>
              <InputField
                id={"name"}
                name={"name"}
                label={"Name"}
                variant={"outlined"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputField
                id={"email"}
                name={"email"}
                label={"Email"}
                variant={"outlined"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                id={"message"}
                name={"message"}
                label={"Message"}
                variant={"outlined"}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                className={styles.submitBtn}
                onClick={() => submitHandler()}
              >
                Submit <TelegramIcon className={styles.submitIcon} />
              </Button>
            </Fade>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
