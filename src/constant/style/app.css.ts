import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  margin: 0,
  marginBottom: "8px",
});

globalStyle("a", {
  textDecoration: "inherit",
  color: "inherit",
});
