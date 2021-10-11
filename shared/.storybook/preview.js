import { globalStyles, darkTheme, lightTheme } from "../src/stitches.config";

globalStyles();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  themes: {
    default: "light",
    target: "html",
    list: [
      { name: "light", class: lightTheme.className, color: "#fff" },
      { name: "dark", class: darkTheme.className, color: "#000" },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      // order: ["Theme", ["Colors", "Spacing"], "Primatives"],
    },
  },
};
