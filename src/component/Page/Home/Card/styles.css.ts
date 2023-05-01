import { style } from "@vanilla-extract/css";

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
