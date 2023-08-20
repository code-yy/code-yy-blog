import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
  fontSize: "24px",
  marginTop: "40px",
  paddingBottom: "4px",
  fontWeight: 600,
});

export const borderBottom = styleVariants({
  need: { borderBottom: `1px solid #111827` },
  no: { borderBottom: "none" },
});

export const anchor = style({
  opacity: 0,
  marginLeft: "4px",
  cursor: "pointer",

  ":hover": {
    opacity: 1,
  },
});
