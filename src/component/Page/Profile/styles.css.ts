import { style } from "@vanilla-extract/css";

export const line = style({
  marginTop: "24px",
  borderBottom: "1px solid #111827",
});

export const ulStyle = style({
  fontSize: "18px",
  listStyle: "none",
  padding: "0",
});

export const resumeLinkContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
});

export const liStyle = style({
  display: "flex",
  alignItems: "center",
  padding: "5px 0",
});

export const circleStyle = style({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  background: "#000",
  marginRight: "10px",
});

export const link = style({
  textUnderlinePosition: "under",
  textDecorationLine: "underline",
  color: "#1D4ED8",
  marginLeft: "5px",
});
