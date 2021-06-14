import React from "react";
import TelegramIcon from "@material-ui/icons/Telegram";
import { TextField } from "@material-ui/core";

function InputField(props) {
  return (
    <TextField
      id={props.id}
      name={props.name}
      label={props.label}
      placeholder={props.placeholder}
    />
  );
}

export default InputField;
