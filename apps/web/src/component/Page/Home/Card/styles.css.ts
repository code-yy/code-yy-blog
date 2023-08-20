import { style } from "@vanilla-extract/css";

export const paper = style({
  display: "flex",
  padding: "24px",
  borderRadius: "12px",
  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",

  "@media": {
    "screen and (max-width: 768px)": {
      padding: "24px 0",
      flexDirection: "row",
      borderBottom: `1px solid #111827`,
      boxShadow: "none",
      borderRadius: "0",
    },
  },
});

export const postCardEmoji = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  width: "90px",
  height: "90px",
  background: "gray",
  borderRadius: "12px",
  fontSize: "50px",

  "@media": {
    "screen and (max-width: 768px)": {
      width: "70px",
      height: "70px",
    },
  },
});

export const infoContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginTop: "0",
  marginLeft: "32px",

  "@media": {
    "screen and (max-width: 768px)": {
      width: "calc(100% - 70px)",
      marginLeft: "15px",
    },
  },
});

export const title = style({
  fontSize: "24px",
  margin: 0,

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "16.5px",
    },
  },
});

export const createdAt = style({
  margin: "0",
  fontSize: "14px",
});
