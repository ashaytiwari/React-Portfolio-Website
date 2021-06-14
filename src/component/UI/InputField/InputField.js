import React from "react";
import { TextField } from "@material-ui/core";
import styles from "./InputField.module.css";

function InputField(props) {
  return (
    <TextField
      id={props.id}
      name={props.name}
      label={props.label}
      placeholder={props.placeholder}
      variant={props.variant}
      className={styles.input}
      autoComplete={"off"}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default InputField;
