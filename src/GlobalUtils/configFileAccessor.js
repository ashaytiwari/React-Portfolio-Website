import configData from "../config/config.json";

//Global constants for Snackbar Configuration
export const SnackbarVerticalPosition = configData.SNACKBAR.VERTICAL_POSITION;
export const SnackbarHorizontalPosition =
  configData.SNACKBAR.HORIZONTAL_POSITION;
export const SnackbarDuplicate = configData.SNACKBAR.PREVENT_DUPLICATE;
export const SnackbarAutohideDuration =
  configData.SNACKBAR.AUTOHIDE_DURATION_IN_MILI_SECOND;

// Global constants for EmailJs Configuration
export const EmailServcieId = configData.EMAILJS.SERVICE_ID;
export const EmailTemplateId = configData.EMAILJS.TEMPLATE_ID;
export const EmailUserId = configData.EMAILJS.USER_ID;
export const EmailServiceProvider = configData.EMAILJS.SERVICE_PROVIDER;
