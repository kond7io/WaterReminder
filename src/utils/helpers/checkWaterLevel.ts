export const checkWaterLevel = (value: number) => {
  if (value >= 1 && value <= 2) {
    return 1;
  } else if (value >= 3 && value <= 4) {
    return 2;
  } else if (value >= 5 && value <= 6) {
    return 3;
  } else if (value >= 7 && value <= 8) {
    return 4;
  } else if (value >= 9) {
    return 5;
  } else {
    return 0;
  }
};
