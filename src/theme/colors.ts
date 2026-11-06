import tokens from "./tokens";

export const colors = {
  brand: {
    primary: tokens.color.brand.primary.$value,
  },
  red: {
    0: tokens.brand.red["0"].$value,
    50: tokens.brand.red["50"].$value,
    100: tokens.brand.red["100"].$value,
    200: tokens.brand.red["200"].$value,
  },
  blue: {
    0: tokens.brand.blue["0"].$value,
    50: tokens.brand.blue["50"].$value,
    100: tokens.brand.blue["100"].$value,
  },
  green: {
    0: tokens.brand.green["0"].$value,
    50: tokens.brand.green["50"].$value,
    100: tokens.brand.green["100"].$value,
    200: tokens.brand.green["200"].$value,
  },
  common: {
    black: tokens.common.black["100"].$value,
    white: tokens.common.white["100"].$value,
  },
  neutral: {
    gray: tokens.neutral.gray["100"].$value,
    light: "#FFFAF0",
    dark: "#3A3D3B",
  },
};
