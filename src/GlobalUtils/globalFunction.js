/**
 * function to find near by multiple of 3
 * @param {*} number
 * @returns near by multiple
 */
export const findMultipleOf3 = (number) => {
  //   console.log(number);
  if (number % 3 === 0) {
    return 0;
  } else {
    for (let i = number; i > 0; i--) {
      if (i % 3 === 0) {
        return i;
      }
    }
  }
}; // end of findMultipleOf3

/**
 * function to test email validation
 * @param {*} email
 * @returns true/false
 */
export const emailValidation = (email) => {
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return true;
  } else {
    return false;
  }
}; // end of emailValidation

/**
 * Function to reset the upcoming fields
 * @param  {...any} setState is coming as props
 */
export const resetForm = (...props) => {
  props.forEach((setState) => setState(""));
}; //end of resetForm
