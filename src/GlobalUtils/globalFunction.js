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
};
