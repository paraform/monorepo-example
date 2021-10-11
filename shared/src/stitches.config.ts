import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      hiContrast: "$black",
      loContrast: "$white",
    },
  },
  media: {
    bp1: "(max-width: 600px)",
  },
  utils: {},
});

export const lightTheme = createTheme("light", {
  colors: {
    ...config.theme.colors,
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    hiContrast: "$white",
    loContrast: "$black",
  },
});

export const globalStyles = globalCss({
  "html, body": {
    background: "$loContrast",
    color: "$hiContrast",
    padding: 0,
    margin: 0,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  "*": { boxSizing: "border-box" },
});

export type CSS = Stitches.CSS<typeof config>;
export type { Stitches };
