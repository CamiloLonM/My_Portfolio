export const pxToRem = (px: number, baseFontSize = 16): string => {
  return `${px / baseFontSize}rem`;
};
