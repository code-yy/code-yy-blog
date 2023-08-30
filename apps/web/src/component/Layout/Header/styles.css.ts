import { style } from "@vanilla-extract/css";

export const container = style({
  marginTop: "12px",
  backgroundColor: "#1c1c1c",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "0 10px",
    },
  },
});

export const wrapper = style({
  maxWidth: "1440px",
  margin: "0 auto",
  display: "flex",
  padding: "0 24px",
  height: "64px",
  alignItems: "center",
  justifyContent: "space-between",
});

export const title = style({
  fontSize: "16px",
  fontWeight: "bold",
  color: "#ffffff",
});

export const iconsContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const icon = style({
  display: "flex",
  alignItems: "center",
  padding: "8px",
});
