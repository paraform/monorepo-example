import { css } from "../../stitches.config";

export const container = css({
  minHeight: "100vh",
  padding: "0 0.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const main = css({
  padding: "5rem0",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const footer = css({
  width: "100%",
  height: "100px",
  borderTop: "1px solid #eaeaea",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& a": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
});

const centerText = { textAlign: "center" };

export const title = css({
  "& a": {
    color: "#0070f3",
    textDecoration: "none",
  },

  "&:hover, &:focus, &:active": {
    textDecoration: "underline",
  },

  margin: 0,
  lineHeight: 1.15,
  fontSize: "4rem",
  ...centerText,
  "@bp1": {
    paddingTop: "40px",
  },
});

export const description = css({
  ...centerText,
  lineHeight: 1.5,
  fontSize: "1.5rem",
});

export const code = css({
  background: "#fafafa",
  borderRadius: "5px",
  padding: "0.75rem",
  fontSize: "1.1rem",
  fontFamily:
    "Menlo, Monaco, LucidaConsole, LiberationMono, DejaVuSansMono, BitstreamVeraSansMono, CourierNew, monospace",
});

export const grid = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "800px",
  marginTop: "3rem",
  "@bp1": {
    width: "100%",
    flexDirection: "column",
  },
});

export const card = css({
  margin: "1rem",
  padding: "1.5rem",
  textAlign: "left",
  color: "inherit",
  textDecoration: "none",
  border: "1px solid #eaeaea",
  borderRadius: "10px",
  transition: "color 0.15s ease, border-color 0.15s ease",
  width: "45%",
  "&:hover, &:focus, &:active": {
    color: "#0070f3",
    borderColor: "#0070f3",
  },
  "& h2": {
    margin: "0 0 1rem 0",
    fontSize: "1.5rem",
  },
  "& p": {
    margin: 0,
    fontSize: "1.25rem",
    lineHeight: 1.5,
  },
  "@bp1": {
    width: "80%",
  },
});

export const logo = css({
  height: "1em",
  marginLeft: "0.5rem",
});
