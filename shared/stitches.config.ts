import { createStitches } from "@stitches/react";

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
  theme: {},
  media: {
    bp1: "(max-width: 600px)",
  },
  utils: {},
});

export const globalStyles = globalCss({
  "html, body": {
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
