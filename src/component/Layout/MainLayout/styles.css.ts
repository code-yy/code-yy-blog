import { style } from "@vanilla-extract/css";

export const root = style({
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
      padding: "0",
    },
  },
});

export const body = style({
  marginTop: "12px",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      marginBottom: "20px",
    },
  },
});

export const main = style({
  maxWidth: "900px",
  margin: "0 auto",
  paddingBottom: "16px 0 32px",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "0 16px",
    },
  },
});
