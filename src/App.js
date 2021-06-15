import "./App.css";
import React from "react";
import HomePage from "./container/HomePage/HomePage";
import { SnackbarProvider } from "notistack";
import { Slide, IconButton, makeStyles } from "@material-ui/core";
import {
  SnackbarAutohideDuration,
  SnackbarDuplicate,
  SnackbarHorizontalPosition,
  SnackbarVerticalPosition
} from "./GlobalUtils/configFileAccessor";
import { CloseOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  error: { backgroundColor: "#ff726f" }
});

function App() {
  const classes = useStyles();
  const notistackRef = React.createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: SnackbarVerticalPosition,
        horizontal: SnackbarHorizontalPosition
      }}
      preventDuplicate={SnackbarDuplicate}
      autoHideDuration={SnackbarAutohideDuration}
      TransitionComponent={Slide}
      ref={notistackRef}
      classes={{
        variantError: classes.error
      }}
      action={(key) => (
        <IconButton onClick={onClickDismiss(key)} className={"iconButton"}>
          <CloseOutlined className={"close"} />{" "}
        </IconButton>
      )}
    >
      <div className={"App"}>
        <HomePage />
      </div>
    </SnackbarProvider>
  );
}

export default App;
